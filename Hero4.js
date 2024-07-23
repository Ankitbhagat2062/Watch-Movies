import { g as n, I as k } from "./Image.js";/* empty css */
import { _ as C } from "./_plugin-vue_export-helper.js";
import { r as a, w as j, a as f, c as l, o as s, b as r, d as i, e as g, f as V, S as B, n as H, g as c, h as y, t as I } from "./runtime-core.js";
import "./assets-service.js";
const O = {
    __name: "Hero4", props: {
        title: String, highlight: String, image: [String, Object],
        video: { type: Object, required: !1 }, styles: Object
    },
    async setup(h, { expose: u }) {
        u(); let o, e;
        const t = h, _ = a(t.styles ?? {}),
            v = ([o, e] = j(() => n(t.video?.src)),
                o = await o, e(), o
            ),
            m = a(v);
        f(() => t.video,
            async L => { m.value = await n(L?.src), d.value = !1 },
            { deep: !0 }
        );
        const x = l(() => t.video?.muted ?? !0),
            b = l(() => t.video?.loop ?? !0),
            w = l(() => t.video?.autoplay ?? !0),
            S = l(() => t.video?.controls ?? !1),
            d = a(!1),
            p = {
                props: t, styles: _,
                publicFileUrl: v,
                videoSrc: m,
                muted: x,
                loop: b,
                autoplay: w,
                controls: S,
                isVideoLoaded: d,
                videoLoaded: () => { d.value = !0 },
                Image: k,
                computed: l,
                ref: a,
                watch: f,
                get getPublicFileURL() { return n }
            };
        return Object.defineProperty(p, "__isScriptSetup",
            { enumerable: !1, value: !0 }),
            p
    }
},
    F = { class: "relative h-[90vh] flex items-center w-full hero-4-section" },
    P = { class: "absolute overflow-hidden h-full w-full" },
    U = ["muted", "loop", "autoplay", "controls", "src"], z = ["src"],
    M = { class: "relative w-full mx-auto" },
    N = { class: "pb-12 md:pb-20" },
    R = { class: "p-10 text-center pb-10 max-w-fit mx-auto text-white" },
    T = ["innerHTML"];
function q(h, u, o, e, t, _) {
    return s(),
        r("section",
            F,
            [i("div",
                P,
                [(s(),
                    g(B, null, {
                        default: V(() =>
                            [!e.videoSrc || !e.isVideoLoaded ? (s(),
                                g(e.Image, { key: 0, src: o.image, width: "1920", height: "820", loading: "eager", class: "object-cover h-full w-full" },
                                    null, 8, ["src"])) : c("", !0)]), _: 1
                    })),
                e.videoSrc ? (s(),
                    r("video",
                        {
                            key: 0, muted: e.muted, loop: e.loop, autoplay: e.autoplay, controls: e.controls, playsinline: "",
                            class: H(["video w-full h-full object-cover", { show: e.isVideoLoaded, hide: !e.isVideoLoaded }]),
                            src: e.videoSrc, onCanplay: e.videoLoaded
                        }, [i("source", { src: e.videoSrc, type: "video/mp4" },
                            null, 8, z)], 42, U)) : c("", !0)]),
            i("div", M, [i("div", N,
                [i("div", R, [o.highlight ? (s(),
                    r("h2",
                        {
                            key: 0, class: "font-bold highlight-responsive",
                            style: y([{ "text-shadow": "0px 0px 3px #000000" },
                            { color: e.styles.highlightColor }]),
                            innerHTML: o.highlight
                        }, null, 12, T)) : c("", !0),
                o.title ? (s(), r("h1", {
                    key: 1, style: y([{ "text-shadow": "0px 0px 5px #000000" },
                    { color: e.styles.headlineColor }]),
                    class: "headline-responsive font-bold leading-tighter tracking-tighter mb-4 font-heading uppercase"
                },
                    I(o.title), 5)) : c("", !0)])])])])
} 
const Q = C(O, [["render", q], ["__scopeId", "data-v-b39d408a"]]);
export { Q as default };
