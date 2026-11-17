/* ==========================================================================
   PLUTO SHARED LAYOUT  —  components/layout.js
   --------------------------------------------------------------------------
   This ONE file holds the navigation bar, the "let's work together" CTA and
   the footer for every page. Edit it here and every page updates.

   HOW PAGES USE IT (one line per part, placed where the part should appear):

     <script src="components/layout.js"    data-part="nav"></script>     (root pages)
     <script src="../components/layout.js" data-part="nav"></script>     (pages in a sub-folder)

   data-part can be:  "nav"  |  "cta"  |  "footer"

   All links below are written relative to the website's main folder, so they
   work from any page no matter how deep it sits in the folders.
   ========================================================================== */
(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  /* Main folder of the website, worked out from where this file was loaded. */
  var ROOT = script.src.replace(/components\/layout\.js(\?.*)?(#.*)?$/, '');

  /* ------------------------------------------------------------------------
     1. LINKS — change a destination here and it changes everywhere
     ------------------------------------------------------------------------ */
  var LINKS = {
    home:          ROOT + 'index.html',
    aboutUs:       ROOT + 'About us.html',
    contact:       ROOT + 'contact-us.html',
    work:          ROOT + 'our_work.html',
    webDesign:     ROOT + 'Services/web_design_and_development.html',
    eCommerce:     ROOT + 'Services/ecommerce.html',
    leadGen:       ROOT + 'Services/lead_generation.html',
    customSoft:    ROOT + 'Services/custom_software_development.html',
    education:     ROOT + 'Services/education_suite.html',
    accessibility: ROOT + 'Benefits/accessibility_page.html',
    mobileDash:    ROOT + 'Benefits/mobile_dashboard.html',
    security:      ROOT + 'Benefits/security_page.html',
    terms:         ROOT + 'Terms of Service.html', 
    privacy:       ROOT + 'Privacy Policy.html',
    caseStudies:   ROOT + 'our_work.html#our-work',
    demos:         ROOT + 'our_work.html#demo' 
  };
  var LOGO = ROOT + 'components/pluto-logo.png';

  /* ------------------------------------------------------------------------
     2. STYLES (injected once per page)
     ------------------------------------------------------------------------ */
  var CSS = [
    /* ---- Global font (Inter is loaded from Google Fonts in section 5) ---- */
    'body{font-family:Inter,system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif}',

    /* ---- Navigation bar ---- */
    '.pluto-nav,.pluto-nav *{box-sizing:border-box;margin:0}',
    '.pluto-nav{position:sticky;top:0;z-index:1000;background:rgba(14,11,31,.88);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-bottom:1px solid transparent;transition:border-color .3s;color:#f3f1ff;font:16px/1.65 Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.pluto-nav.pn-scrolled{border-color:#2a2550}',
    '.pn-in{max-width:1180px;margin:0 auto;padding:0 24px;height:68px;display:flex;align-items:center;gap:28px}',
    '.pn-logo{display:block;height:45px;width:auto;filter:brightness(0) invert(1)}',
    '.pn-menu{list-style:none;padding:0;display:flex;gap:26px;margin-left:auto;align-items:center}',
    '.pn-menu li{position:relative;font-weight:600;font-size:15px}',
    '.pn-menu a,.pn-sv{color:inherit;text-decoration:none}',
    '.pn-hl{position:relative;display:inline-block;background:none;border:0;font:inherit;cursor:pointer;color:inherit;transition:color .25s}',
    '.pn-hl::after{content:"";position:absolute;left:0;bottom:-4px;height:2px;width:100%;background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.7,.2,1)}',
    '.pn-hl:hover,.pn-item.pn-open>.pn-hl{color:#7b68ee}',
    '.pn-hl:hover::after,.pn-item.pn-open>.pn-hl::after{transform:scaleX(1)}',
    '.pn-dd{position:absolute;top:100%;left:-16px;min-width:290px;background:#1a1538;border:1px solid #2a2550;border-radius:14px;padding:8px;box-shadow:0 20px 50px rgba(0,0,0,.45);opacity:0;visibility:hidden;transform:translateY(8px);transition:.25s}',
    '.pn-item:hover .pn-dd,.pn-item:focus-within .pn-dd,.pn-item.pn-open .pn-dd{opacity:1;visibility:visible;transform:none}',
    '.pn-dd a{display:flex;align-items:center;gap:12px;padding:9px 12px;border-radius:12px;color:#f3f1ff;font-weight:600;transition:background .25s,color .25s}',
    '.pn-dd a:hover{background:#15112e;color:#7b68ee}',
    '.pn-dd svg{width:36px;height:36px;padding:8px;border-radius:11px;background:#15112e;fill:none;stroke:#7b68ee;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none;transition:.3s}',
    '.pn-dd a:hover svg{background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);stroke:#fff;transform:rotate(-8deg) scale(1.1)}',
    '.pn-btn{display:inline-block;padding:13px 26px;border-radius:12px;font-weight:700;font-size:16px;color:#fff;text-decoration:none;background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);background-size:200% 100%;box-shadow:0 10px 28px rgba(123,104,238,.35);transition:.4s}',
    '.pn-btn:hover{background-position:100% 0;transform:translateY(-2px);box-shadow:0 14px 34px rgba(255,2,240,.3)}',
    /* ---- Mobile menu (hamburger) — only appears at tablet/phone widths, desktop is untouched ---- */
    '.pn-burger{display:none;flex:none;width:44px;height:44px;padding:0;border:1px solid #2a2550;border-radius:12px;background:#15112e;color:#f3f1ff;cursor:pointer;align-items:center;justify-content:center;-webkit-tap-highlight-color:transparent}',
    '.pn-burger span,.pn-burger span::before,.pn-burger span::after{display:block;width:20px;height:2px;border-radius:2px;background:currentColor;transition:transform .25s,background .25s,top .25s}',
    '.pn-burger span{position:relative}',
    '.pn-burger span::before,.pn-burger span::after{content:\"\";position:absolute;left:0}',
    '.pn-burger span::before{top:-6px}.pn-burger span::after{top:6px}',
    '.pn-mopen .pn-burger span{background:transparent}',
    '.pn-mopen .pn-burger span::before{top:0;transform:rotate(45deg)}',
    '.pn-mopen .pn-burger span::after{top:0;transform:rotate(-45deg)}',
    '.pn-mob{display:none;position:absolute;top:100%;left:0;right:0;max-height:calc(100vh - 68px);max-height:calc(100dvh - 68px);overflow-y:auto;-webkit-overflow-scrolling:touch;background:#0e0b1f;border-bottom:1px solid #2a2550;box-shadow:0 24px 40px rgba(0,0,0,.45);padding:8px 16px 24px}',
    '.pn-mob a{display:flex;align-items:center;gap:12px;padding:13px 12px;border-radius:12px;color:#f3f1ff;text-decoration:none;font-weight:600;font-size:16px;-webkit-tap-highlight-color:transparent}',
    '.pn-mob a:active,.pn-mob a:focus-visible{background:#15112e;color:#7b68ee;outline:none}',
    '.pn-mob svg{width:36px;height:36px;padding:8px;border-radius:11px;background:#15112e;fill:none;stroke:#7b68ee;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}',
    '.pn-mob-title{display:block;margin:14px 12px 6px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#7b68ee}',
    '.pn-mob-sep{height:1px;margin:10px 12px;background:#2a2550}',
    '@media(max-width:860px){.pn-menu{display:none}.pn-in{gap:12px;padding:0 16px}.pn-btn{margin-left:auto;padding:11px 20px;font-size:15px}.pn-burger{display:inline-flex}.pn-mopen .pn-mob{display:block}}',
    '@media(max-width:380px){.pn-logo{height:38px}.pn-in{gap:8px;padding:0 12px}.pn-btn{padding:10px 14px;font-size:14px}}',

    /* ---- "Let's work together" CTA (always dark, so it reads the same on every page) ---- */
    '.pluto-cta{position:relative;display:block;box-sizing:border-box;width:calc(100% - 48px);max-width:1180px;margin:80px auto 20px;padding:100px 48px;border-radius:24px;background:#1a1538;border:1px solid #2a2550;overflow:hidden;color:#f3f1ff;text-decoration:none;cursor:pointer;box-shadow:0 20px 50px rgba(14,11,31,.4);transition:border-color .4s ease,box-shadow .4s ease;font-family:Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '.pluto-cta:hover{border-color:#7b68ee;box-shadow:0 30px 70px rgba(123,104,238,.25)}',
    '.pluto-cta::before{content:"";position:absolute;inset:0 0 auto 0;height:4px;background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.2,.7,.2,1)}',
    '.pluto-cta:hover::before{transform:scaleX(1)}',
    '.pluto-cta-bg-glow{position:absolute;inset:-100px;background:radial-gradient(circle at 50% 50%,rgba(255,2,240,.12),rgba(123,104,238,.08),transparent 60%);opacity:0;transition:opacity .5s ease;pointer-events:none}',
    '.pluto-cta:hover .pluto-cta-bg-glow{opacity:1}',
    '.pluto-cta-wrapper{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:32px}',
    '.pluto-cta-info{max-width:600px}',
    '.pluto-cta-heading{margin:0 0 12px;font-size:clamp(32px,4.5vw,54px);font-weight:900;line-height:1.08;letter-spacing:-.035em;background:linear-gradient(90deg,#ffffff,#f3f1ff);-webkit-background-clip:text;background-clip:text;color:transparent;transition:transform .4s cubic-bezier(.2,.7,.2,1)}',
    '.pluto-cta:hover .pluto-cta-heading{transform:translateX(8px)}',
    '.pluto-cta-description p{color:#a9a5c8;font-size:18px;margin:4px 0;font-weight:500;transition:color .3s ease}',
    '.pluto-cta:hover .pluto-cta-description p{color:#f3f1ff}',
    '.pluto-cta-circle-wrapper{position:absolute;top:0;left:0;width:80px;height:80px;border-radius:50%;background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:3;opacity:0;transform:translate(-50%,-50%) scale(0);transition:opacity .3s ease,transform .4s cubic-bezier(.175,.885,.32,1.275);box-shadow:0 10px 30px rgba(255,2,240,.4)}',
    '.pluto-cta-circle-wrapper svg{width:28px;height:28px;stroke:#fff;stroke-width:2.5;fill:none;stroke-linecap:round;stroke-linejoin:round;transition:transform .3s ease}',
    '@media(max-width:768px){.pluto-cta{padding:40px 24px;margin-top:40px}.pluto-cta-wrapper{flex-direction:column;align-items:flex-start}.pluto-cta-circle-wrapper{display:none}}',

    /* ---- Footer ---- */
    '.pluto-footer,.pluto-footer *{box-sizing:border-box;margin:0}',
    '.pluto-footer{background:#0e0b1f;color:#f3f1ff;padding:70px 24px 40px;font:16px/1.65 Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;margin-top:60px;margin-bottom:0!important}',
    '.pf-in{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:2fr 1fr 1fr 1fr 1fr;gap:40px;align-items:start}',
    '.pf-title{display:block;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#7b68ee;margin-bottom:16px}',
    '.pf-in ul{list-style:none;padding:0;display:grid;gap:10px;font-weight:500;color:#a9a5c8}',
    '.pf-in a{color:inherit;text-decoration:none}',
    '.pf-hl{position:relative;display:inline-block;transition:color .25s}',
    '.pf-hl::after{content:"";position:absolute;left:0;bottom:-4px;height:2px;width:100%;background:linear-gradient(120deg,#7b68ee,#ff02f0 70%,#ffc800);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.2,.7,.2,1)}',
    '.pf-hl:hover{color:#f3f1ff}',
    '.pf-hl:hover::after{transform:scaleX(1)}',
    '.pf-copy{grid-column:1/-1;border-top:1px solid #2a2550;padding-top:24px;margin-top:20px;color:#a9a5c8;text-align:center}',
    '@media(max-width:992px){.pf-in{grid-template-columns:1fr 1fr; gap:40px 20px;}}',
    '@media(max-width:600px){.pluto-footer{padding:56px 20px 32px}.pf-in{grid-template-columns:1fr 1fr;gap:32px 16px}.pf-in>div:first-child{grid-column:1/-1}}'
  ].join('\n');

  /* ------------------------------------------------------------------------
     3. MARKUP
     ------------------------------------------------------------------------ */
  /* Services shown in the nav: [link, icon, label] — used by BOTH the desktop dropdown and the mobile menu */
  var SERVICE_ITEMS = [
    [LINKS.webDesign,  '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18M8 21h8M12 18v3"/></svg>', 'Web Development'],
    [LINKS.eCommerce,  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>', 'eCommerce Websites'],
    [LINKS.leadGen,    '<svg viewBox="0 0 24 24"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>', 'Lead Generation'],
    [LINKS.customSoft, '<svg viewBox="0 0 24 24"><path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/></svg>', 'Custom Software Solutions'],
    [LINKS.education,  '<svg viewBox="0 0 24 24"><path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2.5 9 2.5 12 0v-5"/></svg>', 'Education Suite']
  ];
  var SERVICE_LINKS = SERVICE_ITEMS.map(function (i) {
    return '<a href="' + i[0] + '">' + i[1] + i[2] + '</a>';
  }).join('');

  var NAV =
    '<nav class="pluto-nav" id="plutoNav">' +
      '<div class="pn-in">' +
        '<a href="' + LINKS.home + '" aria-label="Pluto"><img class="pn-logo" src="' + LOGO + '" alt="Pluto"></a>' +
        '<ul class="pn-menu">' +
          '<li class="pn-item">' +
            '<button class="pn-hl" type="button" aria-haspopup="true">Services ▾</button>' +
            '<div class="pn-dd">' + SERVICE_LINKS + '</div>' +
          '</li>' +
          '<li class="pn-hide"><a class="pn-hl" href="' + LINKS.work + '">Our Work</a></li>' +
          '<li class="pn-hide"><a class="pn-hl" href="' + LINKS.aboutUs + '">About Us</a></li>' +
        '</ul>' +
        '<a class="pn-btn" href="' + LINKS.contact + '">Let’s Talk</a>' +
        '<button class="pn-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="plutoMobileMenu"><span></span></button>' +
      '</div>' +
      '<div class="pn-mob" id="plutoMobileMenu">' +
        '<span class="pn-mob-title">Services</span>' + SERVICE_LINKS +
        '<div class="pn-mob-sep"></div>' +
        '<a href="' + LINKS.work + '">Our Work</a>' +
        '<a href="' + LINKS.aboutUs + '">About Us</a>' +
      '</div>' +
    '</nav>';

  var CTA =
    '<a href="' + LINKS.contact + '" class="pluto-cta js-pluto-cta">' +
      '<div class="pluto-cta-bg-glow"></div>' +
      '<div class="pluto-cta-wrapper">' +
        '<div class="pluto-cta-info"><h2 class="pluto-cta-heading">let’s work together</h2></div>' +
        '<div class="pluto-cta-description"><p>Elevate your brand.</p><p>Drive traffic that converts!</p></div>' +
      '</div>' +
      '<div class="pluto-cta-circle-wrapper js-cta-circle">' +
        '<svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>' +
      '</div>' +
    '</a>';

  var FOOTER =
    '<footer class="pluto-footer">' +
      '<div class="pf-in">' +
        
        '<div>' +
          '<a href="' + LINKS.home + '" style="display:inline-block; margin-bottom:20px;"><img src="' + LOGO + '" alt="Pluto Logo" style="height:45px; filter:brightness(0) invert(1);"></a>' +
          '<ul>' +
            '<li>Tel: 123-456-7890</li>' +
            '<li>Email: <a href="mailto:info@mysite.com">info@mysite.com</a></li>' +
            '<li>500 Terry Francine St<br>San Francisco, CA 94158</li>' +
          '</ul>' +
        '</div>' +
        
        '<div>' +
          '<span class="pf-title">Company</span>' +
          '<ul>' +
            '<li><a class="pf-hl" href="' + LINKS.home + '">Home</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.aboutUs + '">About Us</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.contact + '">Contact Us</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.terms + '">Terms of Service</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.privacy + '">Privacy Policy</a></li>' +
          '</ul>' +
        '</div>' +

        '<div>' +
          '<span class="pf-title">Services</span>' +
          '<ul>' +
            '<li><a class="pf-hl" href="' + LINKS.webDesign + '">Web Development</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.eCommerce + '">eCommerce</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.leadGen + '">Lead Generation</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.customSoft + '">Custom Software</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.education + '">Education Suite</a></li>' +
          '</ul>' +
        '</div>' +

        '<div>' +
          '<span class="pf-title">Benefits</span>' +
          '<ul>' +
            '<li><a class="pf-hl" href="' + LINKS.accessibility + '">Accessibility</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.mobileDash + '">Mobile Dashboard</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.security + '">Security</a></li>' +
          '</ul>' +
        '</div>' +

        '<div>' +
          '<span class="pf-title">Our Work</span>' +
          '<ul>' +
            '<li><a class="pf-hl" href="' + LINKS.work + '">All Portfolio</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.caseStudies + '">Case Studies</a></li>' +
            '<li><a class="pf-hl" href="' + LINKS.demos + '">Demo Websites</a></li>' +
          '</ul>' +
        '</div>' +

        '<div class="pf-copy">' +
          '<span>© ' + new Date().getFullYear() + ' by Pluto. All rights reserved.</span>' +
        '</div>' +

      '</div>' +
    '</footer>';

  /* ------------------------------------------------------------------------
     4. BEHAVIOUR
     ------------------------------------------------------------------------ */
  function initNav() {
    var nav = document.getElementById('plutoNav');
    if (!nav) return;
    var sv = nav.querySelector('.pn-item');
    var burger = nav.querySelector('.pn-burger');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('pn-scrolled', window.scrollY > 10);
    }, { passive: true });
    sv.querySelector('button').addEventListener('click', function (e) {
      e.stopPropagation();
      sv.classList.toggle('pn-open');
    });

    /* Mobile menu */
    function setMenu(open) {
      nav.classList.toggle('pn-mopen', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      setMenu(!nav.classList.contains('pn-mopen'));
    });
    nav.querySelector('.pn-mob').addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('click', function (e) {
      sv.classList.remove('pn-open');
      if (!nav.contains(e.target)) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { setMenu(false); sv.classList.remove('pn-open'); }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) setMenu(false);
    });
  }

  /* Glow circle that follows the cursor inside the CTA */
  function initCta() {
    var cta = document.querySelector('.js-pluto-cta');
    var circle = document.querySelector('.js-cta-circle');
    if (!cta || !circle) return;

    var mouseX = 0, mouseY = 0, circleX = 0, circleY = 0, isHovered = false;

    (function animate() {
      if (isHovered) {
        circleX += (mouseX - circleX) * 0.15;
        circleY += (mouseY - circleY) * 0.15;
        circle.style.left = circleX + 'px';
        circle.style.top = circleY + 'px';
      }
      requestAnimationFrame(animate);
    })();

    cta.addEventListener('mouseenter', function (e) {
      isHovered = true;
      var r = cta.getBoundingClientRect();
      circleX = e.clientX - r.left;
      circleY = e.clientY - r.top;
      circle.style.opacity = '1';
      circle.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    cta.addEventListener('mousemove', function (e) {
      var r = cta.getBoundingClientRect();
      mouseX = e.clientX - r.left;
      mouseY = e.clientY - r.top;
    });
    cta.addEventListener('mouseleave', function () {
      isHovered = false;
      circle.style.opacity = '0';
      circle.style.transform = 'translate(-50%, -50%) scale(0)';
    });
  }

  /* ------------------------------------------------------------------------
     5. PUT THE REQUESTED PART ON THE PAGE (right where the <script> tag is)
     ------------------------------------------------------------------------ */
  /* Google Font "Inter" — added to <head> once per page, even though this
     script runs several times (nav, cta, footer). */
  if (!document.getElementById('pluto-font-inter')) {
    var FONT_HREF = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';

    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.googleapis.com"]')) {
      var pc1 = document.createElement('link');
      pc1.rel = 'preconnect';
      pc1.href = 'https://fonts.googleapis.com';
      document.head.appendChild(pc1);
    }
    if (!document.querySelector('link[rel="preconnect"][href="https://fonts.gstatic.com"]')) {
      var pc2 = document.createElement('link');
      pc2.rel = 'preconnect';
      pc2.href = 'https://fonts.gstatic.com';
      pc2.setAttribute('crossorigin', 'anonymous');
      document.head.appendChild(pc2);
    }

    var fontLink = document.createElement('link');
    fontLink.id = 'pluto-font-inter';
    fontLink.rel = 'stylesheet';
    fontLink.href = FONT_HREF;
    document.head.appendChild(fontLink);
  }

  if (!document.getElementById('pluto-layout-css')) {
    var style = document.createElement('style');
    style.id = 'pluto-layout-css';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  var part = (script.getAttribute('data-part') || '').toLowerCase();
  if (part === 'nav')    { script.insertAdjacentHTML('beforebegin', NAV);    initNav(); }
  if (part === 'cta')    { script.insertAdjacentHTML('beforebegin', CTA);    initCta(); }
  if (part === 'footer') { script.insertAdjacentHTML('beforebegin', FOOTER); }

  /* Headings: keep every h1/h2 to 2 lines on desktop. Standard size is used whenever it fits;
     only a heading that would wrap to 3+ lines is stepped down until it fits (never below 28px).
     Phones/tablets (<=860px) are not touched. Add data-fit to a heading to opt out. */
  if (!window.__plutoFit) {
    window.__plutoFit = true;
    var fitAll = function () {
      var hs = document.querySelectorAll('h1,h2');
      for (var i = 0; i < hs.length; i++) {
        var h = hs[i];
        if (h.hasAttribute('data-fit') || (h.tagName === 'H2' && document.documentElement.hasAttribute('data-uniform-h2')) || h.closest('.pluto-nav,.pluto-footer,.pluto-cta,#lb')) continue;
        h.style.fontSize = '';
        if (window.innerWidth <= 860 || h.offsetParent === null) continue;
        var fs = parseFloat(getComputedStyle(h).fontSize);
        while (fs > 28) {
          var lh = parseFloat(getComputedStyle(h).lineHeight) || fs * 1.2;
          if (Math.round(h.getBoundingClientRect().height / lh) <= 2) break;
          fs -= 2; h.style.fontSize = fs + 'px';
        }
      }
    };
    var t;
    var later = function () { clearTimeout(t); t = setTimeout(fitAll, 80); };
    document.addEventListener('DOMContentLoaded', fitAll);
    window.addEventListener('load', fitAll);
    window.addEventListener('resize', later);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitAll);
  }
})();