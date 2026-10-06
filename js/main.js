/* =============================================================================
   main.js  —  Shared behaviour for every page of the portfolio
   -----------------------------------------------------------------------------
   This single file is linked from ALL pages (index/projects/blog/contact) with
   <script src="js/main.js" defer></script>. It is deliberately modular so you
   can extend it easily. It handles FOUR things:

     (A) THEME switching  — Dark / Nord / Light / Catppuccin Mocha,
                            persisted in localStorage, hooks into the WebTUI
                            theme plugins via the data-webtui-theme attribute.
     (B) LANGUAGE toggle  — English <-> Arabic, with automatic RTL layout,
                            persisted in localStorage, driven by data-i18n keys.
     (C) MOBILE navigation — slide-in sidebar drawer + hover/click theme menu.
     (D) CONTACT form     — turns the WebTUI form into a mailto: message.

   localStorage keys used:  "pref-theme"  and  "pref-lang".
   ============================================================================= */

/* ============================================================================
   (A) THEME SWITCHER
   ----------------------------------------------------------------------------
   Each theme string is exactly the value WebTUI expects on <html
   data-webtui-theme="…">. The plugins live in vendor/theme-*.css:
     - "dark"             -> our custom dark palette (css/style.css base layer)
     - "light"            -> our custom light palette (css/style.css base layer)
     - "nord"             -> vendor/theme-nord.css
     - "catppuccin-mocha" -> vendor/theme-catppuccin.css
   To ADD a theme: import its plugin CSS in every <head>, add its value here,
   and add a <button data-theme="…"> row in the sidebar menu.
   ============================================================================ */
const THEMES = ["dark", "nord", "light", "catppuccin-mocha"];
const DEFAULT_THEME = "dark";

/** Apply a theme to <html> and remember it. */
function applyTheme(theme) {
  if (!THEMES.includes(theme)) theme = DEFAULT_THEME;
  document.documentElement.setAttribute("data-webtui-theme", theme);
  localStorage.setItem("pref-theme", theme);

  // Highlight the active row inside the hover dropdown (aria-current).
  document.querySelectorAll(".theme-switch__menu [data-theme]").forEach((btn) => {
    btn.setAttribute("aria-current", String(btn.dataset.theme === theme));
  });
}

/** Read the saved theme (or the default) — called on every page load. */
function initTheme() {
  applyTheme(localStorage.getItem("pref-theme") || DEFAULT_THEME);
}


/* ============================================================================
   (B) LANGUAGE / i18n
   ----------------------------------------------------------------------------
   Every translatable element in the HTML carries a `data-i18n="some.key"`.
   The DICT object below holds the English + Arabic strings for each key.
   Switching language rewrites those elements and flips the document direction.

   To ADD a string: give the element data-i18n="my.key" in the HTML and add
   `"my.key": { en: "...", ar: "..." }` to DICT below.
   For attributes (e.g. placeholders) use data-i18n-attr="placeholder" alongside
   data-i18n so the translation is written to that attribute instead of text.
   ============================================================================ */
