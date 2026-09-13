(() => {
  "use strict";

  const state = {
    site: null,
    documents: new Map(),
    currentDocument: null,
    tocObserver: null,
    toastTimer: null,
  };

  const elements = {
    content: document.querySelector("#doc-content"),
    nav: document.querySelector("#docs-nav"),
    toc: document.querySelector("#article-toc"),
    search: document.querySelector("#global-search"),
    searchResults: document.querySelector("#search-results"),
    themeToggle: document.querySelector("#theme-toggle"),
    menuToggle: document.querySelector("#menu-toggle"),
    sidebarClose: document.querySelector("#sidebar-close"),
    backdrop: document.querySelector("#mobile-backdrop"),
    progress: document.querySelector("#reading-progress"),
    repositoryLink: document.querySelector("#repository-link"),
    toast: document.querySelector("#toast"),
  };

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-") || "section";
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("dc1-docs-theme", theme);
    elements.themeToggle.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
    );
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("dc1-docs-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setTheme(savedTheme || systemTheme);
  }

  function createNavLink(documentEntry) {
    const link = document.createElement("a");
    link.className = "nav-link";
    link.href = `?doc=${encodeURIComponent(documentEntry.id)}`;
    link.dataset.docId = documentEntry.id;
    link.textContent = documentEntry.title;
    link.title = documentEntry.title;
    return link;
  }

  function createNavSection(section, depth = 0) {
    const details = document.createElement("details");
    details.open = depth === 0;

    const summary = document.createElement("summary");
    summary.textContent = section.label;
    details.append(summary);

    if (section.items?.length) {
      const items = document.createElement("div");
      items.className = "nav-items";
      section.items.forEach((documentId) => {
        const documentEntry = state.documents.get(documentId);
        if (documentEntry) items.append(createNavLink(documentEntry));
      });
      details.append(items);
    }

    section.children?.forEach((child) => {
      details.append(createNavSection(child, depth + 1));
    });

    return details;
  }

  function renderNavigation() {
    elements.nav.replaceChildren();
    state.site.navigation.forEach((section) => {
      elements.nav.append(createNavSection(section));
    });
  }

  function setActiveNavigation(documentId) {
    elements.nav.querySelectorAll(".nav-link").forEach((link) => {
      const active = link.dataset.docId === documentId;
      link.classList.toggle("active", active);
      if (active) {
        link.setAttribute("aria-current", "page");
        let parent = link.parentElement;
        while (parent && parent !== elements.nav) {
          if (parent.tagName === "DETAILS") parent.open = true;
          parent = parent.parentElement;
        }
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function getDocumentIdFromLocation() {
    const id = new URL(window.location.href).searchParams.get("doc") || "overview";
    return state.documents.has(id) ? id : "overview";
  }

  function showLoading() {
    elements.content.innerHTML = `
      <div class="article-loading" aria-label="Loading documentation">
        <span></span><span></span><span></span><span></span>
      </div>`;
    elements.toc.replaceChildren();
  }

  function showError(error) {
    elements.content.innerHTML = `
      <div class="error-state">
        <h1>Unable to load this page</h1>
        <p>${escapeHtml(error.message)}</p>
        <p>Refresh the browser or return to the <a href="#overview" data-doc-id="overview">documentation overview</a>.</p>
      </div>`;
  }

  function decorateHeadings() {
    const usedIds = new Set();
    const headings = elements.content.querySelectorAll("h2, h3");

    headings.forEach((heading) => {
      const nestedAnchor = heading.querySelector("[id]");
      const baseId = heading.id || nestedAnchor?.id || slugify(heading.textContent);
      let id = baseId;
      let suffix = 2;
      while (usedIds.has(id)) id = `${baseId}-${suffix++}`;
      usedIds.add(id);
      heading.id = id;
      if (nestedAnchor && nestedAnchor !== heading) nestedAnchor.removeAttribute("id");

      const anchor = document.createElement("a");
      anchor.className = "heading-anchor";
      anchor.href = `#${id}`;
      anchor.setAttribute("aria-label", `Link to ${heading.textContent.trim()}`);
      anchor.textContent = "#";
      heading.append(anchor);
    });

    return [...headings];
  }

  function renderTableOfContents(headings) {
    elements.toc.replaceChildren();
    if (!headings.length) {
      const empty = document.createElement("span");
      empty.className = "toc-link";
      empty.textContent = "Overview";
      elements.toc.append(empty);
      return;
    }

    headings.forEach((heading) => {
      const link = document.createElement("a");
      link.className = "toc-link";
      link.href = `#${heading.id}`;
      link.dataset.level = heading.tagName.slice(1);
      link.textContent = heading.childNodes[0]?.textContent?.trim() || heading.textContent.trim();
      elements.toc.append(link);
    });

    state.tocObserver?.disconnect();
    state.tocObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        elements.toc.querySelectorAll(".toc-link").forEach((link) => {
          link.classList.toggle("active", link.hash === `#${visible.target.id}`);
        });
      },
      { rootMargin: "-18% 0px -72%", threshold: 0 },
    );
    headings.forEach((heading) => state.tocObserver.observe(heading));
  }

  function resolveDocumentAssets(documentEntry) {
    const documentUrl = new URL(documentEntry.path, window.location.href);

    elements.content.querySelectorAll("img[src]").forEach((image) => {
      const source = image.getAttribute("src");
      if (!source || /^(?:[a-z]+:|\/)/i.test(source)) return;
      image.src = new URL(source, documentUrl).href;
      image.loading = "lazy";
    });

    elements.content.querySelectorAll("a[href]").forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      if (link.dataset.docLink && state.documents.has(link.dataset.docLink)) {
        const routeUrl = new URL(window.location.href);
        if (link.dataset.docLink === "overview") {
          routeUrl.searchParams.delete("doc");
        } else {
          routeUrl.searchParams.set("doc", link.dataset.docLink);
        }
        routeUrl.hash = "";
        link.href = routeUrl.href;
        return;
      }

      if (href.startsWith("#")) {
        return;
      }

      if (/^(?:mailto:|tel:|javascript:)/i.test(href)) return;
      const resolved = new URL(href, documentUrl);
      link.href = resolved.href;

      const linkedDocument = [...state.documents.values()].find((candidate) => {
        const candidateUrl = new URL(candidate.path, window.location.href);
        return candidateUrl.pathname === resolved.pathname;
      });

      if (linkedDocument) {
        link.href = `#${linkedDocument.id}`;
        link.dataset.docId = linkedDocument.id;
      } else if (resolved.origin !== window.location.origin) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
    });
  }

  function wrapTables() {
    elements.content.querySelectorAll("table").forEach((table) => {
      if (table.parentElement?.classList.contains("table-shell")) return;
      const shell = document.createElement("div");
      shell.className = "table-shell";
      table.replaceWith(shell);
      shell.append(table);
    });
  }

  function copyIcon() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  }

  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function showToast(message) {
    window.clearTimeout(state.toastTimer);
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    state.toastTimer = window.setTimeout(() => {
      elements.toast.hidden = true;
    }, 1800);
  }

  function enhanceCodeBlocks() {
    elements.content.querySelectorAll("pre > code").forEach((code) => {
      const pre = code.parentElement;
      const languageClass = [...code.classList].find((name) => name.startsWith("language-"));
      const language = languageClass?.replace("language-", "") || "text";
      if (window.hljs) {
        if (!window.hljs.getLanguage(language) && language === "eos") {
          code.classList.remove(languageClass);
          code.classList.add("language-ini");
        }
        window.hljs.highlightElement(code);
      }

      const shell = document.createElement("div");
      shell.className = "code-shell";
      const toolbar = document.createElement("div");
      toolbar.className = "code-toolbar";
      toolbar.innerHTML = `<span>${escapeHtml(language)}</span>`;

      const button = document.createElement("button");
      button.className = "copy-code";
      button.type = "button";
      button.innerHTML = `${copyIcon()}<span>Copy</span>`;
      button.addEventListener("click", async () => {
        await copyText(code.innerText);
        button.querySelector("span").textContent = "Copied";
        showToast("Code copied to clipboard");
        window.setTimeout(() => {
          button.querySelector("span").textContent = "Copy";
        }, 1600);
      });

      toolbar.append(button);
      pre.replaceWith(shell);
      shell.append(toolbar, pre);
    });
  }

  async function renderDocument(documentId, updateHistory = true) {
    const documentEntry = state.documents.get(documentId) || state.documents.get("overview");
    if (!documentEntry || state.currentDocument?.id === documentEntry.id) return;

    state.currentDocument = documentEntry;
    showLoading();
    setActiveNavigation(documentEntry.id);
    closeSidebar();

    if (updateHistory) {
      const nextUrl = new URL(window.location.href);
      if (documentEntry.id === "overview") {
        nextUrl.searchParams.delete("doc");
      } else {
        nextUrl.searchParams.set("doc", documentEntry.id);
      }
      nextUrl.hash = "";
      history.pushState({ documentId: documentEntry.id }, "", nextUrl);
    }

    try {
      const response = await fetch(documentEntry.path, { cache: "no-cache" });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}.`);
      const markdown = await response.text();
      if (!window.marked || !window.DOMPurify) {
        throw new Error("The Markdown renderer could not be loaded.");
      }

      const rendered = window.marked.parse(markdown, { gfm: true });
      elements.content.innerHTML = window.DOMPurify.sanitize(rendered, {
        ADD_ATTR: ["align", "target"],
      });

      resolveDocumentAssets(documentEntry);
      wrapTables();
      enhanceCodeBlocks();
      const headings = decorateHeadings();
      renderTableOfContents(headings);
      document.title = `${documentEntry.title} · ${state.site.project}`;
      window.scrollTo({ top: 0, behavior: "auto" });
      updateReadingProgress();
    } catch (error) {
      showError(error);
    }
  }

  function navigateTo(documentId) {
    if (!state.documents.has(documentId)) return;
    if (state.currentDocument?.id === documentId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    renderDocument(documentId, true);
  }

  function renderSearchResults(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      elements.searchResults.hidden = true;
      elements.search.setAttribute("aria-expanded", "false");
      return;
    }

    const matches = [...state.documents.values()]
      .filter((documentEntry) => {
        const haystack = `${documentEntry.title} ${documentEntry.group} ${documentEntry.description || ""}`.toLowerCase();
        return haystack.includes(normalized);
      })
      .slice(0, 9);

    elements.searchResults.innerHTML = matches.length
      ? matches.map((documentEntry) => `
          <button class="search-result" type="button" role="option" data-search-doc="${escapeHtml(documentEntry.id)}">
            <span><strong>${escapeHtml(documentEntry.title)}</strong><small>${escapeHtml(documentEntry.group)}</small></span>
            <small>Open →</small>
          </button>`).join("")
      : `<div class="search-empty">No matching documentation pages</div>`;
    elements.searchResults.hidden = false;
    elements.search.setAttribute("aria-expanded", "true");
  }

  function openSidebar() {
    document.body.classList.add("sidebar-open");
    elements.menuToggle.setAttribute("aria-expanded", "true");
    elements.backdrop.hidden = false;
  }

  function closeSidebar() {
    document.body.classList.remove("sidebar-open");
    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.backdrop.hidden = true;
  }

  function updateReadingProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    elements.progress.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  function bindEvents() {
    elements.themeToggle.addEventListener("click", () => {
      setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
    elements.menuToggle.addEventListener("click", openSidebar);
    elements.sidebarClose.addEventListener("click", closeSidebar);
    elements.backdrop.addEventListener("click", closeSidebar);

    elements.search.addEventListener("input", (event) => renderSearchResults(event.target.value));
    elements.search.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        elements.search.value = "";
        renderSearchResults("");
        elements.search.blur();
      }
      if (event.key === "Enter") {
        const firstResult = elements.searchResults.querySelector("[data-search-doc]");
        if (firstResult) firstResult.click();
      }
    });

    document.addEventListener("click", (event) => {
      const searchResult = event.target.closest("[data-search-doc]");
      if (searchResult) {
        navigateTo(searchResult.dataset.searchDoc);
        elements.search.value = "";
        renderSearchResults("");
        return;
      }

      const documentLink = event.target.closest("[data-doc-id], [data-doc-link]");
      if (documentLink) {
        event.preventDefault();
        navigateTo(documentLink.dataset.docId || documentLink.dataset.docLink);
        return;
      }

      if (!event.target.closest(".search-shell")) renderSearchResults("");
    });

    document.addEventListener("keydown", (event) => {
      const shortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (shortcut || (event.key === "/" && !/input|textarea/i.test(document.activeElement.tagName))) {
        event.preventDefault();
        elements.search.focus();
      }
      if (event.key === "Escape") closeSidebar();
    });

    window.addEventListener("popstate", () => renderDocument(getDocumentIdFromLocation(), false));
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 880) closeSidebar();
      updateReadingProgress();
    });
  }

  async function initialize() {
    initializeTheme();
    bindEvents();

    try {
      const response = await fetch("assets/data/site.json", { cache: "no-cache" });
      if (!response.ok) throw new Error(`Site metadata failed with status ${response.status}.`);
      state.site = await response.json();
      state.site.documents.forEach((documentEntry) => {
        state.documents.set(documentEntry.id, documentEntry);
      });
      elements.repositoryLink.href = state.site.repository_url;
      renderNavigation();
      await renderDocument(getDocumentIdFromLocation(), false);
    } catch (error) {
      showError(error);
    }
  }

  initialize();
})();
