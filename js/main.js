<!DOCTYPE html>
<!--
  =============================================================================
  projects.html — PROJECTS PAGE
  -----------------------------------------------------------------------------
  Same shell as index.html (see that file for the full explanation). Only the
  active nav link (aria-current on "Projects") and the .main content differ.

  Each project is a WebTUI box panel with: title, tech badges, description,
  a "Source" link and a "Docs" button that opens a native <dialog> modal
  (wired generically in js/main.js via data-open / data-close).
  =============================================================================
-->
<html lang="en" dir="ltr" data-webtui-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Youssef Al-Nuaimi — Projects</title>
  <link rel="stylesheet" href="vendor/full.css" />
  <link rel="stylesheet" href="vendor/theme-nord.css" />
  <link rel="stylesheet" href="vendor/theme-catppuccin.css" />
  <link rel="stylesheet" href="vendor/plugin-nf.css" />
  <link rel="stylesheet" href="css/style.css" />
  <script src="js/main.js" defer></script>
</head>
<body>

  <button id="nav-toggle" class="nav-toggle" is-="button" box-="square" aria-label="Toggle navigation">
    <span class="nf">&#xf0c9;</span><span class="nav-toggle__label" data-i18n="ui.menu">Menu</span>
  </button>

  <div class="app">

    <!-- ===== SIDEBAR (identical to index.html; "Projects" is active) ===== -->
   <aside class="sidebar">
      <div class="brand">
        <span class="accent">&#x276F;</span> yousif<span class="accent">@</span>forge
      </div>

      <nav aria-label="Primary">
        <div class="tree__group">
          <div class="tree__folder">
            <span>&#x25BC;</span><span class="nf">&#xf07c;</span><span data-i18n="nav.pages">pages</span>
          </div>
          <ul class="tree">
            <li class="tree__item"><span class="tree__branch">├ </span>
              <a class="tree__link" href="index.html"><span class="nf">&#xf015;</span><span data-i18n="nav.home">Home</span></a></li>
            <li class="tree__item"><span class="tree__branch">├ </span>
              <a class="tree__link" href="projects.html" aria-current="page"><span class="nf">&#xf121;</span><span data-i18n="nav.projects">Projects</span></a></li>
            <li class="tree__item"><span class="tree__branch">├ </span>
              <a class="tree__link" href="blog.html"><span class="nf">&#xf02d;</span><span data-i18n="nav.blog">Blog</span></a></li>
            <li class="tree__item"><span class="tree__branch">└ </span>
              <a class="tree__link" href="contact.html" ><span class="nf">&#xf0e0;</span><span data-i18n="nav.contact">Contact</span></a></li>
          </ul>
        </div>

        <div class="tree__group">
          <div class="tree__folder">
            <span>&#x25BC;</span><span class="nf">&#xf0c1;</span><span data-i18n="nav.connect">connect</span>
          </div>
          <ul class="tree">
            <li class="tree__item"><span class="tree__branch">├ </span>
              <a class="tree__link" href="https://github.com/potatoforge120" target="_blank" rel="noopener"><span class="nf">&#xf09b;</span>GitHub</a></li>
            <li class="tree__item"><span class="tree__branch">├ </span>
              <a class="tree__link" href="https://discord.com/users/791784297321332747" target="_blank" rel="noopener"><span class="nf">&#xf066f;</span>Discord</a></li>
            <li class="tree__item"><span class="tree__branch">└ </span>
              <a class="tree__link" href="/cdn-cgi/l/email-protection#3651445353425f58514518505944515376464459425958185b53"><span class="nf">&#xf0e0;</span>Email</a></li>
          </ul>
        </div>
      </nav>

      <div class="toolbar">
        <div class="theme-switch">
          <button id="theme-trigger" is-="button" box-="square" aria-haspopup="true">
            <span class="nf">&#xf0710;</span><span data-i18n="ui.theme">Theme</span></button>
          <div class="theme-switch__menu" role="menu">
            <button data-theme="catppuccin-mocha">Catppuccin Mocha</button>
            <button data-theme="nord">Nord</button>
            <button data-theme="dark">Dark</button>
            <button data-theme="light">Light</button>
          </div>
        </div>
        <!-- LANGUAGE SWITCH — a WebTUI switch (is-="switch"): OFF = English, ON = Arabic.
             Driven by js/main.js (change event + localStorage). -->
        <label class="lang-switch" title="Switch language" aria-label="Switch language">
          <span class="nf">&#xf05ca;</span>
          <span class="lang-switch__side lang-switch__side--en">EN</span>
          <input type="checkbox" id="lang-toggle" is-="switch" />
          <span class="lang-switch__side lang-switch__side--ar">عربي</span>
        </label>
      </div>

      
    </aside>


    <!-- ===== MAIN CONTENT — PROJECTS ===== -->
    <main class="main">
      <header class="page-header">
        <p style="color:var(--foreground2)"><span data-i18n="proj.crumb">~/projects</span></p>
        <h1 data-i18n="proj.title">Projects</h1>
        <p data-i18n="proj.intro">A selection of things I've built. Source and docs linked on each card.</p>
      </header>

      <!-- Sub-heading for the existing software grid, now that there are two
           project categories on this page (software + engineering below). -->
      <h2 data-i18n="proj.swTitle" style="margin-bottom:1rem">Software Projects</h2>

      <!-- PROJECT GRID: each card is a WebTUI panel. To add a project, duplicate
           a block and give its Docs button a unique data-open="#id" matching a
           <dialog id="id"> below. -->
      <div class="grid-2">

        <!-- pcalc -->
        <article box-="square" shear-="top" class="stack">
          <div class="box-title"><span class="nf">&#xf120;</span>pcalc</div>
          <div class="cluster">
            <span is-="badge" variant-="hl-blue">C++</span>
            <span is-="badge" variant-="foreground2">CLI</span>
          </div>
          <p data-i18n="proj.pcalcDesc">A fast C++ command-line calculator utility with an expression parser.</p>
          <div class="card-actions">
            <a is-="button" box-="round" href="https://github.com/potatoforge120/pcalc" target="_blank" rel="noopener">
              <span class="nf">&#xf121;</span><span data-i18n="proj.source">Source</span></a>
            <button is-="button" box-="round" variant-="accent" data-open="#doc-pcalc">
              <span class="nf">&#xf02d;</span><span data-i18n="proj.docs">Docs</span></button>
          </div>
        </article>

        <!-- Potatoly
        <article box-="square" shear-="top" class="stack">
          <div class="box-title"><span class="nf">&#xf120;</span>Potatoly</div>
          <div class="cluster">
            <span is-="badge" variant-="hl-green">C++</span>
            <span is-="badge" variant-="foreground2">ASCII</span>
            <span is-="badge" variant-="foreground2">TUI</span>
          </div>
          <p data-i18n="proj.potatoDesc">A terminal pet written in C++ that renders cute ASCII animations while you work.</p>
          <div class="card-actions">
            <a is-="button" box-="round" href="https://github.com/potatoforge120" target="_blank" rel="noopener">
              <span class="nf">&#xf121;</span><span data-i18n="proj.source">Source</span></a>
            <button is-="button" box-="round" variant-="accent" data-open="#doc-potatoly">
              <span class="nf">&#xf02d;</span><span data-i18n="proj.docs">Docs</span></button>
          </div>
        </article> -->

        <!-- p-Root 
        <article box-="square" shear-="top" class="stack">
          <div class="box-title"><span class="nf">&#xf0ac;</span>p-Root</div>
          <div class="cluster">
            <span is-="badge" variant-="hl-orange">HTML / CSS</span>
            <span is-="badge" variant-="foreground2">Static</span>
          </div>
          <p data-i18n="proj.prootDesc">A static personal website — minimal, fast, no framework required.</p>
          <div class="card-actions">
            <a is-="button" box-="round" href="https://github.com/potatoforge120" target="_blank" rel="noopener">
              <span class="nf">&#xf121;</span><span data-i18n="proj.source">Source</span></a>
            <button is-="button" box-="round" variant-="accent" data-open="#doc-proot">
              <span class="nf">&#xf02d;</span><span data-i18n="proj.docs">Docs</span></button>
          </div>
        </article> -->

        <!-- ESP32 Desk Clock -->
        <article box-="square" shear-="top" class="stack">
          <div class="box-title"><span class="nf">&#xf017;</span>ESP32 Desk Clock</div>
          <div class="cluster">
            <span is-="badge" variant-="hl-red">ESP32</span>
            <span is-="badge" variant-="foreground2">C++</span>
            <span is-="badge" variant-="foreground2">WiFI</span>
            
          </div>
          <p data-i18n="proj.clockDesc">An ESP32 dot-matrix desk clock featuring Bluetooth audio playback and more (Coming soon...).</p>
          <div class="card-actions">
            <a is-="button" box-="round" href="https://github.com/potatoforge120" target="_blank" rel="noopener">
              <span class="nf">&#xf121;</span><span data-i18n="proj.source">Source</span></a>
            <button is-="button" box-="round" variant-="accent" data-open="#doc-clock">
              <span class="nf">&#xf02d;</span><span data-i18n="proj.docs">Docs</span></button>
          </div>
        </article>

      </div>

      <!-- =====================================================================
           ENGINEERING PROJECTS — SolidWorks / mechanical / embedded showcase.
           -----------------------------------------------------------------------
           Each card = description + badges + a link, followed by an <img> image
           frame (CAD render / photo / manufacturing shot).

           ADDING YOUR OWN IMAGES: drop the file at the EXACT path written in the
           <img src="…">  below (e.g. images/projects/robotic-arm.jpg) — just
           create the images/projects/ folder next to index.html and put the
           file there with that exact name. Until the file exists, the frame
           shows a dashed placeholder with the expected path so it's obvious
           where each image goes. No other code changes needed.
           ===================================================================== -->
      <section class="stack eng-projects">
        <h2 style="margin-bottom:.25rem">
          <span class="nf">&#xf013;</span><span data-i18n="proj.engTitle">Designs</span>
        </h2>
        <p data-i18n="proj.engIntro">A showcase of SolidWorks work and embedded systems.</p>

        <div class="grid-2">

          <!-- 4-DOF Robotic Arm -->
          <article box-="square" shear-="top" class="stack">
            <div class="box-title"><span class="nf">&#xf013;</span><span data-i18n="proj.armTitle">Smart Robotic Arm (4-DOF)</span></div>
            <p data-i18n="proj.armDesc">Full mechanical design and manufacturing in SolidWorks using 3D printing, with ESP32-based firmware for wireless control.</p>
            <div class="cluster">
              <span is-="badge" variant-="hl-blue"><span class="nf">&#xf013;</span>SolidWorks</span>
              <span is-="badge" variant-="hl-orange"><span class="nf">&#xf013;</span>3D Printing</span>
              <span is-="badge" variant-="hl-red"><span class="nf">&#xf013;</span>ESP32</span>
            </div>
            <div class="card-actions">
              <a is-="button" box-="round" href="#" data-i18n="proj.view3d">[ View 3D Design ]</a>
            </div>
            <!-- IMAGE PLACEHOLDER — put your render at images/projects/robotic-arm.jpg -->
            <figure class="eng-figure eng-figure--cyan">
              <img src="images/projects/robotic-arm.jpg"
                   alt="4-DOF robotic arm — SolidWorks render"
                   loading="lazy"
                   onerror="this.style.display='none'; this.closest('figure').classList.add('eng-figure--empty')" />
              <figcaption class="eng-figure__hint">
                <span class="nf">&#xf03e;</span>
                <span data-i18n="proj.imgHint">Drop the image here:</span>
                <code>images/projects/robotic-arm.jpg</code>
              </figcaption>
            </figure>
          </article>

          <!-- IoT Tracker Enclosure -->
          <article box-="square" shear-="top" class="stack">
            <div class="box-title"><span class="nf">&#xf013;</span><span data-i18n="proj.iotTitle">Smart Tracker Enclosure (IoT)</span></div>
            <p data-i18n="proj.iotDesc">Engineering design for a custom outer enclosure protecting the electronics, accounting for ventilation and button clearance.</p>
            <div class="cluster">
              <span is-="badge" variant-="hl-blue"><span class="nf">&#xf013;</span>SolidWorks</span>
              <span is-="badge" variant-="hl-cyan"><span class="nf">&#xf013;</span>IoT</span>
              <span is-="badge" variant-="hl-purple"><span class="nf">&#xf013;</span>C++</span>
            </div>
            <div class="card-actions">
              <a is-="button" box-="round" href="#" data-i18n="proj.readProcess">[ Read About the Manufacturing Process ]</a>
            </div>
            <!-- IMAGE PLACEHOLDER — put your render at images/projects/iot-tracker.jpg -->
            <figure class="eng-figure eng-figure--orange">
              <img src="images/projects/iot-tracker.jpg"
                   alt="IoT tracker enclosure — SolidWorks render"
                   loading="lazy"
                   onerror="this.style.display='none'; this.closest('figure').classList.add('eng-figure--empty')" />
              <figcaption class="eng-figure__hint">
                <span class="nf">&#xf03e;</span>
                <span data-i18n="proj.imgHint">Drop the image here:</span>
                <code>images/projects/iot-tracker.jpg</code>
              </figcaption>
            </figure>
          </article>

        </div>
      </section>

      <!-- FOOTER with quick contact links (same as the other pages). Swap the
           email, tel: number and wa.me number for the real ones. -->
      <footer class="site-footer">
        <hr is-="separator" />
        <p>
          <span data-i18n="footer.reach">Reach me</span>:
          <a href="/cdn-cgi/l/email-protection#1c7b6e79796875727b6f327a736e7b795c6c6e73687372327179"><span class="nf">&#xf0e0;</span>&nbsp;Email</a>
          &nbsp;·&nbsp;
          <a href="tel:+9647712488377"><span class="nf">&#xf095;</span>&nbsp;+964&nbsp;771&nbsp;248&nbsp;8377</a>
          &nbsp;·&nbsp;
          <a href="https://wa.me/9647712488377" target="_blank" rel="noopener"><span class="nf">&#xf232;</span>&nbsp;WhatsApp</a>
        </p>
      </footer>
    </main>
  </div>


  <!-- ===================================================================== -->
  <!-- DOCUMENTATION MODALS (native <dialog>; opened by the Docs buttons)     -->
  <!-- ===================================================================== -->
  <dialog id="doc-pcalc">
    <div box-="double" class="stack" style="padding:1rem">
      <div class="dialog__head">
        <h2><span class="nf">&#xf120;</span>pcalc — docs</h2>
        <button is-="button" size-="small" data-close aria-label="Close">✕</button>
      </div>
      <hr is-="separator" />
      <p>pcalc evaluates arithmetic expressions straight from the shell.</p>
      <pre is-="pre">$ pcalc "3 * (4 + 2) / 2"