const DICT = {
  /* ---- Shell / navigation ---- */
  "nav.pages":     { en: "pages",       ar: "الصفحات" },
  "nav.connect":   { en: "connect",     ar: "روابط" },
  "nav.home":      { en: "Home",        ar: "الرئيسية" },
  "nav.projects":  { en: "Projects",    ar: "المشاريع" },
  "nav.blog":      { en: "Blog",        ar: "المدوّنة" },
  "nav.contact":   { en: "Contact",     ar: "تواصل" },
  "ui.theme":      { en: "Theme",       ar: "السمة" },
  "ui.menu":       { en: "Menu",        ar: "القائمة" },
  "footer.reach":  { en: "Reach me",    ar: "تواصل معي" },

  /* ---- Home page ---- */
  "home.crumb":    { en: "~/introduction", ar: "~/المقدمة" },
  "home.title":    { en: "Introduction",   ar: "المقدمة" },
  "home.hello":    { en: "Hi, I'm",        ar: "مرحباً، أنا" },
  "home.name":     { en: "Yousif Mohammed Al-Nuaimy ",
                     ar: "يوسف محمد النعيمي" },
  "home.tagline":  { en: "Engineering Student • Tech Nerd • Embedded Systems Developer",
                     ar: "طالب هندسة • مهووس بالتقنية • مطور انظمة مدمجة" },
  "home.intro":    { en: "I know a little bit about a lot of things. Curiosity and motivation are my main engines. I learn by doing, and I build whatever catches my interest. Mostly, that means tinkering with Linux and random tech as a hobby. Most of my work lives in the terminal, and this site is styled to feel like it too. Welcome to my workspace.",

ar: "أعرف القليل عن أشياء كثيرة. الفضول والشغف هما المحركان الأساسيان لي. أتعلم بالتطبيق، وأبني أي شيء يثير اهتمامي. في الغالب، هذا يعني العبث بنظام لينكس والتقنيات المختلفة كهواية. معظم عملي يجري داخل الطرفية، وقد صُمّم هذا الموقع ليعطي الإحساس نفسه. مرحباً بك في مساحة عملي."
 },
  "home.eduTitle": { en: "Academic Level", ar: "المستوى الأكاديمي" },
  "home.edu":      { en: "I am a second year student studying Smart Manufacturing Engineering at the University of Technology in Baghdad.",
                     ar: "أنا طالب سنة ثانية أدرس هندسة التصنيع الذكي في الجامعة التكنولوجية في بغداد." },
  // WORK panel. "home.workRolePre" is the text BEFORE the company link; the
  // company name itself stays as literal link text in index.html (edit it
  // there). Change your role by editing the en/ar strings below.
  "home.workTitle":   { en: "Where I Work", ar: "أين أعمل" },
  "home.workRolePre": { en: "Embedded Developer at", ar: "مطور أنظمة مدمجة في" },
  "home.skillsTitle": { en: "Skills & Knowledge", ar: "المهارات والمعرفة" },
  "home.skillsIntro": { en: "The languages, tools and hardware I work with:",
                        ar: "اللغات واللأدوات والعتاد الذي أعمل به:" },
  "home.nowTitle":  { en: "Currently Learning", ar: "أتعلّم حالياً" },
  "home.now":       { en: " Right now I'm deepening my C++  and getting comfortable with embedded workflows on the ESP32 and some academic software like matlab .",
                      ar: "حالياً، أتعمق في لغة C++ وأعتاد أكثر على سير عمل الأنظمة المدمجة على شريحة ESP32 و اتعلم بعض الامور الاكادمية مثل ماتلاب." },
  "home.nextTitle": { en: "Learning Next",     ar: "ما سأتعلّمه لاحقاً" },
  "home.next":      { en: "Next up: Learning javascript properly and 3D Design software like AutoCAD and FreeCAD.",
                      ar: "التالي: تعلم JavaScript بشكل صحيح، وبرامج التصميم ثلاثي اللأبعاد مثل AutoCAD و FreeCAD." },
  "home.footTools": { en: "Built with", ar: "بُني باستخدام" },
  "home.dotfiles":  { en: "My dotfiles & config",
                      ar: "ملفات إعداداتي و الدوتفايللات " },

  /* ---- Projects page ---- */
  "proj.crumb":   { en: "~/projects", ar: "~/المشاريع" },
  "proj.title":   { en: "Projects",   ar: "المشاريع" },
  "proj.intro":   { en: "A selection of things I've built. Source and docs linked on each card.",
                    ar: "مجموعة مختارة مما بنيته. الشيفرة المصدرية والتوثيق مرتبطان في كل بطاقة." },
  "proj.source":  { en: "Source",     ar: "المصدر" },
  "proj.docs":    { en: "Docs",       ar: "التوثيق" },
  "proj.pcalcDesc":   { en: "A fast C++ command-line calculator utility with an expression parser.",
                        ar: "أداة حاسبة سريعة لسطر الأوامر بلغة C++ مع محلّل للتعابير الرياضية." },
  "proj.potatoDesc":  { en: "A terminal pet written in C++ that renders cute ASCII animations while you work.",
                        ar: "حيوان أليف للطرفية مكتوب بلغة C++ يرسم رسوم ASCII لطيفة أثناء عملك." },
  "proj.prootDesc":   { en: "A static personal website — minimal, fast, no framework required.",
                        ar: "موقع شخصي ثابت — بسيط وسريع ولا يحتاج إلى أي إطار عمل." },
  "proj.clockDesc":   { en: "An ESP32 dot-matrix desk clock featuring Bluetooth audio playback.",
                        ar: "ساعة مكتب بمصفوفة نقطية على ESP32 مع تشغيل صوتي عبر البلوتوث." },

  /* ---- Blog page ---- */
  "blog.crumb":  { en: "~/blog",  ar: "~/المدوّنة" },
  "blog.title":  { en: "Blog",    ar: "المدوّنة" },
  "blog.intro":  { en: "Notes, essays, hardware docs, and Linux dotfiles. Newest first.",
                   ar: "مللاحظات، مقاللات، توثيق للهاردوير، وإعدادات لينكس. اللاحدث أوللاً." },
  // "blog.read" is also swapped to "blog.readLess" by the Read-more toggle.
  "blog.read":     { en: "Read more", ar: "اقرأ المزيد" },
  "blog.readLess": { en: "Read less", ar: "عرض أقل" },

  /* ---- Contact page ---- */
  "contact.crumb": { en: "~/contact", ar: "~/تواصل" },
  "contact.title": { en: "Contact",   ar: "تواصل" },
  "contact.intro": { en: "Find me on these platforms, or send a message straight from the form below.",
                     ar: "تجدني على هذه المنصّات، أو أرسل رسالة مباشرة من النموذج أدناه." },
  "contact.socialsTitle": { en: "Elsewhere", ar: "في أماكن أخرى" },
  "contact.formTitle": { en: "Send a message", ar: "أرسل رسالة" },
  "contact.name":  { en: "Name",    ar: "الاسم" },
  "contact.email": { en: "Email",   ar: "البريد الإلكتروني" },
  "contact.msg":   { en: "Message", ar: "الرسالة" },
  "contact.namePh":  { en: "Your name",         ar: "اسمك" },
  "contact.emailPh": { en: "you@example.com",   ar: "you@example.com" },
  "contact.msgPh":   { en: "Write your message…", ar: "اكتب رسالتك…" },
  "contact.send":  { en: "Send", ar: "إرسال" },
  "contact.note":  { en: "Submitting opens your email client with the message pre-filled.",
                     ar: "يؤدي الإرسال إلى فتح برنامج البريد لديك مع تعبئة الرسالة مسبقاً." },
};

