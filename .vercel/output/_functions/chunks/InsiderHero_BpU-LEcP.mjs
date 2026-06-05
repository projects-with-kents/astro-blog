import { c as createComponent } from './astro-component_BJDsSDMu.mjs';
import 'piccolore';
import { x as createRenderInstruction, m as maybeRenderHead, k as renderTemplate, h as addAttribute, v as renderComponent, y as renderHead, w as renderSlot } from './entrypoint_mwA_FHb5.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$AnnouncementBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$AnnouncementBar;
  const { enabled, items } = Astro2.props;
  return renderTemplate`${enabled && renderTemplate`${maybeRenderHead()}<div id="announcement-bar" style="height: var(--announcement-height, 40px);" class="fixed top-0 left-0 right-0 z-[60] bg-[var(--color-overlay)] text-white text-sm flex items-center overflow-hidden transition-all duration-300"><div class="container mx-auto px-4 flex items-center justify-center gap-3">${items.map((item) => renderTemplate`<p class="flex items-center gap-1.5">${item.emoji && renderTemplate`<span aria-hidden="true">${item.emoji}</span>`}<span>${item.text}</span>${item.emoji && renderTemplate`<span aria-hidden="true">${item.emoji}</span>`}${item.link && renderTemplate`<a${addAttribute(item.link.url, "href")} class="underline ml-1 hover:text-secondary transition-colors">${item.link.label}</a>`}</p>`)}</div><button id="close-announcement" aria-label="Close announcement" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-xl leading-none">
