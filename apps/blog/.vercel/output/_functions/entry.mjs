import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_wFa8Ez8E.mjs';
import { manifest } from './manifest_Bi0YgVxI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/subscribe.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.astro.mjs');
const _page5 = () => import('./pages/rss.xml.astro.mjs');
const _page6 = () => import('./pages/search.json.astro.mjs');
const _page7 = () => import('./pages/stats.astro.mjs');
const _page8 = () => import('./pages/tags/_tag_.astro.mjs');
const _page9 = () => import('./pages/tags.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/.pnpm/astro@5.16.6_@types+node@22.10.7_@vercel+functions@2.2.13_jiti@1.21.7_rollup@4.54.0_terser@5._n5fbzgznjoh236jgsc72pyb7vy/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/subscribe.ts", _page3],
    ["src/pages/posts/[slug].astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/search.json.js", _page6],
    ["src/pages/stats.astro", _page7],
    ["src/pages/tags/[tag].astro", _page8],
    ["src/pages/tags/index.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b20b404e-31f5-414f-a5bc-ac013a58f99a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