const LANGS = ["en", "ar"];
const DEFAULT_LANG = "en";

/** Apply a language: rewrite all [data-i18n] nodes and set dir/lang on <html>. */
function applyLang(lang) {
  if (!LANGS.includes(lang)) lang = DEFAULT_LANG;

  // Direction + language attributes drive our CSS (RTL, Arabic font stack).
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  localStorage.setItem("pref-lang", lang);

  // Translate every tagged element.
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = DICT[el.getAttribute("data-i18n")];
    if (!entry || entry[lang] == null) return;
    const attr = el.getAttribute("data-i18n-attr");
    if (attr) el.setAttribute(attr, entry[lang]); // e.g. placeholder
    else el.textContent = entry[lang];            // normal text node
  });

  // Sync the WebTUI language switch: checked = Arabic. Also mark which side
  // (EN / عربي) is active so CSS can emphasise it.
  const sw = document.getElementById("lang-toggle");
  if (sw) sw.checked = lang === "ar";
  const wrap = document.querySelector(".lang-switch");
  if (wrap) wrap.setAttribute("data-lang", lang);

  // Keep the mobile toggle's label/icon in the right language + state.
  updateNavToggle();
}

/** Keep the mobile nav toggle in sync with the drawer state. The button is a
    SINGLE burger (☰) that just toggles the drawer open/closed — there is no
    separate ✕ "Close" state. We only update aria-expanded for accessibility;
    the icon and label stay as the burger/"Menu" in the current language. */
function updateNavToggle() {
  const btn = document.getElementById("nav-toggle");
  const sidebar = document.querySelector(".sidebar");
  if (!btn || !sidebar) return;
  const open = sidebar.classList.contains("sidebar--open");
  const lang = localStorage.getItem("pref-lang") || DEFAULT_LANG;
  const icon = btn.querySelector(".nf");
  const label = btn.querySelector(".nav-toggle__label");
  // Always show the burger — tapping it again (or a nav link) closes the drawer.
  if (icon) icon.innerHTML = "&#xf0c9;";
  if (label) label.textContent = DICT["ui.menu"][lang];
  btn.setAttribute("aria-expanded", String(open));
}

/** Read the saved language (or default) — called on every page load. */
function initLang() {
  applyLang(localStorage.getItem("pref-lang") || DEFAULT_LANG);
}


/* ============================================================================
   (D) CONTACT FORM  ->  mailto:
   ----------------------------------------------------------------------------
   A purely static site cannot send email by itself. The simplest dependency-free
   approach is to build a mailto: link from the form fields, which opens the
   visitor's email client with everything pre-filled.

   WANT REAL SERVER SUBMISSION INSTEAD? Replace the body of handleContact() with
   a fetch() POST to a form backend such as Formspree/Getform, e.g.:
       fetch("https://formspree.io/f/XXXX", { method:"POST", body:new FormData(form) })
   ============================================================================ */
const MY_EMAIL = "greetings.forge@proton.me"; // <-- CHANGE to your real address.