×
</button></div>`}${renderScript($$result, "D:/AstroVeb/src/components/AnnouncementBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AstroVeb/src/components/AnnouncementBar.astro", void 0);

const $$LogoSVG = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LogoSVG;
  const { class: className = "", "aria-label": ariaLabel = "VetCare logo" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"${addAttribute(ariaLabel, "aria-label")} role="img"${addAttribute(className, "class")}> <path d="M163.916 30.4658L164.459 30.7185C165.329 32.9593 165.109 47.976 165.151 51.0713C165.203 54.2398 165.345 57.4063 165.577 60.5668C171.99 55.4215 176.393 50.3895 183.786 45.8908C182.562 53.3353 178.679 62.6138 179.846 69.9863C181.089 77.835 195.005 82.3365 199.659 88.6355C203.164 93.3795 204.462 99.7328 206.367 105.046C208.546 111.121 219.382 122.59 224.555 126.27C223.363 134.271 218.447 143.817 213.872 150.534C207.203 160.323 193.013 159.61 182.298 160.744C173.171 161.709 168.907 167.558 169.886 176.81C172.119 190.309 194.455 193.322 205.101 196.451C227.194 202.944 247.34 210.149 266.15 223.628C298.399 246.738 320.082 282.117 330.797 319.93C334.259 332.13 335.737 342.852 337.682 355.207C333.384 354.952 327.519 355.122 323.129 355.122L296.947 355.132L103.653 355.21C102.051 349.212 98.2902 342.332 95.4947 336.79C82.8217 311.66 64.7261 288.182 56.209 261.095C45.2728 226.314 49.3178 188.341 62.5812 154.804C73.8352 126.348 89.0504 98.6203 111.866 77.6985C120.218 69.9835 129.04 63.0995 137.955 56.098C140.331 54.2323 142.761 49.9455 144.945 47.6803C150.578 41.8358 156.409 33.7786 163.916 30.4658Z" fill="currentColor"></path> <path d="M428.664 195.132C435.232 193.999 443.154 197.146 447.047 202.605C454.022 212.389 447.807 219.738 440.557 226.634C437.617 229.432 434.519 233.237 431.739 236.274C406.952 266.171 420.362 307.472 418.764 342.575C418.574 346.777 417.997 350.977 417.359 355.127C411.409 355.217 405.459 355.24 399.509 355.19L377.144 355.072C379.527 347.2 379.387 336.102 379.387 327.937C379.399 320.082 379.227 312.23 378.864 304.382C378.339 292.875 377.659 281.877 378.307 270.29C379.882 242.196 396.642 199.775 428.664 195.132Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M362.257 393.402C368.347 392.455 377.944 393.515 382.754 397.644C386.379 400.704 387.812 405.148 388.1 409.763C388.965 423.66 385.314 431.797 370.359 432.877C359.134 434.279 345.762 431.642 344.702 418.167C343.535 403.347 346.122 394.967 362.257 393.402ZM374.097 404.58C371.589 403.005 366.744 402.793 363.892 403.138C357.509 403.818 356.019 405.052 355.222 411.63C354.077 421.06 359.684 424.74 369.012 423.335C375.124 422.352 377.374 420.65 377.382 413.952C377.384 410.347 377.637 406.805 374.097 404.58Z" fill="currentColor"></path> <path d="M319.847 394.41C323.409 394.27 326.974 394.255 330.539 394.367C330.592 398.18 330.789 431.062 330.284 431.862C326.684 431.942 323.079 431.917 319.482 431.787C314.452 424.725 305.689 415.857 301.339 408.922C301.152 416.54 301.189 424.352 301.109 431.995C297.819 431.817 293.86 431.862 290.509 431.822C290.337 419.912 290.32 406.225 290.599 394.36C294.051 394.242 297.804 394.3 301.279 394.29C302.364 395.95 305.622 399.785 307.002 401.487L319.874 417.155C319.472 410.347 319.782 401.375 319.847 394.41Z" fill="currentColor"></path> <path d="M166.773 394.407C168.9 394.327 171.042 394.29 173.171 394.31C183.008 394.412 192.912 394.115 202.739 394.38C202.784 397.595 202.775 400.81 202.711 404.025L177.281 404.037C177.211 405.58 177.239 407.2 177.243 408.75C178.796 408.6 182.396 408.715 184.075 408.725L197.226 408.795L197.175 418.24L183.337 418.247H177.305L177.279 422.51L202.775 422.547C202.795 425.645 202.764 428.742 202.682 431.84C191.223 432.11 178.072 432.015 166.606 431.822L166.56 409.53C166.556 404.687 166.468 399.207 166.773 394.407Z" fill="currentColor"></path> <path d="M177.417 464.327C209.351 463.895 242.251 464.302 274.253 464.302L307.054 464.3L315.877 464.295C318.254 464.272 323.997 463.21 323.082 467.685C322.892 468.612 322.827 468.845 322.082 469.312C312.112 469.715 300.417 469.447 290.294 469.445L233.183 469.437L198.069 469.445C192.739 469.452 187.41 469.47 182.081 469.482C180.111 469.487 177.211 469.752 176.272 467.687C176.143 466.24 176.59 465.485 177.417 464.327Z" fill="currentColor"></path> <path d="M144.779 394.302C147.875 394.277 151.696 394.197 154.72 394.49C154.455 397.827 153.594 399.392 152.198 402.367C147.348 411.995 142.703 422.145 138.173 431.947L127.242 431.977C126.449 429.632 123.789 424.42 122.652 422.047L115.165 406.155C113.387 402.4 111.034 398.547 111.035 394.357C114.159 394.252 117.559 394.307 120.705 394.3C122.054 397.82 124.084 402.05 125.657 405.552C128.072 410.925 130.443 416.315 132.77 421.727C135.98 413.347 141.095 402.765 144.779 394.302Z" fill="currentColor"></path> <path d="M214.318 394.34C226.995 394.065 241.074 394.242 253.792 394.345C253.808 397.57 253.804 400.795 253.778 404.022L239.342 404.047L239.311 418.172C239.343 422.765 239.322 427.357 239.25 431.95L228.649 431.822C228.807 429.76 228.636 426.312 228.673 424.14C228.785 417.55 228.468 410.632 228.743 404.072C224.044 404.06 219.004 404.135 214.336 403.907C214.28 400.717 214.275 397.53 214.318 394.34Z" fill="currentColor"></path> <path d="M265.878 394.327C269.363 394.307 272.849 394.305 276.334 394.322C276.402 401.902 276.409 409.485 276.354 417.067C276.356 422.097 276.519 426.875 276.404 431.932C272.971 431.825 269.371 431.95 265.853 431.862C265.472 420.405 265.679 405.867 265.878 394.327Z" fill="currentColor"></path> </svg>`;
}, "D:/AstroVeb/src/components/LogoSVG.astro", void 0);

