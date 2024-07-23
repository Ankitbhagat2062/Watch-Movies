import {I as _} from "./Icon.js";
import {b as w} from "./runtime-dom.js";
import {d as v, I as k} from "./Image.js";
/* empty css                        */
import {_ as C} from "./_plugin-vue_export-helper.js";
import {r, o as n, b as i, d as o, h as u, t as f, g as x, l as h, f as I, F as S, i as j, n as z} from "./runtime-core.js";
import "./assets-service.js";
const B = {
    __name: "MultiImageCarousel",
    props: {
        title: String,
        highlight: String,
        subtitle: String,
        items: Array,
        styles: Object
    },
    setup(p, {expose: a}) {
        a();
        const t = p
          , s = r(t.styles ?? {})
          , d = r(320)
          , g = r(0)
          , e = r([])
          , c = r(t.items.length)
          , m = r([]);
        c.value > 3 && c.value <= 5 ? m.value = [...t.items, ...t.items] : m.value = [...t.items],
        c.value > 3 && (g.value = -d.value * 2),
        m.value.forEach(async(l,b)=>{
            e.value.push({
                url: await v(l.image),
                key: b,
                href: l.href?.href,
                alt: "Image " + b
            })
        }
        );
        const y = {
            props: t,
            styles: s,
            boxesWidth: d,
            translateX: g,
            images: e,
            itemsCount: c,
            newItems: m,
            previous: ()=>{
                const l = e.value.pop();
                e.value = [l].concat(e.value)
            }
            ,
            nexts: ()=>{
                const l = e.value.shift();
                e.value = e.value.concat(l)
            }
            ,
            Icon: _,
            ref: r,
            Image: k,
            get getImageSrc() {
                return v
            }
        };
        return Object.defineProperty(y, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        y
    }
}
  , N = {
    class: "mx-auto max-w-5xl pb-10 text-center md:pb-16 py-12"
}
  , P = {
    key: 2,
    class: "mx-auto max-w-3xl"
}
  , V = {
    class: "relative mx-auto max-h-60 max-w-[340px] md:max-w-[660px] lg:max-w-[980px] w-full px-[10px] mb-20"
}
  , X = {
    class: "overflow-hidden px-[10px]"
}
  , E = ["href", "aria-label"]
  , F = ["src"]
  , M = {
    class: "inline-flex items-center justify-center w-10 h-10 rounded-full hover:brightness-75 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
}
  , O = {
    class: "inline-flex items-center justify-center w-10 h-10 rounded-full hover:brightness-75 group-focus:ring-4 group-focus:ring-white group-focus:outline-none"
};
function A(p, a, t, s, d, g) {
    return n(),
    i("section", {
        class: "mx-auto px-4 max-w-4xl",
        style: u({
            background: s.styles.sectionBackgroundColor
        })
    }, [o("div", N, [t.highlight ? (n(),
    i("p", {
        key: 0,
        class: "text-base font-bold uppercase text-secondary tracking-wide",
        style: u({
            color: s.styles.highlightColor
        })
    }, f(t.highlight), 5)) : x("", !0), t.title ? (n(),
    i("h2", {
        key: 1,
        class: "font-heading leading-tighter text-primary mb-4 text-5xl font-bold tracking-tighter md:text-6xl",
        style: u({
            color: s.styles.headlineColor
        })
    }, f(t.title), 5)) : x("", !0), t.subtitle ? (n(),
    i("div", P, [o("p", {
        class: "text-muted mb-6 text-xl",
        style: u({
            color: s.styles.subtitleColor
        })
    }, f(t.subtitle), 5)])) : x("", !0)]), o("div", V, [o("div", X, [o("div", {
        class: "flex-nowrap flex gap-[20px] transition ease-out duration-700 w-[150%]",
        style: u("transform: translateX(" + s.translateX + "px)")
    }, [h(w, {
        name: "swipe",
        tag: "div",
        class: "flex-nowrap flex gap-[20px]"
    }, {
        default: I(()=>[(n(!0),
        i(S, null, j(s.images, (e,c)=>(n(),
        i("div", {
            key: e.key,
            class: z(["max-w-[300px] max-h-60 min-w-[300px] min-h-60 h-60 bg-gray-100 rounded-lg block hover:scale-105 transition-transform", {
                "first:opacity-0 last:opacity-0": s.itemsCount > 3
            }])
        }, [o("a", {
            href: e.href,
            target: "_blank",
            "aria-label": e.alt
        }, [o("img", {
            class: "h-60 w-full max-w-full rounded-lg object-cover",
            src: e.url,
            width: "500",
            height: "500",
            decoding: "async",
            loading: "lazy"
        }, null, 8, F)], 8, E)], 2))), 128))]),
        _: 1
    })], 4)]), o("button", {
        type: "button",
        "aria-label": "Previous",
        class: "absolute top-0 left-0 md:-left-16 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
        onClick: a[0] || (a[0] = e=>s.previous())
    }, [o("span", M, [h(s.Icon, {
        class: "w-10 h-10 rounded-full text-primary-contrast bg-primary",
        name: "mdi:arrow-left-drop-circle-outline"
    })])]), o("button", {
        type: "button",
        "aria-label": "Next",
        class: "absolute top-0 right-0 md:-right-16 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none",
        onClick: a[1] || (a[1] = e=>s.nexts())
    }, [o("span", O, [h(s.Icon, {
        class: "w-10 h-10 rounded-full text-primary-contrast bg-primary",
        name: "mdi:arrow-right-drop-circle-outline"
    })])])])], 4)
}
const Q = C(B, [["render", A]]);
export {Q as default};
