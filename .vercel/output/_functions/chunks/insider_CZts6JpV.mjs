import { c as createComponent } from './astro-component_DXSF2mti.mjs';
import 'piccolore';
import { o as generateCspDigest, s as spreadAttributes, u as unescapeHTML, k as renderTemplate, p as removeBase, b as isRemotePath, A as AstroError, q as UnknownContentCollectionError, m as maybeRenderHead, h as addAttribute, v as renderComponent } from './entrypoint_DEBv9QOH.mjs';
import { $ as $$Layout, r as renderScript, a as $$InsiderHero } from './InsiderHero_D0O4qvLB.mjs';
import 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import * as z from 'zod/v4';
import 'clsx';
import { b as VALID_INPUT_FORMATS } from './consts_BLFvATRa.mjs';
import * as devalue from 'devalue';

function createSvgComponent({ meta, attributes, children, styles }) {
  const hasStyles = styles.length > 0;
  const Component = createComponent({
    async factory(result, props) {
      const normalizedProps = normalizeProps(attributes, props);
      if (hasStyles && result.cspDestination) {
        for (const style of styles) {
          const hash = await generateCspDigest(style, result.cspAlgorithm);
          result._metadata.extraStyleHashes.push(hash);
        }
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
    },
    propagation: hasStyles ? "self" : "none"
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_C8FUtuLo.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

z.object({
  tags: z.array(z.string()).optional(),
  lastModified: z.date().optional()
});
function createGetCollection({
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  const copy = structuredClone(data);
  new Traverse(copy).forEach(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        if (imported.__svgData) {
          const { __svgData: svgData, ...meta } = imported;
          ctx.update(createSvgComponent({ meta, ...svgData }));
        } else {
          ctx.update(imported);
        }
      } else {
        ctx.update(src);
      }
    }
  });
  return copy;
}

// astro-head-inject

const liveCollections = {};

const getCollection = createGetCollection({
	liveCollections,
});

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const { title, excerpt, category, image, imageAlt, href } = Astro2.props;
  const categoryColors = {
    "News & Updates": { dot: "bg-amber-400", pill: "bg-amber-50 text-amber-800" },
    "Resources & Guides": { dot: "bg-rose-400", pill: "bg-rose-50 text-rose-800" },
    "Pet Care Tips": { dot: "bg-sky-400", pill: "bg-sky-50 text-sky-800" }
  };
  const colors = categoryColors[category] ?? {
    dot: "bg-[var(--color-accent)]",
    pill: "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="group block rounded-2xl border border-[var(--color-border)] overflow-hidden bg-[var(--color-card)] hover:shadow-lg transition-all duration-300"${addAttribute(category, "data-card-category")}> ${image && renderTemplate`<div class="aspect-[4/3] overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(imageAlt ?? title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"> </div>`} <div class="p-5 flex flex-col gap-3"> <span${addAttribute(`self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${colors.pill}`, "class")}> <span${addAttribute(`w-1.5 h-1.5 rounded-full shrink-0 ${colors.dot}`, "class")}></span> ${category} </span> <h3 class="font-serif text-lg font-semibold leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2"> ${title} </h3> <p class="text-sm text-[var(--color-muted-foreground)] leading-relaxed line-clamp-3"> ${excerpt} </p> </div> </a>`;
}, "D:/AstroVeb/src/components/ui/BlogCard.astro", void 0);

const title = "Insider — Pet Care Blog";
const description = "Expert pet care tips, news, and guides for happy, healthy pets.";
const heroHeading = "Insights & Advice for *Happy, Healthy Pets*";
const heroSubheading = "Our blog is your go-to resource for expert pet care tips, advice, and the latest updates. Discover insights on health, training, and fun ideas to keep your pets happy and thriving.";
const insiderData = {
  title,
  description,
  heroHeading,
  heroSubheading,
};

const $$Insider = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  const categories = [...new Set(posts.map((p) => p.data.category))];
  const featured = posts[0];
  const categoryColors = {
    "News & Updates": { dot: "bg-amber-400", pill: "bg-amber-50 text-amber-800" },
    "Resources & Guides": { dot: "bg-rose-400", pill: "bg-rose-50 text-rose-800" },
    "Pet Care Tips": { dot: "bg-sky-400", pill: "bg-sky-50 text-sky-800" }
  };
  function getColors(cat) {
    return categoryColors[cat] ?? {
      dot: "bg-[var(--color-accent)]",
      pill: "bg-[var(--color-muted)] text-[var(--color-muted-foreground)]"
    };
  }
  const featuredColors = featured ? getColors(featured.data.category) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": insiderData.title, "description": insiderData.description, "heroIsDark": false, "data-astro-cid-bd6txik4": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "InsiderHero", $$InsiderHero, { "heading": insiderData.heroHeading, "subheading": insiderData.heroSubheading, "data-astro-cid-bd6txik4": true })}  ${featured && featuredColors && renderTemplate`${maybeRenderHead()}<section class="container mx-auto px-6 lg:px-10 mb-16" data-astro-cid-bd6txik4> <a${addAttribute(`/insider/${featured.id}`, "href")} class="group grid lg:grid-cols-2 gap-8 lg:gap-12 items-center" data-astro-cid-bd6txik4> ${featured.data.image && renderTemplate`<div class="rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-[5/4]" data-astro-cid-bd6txik4> <img${addAttribute(featured.data.image, "src")}${addAttribute(featured.data.imageAlt ?? featured.data.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="eager" data-astro-cid-bd6txik4> </div>`} <div class="flex flex-col gap-4" data-astro-cid-bd6txik4> <span${addAttribute(`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${featuredColors.pill}`, "class")} data-astro-cid-bd6txik4> <span${addAttribute(`w-1.5 h-1.5 rounded-full shrink-0 ${featuredColors.dot}`, "class")} data-astro-cid-bd6txik4></span> ${featured.data.category} </span> <h2 class="font-serif text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug group-hover:text-[var(--color-primary)] transition-colors" data-astro-cid-bd6txik4> ${featured.data.title} </h2> <p class="text-[var(--color-muted-foreground)] leading-relaxed" data-astro-cid-bd6txik4> ${featured.data.excerpt} </p> </div> </a> </section>`} <section class="container mx-auto px-6 lg:px-10 pb-24" data-astro-cid-bd6txik4> <!-- Filter pills --> <div class="flex items-center gap-3 flex-wrap justify-center mb-10" data-astro-cid-bd6txik4> <button data-filter-btn="all" aria-pressed="true" class="filter-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium transition-all cursor-pointer" data-astro-cid-bd6txik4> <span class="w-2 h-2 rounded-full bg-[var(--color-foreground)] pill-dot-all" data-astro-cid-bd6txik4></span>
All
</button> ${categories.map((cat) => {
    const c = getColors(cat);
    return renderTemplate`<button${addAttribute(cat, "data-filter-btn")} aria-pressed="false" class="filter-pill inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium transition-all cursor-pointer" data-astro-cid-bd6txik4> <span${addAttribute(`w-2 h-2 rounded-full shrink-0 ${c.dot}`, "class")} data-astro-cid-bd6txik4></span> ${cat} </button>`;
  })} </div> <!-- Blog cards grid --> <div id="blog-grid" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6" data-astro-cid-bd6txik4> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogCard", $$BlogCard, { "href": `/insider/${post.id}`, "title": post.data.title, "excerpt": post.data.excerpt, "category": post.data.category, "image": post.data.image, "imageAlt": post.data.imageAlt, "data-astro-cid-bd6txik4": true })}`)} </div> </section> ` })}  ${renderScript($$result, "D:/AstroVeb/src/pages/insider.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/AstroVeb/src/pages/insider.astro", void 0);

const $$file = "D:/AstroVeb/src/pages/insider.astro";
const $$url = "/insider";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Insider,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