const logo = {"alt":"VetCare"};
const linksLeft = [{"label":"Home","href":"/"},{"label":"Services","href":"/services"},{"label":"About Us","href":"/about"}];
const linksRight = [{"label":"Contact Us","href":"/contact"},{"label":"Insider","href":"/insider"}];
const cta = {"label":"Book Now","href":"/book"};
const navData = {
  logo,
  linksLeft,
  linksRight,
  cta,
};

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { heroIsDark = false } = Astro2.props;
  const { linksLeft, linksRight, cta, logo } = navData;
  return renderTemplate`${maybeRenderHead()}<header id="navbar"${addAttribute(heroIsDark ? "true" : "false", "data-hero-dark")} class="fixed left-0 right-0 z-50 transition-all duration-300" data-astro-cid-5blmo7yk> <nav class="container mx-auto px-6 h-16 flex items-center justify-between relative" data-astro-cid-5blmo7yk> <!-- Left links --> <ul class="hidden md:flex items-center gap-7" data-astro-cid-5blmo7yk> ${linksLeft.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(link.href, "href")} class="nav-link text-sm font-medium transition-colors duration-300 hover:opacity-70" data-astro-cid-5blmo7yk> ${link.label} </a> </li>`)} </ul> <!-- Center: Logo --> <a href="/" class="absolute left-1/2 -translate-x-1/2 flex items-center"${addAttribute(logo.alt, "aria-label")} data-astro-cid-5blmo7yk> ${renderComponent($$result, "LogoSVG", $$LogoSVG, { "class": "nav-logo h-10 w-10 transition-colors duration-300", "data-astro-cid-5blmo7yk": true })} </a> <!-- Right links + CTA --> <div class="flex items-center gap-7" data-astro-cid-5blmo7yk> <ul class="hidden md:flex items-center gap-7" data-astro-cid-5blmo7yk> ${linksRight.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(link.href, "href")} class="nav-link text-sm font-medium transition-colors duration-300 hover:opacity-70" data-astro-cid-5blmo7yk> ${link.label} </a> </li>`)} </ul> <a${addAttribute(cta.href, "href")} class="cta-btn hidden md:inline-flex items-center gap-2 border text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-300" data-astro-cid-5blmo7yk> ${cta.label} </a> <!-- Mobile hamburger --> <button id="mobile-menu-btn" class="md:hidden p-2 nav-link" aria-label="Open menu" aria-expanded="false" data-astro-cid-5blmo7yk> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </nav> <!-- Mobile dropdown --> <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-border" data-astro-cid-5blmo7yk> <ul class="container mx-auto px-6 py-4 flex flex-col gap-4" data-astro-cid-5blmo7yk> ${[...linksLeft, ...linksRight].map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(link.href, "href")} class="text-foreground text-sm font-medium block py-1" data-astro-cid-5blmo7yk> ${link.label} </a> </li>`)} <li data-astro-cid-5blmo7yk> <a${addAttribute(cta.href, "href")} class="inline-flex items-center gap-2 border border-primary text-primary text-sm font-medium px-4 py-1.5 rounded-full" data-astro-cid-5blmo7yk> ${cta.label} </a> </li> </ul> </div> </header>  ${renderScript($$result, "D:/AstroVeb/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AstroVeb/src/components/Navbar.astro", void 0);

const brand = {"name":"VetCare","tagline":"Compassionate pet care with expert vets, groomers, and trainers you can trust.","address":"123 Paw Street, Pet City"};
const columns = [{"title":"Company","links":[{"label":"Home","href":"/"},{"label":"About Us","href":"/about"},{"label":"Services","href":"/services"},{"label":"Insider","href":"/insider"}]},{"title":"Support","links":[{"label":"Contact","href":"/contact"},{"label":"Book Now","href":"/book"},{"label":"FAQ","href":"/#faq"}]},{"title":"Follow","links":[{"label":"Instagram","href":"https://instagram.com"},{"label":"Facebook","href":"https://facebook.com"},{"label":"YouTube","href":"https://youtube.com"}]}];
const legal = {"copyrightText":"VetCare. All rights reserved.","links":[{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"}]};
const footerData = {
  brand,
  columns,
  legal,
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const data = footerData;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-overlay text-white/90 mt-24"> <div class="container mx-auto px-6 lg:px-10 py-14 lg:py-16"> <div class="grid gap-10 lg:grid-cols-[1.35fr_2fr] pb-12 border-b border-white/15"> <div> <a href="/" class="inline-flex items-center gap-2 mb-5"${addAttribute(data.brand.name, "aria-label")}> ${renderComponent($$result, "LogoSVG", $$LogoSVG, { "class": "h-10 w-10 text-secondary" })} <span class="font-medium text-lg text-white">${data.brand.name}</span> </a> ${renderTemplate`<p class="text-white/70 leading-relaxed max-w-md mb-4">${data.brand.tagline}</p>`} ${renderTemplate`<p class="text-white/60 text-sm">${data.brand.address}</p>`} </div> <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"> ${data.columns.map((column) => renderTemplate`<div> <h3 class="text-sm uppercase tracking-[0.16em] text-white/50 mb-4">${column.title}</h3> <ul class="space-y-2.5"> ${column.links.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-white/85 hover:text-secondary transition-colors"${addAttribute(link.href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(link.href.startsWith("http") ? "noreferrer noopener" : void 0, "rel")}> ${link.label} </a> </li>`)} </ul> </div>`)} </div> </div> <div class="pt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between"> <p class="text-sm text-white/55">© ${(/* @__PURE__ */ new Date()).getFullYear()} ${data.legal.copyrightText}</p> <ul class="flex flex-wrap gap-4 text-sm"> ${data.legal.links?.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-white/60 hover:text-secondary transition-colors"> ${link.label} </a> </li>`)} </ul> </div> </div> </footer>`;
}, "D:/AstroVeb/src/components/Footer.astro", void 0);

const enabled = true;
const items = [{"text":"Get 20% OFF on Your First Visit!","emoji":"","link":null}];
const announcementData = {
  enabled,
  items,
};

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "VetCare — Compassionate Care for Your Pets",
    description = "Professional veterinary services for your beloved companions.",
    heroIsDark = false
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><!-- Google Fonts: Commissioner (sans) + Cormorant Garamond (serif headings) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Commissioner:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&display=swap" rel="stylesheet"><title>${title}</title>${renderHead()}</head> <body> <!-- Fixed announcement bar --> ${renderComponent($$result, "AnnouncementBar", $$AnnouncementBar, { "enabled": announcementData.enabled, "items": announcementData.items })} <!-- Fixed navbar (aware of hero dark/light state) --> ${renderComponent($$result, "Navbar", $$Navbar, { "heroIsDark": heroIsDark })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "D:/AstroVeb/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/AstroVeb/src/layouts/Layout.astro", void 0);

const $$RichHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$RichHeading;
  const { text, as: Tag = "h2", class: className = "" } = Astro2.props;
  function parseSegments(raw) {
    const parts = raw.split(/\*([^*]+)\*/);
    return parts.map((part, i) => ({ text: part, italic: i % 2 === 1 }));
  }
  const segments = parseSegments(text);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": className }, { "default": ($$result2) => renderTemplate`${segments.map(
    (seg) => seg.italic ? renderTemplate`${maybeRenderHead()}<em class="italic font-[inherit]">${seg.text}</em>` : seg.text
  )}` })}`;
}, "D:/AstroVeb/src/components/ui/RichHeading.astro", void 0);

const $$InsiderHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$InsiderHero;
  const { heading, subheading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-(--color-background)" data-reveal-root style="padding-top: calc(var(--announcement-height, 40px) + 96px);"> <div class="container mx-auto px-6 lg:px-10 pb-12"> <div class="max-w-2xl"> ${renderComponent($$result, "RichHeading", $$RichHeading, { "text": heading, "as": "h1", "class": "reveal-item font-serif text-4xl lg:text-5xl xl:text-[3.25rem] font-bold leading-[1.1] text-(--color-foreground) mb-5" })} ${subheading && renderTemplate`<p class="reveal-item text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl"> ${subheading} </p>`} </div> </div> </section>`;
}, "D:/AstroVeb/src/components/sections/InsiderHero.astro", void 0);

export { $$Layout as $, $$InsiderHero as a, $$RichHeading as b, renderScript as r };