function handleContact(e) {
  e.preventDefault();
  const form = e.currentTarget;
  // Use form.elements[...] — NOT form.name — because form.name returns the
  // <form>'s own name property (a string), which shadows the input named "name"
  // and would throw. form.elements resolves controls by their name reliably.
  const name = form.elements["name"].value.trim();
  const email = form.elements["email"].value.trim();
  const message = form.elements["message"].value.trim();

  const subject = `Portfolio message from ${name || "a visitor"}`;
  const body = `${message}\n\n— ${name} <${email}>`;
  // encodeURIComponent keeps line breaks and special characters intact.
  window.location.href =
    `mailto:${MY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}


/* ============================================================================
   (E) MARKDOWN BLOG  — render blog/*.md into the feed on blog.html
   ----------------------------------------------------------------------------
   HOW IT WORKS:
     1. Fetch blog/posts.json — an ORDERED list (newest first). Each entry is
        either  { "file": "x.md" }  (single language, shown in EN and AR) or
        { "en": "x.en.md", "ar": "x.ar.md" }  (loads the file matching the UI
        language, falling back to whichever exists).
     2. For each post, fetch the .md file, split off its YAML-ish front-matter
        (title / date / excerpt) and Markdown body.
     3. Render the body to HTML with the vendored `marked` parser and build a
        WebTUI card: date + title + excerpt + a "Read more" button that expands
        the full rendered body (handled by the delegated click listener above).

   ADD A POST: drop a .md file in blog/ and add a line to blog/posts.json.
   NO NETWORK NEEDED beyond your local server — but it MUST be served over
   http:// (fetch() can't read files from a file:// page).
   ============================================================================ */

/** Split "---\n key: value \n---\n body" into { meta, body }. Very small on
    purpose — one `key: value` per line, optional surrounding quotes. */
function parseFrontMatter(text) {
  const m = text.match(/^\uFEFF?---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  m[1].split(/\r?\n/).forEach((line) => {
    const i = line.indexOf(":");
    if (i > 0) {
      const key = line.slice(0, i).trim();
      let val = line.slice(i + 1).trim().replace(/^["']|["']$/g, "");
      meta[key] = val;
    }
  });
  return { meta, body: m[2] };
}

/** Pick which file to load for an entry, based on the current language. */
function pickPostFile(entry, lang) {
  if (entry.file) return entry.file;                 // single-language post
  return entry[lang] || entry.en || entry.ar || Object.values(entry)[0];
}

/** Build one blog card element from a post's metadata + rendered HTML. */
function buildPostCard(meta, bodyHtml, lang) {
  const article = document.createElement("article");
  article.setAttribute("box-", "square");
  article.setAttribute("shear-", "top");
  article.className = "stack";

  // Date row (&#xf073; = calendar). textContent keeps it safe/simple.
  const dateRow = document.createElement("div");
  dateRow.className = "box-title";
  dateRow.innerHTML = '<span class="nf">&#xf073;</span>';
  dateRow.append(document.createTextNode(meta.date || ""));

  const h2 = document.createElement("h2");
  h2.textContent = meta.title || "(untitled)";

  const excerpt = document.createElement("p");
  excerpt.textContent = meta.excerpt || "";

  const full = document.createElement("div");
  full.className = "post-full";
  full.hidden = true;
  full.innerHTML = bodyHtml;   // content is authored by the site owner

  const btnWrap = document.createElement("p");
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "read-more";
  btn.setAttribute("is-", "button");
  // NOTE: do NOT add size-="small" together with box-="round" — the small size
  // zeroes the vertical padding and the box border collapses into a line through
  // the text. box-="round" alone gives a clean rounded button.
  btn.setAttribute("box-", "round");
  btn.dataset.i18n = "blog.read";
  btn.textContent = DICT["blog.read"][lang];
  btnWrap.appendChild(btn);

  article.append(dateRow, h2, excerpt, full, btnWrap);
  return article;
}

async function initBlog() {
  const feed = document.getElementById("blog-feed");
  if (!feed) return; // not on the blog page
  const lang = localStorage.getItem("pref-lang") || DEFAULT_LANG;

  try {
    const manifest = await fetch("blog/posts.json").then((r) => {
      if (!r.ok) throw new Error("posts.json " + r.status);
      return r.json();
    });

    // Fetch every post's Markdown in parallel, preserving manifest order.
    const posts = await Promise.all(
      manifest.map(async (entry) => {
        const file = pickPostFile(entry, lang);
        const raw = await fetch("blog/" + file).then((r) => {
          if (!r.ok) throw new Error(file + " " + r.status);
          return r.text();
        });
        const { meta, body } = parseFrontMatter(raw);
        return { meta, html: marked.parse(body) };
      })
    );

    feed.innerHTML = "";
    posts.forEach((p) => feed.appendChild(buildPostCard(p.meta, p.html, lang)));
  } catch (err) {
    // Most common cause: opened as file:// (no server) so fetch is blocked.
    feed.innerHTML =
      '<p style="color:var(--foreground2)">Could not load posts. Serve the site ' +
      "over http (e.g. <code>python3 -m http.server 8000</code>) and reload.</p>";
    console.error("initBlog:", err);
  }
}


/* ============================================================================
   (C) WIRING — run once the DOM is ready
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  // Restore saved preferences first so there is no flash of the wrong theme/lang.
  initTheme();
  initLang();

  // --- Theme dropdown buttons ---
  document.querySelectorAll(".theme-switch__menu [data-theme]").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme));
  });

  // On touch devices (no hover), let a tap on the trigger open/close the menu.
  const themeSwitch = document.querySelector(".theme-switch");
  const themeTrigger = document.getElementById("theme-trigger");
  if (themeTrigger && themeSwitch) {
    themeTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      themeSwitch.classList.toggle("open");
    });
    // Click anywhere else closes it.
    document.addEventListener("click", () => themeSwitch.classList.remove("open"));
  }

  // --- Language switch (WebTUI switch: checked = Arabic) ---
  const langSwitch = document.getElementById("lang-toggle");
  if (langSwitch) {
    langSwitch.addEventListener("change", () => {
      applyLang(langSwitch.checked ? "ar" : "en");
      initBlog(); // reload posts so bilingual entries switch language
    });
  }

  // --- Mobile sidebar drawer -------------------------------------------------
  //   Tap the burger to OPEN. While open, the burger hides (via body.nav-open)
  //   and a dim backdrop appears; tap the backdrop OR any nav link to CLOSE.
  const navToggle = document.getElementById("nav-toggle");
  const sidebar = document.querySelector(".sidebar");
  if (navToggle && sidebar) {
    // Backdrop is created here (once) so we don't have to edit every HTML page.
    const backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    document.body.appendChild(backdrop);

    const openNav = () => {
      sidebar.classList.add("sidebar--open");
      document.body.classList.add("nav-open"); // hides burger + shows backdrop
      updateNavToggle();
    };
    const closeNav = () => {
      sidebar.classList.remove("sidebar--open");
      document.body.classList.remove("nav-open");
      updateNavToggle();
    };

    navToggle.addEventListener("click", openNav);
    backdrop.addEventListener("click", closeNav);
    // Tapping a navigation link also closes the drawer.
    sidebar.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  }

  // --- Blog "Read more" toggles (only on blog.html) --------------------------
  //   DELEGATED click handler: works for the post cards that initBlog() injects
  //   dynamically. Reveals/hides the .post-full block inside the clicked card's
  //   <article> and swaps the label between "Read more" and "Read less". We also
  //   update the button's data-i18n key so the label stays correct on a language
  //   switch.
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".read-more");
    if (!btn) return;
    const full = btn.closest("article").querySelector(".post-full");
    if (!full) return;
    const willOpen = full.hasAttribute("hidden");
    if (willOpen) full.removeAttribute("hidden");
    else full.setAttribute("hidden", "");
    const key = willOpen ? "blog.readLess" : "blog.read";
    const lang = localStorage.getItem("pref-lang") || DEFAULT_LANG;
    btn.dataset.i18n = key;
    btn.textContent = DICT[key][lang];
    btn.setAttribute("aria-expanded", String(willOpen));
  });

  // --- Render the Markdown blog feed (only on blog.html) ---------------------
  initBlog();

  // --- Contact form (only present on contact.html) ---
  const contactForm = document.getElementById("contact-form");
  if (contactForm) contactForm.addEventListener("submit", handleContact);

  // --- Documentation modals (projects.html) --------------------------------
  //   A button with data-open="#docId" opens the native <dialog id="docId">.
  //   A button with data-close inside a <dialog> closes it. The backdrop click
  //   also closes it. Native <dialog> gives us free focus-trapping + Esc.
  document.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const dlg = document.querySelector(btn.dataset.open);
      if (dlg && typeof dlg.showModal === "function") dlg.showModal();
    });
  });
  document.querySelectorAll("dialog [data-close]").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest("dialog").close());
  });
  // Click on the backdrop (outside the inner box) closes the dialog.
  document.querySelectorAll("dialog").forEach((dlg) => {
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  });
});
