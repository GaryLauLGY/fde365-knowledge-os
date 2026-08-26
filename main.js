var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// defuddle.js
var require_defuddle = __commonJS({
  "defuddle.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "object" == typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports2 ? exports2.Defuddle = e() : t.Defuddle = e();
    })(Object("undefined" != typeof self ? self : exports2), (() => (() => {
      "use strict";
      var t = { 2640(t2, e2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.TW_ARBITRARY_RE = e2.TW_SPECIAL_CLASS_RE = e2.TW_COLOR_CLASS_RE = e2.TAILWIND_SPECIAL = e2.TAILWIND_COLORS = e2.ALLOWED_ATTRIBUTES_DEBUG = e2.ALLOWED_ATTRIBUTES = e2.ALLOWED_EMPTY_ELEMENTS = e2.FOOTNOTE_LIST_SELECTORS = e2.FOOTNOTE_INLINE_REFERENCES = e2.TEST_ATTRIBUTES_SELECTOR = e2.PARTIAL_SELECTORS_ANCHORED_REGEX = e2.PARTIAL_SELECTORS_REGEX = e2.PARTIAL_SELECTORS = e2.TEST_ATTRIBUTES = e2.EXACT_SELECTORS_JOINED = e2.EXACT_SELECTORS = e2.HIDDEN_EXACT_SKIP_SELECTOR = e2.HIDDEN_EXACT_SELECTOR = e2.CONTENT_ELEMENT_SELECTOR = e2.INLINE_ELEMENTS = e2.PRESERVE_ELEMENTS = e2.BLOCK_LEVEL_ELEMENTS = e2.BLOCK_ELEMENTS_SET = e2.BLOCK_ELEMENTS_SELECTOR = e2.BLOCK_ELEMENTS = e2.MOBILE_WIDTH = e2.ENTRY_POINT_ELEMENTS = void 0, e2.ENTRY_POINT_ELEMENTS = ["#post", ".post-content", ".post-body", ".article-content", "#article-content", ".js-article-content", ".article_post", ".article-wrapper", ".entry-content", ".content-article", ".instapaper_body", ".post", ".markdown-body", "article", '[role="article"]', "main", '[role="main"]', ".article-body", "#content", "body"], e2.MOBILE_WIDTH = 600, e2.BLOCK_ELEMENTS = ["div", "section", "article", "main", "aside", "header", "footer", "nav", "content"], e2.BLOCK_ELEMENTS_SELECTOR = e2.BLOCK_ELEMENTS.join(","), e2.BLOCK_ELEMENTS_SET = new Set(e2.BLOCK_ELEMENTS), e2.BLOCK_LEVEL_ELEMENTS = /* @__PURE__ */ new Set([...e2.BLOCK_ELEMENTS, "p", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "dl", "dt", "dd", "pre", "blockquote", "figure", "figcaption", "table", "thead", "tbody", "tfoot", "tr", "td", "th", "details", "summary", "address", "hr", "form", "fieldset"]), e2.PRESERVE_ELEMENTS = /* @__PURE__ */ new Set(["pre", "code", "table", "thead", "tbody", "tr", "td", "th", "ul", "ol", "li", "dl", "dt", "dd", "figure", "figcaption", "picture", "details", "summary", "blockquote", "form", "fieldset"]), e2.INLINE_ELEMENTS = /* @__PURE__ */ new Set(["a", "span", "strong", "em", "i", "b", "u", "code", "br", "small", "sub", "sup", "mark", "date", "del", "ins", "q", "abbr", "cite", "relative-time", "time", "font"]), e2.CONTENT_ELEMENT_SELECTOR = ["math", "[data-mathml]", ".katex", ".katex-mathml", ".katex-display", ".MathJax", ".MathJax_Display", ".MathJax_SVG", "mjx-container", "pre", "code", "table", "img", "picture", "video", "blockquote", "figure"].join(", ");
        const r2 = ["[hidden]", '[aria-hidden="true"]', ".hidden", ".invisible"], n2 = r2.map(((t3) => '[aria-hidden="true"]' === t3 ? '[aria-hidden="true"]:not([class*="math"]):not(svg):not([class*="paywall"])' : t3));
        e2.HIDDEN_EXACT_SELECTOR = n2.join(","), e2.HIDDEN_EXACT_SKIP_SELECTOR = r2.join(","), e2.EXACT_SELECTORS = ["noscript", 'script:not([type^="math/"])', "style", "meta", "link", "audio:not([src]):not(:has(source))", "video:not([src]):not(:has(source))", ".jwplayer", '.ad:not([class*="gradient"])', '[class^="ad-" i]', '[class$="-ad" i]', "[data-ad-wrapper]", '[id^="ad-" i]', '[id$="-ad" i]', '[role="banner" i]', '[alt*="advert" i]', ".promo", ".Promo", "#barrier-page", ".alert", '[rel="sponsored" i]', '[href*="source=promotion" i]', '[id="comments" i]', '[id="comment" i]', 'div[class*="cover-"]', 'div[id*="cover-"]', "ads-breadcrumbs", "header:not(:has(p + p)):not(:has(img))", 'header[class~="fixed"]', 'header[class~="sticky"]', ".header:not(.banner)", "#header", "#Header", "#banner", "#Banner", "nav", ".navigation", "#navigation", '[role="navigation" i]', '[role="dialog" i]', '[role="alertdialog" i]', '[role*="complementary" i]', '[class*="pagination" i]', ".menu", "#siteSub", ".previous", ".author", ".Author", '[class$="_bio"]', "#categories", ".contributor", ".date", "#date", "[data-date]", ".entry-meta", ".meta", ".tags", "#tags", '[rel="tag"]', ".headline", "#headline", "#title", "#Title", "#articleTag", '[href*="/author/"]', '[href*="/author?"]', '[href$="/author"]', 'a[href*="copyright.com"]', 'a[href*="google.com/preferences"]', '[href="#top"]', '[href="#Top"]', '[href="#page-header"]', '[href="#content"]', '[href="#site-content"]', '[href="#main-content"]', '[href^="#main"]', '[src*="author"]', ".toc", ".Toc", "#toc", '[href*="#toc"]', "footer", ".aside", 'aside:not([class*="callout"])', "button", "canvas", "date", "dialog", "fieldset", "form", 'input:not([type="checkbox"])', 'input[type="checkbox"][class*="sidebar" i]', 'input[type="checkbox"][id*="sidebar" i]', 'input[type="checkbox"][class*="drawer" i]', 'input[type="checkbox"][id*="drawer" i]', 'input[type="checkbox"][class*="hamburger" i]', 'input[type="checkbox"][id*="hamburger" i]', 'input[type="checkbox"][class*="toggle" i]', 'input[type="checkbox"][id*="toggle" i]', 'input[type="checkbox"][class*="trigger" i]', 'input[type="checkbox"][id*="trigger" i]', "label", "option", "select", '[role="listbox"]', '[role="option"]', "textarea", ...n2, "instaread-player", "iframe:not([src])", 'iframe[src*="blink.net"]', 'iframe[src*="giscus.app"]', 'iframe[src*="tinypass.com"]', 'iframe[src*="trinitymedia.ai"]', '[class="logo" i]', "#logo", "#Logo", "#newsletter", "#Newsletter", ".subscribe", '[data-component-name="ButtonCreateButton"]', '[data-component-name="DigestPostEmbed"]', '[data-component-name="SubscribeWidgetToDOM"]', '[class*="digestPostEmbed"]', ".noprint", '[data-print-layout="hide" i]', '[data-block="donotprint" i]', '[class*="clickable-icon" i]', 'li span[class*="ltx_tag" i][class*="ltx_tag_item" i]', 'a[href^="#"][class*="anchor" i]', 'a[href^="#"][class*="ref" i]:not(.ltx_ref):not(.footnote-backref)', '[data-container*="most-viewed" i]', ".sidebar", ".Sidebar", "#sidebar", "#Sidebar", "#side-bar", "#secondary", "#sitesub", '[href*="/sitemap/sitemap.xml"]', '[data-link-name*="skip" i]', '[aria-label*="skip" i]', '[title^="Share on" i]', '[aria-label="Dismiss" i]', '[aria-label="Close" i]', "svg[data-icon]", '[data-testid="load-more-posts"] + div', ".copyright", "#copyright", ".licensebox", "#page-info", "#rss", "#feed", ".gutter", "#primaryaudio", "#NYT_ABOVE_MAIN_CONTENT_REGION", '[data-testid="photoviewer-children-figure"] > span', "table.infobox", '[data-optimizely="related-articles-section" i]', '[data-orientation="vertical"]', ".gh-header-sticky", '[data-testid="issue-metadata-sticky"]'], e2.EXACT_SELECTORS_JOINED = e2.EXACT_SELECTORS.join(","), e2.TEST_ATTRIBUTES = ["class", "id", "data-component", "data-test", "data-testid", "data-test-id", "data-qa", "data-cy"], e2.PARTIAL_SELECTORS = ["a-statement", "(?<!main-)access-wall", "activitypub", "actioncall", "addcomment", "addtoany", "advert", "adlayout", "ad-tldr", "ad-placement", "adplacehold", "ads-container", "_ad_", "AdBlock_", "AdUnit", "after_content", "after_main_article", "afterpost", "allterms", "-alert-", "alert-box", "_archive", "around-the-web", "aroundpages", "article-author", "article-badges", "article-banner", "article-bottom-section", "article-bottom", "article-category", "article-card", "article-citation", "article-continues", "article__copy", "article_date", "article-date", "article-end ", "article_header", "article-header", "article__header", "article__hero", "article__info", "article-info", "article-meta", "article_meta", "article__meta", "articlename", "article-subject", "article_subject", "article-snippet", "article-separator", "article--share", "article-share", "article--topics", "article-tools", "articletags", "article-tags", "article_tags", "articletitle", "article-title", "article_title", "articletopics", "article-topics", "article-actions", "article--lede", "articlewell", "associated-people", "ambient-video__button", "audio-card", "beyondwords", "about-author", "author-bio", "author-box", "author-info", "author_info", "authorm", "author-mini-bio", "author-name", "author-publish-info", "authored-by", "avatar", "back-to-top", "backlink_container", "backlinks-section", "bio-block", "biobox", "blog-pager", "bookmark-", "-bookmark", "bottominfo", "bottomnav", "bottom-of-article", "bottom-wrapper", "brand-bar", "bcrumb", "breadcrumb", "brdcrumb", "crumbs", "bubblewrapper", "button-wrapper", "buttons-container", "btn-", "-btn", "byline", "captcha", "card-text", "card-media", "card-post", "carouselcontainer", "carousel-container", "cat_header", "cat-overlay", "catlinks", "_categories", "card-author", "card-content", "chapter-list", "collections", "comments", "-comment\\b", "commentbox", "comment-button", "commentcomp", "comment-content", "comment-count", "comment-form", "comment-number", "comment-respond", "comment-thread", "comment-wrap", "complementary", "consent", "contact-", "contactus", "cookie.law", "content-card", "copycontent", "copy-tooltip", "content-topics", "contentpromo", "context-bar", "context-widget", "core-collateral", "cover-image", "cover-photo", "cover-wrap", "created-date", "creative-commons_", "c-subscribe", "_cta", "-cta", "cta-", "cta_", "current-issue", "custom-list-number", "dateline", "dateheader", "date-header", "date-pub", "disclaimer", "disclosure", "discussion", "discuss_", "-dismiss", "disqus", "donate", "donation", "dropdown", "editorial_contact", "editorial-contact", "element-invisible", "elementor-shortcode", "eletters", "emailsignup", "emoji-bar", "engagement-widget", "enhancement-", "entry-author-info", "entry-categories", "entry-date", "entry-title", "entry-utility", "-error", "error-", "eyebrow", "expand-reduce", "external-anchor", "externallinkembedwrapper", "extra-services", "extra-title", "facebook", "fancy-box", "favorite", "featured-content", "feature_feed", "feedback", "feed-links", "field-site-sections", "filed", "fixheader", "floating-vid", "follower", "footer", "footnote-back", "footnoteback", "form-group", "for-you", "frontmatter", "further-reading", "fullbleedheader", "gallery-count", "gated-popup", "gh-feed", "gist-meta", "goog-", "graph-view", "hamburger", "hawk-", "header-pattern", "hero[_\\-a-z]", "hide-for-print", "hide-print", "hide-when-no-script", "hidden-print", "hidden-sidenote", "hidden-accessibility", "home-link", "icon-sidebar", "inarticle-ad", "infoline", "inline-topic", "instacartIntegration", "interlude", "interaction", "itemendrow", "intro-date", "invisible", "jp-no-solution", "jp-relatedposts", "jswarning", "js-warning", "jumplink", "jumpto", "jump-to-", "js-skip-to-content", "keepreading", "keep-reading", "keep_reading", "keyword_wrap", "kicker", "labstab", "-labels", "language-name", "lastupdated", "latest-content", "-ledes-", "-license", "license-", "lightbox-popup", "like-button", "link-box", "links-grid", "links-title", "listing-dynamic-terms", "list-tags", "live-blog-header-live-label", "listinks", "loading", "loa-info", "logo", "ltx_role_refnum", "ltx_tag_bibitem", "ltx_error", "masthead", "marketing", "media-inquiry", "-menu", "menu-", "metadata", "meta-bottom", "meta-date", "meta-row", "might-like", "minibio", "more-about", "mod-paywall", "_modal", "-modal", "more-", "morenews", "morestories", "more_wrapper", "most-read", "move-helper", "mw-editsection", "mw-cite-backlink", "mw-indicators", "mw-jump-link", "nav-", "nav_", "navigation-post", "next-", "next_prev", "no-script", "newsgallery", "news-story-title", "newsletter_", "newsletterbanner", "newslettercontainer", "newsletter-form", "newsletter-signup", "newslettersignup", "newsletterwidget", "newsletterwrapper", "not-found", "notessection", "nomobile", "noprint", "onward-journey", "open-slideshow", "originally-published", "osano-cm", "other-blogs", "outline-view", "pagefoot", "pagehead", "page-header", "page-title", "paywall_message", "-partners", "permission-", "plea", "popular", "popup_links", "pop_stories", "pop-up", "post__author", "post-author", "post-bottom", "post__category", "postcomment", "postdate", "post-date", "post_date", "post-details", "post-feeds", "postinfo", "post-info", "post_info", "post-inline-date", "post-links", "postlist", "post_list", "post_meta", "post-meta", "postmeta", "post_more", "postnavi", "post-navigation", "postpath", "post-preview", "postsnippet", "post_snippet", "post-snippet", "post-subject", "posttax", "post-tax", "post_tax", "posttag", "post-tag", "post_time", "posttitle", "post-title", "post_title", "post__title", "post-ufi-button", "prev-post", "prevnext", "prev_next", "prev-next", "previousnext", "press-inquiries", "print-none", "print-header", "print:hidden", "privacy-notice", "privacy-settings", "profile", "promo_article", "promo-bar", "promo-box", "pubdate", "pub_date", "pub-date", "publish_date", "publish-date", "publication-date", "publicationName", "qr-code", "qr_code", "quick_up", "_rail", "ratingssection", "read_also", "readmore", "read-next", "read_next", "read_time", "read-time", "reading_time", "reading-time", "reading-list", "recent-", "recent-articles", "recentpost", "recent_post", "recent-post", "recommend", "redirectedfrom", "recirc", "register", "(?<!h[1-6]-)related", "relevant", "relposts", "reversefootnote", "rightcol", "\\bnocontent\\b", "_rss", "rss-link", "rubricwrapper", "screen-reader-text", "scroll_to", "scroll-to", "_search", "-search", "section-nav", "series-banner", "share-box", "sharedaddy", "share-icons", "sharelinks", "share-links", "share-post", "share-print", "share-section", "share-text", "sharing_", "shariff-", "shortcode-id", "show-for-print", "sidebartitle", "sidebar-content", "sidebar-wrapper", "sideitems", "sidebar-author", "sidebar-item", "side-box", "sign-in-gate", "similar-", "similar_", "similars-", "site-index", "site-header", "siteheader", "site-name", "site-wordpress", "skip-content", "skip-to-content", "skip-link", "c-skip-link", "_skip-link", "-slider", "slug-wrap", "social-author", "social-button", "social-shar", "social-date", "speechify-ignore", "speedbump", "sponsor", "springercitation", "sr-only", "_stats", "sticky-social", "story-date", "story-navigation", "storyreadtime", "storysmall", "storypublishdate", "subject-label", "submenu", "-subscribe-", "subscriber-drive", "subscription-", "_tags", "tags__item", "tag_list", "tag-list", "tag-module", "takeaways", "taxonomy", "table-of-contents", "tblc", "tabs-", "terminaltout", "time-rubric", "timestamp", "time-read", "time-to-read", "tip_off", "-ticker", "tiptout", "-tout-", "toc-container", "toggle-caption", "tooltip-content", "topbar", "subnavbar", "topic-authors", "topic-footer", "topic-list", "topic-subnav", "top-wrapper", "tree-item", "trending", "trust-feat", "trust-badge", "trust-project", "chakra-badge", "twiblock", "u-hide", "upsell", "vid_carousel", "viewbottom", "view-language", "yarpp-related", "visually-hidden", "welcomebox", "widget_pages", "window__widget", "w-form-done", "w-form-fail"], e2.PARTIAL_SELECTORS_REGEX = new RegExp(e2.PARTIAL_SELECTORS.join("|"), "i"), e2.PARTIAL_SELECTORS_ANCHORED_REGEX = new RegExp("^(?:" + e2.PARTIAL_SELECTORS.join("|") + ")$", "i"), e2.TEST_ATTRIBUTES_SELECTOR = e2.TEST_ATTRIBUTES.map(((t3) => `[${t3}]`)).join(","), e2.FOOTNOTE_INLINE_REFERENCES = ["sup.reference", "cite.ltx_cite", 'sup[id^="fnr"]', 'span[id^="fnr"]', 'span[class*="footnote_ref"]', 'span[class*="footnote-ref"]', "span.footnote-link", "a.citation", 'a[id^="ref-link"]', 'a[href^="#fn"]', 'a[href^="#cite"]', 'a[href^="#reference"]', 'a[href^="#footnote"]', 'a[href^="#r"]', 'a[href^="#b"]', 'a[href*="cite_note"]', 'a[href*="cite_ref"]', "a.footnote-anchor", "span.footnote-hovercard-target a", 'a[role="doc-biblioref"]', 'a[id^="fnref"]', 'a[id^="ref-link"]', "sup.footnoteref", "sup.footnote-reference", 'sup[data-fn] > a[href^="#"]', 'sup[id^="ftnt_ref"] a[href^="#ftnt"]', 'span.easy-footnote > a[href^="#easy-footnote-bottom-"]', 'a.footnote[href^="#"]', 'a[data-type="noteref"]'].join(","), e2.FOOTNOTE_LIST_SELECTORS = ["div.footnote ol", "div.footnotes ol", 'div[role="doc-endnotes"]', 'div[role="doc-footnotes"]', "ol.footnotes-list", "ol.footnotes", "ol.references", 'ol[class*="article-references"]', "section.footnotes ol", 'section[role="doc-endnotes"]', 'section[role="doc-footnotes"]', 'section[role="doc-bibliography"]', "ul.footnotes-list", "ul.ltx_biblist", 'div.footnote[data-component-name="FootnoteToDOM"]', "div.footnotes-footer", "div.footnote-definitions", "div.footnote-definition", "ol.wp-block-footnotes", "ol.easy-footnotes-wrapper", "div.footnotes-segment", "#footnotes"].join(","), e2.ALLOWED_EMPTY_ELEMENTS = /* @__PURE__ */ new Set(["area", "audio", "base", "br", "circle", "col", "defs", "ellipse", "embed", "figure", "g", "hr", "iframe", "img", "input", "line", "link", "mask", "meta", "object", "param", "path", "pattern", "picture", "polygon", "polyline", "rect", "source", "stop", "svg", "td", "th", "track", "use", "video", "wbr"]), e2.ALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["alt", "allow", "allowfullscreen", "aria-label", "checked", "colspan", "controls", "data-latex", "data-src", "data-srcset", "data-callout", "data-callout-fold", "data-callout-title", "data-lang", "dir", "display", "frameborder", "headers", "height", "href", "kind", "label", "lang", "role", "rowspan", "sandbox", "src", "srclang", "srcset", "start", "title", "type", "width", "accent", "accentunder", "align", "columnalign", "columnlines", "columnspacing", "columnspan", "data-mjx-texclass", "depth", "displaystyle", "fence", "frame", "framespacing", "linethickness", "lspace", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "scriptlevel", "separator", "stretchy", "symmetric", "voffset", "xmlns"]), e2.ALLOWED_ATTRIBUTES_DEBUG = /* @__PURE__ */ new Set(["class", "id"]), e2.TAILWIND_COLORS = { slate: { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a", 950: "#020617" }, gray: { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827", 950: "#030712" }, zinc: { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b", 950: "#09090b" }, neutral: { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717", 950: "#0a0a0a" }, stone: { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917", 950: "#0c0a09" }, red: { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d", 950: "#450a0a" }, orange: { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12", 950: "#431407" }, amber: { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f", 950: "#451a03" }, yellow: { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12", 950: "#422006" }, lime: { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314", 950: "#1a2e05" }, green: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d", 950: "#052e16" }, emerald: { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b", 950: "#022c22" }, teal: { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a", 950: "#042f2e" }, cyan: { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63", 950: "#083344" }, sky: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e", 950: "#082f49" }, blue: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" }, indigo: { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81", 950: "#1e1b4b" }, violet: { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95", 950: "#2e1065" }, purple: { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87", 950: "#3b0764" }, fuchsia: { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75", 950: "#4a044e" }, pink: { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843", 950: "#500724" }, rose: { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337", 950: "#4c0519" } }, e2.TAILWIND_SPECIAL = { black: "#000", white: "#fff", transparent: "transparent", current: "currentColor" }, e2.TW_COLOR_CLASS_RE = /^(fill|stroke)-([a-z]+)-(\d{2,3})(?:\/(\d+))?$/, e2.TW_SPECIAL_CLASS_RE = /^(fill|stroke)-(black|white|transparent|current)$/, e2.TW_ARBITRARY_RE = /^text-\[(.+)\]$/;
      }, 4467(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.findContentStart = function t3(e3, r3) {
          const o2 = (function(t4, e4) {
            const r4 = (0, n2.normalizeText)(e4);
            if (!r4) return null;
            const o3 = t4.querySelectorAll("h1, h2");
            for (const t5 of o3) if ((0, n2.normalizeText)(t5.textContent || "") === r4) return t5;
            return null;
          })(e3, r3) || null, i2 = e3.ownerDocument.createTreeWalker(e3, 1);
          o2 && (i2.currentNode = o2);
          let s2 = null, a2 = null, l2 = i2.nextNode();
          for (; l2; ) {
            const t4 = l2;
            if (h(t4)) {
              if (c.has(t4.tagName)) {
                s2 = t4;
                break;
              }
              a2 || (a2 = t4);
            }
            l2 = i2.nextNode();
          }
          if (s2) return s2;
          if (a2) {
            let t4 = a2;
            for (; ; ) {
              let e4 = null, r4 = false;
              for (const n3 of t4.children) if (h(n3)) {
                if (e4) {
                  r4 = true;
                  break;
                }
                e4 = n3;
              }
              if (!e4 || r4) break;
              t4 = e4;
            }
            return t4;
          }
          return o2 ? t3(e3, "") : null;
        }, e2.isAboveContentStart = function(t3, e3) {
          if (!e3) return false;
          if (t3 === e3) return false;
          const r3 = t3.compareDocumentPosition(e3);
          return !(1 & r3) && !!(4 & r3);
        };
        const n2 = r2(2552), o = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}|\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*|\d{4}[-/]\d{1,2}[-/]\d{1,2})/i, i = /^by\s+\S/i, s = /[.!?]/, a = /\b(?:isHidden(?:-[A-Za-z0-9_]+)?|is-hidden)\b/, l = /* @__PURE__ */ new Set(["P", "DIV", "SECTION", "ARTICLE", "BLOCKQUOTE", "FONT"]), c = /* @__PURE__ */ new Set(["P", "BLOCKQUOTE", "FONT"]), u = '[role="dialog"], [role="alertdialog"]', d = `aside, nav, header, footer, form, ${u}`;
        function h(t3) {
          if (!t3.tagName) return false;
          if (!l.has(t3.tagName)) return false;
          if (t3.closest(d)) return false;
          const e3 = "string" == typeof t3.className ? t3.className : "";
          if (a.test(e3)) return false;
          if (t3.querySelector(u)) return false;
          if (t3.querySelector("script, style")) return false;
          const r3 = (t3.textContent || "").trim();
          if (!r3) return false;
          const c2 = (0, n2.countWords)(r3);
          return !(c2 < 7) && (!!s.test(r3) && (!(i.test(r3) && c2 < 15) && (!(o.test(r3) && c2 < 20) && (!((function(t4) {
            let e4 = 0;
            for (const r4 of t4.querySelectorAll("a")) e4 += (r4.textContent || "").length;
            return e4;
          })(t3) > 0.7 * r3.length) && !("DIV" === t3.tagName && !t3.querySelector("p"))))));
        }
      }, 5628(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l2(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l2(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l2(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l2((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.Defuddle = void 0;
        const o = r2(1608), i = r2(1917), s = r2(2640), a = r2(4840), l = r2(3610), c = r2(7726), u = r2(3550), d = r2(2408), h = r2(8983), m = r2(7393), f = r2(3172), p = r2(662), g = r2(2552), v = r2(639), y = /* @__PURE__ */ new Set(["title", "author", "published", "site", "description", "image", "language"]), b = /[:\[\]()#>~+,]/;
        class x {
          constructor(t3, e3 = {}) {
            this._schemaOrgData = void 0, this._schemaOrgExtracted = false, this._inExtractorPipelineRun = false, this.doc = t3, this.options = e3, this.debug = e3.debug || false;
          }
          getSchemaOrgData() {
            return this._schemaOrgExtracted || (this._schemaOrgData = this._extractSchemaOrgData(this.doc), this._schemaOrgExtracted = true), this._schemaOrgData;
          }
          parse() {
            this.doc.body && (this._normalizeAttributes(this.doc.body), this._resolveNoscriptImages(this.doc.body));
            let t3 = this.parseInternal();
            if (t3.wordCount < 200) {
              this._log("Initial parse returned very little content, trying again");
              const e4 = this.parseInternal({ removePartialSelectors: false });
              e4.wordCount > 2 * t3.wordCount && (this._log("Retry produced more content"), t3 = e4);
            }
            if (t3.wordCount < 50) {
              this._log("Still very little content, retrying without hidden-element removal");
              const e4 = this.parseInternal({ removeHiddenElements: false });
              e4.wordCount > 2 * t3.wordCount && (this._log("Hidden-element retry produced more content"), t3 = e4);
              const r3 = this.findLargestHiddenContentSelector();
              if (r3) {
                this._log("Retrying with hidden content selector:", r3);
                const e5 = this.parseInternal({ removeHiddenElements: false, removePartialSelectors: false, contentSelector: r3 });
                (e5.wordCount > t3.wordCount || e5.wordCount > Math.max(20, 0.7 * t3.wordCount) && e5.content.length < t3.content.length) && (this._log("Hidden-selector retry produced better focused content"), t3 = e5);
              }
            }
            if (t3.wordCount < 50) {
              this._log("Still very little content, retrying without scoring/partial selectors (possible index page)");
              const e4 = this.parseInternal({ removeLowScoring: false, removePartialSelectors: false, removeContentPatterns: false });
              e4.wordCount > t3.wordCount && (this._log("Index page retry produced more content"), t3 = e4);
            }
            const e3 = this._getSchemaText(t3.schemaOrgData);
            if (e3 && this.countHtmlWords(e3) > 1.5 * t3.wordCount) {
              const r3 = this.doc, n3 = r3.cloneNode(true);
              this._stripUnsafeElements(n3.body), this.doc = n3;
              try {
                const r4 = this._findElementBySchemaText(this.doc.body, e3);
                if (r4) {
                  const e4 = this.getElementSelector(r4);
                  this._log("Schema.org suggests a better content element, retrying with selector:", e4);
                  t3 = this.parseInternal({ contentSelector: e4 });
                } else this._log("Using schema.org text as content (DOM element not found)"), t3.content = e3, t3.wordCount = this.countHtmlWords(e3);
              } finally {
                this.doc = r3;
              }
            }
            return t3;
          }
          _getSchemaText(t3, e3 = 0) {
            if (!t3 || e3 > 10) return "";
            const r3 = Array.isArray(t3) ? t3 : [t3];
            for (const t4 of r3) if (Array.isArray(t4)) {
              const r4 = this._getSchemaText(t4, e3 + 1);
              if (r4) return r4;
            } else {
              if ((null == t4 ? void 0 : t4.text) && "string" == typeof t4.text) return t4.text;
              if ((null == t4 ? void 0 : t4.articleBody) && "string" == typeof t4.articleBody) return t4.articleBody;
              if ((null == t4 ? void 0 : t4["@graph"]) && Array.isArray(t4["@graph"])) {
                const r4 = this._getSchemaText(t4["@graph"], e3 + 1);
                if (r4) return r4;
              }
            }
            return "";
          }
          _serializeFallbackBody() {
            if (!this.doc.body) return "";
            const t3 = this.doc.body.cloneNode(true);
            return this._stripUnsafeElements(t3), this.resolveContentUrls((0, v.serializeHTML)(t3));
          }
          _stripUnsafeElements(t3) {
            if (!t3) return;
            const e3 = t3.querySelectorAll('script:not([type^="math/"]), style, noscript, frame, frameset, object, embed, applet, base');
            for (const t4 of e3) t4.remove();
            const r3 = [t3, ...Array.from(t3.querySelectorAll("*"))];
            for (const t4 of r3) for (const e4 of Array.from(t4.attributes)) {
              const r4 = e4.name.toLowerCase();
              if (r4.startsWith("on")) t4.removeAttribute(e4.name);
              else if ("srcdoc" === r4) t4.removeAttribute(e4.name);
              else if (["href", "src", "action", "formaction", "xlink:href"].includes(r4)) {
                const n3 = !("src" === r4 && "IFRAME" === t4.tagName);
                (0, v.isDangerousUrl)(e4.value, n3) && t4.removeAttribute(e4.name);
              }
            }
          }
          _deduplicateImages(t3) {
            for (const e4 of t3.querySelectorAll("figure")) {
              const t4 = Array.from(e4.querySelectorAll("img")).filter(((t5) => !t5.closest("noscript") && t5.parentElement));
              if (t4.length < 2) continue;
              const r3 = /* @__PURE__ */ new Map();
              for (const e5 of t4) {
                const t5 = e5.getAttribute("src") || "";
                if (!t5 || t5.startsWith("data:")) continue;
                const n3 = (e5.getAttribute("alt") || "").trim() || null, o2 = r3.get(n3) || [];
                o2.push(e5), r3.set(n3, o2);
              }
              for (const [t5, e5] of r3) e5.length < 2 || null !== t5 && e5.every(((t6) => t6.getAttribute("src") === e5[0].getAttribute("src"))) || this._keepBestImage(e5);
            }
            const e3 = Array.from(t3.querySelectorAll("img"));
            for (let t4 = 0; t4 < e3.length - 1; t4++) {
              const r3 = e3[t4];
              if (!r3.parentElement) continue;
              if (r3.closest("noscript") || r3.closest("figure")) continue;
              const n3 = (r3.getAttribute("alt") || "").trim();
              if (!n3) continue;
              const o2 = r3.getAttribute("src") || "";
              if (!o2 || o2.startsWith("data:")) continue;
              const i2 = e3[t4 + 1];
              if (!i2.parentElement) continue;
              if (i2.closest("noscript") || i2.closest("figure")) continue;
              if ((i2.getAttribute("alt") || "").trim() !== n3) continue;
              const s2 = i2.getAttribute("src") || "";
              s2 && !s2.startsWith("data:") && (s2 !== o2 && this._noVisibleContentBetween(r3, i2) && this._keepBestImage([r3, i2]));
            }
            for (const e4 of Array.from(t3.querySelectorAll("img"))) {
              if (!e4.parentElement) continue;
              if (e4.closest("a, figure, noscript")) continue;
              const t4 = e4.getAttribute("src") || "";
              if (!t4 || t4.startsWith("data:")) continue;
              const r3 = e4.parentElement, n3 = this._normalizeSrc(t4);
              for (const t5 of r3.querySelectorAll(":scope > a[href]")) {
                if (!t5.querySelector("img")) continue;
                const r4 = t5.getAttribute("href") || "";
                if (n3 === this._normalizeSrc(r4)) {
                  e4.remove();
                  break;
                }
              }
            }
          }
          _keepBestImage(t3) {
            let e3 = t3[0];
            for (let r3 = 1; r3 < t3.length; r3++) {
              const n3 = this._pickBestImage(e3, t3[r3]);
              (n3 === e3 ? t3[r3] : e3).remove(), e3 = n3;
            }
          }
          _noVisibleContentBetween(t3, e3) {
            const r3 = (t4) => {
              if (!t4) return null;
              if (t4.firstChild) return t4.firstChild;
              let e4 = t4;
              for (; e4; ) {
                if (e4.nextSibling) return e4.nextSibling;
                e4 = e4.parentNode;
              }
              return null;
            };
            for (let n3 = r3(t3); n3 && n3 !== e3; n3 = r3(n3)) if (3 === n3.nodeType && (n3.textContent || "").trim()) return false;
            return true;
          }
          _normalizeSrc(t3) {
            return t3.replace(/^https?:\/\//, "").split("?")[0];
          }
          _removeCoverImage(t3, e3) {
            if (!e3) return;
            const r3 = this._normalizeSrc(e3);
            for (const e4 of t3.querySelectorAll("img")) {
              const t4 = e4.getAttribute("src") || "";
              if (!t4 || t4.startsWith("data:")) continue;
              if (this._normalizeSrc(t4) !== r3) continue;
              const n3 = this._getLargestImageSrc(e4), o2 = e4.closest("figure");
              return o2 && o2.querySelector("figcaption") || e4.remove(), n3;
            }
          }
          _pickBestImage(t3, e3) {
            const r3 = t3.getAttribute("srcset") ? 2 : t3.closest("picture") ? 1 : 0, n3 = e3.getAttribute("srcset") ? 2 : e3.closest("picture") ? 1 : 0;
            if (r3 !== n3) return r3 > n3 ? t3 : e3;
            const o2 = x._urlWidth(t3), i2 = x._urlWidth(e3);
            return o2 !== i2 ? o2 > i2 ? t3 : e3 : t3;
          }
          static _urlWidth(t3) {
            const e3 = (t3.getAttribute("src") || "").match(x._urlWidthPattern);
            return e3 ? parseInt(e3[1], 10) : 0;
          }
          _normalizeAttributes(t3) {
            const e3 = [["srcSet", "srcset"]], r3 = t3.querySelectorAll("img, source");
            for (const t4 of r3) for (const [r4, n3] of e3) {
              const e4 = t4.getAttribute(r4);
              null !== e4 && (t4.removeAttribute(r4), t4.setAttribute(n3, e4));
            }
          }
          _resolveNoscriptImages(t3) {
            const e3 = t3.querySelectorAll("noscript");
            for (const t4 of e3) {
              let e4 = t4.querySelector("img");
              if (!e4) {
                let r4 = t4.innerHTML || "";
                if (r4.includes("<img") || (r4 = t4.textContent || ""), !r4.includes("<img")) continue;
                e4 = (0, v.parseHTML)(this.doc, r4).querySelector("img");
              }
              if (!e4) continue;
              const r3 = e4.getAttribute("src") || "";
              if (!r3 || r3.startsWith("data:")) continue;
              const n3 = e4.getAttribute("alt"), o2 = t4.parentElement;
              if (!o2) continue;
              let i2 = false;
              const s2 = o2.querySelectorAll(":scope > img");
              for (const t5 of s2) {
                if (!(t5.getAttribute("src") || "").startsWith("data:")) continue;
                if (!n3 || t5.getAttribute("alt") !== n3) continue;
                t5.setAttribute("src", r3);
                const o3 = e4.getAttribute("srcset") || "";
                o3 && t5.setAttribute("srcset", o3), i2 = true;
                break;
              }
              if (!i2 && this._isLazyImageContext(t4)) {
                const r4 = (t4.closest("figure") || o2).querySelectorAll("img");
                let n4 = false;
                for (const t5 of r4) {
                  if (t5.closest("noscript")) continue;
                  const e5 = t5.getAttribute("src") || "";
                  if (e5 && !e5.startsWith("data:")) {
                    n4 = true;
                    break;
                  }
                }
                if (!n4) {
                  const r5 = e4.cloneNode(true);
                  o2.insertBefore(r5, t4);
                }
              }
            }
          }
          _isLazyImageContext(t3) {
            if (t3.closest("figure")) return true;
            const e3 = t3.parentElement;
            if (e3) {
              for (const r4 of e3.children) if (r4 !== t3 && (0, v.getClassName)(r4).toLowerCase().includes("lazy")) return true;
              const r3 = (0, v.getClassName)(e3).toLowerCase();
              if (r3.includes("image") || r3.includes("img") || r3.includes("picture") || r3.includes("photo") || r3.includes("media")) return true;
            }
            return false;
          }
          _findElementBySchemaText(t3, e3) {
            var r3;
            const n3 = ((null === (r3 = e3.split(/\n\s*\n/)[0]) || void 0 === r3 ? void 0 : r3.trim()) || "").substring(0, 100).trim();
            if (!n3) return null;
            const o2 = (0, g.countWords)(e3);
            let i2 = null, s2 = 1 / 0;
            const a2 = t3.querySelectorAll("*");
            for (const e4 of a2) {
              if (e4 === t3) continue;
              const r4 = e4.textContent || "";
              if (!r4.includes(n3)) continue;
              const a3 = (0, g.countWords)(r4);
              a3 >= 0.8 * o2 && a3 < s2 && (s2 = a3, i2 = e4);
            }
            return i2;
          }
          findLargestHiddenContentSelector() {
            const t3 = this.doc.body;
            if (!t3) return;
            const e3 = Array.from(t3.querySelectorAll(s.HIDDEN_EXACT_SKIP_SELECTOR)).filter(((t4) => !(t4.getAttribute("class") || "").includes("math")));
            let r3 = null, n3 = 0;
            for (const t4 of e3) {
              const e4 = (0, g.countWords)(t4.textContent || "");
              e4 > n3 && (r3 = t4, n3 = e4);
            }
            return !r3 || n3 < 30 ? void 0 : this.getElementSelector(r3);
          }
          _getLargestImageSrc(t3) {
            const e3 = t3.getAttribute("srcset") || "";
            if (!e3) return t3.getAttribute("src") || "";
            const r3 = /(.+?)\s+(\d+(?:\.\d+)?)w/g;
            let n3, o2 = "", i2 = 0, s2 = 0;
            for (; null !== (n3 = r3.exec(e3)); ) {
              let t4 = n3[1].trim();
              s2 > 0 && (t4 = t4.replace(/^,\s*/, "")), s2 = r3.lastIndex;
              const e4 = parseFloat(n3[2]);
              t4 && e4 > i2 && (i2 = e4, o2 = t4);
            }
            let a2 = o2 || t3.getAttribute("src") || "";
            return a2 = a2.replace(/,w_\d+/g, "").replace(/,c_\w+/g, ""), a2;
          }
          parseAsync() {
            return n2(this, void 0, void 0, (function* () {
              var t3;
              if (false !== this.options.useAsync) {
                const t4 = yield this.tryAsyncExtractor(i.ExtractorRegistry.findPreferredAsyncExtractor.bind(i.ExtractorRegistry));
                if (t4) return t4;
              }
              const e3 = this.parse();
              return e3.wordCount > 0 || false === this.options.useAsync ? e3 : null !== (t3 = yield this.tryAsyncExtractor(i.ExtractorRegistry.findAsyncExtractor.bind(i.ExtractorRegistry))) && void 0 !== t3 ? t3 : e3;
            }));
          }
          fetchAsyncVariables() {
            return n2(this, void 0, void 0, (function* () {
              var t3;
              if (false === this.options.useAsync) return null;
              try {
                const e3 = this.options.url || this.doc.URL, r3 = this.getSchemaOrgData(), n3 = { includeReplies: null !== (t3 = this.options.includeReplies) && void 0 !== t3 ? t3 : "extractors", language: this.options.language, fetch: this.options.fetch }, o2 = i.ExtractorRegistry.findPreferredAsyncExtractor(this.doc, e3, r3, n3);
                if (o2) {
                  const t4 = yield o2.extractAsync();
                  return this.getExtractorVariables(t4.variables) || null;
                }
              } catch (t4) {
                console.error("Defuddle", "Error fetching async variables:", t4);
              }
              return null;
            }));
          }
          tryAsyncExtractor(t3) {
            return n2(this, void 0, void 0, (function* () {
              var e3;
              try {
                const r3 = this.options.url || this.doc.URL, n3 = this.getSchemaOrgData(), i2 = { includeReplies: null !== (e3 = this.options.includeReplies) && void 0 !== e3 ? e3 : "extractors", language: this.options.language, fetch: this.options.fetch }, s2 = t3(this.doc, r3, n3, i2);
                if (s2) {
                  const t4 = Date.now(), e4 = yield s2.extractAsync(), r4 = this._collectMetaTags(), i3 = o.MetadataExtractor.extract(this.doc, n3, r4);
                  return this.buildExtractorResponse(e4, i3, t4, s2, r4);
                }
              } catch (t4) {
                console.error("Defuddle", "Error in async extraction:", t4);
              }
              return null;
            }));
          }
          parseInternal(t3 = {}) {
            var e3, r3, n3, s2, g2, v2, y2;
            const b2 = Date.now(), x2 = {}, C = null !== (e3 = this.options.profile) && void 0 !== e3 && e3, S = (t4, e4) => {
              if (!C) return e4();
              const r4 = performance.now(), n4 = e4();
              return x2[t4] = Math.round(performance.now() - r4), n4;
            };
            if (!this.doc.documentElement) {
              const t4 = this.options.url || "";
              return { content: "", title: "", description: "", domain: t4 ? new URL(t4).hostname : "", favicon: "", image: "", language: "", parseTime: Date.now() - b2, published: "", author: "", site: "", schemaOrgData: null, wordCount: 0 };
            }
            const E = Object.assign(Object.assign({ removeExactSelectors: true, removePartialSelectors: true, removeHiddenElements: true, removeLowScoring: true, removeSmallImages: true, removeContentPatterns: true, standardize: true, includeReplies: "extractors" }, this.options), t3), A = [], w = this.getSchemaOrgData();
            this._metaTags || (this._metaTags = this._collectMetaTags());
            const T = this._metaTags;
            this._metadata || (this._metadata = o.MetadataExtractor.extract(this.doc, w, T));
            const _ = this._metadata;
            E.removeImages && this.removeImages(this.doc);
            try {
              const t4 = E.url || this.doc.URL, e4 = { includeReplies: E.includeReplies, language: E.language, fetch: E.fetch };
              if (!this._inExtractorPipelineRun) {
                const o3 = i.ExtractorRegistry.findExtractor(this.doc, t4, w, e4);
                if (o3 && o3.canExtract()) {
                  const t5 = o3.extract();
                  if (t5.contentSelector) {
                    this._inExtractorPipelineRun = true;
                    try {
                      const e5 = this.parseInternal({ contentSelector: t5.contentSelector, removeLowScoring: false, removeHiddenElements: false }), i2 = this.getExtractorVariables(t5.variables);
                      return Object.assign(Object.assign(Object.assign({}, e5), { title: (null === (r3 = t5.variables) || void 0 === r3 ? void 0 : r3.title) || e5.title, description: (null === (n3 = t5.variables) || void 0 === n3 ? void 0 : n3.description) || e5.description, author: (null === (s2 = t5.variables) || void 0 === s2 ? void 0 : s2.author) || e5.author, published: (null === (g2 = t5.variables) || void 0 === g2 ? void 0 : g2.published) || e5.published, site: (null === (v2 = t5.variables) || void 0 === v2 ? void 0 : v2.site) || e5.site, language: (null === (y2 = t5.variables) || void 0 === y2 ? void 0 : y2.language) || e5.language, extractorType: o3.constructor.name.replace("Extractor", "").toLowerCase() }), i2 ? { variables: i2 } : {});
                    } finally {
                      this._inExtractorPipelineRun = false;
                    }
                  }
                  return this.buildExtractorResponse(t5, _, b2, o3, T);
                }
              }
              this._mobileStyles || (this._mobileStyles = this._evaluateMediaQueries(this.doc));
              const o2 = this._mobileStyles;
              this._smallImages || (this._smallImages = (0, d.findSmallImages)(this.doc, this.debug));
              const L = this._smallImages;
              let q;
              S("cloneDocument", (() => {
                var t5;
                q = this.doc.cloneNode(true), null === (t5 = q.body) || void 0 === t5 || t5.normalize();
              })), S("flattenShadowRoots", (() => this.flattenShadowRoots(this.doc, q))), S("resolveStreamedContent", (() => this.resolveStreamedContent(q))), S("applyMobileStyles", (() => this.applyMobileStyles(q, o2)));
              const N = S("findMainContent", (() => {
                let t5 = null;
                if (E.contentSelector && (t5 = q.querySelector(E.contentSelector), this._log("Using contentSelector:", E.contentSelector, t5 ? "found" : "not found")), t5 || (t5 = this.findMainContent(q)), t5) {
                  const e5 = t5.closest("[data-defuddle]");
                  e5 && (t5 = e5);
                }
                if (t5 && "body" === t5.tagName.toLowerCase()) {
                  const e5 = this._getSchemaText(w);
                  if (e5) {
                    const r4 = this._findElementBySchemaText(q.body, e5);
                    r4 && (this._log("Found content element via schema.org text"), t5 = r4);
                  }
                }
                return t5;
              }));
              if (!N) {
                const t5 = this._serializeFallbackBody(), e5 = Date.now();
                return Object.assign(Object.assign({ content: t5 }, _), { wordCount: this.countHtmlWords(t5), parseTime: Math.round(e5 - b2), metaTags: T });
              }
              S("removeMetadataBlock", (() => {
                (_.published || _.author) && (0, p.removeMetadataBlock)(N), N.querySelectorAll("wbr").forEach(((t5) => t5.remove()));
              })), S("adoptExternalFootnotes", (() => {
                E.standardize && this.adoptExternalFootnotes(N, q);
              })), S("standardizeFootnotesCallouts", (() => {
                E.standardize && ((0, l.standardizeFootnotes)(N), (0, c.standardizeCallouts)(N));
              })), S("removeSmallImages", (() => {
                E.removeSmallImages && (0, d.removeSmallImages)(q, L, this.debug);
              })), S("removeHiddenElements", (() => {
                E.removeHiddenElements && (0, h.removeHiddenElements)(q, this.debug, A);
              })), S("removeEyebrowLabel", (() => {
                E.removeContentPatterns && N && (0, f.removeEyebrowLabel)(N, this.debug, A);
              })), S("removeBySelector", (() => {
                (E.removeExactSelectors || E.removePartialSelectors) && (0, m.removeBySelector)(q, this.debug, E.removeExactSelectors, E.removePartialSelectors, N, A, false === E.removeHiddenElements);
              })), S("removeLowScoring", (() => {
                E.removeLowScoring && u.ContentScorer.scoreAndRemove(q, this.debug, A, N);
              })), S("removeByContentPattern", (() => {
                if (E.removeContentPatterns && N) {
                  const t5 = this.options.url || this.doc.URL || "";
                  (0, f.removeByContentPattern)(N, this.debug, t5, _.title || "", _.description || "", A);
                }
              })), S("standardizeContent", (() => {
                E.standardize && (0, a.standardizeContent)(N, _, this.doc, this.debug, C ? x2 : void 0);
              })), S("resolveRelativeUrls", (() => this.resolveRelativeUrls(N))), this._deduplicateImages(N);
              const k = this._removeCoverImage(N, _.image || "");
              k && (_.image = k), this._stripUnsafeElements(N);
              const $ = N.outerHTML, P = Date.now(), O = Object.assign(Object.assign({ content: $ }, _), { wordCount: this.countHtmlWords($), parseTime: Math.round(P - b2), metaTags: T });
              return this.debug && (O.debug = { contentSelector: this.getElementSelector(N), removals: A }), this.options.profile && (O.profile = x2), O;
            } catch (t4) {
              console.error("Defuddle", "Error processing document:", t4);
              const e4 = this._serializeFallbackBody(), r4 = Date.now();
              return Object.assign(Object.assign({ content: e4 }, _), { wordCount: this.countHtmlWords(e4), parseTime: Math.round(r4 - b2), metaTags: T });
            }
          }
          countHtmlWords(t3) {
            const e3 = t3.replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&quot;/gi, '"').replace(/&#\d+;/g, " ").replace(/&\w+;/g, " ");
            return (0, g.countWords)(e3);
          }
          _log(...t3) {
            this.debug && console.log("Defuddle:", ...t3);
          }
          _evaluateMediaQueries(t3) {
            const e3 = [], r3 = /max-width[^:]*:\s*(\d+)/;
            try {
              if (!t3.styleSheets) return e3;
              const n3 = Array.from(t3.styleSheets).filter(((t4) => {
                try {
                  return t4.cssRules, true;
                } catch (t5) {
                  return t5 instanceof DOMException && t5.name, false;
                }
              }));
              n3.flatMap(((t4) => {
                try {
                  return "undefined" == typeof CSSMediaRule ? [] : Array.from(t4.cssRules).filter(((t5) => t5 instanceof CSSMediaRule && t5.conditionText.includes("max-width")));
                } catch (t5) {
                  return this.debug && console.warn("Defuddle: Failed to process stylesheet:", t5), [];
                }
              })).forEach(((t4) => {
                const n4 = t4.conditionText.match(r3);
                if (n4) {
                  const r4 = parseInt(n4[1]);
                  if (s.MOBILE_WIDTH <= r4) {
                    Array.from(t4.cssRules).filter(((t5) => t5 instanceof CSSStyleRule)).forEach(((t5) => {
                      try {
                        e3.push({ selector: t5.selectorText, styles: t5.style.cssText });
                      } catch (t6) {
                        this.debug && console.warn("Defuddle: Failed to process CSS rule:", t6);
                      }
                    }));
                  }
                }
              }));
            } catch (t4) {
              console.error("Defuddle: Error evaluating media queries:", t4);
            }
            return e3;
          }
          applyMobileStyles(t3, e3) {
            e3.forEach((({ selector: e4, styles: r3 }) => {
              try {
                t3.querySelectorAll(e4).forEach(((t4) => {
                  t4.setAttribute("style", (t4.getAttribute("style") || "") + r3);
                }));
              } catch (t4) {
                console.error("Defuddle", "Error applying styles for selector:", e4, t4);
              }
            }));
          }
          removeImages(t3) {
            const e3 = t3.getElementsByTagName("img");
            Array.from(e3).forEach(((t4) => {
              t4.remove();
            }));
          }
          findMainContent(t3) {
            const e3 = [];
            if (s.ENTRY_POINT_ELEMENTS.forEach(((r4, n4) => {
              t3.querySelectorAll(r4).forEach(((t4) => {
                let r5 = 40 * (s.ENTRY_POINT_ELEMENTS.length - n4);
                r5 += u.ContentScorer.scoreElement(t4), e3.push({ element: t4, score: r5, selectorIndex: n4 });
              }));
            })), 0 === e3.length) return this.findContentByScoring(t3);
            if (e3.sort(((t4, e4) => e4.score - t4.score)), this.debug && this._log("Content candidates:", e3.map(((t4) => ({ element: t4.element.tagName, selector: this.getElementSelector(t4.element), score: t4.score })))), 1 === e3.length && "body" === e3[0].element.tagName.toLowerCase()) {
              const e4 = this.findTableBasedContent(t3);
              if (e4) return e4;
            }
            const r3 = e3[0];
            let n3 = r3;
            for (let t4 = 1; t4 < e3.length; t4++) {
              const o2 = e3[t4], i2 = (0, g.countWords)(o2.element.textContent || "");
              if (o2.selectorIndex < n3.selectorIndex && n3.element.contains(o2.element) && i2 > 50) {
                let t5 = 0;
                for (const n4 of e3) if (n4.selectorIndex === o2.selectorIndex && r3.element.contains(n4.element) && ++t5 > 1) break;
                if (t5 > 1) continue;
                n3 = o2;
              }
            }
            return n3 !== r3 ? n3.element : r3.element;
          }
          findTableBasedContent(t3) {
            const e3 = Array.from(t3.getElementsByTagName("table")).some(((t4) => {
              var e4;
              const r4 = parseInt(t4.getAttribute("width") || "0"), n4 = this.getComputedStyle(t4), o2 = (0, v.getClassName)(t4).toLowerCase();
              return r4 > 400 || (null === (e4 = null == n4 ? void 0 : n4.width) || void 0 === e4 ? void 0 : e4.includes("px")) && parseInt(n4.width) > 400 || "center" === t4.getAttribute("align") || o2.includes("content") || o2.includes("article") || Array.from(t4.getElementsByTagName("tr")).some(((t5) => {
                const e5 = Array.from(t5.children).filter(((t6) => "TD" === t6.tagName));
                return e5.length >= 2 && e5.some(((t6) => t6.getAttribute("width")));
              }));
            }));
            if (!e3) return null;
            const r3 = Array.from(t3.getElementsByTagName("td")), n3 = u.ContentScorer.findBestElement(r3);
            if (!n3) return null;
            return 2 * (0, g.countWords)(n3.textContent || "") < (0, g.countWords)((t3.body || t3.documentElement).textContent || "") ? null : n3;
          }
          findContentByScoring(t3) {
            const e3 = [];
            return t3.querySelectorAll(s.BLOCK_ELEMENTS_SELECTOR).forEach(((t4) => {
              const r3 = u.ContentScorer.scoreElement(t4);
              r3 > 0 && e3.push({ score: r3, element: t4 });
            })), e3.length > 0 ? e3.sort(((t4, e4) => e4.score - t4.score))[0].element : null;
          }
          getElementSelector(t3) {
            const e3 = [];
            let r3 = t3;
            for (; r3 && r3 !== this.doc.documentElement; ) {
              let t4 = r3.tagName.toLowerCase();
              if (r3.id) t4 += "#" + r3.id;
              else if ((0, v.getClassName)(r3)) {
                const e4 = (0, v.getClassName)(r3).trim().split(/\s+/).filter(((t5) => !b.test(t5)));
                e4.length && (t4 += "." + e4.join("."));
              }
              e3.unshift(t4), r3 = r3.parentElement;
            }
            return e3.join(" > ");
          }
          getComputedStyle(t3) {
            return (0, g.getComputedStyle)(t3);
          }
          adoptExternalFootnotes(t3, e3) {
            const r3 = e3.body || e3;
            r3 && t3 !== r3 && r3.querySelectorAll("div, section, aside").forEach(((e4) => {
              var r4;
              const n3 = (0, v.getClassName)(e4), o2 = e4.id || "";
              if (!/footnote/i.test(n3) && !/footnote/i.test(o2)) return;
              if (t3.contains(e4) || e4.contains(t3)) return;
              const i2 = e4.querySelector("h1, h2, h3, h4, h5, h6");
              i2 && l.FOOTNOTE_SECTION_RE.test((null === (r4 = i2.textContent) || void 0 === r4 ? void 0 : r4.trim()) || "") && t3.appendChild(e4);
            }));
          }
          resolveRelativeUrls(t3) {
            const e3 = this.options.url || this.doc.URL;
            if (!e3) return;
            let r3 = e3;
            const n3 = this.doc.querySelector("base[href]");
            if (n3) {
              const t4 = n3.getAttribute("href");
              if (t4) try {
                r3 = new URL(t4, e3).href;
              } catch (t5) {
              }
            }
            const o2 = (t4) => {
              const e4 = t4.trim().replace(/^\\?["']+/, "").replace(/\\?["']+$/, "");
              if (e4.startsWith("#")) return e4;
              try {
                return new URL(e4, r3).href;
              } catch (r4) {
                return e4 || t4;
              }
            };
            t3.querySelectorAll("[href]").forEach(((t4) => {
              const e4 = t4.getAttribute("href");
              e4 && t4.setAttribute("href", o2(e4));
            })), t3.querySelectorAll("[src]").forEach(((t4) => {
              const e4 = t4.getAttribute("src");
              e4 && t4.setAttribute("src", o2(e4));
            })), t3.querySelectorAll("[srcset]").forEach(((t4) => {
              const e4 = t4.getAttribute("srcset");
              if (e4) {
                const r4 = /(.+?)\s+(\d+(?:\.\d+)?[wx])/g, n4 = [];
                let i2, s2 = 0;
                for (; null !== (i2 = r4.exec(e4)); ) {
                  let t5 = i2[1].trim();
                  s2 > 0 && (t5 = t5.replace(/^,\s*/, "")), s2 = r4.lastIndex, n4.push(`${o2(t5)} ${i2[2]}`);
                }
                if (n4.length > 0) t4.setAttribute("srcset", n4.join(", "));
                else {
                  const r5 = e4.split(",").map(((t5) => {
                    const e5 = t5.trim().split(/\s+/);
                    return e5[0] && (e5[0] = o2(e5[0])), e5.join(" ");
                  })).join(", ");
                  t4.setAttribute("srcset", r5);
                }
              }
            })), t3.querySelectorAll("[poster]").forEach(((t4) => {
              const e4 = t4.getAttribute("poster");
              e4 && t4.setAttribute("poster", o2(e4));
            }));
          }
          flattenShadowRoots(t3, e3) {
            var r3, n3, o2;
            if (!t3.body || !e3.body) return;
            const i2 = Array.from(t3.body.querySelectorAll("*")), s2 = i2.find(((t4) => t4.shadowRoot));
            if (!s2) return;
            const a2 = Array.from(e3.body.querySelectorAll("*"));
            if ((null !== (o2 = null === (n3 = null === (r3 = s2.shadowRoot) || void 0 === r3 ? void 0 : r3.childNodes) || void 0 === n3 ? void 0 : n3.length) && void 0 !== o2 ? o2 : 0) > 0) for (let t4 = i2.length - 1; t4 >= 0; t4--) {
              const r4 = i2[t4];
              if (!r4.shadowRoot) continue;
              const n4 = a2[t4];
              if (!n4) continue;
              const o3 = r4.shadowRoot.innerHTML;
              o3.length > 0 && this.replaceShadowHost(n4, o3, e3);
            }
            else {
              const t4 = [];
              for (let e4 = 0; e4 < i2.length; e4++) {
                const r4 = i2[e4], n4 = r4.getAttribute("data-defuddle-shadow");
                if (!n4) continue;
                const o3 = a2[e4];
                o3 && (t4.push({ cloneEl: o3, html: n4 }), r4.removeAttribute("data-defuddle-shadow"), o3.removeAttribute("data-defuddle-shadow"));
              }
              for (const { cloneEl: r4, html: n4 } of t4) this.replaceShadowHost(r4, n4, e3);
            }
          }
          resolveStreamedContent(t3) {
            const e3 = t3.querySelectorAll("script"), r3 = [], n3 = /\$RC\("(B:\d+)","(S:\d+)"\)/g;
            for (const t4 of e3) {
              const e4 = t4.textContent || "";
              if (!e4.includes("$RC(")) continue;
              let o3;
              for (n3.lastIndex = 0; null !== (o3 = n3.exec(e4)); ) r3.push({ templateId: o3[1], contentId: o3[2] });
            }
            if (0 === r3.length) return;
            let o2 = 0;
            for (const { templateId: e4, contentId: n4 } of r3) {
              const r4 = t3.getElementById(e4), i2 = t3.getElementById(n4);
              if (!r4 || !i2) continue;
              const s2 = r4.parentNode;
              if (!s2) continue;
              let a2 = r4.nextSibling, l2 = false;
              for (; a2; ) {
                const t4 = a2.nextSibling;
                if (8 === a2.nodeType && "/$" === a2.data) {
                  a2.remove(), l2 = true;
                  break;
                }
                a2.remove(), a2 = t4;
              }
              if (l2) {
                for (; i2.firstChild; ) s2.insertBefore(i2.firstChild, r4);
                r4.remove(), i2.remove(), o2++;
              }
            }
            o2 > 0 && this._log("Resolved streamed content:", o2, "suspense boundaries");
          }
          replaceShadowHost(t3, e3, r3) {
            var n3;
            const o2 = (0, v.parseHTML)(r3, e3);
            if (t3.tagName.includes("-")) {
              const e4 = r3.createElement("div");
              e4.appendChild(o2), null === (n3 = t3.parentNode) || void 0 === n3 || n3.replaceChild(e4, t3);
            } else t3.textContent = "", t3.appendChild(o2);
          }
          resolveContentUrls(t3) {
            if (!(this.options.url || this.doc.URL)) return t3;
            const e3 = this.doc.createElement("div");
            return e3.appendChild((0, v.parseHTML)(this.doc, t3)), this.resolveRelativeUrls(e3), (0, v.serializeHTML)(e3);
          }
          _extractSchemaOrgData(t3) {
            const e3 = t3.querySelectorAll('script[type="application/ld+json"]'), r3 = [];
            e3.forEach(((t4) => {
              let e4 = t4.textContent || "";
              try {
                e4 = e4.replace(/\/\*[\s\S]*?\*\/|^\s*\/\/.*$/gm, "").replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1").replace(/^\s*(\*\/|\/\*)\s*|\s*(\*\/|\/\*)\s*$/g, "").trim();
                const t5 = JSON.parse(e4);
                t5["@graph"] && Array.isArray(t5["@graph"]) ? r3.push(...t5["@graph"]) : r3.push(t5);
              } catch (t5) {
                console.error("Defuddle: Error parsing schema.org data:", t5), this.debug && console.error("Defuddle: Problematic JSON content:", e4);
              }
            }));
            const n3 = (t4) => {
              if ("string" == typeof t4) return this._decodeHTMLEntities(t4);
              if (Array.isArray(t4)) return t4.map(n3);
              if ("object" == typeof t4 && null !== t4) {
                const e4 = {};
                for (const r4 in t4) Object.prototype.hasOwnProperty.call(t4, r4) && (e4[r4] = n3(t4[r4]));
                return e4;
              }
              return t4;
            };
            return r3.map(n3);
          }
          _collectMetaTags() {
            const t3 = [];
            return this.doc.querySelectorAll("meta").forEach(((e3) => {
              const r3 = e3.getAttribute("name"), n3 = e3.getAttribute("property");
              let o2 = e3.getAttribute("content");
              o2 && t3.push({ name: r3, property: n3, content: this._decodeHTMLEntities(o2) });
            })), t3;
          }
          _decodeHTMLEntities(t3) {
            return (0, v.decodeHTMLEntities)(this.doc, t3);
          }
          buildExtractorResponse(t3, e3, r3, n3, o2) {
            var i2, s2, a2, l2, c2, u2;
            const d2 = this._sanitizeExtractorHtml(t3.contentHtml), h2 = this.getExtractorVariables(t3.variables);
            return Object.assign({ content: d2, title: (null === (i2 = t3.variables) || void 0 === i2 ? void 0 : i2.title) || e3.title, description: (null === (s2 = t3.variables) || void 0 === s2 ? void 0 : s2.description) || e3.description, domain: e3.domain, favicon: e3.favicon, image: e3.image, language: (null === (a2 = t3.variables) || void 0 === a2 ? void 0 : a2.language) || e3.language, published: (null === (l2 = t3.variables) || void 0 === l2 ? void 0 : l2.published) || e3.published, author: (null === (c2 = t3.variables) || void 0 === c2 ? void 0 : c2.author) || e3.author, site: (null === (u2 = t3.variables) || void 0 === u2 ? void 0 : u2.site) || e3.site, schemaOrgData: e3.schemaOrgData, wordCount: this.countHtmlWords(d2), parseTime: Math.round(Date.now() - r3), extractorType: n3.constructor.name.replace("Extractor", "").toLowerCase(), metaTags: o2 }, h2 ? { variables: h2 } : {});
          }
          _sanitizeExtractorHtml(t3) {
            if (!t3) return t3;
            const e3 = this.doc.createElement("div");
            return e3.appendChild((0, v.parseHTML)(this.doc, t3)), this._stripUnsafeElements(e3), this.resolveRelativeUrls(e3), (0, v.serializeHTML)(e3);
          }
          getExtractorVariables(t3) {
            if (!t3) return;
            const e3 = {};
            let r3 = false;
            for (const [n3, o2] of Object.entries(t3)) y.has(n3) || (e3[n3] = o2, r3 = true);
            return r3 ? e3 : void 0;
          }
        }
        e2.Defuddle = x, x._urlWidthPattern = /(?:width[=:/]|[/,?&]w[_:=])(\d+)/;
      }, 7726(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.standardizeCallouts = function(t3) {
          var e3, r3;
          const n3 = t3.ownerDocument;
          if (!n3) return;
          const i = Array.from(t3.querySelectorAll(".callout.is-collapsed, .callout.is-collapsible"));
          for (const t4 of i) {
            const e4 = t4.classList.contains("is-collapsed");
            t4.classList.remove("is-collapsed", "is-collapsible"), t4.hasAttribute("data-callout-fold") || t4.setAttribute("data-callout-fold", e4 ? "-" : "+");
            const r4 = t4.querySelector(".callout-fold");
            r4 && r4.remove();
            const n4 = t4.querySelector(".callout-content");
            if (n4) {
              const t5 = n4.getAttribute("style");
              if (t5) {
                const e5 = t5.replace(/display\s*:\s*none\s*;?/gi, "").trim();
                e5 ? n4.setAttribute("style", e5) : n4.removeAttribute("style");
              }
            }
          }
          const s = Array.from(t3.querySelectorAll(".markdown-alert"));
          for (const t4 of s) {
            const e4 = Array.from(t4.classList).find(((t5) => t5.startsWith("markdown-alert-") && "markdown-alert" !== t5)), r4 = e4 ? e4.replace("markdown-alert-", "") : "note", i2 = r4.charAt(0).toUpperCase() + r4.slice(1), s2 = t4.querySelector(".markdown-alert-title");
            s2 && s2.remove(), t4.replaceWith(o(n3, r4, i2, t4));
          }
          const a = Array.from(t3.querySelectorAll('aside[class*="callout"]'));
          for (const t4 of a) {
            const e4 = Array.from(t4.classList).find(((t5) => t5.startsWith("callout-"))), r4 = e4 ? e4.replace("callout-", "") : "note", i2 = r4.charAt(0).toUpperCase() + r4.slice(1), s2 = t4.querySelector(".callout-content");
            t4.replaceWith(o(n3, r4, i2, s2 || t4));
          }
          const l = /* @__PURE__ */ new Set(["info", "warning", "note", "tip", "danger", "caution", "important", "abstract", "success", "question", "failure", "bug", "example", "quote"]), c = Array.from(t3.querySelectorAll(".admonition"));
          for (const t4 of c) {
            if (t4.getAttribute("data-callout")) continue;
            const r4 = Array.from(t4.classList).find(((t5) => l.has(t5))) || "note", i2 = t4.querySelector(".admonition-title"), s2 = (null === (e3 = null == i2 ? void 0 : i2.textContent) || void 0 === e3 ? void 0 : e3.trim()) || r4.charAt(0).toUpperCase() + r4.slice(1);
            i2 && i2.remove();
            const a2 = t4.querySelector(".admonition-content") || t4.querySelector(".details-content") || t4;
            t4.replaceWith(o(n3, r4, s2, a2));
          }
          const u = Array.from(t3.querySelectorAll('.alert[class*="alert-"]'));
          for (const t4 of u) {
            const e4 = Array.from(t4.classList).find(((t5) => t5.startsWith("alert-") && "alert-dismissible" !== t5)), i2 = e4 ? e4.replace("alert-", "") : "note", s2 = t4.querySelector(".alert-heading, .alert-title"), a2 = (null === (r3 = null == s2 ? void 0 : s2.textContent) || void 0 === r3 ? void 0 : r3.trim()) || i2.charAt(0).toUpperCase() + i2.slice(1);
            s2 && s2.remove(), t4.replaceWith(o(n3, i2, a2, t4));
          }
        };
        const n2 = r2(639);
        function o(t3, e3, r3, o2) {
          const i = t3.createElement("div");
          i.setAttribute("data-callout", e3), i.className = "callout";
          const s = t3.createElement("div");
          s.className = "callout-title";
          const a = t3.createElement("div");
          a.className = "callout-title-inner", a.textContent = r3, s.appendChild(a), i.appendChild(s);
          const l = t3.createElement("div");
          return l.className = "callout-content", (0, n2.transferContent)(o2, l), i.appendChild(l), i;
        }
      }, 754(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.codeBlockRules = void 0;
        const n2 = r2(2552), o = [/^language-(\w+)$/, /^lang-(\w+)$/, /^(\w+)-code$/, /^code-(\w+)$/, /^syntax-(\w+)$/, /^code-snippet__(\w+)$/, /^highlight-(\w+)$/, /^(\w+)-snippet$/, /(?:^|\s)(?:language|lang|brush|syntax)-(\w+)(?:\s|$)/i], i = /* @__PURE__ */ new Set(["abap", "actionscript", "ada", "adoc", "agda", "antlr4", "applescript", "arduino", "armasm", "asciidoc", "aspnet", "atom", "bash", "batch", "c", "clojure", "cmake", "cobol", "coffeescript", "cpp", "c++", "crystal", "csharp", "cs", "dart", "django", "dockerfile", "dotnet", "elixir", "elm", "erlang", "fortran", "fsharp", "gdscript", "gitignore", "glsl", "golang", "gradle", "graphql", "groovy", "haskell", "hs", "haxe", "hlsl", "html", "idris", "java", "javascript", "js", "jsx", "jsdoc", "json", "jsonp", "julia", "kotlin", "latex", "lean", "lean4", "lisp", "elisp", "livescript", "lua", "makefile", "markdown", "md", "markup", "masm", "mathml", "matlab", "mongodb", "mysql", "nasm", "nginx", "nim", "nix", "objc", "ocaml", "pascal", "perl", "php", "postgresql", "powershell", "prolog", "puppet", "python", "regex", "rss", "ruby", "rb", "rust", "scala", "scheme", "shell", "sh", "solidity", "sparql", "sql", "ssml", "svg", "swift", "tcl", "terraform", "tex", "toml", "typescript", "ts", "tsx", "unrealscript", "verilog", "vhdl", "webassembly", "wasm", "xml", "yaml", "yml", "zig"]);
        e2.codeBlockRules = [{ selector: ["pre", 'div[class*="prismjs"]', ".syntaxhighlighter", ".highlight", ".highlight-source", ".wp-block-syntaxhighlighter-code", ".wp-block-code", 'div[class*="language-"]', ".code-block[data-lang]", "code.hl.block"].join(", "), element: "pre", transform: (t3, e3) => {
          var r3;
          if (!((t4) => "classList" in t4 && "getAttribute" in t4 && "querySelector" in t4)(t3)) return t3;
          t3.querySelectorAll('button, [class*="codeblock-button"]').forEach(((t4) => t4.remove())), t3.querySelectorAll('[class*="header"], [class*="toolbar"], [class*="titlebar"], [class*="title-bar"]').forEach(((e4) => {
            var r4;
            const o2 = e4.tagName;
            if ("DIV" !== o2 && "SPAN" !== o2) return;
            const i2 = null === (r4 = e4.closest) || void 0 === r4 ? void 0 : r4.call(e4, "[data-line], .line");
            if (i2 && t3.contains(i2)) return;
            if (e4.querySelector("[data-line], .line, pre")) return;
            const s2 = (e4.textContent || "").trim();
            (0, n2.countWords)(s2) <= 5 && e4.remove();
          }));
          const s = (t4) => {
            var e4;
            const r4 = t4.getAttribute("data-lang") || t4.getAttribute("data-language") || t4.getAttribute("language");
            if (r4) return r4.toLowerCase();
            const n3 = Array.from(t4.classList || []);
            if (null === (e4 = t4.classList) || void 0 === e4 ? void 0 : e4.contains("syntaxhighlighter")) {
              const t5 = n3.find(((t6) => !["syntaxhighlighter", "nogutter"].includes(t6)));
              if (t5 && i.has(t5.toLowerCase())) return t5.toLowerCase();
            }
            for (const t5 of n3) for (const e5 of o) {
              const r5 = t5.toLowerCase().match(e5);
              if (r5 && r5[1] && i.has(r5[1].toLowerCase())) return r5[1].toLowerCase();
            }
            for (const t5 of n3) if (i.has(t5.toLowerCase())) return t5.toLowerCase();
            return "";
          };
          let a = "", l = t3;
          for (; l && !a; ) {
            if (a = s(l), !a && l === t3) {
              const t4 = l.querySelector('code[data-lang], code[class*="language-"]') || l.querySelector("code");
              t4 && (a = s(t4));
            }
            l = l.parentElement;
          }
          const c = t3.querySelector(".cm-content");
          if (c && !a) {
            const e4 = Array.from(t3.querySelectorAll("div"));
            for (const t4 of e4) {
              if (t4.contains(c)) continue;
              const e5 = (t4.textContent || "").trim().toLowerCase();
              if (e5 && i.has(e5)) {
                a = e5;
                break;
              }
            }
          }
          const u = (t4) => {
            var e4;
            if ((0, n2.isTextNode)(t4)) return (null === (e4 = t4.parentElement) || void 0 === e4 ? void 0 : e4.querySelector("[data-line], .line")) && !(t4.textContent || "").trim() ? "" : t4.textContent || "";
            let r4 = "";
            if ((0, n2.isElement)(t4)) {
              if (t4.matches(".hover-info, .hover-container")) return "";
              if ("BUTTON" === t4.tagName || "STYLE" === t4.tagName) return "";
              if ("BR" === t4.tagName) {
                const e5 = t4.previousElementSibling;
                return e5 && e5.matches('div[class*="line"], span[class*="line"], .ec-line, [data-line-number], [data-line]') ? "" : "\n";
              }
              if (t4.matches("span.lnt")) return "";
              if (t4.matches("span.lineno")) return "";
              if (t4.matches(".react-syntax-highlighter-line-number")) return "";
              if (t4.matches(".rouge-gutter")) return "";
              if (("DIV" === t4.tagName || "SPAN" === t4.tagName) && 2 === t4.children.length) {
                const e5 = (t4.children[0].textContent || "").trim();
                if (/^\d+$/.test(e5)) return u(t4.children[1]).replace(/\n$/, "") + "\n";
              }
              if (t4.matches('div[class*="line"], span[class*="line"], .ec-line, [data-line-number], [data-line]')) {
                const e5 = t4.querySelector('.code:not(.token), .content:not(.token), [class*="code-"], [class*="content-"]');
                if (e5) return (e5.textContent || "").replace(/\n$/, "") + "\n";
                const r5 = t4.querySelector('.line-number, .gutter, [class*="line-number"], [class*="gutter"]');
                if (r5) {
                  return Array.from(t4.childNodes).filter(((t5) => !r5.contains(t5))).map(((t5) => u(t5))).join("").replace(/\n$/, "") + "\n";
                }
                return (t4.textContent || "").replace(/\n$/, "") + "\n";
              }
              t4.childNodes.forEach(((t5) => {
                r4 += u(t5);
              }));
            }
            return r4;
          };
          let d = "";
          if (t3.matches(".syntaxhighlighter, .wp-block-syntaxhighlighter-code") && (d = ((t4) => {
            const e4 = t4.querySelector(".syntaxhighlighter table .code .container");
            if (e4) return Array.from(e4.children).map(((t5) => {
              const e5 = Array.from(t5.querySelectorAll("code")).map(((t6) => {
                var e6;
                let r5 = t6.textContent || "";
                return (null === (e6 = t6.classList) || void 0 === e6 ? void 0 : e6.contains("spaces")) && (r5 = " ".repeat(r5.length)), r5;
              })).join("");
              return e5 || t5.textContent || "";
            })).join("\n");
            const r4 = t4.querySelectorAll(".code .line");
            return r4.length > 0 ? Array.from(r4).map(((t5) => {
              const e5 = Array.from(t5.querySelectorAll("code")).map(((t6) => t6.textContent || "")).join("");
              return e5 || t5.textContent || "";
            })).join("\n") : "";
          })(t3)), !d && c) d = u(c);
          else if (!d) {
            let e4 = t3;
            if ("PRE" !== t3.tagName && "CODE" !== t3.tagName) {
              const r4 = Array.from(t3.querySelectorAll("pre")), n3 = r4.find(((t4) => t4.querySelector('code[data-lang], code[class*="language-"], .line, [data-line]'))) || r4.find(((t4) => t4.querySelector("span[class]") && !t4.classList.contains("lineno")));
              n3 && (e4 = n3);
            }
            d = u(e4);
          }
          if (t3.matches("code.hl.block")) d = d.replace(/^[ \t]+|[ \t]+$/g, "").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/^\n+/, "");
          else {
            d = d.replace(/\t/g, "    ").replace(/\u00a0/g, " ");
            const t4 = d.split("\n");
            let e4 = 1 / 0;
            for (const r4 of t4) {
              const t5 = r4.search(/\S/);
              t5 > -1 && (e4 = Math.min(e4, t5));
            }
            e4 === 1 / 0 && (e4 = 0), e4 > 0 && (d = t4.map(((t5) => t5.slice(e4))).join("\n")), d = d.replace(/^\s+|\s+$/g, "").replace(/\n{3,}/g, "\n\n").replace(/^\n+/, "").replace(/\n+$/, "");
          }
          let h = t3;
          for (let e4 = 0; e4 < 3 && h; e4++) {
            const e5 = h.parentElement;
            if (!e5 || "BODY" === e5.tagName) break;
            if (e5.children.length > 5) break;
            if (null === (r3 = e5.closest) || void 0 === r3 ? void 0 : r3.call(e5, "[data-callout]")) break;
            const o2 = Array.from(e5.children);
            for (const e6 of o2) {
              if (e6.contains(t3)) continue;
              const r4 = e6.tagName;
              if ("DIV" !== r4 && "SPAN" !== r4) continue;
              const o3 = (e6.textContent || "").trim();
              (0, n2.countWords)(o3) <= 5 && !e6.querySelector("pre, code, img, svg, table, h1, h2, h3, h4, h5, h6, p, blockquote, ul, ol, hr") && e6.remove();
            }
            h = e5;
          }
          const m = e3.createElement("pre");
          t3.matches("code.hl.block, pre.hl.lean.lean-output") && m.setAttribute("data-verso-code", "true");
          const f = e3.createElement("code");
          return a && (f.setAttribute("data-lang", a), f.setAttribute("class", `language-${a}`)), f.textContent = d, m.appendChild(f), m;
        } }];
      }, 3610(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.FOOTNOTE_SECTION_RE = void 0, e2.standardizeFootnotes = function(t3) {
          const e3 = t3.ownerDocument;
          if (!e3) return;
          new h(e3).standardizeFootnotes(t3);
        };
        const n2 = r2(2640), o = r2(639), i = r2(2552), s = r2(4840);
        e2.FOOTNOTE_SECTION_RE = /^(foot\s*notes?|end\s*notes?|notes?|references?)$/i;
        const a = /^[\^\u21A9\u21A5\u2191\u21B5\u2934\u2935\u23CE]+$/, l = /^#cite_ref-/, c = /^\[?\(?(\d{1,4})\)?\]?$/;
        function u(t3) {
          var e3;
          return (null === (e3 = ((null == t3 ? void 0 : t3.getAttribute("href")) || "").split("#").pop()) || void 0 === e3 ? void 0 : e3.toLowerCase()) || "";
        }
        const d = [{ selector: "sup.footnoteref", extract: (t3) => {
          var e3;
          const r3 = t3.querySelector('a[id^="footnoteref-"]');
          return (null === (e3 = null == r3 ? void 0 : r3.id.match(/^footnoteref-(\d+)$/)) || void 0 === e3 ? void 0 : e3[1]) || "";
        } }, { selector: 'a[id^="ref-link"]', extract: (t3) => {
          var e3;
          return (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
        } }, { selector: 'a[role="doc-biblioref"]', extract: (t3) => {
          const e3 = t3.getAttribute("data-xml-rid");
          if (e3) return e3;
          const r3 = t3.getAttribute("href") || "";
          return r3.startsWith("#core-R") ? r3.replace("#core-", "") : "";
        } }, { selector: "a.footnote-anchor, span.footnote-hovercard-target a", extract: (t3) => {
          var e3;
          return ((null === (e3 = t3.id) || void 0 === e3 ? void 0 : e3.replace("footnote-anchor-", "")) || "").toLowerCase();
        } }, { selector: "sup.reference", extract: (t3) => {
          let e3 = "";
          return t3.querySelectorAll("a").forEach(((t4) => {
            var r3;
            const n3 = null === (r3 = (t4.getAttribute("href") || "").split("/").pop()) || void 0 === r3 ? void 0 : r3.match(/(?:cite_note|cite_ref)-(.+)/);
            n3 && (e3 = n3[1].toLowerCase());
          })), e3;
        } }, { selector: 'sup[id^="fnref:"], span[id^="fnref:"]', extract: (t3) => t3.id.replace("fnref:", "").toLowerCase() }, { selector: 'sup[id^="fnr"]', extract: (t3) => t3.id.replace("fnr", "").toLowerCase() }, { selector: "sup.footnote-reference", extract: (t3) => u(t3.querySelector('a[href^="#"]')) }, { selector: "span.footnote-reference", extract: (t3) => {
          var e3;
          const r3 = t3.getAttribute("data-footnote-id") || "";
          return r3 || ((null === (e3 = t3.id) || void 0 === e3 ? void 0 : e3.startsWith("fnref")) ? t3.id.replace("fnref", "").toLowerCase() : "");
        } }, { selector: "span.footnote-link", extract: (t3) => t3.getAttribute("data-footnote-id") || "" }, { selector: "a.citation", extract: (t3) => {
          var e3;
          return (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
        } }, { selector: 'a[id^="fnref"]', extract: (t3) => t3.id.replace("fnref", "").toLowerCase() }, { selector: 'a[data-type="noteref"]', extract: (t3) => u(t3) }];
        class h {
          constructor(t3) {
            this.pendingRemovals = [], this.doc = t3;
          }
          makeRefId(t3, e3) {
            return e3 > 0 ? `fnref:${t3}-${e3 + 1}` : `fnref:${t3}`;
          }
          mergeFootnotes(t3, e3) {
            for (const [r3, n3] of Object.entries(e3)) {
              const e4 = parseInt(r3);
              t3[e4] || (t3[e4] = n3);
            }
          }
          addFootnote(t3, e3, r3, n3) {
            if (!e3 || t3.processedIds.has(e3)) return false;
            const o2 = null != n3 ? n3 : t3.count;
            return t3.footnotes[o2] = { content: r3, originalId: e3, refs: [] }, t3.processedIds.add(e3), void 0 === n3 ? t3.count++ : n3 >= t3.count && (t3.count = n3 + 1), true;
          }
          createFootnoteItem(t3, e3, r3) {
            const i2 = "string" == typeof e3 ? this.doc : e3.ownerDocument, s2 = i2.createElement("li");
            if (s2.className = "footnote", s2.id = `fn:${t3}`, "string" == typeof e3) {
              const t4 = i2.createElement("p");
              t4.appendChild((0, o.parseHTML)(i2, e3)), s2.appendChild(t4);
            } else {
              const t4 = Array.from(e3.children), r4 = t4.some(((t5) => "p" === t5.tagName.toLowerCase())), a3 = t4.some(((t5) => n2.BLOCK_LEVEL_ELEMENTS.has(t5.tagName.toLowerCase())));
              if (r4 || a3) !r4 && a3 ? t4.forEach(((t5) => {
                if (this.isBackrefLink(t5)) return;
                const e4 = t5.cloneNode(true);
                this.removeBackrefs(e4), s2.appendChild(e4);
              })) : t4.forEach(((t5) => {
                var e4;
                if (!this.isBackrefLink(t5)) if ("p" === t5.tagName.toLowerCase()) {
                  if (!(null === (e4 = t5.textContent) || void 0 === e4 ? void 0 : e4.trim()) && !t5.querySelector("img, br")) return;
                  const r5 = i2.createElement("p");
                  (0, o.transferContent)(t5, r5), this.removeBackrefs(r5), s2.appendChild(r5);
                } else {
                  const e5 = t5.cloneNode(true);
                  this.removeBackrefs(e5), s2.appendChild(e5);
                }
              }));
              else {
                const t5 = i2.createElement("p");
                (0, o.transferContent)(e3, t5), this.removeBackrefs(t5), s2.appendChild(t5);
              }
            }
            const a2 = s2.querySelector("p:last-of-type") || s2;
            return r3.forEach(((t4, e4) => {
              const n3 = i2.createElement("a");
              n3.href = `#${t4}`, n3.title = "return to article", n3.className = "footnote-backref", n3.textContent = "↩", e4 < r3.length - 1 && (n3.textContent += " "), a2.appendChild(n3);
            })), s2;
          }
          collectFootnotes(t3) {
            const e3 = { footnotes: {}, processedIds: /* @__PURE__ */ new Set(), count: 1 };
            t3.querySelectorAll(n2.FOOTNOTE_LIST_SELECTORS).forEach(((r4) => {
              var n3, i2;
              if (r4.matches("div.footnotes-footer")) {
                return void r4.querySelectorAll("div.footnote-footer").forEach(((r5) => {
                  const n4 = (r5.id || "").match(/^footnote-(\d+)$/);
                  if (!n4) return;
                  const i3 = n4[1];
                  if (e3.processedIds.has(i3)) return;
                  const s2 = r5.cloneNode(true), a2 = s2.querySelector("a");
                  a2 && a2.remove();
                  const l2 = (0, o.serializeHTML)(s2).replace(/^\s*\.\s*/, ""), c2 = t3.ownerDocument.createElement("div");
                  c2.appendChild((0, o.parseHTML)(t3.ownerDocument, l2.trim())), this.addFootnote(e3, i3, c2);
                }));
              }
              if (r4.matches("div.footnote-definition") && !(null === (n3 = r4.parentElement) || void 0 === n3 ? void 0 : n3.matches("div.footnote-definitions"))) {
                const t4 = (r4.id || "").toLowerCase(), n4 = r4.cloneNode(true), o2 = n4.querySelector("sup.footnote-definition-label");
                return o2 && o2.remove(), void this.addFootnote(e3, t4, n4);
              }
              if (r4.matches("div.footnote-definitions")) {
                r4.querySelectorAll("div.footnote-definition").forEach(((t4) => {
                  const r5 = t4.querySelector("sup[id]"), n5 = t4.querySelector(".footnote-body");
                  r5 && n5 && this.addFootnote(e3, (r5.id || "").toLowerCase(), n5.cloneNode(true));
                }));
                const n4 = r4.parentElement;
                return void (n4 && n4 !== t3 && (null === (i2 = n4.classList) || void 0 === i2 ? void 0 : i2.contains("footnotes")) && this.pendingRemovals.push(n4));
              }
              if (r4.matches("ol.easy-footnotes-wrapper")) {
                return r4.querySelectorAll("li.easy-footnote-single").forEach(((t4) => {
                  var r5, n4;
                  const o2 = t4.querySelector('span[id^="easy-footnote-bottom-"]');
                  if (!o2) return;
                  const i3 = t4.cloneNode(true);
                  null === (r5 = i3.querySelector('span[id^="easy-footnote-bottom-"]')) || void 0 === r5 || r5.remove(), null === (n4 = i3.querySelector("a.easy-footnote-to-top")) || void 0 === n4 || n4.remove(), this.addFootnote(e3, o2.id.toLowerCase(), i3);
                })), void t3.querySelectorAll("span.easy-footnote-margin-adjust").forEach(((t4) => {
                  this.pendingRemovals.push(t4);
                }));
              }
              if (r4.matches("div.footnotes-segment")) {
                return r4.querySelectorAll("h5.footnote-body-heading").forEach(((r5) => {
                  var n4, o2, i3, s2;
                  const a2 = ((null === (n4 = r5.querySelector("a[id]")) || void 0 === n4 ? void 0 : n4.id) || "").toLowerCase();
                  if (!a2) return;
                  const l2 = t3.ownerDocument.createElement("div");
                  let c2 = r5.nextElementSibling;
                  for (; c2 && ("h5" !== c2.tagName.toLowerCase() || !(null === (o2 = c2.classList) || void 0 === o2 ? void 0 : o2.contains("footnote-body-heading"))); ) ((null === (i3 = c2.textContent) || void 0 === i3 ? void 0 : i3.trim()) || (null === (s2 = c2.querySelector) || void 0 === s2 ? void 0 : s2.call(c2, "img, br"))) && l2.appendChild(c2.cloneNode(true)), c2 = c2.nextElementSibling;
                  this.addFootnote(e3, a2, l2);
                })), void this.pendingRemovals.push(r4);
              }
              if (r4.matches('div.footnote[data-component-name="FootnoteToDOM"]')) {
                const t4 = r4.querySelector("a.footnote-number"), n4 = r4.querySelector(".footnote-content");
                return void (t4 && n4 && this.addFootnote(e3, t4.id.replace("footnote-", "").toLowerCase(), n4));
              }
              r4.querySelectorAll('li, div[role="listitem"]').forEach(((t4) => {
                const { id: r5, content: n4 } = this.extractListItemIdAndContent(t4);
                this.addFootnote(e3, r5, n4 || t4);
              }));
            }));
            const r3 = [this.tryDataTypeFootnotes, this.tryGenericIdDetection, this.tryWordExport, this.tryGoogleDocs, this.tryLabeledSection, this.tryLooseFootnotes, this.tryClassFootnote];
            for (const n3 of r3) {
              if (e3.count > 1) break;
              n3.call(this, t3, e3);
            }
            return e3.footnotes;
          }
          tryDataTypeFootnotes(t3, e3) {
            t3.querySelectorAll('p[data-type="footnote"][id]').forEach(((r3) => {
              const n3 = (r3.id || "").toLowerCase();
              if (!n3) return;
              const o2 = t3.ownerDocument.createElement("div"), i2 = r3.cloneNode(true), s2 = i2.firstElementChild;
              s2 && "sup" === s2.tagName.toLowerCase() && s2.querySelector('a[href*="#"]') && (s2.remove(), this.trimLeadingWhitespace(i2)), o2.appendChild(i2), this.addFootnote(e3, n3, o2), this.pendingRemovals.push(r3);
            }));
          }
          tryGenericIdDetection(t3, e3) {
            const r3 = /* @__PURE__ */ new Map();
            if (t3.querySelectorAll('a[href*="#"]').forEach(((t4) => {
              var e4;
              const n4 = u(t4);
              if (!n4) return;
              const o2 = (null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "";
              c.test(o2) && (r3.has(n4) || r3.set(n4, []), r3.get(n4).push(t4));
            })), r3.size < 2) return;
            const n3 = new Set(r3.keys()), i2 = t3.querySelectorAll("div, section, aside, footer, ol, ul");
            let s2 = null, a2 = 0;
            if (i2.forEach(((e4) => {
              if (e4 === t3) return;
              const r4 = this.findMatchingFootnoteElements(e4, n3).length;
              r4 >= 2 && r4 >= a2 && (a2 = r4, s2 = e4);
            })), !s2) return;
            const l2 = this.findMatchingFootnoteElements(s2, n3), d2 = new Set(l2.map((({ id: t4 }) => t4)));
            let h2 = 0, m = 0;
            r3.forEach(((t4, e4) => {
              t4.some(((t5) => s2.contains(t5))) || (h2++, d2.has(e4) && m++);
            })), m < Math.max(2, Math.ceil(0.75 * h2)) && (s2 = null), l2.forEach((({ el: r4, id: i3 }) => {
              var s3, a3;
              if (e3.processedIds.has(i3)) return;
              const l3 = t3.ownerDocument.createElement("div"), c2 = r4.cloneNode(true), u2 = c2.querySelector(`a[id="${i3}"]`);
              !u2 || (null === (s3 = u2.textContent) || void 0 === s3 ? void 0 : s3.trim()) && !/^\d+[.)]*\s*$/.test(u2.textContent.trim()) || u2.remove();
              const d3 = c2.querySelector("a[name]");
              d3 && (null === (a3 = d3.getAttribute("name")) || void 0 === a3 ? void 0 : a3.toLowerCase()) === i3 && d3.remove();
              const h3 = c2.childNodes[0];
              h3 && 3 === h3.nodeType && (h3.textContent = h3.textContent.replace(/^\d+\.\s*/, "").replace(/^\s+/, "")), c2.matches("li") ? (0, o.transferContent)(c2, l3) : l3.appendChild(c2);
              let m2 = r4.nextElementSibling;
              for (; m2 && !m2.id; ) {
                const t4 = this.getChildAnchorId(m2);
                if (t4 && n3.has(t4)) break;
                l3.appendChild(m2.cloneNode(true)), m2 = m2.nextElementSibling;
              }
              this.addFootnote(e3, i3, l3);
            })), s2 && this.pendingRemovals.push(s2);
          }
          tryWordExport(t3, e3) {
            const r3 = Array.from(t3.querySelectorAll('a[href*="#_ftnref"]'));
            if (r3.length < 2) return;
            const n3 = [];
            r3.forEach(((t4) => {
              const e4 = u(t4).match(/^_ftnref(\d+)$/);
              e4 && n3.push({ num: parseInt(e4[1]), anchor: t4 });
            })), n3.sort(((t4, e4) => t4.num - e4.num)), n3.forEach((({ num: r4, anchor: n4 }) => {
              const o2 = `_ftn${r4}`;
              if (e3.processedIds.has(o2)) return;
              let i2 = n4.parentElement;
              for (; i2 && i2 !== t3; ) {
                const t4 = i2.tagName.toLowerCase();
                if ("p" === t4 || "div" === t4 || "li" === t4) break;
                i2 = i2.parentElement;
              }
              if (!i2 || i2 === t3) return;
              const s2 = i2.cloneNode(true), a2 = s2.querySelector('a[href*="_ftnref"]');
              if (a2) {
                const t4 = a2.closest("sup");
                t4 ? t4.remove() : a2.remove();
              }
              const l2 = t3.ownerDocument.createElement("div");
              l2.appendChild(s2), this.addFootnote(e3, o2, l2, r4), this.pendingRemovals.push(i2);
            }));
          }
          tryGoogleDocs(t3, r3) {
            var n3;
            const o2 = [];
            if (t3.querySelectorAll('p[id^="ftnt"]').forEach(((t4) => {
              const e3 = (t4.id || "").match(/^ftnt(\d+)$/);
              e3 && o2.push({ num: parseInt(e3[1]), el: t4 });
            })), o2.length < 2) return;
            o2.sort(((t4, e3) => t4.num - e3.num)), o2.forEach((({ num: e3, el: n4 }) => {
              var o3;
              const i3 = `ftnt${e3}`;
              if (r3.processedIds.has(i3)) return;
              const s3 = n4.cloneNode(true);
              null === (o3 = s3.querySelector('a[href*="#ftnt_ref"]')) || void 0 === o3 || o3.remove();
              const a3 = t3.ownerDocument.createElement("div");
              a3.appendChild(s3), this.addFootnote(r3, i3, a3, e3), this.pendingRemovals.push(n4);
              const l2 = n4.parentElement;
              l2 && l2 !== t3 && "div" === l2.tagName.toLowerCase() && 1 === l2.children.length && this.pendingRemovals.push(l2);
            }));
            const i2 = o2[0].el, s2 = i2.parentElement, a2 = (s2 && s2 !== t3 && "div" === s2.tagName.toLowerCase() ? s2 : i2).previousElementSibling;
            a2 && /^h[1-6]$/.test(a2.tagName.toLowerCase()) && e2.FOOTNOTE_SECTION_RE.test((null === (n3 = a2.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "") && this.pendingRemovals.push(a2);
          }
          tryLooseFootnotes(t3, e3) {
            var r3, n3;
            const o2 = this.findLooseFootnoteParagraphs(t3);
            if (!o2) return;
            const { paragraphs: i2, toRemove: s2 } = o2, a2 = new Set(s2);
            for (let t4 = 0; t4 < i2.length; t4++) {
              const { num: o3, el: s3 } = i2[t4], l2 = null !== (n3 = null === (r3 = i2[t4 + 1]) || void 0 === r3 ? void 0 : r3.el) && void 0 !== n3 ? n3 : null, c2 = this.stripMarkerAndWrap(s3);
              let u2 = s3.nextElementSibling;
              for (; u2 && u2 !== l2 && a2.has(u2); ) c2.appendChild(u2.cloneNode(true)), u2 = u2.nextElementSibling;
              this.addFootnote(e3, String(o3), c2);
            }
            this.pendingRemovals.push(...s2);
          }
          tryClassFootnote(t3, e3) {
            const r3 = [];
            t3.querySelectorAll("p.footnote").forEach(((t4) => {
              const e4 = this.parseFootnoteNum(t4);
              null !== e4 && r3.push({ num: e4, el: t4 });
            }));
            for (const { num: t4, el: n3 } of r3) this.addFootnote(e3, String(t4), this.stripMarkerAndWrap(n3));
            this.pendingRemovals.push(...r3.map(((t4) => t4.el)));
          }
          tryLabeledSection(t3, r3) {
            var n3, i2;
            const s2 = t3.querySelectorAll("div, section, aside");
            for (const t4 of Array.from(s2)) {
              const s3 = (0, o.getClassName)(t4), a2 = t4.id || "";
              if (!/footnote/i.test(s3) && !/footnote/i.test(a2)) continue;
              const l2 = t4.querySelector("h1, h2, h3, h4, h5, h6");
              if (!l2 || !e2.FOOTNOTE_SECTION_RE.test((null === (n3 = l2.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "")) continue;
              const c2 = [];
              if (t4.querySelectorAll("p").forEach(((t5) => {
                const e3 = this.parseFootnoteNum(t5);
                null !== e3 && c2.push({ num: e3, el: t5 });
              })), 0 === c2.length) continue;
              const u2 = new Set(c2.map(((t5) => t5.el)));
              for (let t5 = 0; t5 < c2.length; t5++) {
                const { num: e3, el: n4 } = c2[t5], o2 = this.stripMarkerAndWrap(n4);
                let s4 = n4.nextElementSibling;
                for (; s4 && !u2.has(s4); ) (null === (i2 = s4.textContent) || void 0 === i2 ? void 0 : i2.trim()) && o2.appendChild(s4.cloneNode(true)), this.pendingRemovals.push(s4), s4 = s4.nextElementSibling;
                this.addFootnote(r3, String(e3), o2), this.pendingRemovals.push(n4);
              }
              this.pendingRemovals.push(t4);
              break;
            }
          }
          trimLeadingWhitespace(t3) {
            const e3 = t3.firstChild;
            3 === (null == e3 ? void 0 : e3.nodeType) && (e3.textContent = e3.textContent.replace(/^\s+/, ""));
          }
          isBoldWrappedSup(t3) {
            var e3, r3, n3;
            const o2 = null === (e3 = t3.tagName) || void 0 === e3 ? void 0 : e3.toLowerCase();
            return ("b" === o2 || "strong" === o2) && t3.firstChild === t3.firstElementChild && "sup" === (null === (n3 = null === (r3 = t3.firstElementChild) || void 0 === r3 ? void 0 : r3.tagName) || void 0 === n3 ? void 0 : n3.toLowerCase());
          }
          stripMarkerAndWrap(t3) {
            const e3 = t3.ownerDocument.createElement("div"), r3 = t3.cloneNode(true), n3 = r3.firstElementChild;
            return n3 && (this.isBoldWrappedSup(n3) ? (n3.firstElementChild.remove(), this.trimLeadingWhitespace(n3)) : (n3.remove(), this.trimLeadingWhitespace(r3))), e3.appendChild(r3), e3;
          }
          parseFootnoteNum(t3) {
            var e3;
            if (!t3.firstChild) return null;
            let r3 = t3.firstElementChild;
            if (!r3 || r3 !== t3.firstChild) return null;
            let n3 = r3.tagName.toLowerCase();
            if (this.isBoldWrappedSup(r3) && (r3 = r3.firstElementChild, n3 = "sup"), "sup" !== n3 && "strong" !== n3) return null;
            const o2 = (null === (e3 = r3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "", i2 = parseInt(o2, 10);
            return !isNaN(i2) && i2 >= 1 && String(i2) === o2 ? i2 : null;
          }
          crossValidate(t3, e3) {
            const r3 = new Set(e3.map(((t4) => t4.num))), n3 = /* @__PURE__ */ new Set();
            return t3.querySelectorAll("sup").forEach(((t4) => {
              var o2;
              if (e3.some(((e4) => e4.el.contains(t4)))) return;
              if (t4.querySelector("a")) return;
              const i2 = (null === (o2 = t4.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "", s2 = parseInt(i2, 10);
              !isNaN(s2) && s2 >= 1 && String(s2) === i2 && r3.has(s2) && n3.add(s2);
            })), n3.size >= 2;
          }
          findLooseFootnoteParagraphs(t3) {
            var r3, n3;
            const o2 = Array.from(t3.querySelectorAll("p")), i2 = o2.length > 0 && null !== (r3 = o2[o2.length - 1].parentElement) && void 0 !== r3 ? r3 : t3, s2 = Array.from(i2.children);
            for (let e3 = s2.length - 1; e3 >= 0; e3--) {
              if ("hr" !== s2[e3].tagName.toLowerCase()) continue;
              const r4 = [];
              for (let t4 = e3 + 1; t4 < s2.length; t4++) {
                const e4 = this.parseFootnoteNum(s2[t4]);
                null !== e4 && r4.push({ num: e4, el: s2[t4] });
              }
              if (r4.length >= 2 && this.crossValidate(t3, r4)) return { paragraphs: r4, toRemove: s2.slice(e3) };
              break;
            }
            const a2 = [];
            let l2 = -1;
            for (let t4 = s2.length - 1; t4 >= 0; t4--) {
              const e3 = s2[t4], r4 = e3.tagName.toLowerCase();
              if ("p" === r4) {
                const r5 = this.parseFootnoteNum(e3);
                if (null !== r5) {
                  a2.unshift({ num: r5, el: e3 }), l2 = t4;
                  continue;
                }
                break;
              }
              if ("ul" !== r4 && "ol" !== r4 && "blockquote" !== r4) break;
            }
            if (a2.length >= 2 && this.crossValidate(t3, a2)) {
              const t4 = s2.slice(l2), r4 = a2[0].el.previousElementSibling;
              if (r4) {
                const o3 = r4.tagName.toLowerCase();
                /^h[1-6]$/.test(o3) && e2.FOOTNOTE_SECTION_RE.test((null === (n3 = r4.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "") && t4.unshift(r4);
              }
              return { paragraphs: a2, toRemove: t4 };
            }
            const c2 = [];
            for (let t4 = Math.floor(o2.length / 2); t4 < o2.length; t4++) {
              const e3 = this.parseFootnoteNum(o2[t4]);
              null !== e3 && c2.push({ num: e3, el: o2[t4] });
            }
            return c2.length >= 2 && this.crossValidate(t3, c2) ? { paragraphs: c2, toRemove: c2.map(((t4) => t4.el)) } : null;
          }
          isBackrefLink(t3) {
            var e3, r3, n3;
            if ("a" !== (null === (e3 = t3.tagName) || void 0 === e3 ? void 0 : e3.toLowerCase())) return false;
            const o2 = (null === (r3 = t3.textContent) || void 0 === r3 ? void 0 : r3.trim().replace(/\uFE0E|\uFE0F/g, "")) || "";
            if (a.test(o2) || (null === (n3 = t3.classList) || void 0 === n3 ? void 0 : n3.contains("footnote-backref"))) return true;
            const i2 = t3.getAttribute("href") || "";
            return l.test(i2);
          }
          removeBackrefs(t3) {
            for (t3.querySelectorAll("a").forEach(((t4) => {
              var e3;
              if (this.isBackrefLink(t4)) {
                const r3 = t4.parentElement;
                "sup" === (null === (e3 = null == r3 ? void 0 : r3.tagName) || void 0 === e3 ? void 0 : e3.toLowerCase()) && 1 === r3.children.length ? r3.remove() : t4.remove();
              }
            })); t3.firstChild && 3 === t3.firstChild.nodeType; ) {
              const e3 = t3.firstChild.textContent;
              if (!(e3 && /^[\s\^,.;]*$/.test(e3) && e3.includes("^"))) break;
              t3.firstChild.remove();
            }
            for (; t3.lastChild && 3 === t3.lastChild.nodeType; ) {
              const e3 = t3.lastChild.textContent;
              if (!/^[\s,.;]*$/.test(e3)) break;
              t3.lastChild.remove();
            }
          }
          getChildAnchorId(t3) {
            const e3 = t3.querySelector("a[id], a[name]");
            return e3 ? (e3.id || e3.getAttribute("name") || "").toLowerCase() : "";
          }
          extractListItemIdAndContent(t3) {
            var e3, r3;
            const n3 = t3.querySelector(".citations");
            if (null === (e3 = null == n3 ? void 0 : n3.id) || void 0 === e3 ? void 0 : e3.toLowerCase().startsWith("r")) return { id: n3.id.toLowerCase(), content: n3.querySelector(".citation-content") || null };
            const o2 = (t3.id || "").toLowerCase();
            for (const e4 of ["bib.bib", "fn:", "fn"]) if (o2.startsWith(e4)) return { id: o2.slice(e4.length), content: t3 };
            if (t3.hasAttribute("data-counter")) {
              return { id: (t3.getAttribute("data-counter") || "").replace(/\.$/, "").toLowerCase(), content: t3 };
            }
            const i2 = null === (r3 = o2.split("/").pop()) || void 0 === r3 ? void 0 : r3.match(/cite_note-(.+)/);
            return { id: i2 ? i2[1] : o2, content: t3 };
          }
          findMatchingFootnoteElements(t3, e3) {
            const r3 = [], n3 = /* @__PURE__ */ new Set();
            return t3.querySelectorAll("li, p, div").forEach(((t4) => {
              let o2 = "";
              if (t4.id && e3.has(t4.id.toLowerCase())) o2 = t4.id.toLowerCase();
              else if (!t4.id) {
                const r4 = this.getChildAnchorId(t4);
                r4 && e3.has(r4) && (o2 = r4);
              }
              o2 && !n3.has(o2) && (r3.push({ el: t4, id: o2 }), n3.add(o2));
            })), r3;
          }
          replaceContainerPreservingText(t3, e3) {
            let r3 = "", n3 = false;
            for (const e4 of t3.childNodes) (0, i.isTextNode)(e4) ? r3 += e4.textContent || "" : (0, i.isElement)(e4) && (n3 = true);
            if (r3 = r3.trim(), r3 && n3) {
              const n4 = t3.ownerDocument.createDocumentFragment();
              n4.appendChild(t3.ownerDocument.createTextNode(r3)), n4.appendChild(e3), t3.replaceWith(n4);
            } else t3.replaceWith(e3);
          }
          findOuterFootnoteContainer(t3) {
            var e3;
            let r3 = t3, n3 = t3.parentElement;
            for (; n3; ) {
              const t4 = n3.tagName.toLowerCase();
              if ("span" !== t4 && "sup" !== t4) break;
              if ("span" === t4) {
                let t5 = false;
                for (const o2 of n3.childNodes) if (o2 !== r3) {
                  if ((0, i.isTextNode)(o2) && (null === (e3 = o2.textContent) || void 0 === e3 ? void 0 : e3.trim())) {
                    t5 = true;
                    break;
                  }
                  if ((0, i.isElement)(o2) && "sup" !== o2.tagName.toLowerCase()) {
                    t5 = true;
                    break;
                  }
                }
                if (t5) break;
              }
              r3 = n3, n3 = n3.parentElement;
            }
            return r3;
          }
          createFootnoteReference(t3, e3) {
            const r3 = this.doc.createElement("sup");
            r3.id = e3;
            const n3 = this.doc.createElement("a");
            return n3.href = `#fn:${t3}`, n3.textContent = t3, r3.appendChild(n3), r3;
          }
          collectInlineSidenotes(t3) {
            const e3 = {}, r3 = t3.querySelectorAll("span.footnote-container, span.sidenote-container, span.inline-footnote");
            if (0 === r3.length) {
              const r4 = t3.querySelectorAll("label.footref");
              if (r4.length > 0) {
                let n4 = 1;
                return r4.forEach(((t4) => {
                  var r5, o2, i2;
                  let s2 = t4.nextElementSibling;
                  if ("INPUT" === (null == s2 ? void 0 : s2.tagName) && (null === (r5 = s2.classList) || void 0 === r5 ? void 0 : r5.contains("footref-toggle")) && (s2 = s2.nextElementSibling), !s2 || "SPAN" !== s2.tagName || !(null === (o2 = s2.classList) || void 0 === o2 ? void 0 : o2.contains("sidenote"))) return;
                  const a2 = s2.cloneNode(true), l2 = a2.querySelector("sup");
                  l2 && a2.firstChild === l2 && l2.remove(), e3[n4] = { content: a2, originalId: String(n4), refs: [`fnref:${n4}`] };
                  const c2 = this.createFootnoteReference(String(n4), `fnref:${n4}`), u2 = t4.nextElementSibling;
                  "INPUT" === (null == u2 ? void 0 : u2.tagName) && (null === (i2 = u2.classList) || void 0 === i2 ? void 0 : i2.contains("footref-toggle")) && u2.remove(), s2.remove(), t4.replaceWith(c2), n4++;
                })), t3.querySelectorAll("footer").forEach(((t4) => {
                  t4.querySelector(".footdef") && t4.remove();
                })), e3;
              }
              return t3.querySelectorAll("span.sidenote").forEach(((t4) => {
                t4.remove();
              })), e3;
            }
            let n3 = 1;
            return r3.forEach(((t4) => {
              const r4 = t4.querySelector("span.footnote, span.sidenote, span.footnoteContent");
              if (!r4) return;
              e3[n3] = { content: r4.cloneNode(true), originalId: String(n3), refs: [`fnref:${n3}`] };
              const o2 = this.createFootnoteReference(String(n3), `fnref:${n3}`);
              t4.replaceWith(o2), n3++;
            })), e3;
          }
          collectSidenotesColumn(t3) {
            const e3 = {};
            let r3 = Array.from(t3.querySelectorAll(".sidenotes-column"));
            if (0 === r3.length) {
              let e4 = t3.parentElement;
              for (let t4 = 0; t4 < 3 && e4 && 0 === r3.length; t4++) r3 = Array.from(e4.querySelectorAll(":scope > .sidenotes-column")), e4 = e4.parentElement;
            }
            if (0 === r3.length) return e3;
            let n3 = 1;
            return r3.forEach(((t4) => {
              t4.querySelectorAll(".sidenote[id]").forEach(((t5) => {
                var r4;
                const o2 = t5.id;
                if (!o2) return;
                const s2 = t5.querySelector(".sidenote__id"), a2 = null === (r4 = null == s2 ? void 0 : s2.textContent) || void 0 === r4 ? void 0 : r4.replace(/\D/g, ""), l2 = a2 ? parseInt(a2, 10) : n3, c2 = this.doc.createElement("div");
                Array.from(t5.childNodes).forEach(((t6) => {
                  var e4, r5, n4;
                  if ((0, i.isElement)(t6)) {
                    if (null === (e4 = t6.classList) || void 0 === e4 ? void 0 : e4.contains("sidenote__id")) return;
                    if (null === (r5 = t6.classList) || void 0 === r5 ? void 0 : r5.contains("sidenote__label")) return;
                    if (null === (n4 = t6.classList) || void 0 === n4 ? void 0 : n4.contains("sn-backref")) return;
                  }
                  c2.appendChild(t6.cloneNode(true));
                })), this.removeBackrefs(c2), e3[l2] = { content: c2, originalId: o2.toLowerCase(), refs: [] }, n3++;
              })), t4.remove();
            })), e3;
          }
          collectAsideFootnotes(t3) {
            const e3 = {}, r3 = Array.from(t3.querySelectorAll("aside > ol[start]"));
            return 0 === r3.length || r3.forEach(((t4) => {
              const r4 = t4.parentElement, n3 = parseInt(t4.getAttribute("start") || "", 10);
              if (isNaN(n3) || n3 < 1) return;
              const i2 = Array.from(t4.querySelectorAll("li"));
              if (0 === i2.length) return;
              const s2 = this.doc.createElement("div");
              1 === i2.length ? (0, o.transferContent)(i2[0].cloneNode(true), s2) : i2.forEach(((t5) => {
                const e4 = this.doc.createElement("p");
                (0, o.transferContent)(t5.cloneNode(true), e4), s2.appendChild(e4);
              })), e3[n3] = { content: s2, originalId: String(n3), refs: [] }, r4.remove();
            })), e3;
          }
          collectHiddenAsideFootnotes(t3) {
            const e3 = {}, r3 = Array.from(t3.querySelectorAll("span[data-definition]"));
            if (0 === r3.length) return e3;
            const n3 = /* @__PURE__ */ new Map();
            t3.querySelectorAll("aside[id]").forEach(((t4) => {
              n3.set(t4.id, t4);
            }));
            let i2 = 1;
            return r3.forEach(((t4) => {
              const r4 = t4.getAttribute("data-definition");
              if (!r4) return;
              const s2 = n3.get(r4);
              if (!s2) return;
              const a2 = this.doc.createElement("div");
              (0, o.transferContent)(s2, a2), s2.remove();
              const l2 = String(i2), c2 = `fnref:${l2}`;
              e3[i2] = { content: a2, originalId: r4.toLowerCase(), refs: [c2] }, t4.replaceWith(this.createFootnoteReference(l2, c2)), i2++;
            })), e3;
          }
          standardizeFootnotes(t3) {
            const e3 = this.collectInlineSidenotes(t3), r3 = this.collectHiddenAsideFootnotes(t3);
            this.mergeFootnotes(r3, this.collectFootnotes(t3)), this.mergeFootnotes(r3, this.collectSidenotesColumn(t3)), this.mergeFootnotes(r3, this.collectAsideFootnotes(t3));
            const o2 = t3.querySelectorAll(n2.FOOTNOTE_INLINE_REFERENCES), i2 = /* @__PURE__ */ new Map(), a2 = /* @__PURE__ */ new Map();
            Object.entries(r3).forEach((([t4, e4]) => {
              a2.set(e4.originalId.toLowerCase(), [t4, e4]);
            })), o2.forEach(((t4) => {
              var e4, r4;
              if (!t4 || !t4.parentNode) return;
              if (!(null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim())) return;
              if (t4.matches("cite.ltx_cite")) {
                const e5 = [];
                if (t4.querySelectorAll("a").forEach(((t5) => {
                  var r5;
                  const n4 = t5.getAttribute("href");
                  if (!n4) return;
                  const o3 = null === (r5 = n4.split("/").pop()) || void 0 === r5 ? void 0 : r5.match(/bib\.bib(\d+)/);
                  if (!o3) return;
                  const i3 = a2.get(o3[1].toLowerCase());
                  if (!i3) return;
                  const [s2, l3] = i3, c2 = this.makeRefId(s2, l3.refs.length);
                  l3.refs.push(c2), e5.push(this.createFootnoteReference(s2, c2));
                })), e5.length > 0) {
                  const r5 = this.findOuterFootnoteContainer(t4), n4 = t4.ownerDocument.createDocumentFragment();
                  e5.forEach(((e6, r6) => {
                    r6 > 0 && n4.appendChild(t4.ownerDocument.createTextNode(" ")), n4.appendChild(e6);
                  })), r5.replaceWith(n4);
                }
                return;
              }
              let n3 = "";
              for (const { selector: e5, extract: r5 } of d) if (t4.matches(e5)) {
                n3 = r5(t4);
                break;
              }
              if (!n3) {
                const e5 = t4.getAttribute("href");
                e5 && (n3 = e5.replace(/^[#]/, "").toLowerCase());
              }
              if (n3) {
                const e5 = a2.get(n3.toLowerCase());
                if (e5) {
                  const [n4, o3] = e5, s2 = this.findOuterFootnoteContainer(t4), a3 = "sup" === s2.tagName.toLowerCase();
                  if (a3 && (null === (r4 = i2.get(s2)) || void 0 === r4 ? void 0 : r4.some(((t5) => t5.footnoteNumber === n4)))) return;
                  const l3 = this.makeRefId(n4, o3.refs.length);
                  o3.refs.push(l3), a3 ? (i2.has(s2) || i2.set(s2, []), i2.get(s2).push({ footnoteNumber: n4, refId: l3 })) : this.replaceContainerPreservingText(s2, this.createFootnoteReference(n4, l3));
                }
              }
            }));
            const l2 = Object.entries(r3).filter((([t4, e4]) => 0 === e4.refs.length));
            if (l2.length > 0) {
              const e4 = /* @__PURE__ */ new Map(), n3 = /* @__PURE__ */ new Map();
              l2.forEach((([t4, r4]) => {
                e4.set(r4.originalId, [t4, r4]), n3.set(t4, [t4, r4]);
              }));
              const o3 = (t4) => t4.closest('[id^="fnref:"]') || t4.closest("#footnotes") || this.pendingRemovals.some(((e5) => e5.contains(t4))), i3 = (t4, e5) => {
                const [r4, n4] = e5, o4 = this.makeRefId(r4, n4.refs.length);
                n4.refs.push(o4);
                const i4 = this.findOuterFootnoteContainer(t4);
                this.replaceContainerPreservingText(i4, this.createFootnoteReference(r4, o4));
              };
              t3.querySelectorAll('a[href*="#"]').forEach(((t4) => {
                var r4;
                if (!t4.parentNode || o3(t4)) return;
                const n4 = u(t4);
                if (!n4) return;
                const s2 = e4.get(n4);
                if (!s2) return;
                const a3 = (null === (r4 = t4.textContent) || void 0 === r4 ? void 0 : r4.trim()) || "";
                c.test(a3) && i3(t4, s2);
              }));
              Object.values(r3).some(((t4) => 0 === t4.refs.length)) && t3.querySelectorAll("sup, span.footnote-ref").forEach(((t4) => {
                var r4, o4;
                if (!t4.parentNode || (null === (r4 = t4.id) || void 0 === r4 ? void 0 : r4.startsWith("fnref:")) || t4.closest("#footnotes")) return;
                const s2 = ((null === (o4 = t4.textContent) || void 0 === o4 ? void 0 : o4.trim()) || "").match(c);
                if (!s2) return;
                const a3 = n3.get(s2[1]) || e4.get(s2[1]);
                !a3 || a3[1].refs.length > 0 || i3(t4, a3);
              }));
            }
            i2.forEach(((t4, e4) => {
              const r4 = this.doc.createDocumentFragment();
              t4.forEach((({ footnoteNumber: t5, refId: e5 }) => {
                r4.appendChild(this.createFootnoteReference(t5, e5));
              })), e4.replaceWith(r4);
            }));
            const h2 = this.doc.createElement("div");
            h2.id = "footnotes";
            const m = this.doc.createElement("ol"), f = Object.assign(Object.assign({}, e3), r3);
            Object.entries(f).forEach((([t4, e4]) => {
              m.appendChild(this.createFootnoteItem(parseInt(t4), e4.content, e4.refs));
            })), t3.querySelectorAll(n2.FOOTNOTE_LIST_SELECTORS).forEach(((t4) => t4.remove())), this.pendingRemovals.forEach(((t4) => {
              t4.parentNode && t4.remove();
            })), (0, s.removeOrphanedDividers)(t3), m.children.length > 0 && (h2.appendChild(m), t3.appendChild(h2));
          }
        }
      }, 7864(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.headingRules = void 0, e2.removePermalinkAnchors = function(t3) {
          Array.from(t3.querySelectorAll("h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, a.permalink, a.anchor-link, a.heading-anchor")).forEach(((t4) => {
            o(t4) && t4.remove();
          }));
        }, e2.isPermalinkAnchor = o;
        const n2 = r2(2640);
        function o(t3) {
          if ("a" !== t3.tagName.toLowerCase()) return false;
          const e3 = t3.getAttribute("href") || "", r3 = (t3.getAttribute("title") || "").toLowerCase(), n3 = (t3.getAttribute("class") || "").toLowerCase(), o2 = (t3.textContent || "").trim();
          if (e3.startsWith("#")) return true;
          if (r3.includes("permalink")) return true;
          return !!(n3.includes("permalink") || n3.includes("heading-anchor") || n3.includes("anchor-link")) || !!/^[#\xb6\xa7\ud83d\udd17\uFEFF]$/.test(o2);
        }
        e2.headingRules = [{ selector: "h1, h2, h3, h4, h5, h6", element: "keep", transform: (t3) => {
          var e3, r3;
          const i = t3.ownerDocument;
          if (!i) return t3;
          const s = i.createElement(t3.tagName);
          if (Array.from(t3.attributes).forEach(((t4) => {
            n2.ALLOWED_ATTRIBUTES.has(t4.name) && s.setAttribute(t4.name, t4.value);
          })), !t3.children.length) return s.textContent = (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "", s;
          const a = t3.cloneNode(true), l = /* @__PURE__ */ new Map(), c = [];
          Array.from(a.querySelectorAll("*")).forEach(((t4) => {
            var e4, r4, n3, i2;
            if (!(function(t5) {
              const e5 = t5.tagName.toLowerCase();
              return "button" === e5 || !("a" !== e5 || !o(t5)) || !(!t5.classList.contains("anchor") && !t5.classList.contains("permalink-widget")) || !("span" !== e5 && "div" !== e5 || !Array.from(t5.querySelectorAll("a")).some(((t6) => o(t6))));
            })(t4)) return;
            l.set(t4, (null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "");
            const s2 = t4.parentElement;
            s2 && s2 !== a && (null === (r4 = s2.textContent) || void 0 === r4 ? void 0 : r4.trim()) === (null === (n3 = t4.textContent) || void 0 === n3 ? void 0 : n3.trim()) && l.set(s2, (null === (i2 = t4.textContent) || void 0 === i2 ? void 0 : i2.trim()) || ""), c.push(t4);
          })), c.forEach(((t4) => t4.remove()));
          let u = (null === (r3 = a.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
          return !u && l.size > 0 && (u = Array.from(l.values())[0]), s.textContent = u, s;
        } }];
      }, 2649(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.imageRules = void 0, e2.isBase64Placeholder = b;
        const n2 = r2(2552), o = r2(639), i = r2(2640), s = /^data:image\/([^;]+);base64,/, a = /\.(jpg|jpeg|png|webp)\s+\d/, l = /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/, c = /\.(jpg|jpeg|png|webp|gif|avif)(\?.*)?$/i, u = /\s(\d+)w/, d = /dpr=(\d+(?:\.\d+)?)/, h = /^([^\s]+)/, m = /^https?:\/\//, f = /^[\w\-\.\/\\]+\.(jpg|jpeg|png|gif|webp|svg)$/i, p = /^\d{4}-\d{2}-\d{2}$/;
        function g(t3, e3, r3) {
          const i2 = r3.createElement("figure");
          i2.appendChild(t3.cloneNode(true));
          const s2 = r3.createElement("figcaption"), a2 = (function(t4) {
            const e4 = [], r4 = /* @__PURE__ */ new Set(), i3 = (t5) => {
              var o2;
              if ((0, n2.isTextNode)(t5)) {
                const n3 = (null === (o2 = t5.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "";
                n3 && !r4.has(n3) && (e4.push(n3), r4.add(n3));
              } else if ((0, n2.isElement)(t5)) {
                const e5 = t5.childNodes;
                for (let t6 = 0; t6 < e5.length; t6++) i3(e5[t6]);
              }
            }, s3 = t4.childNodes;
            for (let t5 = 0; t5 < s3.length; t5++) i3(s3[t5]);
            if (e4.length > 0) return e4.join(" ");
            return (0, o.serializeHTML)(t4);
          })(e3);
          return s2.appendChild((0, o.parseHTML)(r3, a2)), i2.appendChild(s2), i2;
        }
        function v(t3, e3) {
          e3.setAttribute("srcset", t3);
          const r3 = q(t3);
          r3 && C(r3) && e3.setAttribute("src", r3);
        }
        function y(t3, e3, r3) {
          for (let n3 = 0; n3 < t3.attributes.length; n3++) {
            const o2 = t3.attributes[n3];
            r3.includes(o2.name) || e3.setAttribute(o2.name, o2.value);
          }
        }
        function b(t3) {
          const e3 = t3.match(s);
          if (!e3) return false;
          if ("svg+xml" === e3[1]) return false;
          const r3 = e3[0].length;
          return t3.length - r3 < 133;
        }
        function x(t3) {
          return t3.startsWith("data:image/svg+xml");
        }
        function C(t3) {
          return !t3.startsWith("data:") && (!(!t3 || "" === t3.trim()) && (c.test(t3) || t3.includes("image") || t3.includes("img") || t3.includes("photo")));
        }
        function S(t3) {
          if (E(t3)) return true;
          return t3.querySelectorAll("img, video, picture, source").length > 0;
        }
        function E(t3) {
          const e3 = t3.tagName.toLowerCase();
          return "img" === e3 || "video" === e3 || "picture" === e3 || "source" === e3;
        }
        function A(t3) {
          if (E(t3)) return t3;
          const e3 = t3.querySelectorAll("picture");
          if (e3.length > 0) return e3[0];
          const r3 = t3.querySelectorAll("img"), n3 = [];
          for (let t4 = 0; t4 < r3.length; t4++) {
            const e4 = r3[t4], o3 = e4.getAttribute("src") || "", i3 = e4.getAttribute("alt") || "";
            x(o3) || (b(o3) || !i3.trim() && r3.length > 1 || n3.push(e4));
          }
          if (n3.length > 0) return n3[0];
          const o2 = t3.querySelectorAll("video");
          if (o2.length > 0) return o2[0];
          const i2 = t3.querySelectorAll("source");
          if (i2.length > 0) return i2[0];
          const s2 = t3.querySelectorAll("img, picture, source, video");
          return s2.length > 0 ? s2[0] : null;
        }
        function w(t3) {
          var e3, r3, n3, o2;
          const i2 = t3.querySelector("figcaption");
          if (i2) return i2;
          const s2 = /* @__PURE__ */ new Set(), a2 = ['[class*="caption"]', '[class*="description"]', '[class*="alt"]', '[class*="title"]', '[class*="credit"]', '[class*="text"]', '[class*="post-thumbnail-text"]', '[class*="image-caption"]', '[class*="photo-caption"]', "[aria-label]", "[title]"].join(", "), l2 = t3.querySelectorAll(a2);
          for (let t4 = 0; t4 < l2.length; t4++) {
            const r4 = l2[t4];
            if (E(r4)) continue;
            const n4 = null === (e3 = r4.textContent) || void 0 === e3 ? void 0 : e3.trim();
            if (n4 && n4.length > 0 && !s2.has(n4)) return s2.add(n4), r4;
          }
          const c2 = t3.querySelector("img");
          if (c2 && c2.hasAttribute("alt")) {
            const e4 = c2.getAttribute("alt");
            if (e4 && e4.trim().length > 0) {
              const r4 = t3.ownerDocument.createElement("div");
              return r4.textContent = e4, r4;
            }
          }
          if (t3.parentElement) {
            const e4 = t3.parentElement.children;
            for (let n4 = 0; n4 < e4.length; n4++) {
              const o3 = e4[n4];
              if (o3 === t3) continue;
              if (Array.from(o3.classList).some(((t4) => t4.includes("caption") || t4.includes("credit") || t4.includes("text") || t4.includes("description")))) {
                const t4 = null === (r3 = o3.textContent) || void 0 === r3 ? void 0 : r3.trim();
                if (t4 && t4.length > 0) return o3;
              }
            }
          }
          const u2 = t3.querySelectorAll("img");
          for (let t4 = 0; t4 < u2.length; t4++) {
            const e4 = u2[t4];
            if (!e4.parentElement) continue;
            let r4 = e4.nextElementSibling;
            for (; r4; ) {
              if (["EM", "STRONG", "SPAN", "I", "B", "SMALL", "CITE"].includes(r4.tagName)) {
                const t5 = null === (n3 = r4.textContent) || void 0 === n3 ? void 0 : n3.trim();
                if (t5 && t5.length > 0) return r4;
              }
              r4 = r4.nextElementSibling;
            }
          }
          for (let t4 = 0; t4 < u2.length; t4++) {
            const e4 = u2[t4], r4 = e4.parentElement;
            if (!r4) continue;
            const n4 = r4.querySelectorAll("em, strong, span, i, b, small, cite");
            for (let t5 = 0; t5 < n4.length; t5++) {
              const r5 = n4[t5];
              if (r5 === e4) continue;
              const i3 = null === (o2 = r5.textContent) || void 0 === o2 ? void 0 : o2.trim();
              if (i3 && i3.length > 0) return r5;
            }
          }
          return null;
        }
        function T(t3) {
          var e3;
          const r3 = (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          return !(r3.length < 10 || r3.startsWith("http://") || r3.startsWith("https://")) && (!f.test(r3) && (!r3.match(/^\d+$/) && !p.test(r3)));
        }
        function _(t3, e3) {
          const r3 = t3.tagName.toLowerCase();
          if ("img" === r3) return L(t3, e3);
          if ("picture" === r3) {
            const r4 = t3.querySelector("img");
            return r4 ? L(r4, e3) : t3.cloneNode(true);
          }
          return "source" === r3 ? (function(t4, e4) {
            const r4 = e4.createElement("img"), n3 = t4.getAttribute("srcset");
            n3 && v(n3, r4);
            const o2 = t4.parentElement;
            if (o2) {
              const t5 = o2.querySelectorAll("img"), e5 = [];
              for (let r5 = 0; r5 < t5.length; r5++) {
                const n4 = t5[r5], o3 = n4.getAttribute("src") || "";
                b(o3) || x(o3) || "" === o3 || e5.push(n4);
              }
              if (e5.length > 0) {
                if (y(e5[0], r4, ["src", "srcset"]), !r4.hasAttribute("src") || !C(r4.getAttribute("src") || "")) {
                  const t6 = e5[0].getAttribute("src");
                  t6 && C(t6) && r4.setAttribute("src", t6);
                }
              } else {
                const t6 = o2.querySelector("img[data-src]");
                if (t6 && (y(t6, r4, ["src", "srcset"]), !r4.hasAttribute("src") || !C(r4.getAttribute("src") || ""))) {
                  const e6 = t6.getAttribute("data-src");
                  e6 && C(e6) && r4.setAttribute("src", e6);
                }
              }
            }
            return r4;
          })(t3, e3) : t3.cloneNode(true);
        }
        function L(t3, e3) {
          const r3 = t3.getAttribute("src") || "";
          if (b(r3) || x(r3)) {
            const r4 = t3.parentElement;
            if (r4) {
              const n3 = r4.querySelectorAll("source"), o2 = [];
              for (let t4 = 0; t4 < n3.length; t4++) {
                const e4 = n3[t4];
                e4.hasAttribute("data-srcset") && "" !== e4.getAttribute("data-srcset") && o2.push(e4);
              }
              if (o2.length > 0) {
                const r5 = e3.createElement("img"), n4 = t3.getAttribute("data-src");
                return n4 && !x(n4) && r5.setAttribute("src", n4), y(t3, r5, ["src"]), r5;
              }
            }
          }
          return t3.cloneNode(true);
        }
        function q(t3) {
          if (!t3 || !t3.trim()) return null;
          const e3 = t3.trim(), r3 = /(.+?)\s+(\d+(?:\.\d+)?[wx])/g;
          let n3, o2 = 0;
          for (; null !== (n3 = r3.exec(e3)); ) {
            let t4 = n3[1].trim();
            if (o2 > 0 && (t4 = t4.replace(/^,\s*/, "")), o2 = r3.lastIndex, t4 && !x(t4)) return t4;
          }
          const i2 = e3.match(h);
          return i2 && i2[1] && !x(i2[1]) ? i2[1] : null;
        }
        function N(t3) {
          if (0 === t3.length) return null;
          if (1 === t3.length) return t3[0];
          for (let e4 = 0; e4 < t3.length; e4++) if (!t3[e4].hasAttribute("media")) return t3[e4];
          let e3 = null, r3 = 0;
          for (let n3 = 0; n3 < t3.length; n3++) {
            const o2 = t3[n3], i2 = o2.getAttribute("srcset");
            if (!i2) continue;
            const s2 = i2.match(u), a2 = i2.match(d);
            if (s2 && s2[1]) {
              const t4 = parseInt(s2[1], 10) * (a2 ? parseFloat(a2[1]) : 1);
              t4 > r3 && (r3 = t4, e3 = o2);
            }
          }
          return e3 || t3[0];
        }
        e2.imageRules = [{ selector: "picture", element: "picture", transform: (t3, e3) => {
          const r3 = t3.querySelectorAll("source"), n3 = t3.querySelector("img");
          if (!n3) {
            const n4 = N(r3);
            if (n4) {
              const r4 = n4.getAttribute("srcset");
              if (r4) {
                const n5 = e3.createElement("img");
                return v(r4, n5), t3.replaceChildren(n5), t3;
              }
            }
            return t3;
          }
          let o2 = null, i2 = null;
          if (r3.length > 0) {
            const t4 = N(r3);
            t4 && (o2 = t4.getAttribute("srcset"), o2 && (i2 = q(o2)));
          }
          if (o2 && n3.setAttribute("srcset", o2), i2 && C(i2)) n3.setAttribute("src", i2);
          else if (!n3.hasAttribute("src") || !C(n3.getAttribute("src") || "")) {
            const t4 = q(n3.getAttribute("srcset") || o2 || "");
            t4 && C(t4) && n3.setAttribute("src", t4);
          }
          return r3.forEach(((t4) => t4.remove())), t3;
        } }, { selector: "uni-image-full-width", element: "figure", transform: (t3, e3) => {
          var r3;
          const n3 = e3.createElement("figure"), i2 = e3.createElement("img"), s2 = t3.querySelector("img");
          if (!s2) return n3;
          let a2 = s2.getAttribute("src");
          const l2 = s2.getAttribute("data-loading");
          if (l2) try {
            const t4 = JSON.parse(l2);
            t4.desktop && C(t4.desktop) && (a2 = t4.desktop);
          } catch (t4) {
          }
          if (!a2 || !C(a2)) return n3;
          i2.setAttribute("src", a2);
          let c2 = s2.getAttribute("alt");
          c2 || (c2 = t3.getAttribute("alt-text")), c2 && i2.setAttribute("alt", c2), n3.appendChild(i2);
          const u2 = t3.querySelector("figcaption");
          if (u2) {
            const t4 = null === (r3 = u2.textContent) || void 0 === r3 ? void 0 : r3.trim();
            if (t4 && t4.length > 5) {
              const r4 = e3.createElement("figcaption"), i3 = u2.querySelector(".rich-text p");
              i3 ? (0, o.transferContent)(i3, r4) : r4.textContent = t4, n3.appendChild(r4);
            }
          }
          return n3;
        } }, { selector: 'img[data-src], img[data-srcset], img[loading="lazy"], img.lazy, img.lazyload, img[src^="data:image/svg+xml"]', element: "img", transform: (t3, e3) => {
          const r3 = t3.getAttribute("src") || "", n3 = (function(t4) {
            if (t4.hasAttribute("data-src") || t4.hasAttribute("data-srcset")) return true;
            for (let e4 = 0; e4 < t4.attributes.length; e4++) {
              const r4 = t4.attributes[e4];
              if ("src" !== r4.name) {
                if (r4.name.startsWith("data-") && /\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(r4.value)) return true;
                if (/\.(jpg|jpeg|png|webp|gif)(\?.*)?$/i.test(r4.value)) return true;
              }
            }
            return false;
          })(t3);
          (b(r3) || x(r3)) && n3 && t3.removeAttribute("src");
          const o2 = t3.getAttribute("data-src");
          o2 && !t3.getAttribute("src") && t3.setAttribute("src", o2);
          const i2 = t3.getAttribute("data-srcset");
          i2 && !t3.getAttribute("srcset") && t3.setAttribute("srcset", i2);
          for (let e4 = 0; e4 < t3.attributes.length; e4++) {
            const r4 = t3.attributes[e4];
            if ("src" === r4.name || "srcset" === r4.name || "alt" === r4.name) continue;
            const n4 = r4.value.charAt(0);
            if ("{" !== n4 && "[" !== n4) {
              if (a.test(r4.value)) t3.setAttribute("srcset", r4.value);
              else if (l.test(r4.value)) {
                const e5 = t3.getAttribute("src") || "", n5 = m.test(e5), o3 = m.test(r4.value);
                n5 && !o3 || t3.setAttribute("src", r4.value);
              }
            }
          }
          return t3.classList.remove("lazy", "lazyload"), t3.removeAttribute("data-ll-status"), t3.removeAttribute("data-src"), t3.removeAttribute("data-srcset"), t3.removeAttribute("loading"), t3;
        } }, { selector: "span:has(img)", element: "span", transform: (t3, e3) => {
          try {
            if (!S(t3)) return t3;
            for (const e4 of t3.children) if (i.BLOCK_LEVEL_ELEMENTS.has(e4.tagName.toLowerCase())) return t3;
            const r3 = A(t3);
            if (!r3) return t3;
            const n3 = w(t3), o2 = _(r3, e3);
            if (n3 && T(n3)) {
              const t4 = g(o2, n3, e3);
              return n3.parentNode && n3.parentNode.removeChild(n3), t4;
            }
            return o2;
          } catch (e4) {
            return t3;
          }
        } }, { selector: 'figure, p:has([class*="caption"])', element: "figure", transform: (t3, e3) => {
          try {
            if (!S(t3)) return t3;
            const r3 = A(t3);
            if (!r3) return t3;
            const n3 = w(t3);
            if (n3 && T(n3)) {
              const o2 = A(t3);
              let i2;
              return i2 = o2 || _(r3, e3), g(i2, n3, e3);
            }
            return t3;
          } catch (e4) {
            return t3;
          }
        } }];
      }, 7282(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.LOOKS_LIKE_LATEX_RE = e2.mathSelectors = e2.mathFastCheck = e2.isBlockDisplay = e2.getBasicLatexFromElement = e2.getMathMLFromElement = e2.reconstructMathMLFromMjx = void 0, e2.extractLatexFromImageSrc = function(t3) {
          for (const e4 of g) {
            const r4 = t3.match(e4);
            if (r4) {
              const t4 = v(r4[1]);
              if (t4) return t4;
            }
          }
          const e3 = t3.match(/\?([^#]+)/);
          if (e3) {
            const t4 = v(e3[1]);
            if (t4) return t4;
          }
          const r3 = t3.split("?")[0].split("/");
          for (let t4 = r3.length - 1; t4 >= 0; t4--) if (/%5[Cc]/.test(r3[t4])) {
            const e4 = v(r3[t4]);
            if (e4) return e4;
          }
          return null;
        }, e2.wrapRawLatexDelimiters = function(t3, r3) {
          var n3, i2;
          if (!(function(t4) {
            const e3 = Array.from(t4.querySelectorAll("script[src]"));
            for (const t5 of e3) {
              const e4 = (t5.getAttribute("src") || "").toLowerCase();
              if (e4.includes("mathjax") || e4.includes("katex")) return true;
            }
            const r4 = Array.from(t4.querySelectorAll("script:not([src])"));
            for (const t5 of r4) {
              const e4 = t5.textContent || "";
              if (/MathJax\s*[.=]/.test(e4) || /katex/i.test(e4)) return true;
            }
            return false;
          })(r3)) return;
          if (t3.querySelector(e2.mathFastCheck)) return;
          const s2 = [];
          !(function t4(e3) {
            if (!(0, o.isElement)(e3) || !C.has(e3.tagName)) if ((0, o.isTextNode)(e3)) s2.push(e3);
            else for (let r4 = e3.firstChild; r4; r4 = r4.nextSibling) t4(r4);
          })(t3);
          for (const t4 of s2) {
            const e3 = t4.textContent || "";
            if (!e3.includes("$") && !e3.includes("\\(") && !e3.includes("\\[")) continue;
            const s3 = [];
            let l2, c2 = 0, u2 = false;
            for (y.lastIndex = 0; null !== (l2 = y.exec(e3)); ) {
              const t5 = null !== (n3 = l2[1]) && void 0 !== n3 ? n3 : l2[2], r4 = null !== (i2 = l2[3]) && void 0 !== i2 ? i2 : l2[4], o2 = void 0 !== t5, d3 = (null != t5 ? t5 : r4).trim();
              (void 0 !== l2[2] || void 0 !== l2[4] || (a2 = d3, b.test(a2) || x.test(a2))) && (c2 < l2.index && s3.push(e3.slice(c2, l2.index)), o2 && (u2 = true), s3.push({ latex: d3, isBlock: o2 }), c2 = l2.index + l2[0].length);
            }
            if (0 === s3.length) continue;
            if (c2 < e3.length && s3.push(e3.slice(c2)), u2) {
              const e4 = s3.some(((t5) => "string" == typeof t5 && t5.trim().length > 0)), r4 = t4.parentElement, n4 = !!r4 && Array.from(r4.childNodes).some(((e5) => e5 !== t4 && ((0, o.isTextNode)(e5) && (e5.textContent || "").trim().length > 0 || (0, o.isElement)(e5))));
              if (e4 || n4) for (const t5 of s3) "string" != typeof t5 && (t5.isBlock = false);
            }
            const d2 = r3.createDocumentFragment();
            for (const t5 of s3) if ("string" == typeof t5) d2.appendChild(r3.createTextNode(t5));
            else {
              const e4 = r3.createElement("math");
              e4.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), e4.setAttribute("display", t5.isBlock ? "block" : "inline"), e4.setAttribute("data-latex", t5.latex), e4.textContent = t5.latex, d2.appendChild(e4);
            }
            t4.replaceWith(d2);
          }
          var a2;
        };
        const n2 = r2(639), o = r2(2552), i = /[\u2061\u2062\u2063\u2064]/g, s = (t3) => t3.normalize("NFKC").replace(i, ""), a = /* @__PURE__ */ new Set(["mi", "mo", "mn", "mtext", "ms", "mspace", "mglyph"]), l = /* @__PURE__ */ new Set(["mrow", "mstyle", "mpadded", "mphantom", "menclose", "merror", "mtable", "mtr", "mtd", "mlabeledtr"]), c = /* @__PURE__ */ new Set(["mjx-nstrut", "mjx-dstrut", "mjx-strut", "mjx-line", "mjx-spacer", "mjx-break", "mjx-mark"]), u = (t3, e3) => {
          for (const r3 of Array.from(t3.children)) if (r3.tagName.toLowerCase() === e3) return r3;
          return null;
        }, d = (t3, e3, r3) => {
          if (!t3) return [];
          const n3 = [];
          for (const o2 of Array.from(t3.children)) o2 !== r3 && n3.push(...f(o2, e3));
          return n3;
        }, h = (t3, e3) => {
          if (1 === t3.length) return t3[0];
          const r3 = e3.createElement("mrow");
          return t3.forEach(((t4) => r3.appendChild(t4))), r3;
        }, m = (t3, e3, r3) => {
          const n3 = r3.createElement(t3);
          return e3.forEach(((t4) => n3.appendChild(t4))), n3;
        }, f = (t3, e3) => {
          const r3 = t3.tagName.toLowerCase();
          if ("mjx-c" === r3) {
            const r4 = s(t3.textContent || "");
            return r4 ? [e3.createTextNode(r4)] : [];
          }
          if (c.has(r3)) return [];
          if (!r3.startsWith("mjx-")) return [];
          const n3 = r3.slice(4);
          if (a.has(n3)) {
            const r4 = s(t3.textContent || "");
            if (!r4 && "mspace" !== n3) return [];
            const o2 = e3.createElement(n3);
            return r4 && (o2.textContent = r4), [o2];
          }
          if (l.has(n3)) return [m(n3, d(t3, e3), e3)];
          switch (n3) {
            case "mfrac": {
              const r4 = h(d(t3.querySelector("mjx-num"), e3), e3), n4 = h(d(t3.querySelector("mjx-den"), e3), e3);
              return [m("mfrac", [r4, n4], e3)];
            }
            case "msqrt": {
              const r4 = t3.querySelector("mjx-box");
              return [m("msqrt", d(r4 || t3, e3), e3)];
            }
            case "msub":
            case "msup": {
              const r4 = u(t3, "mjx-script"), o2 = h(d(t3, e3, r4), e3), i2 = h(d(r4, e3), e3);
              return [m(n3, [o2, i2], e3)];
            }
            case "msubsup": {
              const r4 = u(t3, "mjx-script"), n4 = h(d(t3, e3, r4), e3), o2 = d(r4, e3), i2 = o2.length > 1 ? o2[o2.length - 1] : o2[0] || e3.createElement("mrow"), s2 = o2.length > 1 ? o2[0] : e3.createElement("mrow");
              return [m("msubsup", [n4, i2, s2], e3)];
            }
            case "munder":
            case "mover":
            case "munderover": {
              const r4 = h(d(t3.querySelector("mjx-base"), e3), e3), o2 = t3.querySelector("mjx-under"), i2 = t3.querySelector("mjx-over");
              return "munder" === n3 ? [m("munder", [r4, h(d(o2, e3), e3)], e3)] : "mover" === n3 ? [m("mover", [r4, h(d(i2, e3), e3)], e3)] : [m("munderover", [r4, h(d(o2, e3), e3), h(d(i2, e3), e3)], e3)];
            }
            default:
              return d(t3, e3);
          }
        };
        e2.reconstructMathMLFromMjx = (t3, e3) => {
          const r3 = e3.createElement("math");
          r3.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML");
          for (const n4 of Array.from(t3.children)) for (const t4 of f(n4, e3)) r3.appendChild(t4);
          if (0 === r3.childNodes.length) return null;
          const n3 = "true" === t3.getAttribute("display");
          return n3 && r3.setAttribute("display", "block"), { mathml: r3.outerHTML, latex: null, isBlock: n3 };
        };
        const p = (t3) => {
          const e3 = t3.cloneNode(true);
          return ((t4) => {
            const e4 = t4.ownerDocument;
            if (!e4) return;
            const r3 = Array.from(t4.querySelectorAll("mtable"));
            for (const t5 of r3) {
              const r4 = Array.from(t5.children).filter(((t6) => {
                const e5 = t6.tagName.toLowerCase();
                return "mtr" === e5 || "mlabeledtr" === e5;
              }));
              if (1 !== r4.length) continue;
              const n3 = r4[0];
              if ("mlabeledtr" !== n3.tagName.toLowerCase()) continue;
              const o2 = Array.from(n3.children).filter(((t6) => "mtd" === t6.tagName.toLowerCase()));
              if (o2.length < 2) continue;
              const [i2, ...s2] = o2, a2 = e4.createElement("mrow");
              for (const t6 of s2) for (; t6.firstChild; ) a2.appendChild(t6.firstChild);
              if (i2.childNodes.length > 0) {
                const t6 = e4.createElement("mspace");
                for (t6.setAttribute("width", "2em"), a2.appendChild(t6); i2.firstChild; ) a2.appendChild(i2.firstChild);
              }
              t5.replaceWith(a2);
            }
          })(e3), e3.outerHTML;
        };
        e2.getMathMLFromElement = (t3) => {
          if ("math" === t3.tagName.toLowerCase()) {
            const e3 = "block" === t3.getAttribute("display");
            return { mathml: p(t3), latex: t3.getAttribute("alttext") || null, isBlock: e3 };
          }
          const r3 = t3.getAttribute("data-mathml");
          if (r3) {
            const e3 = t3.ownerDocument || document, o3 = (0, n2.parseHTML)(e3, r3).querySelector("math");
            if (o3) {
              const t4 = "block" === o3.getAttribute("display");
              return { mathml: p(o3), latex: o3.getAttribute("alttext") || null, isBlock: t4 };
            }
          }
          const o2 = t3.querySelector(".MJX_Assistive_MathML, mjx-assistive-mml");
          if (o2) {
            const t4 = o2.querySelector("math");
            if (t4) {
              const e3 = t4.getAttribute("display"), r4 = o2.getAttribute("display"), n3 = "block" === e3 || "block" === r4;
              return { mathml: p(t4), latex: t4.getAttribute("alttext") || null, isBlock: n3 };
            }
          }
          const i2 = t3.querySelector(".katex-mathml math");
          if (i2) return { mathml: p(i2), latex: null, isBlock: false };
          const s2 = "mjx-math" === t3.tagName.toLowerCase() ? t3 : t3.querySelector("mjx-math");
          if (s2) {
            const r4 = t3.ownerDocument || document, n3 = (0, e2.reconstructMathMLFromMjx)(s2, r4);
            if (n3) return n3;
          }
          return null;
        };
        e2.getBasicLatexFromElement = (t3) => {
          var e3, r3, n3, o2;
          const i2 = t3.getAttribute("data-latex");
          if (i2) return i2;
          const s2 = t3.getAttribute("data-math");
          if (s2) return s2;
          const a2 = (null === (e3 = t3.parentElement) || void 0 === e3 ? void 0 : e3.classList.contains("hurmet-tex")) ? t3.parentElement.getAttribute("data-entry") : null;
          if (a2) return a2;
          if ("img" === t3.tagName.toLowerCase() && t3.classList.contains("latex")) {
            const e4 = t3.getAttribute("alt");
            if (e4) return e4;
            const r4 = t3.getAttribute("src");
            if (r4) {
              const t4 = r4.match(/latex\.php\?latex=([^&]+)/);
              if (t4) return decodeURIComponent(t4[1]).replace(/\+/g, " ").replace(/%5C/g, "\\");
            }
          }
          const l2 = t3.querySelector('annotation[encoding="application/x-tex"]');
          if (null == l2 ? void 0 : l2.textContent) return l2.textContent.trim();
          if (t3.matches(".katex")) {
            const e4 = t3.querySelector('.katex-mathml annotation[encoding="application/x-tex"]');
            if (null == e4 ? void 0 : e4.textContent) return e4.textContent.trim();
          }
          if (t3.matches('script[type="math/tex"]') || t3.matches('script[type="math/tex; mode=display"]')) return (null === (r3 = t3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || null;
          if (t3.parentElement) {
            const e4 = t3.parentElement.querySelector('script[type="math/tex"], script[type="math/tex; mode=display"]');
            if (e4) return (null === (n3 = e4.textContent) || void 0 === n3 ? void 0 : n3.trim()) || null;
          }
          return "math" === t3.tagName.toLowerCase() && (null === (o2 = t3.textContent) || void 0 === o2 ? void 0 : o2.trim()) ? t3.textContent.trim() : t3.getAttribute("alt") || null;
        };
        e2.isBlockDisplay = (t3) => {
          if ("block" === t3.getAttribute("display")) return true;
          const e3 = (0, n2.getClassName)(t3).toLowerCase();
          if (e3.includes("display") || e3.includes("block")) return true;
          if (t3.closest('.katex-display, .MathJax_Display, [data-display="block"]')) return true;
          const r3 = t3.previousElementSibling;
          if ("p" === (null == r3 ? void 0 : r3.tagName.toLowerCase())) return true;
          if (t3.matches(".mwe-math-fallback-image-display")) return true;
          if (t3.matches(".katex")) return null !== t3.closest(".katex-display");
          if (t3.hasAttribute("display")) return "true" === t3.getAttribute("display");
          if (t3.matches('script[type="math/tex; mode=display"]')) return true;
          const o2 = t3.closest("[display]");
          return !!o2 && "true" === o2.getAttribute("display");
        }, e2.mathFastCheck = 'math, mjx-container, .MathJax, .katex, img.latex, [data-math], [data-latex], script[type^="math/"]', e2.mathSelectors = ['img.latex[src*="latex.php"]', "span.MathJax", "mjx-container", 'script[type="math/tex"]', 'script[type="math/tex; mode=display"]', '.MathJax_Preview + script[type="math/tex"]', ".MathJax_Display", ".MathJax_SVG", ".MathJax_MathML", ".mwe-math-element", ".mwe-math-fallback-image-inline", ".mwe-math-fallback-image-display", ".mwe-math-mathml-inline", ".mwe-math-mathml-display", ".katex", ".katex-display", ".katex-mathml", ".katex-html", "[data-katex]", 'script[type="math/katex"]', "math", "[data-math]", "[data-latex]", "[data-tex]", 'script[type^="math/"]', 'annotation[encoding="application/x-tex"]'].join(",");
        const g = ["latex", "chl", "tex", "eq", "math"].map(((t3) => new RegExp(`[?&]${t3}=([^&#]+)`, "i")));
        function v(t3) {
          try {
            const r3 = decodeURIComponent(t3.replace(/\+/g, " "));
            return e2.LOOKS_LIKE_LATEX_RE.test(r3) ? r3 : null;
          } catch (t4) {
            return null;
          }
        }
        e2.LOOKS_LIKE_LATEX_RE = /\\[a-zA-Z]{2,}/;
        const y = /\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\$([^\s$][^$]*[^\s$]|[^\s$])\$|\\\(([\s\S]+?)\\\)/g, b = /\\[a-zA-Z]/, x = /[_^{}]/;
        const C = /* @__PURE__ */ new Set(["PRE", "CODE", "SCRIPT", "STYLE", "MATH", "SVG", "TEXTAREA"]);
      }, 6e3(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.mathRules = e2.createCleanMathEl = void 0;
        const n2 = r2(7282), o = r2(639);
        e2.createCleanMathEl = (t3, e3, r3, n3) => {
          const i = n3.createElement("math");
          if (i.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), i.setAttribute("display", r3 ? "block" : "inline"), i.setAttribute("data-latex", e3 || ""), null == t3 ? void 0 : t3.mathml) {
            const e4 = (0, o.parseHTML)(n3, t3.mathml).querySelector("math");
            e4 && (0, o.transferContent)(e4, i);
          } else e3 && (i.textContent = e3);
          return i;
        }, e2.mathRules = [{ selector: n2.mathSelectors, element: "math", fastCheck: n2.mathFastCheck, transform: (t3, r3) => {
          if (!(function(t4) {
            return "classList" in t4 && "getAttribute" in t4 && "querySelector" in t4;
          })(t3)) return t3;
          const o2 = (0, n2.getMathMLFromElement)(t3), i = (0, n2.getBasicLatexFromElement)(t3), s = (0, n2.isBlockDisplay)(t3), a = (0, e2.createCleanMathEl)(o2, i, s, r3);
          if (t3.parentElement && !t3.matches('script[type^="math/"]')) {
            t3.parentElement.querySelectorAll('script[type^="math/"], .MathJax_Preview, script[type="text/javascript"][src*="mathjax"], script[type="text/javascript"][src*="katex"]').forEach(((t4) => t4.remove()));
          }
          return a;
        } }];
      }, 1917(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ExtractorRegistry = void 0;
        const n2 = r2(5959), o = r2(2248), i = r2(1064), s = r2(3258), a = r2(9759), l = r2(2458), c = r2(8632), u = r2(8397), d = r2(3020), h = r2(4732), m = r2(3588), f = r2(5666), p = r2(3055), g = r2(27), v = r2(6581), y = r2(8090), b = r2(2144), x = r2(8477), C = r2(9970), S = r2(5654), E = r2(4454), A = r2(1756), w = r2(7228), T = r2(7278), _ = r2(9964);
        class L {
          static initialize() {
            this.register({ patterns: ["x.com", "twitter.com"], extractor: i.XArticleExtractor }), this.register({ patterns: ["twitter.com", /\/x\.com\/.*/], extractor: o.TwitterExtractor }), this.register({ patterns: ["x.com", "twitter.com"], extractor: f.XOembedExtractor }), this.register({ patterns: ["reddit.com", "old.reddit.com", "new.reddit.com", /^https:\/\/[^\/]+\.reddit\.com/], extractor: n2.RedditExtractor }), this.register({ patterns: ["youtube.com", "youtu.be", /youtube\.com\/watch\?v=.*/, /youtu\.be\/.*/], extractor: s.YoutubeExtractor }), this.register({ patterns: ["bilibili.com", /www\.bilibili\.com\/video\/BV[0-9A-Za-z]+/], extractor: a.BilibiliExtractor }), this.register({ patterns: ["news.ycombinator.com"], extractor: l.HackerNewsExtractor }), this.register({ patterns: [/^https?:\/\/chatgpt\.com\/(c|share)\/.*/], extractor: c.ChatGPTExtractor }), this.register({ patterns: ["claude.ai", /^https?:\/\/claude\.ai\/(chat|share)\/.*/], extractor: u.ClaudeExtractor }), this.register({ patterns: [/^https?:\/\/grok\.com\/(chat|share)(\/.*)?$/], extractor: d.GrokExtractor }), this.register({ patterns: [/^https?:\/\/gemini\.google\.com\/app\/.*/], extractor: h.GeminiExtractor }), this.register({ patterns: ["github.com", /^https?:\/\/github\.com\/.*/], extractor: m.GitHubExtractor }), this.register({ patterns: ["linkedin.com"], extractor: x.LinkedInExtractor }), this.register({ patterns: ["threads.net", "www.threads.com", "threads.com"], extractor: C.ThreadsExtractor }), this.register({ patterns: ["bsky.app"], extractor: S.BlueskyExtractor }), this.register({ patterns: ["medium.com", /\.medium\.com/], extractor: A.MediumExtractor }), this.register({ patterns: ["wiki.c2.com"], extractor: g.C2WikiExtractor }), this.register({ patterns: [/^https?:\/\/substack\.com\/@[^/]+\/note\/.+/, /^https?:\/\/substack\.com\/home\/post\/p-\d+/, "substack.com"], extractor: v.SubstackExtractor }), this.register({ patterns: ["nytimes.com"], extractor: y.NytimesExtractor }), this.register({ patterns: ["wikipedia.org"], extractor: b.WikipediaExtractor }), this.register({ patterns: [/\/@[^/]+\/\d+/], extractor: _.MastodonExtractor }), this.register({ patterns: [/\/t\/[^/]+\/\d+/], extractor: E.DiscourseExtractor }), this.register({ patterns: ["leetcode.com"], extractor: w.LeetCodeExtractor }), this.register({ patterns: ["lwn.net"], extractor: T.LwnExtractor }), this.register({ patterns: [/.*/], extractor: p.BbcodeDataExtractor });
          }
          static register(t3) {
            this.mappings.push(t3);
          }
          static findExtractor(t3, e3, r3, n3) {
            return this.findByPredicate(t3, e3, r3, ((t4) => t4.canExtract()), n3);
          }
          static findAsyncExtractor(t3, e3, r3, n3) {
            return this.findByPredicate(t3, e3, r3, ((t4) => t4.canExtractAsync()), n3);
          }
          static findPreferredAsyncExtractor(t3, e3, r3, n3) {
            return this.findByPredicate(t3, e3, r3, ((t4) => t4.canExtractAsync() && t4.prefersAsync()), n3);
          }
          static findByPredicate(t3, e3, r3, n3, o2) {
            try {
              const i2 = new URL(e3).hostname;
              for (const { patterns: s2, extractor: a2 } of this.mappings) {
                if (s2.some(((t4) => t4 instanceof RegExp ? t4.test(e3) : i2.includes(t4)))) {
                  const i3 = new a2(t3, e3, r3, o2);
                  if (n3(i3)) return i3;
                }
              }
              return null;
            } catch (t4) {
              return console.error("Error finding extractor:", t4), null;
            }
          }
        }
        e2.ExtractorRegistry = L, L.mappings = [], L.initialize();
      }, 2279(t2, e2) {
        var r2 = this && this.__awaiter || function(t3, e3, r3, n2) {
          return new (r3 || (r3 = Promise))((function(o, i) {
            function s(t4) {
              try {
                l(n2.next(t4));
              } catch (t5) {
                i(t5);
              }
            }
            function a(t4) {
              try {
                l(n2.throw(t4));
              } catch (t5) {
                i(t5);
              }
            }
            function l(t4) {
              var e4;
              t4.done ? o(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s, a);
            }
            l((n2 = n2.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.BaseExtractor = void 0;
        e2.BaseExtractor = class {
          constructor(t3, e3, r3, n2) {
            this.document = t3, this.url = e3, this.schemaOrgData = r3, this.options = n2 || {};
          }
          get fetch() {
            return (this.options.fetch || globalThis.fetch).bind(globalThis);
          }
          postTitle(t3, e3) {
            return `Post by ${t3} on ${e3}`;
          }
          canExtractAsync() {
            return false;
          }
          prefersAsync() {
            return false;
          }
          extractAsync() {
            return r2(this, void 0, void 0, (function* () {
              return this.extract();
            }));
          }
        };
      }, 5181(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ConversationExtractor = void 0;
        const n2 = r2(2279), o = r2(5628), i = r2(639);
        class s extends n2.BaseExtractor {
          getFootnotes() {
            return [];
          }
          extract() {
            var t3;
            const e3 = this.extractMessages(), r3 = this.getMetadata(), n3 = this.getFootnotes(), s2 = this.createContentHtml(e3, n3), a = this.createTemporaryDocument(), l = a.createElement("article");
            l.appendChild((0, i.parseHTML)(a, s2)), a.body.appendChild(l);
            const c = new o.Defuddle(a, { url: "about:blank" }).parse(), u = c.content;
            return { content: u, contentHtml: u, extractedContent: { messageCount: e3.length.toString() }, variables: { title: r3.title || "Conversation", site: r3.site, description: r3.description || `${r3.site} conversation with ${e3.length} messages`, wordCount: (null === (t3 = c.wordCount) || void 0 === t3 ? void 0 : t3.toString()) || "" } };
          }
          createTemporaryDocument() {
            var t3;
            const e3 = this.document.implementation;
            if (null == e3 ? void 0 : e3.createHTMLDocument) return e3.createHTMLDocument();
            const r3 = (null === (t3 = this.document.defaultView) || void 0 === t3 ? void 0 : t3.DOMParser) || globalThis.DOMParser;
            if (r3) return new r3().parseFromString("<!doctype html><html><body></body></html>", "text/html");
            throw new Error("Unable to create a temporary document for conversation extraction");
          }
          createContentHtml(t3, e3) {
            return `${t3.map(((e4, r3) => {
              const n3 = e4.timestamp ? `<div class="message-timestamp">${e4.timestamp}</div>` : "", o2 = /<p[^>]*>[\s\S]*?<\/p>/i.test(e4.content) ? e4.content : `<p>${e4.content}</p>`, i2 = e4.metadata ? Object.entries(e4.metadata).map((([t4, e5]) => `data-${t4}="${e5}"`)).join(" ") : "";
              return `
			<div class="message message-${e4.author.toLowerCase()}" ${i2}>
				<div class="message-header">
					<p class="message-author"><strong>${e4.author}</strong></p>
					${n3}
				</div>
				<div class="message-content">
					${o2}
				</div>
			</div>${r3 < t3.length - 1 ? "\n<hr>" : ""}`;
            })).join("\n").trim()}
${e3.length > 0 ? `
			<div id="footnotes">
				<ol>
					${e3.map(((t4, e4) => `
						<li class="footnote" id="fn:${e4 + 1}">
							<p>
								<a href="${t4.url}" target="_blank">${t4.text}</a>&nbsp;<a href="#fnref:${e4 + 1}" class="footnote-backref">↩</a>
							</p>
						</li>
					`)).join("")}
				</ol>
			</div>` : ""}`.trim();
          }
        }
        e2.ConversationExtractor = s;
      }, 3055(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.BbcodeDataExtractor = void 0;
        const n2 = r2(2279), o = r2(6618);
        class i extends n2.BaseExtractor {
          constructor() {
            super(...arguments), this.eventData = void 0;
          }
          canExtract() {
            var t3, e3;
            return !!(null === (e3 = null === (t3 = this.getEventData()) || void 0 === t3 ? void 0 : t3.announcement_body) || void 0 === e3 ? void 0 : e3.body);
          }
          extract() {
            const t3 = this.getEventData(), e3 = t3.announcement_body, r3 = (0, o.bbcodeToHtml)(e3.body || ""), n3 = e3.headline || t3.event_name || "", i2 = e3.posttime ? new Date(1e3 * e3.posttime).toISOString() : "";
            return { content: r3, contentHtml: r3, extractedContent: {}, variables: { title: n3, author: this.getGroupName(), published: i2 } };
          }
          getEventData() {
            var t3;
            return void 0 === this.eventData && (this.eventData = null !== (t3 = this.parseConfigAttr("data-partnereventstore")) && void 0 !== t3 ? t3 : null), this.eventData;
          }
          getGroupName() {
            const t3 = this.parseConfigAttr("data-groupvanityinfo");
            return (null == t3 ? void 0 : t3.group_name) || "";
          }
          parseConfigAttr(t3) {
            const e3 = this.document.querySelector("#application_config"), r3 = null == e3 ? void 0 : e3.getAttribute(t3);
            if (!r3) return null;
            try {
              const t4 = JSON.parse(r3);
              return Array.isArray(t4) ? t4[0] : t4;
            } catch (t4) {
              return null;
            }
          }
        }
        e2.BbcodeDataExtractor = i;
      }, 9759(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l2(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l2(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l2(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l2((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.BilibiliExtractor = void 0;
        const o = r2(2279), i = r2(639), s = r2(1497), a = 4e3, l = /[\u4E00-\u9FFF]/;
        class c extends o.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3);
          }
          canExtract() {
            return !!this.getBvid();
          }
          canExtractAsync() {
            return this.canExtract();
          }
          prefersAsync() {
            return true;
          }
          extract() {
            return this.buildResult();
          }
          extractAsync() {
            return n2(this, void 0, void 0, (function* () {
              var t3;
              const e3 = this.getBvid();
              if (!e3) return this.buildResult();
              const r3 = yield this.fetchViewData(e3);
              if (!r3) return this.buildResult();
              const { aid: n3, pages: o2 = [] } = r3, i2 = this.getPageNumber(), s2 = o2.length > 0 ? null !== (t3 = o2[i2 - 1]) && void 0 !== t3 ? t3 : o2[0] : void 0, a2 = null == s2 ? void 0 : s2.cid, l2 = this.normalizeLanguageCode(this.options.language), u = n3 && a2 ? `${e3}:${a2}:${l2}` : "";
              let d;
              if (n3 && a2) {
                if (u && c.transcriptCache.has(u)) {
                  const t4 = c.transcriptCache.get(u);
                  d = null != t4 ? t4 : void 0;
                } else if (d = yield this.fetchTranscript(n3, a2, e3), u && (c.transcriptCache.set(u, null != d ? d : null), c.transcriptCache.size > 300)) {
                  const t4 = c.transcriptCache.keys().next().value;
                  t4 && c.transcriptCache.delete(t4);
                }
              }
              return this.buildResult(d, r3, s2, i2);
            }));
          }
          getBvid() {
            var t3;
            if (void 0 !== this._bvid) return this._bvid;
            try {
              const e3 = new URL(this.url).pathname.match(/\/video\/(BV[0-9A-Za-z]+)\/?/);
              this._bvid = null !== (t3 = null == e3 ? void 0 : e3[1]) && void 0 !== t3 ? t3 : "";
            } catch (t4) {
              this._bvid = "";
            }
            return this._bvid;
          }
          getPageNumber() {
            try {
              const t3 = new URL(this.url), e3 = parseInt(new URLSearchParams(t3.search).get("p") || "1", 10);
              return Number.isFinite(e3) && e3 > 0 ? e3 : 1;
            } catch (t3) {
              return 1;
            }
          }
          formatDescription(t3) {
            const e3 = (0, i.escapeHtml)(t3).replace(/\n/g, "<br>");
            return e3 ? `<p>${e3}</p>` : "";
          }
          buildEmbedHtml(t3, e3) {
            return `<iframe width="560" height="315" src="${`https://player.bilibili.com/player.html?bvid=${encodeURIComponent(t3)}&page=${e3}&high_quality=1&danmaku=0`}" title="Bilibili video player" frameborder="0" allowfullscreen></iframe>`;
          }
          buildResult(t3, e3, r3, n3) {
            var o2;
            const i2 = this.getBvid(), s2 = (null == e3 ? void 0 : e3.title) || this.document.title || "", a2 = (null === (o2 = null == e3 ? void 0 : e3.owner) || void 0 === o2 ? void 0 : o2.name) || "", l2 = (null == e3 ? void 0 : e3.desc) || "", c2 = l2.slice(0, 200).trim(), u = (null == e3 ? void 0 : e3.pic) || "", d = (null == e3 ? void 0 : e3.pubdate) ? new Date(1e3 * e3.pubdate).toISOString() : "";
            let h = "";
            i2 && (h += this.buildEmbedHtml(i2, n3 || this.getPageNumber())), l2 && (h += this.formatDescription(l2)), (null == t3 ? void 0 : t3.html) && (h += t3.html);
            const m = { title: s2, author: a2, site: "Bilibili", image: u, published: d, description: c2 };
            return (null == r3 ? void 0 : r3.part) && (m.part = r3.part), (null == t3 ? void 0 : t3.text) && (m.transcript = t3.text), (null == t3 ? void 0 : t3.languageCode) && (m.language = t3.languageCode), { content: h, contentHtml: h, extractedContent: Object.assign({ videoId: i2 }, (null == r3 ? void 0 : r3.cid) ? { cid: String(r3.cid) } : {}), variables: m };
          }
          normalizeLanguageCode(t3) {
            return (t3 || "").trim().replace(/_/g, "-").toLocaleLowerCase();
          }
          pickSubtitleTrack(t3, e3) {
            var r3;
            if (0 === t3.length) return;
            const n3 = this.normalizeLanguageCode(e3), o2 = n3 ? n3.split("-")[0] : "", i2 = (t4) => (t4 || "").trim().toLocaleLowerCase();
            return null === (r3 = t3.map(((t4, e4) => {
              const r4 = this.normalizeLanguageCode(t4.lan);
              let s2 = 3;
              n3 && (r4 === n3 ? s2 = 0 : o2 && r4 === o2 ? s2 = 1 : o2 && r4.split("-")[0] === o2 && (s2 = 2));
              const a2 = t4.is_ai_subtitle || ((t5) => {
                const e5 = i2(t5);
                return e5.includes("ai") || e5.includes("auto") || e5.includes("自动");
              })(t4.lan_doc) ? 1 : 0, l2 = ((t5) => "zh-cn" === t5 || "zh-hans" === t5 ? 0 : "zh" === t5 ? 1 : t5.startsWith("zh-") ? 2 : "en" === t5 || t5.startsWith("en-") ? 3 : 4)(r4);
              return { t: t4, prefScore: s2, aiScore: a2, lp: l2, id: "number" == typeof t4.id ? t4.id : Number.MAX_SAFE_INTEGER, doc: i2(t4.lan_doc), urlKey: ((t5) => {
                const e5 = (t5 || "").trim();
                if (!e5) return "";
                try {
                  const t6 = e5.startsWith("//") ? `https:${e5}` : e5, r5 = new URL(t6);
                  return `${r5.hostname.toLocaleLowerCase()}${r5.pathname}`;
                } catch (t6) {
                  return e5.split("?")[0].split("#")[0];
                }
              })(t4.subtitle_url), index: e4 };
            })).sort(((t4, e4) => t4.prefScore !== e4.prefScore ? t4.prefScore - e4.prefScore : t4.aiScore !== e4.aiScore ? t4.aiScore - e4.aiScore : t4.lp !== e4.lp ? t4.lp - e4.lp : t4.id !== e4.id ? t4.id - e4.id : t4.doc !== e4.doc ? t4.doc.localeCompare(e4.doc) : t4.urlKey !== e4.urlKey ? t4.urlKey.localeCompare(e4.urlKey) : t4.index - e4.index))[0]) || void 0 === r3 ? void 0 : r3.t;
          }
          fetchViewData(t3) {
            return n2(this, void 0, void 0, (function* () {
              try {
                const e3 = `https://api.bilibili.com/x/web-interface/view?bvid=${encodeURIComponent(t3)}`, r3 = yield this.fetch(e3, { headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 (compatible; Defuddle/1.0)" }, credentials: "include", signal: AbortSignal.timeout(a) });
                if (!r3.ok) return;
                const n3 = yield r3.json();
                if (0 !== (null == n3 ? void 0 : n3.code)) return;
                return n3.data;
              } catch (t4) {
                return;
              }
            }));
          }
          parseSubtitleTracks(t3) {
            var e3, r3, n3, o2, i2, s2;
            const a2 = [null === (r3 = null === (e3 = null == t3 ? void 0 : t3.data) || void 0 === e3 ? void 0 : e3.subtitle) || void 0 === r3 ? void 0 : r3.subtitles, null === (o2 = null === (n3 = null == t3 ? void 0 : t3.data) || void 0 === n3 ? void 0 : n3.subtitle) || void 0 === o2 ? void 0 : o2.list, null === (s2 = null === (i2 = null == t3 ? void 0 : t3.data) || void 0 === i2 ? void 0 : i2.subtitle) || void 0 === s2 ? void 0 : s2.tracks];
            for (const t4 of a2) if (Array.isArray(t4)) return t4.map(((t5) => {
              var e4, r4, n4, o3, i3, s3;
              return { lan: String(null !== (n4 = null !== (r4 = null !== (e4 = null == t5 ? void 0 : t5.lan) && void 0 !== e4 ? e4 : null == t5 ? void 0 : t5.lang) && void 0 !== r4 ? r4 : null == t5 ? void 0 : t5.language) && void 0 !== n4 ? n4 : ""), lan_doc: (null == t5 ? void 0 : t5.lan_doc) ? String(t5.lan_doc) : void 0, subtitle_url: String(null !== (s3 = null !== (i3 = null !== (o3 = null == t5 ? void 0 : t5.subtitle_url) && void 0 !== o3 ? o3 : null == t5 ? void 0 : t5.subtitleUrl) && void 0 !== i3 ? i3 : null == t5 ? void 0 : t5.url) && void 0 !== s3 ? s3 : ""), id: "number" == typeof (null == t5 ? void 0 : t5.id) ? t5.id : "number" == typeof (null == t5 ? void 0 : t5.subtitle_id) ? t5.subtitle_id : void 0, is_ai_subtitle: "boolean" == typeof (null == t5 ? void 0 : t5.is_ai_subtitle) ? t5.is_ai_subtitle : "number" == typeof (null == t5 ? void 0 : t5.ai_type) ? t5.ai_type > 0 : void 0 };
            })).filter(((t5) => !!t5.lan && !!t5.subtitle_url));
            return [];
          }
          fetchPlayerV2(t3) {
            return n2(this, void 0, void 0, (function* () {
              const e3 = yield this.fetch(t3, { headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 (compatible; Defuddle/1.0)" }, credentials: "include", signal: AbortSignal.timeout(a) });
              if (!e3.ok) return { tracks: [], code: e3.status, message: `http_${e3.status}` };
              const r3 = yield e3.json(), n3 = "number" == typeof (null == r3 ? void 0 : r3.code) ? r3.code : void 0, o2 = "string" == typeof (null == r3 ? void 0 : r3.message) ? r3.message : void 0;
              return 0 !== n3 ? { tracks: [], code: n3, message: o2 } : { tracks: this.parseSubtitleTracks(r3), code: n3, message: o2 };
            }));
          }
          fetchTranscript(t3, e3, r3) {
            return n2(this, void 0, void 0, (function* () {
              try {
                const n3 = `https://api.bilibili.com/x/player/wbi/v2?bvid=${encodeURIComponent(String(r3))}&aid=${encodeURIComponent(String(t3))}&cid=${encodeURIComponent(String(e3))}`, o2 = `https://api.bilibili.com/x/player/v2?bvid=${encodeURIComponent(String(r3))}&cid=${encodeURIComponent(String(e3))}`, i2 = `https://api.bilibili.com/x/player/v2?aid=${encodeURIComponent(String(t3))}&cid=${encodeURIComponent(String(e3))}`;
                let s2 = [];
                if (s2 = (yield this.fetchPlayerV2(n3)).tracks, 0 === s2.length) {
                  if (s2 = (yield this.fetchPlayerV2(o2)).tracks, 0 === s2.length) {
                    s2 = (yield this.fetchPlayerV2(i2)).tracks;
                  }
                }
                if (!Array.isArray(s2) || 0 === s2.length) return;
                const l2 = this.pickSubtitleTrack(s2, this.options.language);
                if (!(null == l2 ? void 0 : l2.subtitle_url)) return;
                const c2 = this.normalizeSubtitleUrl(l2.subtitle_url);
                if (!c2) return;
                if (!this.isAllowedSubtitleHost(c2)) return;
                const u = yield this.fetch(c2.toString(), { headers: { Accept: "application/json", "User-Agent": "Mozilla/5.0 (compatible; Defuddle/1.0)" }, signal: AbortSignal.timeout(a) });
                if (!u.ok) return;
                const d = yield u.json(), h = this.parseSubtitleJson(d);
                if (!h) return;
                return Object.assign(Object.assign({}, h), { languageCode: l2.lan });
              } catch (t4) {
                return;
              }
            }));
          }
          normalizeSubtitleUrl(t3) {
            try {
              const e3 = (t3 || "").trim();
              if (!e3) return null;
              const r3 = e3.startsWith("//") ? `https:${e3}` : e3, n3 = new URL(r3);
              return "https:" !== n3.protocol ? null : n3;
            } catch (t4) {
              return null;
            }
          }
          isAllowedSubtitleHost(t3) {
            const e3 = t3.hostname.toLocaleLowerCase();
            return e3.endsWith(".hdslb.com") || e3.endsWith(".bilibili.com");
          }
          parseSubtitleJson(t3) {
            const e3 = (Array.isArray(null == t3 ? void 0 : t3.body) ? t3.body : []).map(((t4) => ({ start: "number" == typeof t4.from ? t4.from : NaN, end: "number" == typeof t4.to ? t4.to : "number" == typeof t4.from ? t4.from : NaN, text: (t4.content || "").trim() }))).filter(((t4) => Number.isFinite(t4.start) && t4.text.length > 0)).sort(((t4, e4) => t4.start - e4.start));
            if (0 === e3.length) return;
            const r3 = this.groupSubtitleLines(e3), { html: n3, text: o2 } = (0, s.buildTranscript)("bilibili", r3);
            return { html: n3, text: o2 };
          }
          groupSubtitleLines(t3) {
            const e3 = [];
            let r3 = t3[0].start, n3 = t3[0].end, o2 = t3[0].text;
            const i2 = () => {
              const t4 = o2.replace(/\s+/g, " ").trim();
              t4 && e3.push({ start: Math.max(0, Math.floor(r3)), text: t4, speakerChange: e3.length > 0 });
            };
            for (let e4 = 1; e4 < t3.length; e4++) {
              const s2 = t3[e4], a2 = s2.start - n3, l2 = Math.max(s2.end, s2.start) - r3;
              a2 > 20 || l2 > 30 ? (i2(), r3 = s2.start, n3 = s2.end, o2 = s2.text) : (o2 = this.concatTranscriptText(o2, s2.text), n3 = Math.max(n3, s2.end));
            }
            return i2(), e3;
          }
          concatTranscriptText(t3, e3) {
            const r3 = (t3 || "").trimEnd(), n3 = (e3 || "").trimStart();
            if (!r3) return n3;
            if (!n3) return r3;
            const o2 = r3[r3.length - 1], i2 = n3[0], s2 = l.test(o2), a2 = l.test(i2);
            if (s2 && a2) return r3 + n3;
            /[A-Za-z0-9]$/.test(r3), /^[A-Za-z0-9]/.test(n3);
            return `${r3} ${n3}`;
          }
        }
        e2.BilibiliExtractor = c, c.transcriptCache = /* @__PURE__ */ new Map();
      }, 5654(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.BlueskyExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.postItems = [], this.threadScreen = t3.querySelector('[data-testid="postThreadScreen"]'), this.threadScreen && (this.postItems = Array.from(this.threadScreen.querySelectorAll('[data-testid^="postThreadItem-by-"]')));
          }
          canExtract() {
            return this.postItems.length > 0;
          }
          extract() {
            const t3 = this.getHandle(this.postItems[0]), e3 = [], r3 = [];
            let n3 = false;
            for (const o3 of this.postItems) {
              const i2 = this.getHandle(o3);
              n3 || i2 !== t3 ? (n3 = true, r3.push(o3)) : e3.push(o3);
            }
            const o2 = e3.map(((t4) => this.extractPostContent(t4))).join("\n<hr>\n"), s2 = false !== this.options.includeReplies ? this.extractComments(r3) : "", a = (0, i.buildContentHtml)("bluesky", o2, s2), l = `@${t3}`, c = this.getDisplayName(this.postItems[0]), u = this.createDescription(this.postItems[0]), d = this.getPublishedDate(), h = this.postTitle(c || l, "Bluesky");
            return { content: a, contentHtml: a, extractedContent: { postAuthor: t3 }, variables: Object.assign({ title: h, author: c || l, site: "Bluesky", description: u }, d && { published: d }) };
          }
          extractComments(t3) {
            if (0 === t3.length) return "";
            let e3 = 0;
            const r3 = t3.map(((t4) => {
              const r4 = this.getHandle(t4), n3 = this.getDisplayName(t4), o2 = this.extractPostContent(t4), i2 = this.getReplyDate(t4), s2 = this.getPermalink(t4);
              return this.hasTopConnector(t4) ? e3++ : e3 = 0, { author: n3 ? `${n3} @${r4}` : `@${r4}`, date: i2, content: o2, depth: e3, url: s2 || void 0 };
            }));
            return (0, i.buildCommentTree)(r3);
          }
          hasTopConnector(t3) {
            const e3 = t3.children[0];
            if (!e3) return false;
            const r3 = e3.querySelectorAll("div");
            for (const t4 of Array.from(r3)) {
              const e4 = t4.getAttribute("style") || "";
              if (e4.includes("width: 2px") && e4.includes("background-color")) return true;
            }
            return false;
          }
          getHandle(t3) {
            const e3 = (t3.getAttribute("data-testid") || "").match(/^postThreadItem-by-(.+)$/);
            return e3 ? e3[1] : "";
          }
          getDisplayName(t3) {
            var e3;
            const r3 = t3.querySelector('a[aria-label*="avatar"]');
            if (r3) {
              const t4 = (r3.getAttribute("aria-label") || "").match(/^(.+)'s avatar$/);
              if (t4) return t4[1];
            }
            const n3 = t3.querySelectorAll('a[href^="/profile/"]');
            for (const t4 of Array.from(n3)) {
              const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              if (r4 && !r4.startsWith("@") && !r4.includes("avatar") && !r4.includes("·")) return r4;
            }
            return "";
          }
          getPublishedDate() {
            const t3 = this.document.querySelector('meta[name="twitter:value1"]');
            if (t3) {
              const e3 = t3.getAttribute("content") || "";
              try {
                return new Date(e3).toISOString().split("T")[0];
              } catch (t4) {
              }
            }
            return "";
          }
          getReplyDate(t3) {
            const e3 = t3.querySelector('a[href*="/post/"]');
            if (!e3) return "";
            const r3 = e3.getAttribute("aria-label") || "";
            if (!r3) return "";
            try {
              const t4 = new Date(r3.replace(" at ", " "));
              if (!isNaN(t4.getTime())) return t4.toISOString().split("T")[0];
            } catch (t4) {
            }
            return "";
          }
          getPermalink(t3) {
            const e3 = t3.querySelector('a[href*="/post/"]');
            if (!e3) return "";
            const r3 = e3.getAttribute("href") || "";
            return r3.startsWith("http") ? r3 : `https://bsky.app${r3}`;
          }
          extractPostContent(t3) {
            const e3 = [], r3 = t3.querySelector('div[data-word-wrap="1"]');
            if (r3) {
              const t4 = this.cleanText(r3);
              t4 && e3.push(t4);
            }
            const n3 = this.extractImages(t3);
            n3 && e3.push(n3);
            const o2 = this.extractLinkCard(t3);
            o2 && e3.push(o2);
            const i2 = this.extractQuotedPost(t3);
            return i2 && e3.push(i2), e3.join("\n");
          }
          cleanText(t3) {
            const e3 = t3.cloneNode(true);
            e3.querySelectorAll('a[href*="/profile/"]').forEach(((t4) => {
              var r4;
              const n3 = (null === (r4 = t4.textContent) || void 0 === r4 ? void 0 : r4.trim()) || "", o2 = t4.getAttribute("href") || "";
              if (n3.startsWith("@")) {
                const r5 = n3.slice(1), o3 = e3.ownerDocument.createElement("a");
                o3.setAttribute("href", `https://bsky.app/profile/${r5}`), o3.textContent = n3, t4.replaceWith(o3);
              } else o2.startsWith("/profile/") && t4.setAttribute("href", `https://bsky.app${o2}`);
            })), e3.querySelectorAll('a[href^="http"]').forEach(((t4) => {
              var r4;
              const n3 = t4.getAttribute("href") || "", o2 = (null === (r4 = t4.textContent) || void 0 === r4 ? void 0 : r4.trim()) || "", i2 = e3.ownerDocument.createElement("a");
              i2.setAttribute("href", n3), i2.textContent = o2, t4.replaceWith(i2);
            })), e3.querySelectorAll("span, div").forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            }));
            let r3 = (e3.innerHTML || e3.textContent || "").trim();
            if (r3 = r3.replace(/[\u200E\u200F\u200B]/g, ""), r3 = r3.replace(/[^\S\n]+/g, " ").trim(), !r3) return "";
            return r3.split(/\n+/).map(((t4) => t4.trim())).filter(((t4) => t4)).map(((t4) => `<p>${t4}</p>`)).join("\n");
          }
          extractImages(t3) {
            const e3 = [];
            return t3.querySelectorAll('img[src*="/feed_thumbnail/"], img[src*="/feed_fullsize/"]').forEach(((t4) => {
              const r3 = t4.getAttribute("src") || "";
              if (!r3) return;
              const n3 = r3.replace("/feed_thumbnail/", "/feed_fullsize/");
              e3.push(`<img src="${(0, o.escapeHtml)(n3)}" alt="" />`);
            })), e3.join("\n");
          }
          extractLinkCard(t3) {
            const e3 = t3.querySelectorAll('a[aria-label][href^="http"]');
            for (const t4 of Array.from(e3)) {
              if (!t4.querySelector('div[style*="border"]')) continue;
              const e4 = t4.getAttribute("href") || "", r3 = t4.getAttribute("aria-label") || "", n3 = t4.querySelector("img");
              if (r3) {
                let t5 = "";
                if (n3) {
                  const i2 = n3.getAttribute("src") || "";
                  t5 += `<a href="${(0, o.escapeHtml)(e4)}"><img src="${(0, o.escapeHtml)(i2)}" alt="${(0, o.escapeHtml)(r3)}" /></a>
`;
                }
                return t5 += `<p><a href="${(0, o.escapeHtml)(e4)}">${(0, o.escapeHtml)(r3)}</a></p>`, t5;
              }
            }
            return "";
          }
          extractQuotedPost(t3) {
            const e3 = t3.querySelectorAll('[data-testid^="postThreadItem-by-"]');
            for (const r3 of Array.from(e3)) {
              if (r3 === t3) continue;
              const e4 = this.getHandle(r3), n3 = this.getDisplayName(r3), o2 = r3.querySelector('div[data-word-wrap="1"]'), s2 = o2 ? this.cleanText(o2) : "";
              return (0, i.buildQuotedPost)({ author: n3 ? `${n3} @${e4}` : `@${e4}`, content: s2 });
            }
            return "";
          }
          createDescription(t3) {
            const e3 = t3.querySelector('div[data-word-wrap="1"]');
            return e3 ? (e3.textContent || "").replace(/[\u200E\u200F\u200B]/g, "").trim().slice(0, 140).replace(/\s+/g, " ") : "";
          }
        }
        e2.BlueskyExtractor = s;
      }, 27(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.C2WikiExtractor = void 0;
        const o = r2(2279), i = r2(639);
        class s extends o.BaseExtractor {
          canExtract() {
            return false;
          }
          canExtractAsync() {
            return null !== this.getPageTitle();
          }
          prefersAsync() {
            return true;
          }
          extract() {
            return { content: "", contentHtml: "" };
          }
          extractAsync() {
            return n2(this, void 0, void 0, (function* () {
              const t3 = this.getPageTitle();
              if (!t3) return { content: "", contentHtml: "" };
              const e3 = yield this.fetch("https://c2.com/wiki/remodel/pages/" + t3).then(((t4) => t4.json()));
              if (!e3 || !e3.text) return { content: "", contentHtml: "" };
              const r3 = t3.replace(/([a-z])([A-Z])/g, "$1 $2"), n3 = this.renderPage(e3);
              return { content: n3, contentHtml: n3, variables: Object.assign({ title: r3, site: "C2 Wiki" }, e3.date ? { published: e3.date } : {}) };
            }));
          }
          getPageTitle() {
            if (void 0 !== this.pageTitle) return this.pageTitle;
            try {
              const t3 = new URL(this.url).search.match(/[?&]([A-Za-z]\w*)/);
              this.pageTitle = t3 ? t3[1] : "WelcomeVisitors";
            } catch (t3) {
              this.pageTitle = null;
            }
            return this.pageTitle;
          }
          renderPage(t3) {
            return `${this.markup(t3.text)}${t3.date ? `<hr><p>Last edit ${(0, i.escapeHtml)(t3.date)}</p>` : ""}`;
          }
          markup(t3) {
            const e3 = t3.replace(/\\\n/g, " ").split(/\r?\n/), r3 = [];
            let n3 = [];
            for (const t4 of e3) {
              const { html: e4, openTags: o2 } = this.applyBullets(t4, n3);
              r3.push(this.applyInline(e4)), n3 = o2;
            }
            for (; n3.length > 0; ) r3.push(`</${n3.pop()}>`);
            return r3.join("\n");
          }
          applyBullets(t3, e3) {
            const r3 = [...e3];
            let n3 = "";
            const o2 = (t4, e4) => {
              for (; r3.length > t4; ) n3 += `</${r3.pop()}>`;
              e4 && r3.length < t4 ? (n3 += `<${e4}>`, r3.push(e4)) : e4 && r3.length === t4 && r3[t4 - 1] !== e4 && (n3 += `</${r3.pop()}><${e4}>`, r3.push(e4));
            };
            if (/^\s*$/.test(t3)) {
              return r3.some(((t4) => "ul" === t4 || "ol" === t4 || "dl" === t4)) ? { html: "", openTags: r3 } : (o2(0), { html: n3 + "<p></p>", openTags: r3 });
            }
            if (/^-----*/.test(t3)) return o2(0), { html: n3 + "<hr>", openTags: r3 };
            const i2 = t3.match(/^(\t+)(.+):\t/);
            if (i2) return o2(i2[1].length, "dl"), { html: n3 + `<dt>${i2[2]}<dd>` + t3.slice(i2[0].length), openTags: r3 };
            const s2 = t3.match(/^(\t+)\*/);
            if (s2) return o2(s2[1].length, "ul"), { html: n3 + "<li>" + t3.slice(s2[0].length), openTags: r3 };
            const a2 = t3.match(/^(\*+)/);
            if (a2) return o2(a2[1].length, "ul"), { html: n3 + "<li>" + t3.slice(a2[0].length), openTags: r3 };
            const l = t3.match(/^(\t+)\d+\.?/);
            return l ? (o2(l[1].length, "ol"), { html: n3 + "<li>" + t3.slice(l[0].length), openTags: r3 }) : /^\s/.test(t3) ? (o2(1, "pre"), { html: n3 + t3, openTags: r3 }) : (o2(0), { html: n3 + t3, openTags: r3 });
          }
          applyInline(t3) {
            return t3.replace(/'''(.*?)'''/g, "<strong>$1</strong>").replace(/''(.*?)''/g, "<em>$1</em>").replace(/\b(https?|ftp|mailto|file|telnet|news):[^\s<>[\]"'()]*[^\s<>[\]"'(),.?]/g, ((t4) => (0, i.isDangerousUrl)(t4) ? (0, i.escapeHtml)(t4) : /\.(gif|jpg|jpeg|png)$/i.test(t4) ? `<img src="${a(t4)}">` : `<a href="${a(t4)}" rel="nofollow" target="_blank">${(0, i.escapeHtml)(t4)}</a>`));
          }
        }
        function a(t3) {
          return t3.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
        }
        e2.C2WikiExtractor = s;
      }, 8632(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ChatGPTExtractor = void 0;
        const n2 = r2(5181), o = r2(639);
        class i extends n2.ConversationExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.cachedMessages = null, this.turns = t3.querySelectorAll('[data-testid^="conversation-turn-"]'), this.footnotes = [], this.footnoteCounter = 0;
          }
          canExtract() {
            return !!this.turns && this.turns.length > 0;
          }
          extractMessages() {
            if (this.cachedMessages) return this.cachedMessages;
            const t3 = [];
            return this.footnotes = [], this.footnoteCounter = 0, this.turns ? (this.turns.forEach(((e3) => {
              var r3, n3;
              const i2 = e3.querySelector("h4.sr-only, h5.sr-only, h6.sr-only"), s = (null === (n3 = null === (r3 = null == i2 ? void 0 : i2.textContent) || void 0 === r3 ? void 0 : r3.trim()) || void 0 === n3 ? void 0 : n3.replace(/:\s*$/, "")) || "", a = Array.from(e3.querySelectorAll("[data-message-author-role]")).filter(((t4) => t4.closest('[data-testid^="conversation-turn-"]') === e3)), l = a[0], c = (null == l ? void 0 : l.getAttribute("data-message-author-role")) || "", u = a.flatMap(((t4) => {
                const e4 = this.getMessageContentElements(t4);
                return e4.length > 0 ? e4.map(((t5) => (0, o.serializeHTML)(t5))) : [(0, o.serializeHTML)(t4)];
              }));
              let d = (u.length > 0 ? u : [(0, o.serializeHTML)(e3)]).join("\n");
              d = d.replace(/\u200B/g, "");
              const h = this.document.createElement("div");
              h.appendChild((0, o.parseHTML)(this.document, d)), h.querySelectorAll("h4.sr-only, h5.sr-only, h6.sr-only").forEach(((t4) => t4.remove())), d = (0, o.serializeHTML)(h);
              d = d.replace(/(&ZeroWidthSpace;)?(<span[^>]*?>\s*(?:<span[^>]*?>\s*)*<a(?=[^>]*?href="([^"]+)")(?=[^>]*?target="_blank")(?=[^>]*?rel="noopener")[^>]*?>[\s\S]*?<\/a>\s*(?:<\/span>\s*)+)/gi, ((t4, e4, r4, n4) => {
                let o2 = "", i3 = "";
                try {
                  o2 = new URL(n4).hostname.replace(/^www\./, "");
                  const t5 = n4.split("#:~:text=");
                  if (t5.length > 1) {
                    i3 = decodeURIComponent(t5[1]), i3 = i3.replace(/%2C/g, ",");
                    const e5 = i3.split(",");
                    i3 = e5.length > 1 && e5[0].trim() ? ` — ${e5[0].trim()}...` : e5[0].trim() ? ` — ${i3.trim()}` : "";
                  }
                } catch (t5) {
                  console.error(`Failed to parse URL: ${n4}`, t5), o2 = n4;
                }
                let s2, a2 = this.footnotes.findIndex(((t5) => t5.url === n4));
                return -1 === a2 ? (this.footnoteCounter++, s2 = this.footnoteCounter, this.footnotes.push({ url: n4, text: `<a href="${n4}">${o2}</a>${i3}` })) : s2 = a2 + 1, `<sup id="fnref:${s2}"><a href="#fn:${s2}">${s2}</a></sup>`;
              }));
              const m = this.document.createElement("div");
              m.appendChild((0, o.parseHTML)(this.document, d)), m.querySelectorAll('span[data-state="closed"]').forEach(((t4) => t4.remove())), d = (0, o.serializeHTML)(m), d = d.replace(/<p[^>]*>\s*<\/p>/g, ""), t3.push({ author: s, content: d.trim(), metadata: { role: c || "unknown" } });
            })), this.cachedMessages = t3, t3) : t3;
          }
          getMessageContentElements(t3) {
            const e3 = ".markdown, .whitespace-pre-wrap", r3 = [...t3.matches(e3) ? [t3] : [], ...Array.from(t3.querySelectorAll(e3))];
            return r3.filter(((t4) => !r3.some(((e4) => e4 !== t4 && e4.contains(t4)))));
          }
          getFootnotes() {
            return this.footnotes;
          }
          getMetadata() {
            const t3 = this.getTitle(), e3 = this.extractMessages();
            return { title: t3, site: "ChatGPT", url: this.url, messageCount: e3.length, description: `ChatGPT conversation with ${e3.length} messages` };
          }
          getTitle() {
            var t3, e3, r3;
            const n3 = null === (t3 = this.document.title) || void 0 === t3 ? void 0 : t3.trim();
            if (n3 && "ChatGPT" !== n3) return n3;
            const o2 = null === (r3 = null === (e3 = this.turns) || void 0 === e3 ? void 0 : e3.item(0)) || void 0 === r3 ? void 0 : r3.querySelector(".text-message");
            if (o2) {
              const t4 = o2.textContent || "";
              return t4.length > 50 ? t4.slice(0, 50) + "..." : t4;
            }
            return "ChatGPT Conversation";
          }
        }
        e2.ChatGPTExtractor = i;
      }, 8397(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ClaudeExtractor = void 0;
        const n2 = r2(5181), o = r2(639);
        class i extends n2.ConversationExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.articles = t3.querySelectorAll('div[data-testid="user-message"], div[data-testid="assistant-message"], div.font-claude-response');
          }
          canExtract() {
            return !!this.articles && this.articles.length > 0;
          }
          extractMessages() {
            const t3 = [];
            return this.articles ? (this.articles.forEach(((e3) => {
              let r3, n3;
              if (e3.hasAttribute("data-testid")) {
                if ("user-message" !== e3.getAttribute("data-testid")) return;
                r3 = "you", n3 = (0, o.serializeHTML)(e3);
              } else {
                if (!e3.classList.contains("font-claude-response")) return;
                {
                  r3 = "assistant";
                  const t4 = e3.querySelector(".standard-markdown") || e3;
                  n3 = (0, o.serializeHTML)(t4);
                }
              }
              n3 && (n3 = n3.replace(/\u200B/g, "").replace(/<p[^>]*>\s*<\/p>/g, ""), t3.push({ author: "you" === r3 ? "You" : "Claude", content: n3.trim(), metadata: { role: r3 } }));
            })), t3) : t3;
          }
          getMetadata() {
            const t3 = this.getTitle(), e3 = this.extractMessages();
            return { title: t3, site: "Claude", url: this.url, messageCount: e3.length, description: `Claude conversation with ${e3.length} messages` };
          }
          getTitle() {
            var t3, e3, r3, n3, o2;
            const i2 = null === (t3 = this.document.title) || void 0 === t3 ? void 0 : t3.trim();
            if (i2 && "Claude" !== i2) return i2.replace(/ - Claude$/, "");
            const s = null === (r3 = null === (e3 = this.document.querySelector("header .font-tiempos")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim();
            if (s) return s;
            const a = null === (o2 = null === (n3 = this.articles) || void 0 === n3 ? void 0 : n3.item(0)) || void 0 === o2 ? void 0 : o2.querySelector('[data-testid="user-message"]');
            if (a) {
              const t4 = a.textContent || "";
              return t4.length > 50 ? t4.slice(0, 50) + "..." : t4;
            }
            return "Claude Conversation";
          }
        }
        e2.ClaudeExtractor = i;
      }, 4454(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.DiscourseExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            var o2;
            super(t3, e3, r3, n3);
            const i2 = (null === (o2 = t3.querySelector('meta[name="generator"]')) || void 0 === o2 ? void 0 : o2.getAttribute("content")) || "";
            this.isDiscourse = i2.startsWith("Discourse");
          }
          canExtract() {
            return this.isDiscourse && !!this.document.querySelector(".topic-post");
          }
          extract() {
            var t3, e3, r3, n3;
            const o2 = this.getTopicTitle(), s2 = (null === (t3 = this.document.querySelector('meta[property="og:site_name"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "", a = (null === (r3 = null === (e3 = this.document.querySelector(".badge-category__name")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", l = this.getTags(), c = this.getPublishedDate(), u = Array.from(this.document.querySelectorAll(".topic-post")), d = u.find(((t4) => t4.classList.contains("topic-owner"))), h = d ? this.extractPostContent(d) : "", m = d ? this.getAuthor(d) : "", f = u.filter(((t4) => t4 !== d)), p = false !== this.options.includeReplies ? this.extractComments(f) : "", g = (0, i.buildContentHtml)("discourse", h, p), v = m || this.getAuthor(u[0]), y = d ? this.getPostText(d).slice(0, 140).replace(/\s+/g, " ") : "";
            return { content: g, contentHtml: g, extractedContent: { topicId: (null === (n3 = this.document.querySelector("h1[data-topic-id]")) || void 0 === n3 ? void 0 : n3.getAttribute("data-topic-id")) || "", category: a, tags: l.join(", ") }, variables: Object.assign({ title: o2, author: v, site: s2 || "Discourse", description: y }, c && { published: c }) };
          }
          getTopicTitle() {
            var t3, e3;
            const r3 = this.document.querySelector(".fancy-title");
            if (r3) return (null === (t3 = r3.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "";
            const n3 = this.document.querySelector("h1[data-topic-id]");
            if (n3) {
              const t4 = n3.cloneNode(true);
              return t4.querySelectorAll("svg, .topic-statuses").forEach(((t5) => t5.remove())), (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            }
            return "";
          }
          getTags() {
            return Array.from(this.document.querySelectorAll("a.discourse-tag")).map(((t3) => {
              var e3;
              return t3.getAttribute("data-tag-name") || (null === (e3 = t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            })).filter(((t3) => t3));
          }
          getPublishedDate() {
            const t3 = this.document.querySelector('meta[property="article:published_time"]');
            if (t3) {
              const e3 = t3.getAttribute("content") || "";
              try {
                return new Date(e3).toISOString().split("T")[0];
              } catch (t4) {
              }
            }
            return "";
          }
          getAuthor(t3) {
            var e3;
            const r3 = t3.querySelector(".names a[data-user-card]");
            return (null == r3 ? void 0 : r3.getAttribute("data-user-card")) || (null === (e3 = null == r3 ? void 0 : r3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          }
          getPostDate(t3) {
            const e3 = t3.querySelector(".relative-date[data-time]");
            if (!e3) return "";
            const r3 = parseInt(e3.getAttribute("data-time") || "0");
            if (!r3) return "";
            try {
              return new Date(r3).toISOString().split("T")[0];
            } catch (t4) {
              return "";
            }
          }
          getPostPermalink(t3) {
            const e3 = t3.querySelector("a.post-date[href]");
            if (!e3) return "";
            const r3 = e3.getAttribute("href") || "";
            if (!r3) return "";
            try {
              return `${new URL(this.url).origin}${r3}`;
            } catch (t4) {
              return r3;
            }
          }
          getLikeCount(t3) {
            var e3;
            const r3 = t3.querySelector("button.like-count"), n3 = (null === (e3 = null == r3 ? void 0 : r3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            return n3 ? `${n3} likes` : "";
          }
          getPostText(t3) {
            var e3;
            const r3 = t3.querySelector(".cooked");
            return r3 && (null === (e3 = r3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          }
          extractPostContent(t3) {
            const e3 = t3.querySelector(".cooked");
            if (!e3) return "";
            const r3 = e3.cloneNode(true);
            return r3.querySelectorAll(".cooked-selection-barrier").forEach(((t4) => t4.remove())), r3.querySelectorAll("a.anchor").forEach(((t4) => t4.remove())), (0, o.serializeHTML)(r3);
          }
          extractComments(t3) {
            if (0 === t3.length) return "";
            const e3 = t3.map(((t4) => {
              const e4 = this.getAuthor(t4), r3 = this.extractPostContent(t4), n3 = this.getPostDate(t4), o2 = this.getPostPermalink(t4);
              return { author: e4, date: n3, content: r3, depth: 0, score: this.getLikeCount(t4) || void 0, url: o2 || void 0 };
            }));
            return (0, i.buildCommentTree)(e3);
          }
        }
        e2.DiscourseExtractor = s;
      }, 4732(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.GeminiExtractor = void 0;
        const n2 = r2(5181), o = r2(639);
        class i extends n2.ConversationExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.messageCount = null, this.conversationContainers = t3.querySelectorAll("div.conversation-container"), this.footnotes = [];
          }
          canExtract() {
            return !!this.conversationContainers && this.conversationContainers.length > 0;
          }
          extractMessages() {
            this.messageCount = 0;
            const t3 = [];
            return this.conversationContainers ? (this.extractSources(), this.conversationContainers.forEach(((e3) => {
              const r3 = e3.querySelector("user-query");
              if (r3) {
                const e4 = r3.querySelector(".query-text");
                if (e4) {
                  const r4 = (0, o.serializeHTML)(e4);
                  t3.push({ author: "You", content: r4.trim(), metadata: { role: "user" } });
                }
              }
              const n3 = e3.querySelector("model-response");
              if (n3) {
                const e4 = n3.querySelector(".model-response-text .markdown"), r4 = n3.querySelector("#extended-response-markdown-content") || e4;
                if (r4) {
                  let e5 = (0, o.serializeHTML)(r4);
                  const n4 = this.document.createElement("div");
                  n4.appendChild((0, o.parseHTML)(this.document, e5)), n4.querySelectorAll(".table-content").forEach(((t4) => {
                    t4.classList.remove("table-content");
                  })), e5 = (0, o.serializeHTML)(n4), t3.push({ author: "Gemini", content: e5.trim(), metadata: { role: "assistant" } });
                }
              }
            })), this.messageCount = t3.length, t3) : t3;
          }
          extractSources() {
            const t3 = this.document.querySelectorAll("browse-item");
            t3 && t3.length > 0 && t3.forEach(((t4) => {
              var e3, r3, n3, o2;
              const i2 = t4.querySelector("a");
              if (i2 instanceof HTMLAnchorElement) {
                const t5 = i2.href, s = (null === (r3 = null === (e3 = i2.querySelector(".domain")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", a = (null === (o2 = null === (n3 = i2.querySelector(".title")) || void 0 === n3 ? void 0 : n3.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "";
                t5 && (s || a) && this.footnotes.push({ url: t5, text: a ? `${s}: ${a}` : s });
              }
            }));
          }
          getFootnotes() {
            return this.footnotes;
          }
          getMetadata() {
            var t3;
            const e3 = this.getTitle(), r3 = null !== (t3 = this.messageCount) && void 0 !== t3 ? t3 : this.extractMessages().length;
            return { title: e3, site: "Gemini", url: this.url, messageCount: r3, description: `Gemini conversation with ${r3} messages` };
          }
          getTitle() {
            var t3, e3, r3, n3, o2;
            const i2 = null === (t3 = this.document.title) || void 0 === t3 ? void 0 : t3.trim();
            if (i2 && "Gemini" !== i2 && !i2.includes("Gemini")) return i2;
            const s = null === (r3 = null === (e3 = this.document.querySelector(".title-text")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim();
            if (s) return s;
            const a = null === (o2 = null === (n3 = this.conversationContainers) || void 0 === n3 ? void 0 : n3.item(0)) || void 0 === o2 ? void 0 : o2.querySelector(".query-text");
            if (a) {
              const t4 = a.textContent || "";
              return t4.length > 50 ? t4.slice(0, 50) + "..." : t4;
            }
            return "Gemini Conversation";
          }
        }
        e2.GeminiExtractor = i;
      }, 3588(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.GitHubExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.isIssue = /\/issues\/\d+/.test(e3), this.isPR = /\/pull\/\d+/.test(e3);
          }
          canExtract() {
            return !!['meta[name="expected-hostname"][content="github.com"]', 'meta[name="octolytics-url"]', 'meta[name="github-keyboard-shortcuts"]', ".js-header-wrapper", "#js-repo-pjax-container"].some(((t3) => null !== this.document.querySelector(t3))) && (this.isIssue ? ['[data-testid="issue-metadata-sticky"]', '[data-testid="issue-title"]'].some(((t3) => null !== this.document.querySelector(t3))) : !!this.isPR && [".pull-discussion-timeline", ".discussion-timeline", ".gh-header-title", ".js-issue-title"].some(((t3) => null !== this.document.querySelector(t3))));
          }
          extract() {
            const t3 = this.extractRepoInfo(), e3 = this.extractNumber(), r3 = this.isPR ? "pull" : "issue", n3 = this.isPR ? this.getPRBody() : null, { content: o2, author: i2, published: s2 } = this.isPR ? this.getPRContent(n3) : this.getIssueContent(), a = false !== this.options.includeReplies ? this.isPR ? this.extractPRComments(n3) : this.extractComments() : "", l = this.createContentHtml(o2, a);
            return { content: l, contentHtml: l, extractedContent: { type: r3, number: e3, repository: t3.repo, owner: t3.owner }, variables: { title: this.document.title, author: i2, published: s2, site: `GitHub - ${t3.owner}/${t3.repo}`, description: this.createDescription(l) } };
          }
          createContentHtml(t3, e3) {
            return (0, i.buildContentHtml)("github", t3, e3);
          }
          getIssueContent() {
            const t3 = this.document.querySelector('[data-testid="issue-viewer-issue-container"]');
            if (!t3) return { content: "", author: "", published: "" };
            const e3 = this.extractAuthor(t3, ['a[data-testid="issue-body-header-author"]', ".IssueBodyHeaderAuthor-module__authorLoginLink--_S7aT", ".ActivityHeader-module__AuthorLink--iofTU", 'a[href*="/users/"][data-hovercard-url*="/users/"]', 'a[aria-label*="profile"]']), r3 = t3.querySelector("relative-time"), n3 = (null == r3 ? void 0 : r3.getAttribute("datetime")) || "", o2 = t3.querySelector('[data-testid="issue-body-viewer"] .markdown-body');
            if (!o2) return { content: "", author: e3, published: n3 };
            return { content: this.cleanBodyContent(o2), author: e3, published: n3 };
          }
          extractComments() {
            const t3 = Array.from(this.document.querySelectorAll("[data-wrapper-timeline-id]")), e3 = /* @__PURE__ */ new Set(), r3 = [];
            for (const n3 of t3) {
              const t4 = n3.querySelector(".react-issue-comment");
              if (!t4) continue;
              const o2 = n3.getAttribute("data-wrapper-timeline-id");
              if (!o2 || e3.has(o2)) continue;
              e3.add(o2);
              const i2 = this.extractAuthor(t4, [".ActivityHeader-module__AuthorLink--iofTU", 'a[data-testid="avatar-link"]', 'a[href^="/"][data-hovercard-url*="/users/"]']), s2 = t4.querySelector("relative-time"), a = (null == s2 ? void 0 : s2.getAttribute("datetime")) || "", l = a ? new Date(a).toISOString().split("T")[0] : "", c = t4.querySelector(".markdown-body");
              if (!c) continue;
              const u = this.cleanBodyContent(c);
              u && r3.push({ author: i2, date: l, content: u });
            }
            return (0, i.buildCommentTree)(r3);
          }
          getPRBody() {
            return this.document.querySelector('[id^="pullrequest-"]') || this.document.querySelector(".timeline-comment");
          }
          getPRContent(t3) {
            var e3;
            const r3 = (null == t3 ? void 0 : t3.querySelector(".comment-body.markdown-body")) || this.document.querySelector(".comment-body.markdown-body"), n3 = r3 ? this.cleanBodyContent(r3) : "", o2 = (null == t3 ? void 0 : t3.querySelector(".author")) || this.document.querySelector(".gh-header-meta .author"), i2 = (null === (e3 = null == o2 ? void 0 : o2.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "", s2 = null == t3 ? void 0 : t3.querySelector("relative-time");
            return { content: n3, author: i2, published: (null == s2 ? void 0 : s2.getAttribute("datetime")) || "" };
          }
          extractPRComments(t3) {
            var e3;
            const r3 = Array.from(this.document.querySelectorAll(".timeline-comment, .review-comment")), n3 = [];
            for (const o2 of r3) {
              if (t3 && (o2 === t3 || t3.contains(o2))) continue;
              const r4 = o2.querySelector(".author"), i2 = (null === (e3 = null == r4 ? void 0 : r4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "", s2 = o2.querySelector("relative-time"), a = (null == s2 ? void 0 : s2.getAttribute("datetime")) || "", l = a ? new Date(a).toISOString().split("T")[0] : "", c = o2.querySelector(".comment-body.markdown-body");
              if (!c) continue;
              const u = this.cleanBodyContent(c);
              u && n3.push({ author: i2, date: l, content: u });
            }
            return (0, i.buildCommentTree)(n3);
          }
          extractAuthor(t3, e3) {
            for (const r3 of e3) {
              const e4 = t3.querySelector(r3);
              if (e4) {
                const t4 = e4.getAttribute("href");
                if (t4) {
                  if (t4.startsWith("/")) return t4.substring(1);
                  if (t4.includes("github.com/")) {
                    const e5 = t4.match(/github\.com\/([^\/\?#]+)/);
                    if (e5 && e5[1]) return e5[1];
                  }
                }
              }
            }
            return "Unknown";
          }
          cleanBodyContent(t3) {
            const e3 = t3.cloneNode(true);
            return e3.querySelectorAll('button, [data-testid*="button"], [data-testid*="menu"]').forEach(((t4) => t4.remove())), e3.querySelectorAll(".js-clipboard-copy, .zeroclipboard-container").forEach(((t4) => t4.remove())), e3.querySelectorAll('div.highlight[class*="highlight-source-"] pre, div.highlight pre').forEach(((t4) => {
              const e4 = t4.parentElement;
              if (!e4) return;
              const r3 = e4.className.match(/highlight-source-(\w+)/), n3 = (null == r3 ? void 0 : r3[1]) || "", o2 = e4.getAttribute("data-snippet-clipboard-copy-content") || t4.textContent || "", i2 = this.document.createElement("code");
              n3 && (i2.setAttribute("class", `language-${n3}`), i2.setAttribute("data-lang", n3)), i2.textContent = o2;
              const s2 = this.document.createElement("pre");
              s2.appendChild(i2), e4.replaceWith(s2);
            })), (0, o.serializeHTML)(e3).trim();
          }
          extractNumber() {
            var t3;
            const e3 = this.url.match(/\/(issues|pull)\/(\d+)/);
            if (e3) return e3[2];
            const r3 = this.document.querySelector("h1"), n3 = null === (t3 = null == r3 ? void 0 : r3.textContent) || void 0 === t3 ? void 0 : t3.match(/#(\d+)/);
            return n3 ? n3[1] : "";
          }
          extractRepoInfo() {
            const t3 = this.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (t3) return { owner: t3[1], repo: t3[2] };
            const e3 = this.document.title.match(/([^\/\s]+)\/([^\/\s]+)/);
            return e3 ? { owner: e3[1], repo: e3[2] } : { owner: "", repo: "" };
          }
          createDescription(t3) {
            var e3;
            if (!t3) return "";
            const r3 = this.document.createElement("div");
            return r3.appendChild((0, o.parseHTML)(this.document, t3)), (null === (e3 = r3.textContent) || void 0 === e3 ? void 0 : e3.trim().slice(0, 140).replace(/\s+/g, " ")) || "";
          }
        }
        e2.GitHubExtractor = s;
      }, 3020(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.GrokExtractor = void 0;
        const n2 = r2(5181), o = r2(639);
        class i extends n2.ConversationExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.messageContainerSelector = ".relative.group.flex.flex-col.justify-center.w-full", this.messageBubbles = t3.querySelectorAll(this.messageContainerSelector), this.footnotes = [], this.footnoteCounter = 0;
          }
          canExtract() {
            return !!this.messageBubbles && this.messageBubbles.length > 0;
          }
          extractMessages() {
            const t3 = [];
            return this.footnotes = [], this.footnoteCounter = 0, this.messageBubbles && 0 !== this.messageBubbles.length ? (this.messageBubbles.forEach(((e3) => {
              var r3;
              const n3 = e3.classList.contains("items-end"), i2 = e3.classList.contains("items-start");
              if (!n3 && !i2) return;
              const s = e3.querySelector(".message-bubble");
              if (!s) return;
              let a = "", l = "", c = "";
              if (n3) a = s.textContent || "", l = "user", c = "You";
              else if (i2) {
                l = "assistant", c = "Grok";
                const t4 = s.cloneNode(true);
                null === (r3 = t4.querySelector(".relative.border.border-border-l1.bg-surface-base")) || void 0 === r3 || r3.remove(), a = (0, o.serializeHTML)(t4), a = this.processFootnotes(a);
              }
              a.trim() && t3.push({ author: c, content: a.trim(), metadata: { role: l } });
            })), t3) : t3;
          }
          getFootnotes() {
            return this.footnotes;
          }
          getMetadata() {
            var t3;
            const e3 = this.getTitle(), r3 = (null === (t3 = this.messageBubbles) || void 0 === t3 ? void 0 : t3.length) || 0;
            return { title: e3, site: "Grok", url: this.url, messageCount: r3, description: `Grok conversation with ${r3} messages` };
          }
          getTitle() {
            var t3, e3;
            const r3 = null === (t3 = this.document.title) || void 0 === t3 ? void 0 : t3.trim();
            if (r3 && "Grok" !== r3 && !r3.startsWith("Grok by ")) return r3.replace(/\s-\s*Grok$/, "").trim();
            const n3 = this.document.querySelector(`${this.messageContainerSelector}.items-end`);
            if (n3) {
              const t4 = n3.querySelector(".message-bubble");
              if (t4) {
                const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
                return r4.length > 50 ? r4.slice(0, 50) + "..." : r4;
              }
            }
            return "Grok Conversation";
          }
          processFootnotes(t3) {
            return t3.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, ((t4, e3, r3) => {
              if (!e3 || e3.startsWith("#") || !e3.match(/^https?:\/\//i)) return t4;
              let n3;
              if (this.footnotes.find(((t5) => t5.url === e3))) n3 = this.footnotes.findIndex(((t5) => t5.url === e3)) + 1;
              else {
                this.footnoteCounter++, n3 = this.footnoteCounter;
                let t5 = e3;
                try {
                  const r4 = new URL(e3).hostname.replace(/^www\./, "");
                  t5 = `<a href="${e3}" target="_blank" rel="noopener noreferrer">${r4}</a>`;
                } catch (r4) {
                  t5 = `<a href="${e3}" target="_blank" rel="noopener noreferrer">${e3}</a>`, console.warn(`GrokExtractor: Could not parse URL for footnote: ${e3}`);
                }
                this.footnotes.push({ url: e3, text: t5 });
              }
              return `${r3}<sup id="fnref:${n3}" class="footnote-ref"><a href="#fn:${n3}" class="footnote-link">${n3}</a></sup>`;
            }));
          }
        }
        e2.GrokExtractor = i;
      }, 2458(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.HackerNewsExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.mainPost = t3.querySelector(".fatitem"), this.isListingPage = this.detectListingPage(), this.isCommentPage = this.detectCommentPage(), this.mainComment = this.isCommentPage ? this.findMainComment() : null;
          }
          detectListingPage() {
            if (this.mainPost) return false;
            return this.document.querySelectorAll("tr.athing").length > 1;
          }
          detectCommentPage() {
            var t3, e3;
            return !!(null === (t3 = this.mainPost) || void 0 === t3 ? void 0 : t3.querySelector(".onstory")) && !(null === (e3 = this.mainPost) || void 0 === e3 ? void 0 : e3.querySelector(".titleline"));
          }
          findMainComment() {
            var t3;
            return (null === (t3 = this.mainPost) || void 0 === t3 ? void 0 : t3.querySelector("tr.athing")) || null;
          }
          canExtract() {
            return !!this.mainPost || this.isListingPage;
          }
          extract() {
            if (this.isListingPage) return this.extractListing();
            const t3 = this.getPostContent(), e3 = false !== this.options.includeReplies ? this.extractComments() : "", r3 = this.createContentHtml(t3, e3), n3 = this.getPostTitle(), o2 = this.getPostAuthor(), i2 = this.createDescription(), s2 = this.getPostDate();
            return { content: r3, contentHtml: r3, extractedContent: { postId: this.getPostId(), postAuthor: o2 }, variables: { title: n3, author: o2, site: "Hacker News", description: i2, published: s2 } };
          }
          getMoreLink() {
            var t3;
            const e3 = this.document.querySelector(".morelink");
            if (!e3) return null;
            return { url: e3.getAttribute("href") || "", text: (null === (t3 = e3.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "More" };
          }
          extractListing() {
            var t3;
            const e3 = this.extractStories(), r3 = this.getMoreLink(), n3 = this.buildListingHtml(e3, r3);
            return { content: n3, contentHtml: n3, extractedContent: {}, variables: { title: (null === (t3 = this.document.title) || void 0 === t3 ? void 0 : t3.replace(/\s*\|\s*Hacker News$/, "").trim()) || "Hacker News", site: "Hacker News" } };
          }
          extractStories() {
            var t3, e3, r3, n3, o2, i2, s2, a;
            const l = Array.from(this.document.querySelectorAll("tr.athing")), c = [];
            for (const u of l) {
              const l2 = u.getAttribute("id") || "", d = u.querySelector(".titleline a");
              if (!d) continue;
              const h = (null === (t3 = d.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "", m = d.getAttribute("href") || "", f = (null === (r3 = null === (e3 = u.querySelector(".sitestr")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", p = u.nextElementSibling, g = (null === (o2 = null === (n3 = null == p ? void 0 : p.querySelector(".score")) || void 0 === n3 ? void 0 : n3.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "", v = (null === (s2 = null === (i2 = null == p ? void 0 : p.querySelector(".hnuser")) || void 0 === i2 ? void 0 : i2.textContent) || void 0 === s2 ? void 0 : s2.trim()) || "", y = null == p ? void 0 : p.querySelector(".age"), b = ((null == y ? void 0 : y.getAttribute("title")) || "").split("T")[0] || "", x = p ? Array.from(p.querySelectorAll("td.subtext a")) : [], C = x[x.length - 1], S = (null === (a = null == C ? void 0 : C.textContent) || void 0 === a ? void 0 : a.replace(/\u00a0/g, " ").trim()) || "", E = /\d+\s*comment/.test(S) ? S : "", A = l2 ? `https://news.ycombinator.com/item?id=${l2}` : "";
              c.push({ id: l2, title: h, url: m, site: f, score: g, author: v, date: b, comments: E, commentsUrl: A });
            }
            return c;
          }
          buildListingHtml(t3, e3) {
            if (0 === t3.length) return "";
            const r3 = t3.map(((t4) => {
              let e4 = "<li>";
              e4 += `<a href="${(0, o.escapeHtml)(t4.url)}">${(0, o.escapeHtml)(t4.title)}</a>`, t4.site && (e4 += ` <small>(${(0, o.escapeHtml)(t4.site)})</small>`);
              const r4 = [];
              return t4.score && r4.push((0, o.escapeHtml)(t4.score)), t4.author && r4.push(`by ${(0, o.escapeHtml)(t4.author)}`), t4.comments && r4.push(`<a href="${(0, o.escapeHtml)(t4.commentsUrl)}">${(0, o.escapeHtml)(t4.comments)}</a>`), r4.length > 0 && (e4 += `<br><small>${r4.join(" · ")}</small>`), e4 += "</li>", e4;
            }));
            let n3 = `<ol>${r3.join("")}</ol>`;
            return e3 && (n3 += `<p><a href="${(0, o.escapeHtml)(e3.url)}">${(0, o.escapeHtml)(e3.text)}</a></p>`), n3;
          }
          createContentHtml(t3, e3) {
            return (0, i.buildContentHtml)("hackernews", t3, e3);
          }
          getPostContent() {
            var t3, e3, r3, n3;
            if (!this.mainPost) return "";
            if (this.isCommentPage && this.mainComment) {
              const n4 = (null === (t3 = this.mainComment.querySelector(".hnuser")) || void 0 === t3 ? void 0 : t3.textContent) || "[deleted]", s3 = this.mainComment.querySelector(".commtext"), a2 = s3 ? (0, o.serializeHTML)(s3) : "", l2 = this.mainComment.querySelector(".age"), c2 = ((null == l2 ? void 0 : l2.getAttribute("title")) || "").split("T")[0] || "", u = (null === (r3 = null === (e3 = this.mainComment.querySelector(".score")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
              return (0, i.buildComment)({ author: n4, date: c2, content: a2, score: u || void 0 });
            }
            const s2 = this.mainPost.querySelector("tr.athing"), a = (null == s2 || s2.nextElementSibling, (null === (n3 = null == s2 ? void 0 : s2.querySelector(".titleline a")) || void 0 === n3 ? void 0 : n3.getAttribute("href")) || "");
            let l = "";
            a && (l += `<p><a href="${a}" target="_blank">${a}</a></p>`);
            const c = this.mainPost.querySelector(".toptext");
            return c && (l += `<div class="post-text">${(0, o.serializeHTML)(c)}</div>`), l;
          }
          extractComments() {
            const t3 = Array.from(this.document.querySelectorAll("tr.comtr"));
            return this.processComments(t3);
          }
          processComments(t3) {
            var e3, r3, n3, s2;
            const a = [], l = /* @__PURE__ */ new Set();
            for (const i2 of t3) {
              const t4 = i2.getAttribute("id");
              if (!t4 || l.has(t4)) continue;
              l.add(t4);
              const c = (null === (e3 = i2.querySelector(".ind img")) || void 0 === e3 ? void 0 : e3.getAttribute("width")) || "0", u = parseInt(c) / 40, d = i2.querySelector(".commtext"), h = (null === (r3 = i2.querySelector(".hnuser")) || void 0 === r3 ? void 0 : r3.textContent) || "[deleted]", m = i2.querySelector(".age"), f = (null === (s2 = null === (n3 = i2.querySelector(".score")) || void 0 === n3 ? void 0 : n3.textContent) || void 0 === s2 ? void 0 : s2.trim()) || "";
              if (!d) continue;
              const p = `https://news.ycombinator.com/item?id=${t4}`, g = ((null == m ? void 0 : m.getAttribute("title")) || "").split("T")[0] || "";
              a.push({ author: h, date: g, content: (0, o.serializeHTML)(d), depth: u, score: f || void 0, url: p });
            }
            return (0, i.buildCommentTree)(a);
          }
          getPostId() {
            const t3 = this.url.match(/id=(\d+)/);
            return (null == t3 ? void 0 : t3[1]) || "";
          }
          getPostTitle() {
            var t3, e3, r3, n3, o2;
            if (this.isCommentPage && this.mainComment) {
              const r4 = (null === (t3 = this.mainComment.querySelector(".hnuser")) || void 0 === t3 ? void 0 : t3.textContent) || "[deleted]", n4 = (null === (e3 = this.mainComment.querySelector(".commtext")) || void 0 === e3 ? void 0 : e3.textContent) || "";
              return `Comment by ${r4}: ${n4.trim().slice(0, 50) + (n4.length > 50 ? "..." : "")}`;
            }
            return (null === (o2 = null === (n3 = null === (r3 = this.mainPost) || void 0 === r3 ? void 0 : r3.querySelector(".titleline")) || void 0 === n3 ? void 0 : n3.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "";
          }
          getPostAuthor() {
            var t3, e3, r3;
            return (null === (r3 = null === (e3 = null === (t3 = this.mainPost) || void 0 === t3 ? void 0 : t3.querySelector(".hnuser")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
          }
          createDescription() {
            const t3 = this.getPostTitle(), e3 = this.getPostAuthor();
            return this.isCommentPage ? `Comment by ${e3} on Hacker News` : `${t3} - by ${e3} on Hacker News`;
          }
          getPostDate() {
            if (!this.mainPost) return "";
            const t3 = this.mainPost.querySelector(".age");
            return ((null == t3 ? void 0 : t3.getAttribute("title")) || "").split("T")[0] || "";
          }
        }
        e2.HackerNewsExtractor = s;
      }, 7228(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.LeetCodeExtractor = void 0;
        const n2 = r2(2279);
        class o extends n2.BaseExtractor {
          canExtract() {
            return null !== this.document.querySelector('[data-track-load="description_content"]');
          }
          extract() {
            var t3;
            const e3 = (null === (t3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "";
            return { content: "", contentHtml: "", contentSelector: '[data-track-load="description_content"]', variables: { title: e3.replace(/\s*[-\u2013\u2014]\s*LeetCode\s*$/, "") || e3, site: "LeetCode" } };
          }
        }
        e2.LeetCodeExtractor = o;
      }, 8477(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.LinkedInExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.postArticle = t3.querySelector('[role="article"].feed-shared-update-v2');
          }
          canExtract() {
            return !!this.postArticle;
          }
          extract() {
            var t3;
            const e3 = this.getPostContent(), r3 = false !== this.options.includeReplies ? this.extractComments() : "", n3 = (0, i.buildContentHtml)("linkedin", e3, r3), o2 = this.getAuthorName(), s2 = this.createDescription();
            return { content: n3, contentHtml: n3, extractedContent: { postUrn: (null === (t3 = this.postArticle) || void 0 === t3 ? void 0 : t3.getAttribute("data-urn")) || "" }, variables: { title: this.postTitle(o2, "LinkedIn"), author: o2, site: "LinkedIn", description: s2 } };
          }
          getPostContent() {
            if (!this.postArticle) return "";
            const t3 = this.postArticle.querySelector(".feed-shared-update-v2__update-content-wrapper"), e3 = this.postArticle.querySelector(".update-components-text.update-components-update-v2__commentary"), r3 = !e3 || t3 && t3.contains(e3) ? "" : this.cleanTextContent(e3), n3 = this.extractImages(), o2 = this.extractVideo(), i2 = this.extractQuotedPost(t3);
            let s2 = "";
            return r3 && (s2 += r3), n3 && (s2 += `
${n3}`), o2 && (s2 += `
${o2}`), i2 && (s2 += `
${i2}`), s2;
          }
          getVisibleText(t3, e3) {
            var r3;
            const n3 = t3.cloneNode(true), o2 = e3 ? `.visually-hidden, ${e3}` : ".visually-hidden";
            return n3.querySelectorAll(o2).forEach(((t4) => t4.remove())), (null === (r3 = n3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
          }
          cleanTextContent(t3) {
            const e3 = t3.cloneNode(true);
            e3.querySelectorAll(".visually-hidden, .feed-shared-inline-show-more-text__see-more-less-toggle").forEach(((t4) => t4.remove())), e3.querySelectorAll("a").forEach(((t4) => {
              var e4;
              const r4 = t4.getAttribute("href") || "", n3 = (null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "";
              if (r4 && n3) {
                const e5 = this.document.createElement("a");
                e5.setAttribute("href", r4), e5.textContent = n3, t4.replaceWith(e5);
              } else t4.replaceWith(t4.textContent || "");
            })), e3.querySelectorAll("span, div").forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            }));
            let r3 = (0, o.serializeHTML)(e3).trim();
            r3 = r3.replace(/<!--.*?-->/g, "");
            return r3.split(/(?:<br\s*\/?>\s*){2,}|\n{2,}/).map(((t4) => t4.replace(/<br\s*\/?>/g, " ").replace(/\s+/g, " ").trim())).filter(((t4) => t4)).map(((t4) => `<p>${t4}</p>`)).join("\n");
          }
          extractQuotedPost(t3) {
            var e3;
            if (!t3) return "";
            const r3 = t3.querySelector(".update-components-actor__title"), n3 = r3 ? this.getVisibleText(r3, ".update-components-actor__supplementary-actor-info, .text-view-model__verified-icon") : "", o2 = t3.querySelector(".update-components-actor__sub-description");
            let s2 = "";
            if (o2) {
              const t4 = ((null === (e3 = (o2.querySelector('[aria-hidden="true"]') || o2).textContent) || void 0 === e3 ? void 0 : e3.trim()) || "").match(/^(\d+\w+)/);
              s2 = t4 ? t4[1] : "";
            }
            const a = t3.querySelector(".update-components-text.update-components-update-v2__commentary"), l = a ? this.cleanTextContent(a) : "", c = t3.querySelector("a.update-components-mini-update-v2__link-to-details-page"), u = (null == c ? void 0 : c.getAttribute("href")) || "", d = u ? (u.startsWith("http") ? u : `https://www.linkedin.com${u}`).split("?")[0] : "";
            return (0, i.buildQuotedPost)({ author: n3 || void 0, date: s2 || void 0, content: l, url: d || void 0 });
          }
          extractImages() {
            if (!this.postArticle) return "";
            const t3 = [];
            return this.postArticle.querySelectorAll(".update-components-image img, .feed-shared-image img").forEach(((e3) => {
              const r3 = e3.getAttribute("src") || "", n3 = e3.getAttribute("alt") || "";
              !r3 || r3.includes("profile-displayphoto") || r3.includes("avm-avatar") || t3.push(`<img src="${(0, o.escapeHtml)(r3)}" alt="${(0, o.escapeHtml)(n3)}" />`);
            })), t3.join("\n");
          }
          extractVideo() {
            if (!this.postArticle) return "";
            const t3 = this.postArticle.querySelector(".update-components-linkedin-video video[poster]");
            if (!t3) return "";
            const e3 = t3.getAttribute("poster") || "";
            return `<img src="${(0, o.escapeHtml)(e3)}" alt="Video thumbnail" />`;
          }
          extractComments() {
            if (!this.postArticle) return "";
            const t3 = [], e3 = this.postArticle.querySelectorAll("article.comments-comment-entity:not(.comments-comment-entity--reply)");
            for (const r3 of Array.from(e3)) {
              const e4 = this.extractCommentData(r3, 0);
              e4 && t3.push(e4);
              const n3 = r3.querySelectorAll(".comments-replies-list article.comments-comment-entity--reply");
              for (const e5 of Array.from(n3)) {
                const r4 = this.extractCommentData(e5, 1);
                r4 && t3.push(r4);
              }
            }
            return t3.length > 0 ? (0, i.buildCommentTree)(t3) : "";
          }
          extractCommentData(t3, e3) {
            var r3, n3, o2, i2, s2;
            const a = (null === (n3 = null === (r3 = t3.querySelector(".comments-comment-meta__description-title")) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "";
            if (!a) return null;
            const l = t3.querySelector(".comments-comment-entity__content .update-components-text"), c = l ? this.cleanTextContent(l) : "", u = t3.querySelector("time.comments-comment-meta__data"), d = (null === (o2 = null == u ? void 0 : u.textContent) || void 0 === o2 ? void 0 : o2.trim()) || "", h = t3.querySelector("a.comments-comment-meta__description-container"), m = (null === (i2 = null == h ? void 0 : h.getAttribute("href")) || void 0 === i2 ? void 0 : i2.split("?")[0]) || "";
            let f = "";
            m && (f = m.startsWith("http") ? m : `https://www.linkedin.com${m}`);
            const p = t3.querySelector(".comments-comment-social-bar__reactions-count--cr span.v-align-middle"), g = (null === (s2 = null == p ? void 0 : p.textContent) || void 0 === s2 ? void 0 : s2.trim()) || "";
            return { author: a, date: d, content: c, depth: e3, score: g ? `${g} reactions` : void 0, url: f || void 0 };
          }
          getAuthorName() {
            if (!this.postArticle) return "";
            const t3 = this.postArticle.querySelector(".update-components-actor__title");
            return t3 ? this.getVisibleText(t3, ".text-view-model__verified-icon, .update-components-actor__supplementary-actor-info") : "";
          }
          createDescription() {
            if (!this.postArticle) return "";
            const t3 = this.postArticle.querySelector(".feed-shared-update-v2__update-content-wrapper"), e3 = this.postArticle.querySelector(".update-components-text.update-components-update-v2__commentary");
            return !e3 || t3 && t3.contains(e3) ? "" : this.getVisibleText(e3).slice(0, 140).replace(/\s+/g, " ");
          }
        }
        e2.LinkedInExtractor = s;
      }, 7278(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.LwnExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          canExtract() {
            return !!this.document.querySelector(".PageHeadline") && !!this.document.querySelector(".ArticleText");
          }
          extract() {
            var t3, e3, r3, n3, o2, s2;
            const a = this.document.querySelector(".ArticleText main"), l = a ? this.getArticleContent(a) : "", c = false !== this.options.includeReplies && a ? this.extractComments(a) : "", u = (0, i.buildContentHtml)("lwn", l, c), d = (null === (e3 = null === (t3 = this.document.querySelector(".Byline")) || void 0 === t3 ? void 0 : t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            return { content: u, contentHtml: u, extractedContent: {}, variables: { title: (null === (n3 = null === (r3 = this.document.querySelector(".PageHeadline h1")) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", author: (null === (o2 = d.match(/by\s+(\w+)/i)) || void 0 === o2 ? void 0 : o2[1]) || "", site: "LWN.net", published: this.parseDate(d), description: (null === (s2 = this.document.querySelector('meta[property="og:description"]')) || void 0 === s2 ? void 0 : s2.getAttribute("content")) || "" } };
          }
          parseDate(t3) {
            const e3 = t3.match(/Posted\s+(\w+\s+\d+,\s+\d{4})/);
            if (!e3) return "";
            const r3 = new Date(e3[1]);
            return isNaN(r3.getTime()) ? "" : r3.toISOString().split("T")[0];
          }
          getArticleContent(t3) {
            const e3 = t3.cloneNode(true);
            for (const t4 of Array.from(e3.querySelectorAll('details.CommentBox, form, a[name^="Comm"]'))) t4.remove();
            let r3 = e3.lastElementChild;
            for (; r3 && ("HR" === r3.tagName || "BR" === r3.tagName && r3.getAttribute("clear")); ) {
              const t4 = r3.previousElementSibling;
              r3.remove(), r3 = t4;
            }
            return (0, o.serializeHTML)(e3);
          }
          extractComments(t3) {
            const e3 = Array.from(t3.querySelectorAll("details.CommentBox")), r3 = [];
            for (const n3 of e3) {
              const e4 = this.getCommentDepth(n3, t3), o2 = this.extractCommentData(n3, e4);
              o2 && r3.push(o2);
            }
            return r3.length > 0 ? (0, i.buildCommentTree)(r3) : "";
          }
          getCommentDepth(t3, e3) {
            let r3 = 0, n3 = t3.parentElement;
            for (; n3 && n3 !== e3; ) "DETAILS" === n3.tagName && n3.classList.contains("CommentBox") && r3++, n3 = n3.parentElement;
            return r3;
          }
          extractCommentData(t3, e3) {
            var r3, n3, o2, i2, s2, a, l;
            const c = t3.querySelector(":scope > summary .CommentPoster");
            if (!c) return null;
            const u = (null === (n3 = null === (r3 = c.querySelector("b")) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", d = c.querySelector('a[href^="/Articles/"]'), h = (null == d ? void 0 : d.getAttribute("href")) || "", m = h ? `https://lwn.net${h}` : "", f = this.parseDate(c.textContent || ""), p = (null === (i2 = null === (o2 = t3.querySelector(":scope > summary h3.CommentTitle")) || void 0 === o2 ? void 0 : o2.textContent) || void 0 === i2 ? void 0 : i2.trim()) || "", g = null === (s2 = t3.parentElement) || void 0 === s2 ? void 0 : s2.closest("details.CommentBox"), v = (null === (l = null === (a = null == g ? void 0 : g.querySelector(":scope > summary h3.CommentTitle")) || void 0 === a ? void 0 : a.textContent) || void 0 === l ? void 0 : l.trim()) || "", y = p && p !== v ? p : "";
            return { author: u, date: f, content: this.getCommentContent(t3, y), depth: e3, url: m };
          }
          getCommentContent(t3, e3) {
            var r3, n3;
            let i2 = "";
            e3 && (i2 += `<p><strong>${(0, o.escapeHtml)(e3)}</strong></p>`);
            const s2 = t3.querySelector(":scope > .FormattedComment");
            if (s2) i2 += (0, o.serializeHTML)(s2);
            else {
              const e4 = this.document.createElement("div");
              for (const o2 of Array.from(t3.childNodes)) {
                if (1 === o2.nodeType) {
                  const t4 = o2, e5 = t4.tagName;
                  if ("SUMMARY" === e5 || "DETAILS" === e5 || t4.classList.contains("CommentReplyButton")) continue;
                  if ("FORM" === e5) continue;
                  if ("A" === e5 && (null === (r3 = t4.getAttribute("name")) || void 0 === r3 ? void 0 : r3.startsWith("CommAnchor"))) continue;
                  if ("P" === e5 && !(null === (n3 = t4.textContent) || void 0 === n3 ? void 0 : n3.trim())) continue;
                }
                e4.appendChild(o2.cloneNode(true));
              }
              const s3 = (0, o.serializeHTML)(e4).trim();
              s3 && (i2 += s3);
            }
            return i2;
          }
        }
        e2.LwnExtractor = s;
      }, 9964(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.MastodonExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.mainPost = null, this.replyStatuses = [], this.mainPost = t3.querySelector(".detailed-status__wrapper");
            const o2 = Array.from(t3.querySelectorAll(".status__wrapper"));
            this.replyStatuses = o2.filter(((t4) => !!t4.querySelector(".status[data-id]")));
          }
          canExtract() {
            if (!this.mainPost) return false;
            if (this.document.getElementById("mastodon")) return true;
            const t3 = this.document.querySelector("script#initial-state");
            if (t3) {
              const e3 = t3.textContent || "";
              if (e3.includes("mastodon/mastodon") || e3.includes('"mastodon"')) return true;
            }
            return Array.from(this.document.querySelectorAll('link[rel="stylesheet"]')).some(((t4) => (t4.getAttribute("href") || "").includes("mastodon")));
          }
          extract() {
            var t3;
            const e3 = this.getFullHandle(this.mainPost), r3 = e3.split("@")[0], n3 = this.getDisplayName(this.mainPost), o2 = [], s2 = [];
            let a = false;
            for (const t4 of this.replyStatuses) {
              const e4 = this.getFullHandle(t4).split("@")[0];
              a || e4 !== r3 ? (a = true, s2.push(t4)) : o2.push(t4);
            }
            const l = [this.extractPostContent(this.mainPost), ...o2.map(((t4) => this.extractPostContent(t4)))].filter(Boolean).join("\n<hr>\n"), c = false !== this.options.includeReplies ? this.extractComments(s2) : "", u = (0, i.buildContentHtml)("mastodon", l, c), d = n3 || `@${e3}`, h = this.getDescription(), m = this.getPublishedDate(), f = (null === (t3 = this.document.querySelector('meta[property="og:site_name"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "", p = this.postTitle(d, f || "Mastodon");
            return { content: u, contentHtml: u, extractedContent: { postAuthor: e3 }, variables: Object.assign({ title: p, author: d, site: f || "Mastodon", description: h }, m && { published: m }) };
          }
          getFullHandle(t3) {
            var e3;
            const r3 = t3.querySelector(".display-name__account");
            return ((null === (e3 = null == r3 ? void 0 : r3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "").replace(/^@/, "");
          }
          getDisplayName(t3) {
            var e3;
            const r3 = t3.querySelector(".display-name__html");
            if (!r3) return "";
            const n3 = r3.cloneNode(true);
            return this.replaceEmojiImages(n3), (null === (e3 = n3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          }
          getReplyDate(t3) {
            const e3 = t3.querySelector("time[datetime]");
            if (!e3) return "";
            const r3 = e3.getAttribute("datetime") || "";
            try {
              return new Date(r3).toISOString().split("T")[0];
            } catch (t4) {
              return "";
            }
          }
          getReplyPermalink(t3) {
            const e3 = t3.querySelector("a.status__relative-time[href]");
            if (!e3) return "";
            const r3 = e3.getAttribute("href") || "";
            if (!r3) return "";
            try {
              const t4 = new URL(this.url);
              return r3.startsWith("http") ? r3 : `${t4.origin}${r3}`;
            } catch (t4) {
              return r3;
            }
          }
          getPublishedDate() {
            const t3 = this.document.querySelector('meta[property="og:published_time"]');
            if (t3) {
              const e3 = t3.getAttribute("content") || "";
              try {
                return new Date(e3).toISOString().split("T")[0];
              } catch (t4) {
              }
            }
            if (this.mainPost) {
              const t4 = this.mainPost.querySelector("time[datetime]");
              if (t4) try {
                return new Date(t4.getAttribute("datetime") || "").toISOString().split("T")[0];
              } catch (t5) {
              }
            }
            return "";
          }
          getDescription() {
            if (!this.mainPost) return "";
            const t3 = this.mainPost.querySelector(".status__content__text");
            return t3 ? (t3.textContent || "").trim().slice(0, 140).replace(/\s+/g, " ") : "";
          }
          extractPostContent(t3) {
            const e3 = [], r3 = this.extractTextContent(t3.querySelector(".status__content"));
            r3 && e3.push(r3);
            const n3 = this.extractImages(t3);
            n3 && e3.push(n3);
            const o2 = this.extractLinkCard(t3);
            return o2 && e3.push(o2), e3.join("\n");
          }
          extractTextContent(t3) {
            if (!t3) return "";
            const e3 = t3.querySelector(".status__content__text");
            if (!e3) return "";
            const r3 = e3.cloneNode(true);
            return this.replaceEmojiImages(r3), r3.querySelectorAll("span.invisible").forEach(((t4) => t4.remove())), r3.querySelectorAll("span").forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            })), (r3.innerHTML || r3.textContent || "").trim();
          }
          replaceEmojiImages(t3) {
            t3.querySelectorAll("img.emojione").forEach(((t4) => {
              const e3 = t4.getAttribute("alt") || "";
              e3 ? t4.replaceWith(t4.ownerDocument.createTextNode(e3)) : t4.remove();
            }));
          }
          extractImages(t3) {
            const e3 = t3.querySelector(".media-gallery");
            if (!e3) return "";
            const r3 = [];
            return e3.querySelectorAll(".media-gallery__item-thumbnail").forEach(((t4) => {
              const e4 = t4.getAttribute("href") || "", n3 = t4.querySelector("img"), i2 = (null == n3 ? void 0 : n3.getAttribute("alt")) || "";
              e4 && r3.push(`<img src="${(0, o.escapeHtml)(e4)}" alt="${(0, o.escapeHtml)(i2)}" />`);
            })), r3.join("\n");
          }
          extractLinkCard(t3) {
            var e3, r3, n3, i2;
            const s2 = t3.querySelector("a.status-card[href]");
            if (!s2) return "";
            const a = s2.getAttribute("href") || "", l = (null === (r3 = null === (e3 = s2.querySelector(".status-card__title")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", c = (null === (i2 = null === (n3 = s2.querySelector(".status-card__description")) || void 0 === n3 ? void 0 : n3.textContent) || void 0 === i2 ? void 0 : i2.trim()) || "", u = s2.querySelector(".status-card__image-image");
            if (!l && !a) return "";
            let d = "";
            if (u) {
              const t4 = u.getAttribute("src") || "";
              t4 && (d += `<a href="${(0, o.escapeHtml)(a)}"><img src="${(0, o.escapeHtml)(t4)}" alt="${(0, o.escapeHtml)(l)}" /></a>
`);
            }
            return d += `<p><a href="${(0, o.escapeHtml)(a)}">${(0, o.escapeHtml)(l || a)}</a></p>`, c && (d += `
<p>${(0, o.escapeHtml)(c)}</p>`), d;
          }
          extractComments(t3) {
            if (0 === t3.length) return "";
            let e3 = 0;
            const r3 = t3.map(((t4, r4) => {
              const n3 = this.getFullHandle(t4), o2 = this.getDisplayName(t4), i2 = this.extractPostContent(t4), s2 = this.getReplyDate(t4), a = this.getReplyPermalink(t4);
              return t4.querySelector(".status--first-in-thread") || 0 === r4 ? e3 = 0 : e3++, { author: o2 ? `${o2} @${n3}` : `@${n3}`, date: s2, content: i2, depth: e3, url: a || void 0 };
            }));
            return (0, i.buildCommentTree)(r3);
          }
        }
        e2.MastodonExtractor = s;
      }, 1756(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.MediumExtractor = void 0;
        const n2 = r2(2279);
        class o extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.article = t3.querySelector("article.meteredContent") || t3.querySelector("article");
          }
          canExtract() {
            var t3, e3, r3;
            if (!this.article) return false;
            if (null === (t3 = this.article.classList) || void 0 === t3 ? void 0 : t3.contains("meteredContent")) return true;
            const n3 = (null === (e3 = this.document.querySelector('meta[property="og:site_name"]')) || void 0 === e3 ? void 0 : e3.getAttribute("content")) || "", o2 = (null === (r3 = this.document.querySelector('meta[property="al:android:app_name"]')) || void 0 === r3 ? void 0 : r3.getAttribute("content")) || "";
            return "Medium" === n3 || "Medium" === o2;
          }
          extract() {
            const t3 = this.getTitle(), e3 = this.getSubtitle(), r3 = this.getAuthor(), n3 = this.getPublication();
            this.cleanArticle();
            return { content: "", contentHtml: "", contentSelector: "article", extractedContent: { publication: n3 }, variables: { title: t3, author: r3, site: n3 || "Medium", description: e3 || this.getDescription() } };
          }
          cleanArticle() {
            if (!this.article) return;
            this.article.querySelectorAll('figure [role="button"]').forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            })), this.article.querySelectorAll('[role="tooltip"]').forEach(((t4) => {
              t4.removeAttribute("role");
            })), this.article.querySelectorAll('a[href*="medium.com/plans"]').forEach(((t4) => {
              const e3 = t4.closest("div");
              e3 && e3 !== this.article ? e3.remove() : t4.remove();
            })), this.article.querySelectorAll('[data-testid="post-preview"]').forEach(((t4) => t4.remove())), this.article.querySelectorAll('[data-testid*="Clap"], [data-testid*="Bookmark"], [data-testid*="Share"], [data-testid*="Response"]').forEach(((t4) => t4.remove())), this.article.querySelectorAll('[data-testid="authorPhoto"], [data-testid="authorName"], [data-testid="storyReadTime"]').forEach(((t4) => t4.remove()));
            const t3 = /* @__PURE__ */ new Set(["Member-only story", "Listen", "Share", "Top highlight", "·", "Press enter or click to view image in full size"]);
            this.article.querySelectorAll("p, span, div").forEach(((e3) => {
              var r3;
              const n3 = (null === (r3 = e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
              n3 && (t3.has(n3) || /^\w{3}\s+\d{1,2},\s+\d{4}/.test(n3) && n3.length < 30 || /^\xb7\s*\d+\s*\w+\s*ago$/.test(n3) || /^\xb7?\s*\d+\s*min\s*read$/.test(n3)) && e3.remove();
            }));
          }
          getTitle() {
            var t3, e3, r3, n3;
            const o2 = this.document.querySelector('[data-testid="storyTitle"]');
            return o2 ? (null === (t3 = o2.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "" : (null === (n3 = null === (r3 = null === (e3 = this.article) || void 0 === e3 ? void 0 : e3.querySelector("h1")) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "";
          }
          getSubtitle() {
            var t3, e3;
            return (null === (e3 = null === (t3 = this.document.querySelector(".pw-subtitle-paragraph")) || void 0 === t3 ? void 0 : t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          }
          getAuthor() {
            var t3, e3;
            return (null === (e3 = null === (t3 = this.document.querySelector('[data-testid="authorName"]')) || void 0 === t3 ? void 0 : t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
          }
          getPublication() {
            var t3;
            const e3 = this.document.querySelector('meta[property="og:site_name"]'), r3 = (null == e3 ? void 0 : e3.getAttribute("content")) || "";
            if (r3 && "Medium" !== r3) return r3;
            const n3 = Array.isArray(this.schemaOrgData) ? this.schemaOrgData : [this.schemaOrgData];
            for (const e4 of n3) if (null === (t3 = null == e4 ? void 0 : e4.publisher) || void 0 === t3 ? void 0 : t3.name) return e4.publisher.name;
            return "";
          }
          getDescription() {
            var t3;
            if (!this.article) return "";
            const e3 = this.article.querySelectorAll("p");
            for (const r3 of Array.from(e3)) {
              const e4 = (null === (t3 = r3.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "";
              if (!(e4.length < 3 || /^[\d\W]+$/.test(e4))) return e4.slice(0, 140).replace(/\s+/g, " ");
            }
            return "";
          }
        }
        e2.MediumExtractor = o;
      }, 8090(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.NytimesExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = "data-defuddle-nyt";
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            var s2;
            if (super(t3, e3, r3, n3), this.preloadedData = null, this.contentSelector = null, this.preloadedData = this.extractPreloadData(), this.preloadedData) {
              const e4 = this.preloadedData.sprinkledBody || this.preloadedData.body;
              if (null === (s2 = null == e4 ? void 0 : e4.content) || void 0 === s2 ? void 0 : s2.length) {
                if (!t3.querySelector(`[${i}]`)) {
                  const r4 = t3.createElement("div");
                  r4.setAttribute(i, ""), r4.appendChild((0, o.parseHTML)(t3, this.renderBlocks(e4.content))), t3.body.appendChild(r4);
                }
                this.contentSelector = `[${i}]`;
              }
            }
          }
          canExtract() {
            return null !== this.contentSelector;
          }
          extract() {
            var t3, e3, r3;
            const n3 = this.preloadedData, o2 = (null === (t3 = n3.headline) || void 0 === t3 ? void 0 : t3.default) || "", i2 = ((null === (r3 = null === (e3 = n3.bylines) || void 0 === e3 ? void 0 : e3[0]) || void 0 === r3 ? void 0 : r3.creators) || []).map(((t4) => t4.displayName)).filter(Boolean).join(", "), s2 = n3.firstPublished || "", a = n3.summary || "";
            return { content: "", contentHtml: "", contentSelector: this.contentSelector, variables: { title: o2, author: i2, published: s2, description: a } };
          }
          extractPreloadData() {
            var t3, e3;
            const r3 = this.document.querySelectorAll("script:not([src])");
            for (const n3 of r3) {
              const r4 = n3.textContent || "";
              if (!r4.includes("window.__preloadedData")) continue;
              const o2 = r4.match(/window\.__preloadedData\s*=\s*({[\s\S]+})\s*;?\s*$/);
              if (o2) try {
                const r5 = o2[1].replace(/(?<=:)undefined(?=[,}\]])/g, "null");
                return (null === (e3 = null === (t3 = JSON.parse(r5).initialData) || void 0 === t3 ? void 0 : t3.data) || void 0 === e3 ? void 0 : e3.article) || null;
              } catch (t4) {
                return null;
              }
            }
            return null;
          }
          renderBlocks(t3) {
            var e3, r3, n3;
            const o2 = [];
            for (const i2 of t3) switch (i2.__typename) {
              case "ParagraphBlock":
                o2.push(`<p>${this.renderInlines(i2.content)}</p>`);
                break;
              case "Heading2Block":
                o2.push(`<h2>${this.renderInlines(i2.content)}</h2>`);
                break;
              case "Heading3Block":
                o2.push(`<h3>${this.renderInlines(i2.content)}</h3>`);
                break;
              case "Heading4Block":
                o2.push(`<h4>${this.renderInlines(i2.content)}</h4>`);
                break;
              case "ImageBlock": {
                const t4 = i2.media;
                if (!t4) break;
                const n4 = this.getBestImageUrl(t4);
                if (!n4) break;
                const s2 = this.escapeAttr(t4.altText || (null === (e3 = t4.caption) || void 0 === e3 ? void 0 : e3.text) || ""), a = [(null === (r3 = t4.caption) || void 0 === r3 ? void 0 : r3.text) || "", t4.credit || ""].filter(Boolean);
                a.length ? o2.push(`<figure><img src="${this.escapeAttr(n4)}" alt="${s2}"><figcaption>${this.escapeHtml(a.join(" "))}</figcaption></figure>`) : o2.push(`<img src="${this.escapeAttr(n4)}" alt="${s2}">`);
                break;
              }
              case "HeaderBasicBlock":
              case "Dropzone":
                break;
              default: {
                const t4 = i2;
                (null === (n3 = t4.content) || void 0 === n3 ? void 0 : n3.length) && o2.push(`<p>${this.renderInlines(t4.content)}</p>`);
                break;
              }
            }
            return o2.join("\n");
          }
          renderInlines(t3) {
            return t3 ? t3.map(((t4) => {
              var e3;
              let r3 = this.escapeHtml(t4.text || "");
              if (!(null === (e3 = t4.formats) || void 0 === e3 ? void 0 : e3.length)) return r3;
              for (const e4 of t4.formats) switch (e4.__typename) {
                case "BoldFormat":
                  r3 = `<strong>${r3}</strong>`;
                  break;
                case "ItalicFormat":
                  r3 = `<em>${r3}</em>`;
                  break;
                case "LinkFormat":
                  e4.url && (r3 = `<a href="${this.escapeAttr(e4.url)}">${r3}</a>`);
              }
              return r3;
            })).join("") : "";
          }
          getBestImageUrl(t3) {
            var e3, r3;
            const n3 = null == t3 ? void 0 : t3.crops;
            if (!(null == n3 ? void 0 : n3.length)) return null;
            const o2 = ["superJumbo", "jumbo", "articleLarge"];
            for (const t4 of o2) for (const r4 of n3) {
              const n4 = null === (e3 = r4.renditions) || void 0 === e3 ? void 0 : e3.find(((e4) => e4.name === t4));
              if (null == n4 ? void 0 : n4.url) return n4.url;
            }
            for (const t4 of n3) if ((null === (r3 = t4.renditions) || void 0 === r3 ? void 0 : r3.length) && t4.renditions[0].url) return t4.renditions[0].url;
            return null;
          }
          escapeHtml(t3) {
            return t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          escapeAttr(t3) {
            return t3.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
        }
        e2.NytimesExtractor = s;
      }, 5959(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.RedditExtractor = void 0;
        const o = r2(2279), i = r2(639), s = r2(6077);
        class a extends o.BaseExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.shredditPost = t3.querySelector("shreddit-post"), this.isOldReddit = !!t3.querySelector(".thing.link");
          }
          canExtract() {
            return !!this.shredditPost || this.isOldReddit;
          }
          canExtractAsync() {
            return this.isCommentsPage() && !this.isOldReddit;
          }
          prefersAsync() {
            const t3 = "undefined" != typeof window && this.document.defaultView === window;
            return this.isCommentsPage() && !this.isOldReddit && !t3;
          }
          isCommentsPage() {
            return /\/r\/.+\/comments\//.test(this.url);
          }
          extractAsync() {
            return n2(this, void 0, void 0, (function* () {
              var t3, e3;
              const r3 = new URL(this.url);
              r3.hostname = "old.reddit.com";
              const n3 = yield this.fetch(r3.toString(), { headers: { "User-Agent": "Mozilla/5.0 (compatible; Defuddle/1.0)" } });
              if (!n3.ok) throw new Error(`Failed to fetch old.reddit.com: ${n3.status}`);
              const o2 = yield n3.text(), i2 = null !== (e3 = null === (t3 = this.document.defaultView) || void 0 === t3 ? void 0 : t3.DOMParser) && void 0 !== e3 ? e3 : "undefined" != typeof DOMParser ? DOMParser : null;
              if (!i2) throw new Error("DOMParser is not available in this environment");
              const s2 = new i2().parseFromString(o2, "text/html");
              return this.extractOldReddit(s2);
            }));
          }
          extract() {
            var t3, e3;
            if (this.isOldReddit) return this.extractOldReddit(this.document);
            const r3 = (null === (e3 = null === (t3 = this.document.querySelector("h1")) || void 0 === t3 ? void 0 : t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "", n3 = this.getSubreddit(), o2 = this.getPostAuthor(), i2 = this.getPostContent(), s2 = this.createDescription(i2), a2 = false !== this.options.includeReplies ? this.extractComments() : "", l = this.createContentHtml(i2, a2);
            return { content: l, contentHtml: l, extractedContent: { postId: this.getPostId(), subreddit: n3, postAuthor: o2 }, variables: { title: r3, author: o2, site: `r/${n3}`, description: s2 } };
          }
          extractOldReddit(t3) {
            var e3, r3;
            const n3 = t3.querySelector(".thing.link"), o2 = (null === (r3 = null === (e3 = null == n3 ? void 0 : n3.querySelector("a.title")) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", a2 = (null == n3 ? void 0 : n3.getAttribute("data-author")) || "", l = (null == n3 ? void 0 : n3.getAttribute("data-subreddit")) || "", c = null == n3 ? void 0 : n3.querySelector(".usertext-body .md"), u = c ? (0, i.serializeHTML)(c) : "";
            let d = "";
            if (false !== this.options.includeReplies) {
              const e4 = t3.querySelector(".commentarea .sitetable"), r4 = e4 ? this.collectOldRedditComments(e4) : [];
              d = r4.length > 0 ? (0, s.buildCommentTree)(r4) : "";
            }
            const h = this.createContentHtml(u, d), m = this.createDescription(u);
            return { content: h, contentHtml: h, extractedContent: { postId: this.getPostId(), subreddit: l, postAuthor: a2 }, variables: { title: o2, author: a2, site: `r/${l}`, description: m } };
          }
          getPostContent() {
            var t3, e3, r3;
            const n3 = null === (t3 = this.shredditPost) || void 0 === t3 ? void 0 : t3.querySelector('[slot="text-body"]');
            return (n3 ? (0, i.serializeHTML)(n3) : "") + ((null === (r3 = null === (e3 = this.shredditPost) || void 0 === e3 ? void 0 : e3.querySelector("#post-image")) || void 0 === r3 ? void 0 : r3.outerHTML) || "");
          }
          createContentHtml(t3, e3) {
            return (0, s.buildContentHtml)("reddit", t3, e3);
          }
          extractComments() {
            const t3 = Array.from(this.document.querySelectorAll("shreddit-comment"));
            return this.processComments(t3);
          }
          getPostId() {
            const t3 = this.url.match(/comments\/([a-zA-Z0-9]+)/);
            return (null == t3 ? void 0 : t3[1]) || "";
          }
          getSubreddit() {
            const t3 = this.url.match(/\/r\/([^/]+)/);
            return (null == t3 ? void 0 : t3[1]) || "";
          }
          getPostAuthor() {
            var t3;
            return (null === (t3 = this.shredditPost) || void 0 === t3 ? void 0 : t3.getAttribute("author")) || "";
          }
          createDescription(t3) {
            var e3;
            if (!t3) return "";
            const r3 = this.document.createElement("div");
            return r3.appendChild((0, i.parseHTML)(this.document, t3)), (null === (e3 = r3.textContent) || void 0 === e3 ? void 0 : e3.trim().slice(0, 140).replace(/\s+/g, " ")) || "";
          }
          collectOldRedditComments(t3, e3 = 0) {
            var r3, n3;
            const o2 = [], s2 = Array.from(t3.querySelectorAll(":scope > .thing.comment"));
            for (const t4 of s2) {
              const s3 = t4.getAttribute("data-author") || "", a2 = t4.getAttribute("data-permalink") || "", l = (null === (n3 = null === (r3 = t4.querySelector(".entry .tagline .score.unvoted")) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", c = t4.querySelector(".entry .tagline time[datetime]"), u = (null == c ? void 0 : c.getAttribute("datetime")) || "", d = u ? new Date(u).toISOString().split("T")[0] : "", h = t4.querySelector(".entry .usertext-body .md"), m = h ? (0, i.serializeHTML)(h) : "";
              o2.push({ author: s3, date: d, content: m, depth: e3, score: l || void 0, url: a2 ? `https://reddit.com${a2}` : void 0 });
              const f = t4.querySelector(".child > .sitetable");
              f && o2.push(...this.collectOldRedditComments(f, e3 + 1));
            }
            return o2;
          }
          processComments(t3) {
            var e3;
            const r3 = [];
            for (const n3 of t3) {
              const t4 = parseInt(n3.getAttribute("depth") || "0"), o2 = n3.getAttribute("author") || "", s2 = n3.getAttribute("score") || "0", a2 = n3.getAttribute("permalink") || "", l = n3.querySelector('[slot="comment"]'), c = l ? (0, i.serializeHTML)(l) : "", u = n3.getAttribute("created") || (null === (e3 = n3.querySelector("time")) || void 0 === e3 ? void 0 : e3.getAttribute("datetime")) || "", d = u ? new Date(u).toISOString().split("T")[0] : "";
              r3.push({ author: o2, date: d, content: c, depth: t4, score: `${s2} points`, url: a2 ? `https://reddit.com${a2}` : void 0 });
            }
            return (0, s.buildCommentTree)(r3);
          }
        }
        e2.RedditExtractor = a;
      }, 6581(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.SubstackExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = "data-defuddle-substack-post";
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            var s2, a;
            if (super(t3, e3, r3, n3), this.noteText = null, this.noteImage = null, this.postData = null, this.postContentSelector = null, t3.querySelector("div.body.markup")) return this.postData = this.extractPreloadData(), void (this.postContentSelector = "div.body.markup");
            if (this.postData = this.extractPreloadData(), null === (s2 = this.postData) || void 0 === s2 ? void 0 : s2.body_html) {
              if (!t3.querySelector(`[${i}]`)) {
                const e4 = t3.createElement("div");
                e4.setAttribute(i, ""), e4.appendChild((0, o.parseHTML)(t3, this.postData.body_html)), t3.body.appendChild(e4);
              }
              return void (this.postContentSelector = `[${i}]`);
            }
            const l = t3.querySelector('[class*="feedPermalinkUnit"]');
            if (this.noteText = (l || t3).querySelector("div.ProseMirror.FeedProseMirror"), this.noteText) {
              const t4 = this.noteText.closest('[class*="feedCommentBody"]:not([class*="feedCommentBodyInner"])');
              if (t4) {
                const e4 = [t4.nextElementSibling, null === (a = t4.parentElement) || void 0 === a ? void 0 : a.nextElementSibling];
                for (const t5 of e4) if (t5 && (t5.getAttribute("class") || "").includes("imageGrid")) {
                  this.noteImage = t5;
                  break;
                }
              }
            }
          }
          canExtract() {
            return null !== this.postContentSelector || null !== this.noteText;
          }
          extract() {
            return this.postContentSelector ? this.extractPost() : this.extractNote();
          }
          extractPost() {
            var t3, e3, r3, n3, o2, i2, s2, a, l, c;
            const u = (null === (t3 = this.postData) || void 0 === t3 ? void 0 : t3.title) || (null === (e3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === e3 ? void 0 : e3.getAttribute("content")) || "", d = (null === (r3 = this.postData) || void 0 === r3 ? void 0 : r3.subtitle) || (null === (n3 = this.document.querySelector('meta[property="og:description"]')) || void 0 === n3 ? void 0 : n3.getAttribute("content")) || "", h = (null === (s2 = null === (i2 = null === (o2 = this.postData) || void 0 === o2 ? void 0 : o2.publishedBylines) || void 0 === i2 ? void 0 : i2[0]) || void 0 === s2 ? void 0 : s2.name) || (null === (l = null === (a = this.document.querySelector('a[href*="substack.com/@"]')) || void 0 === a ? void 0 : a.textContent) || void 0 === l ? void 0 : l.trim()) || "", m = (null === (c = this.postData) || void 0 === c ? void 0 : c.post_date) || this.parseDateFromByline() || "";
            return { content: "", contentHtml: "", contentSelector: this.postContentSelector, variables: { title: u, author: h, site: "Substack", description: d, published: m } };
          }
          extractNote() {
            var t3, e3;
            const r3 = this.noteText.outerHTML, n3 = this.buildImageHtml(), o2 = n3 ? `${r3}
${n3}` : r3, i2 = (null === (t3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "", s2 = (null === (e3 = this.document.querySelector('meta[property="og:description"]')) || void 0 === e3 ? void 0 : e3.getAttribute("content")) || "", a = i2.replace(/\s*\(@[^)]+\)\s*$/, "").trim();
            return { content: o2, contentHtml: o2, variables: { title: i2, author: a, site: "Substack", description: s2 } };
          }
          parseDateFromByline() {
            const t3 = this.document.querySelector('[class*="byline-wrapper"]');
            if (!t3) return "";
            const e3 = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" }, r3 = (t3.textContent || "").trim().replace(/([a-z])([A-Z])/g, "$1 $2").match(new RegExp("\\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s+(\\d{1,2}),?\\s+(\\d{4})\\b"));
            if (r3) {
              const t4 = e3[r3[1]], n3 = r3[2].padStart(2, "0");
              return `${r3[3]}-${t4}-${n3}T00:00:00+00:00`;
            }
            return "";
          }
          extractPreloadData() {
            var t3, e3;
            const r3 = Array.from(this.document.querySelectorAll("script"));
            for (const n3 of r3) {
              const r4 = n3.textContent || "";
              if (!r4.includes("window._preloads") || !r4.includes("body_html")) continue;
              const o2 = r4.indexOf('JSON.parse("');
              if (-1 === o2) continue;
              const i2 = o2 + 12;
              let s2 = i2;
              for (; s2 < r4.length; ) if ("\\" === r4[s2]) s2 += 2;
              else {
                if ('"' === r4[s2]) break;
                s2++;
              }
              try {
                const n4 = r4.slice(i2, s2), o3 = JSON.parse('"' + n4 + '"'), a = JSON.parse(o3), l = null === (e3 = null === (t3 = null == a ? void 0 : a.feedData) || void 0 === t3 ? void 0 : t3.initialPost) || void 0 === e3 ? void 0 : e3.post;
                if (null == l ? void 0 : l.body_html) return l;
              } catch (t4) {
              }
            }
            return null;
          }
          buildImageHtml() {
            var t3;
            if (!this.noteImage) return "";
            const e3 = null === (t3 = this.document.querySelector('meta[property="og:image"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content");
            if (e3) return `<img src="${(0, o.escapeHtml)(e3)}" alt="" />`;
            const r3 = this.noteImage.querySelector("img");
            if (!r3) return "";
            const n3 = this.getLargestSrc(r3);
            return n3 ? `<img src="${(0, o.escapeHtml)(n3)}" alt="" />` : "";
          }
          getLargestSrc(t3) {
            const e3 = t3.getAttribute("srcset") || "";
            if (e3) {
              const t4 = /(.+?)\s+(\d+(?:\.\d+)?)w/g;
              let r3, n3 = "", o2 = 0, i2 = 0;
              for (; null !== (r3 = t4.exec(e3)); ) {
                let e4 = r3[1].trim();
                i2 > 0 && (e4 = e4.replace(/^,\s*/, "")), i2 = t4.lastIndex;
                const s2 = parseFloat(r3[2]);
                e4 && s2 > o2 && (o2 = s2, n3 = e4);
              }
              if (n3) return n3.replace(/,w_\d+/g, "").replace(/,c_\w+/g, "");
            }
            return t3.getAttribute("src") || "";
          }
        }
        e2.SubstackExtractor = s;
      }, 9970(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ThreadsExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.pagelets = [], this.regionContainer = null;
            const o2 = Array.from(t3.querySelectorAll('[data-pagelet^="threads_post_page_"]'));
            if (this.pagelets = o2.filter(((t4) => t4.querySelector('a[href^="/@"], time[datetime]'))), 0 === this.pagelets.length) {
              const e4 = t3.querySelector('div[role="region"]');
              (null == e4 ? void 0 : e4.querySelector('a[href^="/@"]')) && (this.regionContainer = e4);
            }
          }
          canExtract() {
            return this.pagelets.length > 0 || !!this.regionContainer;
          }
          extract() {
            var t3, e3;
            if (0 === this.pagelets.length && this.regionContainer) return this.extractFromRegion(this.regionContainer);
            const r3 = this.getUsername(this.pagelets[0]), n3 = [], o2 = [];
            let s2 = false;
            for (const t4 of this.pagelets) {
              const e4 = this.getPostsFromPagelet(t4);
              0 !== e4.length && (s2 || e4[0].username !== r3 || 1 !== e4.length ? (s2 = true, o2.push(e4)) : n3.push(e4[0]));
            }
            const a = n3.map(((t4) => t4.content)).join("\n<hr>\n"), l = false !== this.options.includeReplies ? this.extractComments(o2) : "", c = (0, i.buildContentHtml)("threads", a, l), u = `@${r3}`, d = this.createDescription(null === (t3 = n3[0]) || void 0 === t3 ? void 0 : t3.element), h = this.postTitle(u, "Threads"), m = (null === (e3 = n3[0]) || void 0 === e3 ? void 0 : e3.date) || "";
            return { content: c, contentHtml: c, extractedContent: { postAuthor: r3 }, variables: Object.assign({ title: h, author: u, site: "Threads", description: d }, m && { published: m }) };
          }
          extractFromRegion(t3) {
            const e3 = this.getUsername(t3);
            if (!e3) return { content: "", contentHtml: "" };
            const r3 = `@${e3}`, n3 = this.extractPostContent(t3), o2 = false !== this.options.includeReplies ? this.extractCommentsFromJson(e3) : "", s2 = (0, i.buildContentHtml)("threads", n3, o2), a = this.createDescription(t3), l = this.getDate(t3);
            return { content: s2, contentHtml: s2, extractedContent: { postAuthor: e3 }, variables: Object.assign({ title: this.postTitle(r3, "Threads"), author: r3, site: "Threads", description: a }, l && { published: l }) };
          }
          extractCommentsFromJson(t3) {
            const e3 = this.document.querySelectorAll('script[type="application/json"]'), r3 = [], n3 = /* @__PURE__ */ new Set();
            for (const t4 of Array.from(e3)) {
              const e4 = t4.textContent || "";
              if (!((e4.match(/"text_fragments"/g) || []).length < 2) && e4.includes('"username"')) try {
                const t5 = JSON.parse(e4);
                for (const e5 of this.findPostsInJson(t5, 0)) {
                  const t6 = e5.username + ":" + e5.text.slice(0, 80);
                  n3.has(t6) || (n3.add(t6), r3.push(e5));
                }
              } catch (t5) {
              }
            }
            if (r3.length < 2) return "";
            const s2 = [];
            let a = true;
            for (const e4 of r3) a && e4.username === t3 ? a = false : s2.push({ author: `@${e4.username}`, date: "", content: `<p>${(0, o.escapeHtml)(e4.text)}</p>`, depth: 0 });
            return s2.length > 0 ? (0, i.buildCommentTree)(s2) : "";
          }
          findPostsInJson(t3, e3, r3 = []) {
            var n3;
            if (e3 > 35 || null == t3 || "object" != typeof t3) return r3;
            if ((null === (n3 = t3.user) || void 0 === n3 ? void 0 : n3.username) && "string" == typeof t3.user.username) {
              const e4 = this.extractTextFromJson(t3, 0);
              e4 && r3.push({ username: t3.user.username, text: e4 });
            }
            for (const n4 of Object.keys(t3)) "quoted_post" !== n4 && this.findPostsInJson(t3[n4], e3 + 1, r3);
            return r3;
          }
          extractTextFromJson(t3, e3) {
            var r3;
            if (e3 > 10 || null == t3 || "object" != typeof t3) return null;
            if (null === (r3 = t3.text_fragments) || void 0 === r3 ? void 0 : r3.fragments) return t3.text_fragments.fragments.map(((t4) => {
              var e4;
              return t4.plaintext ? t4.plaintext : (null === (e4 = t4.mention_fragment) || void 0 === e4 ? void 0 : e4.username) ? `@${t4.mention_fragment.username}` : t4.linkified_web_url ? t4.linkified_web_url : "";
            })).join("");
            for (const r4 of Object.keys(t3)) {
              if ("quoted_post" === r4) continue;
              const n3 = this.extractTextFromJson(t3[r4], e3 + 1);
              if (n3) return n3;
            }
            return null;
          }
          getPostsFromPagelet(t3) {
            var e3;
            const r3 = t3.querySelectorAll("[data-pressable-container]"), n3 = [];
            for (const t4 of Array.from(r3)) {
              if (null === (e3 = t4.parentElement) || void 0 === e3 ? void 0 : e3.closest("[data-pressable-container]")) continue;
              const r4 = this.getUsername(t4);
              r4 && n3.push({ username: r4, date: this.getDate(t4), permalink: this.getPermalink(t4), content: this.extractPostContent(t4), element: t4 });
            }
            return n3;
          }
          extractComments(t3) {
            const e3 = [];
            for (const r3 of t3) for (let t4 = 0; t4 < r3.length; t4++) e3.push(this.toCommentData(r3[t4], 1 === r3.length ? 0 : t4));
            return e3.length > 0 ? (0, i.buildCommentTree)(e3) : "";
          }
          toCommentData(t3, e3) {
            return { author: `@${t3.username}`, date: t3.date, content: t3.content, depth: e3, url: t3.permalink || void 0 };
          }
          getUsername(t3) {
            var e3, r3;
            const n3 = t3.querySelectorAll('a[href^="/@"][role="link"]');
            for (const t4 of Array.from(n3)) {
              const r4 = null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim();
              if (r4 && !r4.includes("profile picture")) return r4;
            }
            const o2 = t3.querySelector('a[href^="/@"]');
            if (o2) {
              const t4 = null === (r3 = o2.getAttribute("href")) || void 0 === r3 ? void 0 : r3.match(/\/@([^/]+)/);
              return t4 ? t4[1] : "";
            }
            return "";
          }
          getDate(t3) {
            const e3 = t3.querySelector("time[datetime]");
            if (!e3) return "";
            const r3 = e3.getAttribute("datetime") || "";
            try {
              return new Date(r3).toISOString().split("T")[0];
            } catch (t4) {
              return "";
            }
          }
          getPermalink(t3) {
            const e3 = t3.querySelector('a[href*="/post/"]');
            if (!e3) return "";
            const r3 = e3.getAttribute("href") || "";
            return r3.startsWith("http") ? r3 : `https://www.threads.com${r3}`;
          }
          extractPostContent(t3) {
            var e3;
            const r3 = [], n3 = Array.from(t3.querySelectorAll('span[dir="auto"]'));
            for (const t4 of n3) {
              if (t4.closest('a[href^="/@"], a[href*="/post/"], a[href*="l.threads.com"], time')) continue;
              if (t4.closest('[role="button"]')) continue;
              const n4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              if (!n4 || "Author" === n4 || "·" === n4 || "Top" === n4 || "View activity" === n4) continue;
              if (/^\d{2}\/\d{2}\/\d{2}$/.test(n4) || /^@?\w+\/post\/\w+$/.test(n4)) continue;
              if (!this.stripThreadNumber(n4)) continue;
              const o3 = this.cleanText(t4);
              o3 && r3.push(`<p>${o3}</p>`);
            }
            const o2 = this.extractImages(t3);
            o2 && r3.push(o2);
            const i2 = this.extractLinkCard(t3);
            i2 && r3.push(i2);
            const s2 = this.extractQuotedPost(t3);
            return s2 && r3.push(s2), r3.join("\n");
          }
          cleanText(t3) {
            const e3 = t3.cloneNode(true);
            this.removeThreadNumbers(e3), e3.querySelectorAll("a").forEach(((t4) => {
              var r4;
              const n3 = t4.getAttribute("href") || "", o2 = (null === (r4 = t4.textContent) || void 0 === r4 ? void 0 : r4.trim()) || "";
              if (n3.match(/\/@[\w.]+\/post\//)) return void t4.remove();
              const i2 = e3.ownerDocument.createElement("a");
              if (n3.includes("l.threads.com")) i2.setAttribute("href", this.unwrapRedirectUrl(n3));
              else {
                if (n3.startsWith("/@")) {
                  const e4 = n3.replace(/^\/@/, "");
                  return i2.setAttribute("href", `https://www.threads.com/@${e4}`), i2.textContent = `@${e4}`, void t4.replaceWith(i2);
                }
                i2.setAttribute("href", n3.startsWith("http") ? n3 : `https://www.threads.com${n3}`);
              }
              i2.textContent = o2, t4.replaceWith(i2);
            })), e3.querySelectorAll("span, div").forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            }));
            let r3 = (e3.innerHTML || e3.textContent || "").trim();
            return r3 = r3.replace(/<!--.*?-->/g, ""), r3 = r3.replace(/\s+/g, " ").trim(), r3 || "";
          }
          stripThreadNumber(t3) {
            return t3.replace(/\s*\d+\s*\/\s*\d+\s*$/, "").trim();
          }
          removeThreadNumbers(t3) {
            var e3;
            const r3 = Array.from(t3.querySelectorAll("div"));
            for (const t4 of r3) {
              const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              /^\d+\/\d+$/.test(r4) && t4.querySelectorAll("span").length >= 2 && t4.remove();
            }
          }
          unwrapRedirectUrl(t3) {
            try {
              const e3 = new URL(t3).searchParams.get("u");
              return e3 ? decodeURIComponent(e3) : t3;
            } catch (e3) {
              return t3;
            }
          }
          extractImages(t3) {
            const e3 = [];
            return t3.querySelectorAll("img").forEach(((t4) => {
              const r3 = t4.getAttribute("alt") || "", n3 = t4.getAttribute("src") || "";
              if (r3.includes("profile picture") || !n3) return;
              if (t4.closest('a[href*="l.threads.com"]')) return;
              const i2 = parseInt(t4.getAttribute("width") || "0");
              i2 > 0 && i2 <= 48 || e3.push(`<img src="${(0, o.escapeHtml)(n3)}" alt="${(0, o.escapeHtml)(r3)}" />`);
            })), e3.join("\n");
          }
          extractLinkCard(t3) {
            const e3 = t3.querySelectorAll('a[href*="l.threads.com"]');
            for (const t4 of Array.from(e3)) {
              const e4 = t4.querySelector("img");
              if (!e4) continue;
              const r3 = t4.getAttribute("href") || "", n3 = this.unwrapRedirectUrl(r3), i2 = e4.getAttribute("src") || "", s2 = e4.getAttribute("alt") || "";
              if (i2) return `<a href="${(0, o.escapeHtml)(n3)}"><img src="${(0, o.escapeHtml)(i2)}" alt="${(0, o.escapeHtml)(s2)}" /></a>`;
            }
            return "";
          }
          extractQuotedPost(t3) {
            var e3;
            const r3 = t3.querySelector("[data-pressable-container]");
            if (r3) return this.extractQuotedPostFrom(r3);
            const n3 = t3.querySelectorAll('a[href*="/post/"]');
            for (const t4 of Array.from(n3)) {
              const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              if (/^\d{2}\/\d{2}\/\d{2}$/.test(r4)) continue;
              const n4 = t4.getAttribute("href") || "", s2 = n4.match(/\/@([^/]+)\/post\//);
              if (!s2) continue;
              const a = s2[1], l = `<p>${(0, o.escapeHtml)(r4)}</p>`, c = n4.startsWith("http") ? n4 : `https://www.threads.com${n4}`;
              return (0, i.buildQuotedPost)({ author: `@${a}`, content: l, url: c });
            }
            return "";
          }
          extractQuotedPostFrom(t3) {
            var e3, r3;
            const n3 = this.getUsername(t3), s2 = this.getDate(t3), a = Array.from(t3.querySelectorAll('span[dir="auto"]'));
            let l = "";
            for (const t4 of a) {
              if (t4.closest('[role="button"], time')) continue;
              const n4 = t4.closest('a[href^="/@"]');
              if (n4 && !(null === (e3 = n4.getAttribute("href")) || void 0 === e3 ? void 0 : e3.includes("/post/"))) continue;
              const i2 = null === (r3 = t4.textContent) || void 0 === r3 ? void 0 : r3.trim();
              if (!i2 || "·" === i2 || "Author" === i2) continue;
              if (/^\d{2}\/\d{2}\/\d{2}$/.test(i2)) continue;
              const s3 = this.stripThreadNumber(i2);
              s3 && (l += `<p>${(0, o.escapeHtml)(s3)}</p>
`);
            }
            return (0, i.buildQuotedPost)({ author: n3 ? `@${n3}` : void 0, date: s2 || void 0, content: l.trim() });
          }
          createDescription(t3) {
            var e3;
            if (!t3) return "";
            const r3 = t3.querySelectorAll('span[dir="auto"]');
            for (const t4 of Array.from(r3)) {
              if (t4.closest('a[href^="/@"], [role="button"], a[href*="/post/"], time')) continue;
              const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              if (!r4 || "Author" === r4 || "·" === r4 || "Top" === r4 || "View activity" === r4) continue;
              if (/^\d{2}\/\d{2}\/\d{2}$/.test(r4)) continue;
              const n3 = this.stripThreadNumber(r4);
              if (n3) return n3.slice(0, 140).replace(/\s+/g, " ");
            }
            return "";
          }
        }
        e2.ThreadsExtractor = s;
      }, 2248(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.TwitterExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = r2(6077);
        class s extends n2.BaseExtractor {
          constructor(t3, e3) {
            super(t3, e3), this.mainTweet = null, this.threadTweets = [], this.replyTweets = [], this.replyDepths = [], this.classifyCells(this.conversationCells()), this.mainTweet || (this.mainTweet = t3.querySelector('article[data-testid="tweet"]'));
          }
          conversationCells() {
            const t3 = [];
            for (const e3 of Array.from(this.document.querySelectorAll('[data-testid="cellInnerDiv"], section, h2'))) if ("cellInnerDiv" === e3.getAttribute("data-testid")) t3.push(e3);
            else if (t3.length && !e3.closest('article[data-testid="tweet"]')) break;
            return t3;
          }
          classifyCells(t3) {
            let e3 = "", r3 = false, n3 = false, o2 = 0;
            for (const i2 of t3) {
              const t4 = i2.querySelector('article[data-testid="tweet"]');
              if (!t4) {
                n3 = false;
                continue;
              }
              if (!this.mainTweet) {
                this.mainTweet = t4, e3 = this.getHandle(t4), n3 = true;
                continue;
              }
              const s2 = this.getHandle(t4);
              r3 || !s2 || s2 !== e3 ? (r3 = true, o2 = n3 ? o2 + 1 : 0, this.replyTweets.push(t4), this.replyDepths.push(o2), n3 = true) : (this.threadTweets.push(t4), n3 = true);
            }
          }
          canExtract() {
            return !!this.mainTweet;
          }
          extract() {
            const t3 = [this.extractTweetContent(this.mainTweet)];
            for (const e4 of this.threadTweets) t3.push(this.extractTweetContent(e4));
            const e3 = t3.join("\n<hr>\n"), r3 = false !== this.options.includeReplies ? this.extractComments() : "", n3 = (0, i.buildContentHtml)("twitter", e3, r3), o2 = this.getTweetId(), s2 = this.getTweetAuthor(), a = this.createDescription(this.mainTweet);
            return { content: n3, contentHtml: n3, extractedContent: { tweetId: o2, tweetAuthor: s2 }, variables: { title: this.postTitle(s2, "X"), author: s2, site: "X (Twitter)", description: a } };
          }
          extractComments() {
            if (0 === this.replyTweets.length) return "";
            const t3 = this.replyTweets.map(((t4, e3) => {
              const r3 = this.extractUserInfo(t4), n3 = this.extractTweetContent(t4);
              return { author: r3.fullName ? `${r3.fullName} ${r3.handle}` : r3.handle, date: r3.date, content: n3, depth: this.replyDepths[e3], url: r3.permalink };
            }));
            return (0, i.buildCommentTree)(t3);
          }
          getHandle(t3) {
            var e3;
            const r3 = t3.querySelector('[data-testid="User-Name"]');
            if (!r3) return "";
            const n3 = Array.from(r3.querySelectorAll("a"));
            for (const t4 of n3) {
              const r4 = (null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
              if (/^@\w{1,15}$/.test(r4)) return r4;
            }
            for (const t4 of n3) {
              const e4 = (t4.getAttribute("href") || "").match(/^(?:https?:\/\/[^/]+)?\/(\w{1,15})(?:\/|$)/);
              if (e4 && !s.RESERVED_PATHS.has(e4[1].toLowerCase())) return `@${e4[1]}`;
            }
            const o2 = (r3.textContent || "").match(/@(\w{1,15})/);
            return o2 ? `@${o2[1]}` : "";
          }
          formatTweetText(t3) {
            if (!t3) return "";
            const e3 = this.document.createElement("div");
            e3.appendChild((0, o.parseHTML)(this.document, t3)), e3.querySelectorAll("a").forEach(((t4) => {
              var e4;
              const r3 = (null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "";
              t4.replaceWith(r3);
            })), e3.querySelectorAll("span, div").forEach(((t4) => {
              t4.replaceWith(...Array.from(t4.childNodes));
            }));
            return (0, o.serializeHTML)(e3).split("\n").map(((t4) => t4.trim())).filter(((t4) => t4)).map(((t4) => `<p>${t4}</p>`)).join("\n");
          }
          replaceEmojiImages(t3) {
            t3.querySelectorAll('img[src*="/emoji/"]').forEach(((t4) => {
              const e3 = t4.getAttribute("alt");
              e3 && t4.replaceWith(e3);
            }));
          }
          findQuotedTweet(t3) {
            var e3, r3;
            return (null === (r3 = null === (e3 = t3.querySelector('[aria-labelledby*="id__"]')) || void 0 === e3 ? void 0 : e3.querySelector('[data-testid="User-Name"]')) || void 0 === r3 ? void 0 : r3.closest('[aria-labelledby*="id__"]')) || null;
          }
          extractTweetContent(t3) {
            if (!t3) return "";
            const e3 = t3.cloneNode(true);
            this.replaceEmojiImages(e3);
            const r3 = e3.querySelector('[data-testid="tweetText"]'), n3 = r3 ? (0, o.serializeHTML)(r3) : "", i2 = this.formatTweetText(n3), s2 = this.findQuotedTweet(t3), a = this.extractImages(t3, s2), l = s2 ? this.extractQuotedTweet(s2) : "", c = this.extractCard(t3);
            let u = "";
            return i2 && (u += i2), a.length && (u += `
${a.join("\n")}`), c && (u += `
${c}`), l && (u += `
${l}`), u;
          }
          extractQuotedTweet(t3) {
            const e3 = t3.cloneNode(true);
            this.replaceEmojiImages(e3);
            const r3 = e3.querySelector('[data-testid="tweetText"]'), n3 = r3 ? (0, o.serializeHTML)(r3) : "", s2 = this.formatTweetText(n3), a = this.extractUserInfo(t3), l = this.extractImages(t3, null);
            let c = "";
            s2 && (c += s2), l.length && (c += `
${l.join("\n")}`);
            const u = a.fullName ? `${a.fullName} ${a.handle}` : a.handle;
            return (0, i.buildQuotedPost)({ author: u || void 0, date: a.date || void 0, content: c });
          }
          extractUserInfo(t3) {
            var e3, r3, n3;
            const o2 = t3.querySelector('[data-testid="User-Name"]');
            if (!o2) return { fullName: "", handle: "", date: "", permalink: "" };
            const i2 = this.getHandle(t3);
            let s2 = Array.from(o2.querySelectorAll("a")).map(((t4) => {
              var e4;
              return t4.querySelector("time") ? "" : (null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "";
            })).find(((t4) => t4 && t4 !== i2 && !t4.startsWith("@"))) || "";
            if (!s2) {
              const t4 = (null === (r3 = null === (e3 = o2.children[0]) || void 0 === e3 ? void 0 : e3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
              t4 && !t4.startsWith("@") && (s2 = t4);
            }
            const a = t3.querySelector("time"), l = (null == a ? void 0 : a.getAttribute("datetime")) || "", c = l ? new Date(l).toISOString().split("T")[0] : "", u = (null === (n3 = null == a ? void 0 : a.closest("a")) || void 0 === n3 ? void 0 : n3.href) || "";
            return { fullName: s2, handle: i2, date: c, permalink: u };
          }
          extractImages(t3, e3) {
            const r3 = ['[data-testid="tweetPhoto"]', '[data-testid="tweet-image"]', 'img[src*="media"]'], n3 = [];
            for (const i2 of r3) {
              t3.querySelectorAll(i2).forEach(((t4) => {
                var r4, i3;
                if (!(null == e3 ? void 0 : e3.contains(t4)) && "img" === t4.tagName.toLowerCase() && t4.getAttribute("alt")) {
                  const e4 = (null === (r4 = t4.getAttribute("src")) || void 0 === r4 ? void 0 : r4.replace(/&name=\w+$/, "&name=large")) || "", s2 = (null === (i3 = t4.getAttribute("alt")) || void 0 === i3 ? void 0 : i3.replace(/\s+/g, " ").trim()) || "";
                  n3.push(`<img src="${(0, o.escapeHtml)(e4)}" alt="${(0, o.escapeHtml)(s2)}" />`);
                }
              }));
            }
            return n3;
          }
          extractCard(t3) {
            var e3;
            const r3 = t3.querySelector('[data-testid="card.wrapper"]');
            if (!r3) return "";
            const n3 = r3.querySelector("a[href]");
            if (!n3) return "";
            const i2 = n3.getAttribute("href") || "", s2 = (null === (e3 = (n3.getAttribute("aria-label") || "").split(/\n/)[0]) || void 0 === e3 ? void 0 : e3.trim()) || i2;
            return `<p><a href="${(0, o.escapeHtml)(i2)}">${(0, o.escapeHtml)(s2)}</a></p>`;
          }
          getTweetId() {
            const t3 = this.url.match(/status\/(\d+)/);
            return (null == t3 ? void 0 : t3[1]) || "";
          }
          getTweetAuthor() {
            const t3 = this.getHandle(this.mainTweet);
            return t3.startsWith("@") ? t3 : `@${t3}`;
          }
          createDescription(t3) {
            var e3;
            if (!t3) return "";
            return ((null === (e3 = t3.querySelector('[data-testid="tweetText"]')) || void 0 === e3 ? void 0 : e3.textContent) || "").trim().slice(0, 140).replace(/\s+/g, " ");
          }
        }
        e2.TwitterExtractor = s, s.RESERVED_PATHS = /* @__PURE__ */ new Set(["i", "home", "explore", "search", "notifications", "messages", "settings", "compose", "hashtag", "intent"]);
      }, 2144(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.WikipediaExtractor = void 0;
        const n2 = r2(2279);
        class o extends n2.BaseExtractor {
          canExtract() {
            return null !== this.document.querySelector("#mw-content-text");
          }
          extract() {
            var t3;
            const e3 = (null === (t3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "";
            return { content: "", contentHtml: "", contentSelector: "#mw-content-text", variables: { title: e3.replace(/\s*[-\u2013\u2014]\s*Wikipedia\s*$/, "") || e3, author: "Wikipedia", site: "Wikipedia" } };
          }
        }
        e2.WikipediaExtractor = o;
      }, 1064(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.XArticleExtractor = void 0;
        const n2 = r2(2279), o = r2(639), i = '[data-testid="twitterArticleReadView"]', s = '[data-testid="twitterArticleRichTextView"]', a = '[data-testid="twitter-article-title"]', l = '[itemprop="author"]', c = 'meta[itemprop="name"]', u = 'meta[itemprop="additionalName"]', d = '[data-testid="tweetPhoto"] img', h = ".longform-unstyled, .public-DraftStyleDefault-block", m = 'span[style*="font-weight: bold"]', f = "[data-offset-key]", p = '[data-testid="simpleTweet"]', g = '[data-testid="tweetText"]', v = '[data-testid="User-Name"]', y = '[data-testid="markdown-code-block"]';
        class b extends n2.BaseExtractor {
          constructor(t3, e3, r3) {
            super(t3, e3, r3), this.articleContainer = t3.querySelector(s);
          }
          canExtract() {
            return !!this.articleContainer;
          }
          extract() {
            const t3 = this.extractTitle(), e3 = this.extractAuthor(), r3 = this.extractContent(), n3 = this.createDescription();
            return { content: r3, contentHtml: r3, extractedContent: { articleId: this.getArticleId() }, variables: { title: t3, author: e3, site: "X (Twitter)", description: n3 } };
          }
          extractTitle() {
            var t3;
            const e3 = this.document.querySelector(a);
            return (null === (t3 = null == e3 ? void 0 : e3.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "Untitled X Article";
          }
          extractAuthor() {
            var t3, e3;
            const r3 = this.document.querySelector(l);
            if (!r3) return this.getAuthorFromUrl();
            const n3 = null === (t3 = r3.querySelector(c)) || void 0 === t3 ? void 0 : t3.getAttribute("content"), o2 = null === (e3 = r3.querySelector(u)) || void 0 === e3 ? void 0 : e3.getAttribute("content");
            return n3 && o2 ? `${n3} (@${o2})` : n3 || o2 || this.getAuthorFromUrl();
          }
          getAuthorFromUrl() {
            const t3 = this.url.match(/\/([a-zA-Z0-9_][a-zA-Z0-9_]{0,14})\/(article|status)\/\d+/);
            return t3 ? `@${t3[1]}` : this.getAuthorFromOgTitle();
          }
          getAuthorFromOgTitle() {
            var t3;
            const e3 = ((null === (t3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "").match(/^(?:\(\d+\)\s+)?(.+?)\s+on\s+X\s*:/);
            return e3 ? e3[1].trim() : "Unknown";
          }
          getArticleId() {
            const t3 = this.url.match(/article\/(\d+)/);
            return t3 ? t3[1] : "";
          }
          extractContent() {
            if (!this.articleContainer) return "";
            const t3 = this.articleContainer.cloneNode(true);
            this.cleanContent(t3);
            return `<article class="x-article">${this.extractHeaderImage()}${(0, o.serializeHTML)(t3)}</article>`;
          }
          extractHeaderImage() {
            var t3;
            const e3 = this.document.querySelector(i);
            if (!e3) return "";
            const r3 = e3.querySelector(d);
            if (!r3) return "";
            if (this.articleContainer.contains(r3)) return "";
            const n3 = r3.getAttribute("src");
            if (!n3) return "";
            const s2 = (null === (t3 = r3.getAttribute("alt")) || void 0 === t3 ? void 0 : t3.replace(/\s+/g, " ").trim()) || "Image";
            return `<img src="${(0, o.escapeHtml)(this.upgradeImageSrc(n3))}" alt="${(0, o.escapeHtml)(s2)}">`;
          }
          cleanContent(t3) {
            const e3 = t3.ownerDocument || this.document;
            this.convertEmbeddedTweets(t3, e3), this.convertCodeBlocks(t3, e3), this.convertHeaders(t3, e3), this.unwrapLinkedImages(t3, e3), this.upgradeImageQuality(t3), this.convertBoldSpans(t3, e3), this.convertDraftParagraphs(t3, e3), this.removeDraftAttributes(t3), this.repairSurrogatePairs(t3);
          }
          convertEmbeddedTweets(t3, e3) {
            t3.querySelectorAll(p).forEach(((t4) => {
              var r3, n3, o2, i2, s2;
              const a2 = e3.createElement("blockquote");
              a2.className = "embedded-tweet";
              const l2 = t4.querySelector(v), c2 = null == l2 ? void 0 : l2.querySelectorAll("a"), u2 = (null === (n3 = null === (r3 = null == c2 ? void 0 : c2[0]) || void 0 === r3 ? void 0 : r3.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", d2 = (null === (i2 = null === (o2 = null == c2 ? void 0 : c2[1]) || void 0 === o2 ? void 0 : o2.textContent) || void 0 === i2 ? void 0 : i2.trim()) || "", h2 = t4.querySelector(g), m2 = (null === (s2 = null == h2 ? void 0 : h2.textContent) || void 0 === s2 ? void 0 : s2.trim()) || "";
              if (u2 || d2) {
                const t5 = e3.createElement("cite");
                t5.textContent = d2 ? `${u2} ${d2}` : u2, a2.appendChild(t5);
              }
              if (m2) {
                const t5 = e3.createElement("p");
                t5.textContent = m2, a2.appendChild(t5);
              }
              t4.replaceWith(a2);
            }));
          }
          convertCodeBlocks(t3, e3) {
            t3.querySelectorAll(y).forEach(((t4) => {
              var r3;
              const n3 = t4.querySelector("pre"), o2 = t4.querySelector("code");
              if (!n3 || !o2) return;
              let i2 = "";
              const s2 = o2.className.match(/language-(\w+)/);
              if (s2) i2 = s2[1];
              else {
                const e4 = t4.querySelector("span");
                i2 = (null === (r3 = null == e4 ? void 0 : e4.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
              }
              const a2 = e3.createElement("pre"), l2 = e3.createElement("code");
              i2 && (l2.setAttribute("data-lang", i2), l2.className = `language-${i2}`), l2.textContent = o2.textContent || "", a2.appendChild(l2), t4.replaceWith(a2);
            }));
          }
          convertHeaders(t3, e3) {
            t3.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(((t4) => {
              var r3;
              const n3 = t4.tagName.toLowerCase(), o2 = (null === (r3 = t4.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "";
              if (!o2) return;
              const i2 = e3.createElement(n3);
              i2.textContent = o2, t4.replaceWith(i2);
            }));
          }
          unwrapLinkedImages(t3, e3) {
            t3.querySelectorAll(d).forEach(((r3) => {
              var n3;
              const o2 = r3.closest("a");
              if (!o2 || !t3.contains(o2)) return;
              const i2 = r3.getAttribute("src") || "", s2 = (null === (n3 = r3.getAttribute("alt")) || void 0 === n3 ? void 0 : n3.replace(/\s+/g, " ").trim()) || "Image", a2 = e3.createElement("img");
              a2.setAttribute("src", this.upgradeImageSrc(i2)), a2.setAttribute("alt", s2), o2.replaceWith(a2);
            }));
          }
          upgradeImageQuality(t3) {
            t3.querySelectorAll(d).forEach(((t4) => {
              const e3 = t4.getAttribute("src");
              e3 && t4.setAttribute("src", this.upgradeImageSrc(e3));
            }));
          }
          upgradeImageSrc(t3) {
            return t3.includes("&name=") ? t3.replace(/&name=\w+/, "&name=large") : t3.includes("?") ? `${t3}&name=large` : `${t3}?name=large`;
          }
          convertDraftParagraphs(t3, e3) {
            t3.querySelectorAll(h).forEach(((t4) => {
              const r3 = e3.createElement("p"), n3 = (t5) => {
                if (3 === t5.nodeType) r3.appendChild(e3.createTextNode(t5.textContent || ""));
                else if (1 === t5.nodeType) {
                  const o2 = t5, i2 = o2.tagName.toLowerCase();
                  if ("strong" === i2) {
                    const t6 = e3.createElement("strong");
                    t6.textContent = o2.textContent || "", r3.appendChild(t6);
                  } else if ("a" === i2) {
                    const t6 = e3.createElement("a");
                    t6.setAttribute("href", o2.getAttribute("href") || ""), t6.textContent = o2.textContent || "", r3.appendChild(t6);
                  } else if ("code" === i2) {
                    const t6 = e3.createElement("code");
                    t6.textContent = o2.textContent || "", r3.appendChild(t6);
                  } else o2.childNodes.forEach(((t6) => n3(t6)));
                }
              };
              t4.childNodes.forEach(((t5) => n3(t5))), t4.replaceWith(r3);
            }));
          }
          convertBoldSpans(t3, e3) {
            t3.querySelectorAll(m).forEach(((t4) => {
              const r3 = e3.createElement("strong");
              r3.textContent = t4.textContent || "", t4.replaceWith(r3);
            }));
          }
          removeDraftAttributes(t3) {
            t3.querySelectorAll(f).forEach(((t4) => {
              t4.removeAttribute("data-offset-key");
            }));
          }
          repairSurrogatePairs(t3) {
            const e3 = (t3.ownerDocument || this.document).createTreeWalker(t3, 4);
            let r3, n3 = null;
            for (; r3 = e3.nextNode(); ) {
              const t4 = r3;
              if (n3) {
                const e4 = n3.textContent || "", r4 = t4.textContent || "";
                if (e4 && r4) {
                  const o2 = e4.charCodeAt(e4.length - 1), i2 = r4.charCodeAt(0);
                  o2 >= 55296 && o2 <= 56319 && i2 >= 56320 && i2 <= 57343 && (n3.textContent = e4.slice(0, -1), t4.textContent = e4.slice(-1) + r4);
                }
              }
              n3 = t4;
            }
          }
          createDescription() {
            var t3, e3;
            const r3 = (null === (e3 = null === (t3 = this.articleContainer) || void 0 === t3 ? void 0 : t3.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            return r3.slice(0, 140) + (r3.length > 140 ? "..." : "");
          }
        }
        e2.XArticleExtractor = b;
      }, 5666(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.XOembedExtractor = void 0;
        const o = r2(2279), i = r2(639), s = r2(6077);
        class a extends o.BaseExtractor {
          canExtract() {
            return false;
          }
          extract() {
            return { content: "", contentHtml: "" };
          }
          canExtractAsync() {
            return /\/(status|article)\/\d+/.test(this.url);
          }
          prefersAsync() {
            return !("undefined" != typeof window && this.document.defaultView == window);
          }
          extractAsync() {
            return n2(this, void 0, void 0, (function* () {
              const t3 = yield this.tryExtractFxTwitter();
              return t3 || this.extractOembed();
            }));
          }
          extractOembed() {
            return n2(this, void 0, void 0, (function* () {
              const t3 = `https://publish.twitter.com/oembed?url=${encodeURIComponent(this.url)}&omit_script=true`, e3 = yield this.fetch(t3);
              if (!e3.ok) throw new Error(`oEmbed request failed: ${e3.status}`);
              const r3 = yield e3.json(), n3 = this.document.createElement("div");
              n3.appendChild((0, i.parseHTML)(this.document, r3.html));
              const o2 = n3.querySelector("blockquote"), a2 = (null == o2 ? void 0 : o2.querySelectorAll("p")) || [], l = Array.from(a2).map(((t4) => `<p>${(0, i.serializeHTML)(t4)}</p>`)).join("\n"), c = r3.author_url ? `@${r3.author_url.split("/").pop()}` : "", u = (0, s.buildContentHtml)("twitter", l, ""), d = c || r3.author_name, h = l.replace(/<[^>]*>/g, "").trim().slice(0, 140).replace(/\s+/g, " ");
              return { content: u, contentHtml: u, variables: { title: this.postTitle(d, "X"), author: d, site: "X (Twitter)", description: h } };
            }));
          }
          tryExtractFxTwitter() {
            return n2(this, void 0, void 0, (function* () {
              var t3, e3;
              const r3 = this.url.match(/\/([a-zA-Z0-9_][a-zA-Z0-9_]{0,14})\/(status|article)\/(\d+)/);
              if (!r3) return null;
              try {
                const n3 = yield this.fetchFxTwitter(r3[1], r3[3]);
                return (null === (t3 = n3.tweet) || void 0 === t3 ? void 0 : t3.article) ? this.buildArticleResult(n3) : (null === (e3 = n3.tweet) || void 0 === e3 ? void 0 : e3.text) ? this.buildTweetResult(n3) : null;
              } catch (t4) {
                return null;
              }
            }));
          }
          fetchFxTwitter(t3, e3) {
            return n2(this, void 0, void 0, (function* () {
              const r3 = `https://api.fxtwitter.com/${t3}/status/${e3}`, n3 = yield this.fetch(r3, { headers: { "User-Agent": "Mozilla/5.0 (compatible; Defuddle/1.0; +https://defuddle.md)" } });
              if (!n3.ok) throw new Error(`FxTwitter API request failed: ${n3.status}`);
              return n3.json();
            }));
          }
          toDateString(t3) {
            if (t3) try {
              return new Date(t3).toISOString().split("T")[0];
            } catch (t4) {
              return;
            }
          }
          buildArticleResult(t3) {
            var e3;
            const r3 = t3.tweet.article, { blocks: n3, entityMap: o2 } = r3.content, i2 = r3.media_entities || [], s2 = this.renderArticle(n3, o2, r3.cover_media, i2), a2 = `@${t3.tweet.author.screen_name}`, l = null !== (e3 = this.toDateString(r3.created_at)) && void 0 !== e3 ? e3 : this.toDateString(t3.tweet.created_at);
            return { content: s2, contentHtml: s2, variables: Object.assign({ title: r3.title, author: a2, site: "X (Twitter)", description: r3.preview_text }, l && { published: l }) };
          }
          buildTweetResult(t3) {
            const e3 = t3.tweet, r3 = `@${e3.author.screen_name}`, n3 = this.renderTweet(e3), o2 = (0, s.buildContentHtml)("twitter", n3, ""), i2 = this.toDateString(e3.created_at), a2 = (e3.text || "").trim().slice(0, 140).replace(/\s+/g, " ");
            return { content: o2, contentHtml: o2, variables: Object.assign({ title: this.postTitle(r3, "X"), author: r3, site: "X (Twitter)", description: a2 }, i2 && { published: i2 }) };
          }
          codePointToUtf16Index(t3, e3) {
            let r3 = 0, n3 = 0;
            for (const o2 of t3) {
              if (n3 >= e3) break;
              r3 += o2.length, n3 += 1;
            }
            return r3;
          }
          adjustFacetIndicesToUtf16(t3, e3) {
            return 0 === e3.length ? e3 : /[\uD800-\uDBFF]/.test(t3) ? e3.map(((e4) => {
              const [r3, n3] = e4.indices;
              return Object.assign(Object.assign({}, e4), { indices: [this.codePointToUtf16Index(t3, r3), this.codePointToUtf16Index(t3, n3)] });
            })) : e3;
          }
          renderTweet(t3) {
            var e3, r3, n3;
            const o2 = (null === (e3 = t3.raw_text) || void 0 === e3 ? void 0 : e3.text) || t3.text, s2 = ((null === (r3 = t3.raw_text) || void 0 === r3 ? void 0 : r3.facets) || []).filter(((t4) => "media" !== t4.type)), a2 = this.adjustFacetIndicesToUtf16(o2, s2), l = o2.split(/\n\n+/);
            let c = 0;
            const u = [];
            for (const t4 of l) {
              const e4 = o2.indexOf(t4, c), r4 = e4 + t4.length;
              c = r4;
              const n4 = t4.trimStart().startsWith(">");
              let i2 = n4 ? t4.trimStart().slice(1).trimStart() : t4;
              const s3 = n4 ? e4 + (t4.length - t4.trimStart().length) + 1 + (t4.trimStart().slice(1).length - t4.trimStart().slice(1).trimStart().length) : e4, l2 = this.applyFacets(i2, s3, r4, a2).replace(/\n/g, "<br>");
              n4 ? u.push(`<blockquote><p>${l2}</p></blockquote>`) : l2.trim() && u.push(`<p>${l2}</p>`);
            }
            if (null === (n3 = t3.media) || void 0 === n3 ? void 0 : n3.photos) for (const e4 of t3.media.photos) u.push(`<img src="${(0, i.escapeHtml)(e4.url)}" alt="">`);
            return u.join("\n");
          }
          applyMarkers(t3, e3) {
            if (0 === e3.length) return (0, i.escapeHtml)(t3);
            e3.sort(((t4, e4) => t4.offset !== e4.offset ? t4.offset - e4.offset : "close" === t4.type && "open" === e4.type ? -1 : "open" === t4.type && "close" === e4.type ? 1 : 0));
            let r3 = "", n3 = 0;
            for (const o2 of e3) o2.offset > n3 && (r3 += (0, i.escapeHtml)(t3.slice(n3, o2.offset))), r3 += o2.tag, n3 = o2.offset;
            return n3 < t3.length && (r3 += (0, i.escapeHtml)(t3.slice(n3))), r3;
          }
          applyFacets(t3, e3, r3, n3) {
            const o2 = [];
            for (const s2 of n3) {
              const [n4, a2] = s2.indices;
              if (a2 <= e3 || n4 >= r3) continue;
              const l = Math.max(0, n4 - e3), c = Math.min(t3.length, a2 - e3);
              if ("italic" === s2.type) o2.push({ offset: l, type: "open", tag: "<em>" }), o2.push({ offset: c, type: "close", tag: "</em>" });
              else if ("mention" === s2.type && s2.text) {
                const t4 = `https://x.com/${(0, i.escapeHtml)(s2.text)}`;
                o2.push({ offset: l, type: "open", tag: `<a href="${t4}">` }), o2.push({ offset: c, type: "close", tag: "</a>" });
              } else if ("url" === s2.type && s2.original) {
                const t4 = (0, i.escapeHtml)(s2.original);
                o2.push({ offset: l, type: "open", tag: `<a href="${t4}">` }), o2.push({ offset: c, type: "close", tag: "</a>" });
              }
            }
            return this.applyMarkers(t3, o2);
          }
          renderArticle(t3, e3, r3, n3) {
            var o2;
            const s2 = [];
            (null === (o2 = null == r3 ? void 0 : r3.media_info) || void 0 === o2 ? void 0 : o2.original_img_url) && s2.push(`<img src="${(0, i.escapeHtml)(r3.media_info.original_img_url)}" alt="Cover image">`);
            let a2 = 0;
            for (; a2 < t3.length; ) {
              const r4 = t3[a2];
              if ("unordered-list-item" === r4.type) {
                const r5 = [];
                for (; a2 < t3.length && "unordered-list-item" === t3[a2].type; ) r5.push(`<li>${this.renderInlineContent(t3[a2], e3)}</li>`), a2++;
                s2.push(`<ul>${r5.join("")}</ul>`);
                continue;
              }
              const o3 = this.renderBlock(r4, e3, n3);
              o3 && s2.push(o3), a2++;
            }
            return `<article class="x-article">${s2.join("\n")}</article>`;
          }
          renderBlock(t3, e3, r3) {
            switch (t3.type) {
              case "unstyled":
              default:
                return t3.text.trim() ? `<p>${this.renderInlineContent(t3, e3)}</p>` : "";
              case "header-two":
                return `<h2>${this.renderInlineContent(t3, e3)}</h2>`;
              case "header-three":
                return `<h3>${this.renderInlineContent(t3, e3)}</h3>`;
              case "atomic":
                return this.renderAtomicBlock(t3, e3, r3);
            }
          }
          renderAtomicBlock(t3, e3, r3) {
            var n3, o2;
            if (0 === t3.entityRanges.length) return "";
            const s2 = e3.find(((e4) => e4.key === String(t3.entityRanges[0].key)));
            if (!s2) return "";
            const a2 = s2.value;
            switch (a2.type) {
              case "MEDIA": {
                const t4 = a2.data.mediaItems || [], e4 = a2.data.caption, s3 = [];
                for (const a3 of t4) {
                  const t5 = null == r3 ? void 0 : r3.find(((t6) => String(t6.media_id) === String(a3.mediaId)));
                  if (!t5) continue;
                  const l = t5.media_info;
                  if ("ApiImage" === l.__typename && l.original_img_url) s3.push(`<img src="${(0, i.escapeHtml)(l.original_img_url)}" alt="${e4 ? (0, i.escapeHtml)(e4) : ""}">`);
                  else if ("ApiVideo" === l.__typename && (null === (n3 = l.preview_image) || void 0 === n3 ? void 0 : n3.original_img_url)) {
                    const t6 = null === (o2 = (l.variants || []).filter(((t7) => "video/mp4" === t7.content_type && t7.bit_rate)).sort(((t7, e5) => (e5.bit_rate || 0) - (t7.bit_rate || 0)))[0]) || void 0 === o2 ? void 0 : o2.url, r4 = l.preview_image.original_img_url;
                    t6 ? s3.push(`<video src="${(0, i.escapeHtml)(t6)}" poster="${(0, i.escapeHtml)(r4)}" controls></video>`) : s3.push(`<img src="${(0, i.escapeHtml)(r4)}" alt="${e4 ? (0, i.escapeHtml)(e4) : ""}">`);
                  }
                }
                return s3.length > 0 && e4 ? `<figure>${s3.join("\n")}<figcaption>${(0, i.escapeHtml)(e4)}</figcaption></figure>` : s3.length > 0 ? s3.map(((t5) => `<figure>${t5}</figure>`)).join("\n") : e4 ? `<figure><figcaption>${(0, i.escapeHtml)(e4)}</figcaption></figure>` : "";
              }
              case "MARKDOWN": {
                const t4 = a2.data.markdown || "", e4 = t4.match(/^```(\w*)\n([\s\S]*?)\n?```$/);
                if (e4) {
                  const t5 = e4[1], r4 = e4[2];
                  return `<pre><code${t5 ? ` class="language-${(0, i.escapeHtml)(t5)}" data-lang="${(0, i.escapeHtml)(t5)}"` : ""}>${(0, i.escapeHtml)(r4)}</code></pre>`;
                }
                return `<pre><code>${(0, i.escapeHtml)(t4)}</code></pre>`;
              }
              default:
                return "";
            }
          }
          renderInlineContent(t3, e3) {
            var r3, n3;
            const o2 = t3.text;
            if (!o2) return "";
            const s2 = [];
            for (const e4 of t3.inlineStyleRanges) "Bold" === e4.style && (s2.push({ offset: e4.offset, type: "open", tag: "<strong>" }), s2.push({ offset: e4.offset + e4.length, type: "close", tag: "</strong>" }));
            for (const r4 of t3.entityRanges) {
              const t4 = e3.find(((t5) => t5.key === String(r4.key)));
              if ("LINK" === (null == t4 ? void 0 : t4.value.type) && t4.value.data.url) {
                const e4 = (0, i.escapeHtml)(t4.value.data.url);
                s2.push({ offset: r4.offset, type: "open", tag: `<a href="${e4}">` }), s2.push({ offset: r4.offset + r4.length, type: "close", tag: "</a>" });
              }
            }
            if (null === (r3 = t3.data) || void 0 === r3 ? void 0 : r3.mentions) for (const e4 of t3.data.mentions) {
              const t4 = `https://x.com/${(0, i.escapeHtml)(e4.text)}`;
              s2.push({ offset: e4.fromIndex, type: "open", tag: `<a href="${t4}">` }), s2.push({ offset: e4.toIndex, type: "close", tag: "</a>" });
            }
            if (null === (n3 = t3.data) || void 0 === n3 ? void 0 : n3.urls) for (const e4 of t3.data.urls) {
              const t4 = (0, i.escapeHtml)(e4.text);
              s2.push({ offset: e4.fromIndex, type: "open", tag: `<a href="${t4}">` }), s2.push({ offset: e4.toIndex, type: "close", tag: "</a>" });
            }
            return this.applyMarkers(o2, s2);
          }
        }
        e2.XOembedExtractor = a;
      }, 3258(t2, e2, r2) {
        var n2 = this && this.__awaiter || function(t3, e3, r3, n3) {
          return new (r3 || (r3 = Promise))((function(o2, i2) {
            function s2(t4) {
              try {
                l2(n3.next(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function a2(t4) {
              try {
                l2(n3.throw(t4));
              } catch (t5) {
                i2(t5);
              }
            }
            function l2(t4) {
              var e4;
              t4.done ? o2(t4.value) : (e4 = t4.value, e4 instanceof r3 ? e4 : new r3((function(t5) {
                t5(e4);
              }))).then(s2, a2);
            }
            l2((n3 = n3.apply(t3, e3 || [])).next());
          }));
        };
        Object.defineProperty(e2, "__esModule", { value: true }), e2.YoutubeExtractor = void 0;
        const o = r2(2279), i = r2(639), s = r2(2552), a = r2(1497), l = "」』）", c = new RegExp(`[.!?。！？]["'\\u2019\\u201D)${l}]*\\s*$`), u = new RegExp(`[?\\uFF1F]["'\\u2019\\u201D)${l}]*\\s*$`), d = /^(>>|-\s)/, h = /^(>>\s*|-\s+)/, m = /,\s*$/, f = new RegExp(`^(.*[.!?]["'\\u2019\\u201D)]*)\\s+([A-Z].*)$|^(.*[。！？][${l}]*)([${s.CJK_CHAR_RANGES}].*)$`), p = 4e3, g = "https://www.youtube.com/youtubei/v1/player?prettyPrint=false", v = "20.10.38", y = { client: { clientName: "ANDROID", clientVersion: v } }, b = `com.google.android.youtube/${v} (Linux; U; Android 14)`, x = { client: { clientName: "IOS", clientVersion: "20.10.3" } }, C = { client: { clientName: "WEB", clientVersion: "2.20240101.00.00" } }, S = { segments: "ytd-transcript-segment-renderer", timestamp: ".segment-timestamp", text: ".segment-text" }, E = { segments: "transcript-segment-view-model", timestamp: ".ytwTranscriptSegmentViewModelTimestamp", text: "span.yt-core-attributed-string", chapters: "timeline-chapter-view-model h3" };
        class A extends o.BaseExtractor {
          constructor(t3, e3, r3, n3) {
            super(t3, e3, r3, n3), this.inlineJsonCache = /* @__PURE__ */ new Map(), this.videoElement = t3.querySelector("video"), this.schemaOrgData = r3;
          }
          canExtract() {
            return true;
          }
          canExtractAsync() {
            return true;
          }
          prefersAsync() {
            return true;
          }
          extract() {
            return this.buildResult(this.extractTranscriptFromExistingDom());
          }
          extractAsync() {
            return n2(this, void 0, void 0, (function* () {
              const t3 = this.extractTranscriptFromExistingDom();
              if (this.shouldUseExistingDomTranscript(t3)) return this.buildResult(t3);
              const e3 = (yield this.fetchTranscript()) || t3 || (yield this.extractTranscriptFromOpenedDom());
              return this.buildResult(e3);
            }));
          }
          normalizeLanguageCode(t3) {
            return (t3 || "").trim().replace(/_/g, "-").toLocaleLowerCase();
          }
          languageCodeMatchesPreference(t3, e3) {
            const r3 = this.normalizeLanguageCode(t3), n3 = this.normalizeLanguageCode(e3);
            if (!r3 || !n3) return false;
            if (r3 === n3) return true;
            const o2 = r3.split("-")[0], i2 = n3.split("-")[0];
            return o2 === i2 && (r3 === o2 || n3 === i2);
          }
          shouldUseExistingDomTranscript(t3) {
            return !!t3 && (!this.options.language || this.languageCodeMatchesPreference(t3.languageCode, this.options.language));
          }
          getCaptionTracks(t3) {
            var e3, r3;
            const n3 = null === (r3 = null === (e3 = null == t3 ? void 0 : t3.captions) || void 0 === e3 ? void 0 : e3.playerCaptionsTracklistRenderer) || void 0 === r3 ? void 0 : r3.captionTracks;
            return Array.isArray(n3) ? n3 : [];
          }
          findPreferredCaptionTrack(t3, e3) {
            var r3, n3;
            const o2 = this.normalizeLanguageCode(e3);
            if (!o2) return;
            const i2 = o2.split("-")[0], s2 = t3.map(((t4) => ({ t: t4, code: this.normalizeLanguageCode(t4.languageCode) }))), a2 = (t4) => {
              var e4, r4;
              const n4 = s2.filter(t4);
              return null === (r4 = null !== (e4 = n4.find((({ t: t5 }) => "asr" !== t5.kind))) && void 0 !== e4 ? e4 : n4[0]) || void 0 === r4 ? void 0 : r4.t;
            };
            return null !== (n3 = null !== (r3 = a2((({ code: t4 }) => t4 === o2))) && void 0 !== r3 ? r3 : a2((({ code: t4 }) => t4 === i2))) && void 0 !== n3 ? n3 : a2((({ code: t4 }) => t4.split("-")[0] === i2));
          }
          pickCaptionTrack(t3) {
            const e3 = this.options.language;
            if (e3) {
              const r4 = this.findPreferredCaptionTrack(t3, e3);
              if (r4) return r4;
            }
            const r3 = t3.filter(((t4) => "asr" !== t4.kind)), n3 = r3.length > 0 ? r3 : t3;
            return n3.find(((t4) => "en" === t4.languageCode)) || n3[0];
          }
          getTrackDisplayName(t3) {
            var e3, r3, n3;
            return (null === (e3 = null == t3 ? void 0 : t3.name) || void 0 === e3 ? void 0 : e3.simpleText) || (null === (n3 = null === (r3 = null == t3 ? void 0 : t3.name) || void 0 === r3 ? void 0 : r3.runs) || void 0 === n3 ? void 0 : n3.map(((t4) => (null == t4 ? void 0 : t4.text) || "")).join("").trim()) || "";
          }
          normalizeLanguageLabel(t3) {
            return t3.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim().toLocaleLowerCase();
          }
          getTranscriptLanguageCodeFromDom() {
            var t3;
            const e3 = this.document.querySelector('ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"] #footer yt-sort-filter-sub-menu-renderer yt-dropdown-menu button'), r3 = null === (t3 = null == e3 ? void 0 : e3.textContent) || void 0 === t3 ? void 0 : t3.trim(), n3 = this.getCaptionTracks(this.getValidatedPlayerResponse()), o2 = 1 === n3.length ? n3[0] : void 0;
            if (!r3) return null == o2 ? void 0 : o2.languageCode;
            const i2 = this.normalizeLanguageLabel(r3), s2 = n3.find(((t4) => this.normalizeLanguageLabel(this.getTrackDisplayName(t4)) === i2));
            return (null == s2 ? void 0 : s2.languageCode) || (null == o2 ? void 0 : o2.languageCode);
          }
          getInlineChapters() {
            var t3, e3, r3, n3;
            const o2 = this.getVideoId(), i2 = this.parseInlineJson("ytInitialData");
            if (!i2) return [];
            if (o2) {
              const s3 = null === (e3 = null === (t3 = null == i2 ? void 0 : i2.currentVideoEndpoint) || void 0 === t3 ? void 0 : t3.watchEndpoint) || void 0 === e3 ? void 0 : e3.videoId, a2 = null === (n3 = null === (r3 = null == i2 ? void 0 : i2.endpoint) || void 0 === r3 ? void 0 : r3.watchEndpoint) || void 0 === n3 ? void 0 : n3.videoId;
              if (s3 !== o2 && a2 !== o2) return [];
            }
            const s2 = this.extractChaptersFromPlayerBar(i2);
            return s2.length > 0 ? s2 : this.extractChaptersFromEngagementPanels(i2);
          }
          getTranscriptContainer() {
            const t3 = this.document.querySelector('ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"] #segments-container');
            return t3 || this.document.querySelector("ytm-macro-markers-list-renderer .ytm-macro-markers-list-container");
          }
          getTranscriptSelectors(t3) {
            return t3.querySelectorAll("ytd-transcript-segment-renderer").length > 0 ? S : t3.querySelectorAll("transcript-segment-view-model").length > 0 ? E : void 0;
          }
          buildTranscriptFromContainer(t3, e3) {
            var r3;
            if (0 === t3.children.length) return;
            const n3 = this.getTranscriptSelectors(t3);
            if (!n3) return;
            const o2 = [], i2 = [];
            if (n3.chapters) {
              const e4 = t3.querySelectorAll(n3.chapters);
              for (const t4 of e4) {
                const e5 = (t4.textContent || "").trim();
                if (!e5) continue;
                const o3 = t4.closest("macro-markers-panel-item-view-model"), s3 = null === (r3 = null == o3 ? void 0 : o3.nextElementSibling) || void 0 === r3 ? void 0 : r3.querySelector(n3.timestamp), a2 = ((null == s3 ? void 0 : s3.textContent) || "").trim(), l3 = this.parseTimestamp(a2);
                null !== l3 && i2.push({ title: e5, start: l3 });
              }
            }
            const s2 = t3.querySelectorAll(n3.segments);
            for (const t4 of s2) {
              const e4 = t4.querySelector(n3.timestamp), r4 = t4.querySelector(n3.text);
              if (!e4 || !r4) continue;
              const i3 = (e4.textContent || "").trim(), s3 = (r4.textContent || "").trim();
              if (!s3) continue;
              const a2 = this.parseTimestamp(i3);
              null !== a2 && o2.push({ start: a2, text: s3 });
            }
            if (0 === o2.length) return;
            const l2 = e3.length > 0 ? e3 : i2, c2 = this.groupTranscriptSegments(o2), { html: u2, text: d2 } = (0, a.buildTranscript)("youtube", c2, l2);
            return { html: u2, text: d2, languageCode: this.getTranscriptLanguageCodeFromDom() };
          }
          extractTranscriptFromExistingDom() {
            try {
              const t3 = this.getTranscriptContainer();
              if (!t3) return;
              return this.buildTranscriptFromContainer(t3, this.getInlineChapters());
            } catch (t3) {
              return void console.error("YoutubeExtractor: failed to extract transcript from existing DOM", t3);
            }
          }
          canOpenTranscriptPanel() {
            var t3;
            return "function" == typeof (null === (t3 = this.document.defaultView) || void 0 === t3 ? void 0 : t3.MutationObserver);
          }
          buildResult(t3) {
            const e3 = this.getVideoData(), r3 = this.getChannelName(e3), n3 = e3.description || "", o2 = this.formatDescription(n3);
            let i2 = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.getVideoId()}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>${o2}`;
            (null == t3 ? void 0 : t3.html) && (i2 += t3.html);
            const s2 = { title: e3.name || "", author: r3, site: "YouTube", image: Array.isArray(e3.thumbnailUrl) && e3.thumbnailUrl[0] || "", published: e3.uploadDate, description: n3.slice(0, 200).trim() };
            return (null == t3 ? void 0 : t3.text) && (s2.transcript = t3.text), (null == t3 ? void 0 : t3.languageCode) && (s2.language = t3.languageCode), { content: i2, contentHtml: i2, extractedContent: { videoId: this.getVideoId(), author: r3 }, variables: s2 };
          }
          formatDescription(t3) {
            return `<p>${(0, i.escapeHtml)(t3).replace(/\n/g, "<br>")}</p>`;
          }
          getVideoData() {
            var t3, e3, r3, n3;
            const o2 = this.getVideoId(), i2 = Array.from(this.document.querySelectorAll('script[type="application/ld+json"]'));
            let s2;
            for (const t4 of i2) try {
              const e4 = JSON.parse(t4.textContent || ""), r4 = (Array.isArray(e4) ? e4 : [e4]).find(((t5) => {
                if ("VideoObject" !== t5["@type"]) return false;
                if (!o2) return true;
                return (t5["@id"] || t5.url || t5.embedUrl || "").includes(o2);
              }));
              if (r4 && r4.description) return r4;
              !r4 || !r4.comment && s2 || (s2 = r4);
            } catch (t5) {
            }
            if (s2) return s2;
            if (o2) {
              if (((null === (t3 = this.document.querySelector('meta[property="og:url"]')) || void 0 === t3 ? void 0 : t3.getAttribute("content")) || "").includes(o2)) return { name: (null === (e3 = this.document.querySelector('meta[property="og:title"]')) || void 0 === e3 ? void 0 : e3.getAttribute("content")) || "", description: (null === (r3 = this.document.querySelector('meta[property="og:description"]')) || void 0 === r3 ? void 0 : r3.getAttribute("content")) || "", thumbnailUrl: (null === (n3 = this.document.querySelector('meta[property="og:image"]')) || void 0 === n3 ? void 0 : n3.getAttribute("content")) || "" };
            }
            return {};
          }
          getChannelName(t3) {
            const e3 = this.getChannelNameFromDom();
            if (e3) return e3;
            const r3 = this.getChannelNameFromPlayerResponse();
            return r3 || ((null == t3 ? void 0 : t3.author) || "");
          }
          getChannelNameFromDom() {
            var t3;
            const e3 = ['ytd-video-owner-renderer #channel-name a[href^="/@"]', '#owner-name a[href^="/@"]'];
            for (const r3 of e3) {
              const e4 = this.document.querySelector(r3), n3 = null === (t3 = null == e4 ? void 0 : e4.textContent) || void 0 === t3 ? void 0 : t3.trim();
              if (n3) return n3;
            }
            return this.getChannelNameFromMicrodata();
          }
          getChannelNameFromMicrodata() {
            var t3;
            const e3 = this.document.querySelector('[itemprop="author"]');
            if (!e3) return "";
            const r3 = e3.querySelector('meta[itemprop="name"]');
            if (null == r3 ? void 0 : r3.getAttribute("content")) return r3.getAttribute("content").trim();
            const n3 = e3.querySelector('link[itemprop="name"]');
            if (null == n3 ? void 0 : n3.getAttribute("content")) return n3.getAttribute("content").trim();
            const o2 = e3.querySelector('[itemprop="name"], a, span');
            return (null === (t3 = null == o2 ? void 0 : o2.textContent) || void 0 === t3 ? void 0 : t3.trim()) || "";
          }
          getChannelNameFromPlayerResponse() {
            var t3, e3, r3, n3;
            const o2 = this.getValidatedPlayerResponse();
            return o2 && ((null === (t3 = o2.videoDetails) || void 0 === t3 ? void 0 : t3.author) || (null === (e3 = o2.videoDetails) || void 0 === e3 ? void 0 : e3.ownerChannelName) || (null === (n3 = null === (r3 = o2.microformat) || void 0 === r3 ? void 0 : r3.playerMicroformatRenderer) || void 0 === n3 ? void 0 : n3.ownerChannelName)) || "";
          }
          getValidatedPlayerResponse() {
            var t3, e3, r3;
            const n3 = this.getVideoId();
            if (!n3) return null;
            const o2 = this.parseInlineJson("ytInitialPlayerResponse");
            if (!o2) return null;
            const i2 = null === (t3 = o2.videoDetails) || void 0 === t3 ? void 0 : t3.videoId, s2 = null === (r3 = null === (e3 = o2.microformat) || void 0 === e3 ? void 0 : e3.playerMicroformatRenderer) || void 0 === r3 ? void 0 : r3.externalVideoId;
            return i2 === n3 || s2 === n3 ? o2 : null;
          }
          parseInlineJson(t3) {
            if (this.inlineJsonCache.has(t3)) return this.inlineJsonCache.get(t3);
            const e3 = Array.from(this.document.querySelectorAll("script"));
            for (const r3 of e3) {
              const e4 = r3.textContent || "";
              if (!e4.includes(t3)) continue;
              const n3 = e4.indexOf("{", e4.indexOf(t3));
              if (-1 === n3) continue;
              let o2 = 0;
              for (let r4 = n3; r4 < e4.length; r4++) {
                const i2 = e4[r4];
                if ("{" === i2) o2 += 1;
                else if ("}" === i2 && (o2 -= 1, 0 === o2)) {
                  const o3 = e4.slice(n3, r4 + 1);
                  try {
                    const e5 = JSON.parse(o3);
                    return this.inlineJsonCache.set(t3, e5), e5;
                  } catch (t4) {
                    console.error("YoutubeExtractor: failed to parse inline JSON", t4);
                    break;
                  }
                }
              }
            }
            return null;
          }
          fetchTranscript() {
            return n2(this, void 0, void 0, (function* () {
              try {
                const t3 = this.getVideoId();
                if (!t3) return;
                const e3 = this.fetchChapters(t3), r3 = this.getInlineCaptionTrack(), n3 = r3 ? this.fetchCaptionXml(r3, e3) : void 0, o2 = yield this.fetchPlayerData(t3), i2 = o2 ? this.pickCaptionTrack(this.getCaptionTracks(o2)) : void 0, s2 = (null == i2 ? void 0 : i2.baseUrl) && i2.baseUrl !== (null == r3 ? void 0 : r3.baseUrl) ? this.fetchCaptionXml(i2, e3) : void 0, a2 = s2 ? yield s2 : void 0;
                return a2 || (n3 ? yield n3 : void 0);
              } catch (t3) {
                return void console.error("YoutubeExtractor: failed to fetch transcript", t3);
              }
            }));
          }
          getInlineCaptionTrack() {
            const t3 = this.getValidatedPlayerResponse(), e3 = this.getCaptionTracks(t3);
            if (0 === e3.length) return;
            const r3 = this.pickCaptionTrack(e3);
            return (null == r3 ? void 0 : r3.baseUrl) ? r3 : void 0;
          }
          fetchCaptionXml(t3, e3) {
            return n2(this, void 0, void 0, (function* () {
              try {
                if (!new URL(t3.baseUrl).hostname.endsWith(".youtube.com")) return;
                const r3 = { "User-Agent": "Mozilla/5.0" };
                this.options.language && (r3["Accept-Language"] = this.options.language);
                const n3 = yield this.fetch(t3.baseUrl, { headers: r3, signal: AbortSignal.timeout(p) });
                if (!n3.ok) return;
                let o2;
                try {
                  o2 = yield n3.text();
                } catch (t4) {
                  return;
                }
                if (!o2) return;
                const i2 = yield e3;
                return this.parseTranscriptXml(o2, t3.languageCode || "en", i2);
              } catch (t4) {
                return;
              }
            }));
          }
          pollFor(t3, e3 = 20) {
            return new Promise(((r3) => {
              let n3 = 0;
              const o2 = () => {
                const i2 = t3();
                i2 ? r3(i2) : n3++ < e3 ? setTimeout(o2, 250) : r3(null);
              };
              o2();
            }));
          }
          waitForTranscriptSegments() {
            return this.pollFor((() => {
              const t3 = this.getTranscriptContainer();
              return t3 && 0 !== t3.children.length && t3.querySelectorAll(E.segments).length > 0 ? t3 : null;
            }));
          }
          waitForTranscriptContainer() {
            return this.pollFor((() => {
              const t3 = this.getTranscriptContainer();
              return t3 && t3.children.length > 0 ? t3 : null;
            }));
          }
          waitForElement(t3) {
            return this.pollFor((() => this.document.querySelector(t3)));
          }
          isMobileYoutube() {
            return !!this.document.querySelector("ytm-slim-video-metadata-section-renderer");
          }
          extractTranscriptFromOpenedDom() {
            return n2(this, void 0, void 0, (function* () {
              try {
                if (!this.canOpenTranscriptPanel()) return;
                if (this.isMobileYoutube()) return this.openMobileTranscriptPanel();
                const t3 = this.document.querySelector("ytd-video-description-transcript-section-renderer button");
                if (!t3) return;
                t3.click();
                const e3 = yield this.waitForTranscriptContainer();
                if (!e3) return;
                const r3 = this.getVideoId(), n3 = r3 ? yield this.fetchChapters(r3) : this.getInlineChapters();
                return this.buildTranscriptFromContainer(e3, n3);
              } catch (t3) {
                return void console.error("YoutubeExtractor: failed to extract transcript from opened DOM", t3);
              }
            }));
          }
          openMobileTranscriptPanel() {
            return n2(this, void 0, void 0, (function* () {
              try {
                const t3 = this.document.querySelector('button[aria-label="Show more"]');
                t3 && t3.click();
                const e3 = yield this.waitForElement('button[aria-label="View all"]');
                if (!e3) return;
                e3.click();
                const r3 = yield this.waitForElement('button[aria-label="Timeline"]');
                if (!r3) return;
                r3.click();
                const n3 = yield this.waitForTranscriptSegments();
                if (!n3) return;
                return this.buildTranscriptFromContainer(n3, []);
              } catch (t3) {
                return void console.error("YoutubeExtractor: failed to open mobile transcript panel", t3);
              }
            }));
          }
          fetchPlayerData(t3) {
            return n2(this, void 0, void 0, (function* () {
              try {
                const e4 = { "Content-Type": "application/json" };
                this.options.language && (e4["Accept-Language"] = this.options.language);
                const r3 = yield this.fetch(g, { method: "POST", headers: e4, signal: AbortSignal.timeout(p), body: JSON.stringify({ context: x, videoId: t3 }) });
                if (r3.ok) {
                  const t4 = yield r3.json();
                  if (this.getCaptionTracks(t4).length > 0) return t4;
                }
              } catch (t4) {
              }
              try {
                const e4 = { "Content-Type": "application/json", "User-Agent": b };
                this.options.language && (e4["Accept-Language"] = this.options.language);
                const r3 = yield this.fetch(g, { method: "POST", headers: e4, signal: AbortSignal.timeout(p), body: JSON.stringify({ context: y, videoId: t3 }) });
                if (r3.ok) {
                  const t4 = yield r3.json();
                  if (this.getCaptionTracks(t4).length > 0) return t4;
                }
              } catch (t4) {
              }
              try {
                const e4 = { "Content-Type": "application/json" };
                this.options.language && (e4["Accept-Language"] = this.options.language);
                const r3 = yield this.fetch(g, { method: "POST", headers: e4, signal: AbortSignal.timeout(p), body: JSON.stringify({ context: C, videoId: t3 }) });
                if (r3.ok) {
                  const t4 = yield r3.json();
                  if (this.getCaptionTracks(t4).length > 0) return t4;
                }
              } catch (t4) {
              }
              const e3 = this.parseInlineJson("ytInitialPlayerResponse");
              if (this.getCaptionTracks(e3).length > 0) return e3;
            }));
          }
          fetchChapters(t3) {
            return n2(this, void 0, void 0, (function* () {
              const e3 = this.getInlineChapters();
              if (e3.length > 0) return e3;
              try {
                const e4 = { "Content-Type": "application/json" };
                this.options.language && (e4["Accept-Language"] = this.options.language);
                const r3 = yield this.fetch("https://www.youtube.com/youtubei/v1/next?prettyPrint=false", { method: "POST", headers: e4, signal: AbortSignal.timeout(p), body: JSON.stringify({ context: C, videoId: t3 }) });
                if (!r3.ok) return [];
                const n3 = yield r3.json(), o2 = this.extractChaptersFromPlayerBar(n3);
                return o2.length > 0 ? o2 : this.extractChaptersFromEngagementPanels(n3);
              } catch (t4) {
                return [];
              }
            }));
          }
          extractChaptersFromPlayerBar(t3) {
            var e3, r3, n3, o2, i2, s2, a2, l2;
            const c2 = [], u2 = null === (s2 = null === (i2 = null === (o2 = null === (n3 = null === (r3 = null === (e3 = null == t3 ? void 0 : t3.playerOverlays) || void 0 === e3 ? void 0 : e3.playerOverlayRenderer) || void 0 === r3 ? void 0 : r3.decoratedPlayerBarRenderer) || void 0 === n3 ? void 0 : n3.decoratedPlayerBarRenderer) || void 0 === o2 ? void 0 : o2.playerBar) || void 0 === i2 ? void 0 : i2.multiMarkersPlayerBarRenderer) || void 0 === s2 ? void 0 : s2.markersMap;
            if (!Array.isArray(u2)) return c2;
            for (const t4 of u2) {
              const e4 = null === (a2 = null == t4 ? void 0 : t4.value) || void 0 === a2 ? void 0 : a2.chapters;
              if (Array.isArray(e4)) for (const t5 of e4) {
                const e5 = null == t5 ? void 0 : t5.chapterRenderer;
                if (!e5) continue;
                const r4 = (null === (l2 = e5.title) || void 0 === l2 ? void 0 : l2.simpleText) || "", n4 = e5.timeRangeStartMillis;
                r4 && "number" == typeof n4 && c2.push({ title: r4, start: n4 / 1e3 });
              }
            }
            return c2;
          }
          extractChaptersFromEngagementPanels(t3) {
            var e3, r3, n3, o2;
            const i2 = [], s2 = null == t3 ? void 0 : t3.engagementPanels;
            if (!Array.isArray(s2)) return i2;
            for (const t4 of s2) {
              const s3 = null === (e3 = null == t4 ? void 0 : t4.engagementPanelSectionListRenderer) || void 0 === e3 ? void 0 : e3.content, a2 = null === (r3 = null == s3 ? void 0 : s3.macroMarkersListRenderer) || void 0 === r3 ? void 0 : r3.contents;
              if (Array.isArray(a2)) for (const t5 of a2) {
                const e4 = null == t5 ? void 0 : t5.macroMarkersListItemRenderer;
                if (!e4) continue;
                const r4 = (null === (n3 = e4.title) || void 0 === n3 ? void 0 : n3.simpleText) || "", s4 = (null === (o2 = e4.timeDescription) || void 0 === o2 ? void 0 : o2.simpleText) || "";
                if (!r4 || !s4) continue;
                const a3 = this.parseTimestamp(s4);
                null !== a3 && i2.push({ title: r4, start: a3 });
              }
            }
            return i2;
          }
          parseTimestamp(t3) {
            const e3 = t3.split(":").map(Number);
            return e3.some(isNaN) ? null : 3 === e3.length ? 3600 * e3[0] + 60 * e3[1] + e3[2] : 2 === e3.length ? 60 * e3[0] + e3[1] : null;
          }
          parseTranscriptXml(t3, e3, r3 = []) {
            const n3 = [], o2 = /<p\s+t="(\d+)"[^>]*>([\s\S]*?)<\/p>/g;
            let i2;
            for (; null !== (i2 = o2.exec(t3)); ) {
              const t4 = parseInt(i2[1], 10), e4 = i2[2];
              let r4 = "";
              const o3 = /<s[^>]*>([^<]*)<\/s>/g;
              let s3;
              for (; null !== (s3 = o3.exec(e4)); ) r4 += s3[1];
              r4 || (r4 = e4.replace(/<[^>]+>/g, "")), r4 = r4.replace(/\n/g, " ").replace(/\s{2,}/g, " "), r4 = this.decodeEntities(r4), r4.trim() && n3.push({ start: t4 / 1e3, text: r4.trim() });
            }
            if (0 === n3.length) {
              const e4 = /<text\s+start="([^"]*)"[^>]*>([\s\S]*?)<\/text>/g;
              for (; null !== (i2 = e4.exec(t3)); ) {
                const t4 = parseFloat(i2[1]);
                let e5 = this.decodeEntities(i2[2].replace(/<[^>]+>/g, "").replace(/\n/g, " ").replace(/\s{2,}/g, " "));
                e5.trim() && n3.push({ start: t4, text: e5.trim() });
              }
            }
            if (0 === n3.length) return;
            const s2 = this.groupTranscriptSegments(n3), { html: l2, text: c2 } = (0, a.buildTranscript)("youtube", s2, r3);
            return { html: l2, text: c2, languageCode: e3 };
          }
          decodeEntities(t3) {
            return t3.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'").replace(/&#x([0-9a-fA-F]+);/g, ((t4, e3) => String.fromCodePoint(parseInt(e3, 16)))).replace(/&#(\d+);/g, ((t4, e3) => String.fromCodePoint(parseInt(e3, 10))));
          }
          getVideoId() {
            if (void 0 === this._videoId) {
              const t3 = new URL(this.url);
              this._videoId = "youtu.be" === t3.hostname ? t3.pathname.slice(1) : t3.pathname.includes("/shorts/") ? t3.pathname.split("/shorts/")[1].split("/")[0] : new URLSearchParams(t3.search).get("v") || "";
            }
            return this._videoId;
          }
          groupTranscriptSegments(t3) {
            if (0 === t3.length) return [];
            return t3.some(((t4) => d.test(t4.text))) ? this.groupBySpeaker(t3) : this.groupBySentence(t3);
          }
          groupBySpeaker(t3) {
            const e3 = [];
            let r3 = null, n3 = -1, o2 = "";
            for (const i3 of t3) {
              const t4 = d.test(i3.text), s2 = i3.text.replace(h, ""), a2 = m.test(o2), l2 = (c.test(o2) || !o2) && !a2;
              t4 && l2 ? (r3 && e3.push(r3), n3 = (n3 + 1) % 2, r3 = { start: i3.start, segments: [{ start: i3.start, text: s2 }], speakerChange: true, speaker: n3 }) : (r3 || (r3 = { start: i3.start, segments: [], speakerChange: false }), r3.segments.push({ start: i3.start, text: s2 })), o2 = s2;
            }
            r3 && e3.push(r3), this.splitAffirmativeTurns(e3);
            const i2 = [];
            for (const t4 of e3) {
              const e4 = void 0 === t4.speaker ? this.groupBySentence(t4.segments) : this.mergeSentenceGroupsWithinTurn(this.groupBySentence(t4.segments));
              for (let r4 = 0; r4 < e4.length; r4++) i2.push(Object.assign(Object.assign({}, e4[r4]), { speakerChange: 0 === r4 && t4.speakerChange, speaker: t4.speaker }));
            }
            return i2;
          }
          splitAffirmativeTurns(t3) {
            const e3 = /^(mhm|yeah|yes|yep|right|okay|ok|absolutely|sure|exactly|uh-huh|mm-hmm)[.!,]?\s+/i;
            for (let r3 = 0; r3 < t3.length; r3++) {
              const n3 = t3[r3];
              if (void 0 === n3.speaker || 0 === n3.segments.length) continue;
              const o2 = n3.segments[0], i2 = e3.exec(o2.text);
              if (!i2) continue;
              if (/,\s*$/.test(i2[0])) continue;
              const a2 = o2.text.slice(i2[0].length).trim(), l2 = n3.segments.slice(1);
              if ((0, s.countWords)(a2) + l2.reduce(((t4, e4) => t4 + (0, s.countWords)(e4.text)), 0) < 30) continue;
              const c2 = i2[0].trimEnd(), u2 = a2 ? [{ start: o2.start, text: a2 }, ...l2] : l2, d2 = { start: n3.start, segments: [{ start: o2.start, text: c2 }], speakerChange: n3.speakerChange, speaker: n3.speaker }, h2 = { start: u2[0].start, segments: u2, speakerChange: true, speaker: 0 === n3.speaker ? 1 : 0 };
              t3.splice(r3, 1, d2, h2), r3++;
            }
          }
          mergeSentenceGroupsWithinTurn(t3) {
            if (t3.length <= 1) return t3;
            const e3 = [];
            let r3 = Object.assign({}, t3[0]), n3 = true;
            for (let o2 = 1; o2 < t3.length; o2++) {
              const i2 = t3[o2];
              this.shouldMergeSentenceGroups(r3, i2, n3) ? r3.text = `${r3.text} ${i2.text}` : (e3.push(r3), r3 = Object.assign({}, i2), n3 = false);
            }
            return e3.push(r3), e3;
          }
          shouldMergeSentenceGroups(t3, e3, r3) {
            const n3 = (0, s.countWords)(t3.text), o2 = (0, s.countWords)(e3.text);
            return !this.isShortStandaloneUtterance(t3.text, n3) && !this.isShortStandaloneUtterance(e3.text, o2) && (!(r3 && n3 < 8) && (!u.test(t3.text) && !u.test(e3.text) && (!(n3 + o2 > 80) && !(e3.start - t3.start > 45))));
          }
          isShortStandaloneUtterance(t3, e3) {
            const r3 = null != e3 ? e3 : (0, s.countWords)(t3);
            return r3 > 0 && r3 <= 3 && c.test(t3);
          }
          groupBySentence(t3) {
            const e3 = [], r3 = [], n3 = (t4) => {
              const r4 = t4.map(((t5) => t5.text)).join(" ").trim();
              r4 && e3.push({ start: t4[0].start, text: r4, speakerChange: false });
            }, o2 = () => {
              0 !== r3.length && (n3(r3), r3.length = 0);
            };
            for (const e4 of t3) if (r3.length > 0 && e4.start - r3[r3.length - 1].start > 20 && o2(), r3.push(e4), c.test(e4.text)) o2();
            else if (e4.start - r3[0].start >= 30) {
              const t4 = this.findNaturalBreak(r3);
              t4 > 0 && t4 < r3.length ? (i2 = t4) <= 0 || n3(r3.splice(0, i2)) : o2();
            }
            var i2;
            return o2(), e3;
          }
          findNaturalBreak(t3) {
            var e3, r3;
            if (t3.length <= 1) return -1;
            const n3 = t3[0].start + 15;
            for (let o3 = t3.length - 1; o3 >= 0 && !(t3[o3].start < n3); o3--) {
              const n4 = t3[o3].text.match(f);
              if (n4) {
                const i3 = null !== (e3 = n4[1]) && void 0 !== e3 ? e3 : n4[3], s2 = null !== (r3 = n4[2]) && void 0 !== r3 ? r3 : n4[4], a2 = t3[o3].start;
                return t3.splice(o3, 1, { start: a2, text: i3 }, { start: a2, text: s2 }), o3 + 1;
              }
            }
            let o2 = -1, i2 = 0;
            for (let e4 = 1; e4 < t3.length; e4++) {
              if (t3[e4].start < n3) continue;
              const r4 = t3[e4].start - t3[e4 - 1].start;
              r4 >= i2 && (i2 = r4, o2 = e4);
            }
            return o2;
          }
        }
        e2.YoutubeExtractor = A;
      }, 1608(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.MetadataExtractor = void 0;
        const n2 = r2(2552);
        class o {
          static extract(t3, e3, r3) {
            var n3, o2;
            let i = "", s = "";
            try {
              if (s = (null === (n3 = t3.location) || void 0 === n3 ? void 0 : n3.href) || "", s || (s = this.getMetaContent(r3, "property", "og:url") || this.getMetaContent(r3, "property", "twitter:url") || this.getSchemaProperty(e3, "url") || this.getSchemaProperty(e3, "mainEntityOfPage.url") || this.getSchemaProperty(e3, "mainEntity.url") || this.getSchemaProperty(e3, "WebSite.url") || (null === (o2 = t3.querySelector('link[rel="canonical"]')) || void 0 === o2 ? void 0 : o2.getAttribute("href")) || ""), s) try {
                i = new URL(s).hostname.replace(/^www\./, "");
              } catch (t4) {
                console.warn("Failed to parse URL:", t4);
              }
            } catch (e4) {
              const r4 = t3.querySelector("base[href]");
              if (r4) try {
                s = r4.getAttribute("href") || "", i = new URL(s).hostname.replace(/^www\./, "");
              } catch (t4) {
                console.warn("Failed to parse base URL:", t4);
              }
            }
            const a = this.getSiteName(e3, r3), { title: l, detectedSiteName: c } = this.cleanTitle(this.getBestTitle(t3, e3, r3, i, a), a), u = this.getAuthor(t3, e3, r3), d = u && !u.includes(",") ? u : "", h = a || c || d || i || "";
            return { title: l, description: this.getDescription(t3, e3, r3), domain: i, favicon: this.getFavicon(t3, s, r3), image: this.getImage(t3, e3, r3), language: this.getLanguage(t3, e3, r3), published: this.getPublished(t3, e3, r3, s), author: u, site: h, schemaOrgData: e3, wordCount: 0, parseTime: 0 };
          }
          static isPlaceholderValue(t3) {
            return !(!/[{}]/.test(t3) && !/^#[a-zA-Z]/.test(t3)) || !/[\p{L}\p{N}]/u.test(t3);
          }
          static firstValid(t3) {
            for (const e3 of t3) {
              const t4 = e3();
              if (t4 && !this.isPlaceholderValue(t4)) return t4;
            }
            return "";
          }
          static getAuthor(t3, e3, r3) {
            var n3, o2, i;
            let s;
            if (s = this.firstValid([() => this.getMetaContent(r3, "name", "sailthru.author"), () => this.getMetaContent(r3, "property", "article:author"), () => this.getMetaContent(r3, "property", "author"), () => this.getMetaContent(r3, "name", "author"), () => this.getMetaContent(r3, "name", "byl"), () => this.getMetaContent(r3, "name", "authorList")]), s) {
              const t4 = this.cleanAuthorString(s);
              if (t4) return t4;
            }
            let a = this.getMetaContents(r3, "name", "citation_author").filter(((t4) => !this.isPlaceholderValue(t4)));
            if (0 === a.length && (a = this.getMetaContents(r3, "property", "dc.creator").filter(((t4) => !this.isPlaceholderValue(t4)))), a.length > 0) return s = a.map(((t4) => {
              if (!t4.includes(",")) return t4.trim();
              const e4 = /(.*),\s(.*)/.exec(t4);
              return e4 && 3 === e4.length ? `${e4[2]} ${e4[1]}` : t4.trim();
            })).join(", "), s;
            let l = this.getSchemaProperty(e3, "author.name") || this.getSchemaProperty(e3, "author.[].name");
            if (l) {
              const t4 = l.split(",").map(((t5) => t5.trim().replace(/,$/, "").trim())).filter(((t5) => t5 && !this.isPlaceholderValue(t5)));
              if (t4.length > 0) {
                let e4 = [...new Set(t4)];
                return e4.length > 10 && (e4 = e4.slice(0, 10)), e4.join(", ");
              }
            }
            const c = t3.querySelectorAll('a[rel~="author"], address[rel~="author"]');
            if (c.length > 0 && c.length <= 3) {
              const t4 = [];
              c.forEach(((e5) => {
                const r4 = this.getVisibleText(e5), n4 = r4.toLowerCase();
                r4 && r4.length < 100 && "author" !== n4 && "authors" !== n4 && !this.isPlaceholderValue(r4) && t4.push(r4);
              }));
              const e4 = [...new Set(t4)];
              if (e4.length > 0) return e4.join(", ");
            }
            const u = [], d = (t4) => {
              t4 && t4.split(",").forEach(((t5) => {
                const e4 = t5.replace(/\s+/g, " ").trim().replace(/,$/, "").trim(), r4 = e4.toLowerCase();
                e4 && "author" !== r4 && "authors" !== r4 && !this.isPlaceholderValue(e4) && u.push(e4);
              }));
            }, h = [{ selector: '[itemprop="author"]' }, { selector: ".author", maxMatches: 3 }, { selector: '[href*="/author/"]', maxMatches: 3 }, { selector: ".authors a", maxMatches: 3 }];
            for (const { selector: e4, maxMatches: r4 } of h) {
              const n4 = t3.querySelectorAll(e4);
              r4 && n4.length > r4 || n4.forEach(((t4) => d(this.getAuthorName(t4))));
            }
            if (u.length > 0) {
              let t4 = [...new Set(u.map(((t5) => t5.trim())).filter(Boolean))];
              if (t4.length > 1 && (t4 = t4.filter(((e4) => !t4.some(((t5) => t5 !== e4 && e4.includes(t5)))))), t4.length > 0) return t4.length > 10 && (t4 = t4.slice(0, 10)), t4.join(", ");
            }
            const m = t3.querySelector("h1");
            if (m) {
              let t4 = m.nextElementSibling;
              for (let e5 = 0; e5 < 3 && t4; e5++) {
                const e6 = (null === (n3 = t4.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", r4 = Array.from(t4.querySelectorAll("p, time")), s2 = r4.some(((t5) => {
                  var e7;
                  return !!this.parseDateText((null === (e7 = t5.textContent) || void 0 === e7 ? void 0 : e7.trim()) || "");
                }));
                if (!!this.parseDateText(e6) || s2) {
                  const n4 = t4.querySelectorAll("a");
                  if (1 === n4.length) {
                    const t5 = ((null === (o2 = n4[0].textContent) || void 0 === o2 ? void 0 : o2.trim()) || "").replace(/\u00a0/g, " ");
                    if (t5.length > 0 && t5.length < 100 && !this.parseDateText(t5)) return t5;
                  }
                  if (s2 && e6.length < 300) for (const t5 of r4) {
                    if ("P" !== t5.tagName) continue;
                    const e7 = ((null === (i = t5.textContent) || void 0 === i ? void 0 : i.trim()) || "").replace(/\u00a0/g, " ");
                    if (e7.length > 0 && e7.length < 150 && !this.parseDateText(e7)) return e7;
                  }
                }
                t4 = t4.nextElementSibling;
              }
              let e4 = m;
              for (let t5 = 0; t5 < 3 && e4; t5++) {
                let t6 = e4.previousElementSibling;
                for (let e5 = 0; e5 < 3 && t6; e5++) {
                  const e6 = this.extractByline(t6);
                  if (e6) return e6;
                  t6 = t6.previousElementSibling;
                }
                t6 = e4.nextElementSibling;
                for (let e5 = 0; e5 < 3 && t6; e5++) {
                  const e6 = this.extractByline(t6);
                  if (e6) return e6;
                  t6 = t6.nextElementSibling;
                }
                e4 = e4.parentElement;
              }
            }
            return "";
          }
          static extractByline(t3) {
            var e3;
            const r3 = [t3, ...t3.querySelectorAll("p, span, address")];
            for (const t4 of r3) {
              const r4 = ((null === (e3 = t4.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "").replace(/\u00a0/g, " ");
              if (r4.length > 0 && r4.length < 50) {
                const t5 = r4.match(/^By\s+([A-Z].+)$/i);
                if (t5) return t5[1].trim();
              }
            }
            return null;
          }
          static cleanAuthorString(t3) {
            return (t3 = (t3 = (t3 = (t3 = t3.replace(/^by\s+/i, "")).replace(/\(?\s*https?:\/\/\S+\s*\)?/gi, "")).replace(/,?\s+and\s+/gi, ", ")).replace(/\s*[-\u2013\u2014|]\s*$/g, "")).trim();
          }
          static getSiteName(t3, e3) {
            const r3 = this.firstValid([() => this.getSchemaProperty(t3, "publisher.name"), () => this.getMetaContent(e3, "property", "og:site_name"), () => this.getMetaContent(e3, "name", "og:site_name"), () => this.getSchemaProperty(t3, "WebSite.name"), () => this.getSchemaProperty(t3, "sourceOrganization.name"), () => this.getMetaContent(e3, "name", "copyright"), () => this.getSchemaProperty(t3, "copyrightHolder.name"), () => this.getSchemaProperty(t3, "isPartOf.name"), () => this.getMetaContent(e3, "name", "application-name")]);
            return r3 && (0, n2.countWords)(r3) > 6 ? "" : r3;
          }
          static getBestTitle(t3, e3, r3, n3, o2) {
            var i, s, a, l, c;
            const u = [this.getMetaContent(r3, "property", "og:title"), this.getMetaContent(r3, "name", "twitter:title"), this.getSchemaProperty(e3, "headline"), this.getMetaContent(r3, "name", "title"), this.getMetaContent(r3, "name", "sailthru.title"), (null === (s = null === (i = t3.querySelector("title")) || void 0 === i ? void 0 : i.textContent) || void 0 === s ? void 0 : s.trim()) || "", (null === (l = null === (a = t3.querySelector("h1")) || void 0 === a ? void 0 : a.textContent) || void 0 === l ? void 0 : l.trim()) || ""].filter(((t4) => t4 && !this.isPlaceholderValue(t4)));
            if (0 === u.length) return "";
            const d = (this.getMetaContent(r3, "property", "author") || this.getMetaContent(r3, "name", "author")).trim().toLowerCase(), h = o2.trim().toLowerCase(), m = n3 ? n3.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]/g, "") : "";
            return null !== (c = u.find(((t4) => !this.isSiteIdentifier(t4, d, h, m)))) && void 0 !== c ? c : u[0];
          }
          static isSiteIdentifier(t3, e3, r3, n3) {
            const o2 = t3.trim().toLowerCase();
            if (e3 && o2 === e3) return true;
            if (r3 && o2 === r3) return true;
            if (n3) {
              if (o2.replace(/[^a-z0-9]/g, "") === n3) return true;
            }
            return false;
          }
          static cleanTitle(t3, e3) {
            if (!t3) return { title: t3, detectedSiteName: "" };
            const r3 = "[|\\-–—/·]";
            if (e3 && e3.toLowerCase() !== t3.toLowerCase() && (0, n2.countWords)(e3) <= 6) {
              const o3 = e3.toLowerCase(), i2 = e3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), s = [`\\s*${r3}\\s*${i2}\\s*$`, `^\\s*${i2}\\s*${r3}\\s*`];
              for (const r4 of s) {
                const n3 = new RegExp(r4, "i");
                if (n3.test(t3)) return { title: t3.replace(n3, "").trim(), detectedSiteName: e3 };
              }
              const a = new RegExp(`\\s+${r3}\\s+`, "g");
              let l;
              const c = [];
              for (; null !== (l = a.exec(t3)); ) c.push({ index: l.index, length: l[0].length });
              if (c.length > 0) {
                const r4 = c[c.length - 1], i3 = t3.substring(r4.index + r4.length).trim().toLowerCase();
                if (i3 && o3.includes(i3)) {
                  let o4 = r4.index;
                  for (let e4 = c.length - 2; e4 >= 0; e4--) {
                    const r5 = c[e4], i4 = t3.substring(r5.index + r5.length, o4).trim();
                    if ((0, n2.countWords)(i4) > 3) break;
                    o4 = r5.index;
                  }
                  return { title: t3.substring(0, o4).trim(), detectedSiteName: e3 };
                }
                const s2 = c[0], a2 = t3.substring(0, s2.index).trim().toLowerCase();
                if (a2 && o3.includes(a2)) {
                  let r5 = s2.index + s2.length;
                  for (let e4 = 1; e4 < c.length; e4++) {
                    const o4 = c[e4], i4 = t3.substring(r5, o4.index).trim();
                    if ((0, n2.countWords)(i4) > 3) break;
                    r5 = o4.index + o4.length;
                  }
                  return { title: t3.substring(r5).trim(), detectedSiteName: e3 };
                }
              }
            }
            const o2 = this.trySeparatorSplit(t3, /\s+([|/\xb7])\s+/g, { guard: (t4, e4) => e4 <= 3 && t4 >= 2 && t4 >= 2 * e4 });
            if (o2) return o2;
            const i = this.trySeparatorSplit(t3, /\s+[-\u2013\u2014]\s+/g, { suffixOnly: true, guard: (t4, e4) => e4 <= 2 && t4 >= 2 && t4 > e4 });
            return i || { title: t3.trim(), detectedSiteName: "" };
          }
          static trySeparatorSplit(t3, e3, r3) {
            let o2;
            const i = [];
            for (; null !== (o2 = e3.exec(t3)); ) i.push({ index: o2.index, length: o2[0].length });
            if (0 === i.length) return null;
            const s = i[i.length - 1], a = t3.substring(0, s.index).trim(), l = t3.substring(s.index + s.length).trim();
            if (r3.guard((0, n2.countWords)(a), (0, n2.countWords)(l))) return { title: a, detectedSiteName: l };
            if (!r3.suffixOnly) {
              const e4 = i[0], o3 = t3.substring(0, e4.index).trim(), s2 = t3.substring(e4.index + e4.length).trim();
              if (r3.guard((0, n2.countWords)(s2), (0, n2.countWords)(o3))) return { title: s2, detectedSiteName: o3 };
            }
            return null;
          }
          static getDescription(t3, e3, r3) {
            return this.firstValid([() => this.getMetaContent(r3, "name", "description"), () => this.getMetaContent(r3, "property", "description"), () => this.getMetaContent(r3, "property", "og:description"), () => this.getSchemaProperty(e3, "description"), () => this.getMetaContent(r3, "name", "twitter:description"), () => this.getMetaContent(r3, "name", "sailthru.description")]);
          }
          static getImage(t3, e3, r3) {
            return this.getMetaContent(r3, "property", "og:image") || this.getMetaContent(r3, "name", "twitter:image") || this.getSchemaProperty(e3, "image.url") || this.getMetaContent(r3, "name", "sailthru.image.full") || "";
          }
          static getLanguage(t3, e3, r3) {
            var n3, o2, i, s;
            const a = null === (o2 = null === (n3 = t3.documentElement) || void 0 === n3 ? void 0 : n3.getAttribute("lang")) || void 0 === o2 ? void 0 : o2.trim();
            if (a) return this.normalizeLangCode(a);
            const l = this.getMetaContent(r3, "name", "content-language") || this.getMetaContent(r3, "property", "og:locale");
            if (l) return this.normalizeLangCode(l);
            const c = null === (s = null === (i = t3.querySelector('meta[http-equiv="Content-Language" i]')) || void 0 === i ? void 0 : i.getAttribute("content")) || void 0 === s ? void 0 : s.trim();
            if (c) return this.normalizeLangCode(c);
            const u = this.getSchemaProperty(e3, "inLanguage");
            return u ? this.normalizeLangCode(u) : "";
          }
          static normalizeLangCode(t3) {
            return t3.replace(/_/g, "-");
          }
          static getFavicon(t3, e3, r3) {
            var n3, o2;
            const i = this.getMetaContent(r3, "property", "og:image:favicon");
            if (i) return i;
            const s = null === (n3 = t3.querySelector("link[rel='icon']")) || void 0 === n3 ? void 0 : n3.getAttribute("href");
            if (s) return s;
            const a = null === (o2 = t3.querySelector("link[rel='shortcut icon']")) || void 0 === o2 ? void 0 : o2.getAttribute("href");
            if (a) return a;
            if (e3 && /^https?:\/\//.test(e3)) try {
              return new URL("/favicon.ico", e3).href;
            } catch (t4) {
            }
            return "";
          }
          static getPublished(t3, e3, r3, n3) {
            const o2 = this.firstValid([() => this.getSchemaProperty(e3, "datePublished"), () => this.getMetaContent(r3, "name", "publishDate"), () => this.getMetaContent(r3, "property", "article:published_time"), () => {
              var e4, r4;
              return (null === (r4 = null === (e4 = t3.querySelector('abbr[itemprop="datePublished"]')) || void 0 === e4 ? void 0 : e4.title) || void 0 === r4 ? void 0 : r4.trim()) || "";
            }, () => this.getTimeElement(t3, n3), () => this.getMetaContent(r3, "name", "sailthru.date")]);
            if (o2) return o2;
            const i = t3.querySelector("h1");
            if (i) {
              const t4 = (t5, e5, r4) => {
                var n4, o3;
                let i2 = t5;
                for (let t6 = 0; t6 < 3 && i2; t6++) {
                  for (const t7 of Array.from(i2.querySelectorAll("p, time"))) {
                    const e6 = this.parseDateText((null === (n4 = t7.textContent) || void 0 === n4 ? void 0 : n4.trim()) || "");
                    if (e6) return e6;
                  }
                  if (!r4) {
                    const t7 = this.parseDateText((null === (o3 = i2.textContent) || void 0 === o3 ? void 0 : o3.trim()) || "");
                    if (t7) return t7;
                  }
                  i2 = e5(i2);
                }
                return "";
              }, e4 = this.firstValid([() => t4(i.nextElementSibling, ((t5) => t5.nextElementSibling), false), () => t4(i.previousElementSibling, ((t5) => t5.previousElementSibling), true)]);
              if (e4) return e4;
            }
            return "";
          }
          static getMetaContent(t3, e3, r3) {
            var n3;
            return null !== (n3 = this.getMetaContents(t3, e3, r3)[0]) && void 0 !== n3 ? n3 : "";
          }
          static getMetaContents(t3, e3, r3) {
            return t3.filter(((t4) => {
              const n3 = "name" === e3 ? t4.name : t4.property;
              return (null == n3 ? void 0 : n3.toLowerCase()) === r3.toLowerCase();
            })).map(((t4) => {
              var e4, r4;
              return null !== (r4 = null === (e4 = t4.content) || void 0 === e4 ? void 0 : e4.trim()) && void 0 !== r4 ? r4 : "";
            }));
          }
          static getTimeElement(t3, e3) {
            var r3, n3;
            for (const o2 of Array.from(t3.querySelectorAll("time"))) {
              if (this.isLinkedToOtherPage(o2, e3)) continue;
              const t4 = (null === (r3 = o2.getAttribute("datetime")) || void 0 === r3 ? void 0 : r3.trim()) || (null === (n3 = o2.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "";
              if (t4) return t4;
            }
            return "";
          }
          static isLinkedToOtherPage(t3, e3) {
            var r3;
            if (!e3) return false;
            const n3 = t3.closest("a[href]");
            if (!n3) return false;
            const o2 = (null === (r3 = n3.getAttribute("href")) || void 0 === r3 ? void 0 : r3.trim()) || "";
            if (!o2 || o2.startsWith("#")) return false;
            try {
              const t4 = new URL(o2, e3), r4 = new URL(e3);
              if (t4.origin !== r4.origin) return false;
              const n4 = (t5) => t5.replace(/\/+$/, "");
              return n4(t4.pathname) !== n4(r4.pathname);
            } catch (t4) {
              return false;
            }
          }
          static parseDateText(t3) {
            let e3 = t3.match(/\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/i);
            if (e3) {
              const t4 = e3[1].padStart(2, "0"), r3 = this.MONTH_MAP[e3[2].toLowerCase()];
              return `${e3[3]}-${r3}-${t4}T00:00:00+00:00`;
            }
            if (e3 = t3.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})\b/i), e3) {
              const t4 = this.MONTH_MAP[e3[1].toLowerCase()], r3 = e3[2].padStart(2, "0");
              return `${e3[3]}-${t4}-${r3}T00:00:00+00:00`;
            }
            return "";
          }
          static getVisibleText(t3) {
            const e3 = t3.cloneNode(true);
            return e3.querySelectorAll("script, style, noscript").forEach(((t4) => t4.remove())), (e3.textContent || "").replace(/\s+/g, " ").trim();
          }
          static getAuthorName(t3) {
            const e3 = t3.cloneNode(true);
            e3.querySelectorAll("script, style, noscript").forEach(((t4) => t4.remove()));
            const r3 = (e3.textContent || "").replace(/\s+/g, " ").trim();
            if (!r3) return "";
            for (const t4 of e3.querySelectorAll("span, a, p")) {
              const e4 = (t4.textContent || "").replace(/\s+/g, " ").trim();
              if (e4.length >= 2 && e4.length <= 50 && e4 !== r3) return e4;
            }
            return r3.length <= 100 ? r3 : "";
          }
          static getSchemaProperty(t3, e3, r3 = "") {
            if (!t3) return r3;
            const n3 = (t4, e4, r4, o2 = true) => {
              if ("string" == typeof t4) return 0 === e4.length ? [t4] : [];
              if (!t4 || "object" != typeof t4) return [];
              if (Array.isArray(t4)) {
                const i2 = e4[0];
                if (/^\[\d+\]$/.test(i2)) {
                  const s2 = parseInt(i2.slice(1, -1));
                  return t4[s2] ? n3(t4[s2], e4.slice(1), r4, o2) : [];
                }
                return 0 === e4.length && t4.every(((t5) => "string" == typeof t5 || "number" == typeof t5)) ? t4.map(String) : t4.flatMap(((t5) => n3(t5, e4, r4, o2)));
              }
              const [i, ...s] = e4;
              if (!i) return "string" == typeof t4 ? [t4] : "object" == typeof t4 && t4.name ? [t4.name] : [];
              if (t4.hasOwnProperty(i)) return n3(t4[i], s, r4 ? `${r4}.${i}` : i, true);
              if (!o2) {
                const o3 = [];
                for (const i2 in t4) if ("object" == typeof t4[i2]) {
                  const s2 = n3(t4[i2], e4, r4 ? `${r4}.${i2}` : i2, false);
                  o3.push(...s2);
                }
                if (o3.length > 0) return o3;
              }
              return [];
            };
            try {
              let o2 = n3(t3, e3.split("."), "", true);
              0 === o2.length && (o2 = n3(t3, e3.split("."), "", false));
              const i = [...new Set(o2.filter(Boolean))];
              return i.length > 0 ? i.join(", ") : r3;
            } catch (t4) {
              return console.error(`Error in getSchemaProperty for ${e3}:`, t4), r3;
            }
          }
        }
        e2.MetadataExtractor = o, o.MONTH_MAP = { january: "01", february: "02", march: "03", april: "04", may: "05", june: "06", july: "07", august: "08", september: "09", october: "10", november: "11", december: "12" };
      }, 3172(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.removeEyebrowLabel = function(t3, e3, r3) {
          var n3;
          const i2 = t3.querySelector("h1") || t3.querySelector("h2");
          if (!i2) return;
          let a2 = i2;
          for (; a2.parentElement && a2.parentElement !== t3 && !a2.previousElementSibling; ) a2 = a2.parentElement;
          const l2 = a2.previousElementSibling;
          if (!l2) return;
          const c2 = (null === (n3 = l2.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "", u2 = (0, o.countWords)(c2);
          if (u2 < 1 || u2 > 6) return;
          if (c2.length > 40) return;
          if (/[.!?]/.test(c2)) return;
          if (s.test(c2)) return;
          if (l2.querySelector("img, picture, video, iframe, figure, table, pre, code, time, [datetime], h1, h2, h3, h4, h5, h6, ul, ol, blockquote")) return;
          e3 && r3 && r3.push({ step: "removeEyebrowLabel", reason: "eyebrow label", text: (0, o.textPreview)(l2) });
          l2.remove();
        }, e2.removeByContentPattern = function(t3, e3, r3, m2, R, D) {
          var B, H, j, W, F, z, U, V, J, G, K, X, Y, Q, Z, tt, et, rt, nt, ot, it, st, at, lt, ct, ut, dt, ht, mt, ft, pt, gt, vt;
          const yt = (0, i.findContentStart)(t3, m2), bt = (t4) => (0, i.isAboveContentStart)(t4, yt), xt = (0, o.normalizeText)(m2), Ct = (0, o.normalizeText)(R), St = t3.querySelector("ul, ol");
          if (St && (function(t4) {
            const e4 = t4.querySelectorAll("li");
            if (e4.length < 2 || e4.length > 8) return false;
            const r4 = Array.from(t4.querySelectorAll("a"));
            if (r4.length < 1 || r4.length >= e4.length) return false;
            if (t4.querySelector("img, p, figure, blockquote")) return false;
            for (const t5 of e4) if ((0, o.countWords)(t5.textContent || "") > 8) return false;
            let n3 = true, i2 = false, s2 = true;
            for (const t5 of r4) {
              const e5 = t5.getAttribute("href") || "";
              if (e5.startsWith("http") || e5.startsWith("//")) {
                n3 = false;
                break;
              }
              ("/" === e5 || /^\/[a-zA-Z0-9_-]+\/?$/.test(e5)) && (i2 = true), (t5.textContent || "").trim().split(/\s+/).filter(Boolean).length > 5 && (s2 = false);
            }
            return n3 && i2 && s2;
          })(St)) {
            let r4 = St;
            for (; r4.parentElement && r4.parentElement !== t3 && 1 === r4.parentElement.children.length; ) r4 = r4.parentElement;
            e3 && D && D.push({ step: "removeByContentPattern", reason: "breadcrumb navigation list", text: (0, o.textPreview)(r4) }), r4.remove();
          }
          const Et = t3.querySelector("h1");
          if (Et) for (const r4 of t3.querySelectorAll("a[href]")) {
            if (!r4.parentNode) continue;
            if (!(4 & r4.compareDocumentPosition(Et))) continue;
            if (!r4.querySelector("div")) continue;
            if (r4.querySelector("img, picture, video")) continue;
            const t4 = (null === (B = r4.textContent) || void 0 === B ? void 0 : B.trim()) || "";
            (0, o.countWords)(t4) > 25 || (/[.!?]\s/.test(t4) || (e3 && D && D.push({ step: "removeByContentPattern", reason: "promotional banner link", text: (0, o.textPreview)(r4) }), r4.remove()));
          }
          !(function(t4, e4, r4, n3) {
            var s2;
            const a2 = t4.querySelectorAll("time");
            if (0 === a2.length) return;
            for (const l2 of a2) {
              if (!(0, i.isAboveContentStart)(l2, e4)) continue;
              let a3 = null, c2 = l2.parentElement;
              for (; c2 && c2 !== t4; ) {
                if (c2.querySelector("h1, h2") && c2.querySelector("time")) {
                  const t5 = (null === (s2 = c2.textContent) || void 0 === s2 ? void 0 : s2.trim()) || "", e5 = (0, o.countWords)(t5), r5 = /* @__PURE__ */ new Set();
                  for (const t6 of c2.querySelectorAll("h1, h2, h3, time, [aria-label]")) {
                    let e6 = false;
                    for (const n5 of r5) if (n5.contains(t6)) {
                      e6 = true;
                      break;
                    }
                    e6 || r5.add(t6);
                  }
                  let n4 = 0;
                  for (const t6 of r5) n4 += (0, o.countWords)(t6.textContent || "");
                  if (!(e5 - n4 < 30)) break;
                  a3 = c2;
                }
                c2 = c2.parentElement;
              }
              if (a3) return r4 && n3 && n3.push({ step: "removeByContentPattern", reason: "hero header block", text: (0, o.textPreview)(a3) }), void a3.remove();
            }
          })(t3, yt, e3, D);
          for (const r4 of t3.querySelectorAll("audio, video")) {
            if (!r4.parentNode) continue;
            if (!r4.getAttribute("src") && !r4.querySelector("source")) continue;
            let n3 = r4;
            for (; n3.parentElement && n3.parentElement !== t3 && !((0, o.countWords)((null === (H = n3.parentElement.textContent) || void 0 === H ? void 0 : H.trim()) || "") > 25); ) n3 = n3.parentElement;
            const i2 = (null === (j = n3.textContent) || void 0 === j ? void 0 : j.trim()) || "", s2 = /\blisten\s+to\s+(?:this\s+)?(?:article|story|post|episode|podcast)\b/i.test(i2), a2 = !s2 && bt(n3) && (0, o.countWords)(i2) <= 25;
            (s2 || a2) && (e3 && D && D.push({ step: "removeByContentPattern", reason: "audio player widget", text: (0, o.textPreview)(n3) }), n3.remove());
          }
          const At = t3.textContent || "";
          let wt = null;
          try {
            wt = new URL(r3);
          } catch (t4) {
          }
          for (const i2 of t3.querySelectorAll("ul, ol")) {
            if (!i2.parentNode) continue;
            if (i2.closest("#footnotes")) continue;
            const s2 = (null === (W = i2.textContent) || void 0 === W ? void 0 : W.trim()) || "", a2 = At.indexOf(s2.substring(0, 60));
            if (a2 < 0 || a2 > 0.3 * At.length) continue;
            const l2 = Array.from(i2.querySelectorAll("a[href]"));
            if (l2.length < 3) continue;
            if (i2.querySelector(n2.CONTENT_ELEMENT_SELECTOR)) continue;
            let c2 = 0;
            for (const t4 of l2) {
              const e4 = t4.getAttribute("href") || "";
              if (e4.startsWith("#")) c2++;
              else if (wt && e4.includes("#")) try {
                const t5 = new URL(e4, r3);
                t5.pathname === wt.pathname && t5.hostname === wt.hostname && c2++;
              } catch (t5) {
              }
            }
            if (c2 < 3 || c2 / l2.length < 0.8) continue;
            let u2 = i2;
            for (; u2.parentElement && u2.parentElement !== t3 && 1 === u2.parentElement.children.length; ) u2 = u2.parentElement;
            const d2 = u2.previousElementSibling;
            if (d2 && S.test(d2.tagName)) {
              const t4 = (null === (F = d2.textContent) || void 0 === F ? void 0 : F.trim()) || "";
              /^(?:table of )?contents$|^on this page$|^in this (?:article|guide|post)$/i.test(t4) && (e3 && D && D.push({ step: "removeByContentPattern", reason: "table of contents heading", text: (0, o.textPreview)(d2) }), d2.remove());
            }
            const h2 = u2.previousElementSibling, m3 = u2.nextElementSibling;
            e3 && D && D.push({ step: "removeByContentPattern", reason: "table of contents", text: (0, o.textPreview)(u2) }), u2.remove(), "HR" === (null == h2 ? void 0 : h2.tagName) && h2.remove(), "HR" === (null == m3 ? void 0 : m3.tagName) && m3.remove();
            break;
          }
          const Tt = Array.from(t3.querySelectorAll("p, span, div, time"));
          let _t = false, Lt = false;
          for (const r4 of Tt) {
            if (!r4.parentNode) continue;
            const n3 = (null === (z = r4.textContent) || void 0 === z ? void 0 : z.trim()) || "", i2 = (0, o.countWords)(n3);
            if (i2 > 15 || 0 === i2) continue;
            if (r4.closest("pre, code")) continue;
            const h2 = r4.tagName, m3 = s.test(n3);
            let f2 = -2;
            const v2 = () => (-2 === f2 && (f2 = At.indexOf(n3)), f2);
            if (p.test(n3) && v2() <= 300) {
              let n4 = r4;
              n4.parentElement && n4.parentElement !== t3 && (n4 = n4.parentElement), e3 && D && D.push({ step: "removeByContentPattern", reason: "timezone widget", text: (0, o.textPreview)(n4) }), n4.remove();
            } else if (1 === i2 && g.test(n3)) e3 && D && D.push({ step: "removeByContentPattern", reason: "pinned label", text: (0, o.textPreview)(r4) }), r4.remove();
            else {
              for (const [t4, s2] of [[xt, "duplicate title"], [Ct, "duplicate description"]]) if (t4 && i2 >= 3 && bt(r4) && (0, o.normalizeText)(n3) === t4) {
                e3 && D && D.push({ step: "removeByContentPattern", reason: s2, text: (0, o.textPreview)(r4) }), r4.remove();
                break;
              }
              if (r4.parentNode) if (("DIV" === h2 || "P" === h2) && i2 >= 1 && i2 <= 10 && (m3 || a.test(n3)) && !d.test(n3) && !/[.!?]/.test(n3) && bt(r4) && !Array.from(r4.querySelectorAll("p, h1, h2, h3, h4, h5, h6")).some(((t4) => (0, o.countWords)(t4.textContent || "") > 8))) e3 && D && D.push({ step: "removeByContentPattern", reason: "article metadata header block", text: (0, o.textPreview)(r4) }), r4.remove();
              else {
                if ("DIV" === h2 && i2 >= 1 && i2 <= 5 && !/[.!?]/.test(n3) && bt(r4) && r4.querySelector("img")) {
                  const t4 = r4.querySelectorAll("a[href]");
                  if (t4.length > 0) {
                    let i3 = 0;
                    for (const e4 of t4) i3 += ((null === (U = e4.textContent) || void 0 === U ? void 0 : U.trim()) || "").length;
                    if (i3 / (n3.length || 1) >= 0.8) {
                      e3 && D && D.push({ step: "removeByContentPattern", reason: "category badge", text: (0, o.textPreview)(r4) }), r4.remove();
                      continue;
                    }
                  }
                }
                if (!_t && u.test(n3) && i2 >= 2 && !/[.!?]$/.test(n3) && bt(r4)) {
                  const i3 = $(r4, n3, t3);
                  e3 && D && D.push({ step: "removeByContentPattern", reason: "author byline", text: (0, o.textPreview)(i3) }), i3.remove(), _t = true;
                } else {
                  if (l.test(n3) && (m3 ? 0 === r4.querySelectorAll("p, div, section, article").length : i2 <= 5 && bt(r4))) {
                    let i3 = n3;
                    for (const t4 of q) i3 = i3.replace(t4, "");
                    if (0 === i3.trim().length) {
                      const i4 = m3 ? r4 : $(r4, n3, t3);
                      e3 && D && D.push({ step: "removeByContentPattern", reason: "read time metadata", text: (0, o.textPreview)(i4) }), i4.remove();
                      continue;
                    }
                  }
                  if (!Lt && i2 >= 2 && i2 <= 10 && m3 && !d.test(n3) && bt(r4)) {
                    let i3 = n3;
                    for (const t4 of N) i3 = i3.replace(t4, "");
                    if (i3 = i3.trim(), i3) {
                      const s2 = i3.split(/\s+/).filter(((t4) => t4.length > 0));
                      if (s2.length >= 1 && s2.length <= 4 && s2.every(((t4) => c.test(t4)))) {
                        const i4 = $(r4, n3, t3);
                        e3 && D && D.push({ step: "removeByContentPattern", reason: "author date metadata", text: (0, o.textPreview)(i4) }), i4.remove(), Lt = true;
                        continue;
                      }
                    }
                  }
                  if (m3 && i2 <= 5 && bt(r4)) {
                    let i3 = n3;
                    for (const t4 of L) i3 = i3.replace(t4, "");
                    if (i3 = i3.replace(/[,\s/\-]+/g, "").trim(), 0 === i3.length) {
                      const i4 = $(r4, n3, t3);
                      e3 && D && D.push({ step: "removeByContentPattern", reason: "standalone date metadata", text: (0, o.textPreview)(i4) }), i4.remove();
                      continue;
                    }
                  }
                }
              }
            }
          }
          const qt = Array.from(t3.querySelectorAll("time"));
          for (const r4 of qt) {
            if (!r4.parentNode) continue;
            let n3 = r4, i2 = (null === (V = n3.textContent) || void 0 === V ? void 0 : V.trim()) || "";
            for (; n3.parentElement && n3.parentElement !== t3; ) {
              const t4 = n3.parentElement.tagName.toLowerCase(), e4 = (null === (J = n3.parentElement.textContent) || void 0 === J ? void 0 : J.trim()) || "";
              if ("p" === t4 && e4 === i2) {
                n3 = n3.parentElement;
                break;
              }
              if (!["i", "em", "span", "b", "strong", "small"].includes(t4) || e4 !== i2) break;
              n3 = n3.parentElement, i2 = e4;
            }
            const s2 = (null === (G = n3.textContent) || void 0 === G ? void 0 : G.trim()) || "";
            if ((0, o.countWords)(s2) > 10) continue;
            const a2 = At.indexOf(s2), l2 = At.length - (a2 + s2.length);
            a2 > 200 && l2 > 200 || (e3 && D && D.push({ step: "removeByContentPattern", reason: "boundary date element", text: (0, o.textPreview)(n3) }), n3.remove());
          }
          const Nt = t3.querySelectorAll("ul, ol, dl");
          for (const r4 of Nt) {
            if (!r4.parentNode) continue;
            if (r4.closest("#footnotes")) continue;
            const n3 = "DL" === r4.tagName, i2 = Array.from(r4.children).filter(((t4) => n3 ? "DD" === t4.tagName : "LI" === t4.tagName)), s2 = n3 ? 1 : 2;
            if (i2.length < s2 || i2.length > 8) continue;
            const a2 = (null === (K = r4.textContent) || void 0 === K ? void 0 : K.trim()) || "", l2 = At.indexOf(a2), c2 = At.length - (l2 + a2.length);
            if (l2 > 500 && c2 > 500) continue;
            const u2 = r4.previousElementSibling;
            if (u2) {
              if (E(u2)) continue;
              if (((null === (X = u2.textContent) || void 0 === X ? void 0 : X.trim()) || "").endsWith(":")) continue;
            }
            let d2 = true;
            for (const t4 of i2) {
              const e4 = (null === (Y = t4.textContent) || void 0 === Y ? void 0 : Y.trim()) || "";
              if ((0, o.countWords)(e4) > 8) {
                d2 = false;
                break;
              }
              if (/[.!?]$/.test(e4)) {
                d2 = false;
                break;
              }
            }
            if (!d2) continue;
            if ((0, o.countWords)(a2) > 30) continue;
            const h2 = $(r4, a2, t3);
            e3 && D && D.push({ step: "removeByContentPattern", reason: "blog metadata list", text: (0, o.textPreview)(h2) }), h2.remove();
          }
          const kt = (null == wt ? void 0 : wt.pathname) || "", $t = (null == wt ? void 0 : wt.hostname.replace(/^www\./, "")) || "";
          if (kt) {
            const n3 = t3.querySelectorAll("div, span, p, a[href]"), i2 = t3.querySelector("h1, h2, h3");
            for (const s2 of n3) {
              if (!s2.parentNode) continue;
              const n4 = (null === (Q = s2.textContent) || void 0 === Q ? void 0 : Q.trim()) || "";
              if ((0, o.countWords)(n4) > 10) continue;
              if (s2.querySelectorAll("p, div, section, article").length > 0) continue;
              if (s2.matches("a[href]") && s2.parentElement && s2.parentElement !== t3) {
                if (((null === (Z = s2.parentElement.textContent) || void 0 === Z ? void 0 : Z.trim()) || "") !== n4) {
                  if (s2.closest("p")) continue;
                  if (!i2) continue;
                  if (!(4 & s2.compareDocumentPosition(i2))) continue;
                }
              }
              const a2 = s2.matches("a[href]") ? s2 : s2.querySelector("a[href]");
              if (a2) try {
                const t4 = new URL(a2.getAttribute("href") || "", r3).pathname, n5 = t4.replace(/\/[^/]*$/, "/"), i3 = /^index\.(html?|php)$/i.test(t4.split("/").pop() || "") && kt.startsWith(n5);
                "/" !== t4 && t4 !== kt && (kt.startsWith(t4) || i3) && (e3 && D && D.push({ step: "removeByContentPattern", reason: "section breadcrumb", text: (0, o.textPreview)(s2) }), s2.remove());
              } catch (t4) {
              }
            }
          }
          if ($t) {
            const n3 = t3.querySelectorAll("h2, h3, h4, h5, h6");
            for (const i2 of n3) {
              if (!i2.parentNode) continue;
              const n4 = i2.nextElementSibling;
              if (!n4 || "UL" !== n4.tagName && "OL" !== n4.tagName) continue;
              const s2 = Array.from(n4.children).filter(((t4) => "LI" === t4.tagName));
              if (s2.length < 2) continue;
              let a2 = false, l2 = n4;
              for (; l2 && l2 !== t3; ) {
                let t4 = l2.nextElementSibling;
                for (; t4; ) {
                  if (((null === (tt = t4.textContent) || void 0 === tt ? void 0 : tt.trim()) || "").length > 0) {
                    a2 = true;
                    break;
                  }
                  t4 = t4.nextElementSibling;
                }
                if (a2) break;
                l2 = l2.parentElement;
              }
              if (a2) continue;
              let c2 = true;
              for (const t4 of s2) {
                const e4 = t4.querySelectorAll("a[href]");
                if (0 === e4.length) {
                  c2 = false;
                  break;
                }
                const n5 = (null === (et = t4.textContent) || void 0 === et ? void 0 : et.trim()) || "";
                let o2 = 0;
                for (const t5 of e4) {
                  o2 += ((null === (rt = t5.textContent) || void 0 === rt ? void 0 : rt.trim()) || "").length;
                  try {
                    if (new URL(t5.getAttribute("href") || "", r3).hostname.replace(/^www\./, "") === $t) {
                      c2 = false;
                      break;
                    }
                  } catch (t6) {
                  }
                }
                if (!c2) break;
                if (o2 < 0.6 * n5.length) {
                  c2 = false;
                  break;
                }
              }
              c2 && (e3 && D && (D.push({ step: "removeByContentPattern", reason: "trailing external link list", text: (0, o.textPreview)(i2) }), D.push({ step: "removeByContentPattern", reason: "trailing external link list", text: (0, o.textPreview)(n4) })), n4.remove(), i2.remove());
            }
          }
          let Pt = t3.lastElementChild;
          for (; Pt && ["HR", "BR"].includes(Pt.tagName); ) Pt = Pt.previousElementSibling;
          if (Pt && ["SECTION", "DIV", "ASIDE"].includes(Pt.tagName)) {
            const t4 = [];
            let r4 = false;
            for (const e4 of Pt.children) {
              if ((null === (nt = e4.textContent) || void 0 === nt ? void 0 : nt.trim()) || "") {
                if ("P" === e4.tagName) t4.push(e4);
                else if ("BR" !== e4.tagName) {
                  r4 = true;
                  break;
                }
              }
            }
            if (t4.length >= 2 && !r4) {
              const r5 = t4.every(((t5) => {
                var e4, r6, n3;
                const o2 = ((null === (e4 = t5.textContent) || void 0 === e4 ? void 0 : e4.trim()) || "").replace(/\s+/g, " "), i2 = t5.querySelectorAll("a[href]");
                if (0 === i2.length) return false;
                let s2 = 0;
                for (const t6 of i2) s2 += ((null === (r6 = t6.textContent) || void 0 === r6 ? void 0 : r6.trim()) || "").length;
                if (s2 / (o2.length || 1) <= 0.6) return false;
                let a2 = o2;
                for (const t6 of i2) a2 = a2.split((null === (n3 = t6.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "").join("");
                return !/[.!?]/.test(a2);
              }));
              r5 && (e3 && D && D.push({ step: "removeByContentPattern", reason: "trailing related posts block", text: (0, o.textPreview)(Pt) }), Pt.remove());
            }
          }
          const Ot = (0, o.countWords)(t3.textContent || "");
          if (Ot > 300) {
            const r4 = [];
            let i2 = 0, s2 = t3.lastElementChild;
            for (; s2; ) {
              if ("footnotes" === s2.id) {
                s2 = s2.previousElementSibling;
                continue;
              }
              if ("HR" === s2.tagName) {
                r4.push(s2);
                break;
              }
              let t4 = 0;
              for (const e5 of s2.querySelectorAll("svg")) t4 += (0, o.countWords)(e5.textContent || "");
              const e4 = (0, o.countWords)((null === (ot = s2.textContent) || void 0 === ot ? void 0 : ot.trim()) || "") - t4;
              if (e4 > 25) break;
              i2 += e4, r4.push(s2), s2 = s2.previousElementSibling;
            }
            if (r4.length >= 1 && i2 < 0.15 * Ot) {
              const t4 = r4.some(((t5) => E(t5))), i3 = r4.some(((t5) => t5.querySelector(n2.CONTENT_ELEMENT_SELECTOR)));
              let s3 = 0;
              for (const t5 of r4) "P" === t5.tagName && (0, o.countWords)(t5.textContent || "") > 5 && s3++;
              if (t4 && !i3 && s3 < 2) for (const t5 of r4) e3 && D && D.push({ step: "removeByContentPattern", reason: "trailing thin section", text: (0, o.textPreview)(t5) }), t5.remove();
            }
          }
          const Mt = t3.textContent || "", It = t3.querySelectorAll("p, div, span, section");
          for (const r4 of It) {
            if (!r4.parentNode) continue;
            if (r4.closest("pre, code")) continue;
            const n3 = (null === (it = r4.textContent) || void 0 === it ? void 0 : it.trim()) || "", i2 = (0, o.countWords)(n3);
            if (!(i2 > 50 || i2 < 1)) {
              for (const i3 of h) if (i3.test(n3)) {
                let n4 = r4;
                for (; n4.parentElement && n4.parentElement !== t3 && !n4.nextElementSibling; ) n4 = n4.parentElement;
                const i4 = n4.textContent || "";
                if (Mt.indexOf(i4) < 200) {
                  n4 === r4 || r4.nextElementSibling || (e3 && D && D.push({ step: "removeByContentPattern", reason: "boilerplate text", text: (0, o.textPreview)(r4) }), r4.remove());
                  continue;
                }
                O(n4, t3, e3, D);
                break;
              }
            }
          }
          for (const r4 of t3.querySelectorAll("h2, h3, h4, h5, h6")) {
            if (!r4.parentNode) continue;
            const n3 = (null === (st = r4.textContent) || void 0 === st ? void 0 : st.trim()) || "", i2 = T.test(n3);
            if (!i2 && !w.test(n3)) continue;
            if (At.indexOf(n3) < 500) continue;
            const s2 = M(r4, t3);
            if (s2 === r4) {
              if (!i2) continue;
              P(r4, true, e3, D);
            } else I(s2, e3, D), e3 && D && D.push({ step: "removeByContentPattern", reason: "related content section", text: (0, o.textPreview)(s2) }), O(s2, t3, e3, D);
            break;
          }
          for (const r4 of t3.querySelectorAll("p")) {
            if (!r4.parentNode) continue;
            const t4 = (null === (at = r4.textContent) || void 0 === at ? void 0 : at.trim()) || "";
            _.test(t4) && ((0, o.countWords)(t4) > 20 || r4.querySelector(n2.CONTENT_ELEMENT_SELECTOR) || (e3 && D && D.push({ step: "removeByContentPattern", reason: "related content intro", text: (0, o.textPreview)(r4) }), r4.remove()));
          }
          const Rt = (0, o.countWords)(At);
          for (const r4 of t3.querySelectorAll("div")) {
            if (!r4.parentNode) continue;
            if (r4.children.length < 2) continue;
            const n3 = Array.from(r4.children), i2 = n3.filter(((t4) => t4.querySelector("img, picture") && (t4.querySelector("h2, h3, h4") || t4.querySelector("a[href]")))).length;
            if (i2 < 2 || i2 < 0.7 * n3.length) continue;
            const s2 = (null === (lt = n3[0].textContent) || void 0 === lt ? void 0 : lt.trim().substring(0, 30)) || "";
            if (s2.length < 5 || At.indexOf(s2) < 500) continue;
            const a2 = (0, o.countWords)(r4.textContent || "");
            if (Rt > 0 && a2 / Rt > 0.3) continue;
            const l2 = M(r4, t3);
            if (l2 === r4) continue;
            if (!((0, o.countWords)(l2.textContent || "") > 2 * a2 + 15) && !k(l2)) {
              I(l2, e3, D), e3 && D && D.push({ step: "removeByContentPattern", reason: "related post cards", text: (0, o.textPreview)(l2) }), P(l2, true, e3, D);
              break;
            }
          }
          for (const r4 of t3.querySelectorAll("div, section, aside")) {
            if (!r4.parentNode) continue;
            if (r4.closest("pre, code")) continue;
            if (!A(r4, 60)) continue;
            const n3 = (0, o.countWords)((null === (ct = r4.textContent) || void 0 === ct ? void 0 : ct.trim()) || "");
            let i2 = r4;
            for (; i2.parentElement && i2.parentElement !== t3; ) {
              if ((0, o.countWords)((null === (ut = i2.parentElement.textContent) || void 0 === ut ? void 0 : ut.trim()) || "") > 2 * n3 + 15) break;
              i2 = i2.parentElement;
            }
            e3 && D && D.push({ step: "removeByContentPattern", reason: "newsletter signup", text: (0, o.textPreview)(i2) }), i2.remove();
            break;
          }
          for (const r4 of t3.querySelectorAll("ul")) if (r4.parentNode && A(r4, 30)) {
            e3 && D && D.push({ step: "removeByContentPattern", reason: "newsletter signup list", text: (0, o.textPreview)(r4) }), r4.remove();
            break;
          }
          for (const r4 of t3.querySelectorAll("div, section")) {
            if (!r4.parentNode) continue;
            const n3 = (null === (dt = r4.textContent) || void 0 === dt ? void 0 : dt.trim()) || "", i2 = (0, o.countWords)(n3);
            if (i2 < 2 || i2 > 40) continue;
            const s2 = At.indexOf(n3.substring(0, 60));
            if (s2 < 0) continue;
            if (At.length - (s2 + n3.length) > 300) continue;
            const a2 = r4.querySelectorAll("div, span, p, dt, dd, li");
            let l2 = false;
            for (const t4 of a2) {
              const e4 = (null === (ht = t4.textContent) || void 0 === ht ? void 0 : ht.trim()) || "";
              if (v.test(e4)) {
                l2 = true;
                break;
              }
            }
            if (!l2) continue;
            if (!(x.test(n3) || C.test(n3) || r4.querySelector('a[href^="mailto:"]'))) continue;
            const c2 = M(r4, t3);
            e3 && D && D.push({ step: "removeByContentPattern", reason: "author contact block", text: (0, o.textPreview)(c2) }), c2.remove();
            break;
          }
          for (const r4 of t3.querySelectorAll("p, span, div")) {
            if (!r4.parentNode) continue;
            const n3 = (null === (mt = r4.textContent) || void 0 === mt ? void 0 : mt.trim()) || "";
            if (!y.test(n3)) continue;
            let i2 = r4;
            for (; i2.parentElement && i2.parentElement !== t3; ) {
              const t4 = i2.parentElement;
              if ((0, o.countWords)((null === (ft = t4.textContent) || void 0 === ft ? void 0 : ft.trim()) || "") > 15) break;
              i2 = t4;
            }
            i2.querySelector(b) || (e3 && D && D.push({ step: "removeByContentPattern", reason: "author/share widget", text: (0, o.textPreview)(i2) }), i2.remove());
          }
          for (const r4 of t3.querySelectorAll("a, p, div, span")) {
            if (!r4.parentNode) continue;
            const n3 = (null === (pt = r4.textContent) || void 0 === pt ? void 0 : pt.trim()) || "";
            if (!f.test(n3)) continue;
            if ("A" === r4.tagName && r4.getAttribute("href")) continue;
            if ("A" !== r4.tagName) {
              const t4 = At.indexOf(n3);
              if (At.length - (t4 + n3.length) > 200) continue;
            }
            const i2 = $(r4, n3, t3);
            e3 && D && D.push({ step: "removeByContentPattern", reason: "social engagement counter", text: (0, o.textPreview)(i2) }), i2.remove();
          }
          for (const r4 of t3.querySelectorAll("div")) {
            if (!r4.parentNode) continue;
            const t4 = (null === (gt = r4.textContent) || void 0 === gt ? void 0 : gt.trim()) || "", i2 = (0, o.countWords)(t4);
            if (i2 < 1 || i2 > 10) continue;
            if (/[.!?]/.test(t4)) continue;
            if (r4.querySelector(n2.CONTENT_ELEMENT_SELECTOR)) continue;
            const s2 = At.indexOf(t4);
            if (s2 < 0) continue;
            if (At.length - (s2 + t4.length) > 300) continue;
            const a2 = r4.querySelectorAll("a[href]");
            if (0 === a2.length) continue;
            let l2 = 0;
            for (const t5 of a2) l2 += ((null === (vt = t5.textContent) || void 0 === vt ? void 0 : vt.trim()) || "").length;
            l2 / (t4.length || 1) < 0.8 || (e3 && D && D.push({ step: "removeByContentPattern", reason: "trailing tag link block", text: (0, o.textPreview)(r4) }), r4.remove());
          }
        };
        const n2 = r2(2640), o = r2(2552), i = r2(4467), s = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}|\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*|\d{4}[-/]\d{1,2}[-/]\d{1,2})/i, a = /\b\d+\s+(?:second|minute|hour|day|week|month|year)s?\s+ago\b/i, l = /\d+\s*min(?:ute)?s?\s+read\b|(?:read(?:ing)?\s+time)\s*:?\s*\d+\s*min(?:ute)?s?\b/i, c = /^\p{Lu}/u, u = /^(?:posted\s+)?by\s+\S/i, d = /^(?:date|published|updated|posted|from|to|subject)\s*:/i, h = [/^This (?:article|story|piece) (?:appeared|was published|originally appeared) in\b/i, /^A version of this (?:article|story) (?:appeared|was published) in\b/i, /^Originally (?:published|appeared) (?:in|on|at)\b/i, /^Any re-?use permitted\b/i, /^\xa9\s*(?:Copyright\s+)?\d{4}/i, /^Comments?$/i, /^Leave a (?:comment|reply)$/i, /^Loading\.{3}$/, /^Affiliate links\b.*\b(?:earn|commission)/i, /\bRead our Comment Policy\b/i, /^Thank you for (?:being part of|joining) our community\b/i], m = /\bsubscribe\b[\s\S]{0,40}\bnewsletter\b|\bnewsletter\b[\s\S]{0,40}\bsubscribe\b|\bsign[- ]up\b[\s\S]{0,80}\b(?:newsletter|email alert)|\b(?:don[\u2019']?t (?:want to )?miss|never miss)\b[\s\S]{0,80}\b(?:latest|best|exclusive|reports?|updates?|source)/i, f = /^\d+\s+(?:Likes?|Comments?|Shares?|Retweets?|Reposts?|Restacks?)$/i, p = /^current time in$/i, g = /^pinned$/i, v = /^(?:written by|(?:author|contact|reporter|correspondent)s?)$/i, y = /^(?:share|follow|authors?|written\s+by)$/i, b = n2.CONTENT_ELEMENT_SELECTOR.replace(/img, picture, /, ""), x = /[\w.-]+@[\w.-]+\.\w+/, C = /\(?\d{3}\)?[\s.\u2011\u2013-]?\d{3}[\s.\u2011\u2013-]?\d{4}/, S = /^H[1-6]$/;
        function E(t3) {
          return S.test(t3.tagName) || !!t3.querySelector("h1, h2, h3, h4, h5, h6");
        }
        function A(t3, e3) {
          var r3;
          const i2 = (null === (r3 = t3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "", s2 = (0, o.countWords)(i2);
          if (s2 < 2 || s2 > e3) return false;
          if (t3.querySelector(n2.CONTENT_ELEMENT_SELECTOR)) return false;
          const a2 = i2.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[\u2018\u2019]/g, "'");
          return m.test(a2);
        }
        const w = /^(?:related (?:posts?|articles?|content|stories|reads?|reading)|you (?:might|may|could) (?:also )?(?:like|enjoy|be interested in)|read (?:next|more|also)|further reading|see also|more (?:from .*|from|articles?|posts?|like this)|more to (?:read|explore)|explore more|about (?:the )?author|latest (?:news|events?|posts?|articles?|stories)(?:\s*[&+]\s*(?:news|events?|posts?|articles?|stories))?)$/i, T = /^(?:subscribe|sign up|follow us|share this|stay (?:updated|connected)|join (?:us|our)|search (?:the |our )?(?:site|blog|archives?|newsroom|website|catalog|store|shop|database))$/i, _ = /^for more (?:on|about)\b/i, L = [/\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\b/gi, /\b(?:Mon(?:day)?|Tue(?:s(?:day)?)?|Wed(?:nesday)?|Thu(?:rs(?:day)?)?|Fri(?:day)?|Sat(?:urday)?|Sun(?:day)?)\b/gi, /\b\d+(?:st|nd|rd|th)?\b/g, /\d{4}[-/]\d{1,2}[-/]\d{1,2}/g], q = [...L, /\bmin(?:ute)?s?\b/gi, /\bread(?:ing)?\b/gi, /\btime\b/gi, /\bestimated\b/gi, /[/|\xb7\u2022\u2014\u2013\-,:.\s]+/g], N = [...L, /\bby\b/gi, /[/|\xb7\u2022\u2014\u2013\-,]+/g];
        function k(t3, e3 = 25) {
          let r3 = t3.nextElementSibling;
          for (; r3; ) {
            if ("P" === r3.tagName && (0, o.countWords)(r3.textContent || "") >= e3) return true;
            for (const t4 of r3.querySelectorAll("p")) if ((0, o.countWords)(t4.textContent || "") >= e3) return true;
            r3 = r3.nextElementSibling;
          }
          return false;
        }
        function $(t3, e3, r3) {
          var n3;
          let o2 = t3;
          for (; o2.parentElement && o2.parentElement !== r3 && ((null === (n3 = o2.parentElement.textContent) || void 0 === n3 ? void 0 : n3.trim()) || "") === e3; ) o2 = o2.parentElement;
          return o2;
        }
        function P(t3, e3, r3, n3) {
          let i2 = t3.nextElementSibling;
          for (; i2; ) {
            const t4 = i2.nextElementSibling;
            "footnotes" !== i2.id ? (r3 && n3 && n3.push({ step: "removeByContentPattern", reason: "trailing non-content", text: (0, o.textPreview)(i2) }), i2.remove(), i2 = t4) : i2 = t4;
          }
          e3 && (r3 && n3 && n3.push({ step: "removeByContentPattern", reason: "boilerplate text", text: (0, o.textPreview)(t3) }), t3.remove());
        }
        function O(t3, e3, r3, n3) {
          const o2 = [];
          let i2 = t3.parentElement;
          for (; i2 && i2 !== e3; ) o2.push(i2), i2 = i2.parentElement;
          P(t3, true, r3, n3);
          for (const t4 of o2) P(t4, false, r3, n3);
        }
        function M(t3, e3) {
          let r3 = t3;
          for (; r3.parentElement && r3.parentElement !== e3; ) {
            let t4 = 0, e4 = r3.previousElementSibling;
            for (; e4 && (t4 += (0, o.countWords)(e4.textContent || ""), !(t4 > 10)); ) e4 = e4.previousElementSibling;
            if (t4 > 10) break;
            r3 = r3.parentElement;
          }
          return r3;
        }
        function I(t3, e3, r3) {
          const i2 = t3.previousElementSibling;
          if (!i2) return;
          if ((0, o.countWords)(i2.textContent || "") >= 50) return;
          if (i2.querySelector(n2.CONTENT_ELEMENT_SELECTOR)) return;
          const s2 = i2.previousElementSibling;
          s2 && E(s2) || (e3 && r3 && r3.push({ step: "removeByContentPattern", reason: "thin CTA section", text: (0, o.textPreview)(i2) }), i2.remove());
        }
      }, 8983(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.removeHiddenElements = function(t3, e3, r3) {
          let i = 0;
          const s = /* @__PURE__ */ new Map(), a = /(?:^|;\s*)(?:display\s*:\s*none|visibility\s*:\s*hidden|opacity\s*:\s*0)(?:\s*;|\s*$)/i, l = t3.defaultView, c = "undefined" != typeof window && l === window, u = t3.querySelectorAll("*");
          for (const t4 of u) {
            if (t4.querySelector("math, [data-mathml], .katex-mathml") || "math" === t4.tagName.toLowerCase()) continue;
            const e4 = t4.getAttribute("style");
            if (e4 && a.test(e4)) {
              const r5 = e4.includes("display") ? "display:none" : e4.includes("visibility") ? "visibility:hidden" : "opacity:0";
              s.set(t4, r5), i++;
              continue;
            }
            if (c) try {
              const e5 = l.getComputedStyle(t4);
              let r5 = "";
              if ("none" === e5.display ? r5 = "display:none" : "hidden" === e5.visibility ? r5 = "visibility:hidden" : "0" === e5.opacity && (r5 = "opacity:0"), r5) {
                s.set(t4, r5), i++;
                continue;
              }
            } catch (t5) {
            }
            const r4 = t4.getAttribute("class") || "";
            if (r4) {
              const e5 = r4.split(/\s+/);
              if ((0, o.hasResponsiveShowClass)(r4)) continue;
              for (const r5 of e5) {
                const e6 = "hidden" === r5 || "invisible" === r5, n3 = !r5.includes("[") && (r5.endsWith(":hidden") || r5.endsWith(":invisible"));
                if (e6 || n3) {
                  s.set(t4, `class:${r5}`), i++;
                  break;
                }
              }
            }
          }
          s.forEach(((t4, o2) => {
            e3 && r3 && r3.push({ step: "removeHiddenElements", reason: t4, text: (0, n2.textPreview)(o2) }), o2.remove();
          })), (0, n2.logDebug)(e3, "Removed hidden elements:", i);
        };
        const n2 = r2(2552), o = r2(639);
      }, 662(t2, e2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.removeMetadataBlock = function(t3) {
          var e3, n2;
          const o = t3.querySelector("h1");
          if (!o) return;
          let i = o.nextElementSibling;
          for (let t4 = 0; t4 < 3 && i; t4++) {
            const t5 = i.nextElementSibling, o2 = (null === (e3 = i.textContent) || void 0 === e3 ? void 0 : e3.trim()) || "";
            if (o2.length > 0 && o2.length < 300) {
              let t6 = r2.test(o2);
              if (!t6) {
                for (const e4 of i.querySelectorAll("p, time")) if (r2.test((null === (n2 = e4.textContent) || void 0 === n2 ? void 0 : n2.trim()) || "")) {
                  t6 = true;
                  break;
                }
              }
              if (t6) {
                i.remove();
                break;
              }
            }
            i = t5;
          }
        };
        const r2 = /\b(?:(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{1,2}[\s,]+\d{4}|\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:t(?:ember)?)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+\d{4}|\d{4}[-/]\d{1,2}[-/]\d{1,2})\b/i;
      }, 3550(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.ContentScorer = void 0;
        const n2 = r2(2640), o = r2(2552), i = r2(639), s = ["admonition", "article", "content", "entry", "image", "img", "font", "figure", "figcaption", "pre", "main", "post", "story", "table"], a = ["advertisement", "all rights reserved", "banner", "cookie", "comments", "copyright", "follow me", "follow us", "footer", "header", "homepage", "login", "menu", "more articles", "more like this", "most read", "nav", "navigation", "newsletter", "popular", "privacy", "recommended", "register", "related", "responses", "share", "sidebar", "sign in", "sign up", "signup", "social", "sponsored", "subscribe", "terms", "trending"], l = /\b(linkedin\.com\/(in|company)\/|twitter\.com\/(?!intent\b)\w|x\.com\/(?!intent\b)\w|facebook\.com\/(?!share\b)\w|instagram\.com\/\w|threads\.net\/\w|mastodon\.\w)/i, c = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}|\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*)/i, u = /\bBy\s+[A-Z]/, d = a.map(((t3) => new RegExp(`\\b${t3.replace(/\s+/g, "\\s+")}\\b`))), h = new RegExp(a.map(((t3) => t3.replace(/\s+/g, "\\s+"))).join("|"), "i"), m = /^(?:table of )?contents$|^on this page$|^in this (?:article|guide|post)$/i, f = /\b(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+\d{4}|\d{1,2}(?:st|nd|rd|th)?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*,?\s+\d{4})\b/i, p = /\b(?:by|written by|author:)\s+[A-Za-z\s]+\b/i, g = ["advert", "ad-", "ads", "banner", "cookie", "copyright", "footer", "header", "homepage", "menu", "nav", "newsletter", "popular", "privacy", "recommended", "related", "rights", "share", "sidebar", "social", "sponsored", "subscribe", "terms", "trending", "widget"];
        class v {
          constructor(t3, e3 = false) {
            this.doc = t3, this.debug = e3;
          }
          static scoreElement(t3) {
            let e3 = 0;
            const r3 = t3.textContent || "", s2 = (0, o.countWords)(r3);
            e3 += s2;
            e3 += 10 * t3.getElementsByTagName("p").length;
            e3 += r3.split(/,/).length - 1;
            e3 -= 3 * (t3.getElementsByTagName("img").length / (s2 || 1));
            try {
              const r4 = t3.getAttribute("style") || "", n3 = t3.getAttribute("align") || "";
              (r4.includes("float: right") || r4.includes("text-align: right") || "right" === n3) && (e3 += 5);
            } catch (t4) {
            }
            f.test(r3) && (e3 += 10);
            p.test(r3) && (e3 += 10);
            const a2 = (0, i.getClassName)(t3).toLowerCase();
            (a2.includes("content") || a2.includes("article") || a2.includes("post")) && (e3 += 15);
            t3.querySelector(n2.FOOTNOTE_INLINE_REFERENCES) && (e3 += 10);
            t3.querySelector(n2.FOOTNOTE_LIST_SELECTORS) && (e3 += 10);
            if (e3 -= 5 * t3.getElementsByTagName("table").length, "td" === t3.tagName.toLowerCase()) {
              const r4 = t3.closest("table");
              if (r4) {
                const n3 = parseInt(r4.getAttribute("width") || "0"), o2 = r4.getAttribute("align") || "", s3 = (0, i.getClassName)(r4).toLowerCase();
                if (n3 > 400 || "center" === o2 || s3.includes("content") || s3.includes("article")) {
                  const n4 = Array.from(r4.getElementsByTagName("td")), o3 = n4.indexOf(t3);
                  o3 > 0 && o3 < n4.length - 1 && (e3 += 10);
                }
              }
            }
            const l2 = t3.getElementsByTagName("a");
            let c2 = 0;
            for (let t4 = 0; t4 < l2.length; t4++) c2 += (l2[t4].textContent || "").length;
            const u2 = r3.length || 1;
            return e3 *= 1 - Math.min(c2 / u2, 0.5), e3;
          }
          static findBestElement(t3, e3 = 50) {
            let r3 = null, n3 = 0;
            return t3.forEach(((t4) => {
              const e4 = this.scoreElement(t4);
              e4 > n3 && (n3 = e4, r3 = t4);
            })), n3 > e3 ? r3 : null;
          }
          static scoreAndRemove(t3, e3 = false, r3, i2) {
            const s2 = Date.now(), a2 = /* @__PURE__ */ new Map();
            Array.from(t3.querySelectorAll(n2.BLOCK_ELEMENTS_SELECTOR)).forEach(((t4) => {
              if (a2.has(t4)) return;
              if (i2 && t4.contains(i2)) return;
              if (t4.closest("pre")) return;
              if (t4.closest("[data-defuddle]")) return;
              if (t4.closest("td, th")) return;
              if (v.isLikelyContent(t4)) return;
              const e4 = v.scoreNonContentBlock(t4);
              e4 < 0 && a2.set(t4, e4);
            })), a2.forEach(((t4, n3) => {
              e3 && r3 && r3.push({ step: "scoreAndRemove", reason: `score: ${t4}`, text: (0, o.textPreview)(n3) }), n3.remove();
            }));
            const l2 = Date.now();
            (0, o.logDebug)(e3, "Removed non-content blocks:", { count: a2.size, processingTime: `${(l2 - s2).toFixed(2)}ms` });
          }
          static isLikelyContent(t3) {
            const e3 = t3.getAttribute("role");
            if (e3 && ["article", "main", "contentinfo"].includes(e3)) return true;
            const r3 = (0, i.getClassName)(t3).toLowerCase(), n3 = t3.id.toLowerCase();
            for (const t4 of s) if (r3.includes(t4) || n3.includes(t4)) return true;
            if (t3.querySelector("pre, table, figure, picture")) return true;
            const a2 = t3.textContent || "", c2 = (0, o.countWords)(a2), u2 = t3.querySelector("h1, h2, h3, h4, h5, h6");
            if (u2) {
              const t4 = (u2.textContent || "").trim();
              if (t4 && t4 === a2.trim()) {
                const e4 = t4.toLowerCase();
                if (!h.test(e4) && !m.test(e4)) return true;
              }
            }
            if (c2 < 1e3) {
              const e4 = t3.querySelectorAll("h1, h2, h3, h4, h5, h6");
              let r4 = false;
              for (let t4 = 0; t4 < e4.length; t4++) {
                const n4 = (e4[t4].textContent || "").toLowerCase().trim();
                if (h.test(n4)) {
                  r4 = true;
                  break;
                }
              }
              if (r4) {
                if (c2 < 200) return false;
                if (t3.getElementsByTagName("a").length / (c2 || 1) > 0.2) return false;
              }
            }
            if (v.isCardGrid(t3, c2)) return false;
            if (c2 < 80) {
              const e4 = t3.getElementsByTagName("a");
              for (let t4 = 0; t4 < e4.length; t4++) {
                const r4 = (e4[t4].getAttribute("href") || "").toLowerCase();
                if (l.test(r4)) return false;
              }
            }
            const d2 = t3.getElementsByTagName("p").length + t3.getElementsByTagName("li").length;
            if (c2 > 50 && d2 > 1) return true;
            if (c2 > 100) return true;
            if (c2 > 30 && d2 > 0) return true;
            if (c2 >= 10 && /[.?!]/.test(a2)) {
              if (t3.getElementsByTagName("a").length / c2 < 0.1) return true;
            }
            return false;
          }
          static scoreNonContentBlock(t3) {
            try {
              if (t3.matches(n2.FOOTNOTE_LIST_SELECTORS) || t3.querySelector(n2.FOOTNOTE_LIST_SELECTORS) || t3.closest(n2.FOOTNOTE_LIST_SELECTORS)) return 0;
            } catch (t4) {
            }
            let e3 = 0;
            const r3 = t3.textContent || "", s2 = (0, o.countWords)(r3);
            if (s2 < 3) return 0;
            e3 += r3.split(/,/).length - 1;
            const a2 = r3.toLowerCase();
            let h2 = 0;
            for (const t4 of d) t4.test(a2) && h2++;
            e3 -= 10 * h2;
            const m2 = t3.getElementsByTagName("a"), f2 = m2.length;
            if (f2 / (s2 || 1) > 0.5 && (e3 -= 15), f2 > 1 && s2 < 80) {
              let t4 = 0;
              for (let e4 = 0; e4 < m2.length; e4++) t4 += (m2[e4].textContent || "").length;
              const n3 = r3.length;
              n3 > 0 && t4 / n3 > 0.8 && (e3 -= 15);
            }
            const p2 = t3.getElementsByTagName("ul").length + t3.getElementsByTagName("ol").length;
            if (p2 > 0 && f2 > 3 * p2 && (e3 -= 10), s2 < 80) {
              const r4 = t3.getElementsByTagName("a");
              for (let t4 = 0; t4 < r4.length; t4++) {
                const n3 = (r4[t4].getAttribute("href") || "").toLowerCase();
                if (l.test(n3)) {
                  e3 -= 15;
                  break;
                }
              }
            }
            s2 < 15 && u.test(r3) && c.test(r3) && (e3 -= 10), v.isCardGrid(t3, s2) && (e3 -= 15);
            const y = (0, i.getClassName)(t3).toLowerCase(), b = t3.id.toLowerCase();
            for (const t4 of g) (y.includes(t4) || b.includes(t4)) && (e3 -= 8);
            return e3;
          }
          static isCardGrid(t3, e3) {
            if (e3 < 3 || e3 >= 500) return false;
            const r3 = t3.querySelectorAll("h2, h3, h4");
            if (r3.length < 3) return false;
            if (t3.querySelectorAll("img").length < 2) return false;
            let n3 = 0;
            for (let t4 = 0; t4 < r3.length; t4++) n3 += (0, o.countWords)(r3[t4].textContent || "");
            return (e3 - n3) / r3.length < 20;
          }
        }
        e2.ContentScorer = v;
      }, 7393(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.removeBySelector = function(t3, e3, r3 = true, s = true, a, l, c = false) {
          const u = Date.now();
          let d = 0, h = 0;
          const m = /* @__PURE__ */ new Map();
          if (r3) {
            t3.querySelectorAll(n2.EXACT_SELECTORS_JOINED).forEach(((t4) => {
              if (null == t4 ? void 0 : t4.parentNode) {
                if (c) {
                  const e4 = t4.closest(n2.HIDDEN_EXACT_SKIP_SELECTOR), r4 = (t4.getAttribute("role") || "").toLowerCase();
                  if (t4.matches(n2.HIDDEN_EXACT_SELECTOR) || e4 && "dialog" === r4) return;
                }
                if (t4.closest("pre, code")) return;
                if (t4.matches(n2.HIDDEN_EXACT_SELECTOR) && (0, i.hasResponsiveShowClass)((0, i.getClassName)(t4))) return;
                m.set(t4, { type: "exact" }), d++;
              }
            }));
          }
          if (s) {
            const r4 = e3 ? n2.PARTIAL_SELECTORS.map(((t4) => ({ pattern: t4, regex: new RegExp(t4, "i"), anchored: new RegExp("^(?:" + t4 + ")$", "i") }))) : null, o2 = t3.querySelectorAll(n2.TEST_ATTRIBUTES_SELECTOR), s2 = a ? a.querySelectorAll(n2.TEST_ATTRIBUTES_SELECTOR) : [];
            (/* @__PURE__ */ new Set([...o2, ...s2])).forEach(((t4) => {
              var e4;
              if (m.has(t4)) return;
              if (t4.closest("[data-defuddle]")) return;
              const o3 = t4.tagName;
              if ("CODE" === o3 || "PRE" === o3 || t4.querySelector("pre") || t4.closest("code, pre")) return;
              const s3 = /^H[1-6]$/.test(o3), a2 = (s3 ? (0, i.getClassName)(t4) : (0, i.getClassName)(t4) + " " + (t4.getAttribute("data-component") || "") + " " + (t4.getAttribute("data-test") || "") + " " + (t4.getAttribute("data-testid") || "") + " " + (t4.getAttribute("data-test-id") || "") + " " + (t4.getAttribute("data-qa") || "") + " " + (t4.getAttribute("data-cy") || "")).toLowerCase(), l2 = s3 ? "" : (t4.id || "").toLowerCase(), c2 = "" !== a2.trim();
              if (!c2 && !l2) return;
              const u2 = c2 && n2.PARTIAL_SELECTORS_REGEX.test(a2), d2 = !!l2 && /[\s_\-:.]/.test(l2), f2 = !!l2 && (d2 ? n2.PARTIAL_SELECTORS_REGEX.test(l2) : n2.PARTIAL_SELECTORS_ANCHORED_REGEX.test(l2));
              if (u2 || f2) {
                const n3 = u2 || d2, o4 = u2 ? a2 : l2, i2 = r4 ? null === (e4 = r4.find(((t5) => (n3 ? t5.regex : t5.anchored).test(o4)))) || void 0 === e4 ? void 0 : e4.pattern : void 0;
                m.set(t4, { type: "partial", selector: i2 }), h++;
              }
            }));
          }
          m.forEach((({ type: t4, selector: r4 }, i2) => {
            var s2;
            if (!(a && i2.contains(a) || "A" === i2.tagName && i2.closest("h1, h2, h3, h4, h5, h6"))) {
              try {
                if (i2.matches(n2.FOOTNOTE_LIST_SELECTORS) || i2.querySelector(n2.FOOTNOTE_LIST_SELECTORS)) return;
                const t5 = i2.parentElement;
                if (t5 && t5.matches(n2.FOOTNOTE_LIST_SELECTORS)) return;
                if ((null === (s2 = i2.classList) || void 0 === s2 ? void 0 : s2.contains("footnote-backref")) && i2.closest("#footnotes")) return;
              } catch (t5) {
              }
              if ("BUTTON" === i2.tagName && i2.querySelector("img, picture, video")) {
                const t5 = i2.parentElement;
                if (t5) {
                  for (const e4 of Array.from(i2.querySelectorAll("img, picture, video"))) t5.insertBefore(e4, i2);
                  i2.remove();
                }
              } else "BUTTON" === i2.tagName && i2.closest("p, li, td, th, span, h1, h2, h3, h4, h5, h6") ? i2.replaceWith(...Array.from(i2.childNodes)) : (e3 && l && l.push({ step: "removeBySelector", selector: "exact" === t4 ? "exact" : r4, reason: "exact" === t4 ? "exact selector match" : `partial match: ${r4}`, text: (0, o.textPreview)(i2) }), i2.remove());
            }
          }));
          const f = Date.now();
          (0, o.logDebug)(e3, "Removed clutter elements:", { exactSelectors: d, partialSelectors: h, total: m.size, processingTime: `${(f - u).toFixed(2)}ms` });
        };
        const n2 = r2(2640), o = r2(2552), i = r2(639);
      }, 2408(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.getElementIdentifier = u, e2.findSmallImages = function(t3, e3) {
          var r3, o2, i2;
          const d = /* @__PURE__ */ new Set();
          let h = 0;
          const m = t3.querySelectorAll("img, svg"), f = t3.defaultView, p = "undefined" != typeof window && f === window;
          for (const t4 of m) {
            const e4 = parseInt(t4.getAttribute("width") || "0"), n3 = parseInt(t4.getAttribute("height") || "0");
            let m2 = 0, g = 0;
            if ("svg" === t4.tagName.toLowerCase()) {
              const e5 = t4.getAttribute("viewBox");
              if (e5) {
                const t5 = e5.split(/[\s,]+/);
                4 === t5.length && (m2 = parseFloat(t5[2]) || 0, g = parseFloat(t5[3]) || 0);
              }
            }
            const v = t4.getAttribute("style") || "", y = parseInt((null === (r3 = v.match(a)) || void 0 === r3 ? void 0 : r3[1]) || "0"), b = parseInt((null === (o2 = v.match(l)) || void 0 === o2 ? void 0 : o2[1]) || "0");
            let x = 0, C = 0;
            if (p) {
              try {
                const e5 = f.getComputedStyle(t4);
                x = parseInt(e5.width) || 0, C = parseInt(e5.height) || 0;
              } catch (t5) {
              }
              try {
                const e5 = t4.getBoundingClientRect();
                e5.width > 0 && (x = x || e5.width), e5.height > 0 && (C = C || e5.height);
              } catch (t5) {
              }
            }
            const S = [e4, y, x, m2].filter(((t5) => t5 > 0)), E = [n3, b, C, g].filter(((t5) => t5 > 0));
            if (0 === S.length && 0 === E.length && "img" === t4.tagName.toLowerCase()) {
              const e5 = (t4.getAttribute("srcset") || "").match(/(\S+)\s+1x/);
              if (e5) {
                const t5 = parseInt((null === (i2 = e5[1].match(c)) || void 0 === i2 ? void 0 : i2[1]) || "0");
                t5 > 0 && S.push(t5);
              }
            }
            if (S.length > 0 || E.length > 0) {
              const e5 = S.length > 0 ? Math.min(...S) : 1 / 0, r4 = E.length > 0 ? Math.min(...E) : 1 / 0;
              if (e5 < 33 || r4 < 33) {
                if ("img" === t4.tagName.toLowerCase()) {
                  const e7 = t4.getAttribute("alt") || "";
                  if (s.LOOKS_LIKE_LATEX_RE.test(e7)) continue;
                  if (t4.classList.contains("latex") || t4.classList.contains("tex")) continue;
                  if (t4.getAttribute("data-latex") || t4.getAttribute("data-math")) continue;
                }
                const e6 = u(t4);
                e6 && (d.add(e6), h++);
              }
            }
          }
          return (0, n2.logDebug)(e3, "Found small elements:", h), d;
        }, e2.removeSmallImages = function(t3, e3, r3) {
          let o2 = 0;
          ["img", "svg"].forEach(((r4) => {
            const n3 = t3.getElementsByTagName(r4);
            Array.from(n3).forEach(((t4) => {
              if ("img" === r4) {
                const e4 = t4.getAttribute("src") || "", r5 = t4.getAttribute("srcset") || t4.getAttribute("data-src") || t4.getAttribute("data-srcset") || t4.getAttribute("data-lazy-src") || t4.getAttribute("data-original");
                if (!e4 && !r5) return t4.remove(), void o2++;
                if (!r5 && !t4.closest("picture") && (0, i.isBase64Placeholder)(e4)) return t4.remove(), void o2++;
              }
              const n4 = u(t4);
              n4 && e3.has(n4) && (t4.remove(), o2++);
            }));
          })), (0, n2.logDebug)(r3, "Removed small elements:", o2);
        };
        const n2 = r2(2552), o = r2(639), i = r2(2649), s = r2(7282), a = /width\s*:\s*(\d+)/, l = /height\s*:\s*(\d+)/, c = /(?:width[=:/]|[/,?&]w[_:=])(\d+)/;
        function u(t3) {
          if ("img" === t3.tagName.toLowerCase()) {
            const e4 = t3.getAttribute("data-src");
            if (e4) return `src:${e4}`;
            const r4 = t3.getAttribute("src") || "", n4 = t3.getAttribute("srcset") || "", o2 = t3.getAttribute("data-srcset");
            if (r4) return `src:${r4}`;
            if (n4) return `srcset:${n4}`;
            if (o2) return `srcset:${o2}`;
          }
          const e3 = t3.id || "", r3 = (0, o.getClassName)(t3), n3 = "svg" === t3.tagName.toLowerCase() && t3.getAttribute("viewBox") || "";
          return e3 ? `id:${e3}` : n3 ? `viewBox:${n3}` : r3 ? `class:${r3}` : null;
        }
      }, 4840(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.standardizeContent = function(t3, e3, r3, s2 = false, l2) {
          d = s2;
          const E2 = l2 ? (t4, e4) => {
            var r4;
            const n3 = performance.now(), o2 = e4();
            return l2[t4] = (null !== (r4 = l2[t4]) && void 0 !== r4 ? r4 : 0) + Math.round(performance.now() - n3), o2;
          } : (t4, e4) => e4();
          E2("standardizeDropCaps", (() => (function(t4) {
            const e4 = Array.from(t4.querySelectorAll('span[data-caps="initial"]'));
            let r4 = 0;
            for (const t5 of e4) {
              if (!t5.parentNode) continue;
              const e5 = t5.nextElementSibling;
              if (e5 && "SMALL" === e5.tagName) {
                const r5 = t5.textContent || "", n3 = e5.textContent || "", o2 = t5.ownerDocument.createTextNode(r5 + n3);
                t5.parentNode.insertBefore(o2, t5), e5.remove(), t5.remove();
              } else g(t5);
              r4++;
            }
            r4 > 0 && t4.normalize();
            (0, c.logDebug)(d, "Standardized drop caps:", r4);
          })(t3))), E2("standardizeSpaces", (() => (function(t4) {
            const e4 = (t5) => {
              if ((0, c.isElement)(t5)) {
                const e5 = t5.tagName.toLowerCase();
                if ("pre" === e5 || "code" === e5 || (0, c.isSVGElement)(t5)) return;
              }
              if ((0, c.isTextNode)(t5)) {
                const e5 = t5.textContent || "", r4 = e5.replace(/\xA0/g, " ");
                r4 !== e5 && (t5.textContent = r4);
              }
              t5.hasChildNodes() && Array.from(t5.childNodes).forEach(e4);
            };
            e4(t4);
          })(t3))), E2("removeHtmlComments", (() => (function(t4) {
            var e4;
            let r4 = 0;
            const n3 = t4.ownerDocument, o2 = n3.createTreeWalker(t4, 128), i2 = [];
            for (; o2.nextNode(); ) i2.push(o2.currentNode);
            for (const t5 of i2) null === (e4 = t5.parentNode) || void 0 === e4 || e4.removeChild(t5), r4++;
            (0, c.logDebug)(d, "Removed HTML comments:", r4);
          })(t3))), E2("standardizeHeadings", (() => (function(t4, e4, r4) {
            const o2 = t4.getElementsByTagName("h1");
            Array.from(o2).forEach(((t5) => {
              var e5;
              const o3 = r4.createElement("h2");
              (0, u.transferContent)(t5, o3), Array.from(t5.attributes).forEach(((t6) => {
                n2.ALLOWED_ATTRIBUTES.has(t6.name) && o3.setAttribute(t6.name, t6.value);
              })), null === (e5 = t5.parentNode) || void 0 === e5 || e5.replaceChild(o3, t5);
            }));
            const i2 = t4.getElementsByTagName("h2");
            if (i2.length > 0) {
              const t5 = i2[0];
              let r5 = "";
              for (const e5 of t5.querySelectorAll("a")) (0, a.isPermalinkAnchor)(e5) && (r5 += e5.textContent || "");
              const n3 = (0, c.normalizeText)((t5.textContent || "").replace(r5, "")), o3 = (0, c.normalizeText)(e4);
              o3 && o3 === n3 && t5.remove();
            }
          })(t3, e3.title, r3))), E2("wrapPreformattedCode", (() => (function(t4, e4) {
            var r4;
            const n3 = Array.from(t4.querySelectorAll("code"));
            for (const t5 of n3) {
              if (t5.closest("pre")) continue;
              const n4 = t5.getAttribute("style") || "";
              if (!/white-space\s*:\s*pre/.test(n4)) continue;
              const o2 = e4.createElement("pre");
              null === (r4 = t5.parentNode) || void 0 === r4 || r4.insertBefore(o2, t5), o2.appendChild(t5);
            }
          })(t3, r3))), E2("standardizeElements", (() => (function(t4, e4, r4) {
            let n3 = 0;
            const s3 = r4 ? (t5, e5) => {
              var n4;
              const o2 = performance.now(), i2 = e5();
              return r4["se:" + t5] = (null !== (n4 = r4["se:" + t5]) && void 0 !== n4 ? n4 : 0) + Math.round(performance.now() - o2), i2;
            } : (t5, e5) => e5();
            s3("wrapRawLatexDelimiters", (() => (0, i.wrapRawLatexDelimiters)(t4, e4))), s3("convertLatexImages", (() => {
              var r5;
              for (const s4 of Array.from(t4.querySelectorAll("img[src]"))) {
                const t5 = s4.getAttribute("src");
                if (!t5) continue;
                let a3 = (0, i.extractLatexFromImageSrc)(t5);
                if (!a3) {
                  const t6 = s4.getAttribute("alt") || "";
                  i.LOOKS_LIKE_LATEX_RE.test(t6) && (a3 = t6);
                }
                if (!a3) continue;
                const l4 = /\\begin\{/.test(a3) || "p" === (null === (r5 = s4.parentElement) || void 0 === r5 ? void 0 : r5.tagName.toLowerCase()) && 1 === s4.parentElement.childNodes.length, c2 = (0, o.createCleanMathEl)(null, a3, l4, e4);
                s4.replaceWith(c2), n3++;
              }
            })), h.forEach(((r5) => {
              const o2 = r5.selector.substring(0, 30);
              s3(o2, (() => {
                if (r5.fastCheck && !t4.querySelector(r5.fastCheck)) return;
                let o3;
                try {
                  o3 = t4.querySelectorAll(r5.selector);
                } catch (t5) {
                  return;
                }
                o3.forEach(((t5) => {
                  if (r5.transform) {
                    const o4 = r5.transform(t5, e4);
                    t5.replaceWith(o4), n3++;
                  }
                }));
              }));
            })), Array.from(t4.querySelectorAll("code > pre")).forEach(((t5) => {
              const e5 = t5.parentElement;
              e5 && "CODE" === e5.tagName && e5.replaceWith(t5);
            }));
            const a2 = Array.from(t4.querySelectorAll("table.ltx_equation, table.ltx_eqn_table, table.ltx_equationgroup"));
            a2.forEach(((t5) => {
              const r5 = t5.querySelectorAll("math");
              if (0 === r5.length) return;
              const o2 = e4.createDocumentFragment();
              r5.forEach(((r6) => {
                var n4;
                const i2 = r6.getAttribute("alttext"), s4 = r6.querySelector('annotation[encoding="application/x-tex"]'), a3 = i2 || (null === (n4 = null == s4 ? void 0 : s4.textContent) || void 0 === n4 ? void 0 : n4.trim()) || "";
                if (!a3) return;
                const l4 = "block" === r6.getAttribute("display") || t5.classList.contains("ltx_equation") || t5.classList.contains("ltx_equationgroup"), c2 = e4.createElement("math");
                c2.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), c2.setAttribute("display", l4 ? "block" : "inline"), c2.setAttribute("data-latex", a3), c2.textContent = a3, o2.appendChild(c2);
              })), o2.childNodes.length > 0 && (t5.replaceWith(o2), n3++);
            }));
            const l3 = Array.from(t4.querySelectorAll("span.ltx_note_outer"));
            l3.forEach(((t5) => {
              t5.remove(), n3++;
            }));
            const m2 = Array.from(t4.querySelectorAll("a.ltx_ref"));
            m2.forEach(((t5) => {
              if (t5.querySelector("span.ltx_ref_tag, span.ltx_text.ltx_ref_tag")) {
                const r5 = e4.createTextNode(t5.textContent || "");
                t5.replaceWith(r5), n3++;
              }
            }));
            for (const e5 of Array.from(t4.querySelectorAll("table"))) {
              if (!e5.parentNode) continue;
              const t5 = e5.querySelectorAll("td, th");
              t5.length > 0 && Array.from(t5).every(((t6) => !(t6.textContent || "").trim())) && !e5.querySelector("img, picture, video, audio, iframe, svg, math") && (e5.remove(), n3++);
            }
            const f2 = Array.from(t4.querySelectorAll("table"));
            f2.forEach(((t5) => {
              if (!t5.parentNode) return;
              const r5 = Array.from(t5.querySelectorAll("td, th")).filter(((e5) => (0, u.isDirectTableChild)(e5, t5)));
              if (r5.some(((t6) => "TH" === t6.tagName))) return;
              const o2 = Array.from(t5.querySelectorAll("tr")).filter(((e5) => (0, u.isDirectTableChild)(e5, t5)));
              if (0 === o2.length) return;
              if (!o2.every(((t6) => r5.filter(((e5) => e5.parentNode === t6)).length <= 1))) return;
              const i2 = e4.createDocumentFragment();
              r5.forEach(((t6) => {
                for (; t6.firstChild; ) i2.appendChild(t6.firstChild);
              })), t5.replaceWith(i2), n3++;
            })), t4.querySelectorAll("video:not([controls])").forEach(((t5) => {
              t5.setAttribute("controls", "");
            }));
            const p2 = t4.querySelectorAll("lite-youtube");
            p2.forEach(((t5) => {
              const r5 = t5.getAttribute("videoid");
              if (!r5) return;
              const o2 = e4.createElement("iframe");
              o2.width = "560", o2.height = "315", o2.src = `https://www.youtube.com/embed/${r5}`, o2.title = t5.getAttribute("videotitle") || "YouTube video player", o2.frameBorder = "0", o2.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", o2.setAttribute("allowfullscreen", ""), t5.replaceWith(o2), n3++;
            })), (0, c.logDebug)(d, "Converted embedded elements:", n3), (function(t5) {
              var e5;
              const r5 = (t6) => {
                let e6 = null;
                for (const r6 of t6.children) {
                  if ("code" !== r6.tagName.toLowerCase()) return null;
                  if (e6) return null;
                  e6 = r6;
                }
                return e6;
              }, n4 = (t6) => {
                var e6;
                const r6 = (t6.getAttribute("data-lang") || "").toLowerCase();
                if (r6) return r6;
                const n5 = (t6.getAttribute("class") || "").match(/(?:^|\s)language-([a-z0-9_+-]+)(?:\s|$)/i);
                return (null === (e6 = null == n5 ? void 0 : n5[1]) || void 0 === e6 ? void 0 : e6.toLowerCase()) || "";
              }, o2 = t5.querySelectorAll('pre[data-verso-code="true"]'), i2 = /* @__PURE__ */ new Set();
              for (const t6 of o2) {
                const e6 = t6.parentElement;
                e6 && i2.add(e6);
              }
              for (const t6 of i2) {
                const o3 = Array.from(t6.childNodes);
                for (let t7 = 0; t7 < o3.length; t7++) {
                  const i3 = o3[t7];
                  if (!(0, c.isElement)(i3) || "pre" !== i3.tagName.toLowerCase()) continue;
                  if ("true" !== i3.getAttribute("data-verso-code")) continue;
                  const s4 = r5(i3);
                  if (!s4) continue;
                  const a3 = n4(s4);
                  if ("lean" !== a3 && "lean4" !== a3) continue;
                  const l4 = [{ pre: i3, code: s4 }], u2 = [];
                  let d2 = t7 + 1;
                  for (; d2 < o3.length; ) {
                    const t8 = o3[d2];
                    if ((0, c.isTextNode)(t8) && !(t8.textContent || "").trim()) {
                      u2.push(t8), d2++;
                      continue;
                    }
                    if (!(0, c.isElement)(t8) || "pre" !== t8.tagName.toLowerCase()) break;
                    const e6 = t8;
                    if ("true" !== e6.getAttribute("data-verso-code")) break;
                    const i4 = r5(e6);
                    if (!i4 || n4(i4) !== a3) break;
                    l4.push({ pre: e6, code: i4 }), d2++;
                  }
                  if (l4.length <= 1) continue;
                  const h2 = l4.map((({ code: t8 }) => (t8.textContent || "").replace(/\r?\n$/, ""))).join("\n").replace(/\n{3,}/g, "\n\n").replace(/^\n+|\n+$/g, "");
                  s4.textContent = h2;
                  for (let t8 = 1; t8 < l4.length; t8++) l4[t8].pre.remove();
                  for (const t8 of u2) null === (e5 = t8.parentNode) || void 0 === e5 || e5.removeChild(t8);
                  t7 = d2 - 1;
                }
              }
            })(t4);
          })(t3, r3, l2))), E2("resolveSvgColors", (() => (function(t4, e4) {
            const r4 = t4.querySelectorAll("svg");
            if (0 === r4.length) return;
            const o2 = e4.defaultView, i2 = "undefined" != typeof window && o2 === window, s3 = /* @__PURE__ */ new Map(), a2 = (t5, r5) => {
              var a3, l3;
              if (!(t5 = t5.replace(x, ((t6, e5) => e5.trim()))).includes("var(")) return t5;
              if (i2) {
                const n3 = s3.get(t5);
                if (n3) return n3;
                const i3 = r5 || e4.documentElement;
                try {
                  const r6 = e4.createElement("div");
                  r6.style.color = t5, i3.appendChild(r6);
                  const n4 = o2.getComputedStyle(r6).color;
                  if (r6.remove(), n4 && !n4.includes("var(")) return s3.set(t5, n4), n4;
                } catch (t6) {
                }
              }
              const c2 = t5.match(C);
              if (c2) {
                const t6 = null === (a3 = c2[2]) || void 0 === a3 ? void 0 : a3.trim();
                if (t6 && !t6.includes("var(")) return t6;
                const e5 = c2[1].toLowerCase(), r6 = e5.match(/(?:^|-)([a-z]+)-(\d{2,3})$/);
                if (r6) {
                  const t7 = null === (l3 = n2.TAILWIND_COLORS[r6[1]]) || void 0 === l3 ? void 0 : l3[r6[2]];
                  if (t7) return t7;
                }
                if (e5.endsWith("-black")) return "#000";
                if (e5.endsWith("-white")) return "#fff";
                if (e5.includes("background") || e5.includes("card") || e5.includes("surface") || e5.includes("bg")) return "Canvas";
                if (e5.includes("border") || e5.includes("divider") || e5.includes("separator")) return "#ccc";
                if (e5.includes("muted") || e5.includes("subtle") || e5.includes("secondary") || e5.includes("placeholder")) return "#888";
              }
              return "currentColor";
            };
            for (const t5 of Array.from(r4)) {
              const e5 = t5.parentElement, r5 = [t5, ...Array.from(t5.querySelectorAll("*"))];
              for (const t6 of r5) {
                for (const r7 of S) {
                  const n3 = t6.getAttribute(r7);
                  n3 && (n3.includes("var(") || n3.includes("light-dark(")) && t6.setAttribute(r7, a2(n3, e5));
                }
                const r6 = t6.getAttribute("style");
                if (r6 && (r6.includes("var(") || r6.includes("light-dark("))) {
                  let n3 = r6.replace(x, ((t7, e6) => e6.trim()));
                  n3 = n3.replace(/var\(--[^,)]+(?:,\s*[^)]+)?\)/g, ((t7) => a2(t7, e5))), t6.setAttribute("style", n3);
                }
                q(t6);
              }
              L(t5);
            }
          })(t3, r3))), s2 ? (E2("stripUnwantedAttributes", (() => p(t3, s2))), E2("removeTrailingHeadings", (() => m(t3))), E2("stripExtraBrElements", (() => N(t3))), (0, c.logDebug)(d, "Debug mode: Skipping div flattening to preserve structure")) : (E2("replaceCustomElements", (() => (function(t4, e4) {
            const r4 = Array.from(t4.querySelectorAll("*")).filter(((t5) => t5.tagName.includes("-") && !n2.INLINE_ELEMENTS.has(t5.tagName.toLowerCase()) && !(0, c.isSVGElement)(t5))).reverse();
            let o2 = 0;
            for (const t5 of r4) {
              if (!t5.parentNode) continue;
              const r5 = e4.createElement("div");
              for (; t5.firstChild; ) r5.appendChild(t5.firstChild);
              t5.replaceWith(r5), o2++;
            }
            (0, c.logDebug)(d, "Replaced custom elements with divs:", o2);
          })(t3, r3))), E2("convertDataAsSpans", (() => (function(t4, e4) {
            let r4 = 0;
            const n3 = Array.from(t4.querySelectorAll("span[data-as]"));
            for (const t5 of n3) {
              if (!t5.parentNode) continue;
              const n4 = t5.getAttribute("data-as").toLowerCase();
              if (!b.has(n4)) continue;
              const o2 = e4.createElement(n4);
              (0, u.transferContent)(t5, o2), t5.replaceWith(o2), r4++;
            }
            (0, c.logDebug)(d, "Converted data-as spans:", r4);
          })(t3, r3))), E2("convertBlockSpans", (() => (function(t4, e4) {
            var r4;
            let n3 = 0;
            const o2 = Array.from(t4.querySelectorAll('span[class*="block"], span[style*="block"]'));
            for (const t5 of o2) {
              if (!t5.parentNode) continue;
              if (!(v.test((0, u.getClassName)(t5)) || y.test(t5.getAttribute("style") || ""))) continue;
              if (!(null === (r4 = t5.textContent) || void 0 === r4 ? void 0 : r4.trim())) continue;
              const o3 = e4.createElement("p");
              (0, u.transferContent)(t5, o3), t5.replaceWith(o3), n3++;
            }
            (0, c.logDebug)(d, "Converted block spans to paragraphs:", n3);
          })(t3, r3))), E2("unwrapLayoutTables", (() => (function(t4) {
            const e4 = Array.from(t4.querySelectorAll("table"));
            let r4 = 0;
            for (const t5 of e4) {
              if (!t5.parentNode) continue;
              if (t5.querySelector("thead, tfoot, th, caption")) continue;
              const e5 = Array.from(t5.querySelectorAll(":scope > tbody > tr > td, :scope > tr > td")).filter(((t6) => {
                var e6;
                return null === (e6 = t6.textContent) || void 0 === e6 ? void 0 : e6.trim();
              }));
              if (1 !== e5.length) continue;
              const o2 = e5[0], i2 = Array.from(o2.children).filter(((t6) => {
                var e6;
                return null === (e6 = t6.textContent) || void 0 === e6 ? void 0 : e6.trim();
              }));
              1 === i2.length && n2.BLOCK_LEVEL_ELEMENTS.has(i2[0].tagName.toLowerCase()) && (t5.replaceWith(i2[0]), r4++);
            }
            (0, c.logDebug)(d, "Unwrapped layout tables:", r4);
          })(t3))), E2("flattenWrapperElements[1]", (() => P(t3, r3))), E2("removePermalinkAnchors", (() => (0, a.removePermalinkAnchors)(t3))), E2("stripUnwantedAttributes", (() => p(t3, s2))), E2("unwrapBareSpans", (() => (function(t4) {
            const e4 = Array.from(t4.querySelectorAll("span")).reverse();
            let r4 = 0;
            for (const t5 of e4) {
              if (!t5.parentNode) continue;
              if (t5.attributes.length > 0) continue;
              const e5 = t5.parentNode;
              if (e5) {
                for (; t5.firstChild; ) e5.insertBefore(t5.firstChild, t5);
                t5.remove(), r4++;
              }
            }
            r4 > 0 && t4.normalize();
            (0, c.logDebug)(d, "Unwrapped bare spans:", r4);
          })(t3))), E2("unwrapSpecialLinks", (() => {
            Array.from(t3.querySelectorAll("code a")).forEach(g), Array.from(t3.querySelectorAll('a[href^="javascript:"]')).forEach(g), Array.from(t3.querySelectorAll("a")).forEach(((t4) => {
              const e4 = t4.getAttribute("href");
              if (!e4 || e4.startsWith("#")) return;
              const n3 = Array.from(t4.children).find(((t5) => /^H[1-6]$/.test(t5.nodeName)));
              if (!n3) return;
              const o2 = r3.createElement("a");
              for (o2.setAttribute("href", e4); n3.firstChild; ) o2.appendChild(n3.firstChild);
              n3.appendChild(o2), g(t4);
            })), Array.from(t3.querySelectorAll('a[href^="#"]')).forEach(((t4) => {
              t4.querySelector("h1, h2, h3, h4, h5, h6") && g(t4);
            }));
          })), E2("removeObsoleteElements", (() => t3.querySelectorAll("object, embed, applet").forEach(((t4) => t4.remove())))), E2("removeEmptyElements", (() => (function(t4) {
            let e4 = 0;
            const r4 = (t5) => {
              var e5;
              if (n2.ALLOWED_EMPTY_ELEMENTS.has(t5.tagName.toLowerCase())) return false;
              if ("DIV" === t5.tagName) {
                const r6 = t5.children;
                if (r6.length > 0) {
                  let t6 = true;
                  for (let n3 = 0; n3 < r6.length; n3++) {
                    const o4 = r6[n3];
                    if ("SPAN" !== o4.tagName) {
                      t6 = false;
                      break;
                    }
                    const i2 = (null === (e5 = o4.textContent) || void 0 === e5 ? void 0 : e5.trim()) || "";
                    if ("," !== i2 && "" !== i2 && " " !== i2) {
                      t6 = false;
                      break;
                    }
                  }
                  if (t6) return true;
                }
              }
              const r5 = t5.textContent || "";
              if (r5.trim().length > 0 || r5.includes(" ")) return false;
              if (!t5.hasChildNodes()) return true;
              const o3 = t5.childNodes;
              for (let t6 = 0; t6 < o3.length; t6++) {
                const e6 = o3[t6];
                if ((0, c.isElement)(e6) && "br" === e6.tagName.toLowerCase()) continue;
                if (!(0, c.isTextNode)(e6)) return false;
                const r6 = e6.textContent || "";
                if (r6.trim().length > 0 || r6.includes(" ")) return false;
              }
              return true;
            }, o2 = Array.from(t4.querySelectorAll("*")).reverse();
            for (const t5 of o2) t5.parentNode && r4(t5) && (t5.remove(), e4++);
            (0, c.logDebug)(d, "Removed empty elements:", e4);
          })(t3))), E2("removeTrailingHeadings", (() => m(t3))), E2("removeOrphanedDividers[1]", (() => f(t3))), E2("flattenWrapperElements[2]", (() => P(t3, r3))), E2("removeOrphanedDividers[2]", (() => f(t3))), E2("stripExtraBrElements", (() => N(t3))), E2("removeEmptyLines", (() => (function(t4, e4) {
            let r4 = 0;
            const o2 = Date.now(), i2 = (t5) => {
              var e5;
              if ((0, c.isElement)(t5)) {
                const e6 = t5.tagName.toLowerCase();
                if ("pre" === e6 || "code" === e6) return;
              }
              if (Array.from(t5.childNodes).forEach(i2), (0, c.isTextNode)(t5)) {
                const n3 = t5.textContent || "";
                if (!n3 || /^[\u200C\u200B\u200D\u200E\u200F\uFEFF]*$/.test(n3)) null === (e5 = t5.parentNode) || void 0 === e5 || e5.removeChild(t5), r4++;
                else {
                  const e6 = n3.replace(/[\n\r]+/g, " ").replace(/\t+/g, " ").replace(/ {2,}/g, " ").replace(/^[ ]+$/, " ").replace(/\s+([,.!?:;])/g, "$1").replace(/[\u200B\u200D\u200E\u200F\uFEFF]+/g, "").replace(/(?:\xA0){2,}/g, " ");
                  e6 !== n3 && (t5.textContent = e6, r4 += n3.length - e6.length);
                }
              }
            }, s3 = (t5) => {
              var o3;
              if (!(0, c.isElement)(t5)) return;
              const i3 = t5.tagName.toLowerCase();
              if ("pre" === i3 || "code" === i3) return;
              Array.from(t5.childNodes).filter(c.isElement).forEach(s3), t5.normalize();
              const a3 = "block" === (null === (o3 = (0, c.getComputedStyle)(t5)) || void 0 === o3 ? void 0 : o3.display), l3 = a3 ? /^[\n\r\t \u200C\u200B\u200D\u200E\u200F\uFEFF\xA0]*$/ : /^[\n\r\t\u200C\u200B\u200D\u200E\u200F\uFEFF]*$/;
              for (; t5.firstChild && (0, c.isTextNode)(t5.firstChild) && (t5.firstChild.textContent || "").match(l3); ) t5.removeChild(t5.firstChild), r4++;
              for (; t5.lastChild && (0, c.isTextNode)(t5.lastChild) && (t5.lastChild.textContent || "").match(l3); ) t5.removeChild(t5.lastChild), r4++;
              if (!a3 && n2.INLINE_ELEMENTS.has(i3) && t5.parentNode && (r4 += $(t5, e4, "leading"), r4 += $(t5, e4, "trailing")), !a3) {
                const r5 = Array.from(t5.childNodes);
                for (let n3 = 0; n3 < r5.length - 1; n3++) {
                  const o4 = r5[n3], i4 = r5[n3 + 1];
                  if ((0, c.isElement)(o4) || (0, c.isElement)(i4)) {
                    const r6 = i4.textContent || "", n4 = o4.textContent || "", s4 = r6.match(/^[,.!?:;)\]]/), a4 = n4.match(/[,.!?:;(\[]\s*$/), l4 = (0, c.isTextNode)(o4) && (o4.textContent || "").endsWith(" ") || (0, c.isTextNode)(i4) && (i4.textContent || "").startsWith(" ");
                    if (!s4 && !a4 && !l4) {
                      const r7 = e4.createTextNode(" ");
                      t5.insertBefore(r7, i4);
                    }
                  }
                }
              }
            };
            i2(t4), s3(t4);
            const a2 = Date.now();
            (0, c.logDebug)(d, "Removed empty lines:", { charactersRemoved: r4, processingTime: `${(a2 - o2).toFixed(2)}ms` });
          })(t3, r3))));
        }, e2.removeOrphanedDividers = f;
        const n2 = r2(2640), o = r2(6e3), i = r2(7282), s = r2(754), a = r2(7864), l = r2(2649), c = r2(2552), u = r2(639);
        let d = false;
        const h = [...o.mathRules, ...s.codeBlockRules, ...a.headingRules, ...l.imageRules, { selector: 'div[data-testid^="paragraph"], div[role="paragraph"]', element: "p", transform: (t3, e3) => {
          const r3 = e3.createElement("p");
          return (0, u.transferContent)(t3, r3), Array.from(t3.attributes).forEach(((t4) => {
            n2.ALLOWED_ATTRIBUTES.has(t4.name) && r3.setAttribute(t4.name, t4.value);
          })), r3;
        } }, { selector: 'div[role="list"]', element: "ul", transform: (t3, e3) => {
          var r3;
          const n3 = t3.querySelector('div[role="listitem"] .label'), o2 = ((null === (r3 = null == n3 ? void 0 : n3.textContent) || void 0 === r3 ? void 0 : r3.trim()) || "").match(/^\d+\)/), i2 = e3.createElement(o2 ? "ol" : "ul");
          return t3.querySelectorAll('div[role="listitem"]').forEach(((t4) => {
            const r4 = e3.createElement("li"), n4 = t4.querySelector(".content");
            if (n4) {
              n4.querySelectorAll('div[role="paragraph"]').forEach(((t5) => {
                const r5 = e3.createElement("p");
                (0, u.transferContent)(t5, r5), t5.replaceWith(r5);
              }));
              n4.querySelectorAll('div[role="list"]').forEach(((t5) => {
                var r5;
                const n5 = t5.querySelector('div[role="listitem"] .label'), o3 = ((null === (r5 = null == n5 ? void 0 : n5.textContent) || void 0 === r5 ? void 0 : r5.trim()) || "").match(/^\d+\)/), i3 = e3.createElement(o3 ? "ol" : "ul");
                t5.querySelectorAll('div[role="listitem"]').forEach(((t6) => {
                  const r6 = e3.createElement("li"), n6 = t6.querySelector(".content");
                  if (n6) {
                    n6.querySelectorAll('div[role="paragraph"]').forEach(((t7) => {
                      const r7 = e3.createElement("p");
                      (0, u.transferContent)(t7, r7), t7.replaceWith(r7);
                    })), (0, u.transferContent)(n6, r6);
                  }
                  i3.appendChild(r6);
                })), t5.replaceWith(i3);
              })), (0, u.transferContent)(n4, r4);
            }
            i2.appendChild(r4);
          })), i2;
        } }, { selector: 'div[role="listitem"]', element: "li", transform: (t3, e3) => {
          const r3 = t3.querySelector(".content");
          if (!r3) return t3;
          return r3.querySelectorAll('div[role="paragraph"]').forEach(((t4) => {
            const r4 = e3.createElement("p");
            (0, u.transferContent)(t4, r4), t4.replaceWith(r4);
          })), r3;
        } }];
        function m(t3) {
          let e3 = 0;
          const r3 = (e4) => {
            let n4 = "", o2 = e4.nextSibling;
            for (; o2; ) ((0, c.isTextNode)(o2) || (0, c.isElement)(o2)) && (n4 += o2.textContent || ""), o2 = o2.nextSibling;
            if (n4.trim()) return true;
            const i2 = e4.parentElement;
            return !(!i2 || i2 === t3) && r3(i2);
          }, n3 = Array.from(t3.querySelectorAll("h1, h2, h3, h4, h5, h6")).reverse();
          for (const t4 of n3) {
            if (r3(t4)) break;
            t4.remove(), e3++;
          }
          e3 > 0 && (0, c.logDebug)(d, "Removed trailing headings:", e3);
        }
        function f(t3) {
          for (; ; ) {
            let e3 = t3.firstChild;
            for (; e3 && (0, c.isTextNode)(e3) && !(e3.textContent || "").trim(); ) e3 = e3.nextSibling;
            if (!e3 || !(0, c.isElement)(e3) || "hr" !== e3.tagName.toLowerCase()) break;
            e3.remove();
          }
          for (; ; ) {
            let e3 = t3.lastChild;
            for (; e3 && (0, c.isTextNode)(e3) && !(e3.textContent || "").trim(); ) e3 = e3.previousSibling;
            if (!e3 || !(0, c.isElement)(e3) || "hr" !== e3.tagName.toLowerCase()) break;
            e3.remove();
          }
          for (const e3 of t3.querySelectorAll("hr")) {
            if (!e3.parentNode) continue;
            let t4 = e3.nextSibling;
            for (; t4; ) if (!(0, c.isTextNode)(t4) || (t4.textContent || "").trim()) {
              if (!(0, c.isElement)(t4) || "HR" !== t4.tagName) break;
              {
                const e4 = t4.nextSibling;
                t4.remove(), t4 = e4;
              }
            } else t4 = t4.nextSibling;
          }
        }
        function p(t3, e3) {
          let r3 = 0;
          const o2 = (t4) => {
            if ((0, c.isSVGElement)(t4)) return void (!e3 && t4.hasAttribute("class") && (t4.removeAttribute("class"), r3++));
            const o3 = Array.from(t4.attributes), i2 = t4.tagName.toLowerCase();
            o3.forEach(((o4) => {
              const s2 = o4.name.toLowerCase(), a2 = o4.value;
              "id" === s2 && (a2.startsWith("fnref:") || a2.startsWith("fn:") || "footnotes" === a2) || "class" === s2 && ("code" === i2 && a2.startsWith("language-") || "footnote-backref" === a2 || /^callout(?:-|$)/.test(a2)) || (e3 ? n2.ALLOWED_ATTRIBUTES.has(s2) || n2.ALLOWED_ATTRIBUTES_DEBUG.has(s2) || s2.startsWith("data-") || (t4.removeAttribute(o4.name), r3++) : n2.ALLOWED_ATTRIBUTES.has(s2) || (t4.removeAttribute(o4.name), r3++));
            }));
          };
          o2(t3), t3.querySelectorAll("*").forEach(o2), (0, c.logDebug)(d, "Stripped attributes:", r3);
        }
        function g(t3) {
          for (var e3; t3.firstChild; ) null === (e3 = t3.parentNode) || void 0 === e3 || e3.insertBefore(t3.firstChild, t3);
          t3.remove();
        }
        const v = /(?:^|\s)block(?:\s|$)/, y = /display\s*:\s*block/i;
        const b = /* @__PURE__ */ new Set(["p", "h1", "h2", "h3", "h4", "h5", "h6", "li", "blockquote"]);
        const x = /light-dark\(\s*([^,]+?)\s*,\s*[^)]+?\)/g, C = /var\(--([^,)]+)(?:,\s*([^)]+))?\)/, S = ["fill", "stroke", "color", "stop-color", "flood-color", "lighting-color"];
        const E = /* @__PURE__ */ new Set(["path", "rect", "circle", "ellipse", "polygon"]), A = /* @__PURE__ */ new Set(["line", "polyline"]), w = /* @__PURE__ */ new Set(["text", "tspan"]), T = "defs, clipPath, mask, pattern, marker";
        function _(t3, e3) {
          const r3 = t3.getAttribute("style");
          return !!r3 && new RegExp(`(?:^|;)\\s*${e3}\\s*:`).test(r3);
        }
        function L(t3) {
          if (t3.querySelector("style")) return;
          const e3 = Array.from(t3.querySelectorAll("*"));
          let r3 = false;
          for (const t4 of e3) {
            const e4 = t4.tagName.toLowerCase();
            if (E.has(e4) && (t4.getAttribute("class") && !t4.closest(T) && !t4.hasAttribute("fill") && !_(t4, "fill"))) {
              r3 = true;
              break;
            }
          }
          if (r3) for (const t4 of e3) {
            const e4 = t4.tagName.toLowerCase(), r4 = E.has(e4), n3 = A.has(e4), o2 = w.has(e4);
            if (!r4 && !n3 && !o2) continue;
            if (!t4.getAttribute("class")) continue;
            if (t4.closest(T)) continue;
            if (o2) {
              t4.hasAttribute("fill") || _(t4, "fill") || t4.setAttribute("fill", "currentColor");
              continue;
            }
            const i2 = t4.hasAttribute("fill") && "none" !== t4.getAttribute("fill"), s2 = t4.hasAttribute("stroke") || _(t4, "stroke");
            if (!r4 || t4.hasAttribute("fill") || _(t4, "fill") || t4.setAttribute("fill", "none"), !s2) {
              if (n3) t4.setAttribute("stroke", "currentColor"), t4.hasAttribute("stroke-opacity") || t4.setAttribute("stroke-opacity", "0.2");
              else if (r4 && !i2) {
                const e5 = t4.getAttribute("d") || "";
                /Z\s*$/i.test(e5.trim()) || t4.setAttribute("stroke", "currentColor");
              }
            }
          }
        }
        function q(t3) {
          var e3;
          const r3 = t3.getAttribute("class");
          if (!r3) return;
          const o2 = r3.split(/\s+/), i2 = [], s2 = [];
          for (const r4 of o2) {
            let o3 = r4.match(n2.TW_COLOR_CLASS_RE);
            if (o3) {
              const [, r5, i3, s3, a2] = o3, l2 = null === (e3 = n2.TAILWIND_COLORS[i3]) || void 0 === e3 ? void 0 : e3[s3];
              if (l2) {
                if (a2) {
                  const e4 = parseInt(a2) / 100, n3 = parseInt(l2.slice(1, 3), 16), o4 = parseInt(l2.slice(3, 5), 16), i4 = parseInt(l2.slice(5, 7), 16);
                  t3.setAttribute(r5, `rgba(${n3},${o4},${i4},${e4})`);
                } else t3.setAttribute(r5, l2);
                continue;
              }
            }
            o3 = r4.match(n2.TW_SPECIAL_CLASS_RE), o3 ? t3.setAttribute(o3[1], n2.TAILWIND_SPECIAL[o3[2]]) : (o3 = r4.match(n2.TW_ARBITRARY_RE), !o3 || o3[1].startsWith("#") || o3[1].startsWith("rgb") || o3[1].startsWith("hsl") ? "font-semibold" !== r4 ? "font-bold" !== r4 ? "font-medium" !== r4 ? "font-mono" !== r4 ? i2.push(r4) : s2.push("font-family:monospace") : s2.push("font-weight:500") : s2.push("font-weight:700") : s2.push("font-weight:600") : s2.push(`font-size:${o3[1]}`));
          }
          if (i2.length !== o2.length && (i2.length > 0 ? t3.setAttribute("class", i2.join(" ")) : t3.removeAttribute("class"), s2.length > 0)) {
            const e4 = t3.getAttribute("style") || "", r4 = e4 && !e4.endsWith(";") ? ";" : "";
            t3.setAttribute("style", e4 + r4 + s2.join(";"));
          }
        }
        function N(t3) {
          let e3 = 0;
          const r3 = Date.now(), o2 = Array.from(t3.getElementsByTagName("br"));
          let i2 = [];
          const s2 = () => {
            if (i2.length > 2) for (let t4 = 2; t4 < i2.length; t4++) i2[t4].remove(), e3++;
            i2 = [];
          };
          o2.forEach(((t4) => {
            let e4 = false;
            if (i2.length > 0) {
              const r4 = i2[i2.length - 1];
              k(t4, "previous") === r4 && (e4 = true);
            }
            e4 ? i2.push(t4) : (s2(), i2 = [t4]);
          })), s2();
          const a2 = Array.from(t3.getElementsByTagName("br"));
          for (const t4 of a2) {
            const r4 = t4.parentElement;
            if (!r4) continue;
            if (t4.closest("pre, code")) continue;
            const o3 = r4.tagName.toLowerCase();
            if (n2.BLOCK_LEVEL_ELEMENTS.has(o3) || "body" === o3) {
              const r5 = [t4];
              let o4 = k(t4, "next");
              for (; o4 && (0, c.isElement)(o4) && "br" === o4.tagName.toLowerCase(); ) r5.push(o4), o4 = k(o4, "next");
              const i3 = k(r5[0], "previous"), s3 = k(r5[r5.length - 1], "next"), a3 = i3 && (0, c.isElement)(i3) && n2.BLOCK_LEVEL_ELEMENTS.has(i3.tagName.toLowerCase()), l3 = s3 && (0, c.isElement)(s3) && n2.BLOCK_LEVEL_ELEMENTS.has(s3.tagName.toLowerCase());
              if (a3 && l3 || a3 && !s3 || !i3) {
                for (const t5 of r5) t5.remove(), e3++;
                continue;
              }
            }
            n2.BLOCK_LEVEL_ELEMENTS.has(o3) && (k(t4, "next") || (t4.remove(), e3++));
          }
          const l2 = Date.now();
          (0, c.logDebug)(d, "Standardized br elements:", { removed: e3, processingTime: `${(l2 - r3).toFixed(2)}ms` });
        }
        function k(t3, e3) {
          var r3;
          const n3 = "previous" === e3 ? "previousSibling" : "nextSibling";
          let o2 = t3[n3];
          for (; o2 && (0, c.isTextNode)(o2) && !(null === (r3 = o2.textContent) || void 0 === r3 ? void 0 : r3.trim()); ) o2 = o2[n3];
          return o2;
        }
        function $(t3, e3, r3) {
          const n3 = "leading" === r3 ? t3.firstChild : t3.lastChild;
          if (!n3 || !(0, c.isTextNode)(n3)) return 0;
          const o2 = n3.textContent || "", i2 = "leading" === r3 ? o2.replace(/^\s+/, "") : o2.replace(/\s+$/, "");
          if (i2 === o2 || !t3.parentNode) return 0;
          n3.textContent = i2;
          const s2 = "leading" === r3 ? t3.previousSibling : t3.nextSibling;
          if (!(s2 && (0, c.isTextNode)(s2) && ("leading" === r3 ? (s2.textContent || "").endsWith(" ") : (s2.textContent || "").startsWith(" ")))) {
            const n4 = "leading" === r3 ? t3 : t3.nextSibling;
            t3.parentNode.insertBefore(e3.createTextNode(" "), n4);
          }
          return 1;
        }
        function P(t3, e3) {
          let r3 = 0;
          const o2 = Date.now();
          let i2 = true;
          function s2(t4) {
            var e4;
            for (const r4 of t4.childNodes) {
              if ((0, c.isTextNode)(r4) && (null === (e4 = r4.textContent) || void 0 === e4 ? void 0 : e4.trim())) return true;
              if ((0, c.isElement)(r4) && n2.INLINE_ELEMENTS.has(r4.nodeName.toLowerCase())) return true;
            }
            return false;
          }
          const a2 = (t4) => {
            var e4;
            const r4 = t4.tagName.toLowerCase();
            if ((0, c.isSVGElement)(t4)) return true;
            if (n2.PRESERVE_ELEMENTS.has(r4)) return true;
            if (t4.getAttribute("data-callout") || (null === (e4 = t4.closest) || void 0 === e4 ? void 0 : e4.call(t4, "[data-callout]"))) return true;
            const o3 = t4.getAttribute("role");
            if (o3 && ["article", "main", "navigation", "banner", "contentinfo"].includes(o3)) return true;
            const i3 = (0, u.getClassName)(t4);
            if (i3 && i3.toLowerCase().match(/(?:article|main|content|footnote|reference|bibliography)/)) return true;
            return !!Array.from(t4.children).some(((t5) => n2.PRESERVE_ELEMENTS.has(t5.tagName.toLowerCase()) || "article" === t5.getAttribute("role") || !!(0, u.getClassName)(t5) && (0, u.getClassName)(t5).toLowerCase().match(/(?:article|main|content|footnote|reference|bibliography)/)));
          }, l2 = (t4) => {
            var e4;
            if (s2(t4)) return false;
            if (!(null === (e4 = t4.textContent) || void 0 === e4 ? void 0 : e4.trim())) return true;
            const r4 = Array.from(t4.children);
            if (0 === r4.length) return true;
            if (r4.every(((t5) => n2.BLOCK_LEVEL_ELEMENTS.has(t5.tagName.toLowerCase())))) return true;
            const o3 = (0, u.getClassName)(t4).toLowerCase();
            if (/(?:wrapper|container|layout|row|col|grid|flex|outer|inner|content-area)/i.test(o3)) return true;
            const i3 = Array.from(t4.childNodes).filter(((t5) => {
              var e5;
              return (0, c.isTextNode)(t5) && (null === (e5 = t5.textContent) || void 0 === e5 ? void 0 : e5.trim());
            }));
            if (0 === i3.length) return true;
            return !(!(r4.length > 0) || r4.some(((t5) => {
              const e5 = t5.tagName.toLowerCase();
              return n2.INLINE_ELEMENTS.has(e5);
            })));
          }, h2 = (o3) => {
            var i3, u2;
            if (!o3.parentNode || a2(o3)) return false;
            const d2 = o3.tagName.toLowerCase();
            if (!n2.ALLOWED_EMPTY_ELEMENTS.has(d2) && !o3.children.length && !(null === (i3 = o3.textContent) || void 0 === i3 ? void 0 : i3.trim())) return o3.remove(), r3++, true;
            if (o3.parentElement === t3) {
              const t4 = Array.from(o3.children);
              if (t4.length > 0 && !t4.some(((t5) => {
                const e4 = t5.tagName.toLowerCase();
                return n2.INLINE_ELEMENTS.has(e4);
              }))) {
                const t5 = e3.createDocumentFragment();
                for (; o3.firstChild; ) t5.appendChild(o3.firstChild);
                return o3.replaceWith(t5), r3++, true;
              }
            }
            if (l2(o3)) {
              const t4 = e3.createDocumentFragment();
              for (; o3.firstChild; ) t4.appendChild(o3.firstChild);
              return o3.replaceWith(t4), r3++, true;
            }
            const h3 = Array.from(o3.childNodes);
            if (h3.length > 0 && h3.every(((t4) => (0, c.isTextNode)(t4) || (0, c.isElement)(t4) && n2.INLINE_ELEMENTS.has(t4.nodeName.toLowerCase()))) && (null === (u2 = o3.textContent) || void 0 === u2 ? void 0 : u2.trim())) {
              const t4 = e3.createElement("p");
              for (; o3.firstChild; ) t4.appendChild(o3.firstChild);
              return o3.replaceWith(t4), r3++, true;
            }
            if (1 === o3.children.length) {
              const t4 = o3.firstElementChild, e4 = t4.tagName.toLowerCase();
              if (n2.BLOCK_ELEMENTS_SET.has(e4) && !a2(t4)) return o3.replaceWith(t4), r3++, true;
            }
            let m3 = 0, f3 = o3.parentElement;
            for (; f3; ) {
              const t4 = f3.tagName.toLowerCase();
              n2.BLOCK_ELEMENTS_SET.has(t4) && m3++, f3 = f3.parentElement;
            }
            if (m3 > 0 && !s2(o3)) {
              const t4 = e3.createDocumentFragment();
              for (; o3.firstChild; ) t4.appendChild(o3.firstChild);
              return o3.replaceWith(t4), r3++, true;
            }
            return false;
          }, m2 = () => {
            const e4 = Array.from(t3.children).filter(((t4) => n2.BLOCK_ELEMENTS_SET.has(t4.tagName.toLowerCase())));
            let r4 = false;
            return e4.forEach(((t4) => {
              h2(t4) && (r4 = true);
            })), r4;
          }, f2 = () => {
            const e4 = Array.from(t3.querySelectorAll(n2.BLOCK_ELEMENTS_SELECTOR)).sort(((t4, e5) => {
              const r5 = (t5) => {
                let e6 = 0, r6 = t5.parentElement;
                for (; r6; ) {
                  const t6 = r6.tagName.toLowerCase();
                  n2.BLOCK_ELEMENTS_SET.has(t6) && e6++, r6 = r6.parentElement;
                }
                return e6;
              };
              return r5(e5) - r5(t4);
            }));
            let r4 = false;
            return e4.forEach(((t4) => {
              h2(t4) && (r4 = true);
            })), r4;
          }, p2 = () => {
            const o3 = Array.from(t3.querySelectorAll(n2.BLOCK_ELEMENTS_SELECTOR));
            let i3 = false;
            return o3.forEach(((t4) => {
              const n3 = Array.from(t4.children);
              if (n3.length > 0 && n3.every(((t5) => "p" === t5.tagName.toLowerCase())) || !a2(t4) && l2(t4)) {
                const n4 = e3.createDocumentFragment();
                for (; t4.firstChild; ) n4.appendChild(t4.firstChild);
                t4.replaceWith(n4), r3++, i3 = true;
              }
            })), i3;
          };
          do {
            i2 = false, m2() && (i2 = true), f2() && (i2 = true), p2() && (i2 = true);
          } while (i2);
          const g2 = Date.now();
          (0, c.logDebug)(d, "Flattened wrapper elements:", { count: r3, processingTime: `${(g2 - o2).toFixed(2)}ms` });
        }
      }, 2552(t2, e2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.CJK_CHAR_RANGES = void 0, e2.isElement = function(t3) {
          return t3.nodeType === r2;
        }, e2.isTextNode = function(t3) {
          return t3.nodeType === n2;
        }, e2.isCommentNode = function(t3) {
          return t3.nodeType === o;
        }, e2.isSVGElement = function(t3) {
          var e3;
          return null !== (null === (e3 = t3.closest) || void 0 === e3 ? void 0 : e3.call(t3, "svg")) || "http://www.w3.org/2000/svg" === t3.namespaceURI;
        }, e2.getComputedStyle = function(t3) {
          const e3 = i(t3.ownerDocument);
          return e3 && "function" == typeof e3.getComputedStyle ? e3.getComputedStyle(t3) : null;
        }, e2.getWindow = i, e2.textPreview = function(t3) {
          return (t3.textContent || "").trim().substring(0, 200);
        }, e2.logDebug = function(t3, e3, ...r3) {
          t3 && console.log("Defuddle:", e3, ...r3);
        }, e2.normalizeText = function(t3) {
          return t3.replace(/\u00A0/g, " ").replace(/[\u2018\u2019\u201A\u201B]/g, "'").replace(/[\u2012\u2013\u2014\u2015]/g, "-").replace(/[\u201C\u201D\u201E\u201F]/g, '"').replace(/\u2026/g, "...").replace(/\s+/g, " ").trim().toLowerCase();
        }, e2.countWords = function(t3) {
          if (!t3) return 0;
          let e3 = 0, r3 = 0, n3 = false;
          for (let o2 = 0; o2 < t3.length; o2++) {
            const i2 = t3.charCodeAt(o2);
            i2 >= 12352 && i2 <= 12447 || i2 >= 12448 && i2 <= 12543 || i2 >= 13312 && i2 <= 19903 || i2 >= 19968 && i2 <= 40959 || i2 >= 63744 && i2 <= 64255 || i2 >= 44032 && i2 <= 55215 ? (e3++, n3 = false) : i2 <= 32 ? n3 = false : n3 || (r3++, n3 = true);
          }
          return e3 + r3;
        };
        const r2 = 1, n2 = 3, o = 8;
        function i(t3) {
          return t3.defaultView ? t3.defaultView : t3.ownerWindow ? t3.ownerWindow : t3.window ? t3.window : null;
        }
        e2.CJK_CHAR_RANGES = "\\u3040-\\u309f\\u30a0-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uf900-\\ufaff\\uac00-\\ud7af";
      }, 6618(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.bbcodeToHtml = function(t3) {
          let e3 = t3;
          return e3 = e3.replace(/\[h1\]([\s\S]*?)\[\/h1\]/gi, "<h1>$1</h1>"), e3 = e3.replace(/\[h2\]([\s\S]*?)\[\/h2\]/gi, "<h2>$1</h2>"), e3 = e3.replace(/\[h3\]([\s\S]*?)\[\/h3\]/gi, "<h3>$1</h3>"), e3 = e3.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, "<strong>$1</strong>"), e3 = e3.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, "<em>$1</em>"), e3 = e3.replace(/\[u\]([\s\S]*?)\[\/u\]/gi, "<u>$1</u>"), e3 = e3.replace(/\[s\]([\s\S]*?)\[\/s\]/gi, "<s>$1</s>"), e3 = e3.replace(/\[url=["']?([^"'\]]+)["']?\]([\s\S]*?)\[\/url\]/gi, ((t4, e4, r3) => (0, n2.isDangerousUrl)(e4) ? r3 : `<a href="${e4}">${r3}</a>`)), e3 = e3.replace(/\[img\]([\s\S]*?)\[\/img\]/gi, '<img src="$1">'), e3 = e3.replace(/\[previewyoutube=["']?([^;'"]+)[^"'\]]*["']?\]\[\/previewyoutube\]/gi, '<img src="https://www.youtube.com/watch?v=$1">'), e3 = e3.replace(/\[list\]([\s\S]*?)\[\/list\]/gi, ((t4, e4) => `<ul>${e4.replace(/\[\*\]([\s\S]*?)(?=\[\*\]|\[\/list\]|$)/gi, "<li>$1</li>")}</ul>`)), e3 = e3.replace(/\[olist\]([\s\S]*?)\[\/olist\]/gi, ((t4, e4) => `<ol>${e4.replace(/\[\*\]([\s\S]*?)(?=\[\*\]|\[\/olist\]|$)/gi, "<li>$1</li>")}</ol>`)), e3 = e3.replace(/\[quote(?:=[^\]]+)?\]([\s\S]*?)\[\/quote\]/gi, "<blockquote>$1</blockquote>"), e3 = e3.replace(/\[code\]([\s\S]*?)\[\/code\]/gi, "<pre><code>$1</code></pre>"), e3 = e3.replace(/\[spoiler\]([\s\S]*?)\[\/spoiler\]/gi, "<details><summary>Spoiler</summary>$1</details>"), e3 = e3.replace(/\[p\]([\s\S]*?)\[\/p\]/gi, ((t4, e4) => `<p>${e4.replace(/\n/g, "<br>")}</p>`)), e3 = e3.replace(/\n/g, "<br>"), e3 = e3.replace(/\[[^\]]+\]/g, ""), e3;
        };
        const n2 = r2(639);
      }, 6077(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.buildContentHtml = function(t3, e3, r3) {
          return `
		<article data-defuddle>
			<div class="${t3} post">
				<div class="post-content">
					${e3}
				</div>
			</div>
			${r3 ? `
				<hr>
				<div class="${t3} comments">
					<h2>Comments</h2>
					${r3}
				</div>
			` : ""}
		</article>
	`.trim();
        }, e2.buildCommentTree = function(t3) {
          var e3, r3, n3;
          const i = [], s = [];
          for (const a of t3) {
            const t4 = null !== (e3 = a.depth) && void 0 !== e3 ? e3 : 0;
            if (0 === t4) {
              for (; s.length > 0; ) i.push("</blockquote>"), s.pop();
              i.push("<blockquote>"), s.push(0);
            } else {
              if (t4 < (null !== (r3 = s[s.length - 1]) && void 0 !== r3 ? r3 : -1)) for (; s.length > 0 && s[s.length - 1] >= t4; ) i.push("</blockquote>"), s.pop();
              t4 > (null !== (n3 = s[s.length - 1]) && void 0 !== n3 ? n3 : -1) && (i.push("<blockquote>"), s.push(t4));
            }
            i.push(o(a));
          }
          for (; s.length > 0; ) i.push("</blockquote>"), s.pop();
          return i.join("");
        }, e2.buildComment = o, e2.buildQuotedPost = function(t3) {
          let e3 = "";
          t3.author && (e3 += `<p><strong>${(0, n2.escapeHtml)(t3.author)}</strong>`, t3.date && (e3 += ` · ${(0, n2.escapeHtml)(t3.date)}`), e3 += "</p>");
          let r3 = "";
          if (t3.url) {
            const e4 = (0, n2.isDangerousUrl)(t3.url) ? "" : t3.url;
            e4 && (r3 = `
<p><a href="${(0, n2.escapeHtml)(e4)}">${(0, n2.escapeHtml)(e4)}</a></p>`);
          }
          return `<blockquote class="quoted-post">${e3}${t3.content}${r3}</blockquote>`;
        };
        const n2 = r2(639);
        function o(t3) {
          const e3 = `<span class="comment-author"><strong>${(0, n2.escapeHtml)(t3.author)}</strong></span>`, r3 = t3.url && !(0, n2.isDangerousUrl)(t3.url) ? t3.url : "";
          return `<div class="comment">
	<div class="comment-metadata">
		${e3} · ${r3 ? `<a href="${(0, n2.escapeHtml)(r3)}" class="comment-link">${(0, n2.escapeHtml)(t3.date)}</a>` : `<span class="comment-date">${(0, n2.escapeHtml)(t3.date)}</span>`}${t3.score ? ` · <span class="comment-points">${(0, n2.escapeHtml)(t3.score)}</span>` : ""}
	</div>
	<div class="comment-content">${t3.content}</div>
</div>`;
        }
      }, 639(t2, e2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.transferContent = function(t3, e3) {
          if ("replaceChildren" in e3) e3.replaceChildren();
          else for (; e3.firstChild; ) e3.removeChild(e3.firstChild);
          for (; t3.firstChild; ) e3.appendChild(t3.firstChild);
        }, e2.serializeHTML = function(t3) {
          return t3.innerHTML;
        }, e2.decodeHTMLEntities = function(t3, e3) {
          const r3 = t3.createElement("textarea");
          return r3.innerHTML = e3, r3.value;
        }, e2.escapeHtml = function(t3) {
          return t3.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        }, e2.getClassName = function(t3) {
          return "string" == typeof t3.className ? t3.className : t3.getAttribute("class") || "";
        }, e2.hasResponsiveShowClass = function(t3) {
          return t3.split(/\s+/).some(((t4) => r2.test(t4)));
        }, e2.isDangerousUrl = function(t3, e3 = true) {
          const r3 = t3.replace(/[\s\u0000-\u001F]+/g, "").toLowerCase();
          if (r3.startsWith("javascript:") || r3.startsWith("blob:")) return true;
          if (r3.startsWith("data:")) return !(e3 && r3.startsWith("data:image/"));
          return false;
        }, e2.isDirectTableChild = function(t3, e3) {
          let r3 = t3.parentNode;
          for (; r3 && r3 !== e3; ) {
            if ("TABLE" === r3.nodeName) return false;
            r3 = r3.parentNode;
          }
          return r3 === e3;
        }, e2.parseHTML = function(t3, e3) {
          if (!e3) return t3.createDocumentFragment();
          const r3 = t3.createElement("template");
          if (r3.innerHTML = e3, r3.content) return r3.content;
          const n2 = t3.createElement("div");
          n2.innerHTML = e3;
          const o = t3.createDocumentFragment();
          for (; n2.firstChild; ) o.appendChild(n2.firstChild);
          return o;
        };
        const r2 = /^(sm|md|lg|xl|2xl|min-\[|max-\[):(?:block|flex|grid|inline|table|contents)/;
      }, 1497(t2, e2, r2) {
        Object.defineProperty(e2, "__esModule", { value: true }), e2.formatTimestamp = o, e2.buildTranscript = function(t3, e3, r3 = []) {
          const i = [...r3].sort(((t4, e4) => t4.start - e4.start));
          let s = 0;
          const a = [], l = [];
          for (const t4 of e3) {
            for (; s < i.length && i[s].start <= t4.start; ) {
              const t5 = i[s].title;
              a.push(`<h3>${(0, n2.escapeHtml)(t5)}</h3>`), l.length > 0 && l.push(""), l.push(`### ${t5}`), l.push(""), s++;
            }
            const e4 = o(t4.start), r4 = void 0 !== t4.speaker ? ` speaker-${t4.speaker}` : "", c = `<strong><span class="timestamp" data-timestamp="${t4.start}">${e4}</span></strong>`;
            a.push(`<p class="transcript-segment${r4}">${c} · ${(0, n2.escapeHtml)(t4.text)}</p>`), t4.speakerChange && l.length > 0 && l.push(""), l.push(`**${e4}** · ${t4.text}`);
          }
          return { html: `<div class="${t3} transcript">
<h2>Transcript</h2>
${a.join("\n")}
</div>`, text: l.join("\n") };
        };
        const n2 = r2(639);
        function o(t3) {
          const e3 = Math.floor(t3 / 3600), r3 = Math.floor(t3 % 3600 / 60), n3 = Math.floor(t3 % 60);
          return e3 > 0 ? `${e3}:${String(r3).padStart(2, "0")}:${String(n3).padStart(2, "0")}` : `${r3}:${String(n3).padStart(2, "0")}`;
        }
      } }, e = {};
      function r(n2) {
        var o = e[n2];
        if (void 0 !== o) return o.exports;
        var i = e[n2] = { exports: {} };
        return t[n2].call(i.exports, i, i.exports, r), i.exports;
      }
      var n = {};
      return (() => {
        var t2 = n;
        const e2 = r(5628);
        t2.default = e2.Defuddle;
      })(), n = n.default;
    })()));
  }
});

// blueprint.json
var require_blueprint = __commonJS({
  "blueprint.json"(exports2, module2) {
    module2.exports = {
      id: "fde365-six-assets",
      version: 4,
      root: "FDE365知识库",
      folders: [
        ".agents",
        ".agents/skills",
        ".agents/skills/fde-action",
        ".agents/skills/fde-action/agents",
        ".agents/skills/fde-action/references",
        ".agents/skills/fde-benchmark",
        ".agents/skills/fde-benchmark/agents",
        ".agents/skills/fde-benchmark/references",
        ".agents/skills/fde-benchmark/references/modes",
        ".agents/skills/fde-check",
        ".agents/skills/fde-check/agents",
        ".agents/skills/fde-check/references",
        ".agents/skills/fde-connect",
        ".agents/skills/fde-connect/agents",
        ".agents/skills/fde-connect/references",
        ".agents/skills/fde-connect/scripts",
        ".agents/skills/fde-decide",
        ".agents/skills/fde-decide/agents",
        ".agents/skills/fde-decide/references",
        ".agents/skills/fde-define",
        ".agents/skills/fde-define/agents",
        ".agents/skills/fde-define/references",
        ".agents/skills/fde-diagnose",
        ".agents/skills/fde-diagnose/agents",
        ".agents/skills/fde-diagnose/references",
        ".agents/skills/fde-diagnose/references/modes",
        ".agents/skills/fde-discuss",
        ".agents/skills/fde-discuss/agents",
        ".agents/skills/fde-discuss/references",
        ".agents/skills/fde-economy",
        ".agents/skills/fde-economy/agents",
        ".agents/skills/fde-economy/references",
        ".agents/skills/fde-export",
        ".agents/skills/fde-export/agents",
        ".agents/skills/fde-export/references",
        ".agents/skills/fde-export/scripts",
        ".agents/skills/fde-flow",
        ".agents/skills/fde-flow/agents",
        ".agents/skills/fde-flow/references",
        ".agents/skills/fde-focus",
        ".agents/skills/fde-focus/agents",
        ".agents/skills/fde-focus/references",
        ".agents/skills/fde-format",
        ".agents/skills/fde-format/agents",
        ".agents/skills/fde-format/references",
        ".agents/skills/fde-format/scripts",
        ".agents/skills/fde-goal",
        ".agents/skills/fde-goal/agents",
        ".agents/skills/fde-goal/references",
        ".agents/skills/fde-health",
        ".agents/skills/fde-health/agents",
        ".agents/skills/fde-health/references",
        ".agents/skills/fde-hook",
        ".agents/skills/fde-hook/agents",
        ".agents/skills/fde-hook/references",
        ".agents/skills/fde-impact",
        ".agents/skills/fde-impact/agents",
        ".agents/skills/fde-impact/references",
        ".agents/skills/fde-ingest",
        ".agents/skills/fde-ingest/agents",
        ".agents/skills/fde-ingest/references",
        ".agents/skills/fde-interview",
        ".agents/skills/fde-interview/agents",
        ".agents/skills/fde-interview/references",
        ".agents/skills/fde-learn",
        ".agents/skills/fde-learn/agents",
        ".agents/skills/fde-learn/references",
        ".agents/skills/fde-library",
        ".agents/skills/fde-library/agents",
        ".agents/skills/fde-library/references",
        ".agents/skills/fde-organize",
        ".agents/skills/fde-organize/agents",
        ".agents/skills/fde-organize/references",
        ".agents/skills/fde-organize/scripts",
        ".agents/skills/fde-question",
        ".agents/skills/fde-question/agents",
        ".agents/skills/fde-question/references",
        ".agents/skills/fde-report",
        ".agents/skills/fde-report/agents",
        ".agents/skills/fde-report/references",
        ".agents/skills/fde-resume",
        ".agents/skills/fde-resume/agents",
        ".agents/skills/fde-resume/references",
        ".agents/skills/fde-review",
        ".agents/skills/fde-review/agents",
        ".agents/skills/fde-review/references",
        ".agents/skills/fde-review/references/modes",
        ".agents/skills/fde-safety",
        ".agents/skills/fde-safety/agents",
        ".agents/skills/fde-safety/references",
        ".agents/skills/fde-safety/scripts",
        ".agents/skills/fde-save",
        ".agents/skills/fde-save/agents",
        ".agents/skills/fde-save/references",
        ".agents/skills/fde-setup",
        ".agents/skills/fde-setup/agents",
        ".agents/skills/fde-setup/references",
        ".agents/skills/fde-spread",
        ".agents/skills/fde-spread/agents",
        ".agents/skills/fde-spread/references",
        ".agents/skills/fde-start",
        ".agents/skills/fde-start/agents",
        ".agents/skills/fde-start/references",
        ".agents/skills/fde-title",
        ".agents/skills/fde-title/agents",
        ".agents/skills/fde-title/references",
        ".agents/skills/fde-topics",
        ".agents/skills/fde-topics/agents",
        ".agents/skills/fde-topics/references",
        ".agents/skills/fde-update",
        ".agents/skills/fde-update/agents",
        ".agents/skills/fde-update/references",
        ".agents/skills/fde-write",
        ".agents/skills/fde-write/agents",
        ".agents/skills/fde-write/references",
        ".agents/skills/fde-write/references/modes",
        ".fde",
        ".fde/indexes",
        ".fde/logs",
        ".fde/quarantine",
        ".fde/reports",
        ".fde/state",
        ".fde/versions",
        "0-录音处理",
        "0-录音处理/待处理录音",
        "0-录音处理/已处理",
        "1-老板说明书",
        "2-产品库",
        "3-客户需求库",
        "4-素材案例库",
        "5-方法论库",
        "6-内容生产",
        "6-内容生产/草稿",
        "6-内容生产/待发布",
        "6-内容生产/待审核",
        "6-内容生产/数据复盘",
        "6-内容生产/选题",
        "6-内容生产/已发布",
        "7-系统",
        "7-系统/AI协作",
        "7-系统/AI协作/输出",
        "7-系统/AI协作/运行记录",
        "docs"
      ],
      files: {
        ".agents/skills/fde-action/agents/openai.yaml": 'interface:\n  display_name: "行动卡点"\n  short_description: "读取当前六类资产知识库，执行行动卡点并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-action 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-action/references/acceptance.md": "# 验收\n\n- [ ] fde-action 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：卡点类型、下一步动作、完成信号、所需支持、回填时间。\n- [ ] 能力：诊断知道但不行动的具体阻点。\n- [ ] 能力：区分方向不清、条件不足、未承诺和回避结果。\n- [ ] 能力：把任务缩成一个可完成动作。\n- [ ] 能力：约定完成信号和回填时间。\n",
        ".agents/skills/fde-action/references/atoms.jsonl": '{"id": "FDE-ACTION-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ACTION-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-action/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-action/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-action 完成：诊断知道但不行动的具体阻点。",\n    "must_do": [\n      "诊断知道但不行动的具体阻点",\n      "区分方向不清、条件不足、未承诺和回避结果",\n      "把任务缩成一个可完成动作"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-action 完成：约定完成信号和回填时间。",\n    "must_do": [\n      "约定完成信号和回填时间",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-action 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-action/references/capability-contract.json": '{\n  "skill": "fde-action",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "诊断知道但不行动的具体阻点",\n    "区分方向不清、条件不足、未承诺和回避结果",\n    "把任务缩成一个可完成动作",\n    "约定完成信号和回填时间"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-action/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-action 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-action/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-action/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-action/references/method.md": "# 行动卡点方法\n\n## 输入\n\n- 当前目标\n- 已承诺动作\n- 最近一次尝试\n- 实际阻力\n- 可用时间和资源\n\n## 步骤\n\n1. 区分不知道做什么、做不到、未承诺和在回避结果。\n2. 找出动作开始前的最后一个具体阻点。\n3. 把任务改写为有对象、动作、完成信号和截止时间的一步。\n4. 约定一次回填，不做长期激励演讲。\n\n## 交付\n\n- 卡点类型\n- 下一步动作\n- 完成信号\n- 所需支持\n- 回填时间\n\n## 停止\n\n- 目标本身不清时转 fde-goal\n- 需要专业心理支持时不代替专业人员\n- 不使用羞辱或人格判断\n",
        ".agents/skills/fde-action/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-action`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-action/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-action` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-action`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-action/SKILL.md": "---\nname: fde-action\ndescription: |\n  处理已经知道要做什么但没有推进的任务。核对目标、前置条件、阻力和反馈，把任务缩成能产生结果的一步。触发方式：/fde-action、「一直拖着没做」「这件事推不动」。\n---\n\n# 行动卡点\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前目标\n- 已承诺动作\n- 最近一次尝试\n- 实际阻力\n- 可用时间和资源\n\n## 必须保留的能力\n\n- 诊断知道但不行动的具体阻点\n- 区分方向不清、条件不足、未承诺和回避结果\n- 把任务缩成一个可完成动作\n- 约定完成信号和回填时间\n\n## 执行\n\n1. 区分不知道做什么、做不到、未承诺和在回避结果。\n2. 找出动作开始前的最后一个具体阻点。\n3. 把任务改写为有对象、动作、完成信号和截止时间的一步。\n4. 约定一次回填，不做长期激励演讲。\n\n## 交付\n\n- 卡点类型\n- 下一步动作\n- 完成信号\n- 所需支持\n- 回填时间\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户同意后把动作写入当前任务状态\n- 完成结果回到相关项目记录\n\n## 停止条件\n\n- 目标本身不清时转 fde-goal\n- 需要专业心理支持时不代替专业人员\n- 不使用羞辱或人格判断\n\n## 接续\n\n- 目标不清用 fde-goal\n- 方向不清用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-benchmark/agents/openai.yaml": 'interface:\n  display_name: "对标研究"\n  short_description: "读取当前六类资产知识库，执行对标研究并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-benchmark 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-benchmark/references/acceptance.md": "# 验收\n\n- [ ] fde-benchmark 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：候选筛选、可学动作、不适用部分、证据链接或文件、本周实验。\n- [ ] 能力：从候选中筛选对标。\n- [ ] 能力：评估用户指定的对标。\n- [ ] 能力：比较公开且可观察的业务条件。\n- [ ] 能力：提取可复测动作而不复制人设。\n- [ ] 能力：记录实验和结果。\n",
        ".agents/skills/fde-benchmark/references/atoms.jsonl": '{"id": "FDE-BENCHMARK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-BENCHMARK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-benchmark/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-benchmark/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-benchmark 完成：从候选中筛选对标。",\n    "must_do": [\n      "从候选中筛选对标",\n      "评估用户指定的对标",\n      "比较公开且可观察的业务条件"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-benchmark 完成：记录实验和结果。",\n    "must_do": [\n      "记录实验和结果",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-benchmark 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-benchmark/references/capability-contract.json": '{\n  "skill": "fde-benchmark",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从候选中筛选对标",\n    "评估用户指定的对标",\n    "比较公开且可观察的业务条件",\n    "提取可复测动作而不复制人设",\n    "记录实验和结果"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-benchmark/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-benchmark 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-benchmark/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-benchmark/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-benchmark/references/method.md": "# 对标研究方法\n\n## 输入\n\n- 自己的目标和约束\n- 候选对象的公开材料\n- 知识库中的产品、客户和内容数据\n\n## 步骤\n\n1. 先写清要解决的问题和不能照搬的条件。\n2. 选择 3—5 个可比对象，记录来源和观察时间。\n3. 按对象、做法、证据、适用条件和风险拆解。\n4. 只提取能做小实验的动作，安排验证周期。\n\n## 交付\n\n- 候选筛选\n- 可学动作\n- 不适用部分\n- 证据链接或文件\n- 本周实验\n\n## 停止\n\n- 没有公开证据时不评价结果\n- 不得把粉丝数直接当商业效果\n- 不复制个人经历和虚构人设\n",
        ".agents/skills/fde-benchmark/references/modes/big10.md": "# 多对象扫描\n\n先列 10 个候选，只用公开证据筛到 3 个可比对象。筛选理由写成条件，不写个人好恶。\n",
        ".agents/skills/fde-benchmark/references/modes/note.md": "# 单篇内容拆解\n\n记录内容对象、问题、材料、结构、行动和发布数据。只提取可复测变量，不照搬措辞。\n",
        ".agents/skills/fde-benchmark/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-benchmark`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-benchmark/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-benchmark` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-benchmark`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-benchmark/SKILL.md": "---\nname: fde-benchmark\ndescription: |\n  围绕一个明确业务目标研究对标对象，比较可观察的产品、内容、客户和结果，不复制人设。触发方式：/fde-benchmark、「找对标」「研究这个账号」。\n---\n\n# 对标研究\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 自己的目标和约束\n- 候选对象的公开材料\n- 知识库中的产品、客户和内容数据\n\n## 必须保留的能力\n\n- 从候选中筛选对标\n- 评估用户指定的对标\n- 比较公开且可观察的业务条件\n- 提取可复测动作而不复制人设\n- 记录实验和结果\n\n## 执行\n\n1. 先写清要解决的问题和不能照搬的条件。\n2. 选择 3—5 个可比对象，记录来源和观察时间。\n3. 按对象、做法、证据、适用条件和风险拆解。\n4. 只提取能做小实验的动作，安排验证周期。\n\n## 交付\n\n- 候选筛选\n- 可学动作\n- 不适用部分\n- 证据链接或文件\n- 本周实验\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 研究记录写入方法库\n- 实验结果写入数据复盘\n\n## 停止条件\n\n- 没有公开证据时不评价结果\n- 不得把粉丝数直接当商业效果\n- 不复制个人经历和虚构人设\n\n## 接续\n\n- 实验形成内容时用 fde-write\n- 商业方向不清用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-check/agents/openai.yaml": 'interface:\n  display_name: "文字痕迹检查"\n  short_description: "读取当前六类资产知识库，执行文字痕迹检查并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-check 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-check/references/acceptance.md": "# 验收\n\n- [ ] fde-check 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：问题位置、问题类型、为什么有问题、最小修改动作、应保留内容。\n- [ ] 能力：扫描空泛结构和常见 AI 写作特征。\n- [ ] 能力：标出具体句子和问题类型。\n- [ ] 能力：对照老板表达检查偏差。\n- [ ] 能力：默认只诊断不改写。\n- [ ] 能力：不声称能证明真实作者。\n",
        ".agents/skills/fde-check/references/atoms.jsonl": '{"id": "FDE-CHECK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CHECK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-check/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-check/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-check 完成：扫描空泛结构和常见 AI 写作特征。",\n    "must_do": [\n      "扫描空泛结构和常见 AI 写作特征",\n      "标出具体句子和问题类型",\n      "对照老板表达检查偏差"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-check 完成：不声称能证明真实作者。",\n    "must_do": [\n      "不声称能证明真实作者",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-check 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-check/references/capability-contract.json": '{\n  "skill": "fde-check",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "扫描空泛结构和常见 AI 写作特征",\n    "标出具体句子和问题类型",\n    "对照老板表达检查偏差",\n    "默认只诊断不改写",\n    "不声称能证明真实作者"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-check/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-check 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-check/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-check/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-check/references/method.md": "# 文字痕迹检查方法\n\n## 输入\n\n- 待检查文本\n- 老板说明书中的原话和禁区\n- 内容来源\n- 用户要求保留的表达\n\n## 步骤\n\n1. 先找没有来源的事实和过度确定的判断。\n2. 再找重复句式、均匀段落、概念堆叠和替读者总结。\n3. 对照老板原话标出语气和用词偏差。\n4. 按删、补证据、还原原话和保留分组。\n\n## 交付\n\n- 问题位置\n- 问题类型\n- 为什么有问题\n- 最小修改动作\n- 应保留内容\n\n## 停止\n\n- 不能根据文本判断是否由 AI 实际生成\n- 不删除行业必要术语\n- 不为了口语化添加虚构场景\n",
        ".agents/skills/fde-check/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-check`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-check/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-check` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-ai-check`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-check/SKILL.md": "---\nname: fde-check\ndescription: |\n  检查文稿中的空泛判断、整齐模板、无来源事实和与老板表达不一致的句子。默认只标问题。触发方式：/fde-check、「检查 AI 味」「这段像不像我」。\n---\n\n# 文字痕迹检查\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 待检查文本\n- 老板说明书中的原话和禁区\n- 内容来源\n- 用户要求保留的表达\n\n## 必须保留的能力\n\n- 扫描空泛结构和常见 AI 写作特征\n- 标出具体句子和问题类型\n- 对照老板表达检查偏差\n- 默认只诊断不改写\n- 不声称能证明真实作者\n\n## 执行\n\n1. 先找没有来源的事实和过度确定的判断。\n2. 再找重复句式、均匀段落、概念堆叠和替读者总结。\n3. 对照老板原话标出语气和用词偏差。\n4. 按删、补证据、还原原话和保留分组。\n\n## 交付\n\n- 问题位置\n- 问题类型\n- 为什么有问题\n- 最小修改动作\n- 应保留内容\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认不改原文；确认后另存版本\n\n## 停止条件\n\n- 不能根据文本判断是否由 AI 实际生成\n- 不删除行业必要术语\n- 不为了口语化添加虚构场景\n\n## 接续\n\n- 整体审核用 fde-review\n- 需要写稿用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-connect/agents/openai.yaml": 'interface:\n  display_name: "连接 Skill"\n  short_description: "读取当前六类资产知识库，执行连接 Skill并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-connect 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-connect/references/acceptance.md": "# 验收\n\n- [ ] fde-connect 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：真源、目标、动作、冲突、验证结果。\n- [ ] 能力：支持单个 Skill、绝对路径和 Skill 集合目录。\n- [ ] 能力：支持连接、取消和状态检查。\n- [ ] 能力：覆盖 Claude Code、Codex、通用 Agents 和 Grok。\n- [ ] 能力：普通目标目录不覆盖。\n- [ ] 能力：连接后验证 name 和目标。\n",
        ".agents/skills/fde-connect/references/atoms.jsonl": '{"id": "FDE-CONNECT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-CONNECT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-connect/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-connect/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-connect 完成：支持单个 Skill、绝对路径和 Skill 集合目录。",\n    "must_do": [\n      "支持单个 Skill、绝对路径和 Skill 集合目录",\n      "支持连接、取消和状态检查",\n      "覆盖 Claude Code、Codex、通用 Agents 和 Grok"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-connect 完成：连接后验证 name 和目标。",\n    "must_do": [\n      "连接后验证 name 和目标",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-connect 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-connect/references/capability-contract.json": '{\n  "skill": "fde-connect",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "支持单个 Skill、绝对路径和 Skill 集合目录",\n    "支持连接、取消和状态检查",\n    "覆盖 Claude Code、Codex、通用 Agents 和 Grok",\n    "普通目标目录不覆盖",\n    "连接后验证 name 和目标"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-connect/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-connect 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-connect/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-connect/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-connect/references/method.md": "# 连接 Skill方法\n\n## 输入\n\n- Skill 真源目录或 Skill 集合目录\n- 目标 Agent 的技能目录\n- 现有同名路径\n- scripts/link_skill.py\n\n## 步骤\n\n1. 使用脚本识别单个 Skill、绝对路径或 Skill 集合目录。\n2. 列出 Claude Code、Codex、通用 Agents 和 Grok 的目标路径与现有类型。\n3. link 时为前三者创建软链，为 Grok 创建只指向真源的薄入口；存在普通目录时报告冲突。\n4. unlink 只移除本工具创建的连接；status 重新解析并核对 name 与目标。\n\n## 交付\n\n- 真源\n- 目标\n- 动作\n- 冲突\n- 验证结果\n\n## 停止\n\n- 目标已有普通目录时不覆盖\n- 跨机器路径不创建无效链接\n- 全局目录写入前确认\n",
        ".agents/skills/fde-connect/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-connect`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-connect/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-connect` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-bridge`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-connect/scripts/link_skill.py": '#!/usr/bin/env python3\n"""Connect project-owned skills to supported local Agent directories."""\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nimport shutil\nfrom pathlib import Path\n\n\nAGENT_DIRS = {"claude": ".claude/skills", "codex": ".codex/skills", "agents": ".agents/skills", "grok": ".grok/skills"}\nMARKER = "FDE-SKILLS-GROK-BRIDGE"\n\n\ndef sources(path: Path) -> list[Path]:\n    path = path.expanduser().resolve()\n    if (path / "SKILL.md").is_file():\n        return [path]\n    found = sorted(item for item in path.iterdir() if item.is_dir() and (item / "SKILL.md").is_file()) if path.is_dir() else []\n    if not found:\n        raise ValueError(f"no skill found: {path}")\n    return found\n\n\ndef destination(base: Path, agent: str, source: Path) -> Path:\n    return base / AGENT_DIRS[agent] / source.name\n\n\ndef owned_wrapper(path: Path) -> bool:\n    file = path / "SKILL.md"\n    return file.is_file() and MARKER in file.read_text(encoding="utf-8", errors="ignore")\n\n\ndef link_one(source: Path, target: Path, agent: str) -> str:\n    target.parent.mkdir(parents=True, exist_ok=True)\n    if target.exists() or target.is_symlink():\n        if target.is_symlink() and target.resolve() == source:\n            return "already-linked"\n        if agent == "grok" and target.is_dir() and owned_wrapper(target):\n            shutil.rmtree(target)\n        else:\n            return "blocked-existing-target"\n    if agent == "grok":\n        target.mkdir()\n        (target / "SKILL.md").write_text(\n            f"---\\nname: {source.name}\\ndescription: Project skill bridge for Grok.\\n---\\n\\n# {source.name}\\n\\n<!-- {MARKER} -->\\n\\nRead and follow `{source / \'SKILL.md\'}`.\\n",\n            encoding="utf-8",\n        )\n    else:\n        target.symlink_to(source, target_is_directory=True)\n    return "linked"\n\n\ndef unlink_one(target: Path) -> str:\n    if target.is_symlink():\n        target.unlink()\n        return "unlinked"\n    if target.is_dir() and owned_wrapper(target):\n        shutil.rmtree(target)\n        return "unlinked"\n    return "not-owned-or-missing"\n\n\ndef status(source: Path, target: Path, agent: str) -> str:\n    if target.is_symlink():\n        return "linked" if target.resolve() == source else "linked-elsewhere"\n    if agent == "grok" and target.is_dir() and owned_wrapper(target):\n        return "linked"\n    return "blocked-existing-target" if target.exists() else "missing"\n\n\ndef main() -> None:\n    parser = argparse.ArgumentParser()\n    parser.add_argument("command", choices=["link", "unlink", "status"])\n    parser.add_argument("--source", type=Path, required=True)\n    parser.add_argument("--agent", action="append", choices=sorted(AGENT_DIRS))\n    parser.add_argument("--base", type=Path, default=Path.home())\n    args = parser.parse_args()\n    agents = args.agent or list(AGENT_DIRS)\n    rows = []\n    try:\n        skill_sources = sources(args.source)\n    except ValueError as error:\n        parser.error(str(error))\n    for source in skill_sources:\n        for agent in agents:\n            target = destination(args.base.resolve(), agent, source)\n            if args.command == "link":\n                result = link_one(source, target, agent)\n            elif args.command == "unlink":\n                result = unlink_one(target)\n            else:\n                result = status(source, target, agent)\n            rows.append({"skill": source.name, "agent": agent, "target": str(target), "result": result})\n    print(json.dumps(rows, ensure_ascii=False, indent=2))\n\n\nif __name__ == "__main__":\n    main()\n',
        ".agents/skills/fde-connect/SKILL.md": "---\nname: fde-connect\ndescription: |\n  把一个 Skill 真源连接到用户指定的 Agent 技能目录，并检查连接状态。默认使用可恢复的符号链接。触发方式：/fde-connect、「连接这个 Skill」「让多个 Agent 都能用」。\n---\n\n# 连接 Skill\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- Skill 真源目录或 Skill 集合目录\n- 目标 Agent 的技能目录\n- 现有同名路径\n- scripts/link_skill.py\n\n## 必须保留的能力\n\n- 支持单个 Skill、绝对路径和 Skill 集合目录\n- 支持连接、取消和状态检查\n- 覆盖 Claude Code、Codex、通用 Agents 和 Grok\n- 普通目标目录不覆盖\n- 连接后验证 name 和目标\n\n## 执行\n\n1. 使用脚本识别单个 Skill、绝对路径或 Skill 集合目录。\n2. 列出 Claude Code、Codex、通用 Agents 和 Grok 的目标路径与现有类型。\n3. link 时为前三者创建软链，为 Grok 创建只指向真源的薄入口；存在普通目录时报告冲突。\n4. unlink 只移除本工具创建的连接；status 重新解析并核对 name 与目标。\n\n## 交付\n\n- 真源\n- 目标\n- 动作\n- 冲突\n- 验证结果\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 只修改用户确认的目标技能目录\n- 状态记录写入 `.fde/logs`\n\n## 停止条件\n\n- 目标已有普通目录时不覆盖\n- 跨机器路径不创建无效链接\n- 全局目录写入前确认\n\n## 接续\n\n- 整理完整工作台用 fde-setup\n- 风险检查用 fde-safety\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-decide/agents/openai.yaml": 'interface:\n  display_name: "决策记录"\n  short_description: "读取当前六类资产知识库，执行决策记录并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-decide 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-decide/references/acceptance.md": "# 验收\n\n- [ ] fde-decide 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：领域档案、决策事件、不可改快照、当前选择、关键假设、回填计划、模式和状态画像。\n- [ ] 能力：为长期领域建立决策记录。\n- [ ] 能力：保存带来源且写后不改的快照。\n- [ ] 能力：支持结果回填和判断变化。\n- [ ] 能力：从多次记录提炼重复模式。\n- [ ] 能力：生成当前状态画像。\n",
        ".agents/skills/fde-decide/references/atoms.jsonl": '{"id": "FDE-DECIDE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DECIDE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-decide/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-decide/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-decide 完成：为长期领域建立决策记录。",\n    "must_do": [\n      "为长期领域建立决策记录",\n      "保存带来源且写后不改的快照",\n      "支持结果回填和判断变化"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-decide 完成：生成当前状态画像。",\n    "must_do": [\n      "生成当前状态画像",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-decide 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-decide/references/capability-contract.json": '{\n  "skill": "fde-decide",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "为长期领域建立决策记录",\n    "保存带来源且写后不改的快照",\n    "支持结果回填和判断变化",\n    "从多次记录提炼重复模式",\n    "生成当前状态画像"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-decide/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-decide 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-decide/references/decision-model.md": "# 四层决策记录\n\n1. 领域：长期跟踪的范围和指标。\n2. 事件：一次具体选择及选项。\n3. 快照：当时证据、假设、选择和未选原因，写后不改。\n4. 模式：多次结果后提炼的重复信号和当前状态画像。\n\n结果通过追加回填进入事件，不覆盖快照。\n",
        ".agents/skills/fde-decide/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-decide/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-decide/references/method.md": "# 决策记录方法\n\n## 输入\n\n- 要做的决定\n- 选项\n- 证据\n- 限制\n- 已有类似记录\n\n## 步骤\n\n1. 建立领域、事件、快照、模式四层记录。\n2. 确认决策人、截止时间和可逆性，为每个选项记录事实、假设、代价和失败信号。\n3. 保存带来源且写后不改的决策快照，写下选择及未选原因。\n4. 按日期回填结果和判断变化，不覆盖旧快照。\n5. 多次记录后提炼重复模式，并生成当前状态画像。\n\n## 交付\n\n- 领域档案\n- 决策事件\n- 不可改快照\n- 当前选择\n- 关键假设\n- 回填计划\n- 模式和状态画像\n\n## 停止\n\n- 决策人不是用户时标明权限\n- 证据不足时可记录暂定选择但不能写成确定结论\n- 不可逆高风险决定先提示专业核验\n",
        ".agents/skills/fde-decide/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-decide`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-decide/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-decide` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-decision`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-decide/SKILL.md": "---\nname: fde-decide\ndescription: |\n  记录一个需要以后回看结果的选择，保存选项、证据、假设、风险和回填日期。触发方式：/fde-decide、「记下这个决定」「以后复盘这个选择」。\n---\n\n# 决策记录\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 要做的决定\n- 选项\n- 证据\n- 限制\n- 已有类似记录\n\n## 必须保留的能力\n\n- 为长期领域建立决策记录\n- 保存带来源且写后不改的快照\n- 支持结果回填和判断变化\n- 从多次记录提炼重复模式\n- 生成当前状态画像\n\n## 执行\n\n1. 建立领域、事件、快照、模式四层记录。\n2. 确认决策人、截止时间和可逆性，为每个选项记录事实、假设、代价和失败信号。\n3. 保存带来源且写后不改的决策快照，写下选择及未选原因。\n4. 按日期回填结果和判断变化，不覆盖旧快照。\n5. 多次记录后提炼重复模式，并生成当前状态画像。\n\n## 交付\n\n- 领域档案\n- 决策事件\n- 不可改快照\n- 当前选择\n- 关键假设\n- 回填计划\n- 模式和状态画像\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/state/decisions`\n- 后续结果追加，不覆盖原判断\n\n## 停止条件\n\n- 决策人不是用户时标明权限\n- 证据不足时可记录暂定选择但不能写成确定结论\n- 不可逆高风险决定先提示专业核验\n\n## 接续\n\n- 商业判断用 fde-diagnose\n- 回看旧决定用 fde-report\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-define/agents/openai.yaml": 'interface:\n  display_name: "词义校准"\n  short_description: "读取当前六类资产知识库，执行词义校准并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-define 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-define/references/acceptance.md": "# 验收\n\n- [ ] fde-define 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：用法列表、操作性定义、包含项、不包含项、反例、对当前决定的影响。\n- [ ] 能力：收集一个词在不同场景的用法。\n- [ ] 能力：换成可观察的人、动作和结果。\n- [ ] 能力：建立当前任务的暂定定义。\n- [ ] 能力：提供包含项、排除项和反例。\n",
        ".agents/skills/fde-define/references/atoms.jsonl": '{"id": "FDE-DEFINE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DEFINE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-define/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-define/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-define 完成：收集一个词在不同场景的用法。",\n    "must_do": [\n      "收集一个词在不同场景的用法",\n      "换成可观察的人、动作和结果",\n      "建立当前任务的暂定定义"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-define 完成：提供包含项、排除项和反例。",\n    "must_do": [\n      "提供包含项、排除项和反例",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-define 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-define/references/capability-contract.json": '{\n  "skill": "fde-define",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "收集一个词在不同场景的用法",\n    "换成可观察的人、动作和结果",\n    "建立当前任务的暂定定义",\n    "提供包含项、排除项和反例"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-define/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-define 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-define/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-define/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-define/references/method.md": "# 词义校准方法\n\n## 输入\n\n- 词出现的原句\n- 说话人和场景\n- 该词影响的决定\n- 知识库中已有用法\n\n## 步骤\n\n1. 收集同一个词在当前材料中的不同用法。\n2. 把每种用法换成可观察的人、动作和结果。\n3. 指出哪些用法能合并，哪些必须分开。\n4. 为当前任务选择一个暂定定义和反例。\n\n## 交付\n\n- 用法列表\n- 操作性定义\n- 包含项\n- 不包含项\n- 反例\n- 对当前决定的影响\n\n## 停止\n\n- 没有上下文时不提供唯一真定义\n- 行业术语可能变化时标记待核验\n- 不把定义争论代替实际决定\n",
        ".agents/skills/fde-define/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-define`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-define/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-define` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-deconstruct`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-define/SKILL.md": "---\nname: fde-define\ndescription: |\n  在当前业务场景里给模糊词建立可观察定义，避免不同人用同一个词说不同事情。触发方式：/fde-define、「这个词到底指什么」「先把概念说清楚」。\n---\n\n# 词义校准\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 词出现的原句\n- 说话人和场景\n- 该词影响的决定\n- 知识库中已有用法\n\n## 必须保留的能力\n\n- 收集一个词在不同场景的用法\n- 换成可观察的人、动作和结果\n- 建立当前任务的暂定定义\n- 提供包含项、排除项和反例\n\n## 执行\n\n1. 收集同一个词在当前材料中的不同用法。\n2. 把每种用法换成可观察的人、动作和结果。\n3. 指出哪些用法能合并，哪些必须分开。\n4. 为当前任务选择一个暂定定义和反例。\n\n## 交付\n\n- 用法列表\n- 操作性定义\n- 包含项\n- 不包含项\n- 反例\n- 对当前决定的影响\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户确认后写入方法库的词汇表\n\n## 停止条件\n\n- 没有上下文时不提供唯一真定义\n- 行业术语可能变化时标记待核验\n- 不把定义争论代替实际决定\n\n## 接续\n\n- 目标句仍模糊用 fde-goal\n- 问题边界不清用 fde-question\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-diagnose/agents/openai.yaml": 'interface:\n  display_name: "生意诊断"\n  short_description: "读取当前六类资产知识库，执行生意诊断并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-diagnose 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-diagnose/references/acceptance.md": "# 验收\n\n- [ ] fde-diagnose 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：一句话判断、证据表、最先处理的问题、验证动作、观察指标、暂不处理项。\n- [ ] 能力：支持单个问题问诊。\n- [ ] 能力：支持完整业务体检。\n- [ ] 能力：拆解客户、产品、证据、交付、获客和收入。\n- [ ] 能力：找到最早失效环节。\n- [ ] 能力：给出可观察的验证动作。\n",
        ".agents/skills/fde-diagnose/references/atoms.jsonl": '{"id": "FDE-DIAGNOSE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DIAGNOSE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-diagnose/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-diagnose/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-diagnose 完成：支持单个问题问诊。",\n    "must_do": [\n      "支持单个问题问诊",\n      "支持完整业务体检",\n      "拆解客户、产品、证据、交付、获客和收入"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-diagnose 完成：给出可观察的验证动作。",\n    "must_do": [\n      "给出可观察的验证动作",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-diagnose 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-diagnose/references/capability-contract.json": '{\n  "skill": "fde-diagnose",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "支持单个问题问诊",\n    "支持完整业务体检",\n    "拆解客户、产品、证据、交付、获客和收入",\n    "找到最早失效环节",\n    "给出可观察的验证动作"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-diagnose/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-diagnose 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-diagnose/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-diagnose/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-diagnose/references/method.md": "# 生意诊断方法\n\n## 输入\n\n- 产品和价格\n- 客户原话与成交记录\n- 案例结果\n- 交付方法\n- 用户当前问题\n\n## 步骤\n\n1. 把问题拆成客户、承诺、证据、交付、获客和收入六部分。\n2. 为每部分列已知事实、矛盾和缺口。\n3. 找出最早会让整条链失效的一处，不一次改所有环节。\n4. 设计一个成本可控的验证动作，并写明通过和失败信号。\n\n## 交付\n\n- 一句话判断\n- 证据表\n- 最先处理的问题\n- 验证动作\n- 观察指标\n- 暂不处理项\n\n## 停止\n\n- 数据不足时不下结论\n- 涉及法律、医疗或财务判断时要求专业核验\n- 不把心理猜测当商业事实\n",
        ".agents/skills/fde-diagnose/references/modes/product.md": "# 产品模式\n\n检查承诺、交付、证据、价格和客户异议。优先找交付链上最早失效的一处。\n",
        ".agents/skills/fde-diagnose/references/modes/strategy.md": "# 方向模式\n\n检查客户是否存在、问题是否发生、现有方案和进入成本。输出一个要验证的方向，不写长期口号。\n",
        ".agents/skills/fde-diagnose/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-diagnose`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-diagnose/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-diagnose` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-diagnosis`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-diagnose/SKILL.md": "---\nname: fde-diagnose\ndescription: |\n  用六类资产中的客户、产品、案例和交付记录诊断一个生意问题。把事实、假设和待验证项分开。触发方式：/fde-diagnose、「这个生意哪里有问题」「帮我看产品和客户」。\n---\n\n# 生意诊断\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 产品和价格\n- 客户原话与成交记录\n- 案例结果\n- 交付方法\n- 用户当前问题\n\n## 必须保留的能力\n\n- 支持单个问题问诊\n- 支持完整业务体检\n- 拆解客户、产品、证据、交付、获客和收入\n- 找到最早失效环节\n- 给出可观察的验证动作\n\n## 执行\n\n1. 把问题拆成客户、承诺、证据、交付、获客和收入六部分。\n2. 为每部分列已知事实、矛盾和缺口。\n3. 找出最早会让整条链失效的一处，不一次改所有环节。\n4. 设计一个成本可控的验证动作，并写明通过和失败信号。\n\n## 交付\n\n- 一句话判断\n- 证据表\n- 最先处理的问题\n- 验证动作\n- 观察指标\n- 暂不处理项\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后的诊断写入方法库或 `.fde/state/decisions`\n- 新客户事实回到客户库\n\n## 停止条件\n\n- 数据不足时不下结论\n- 涉及法律、医疗或财务判断时要求专业核验\n- 不把心理猜测当商业事实\n\n## 接续\n\n- 需要对标用 fde-benchmark\n- 需要记录选择用 fde-decide\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-discuss/agents/openai.yaml": 'interface:\n  display_name: "多角度讨论"\n  short_description: "读取当前六类资产知识库，执行多角度讨论并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-discuss 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-discuss/references/acceptance.md": "# 验收\n\n- [ ] fde-discuss 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：角色观点、证据、分歧、共识、待验证项、行动归属。\n- [ ] 能力：根据问题推荐职责或接受用户指定角色。\n- [ ] 能力：角色依据可验证理论和知识库事实发言。\n- [ ] 能力：支持连续多轮使用同一组角色。\n- [ ] 能力：输出共识、分歧和缺失证据。\n- [ ] 能力：支持明确结束讨论。\n",
        ".agents/skills/fde-discuss/references/atoms.jsonl": '{"id": "FDE-DISCUSS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-DISCUSS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-discuss/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-discuss/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-discuss 完成：根据问题推荐职责或接受用户指定角色。",\n    "must_do": [\n      "根据问题推荐职责或接受用户指定角色",\n      "角色依据可验证理论和知识库事实发言",\n      "支持连续多轮使用同一组角色"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-discuss 完成：支持明确结束讨论。",\n    "must_do": [\n      "支持明确结束讨论",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-discuss 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-discuss/references/capability-contract.json": '{\n  "skill": "fde-discuss",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "根据问题推荐职责或接受用户指定角色",\n    "角色依据可验证理论和知识库事实发言",\n    "支持连续多轮使用同一组角色",\n    "输出共识、分歧和缺失证据",\n    "支持明确结束讨论"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-discuss/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-discuss 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-discuss/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-discuss/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-discuss/references/method.md": "# 多角度讨论方法\n\n## 输入\n\n- 讨论问题\n- 参与角色或职责\n- 六类资产中的相关事实\n- 需要做出的决定\n\n## 步骤\n\n1. 把问题和决策标准写清楚。\n2. 用户未指定角色时，按问题推荐 3—5 个职责；用户指定时沿用。\n3. 为每个角色限定证据和关注点，逐轮提出观点、质疑和回应。\n4. 把角色组和未解决问题写入当前会话状态，后续输入继续同一组。\n5. 用户说结束时退出，并列共识、分歧、缺证据和负责动作。\n\n## 交付\n\n- 角色观点\n- 证据\n- 分歧\n- 共识\n- 待验证项\n- 行动归属\n\n## 停止\n\n- 不得声称是真人意见\n- 角色没有证据时必须承认\n- 没有决策问题时不无限发散\n",
        ".agents/skills/fde-discuss/references/session-contract.md": "# 讨论会话\n\n保存问题、角色职责、可用证据、未解决分歧和当前轮次。后续输入默认继续同一角色组。用户说结束时清理会话状态并输出总结。\n",
        ".agents/skills/fde-discuss/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-discuss`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-discuss/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-discuss` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-chatroom`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-discuss/SKILL.md": "---\nname: fde-discuss\ndescription: |\n  围绕一个具体决定建立 3—5 个角色视角，角色只使用知识库事实和公开方法，不冒充真人。触发方式：/fde-discuss、「换几个角度讨论」「模拟团队讨论」。\n---\n\n# 多角度讨论\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 讨论问题\n- 参与角色或职责\n- 六类资产中的相关事实\n- 需要做出的决定\n\n## 必须保留的能力\n\n- 根据问题推荐职责或接受用户指定角色\n- 角色依据可验证理论和知识库事实发言\n- 支持连续多轮使用同一组角色\n- 输出共识、分歧和缺失证据\n- 支持明确结束讨论\n\n## 执行\n\n1. 把问题和决策标准写清楚。\n2. 用户未指定角色时，按问题推荐 3—5 个职责；用户指定时沿用。\n3. 为每个角色限定证据和关注点，逐轮提出观点、质疑和回应。\n4. 把角色组和未解决问题写入当前会话状态，后续输入继续同一组。\n5. 用户说结束时退出，并列共识、分歧、缺证据和负责动作。\n\n## 交付\n\n- 角色观点\n- 证据\n- 分歧\n- 共识\n- 待验证项\n- 行动归属\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户需要时把结论写入决策记录\n\n## 停止条件\n\n- 不得声称是真人意见\n- 角色没有证据时必须承认\n- 没有决策问题时不无限发散\n\n## 接续\n\n- 需要正式决策用 fde-decide\n- 商业问题用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-economy/agents/openai.yaml": 'interface:\n  display_name: "交易与激励"\n  short_description: "读取当前六类资产知识库，执行交易与激励并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-economy 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-economy/references/acceptance.md": "# 验收\n\n- [ ] fde-economy 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：参与方、交换内容、激励变化、信息缺口、可观察信号、限制。\n- [ ] 能力：用分散知识视角检查信息问题。\n- [ ] 能力：用行动与选择视角检查成本和机会。\n- [ ] 能力：用经营者视角综合价格和激励。\n- [ ] 能力：形成三席对话而不冒充真人。\n- [ ] 能力：落到可观察的市场信号。\n",
        ".agents/skills/fde-economy/references/atoms.jsonl": '{"id": "FDE-ECONOMY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ECONOMY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-economy/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-economy/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-economy 完成：用分散知识视角检查信息问题。",\n    "must_do": [\n      "用分散知识视角检查信息问题",\n      "用行动与选择视角检查成本和机会",\n      "用经营者视角综合价格和激励"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-economy 完成：落到可观察的市场信号。",\n    "must_do": [\n      "落到可观察的市场信号",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-economy 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-economy/references/capability-contract.json": '{\n  "skill": "fde-economy",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "用分散知识视角检查信息问题",\n    "用行动与选择视角检查成本和机会",\n    "用经营者视角综合价格和激励",\n    "形成三席对话而不冒充真人",\n    "落到可观察的市场信号"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-economy/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-economy 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-economy/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-economy/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-economy/references/method.md": "# 交易与激励方法\n\n## 输入\n\n- 交易双方\n- 价格和成本\n- 可替代方案\n- 规则和信息\n- 实际行为\n\n## 步骤\n\n1. 建立三席：分散知识席、行动选择席、经营者席，不冒充历史人物。\n2. 分散知识席检查信息在哪些人手里、价格传递了什么。\n3. 行动选择席检查谁在选择、付出什么和放弃什么。\n4. 经营者席检查价格变化会改变谁的激励、风险和替代方案。\n5. 三席互相质疑后，列出可以观察的市场信号和理论无法直接判断的部分。\n\n## 交付\n\n- 参与方\n- 交换内容\n- 激励变化\n- 信息缺口\n- 可观察信号\n- 限制\n\n## 停止\n\n- 不把理论当成事实证据\n- 不预测具体市场价格\n- 金融投资问题要求专业核验\n",
        ".agents/skills/fde-economy/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-economy`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-economy/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-economy` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-chatroom-austrian`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-economy/references/three-chairs.md": "# 三席讨论\n\n- 分散知识席：谁掌握局部信息，价格传递什么。\n- 行动选择席：谁在选择，付出和放弃什么。\n- 经营者席：价格、成本、替代和风险怎样改变动作。\n\n三席是分析职责，不是历史人物扮演。\n",
        ".agents/skills/fde-economy/SKILL.md": "---\nname: fde-economy\ndescription: |\n  用价格、成本、选择、激励和信息差检查一个商业判断，不模拟经济学家人格。触发方式：/fde-economy、「从交易角度看」「分析价格和激励」。\n---\n\n# 交易与激励\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 交易双方\n- 价格和成本\n- 可替代方案\n- 规则和信息\n- 实际行为\n\n## 必须保留的能力\n\n- 用分散知识视角检查信息问题\n- 用行动与选择视角检查成本和机会\n- 用经营者视角综合价格和激励\n- 形成三席对话而不冒充真人\n- 落到可观察的市场信号\n\n## 执行\n\n1. 建立三席：分散知识席、行动选择席、经营者席，不冒充历史人物。\n2. 分散知识席检查信息在哪些人手里、价格传递了什么。\n3. 行动选择席检查谁在选择、付出什么和放弃什么。\n4. 经营者席检查价格变化会改变谁的激励、风险和替代方案。\n5. 三席互相质疑后，列出可以观察的市场信号和理论无法直接判断的部分。\n\n## 交付\n\n- 参与方\n- 交换内容\n- 激励变化\n- 信息缺口\n- 可观察信号\n- 限制\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后的分析可写入方法库\n\n## 停止条件\n\n- 不把理论当成事实证据\n- 不预测具体市场价格\n- 金融投资问题要求专业核验\n\n## 接续\n\n- 落到具体生意用 fde-diagnose\n- 概念不清用 fde-define\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-export/agents/openai.yaml": 'interface:\n  display_name: "导出聊天"\n  short_description: "读取当前六类资产知识库，执行导出聊天并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-export 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-export/references/acceptance.md": "# 验收\n\n- [ ] fde-export 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：导出文件列表、会话时间范围、消息数量、未能解析的记录。\n- [ ] 能力：列出本地项目和会话。\n- [ ] 能力：支持单选、多选、最近记录和批量选择。\n- [ ] 能力：导出用户与助手的可读 Markdown。\n- [ ] 能力：过滤工具日志并保留时间和源文件。\n",
        ".agents/skills/fde-export/references/atoms.jsonl": '{"id": "FDE-EXPORT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-EXPORT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-export/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-export/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-export 完成：列出本地项目和会话。",\n    "must_do": [\n      "列出本地项目和会话",\n      "支持单选、多选、最近记录和批量选择",\n      "导出用户与助手的可读 Markdown"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-export 完成：过滤工具日志并保留时间和源文件。",\n    "must_do": [\n      "过滤工具日志并保留时间和源文件",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-export 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-export/references/capability-contract.json": '{\n  "skill": "fde-export",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "列出本地项目和会话",\n    "支持单选、多选、最近记录和批量选择",\n    "导出用户与助手的可读 Markdown",\n    "过滤工具日志并保留时间和源文件"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-export/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-export 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-export/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-export/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-export/references/method.md": "# 导出聊天方法\n\n## 输入\n\n- 用户指定的 Agent 和项目\n- 本地会话索引\n- 用户选择的会话范围\n- `scripts/export_chat.py`\n\n## 步骤\n\n1. 先识别宿主和本地会话位置，不扫描无关目录。\n2. 使用 `scripts/export_chat.py list` 列出日期、项目和首条消息，让用户选择。\n3. 支持单选、多选、最近记录和全部；导出前显示会话数、目标目录和隐私范围。\n4. 使用脚本只提取用户与助手可读文本，生成 Markdown 和来源清单。\n\n## 交付\n\n- 导出文件列表\n- 会话时间范围\n- 消息数量\n- 未能解析的记录\n\n## 停止\n\n- 宿主格式未知时不猜解析规则\n- 未获确认时不批量导出\n- 含敏感信息时先提醒用户选择范围\n",
        ".agents/skills/fde-export/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-export`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-export/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-export` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/导出聊天记录/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-export/scripts/export_chat.py": '#!/usr/bin/env python3\n"""List local JSONL conversations and export readable user/assistant text."""\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nfrom datetime import datetime\nfrom pathlib import Path\n\n\ndef text_from_content(content) -> str:\n    if isinstance(content, str):\n        return content.strip()\n    if isinstance(content, list):\n        values = []\n        for item in content:\n            if isinstance(item, str):\n                values.append(item)\n            elif isinstance(item, dict) and item.get("type") in {"text", "input_text", "output_text"}:\n                values.append(str(item.get("text", "")))\n        return "\\n".join(value for value in values if value).strip()\n    return ""\n\n\ndef extract(obj: dict) -> tuple[str, str, str] | None:\n    timestamp = str(obj.get("timestamp") or obj.get("created_at") or "")\n    message = obj.get("message") if isinstance(obj.get("message"), dict) else obj\n    role = message.get("role") or obj.get("type")\n    content = message.get("content")\n    if obj.get("type") == "response_item" and isinstance(obj.get("payload"), dict):\n        payload = obj["payload"]\n        if payload.get("type") == "message" or "role" in payload:\n            role = payload.get("role")\n            content = payload.get("content")\n    if role not in {"user", "assistant"}:\n        return None\n    value = text_from_content(content)\n    return (role, value, timestamp) if value else None\n\n\ndef read_messages(path: Path) -> list[tuple[str, str, str]]:\n    messages = []\n    for line in path.read_text(encoding="utf-8", errors="replace").splitlines():\n        try:\n            obj = json.loads(line)\n        except json.JSONDecodeError:\n            continue\n        if isinstance(obj, dict):\n            item = extract(obj)\n            if item:\n                messages.append(item)\n    return messages\n\n\ndef discover(root: Path) -> list[Path]:\n    return sorted(root.rglob("*.jsonl"), key=lambda path: path.stat().st_mtime, reverse=True)\n\n\ndef summary(path: Path, root: Path) -> dict:\n    messages = read_messages(path)\n    first = messages[0][1].replace("\\n", " ")[:100] if messages else ""\n    return {\n        "source": str(path),\n        "relative": str(path.relative_to(root)),\n        "modified": datetime.fromtimestamp(path.stat().st_mtime).isoformat(timespec="seconds"),\n        "messages": len(messages),\n        "first_message": first,\n    }\n\n\ndef export(paths: list[Path], output: Path) -> None:\n    sections = ["# 聊天导出", ""]\n    total = 0\n    for path in paths:\n        messages = read_messages(path)\n        total += len(messages)\n        sections.extend([f"## {path.name}", "", f"来源：`{path}`", ""])\n        for role, content, timestamp in messages:\n            label = "用户" if role == "user" else "助手"\n            suffix = f" · {timestamp}" if timestamp else ""\n            sections.extend([f"### {label}{suffix}", "", content, ""])\n    output.parent.mkdir(parents=True, exist_ok=True)\n    output.write_text("\\n".join(sections).rstrip() + "\\n", encoding="utf-8")\n    print(json.dumps({"sources": len(paths), "messages": total, "output": str(output)}, ensure_ascii=False))\n\n\ndef main() -> None:\n    parser = argparse.ArgumentParser()\n    sub = parser.add_subparsers(dest="command", required=True)\n    list_parser = sub.add_parser("list")\n    list_parser.add_argument("--root", type=Path, required=True)\n    export_parser = sub.add_parser("export")\n    export_parser.add_argument("--root", type=Path, required=True)\n    export_parser.add_argument("--source", action="append", type=Path)\n    export_parser.add_argument("--recent", type=int)\n    export_parser.add_argument("--all", action="store_true")\n    export_parser.add_argument("--output", type=Path, required=True)\n    args = parser.parse_args()\n    files = discover(args.root.expanduser().resolve())\n    if args.command == "list":\n        print(json.dumps([summary(path, args.root.resolve()) for path in files], ensure_ascii=False, indent=2))\n        return\n    if args.source:\n        chosen = [path.expanduser().resolve() for path in args.source]\n    elif args.recent:\n        chosen = files[: args.recent]\n    elif args.all:\n        chosen = files\n    else:\n        parser.error("choose --source, --recent or --all")\n    missing = [str(path) for path in chosen if not path.is_file()]\n    if missing:\n        parser.error("missing source: " + ", ".join(missing))\n    export(chosen, args.output.resolve())\n\n\nif __name__ == "__main__":\n    main()\n',
        ".agents/skills/fde-export/SKILL.md": "---\nname: fde-export\ndescription: |\n  把用户明确选择的本地 Agent 会话导出为 Markdown，过滤工具日志并保留时间和来源。适用于导出 Claude Code 或当前宿主支持的聊天记录。触发方式：/fde-export、「导出聊天记录」。\n---\n\n# 导出聊天\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户指定的 Agent 和项目\n- 本地会话索引\n- 用户选择的会话范围\n- `scripts/export_chat.py`\n\n## 必须保留的能力\n\n- 列出本地项目和会话\n- 支持单选、多选、最近记录和批量选择\n- 导出用户与助手的可读 Markdown\n- 过滤工具日志并保留时间和源文件\n\n## 执行\n\n1. 先识别宿主和本地会话位置，不扫描无关目录。\n2. 使用 `scripts/export_chat.py list` 列出日期、项目和首条消息，让用户选择。\n3. 支持单选、多选、最近记录和全部；导出前显示会话数、目标目录和隐私范围。\n4. 使用脚本只提取用户与助手可读文本，生成 Markdown 和来源清单。\n\n## 交付\n\n- 导出文件列表\n- 会话时间范围\n- 消息数量\n- 未能解析的记录\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认写入知识库收件箱的聊天导出目录\n- 不改动本地会话源文件\n\n## 停止条件\n\n- 宿主格式未知时不猜解析规则\n- 未获确认时不批量导出\n- 含敏感信息时先提醒用户选择范围\n\n## 接续\n\n- 导出后用 fde-ingest 入库\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-flow/agents/openai.yaml": 'interface:\n  display_name: "口播衔接"\n  short_description: "读取当前六类资产知识库，执行口播衔接并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-flow 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-flow/references/acceptance.md": "# 验收\n\n- [ ] fde-flow 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：段落功能表、断点、重复、最小调整、调整后顺序。\n- [ ] 能力：检查段落间承接。\n- [ ] 能力：检查段落内信息密度。\n- [ ] 能力：检查句子口播流畅度。\n- [ ] 能力：标出可能划走的位置。\n- [ ] 能力：诊断后可按确认生成标记式改稿。\n",
        ".agents/skills/fde-flow/references/atoms.jsonl": '{"id": "FDE-FLOW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FLOW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-flow/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-flow/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-flow 完成：检查段落间承接。",\n    "must_do": [\n      "检查段落间承接",\n      "检查段落内信息密度",\n      "检查句子口播流畅度"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-flow 完成：诊断后可按确认生成标记式改稿。",\n    "must_do": [\n      "诊断后可按确认生成标记式改稿",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-flow 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-flow/references/capability-contract.json": '{\n  "skill": "fde-flow",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "检查段落间承接",\n    "检查段落内信息密度",\n    "检查句子口播流畅度",\n    "标出可能划走的位置",\n    "诊断后可按确认生成标记式改稿"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-flow/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-flow 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-flow/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-flow/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-flow/references/method.md": "# 口播衔接方法\n\n## 输入\n\n- 逐字稿\n- 目标时长\n- 核心观点\n- 必须保留的原话\n\n## 步骤\n\n1. 按听众能感知的意思分段。\n2. 为每段标出作用：提出、解释、证明、转折或行动。\n3. 找出无承接、重复证明、概念跳跃和单段过载。\n4. 给出删、移、补一句的最小调整。\n\n## 交付\n\n- 段落功能表\n- 断点\n- 重复\n- 最小调整\n- 调整后顺序\n\n## 停止\n\n- 核心观点不清时先停止结构调整\n- 不把口语全部改成书面语\n- 不删除用户要求保留的原话\n",
        ".agents/skills/fde-flow/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-flow`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-flow/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-flow` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-script-flow`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-flow/SKILL.md": "---\nname: fde-flow\ndescription: |\n  检查口播稿每一段是否承接上一段并推动下一段，找出跳步、重复和信息拥堵。触发方式：/fde-flow、「稿子顺不顺」「哪里会划走」。\n---\n\n# 口播衔接\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 逐字稿\n- 目标时长\n- 核心观点\n- 必须保留的原话\n\n## 必须保留的能力\n\n- 检查段落间承接\n- 检查段落内信息密度\n- 检查句子口播流畅度\n- 标出可能划走的位置\n- 诊断后可按确认生成标记式改稿\n\n## 执行\n\n1. 按听众能感知的意思分段。\n2. 为每段标出作用：提出、解释、证明、转折或行动。\n3. 找出无承接、重复证明、概念跳跃和单段过载。\n4. 给出删、移、补一句的最小调整。\n\n## 交付\n\n- 段落功能表\n- 断点\n- 重复\n- 最小调整\n- 调整后顺序\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认只出标记稿；用户确认后另存修改版\n\n## 停止条件\n\n- 核心观点不清时先停止结构调整\n- 不把口语全部改成书面语\n- 不删除用户要求保留的原话\n\n## 接续\n\n- 开头用 fde-hook\n- 整体审核用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-focus/agents/openai.yaml": 'interface:\n  display_name: "优先事项"\n  short_description: "读取当前六类资产知识库，执行优先事项并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-focus 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-focus/references/acceptance.md": "# 验收\n\n- [ ] fde-focus 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前约束、主动作、维护动作、暂停清单、复查条件。\n- [ ] 能力：识别贪快和绕开摩擦的做法。\n- [ ] 能力：区分能积累资产的慢动作与低效忙碌。\n- [ ] 能力：说明摩擦会留下什么可复用资产。\n- [ ] 能力：安排一个长期主动作和停止清单。\n",
        ".agents/skills/fde-focus/references/asset-friction.md": "# 摩擦与资产\n\n慢动作必须留下可复用结果，才算资产积累。检查它是否留下客户证据、交付标准、案例、方法、渠道关系或可复用内容。只增加耗时、不留下结果的动作列为低效。\n",
        ".agents/skills/fde-focus/references/atoms.jsonl": '{"id": "FDE-FOCUS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FOCUS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-focus/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-focus/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-focus 完成：识别贪快和绕开摩擦的做法。",\n    "must_do": [\n      "识别贪快和绕开摩擦的做法",\n      "区分能积累资产的慢动作与低效忙碌",\n      "说明摩擦会留下什么可复用资产"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-focus 完成：安排一个长期主动作和停止清单。",\n    "must_do": [\n      "安排一个长期主动作和停止清单",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-focus 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-focus/references/capability-contract.json": '{\n  "skill": "fde-focus",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "识别贪快和绕开摩擦的做法",\n    "区分能积累资产的慢动作与低效忙碌",\n    "说明摩擦会留下什么可复用资产",\n    "安排一个长期主动作和停止清单"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-focus/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-focus 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-focus/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-focus/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-focus/references/method.md": "# 优先事项方法\n\n## 输入\n\n- 当前目标\n- 任务列表\n- 依赖关系\n- 时间与资源\n- 最近结果\n\n## 步骤\n\n1. 删除与当前目标无关的任务。\n2. 标出会阻塞其他任务的前置项。\n3. 比较每项的结果信号、成本和可逆性。\n4. 只保留一个主动作、一个维护动作和一个观察项。\n\n## 交付\n\n- 当前约束\n- 主动作\n- 维护动作\n- 暂停清单\n- 复查条件\n\n## 停止\n\n- 目标不清时不排序\n- 紧急合规或安全问题优先处理\n- 不把所有任务都标成重点\n",
        ".agents/skills/fde-focus/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-focus`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-focus/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-focus` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-slowisfast`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-focus/SKILL.md": "---\nname: fde-focus\ndescription: |\n  从多个任务中找出当前约束，决定做什么、暂缓什么和观察什么。触发方式：/fde-focus、「事情太多」「现在先做哪个」。\n---\n\n# 优先事项\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前目标\n- 任务列表\n- 依赖关系\n- 时间与资源\n- 最近结果\n\n## 必须保留的能力\n\n- 识别贪快和绕开摩擦的做法\n- 区分能积累资产的慢动作与低效忙碌\n- 说明摩擦会留下什么可复用资产\n- 安排一个长期主动作和停止清单\n\n## 执行\n\n1. 删除与当前目标无关的任务。\n2. 标出会阻塞其他任务的前置项。\n3. 比较每项的结果信号、成本和可逆性。\n4. 只保留一个主动作、一个维护动作和一个观察项。\n\n## 交付\n\n- 当前约束\n- 主动作\n- 维护动作\n- 暂停清单\n- 复查条件\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后写入 `.fde/state` 的当前计划\n\n## 停止条件\n\n- 目标不清时不排序\n- 紧急合规或安全问题优先处理\n- 不把所有任务都标成重点\n\n## 接续\n\n- 目标不清用 fde-goal\n- 动作推不动用 fde-action\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-format/agents/openai.yaml": 'interface:\n  display_name: "公众号排版"\n  short_description: "读取当前六类资产知识库，执行公众号排版并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-format 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-format/references/acceptance.md": "# 验收\n\n- [ ] fde-format 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：HTML 文件、预览说明、资源缺失、正文差异清单。\n- [ ] 能力：把 Markdown 转成微信公众号可粘贴 HTML。\n- [ ] 能力：提供 15 个自有排版主题。\n- [ ] 能力：支持主题预览和正式生成。\n- [ ] 能力：保留正文内容。\n- [ ] 能力：检查图片、链接和移动端显示。\n",
        ".agents/skills/fde-format/references/atoms.jsonl": '{"id": "FDE-FORMAT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-FORMAT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-format/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-format/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-format 完成：把 Markdown 转成微信公众号可粘贴 HTML。",\n    "must_do": [\n      "把 Markdown 转成微信公众号可粘贴 HTML",\n      "提供 15 个自有排版主题",\n      "支持主题预览和正式生成"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-format 完成：检查图片、链接和移动端显示。",\n    "must_do": [\n      "检查图片、链接和移动端显示",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-format 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-format/references/capability-contract.json": '{\n  "skill": "fde-format",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把 Markdown 转成微信公众号可粘贴 HTML",\n    "提供 15 个自有排版主题",\n    "支持主题预览和正式生成",\n    "保留正文内容",\n    "检查图片、链接和移动端显示"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-format/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-format 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-format/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-format/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-format/references/method.md": "# 公众号排版方法\n\n## 输入\n\n- 已确认 Markdown\n- 排版主题选择\n- 图片和链接\n- 公众号发布限制\n- references/style-themes.json\n- scripts/render_wechat.py\n\n## 步骤\n\n1. 先验证稿件状态和资源路径。\n2. 从 15 个自有主题中选择，或先生成主题预览。\n3. 使用 `scripts/render_wechat.py` 转换标题、段落、引用、列表、图片和链接。\n4. 生成可粘贴 HTML，检查移动端宽度和复制兼容。\n5. 列出未找到的图片、外链和转换差异。\n\n## 交付\n\n- HTML 文件\n- 预览说明\n- 资源缺失\n- 正文差异清单\n\n## 停止\n\n- 稿件未确认时不进入待发布\n- 不修改正文观点\n- 外部样式和脚本不写入公众号 HTML\n",
        ".agents/skills/fde-format/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-format`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-format/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-format` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-wechat-html`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-format/references/style-themes.json": '[\n  {\n    "id": "clear",\n    "label": "清楚",\n    "tokens": {\n      "text_color": "#1f2937",\n      "background": "#ffffff",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "memo",\n    "label": "备忘",\n    "tokens": {\n      "text_color": "#44403c",\n      "background": "#fffdf8",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "ledger",\n    "label": "台账",\n    "tokens": {\n      "text_color": "#243447",\n      "background": "#f8fafc",\n      "font": "mono",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "field",\n    "label": "现场",\n    "tokens": {\n      "text_color": "#3f3f2f",\n      "background": "#fbfaf4",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "studio",\n    "label": "工作室",\n    "tokens": {\n      "text_color": "#27272a",\n      "background": "#ffffff",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "slate",\n    "label": "深色",\n    "tokens": {\n      "text_color": "#e5e7eb",\n      "background": "#18181b",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "paper",\n    "label": "纸张",\n    "tokens": {\n      "text_color": "#292524",\n      "background": "#fffaf0",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "signal",\n    "label": "信号",\n    "tokens": {\n      "text_color": "#172554",\n      "background": "#eff6ff",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "calm",\n    "label": "留白",\n    "tokens": {\n      "text_color": "#374151",\n      "background": "#ffffff",\n      "font": "serif",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "brief",\n    "label": "简报",\n    "tokens": {\n      "text_color": "#111827",\n      "background": "#f9fafb",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "lesson",\n    "label": "讲义",\n    "tokens": {\n      "text_color": "#312e81",\n      "background": "#fafafa",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "soft"\n    }\n  },\n  {\n    "id": "case",\n    "label": "案例",\n    "tokens": {\n      "text_color": "#7c2d12",\n      "background": "#fff7ed",\n      "font": "serif",\n      "spacing": "normal",\n      "accent": "line"\n    }\n  },\n  {\n    "id": "launch",\n    "label": "发布",\n    "tokens": {\n      "text_color": "#7f1d1d",\n      "background": "#fffafa",\n      "font": "sans",\n      "spacing": "compact",\n      "accent": "block"\n    }\n  },\n  {\n    "id": "qa",\n    "label": "问答",\n    "tokens": {\n      "text_color": "#14532d",\n      "background": "#f0fdf4",\n      "font": "sans",\n      "spacing": "normal",\n      "accent": "box"\n    }\n  },\n  {\n    "id": "archive",\n    "label": "档案",\n    "tokens": {\n      "text_color": "#334155",\n      "background": "#f8fafc",\n      "font": "mono",\n      "spacing": "loose",\n      "accent": "line"\n    }\n  }\n]\n',
        ".agents/skills/fde-format/scripts/render_wechat.py": `#!/usr/bin/env python3
"""Render a small Markdown subset as self-contained WeChat HTML."""

from __future__ import annotations

import argparse
import html
import json
import re
from pathlib import Path


HERE = Path(__file__).resolve().parent
THEMES = HERE.parent / "references" / "style-themes.json"
FONTS = {
    "sans": "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    "serif": "Georgia,'Noto Serif SC',serif",
    "mono": "ui-monospace,SFMono-Regular,Menlo,monospace",
}
SPACING = {"compact": (1.6, "0.65em"), "normal": (1.75, "0.9em"), "loose": (1.95, "1.15em")}


def load_themes() -> dict[str, dict]:
    return {item["id"]: item for item in json.loads(THEMES.read_text(encoding="utf-8"))}


def inline(value: str) -> str:
    value = html.escape(value, quote=True)
    value = re.sub(r"!\\[([^]]*)\\]\\(([^)]+)\\)", r'<img alt="\\1" src="\\2" style="max-width:100%;height:auto;" />', value)
    value = re.sub(r"\\[([^]]+)\\]\\(([^)]+)\\)", r'<a href="\\2" style="color:inherit;text-decoration:underline;">\\1</a>', value)
    value = re.sub(r"\\*\\*([^*]+)\\*\\*", r"<strong>\\1</strong>", value)
    value = re.sub(r"\`([^\`]+)\`", r"<code>\\1</code>", value)
    return value


def render(markdown: str, theme: dict) -> str:
    tokens = theme["tokens"]
    line_height, gap = SPACING[tokens["spacing"]]
    font = FONTS[tokens["font"]]
    accent = {"line": "border-left:3px solid currentColor", "soft": "border:1px solid #d1d5db", "box": "border:1px solid currentColor", "block": "background:rgba(127,127,127,.10)"}[tokens["accent"]]
    parts: list[str] = []
    in_code = False
    code_lines: list[str] = []
    list_kind = None

    def close_list() -> None:
        nonlocal list_kind
        if list_kind:
            parts.append(f"</{list_kind}>")
            list_kind = None

    for raw in markdown.splitlines():
        line = raw.rstrip()
        if line.startswith("\`\`\`"):
            close_list()
            if in_code:
                parts.append(f'<pre style="overflow:auto;padding:12px;{accent};"><code>{html.escape(chr(10).join(code_lines))}</code></pre>')
                code_lines = []
            in_code = not in_code
            continue
        if in_code:
            code_lines.append(line)
            continue
        if not line:
            close_list()
            continue
        heading = re.match(r"^(#{1,3})\\s+(.+)$", line)
        if heading:
            close_list()
            level = len(heading.group(1))
            size = {1: "1.55em", 2: "1.3em", 3: "1.12em"}[level]
            parts.append(f'<h{level} style="font-size:{size};margin:{gap} 0 .45em;">{inline(heading.group(2))}</h{level}>')
            continue
        item = re.match(r"^\\s*([-*]|\\d+\\.)\\s+(.+)$", line)
        if item:
            kind = "ul" if item.group(1) in {"-", "*"} else "ol"
            if list_kind != kind:
                close_list()
                parts.append(f'<{kind} style="padding-left:1.4em;margin:{gap} 0;">')
                list_kind = kind
            parts.append(f"<li>{inline(item.group(2))}</li>")
            continue
        close_list()
        if line.startswith("> "):
            parts.append(f'<blockquote style="margin:{gap} 0;padding:.6em 1em;{accent};">{inline(line[2:])}</blockquote>')
        else:
            parts.append(f'<p style="margin:{gap} 0;">{inline(line)}</p>')
    close_list()
    if in_code:
        parts.append(f"<pre><code>{html.escape(chr(10).join(code_lines))}</code></pre>")
    body = "\\n".join(parts)
    return (
        f'<section data-fde-theme="{theme["id"]}" style="box-sizing:border-box;max-width:100%;'
        f'padding:16px;color:{tokens["text_color"]};background:{tokens["background"]};'
        f'font-family:{font};font-size:16px;line-height:{line_height};word-break:break-word;">\\n{body}\\n</section>\\n'
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", type=Path)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--theme", default="clear")
    parser.add_argument("--list-themes", action="store_true")
    args = parser.parse_args()
    themes = load_themes()
    if args.list_themes:
        print(json.dumps([{"id": value["id"], "label": value["label"]} for value in themes.values()], ensure_ascii=False, indent=2))
        return
    if not args.input or not args.output:
        parser.error("--input and --output are required")
    if args.theme not in themes:
        parser.error(f"unknown theme: {args.theme}")
    result = render(args.input.read_text(encoding="utf-8"), themes[args.theme])
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(result, encoding="utf-8")
    print(json.dumps({"theme": args.theme, "output": str(args.output)}, ensure_ascii=False))


if __name__ == "__main__":
    main()
`,
        ".agents/skills/fde-format/SKILL.md": "---\nname: fde-format\ndescription: |\n  把已确认的 Markdown 稿转成微信公众号可粘贴 HTML，保持正文不变并检查标题、图片和链接。触发方式：/fde-format、「排成公众号」「生成微信 HTML」。\n---\n\n# 公众号排版\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 已确认 Markdown\n- 排版主题选择\n- 图片和链接\n- 公众号发布限制\n- references/style-themes.json\n- scripts/render_wechat.py\n\n## 必须保留的能力\n\n- 把 Markdown 转成微信公众号可粘贴 HTML\n- 提供 15 个自有排版主题\n- 支持主题预览和正式生成\n- 保留正文内容\n- 检查图片、链接和移动端显示\n\n## 执行\n\n1. 先验证稿件状态和资源路径。\n2. 从 15 个自有主题中选择，或先生成主题预览。\n3. 使用 `scripts/render_wechat.py` 转换标题、段落、引用、列表、图片和链接。\n4. 生成可粘贴 HTML，检查移动端宽度和复制兼容。\n5. 列出未找到的图片、外链和转换差异。\n\n## 交付\n\n- HTML 文件\n- 预览说明\n- 资源缺失\n- 正文差异清单\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入内容库的 `待发布`，不覆盖 Markdown 原稿\n\n## 停止条件\n\n- 稿件未确认时不进入待发布\n- 不修改正文观点\n- 外部样式和脚本不写入公众号 HTML\n\n## 接续\n\n- 内容没审核用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-goal/agents/openai.yaml": 'interface:\n  display_name: "目标说明"\n  short_description: "读取当前六类资产知识库，执行目标说明并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-goal 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-goal/references/acceptance.md": "# 验收\n\n- [ ] fde-goal 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原目标、可检查目标、验收证据、边界、第一步。\n- [ ] 能力：保留用户原目标。\n- [ ] 能力：找出无法检查的词。\n- [ ] 能力：改写为对象、结果、边界、证据和时间。\n- [ ] 能力：给出验收方式和第一步。\n",
        ".agents/skills/fde-goal/references/atoms.jsonl": '{"id": "FDE-GOAL-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-GOAL-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-goal/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-goal/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-goal 完成：保留用户原目标。",\n    "must_do": [\n      "保留用户原目标",\n      "找出无法检查的词",\n      "改写为对象、结果、边界、证据和时间"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-goal 完成：给出验收方式和第一步。",\n    "must_do": [\n      "给出验收方式和第一步",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-goal 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-goal/references/capability-contract.json": '{\n  "skill": "fde-goal",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "保留用户原目标",\n    "找出无法检查的词",\n    "改写为对象、结果、边界、证据和时间",\n    "给出验收方式和第一步"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-goal/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-goal 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-goal/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-goal/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-goal/references/method.md": "# 目标说明方法\n\n## 输入\n\n- 用户原话\n- 当前业务阶段\n- 已有资源\n- 不能接受的结果\n\n## 步骤\n\n1. 保留原句，标出无法检查的词。\n2. 追问想让谁发生什么变化，以及用什么证据确认。\n3. 写出范围、截止点、资源和不做事项。\n4. 生成最小目标版本和验收方式。\n\n## 交付\n\n- 原目标\n- 可检查目标\n- 验收证据\n- 边界\n- 第一步\n\n## 停止\n\n- 用户不接受量化时用可观察事实替代\n- 不替用户决定价值取舍\n- 目标与事实冲突时标出\n",
        ".agents/skills/fde-goal/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-goal`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-goal/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-goal` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-goal`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-goal/SKILL.md": "---\nname: fde-goal\ndescription: |\n  把模糊愿望改成可检查的结果、对象、边界、证据和时间。触发方式：/fde-goal、「把目标说清楚」「我想做个人 IP」。\n---\n\n# 目标说明\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户原话\n- 当前业务阶段\n- 已有资源\n- 不能接受的结果\n\n## 必须保留的能力\n\n- 保留用户原目标\n- 找出无法检查的词\n- 改写为对象、结果、边界、证据和时间\n- 给出验收方式和第一步\n\n## 执行\n\n1. 保留原句，标出无法检查的词。\n2. 追问想让谁发生什么变化，以及用什么证据确认。\n3. 写出范围、截止点、资源和不做事项。\n4. 生成最小目标版本和验收方式。\n\n## 交付\n\n- 原目标\n- 可检查目标\n- 验收证据\n- 边界\n- 第一步\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户确认后写入项目状态或决策记录\n\n## 停止条件\n\n- 用户不接受量化时用可观察事实替代\n- 不替用户决定价值取舍\n- 目标与事实冲突时标出\n\n## 接续\n\n- 执行受阻用 fde-action\n- 需要拆问题用 fde-question\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-health/agents/openai.yaml": 'interface:\n  display_name: "知识库体检"\n  short_description: "读取当前六类资产知识库，执行知识库体检并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-health 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-health/references/acceptance.md": "# 验收\n\n- [ ] fde-health 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：能否使用、问题路径和证据、影响、建议动作、等待确认的修正。\n- [ ] 能力：核对知识库配置与实际目录。\n- [ ] 能力：核对 Agent 规则文件、Skill 和项目状态。\n- [ ] 能力：发现路径、数据、版本和状态冲突。\n- [ ] 能力：先报告，确认后再修正。\n",
        ".agents/skills/fde-health/references/atoms.jsonl": '{"id": "FDE-HEALTH-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HEALTH-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-health/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-health/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-health 完成：核对知识库配置与实际目录。",\n    "must_do": [\n      "核对知识库配置与实际目录",\n      "核对 Agent 规则文件、Skill 和项目状态",\n      "发现路径、数据、版本和状态冲突"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-health 完成：先报告，确认后再修正。",\n    "must_do": [\n      "先报告，确认后再修正",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-health 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-health/references/capability-contract.json": '{\n  "skill": "fde-health",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "核对知识库配置与实际目录",\n    "核对 Agent 规则文件、Skill 和项目状态",\n    "发现路径、数据、版本和状态冲突",\n    "先报告，确认后再修正"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-health/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-health 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-health/references/health-dimensions.md": "# 体检范围\n\n检查配置与目录、资产来源、收件箱流转、内容阶段、运行状态、AGENTS.md 与 CLAUDE.md、Skill 清单、业务数字和版本。事实冲突只报告，不自动选边。\n",
        ".agents/skills/fde-health/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-health/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-health/references/method.md": "# 知识库体检方法\n\n## 输入\n\n- `.fde/config.yaml`\n- 六类资产路径\n- 收件箱和内容阶段\n- `.fde` 运行目录\n- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单\n\n## 步骤\n\n1. 验证配置字段、路径边界和目录可读性。\n2. 统计六类资产的文件数、来源覆盖和最近更新。\n3. 对照 AGENTS.md、CLAUDE.md、Skill 目录和实际项目状态，找路径、版本、数字和状态冲突。\n4. 检查待处理材料、重复入库、内容阶段冲突和运行文件越界。\n5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。\n\n## 交付\n\n- 能否使用\n- 问题路径和证据\n- 影响\n- 建议动作\n- 等待确认的修正\n\n## 停止\n\n- 配置不存在时停止并询问根目录\n- 业务事实冲突时不自动选边\n- 不把空库当成损坏\n",
        ".agents/skills/fde-health/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-health`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-health/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-health` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/CLAUDE体检/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-health/SKILL.md": "---\nname: fde-health\ndescription: |\n  检查六类资产库的配置、目录、来源、收件箱、内容阶段、运行状态和已安装 fde-*。默认只报告，确认后才修目录。触发方式：/fde-health、「知识库体检」「检查知识库」。\n---\n\n# 知识库体检\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/config.yaml`\n- 六类资产路径\n- 收件箱和内容阶段\n- `.fde` 运行目录\n- AGENTS.md、CLAUDE.md 和已安装 fde-* 清单\n\n## 必须保留的能力\n\n- 核对知识库配置与实际目录\n- 核对 Agent 规则文件、Skill 和项目状态\n- 发现路径、数据、版本和状态冲突\n- 先报告，确认后再修正\n\n## 执行\n\n1. 验证配置字段、路径边界和目录可读性。\n2. 统计六类资产的文件数、来源覆盖和最近更新。\n3. 对照 AGENTS.md、CLAUDE.md、Skill 目录和实际项目状态，找路径、版本、数字和状态冲突。\n4. 检查待处理材料、重复入库、内容阶段冲突和运行文件越界。\n5. 把问题分为阻塞、要处理和提醒，只给出有证据的问题。\n\n## 交付\n\n- 能否使用\n- 问题路径和证据\n- 影响\n- 建议动作\n- 等待确认的修正\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 默认不写；确认后只创建缺失空目录或修正明确的路径\n\n## 停止条件\n\n- 配置不存在时停止并询问根目录\n- 业务事实冲突时不自动选边\n- 不把空库当成损坏\n\n## 接续\n\n- 空库用 fde-interview\n- 积压材料用 fde-ingest\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-hook/agents/openai.yaml": 'interface:\n  display_name: "内容开头"\n  short_description: "读取当前六类资产知识库，执行内容开头并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-hook 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-hook/references/acceptance.md": "# 验收\n\n- [ ] fde-hook 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：问题诊断、3 个开头、选择建议、承接句、来源。\n- [ ] 能力：诊断现有开头问题。\n- [ ] 能力：生成多个不同切入版本。\n- [ ] 能力：说明适合的读者和承接方式。\n- [ ] 能力：不制造正文没有的承诺。\n",
        ".agents/skills/fde-hook/references/atoms.jsonl": '{"id": "FDE-HOOK-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-HOOK-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-hook/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-hook/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-hook 完成：诊断现有开头问题。",\n    "must_do": [\n      "诊断现有开头问题",\n      "生成多个不同切入版本",\n      "说明适合的读者和承接方式"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-hook 完成：不制造正文没有的承诺。",\n    "must_do": [\n      "不制造正文没有的承诺",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-hook 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-hook/references/capability-contract.json": '{\n  "skill": "fde-hook",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "诊断现有开头问题",\n    "生成多个不同切入版本",\n    "说明适合的读者和承接方式",\n    "不制造正文没有的承诺"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-hook/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-hook 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-hook/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-hook/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-hook/references/method.md": "# 内容开头方法\n\n## 输入\n\n- 现有开头\n- 选题\n- 客户原话\n- 案例冲突\n- 平台和时长\n\n## 步骤\n\n1. 判断开头是否说明对象、问题和继续看的理由。\n2. 找出最强的真实冲突、结果或原话。\n3. 生成 3 个不同切入版本，不制造假数字和假危机。\n4. 说明每版适合的读者和后文承接。\n\n## 交付\n\n- 问题诊断\n- 3 个开头\n- 选择建议\n- 承接句\n- 来源\n\n## 停止\n\n- 选题本身不成立时停止改开头\n- 没有证据时不用夸张结果\n- 不生成与后文无关的钩子\n",
        ".agents/skills/fde-hook/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-hook`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-hook/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-hook` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-hook`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-hook/SKILL.md": "---\nname: fde-hook\ndescription: |\n  根据选题、目标读者和真实材料设计内容开头。先诊断现有开头，再给少量可用版本。触发方式：/fde-hook、「改开头」「前几秒留不住人」。\n---\n\n# 内容开头\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 现有开头\n- 选题\n- 客户原话\n- 案例冲突\n- 平台和时长\n\n## 必须保留的能力\n\n- 诊断现有开头问题\n- 生成多个不同切入版本\n- 说明适合的读者和承接方式\n- 不制造正文没有的承诺\n\n## 执行\n\n1. 判断开头是否说明对象、问题和继续看的理由。\n2. 找出最强的真实冲突、结果或原话。\n3. 生成 3 个不同切入版本，不制造假数字和假危机。\n4. 说明每版适合的读者和后文承接。\n\n## 交付\n\n- 问题诊断\n- 3 个开头\n- 选择建议\n- 承接句\n- 来源\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户选择后写入对应草稿的新版本\n\n## 停止条件\n\n- 选题本身不成立时停止改开头\n- 没有证据时不用夸张结果\n- 不生成与后文无关的钩子\n\n## 接续\n\n- 检查全文用 fde-review\n- 检查衔接用 fde-flow\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-impact/agents/openai.yaml": 'interface:\n  display_name: "受众反应"\n  short_description: "读取当前六类资产知识库，执行受众反应并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-impact 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-impact/references/acceptance.md": "# 验收\n\n- [ ] fde-impact 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：目标读者匹配、有效段落、失焦位置、缺少的证据、优先修改项。\n- [ ] 能力：判断目标读者是否明确。\n- [ ] 能力：检查问题和情绪是否来自真实材料。\n- [ ] 能力：定位不共鸣的段落。\n- [ ] 能力：给出具体修正动作。\n- [ ] 能力：没有发布数据时不预测实际流量。\n",
        ".agents/skills/fde-impact/references/atoms.jsonl": '{"id": "FDE-IMPACT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-IMPACT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-impact/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-impact/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-impact 完成：判断目标读者是否明确。",\n    "must_do": [\n      "判断目标读者是否明确",\n      "检查问题和情绪是否来自真实材料",\n      "定位不共鸣的段落"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-impact 完成：没有发布数据时不预测实际流量。",\n    "must_do": [\n      "没有发布数据时不预测实际流量",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-impact 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-impact/references/capability-contract.json": '{\n  "skill": "fde-impact",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "判断目标读者是否明确",\n    "检查问题和情绪是否来自真实材料",\n    "定位不共鸣的段落",\n    "给出具体修正动作",\n    "没有发布数据时不预测实际流量"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-impact/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-impact 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-impact/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-impact/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-impact/references/method.md": "# 受众反应方法\n\n## 输入\n\n- 内容稿\n- 目标客户资产\n- 客户原话\n- 发布数据或反馈\n- 预期行动\n\n## 步骤\n\n1. 标出文章声称在对谁说。\n2. 对照客户原话检查问题是否真实存在。\n3. 检查内容是否给出新的判断、证据和下一步。\n4. 区分定位偏差、材料不足、表达模糊和行动门槛。\n\n## 交付\n\n- 目标读者匹配\n- 有效段落\n- 失焦位置\n- 缺少的证据\n- 优先修改项\n\n## 停止\n\n- 没有目标读者时不判断共鸣\n- 没有发布数据时不声称传播效果\n- 不编造受众心理\n",
        ".agents/skills/fde-impact/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-impact`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-impact/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-impact` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-resonate`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-impact/SKILL.md": "---\nname: fde-impact\ndescription: |\n  检查内容是否准确指向目标读者的处境、判断和行动，不用空泛情绪代替证据。触发方式：/fde-impact、「这篇会不会打中人」「为什么没反应」。\n---\n\n# 受众反应\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 内容稿\n- 目标客户资产\n- 客户原话\n- 发布数据或反馈\n- 预期行动\n\n## 必须保留的能力\n\n- 判断目标读者是否明确\n- 检查问题和情绪是否来自真实材料\n- 定位不共鸣的段落\n- 给出具体修正动作\n- 没有发布数据时不预测实际流量\n\n## 执行\n\n1. 标出文章声称在对谁说。\n2. 对照客户原话检查问题是否真实存在。\n3. 检查内容是否给出新的判断、证据和下一步。\n4. 区分定位偏差、材料不足、表达模糊和行动门槛。\n\n## 交付\n\n- 目标读者匹配\n- 有效段落\n- 失焦位置\n- 缺少的证据\n- 优先修改项\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 诊断写入内容审核记录\n- 不自动改正文\n\n## 停止条件\n\n- 没有目标读者时不判断共鸣\n- 没有发布数据时不声称传播效果\n- 不编造受众心理\n\n## 接续\n\n- 传播原因用 fde-spread\n- 需要改稿用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-ingest/agents/openai.yaml": 'interface:\n  display_name: "材料入库"\n  short_description: "读取当前六类资产知识库，执行材料入库并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-ingest 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-ingest/references/acceptance.md": "# 验收\n\n- [ ] fde-ingest 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原文摘要、分流清单、冲突和重复、写入文件、未处理内容。\n- [ ] 能力：通读整份材料后再拆分。\n- [ ] 能力：提取认知、方法、故事数据、情绪原话、选题和待办。\n- [ ] 能力：生成结构化处理稿。\n- [ ] 能力：确认后分流入库并保留原文件。\n",
        ".agents/skills/fde-ingest/references/atoms.jsonl": '{"id": "FDE-INGEST-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INGEST-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-ingest/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-ingest/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-ingest 完成：通读整份材料后再拆分。",\n    "must_do": [\n      "通读整份材料后再拆分",\n      "提取认知、方法、故事数据、情绪原话、选题和待办",\n      "生成结构化处理稿"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-ingest 完成：确认后分流入库并保留原文件。",\n    "must_do": [\n      "确认后分流入库并保留原文件",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-ingest 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-ingest/references/capability-contract.json": '{\n  "skill": "fde-ingest",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "通读整份材料后再拆分",\n    "提取认知、方法、故事数据、情绪原话、选题和待办",\n    "生成结构化处理稿",\n    "确认后分流入库并保留原文件"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-ingest/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-ingest 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-ingest/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-ingest/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-ingest/references/method.md": "# 材料入库方法\n\n## 输入\n\n- 收件箱中的原始文件\n- 六类资产库现有条目\n- 重复记录和命名规则\n\n## 步骤\n\n1. 登记原文件路径、时间、类型和处理批次。\n2. 通读全文，分开提取原话、事实、判断、方法、故事、选题和待办。\n3. 与现有资产比对，标出新增、补充、冲突和重复。\n4. 先生成分流预览，确认后写入并把处理记录放入已处理目录。\n\n## 交付\n\n- 原文摘要\n- 分流清单\n- 冲突和重复\n- 写入文件\n- 未处理内容\n\n## 停止\n\n- 文件读不全时停止\n- 分类不确定时留在待确认区\n- 不得用摘要替换原始文件\n",
        ".agents/skills/fde-ingest/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-ingest`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-ingest/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-ingest` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/录音处理/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-ingest/SKILL.md": "---\nname: fde-ingest\ndescription: |\n  把录音、聊天、会议纪要和旧文档整理进六类资产库。保留原文件，拆出事实、原话、案例、方法、选题和待办。触发方式：/fde-ingest、「整理这份录音」「把材料入库」。\n---\n\n# 材料入库\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 收件箱中的原始文件\n- 六类资产库现有条目\n- 重复记录和命名规则\n\n## 必须保留的能力\n\n- 通读整份材料后再拆分\n- 提取认知、方法、故事数据、情绪原话、选题和待办\n- 生成结构化处理稿\n- 确认后分流入库并保留原文件\n\n## 执行\n\n1. 登记原文件路径、时间、类型和处理批次。\n2. 通读全文，分开提取原话、事实、判断、方法、故事、选题和待办。\n3. 与现有资产比对，标出新增、补充、冲突和重复。\n4. 先生成分流预览，确认后写入并把处理记录放入已处理目录。\n\n## 交付\n\n- 原文摘要\n- 分流清单\n- 冲突和重复\n- 写入文件\n- 未处理内容\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 原文件保持不变\n- 处理稿写入 inbox.processed\n- 确认后的资产写入对应库并附来源\n\n## 停止条件\n\n- 文件读不全时停止\n- 分类不确定时留在待确认区\n- 不得用摘要替换原始文件\n\n## 接续\n\n- 需要选题时用 fde-topics\n- 需要查资料时用 fde-library\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-interview/agents/openai.yaml": 'interface:\n  display_name: "建库采访"\n  short_description: "读取当前六类资产知识库，执行建库采访并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-interview 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-interview/references/acceptance.md": "# 验收\n\n- [ ] fde-interview 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：采访原话记录、可确认事实、用户自己的判断、仍需补问的事项、建议写入位置。\n- [ ] 能力：同时覆盖业务资料和老板个人资料。\n- [ ] 能力：一次只问一个问题并根据回答追问。\n- [ ] 能力：把确认结果分流到六类资产库。\n- [ ] 能力：支持暂停、跳过、重做和恢复。\n",
        ".agents/skills/fde-interview/references/atoms.jsonl": '{"id": "FDE-INTERVIEW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-INTERVIEW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-interview/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-interview/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-interview 完成：同时覆盖业务资料和老板个人资料。",\n    "must_do": [\n      "同时覆盖业务资料和老板个人资料",\n      "一次只问一个问题并根据回答追问",\n      "把确认结果分流到六类资产库"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-interview 完成：支持暂停、跳过、重做和恢复。",\n    "must_do": [\n      "支持暂停、跳过、重做和恢复",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-interview 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-interview/references/capability-contract.json": '{\n  "skill": "fde-interview",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "同时覆盖业务资料和老板个人资料",\n    "一次只问一个问题并根据回答追问",\n    "把确认结果分流到六类资产库",\n    "支持暂停、跳过、重做和恢复"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-interview/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-interview 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-interview/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-interview/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-interview/references/method.md": "# 建库采访方法\n\n## 输入\n\n- 现有六类资产\n- 已完成的采访状态\n- 用户明确不回答的范围\n\n## 步骤\n\n1. 先盘点哪些库为空，确定本轮只补一个主题。\n2. 围绕具体事件提问，先问事实，再问判断和结果。\n3. 每 5 个问题汇总一次：原话、事实、推断、待确认。\n4. 用户确认汇总后再拆分到对应资产库。\n\n## 交付\n\n- 采访原话记录\n- 可确认事实\n- 用户自己的判断\n- 仍需补问的事项\n- 建议写入位置\n\n## 停止\n\n- 用户要求暂停时保存进度\n- 用户不确认汇总时不写入正式资产\n- 不得替用户补经历、客户原话或数字\n",
        ".agents/skills/fde-interview/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-interview`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-interview/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-interview` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/知识库采访机器人/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-interview/SKILL.md": "---\nname: fde-interview\ndescription: |\n  用分轮采访建立老板、产品、客户、案例、方法和内容资产。一次只问一个问题，保留原话和未知项。触发方式：/fde-interview、「采访我」「帮我建立知识库」。\n---\n\n# 建库采访\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 现有六类资产\n- 已完成的采访状态\n- 用户明确不回答的范围\n\n## 必须保留的能力\n\n- 同时覆盖业务资料和老板个人资料\n- 一次只问一个问题并根据回答追问\n- 把确认结果分流到六类资产库\n- 支持暂停、跳过、重做和恢复\n\n## 执行\n\n1. 先盘点哪些库为空，确定本轮只补一个主题。\n2. 围绕具体事件提问，先问事实，再问判断和结果。\n3. 每 5 个问题汇总一次：原话、事实、推断、待确认。\n4. 用户确认汇总后再拆分到对应资产库。\n\n## 交付\n\n- 采访原话记录\n- 可确认事实\n- 用户自己的判断\n- 仍需补问的事项\n- 建议写入位置\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 原始问答写入收件箱或采访记录\n- 确认后的条目分别写入六类资产库\n- 采访进度写入 `.fde/state`\n\n## 停止条件\n\n- 用户要求暂停时保存进度\n- 用户不确认汇总时不写入正式资产\n- 不得替用户补经历、客户原话或数字\n\n## 接续\n\n- 有录音转写时转 fde-ingest\n- 底稿完成后回 fde-start\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-learn/agents/openai.yaml": 'interface:\n  display_name: "学习循环"\n  short_description: "读取当前六类资产知识库，执行学习循环并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-learn 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-learn/references/acceptance.md": "# 验收\n\n- [ ] fde-learn 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：本轮目标、必要知识、练习、完成标准、反馈问题。\n- [ ] 能力：把一个课题拆成连续学习内容。\n- [ ] 能力：根据上一篇反馈调整深度、角度和节奏。\n- [ ] 能力：每轮提供说明、示例和练习。\n- [ ] 能力：保留学习进度并生成下一篇。\n",
        ".agents/skills/fde-learn/references/atoms.jsonl": '{"id": "FDE-LEARN-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LEARN-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-learn/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-learn/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-learn 完成：把一个课题拆成连续学习内容。",\n    "must_do": [\n      "把一个课题拆成连续学习内容",\n      "根据上一篇反馈调整深度、角度和节奏",\n      "每轮提供说明、示例和练习"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-learn 完成：保留学习进度并生成下一篇。",\n    "must_do": [\n      "保留学习进度并生成下一篇",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-learn 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-learn/references/capability-contract.json": '{\n  "skill": "fde-learn",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把一个课题拆成连续学习内容",\n    "根据上一篇反馈调整深度、角度和节奏",\n    "每轮提供说明、示例和练习",\n    "保留学习进度并生成下一篇"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-learn/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-learn 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-learn/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-learn/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-learn/references/method.md": "# 学习循环方法\n\n## 输入\n\n- 要解决的工作问题\n- 现有方法库\n- 上次练习和反馈\n- 可投入时间\n\n## 步骤\n\n1. 把课题拆成连续文章，但一次只生成下一篇。\n2. 读取上一篇反馈，判断需要加深、换角度、放慢或增加练习。\n3. 本篇提供说明、示例、练习和反馈问题。\n4. 保存学习进度，根据实际反馈决定下一篇，不预先写完整课程。\n\n## 交付\n\n- 本轮目标\n- 必要知识\n- 练习\n- 完成标准\n- 反馈问题\n\n## 停止\n\n- 没有实际任务时不堆课程\n- 反馈未返回时不假装掌握\n- 需要最新知识时先核验来源\n",
        ".agents/skills/fde-learn/references/series-state.md": "# 连续学习状态\n\n记录课题、已完成文章、用户反馈、当前难度、有效例子、未掌握点和下一篇方向。下一篇必须引用上一轮反馈，不能只按预设目录推进。\n",
        ".agents/skills/fde-learn/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-learn`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-learn/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-learn` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-learning`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-learn/SKILL.md": "---\nname: fde-learn\ndescription: |\n  围绕一个工作问题安排短学习循环：先做、记录反馈、补一个知识点，再做下一次。触发方式：/fde-learn、「带我学」「根据上次反馈继续」。\n---\n\n# 学习循环\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 要解决的工作问题\n- 现有方法库\n- 上次练习和反馈\n- 可投入时间\n\n## 必须保留的能力\n\n- 把一个课题拆成连续学习内容\n- 根据上一篇反馈调整深度、角度和节奏\n- 每轮提供说明、示例和练习\n- 保留学习进度并生成下一篇\n\n## 执行\n\n1. 把课题拆成连续文章，但一次只生成下一篇。\n2. 读取上一篇反馈，判断需要加深、换角度、放慢或增加练习。\n3. 本篇提供说明、示例、练习和反馈问题。\n4. 保存学习进度，根据实际反馈决定下一篇，不预先写完整课程。\n\n## 交付\n\n- 本轮目标\n- 必要知识\n- 练习\n- 完成标准\n- 反馈问题\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 学习记录写入方法库或 `.fde/state/learning`\n\n## 停止条件\n\n- 没有实际任务时不堆课程\n- 反馈未返回时不假装掌握\n- 需要最新知识时先核验来源\n\n## 接续\n\n- 形成方法时用 fde-library 收录\n- 形成内容时用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-library/agents/openai.yaml": 'interface:\n  display_name: "查库与维护"\n  short_description: "读取当前六类资产知识库，执行查库与维护并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-library 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-library/references/acceptance.md": "# 验收\n\n- [ ] fde-library 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：直接回答、来源路径、冲突或版本差异、未找到的内容、建议维护动作。\n- [ ] 能力：空目录时建立最小知识库。\n- [ ] 能力：已有资料时生成导航和真源说明。\n- [ ] 能力：查询时返回答案、来源和版本。\n- [ ] 能力：支持收录、纠错、最新版判断和导航更新。\n",
        ".agents/skills/fde-library/references/atoms.jsonl": '{"id": "FDE-LIBRARY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-LIBRARY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-library/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-library/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-library 完成：空目录时建立最小知识库。",\n    "must_do": [\n      "空目录时建立最小知识库",\n      "已有资料时生成导航和真源说明",\n      "查询时返回答案、来源和版本"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-library 完成：支持收录、纠错、最新版判断和导航更新。",\n    "must_do": [\n      "支持收录、纠错、最新版判断和导航更新",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-library 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-library/references/capability-contract.json": '{\n  "skill": "fde-library",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "空目录时建立最小知识库",\n    "已有资料时生成导航和真源说明",\n    "查询时返回答案、来源和版本",\n    "支持收录、纠错、最新版判断和导航更新"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-library/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-library 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-library/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-library/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-library/references/method.md": "# 查库与维护方法\n\n## 输入\n\n- 用户问题中的对象、时间和用途\n- 相关资产库\n- 索引和最近版本\n\n## 步骤\n\n1. 空目录时建立六类最小目录、配置和导航；已有资料时先生成导航，不搬文件。\n2. 把问题拆成检索词、资产类型和时间范围。\n3. 先查导航与索引，再打开少量候选文件核对原文。\n4. 按已确认事实、冲突、推断和缺口返回，并指出当前版本和真源。\n5. 新增、纠错或设为最新版时先展示目标文件、旧版本和来源，再更新导航。\n\n## 交付\n\n- 直接回答\n- 来源路径\n- 冲突或版本差异\n- 未找到的内容\n- 建议维护动作\n\n## 停止\n\n- 来源不足时明确说未找到\n- 跨项目读取必须得到用户明确授权\n- 删除和合并先确认\n",
        ".agents/skills/fde-library/references/navigation-schema.md": "# 知识库导航\n\n导航记录资产类型、主题、真源文件、当前版本、旧版本、更新时间和维护人。查询先看导航，再读真源。设为最新版时保留旧版本和变更原因。\n",
        ".agents/skills/fde-library/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-library`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-library/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-library` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-knowledge`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-library/SKILL.md": "---\nname: fde-library\ndescription: |\n  在六类资产库中查找、收录、纠错和维护资料。每个结论返回来源路径，不跨项目搜索。触发方式：/fde-library、「从知识库找」「把这份资料放进去」。\n---\n\n# 查库与维护\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 用户问题中的对象、时间和用途\n- 相关资产库\n- 索引和最近版本\n\n## 必须保留的能力\n\n- 空目录时建立最小知识库\n- 已有资料时生成导航和真源说明\n- 查询时返回答案、来源和版本\n- 支持收录、纠错、最新版判断和导航更新\n\n## 执行\n\n1. 空目录时建立六类最小目录、配置和导航；已有资料时先生成导航，不搬文件。\n2. 把问题拆成检索词、资产类型和时间范围。\n3. 先查导航与索引，再打开少量候选文件核对原文。\n4. 按已确认事实、冲突、推断和缺口返回，并指出当前版本和真源。\n5. 新增、纠错或设为最新版时先展示目标文件、旧版本和来源，再更新导航。\n\n## 交付\n\n- 直接回答\n- 来源路径\n- 冲突或版本差异\n- 未找到的内容\n- 建议维护动作\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 新增条目写入对应资产库\n- 索引变更写入 `.fde/indexes`\n- 不覆盖旧版本\n\n## 停止条件\n\n- 来源不足时明确说未找到\n- 跨项目读取必须得到用户明确授权\n- 删除和合并先确认\n\n## 接续\n\n- 结构混乱用 fde-organize\n- 整体检查用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-organize/agents/openai.yaml": 'interface:\n  display_name: "资产整理"\n  short_description: "读取当前六类资产知识库，执行资产整理并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-organize 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-organize/references/acceptance.md": "# 验收\n\n- [ ] fde-organize 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：资产清单、内容单元、主题地图、选题装配稿、迁移预览、执行日志。\n- [ ] 能力：审计内容规模和处理边界。\n- [ ] 能力：把长文拆成可复用内容单元。\n- [ ] 能力：生成主题地图和关联。\n- [ ] 能力：从内容单元装配选题稿。\n- [ ] 能力：处理重复、版本和来源。\n",
        ".agents/skills/fde-organize/references/assembly-schema.md": "# 选题装配\n\n装配稿包含目标读者、要解决的问题、主判断、证据单元、反例、结构和缺口。装配只引用单元，不复制整篇旧文。\n",
        ".agents/skills/fde-organize/references/atoms.jsonl": '{"id": "FDE-ORGANIZE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-ORGANIZE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-organize/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-organize/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-organize 完成：审计内容规模和处理边界。",\n    "must_do": [\n      "审计内容规模和处理边界",\n      "把长文拆成可复用内容单元",\n      "生成主题地图和关联"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-organize 完成：处理重复、版本和来源。",\n    "must_do": [\n      "处理重复、版本和来源",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-organize 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-organize/references/capability-contract.json": '{\n  "skill": "fde-organize",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "审计内容规模和处理边界",\n    "把长文拆成可复用内容单元",\n    "生成主题地图和关联",\n    "从内容单元装配选题稿",\n    "处理重复、版本和来源"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-organize/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-organize 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-organize/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-organize/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-organize/references/method.md": "# 资产整理方法\n\n## 输入\n\n- 六类资产目录\n- 文件名、标题、来源和修改时间\n- 用户现有命名规则\n- `scripts/inventory_assets.py`\n- references/unit-schema.md、topic-map-schema.md、assembly-schema.md\n\n## 步骤\n\n1. 运行只读清单，确认内容规模、边界、重复和无来源文件。\n2. 按 unit-schema 把长文拆成观点、问题、案例、方法和方案单元，每个单元保留来源。\n3. 按 topic-map-schema 连接相关单元，记录支持、冲突、例子和版本关系。\n4. 按 assembly-schema 从单元装配选题稿，不复制旧文章。\n5. 生成迁移和写入预览，用户确认后分批执行并记录日志。\n\n## 交付\n\n- 资产清单\n- 内容单元\n- 主题地图\n- 选题装配稿\n- 迁移预览\n- 执行日志\n\n## 停止\n\n- 不能确认真源时不合并\n- 没有来源时不伪造\n- 批量移动和覆盖必须确认\n",
        ".agents/skills/fde-organize/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-organize`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-organize/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-organize` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-content-system`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-organize/references/topic-map-schema.md": "# 主题地图\n\n主题地图记录一个主题下的单元，以及支持、反对、例子、前置、后续和版本关系。关系必须能回到两个实际文件。\n",
        ".agents/skills/fde-organize/references/unit-schema.md": "# 内容单元\n\n每个单元只表达一个可复用内容：类型、标题、原文片段、来源路径、适用对象、支持的判断、冲突项和版本。类型限观点、问题、案例、方法、方案。\n",
        ".agents/skills/fde-organize/scripts/inventory_assets.py": `#!/usr/bin/env python3
"""Create a read-only inventory for the configured six asset libraries."""

from __future__ import annotations

import argparse
import hashlib
import json
from collections import defaultdict
from pathlib import Path


def library_paths(config: Path) -> dict[str, str]:
    values = {}
    in_libraries = False
    for raw in config.read_text(encoding="utf-8").splitlines():
        if raw.strip() == "libraries:":
            in_libraries = True
            continue
        if in_libraries and raw and not raw.startswith(" "):
            break
        if in_libraries and ":" in raw:
            key, value = raw.strip().split(":", 1)
            values[key.strip()] = value.strip().strip("'\\"")
    return values


def digest(path: Path) -> str:
    sha = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            sha.update(chunk)
    return sha.hexdigest()


def has_source(path: Path) -> bool:
    if path.suffix.lower() not in {".md", ".txt"}:
        return True
    head = path.read_text(encoding="utf-8", errors="replace")[:4000].lower()
    return any(marker in head for marker in ("source:", "来源：", "来源:", "原始文件：", "原始文件:"))


def inventory(root: Path, large_bytes: int) -> dict:
    config = root / ".fde" / "config.yaml"
    if not config.is_file():
        raise ValueError(f"missing config: {config}")
    libraries = library_paths(config)
    if len(libraries) != 6:
        raise ValueError(f"expected 6 libraries, found {len(libraries)}")
    rows, hashes = [], defaultdict(list)
    missing_sources, large_files, missing_dirs = [], [], []
    totals = {}
    for key, relative in libraries.items():
        directory = (root / relative).resolve()
        if not directory.is_dir():
            missing_dirs.append(str(directory))
            totals[key] = 0
            continue
        count = 0
        for path in sorted(item for item in directory.rglob("*") if item.is_file() and not item.is_symlink()):
            count += 1
            stat = path.stat()
            sha = digest(path)
            hashes[sha].append(str(path))
            row = {"library": key, "path": str(path), "size": stat.st_size, "modified": int(stat.st_mtime), "sha256": sha}
            rows.append(row)
            if stat.st_size >= large_bytes:
                large_files.append(str(path))
            if not has_source(path):
                missing_sources.append(str(path))
        totals[key] = count
    duplicates = [paths for paths in hashes.values() if len(paths) > 1]
    return {
        "root": str(root),
        "libraries": totals,
        "files": rows,
        "duplicates": duplicates,
        "missing_source": missing_sources,
        "large_files": large_files,
        "missing_directories": missing_dirs,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, required=True)
    parser.add_argument("--output", type=Path)
    parser.add_argument("--large-mb", type=int, default=10)
    args = parser.parse_args()
    try:
        result = inventory(args.root.expanduser().resolve(), args.large_mb * 1024 * 1024)
    except ValueError as error:
        parser.error(str(error))
    encoded = json.dumps(result, ensure_ascii=False, indent=2) + "\\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(encoded, encoding="utf-8")
    print(encoded, end="")


if __name__ == "__main__":
    main()
`,
        ".agents/skills/fde-organize/SKILL.md": "---\nname: fde-organize\ndescription: |\n  整理六类资产库中的重复文件、散落条目、命名和关联。先出迁移预览，确认后再移动。触发方式：/fde-organize、「整理知识库」「合并重复资料」。\n---\n\n# 资产整理\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 六类资产目录\n- 文件名、标题、来源和修改时间\n- 用户现有命名规则\n- `scripts/inventory_assets.py`\n- references/unit-schema.md、topic-map-schema.md、assembly-schema.md\n\n## 必须保留的能力\n\n- 审计内容规模和处理边界\n- 把长文拆成可复用内容单元\n- 生成主题地图和关联\n- 从内容单元装配选题稿\n- 处理重复、版本和来源\n\n## 执行\n\n1. 运行只读清单，确认内容规模、边界、重复和无来源文件。\n2. 按 unit-schema 把长文拆成观点、问题、案例、方法和方案单元，每个单元保留来源。\n3. 按 topic-map-schema 连接相关单元，记录支持、冲突、例子和版本关系。\n4. 按 assembly-schema 从单元装配选题稿，不复制旧文章。\n5. 生成迁移和写入预览，用户确认后分批执行并记录日志。\n\n## 交付\n\n- 资产清单\n- 内容单元\n- 主题地图\n- 选题装配稿\n- 迁移预览\n- 执行日志\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 日志写入 `.fde/logs`\n- 索引写入 `.fde/indexes`\n- 原文件移动前保留可恢复记录\n\n## 停止条件\n\n- 不能确认真源时不合并\n- 没有来源时不伪造\n- 批量移动和覆盖必须确认\n\n## 接续\n\n- 整理后用 fde-health 复查\n- 找资料用 fde-library\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-question/agents/openai.yaml": 'interface:\n  display_name: "问题说明"\n  short_description: "读取当前六类资产知识库，执行问题说明并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-question 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-question/references/acceptance.md": "# 验收\n\n- [ ] fde-question 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：原问题、问题说明书、已知事实、缺失信息、期望输出、验收标准。\n- [ ] 能力：把模糊困惑改成问题说明书。\n- [ ] 能力：让问题可推理、可批评和可验证。\n- [ ] 能力：列出所缺事实和权限。\n- [ ] 能力：判断可自动化、需人工判断和不可自动化的部分。\n",
        ".agents/skills/fde-question/references/atoms.jsonl": '{"id": "FDE-QUESTION-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-QUESTION-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-question/references/automation-readiness.md": "# 自动化边界\n\n- Agent 执行：输入明确、规则明确、结果可检查。\n- 人确认：Agent 能准备，但需要授权或事实确认。\n- 人决定：价值取舍、责任承担、不可逆承诺。\n- 暂时不能做：缺数据、缺权限或验收条件不存在。\n",
        ".agents/skills/fde-question/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-question/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-question 完成：把模糊困惑改成问题说明书。",\n    "must_do": [\n      "把模糊困惑改成问题说明书",\n      "让问题可推理、可批评和可验证",\n      "列出所缺事实和权限"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-question 完成：判断可自动化、需人工判断和不可自动化的部分。",\n    "must_do": [\n      "判断可自动化、需人工判断和不可自动化的部分",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-question 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-question/references/capability-contract.json": '{\n  "skill": "fde-question",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "把模糊困惑改成问题说明书",\n    "让问题可推理、可批评和可验证",\n    "列出所缺事实和权限",\n    "判断可自动化、需人工判断和不可自动化的部分"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-question/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-question 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-question/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-question/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-question/references/method.md": "# 问题说明方法\n\n## 输入\n\n- 原问题\n- 已知事实\n- 已尝试动作\n- 期望决定\n- 时间和权限边界\n\n## 步骤\n\n1. 逐句区分事实、判断、情绪和请求。\n2. 找出答案会改变哪个决定。\n3. 列出处理问题所缺的最少信息。\n4. 把步骤分为可由 Agent 执行、需要人确认、必须由人决定三类。\n5. 输出可推理、可批评、可验证的问题说明书和自动化边界。\n\n## 交付\n\n- 原问题\n- 问题说明书\n- 已知事实\n- 缺失信息\n- 期望输出\n- 验收标准\n\n## 停止\n\n- 没有决策用途时先问为什么处理\n- 涉及授权外动作时停止\n- 不把猜测写进背景事实\n",
        ".agents/skills/fde-question/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-question`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-question/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-question` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-good-question`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-question/SKILL.md": "---\nname: fde-question\ndescription: |\n  把一段困惑整理成 Agent、员工或顾问可以处理的问题说明书。触发方式：/fde-question、「我不知道怎么问」「把这个问题说清楚」。\n---\n\n# 问题说明\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 原问题\n- 已知事实\n- 已尝试动作\n- 期望决定\n- 时间和权限边界\n\n## 必须保留的能力\n\n- 把模糊困惑改成问题说明书\n- 让问题可推理、可批评和可验证\n- 列出所缺事实和权限\n- 判断可自动化、需人工判断和不可自动化的部分\n\n## 执行\n\n1. 逐句区分事实、判断、情绪和请求。\n2. 找出答案会改变哪个决定。\n3. 列出处理问题所缺的最少信息。\n4. 把步骤分为可由 Agent 执行、需要人确认、必须由人决定三类。\n5. 输出可推理、可批评、可验证的问题说明书和自动化边界。\n\n## 交付\n\n- 原问题\n- 问题说明书\n- 已知事实\n- 缺失信息\n- 期望输出\n- 验收标准\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 确认后写入当前项目 brief\n\n## 停止条件\n\n- 没有决策用途时先问为什么处理\n- 涉及授权外动作时停止\n- 不把猜测写进背景事实\n\n## 接续\n\n- 商业问题用 fde-diagnose\n- 目标问题用 fde-goal\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-report/agents/openai.yaml": 'interface:\n  display_name: "状态报告"\n  short_description: "读取当前六类资产知识库，执行状态报告并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-report 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-report/references/acceptance.md": "# 验收\n\n- [ ] fde-report 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：摘要、时间线、关键决定、结果、风险和未知、下一步、来源附录。\n- [ ] 能力：合并同一任务的多次状态。\n- [ ] 能力：保留判断变化和时间线。\n- [ ] 能力：输出可交付 Markdown。\n- [ ] 能力：附来源、风险和未完成项。\n",
        ".agents/skills/fde-report/references/atoms.jsonl": '{"id": "FDE-REPORT-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REPORT-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-report/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-report/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-report 完成：合并同一任务的多次状态。",\n    "must_do": [\n      "合并同一任务的多次状态",\n      "保留判断变化和时间线",\n      "输出可交付 Markdown"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-report 完成：附来源、风险和未完成项。",\n    "must_do": [\n      "附来源、风险和未完成项",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-report 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-report/references/capability-contract.json": '{\n  "skill": "fde-report",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "合并同一任务的多次状态",\n    "保留判断变化和时间线",\n    "输出可交付 Markdown",\n    "附来源、风险和未完成项"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-report/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-report 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-report/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-report/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-report/references/method.md": "# 状态报告方法\n\n## 输入\n\n- 选定任务的状态文件\n- 决策记录\n- 关联资产和结果\n- 报告读者\n\n## 步骤\n\n1. 按时间排序状态，不先写结论。\n2. 合并重复事实，保留判断变化和原因。\n3. 区分已完成、进行中、阻塞和未知。\n4. 为每个关键结论附来源路径。\n\n## 交付\n\n- 摘要\n- 时间线\n- 关键决定\n- 结果\n- 风险和未知\n- 下一步\n- 来源附录\n\n## 停止\n\n- 状态属于不同任务时不强行合并\n- 缺少来源的结论标明\n- 对外报告先检查敏感信息\n",
        ".agents/skills/fde-report/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-report`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-report/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-report` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-report`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-report/SKILL.md": "---\nname: fde-report\ndescription: |\n  把同一任务的多次状态、决定和结果整理成可交付报告，保留时间线和来源。触发方式：/fde-report、「整理成报告」「给合伙人看」。\n---\n\n# 状态报告\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 选定任务的状态文件\n- 决策记录\n- 关联资产和结果\n- 报告读者\n\n## 必须保留的能力\n\n- 合并同一任务的多次状态\n- 保留判断变化和时间线\n- 输出可交付 Markdown\n- 附来源、风险和未完成项\n\n## 执行\n\n1. 按时间排序状态，不先写结论。\n2. 合并重复事实，保留判断变化和原因。\n3. 区分已完成、进行中、阻塞和未知。\n4. 为每个关键结论附来源路径。\n\n## 交付\n\n- 摘要\n- 时间线\n- 关键决定\n- 结果\n- 风险和未知\n- 下一步\n- 来源附录\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/reports` 或用户指定目录\n- 不修改源状态\n\n## 停止条件\n\n- 状态属于不同任务时不强行合并\n- 缺少来源的结论标明\n- 对外报告先检查敏感信息\n\n## 接续\n\n- 继续执行回 fde-start\n- 复盘决定用 fde-decide\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-resume/agents/openai.yaml": 'interface:\n  display_name: "恢复进度"\n  short_description: "读取当前六类资产知识库，执行恢复进度并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-resume 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-resume/references/acceptance.md": "# 验收\n\n- [ ] fde-resume 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：恢复的状态、文件变化、已完成项、待办、建议继续点。\n- [ ] 能力：列出可恢复状态。\n- [ ] 能力：恢复最近或指定状态。\n- [ ] 能力：核对引用文件是否变化。\n- [ ] 能力：继续时创建新版本。\n",
        ".agents/skills/fde-resume/references/atoms.jsonl": '{"id": "FDE-RESUME-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-RESUME-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-resume/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-resume/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-resume 完成：列出可恢复状态。",\n    "must_do": [\n      "列出可恢复状态",\n      "恢复最近或指定状态",\n      "核对引用文件是否变化"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-resume 完成：继续时创建新版本。",\n    "must_do": [\n      "继续时创建新版本",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-resume 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-resume/references/capability-contract.json": '{\n  "skill": "fde-resume",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "列出可恢复状态",\n    "恢复最近或指定状态",\n    "核对引用文件是否变化",\n    "继续时创建新版本"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-resume/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-resume 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-resume/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-resume/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-resume/references/method.md": "# 恢复进度方法\n\n## 输入\n\n- `.fde/state/sessions`\n- 用户指定的状态 ID\n- 状态中引用的文件\n\n## 步骤\n\n1. 列出可恢复状态的时间、任务和完成度。\n2. 读取选中状态，核对引用文件是否存在或更新。\n3. 说明上次结论、变化和仍未知事项。\n4. 让用户确认继续点后再执行。\n\n## 交付\n\n- 恢复的状态\n- 文件变化\n- 已完成项\n- 待办\n- 建议继续点\n\n## 停止\n\n- 找不到状态时停止并列出可用项\n- 关键来源已变更时不沿用旧结论\n- 不恢复其他知识库的状态\n",
        ".agents/skills/fde-resume/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-resume`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-resume/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-resume` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-restore`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-resume/SKILL.md": "---\nname: fde-resume\ndescription: |\n  从当前知识库恢复最近或指定的任务状态，先核对文件和事实是否变化，再继续。触发方式：/fde-resume、「接着上次」「恢复进度」。\n---\n\n# 恢复进度\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/state/sessions`\n- 用户指定的状态 ID\n- 状态中引用的文件\n\n## 必须保留的能力\n\n- 列出可恢复状态\n- 恢复最近或指定状态\n- 核对引用文件是否变化\n- 继续时创建新版本\n\n## 执行\n\n1. 列出可恢复状态的时间、任务和完成度。\n2. 读取选中状态，核对引用文件是否存在或更新。\n3. 说明上次结论、变化和仍未知事项。\n4. 让用户确认继续点后再执行。\n\n## 交付\n\n- 恢复的状态\n- 文件变化\n- 已完成项\n- 待办\n- 建议继续点\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 继续工作后创建新状态版本，不覆盖旧状态\n\n## 停止条件\n\n- 找不到状态时停止并列出可用项\n- 关键来源已变更时不沿用旧结论\n- 不恢复其他知识库的状态\n\n## 接续\n\n- 需要汇总用 fde-report\n- 继续任务回对应 Skill\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-review/agents/openai.yaml": 'interface:\n  display_name: "内容审核"\n  short_description: "读取当前六类资产知识库，执行内容审核并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-review 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-review/references/acceptance.md": "# 验收\n\n- [ ] fde-review 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：发布判断、必须改的问题和位置、证据缺口、保留项、修改顺序。\n- [ ] 能力：默认只诊断不改稿。\n- [ ] 能力：支持公众号、小红书、口播和短文案。\n- [ ] 能力：先检查事实和定位，再检查内容质量。\n- [ ] 能力：给出具体位置和修改顺序。\n- [ ] 能力：用户确认后另存改稿。\n",
        ".agents/skills/fde-review/references/atoms.jsonl": '{"id": "FDE-REVIEW-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-REVIEW-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-review/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-review/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-review 完成：默认只诊断不改稿。",\n    "must_do": [\n      "默认只诊断不改稿",\n      "支持公众号、小红书、口播和短文案",\n      "先检查事实和定位，再检查内容质量"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-review 完成：用户确认后另存改稿。",\n    "must_do": [\n      "用户确认后另存改稿",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-review 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-review/references/capability-contract.json": '{\n  "skill": "fde-review",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "默认只诊断不改稿",\n    "支持公众号、小红书、口播和短文案",\n    "先检查事实和定位，再检查内容质量",\n    "给出具体位置和修改顺序",\n    "用户确认后另存改稿"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-review/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-review 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-review/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-review/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-review/references/method.md": "# 内容审核方法\n\n## 输入\n\n- 待审核稿\n- 对应选题\n- 老板说明书\n- 产品和客户事实\n- 来源材料\n- 平台要求\n\n## 步骤\n\n1. 先核对事实、数字、引用和来源。\n2. 再检查读者问题、主线、证据、行动和平台适配。\n3. 把问题按必须改、建议改和保留原样分类。\n4. 只给最小修改方案；用户要求改稿后才生成新版本。\n\n## 交付\n\n- 发布判断\n- 必须改的问题和位置\n- 证据缺口\n- 保留项\n- 修改顺序\n\n## 停止\n\n- 来源冲突时阻止发布\n- 平台规则不确定时标记待核验\n- 不为了顺滑重写老板原话\n",
        ".agents/skills/fde-review/references/modes/flow.md": "# 衔接检查\n\n给每段标作用，找跳步、重复和信息拥堵。需要逐字稿处理时转 fde-flow。\n",
        ".agents/skills/fde-review/references/modes/hook.md": "# 开头检查\n\n检查对象、问题、证据和后文承接。需要重写时转 fde-hook。\n",
        ".agents/skills/fde-review/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-review`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-review/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-review` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/内容诊断/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-review/SKILL.md": "---\nname: fde-review\ndescription: |\n  审核一篇内容与知识库事实、老板表达、目标读者和平台任务是否一致。默认只诊断，用户确认后再改。触发方式：/fde-review、「这篇能发吗」「检查这篇内容」。\n---\n\n# 内容审核\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 待审核稿\n- 对应选题\n- 老板说明书\n- 产品和客户事实\n- 来源材料\n- 平台要求\n\n## 必须保留的能力\n\n- 默认只诊断不改稿\n- 支持公众号、小红书、口播和短文案\n- 先检查事实和定位，再检查内容质量\n- 给出具体位置和修改顺序\n- 用户确认后另存改稿\n\n## 执行\n\n1. 先核对事实、数字、引用和来源。\n2. 再检查读者问题、主线、证据、行动和平台适配。\n3. 把问题按必须改、建议改和保留原样分类。\n4. 只给最小修改方案；用户要求改稿后才生成新版本。\n\n## 交付\n\n- 发布判断\n- 必须改的问题和位置\n- 证据缺口\n- 保留项\n- 修改顺序\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 诊断记录写入 `待审核` 对应文件\n- 改稿另存版本\n- 通过后才移入 `待发布`\n\n## 停止条件\n\n- 来源冲突时阻止发布\n- 平台规则不确定时标记待核验\n- 不为了顺滑重写老板原话\n\n## 接续\n\n- 开头问题用 fde-hook\n- 段落问题用 fde-flow\n- AI 痕迹用 fde-check\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-safety/agents/openai.yaml": 'interface:\n  display_name: "Skill 风险检查"\n  short_description: "读取当前六类资产知识库，执行Skill 风险检查并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-safety 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-safety/references/acceptance.md": "# 验收\n\n- [ ] fde-safety 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：扫描范围、风险项、证据位置、误报可能、建议动作。\n- [ ] 能力：扫描默认 Agent Skill 目录和指定目录。\n- [ ] 能力：检查广告导流、隐蔽商业意图和任务劫持。\n- [ ] 能力：检查外部调用和敏感数据读取。\n- [ ] 能力：报告文件、行号和原文证据。\n- [ ] 能力：确认后隔离并支持恢复。\n",
        ".agents/skills/fde-safety/references/atoms.jsonl": '{"id": "FDE-SAFETY-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAFETY-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-safety/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-safety/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-safety 完成：扫描默认 Agent Skill 目录和指定目录。",\n    "must_do": [\n      "扫描默认 Agent Skill 目录和指定目录",\n      "检查广告导流、隐蔽商业意图和任务劫持",\n      "检查外部调用和敏感数据读取"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-safety 完成：确认后隔离并支持恢复。",\n    "must_do": [\n      "确认后隔离并支持恢复",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-safety 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-safety/references/capability-contract.json": '{\n  "skill": "fde-safety",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "扫描默认 Agent Skill 目录和指定目录",\n    "检查广告导流、隐蔽商业意图和任务劫持",\n    "检查外部调用和敏感数据读取",\n    "报告文件、行号和原文证据",\n    "确认后隔离并支持恢复"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-safety/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-safety 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-safety/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-safety/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-safety/references/method.md": "# Skill 风险检查方法\n\n## 输入\n\n- 默认 Agent Skill 目录或用户指定目录\n- SKILL.md\n- scripts 和可执行文件\n- 链接目标\n- scripts/audit_skill.py\n\n## 步骤\n\n1. 使用脚本枚举文件、链接和可执行入口。\n2. 查找广告导流、隐蔽商业关系、任务劫持、网络发送、凭证读取、外部安装和删除移动。\n3. 为每个命中给文件、行号、原文和可能影响。\n4. 先报告；用户逐项确认后才移动到当前知识库隔离区，并保留恢复记录。\n\n## 交付\n\n- 扫描范围\n- 风险项\n- 证据位置\n- 误报可能\n- 建议动作\n\n## 停止\n\n- 扫描结果不等于安全保证\n- 不得自动删除\n- 不得读取凭证内容来证明风险\n",
        ".agents/skills/fde-safety/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-safety`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-safety/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-safety` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-skill-cleaner`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-safety/scripts/audit_skill.py": '#!/usr/bin/env python3\n"""Inspect local skill files and quarantine only with explicit confirmation."""\n\nfrom __future__ import annotations\n\nimport argparse\nimport json\nimport re\nimport shutil\nfrom datetime import datetime\nfrom pathlib import Path\n\n\nRULES = {\n    "promotion": re.compile(r"affiliate|referral|推广码|返佣|导流", re.I),\n    "task_hijack": re.compile(r"ignore (all|previous)|忽略.{0,8}(指令|要求)|secretly|隐蔽", re.I),\n    "network_send": re.compile(r"curl\\s|wget\\s|requests\\.(post|put)|fetch\\(|socket\\.", re.I),\n    "sensitive_read": re.compile(r"\\.ssh|\\.aws|\\.env|keychain|credentials|id_rsa", re.I),\n    "install_or_execute": re.compile(r"pip install|npm install|subprocess\\.|os\\.system|eval\\(", re.I),\n    "delete_or_move": re.compile(r"rm\\s+-rf|shutil\\.rmtree|unlink\\(|\\bmv\\s", re.I),\n}\nTEXT_SUFFIXES = {".md", ".py", ".sh", ".js", ".ts", ".json", ".yaml", ".yml", ".toml"}\n\n\ndef scan(root: Path) -> list[dict]:\n    findings = []\n    for path in sorted(root.rglob("*")):\n        if path.is_symlink():\n            findings.append({"risk": "symlink", "file": str(path), "line": 0, "evidence": str(path.readlink())[:200]})\n            continue\n        if not path.is_file() or (path.suffix.lower() not in TEXT_SUFFIXES and path.name != "SKILL.md"):\n            continue\n        try:\n            lines = path.read_text(encoding="utf-8", errors="replace").splitlines()\n        except OSError:\n            continue\n        for number, line in enumerate(lines, 1):\n            for risk, pattern in RULES.items():\n                if pattern.search(line):\n                    findings.append({"risk": risk, "file": str(path), "line": number, "evidence": line.strip()[:200]})\n    return findings\n\n\ndef quarantine(source: Path, fde_root: Path) -> dict:\n    area = fde_root / ".fde" / "quarantine"\n    area.mkdir(parents=True, exist_ok=True)\n    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")\n    target = area / f"{source.name}-{stamp}"\n    if target.exists():\n        raise ValueError(f"target exists: {target}")\n    shutil.move(str(source), str(target))\n    record = {"source": str(source), "target": str(target), "time": datetime.now().isoformat(timespec="seconds")}\n    (area / f"{source.name}-{stamp}.json").write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")\n    return record\n\n\ndef restore(record_path: Path) -> dict:\n    record = json.loads(record_path.read_text(encoding="utf-8"))\n    source, target = Path(record["source"]), Path(record["target"])\n    if source.exists() or not target.exists():\n        raise ValueError("restore path is occupied or quarantine item is missing")\n    source.parent.mkdir(parents=True, exist_ok=True)\n    shutil.move(str(target), str(source))\n    record["restored"] = datetime.now().isoformat(timespec="seconds")\n    record_path.write_text(json.dumps(record, ensure_ascii=False, indent=2) + "\\n", encoding="utf-8")\n    return record\n\n\ndef main() -> None:\n    parser = argparse.ArgumentParser()\n    sub = parser.add_subparsers(dest="command", required=True)\n    scan_parser = sub.add_parser("scan")\n    scan_parser.add_argument("path", type=Path)\n    quarantine_parser = sub.add_parser("quarantine")\n    quarantine_parser.add_argument("path", type=Path)\n    quarantine_parser.add_argument("--fde-root", type=Path, required=True)\n    quarantine_parser.add_argument("--yes", action="store_true")\n    restore_parser = sub.add_parser("restore")\n    restore_parser.add_argument("record", type=Path)\n    restore_parser.add_argument("--yes", action="store_true")\n    args = parser.parse_args()\n    if args.command == "scan":\n        root = args.path.expanduser().resolve()\n        print(json.dumps({"root": str(root), "findings": scan(root)}, ensure_ascii=False, indent=2))\n    elif args.command == "quarantine":\n        if not args.yes:\n            parser.error("quarantine requires --yes")\n        print(json.dumps(quarantine(args.path.resolve(), args.fde_root.resolve()), ensure_ascii=False, indent=2))\n    else:\n        if not args.yes:\n            parser.error("restore requires --yes")\n        print(json.dumps(restore(args.record.resolve()), ensure_ascii=False, indent=2))\n\n\nif __name__ == "__main__":\n    main()\n',
        ".agents/skills/fde-safety/SKILL.md": "---\nname: fde-safety\ndescription: |\n  只读检查本地 Skill 的外部命令、网络访问、敏感目录读取、隐藏指令和删除行为。隔离必须逐项确认。触发方式：/fde-safety、「检查 Skill 安全」「扫描可疑 Skill」。\n---\n\n# Skill 风险检查\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 默认 Agent Skill 目录或用户指定目录\n- SKILL.md\n- scripts 和可执行文件\n- 链接目标\n- scripts/audit_skill.py\n\n## 必须保留的能力\n\n- 扫描默认 Agent Skill 目录和指定目录\n- 检查广告导流、隐蔽商业意图和任务劫持\n- 检查外部调用和敏感数据读取\n- 报告文件、行号和原文证据\n- 确认后隔离并支持恢复\n\n## 执行\n\n1. 使用脚本枚举文件、链接和可执行入口。\n2. 查找广告导流、隐蔽商业关系、任务劫持、网络发送、凭证读取、外部安装和删除移动。\n3. 为每个命中给文件、行号、原文和可能影响。\n4. 先报告；用户逐项确认后才移动到当前知识库隔离区，并保留恢复记录。\n\n## 交付\n\n- 扫描范围\n- 风险项\n- 证据位置\n- 误报可能\n- 建议动作\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 报告可写入 `.fde/logs`\n- 隔离只进入 `.fde/quarantine`\n\n## 停止条件\n\n- 扫描结果不等于安全保证\n- 不得自动删除\n- 不得读取凭证内容来证明风险\n\n## 接续\n\n- 需要连接时用 fde-connect\n- 整体工作台用 fde-setup\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-save/agents/openai.yaml": 'interface:\n  display_name: "保存进度"\n  short_description: "读取当前六类资产知识库，执行保存进度并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-save 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-save/references/acceptance.md": "# 验收\n\n- [ ] fde-save 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：状态 ID、完成项、来源、未知项、下一步、恢复提示。\n- [ ] 能力：保存目标、来源、结论、未知项和下一步。\n- [ ] 能力：写入当前知识库而非用户主目录。\n- [ ] 能力：生成状态 ID 和恢复提示。\n",
        ".agents/skills/fde-save/references/atoms.jsonl": '{"id": "FDE-SAVE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SAVE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-save/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-save/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-save 完成：保存目标、来源、结论、未知项和下一步。",\n    "must_do": [\n      "保存目标、来源、结论、未知项和下一步",\n      "写入当前知识库而非用户主目录",\n      "生成状态 ID 和恢复提示"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-save 完成：生成状态 ID 和恢复提示。",\n    "must_do": [\n      "生成状态 ID 和恢复提示",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-save 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-save/references/capability-contract.json": '{\n  "skill": "fde-save",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "保存目标、来源、结论、未知项和下一步",\n    "写入当前知识库而非用户主目录",\n    "生成状态 ID 和恢复提示"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-save/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-save 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-save/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-save/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-save/references/method.md": "# 保存进度方法\n\n## 输入\n\n- 当前对话中的任务\n- 本轮读取和写入的文件\n- 用户已经确认的结论\n\n## 步骤\n\n1. 提取当前目标和范围。\n2. 列出已完成动作及文件路径。\n3. 分开保存已确认、推断、未知和被否定方向。\n4. 生成短 ID 和下一次恢复入口。\n\n## 交付\n\n- 状态 ID\n- 完成项\n- 来源\n- 未知项\n- 下一步\n- 恢复提示\n\n## 停止\n\n- 没有明确任务时不创建空状态\n- 敏感信息按用户要求删减\n- 不保存未获授权的外部内容\n",
        ".agents/skills/fde-save/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-save`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-save/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-save` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-save`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-save/SKILL.md": "---\nname: fde-save\ndescription: |\n  保存当前知识库任务的目标、已用来源、完成项、未知项和下一步。触发方式：/fde-save、「保存进度」「下次接着做」。\n---\n\n# 保存进度\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前对话中的任务\n- 本轮读取和写入的文件\n- 用户已经确认的结论\n\n## 必须保留的能力\n\n- 保存目标、来源、结论、未知项和下一步\n- 写入当前知识库而非用户主目录\n- 生成状态 ID 和恢复提示\n\n## 执行\n\n1. 提取当前目标和范围。\n2. 列出已完成动作及文件路径。\n3. 分开保存已确认、推断、未知和被否定方向。\n4. 生成短 ID 和下一次恢复入口。\n\n## 交付\n\n- 状态 ID\n- 完成项\n- 来源\n- 未知项\n- 下一步\n- 恢复提示\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入 `.fde/state/sessions`，不写用户主目录\n\n## 停止条件\n\n- 没有明确任务时不创建空状态\n- 敏感信息按用户要求删减\n- 不保存未获授权的外部内容\n\n## 接续\n\n- 恢复时用 fde-resume\n- 多次状态汇总用 fde-report\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-setup/agents/openai.yaml": 'interface:\n  display_name: "Agent 工作目录"\n  short_description: "读取当前六类资产知识库，执行Agent 工作目录并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-setup 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-setup/references/acceptance.md": "# 验收\n\n- [ ] fde-setup 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前结构、真源选择、目标结构、变更预览、验证结果。\n- [ ] 能力：审计 Agent 规则文件和技能目录。\n- [ ] 能力：确定规则真源和 Skill 真源。\n- [ ] 能力：统一名称和入口。\n- [ ] 能力：覆盖 Claude Code、Codex、Grok 和通用 Agents。\n- [ ] 能力：先预览再迁移。\n",
        ".agents/skills/fde-setup/references/atoms.jsonl": '{"id": "FDE-SETUP-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SETUP-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-setup/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-setup/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-setup 完成：审计 Agent 规则文件和技能目录。",\n    "must_do": [\n      "审计 Agent 规则文件和技能目录",\n      "确定规则真源和 Skill 真源",\n      "统一名称和入口"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-setup 完成：先预览再迁移。",\n    "must_do": [\n      "先预览再迁移",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-setup 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-setup/references/capability-contract.json": '{\n  "skill": "fde-setup",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "审计 Agent 规则文件和技能目录",\n    "确定规则真源和 Skill 真源",\n    "统一名称和入口",\n    "覆盖 Claude Code、Codex、Grok 和通用 Agents",\n    "先预览再迁移"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-setup/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-setup 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-setup/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-setup/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-setup/references/method.md": "# Agent 工作目录方法\n\n## 输入\n\n- 项目根目录\n- 现有 AGENTS.md、CLAUDE.md 和 skills\n- 目标 Agent\n- 真源位置\n\n## 步骤\n\n1. 盘点现有规则、技能和重复副本。\n2. 选择一个规则真源和一个 Skill 真源。\n3. 生成各宿主需要的最小入口文件或连接方案。\n4. 先预览新增、修改和冲突，确认后执行。\n\n## 交付\n\n- 当前结构\n- 真源选择\n- 目标结构\n- 变更预览\n- 验证结果\n\n## 停止\n\n- 不删除原有配置\n- 规则冲突时不自动合并\n- 不得把客户知识库连接到其他项目\n",
        ".agents/skills/fde-setup/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-setup`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-setup/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-setup` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-agent-migration`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-setup/SKILL.md": "---\nname: fde-setup\ndescription: |\n  把一个知识库项目整理成 Claude Code、Codex 和其他 Agent 都能识别的本地工作目录。保留一个真源，其他入口只做连接。触发方式：/fde-setup、「整理 Agent 工作台」「统一项目规则」。\n---\n\n# Agent 工作目录\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 项目根目录\n- 现有 AGENTS.md、CLAUDE.md 和 skills\n- 目标 Agent\n- 真源位置\n\n## 必须保留的能力\n\n- 审计 Agent 规则文件和技能目录\n- 确定规则真源和 Skill 真源\n- 统一名称和入口\n- 覆盖 Claude Code、Codex、Grok 和通用 Agents\n- 先预览再迁移\n\n## 执行\n\n1. 盘点现有规则、技能和重复副本。\n2. 选择一个规则真源和一个 Skill 真源。\n3. 生成各宿主需要的最小入口文件或连接方案。\n4. 先预览新增、修改和冲突，确认后执行。\n\n## 交付\n\n- 当前结构\n- 真源选择\n- 目标结构\n- 变更预览\n- 验证结果\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 只在当前项目内写入口文件\n- 全局安装必须单独确认\n\n## 停止条件\n\n- 不删除原有配置\n- 规则冲突时不自动合并\n- 不得把客户知识库连接到其他项目\n\n## 接续\n\n- 只连接一个 Skill 用 fde-connect\n- 完成后用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-spread/agents/openai.yaml": 'interface:\n  display_name: "传播复盘"\n  short_description: "读取当前六类资产知识库，执行传播复盘并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-spread 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-spread/references/acceptance.md": "# 验收\n\n- [ ] fde-spread 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：数据摘要、有效信号、可能机制、反证、下一次实验。\n- [ ] 能力：没有发布数据时做内容机制假设。\n- [ ] 能力：有数据时用评论和指标验证。\n- [ ] 能力：分析受众情绪、有效立场和传播动作。\n- [ ] 能力：给出可继续讨论的方向。\n- [ ] 能力：区分相关性和因果。\n",
        ".agents/skills/fde-spread/references/analysis-modes.md": "# 传播分析模式\n\n## 内容假设\n\n没有数据时，只提出可证伪机制：身份表达、情绪释放、实用交换、群体信号、行动成本。\n\n## 数据复盘\n\n有数据时，用曝光、停留、互动、转发、转化和评论原话验证或否定假设。\n",
        ".agents/skills/fde-spread/references/atoms.jsonl": '{"id": "FDE-SPREAD-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-SPREAD-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-spread/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-spread/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-spread 完成：没有发布数据时做内容机制假设。",\n    "must_do": [\n      "没有发布数据时做内容机制假设",\n      "有数据时用评论和指标验证",\n      "分析受众情绪、有效立场和传播动作"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-spread 完成：区分相关性和因果。",\n    "must_do": [\n      "区分相关性和因果",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-spread 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-spread/references/capability-contract.json": '{\n  "skill": "fde-spread",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "没有发布数据时做内容机制假设",\n    "有数据时用评论和指标验证",\n    "分析受众情绪、有效立场和传播动作",\n    "给出可继续讨论的方向",\n    "区分相关性和因果"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-spread/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-spread 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-spread/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-spread/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-spread/references/method.md": "# 传播复盘方法\n\n## 输入\n\n- 原内容\n- 平台数据\n- 评论和转发语\n- 发布时间和分发方式\n- 同账号基线\n\n## 步骤\n\n1. 先判断是内容假设模式还是数据复盘模式。\n2. 没有数据时，从身份表达、情绪释放、实用交换、群体信号和行动成本提出可证伪假设。\n3. 有数据时确认口径和基线，拆分曝光、停留、互动、转发和转化信号。\n4. 用评论原话验证受众情绪和有效立场，不替读者发明动机。\n5. 输出可继续讨论的方向、反证和下一次实验。\n\n## 交付\n\n- 数据摘要\n- 有效信号\n- 可能机制\n- 反证\n- 下一次实验\n\n## 停止\n\n- 没有数据时只做内容假设\n- 平台口径不同不直接横比\n- 相关性不写成因果\n",
        ".agents/skills/fde-spread/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-spread`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-spread/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-spread` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-spread`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-spread/SKILL.md": "---\nname: fde-spread\ndescription: |\n  根据真实发布数据、评论和转发语境分析内容为什么传播或没有传播。触发方式：/fde-spread、「为什么这条传播了」「复盘内容数据」。\n---\n\n# 传播复盘\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 原内容\n- 平台数据\n- 评论和转发语\n- 发布时间和分发方式\n- 同账号基线\n\n## 必须保留的能力\n\n- 没有发布数据时做内容机制假设\n- 有数据时用评论和指标验证\n- 分析受众情绪、有效立场和传播动作\n- 给出可继续讨论的方向\n- 区分相关性和因果\n\n## 执行\n\n1. 先判断是内容假设模式还是数据复盘模式。\n2. 没有数据时，从身份表达、情绪释放、实用交换、群体信号和行动成本提出可证伪假设。\n3. 有数据时确认口径和基线，拆分曝光、停留、互动、转发和转化信号。\n4. 用评论原话验证受众情绪和有效立场，不替读者发明动机。\n5. 输出可继续讨论的方向、反证和下一次实验。\n\n## 交付\n\n- 数据摘要\n- 有效信号\n- 可能机制\n- 反证\n- 下一次实验\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 写入内容库的 `数据复盘`，关联原发布稿\n\n## 停止条件\n\n- 没有数据时只做内容假设\n- 平台口径不同不直接横比\n- 相关性不写成因果\n\n## 接续\n\n- 下一题用 fde-topics\n- 下一稿用 fde-write\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-start/agents/openai.yaml": 'interface:\n  display_name: "知识库入口"\n  short_description: "读取当前六类资产知识库，执行知识库入口并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-start 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-start/references/acceptance.md": "# 验收\n\n- [ ] fde-start 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前任务类型、选择的一个 Skill、选择依据、执行所需的现有输入。\n- [ ] 能力：完整讲解第一次使用方法。\n- [ ] 能力：任务开始前选择一个入口。\n- [ ] 能力：根据上一步结果继续导航。\n- [ ] 能力：路由后直接执行，不让用户重复输入。\n",
        ".agents/skills/fde-start/references/atoms.jsonl": '{"id": "FDE-START-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-START-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-start/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-start/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-start 完成：完整讲解第一次使用方法。",\n    "must_do": [\n      "完整讲解第一次使用方法",\n      "任务开始前选择一个入口",\n      "根据上一步结果继续导航"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-start 完成：路由后直接执行，不让用户重复输入。",\n    "must_do": [\n      "路由后直接执行，不让用户重复输入",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-start 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-start/references/capability-contract.json": '{\n  "skill": "fde-start",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "完整讲解第一次使用方法",\n    "任务开始前选择一个入口",\n    "根据上一步结果继续导航",\n    "路由后直接执行，不让用户重复输入"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-start/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-start 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-start/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-start/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-start/references/method.md": "# 知识库入口方法\n\n## 输入\n\n- `.fde/config.yaml`\n- 六类资产库的文件数量和最近更新时间\n- 当前对话中的目标、材料和限制\n\n## 步骤\n\n1. 用户要求新手说明时，先讲可以交什么、系统怎样处理、会得到什么，再进入真实任务。\n2. 判断是空库、进料、查资料、做判断、做内容还是维护任务。\n3. 信息足够时直接选一个 Skill；信息不足时只问一个会改变路由的问题。\n4. 任务完成后读取实际结果，再选一个下一入口；说明依据并直接继续。\n\n## 交付\n\n- 当前任务类型\n- 选择的一个 Skill\n- 选择依据\n- 执行所需的现有输入\n\n## 停止\n\n- 找不到配置时停止路由并询问知识库位置\n- 两个方向无法区分时只问一个问题\n",
        ".agents/skills/fde-start/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-start`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-start/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-start` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-start/SKILL.md": "---\nname: fde-start\ndescription: |\n  读取当前六类资产库的状态和用户任务，只选择一个当前入口。适用于不知道从哪里开始、刚导入材料或完成一步后继续推进。触发方式：/fde-start、「从哪里开始」「下一步」。\n---\n\n# 知识库入口\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- `.fde/config.yaml`\n- 六类资产库的文件数量和最近更新时间\n- 当前对话中的目标、材料和限制\n\n## 必须保留的能力\n\n- 完整讲解第一次使用方法\n- 任务开始前选择一个入口\n- 根据上一步结果继续导航\n- 路由后直接执行，不让用户重复输入\n\n## 执行\n\n1. 用户要求新手说明时，先讲可以交什么、系统怎样处理、会得到什么，再进入真实任务。\n2. 判断是空库、进料、查资料、做判断、做内容还是维护任务。\n3. 信息足够时直接选一个 Skill；信息不足时只问一个会改变路由的问题。\n4. 任务完成后读取实际结果，再选一个下一入口；说明依据并直接继续。\n\n## 交付\n\n- 当前任务类型\n- 选择的一个 Skill\n- 选择依据\n- 执行所需的现有输入\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 本 Skill 不写业务资产，只读取状态\n\n## 停止条件\n\n- 找不到配置时停止路由并询问知识库位置\n- 两个方向无法区分时只问一个问题\n\n## 接续\n\n- 空库用 fde-interview\n- 有原始材料用 fde-ingest\n- 已有明确任务时进入对应 Skill\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-title/agents/openai.yaml": 'interface:\n  display_name: "内容标题"\n  short_description: "读取当前六类资产知识库，执行内容标题并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-title 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-title/references/acceptance.md": "# 验收\n\n- [ ] fde-title 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：候选标题、Top 3、各自侧重点、风险词、正文支持位置。\n- [ ] 能力：从 75 个自有标题结构中筛选。\n- [ ] 能力：根据平台、读者和正文选择。\n- [ ] 能力：输出候选和 Top 3。\n- [ ] 能力：说明结构选择原因。\n- [ ] 能力：检查标题承诺能被正文支持。\n",
        ".agents/skills/fde-title/references/atoms.jsonl": '{"id": "FDE-TITLE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TITLE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-title/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-title/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-title 完成：从 75 个自有标题结构中筛选。",\n    "must_do": [\n      "从 75 个自有标题结构中筛选",\n      "根据平台、读者和正文选择",\n      "输出候选和 Top 3"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-title 完成：检查标题承诺能被正文支持。",\n    "must_do": [\n      "检查标题承诺能被正文支持",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-title 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-title/references/capability-contract.json": '{\n  "skill": "fde-title",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从 75 个自有标题结构中筛选",\n    "根据平台、读者和正文选择",\n    "输出候选和 Top 3",\n    "说明结构选择原因",\n    "检查标题承诺能被正文支持"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-title/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-title 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-title/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-title/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-title/references/method.md": "# 内容标题方法\n\n## 输入\n\n- 正文或提纲\n- 目标读者\n- 平台\n- 可用数字和结果\n- 禁用表达\n- references/title-patterns.json\n\n## 步骤\n\n1. 先用一句话概括正文真实交付。\n2. 提取对象、问题、变化和限制。\n3. 从 75 个自有结构中按平台和材料筛选，再生成 8—12 个标题。\n4. 检查每个标题是否能由正文支持，筛出 3 个并说明使用的结构。\n\n## 交付\n\n- 候选标题\n- Top 3\n- 各自侧重点\n- 风险词\n- 正文支持位置\n\n## 停止\n\n- 正文没有明确交付时先不做标题\n- 不得添加正文没有的数字或结果\n- 平台规则不确定时标记核验\n",
        ".agents/skills/fde-title/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-title`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-title/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-title` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-xhs-title`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-title/references/title-patterns.json": '[\n  {\n    "id": "T001",\n    "angle": "problem",\n    "pattern": "{audience}遇到{problem}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T002",\n    "angle": "problem",\n    "pattern": "别急着{common_action}：{problem}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T003",\n    "angle": "problem",\n    "pattern": "关于{problem}，我只看这{number}个信号",\n    "required_fields": [\n      "number",\n      "problem"\n    ]\n  },\n  {\n    "id": "T004",\n    "angle": "problem",\n    "pattern": "做{problem}之前，先回答这个问题",\n    "required_fields": [\n      "problem"\n    ]\n  },\n  {\n    "id": "T005",\n    "angle": "problem",\n    "pattern": "{problem}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "missing_piece",\n      "problem"\n    ]\n  },\n  {\n    "id": "T006",\n    "angle": "problem",\n    "pattern": "我处理{problem}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "problem",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T007",\n    "angle": "problem",\n    "pattern": "一个{case_type}案例说清{problem}",\n    "required_fields": [\n      "case_type",\n      "problem"\n    ]\n  },\n  {\n    "id": "T008",\n    "angle": "problem",\n    "pattern": "{problem}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "problem"\n    ]\n  },\n  {\n    "id": "T009",\n    "angle": "problem",\n    "pattern": "为什么{audience}总在{problem}这里停住",\n    "required_fields": [\n      "audience",\n      "problem"\n    ]\n  },\n  {\n    "id": "T010",\n    "angle": "problem",\n    "pattern": "{problem}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "problem"\n    ]\n  },\n  {\n    "id": "T011",\n    "angle": "problem",\n    "pattern": "如果重新做{problem}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "problem"\n    ]\n  },\n  {\n    "id": "T012",\n    "angle": "problem",\n    "pattern": "{problem}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "problem",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T013",\n    "angle": "problem",\n    "pattern": "判断{problem}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "problem"\n    ]\n  },\n  {\n    "id": "T014",\n    "angle": "problem",\n    "pattern": "{audience}问我{problem}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "problem"\n    ]\n  },\n  {\n    "id": "T015",\n    "angle": "problem",\n    "pattern": "{problem}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "problem",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T016",\n    "angle": "result",\n    "pattern": "{audience}遇到得到{result}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T017",\n    "angle": "result",\n    "pattern": "别急着{common_action}：得到{result}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T018",\n    "angle": "result",\n    "pattern": "关于得到{result}，我只看这{number}个信号",\n    "required_fields": [\n      "number",\n      "result"\n    ]\n  },\n  {\n    "id": "T019",\n    "angle": "result",\n    "pattern": "做得到{result}之前，先回答这个问题",\n    "required_fields": [\n      "result"\n    ]\n  },\n  {\n    "id": "T020",\n    "angle": "result",\n    "pattern": "得到{result}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "missing_piece",\n      "result"\n    ]\n  },\n  {\n    "id": "T021",\n    "angle": "result",\n    "pattern": "我处理得到{result}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "result",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T022",\n    "angle": "result",\n    "pattern": "一个{case_type}案例说清得到{result}",\n    "required_fields": [\n      "case_type",\n      "result"\n    ]\n  },\n  {\n    "id": "T023",\n    "angle": "result",\n    "pattern": "得到{result}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "result"\n    ]\n  },\n  {\n    "id": "T024",\n    "angle": "result",\n    "pattern": "为什么{audience}总在得到{result}这里停住",\n    "required_fields": [\n      "audience",\n      "result"\n    ]\n  },\n  {\n    "id": "T025",\n    "angle": "result",\n    "pattern": "得到{result}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "result"\n    ]\n  },\n  {\n    "id": "T026",\n    "angle": "result",\n    "pattern": "如果重新做得到{result}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "result"\n    ]\n  },\n  {\n    "id": "T027",\n    "angle": "result",\n    "pattern": "得到{result}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "result",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T028",\n    "angle": "result",\n    "pattern": "判断得到{result}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "result"\n    ]\n  },\n  {\n    "id": "T029",\n    "angle": "result",\n    "pattern": "{audience}问我得到{result}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "result"\n    ]\n  },\n  {\n    "id": "T030",\n    "angle": "result",\n    "pattern": "得到{result}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "result",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T031",\n    "angle": "decision",\n    "pattern": "{audience}遇到决定是否{decision}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T032",\n    "angle": "decision",\n    "pattern": "别急着{common_action}：决定是否{decision}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T033",\n    "angle": "decision",\n    "pattern": "关于决定是否{decision}，我只看这{number}个信号",\n    "required_fields": [\n      "decision",\n      "number"\n    ]\n  },\n  {\n    "id": "T034",\n    "angle": "decision",\n    "pattern": "做决定是否{decision}之前，先回答这个问题",\n    "required_fields": [\n      "decision"\n    ]\n  },\n  {\n    "id": "T035",\n    "angle": "decision",\n    "pattern": "决定是否{decision}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "decision",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T036",\n    "angle": "decision",\n    "pattern": "我处理决定是否{decision}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "decision",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T037",\n    "angle": "decision",\n    "pattern": "一个{case_type}案例说清决定是否{decision}",\n    "required_fields": [\n      "case_type",\n      "decision"\n    ]\n  },\n  {\n    "id": "T038",\n    "angle": "decision",\n    "pattern": "决定是否{decision}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "decision"\n    ]\n  },\n  {\n    "id": "T039",\n    "angle": "decision",\n    "pattern": "为什么{audience}总在决定是否{decision}这里停住",\n    "required_fields": [\n      "audience",\n      "decision"\n    ]\n  },\n  {\n    "id": "T040",\n    "angle": "decision",\n    "pattern": "决定是否{decision}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "decision"\n    ]\n  },\n  {\n    "id": "T041",\n    "angle": "decision",\n    "pattern": "如果重新做决定是否{decision}，我会先做{first_step}",\n    "required_fields": [\n      "decision",\n      "first_step"\n    ]\n  },\n  {\n    "id": "T042",\n    "angle": "decision",\n    "pattern": "决定是否{decision}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "decision",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T043",\n    "angle": "decision",\n    "pattern": "判断决定是否{decision}是否成立，看{evidence}",\n    "required_fields": [\n      "decision",\n      "evidence"\n    ]\n  },\n  {\n    "id": "T044",\n    "angle": "decision",\n    "pattern": "{audience}问我决定是否{decision}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "decision"\n    ]\n  },\n  {\n    "id": "T045",\n    "angle": "decision",\n    "pattern": "决定是否{decision}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "decision",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T046",\n    "angle": "case",\n    "pattern": "{audience}遇到案例中的{case_change}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "case_change",\n      "condition"\n    ]\n  },\n  {\n    "id": "T047",\n    "angle": "case",\n    "pattern": "别急着{common_action}：案例中的{case_change}可能卡在{condition}",\n    "required_fields": [\n      "case_change",\n      "common_action",\n      "condition"\n    ]\n  },\n  {\n    "id": "T048",\n    "angle": "case",\n    "pattern": "关于案例中的{case_change}，我只看这{number}个信号",\n    "required_fields": [\n      "case_change",\n      "number"\n    ]\n  },\n  {\n    "id": "T049",\n    "angle": "case",\n    "pattern": "做案例中的{case_change}之前，先回答这个问题",\n    "required_fields": [\n      "case_change"\n    ]\n  },\n  {\n    "id": "T050",\n    "angle": "case",\n    "pattern": "案例中的{case_change}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "case_change",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T051",\n    "angle": "case",\n    "pattern": "我处理案例中的{case_change}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "case_change",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T052",\n    "angle": "case",\n    "pattern": "一个{case_type}案例说清案例中的{case_change}",\n    "required_fields": [\n      "case_change",\n      "case_type"\n    ]\n  },\n  {\n    "id": "T053",\n    "angle": "case",\n    "pattern": "案例中的{case_change}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T054",\n    "angle": "case",\n    "pattern": "为什么{audience}总在案例中的{case_change}这里停住",\n    "required_fields": [\n      "audience",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T055",\n    "angle": "case",\n    "pattern": "案例中的{case_change}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "case_change",\n      "condition"\n    ]\n  },\n  {\n    "id": "T056",\n    "angle": "case",\n    "pattern": "如果重新做案例中的{case_change}，我会先做{first_step}",\n    "required_fields": [\n      "case_change",\n      "first_step"\n    ]\n  },\n  {\n    "id": "T057",\n    "angle": "case",\n    "pattern": "案例中的{case_change}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "case_change",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T058",\n    "angle": "case",\n    "pattern": "判断案例中的{case_change}是否成立，看{evidence}",\n    "required_fields": [\n      "case_change",\n      "evidence"\n    ]\n  },\n  {\n    "id": "T059",\n    "angle": "case",\n    "pattern": "{audience}问我案例中的{case_change}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "case_change"\n    ]\n  },\n  {\n    "id": "T060",\n    "angle": "case",\n    "pattern": "案例中的{case_change}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "case_change",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T061",\n    "angle": "method",\n    "pattern": "{audience}遇到使用{method}，先检查{condition}",\n    "required_fields": [\n      "audience",\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T062",\n    "angle": "method",\n    "pattern": "别急着{common_action}：使用{method}可能卡在{condition}",\n    "required_fields": [\n      "common_action",\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T063",\n    "angle": "method",\n    "pattern": "关于使用{method}，我只看这{number}个信号",\n    "required_fields": [\n      "method",\n      "number"\n    ]\n  },\n  {\n    "id": "T064",\n    "angle": "method",\n    "pattern": "做使用{method}之前，先回答这个问题",\n    "required_fields": [\n      "method"\n    ]\n  },\n  {\n    "id": "T065",\n    "angle": "method",\n    "pattern": "使用{method}没有结果，通常漏了{missing_piece}",\n    "required_fields": [\n      "method",\n      "missing_piece"\n    ]\n  },\n  {\n    "id": "T066",\n    "angle": "method",\n    "pattern": "我处理使用{method}时，会先删掉{wrong_action}",\n    "required_fields": [\n      "method",\n      "wrong_action"\n    ]\n  },\n  {\n    "id": "T067",\n    "angle": "method",\n    "pattern": "一个{case_type}案例说清使用{method}",\n    "required_fields": [\n      "case_type",\n      "method"\n    ]\n  },\n  {\n    "id": "T068",\n    "angle": "method",\n    "pattern": "使用{method}从{before}到{after}，中间改了什么",\n    "required_fields": [\n      "after",\n      "before",\n      "method"\n    ]\n  },\n  {\n    "id": "T069",\n    "angle": "method",\n    "pattern": "为什么{audience}总在使用{method}这里停住",\n    "required_fields": [\n      "audience",\n      "method"\n    ]\n  },\n  {\n    "id": "T070",\n    "angle": "method",\n    "pattern": "使用{method}不是越多越好，边界在{condition}",\n    "required_fields": [\n      "condition",\n      "method"\n    ]\n  },\n  {\n    "id": "T071",\n    "angle": "method",\n    "pattern": "如果重新做使用{method}，我会先做{first_step}",\n    "required_fields": [\n      "first_step",\n      "method"\n    ]\n  },\n  {\n    "id": "T072",\n    "angle": "method",\n    "pattern": "使用{method}的成本，不只是在{visible_cost}",\n    "required_fields": [\n      "method",\n      "visible_cost"\n    ]\n  },\n  {\n    "id": "T073",\n    "angle": "method",\n    "pattern": "判断使用{method}是否成立，看{evidence}",\n    "required_fields": [\n      "evidence",\n      "method"\n    ]\n  },\n  {\n    "id": "T074",\n    "angle": "method",\n    "pattern": "{audience}问我使用{method}，我的回答是{answer}",\n    "required_fields": [\n      "answer",\n      "audience",\n      "method"\n    ]\n  },\n  {\n    "id": "T075",\n    "angle": "method",\n    "pattern": "使用{method}做对之后，下一步不是{wrong_action}",\n    "required_fields": [\n      "method",\n      "wrong_action"\n    ]\n  }\n]\n',
        ".agents/skills/fde-title/SKILL.md": "---\nname: fde-title\ndescription: |\n  根据平台、选题、读者和事实生成标题，避免标题承诺超过正文证据。触发方式：/fde-title、「起标题」「给这篇小红书标题」。\n---\n\n# 内容标题\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 正文或提纲\n- 目标读者\n- 平台\n- 可用数字和结果\n- 禁用表达\n- references/title-patterns.json\n\n## 必须保留的能力\n\n- 从 75 个自有标题结构中筛选\n- 根据平台、读者和正文选择\n- 输出候选和 Top 3\n- 说明结构选择原因\n- 检查标题承诺能被正文支持\n\n## 执行\n\n1. 先用一句话概括正文真实交付。\n2. 提取对象、问题、变化和限制。\n3. 从 75 个自有结构中按平台和材料筛选，再生成 8—12 个标题。\n4. 检查每个标题是否能由正文支持，筛出 3 个并说明使用的结构。\n\n## 交付\n\n- 候选标题\n- Top 3\n- 各自侧重点\n- 风险词\n- 正文支持位置\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 选定标题写回草稿头部，保留旧标题记录\n\n## 停止条件\n\n- 正文没有明确交付时先不做标题\n- 不得添加正文没有的数字或结果\n- 平台规则不确定时标记核验\n\n## 接续\n\n- 标题确定后用 fde-review\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-topics/agents/openai.yaml": 'interface:\n  display_name: "选题清单"\n  short_description: "读取当前六类资产知识库，执行选题清单并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-topics 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-topics/references/acceptance.md": "# 验收\n\n- [ ] fde-topics 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：5—10 个候选题、每题来源、目标读者、核心矛盾、建议平台、不选原因。\n- [ ] 能力：从六类资产和真实用户声音找题。\n- [ ] 能力：检查是否是真需求。\n- [ ] 能力：检查是否适合当前老板和产品。\n- [ ] 能力：检查角度是否与常见写法重复。\n- [ ] 能力：把选中题写入内容库。\n",
        ".agents/skills/fde-topics/references/atoms.jsonl": '{"id": "FDE-TOPICS-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-TOPICS-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-topics/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-topics/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-topics 完成：从六类资产和真实用户声音找题。",\n    "must_do": [\n      "从六类资产和真实用户声音找题",\n      "检查是否是真需求",\n      "检查是否适合当前老板和产品"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-topics 完成：把选中题写入内容库。",\n    "must_do": [\n      "把选中题写入内容库",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-topics 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-topics/references/capability-contract.json": '{\n  "skill": "fde-topics",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "从六类资产和真实用户声音找题",\n    "检查是否是真需求",\n    "检查是否适合当前老板和产品",\n    "检查角度是否与常见写法重复",\n    "把选中题写入内容库"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-topics/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-topics 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-topics/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-topics/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-topics/references/method.md": "# 选题清单方法\n\n## 输入\n\n- 客户高频问题\n- 产品异议\n- 案例中的变化\n- 老板观点\n- 已发布内容和数据复盘\n\n## 步骤\n\n1. 先确认平台和本次内容目标。\n2. 从不同资产库各找证据，不从热词凭空造题。\n3. 把候选题写成对象、矛盾、证据和预期动作。\n4. 去除与已发布内容重复的题，按证据强度和业务关系排序。\n\n## 交付\n\n- 5—10 个候选题\n- 每题来源\n- 目标读者\n- 核心矛盾\n- 建议平台\n- 不选原因\n\n## 停止\n\n- 没有真实来源时不伪装成知识库选题\n- 平台未定时只给方向，不写成稿\n",
        ".agents/skills/fde-topics/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-topics`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-topics/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-topics` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`skills矩阵/小红书选题挖掘/SKILL.md`。\n- 该文件只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-topics/SKILL.md": "---\nname: fde-topics\ndescription: |\n  从客户原话、产品问题、案例结果、老板判断和方法资产中生成可追溯选题。适用于公众号、小红书、朋友圈和口播。触发方式：/fde-topics、「今天写什么」「从知识库找选题」。\n---\n\n# 选题清单\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 客户高频问题\n- 产品异议\n- 案例中的变化\n- 老板观点\n- 已发布内容和数据复盘\n\n## 必须保留的能力\n\n- 从六类资产和真实用户声音找题\n- 检查是否是真需求\n- 检查是否适合当前老板和产品\n- 检查角度是否与常见写法重复\n- 把选中题写入内容库\n\n## 执行\n\n1. 先确认平台和本次内容目标。\n2. 从不同资产库各找证据，不从热词凭空造题。\n3. 把候选题写成对象、矛盾、证据和预期动作。\n4. 去除与已发布内容重复的题，按证据强度和业务关系排序。\n\n## 交付\n\n- 5—10 个候选题\n- 每题来源\n- 目标读者\n- 核心矛盾\n- 建议平台\n- 不选原因\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 用户选中的题写入内容库的 `选题`\n- 记录来源和创建日期\n\n## 停止条件\n\n- 没有真实来源时不伪装成知识库选题\n- 平台未定时只给方向，不写成稿\n\n## 接续\n\n- 选题确认后用 fde-write\n- 方向存疑时用 fde-diagnose\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-update/agents/openai.yaml": 'interface:\n  display_name: "套件更新"\n  short_description: "读取当前六类资产知识库，执行套件更新并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-update 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-update/references/acceptance.md": "# 验收\n\n- [ ] fde-update 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：当前版本、候选版本、差异、本地冲突、备份位置、验证结果。\n- [ ] 能力：检查当前和候选版本。\n- [ ] 能力：只使用配置中的更新来源。\n- [ ] 能力：展示新增、修改、删除和本地冲突。\n- [ ] 能力：确认后只更新 FDE Skills。\n- [ ] 能力：不修改六类资产和状态。\n",
        ".agents/skills/fde-update/references/atoms.jsonl": '{"id": "FDE-UPDATE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-UPDATE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-update/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-update/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-update 完成：检查当前和候选版本。",\n    "must_do": [\n      "检查当前和候选版本",\n      "只使用配置中的更新来源",\n      "展示新增、修改、删除和本地冲突"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-update 完成：不修改六类资产和状态。",\n    "must_do": [\n      "不修改六类资产和状态",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-update 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-update/references/capability-contract.json": '{\n  "skill": "fde-update",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "检查当前和候选版本",\n    "只使用配置中的更新来源",\n    "展示新增、修改、删除和本地冲突",\n    "确认后只更新 FDE Skills",\n    "不修改六类资产和状态"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-update/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-update 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-update/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-update/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-update/references/method.md": "# 套件更新方法\n\n## 输入\n\n- 当前 VERSION\n- fde-manifest.json\n- 配置中的 update_source\n- 本地改动\n\n## 步骤\n\n1. 验证更新来源是用户配置的地址或目录。\n2. 读取版本和清单，不直接覆盖。\n3. 比较新增、修改、删除和本地改动。\n4. 生成备份与更新预览，确认后执行并重新校验。\n\n## 交付\n\n- 当前版本\n- 候选版本\n- 差异\n- 本地冲突\n- 备份位置\n- 验证结果\n\n## 停止\n\n- 没有 update_source 时只报告\n- 来源无法验证时停止\n- 有本地改动时不强制覆盖\n",
        ".agents/skills/fde-update/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-update`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-update/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-update` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-update`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-update/SKILL.md": "---\nname: fde-update\ndescription: |\n  检查当前 FDE Skills 版本与 `.fde/config.yaml` 明确指定的更新来源。先展示差异，确认后更新 Skill，不改六类资产。触发方式：/fde-update、「检查更新」「升级知识库助手」。\n---\n\n# 套件更新\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 当前 VERSION\n- fde-manifest.json\n- 配置中的 update_source\n- 本地改动\n\n## 必须保留的能力\n\n- 检查当前和候选版本\n- 只使用配置中的更新来源\n- 展示新增、修改、删除和本地冲突\n- 确认后只更新 FDE Skills\n- 不修改六类资产和状态\n\n## 执行\n\n1. 验证更新来源是用户配置的地址或目录。\n2. 读取版本和清单，不直接覆盖。\n3. 比较新增、修改、删除和本地改动。\n4. 生成备份与更新预览，确认后执行并重新校验。\n\n## 交付\n\n- 当前版本\n- 候选版本\n- 差异\n- 本地冲突\n- 备份位置\n- 验证结果\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 只更新 fde-* 和套件元数据\n- 不修改六类资产和 `.fde/state`\n\n## 停止条件\n\n- 没有 update_source 时只报告\n- 来源无法验证时停止\n- 有本地改动时不强制覆盖\n\n## 接续\n\n- 更新后用 fde-health\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".agents/skills/fde-write/agents/openai.yaml": 'interface:\n  display_name: "内容写作"\n  short_description: "读取当前六类资产知识库，执行内容写作并返回来源、结果和未确认项。"\n  default_prompt: "请使用 $fde-write 处理当前知识库里的真实任务，并说明来源和未确认项。"\n',
        ".agents/skills/fde-write/references/acceptance.md": "# 验收\n\n- [ ] fde-write 使用当前知识库配置。\n- [ ] 读取范围与任务有关。\n- [ ] 事实、推断和未知分开。\n- [ ] 关键判断有来源。\n- [ ] 破坏性动作先确认。\n- [ ] 输出包含：写作合同、正文草稿、来源清单、未核实项、下一轮修改重点。\n- [ ] 能力：先诊断选题和材料缺口。\n- [ ] 能力：支持公众号、小红书、搜索、朋友圈和口播。\n- [ ] 能力：能生成实际草稿而不只给建议。\n- [ ] 能力：使用老板原话、产品事实、客户原话和案例。\n- [ ] 能力：成稿附来源和未核实项。\n",
        ".agents/skills/fde-write/references/atoms.jsonl": '{"id": "FDE-WRITE-001", "rule": "先定位当前知识库配置，再读取资料。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-002", "rule": "只加载当前任务需要的资产。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-003", "rule": "区分事实、用户陈述、推断和未知。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-004", "rule": "关键结论返回来源路径。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-005", "rule": "原始材料保持不变。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-006", "rule": "批量写入、移动、覆盖和删除先确认。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-007", "rule": "不跨客户或跨项目读取。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-008", "rule": "资料不足时完成证据允许的部分。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-009", "rule": "不能确认的分类进入待确认区。", "source": "fde-skills-workflow-v1"}\n{"id": "FDE-WRITE-010", "rule": "交付后说明写入位置和未完成项。", "source": "fde-skills-workflow-v1"}\n',
        ".agents/skills/fde-write/references/axioms.md": "# 公理\n\n## AXIOM-01：定位\n\n没有知识库配置就不猜路径。\n\n## AXIOM-02：最小读取\n\n只读取当前任务需要的资产。\n\n## AXIOM-03：证据\n\n事实和推断分开，关键判断附来源。\n\n## AXIOM-04：可恢复\n\n原始材料不覆盖，破坏性动作先确认。\n\n## AXIOM-05：闭环\n\n交付说明结果、写入位置、未知项和下一步。\n",
        ".agents/skills/fde-write/references/behavior-tests.json": '[\n  {\n    "id": "case-1",\n    "prompt": "使用 fde-write 完成：先诊断选题和材料缺口。",\n    "must_do": [\n      "先诊断选题和材料缺口",\n      "支持公众号、小红书、搜索、朋友圈和口播",\n      "能生成实际草稿而不只给建议"\n    ],\n    "must_not": [\n      "编造事实",\n      "跨项目读取"\n    ]\n  },\n  {\n    "id": "case-2",\n    "prompt": "继续使用 fde-write 完成：成稿附来源和未核实项。",\n    "must_do": [\n      "成稿附来源和未核实项",\n      "返回来源",\n      "说明未确认项"\n    ],\n    "must_not": [\n      "把推断写成事实",\n      "覆盖原始材料"\n    ]\n  },\n  {\n    "id": "counterexample-1",\n    "prompt": "找不到配置，但要求 fde-write 批量写入。",\n    "must_do": [\n      "停止写入",\n      "询问根目录"\n    ],\n    "must_not": [\n      "猜路径",\n      "写入用户主目录"\n    ]\n  }\n]\n',
        ".agents/skills/fde-write/references/capability-contract.json": '{\n  "skill": "fde-write",\n  "implementation": "fde-skills-owned",\n  "runtime_uses_historical_skill": false,\n  "must_support": [\n    "先诊断选题和材料缺口",\n    "支持公众号、小红书、搜索、朋友圈和口播",\n    "能生成实际草稿而不只给建议",\n    "使用老板原话、产品事实、客户原话和案例",\n    "成稿附来源和未核实项"\n  ],\n  "tests": [\n    "case-1",\n    "case-2",\n    "counterexample-1"\n  ]\n}\n',
        ".agents/skills/fde-write/references/cases.md": "# 案例\n\n## 正常\n\n配置可读，fde-write 只读取所需资产，交付附来源。\n\n## 资料不足\n\n完成有证据的部分，把缺口留给用户。\n\n## 停止\n\n找不到配置或请求越过项目边界时停止写入。\n",
        ".agents/skills/fde-write/references/library-map.md": "# 六类资产映射\n\n运行时以知识库根目录的 `.fde/config.yaml` 为准。\n\n- owner：老板说明书\n- product：产品库\n- customer：客户需求库\n- case：素材案例库\n- method：方法论库\n- content：内容生产\n\n不得把这些显示名当成固定路径。\n",
        ".agents/skills/fde-write/references/maturity.json": '{\n  "status": "project-owned-v1",\n  "source_role": "historical_reference_only",\n  "live_customer_test": false\n}\n',
        ".agents/skills/fde-write/references/method.md": "# 内容写作方法\n\n## 输入\n\n- 选题记录\n- 老板表达和禁区\n- 产品事实\n- 客户原话\n- 案例和方法\n- 目标平台\n\n## 步骤\n\n1. 确认平台、读者、目的和不能改的事实。\n2. 建立材料表：要用的原话、数字、案例和观点。\n3. 先给结构和缺口；缺口影响成稿时请求补充。\n4. 按平台模式写草稿，末尾附来源清单和未核实项。\n\n## 交付\n\n- 写作合同\n- 正文草稿\n- 来源清单\n- 未核实项\n- 下一轮修改重点\n\n## 停止\n\n- 产品事实或案例结果无法核实时不用确定语气\n- 未指定平台时不套平台格式\n- 不编客户原话\n",
        ".agents/skills/fde-write/references/modes/moments.md": "# 朋友圈模式\n\n- 只写一个事件或判断。\n- 保留老板原话和当时的具体细节。\n- 不用完整文章结构，不强行总结。\n",
        ".agents/skills/fde-write/references/modes/search.md": "# 搜索内容模式\n\n- 用用户会搜索的完整问题作为入口。\n- 先直接回答，再补条件、步骤和常见误区。\n- 产品信息只在确实解决问题时出现。\n",
        ".agents/skills/fde-write/references/modes/voiceover.md": "# 口播模式\n\n- 按说话停顿分段，不按书面段落分段。\n- 每段只承担一个作用。\n- 完稿后交给 fde-flow 检查听觉衔接。\n",
        ".agents/skills/fde-write/references/modes/wechat.md": "# 公众号模式\n\n- 先给读者问题和文章承诺。\n- 使用完整案例和方法过程。\n- 正文通过审核后再交给 fde-format。\n",
        ".agents/skills/fde-write/references/modes/xiaohongshu.md": "# 小红书模式\n\n- 一篇只处理一个具体处境。\n- 首屏说明对象、问题和能得到什么。\n- 标题和正文使用同一份证据，不制造额外承诺。\n",
        ".agents/skills/fde-write/references/source-evidence.md": "# 当前实现证据\n\n- 工作流规格：`tools/rewrite-owned-suite.py` 的 `fde-write`。\n- 六类资产路径：`六类资产库目录模板/.fde/config.yaml`。\n- 名称和历史映射：`改造清单/skill-manifest.json`。\n- 相似度验收：`tools/check-source-similarity.py`。\n",
        ".agents/skills/fde-write/references/source-map.md": "# 来源映射\n\n## 当前实现\n\n- 运行流程由 `tools/rewrite-owned-suite.py` 中的 `fde-write` 规格生成。\n- 资产模型来自本项目 `六类资产库目录模板/.fde/config.yaml`。\n- 用户要求是：英文 `fde-` 名称、老板能懂、服务当前六类资产库。\n\n## 历史对照\n\n- 历史能力对照：`dbskill-upstream/skills/dbs-content`。\n- 固定快照：`v2.17.15`，commit `af99c577bfb9f1926236671a882b15030242fe8b`。\n- 该快照只用于能力盘点、相似度检查和署名追溯，不在运行时加载。\n\n历史对照不代表当前运行规则。商业许可仍按项目 `NOTICE.md` 和授权清单处理。\n",
        ".agents/skills/fde-write/SKILL.md": "---\nname: fde-write\ndescription: |\n  根据六类资产库写公众号、小红书、朋友圈、搜索内容或口播稿。先列证据和写作合同，再写草稿。触发方式：/fde-write、「根据知识库写」「把这个选题写成稿」。\n---\n\n# 内容写作\n\n<!-- FDE-OWNED-WORKFLOW: v1 -->\n\n## 开始前\n\n1. 从当前目录向上找到 `.fde/config.yaml`，按配置解析六类资产库。\n2. 只读取本任务需要的文件，不跨知识库搜索。\n3. 把库内事实、用户本轮信息、当前推断和未知项分开。\n4. 原始材料不覆盖；删除、移动和批量写入先确认。\n\n## 读取\n\n- 选题记录\n- 老板表达和禁区\n- 产品事实\n- 客户原话\n- 案例和方法\n- 目标平台\n\n## 必须保留的能力\n\n- 先诊断选题和材料缺口\n- 支持公众号、小红书、搜索、朋友圈和口播\n- 能生成实际草稿而不只给建议\n- 使用老板原话、产品事实、客户原话和案例\n- 成稿附来源和未核实项\n\n## 执行\n\n1. 确认平台、读者、目的和不能改的事实。\n2. 建立材料表：要用的原话、数字、案例和观点。\n3. 先给结构和缺口；缺口影响成稿时请求补充。\n4. 按平台模式写草稿，末尾附来源清单和未核实项。\n\n## 交付\n\n- 写作合同\n- 正文草稿\n- 来源清单\n- 未核实项\n- 下一轮修改重点\n\n每个关键判断附来源路径；没有来源的内容标为推断或待确认。\n\n## 写回\n\n- 草稿写入内容库的 `草稿`\n- 用户确认后才进入 `待审核`\n- 不覆盖原稿\n\n## 停止条件\n\n- 产品事实或案例结果无法核实时不用确定语气\n- 未指定平台时不套平台格式\n- 不编客户原话\n\n## 接续\n\n- 写完用 fde-review\n- 只改开头用 fde-hook\n- 公众号排版用 fde-format\n\n来源沿革只用于追溯，不作为运行指令。需要追溯时读取 `references/source-map.md`。\n",
        ".fde/config.yaml": "version: 2\nroot: .\nupdate_source: https://fdekb.garylau.ai/plugin/latest.json\n\nlibraries:\n  owner: 1-老板说明书\n  product: 2-产品库\n  customer: 3-客户需求库\n  case: 4-素材案例库\n  method: 5-方法论库\n  content: 6-内容生产\n\ninbox:\n  recordings: 0-录音处理/待处理录音\n  processed: 0-录音处理/已处理\n\nruntime:\n  state: .fde/state\n  indexes: .fde/indexes\n  logs: .fde/logs\n  versions: .fde/versions\n  reports: .fde/reports\n  quarantine: .fde/quarantine\n\npolicy:\n  preserve_raw_files: true\n  require_source_on_write: true\n  allow_cross_project_read: false\n  confirm_before_delete: true\n",
        "0-录音处理/待处理录音/README.md": "# 待处理材料\n\n把录音转写、聊天导出、会议纪要或口述文本放在这里。\n\n每份文件尽量保留：\n\n- 原始文件名。\n- 发生日期。\n- 参与人或来源。\n- 是否允许写入正式资产库。\n\n调用 `/fde-ingest` 后，先看分流预览，再确认写入。\n",
        "0-录音处理/已处理/README.md": "# 已处理记录\n\n这里保存处理稿和批次记录，不代替原始材料。\n\n处理稿应包含：\n\n- 原始文件路径。\n- 处理日期。\n- 写入了哪些资产文件。\n- 哪些内容仍待确认。\n- 是否发现重复或冲突。\n",
        "0-录音处理/README.md": "# 录音处理区\n\n这里保存尚未整理和已经整理的录音转写、聊天导出、会议纪要和口述材料。它不是第 7 个资产库。\n\n## 目录\n\n- `待处理录音`：原始材料。\n- `已处理`：处理记录和结构化笔记。\n\n## 流程\n\n1. 把原始文件放进待处理目录。\n2. 调用 `/fde-ingest`。\n3. 先查看分流预览。\n4. 确认后写入六类资产库。\n5. 原文件不删除；处理记录写明原始路径。\n",
        "0-使用说明.md": "# 六类资产库使用说明\n\n这套目录保存一家业务可以反复使用的资料。`.fde/config.yaml` 记录真实路径，`fde-*` 根据它读写当前知识库。\n\n## 6 个库\n\n| 目录 | 保存内容 |\n| --- | --- |\n| `1-老板说明书` | 身份、判断、表达习惯和不能说的内容 |\n| `2-产品库` | 产品、价格、承诺、交付和异议 |\n| `3-客户需求库` | 客户原话、问题、成交和未成交记录 |\n| `4-素材案例库` | 事件、案例、数据、对话和结果 |\n| `5-方法论库` | 已经实际使用的方法、步骤和判断条件 |\n| `6-内容生产` | 选题、草稿、审核、发布和数据复盘 |\n\n## 开始\n\n1. 复制这整个目录并改成项目名称。\n2. 在目录中调用 `/fde-start`。\n3. 空库使用 `/fde-interview`。\n4. 已有录音、聊天或旧文档时，把文件放进 `0-录音处理/待处理录音`，再使用 `/fde-ingest`。\n\n## 规则\n\n- 原始文件保留。\n- 业务事实、用户原话、AI 推断和未知项分开。\n- 新条目写明来源和日期。\n- 分类不确定时先放待确认区。\n- 移动、覆盖和删除前先确认。\n- 状态、索引和日志只写入当前目录的 `.fde`。\n",
        "1-老板说明书/老板说明书.md": "# 老板说明书\n\n> 只填写已经确认的内容。没有答案的字段留空。\n\n## 基本信息\n\n- 姓名或对外称呼：\n- 当前身份：\n- 所在行业：\n- 当前主要工作：\n- 更新时间：\n- 信息来源：\n\n## 我在解决什么问题\n\n- 服务对象：\n- 对方遇到的问题：\n- 我负责的部分：\n- 我不负责的部分：\n\n## 我的判断\n\n- 我反复坚持的判断：\n- 我不同意的常见做法：\n- 这些判断来自哪些经历或结果：\n\n## 我的表达\n\n- 常用说法：\n- 希望保留的原话：\n- 不使用的词和句式：\n- 不能公开的信息：\n\n## 工作边界\n\n- 不接的客户：\n- 不做的承诺：\n- 需要人工确认的事项：\n\n## 待补信息\n\n-\n",
        "2-产品库/README.md": "# 产品库\n\n一个产品一个文件。没有确认的价格、效果和承诺不要补写。\n\n## 产品文件字段\n\n```markdown\n# 产品名称\n\n- 更新时间：\n- 信息来源：\n- 当前状态：在售／测试／暂停\n\n## 给谁\n\n## 解决什么问题\n\n## 交付内容\n\n## 价格和付款条件\n\n## 已有证据\n\n## 常见异议\n\n## 不能承诺的内容\n\n## 待确认\n```\n\n历史价格和旧版本单独保留，不覆盖。\n",
        "3-客户需求库/README.md": "# 客户需求库\n\n保存客户说过的话、发生的行为和对应来源。不要把推测写成客户事实。\n\n## 一条记录包含\n\n```markdown\n# 日期｜客户代号｜主题\n\n- 来源文件：\n- 接触阶段：咨询／成交／交付／复购／流失\n- 是否允许公开：是／否／待确认\n\n## 客户原话\n\n## 已确认事实\n\n## 当前推断\n\n## 结果\n\n## 待确认\n```\n\n涉及姓名、联系方式和隐私时使用代号。\n",
        "4-素材案例库/README.md": "# 素材案例库\n\n保存可以追溯到事件或原始材料的故事、案例、数据和对话。\n\n## 素材字段\n\n```markdown\n# 素材标题\n\n- 发生日期：\n- 来源文件：\n- 参与人代号：\n- 是否允许公开：\n\n## 当时发生了什么\n\n## 原话或数据\n\n## 采取了什么动作\n\n## 结果\n\n## 可以支持哪些判断\n\n## 仍不确定的内容\n```\n\n案例结果改变后，追加新记录，不改写旧结果。\n",
        "5-方法论库/README.md": "# 方法论库\n\n只保存已经用过、能说明适用条件和失败情况的方法。\n\n## 方法文件字段\n\n```markdown\n# 方法名称\n\n- 来源：自己实践／客户项目／外部资料\n- 更新时间：\n- 使用场景：\n\n## 要解决的问题\n\n## 前置条件\n\n## 步骤\n\n## 完成信号\n\n## 失败信号\n\n## 实际案例\n\n## 不适用情况\n\n## 待验证\n```\n\n外部方法要记录作者和出处。原文不直接复制进方法文件。\n",
        "6-内容生产/README.md": "# 内容生产\n\n这里保存内容从选题到复盘的状态。一个文件同时只处在一个阶段。\n\n## 阶段\n\n- `选题`：已经有来源、读者和核心问题。\n- `草稿`：正在写，尚未审核。\n- `待审核`：等待事实、表达和平台检查。\n- `待发布`：审核通过，等待发布。\n- `已发布`：记录平台、链接和日期。\n- `数据复盘`：记录数据、评论和下一次实验。\n\n## 内容文件最少包含\n\n```markdown\n# 标题\n\n- 目标读者：\n- 目标平台：\n- 当前阶段：\n- 来源文件：\n- 创建日期：\n- 最后修改：\n\n## 正文或提纲\n\n## 未核实项\n\n## 发布记录\n```\n\n移动阶段时更新文件中的当前阶段，不重复复制同一稿件。\n",
        "AGENTS.md": "# FDE365六类资产知识库规则\n\n## 作用域\n\n- 本文件约束当前 `FDE365知识库` 及其子目录。\n- `.fde/config.yaml` 是六类资产、收件箱和运行目录的路径真源。\n- 项目本地 Skill 位于 `.agents/skills/`，只在当前知识库内使用。\n\n## 六类资产\n\n- `1-老板说明书`：身份、判断、表达和不能公开的边界。\n- `2-产品库`：产品、价格、承诺、交付和异议。\n- `3-客户需求库`：客户原话、行为、阶段和结果。\n- `4-素材案例库`：事件、原话、数据、动作和结果。\n- `5-方法论库`：实际使用过的方法、条件、步骤和失败信号。\n- `6-内容生产`：选题、草稿、审核、发布和复盘。\n\n## 写入边界\n\n- 原始录音、聊天、会议纪要和旧资料保留在 `0-录音处理/待处理录音`，不得用摘要覆盖。\n- 库内事实、用户本轮信息、AI 推断和未知项必须分开。\n- 新增结论必须写明来源路径和日期；没有来源时标记为推断或待确认。\n- 分类不确定时先留在待处理或待确认区，不强行写入正式资产。\n- 移动、覆盖、删除和批量写入前必须展示预览并取得用户确认。\n- 内容文件同时只处于一个阶段；目录和“当前阶段”字段必须一致。\n- 状态、索引、日志和版本只写入 `.fde`，AI 运行记录写入 `7-系统/AI协作`。\n\n## AI 协作\n\n- 不跨当前知识库检索，除非用户明确授权具体来源。\n- 关键判断返回来源路径；来源冲突时不自动选边。\n- 默认先诊断或生成预览，用户确认后再执行会改变现有资产的动作。\n",
        "docs/FDE-Skills-新手入门.md": "# FDE Skills 新手入门\n\n## 第一次使用\n\n先确认当前目录包含 `.fde/config.yaml`。然后输入：\n\n```text\n/fde-start\n```\n\n`fde-start` 会先判断知识库是否为空，再把任务交给一个具体 Skill。\n\n- 知识库为空：使用 `/fde-interview`。\n- 有录音、聊天记录或旧文档：使用 `/fde-ingest`。\n- 已经有六类资产：根据任务进入诊断、选题、写作或审核。\n\n## 35 个 Skill\n\n### 建库和维护\n\n- `/fde-start`：主入口和任务路由。\n- `/fde-interview`：采访用户，建立六类资产。\n- `/fde-ingest`：处理录音、聊天记录和旧文档。\n- `/fde-export`：导出聊天记录，交给导入流程。\n- `/fde-library`：搜索、录入和维护知识库。\n- `/fde-health`：检查目录、来源、索引和运行状态。\n- `/fde-organize`：整理已有内容资产。\n- `/fde-setup`：建立 Agent 工作目录。\n- `/fde-connect`：把 Skill 真源连接到指定 Agent 技能目录。\n- `/fde-update`：检查或更新这一套 `fde-*`。\n- `/fde-safety`：检查 Skill 中的可疑行为。\n\n### 生意和行动\n\n- `/fde-diagnose`：诊断生意、产品、定价和客户问题。\n- `/fde-benchmark`：研究对标对象。\n- `/fde-define`：拆解模糊概念。\n- `/fde-goal`：把愿望改成可检查的目标。\n- `/fde-question`：把困惑整理成可处理的问题。\n- `/fde-decide`：记录和复盘决策。\n- `/fde-action`：处理知道要做但没有行动的问题。\n- `/fde-focus`：找到当前约束，确定主动作和暂停清单。\n- `/fde-learn`：根据反馈继续学习。\n\n### 内容生产\n\n- `/fde-topics`：从六类资产中找选题。\n- `/fde-write`：按平台和任务写内容。\n- `/fde-review`：内容审核总入口。\n- `/fde-hook`：检查短视频开头。\n- `/fde-title`：生成小红书标题。\n- `/fde-flow`：检查逐字稿衔接。\n- `/fde-impact`：检查文稿是否击中受众。\n- `/fde-spread`：分析内容的传播原因。\n- `/fde-check`：检查空泛表达、无来源事实和表达偏差。\n- `/fde-format`：生成微信公众号 HTML。\n\n### 讨论和状态\n\n- `/fde-discuss`：按不同职责讨论一个具体决定。\n- `/fde-economy`：从价格、成本、选择、激励和信息检查判断。\n- `/fde-save`：保存当前任务状态。\n- `/fde-resume`：恢复上次状态。\n- `/fde-report`：把多次记录整理成报告。\n\n## 写入规则\n\n- 原始材料保留在 `0-录音处理/待处理录音` 或用户指定的收件位置。\n- 新增资产要记录来源。\n- 不能确定分类时，先放待处理区，不要猜。\n- 删除和覆盖前要让用户确认。\n- 内容草稿、审核稿和发布稿分开保存。\n\n## 常用流程\n\n```text\n采访或导入\n→ 六类资产库\n→ 选题\n→ 写作\n→ 审核\n→ 发布和复盘\n```\n\n遇到不确定的任务，回到 `/fde-start`。\n",
        "fde-manifest.json": '{\n  "suite": "fde-skills",\n  "source": {\n    "repository": "https://github.com/dontbesilent2025/dbskill",\n    "version": "v2.17.15",\n    "commit": "af99c577bfb9f1926236671a882b15030242fe8b",\n    "license": "CC BY-NC 4.0"\n  },\n  "knowledge_base": "六类资产库目录模板",\n  "implementation": "fde365-six-library-workflows-v4",\n  "skill_namespace": "fde",\n  "source_role": "historical-reference-and-attribution-only",\n  "similarity_threshold": 0.30,\n  "success_definition": [\n    "目录名与 SKILL.md name 一致",\n    "SKILL.md 只含 name 和 description 两个 frontmatter 字段",\n    "运行正文与对应来源的 sequence 和 target containment 均低于 0.30",\n    "产品目录不包含上游知识包和原样执行资源",\n    "旧 dbs 名称和 ~/.dbs 状态路径已清理",\n    "包含六类资产库读取和写入边界",\n    "35 个能力合同全部通过",\n    "原套件不作为运行依赖",\n    "导出、排版、连接、安全和盘点使用当前项目脚本",\n    "quick_validate.py 通过",\n    "正常案例和停止条件反例存在"\n  ],\n  "skills": [\n    {\n      "source": "dbs",\n      "target": "fde-start",\n      "profile": "router"\n    },\n    {\n      "source": "dbs-action",\n      "target": "fde-action",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-agent-migration",\n      "target": "fde-setup",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-ai-check",\n      "target": "fde-check",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-benchmark",\n      "target": "fde-benchmark",\n      "profile": "strategy"\n    },\n    {\n      "source": "dbs-bridge",\n      "target": "fde-connect",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-chatroom-austrian",\n      "target": "fde-economy",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-chatroom",\n      "target": "fde-discuss",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-content-system",\n      "target": "fde-organize",\n      "profile": "all"\n    },\n    {\n      "source": "dbs-content",\n      "target": "fde-write",\n      "profile": "content"\n    },\n    {\n      "source": "dbs-decision",\n      "target": "fde-decide",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-deconstruct",\n      "target": "fde-define",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-diagnosis",\n      "target": "fde-diagnose",\n      "profile": "business"\n    },\n    {\n      "source": "dbs-goal",\n      "target": "fde-goal",\n      "profile": "decision"\n    },\n    {\n      "source": "dbs-good-question",\n      "target": "fde-question",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-hook",\n      "target": "fde-hook",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-knowledge",\n      "target": "fde-library",\n      "profile": "all"\n    },\n    {\n      "source": "dbs-learning",\n      "target": "fde-learn",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-report",\n      "target": "fde-report",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-resonate",\n      "target": "fde-impact",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-restore",\n      "target": "fde-resume",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-save",\n      "target": "fde-save",\n      "profile": "state"\n    },\n    {\n      "source": "dbs-script-flow",\n      "target": "fde-flow",\n      "profile": "review"\n    },\n    {\n      "source": "dbs-skill-cleaner",\n      "target": "fde-safety",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-slowisfast",\n      "target": "fde-focus",\n      "profile": "method"\n    },\n    {\n      "source": "dbs-spread",\n      "target": "fde-spread",\n      "profile": "strategy"\n    },\n    {\n      "source": "dbs-update",\n      "target": "fde-update",\n      "profile": "system"\n    },\n    {\n      "source": "dbs-wechat-html",\n      "target": "fde-format",\n      "profile": "output"\n    },\n    {\n      "source": "dbs-xhs-title",\n      "target": "fde-title",\n      "profile": "strategy"\n    }\n  ],\n  "new_skills": [\n    {\n      "target": "fde-interview",\n      "profile": "ingest",\n      "source_folder": "知识库采访机器人"\n    },\n    {\n      "target": "fde-ingest",\n      "profile": "ingest",\n      "source_folder": "录音处理"\n    },\n    {\n      "target": "fde-export",\n      "profile": "ingest",\n      "source_folder": "导出聊天记录"\n    },\n    {\n      "target": "fde-health",\n      "profile": "system",\n      "source_folder": "CLAUDE体检"\n    },\n    {\n      "target": "fde-topics",\n      "profile": "strategy",\n      "source_folder": "小红书选题挖掘"\n    },\n    {\n      "target": "fde-review",\n      "profile": "review",\n      "source_folder": "内容诊断"\n    }\n  ]\n}\n',
        VERSION: "0.4.0\n"
      }
    };
  }
});

// fde-workspace.js
var require_fde_workspace = __commonJS({
  "fde-workspace.js"(exports2, module2) {
    var {
      ItemView: ItemView2,
      Modal: Modal2,
      Notice: Notice2,
      TFile: TFile2,
      normalizePath: normalizePath2,
      setIcon: setIcon2
    } = require("obsidian");
    var ROOT2 = "FDE365知识库";
    function configureKnowledgeRoot2(root) {
      ROOT2 = String(root || "FDE365知识库");
      return ROOT2;
    }
    var VIEW_TYPES = Object.freeze({
      dashboard: "ai-knowledge-os-dashboard",
      inbox: "ai-knowledge-os-inbox",
      libraries: "ai-knowledge-os-knowledge",
      network: "ai-knowledge-os-graph",
      content: "ai-knowledge-os-projects",
      skills: "ai-knowledge-os-agents",
      health: "ai-knowledge-os-analytics"
    });
    var LIBRARIES = Object.freeze([
      { id: "owner", order: "01", key: "owner", name: "老板说明书", short: "老板", path: "1-老板说明书", icon: "fingerprint", color: "indigo", description: "身份、判断、表达习惯和不能公开的边界", emptyAction: "用 /fde-interview 补齐老板原话与判断" },
      { id: "product", order: "02", key: "product", name: "产品库", short: "产品", path: "2-产品库", icon: "package-check", color: "blue", description: "产品、价格、承诺、交付内容和常见异议", emptyAction: "创建第一个产品事实文件" },
      { id: "customer", order: "03", key: "customer", name: "客户需求库", short: "客户", path: "3-客户需求库", icon: "messages-square", color: "cyan", description: "客户原话、问题、成交与未成交记录", emptyAction: "导入一次真实客户沟通" },
      { id: "case", order: "04", key: "case", name: "素材案例库", short: "案例", path: "4-素材案例库", icon: "archive", color: "orange", description: "事件、案例、数据、对话、动作和结果", emptyAction: "把一段经历整理成可追溯案例" },
      { id: "method", order: "05", key: "method", name: "方法论库", short: "方法", path: "5-方法论库", icon: "route", color: "violet", description: "使用过的方法、前置条件、步骤与失败信号", emptyAction: "沉淀一个已经实际使用的方法" },
      { id: "content", order: "06", key: "content", name: "内容生产", short: "内容", path: "6-内容生产", icon: "pen-tool", color: "pink", description: "从选题到发布复盘的内容生产流水线", emptyAction: "从六库材料生成第一个可追溯选题" }
    ]);
    var CONTENT_STAGES = Object.freeze([
      { id: "选题", icon: "lightbulb", color: "indigo", description: "有来源、读者和核心问题" },
      { id: "草稿", icon: "file-pen-line", color: "blue", description: "正在写，尚未审核" },
      { id: "待审核", icon: "scan-search", color: "orange", description: "核对事实、表达和平台" },
      { id: "待发布", icon: "calendar-clock", color: "violet", description: "审核通过，等待发布" },
      { id: "已发布", icon: "send", color: "green", description: "记录平台、链接和日期" },
      { id: "数据复盘", icon: "chart-no-axes-column-increasing", color: "cyan", description: "记录数据、评论和下一次实验" }
    ]);
    var SKILL_GROUPS = Object.freeze([
      { id: "entry", name: "开始与入库", description: "选择入口、采访、导入和体检" },
      { id: "business", name: "商业判断", description: "围绕产品、客户、证据和行动做判断" },
      { id: "content", name: "内容生产", description: "从选题、写作到审核、排版和复盘" },
      { id: "library", name: "知识库维护", description: "查找、整理、连接和安全维护" },
      { id: "state", name: "状态与决策", description: "保存、恢复、报告和回填决定" },
      { id: "method", name: "学习与讨论", description: "定义问题、组织讨论和短反馈循环" }
    ]);
    var SKILLS = Object.freeze([
      { id: "fde-start", group: "entry", name: "从这里开始", description: "读取六库状态，只选择一个当前入口并直接继续。", output: "任务路由", icon: "compass" },
      { id: "fde-interview", group: "entry", name: "建库采访", description: "一次只问一个问题，保留原话、事实、推断和未知项。", output: "采访记录与分流建议", icon: "mic-2" },
      { id: "fde-ingest", group: "entry", name: "材料入库", description: "通读录音、聊天和旧文档，先出分流预览，确认后入库。", output: "分流预览", icon: "inbox" },
      { id: "fde-export", group: "entry", name: "导出会话", description: "导出用户明确选择的本地 Agent 会话并保留时间和来源。", output: "Markdown 会话", icon: "download" },
      { id: "fde-health", group: "entry", name: "知识库体检", description: "检查配置、来源、收件箱、内容阶段和运行状态，默认只报告。", output: "体检报告", icon: "activity" },
      { id: "fde-update", group: "entry", name: "检查更新", description: "展示 FDE Skills 差异，确认后只更新 Skill，不改业务资产。", output: "更新差异", icon: "refresh-cw" },
      { id: "fde-diagnose", group: "business", name: "商业诊断", description: "用客户、产品、案例和交付记录诊断生意问题。", output: "事实、假设与验证项", icon: "stethoscope" },
      { id: "fde-define", group: "business", name: "定义概念", description: "把模糊词换成当前业务中可观察、可检查的定义。", output: "可观察定义", icon: "brackets" },
      { id: "fde-goal", group: "business", name: "明确目标", description: "把愿望改成有对象、结果、边界、证据和时间的目标。", output: "目标合同", icon: "goal" },
      { id: "fde-question", group: "business", name: "整理问题", description: "把困惑整理成 Agent、员工或顾问可以处理的问题说明书。", output: "问题说明书", icon: "circle-help" },
      { id: "fde-focus", group: "business", name: "确定焦点", description: "识别当前约束，决定主动作、暂停项和观察项。", output: "焦点与暂停清单", icon: "focus" },
      { id: "fde-action", group: "business", name: "推进一步", description: "把推不动的任务缩成一个能产生真实反馈的动作。", output: "下一步动作", icon: "move-right" },
      { id: "fde-write", group: "content", name: "内容写作", description: "根据六类资产列证据和写作合同，再生成带来源草稿。", output: "草稿、来源与未核实项", icon: "pen-line" },
      { id: "fde-topics", group: "content", name: "生成选题", description: "从客户原话、产品问题、案例、判断和方法中生成可追溯选题。", output: "选题清单", icon: "lightbulb" },
      { id: "fde-review", group: "content", name: "内容审核", description: "先核对事实和定位，再检查内容质量；默认只诊断不改稿。", output: "发布判断与修改顺序", icon: "scan-search" },
      { id: "fde-hook", group: "content", name: "设计开头", description: "根据选题、读者和真实材料诊断并设计少量可用开头。", output: "开头方案", icon: "magnet" },
      { id: "fde-title", group: "content", name: "生成标题", description: "生成正文证据能够支持的标题，不扩大承诺。", output: "标题候选", icon: "heading" },
      { id: "fde-check", group: "content", name: "检查表达", description: "标记空泛判断、整齐模板、无来源事实和语气偏差。", output: "问题标记", icon: "spell-check-2" },
      { id: "fde-flow", group: "content", name: "检查段落", description: "检查段间承接、跳步、重复和信息拥堵。", output: "段落诊断", icon: "git-branch" },
      { id: "fde-impact", group: "content", name: "检查读者匹配", description: "检查内容是否准确指向目标读者的处境、判断和行动。", output: "读者匹配诊断", icon: "target" },
      { id: "fde-format", group: "content", name: "公众号排版", description: "把已确认 Markdown 转成公众号可粘贴 HTML，保持正文不变。", output: "微信公众号 HTML", icon: "code-xml" },
      { id: "fde-spread", group: "content", name: "传播复盘", description: "根据真实发布数据、评论和转发语境分析传播结果。", output: "传播复盘", icon: "radio-tower" },
      { id: "fde-benchmark", group: "content", name: "研究对标", description: "围绕业务目标比较可观察做法并安排小实验，不复制人设。", output: "对标观察与实验", icon: "telescope" },
      { id: "fde-library", group: "library", name: "查库与维护", description: "查找、收录、纠错和维护六类资产，每个结论返回来源。", output: "答案、来源与版本", icon: "library" },
      { id: "fde-organize", group: "library", name: "整理资产", description: "检查重复、错库、无来源和命名，先出迁移预览。", output: "资产清单与迁移预览", icon: "list-tree" },
      { id: "fde-connect", group: "library", name: "连接 Skill", description: "把 Skill 真源连接到指定 Agent 技能目录并检查状态。", output: "连接状态", icon: "link" },
      { id: "fde-setup", group: "library", name: "整理 Agent 项目", description: "整理规则真源和 Skill 真源，让多个本地 Agent 识别项目。", output: "项目设置预览", icon: "wrench" },
      { id: "fde-safety", group: "library", name: "Skill 安全检查", description: "只读检查外部命令、网络、敏感读取、隐藏指令和删除行为。", output: "安全报告", icon: "shield-check" },
      { id: "fde-save", group: "state", name: "保存进度", description: "保存目标、来源、完成项、未知项和下一步。", output: "任务状态", icon: "save" },
      { id: "fde-resume", group: "state", name: "恢复进度", description: "核对文件和事实变化后，恢复最近或指定任务。", output: "恢复检查与下一步", icon: "history" },
      { id: "fde-report", group: "state", name: "整理报告", description: "把同一任务的多次状态、决定和结果整理成带来源报告。", output: "Markdown 报告", icon: "file-chart-column" },
      { id: "fde-decide", group: "state", name: "记录决定", description: "保存选项、证据、假设、风险、回填日期和真实结果。", output: "决策记录", icon: "scale" },
      { id: "fde-discuss", group: "method", name: "多角度讨论", description: "按职责组织 3—5 个视角，只使用库内事实和公开方法。", output: "多视角讨论", icon: "users" },
      { id: "fde-economy", group: "method", name: "交易视角", description: "从价格、成本、选择、激励和信息差检查商业判断。", output: "交易结构分析", icon: "badge-dollar-sign" },
      { id: "fde-learn", group: "method", name: "短学习循环", description: "围绕工作问题先做、记录反馈、补一个知识点再继续。", output: "学习与反馈计划", icon: "graduation-cap" }
    ]);
    var BASE_SKILL_RULES = [
      "从当前目录向上找到 .fde/config.yaml，并按配置解析六类资产库。",
      "只读取本任务需要的文件，不跨知识库搜索。",
      "严格区分库内事实、用户本轮信息、当前推断和未知项。",
      "关键判断附来源路径；没有来源的内容标为推断或待确认。",
      "原始材料不覆盖；移动、覆盖、删除和批量写入必须先给预览并等待用户确认。"
    ].join("\n");
    var NAV_ITEMS = Object.freeze([
      { key: "dashboard", label: "总览", note: "六库状态", icon: "layout-dashboard" },
      { key: "inbox", label: "待处理", note: "原始材料", icon: "inbox" },
      { key: "libraries", label: "六类资产", note: "真源与版本", icon: "library" },
      { key: "network", label: "资产网络", note: "跨库关系", icon: "network" },
      { key: "content", label: "内容生产", note: "六阶段流水线", icon: "panels-top-left" },
      { key: "skills", label: "FDE Skills", note: "35 项工作流", icon: "blocks" },
      { key: "health", label: "知识体检", note: "来源与冲突", icon: "activity" }
    ]);
    function makeIcon(parent, name, cls = "") {
      const el = parent.createSpan({ cls: `wis-icon ${cls}`.trim() });
      setIcon2(el, name);
      return el;
    }
    function makeButton(parent, label, iconName, cls = "", onClick) {
      const button = parent.createEl("button", { cls: `wis-button ${cls}`.trim() });
      button.setAttr("type", "button");
      if (iconName) makeIcon(button, iconName);
      if (label) {
        button.setAttr("aria-label", label);
        button.createSpan({ text: label, cls: "wis-button-label" });
      }
      if (onClick) button.addEventListener("click", onClick);
      return button;
    }
    function formatRelativeTime2(timestamp) {
      const delta = Math.max(0, Date.now() - Number(timestamp || 0));
      const minute = 6e4;
      if (delta < minute) return "刚刚";
      if (delta < 60 * minute) return `${Math.floor(delta / minute)} 分钟前`;
      if (delta < 24 * 60 * minute) return `${Math.floor(delta / (60 * minute))} 小时前`;
      if (delta < 2 * 24 * 60 * minute) return "昨天";
      const date = new Date(timestamp);
      return `${date.getMonth() + 1}月${date.getDate()}日`;
    }
    function percent(value) {
      return `${Math.round(Math.max(0, Math.min(1, Number(value) || 0)) * 100)}%`;
    }
    function safeName2(value) {
      return String(value || "未命名").trim().replace(/[\\/:*?"<>|#^[\]]/g, "-").replace(/\s+/g, " ").slice(0, 80) || "未命名";
    }
    function yamlValue(value) {
      return JSON.stringify(String(value || ""));
    }
    function parseConfigYaml(raw) {
      const result = { libraries: {}, inbox: {}, runtime: {}, policy: {} };
      let section = "";
      String(raw || "").split(/\r?\n/).forEach((line) => {
        const sectionMatch = line.match(/^([A-Za-z0-9_-]+):\s*$/);
        if (sectionMatch) {
          section = sectionMatch[1];
          if (!result[section]) result[section] = {};
          return;
        }
        const valueMatch = line.match(/^\s{2}([A-Za-z0-9_-]+):\s*(.*?)\s*$/);
        if (!valueMatch || !section) return;
        let value = valueMatch[2].replace(/^['"]|['"]$/g, "");
        if (value === "true") value = true;
        if (value === "false") value = false;
        result[section][valueMatch[1]] = value;
      });
      return result;
    }
    function sourceFromContent(content, frontmatter = {}) {
      const direct = frontmatter.source || frontmatter.source_file || frontmatter.sources;
      if (Array.isArray(direct) && direct.some((item) => String(item).trim())) return direct.map(String).join("、");
      if (typeof direct === "string" && direct.trim()) return direct.trim();
      const match = String(content || "").match(/^[ \t]*-[ \t]*(?:信息来源|来源文件|来源|原始文件路径)[ \t]*[：:][ \t]*(.*?)[ \t]*$/mi);
      const value = match?.[1]?.trim() || "";
      return value && !/^(?:-|无|未知|待确认|暂无)$/i.test(value) ? value : "";
    }
    function unknownFromContent(content) {
      const headings = ["待确认", "待验证", "未核实项", "仍不确定的内容", "待补信息", "当前推断"];
      let count = 0;
      headings.forEach((heading) => {
        const pattern = new RegExp(`^##\\s+${heading}\\s*$([\\s\\S]*?)(?=^##\\s|(?![\\s\\S]))`, "gmi");
        const match = pattern.exec(String(content || ""));
        if (!match) return;
        const body = match[1].replace(/^\s*[-*]\s*$/gm, "").replace(/<!--.*?-->/gs, "").trim();
        if (body) count += body.split(/\n+/).filter((line) => line.replace(/^\s*[-*]\s*/, "").trim()).length;
      });
      return count;
    }
    function frontmatterOf(app, file) {
      return app.metadataCache.getFileCache(file)?.frontmatter || {};
    }
    async function ensureFolder(app, path) {
      const normalized = normalizePath2(path);
      let current = "";
      for (const part of normalized.split("/")) {
        current = current ? `${current}/${part}` : part;
        const existing = app.vault.getAbstractFileByPath(current);
        if (existing) continue;
        await app.vault.createFolder(current).catch((error) => {
          if (!/already exists/i.test(String(error?.message || error))) throw error;
        });
      }
    }
    async function uniquePath(app, path) {
      if (!app.vault.getAbstractFileByPath(path) && !await app.vault.adapter.exists(path)) return path;
      const dot = path.lastIndexOf(".");
      const slash = path.lastIndexOf("/");
      const base = dot > slash ? path.slice(0, dot) : path;
      const ext = dot > slash ? path.slice(dot) : "";
      let index = 2;
      while (app.vault.getAbstractFileByPath(`${base}-${index}${ext}`) || await app.vault.adapter.exists(`${base}-${index}${ext}`)) index += 1;
      return `${base}-${index}${ext}`;
    }
    var TextPromptModal = class extends Modal2 {
      constructor(app, options) {
        super(app);
        this.options = options;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.createEl("h2", { text: this.options.title });
        root.createEl("p", { text: this.options.description || "", cls: "wis-modal-note" });
        const attributes = { placeholder: this.options.placeholder || "" };
        if (this.options.multiline) attributes.rows = "6";
        const input = root.createEl(this.options.multiline ? "textarea" : "input", {
          cls: "wis-modal-input",
          attr: attributes
        });
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, this.options.submitLabel || "继续", "arrow-right", "is-primary", async () => {
          const value = input.value.trim();
          if (!value) return;
          this.close();
          await this.options.onSubmit(value);
        });
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && (!this.options.multiline || event.metaKey || event.ctrlKey)) {
            event.preventDefault();
            const button = actions.querySelector(".is-primary");
            button?.click();
          }
        });
        window.setTimeout(() => input.focus(), 50);
      }
    };
    var AssetModal = class extends Modal2 {
      constructor(app, defaultLibrary, onSubmit) {
        super(app);
        this.defaultLibrary = defaultLibrary;
        this.onSubmit = onSubmit;
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.addClass("wis-asset-modal");
        root.createEl("h2", { text: "新建六类资产" });
        root.createEl("p", { text: "先选择真实归属，再写入对应资产库。来源无法确认时请留空并在正文标记待确认。", cls: "wis-modal-note" });
        const select = root.createEl("select", { cls: "wis-modal-input", attr: { "aria-label": "资产库" } });
        LIBRARIES.filter((item) => item.id !== "content").forEach((library) => select.createEl("option", { value: library.id, text: `${library.order} · ${library.name}` }));
        select.value = this.defaultLibrary && this.defaultLibrary !== "all" && this.defaultLibrary !== "content" ? this.defaultLibrary : "product";
        const title = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "资产标题" } });
        const source = root.createEl("input", { cls: "wis-modal-input", attr: { placeholder: "来源文件或说明（可稍后补）" } });
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, "创建资产", "plus", "is-primary", async () => {
          if (!title.value.trim()) return;
          this.close();
          await this.onSubmit({ libraryId: select.value, title: title.value.trim(), source: source.value.trim() });
        });
        window.setTimeout(() => title.focus(), 50);
      }
    };
    var ConfirmActionModal = class extends Modal2 {
      constructor(app, title, description, actionLabel, onConfirm) {
        super(app);
        Object.assign(this, { title, description, actionLabel, onConfirm });
      }
      onOpen() {
        this.contentEl.addClass("wis-modal");
        this.contentEl.createEl("h2", { text: this.title });
        this.contentEl.createEl("p", { text: this.description, cls: "wis-modal-note" });
        const actions = this.contentEl.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "取消", "x", "is-secondary", () => this.close());
        makeButton(actions, this.actionLabel, "arrow-right", "is-primary", async () => {
          this.close();
          await this.onConfirm();
        });
      }
    };
    var AssistantContextModal = class extends Modal2 {
      constructor(app, selectedPaths, onSubmit) {
        super(app);
        this.selected = new Set(selectedPaths || []);
        this.onSubmit = onSubmit;
      }
      contextFiles() {
        return this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${ROOT2}/`) && !file.path.startsWith(`${ROOT2}/.agents/`) && !file.path.startsWith(`${ROOT2}/.fde/`) && !file.path.startsWith(`${ROOT2}/7-系统/`)).sort((a, b) => b.stat.mtime - a.stat.mtime);
      }
      onOpen() {
        const root = this.contentEl;
        root.addClass("wis-modal");
        root.addClass("wis-context-modal");
        root.createEl("h2", { text: "添加知识库上下文" });
        root.createEl("p", { text: "只会把你选中的 Markdown 笔记片段交给当前 Provider。", cls: "wis-modal-note" });
        const search = root.createEl("input", {
          cls: "wis-modal-input",
          attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索上下文文件" }
        });
        const list = root.createDiv({ cls: "wis-context-file-list" });
        const files = this.contextFiles();
        const render = () => {
          list.empty();
          const query = search.value.trim().toLowerCase();
          const matches = files.filter((file) => !query || `${file.basename} ${file.path}`.toLowerCase().includes(query)).slice(0, 80);
          if (!matches.length) list.createDiv({ text: "没有匹配的知识库笔记", cls: "wis-empty" });
          matches.forEach((file) => {
            const selected = this.selected.has(file.path);
            const row = list.createEl("button", { cls: `wis-context-file${selected ? " is-selected" : ""}` });
            makeIcon(row, selected ? "check-circle-2" : "file-text");
            const copy = row.createDiv();
            copy.createEl("strong", { text: file.basename });
            copy.createSpan({ text: file.path });
            row.addEventListener("click", () => {
              if (selected) this.selected.delete(file.path);
              else this.selected.add(file.path);
              render();
            });
          });
        };
        search.addEventListener("input", render);
        render();
        const actions = root.createDiv({ cls: "wis-modal-actions" });
        makeButton(actions, "清空", "x", "is-secondary", () => {
          this.selected.clear();
          render();
        });
        makeButton(actions, "添加所选", "paperclip", "is-primary", async () => {
          this.close();
          await this.onSubmit([...this.selected]);
        });
        window.setTimeout(() => search.focus(), 50);
      }
    };
    var FDEWorkspaceService = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.config = this.defaultConfig();
      }
      defaultConfig() {
        return {
          libraries: Object.fromEntries(LIBRARIES.map((item) => [item.key, item.path])),
          inbox: { recordings: "0-录音处理/待处理录音", processed: "0-录音处理/已处理" },
          runtime: { state: ".fde/state", indexes: ".fde/indexes", logs: ".fde/logs", versions: ".fde/versions", reports: ".fde/reports", quarantine: ".fde/quarantine" },
          policy: { preserve_raw_files: true, require_source_on_write: true, allow_cross_project_read: false, confirm_before_delete: true }
        };
      }
      async reloadConfig() {
        const configPath = `${ROOT2}/.fde/config.yaml`;
        try {
          if (!await this.app.vault.adapter.exists(configPath)) return this.config;
          const raw = await this.app.vault.adapter.read(configPath);
          const parsed = parseConfigYaml(raw);
          const defaults = this.defaultConfig();
          this.config = {
            libraries: { ...defaults.libraries, ...parsed.libraries || {} },
            inbox: { ...defaults.inbox, ...parsed.inbox || {} },
            runtime: { ...defaults.runtime, ...parsed.runtime || {} },
            policy: { ...defaults.policy, ...parsed.policy || {} }
          };
        } catch (error) {
          console.error("FDE365 Knowledge OS: failed to read .fde/config.yaml", error);
          this.config = this.defaultConfig();
        }
        return this.config;
      }
      path(relative = "") {
        return normalizePath2([ROOT2, relative].filter(Boolean).join("/"));
      }
      libraryPath(library) {
        const item = typeof library === "string" ? LIBRARIES.find((candidate) => candidate.id === library || candidate.key === library) : library;
        return this.path(this.config.libraries[item?.key] || item?.path || "");
      }
      inboxPath(kind = "recordings") {
        return this.path(this.config.inbox[kind]);
      }
      contentPath() {
        return this.libraryPath("content");
      }
      skillPath(skillId) {
        return this.path(`.agents/skills/${skillId}/SKILL.md`);
      }
      resolvedConfigContext() {
        return {
          path: this.path(".fde/config.yaml"),
          title: "FDE365 已解析配置",
          excerpt: [
            "以下内容由插件在本地读取并解析，不需要模型自行访问 Vault 文件系统。",
            "",
            "六类资产库：",
            ...LIBRARIES.map((library) => `- ${library.name}: ${this.libraryPath(library)}`),
            "",
            `待处理录音: ${this.inboxPath("recordings")}`,
            `已处理录音: ${this.inboxPath("processed")}`,
            `运行状态: ${this.path(this.config.runtime.state)}`,
            "",
            "安全策略：",
            `- 保留原始文件: ${this.config.policy.preserve_raw_files !== false ? "是" : "否"}`,
            `- 写入需要来源: ${this.config.policy.require_source_on_write !== false ? "是" : "否"}`,
            `- 允许跨项目读取: ${this.config.policy.allow_cross_project_read === true ? "是" : "否"}`,
            `- 删除前确认: ${this.config.policy.confirm_before_delete !== false ? "是" : "否"}`
          ].join("\n")
        };
      }
      skillCatalogContext() {
        return {
          path: this.path(".agents/skills"),
          title: "FDE Skills 能力目录",
          excerpt: SKILLS.map((skill) => `- /${skill.id} · ${skill.name}: ${skill.description} 交付：${skill.output}`).join("\n")
        };
      }
      matchingSkillIds(prompt) {
        const text = String(prompt || "");
        const lower = text.toLowerCase();
        const matches = SKILLS.filter((skill) => lower.includes(skill.id)).map((skill) => skill.id);
        if (/(?:一键.*(?:出内容|成稿|写稿)|(?:出内容|成稿|写稿|写内容).*(?:skill|技能|工作流)|根据知识库写)/i.test(text)) matches.push("fde-write");
        return [...new Set(matches)];
      }
      async readSkillContract(skillId) {
        const path = this.skillPath(skillId);
        if (!await this.app.vault.adapter.exists(path)) return null;
        const raw = await this.app.vault.adapter.read(path);
        return {
          path,
          title: `/${skillId} 本地 Skill 合同`,
          excerpt: String(raw || "").slice(0, 16e3)
        };
      }
      async assistantRuntimeContext(prompt) {
        const text = String(prompt || "");
        const needsSkills = /(?:skill|技能|工作流|一键|出内容|成稿|写稿|写内容|\/fde-|fde-)/i.test(text);
        if (!needsSkills) return [];
        await this.reloadConfig();
        const context = [this.resolvedConfigContext()];
        for (const skillId of this.matchingSkillIds(text)) {
          const contract = await this.readSkillContract(skillId);
          if (contract) context.push(contract);
        }
        context.push(this.skillCatalogContext());
        return context;
      }
      async skillRuntimeContext(skill) {
        await this.reloadConfig();
        const context = [this.resolvedConfigContext()];
        const contract = await this.readSkillContract(skill.id);
        if (contract) context.push(contract);
        context.push(this.skillCatalogContext());
        return context;
      }
      isIgnoredAsset(file) {
        return !file.path.startsWith(`${ROOT2}/`) || file.path.startsWith(`${ROOT2}/.agents/`) || file.path.startsWith(`${ROOT2}/.fde/`) || file.path.startsWith(`${ROOT2}/7-系统/`) || file.basename === "README" || file.path === `${ROOT2}/0-使用说明.md`;
      }
      libraryForFile(file) {
        return LIBRARIES.find((library) => {
          const root = this.libraryPath(library);
          return file.path === root || file.path.startsWith(`${root}/`);
        }) || null;
      }
      stageForFile(file) {
        const root = this.contentPath();
        return CONTENT_STAGES.find((stage) => file.path.startsWith(`${root}/${stage.id}/`)) || null;
      }
      assetFiles() {
        return this.app.vault.getMarkdownFiles().filter((file) => !this.isIgnoredAsset(file) && Boolean(this.libraryForFile(file)));
      }
      pendingFiles() {
        const root = this.inboxPath("recordings");
        return this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${root}/`) && file.basename !== "README");
      }
      processedFiles() {
        const root = this.inboxPath("processed");
        return this.app.vault.getMarkdownFiles().filter((file) => file.path.startsWith(`${root}/`) && file.basename !== "README");
      }
      async noteInfo(file) {
        const content = await this.app.vault.cachedRead(file);
        const frontmatter = frontmatterOf(this.app, file);
        const source = sourceFromContent(content, frontmatter);
        const unknown = unknownFromContent(content);
        const library = this.libraryForFile(file);
        const stage = this.stageForFile(file);
        const stageValue = String(frontmatter.stage || frontmatter.status || content.match(/^\s*-\s*当前阶段\s*[：:]\s*(.+?)\s*$/mi)?.[1] || "").trim();
        const stageConflict = Boolean(stage && stageValue && stageValue !== stage.id);
        return {
          file,
          content,
          frontmatter,
          library,
          stage,
          source,
          unknown,
          stageValue,
          stageConflict,
          stale: Date.now() - file.stat.mtime > 90 * 864e5,
          excerpt: content.replace(/^---[\s\S]*?---\s*/m, "").replace(/^#{1,6}\s+/gm, "").replace(/\[\[|\]\]/g, "").replace(/\s+/g, " ").trim().slice(0, 150)
        };
      }
      async snapshot() {
        await this.reloadConfig();
        const files = this.assetFiles();
        const notes = await Promise.all(files.map((file) => this.noteInfo(file)));
        const libraries = LIBRARIES.map((library) => {
          const items = notes.filter((note) => note.library?.id === library.id);
          const sourceCount = items.filter((note) => note.source).length;
          const unknown2 = items.reduce((sum, note) => sum + note.unknown, 0);
          const stale2 = items.filter((note) => note.stale).length;
          const score = items.length ? Math.max(0, Math.round(100 - (1 - sourceCount / items.length) * 45 - Math.min(25, unknown2 * 4) - stale2 / items.length * 20)) : 0;
          return {
            ...library,
            path: this.libraryPath(library),
            items,
            count: items.length,
            sourceCount,
            sourceCoverage: items.length ? sourceCount / items.length : 0,
            unknown: unknown2,
            stale: stale2,
            score,
            updated: Math.max(0, ...items.map((item) => item.file.stat.mtime))
          };
        });
        const contentItems = notes.filter((note) => note.library?.id === "content");
        const stages = CONTENT_STAGES.map((stage) => ({ ...stage, items: contentItems.filter((item) => item.stage?.id === stage.id) }));
        const pending = this.pendingFiles();
        const processed = this.processedFiles();
        const totalSources = notes.filter((note) => note.source).length;
        const unknown = notes.reduce((sum, note) => sum + note.unknown, 0);
        const stale = notes.filter((note) => note.stale).length;
        const recent = [...notes].sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).slice(0, 8);
        const missingPaths = [];
        for (const library of LIBRARIES) {
          if (!await this.app.vault.adapter.exists(this.libraryPath(library))) missingPaths.push(this.libraryPath(library));
        }
        const installedSkills = [];
        for (const skill of SKILLS) {
          if (await this.app.vault.adapter.exists(this.skillPath(skill.id))) installedSkills.push(skill.id);
        }
        const relations = this.buildRelations(notes);
        return {
          notes,
          libraries,
          stages,
          pending,
          processed,
          total: notes.length,
          sourceCoverage: notes.length ? totalSources / notes.length : 0,
          unknown,
          stale,
          recent,
          missingPaths,
          installedSkills,
          stageConflicts: notes.filter((note) => note.stageConflict),
          relations
        };
      }
      buildRelations(notes) {
        const byPath = new Map(notes.map((note) => [note.file.path, note]));
        const matrix = Object.fromEntries(LIBRARIES.map((source) => [source.id, Object.fromEntries(LIBRARIES.map((target) => [target.id, 0]))]));
        const edges = [];
        const resolved = this.app.metadataCache.resolvedLinks || {};
        Object.entries(resolved).forEach(([sourcePath, targets]) => {
          const source = byPath.get(sourcePath);
          if (!source?.library) return;
          Object.keys(targets || {}).forEach((targetPath) => {
            const target = byPath.get(targetPath);
            if (!target?.library) return;
            matrix[source.library.id][target.library.id] += 1;
            edges.push({ source, target });
          });
        });
        return { matrix, edges };
      }
      async openFile(fileOrPath) {
        const file = fileOrPath instanceof TFile2 ? fileOrPath : this.app.vault.getAbstractFileByPath(fileOrPath);
        if (file instanceof TFile2) await this.app.workspace.getLeaf("tab").openFile(file);
      }
      async openLibrary(libraryId) {
        await this.plugin.activateKnowledge();
        const view = this.plugin.getKnowledgeCenter();
        if (view) {
          view.selectedLibrary = libraryId;
          await view.refresh();
        }
      }
      async createAsset({ libraryId, title, source }) {
        const library = LIBRARIES.find((item) => item.id === libraryId) || LIBRARIES[1];
        const root = this.libraryPath(library);
        await ensureFolder(this.app, root);
        const path = await uniquePath(this.app, `${root}/${safeName2(title)}.md`);
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const body = this.assetTemplate(library, title, source, date);
        const file = await this.app.vault.create(path, body);
        await this.openFile(file);
        new Notice2(`已创建到 ${library.name}：${file.basename}`);
        return file;
      }
      assetTemplate(library, title, source, date) {
        const head = `---
type: ${library.id}-asset
source: ${yamlValue(source)}
created_at: ${date}
updated_at: ${date}
status: draft
---

# ${title}

- 信息来源：${source || ""}
- 更新时间：${date}
`;
        const bodies = {
          owner: "\n## 已确认事实\n\n## 我的判断\n\n## 我的表达\n\n## 工作边界\n\n## 待补信息\n",
          product: "\n## 给谁\n\n## 解决什么问题\n\n## 交付内容\n\n## 价格和付款条件\n\n## 已有证据\n\n## 常见异议\n\n## 不能承诺的内容\n\n## 待确认\n",
          customer: "\n- 接触阶段：\n- 是否允许公开：待确认\n\n## 客户原话\n\n## 已确认事实\n\n## 当前推断\n\n## 结果\n\n## 待确认\n",
          case: "\n- 发生日期：\n- 是否允许公开：待确认\n\n## 当时发生了什么\n\n## 原话或数据\n\n## 采取了什么动作\n\n## 结果\n\n## 可以支持哪些判断\n\n## 仍不确定的内容\n",
          method: "\n- 使用场景：\n\n## 要解决的问题\n\n## 前置条件\n\n## 步骤\n\n## 完成信号\n\n## 失败信号\n\n## 实际案例\n\n## 不适用情况\n\n## 待验证\n"
        };
        return `${head}${bodies[library.id] || bodies.case}`;
      }
      async createQuickNote(title) {
        const root = this.inboxPath("recordings");
        await ensureFolder(this.app, root);
        const date = /* @__PURE__ */ new Date();
        const stamp = date.toISOString().replace(/[-:TZ]/g, "").slice(0, 12);
        const path = await uniquePath(this.app, `${root}/${stamp}-${safeName2(title)}.md`);
        const file = await this.app.vault.create(path, `---
type: inbox
status: pending
source: quick-note
created_at: ${date.toISOString()}
allowed_to_write: pending
---

# ${title}

## 原始内容


## 来源和参与人


## 待确认

- 是否允许写入正式资产库
`);
        await this.openFile(file);
        new Notice2("已保存到待处理；原始内容不会被自动覆盖");
        return file;
      }
      async createContent(title, stageId = "选题") {
        const stage = CONTENT_STAGES.find((item) => item.id === stageId) || CONTENT_STAGES[0];
        const root = `${this.contentPath()}/${stage.id}`;
        await ensureFolder(this.app, root);
        const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const path = await uniquePath(this.app, `${root}/${date}-${safeName2(title)}.md`);
        const file = await this.app.vault.create(path, `---
type: content
stage: ${stage.id}
source: ""
created_at: ${date}
updated_at: ${date}
---

# ${title}

- 目标读者：
- 目标平台：
- 当前阶段：${stage.id}
- 来源文件：
- 创建日期：${date}
- 最后修改：${date}

## 正文或提纲


## 未核实项


## 发布记录
`);
        await this.openFile(file);
        new Notice2(`已创建到内容生产 / ${stage.id}`);
        return file;
      }
      async advanceContent(note) {
        const current = note.stage;
        const index = CONTENT_STAGES.findIndex((stage) => stage.id === current?.id);
        if (index < 0 || index >= CONTENT_STAGES.length - 1) return;
        const next = CONTENT_STAGES[index + 1];
        new ConfirmActionModal(
          this.app,
          `推进到「${next.id}」？`,
          `将移动“${note.file.basename}”，同时更新文件中的当前阶段。不会覆盖目标目录的同名文件。`,
          `推进到 ${next.id}`,
          async () => {
            const targetRoot = `${this.contentPath()}/${next.id}`;
            await ensureFolder(this.app, targetRoot);
            const targetPath = await uniquePath(this.app, `${targetRoot}/${note.file.name}`);
            await this.app.vault.process(note.file, (content) => {
              let updated = content.replace(/^(stage:\s*).+$/mi, `$1${next.id}`);
              if (/^-\s*当前阶段\s*[：:]/mi.test(updated)) updated = updated.replace(/^(\s*-\s*当前阶段\s*[：:]\s*).+$/mi, `$1${next.id}`);
              return updated;
            });
            await this.app.fileManager.renameFile(note.file, targetPath);
            new Notice2(`已推进到 ${next.id}`);
            this.plugin.refreshDashboard();
          }
        ).open();
      }
      skillSystemPrompt(skill) {
        return `你正在执行项目本地 Skill /${skill.id}（${skill.name}）。

${BASE_SKILL_RULES}

本 Skill 的职责：${skill.description}
要求交付：${skill.output}。
插件已在请求前读取并附加解析后的 .fde/config.yaml、FDE Skills 能力目录和 /${skill.id} 的本地 SKILL.md 合同。直接使用这些“本地运行上下文”，不要声称自己无法访问或尚未读取这些文件。`;
      }
      async runSkill(skillId, prompt, sourceFiles = []) {
        const skill = SKILLS.find((item) => item.id === skillId);
        if (!skill) throw new Error(`未知 Skill：${skillId}`);
        const active = this.app.workspace.getActiveFile();
        const sources = [...sourceFiles];
        if (active instanceof TFile2 && !sources.some((item) => item.path === active.path)) sources.push(active);
        const localContext = await this.skillRuntimeContext(skill);
        return this.plugin.executeAgent({
          id: skill.id,
          name: `/${skill.id}`,
          description: skill.description,
          output: skill.output,
          systemPrompt: this.skillSystemPrompt(skill),
          localContext
        }, prompt || skill.description, sources);
      }
    };
    var FDEBaseView = class extends ItemView2 {
      constructor(leaf, plugin, pageKey) {
        super(leaf);
        this.plugin = plugin;
        this.app = plugin.app;
        this.service = plugin.fdeWorkspace;
        this.pageKey = pageKey;
        this.assistantMessages = [];
        this.assistantLoading = false;
        this.assistantRequestId = null;
        this.assistantMode = "chat";
        this.assistantDraft = "";
        this.assistantSourcePaths = [];
        this.renderToken = 0;
      }
      getViewType() {
        return VIEW_TYPES[this.pageKey];
      }
      getDisplayText() {
        return `${NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "FDE365"} · FDE365`;
      }
      getIcon() {
        return NAV_ITEMS.find((item) => item.key === this.pageKey)?.icon || "orbit";
      }
      async onOpen() {
        this.contentEl.addClass("wis-view-content");
        await this.render();
      }
      async onClose() {
        if (this.assistantRequestId) this.plugin.providerManager.cancel(this.assistantRequestId);
        this.contentEl.removeClass("wis-view-content");
      }
      async refresh() {
        return this.render();
      }
      async render() {
        const token = ++this.renderToken;
        const data = await this.service.snapshot();
        if (token !== this.renderToken) return;
        this.contentEl.empty();
        const app = this.contentEl.createDiv({ cls: `wis-fde-app is-${this.plugin.settings.colorTheme === "dark" ? "dark" : "light"}` });
        this.renderSidebar(app, data);
        const workspace = app.createDiv({ cls: "wis-workspace" });
        this.renderTopbar(workspace, data);
        const main = workspace.createEl("main", { cls: "wis-main" });
        await this.renderMain(main, data);
        this.renderStatus(workspace, data);
        this.renderAssistant(app, data);
      }
      renderSidebar(app, data) {
        const sidebar = app.createEl("aside", { cls: "wis-sidebar" });
        const brand = sidebar.createDiv({ cls: "wis-brand" });
        const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "FDE365" } });
        logo.addClass("wis-brand-logo");
        sidebar.createDiv({ text: "FDE365", cls: "wis-nav-label" });
        const nav = sidebar.createEl("nav", { cls: "wis-nav", attr: { "aria-label": "主导航" } });
        NAV_ITEMS.forEach((item) => {
          const button = nav.createEl("button", { cls: `wis-nav-item${item.key === this.pageKey ? " is-active" : ""}` });
          makeIcon(button, item.icon);
          const text = button.createDiv();
          text.createEl("strong", { text: item.label });
          text.createSpan({ text: item.note });
          if (item.key === "inbox" && data.pending.length) button.createSpan({ text: String(data.pending.length), cls: "wis-nav-count" });
          button.addEventListener("click", () => this.plugin.router.navigate(item.key));
        });
        const pulse = sidebar.createDiv({ cls: "wis-library-pulse" });
        const pulseHead = pulse.createDiv({ cls: "wis-pulse-head" });
        pulseHead.createEl("strong", { text: "六库信号" });
        pulseHead.createSpan({ text: `${data.total} 项资产` });
        data.libraries.forEach((library) => {
          const row = pulse.createEl("button", { cls: "wis-pulse-row" });
          row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
          row.createSpan({ text: library.short });
          const meter = row.createDiv({ cls: "wis-mini-meter" });
          meter.createDiv({ cls: `wis-mini-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
          row.createSpan({ text: String(library.count) });
          row.addEventListener("click", () => this.service.openLibrary(library.id));
        });
        const footer = sidebar.createDiv({ cls: "wis-sidebar-footer" });
        footer.createSpan({ text: "本地优先" });
        footer.createSpan({ text: "·" });
        footer.createSpan({ text: "来源优先" });
      }
      renderTopbar(workspace, data) {
        const topbar = workspace.createDiv({ cls: "wis-topbar" });
        const left = topbar.createDiv({ cls: "wis-topbar-title" });
        left.createSpan({ text: "FDE365知识库", cls: "wis-eyebrow" });
        left.createEl("strong", { text: NAV_ITEMS.find((item) => item.key === this.pageKey)?.label || "总览" });
        const actions = topbar.createDiv({ cls: "wis-topbar-actions" });
        const search = actions.createEl("input", { attr: { type: "search", placeholder: "搜索六类资产…", "aria-label": "搜索六类资产" }, cls: "wis-global-search" });
        search.addEventListener("keydown", async (event) => {
          if (event.key !== "Enter" || !search.value.trim()) return;
          const query = search.value.trim().toLowerCase();
          const match = data.notes.find((note) => `${note.file.basename} ${note.content}`.toLowerCase().includes(query));
          if (match) await this.service.openFile(match.file);
          else new Notice2("六类资产中没有找到匹配内容");
        });
        makeButton(actions, "新建资产", "plus", "is-secondary", () => new AssetModal(this.app, "product", async (value) => this.service.createAsset(value)).open());
        makeButton(actions, "设置", "settings", "is-secondary is-settings", () => this.plugin.openSettings());
      }
      renderStatus(workspace, data) {
        const status = workspace.createDiv({ cls: "wis-statusbar" });
        status.createSpan({ text: `Vault: ${this.app.vault.getName()}` });
        status.createSpan({ text: `${data.total} 项正式资产` });
        status.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
        status.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
        status.createSpan({ text: "create-only · 不覆盖原始材料" });
      }
      pageSkills() {
        const map = {
          dashboard: ["fde-start", "fde-health", "fde-focus"],
          inbox: ["fde-ingest", "fde-interview", "fde-export"],
          libraries: ["fde-library", "fde-organize", "fde-interview"],
          network: ["fde-library", "fde-organize", "fde-diagnose"],
          content: ["fde-topics", "fde-write", "fde-review"],
          skills: ["fde-start", "fde-save", "fde-resume"],
          health: ["fde-health", "fde-organize", "fde-safety"]
        };
        return map[this.pageKey] || map.dashboard;
      }
      assistantContextFiles() {
        return this.assistantSourcePaths.map((path) => this.app.vault.getAbstractFileByPath(path)).filter((file) => file instanceof TFile2);
      }
      isAssistantContextFile(file) {
        return file instanceof TFile2 && file.extension === "md" && file.path.startsWith(`${ROOT2}/`) && !file.path.startsWith(`${ROOT2}/.agents/`) && !file.path.startsWith(`${ROOT2}/.fde/`) && !file.path.startsWith(`${ROOT2}/7-系统/`);
      }
      assistantHistoryFiles() {
        const roots = [
          `${ROOT2}/7-系统/AI协作/输出/`,
          `${ROOT2}/7-系统/AI协作/运行记录/`
        ];
        return this.app.vault.getMarkdownFiles().filter((file) => roots.some((root) => file.path.startsWith(root))).sort((a, b) => b.stat.mtime - a.stat.mtime).slice(0, 12);
      }
      renderAssistantConversation(parent) {
        if (!this.assistantMessages.length && !this.assistantLoading) return false;
        const conversation = parent.createDiv({ cls: "wis-conversation" });
        this.assistantMessages.forEach((message) => {
          const item = conversation.createEl("article", { cls: `wis-message is-${message.role}${message.error ? " is-error" : ""}` });
          const avatar = item.createDiv({ cls: "wis-message-avatar" });
          makeIcon(avatar, message.role === "user" ? "user-round" : message.error ? "triangle-alert" : "sparkles");
          const bubble = item.createDiv({ cls: "wis-message-bubble" });
          const meta = bubble.createDiv({ cls: "wis-message-meta" });
          meta.createEl("strong", { text: message.role === "user" ? "你" : message.error ? "请求未完成" : "FDE365" });
          if (message.provider) meta.createSpan({ text: [message.provider, message.model].filter(Boolean).join(" · ") });
          bubble.createDiv({ text: message.content, cls: "wis-message-content" });
          if (message.role === "assistant" && !message.error) {
            const actions = bubble.createDiv({ cls: "wis-message-actions" });
            const copy = makeButton(actions, "复制", "copy", "is-text");
            copy.addEventListener("click", async () => {
              try {
                await navigator.clipboard.writeText(message.content);
                new Notice2("回答已复制");
              } catch (error) {
                new Notice2(`复制失败：${error instanceof Error ? error.message : String(error)}`);
              }
            });
            const save = makeButton(actions, "保存", "file-plus-2", "is-text");
            save.addEventListener("click", async () => {
              const file = await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`);
              new Notice2(`回答已保存：${file.path}`);
              await this.render();
            });
          }
        });
        if (this.assistantLoading) {
          const loading = conversation.createEl("article", { cls: "wis-message is-assistant is-loading" });
          const avatar = loading.createDiv({ cls: "wis-message-avatar" });
          makeIcon(avatar, "sparkles");
          const bubble = loading.createDiv({ cls: "wis-message-bubble" });
          bubble.createEl("strong", { text: "正在结合六类资产回答…" });
          const stop = makeButton(bubble, "停止生成", "square", "is-secondary");
          stop.addEventListener("click", () => {
            if (this.assistantRequestId) this.plugin.providerManager.cancel(this.assistantRequestId);
          });
        }
        return true;
      }
      renderAssistantChat(parent, data) {
        if (!this.renderAssistantConversation(parent)) {
          const welcome = parent.createDiv({ cls: "wis-assistant-welcome" });
          const icon = welcome.createDiv({ cls: "wis-assistant-welcome-icon" });
          makeIcon(icon, "orbit");
          welcome.createEl("strong", { text: "在知识库里，和 AI 协作工作" });
          welcome.createEl("p", { text: "连续对话、选取上下文、调用 FDE Skills，并把可用结果保存回本地。" });
          const features = welcome.createDiv({ cls: "wis-assistant-feature-chips" });
          ["本地会话", "知识上下文", "结果留档"].forEach((label) => features.createSpan({ text: label }));
        }
        const context = parent.createDiv({ cls: "wis-context-card" });
        context.createEl("strong", { text: "当前知识库" });
        context.createSpan({ text: `${data.total} 项资产 · ${data.pending.length} 份待处理` });
        context.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)} · ${data.unknown} 个待确认项` });
      }
      renderAssistantKnowledge(parent, data) {
        const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
        intro.createEl("strong", { text: "六类资产" });
        intro.createSpan({ text: "进入真实业务边界，查看来源、版本和待确认项。" });
        const list = parent.createDiv({ cls: "wis-assistant-fde-list" });
        data.libraries.forEach((library) => {
          const button = list.createEl("button", { cls: `wis-assistant-fde-item is-${library.color}` });
          button.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
          const copy = button.createDiv();
          copy.createEl("strong", { text: library.name });
          copy.createSpan({ text: library.count ? `来源 ${percent(library.sourceCoverage)} · ${library.unknown} 待确认` : library.emptyAction });
          button.createSpan({ text: String(library.count) });
          button.addEventListener("click", () => this.service.openLibrary(library.id));
        });
        makeButton(parent, "查库 /fde-library", "sparkles", "is-secondary wis-assistant-wide-action", () => new TextPromptModal(this.app, {
          title: "运行 /fde-library",
          description: "查找时返回答案、来源和版本；新增或纠错前先展示目标文件。",
          placeholder: "你想从六类资产中查什么？",
          multiline: true,
          onSubmit: async (value) => this.service.runSkill("fde-library", value)
        }).open());
      }
      renderAssistantSkills(parent) {
        const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
        intro.createEl("strong", { text: "当前页面工作流" });
        intro.createSpan({ text: "运行前读取项目内 SKILL.md，结果进入本地 AI 协作记录。" });
        const quick = parent.createDiv({ cls: "wis-skill-quick" });
        this.pageSkills().map((id) => SKILLS.find((skill) => skill.id === id)).filter(Boolean).forEach((skill) => {
          const button = quick.createEl("button", { cls: "wis-quick-skill" });
          makeIcon(button, skill.icon);
          const text = button.createDiv();
          text.createEl("strong", { text: `/${skill.id}` });
          text.createSpan({ text: skill.name });
          button.addEventListener("click", () => new TextPromptModal(this.app, {
            title: `运行 /${skill.id}`,
            description: skill.description,
            placeholder: "描述这次要处理的真实任务…",
            multiline: true,
            submitLabel: "开始运行",
            onSubmit: async (value) => this.service.runSkill(skill.id, value)
          }).open());
        });
        makeButton(parent, "查看全部 35 个 FDE Skills", "blocks", "is-secondary wis-assistant-wide-action", () => this.plugin.router.navigate("skills"));
      }
      renderAssistantHistory(parent) {
        const intro = parent.createDiv({ cls: "wis-assistant-section-head" });
        intro.createEl("strong", { text: "本地协作历史" });
        intro.createSpan({ text: "显示已保存的 AI 回答和 FDE Skill 运行记录，不读取外部账号历史。" });
        const files = this.assistantHistoryFiles();
        const list = parent.createDiv({ cls: "wis-assistant-history" });
        if (!files.length) list.createDiv({ text: "还没有已保存的协作记录。对话回答可用“保存”写入本地。", cls: "wis-empty" });
        files.forEach((file) => {
          const meta = frontmatterOf(this.app, file);
          const button = list.createEl("button", { cls: "wis-assistant-history-item" });
          makeIcon(button, meta.type === "agent-run" ? "list-checks" : "message-square-text");
          const copy = button.createDiv();
          copy.createEl("strong", { text: file.basename });
          copy.createSpan({ text: [meta.provider, meta.model, formatRelativeTime2(file.stat.mtime)].filter(Boolean).join(" · ") });
          button.addEventListener("click", () => this.service.openFile(file));
        });
      }
      renderAssistantComposer(panel) {
        const composer = panel.createDiv({ cls: "wis-composer" });
        const toolbar = composer.createDiv({ cls: "wis-composer-toolbar" });
        const active = this.app.workspace.getActiveFile();
        const activeAttached = this.isAssistantContextFile(active) && this.assistantSourcePaths.includes(active.path);
        const note = makeButton(toolbar, "当前笔记", "file-text", `is-tool${activeAttached ? " is-active" : ""}`);
        note.setAttr("title", activeAttached ? "移除当前笔记上下文" : "添加当前笔记为上下文");
        note.addEventListener("click", async () => {
          if (!this.isAssistantContextFile(active)) {
            new Notice2("请先在FDE365知识库中打开一篇业务笔记");
            return;
          }
          this.assistantSourcePaths = activeAttached ? this.assistantSourcePaths.filter((path) => path !== active.path) : [.../* @__PURE__ */ new Set([...this.assistantSourcePaths, active.path])];
          await this.render();
        });
        const attach = makeButton(toolbar, "添加上下文", "paperclip", "is-tool");
        attach.addEventListener("click", () => new AssistantContextModal(this.app, this.assistantSourcePaths, async (paths) => {
          this.assistantSourcePaths = paths;
          await this.render();
        }).open());
        const fresh = makeButton(toolbar, "新对话", "message-square-plus", "is-tool");
        fresh.addEventListener("click", async () => {
          if (this.assistantRequestId) this.plugin.providerManager.cancel(this.assistantRequestId);
          this.assistantMessages = [];
          this.assistantDraft = "";
          await this.render();
        });
        if (this.assistantSourcePaths.length) {
          const files = composer.createDiv({ cls: "wis-composer-context" });
          this.assistantContextFiles().forEach((file) => {
            const chip = files.createEl("button", { cls: "wis-context-chip", attr: { title: file.path } });
            makeIcon(chip, "file-text");
            chip.createSpan({ text: file.basename });
            makeIcon(chip, "x");
            chip.addEventListener("click", async () => {
              this.assistantSourcePaths = this.assistantSourcePaths.filter((path) => path !== file.path);
              await this.render();
            });
          });
        }
        const row = composer.createDiv({ cls: "wis-composer-row" });
        const input = row.createEl("textarea", { attr: { placeholder: "问六类资产，或描述要推进的工作…", rows: "3", "aria-label": "询问FDE365 AI" } });
        input.value = this.assistantDraft;
        input.addEventListener("input", () => {
          this.assistantDraft = input.value;
        });
        const send = makeButton(row, this.assistantLoading ? "停止" : "发送", this.assistantLoading ? "square" : "arrow-up", this.assistantLoading ? "is-secondary" : "is-primary");
        const submit = async () => {
          if (this.assistantLoading) {
            if (this.assistantRequestId) this.plugin.providerManager.cancel(this.assistantRequestId);
            return;
          }
          const prompt = input.value.trim();
          if (!prompt) return;
          this.assistantMode = "chat";
          this.assistantMessages.push({ role: "user", content: prompt });
          this.assistantDraft = "";
          this.assistantLoading = true;
          await this.render();
          const requestId = `fde365-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
          this.assistantRequestId = requestId;
          try {
            const result = await this.plugin.askAssistant({
              requestId,
              prompt,
              history: this.assistantMessages.slice(0, -1),
              systemPrompt: `你是FDE365 AI 工作区。当前页面：${this.pageKey}。
${BASE_SKILL_RULES}
插件可能会在“本地运行上下文”中附加已经读取的配置与 Skill 合同；直接使用这些内容，不要要求用户再提供同一文件。先直接回答，再列使用的来源路径和仍待确认的内容。`,
              sourceFiles: this.assistantContextFiles(),
              localContext: await this.service.assistantRuntimeContext(prompt)
            });
            const message = {
              role: "assistant",
              content: result.content,
              provider: this.plugin.providerLabel(result.provider),
              model: result.model,
              result
            };
            this.assistantMessages.push(message);
            if (this.plugin.settings.ai.assistant.autoSaveOutput) await this.plugin.saveAssistantOutput(message, `${this.getDisplayText()} · AI 对话`);
          } catch (error) {
            this.assistantMessages.push({
              role: "assistant",
              content: error instanceof Error ? error.message : String(error),
              error: true,
              code: error?.code || "UNKNOWN_ERROR"
            });
          } finally {
            this.assistantLoading = false;
            this.assistantRequestId = null;
            await this.render();
          }
        };
        send.addEventListener("click", () => void submit());
        input.addEventListener("keydown", (event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            void submit();
          }
        });
        const contextScope = this.plugin.settings.ai.assistant.contextScope;
        composer.createDiv({
          text: contextScope === "retrieved" ? "本地检索上下文开启" : contextScope === "none" ? "仅发送显式上下文" : "当前笔记上下文开启",
          cls: "wis-composer-note"
        });
      }
      renderAssistant(app, data) {
        const panel = app.createEl("aside", { cls: "wis-assistant" });
        const head = panel.createDiv({ cls: "wis-assistant-head" });
        const title = head.createDiv();
        title.createSpan({ text: "FDE365 AI", cls: "wis-eyebrow" });
        title.createEl("strong", { text: "对话 · FDE · Skills · 历史" });
        const capability = this.plugin.providerManager.describeSelected();
        const headActions = head.createDiv({ cls: "wis-assistant-head-actions" });
        const provider = headActions.createEl("button", {
          cls: `wis-provider-dot${capability.configured && capability.compatible ? " is-ready" : ""}`,
          attr: { title: [capability.label, capability.model, capability.error].filter(Boolean).join(" · ") }
        });
        provider.createSpan({ text: capability.configured ? capability.model : "配置 Token" });
        provider.addEventListener("click", () => this.plugin.openSettings("ai"));
        const body = panel.createDiv({ cls: "wis-assistant-body" });
        body.createEl("p", { text: "对话、FDE 与本地工作流共享六类资产规则；关键结论返回来源。", cls: "wis-assistant-rule" });
        const tabs = body.createDiv({ cls: "wis-assistant-tabs", attr: { role: "tablist", "aria-label": "AI 工作区" } });
        [["chat", "对话"], ["fde", "FDE"], ["skills", "Skills"], ["history", "历史"]].forEach(([id, label]) => {
          const tab = tabs.createEl("button", { cls: this.assistantMode === id ? "is-active" : "", attr: { role: "tab", "aria-selected": String(this.assistantMode === id) } });
          tab.createSpan({ text: label });
          tab.addEventListener("click", async () => {
            this.assistantMode = id;
            await this.render();
          });
        });
        const surface = body.createDiv({ cls: `wis-assistant-surface is-${this.assistantMode}` });
        if (this.assistantMode === "fde") this.renderAssistantKnowledge(surface, data);
        else if (this.assistantMode === "skills") this.renderAssistantSkills(surface);
        else if (this.assistantMode === "history") this.renderAssistantHistory(surface);
        else this.renderAssistantChat(surface, data);
        this.renderAssistantComposer(panel);
      }
    };
    var FDEDashboardView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "dashboard");
      }
      async renderMain(main, data) {
        const hero = main.createEl("section", { cls: "wis-hero" });
        const copy = hero.createDiv();
        copy.createSpan({ text: "FDE365 · 六类资产", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "六类资产运营台" });
        copy.createEl("p", { text: "不按话题堆笔记。围绕老板、产品、客户、案例、方法和内容，持续保留真源与下一步。" });
        const signal = hero.createDiv({ cls: "wis-today-signal" });
        makeIcon(signal, data.pending.length ? "inbox" : data.unknown ? "circle-help" : "circle-check-big");
        const signalCopy = signal.createDiv();
        signalCopy.createSpan({ text: "当前入口" });
        signalCopy.createEl("strong", { text: data.pending.length ? `先处理 ${data.pending.length} 份原始材料` : data.unknown ? `先确认 ${data.unknown} 个未知项` : "六库状态可以继续推进" });
        makeButton(signal, "运行 /fde-start", "arrow-right", "is-secondary", () => this.service.runSkill("fde-start", "请读取当前六类资产库状态，为我选择并执行一个最值得推进的入口。"));
        const head = main.createDiv({ cls: "wis-section-head" });
        const headCopy = head.createDiv();
        headCopy.createEl("h2", { text: "六类资产" });
        headCopy.createSpan({ text: "目录就是业务边界；数字只统计正式资产，不包含系统文件和 Skill。" });
        const grid = main.createDiv({ cls: "wis-library-grid" });
        data.libraries.forEach((library) => {
          const card = grid.createEl("button", { cls: `wis-library-card is-${library.color}` });
          const top = card.createDiv({ cls: "wis-library-card-top" });
          top.createSpan({ text: library.order, cls: "wis-library-number" });
          makeIcon(top, library.icon);
          card.createEl("h3", { text: library.name });
          card.createEl("p", { text: library.description });
          const metrics = card.createDiv({ cls: "wis-library-metrics" });
          metrics.createDiv({ text: String(library.count), cls: "wis-library-count" });
          const detail = metrics.createDiv();
          detail.createSpan({ text: "项资产" });
          detail.createSpan({ text: `来源 ${percent(library.sourceCoverage)}` });
          const footer = card.createDiv({ cls: "wis-library-card-foot" });
          footer.createSpan({ text: library.count ? `${library.unknown} 个待确认` : library.emptyAction });
          footer.createSpan({ text: library.updated ? formatRelativeTime2(library.updated) : "尚未建立" });
          card.addEventListener("click", () => this.service.openLibrary(library.id));
        });
        const lower = main.createDiv({ cls: "wis-dashboard-lower" });
        const pipeline = lower.createEl("section", { cls: "wis-panel wis-pipeline-summary" });
        const pipelineHead = pipeline.createDiv({ cls: "wis-panel-head" });
        const pipelineTitle = pipelineHead.createDiv();
        pipelineTitle.createEl("h2", { text: "内容流转" });
        pipelineTitle.createSpan({ text: "一个文件只处于一个阶段" });
        makeButton(pipelineHead, "打开流水线", "arrow-right", "is-text", () => this.plugin.activateProjects());
        const track = pipeline.createDiv({ cls: "wis-stage-track" });
        data.stages.forEach((stage, index) => {
          const item = track.createDiv({ cls: `wis-stage-node is-${stage.color}` });
          item.createSpan({ text: String(index + 1).padStart(2, "0") });
          item.createEl("strong", { text: stage.id });
          item.createDiv({ text: String(stage.items.length) });
        });
        const quality = lower.createEl("section", { cls: "wis-panel wis-quality-summary" });
        const qualityHead = quality.createDiv({ cls: "wis-panel-head" });
        const qualityTitle = qualityHead.createDiv();
        qualityTitle.createEl("h2", { text: "知识质量" });
        qualityTitle.createSpan({ text: "只显示可行动的问题" });
        makeButton(qualityHead, "完整体检", "arrow-right", "is-text", () => this.plugin.activateAnalytics());
        [
          { label: "缺少来源", value: data.total - data.notes.filter((note) => note.source).length, note: "不能作为确定事实", icon: "link-2-off", color: "orange" },
          { label: "待确认内容", value: data.unknown, note: "推断和事实尚未分开", icon: "circle-help", color: "violet" },
          { label: "超过 90 天", value: data.stale, note: "可能需要版本复核", icon: "clock-3", color: "blue" }
        ].forEach((item) => {
          const row = quality.createDiv({ cls: `wis-quality-row is-${item.color}` });
          makeIcon(row, item.icon);
          const text = row.createDiv();
          text.createEl("strong", { text: item.label });
          text.createSpan({ text: item.note });
          row.createSpan({ text: String(item.value) });
        });
        const recent = main.createEl("section", { cls: "wis-panel wis-recent" });
        const recentHead = recent.createDiv({ cls: "wis-panel-head" });
        const recentTitle = recentHead.createDiv();
        recentTitle.createEl("h2", { text: "最近资产" });
        recentTitle.createSpan({ text: "来自六个正式资产库" });
        if (!data.recent.length) recent.createDiv({ text: "六类资产还是空的。运行 /fde-interview，或先把材料放入待处理。", cls: "wis-empty" });
        data.recent.forEach((note) => {
          const row = recent.createEl("button", { cls: "wis-note-row" });
          row.createSpan({ text: note.library?.order || "--", cls: `wis-library-code is-${note.library?.color || "blue"}` });
          const text = row.createDiv();
          text.createEl("strong", { text: note.file.basename });
          text.createSpan({ text: `${note.library?.name || "资产"} · ${note.source ? `来源：${note.source}` : "缺少来源"}` });
          row.createSpan({ text: formatRelativeTime2(note.file.stat.mtime) });
          row.addEventListener("click", () => this.service.openFile(note.file));
        });
      }
    };
    var FDEInboxView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "inbox");
      }
      createQuickNote() {
        new TextPromptModal(this.app, {
          title: "快速记录原始材料",
          description: "先完整保留原始表达，之后再运行 /fde-ingest 分流。",
          placeholder: "给这份材料起一个可识别的标题…",
          onSubmit: async (value) => this.service.createQuickNote(value)
        }).open();
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 原始材料", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "待处理材料" });
        copy.createEl("p", { text: "录音、聊天、会议纪要和旧资料先保留原文；AI 只生成分流预览，确认后才写入六类资产。" });
        const actions = header.createDiv({ cls: "wis-header-actions" });
        makeButton(actions, "快速记录", "plus", "is-primary", () => this.createQuickNote());
        makeButton(actions, "运行 /fde-ingest", "sparkles", "is-secondary", () => this.service.runSkill("fde-ingest", "请通读待处理目录中的材料，生成分流预览。不要覆盖原始文件，不要在未经确认时写入正式资产库。", data.pending.slice(0, 6)));
        const stats = main.createDiv({ cls: "wis-compact-stats" });
        [
          ["待处理", data.pending.length, "inbox", "orange"],
          ["已处理记录", data.processed.length, "archive-restore", "blue"],
          ["正式资产", data.total, "library", "indigo"],
          ["待确认项", data.unknown, "circle-help", "violet"]
        ].forEach(([label, value, iconName, color]) => {
          const card = stats.createDiv({ cls: `wis-compact-stat is-${color}` });
          makeIcon(card, iconName);
          const text = card.createDiv();
          text.createSpan({ text: label });
          text.createEl("strong", { text: String(value) });
        });
        const flow = main.createEl("section", { cls: "wis-panel wis-ingest-flow" });
        const flowHead = flow.createDiv({ cls: "wis-panel-head" });
        const title = flowHead.createDiv();
        title.createEl("h2", { text: "安全入库流程" });
        title.createSpan({ text: "确认点放在真正写入之前" });
        const steps = flow.createDiv({ cls: "wis-ingest-steps" });
        [
          ["01", "保留原文", "登记路径、日期、参与人", "file-lock-2"],
          ["02", "通读拆分", "原话、事实、判断、方法、案例、选题", "scan-text"],
          ["03", "分流预览", "新增、补充、冲突、重复", "split"],
          ["04", "人工确认", "确认后写六库并记录处理批次", "badge-check"]
        ].forEach(([number, label, note, iconName]) => {
          const step = steps.createDiv({ cls: "wis-ingest-step" });
          step.createSpan({ text: number });
          makeIcon(step, iconName);
          step.createEl("strong", { text: label });
          step.createDiv({ text: note });
        });
        const list = main.createEl("section", { cls: "wis-panel" });
        const listHead = list.createDiv({ cls: "wis-panel-head" });
        const listTitle = listHead.createDiv();
        listTitle.createEl("h2", { text: "原始材料" });
        listTitle.createSpan({ text: "插件不会删除或用摘要替换这些文件" });
        if (!data.pending.length) list.createDiv({ text: "待处理目录是空的。可以快速记录，或把录音转写、聊天导出和会议纪要放进该目录。", cls: "wis-empty" });
        data.pending.forEach((file) => {
          const row = list.createDiv({ cls: "wis-inbox-row" });
          makeIcon(row, "file-audio", "is-orange");
          const text = row.createDiv();
          text.createEl("strong", { text: file.basename });
          text.createSpan({ text: `${formatRelativeTime2(file.stat.mtime)} · 原始材料保留` });
          const actions2 = row.createDiv({ cls: "wis-row-actions" });
          makeButton(actions2, "打开", "external-link", "is-text", () => this.service.openFile(file));
          makeButton(actions2, "生成分流预览", "sparkles", "is-secondary", () => this.service.runSkill("fde-ingest", `请处理这份原始材料：${file.path}。先生成分流预览，不要直接写入正式资产。`, [file]));
        });
      }
    };
    var FDELibrariesView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "libraries");
        this.selectedLibrary = "all";
        this.query = "";
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 真实来源", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "六类资产" });
        copy.createEl("p", { text: "每个库回答一种不同的问题。路径决定归属，来源决定能否作为事实使用。" });
        makeButton(header, "新建资产", "plus", "is-primary", () => new AssetModal(this.app, this.selectedLibrary, async (value) => this.service.createAsset(value)).open());
        const selector = main.createDiv({ cls: "wis-library-selector" });
        const all = selector.createEl("button", { cls: `wis-library-tab${this.selectedLibrary === "all" ? " is-active" : ""}` });
        all.createSpan({ text: "ALL" });
        all.createEl("strong", { text: "全部资产" });
        all.createSpan({ text: String(data.total) });
        all.addEventListener("click", () => {
          this.selectedLibrary = "all";
          void this.render();
        });
        data.libraries.forEach((library) => {
          const button = selector.createEl("button", { cls: `wis-library-tab is-${library.color}${this.selectedLibrary === library.id ? " is-active" : ""}` });
          button.createSpan({ text: library.order });
          button.createEl("strong", { text: library.name });
          button.createSpan({ text: String(library.count) });
          button.addEventListener("click", () => {
            this.selectedLibrary = library.id;
            void this.render();
          });
        });
        const selected = this.selectedLibrary === "all" ? null : data.libraries.find((item) => item.id === this.selectedLibrary);
        if (selected) {
          const brief = main.createDiv({ cls: `wis-library-brief is-${selected.color}` });
          makeIcon(brief, selected.icon);
          const briefCopy = brief.createDiv();
          briefCopy.createEl("h2", { text: selected.name });
          briefCopy.createEl("p", { text: selected.description });
          const briefMetrics = brief.createDiv({ cls: "wis-brief-metrics" });
          briefMetrics.createSpan({ text: `${selected.count} 项资产` });
          briefMetrics.createSpan({ text: `来源覆盖 ${percent(selected.sourceCoverage)}` });
          briefMetrics.createSpan({ text: `${selected.unknown} 个待确认` });
        }
        const toolbar = main.createDiv({ cls: "wis-library-toolbar" });
        const search = toolbar.createEl("input", { attr: { type: "search", placeholder: "在当前资产范围搜索…" } });
        search.value = this.query;
        search.addEventListener("input", () => {
          this.query = search.value.trim().toLowerCase();
          main.querySelectorAll(".wis-asset-card").forEach((card) => card.toggleClass("is-hidden", !card.dataset.search.includes(this.query)));
        });
        makeButton(toolbar, "查库 /fde-library", "sparkles", "is-secondary", () => new TextPromptModal(this.app, {
          title: "运行 /fde-library",
          description: "查找时返回答案、来源和版本；新增或纠错前先展示目标文件。",
          placeholder: "你想从六类资产中查什么？",
          multiline: true,
          onSubmit: async (value) => this.service.runSkill("fde-library", value)
        }).open());
        const notes = data.notes.filter((note) => this.selectedLibrary === "all" || note.library?.id === this.selectedLibrary);
        const grid = main.createDiv({ cls: "wis-asset-grid" });
        if (!notes.length) grid.createDiv({ text: selected?.emptyAction || "六类资产还是空的。", cls: "wis-empty" });
        notes.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
          const card = grid.createEl("button", { cls: `wis-asset-card is-${note.library?.color || "blue"}` });
          card.dataset.search = `${note.file.basename} ${note.content}`.toLowerCase();
          const top = card.createDiv({ cls: "wis-asset-card-top" });
          top.createSpan({ text: note.library?.order || "--", cls: "wis-library-code" });
          top.createSpan({ text: note.library?.name || "资产" });
          card.createEl("h3", { text: note.file.basename });
          card.createEl("p", { text: note.excerpt || "尚未填写正文。" });
          const evidence = card.createDiv({ cls: "wis-evidence-row" });
          evidence.createSpan({ text: note.source ? "有来源" : "缺少来源", cls: note.source ? "is-good" : "is-warning" });
          if (note.unknown) evidence.createSpan({ text: `${note.unknown} 待确认`, cls: "is-unknown" });
          evidence.createSpan({ text: formatRelativeTime2(note.file.stat.mtime) });
          card.addEventListener("click", () => this.service.openFile(note.file));
        });
      }
    };
    var FDENetworkView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "network");
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 资产连接", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "资产网络" });
        copy.createEl("p", { text: "关系不是装饰：产品要连接客户需求，方法要连接真实案例，内容要能回到来源。" });
        makeButton(header, "整理关联", "sparkles", "is-primary", () => this.service.runSkill("fde-organize", "请只读检查六类资产之间的支持、冲突、例子和版本关系，先给关联与迁移预览。"));
        const map = main.createEl("section", { cls: "wis-network-map" });
        const center = map.createDiv({ cls: "wis-network-center" });
        center.createSpan({ text: "FDE365" });
        center.createEl("strong", { text: `${data.relations.edges.length}` });
        center.createSpan({ text: "跨库连接" });
        data.libraries.forEach((library, index) => {
          const node = map.createEl("button", { cls: `wis-network-node is-${library.color} at-${index + 1}` });
          node.createSpan({ text: library.order });
          makeIcon(node, library.icon);
          node.createEl("strong", { text: library.short });
          node.createSpan({ text: `${library.count} 项` });
          node.addEventListener("click", () => this.service.openLibrary(library.id));
        });
        const matrixPanel = main.createEl("section", { cls: "wis-panel wis-relation-matrix" });
        const matrixHead = matrixPanel.createDiv({ cls: "wis-panel-head" });
        const title = matrixHead.createDiv();
        title.createEl("h2", { text: "跨库关系矩阵" });
        title.createSpan({ text: "只统计实际双向链接，不生成模拟数据" });
        const table = matrixPanel.createDiv({ cls: "wis-matrix" });
        table.createSpan();
        data.libraries.forEach((library) => table.createSpan({ text: library.short, cls: `is-${library.color}` }));
        data.libraries.forEach((source) => {
          table.createSpan({ text: source.short, cls: `is-${source.color}` });
          data.libraries.forEach((target) => {
            const value = data.relations.matrix[source.id][target.id];
            table.createSpan({ text: String(value), cls: value ? "has-link" : "" });
          });
        });
        const gaps = main.createEl("section", { cls: "wis-panel" });
        const gapsHead = gaps.createDiv({ cls: "wis-panel-head" });
        const gapsTitle = gapsHead.createDiv();
        gapsTitle.createEl("h2", { text: "关键连接检查" });
        gapsTitle.createSpan({ text: "优先补能验证业务判断的连接" });
        [
          ["产品 → 客户", "产品承诺是否来自真实需求", "product", "customer"],
          ["案例 → 方法", "方法是否有实际使用证据", "case", "method"],
          ["内容 → 来源", "成稿是否能回到产品、客户和案例", "content", "case"]
        ].forEach(([label, note, from, to]) => {
          const value = data.relations.matrix[from][to] + data.relations.matrix[to][from];
          const row = gaps.createDiv({ cls: "wis-check-row" });
          makeIcon(row, value ? "circle-check-big" : "circle-dashed", value ? "is-good" : "is-warning");
          const text = row.createDiv();
          text.createEl("strong", { text: label });
          text.createSpan({ text: note });
          row.createSpan({ text: value ? `${value} 条连接` : "尚未连接" });
        });
      }
    };
    var FDEContentView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "content");
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 内容工作流", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "内容生产" });
        copy.createEl("p", { text: "同一稿件不复制成多个状态。目录和文件中的当前阶段必须一致，发布结论必须能回到六库来源。" });
        const actions = header.createDiv({ cls: "wis-header-actions" });
        makeButton(actions, "新建选题", "plus", "is-primary", () => new TextPromptModal(this.app, {
          title: "新建选题",
          description: "创建后进入“选题”阶段；请在文件中补目标读者、核心问题和来源。",
          placeholder: "选题标题…",
          onSubmit: async (value) => this.service.createContent(value, "选题")
        }).open());
        makeButton(actions, "从六库找选题", "sparkles", "is-secondary", () => this.service.runSkill("fde-topics", "请从客户原话、产品问题、案例结果、老板判断和方法资产中生成可追溯选题。"));
        const summary = main.createDiv({ cls: "wis-content-summary" });
        data.stages.forEach((stage, index) => {
          const item = summary.createDiv({ cls: `wis-content-summary-item is-${stage.color}` });
          item.createSpan({ text: String(index + 1).padStart(2, "0") });
          makeIcon(item, stage.icon);
          item.createEl("strong", { text: stage.id });
          item.createDiv({ text: String(stage.items.length) });
        });
        const board = main.createDiv({ cls: "wis-content-board" });
        data.stages.forEach((stage, index) => {
          const column = board.createEl("section", { cls: `wis-stage-column is-${stage.color}` });
          const stageHead = column.createDiv({ cls: "wis-stage-column-head" });
          const stageTitle = stageHead.createDiv();
          stageTitle.createSpan({ text: String(index + 1).padStart(2, "0") });
          stageTitle.createEl("strong", { text: stage.id });
          stageHead.createSpan({ text: String(stage.items.length) });
          column.createDiv({ text: stage.description, cls: "wis-stage-description" });
          const cards = column.createDiv({ cls: "wis-stage-cards" });
          if (!stage.items.length) cards.createDiv({ text: "暂无内容", cls: "wis-stage-empty" });
          stage.items.sort((a, b) => b.file.stat.mtime - a.file.stat.mtime).forEach((note) => {
            const card = cards.createDiv({ cls: "wis-content-card" });
            card.createEl("strong", { text: note.file.basename });
            card.createSpan({ text: note.source ? `来源：${note.source}` : "缺少来源", cls: note.source ? "is-source" : "is-warning" });
            if (note.unknown) card.createSpan({ text: `${note.unknown} 个未核实项`, cls: "is-unknown" });
            const cardActions = card.createDiv({ cls: "wis-content-card-actions" });
            makeButton(cardActions, "打开", "external-link", "is-text", () => this.service.openFile(note.file));
            if (index < CONTENT_STAGES.length - 1) makeButton(cardActions, "推进", "arrow-right", "is-text", () => this.service.advanceContent(note));
            if (stage.id === "待审核") makeButton(cardActions, "审核", "sparkles", "is-text", () => this.service.runSkill("fde-review", `请审核稿件 ${note.file.path}，默认只诊断，不直接改稿。`, [note.file]));
          });
        });
        if (data.stageConflicts.length) {
          const conflict = main.createEl("section", { cls: "wis-alert is-warning" });
          makeIcon(conflict, "triangle-alert");
          const text = conflict.createDiv();
          text.createEl("strong", { text: `${data.stageConflicts.length} 个阶段冲突` });
          text.createSpan({ text: "文件所在目录与“当前阶段”字段不一致。运行 /fde-health 查看路径证据，插件不会自动选边。" });
          makeButton(conflict, "运行体检", "activity", "is-secondary", () => this.service.runSkill("fde-health", "请检查内容文件目录与当前阶段字段冲突，只报告，不自动移动。", data.stageConflicts.map((note) => note.file)));
        }
      }
    };
    var FDESkillsView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "skills");
        this.selectedSkill = "fde-start";
        this.selectedGroup = "entry";
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 本地工作流", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "FDE Skills" });
        copy.createEl("p", { text: "35 项能力随知识库部署在 .agents/skills。它们共享六库边界、来源规则、未知项和确认机制。" });
        const capability = this.plugin.providerManager.describeSelected();
        const status = header.createDiv({ cls: `wis-provider-status${capability.configured ? " is-ready" : ""}` });
        makeIcon(status, capability.configured ? "circle-check-big" : "circle-alert");
        status.createSpan({ text: capability.configured ? `${capability.label} · ${capability.model || "默认模型"}` : "AI Provider 未配置" });
        const overview = main.createDiv({ cls: "wis-skill-overview" });
        overview.createDiv({ text: String(data.installedSkills.length), cls: "wis-skill-big-number" });
        const overviewCopy = overview.createDiv();
        overviewCopy.createEl("strong", { text: `已部署 / ${SKILLS.length} Skills` });
        overviewCopy.createSpan({ text: "create-only 安装，不覆盖已有 Skill；Codex 从知识库根目录发现本地能力。" });
        const meter = overview.createDiv({ cls: "wis-skill-meter" });
        meter.createDiv({ cls: "wis-skill-meter-fill", attr: { style: `width:${Math.round(data.installedSkills.length / SKILLS.length * 100)}%` } });
        const tabs = main.createDiv({ cls: "wis-skill-groups" });
        SKILL_GROUPS.forEach((group) => {
          const button = tabs.createEl("button", { cls: this.selectedGroup === group.id ? "is-active" : "" });
          button.createEl("strong", { text: group.name });
          button.createSpan({ text: String(SKILLS.filter((skill2) => skill2.group === group.id).length) });
          button.addEventListener("click", () => {
            this.selectedGroup = group.id;
            this.selectedSkill = SKILLS.find((skill2) => skill2.group === group.id)?.id;
            void this.render();
          });
        });
        const layout = main.createDiv({ cls: "wis-skill-layout" });
        const catalog = layout.createDiv({ cls: "wis-skill-catalog" });
        SKILLS.filter((skill2) => skill2.group === this.selectedGroup).forEach((skill2) => {
          const installed = data.installedSkills.includes(skill2.id);
          const button = catalog.createEl("button", { cls: `wis-skill-card${this.selectedSkill === skill2.id ? " is-selected" : ""}` });
          makeIcon(button, skill2.icon);
          const text = button.createDiv();
          text.createEl("strong", { text: `/${skill2.id}` });
          text.createSpan({ text: skill2.name });
          button.createSpan({ text: installed ? "已部署" : "缺失", cls: installed ? "is-installed" : "is-missing" });
          button.addEventListener("click", () => {
            this.selectedSkill = skill2.id;
            void this.render();
          });
        });
        const skill = SKILLS.find((item) => item.id === this.selectedSkill) || SKILLS[0];
        const detail = layout.createEl("section", { cls: "wis-skill-detail" });
        const detailIcon = detail.createDiv({ cls: "wis-skill-detail-icon" });
        makeIcon(detailIcon, skill.icon);
        detail.createSpan({ text: `/${skill.id}`, cls: "wis-eyebrow" });
        detail.createEl("h2", { text: skill.name });
        detail.createEl("p", { text: skill.description });
        const contract = detail.createDiv({ cls: "wis-skill-contract" });
        contract.createEl("strong", { text: "共同工作合同" });
        ["读取 .fde/config.yaml", "关键判断附来源", "事实 / 推断 / 未知分开", "破坏性动作先预览确认"].forEach((item) => {
          const row = contract.createDiv();
          makeIcon(row, "check");
          row.createSpan({ text: item });
        });
        detail.createDiv({ text: `交付：${skill.output}`, cls: "wis-skill-output" });
        const detailActions = detail.createDiv({ cls: "wis-skill-detail-actions" });
        makeButton(detailActions, `运行 /${skill.id}`, "play", "is-primary", () => new TextPromptModal(this.app, {
          title: `运行 /${skill.id}`,
          description: `${skill.description} 结果会保存在本地 AI 协作运行记录，等待人工验收。`,
          placeholder: "描述本次任务、目标和限制…",
          multiline: true,
          submitLabel: "开始运行",
          onSubmit: async (value) => this.service.runSkill(skill.id, value)
        }).open());
        makeButton(detailActions, "查看运行记录", "history", "is-secondary", async () => {
          this.assistantMode = "history";
          await this.render();
        });
      }
    };
    var FDEHealthView = class extends FDEBaseView {
      constructor(leaf, plugin) {
        super(leaf, plugin, "health");
      }
      async renderMain(main, data) {
        const header = main.createDiv({ cls: "wis-page-header" });
        const copy = header.createDiv();
        copy.createSpan({ text: "FDE365 · 知识质量", cls: "wis-eyebrow" });
        copy.createEl("h1", { text: "知识体检" });
        copy.createEl("p", { text: "检查六库配置、来源、未知项、收件箱、内容阶段和本地 Skill。默认只报告，不替你选择业务事实。" });
        const actions = header.createDiv({ cls: "wis-header-actions" });
        makeButton(actions, "运行 /fde-health", "activity", "is-primary", () => this.service.runSkill("fde-health", "请对当前六类资产知识库做完整只读体检，按阻塞、要处理、提醒给出路径和证据。"));
        makeButton(actions, "补齐缺失模板", "folder-plus", "is-secondary", () => this.plugin.bootstrapService.ensure({ notify: true }));
        const score = Math.max(0, Math.round(100 - (1 - data.sourceCoverage) * 45 - Math.min(25, data.unknown * 3) - Math.min(15, data.stageConflicts.length * 5) - Math.min(15, data.missingPaths.length * 8)));
        const hero = main.createDiv({ cls: "wis-health-hero" });
        const ring = hero.createDiv({ cls: "wis-health-ring", attr: { style: `--wis-health:${score * 3.6}deg` } });
        ring.createEl("strong", { text: String(score) });
        ring.createSpan({ text: "健康度" });
        const heroCopy = hero.createDiv();
        heroCopy.createEl("h2", { text: score >= 80 ? "六库可以继续使用" : score >= 55 ? "知识库可用，但有明确缺口" : "先修结构和来源，再扩大使用" });
        heroCopy.createEl("p", { text: "健康度只基于当前本地证据，不生成模拟增长率或成功率。空库不会被判断为损坏。" });
        const heroMetrics = heroCopy.createDiv({ cls: "wis-health-hero-metrics" });
        heroMetrics.createSpan({ text: `来源覆盖 ${percent(data.sourceCoverage)}` });
        heroMetrics.createSpan({ text: `${data.unknown} 个待确认` });
        heroMetrics.createSpan({ text: `${data.pending.length} 份待处理` });
        heroMetrics.createSpan({ text: `${data.installedSkills.length}/${SKILLS.length} Skills` });
        const issues = main.createDiv({ cls: "wis-health-issues" });
        [
          { level: data.missingPaths.length ? "block" : "ok", title: "六库路径", value: data.missingPaths.length ? `${data.missingPaths.length} 个缺失` : "配置与目录存在", note: data.missingPaths[0] || `${ROOT2}/.fde/config.yaml` },
          { level: data.sourceCoverage < 0.8 ? "warn" : "ok", title: "来源覆盖", value: percent(data.sourceCoverage), note: `${data.total - data.notes.filter((note) => note.source).length} 项资产没有可识别来源` },
          { level: data.unknown ? "warn" : "ok", title: "事实边界", value: `${data.unknown} 个待确认`, note: "待确认、待验证、未核实和当前推断保持显式分开" },
          { level: data.stageConflicts.length ? "block" : "ok", title: "内容阶段", value: data.stageConflicts.length ? `${data.stageConflicts.length} 个冲突` : "目录与字段一致", note: "一个文件同时只处于一个阶段" },
          { level: data.installedSkills.length < SKILLS.length ? "warn" : "ok", title: "项目 Skills", value: `${data.installedSkills.length}/${SKILLS.length}`, note: `${ROOT2}/.agents/skills` }
        ].forEach((item) => {
          const card = issues.createDiv({ cls: `wis-health-issue is-${item.level}` });
          makeIcon(card, item.level === "ok" ? "circle-check-big" : item.level === "block" ? "octagon-alert" : "triangle-alert");
          const text = card.createDiv();
          text.createEl("strong", { text: item.title });
          text.createSpan({ text: item.note });
          card.createSpan({ text: item.value });
        });
        const table = main.createEl("section", { cls: "wis-panel wis-library-health" });
        const tableHead = table.createDiv({ cls: "wis-panel-head" });
        const title = tableHead.createDiv();
        title.createEl("h2", { text: "六库质量" });
        title.createSpan({ text: "来源、未知项和更新时间共同决定是否能复用" });
        data.libraries.forEach((library) => {
          const row = table.createDiv({ cls: "wis-library-health-row" });
          row.createSpan({ text: library.order, cls: `wis-library-code is-${library.color}` });
          const text = row.createDiv();
          text.createEl("strong", { text: library.name });
          text.createSpan({ text: library.count ? `${library.count} 项 · ${library.unknown} 待确认 · ${library.stale} 过期候选` : library.emptyAction });
          const meter = row.createDiv({ cls: "wis-health-meter" });
          meter.createDiv({ cls: `wis-health-meter-fill is-${library.color}`, attr: { style: `width:${library.score}%` } });
          row.createSpan({ text: `${library.score}` });
        });
      }
    };
    module2.exports = {
      ROOT: ROOT2,
      configureKnowledgeRoot: configureKnowledgeRoot2,
      VIEW_TYPES,
      LIBRARIES,
      CONTENT_STAGES,
      SKILLS,
      SKILL_GROUPS,
      FDEWorkspaceService,
      FDEDashboardView,
      FDEInboxView,
      FDELibrariesView,
      FDENetworkView,
      FDEContentView,
      FDESkillsView,
      FDEHealthView,
      parseConfigYaml,
      sourceFromContent,
      unknownFromContent
    };
  }
});

// github-updater.js
var require_github_updater = __commonJS({
  "github-updater.js"(exports2, module2) {
    var { createHash } = require("node:crypto");
    var UPDATE_FILES = Object.freeze([
      { target: "main.js", asset: "main.js", encoding: "utf8" },
      { target: "manifest.json", asset: "manifest.json", encoding: "utf8" },
      { target: "styles.css", asset: "styles.css", encoding: "utf8" },
      { target: "assets/fde365-logo.png", asset: "fde365-logo.png", encoding: "binary" },
      { target: "assets/fde365-logo-source.svg", asset: "fde365-logo-source.svg", encoding: "utf8" }
    ]);
    function normalizeVersion(value) {
      const match = String(value || "").trim().match(/^v?(\d+)\.(\d+)\.(\d+)$/);
      return match ? `${Number(match[1])}.${Number(match[2])}.${Number(match[3])}` : "";
    }
    function compareVersions(left, right) {
      const a = normalizeVersion(left);
      const b = normalizeVersion(right);
      if (!a || !b) throw new Error("版本号必须使用 x.y.z 格式");
      const av = a.split(".").map(Number);
      const bv = b.split(".").map(Number);
      for (let index = 0; index < 3; index += 1) {
        if (av[index] !== bv[index]) return av[index] > bv[index] ? 1 : -1;
      }
      return 0;
    }
    function sha256(data) {
      return createHash("sha256").update(Buffer.from(data)).digest("hex");
    }
    function validateUpdateManifest(value, expected = {}) {
      if (!value || typeof value !== "object" || Array.isArray(value)) throw new Error("更新清单格式无效");
      if (value.schemaVersion !== 1) throw new Error("更新清单版本不受支持");
      if (value.pluginId !== expected.pluginId) throw new Error("更新清单的插件 ID 不匹配");
      if (value.repository !== expected.repository) throw new Error("更新清单的 GitHub 仓库不匹配");
      const version = normalizeVersion(value.version);
      if (!version || version !== normalizeVersion(expected.version)) throw new Error("更新清单的版本不匹配");
      if (!normalizeVersion(value.minAppVersion)) throw new Error("更新清单的 Obsidian 最低版本无效");
      if (!Array.isArray(value.files) || value.files.length !== UPDATE_FILES.length) throw new Error("更新清单文件数量不正确");
      const expectedByTarget = new Map(UPDATE_FILES.map((file) => [file.target, file]));
      const seen = /* @__PURE__ */ new Set();
      for (const file of value.files) {
        const expectedFile = expectedByTarget.get(file?.target);
        if (!expectedFile || seen.has(file.target)) throw new Error("更新清单包含未知或重复文件");
        if (file.asset !== expectedFile.asset || file.encoding !== expectedFile.encoding) {
          throw new Error(`更新文件定义不匹配：${file.target}`);
        }
        if (!/^[a-f0-9]{64}$/.test(String(file.sha256 || ""))) throw new Error(`更新文件校验值无效：${file.target}`);
        seen.add(file.target);
      }
      return { ...value, version };
    }
    function isTrustedUpdateAssetUrl(value, version, asset) {
      try {
        const url = new URL(value);
        return url.protocol === "https:" && url.hostname === "fdekb.garylau.ai" && url.username === "" && url.password === "" && url.search === "" && url.hash === "" && url.pathname === `/plugin/releases/${normalizeVersion(version)}/${asset}`;
      } catch (_) {
        return false;
      }
    }
    module2.exports = {
      UPDATE_FILES,
      compareVersions,
      isTrustedUpdateAssetUrl,
      normalizeVersion,
      sha256,
      validateUpdateManifest
    };
  }
});

// source.js
var {
  ItemView,
  Modal,
  Notice,
  Plugin,
  PluginSettingTab,
  Setting,
  TFile,
  htmlToMarkdown,
  normalizePath,
  requestUrl,
  requireApiVersion,
  setIcon
} = require("obsidian");
var Defuddle = require_defuddle();
var KNOWLEDGE_BLUEPRINT = require_blueprint();
var FDEWorkspace = require_fde_workspace();
var GitHubUpdater = require_github_updater();
var VIEW_TYPE = "ai-knowledge-os-dashboard";
var INBOX_VIEW_TYPE = "ai-knowledge-os-inbox";
var KNOWLEDGE_VIEW_TYPE = "ai-knowledge-os-knowledge";
var GRAPH_VIEW_TYPE = "ai-knowledge-os-graph";
var PROJECT_VIEW_TYPE = "ai-knowledge-os-projects";
var AGENT_VIEW_TYPE = "ai-knowledge-os-agents";
var ANALYTICS_VIEW_TYPE = "ai-knowledge-os-analytics";
var DEFAULT_ROOT = "FDE365知识库";
var LEGACY_ROOT = String.fromCodePoint(26143, 38469, 30041, 30333, 30693, 35782, 24211);
var ROOT = DEFAULT_ROOT;
var INBOX_ROOT;
var INBOX_ARCHIVE_ROOT;
var KNOWLEDGE_ROOT;
var PROJECT_ROOT;
var AGENT_ROOT;
var ANALYTICS_ROOT;
var TEMPLATE_ROOT;
var AI_OUTPUT_ROOT;
function configureKnowledgeRoot(root = DEFAULT_ROOT) {
  ROOT = String(root || DEFAULT_ROOT);
  INBOX_ROOT = `${ROOT}/0-录音处理/待处理录音`;
  INBOX_ARCHIVE_ROOT = `${ROOT}/0-录音处理/已处理`;
  KNOWLEDGE_ROOT = `${ROOT}/4-素材案例库`;
  PROJECT_ROOT = `${ROOT}/6-内容生产`;
  AGENT_ROOT = `${ROOT}/7-系统/AI协作`;
  ANALYTICS_ROOT = `${ROOT}/7-系统/分析报告`;
  TEMPLATE_ROOT = `${ROOT}/7-系统/模板`;
  AI_OUTPUT_ROOT = `${AGENT_ROOT}/输出`;
  return ROOT;
}
configureKnowledgeRoot();
async function resolveKnowledgeRoot(app) {
  const exists = async (path) => Boolean(
    app.vault.getAbstractFileByPath(path) || await app.vault.adapter.exists?.(path).catch?.(() => false)
  );
  if (await exists(DEFAULT_ROOT)) return DEFAULT_ROOT;
  if (await exists(LEGACY_ROOT)) return LEGACY_ROOT;
  return DEFAULT_ROOT;
}
var FDE365_BASE_URL = "https://api.fde365.ai/v1";
var FDE365_CHAT_ENDPOINT = `${FDE365_BASE_URL}/chat/completions`;
var FDE365_PURCHASE_URL = "https://api.fde365.ai/";
var FDE365_MODELS = Object.freeze([
  "claude-fable-5",
  "claude-opus-4-8",
  "gpt-5.6-sol",
  "gpt-5.6-luna"
]);
var DEFAULT_FDE365_MODEL = "gpt-5.6-luna";
var ONBOARDING_VERSION = 3;
var FDE365_RELEASE_REPOSITORY = "GaryLauLGY/fde365-knowledge-os";
var FDE365_UPDATE_ORIGIN = "https://fdekb.garylau.ai";
var FDE365_RELEASE_API = `${FDE365_UPDATE_ORIGIN}/plugin/latest.json`;
var UPDATE_CHECK_INTERVAL_MS = 6 * 60 * 60 * 1e3;
var ONBOARDING_STEPS = Object.freeze([
  {
    icon: "sparkles",
    eyebrow: "欢迎来到FDE365",
    title: "把零散信息，慢慢变成你的知识资产",
    description: "Knowledge OS 会在当前 Vault 中建立一套本地知识工作台。你可以先收集，再分类、连接和生产内容。",
    highlights: [
      { icon: "inbox", title: "统一收集", text: "灵感、网页、文件和语音先进待处理。" },
      { icon: "library", title: "六类资产", text: "按老板、产品、客户、案例、方法论与内容管理。" },
      { icon: "shield-check", title: "本地优先", text: "初始化只补缺失文件，不覆盖你已有的内容。" }
    ]
  },
  {
    icon: "inbox",
    eyebrow: "第一步 · 收集",
    title: "先放进“待处理”，不用立刻想分类",
    description: "当信息还不完整时，先保留原始材料和来源。等你有时间，再让 FDE Skills 帮你整理。",
    highlights: [
      { icon: "square-pen", title: "快速记录", text: "用命令面板新建待处理笔记。" },
      { icon: "globe", title: "收藏网页", text: "保留链接、正文和来源，方便以后追溯。" },
      { icon: "mic", title: "语音与文件", text: "把访谈、会议和原始素材放在同一入口。" }
    ]
  },
  {
    icon: "boxes",
    eyebrow: "第二步 · 沉淀",
    title: "六类资产，是整个系统的骨架",
    description: "整理时保留“事实、推断、未知”的边界，再用真实链接建立资产网络。",
    highlights: [
      { icon: "user-round", title: "经营与产品", text: "老板说明书与产品库保留你的核心判断。" },
      { icon: "target", title: "客户与案例", text: "把真实需求、反馈和有证据的案例连起来。" },
      { icon: "workflow", title: "方法与内容", text: "用经过验证的方法，推动六阶段内容流程。" }
    ]
  },
  {
    icon: "bot",
    eyebrow: "第三步 · 协作",
    title: "让 AI 在你选定的范围内工作",
    description: "只有你主动发送时，选定的问题和上下文才会交给FDE365 AI 服务。Token 只保存在当前 Vault。",
    highlights: [
      { icon: "message-square", title: "FDE365 AI", text: "基于当前笔记或显式选中的文件对话。" },
      { icon: "wand-sparkles", title: "35 个 FDE Skills", text: "从收集、整理、写作到体检，按合同执行。" },
      { icon: "shield-check", title: "Token 本地保存", text: "Token 不会写入知识笔记，也不会包含在插件发布包中。" }
    ]
  },
  {
    icon: "key-round",
    eyebrow: "第四步 · 配置模型",
    title: "两步连接FDE365 AI",
    description: "先购买 Token，再回到插件设置填写 Token 并选择模型。服务地址已经内置，无需手动配置。",
    highlights: [
      { icon: "shopping-bag", title: "1. 购买 Token", text: "前往 api.fde365.ai 购买或创建你的 Token。", action: "purchase-token" },
      { icon: "settings", title: "2. 填写 Token", text: "打开 Obsidian 设置 → FDE365 Knowledge OS → AI 服务，在 Token 一栏填写。", action: "open-token-settings" },
      { icon: "cpu", title: "3. 选择模型", text: "从四个可用模型中选择一个，然后点击“测试连接”。" }
    ]
  }
]);
var FEATURE_STATUS = Object.freeze({
  IMPLEMENTED: "implemented",
  PLANNED: "planned",
  UNAVAILABLE: "unavailable"
});
var FEATURES = Object.freeze({
  notificationCenter: { status: FEATURE_STATUS.PLANNED, label: "通知中心" },
  emojiPicker: { status: FEATURE_STATUS.PLANNED, label: "表情选择" },
  assistantAttachment: { status: FEATURE_STATUS.PLANNED, label: "添加附件" },
  assistantMention: { status: FEATURE_STATUS.PLANNED, label: "添加上下文" },
  viewAllAgents: { status: FEATURE_STATUS.PLANNED, label: "查看全部 Agents" },
  viewAllExecutions: { status: FEATURE_STATUS.PLANNED, label: "查看全部执行记录" },
  viewAllProjects: { status: FEATURE_STATUS.PLANNED, label: "查看全部项目精选" }
});
var AGENT_RUN_STATUSES = Object.freeze({
  DRAFT: "draft",
  QUEUED: "queued",
  RUNNING: "running",
  WAITING_REVIEW: "waiting-review",
  SUCCESS: "success",
  FAILED: "failed",
  CANCELLED: "cancelled",
  BLOCKED: "blocked"
});
var AGENT_STATUS_TRANSITIONS = Object.freeze({
  draft: /* @__PURE__ */ new Set(["queued", "cancelled"]),
  queued: /* @__PURE__ */ new Set(["running", "blocked", "cancelled"]),
  running: /* @__PURE__ */ new Set(["waiting-review", "failed", "blocked", "cancelled"]),
  "waiting-review": /* @__PURE__ */ new Set(["success", "failed", "cancelled"]),
  success: /* @__PURE__ */ new Set(),
  failed: /* @__PURE__ */ new Set(["queued"]),
  blocked: /* @__PURE__ */ new Set(["queued", "cancelled"]),
  cancelled: /* @__PURE__ */ new Set(["queued"])
});
var DEFAULT_SETTINGS = {
  schemaVersion: 4,
  userName: "Gary",
  openOnStartup: true,
  immersiveMode: true,
  colorTheme: "light",
  onboardingVersion: 0,
  updates: {
    autoInstall: true,
    lastCheckedAt: "",
    lastError: "",
    pendingVersion: ""
  },
  blueprint: {
    version: 0,
    lastCheckedAt: "",
    lastCreated: 0,
    conflicts: []
  },
  ai: {
    provider: "fde365",
    assistant: {
      contextScope: "active-note",
      autoSaveOutput: false,
      maxContextChars: 2e4
    },
    fde365: {
      token: "",
      model: DEFAULT_FDE365_MODEL,
      temperature: 0.3,
      timeoutMs: 12e4
    }
  },
  graphSnapshot: null,
  graphDefaultDepth: 2
};
function mergeSettings(raw = {}) {
  const legacyApi = raw.ai?.openaiCompatible || {};
  const currentApi = raw.ai?.fde365 || {};
  const token = String(currentApi.token || legacyApi.token || legacyApi.apiKey || "").trim();
  const requestedModel = String(currentApi.model || legacyApi.model || "").trim();
  const model = FDE365_MODELS.includes(requestedModel) ? requestedModel : DEFAULT_FDE365_MODEL;
  return {
    ...DEFAULT_SETTINGS,
    ...raw,
    schemaVersion: 4,
    blueprint: {
      ...DEFAULT_SETTINGS.blueprint,
      ...raw.blueprint || {},
      conflicts: Array.isArray(raw.blueprint?.conflicts) ? raw.blueprint.conflicts : []
    },
    updates: {
      ...DEFAULT_SETTINGS.updates,
      ...raw.updates || {},
      autoInstall: raw.updates?.autoInstall !== false
    },
    ai: {
      provider: "fde365",
      assistant: {
        ...DEFAULT_SETTINGS.ai.assistant,
        ...raw.ai?.assistant || {}
      },
      fde365: {
        token,
        model,
        temperature: Number.isFinite(Number(currentApi.temperature ?? legacyApi.temperature)) ? Number(currentApi.temperature ?? legacyApi.temperature) : DEFAULT_SETTINGS.ai.fde365.temperature,
        timeoutMs: Math.max(1e4, Number(currentApi.timeoutMs ?? legacyApi.timeoutMs) || DEFAULT_SETTINGS.ai.fde365.timeoutMs)
      }
    }
  };
}
var AGENT_DEFINITIONS = [
  { id: "content", name: "内容运营 Agent", icon: "newspaper", color: "purple", description: "从知识库生成文章、提案与内容草稿，并保留来源。", trigger: "按需运行", output: "文章 / 脚本", pattern: /(内容|文章|公众号|短视频|素材)/i },
  { id: "business", name: "商业分析 Agent", icon: "panel-top", color: "blue", description: "分析客户资料、业务场景、采购阻力与企业落地路径。", trigger: "手动触发", output: "分析报告", pattern: /(客户|商业|企业|需求|案例)/i },
  { id: "learning", name: "学习研究 Agent", icon: "graduation-cap", color: "teal", description: "总结论文与课程，提炼概念、证据、反例和适用边界。", trigger: "手动触发", output: "学习卡片", pattern: /(学习|论文|课程|研究|资料)/i },
  { id: "customer", name: "客户调研 Agent", icon: "target", color: "orange", description: "整理访谈与反馈，生成客户画像、洞察和追踪问题。", trigger: "按需运行", output: "调研洞察", pattern: /(客户|访谈|调研|反馈|画像)/i },
  { id: "project", name: "项目助理 Agent", icon: "briefcase-business", color: "blue", description: "跟踪里程碑和任务，生成项目周报并识别交付风险。", trigger: "项目更新后", output: "周报 / 风险", pattern: /(项目|交付|任务|里程碑|进度)/i },
  { id: "organizer", name: "知识库整理 Agent", icon: "bot", color: "purple", description: "清理、归类、去重并为知识建立标签和双向链接。", trigger: "按需运行", output: "知识卡片", pattern: /(知识库|笔记|标签|链接|整理)/i }
];
function debounce(fn, wait2 = 300) {
  let timer;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), wait2);
  };
}
function formatRelativeTime(timestamp) {
  const delta = Date.now() - timestamp;
  const minute = 60 * 1e3;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (delta < minute) return "刚刚";
  if (delta < hour) return `${Math.floor(delta / minute)} 分钟前`;
  if (delta < day) return `${Math.floor(delta / hour)} 小时前`;
  if (delta < day * 2) return "昨天";
  const date = new Date(timestamp);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}
function cleanMarkdown(text) {
  return (text || "").replace(/^---[\s\S]*?---\s*/m, "").replace(/```[\s\S]*?```/g, "").replace(/!\[\[[^\]]+\]\]/g, "").replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, "$2$1").replace(/[#>*_=`~-]/g, " ").replace(/\s+/g, " ").trim();
}
function safeName(input) {
  return (input || "未命名").replace(/[\\/:*?"<>|#^\[\]]/g, "-").replace(/\s+/g, " ").trim().slice(0, 60);
}
function yamlQuote(value) {
  return JSON.stringify(String(value ?? ""));
}
function getMessageText(message) {
  const content = message?.content ?? message?.text ?? message?.message ?? "";
  if (typeof content === "string" && content.trim()) return content.trim();
  if (Array.isArray(content)) {
    const text = content.map((block) => {
      if (typeof block === "string") return block;
      return block?.text ?? block?.content ?? block?.value ?? "";
    }).filter(Boolean).join("\n\n").trim();
    if (text) return text;
  }
  if (content && typeof content === "object") {
    const text = String(content.text || content.value || "").trim();
    if (text) return text;
  }
  if (Array.isArray(message?.contentBlocks)) {
    return message.contentBlocks.map((block) => block?.content ?? block?.text ?? block?.value ?? "").filter(Boolean).join("\n\n").trim();
  }
  return "";
}
function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}
var KnowledgeOSRouter = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  async navigate(route, params = {}) {
    switch (route) {
      case "dashboard":
        return this.plugin.activateView(params);
      case "inbox":
        return this.plugin.activateInbox(params);
      case "libraries":
      case "knowledge":
        return this.plugin.activateKnowledge(params);
      case "network":
      case "graph":
        return this.plugin.activateGraph(params);
      case "content":
      case "projects":
        return this.plugin.activateProjects(params);
      case "skills":
      case "agents":
        return this.plugin.activateAgents(params);
      case "health":
      case "analytics":
        return this.plugin.activateAnalytics(params);
      case "settings":
        return this.plugin.openSettings(params.section);
      default:
        throw new Error(`Unknown Knowledge OS route: ${route}`);
    }
  }
};
var KnowledgeOSOnboardingModal = class extends Modal {
  constructor(app, plugin) {
    super(app);
    this.plugin = plugin;
    this.stepIndex = 0;
    this.finished = false;
  }
  onOpen() {
    this.modalEl.addClass("fde365-onboarding-modal");
    this.render();
  }
  render() {
    const { contentEl } = this;
    const step = ONBOARDING_STEPS[this.stepIndex];
    contentEl.empty();
    contentEl.setAttr("aria-live", "polite");
    const shell = contentEl.createDiv({ cls: "fde365-onboarding-shell" });
    const brand = shell.createDiv({ cls: "fde365-onboarding-brand" });
    const logo = brand.createEl("img", { attr: { src: this.plugin.logoResource(), alt: "" } });
    logo.setAttr("aria-hidden", "true");
    const progress = shell.createDiv({ cls: "fde365-onboarding-progress" });
    progress.createSpan({ text: `${this.stepIndex + 1} / ${ONBOARDING_STEPS.length}` });
    const dots = progress.createDiv({ cls: "fde365-onboarding-dots", attr: { "aria-label": "新人指引进度" } });
    ONBOARDING_STEPS.forEach((_, index) => {
      const dot = dots.createEl("button", {
        cls: index === this.stepIndex ? "is-active" : index < this.stepIndex ? "is-complete" : "",
        attr: { "aria-label": `前往第 ${index + 1} 步`, type: "button" }
      });
      dot.addEventListener("click", () => {
        this.stepIndex = index;
        this.render();
      });
    });
    const hero = shell.createDiv({ cls: "fde365-onboarding-hero" });
    const icon = hero.createDiv({ cls: "fde365-onboarding-hero-icon" });
    setIcon(icon, step.icon);
    const copy = hero.createDiv({ cls: "fde365-onboarding-copy" });
    copy.createDiv({ text: step.eyebrow, cls: "fde365-onboarding-eyebrow" });
    copy.createEl("h2", { text: step.title });
    copy.createEl("p", { text: step.description });
    const cards = shell.createDiv({ cls: "fde365-onboarding-highlights" });
    for (const item of step.highlights) {
      const card = cards.createDiv({ cls: "fde365-onboarding-highlight" });
      const cardIcon = card.createDiv({ cls: "fde365-onboarding-highlight-icon" });
      setIcon(cardIcon, item.icon);
      const cardCopy = card.createDiv();
      cardCopy.createEl("strong", { text: item.title });
      cardCopy.createEl("p", { text: item.text });
      if (item.action === "purchase-token") {
        const link = cardCopy.createEl("a", {
          text: "前往购买 Token",
          cls: "fde365-onboarding-card-action",
          href: FDE365_PURCHASE_URL,
          attr: { target: "_blank", rel: "noopener noreferrer" }
        });
        link.addEventListener("click", (event) => event.stopPropagation());
      } else if (item.action === "open-token-settings") {
        const button = cardCopy.createEl("button", {
          text: "打开 Token 设置",
          cls: "fde365-onboarding-card-action",
          attr: { type: "button" }
        });
        button.addEventListener("click", () => {
          this.finished = true;
          void this.plugin.markOnboardingSeen();
          this.close();
          this.plugin.openSettings("ai");
        });
      }
    }
    const footer = shell.createDiv({ cls: "fde365-onboarding-footer" });
    const quietActions = footer.createDiv({ cls: "fde365-onboarding-quiet-actions" });
    if (this.stepIndex > 0) {
      const previous = quietActions.createEl("button", { text: "上一步", attr: { type: "button" } });
      previous.addEventListener("click", () => {
        this.stepIndex -= 1;
        this.render();
      });
    } else {
      const skip = quietActions.createEl("button", { text: "跳过指引", cls: "fde365-onboarding-skip", attr: { type: "button" } });
      skip.addEventListener("click", () => void this.finish());
    }
    const isLastStep = this.stepIndex === ONBOARDING_STEPS.length - 1;
    const next = footer.createEl("button", {
      text: isLastStep ? "开始使用" : "下一步",
      cls: "mod-cta fde365-onboarding-next",
      attr: { type: "button" }
    });
    next.addEventListener("click", () => {
      if (isLastStep) void this.finish({ activateDashboard: true });
      else {
        this.stepIndex += 1;
        this.render();
      }
    });
    window.setTimeout(() => next.focus(), 0);
  }
  async finish({ activateDashboard = false } = {}) {
    if (this.finished) return;
    this.finished = true;
    await this.plugin.markOnboardingSeen();
    this.close();
    if (activateDashboard && !this.plugin.isUnloading) await this.plugin.activateView();
  }
  onClose() {
    this.contentEl.empty();
    this.plugin.onboardingModal = null;
    if (!this.finished && !this.plugin.isUnloading) void this.plugin.markOnboardingSeen();
  }
};
var AgentTaskStore = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
  }
  async ensureStructure() {
    await ensureVaultFolder(this.app, AGENT_ROOT);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/定义`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/运行记录`);
    await ensureVaultFolder(this.app, `${AGENT_ROOT}/输出`);
  }
  async ensureDefinitions() {
    await this.ensureStructure();
    for (const agent of AGENT_DEFINITIONS) {
      const path = `${AGENT_ROOT}/定义/${safeName(agent.name)}.md`;
      if (this.app.vault.getAbstractFileByPath(path) || await this.app.vault.adapter.exists(path)) continue;
      const content = `---
type: agent-definition
agent_id: ${agent.id}
name: ${yamlQuote(agent.name)}
enabled: true
provider: selected
output_type: ${yamlQuote(agent.output)}
source_scope:
  - ${yamlQuote(ROOT)}
---

# ${agent.name}

${agent.description}
`;
      try {
        await this.app.vault.create(path, content);
      } catch (error) {
        const exists = this.app.vault.getAbstractFileByPath(path) || await this.app.vault.adapter.exists(path);
        if (exists && /already exists/i.test(error instanceof Error ? error.message : String(error))) continue;
        throw error;
      }
    }
  }
  definitionPath(agent) {
    return `${AGENT_ROOT}/定义/${safeName(agent.name)}.md`;
  }
  async createRun(agent, prompt, sources = [], execution = {}) {
    await this.ensureStructure();
    const now = /* @__PURE__ */ new Date();
    const taskId = `akos-${now.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)}-${Math.random().toString(36).slice(2, 7)}`;
    const path = `${AGENT_ROOT}/运行记录/${taskId}-${safeName(agent.name)}.md`;
    const sourcePaths = sources.map((file2) => file2.path || String(file2)).filter(Boolean);
    const provider = String(execution.provider || "unknown");
    const content = `---
type: agent-run
task_id: ${taskId}
agent_id: ${agent.id}
provider: ${yamlQuote(provider)}
provider_version: ${yamlQuote(execution.providerVersion || "")}
model: ${yamlQuote(execution.model || "")}
status: queued
created_at: ${now.toISOString()}
started_at:
finished_at:
conversation_id:
source_files: ${JSON.stringify(sourcePaths)}
output_file:
error:
reviewed: false
task: ${yamlQuote(prompt)}
tags:
  - agent/run
  - agent/${agent.id}
---

# ${agent.name} · 运行任务

> [!info] Agent 职责
> ${agent.description}

## 输入来源

${sourcePaths.length ? sourcePaths.map((pathValue) => `- [[${pathValue.replace(/\.md$/, "")}]]`).join("\n") : "- 暂无匹配来源"}

## 任务

${prompt}

## 执行状态

等待 ${execution.label || provider} 执行。
`;
    const file = await this.app.vault.create(path, content);
    return { taskId, file, agent, prompt, sources: sourcePaths, status: AGENT_RUN_STATUSES.QUEUED };
  }
  async transition(taskOrFile, nextStatus, patch = {}) {
    const file = taskOrFile.file || taskOrFile;
    const cache = this.app.metadataCache.getFileCache(file);
    const current = String(taskOrFile.file ? taskOrFile.status : cache?.frontmatter?.status || AGENT_RUN_STATUSES.DRAFT);
    if (!AGENT_STATUS_TRANSITIONS[current]?.has(nextStatus)) {
      throw new Error(`Invalid agent task transition: ${current} -> ${nextStatus}`);
    }
    await this.app.fileManager.processFrontMatter(file, (frontmatter) => {
      frontmatter.status = nextStatus;
      Object.entries(patch).forEach(([key, value]) => {
        if (value === void 0) delete frontmatter[key];
        else frontmatter[key] = value;
      });
    });
    if (taskOrFile.file) taskOrFile.status = nextStatus;
    await this.updateRunBody(file, nextStatus, patch);
    await this.waitForFrontmatter(file, "status", nextStatus);
    return taskOrFile;
  }
  async waitForFrontmatter(file, key, expected, timeout = 2500) {
    const started = Date.now();
    while (Date.now() - started < timeout) {
      if (this.app.metadataCache.getFileCache(file)?.frontmatter?.[key] === expected) return true;
      await wait(25);
    }
    return false;
  }
  async updateRunBody(file, status, patch = {}) {
    const labels = {
      draft: "任务仍为草稿。",
      queued: "任务已进入执行队列。",
      running: "AI Provider 正在执行任务。",
      "waiting-review": patch.output_file ? `AI Provider 已生成输出，等待人工验收：[[${String(patch.output_file).replace(/\.md$/, "")}]]` : "AI Provider 已生成输出，等待人工验收。",
      success: "输出已经人工验收，任务执行成功。",
      failed: `任务执行失败：${patch.error || "未知错误"}`,
      blocked: `任务被阻塞：${patch.error || "依赖不可用"}`,
      cancelled: "任务已取消。"
    };
    const content = await this.app.vault.read(file);
    const marker = "## 执行状态\n\n";
    if (!content.includes(marker)) return;
    const start = content.indexOf(marker) + marker.length;
    const nextHeading = content.indexOf("\n## ", start);
    const end = nextHeading >= 0 ? nextHeading : content.length;
    const replacement = `${labels[status] || status}
`;
    const updated = `${content.slice(0, start)}${replacement}${content.slice(end)}`;
    if (updated !== content) await this.app.vault.modify(file, updated);
  }
  async saveOutput(task, result) {
    const path = `${AGENT_ROOT}/输出/${task.taskId}-${safeName(task.agent.name)}.md`;
    const content = `---
type: agent-output
task_id: ${task.taskId}
agent_id: ${task.agent.id}
provider: ${yamlQuote(result.provider || "unknown")}
provider_version: ${yamlQuote(result.providerVersion || "unknown")}
model: ${yamlQuote(result.model || "")}
conversation_id: ${yamlQuote(result.conversationId || "")}
created_at: ${(/* @__PURE__ */ new Date()).toISOString()}
reviewed: false
tags:
  - agent/output
  - agent/${task.agent.id}
---

# ${task.agent.name} · 输出

## 任务

${task.prompt}

## 来源

${task.sources.length ? task.sources.map((source) => `- [[${source.replace(/\.md$/, "")}]]`).join("\n") : "- 无显式来源"}

## AI 输出

${result.content}

## 人工验收

- [ ] 核对事实与引用
- [ ] 确认结论可以使用
- [ ] 返回 FDE365 右侧栏“历史”核对运行记录
`;
    return this.app.vault.create(path, content);
  }
  async approve(runFile) {
    const cache = this.app.metadataCache.getFileCache(runFile);
    const frontmatter = cache?.frontmatter || {};
    if (String(frontmatter.status) !== AGENT_RUN_STATUSES.WAITING_REVIEW) throw new Error("当前任务不在待验收状态");
    const outputPath = String(frontmatter.output_file || "");
    const outputFile = this.app.vault.getAbstractFileByPath(outputPath);
    if (!(outputFile instanceof TFile)) throw new Error("任务输出文件不存在");
    const output = await this.app.vault.cachedRead(outputFile);
    if (!cleanMarkdown(output)) throw new Error("任务输出为空");
    await this.app.fileManager.processFrontMatter(outputFile, (outputFrontmatter) => {
      outputFrontmatter.reviewed = true;
    });
    await this.transition(runFile, AGENT_RUN_STATUSES.SUCCESS, { reviewed: true, reviewed_at: (/* @__PURE__ */ new Date()).toISOString() });
  }
};
var AIProviderError = class extends Error {
  constructor(code, message, details = {}) {
    super(message);
    this.name = "AIProviderError";
    this.code = code;
    this.details = details;
  }
};
function buildOpenAIMessages(request) {
  const messages = (Array.isArray(request?.messages) ? request.messages : []).filter((message) => message?.content).map((message) => ({ role: message.role || "user", content: String(message.content) }));
  const context = Array.isArray(request?.context) ? request.context : [];
  if (context.length) {
    messages.splice(Math.max(0, messages.length - 1), 0, {
      role: "system",
      content: `以下是用户明确允许发送的本地知识上下文。回答时区分上下文事实、推断与建议，并在使用时标明来源路径。

${context.map((item) => `### ${item.title || item.path || "未命名来源"}
来源：${item.path || "未标注"}
${item.excerpt || ""}`).join("\n\n")}`
    });
  }
  return messages;
}
function mapHttpProviderError(status, payload) {
  const remoteMessage = String(payload?.error?.message || payload?.message || "").trim();
  if (status === 401 || status === 403) return new AIProviderError("AUTH_FAILED", "Token 无效或无权访问该服务");
  if (status === 404) return new AIProviderError("MODEL_NOT_FOUND", remoteMessage || "所选模型不存在");
  if (status === 429) return new AIProviderError("RATE_LIMITED", "API 请求受到限流，请稍后重试");
  return new AIProviderError("NETWORK_ERROR", remoteMessage || `API 返回 HTTP ${status}`);
}
var Fde365Provider = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.id = "fde365";
    this.label = "FDE365 API";
    this.cancelledRequests = /* @__PURE__ */ new Set();
    this.cancelHandlers = /* @__PURE__ */ new Map();
  }
  get settings() {
    return this.plugin.settings.ai.fde365;
  }
  detect() {
    const token = String(this.settings.token || "").trim();
    const model = String(this.settings.model || "").trim();
    const configured = Boolean(token && FDE365_MODELS.includes(model));
    return {
      available: true,
      configured,
      compatible: configured,
      version: "chat-completions",
      model,
      endpoint: FDE365_CHAT_ENDPOINT,
      error: configured ? null : "请填写 Token 并选择可用模型"
    };
  }
  cancel(requestId) {
    this.cancelledRequests.add(requestId);
    this.cancelHandlers.get(requestId)?.();
  }
  async testConnection() {
    return this.complete({
      requestId: `test-${Date.now()}`,
      mode: "chat",
      messages: [{ role: "user", content: "只回复 OK" }],
      context: []
    });
  }
  async complete(request) {
    const capability = this.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error);
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const timeoutMs = Math.max(1e4, Number(this.settings.timeoutMs) || 12e4);
    let timer = null;
    const timeout = new Promise((_, reject) => {
      timer = window.setTimeout(() => reject(new AIProviderError("TIMEOUT", `API 请求超过 ${Math.round(timeoutMs / 1e3)} 秒`)), timeoutMs);
    });
    const cancelled = new Promise((_, reject) => {
      this.cancelHandlers.set(request.requestId, () => reject(new AIProviderError("CANCELLED", "任务已取消")));
    });
    let response;
    try {
      response = await Promise.race([
        requestUrl({
          url: FDE365_CHAT_ENDPOINT,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${String(this.settings.token).trim()}`
          },
          body: JSON.stringify({
            model: capability.model,
            messages: buildOpenAIMessages(request),
            temperature: Math.min(2, Math.max(0, Number(this.settings.temperature) || 0)),
            stream: false
          }),
          throw: false
        }),
        timeout,
        cancelled
      ]);
    } catch (error) {
      if (error instanceof AIProviderError) throw error;
      throw new AIProviderError("NETWORK_ERROR", error instanceof Error ? error.message : String(error));
    } finally {
      if (timer !== null) window.clearTimeout(timer);
      this.cancelHandlers.delete(request.requestId);
      this.cancelledRequests.delete(request.requestId);
    }
    const payload = response?.json || {};
    if (!response || response.status < 200 || response.status >= 300) {
      throw mapHttpProviderError(response?.status || 0, payload);
    }
    if (this.cancelledRequests.has(request.requestId)) {
      this.cancelledRequests.delete(request.requestId);
      throw new AIProviderError("CANCELLED", "任务已取消");
    }
    const content = getMessageText(payload?.choices?.[0]?.message);
    if (!content) throw new AIProviderError("EMPTY_RESPONSE", "模型返回了空内容");
    return {
      content,
      provider: this.id,
      providerVersion: "fde365-chat-completions",
      model: capability.model,
      conversationId: String(payload.id || request.requestId || ""),
      usage: payload.usage || null
    };
  }
};
var AIProviderManager = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.providers = /* @__PURE__ */ new Map();
  }
  register(provider) {
    this.providers.set(provider.id, provider);
    return provider;
  }
  get(id) {
    return this.providers.get(id) || null;
  }
  getSelected() {
    return this.get("fde365");
  }
  describeSelected() {
    const provider = this.getSelected();
    const status = provider.detect();
    return {
      id: provider.id,
      label: provider.label,
      ...status
    };
  }
  async preflight() {
    const provider = this.getSelected();
    const capability = provider.detect();
    if (!capability.configured) throw new AIProviderError("PROVIDER_NOT_CONFIGURED", capability.error || "尚未配置 AI 服务");
    if (!capability.available) throw new AIProviderError("PROVIDER_UNAVAILABLE", capability.error || "AI 服务不可用");
    if (!capability.compatible) throw new AIProviderError("INCOMPATIBLE_VERSION", capability.error || "AI 服务不兼容");
    return { provider, capability };
  }
  async complete(request) {
    const { provider } = await this.preflight();
    return provider.complete(request);
  }
  cancel(requestId) {
    this.getSelected()?.cancel?.(requestId);
  }
  cancelAll() {
    for (const provider of this.providers.values()) provider.cancelAll?.();
  }
};
async function ensureVaultFolder(app, path) {
  const normalized = normalizePath(path);
  const parts = normalized.split("/");
  let current = "";
  for (const part of parts) {
    current = current ? `${current}/${part}` : part;
    const indexed = app.vault.getAbstractFileByPath(current);
    if (indexed) {
      if (indexed instanceof TFile) throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }
    const existing = await app.vault.adapter.stat(current).catch(() => null);
    if (existing) {
      if (existing.type !== "folder") throw new Error(`无法创建目录“${current}”：同名文件已存在`);
      continue;
    }
    try {
      await app.vault.createFolder(current);
    } catch (error) {
      const created = app.vault.getAbstractFileByPath(current);
      const stat = await app.vault.adapter.stat(current).catch(() => null);
      const isExistingFolder = Boolean(created && !(created instanceof TFile)) || stat?.type === "folder";
      if (isExistingFolder && /already exists/i.test(error instanceof Error ? error.message : String(error))) continue;
      throw error;
    }
  }
}
var VaultBootstrapService = class {
  constructor(plugin, blueprint = KNOWLEDGE_BLUEPRINT) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.blueprint = blueprint;
  }
  fullPath(relativePath = "") {
    return normalizePath([this.blueprint.root, relativePath].filter(Boolean).join("/"));
  }
  async inspectPath(path) {
    const indexed = this.app.vault.getAbstractFileByPath(path);
    if (indexed) return indexed instanceof TFile ? "file" : "folder";
    const stat = await this.app.vault.adapter.stat(path).catch(() => null);
    return stat?.type || null;
  }
  async ensure({ notify = false } = {}) {
    const created = [];
    const skipped = [];
    const conflicts = [];
    const folders = ["", ...this.blueprint.folders].map((path) => this.fullPath(path)).sort((a, b) => a.split("/").length - b.split("/").length || a.localeCompare(b, "zh-CN"));
    for (const path of folders) {
      const type = await this.inspectPath(path);
      if (type === "folder") {
        skipped.push(path);
        continue;
      }
      if (type === "file") {
        conflicts.push(`${path}（需要目录，但同名文件已存在）`);
        continue;
      }
      try {
        await ensureVaultFolder(this.app, path);
        created.push(path);
      } catch (error) {
        conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }
    for (const [relativePath, content] of Object.entries(this.blueprint.files)) {
      const path = this.fullPath(relativePath);
      const type = await this.inspectPath(path);
      if (type === "file") {
        skipped.push(path);
        continue;
      }
      if (type === "folder") {
        conflicts.push(`${path}（需要文件，但同名目录已存在）`);
        continue;
      }
      const parent = path.includes("/") ? path.slice(0, path.lastIndexOf("/")) : "";
      try {
        if (parent) await ensureVaultFolder(this.app, parent);
        await this.app.vault.create(path, String(content));
        created.push(path);
      } catch (error) {
        const currentType = await this.inspectPath(path);
        if (currentType === "file") skipped.push(path);
        else conflicts.push(`${path}（${error instanceof Error ? error.message : String(error)}）`);
      }
    }
    const result = {
      version: this.blueprint.version,
      created,
      skipped,
      conflicts,
      checkedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    this.plugin.settings.blueprint = {
      version: this.blueprint.version,
      lastCheckedAt: result.checkedAt,
      lastCreated: created.length,
      conflicts
    };
    await this.plugin.saveSettings();
    if (notify) {
      const summary = conflicts.length ? `补齐 ${created.length} 项，发现 ${conflicts.length} 个同名冲突；未覆盖原内容` : created.length ? `已补齐 ${created.length} 项，原有内容均未覆盖` : "知识库结构完整，没有修改现有内容";
      new Notice(`FDE365知识库：${summary}`, 8e3);
    }
    return result;
  }
};
var Fde365UpdateService = class {
  constructor(plugin) {
    this.plugin = plugin;
    this.app = plugin.app;
    this.inFlight = null;
  }
  get pluginDirectory() {
    return normalizePath(this.plugin.manifest.dir || `.obsidian/plugins/${this.plugin.manifest.id}`);
  }
  async request(url) {
    const response = await requestUrl({
      url,
      method: "GET",
      headers: {
        Accept: "application/json, application/octet-stream;q=0.9"
      },
      throw: false
    });
    if (response.status < 200 || response.status >= 300) throw new Error(`FDE365 更新服务返回 HTTP ${response.status}`);
    return response;
  }
  async ensureAdapterFolder(path) {
    const adapter = this.app.vault.adapter;
    const parts = normalizePath(path).split("/").filter(Boolean);
    let current = "";
    for (const part of parts) {
      current = current ? `${current}/${part}` : part;
      if (!await adapter.exists(current)) await adapter.mkdir(current);
    }
  }
  async check({ manual = false, forceInstall = false } = {}) {
    if (this.inFlight) return this.inFlight;
    this.inFlight = this.checkNow({ manual, forceInstall }).finally(() => {
      this.inFlight = null;
    });
    return this.inFlight;
  }
  async checkNow({ manual, forceInstall }) {
    const updates = this.plugin.settings.updates;
    try {
      const releaseResponse = await this.request(FDE365_RELEASE_API);
      const release = releaseResponse.json;
      const latestVersion = GitHubUpdater.normalizeVersion(release?.tag_name);
      if (!latestVersion) throw new Error("FDE365 更新版本不是 x.y.z 格式");
      updates.lastCheckedAt = (/* @__PURE__ */ new Date()).toISOString();
      updates.lastError = "";
      if (GitHubUpdater.compareVersions(latestVersion, this.plugin.manifest.version) <= 0) {
        updates.pendingVersion = "";
        await this.plugin.saveSettings();
        if (manual) new Notice(`当前已是最新版 v${this.plugin.manifest.version}`);
        return { status: "current", version: latestVersion };
      }
      if (updates.pendingVersion === latestVersion) {
        if (manual) new Notice(`v${latestVersion} 已安装，重启 Obsidian 后生效`, 8e3);
        return { status: "restart-required", version: latestVersion };
      }
      const assets = Array.isArray(release.assets) ? release.assets : [];
      const manifestAsset = assets.find((asset) => asset?.name === "update-manifest.json");
      if (!manifestAsset || !GitHubUpdater.isTrustedUpdateAssetUrl(manifestAsset.browser_download_url, latestVersion, "update-manifest.json")) {
        throw new Error("更新服务缺少可信的 update-manifest.json");
      }
      const updateManifestResponse = await this.request(manifestAsset.browser_download_url);
      const updateManifest = GitHubUpdater.validateUpdateManifest(updateManifestResponse.json, {
        pluginId: this.plugin.manifest.id,
        repository: FDE365_RELEASE_REPOSITORY,
        version: latestVersion
      });
      if (typeof requireApiVersion === "function" && !requireApiVersion(updateManifest.minAppVersion)) {
        throw new Error(`v${latestVersion} 需要 Obsidian ${updateManifest.minAppVersion} 或更高版本`);
      }
      if (!(forceInstall || updates.autoInstall)) {
        updates.pendingVersion = latestVersion;
        await this.plugin.saveSettings();
        if (manual) new Notice(`发现新版本 v${latestVersion}，可在设置中安装`);
        return { status: "available", version: latestVersion };
      }
      await this.install(release, updateManifest);
      updates.pendingVersion = latestVersion;
      updates.lastError = "";
      await this.plugin.saveSettings();
      new Notice(`FDE365 已更新到 v${latestVersion}，请重启 Obsidian 生效`, 0);
      return { status: "installed", version: latestVersion };
    } catch (error) {
      updates.lastCheckedAt = (/* @__PURE__ */ new Date()).toISOString();
      updates.lastError = error instanceof Error ? error.message : String(error);
      await this.plugin.saveSettings();
      if (manual) new Notice(`检查更新失败：${updates.lastError}`, 1e4);
      else console.warn("FDE365 Knowledge OS: automatic update check failed", error);
      return { status: "error", error: updates.lastError };
    }
  }
  async install(release, updateManifest) {
    const releaseAssets = new Map((release.assets || []).map((asset) => [asset.name, asset]));
    const downloads = /* @__PURE__ */ new Map();
    for (const file of updateManifest.files) {
      const asset = releaseAssets.get(file.asset);
      if (!asset || !GitHubUpdater.isTrustedUpdateAssetUrl(asset.browser_download_url, updateManifest.version, file.asset)) {
        throw new Error(`更新服务缺少可信文件：${file.asset}`);
      }
      if (Number(asset.size || 0) > 10 * 1024 * 1024) throw new Error(`更新文件过大：${file.asset}`);
      const response = await this.request(asset.browser_download_url);
      const bytes = Buffer.from(response.arrayBuffer);
      if (GitHubUpdater.sha256(bytes) !== file.sha256) throw new Error(`更新文件校验失败：${file.asset}`);
      downloads.set(file.target, { ...file, bytes });
    }
    const remoteManifest = JSON.parse(downloads.get("manifest.json").bytes.toString("utf8"));
    if (remoteManifest.id !== this.plugin.manifest.id || GitHubUpdater.normalizeVersion(remoteManifest.version) !== updateManifest.version || remoteManifest.minAppVersion !== updateManifest.minAppVersion) {
      throw new Error("远程 manifest.json 与更新清单不一致");
    }
    const adapter = this.app.vault.adapter;
    const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const backupRoot = normalizePath(`${this.pluginDirectory}/.fde365-update-backups/${this.plugin.manifest.version}-to-${updateManifest.version}-${timestamp}`);
    const previous = /* @__PURE__ */ new Map();
    const written = [];
    for (const file of updateManifest.files) {
      const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
      const exists = await adapter.exists(target);
      let bytes = null;
      if (exists) {
        bytes = file.encoding === "binary" ? Buffer.from(await adapter.readBinary(target)) : Buffer.from(await adapter.read(target), "utf8");
        const backup = normalizePath(`${backupRoot}/${file.target}`);
        await this.ensureAdapterFolder(backup.slice(0, backup.lastIndexOf("/")));
        if (file.encoding === "binary") {
          await adapter.writeBinary(backup, bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
        } else await adapter.write(backup, bytes.toString("utf8"));
      }
      previous.set(file.target, { exists, bytes });
    }
    try {
      for (const file of updateManifest.files) {
        const target = normalizePath(`${this.pluginDirectory}/${file.target}`);
        await this.ensureAdapterFolder(target.slice(0, target.lastIndexOf("/")));
        const download = downloads.get(file.target);
        if (file.encoding === "binary") {
          await adapter.writeBinary(target, download.bytes.buffer.slice(download.bytes.byteOffset, download.bytes.byteOffset + download.bytes.byteLength));
        } else await adapter.write(target, download.bytes.toString("utf8"));
        written.push(file.target);
      }
    } catch (error) {
      for (const targetName of written.reverse()) {
        const target = normalizePath(`${this.pluginDirectory}/${targetName}`);
        const old = previous.get(targetName);
        try {
          if (!old.exists) await adapter.remove(target);
          else if (downloads.get(targetName).encoding === "binary") {
            await adapter.writeBinary(target, old.bytes.buffer.slice(old.bytes.byteOffset, old.bytes.byteOffset + old.bytes.byteLength));
          } else await adapter.write(target, old.bytes.toString("utf8"));
        } catch (rollbackError) {
          console.error(`FDE365 Knowledge OS: failed to roll back ${targetName}`, rollbackError);
        }
      }
      throw error;
    }
  }
};
var AIKnowledgeOSSettingTab = class extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("fde365-settings");
    containerEl.createEl("h2", { text: "FDE365 Knowledge OS 设置" });
    new Setting(containerEl).setName("显示名称").setDesc("用于驾驶舱问候语和 AI Copilot。").addText((text) => text.setPlaceholder("Gary").setValue(this.plugin.settings.userName).onChange(async (value) => {
      this.plugin.settings.userName = value.trim() || "Gary";
      await this.plugin.saveSettings();
      this.plugin.refreshDashboard();
    }));
    new Setting(containerEl).setName("界面主题").setDesc("切换FDE365工作台的浅色或深色外观，不会修改 Obsidian 的全局主题。").addDropdown((dropdown) => dropdown.addOption("light", "浅色").addOption("dark", "深色").setValue(this.plugin.settings.colorTheme === "light" ? "light" : "dark").onChange(async (value) => {
      this.plugin.settings.colorTheme = value === "light" ? "light" : "dark";
      await this.plugin.saveSettings();
      this.plugin.refreshDashboard();
    }));
    new Setting(containerEl).setName("启动时打开驾驶舱").setDesc("Obsidian 启动后自动进入FDE365知识驾驶舱。").addToggle((toggle) => toggle.setValue(this.plugin.settings.openOnStartup).onChange(async (value) => {
      this.plugin.settings.openOnStartup = value;
      await this.plugin.saveSettings();
    }));
    new Setting(containerEl).setName("沉浸模式").setDesc("打开驾驶舱时折叠 Obsidian 原生左右侧栏。").addToggle((toggle) => toggle.setValue(this.plugin.settings.immersiveMode).onChange(async (value) => {
      this.plugin.settings.immersiveMode = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "使用指引", attr: { id: "akos-settings-onboarding" } });
    new Setting(containerEl).setName("新人指引").setDesc("重新查看收集、六类资产、AI 协作和本地安全边界。").addButton((button) => button.setButtonText("重新打开").onClick(() => this.plugin.openOnboarding({ force: true })));
    containerEl.createEl("h3", { text: "知识库初始化", attr: { id: "akos-settings-blueprint" } });
    const blueprint = this.plugin.settings.blueprint || DEFAULT_SETTINGS.blueprint;
    new Setting(containerEl).setName("六类资产模板").setDesc(blueprint.conflicts?.length ? `模板 v${KNOWLEDGE_BLUEPRINT.version} · 最近检查发现 ${blueprint.conflicts.length} 个同名冲突；插件不会覆盖原内容。` : `模板 v${KNOWLEDGE_BLUEPRINT.version} · ${blueprint.lastCheckedAt ? "已检查" : "等待首次初始化"} · 只补缺失文件。`).addButton((button) => button.setButtonText("检查并修复").onClick(async () => {
      button.setDisabled(true).setButtonText("检查中…");
      try {
        await this.plugin.bootstrapService.ensure({ notify: true });
      } finally {
        this.display();
      }
    }));
    containerEl.createEl("h3", { text: "插件更新", attr: { id: "akos-settings-updates" } });
    const updates = this.plugin.settings.updates;
    const updateStatus = updates.pendingVersion ? `v${updates.pendingVersion} 已安装，重启 Obsidian 后生效。` : updates.lastError ? `最近检查失败：${updates.lastError}` : updates.lastCheckedAt ? `当前版本 v${this.plugin.manifest.version} · ${formatRelativeTime(Date.parse(updates.lastCheckedAt))}检查过更新。` : `当前版本 v${this.plugin.manifest.version} · 尚未检查更新。`;
    new Setting(containerEl).setName("自动安装更新").setDesc("从 FDE365 国内更新服务获取并校验更新；不会读取或覆盖 Token、笔记和其他 Vault 数据。").addToggle((toggle) => toggle.setValue(updates.autoInstall).onChange(async (value) => {
      updates.autoInstall = value;
      await this.plugin.saveSettings();
    }));
    new Setting(containerEl).setName("更新状态").setDesc(updateStatus).addButton((button) => button.setButtonText(updates.pendingVersion ? "等待重启" : "检查并安装").setDisabled(Boolean(updates.pendingVersion)).onClick(async () => {
      button.setDisabled(true).setButtonText("检查中…");
      await this.plugin.updateService.check({ manual: true, forceInstall: true });
      this.display();
    }));
    containerEl.createEl("h3", { text: "AI 服务", attr: { id: "akos-settings-ai" } });
    new Setting(containerEl).setName("FDE365 AI").setDesc("服务地址已经内置，无需填写或切换。Token 仅保存在当前 Vault 的插件 data.json。").addButton((button) => button.setButtonText("购买 Token").onClick(() => window.open(FDE365_PURCHASE_URL, "_blank", "noopener,noreferrer")));
    const selected = this.plugin.providerManager?.describeSelected?.() || { label: "尚未配置", configured: false, compatible: false, error: "尚未配置 AI 服务" };
    new Setting(containerEl).setName("当前状态").setDesc(selected.configured && selected.compatible ? `${selected.label} 已就绪${selected.model ? ` · ${selected.model}` : ""}${selected.version ? ` · ${selected.version}` : ""}` : `${selected.label}：${selected.error || "当前不可用"}`).addButton((button) => button.setButtonText("测试连接").setDisabled(!selected.configured).onClick(async () => {
      button.setDisabled(true).setButtonText("测试中…");
      try {
        const provider = this.plugin.providerManager.getSelected();
        const result = await provider.testConnection();
        new Notice(`连接成功：${result.model || result.version || provider.label}`);
      } catch (error) {
        new Notice(`连接失败：${error instanceof Error ? error.message : String(error)}`);
      } finally {
        button.setDisabled(false).setButtonText("测试连接");
        this.display();
      }
    }));
    new Setting(containerEl).setName("发送的本地上下文").setDesc("只把选定的笔记片段交给FDE365 AI；不会默认提交整个 Vault。").addDropdown((dropdown) => dropdown.addOption("none", "不发送笔记").addOption("active-note", "当前活动笔记").addOption("retrieved", "当前笔记与本地检索片段").setValue(this.plugin.settings.ai.assistant.contextScope).onChange(async (value) => {
      this.plugin.settings.ai.assistant.contextScope = ["none", "retrieved"].includes(value) ? value : "active-note";
      await this.plugin.saveSettings();
    }));
    const api = this.plugin.settings.ai.fde365;
    new Setting(containerEl).setName("Token").setDesc(api.token ? "Token 已保存在当前 Vault；输入新值可替换，发布包不会包含该配置。" : "填写购买后获得的 Token；它只保存在当前 Vault。").addText((text) => {
      text.inputEl.type = "password";
      text.setPlaceholder(api.token ? "已配置；输入新 Token 可替换" : "粘贴 Token").onChange(async (value) => {
        if (!value.trim()) return;
        api.token = value.trim();
        await this.plugin.saveSettings();
      });
    }).addButton((button) => button.setButtonText("清除 Token").setWarning().setDisabled(!api.token).onClick(async () => {
      api.token = "";
      await this.plugin.saveSettings();
      new Notice("Token 已从当前 Vault 清除");
      this.display();
    }));
    new Setting(containerEl).setName("模型").setDesc("选择当前 Token 可使用的模型。").addDropdown((dropdown) => {
      for (const model of FDE365_MODELS) dropdown.addOption(model, model);
      dropdown.setValue(api.model).onChange(async (value) => {
        api.model = FDE365_MODELS.includes(value) ? value : DEFAULT_FDE365_MODEL;
        await this.plugin.saveSettings();
        this.plugin.refreshDashboard();
      });
    });
    new Setting(containerEl).setName("Temperature").setDesc("范围 0–2，知识问答建议 0.2–0.5。").addSlider((slider) => slider.setLimits(0, 2, 0.1).setDynamicTooltip().setValue(Number(api.temperature) || 0).onChange(async (value) => {
      api.temperature = value;
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "资产网络", attr: { id: "akos-settings-graph" } });
    new Setting(containerEl).setName("默认连接深度").setDesc("控制资产网络初次打开时展示的卫星节点和路径搜索深度。").addDropdown((dropdown) => dropdown.addOption("1", "1 层").addOption("2", "2 层").addOption("3", "3 层").setValue(String(this.plugin.settings.graphDefaultDepth || 2)).onChange(async (value) => {
      this.plugin.settings.graphDefaultDepth = Number(value);
      await this.plugin.saveSettings();
    }));
    containerEl.createEl("h3", { text: "FDE Skills", attr: { id: "akos-settings-agents" } });
    new Setting(containerEl).setName("Skill 执行规则").setDesc("35 个项目 Skill 位于知识库 .agents/skills；执行时使用当前 Provider，并要求先读取对应 SKILL.md 合同。");
    containerEl.createEl("h3", { text: "内容生产", attr: { id: "akos-settings-projects" } });
    new Setting(containerEl).setName("六阶段数据来源").setDesc(`读取 ${PROJECT_ROOT}，按选题、草稿、待审核、待发布、已发布、数据复盘展示。`);
    containerEl.createEl("h3", { text: "知识体检", attr: { id: "akos-settings-analytics" } });
    new Setting(containerEl).setName("统计数据来源").setDesc("只读取六类资产的真实文件、来源字段、未知项、内容阶段、链接和项目 Skill 部署状态。");
  }
};
module.exports = class AIKnowledgeOSPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.knowledgeRoot = await resolveKnowledgeRoot(this.app);
    configureKnowledgeRoot(this.knowledgeRoot);
    FDEWorkspace.configureKnowledgeRoot(this.knowledgeRoot);
    this.isUnloading = false;
    this.runtimeInitialized = false;
    this.startupTimer = null;
    this.updateStartupTimer = null;
    this.router = new KnowledgeOSRouter(this);
    this.bootstrapService = new VaultBootstrapService(this, { ...KNOWLEDGE_BLUEPRINT, root: this.knowledgeRoot });
    this.fdeWorkspace = new FDEWorkspace.FDEWorkspaceService(this);
    this.agentTaskStore = new AgentTaskStore(this);
    this.providerManager = new AIProviderManager(this);
    this.updateService = new Fde365UpdateService(this);
    this.fde365Provider = this.providerManager.register(new Fde365Provider(this));
    await this.migrateProviderSettings();
    this.lastFile = this.app.workspace.getActiveFile();
    this.registerView(VIEW_TYPE, (leaf) => new FDEWorkspace.FDEDashboardView(leaf, this));
    this.registerView(INBOX_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEInboxView(leaf, this));
    this.registerView(KNOWLEDGE_VIEW_TYPE, (leaf) => new FDEWorkspace.FDELibrariesView(leaf, this));
    this.registerView(GRAPH_VIEW_TYPE, (leaf) => new FDEWorkspace.FDENetworkView(leaf, this));
    this.registerView(PROJECT_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEContentView(leaf, this));
    this.registerView(AGENT_VIEW_TYPE, (leaf) => new FDEWorkspace.FDESkillsView(leaf, this));
    this.registerView(ANALYTICS_VIEW_TYPE, (leaf) => new FDEWorkspace.FDEHealthView(leaf, this));
    this.addRibbonIcon("orbit", "打开FDE365 Knowledge OS", () => this.activateView());
    this.addCommand({
      id: "open-dashboard",
      name: "打开知识驾驶舱",
      callback: () => this.activateView()
    });
    this.addCommand({
      id: "open-onboarding",
      name: "重新打开新人指引",
      callback: () => this.openOnboarding({ force: true })
    });
    this.addCommand({
      id: "repair-knowledge-blueprint",
      name: "检查并修复知识库模板",
      callback: () => this.bootstrapService.ensure({ notify: true })
    });
    this.addCommand({
      id: "check-for-updates",
      name: "检查并安装插件更新",
      callback: () => this.updateService.check({ manual: true, forceInstall: true })
    });
    this.addCommand({
      id: "new-inbox-note",
      name: "新建待处理笔记",
      callback: async () => {
        await this.activateInbox();
        this.getInbox()?.createQuickNote();
      }
    });
    this.addCommand({
      id: "open-inbox",
      name: "打开待处理收集箱",
      callback: () => this.activateInbox()
    });
    this.addCommand({
      id: "open-knowledge-center",
      name: "打开六类资产",
      callback: () => this.activateKnowledge()
    });
    this.addCommand({
      id: "open-knowledge-map",
      name: "打开资产网络",
      callback: () => this.activateGraph()
    });
    this.addCommand({
      id: "open-project-center",
      name: "打开内容生产流水线",
      callback: () => this.activateProjects()
    });
    this.addCommand({
      id: "open-agent-center",
      name: "打开 FDE Skills",
      callback: () => this.activateAgents()
    });
    this.addCommand({
      id: "open-knowledge-analytics",
      name: "打开知识体检",
      callback: () => this.activateAnalytics()
    });
    this.addSettingTab(new AIKnowledgeOSSettingTab(this.app, this));
    this.register(() => {
      if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
      this.startupTimer = null;
      if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
      this.updateStartupTimer = null;
    });
    this.registerInterval(window.setInterval(() => {
      if (!this.isUnloading) void this.updateService.check();
    }, UPDATE_CHECK_INTERVAL_MS));
    this.app.workspace.onLayoutReady(() => {
      if (!this.isUnloading) void this.initializeRuntime();
    });
  }
  async initializeRuntime() {
    if (this.runtimeInitialized || this.isUnloading) return;
    this.runtimeInitialized = true;
    const refresh = debounce(() => this.refreshDashboard(), 500);
    this.registerEvent(this.app.vault.on("create", refresh));
    this.registerEvent(this.app.vault.on("delete", refresh));
    this.registerEvent(this.app.vault.on("modify", refresh));
    this.registerEvent(this.app.vault.on("rename", refresh));
    this.registerEvent(this.app.metadataCache.on("resolved", refresh));
    this.registerEvent(this.app.workspace.on("file-open", (file) => {
      if (file) this.lastFile = file;
    }));
    try {
      const shouldNotify = Number(this.settings.blueprint?.version || 0) < KNOWLEDGE_BLUEPRINT.version;
      await this.bootstrapService.ensure({ notify: shouldNotify });
      await this.fdeWorkspace.reloadConfig();
    } catch (error) {
      console.error("FDE365 Knowledge OS: failed to initialize knowledge blueprint", error);
      new Notice("FDE365知识库初始化失败；可在设置中重新检查", 8e3);
    }
    const shouldOpenOnboarding = Number(this.settings.onboardingVersion || 0) < ONBOARDING_VERSION;
    if ((this.settings.openOnStartup || shouldOpenOnboarding) && !this.isUnloading) {
      this.startupTimer = window.setTimeout(() => {
        this.startupTimer = null;
        if (this.isUnloading) return;
        void (async () => {
          if (this.settings.openOnStartup) {
            try {
              await this.activateView();
            } catch (error) {
              console.error("FDE365 Knowledge OS: failed to open Dashboard on startup", error);
            }
          }
          if (shouldOpenOnboarding && !this.isUnloading) this.openOnboarding();
        })();
      }, 250);
    }
    this.updateStartupTimer = window.setTimeout(() => {
      this.updateStartupTimer = null;
      if (!this.isUnloading) void this.updateService.check();
    }, 1e4);
  }
  onunload() {
    this.isUnloading = true;
    this.onboardingModal?.close();
    this.onboardingModal = null;
    this.providerManager?.cancelAll?.();
    if (this.startupTimer !== null) window.clearTimeout(this.startupTimer);
    this.startupTimer = null;
    if (this.updateStartupTimer !== null) window.clearTimeout(this.updateStartupTimer);
    this.updateStartupTimer = null;
    this.app.workspace.detachLeavesOfType(VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(INBOX_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(KNOWLEDGE_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(GRAPH_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(PROJECT_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(AGENT_VIEW_TYPE);
    this.app.workspace.detachLeavesOfType(ANALYTICS_VIEW_TYPE);
  }
  async loadSettings() {
    const raw = await this.loadData();
    this.needsProviderMigration = Boolean(raw && (Number(raw.schemaVersion || 0) < 4 || raw.ai?.provider !== "fde365" || !raw.ai?.fde365 || raw.ai?.openaiCompatible || raw.ai?.codexCli || raw.ai?.claudeCli));
    this.settings = mergeSettings(raw || {});
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async markOnboardingSeen() {
    if (Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION) return;
    this.settings.onboardingVersion = ONBOARDING_VERSION;
    await this.saveSettings();
  }
  openOnboarding({ force = false } = {}) {
    if (this.isUnloading || !force && Number(this.settings.onboardingVersion || 0) >= ONBOARDING_VERSION) return;
    if (this.onboardingModal) return;
    this.onboardingModal = new KnowledgeOSOnboardingModal(this.app, this);
    this.onboardingModal.open();
  }
  logoResource() {
    const pluginDirectory = this.manifest.dir || `.obsidian/plugins/${this.manifest.id}`;
    return this.app.vault.adapter.getResourcePath(normalizePath(`${pluginDirectory}/assets/fde365-logo.png`));
  }
  async migrateProviderSettings() {
    if (!this.needsProviderMigration) return;
    this.settings.ai.provider = "fde365";
    this.settings.schemaVersion = 4;
    this.needsProviderMigration = false;
    await this.saveSettings();
  }
  getDashboard() {
    return this.app.workspace.getLeavesOfType(VIEW_TYPE)[0]?.view || null;
  }
  getInbox() {
    return this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0]?.view || null;
  }
  getKnowledgeCenter() {
    return this.app.workspace.getLeavesOfType(KNOWLEDGE_VIEW_TYPE)[0]?.view || null;
  }
  getGraph() {
    return this.app.workspace.getLeavesOfType(GRAPH_VIEW_TYPE)[0]?.view || null;
  }
  getProjects() {
    return this.app.workspace.getLeavesOfType(PROJECT_VIEW_TYPE)[0]?.view || null;
  }
  getAgents() {
    return this.app.workspace.getLeavesOfType(AGENT_VIEW_TYPE)[0]?.view || null;
  }
  getAnalytics() {
    return this.app.workspace.getLeavesOfType(ANALYTICS_VIEW_TYPE)[0]?.view || null;
  }
  refreshDashboard() {
    const dashboard = this.getDashboard();
    if (dashboard && typeof dashboard.render === "function") dashboard.refresh();
    const inbox = this.getInbox();
    if (inbox && typeof inbox.render === "function") inbox.refresh();
    const knowledge = this.getKnowledgeCenter();
    if (knowledge && typeof knowledge.render === "function") knowledge.refresh();
    const graph = this.getGraph();
    if (graph && typeof graph.render === "function") graph.refresh();
    const projects = this.getProjects();
    if (projects && typeof projects.render === "function") projects.refresh();
    const agents = this.getAgents();
    if (agents && typeof agents.render === "function") agents.refresh();
    const analytics = this.getAnalytics();
    if (analytics && typeof analytics.render === "function") analytics.refresh();
  }
  async toggleColorTheme() {
    this.settings.colorTheme = this.settings.colorTheme === "light" ? "dark" : "light";
    await this.saveSettings();
    this.refreshDashboard();
    new Notice(`FDE365已切换为${this.settings.colorTheme === "light" ? "浅色" : "深色"}主题`);
  }
  async revealKnowledgeLeaf(leaf) {
    await this.app.workspace.revealLeaf(leaf);
    this.app.workspace.setActiveLeaf?.(leaf, { focus: true });
    await wait(25);
  }
  async activateView() {
    let leaf = this.app.workspace.getLeavesOfType(VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateInbox() {
    let leaf = this.app.workspace.getLeavesOfType(INBOX_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: INBOX_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateKnowledge() {
    let leaf = this.app.workspace.getLeavesOfType(KNOWLEDGE_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: KNOWLEDGE_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateGraph() {
    let leaf = this.app.workspace.getLeavesOfType(GRAPH_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: GRAPH_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateProjects() {
    let leaf = this.app.workspace.getLeavesOfType(PROJECT_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: PROJECT_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateAgents() {
    let leaf = this.app.workspace.getLeavesOfType(AGENT_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: AGENT_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async activateAnalytics() {
    let leaf = this.app.workspace.getLeavesOfType(ANALYTICS_VIEW_TYPE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: ANALYTICS_VIEW_TYPE, active: true });
    }
    await this.revealKnowledgeLeaf(leaf);
    if (this.settings.immersiveMode) {
      this.app.workspace.leftSplit?.collapse();
      this.app.workspace.rightSplit?.collapse();
    }
  }
  async updateGraphSnapshot(currentEdges) {
    const date = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    const current = [...new Set(currentEdges)].sort();
    const snapshot = this.settings.graphSnapshot;
    if (!snapshot || snapshot.date !== date) {
      this.settings.graphSnapshot = {
        date,
        baselineEdges: snapshot?.currentEdges || current,
        currentEdges: current
      };
      await this.saveSettings();
      const baseline2 = new Set(this.settings.graphSnapshot.baselineEdges);
      return current.filter((edge) => !baseline2.has(edge)).length;
    }
    const baseline = new Set(snapshot.baselineEdges || []);
    const added = current.filter((edge) => !baseline.has(edge)).length;
    if (JSON.stringify(snapshot.currentEdges || []) !== JSON.stringify(current)) {
      snapshot.currentEdges = current;
      await this.saveSettings();
    }
    return added;
  }
  providerLabel(providerId) {
    return this.providerManager.get(providerId)?.label || providerId || "AI Provider";
  }
  async buildAssistantContext(prompt, sourceFiles = [], localContext = []) {
    const settings = this.settings.ai.assistant;
    const scope = settings.contextScope;
    const maxChars = Math.max(2e3, Math.min(1e5, Number(settings.maxContextChars) || 2e4));
    const context = [];
    let remaining = maxChars;
    for (const item of Array.isArray(localContext) ? localContext : []) {
      if (remaining <= 0 || !item || typeof item !== "object") break;
      const excerpt = String(item.excerpt || "").slice(0, remaining).trim();
      if (!excerpt) continue;
      context.push({
        path: String(item.path || "FDE365 本地运行上下文"),
        title: String(item.title || item.path || "FDE365 本地运行上下文"),
        excerpt
      });
      remaining -= excerpt.length;
    }
    if (scope === "none" || remaining <= 0) return context;
    const candidates = [];
    const addFile = (value) => {
      const file = value instanceof TFile ? value : typeof value === "string" ? this.app.vault.getAbstractFileByPath(value) : null;
      const insideKnowledgeBase = file instanceof TFile && file.path.startsWith(`${ROOT}/`);
      const isRuntimeOrSkill = insideKnowledgeBase && (file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`));
      if (insideKnowledgeBase && !isRuntimeOrSkill && file.extension === "md" && !candidates.some((item) => item.path === file.path)) candidates.push(file);
    };
    sourceFiles.forEach(addFile);
    addFile(this.app.workspace.getActiveFile());
    if (scope === "retrieved") {
      const words = String(prompt || "").toLowerCase().split(/[\s，。！？；、,.!?;:：]+/).filter((word) => word.length > 1).slice(0, 12);
      const scored = [];
      for (const file of this.app.vault.getMarkdownFiles()) {
        if (!file.path.startsWith(`${ROOT}/`) || file.path.startsWith(`${ROOT}/.agents/`) || file.path.startsWith(`${ROOT}/.fde/`) || file.path.startsWith(`${ROOT}/7-系统/`)) continue;
        if (candidates.some((item) => item.path === file.path) || file.path.startsWith(`${AGENT_ROOT}/运行记录/`) || file.path.startsWith(`${AGENT_ROOT}/输出/`)) continue;
        const content = await this.app.vault.cachedRead(file);
        const haystack = `${file.basename}
${content}`.toLowerCase();
        let score = 0;
        words.forEach((word) => {
          if (file.basename.toLowerCase().includes(word)) score += 5;
          score += Math.min(5, haystack.split(word).length - 1);
        });
        if (score > 0) scored.push({ file, score });
      }
      scored.sort((a, b) => b.score - a.score || b.file.stat.mtime - a.file.stat.mtime);
      scored.slice(0, 4).forEach((item) => addFile(item.file));
    }
    for (const file of candidates.slice(0, 6)) {
      if (remaining <= 0) break;
      const raw = await this.app.vault.cachedRead(file);
      const excerpt = raw.slice(0, Math.min(remaining, Math.max(1e3, Math.floor(maxChars / Math.max(1, candidates.length))))).trim();
      if (!excerpt) continue;
      context.push({ path: file.path, title: file.basename, excerpt });
      remaining -= excerpt.length;
    }
    return context;
  }
  async askAssistant({ requestId, prompt, history = [], systemPrompt, sourceFiles = [], localContext = [] }) {
    const context = await this.buildAssistantContext(prompt, sourceFiles, localContext);
    const messages = [
      { role: "system", content: systemPrompt || "你是FDE365知识助手。" },
      ...history.filter((message) => !message.error && ["user", "assistant"].includes(message.role) && message.content).slice(-6).map((message) => ({ role: message.role, content: message.content })),
      { role: "user", content: prompt }
    ];
    return this.providerManager.complete({ requestId, mode: "chat", messages, context });
  }
  async saveAssistantOutput(message, viewName = "AI 助手") {
    await ensureVaultFolder(this.app, AI_OUTPUT_ROOT);
    const date = /* @__PURE__ */ new Date();
    const stamp = date.toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
    const base = `${AI_OUTPUT_ROOT}/${stamp}-${safeName(viewName)}.md`;
    let path = base;
    let index = 2;
    while (this.app.vault.getAbstractFileByPath(path) || await this.app.vault.adapter.exists(path)) {
      path = base.replace(/\.md$/, `-${index}.md`);
      index += 1;
    }
    const result = message.result || {};
    const content = `---
type: ai-assistant-output
provider: ${yamlQuote(result.provider || "unknown")}
provider_version: ${yamlQuote(result.providerVersion || "")}
model: ${yamlQuote(result.model || "")}
created_at: ${date.toISOString()}
source_view: ${yamlQuote(viewName)}
tags:
  - ai/assistant-output
---

# ${viewName} · AI 回答

${message.content}
`;
    return this.app.vault.create(path, content);
  }
  async runAssistantAgent(prompt) {
    const agent = {
      id: "assistant",
      name: "FDE365助手",
      description: "基于当前本地知识上下文完成用户提交的深度任务。",
      output: "分析结果"
    };
    const active = this.app.workspace.getActiveFile();
    return this.executeAgent(agent, prompt, active ? [active] : []);
  }
  async executeAgent(agent, prompt, sources = []) {
    let provider;
    let capability;
    try {
      ({ provider, capability } = await this.providerManager.preflight());
    } catch (error) {
      new Notice(`无法启动 Agent：${error instanceof Error ? error.message : String(error)}`);
      if (["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code)) this.openSettings("ai");
      return null;
    }
    const task = await this.agentTaskStore.createRun(agent, prompt, sources, {
      provider: provider.id,
      providerVersion: capability.version || "",
      model: capability.model || "",
      label: provider.label
    });
    new Notice(`${agent.name} 已进入执行队列 · ${provider.label}`);
    await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.RUNNING, {
      provider_version: capability.version,
      model: capability.model || "",
      started_at: (/* @__PURE__ */ new Date()).toISOString(),
      error: ""
    });
    this.refreshDashboard();
    try {
      const context = await this.buildAssistantContext(prompt, sources, agent.localContext || []);
      const result = await provider.complete({
        requestId: task.taskId,
        mode: "agent",
        messages: [
          { role: "system", content: agent.systemPrompt || `你是“${agent.name}”。${agent.description} 输出类型：${agent.output}。请区分事实、推断和建议，并明确引用来源。` },
          { role: "user", content: prompt }
        ],
        context
      });
      if (!result.content?.trim()) throw new AIProviderError("EMPTY_RESPONSE", "AI Provider 返回了空内容");
      const outputFile = await this.agentTaskStore.saveOutput(task, result);
      await this.agentTaskStore.transition(task, AGENT_RUN_STATUSES.WAITING_REVIEW, {
        finished_at: (/* @__PURE__ */ new Date()).toISOString(),
        conversation_id: result.conversationId || "",
        output_file: outputFile.path,
        reviewed: false,
        error: ""
      });
      this.lastAgentResult = { task, result, outputFile };
      new Notice(`${agent.name} 已完成，等待人工验收；请在 FDE365 右侧栏“历史”查看输出`);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const nextStatus = ["PROVIDER_NOT_CONFIGURED", "PROVIDER_UNAVAILABLE", "INCOMPATIBLE_VERSION", "AUTH_FAILED", "MODEL_NOT_FOUND"].includes(error?.code) ? AGENT_RUN_STATUSES.BLOCKED : error?.code === "CANCELLED" ? AGENT_RUN_STATUSES.CANCELLED : AGENT_RUN_STATUSES.FAILED;
      await this.agentTaskStore.transition(task, nextStatus, {
        finished_at: (/* @__PURE__ */ new Date()).toISOString(),
        error: message
      });
      new Notice(`${agent.name} 执行未完成：${message}`);
    } finally {
      this.refreshDashboard();
    }
    return task;
  }
  openSettings(section) {
    this.app.setting?.open();
    this.app.setting?.openTabById(this.manifest.id);
    if (section) window.setTimeout(() => {
      document.querySelector(`#akos-settings-${section}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }
};
module.exports.__testables = Object.freeze({
  AIProviderError,
  AIProviderManager,
  Fde365Provider,
  Fde365UpdateService,
  VaultBootstrapService,
  mergeSettings,
  buildOpenAIMessages,
  FDE365_BASE_URL,
  FDE365_CHAT_ENDPOINT,
  FDE365_MODELS,
  DEFAULT_ROOT,
  LEGACY_ROOT,
  configureKnowledgeRoot,
  resolveKnowledgeRoot,
  ONBOARDING_STEPS,
  ONBOARDING_VERSION,
  FDE365_RELEASE_REPOSITORY,
  FDE365_RELEASE_API,
  FDE365_UPDATE_ORIGIN
});