9</pre>
      <p>Supports + - * / %, parentheses, and floating point. Build with CMake:</p>
      <pre is-="pre">cmake -B build &amp;&amp; cmake --build build</pre>
    </div>
  </dialog>

  <dialog id="doc-potatoly">
    <div box-="double" class="stack" style="padding:1rem">
      <div class="dialog__head">
        <h2><span class="nf">&#xf120;</span>Potatoly — docs</h2>
        <button is-="button" size-="small" data-close aria-label="Close">✕</button>
      </div>
      <hr is-="separator" />
      <p>A tiny ASCII companion that idles in a terminal pane and reacts over time.</p>
      <pre is-="pre">$ potatoly --spud
  ( ^_^ )   feed me with `potatoly feed`</pre>
      <p>Runs anywhere with a standard C++17 toolchain.</p>
    </div>
  </dialog>

  <dialog id="doc-proot">
    <div box-="double" class="stack" style="padding:1rem">
      <div class="dialog__head">
        <h2><span class="nf">&#xf0ac;</span>p-Root — docs</h2>
        <button is-="button" size-="small" data-close aria-label="Close">✕</button>
      </div>
      <hr is-="separator" />
      <p>A no-build static site. Drop the files on any static host and you're done.</p>
      <pre is-="pre">python -m http.server   # local preview</pre>
    </div>
  </dialog>

  <dialog id="doc-clock">
    <div box-="double" class="stack" style="padding:1rem">
      <div class="dialog__head">
        <h2><span class="nf">&#xf017;</span>ESP32 Desk Clock — docs</h2>
        <button is-="button" size-="small" data-close aria-label="Close">✕</button>
      </div>
      <hr is-="separator" />
      <p>Drives a MAX7219 dot-matrix display and streams audio over A2DP Bluetooth.</p>
      <pre is-="pre">Board:   ESP32-WROOM-32
Display: 4x MAX7219 8x8
Audio:   A2DP sink -> I2S DAC</pre>
      <p>Flash with the Arduino/PlatformIO toolchain.</p>
    </div>
  </dialog>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>
</html>
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
