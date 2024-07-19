import {I as y} from "./Icon.2XS6VeuI.js";
import {_} from "./_plugin-vue_export-helper.x3n3nnut.js";
import {r as c, o as r, b as l, d as n, h as i, g as a, F as m, i as b, n as d, e as f, j as k, t as v} from "./runtime-core.esm-bundler.xhKuL3HG.js";
const w = {
    __name: "FAQAccordion",
    props: {
        title: String,
        subtitle: String,
        highlight: String,
        items: Array,
        styles: Object
    },
    setup(u, {expose: h}) {
        h();
        const t = u
          , e = c(null)
          , g = c(t.styles ?? {});
        function x(o) {
            o !== e.value ? e.value = o : e.value = null
        }
        const s = {
            props: t,
            currentIndex: e,
            styles: g,
            setIndex: x,
            Icon: y,
            ref: c
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
}
  , p = n("div", {
    class: "pointer-events-none absolute inset-0 -z-[1]",
    "aria-hidden": "true"
}, [n("div", {
    class: "absolute inset-0"
})], -1)
  , C = {
    class: "text-default relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16 lg:py-20"
}
  , I = {
    key: 0,
    class: "mb-8 max-w-3xl text-center md:mx-auto md:mb-12"
}
  , L = ["innerHTML"]
  , M = ["innerHTML"]
  , T = ["innerHTML"]
  , H = ["onClick"]
  , S = {
    class: "flex items-center"
}
  , B = n("path", {
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M9 5 5 1 1 5"
}, null, -1)
  , j = [B]
  , A = {
    class: "p-5 bg-white border border-t-0 border-gray-200 dark:border-gray-700 text-sm"
}
  , F = ["innerHTML"];
function z(u, h, t, e, g, x) {
    return r(),
    l("section", {
        class: "relative scroll-mt-[72px]",
        style: i({
            background: e.styles.sectionBackgroundColor
        })
    }, [p, n("div", C, [t.title || t.subtitle || t.highlight ? (r(),
    l("div", I, [t.highlight ? (r(),
    l("p", {
        key: 0,
        class: "text-highlight text-secondary text-base font-bold uppercase tracking-wide dark:text-blue-200",
        style: i({
            color: e.styles.highlightColor
        }),
        innerHTML: t.highlight
    }, null, 12, L)) : a("", !0), t.title ? (r(),
    l("h2", {
        key: 1,
        class: "font-heading text-primary leading-tighter text-heading text-3xl font-bold tracking-tighter md:text-4xl",
        style: i({
            color: e.styles.headlineColor
        }),
        innerHTML: t.title
    }, null, 12, M)) : a("", !0), t.subtitle ? (r(),
    l("p", {
        key: 2,
        class: "text-muted mt-4 text-xl",
        style: i({
            color: e.styles.subtitleColor
        }),
        innerHTML: t.subtitle
    }, null, 12, T)) : a("", !0)])) : a("", !0), (r(!0),
    l(m, null, b(t.items, (s,o)=>(r(),
    l("div", {
        key: o
    }, [s.question && s.answer ? (r(),
    l(m, {
        key: 0
    }, [n("h2", {
        onClick: N=>e.setIndex(o)
    }, [n("button", {
        type: "button",
        class: d([{
            "rounded-t-xl": o == 0,
            "bg-gray-100": o == e.currentIndex
        }, "bg-white flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-1 focus:bg-gray-200 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800"])
    }, [n("span", S, [s.icon ? (r(),
    f(e.Icon, {
        key: 0,
        name: s.icon,
        class: "text-primary mr-2 mt-1 h-6 w-6 flex-shrink-0 rtl:ml-2 rtl:mr-0"
    }, null, 8, ["name"])) : a("", !0), k(" " + v(s.question), 1)]), (r(),
    l("svg", {
        class: d([{
            "rotate-180": o != e.currentIndex
        }, "w-3 h-3 shrink-0"]),
        "aria-hidden": "true",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 10 6"
    }, j, 2))], 2)], 8, H), n("div", {
        class: d(["max-h-0 overflow-hidden transition-all h-full duration-500", {
            "max-h-[300px]": e.currentIndex == o
        }])
    }, [n("div", A, [n("p", {
        class: "mb-2 text-gray-700 dark:text-gray-400",
        innerHTML: s.answer
    }, null, 8, F)])], 2)], 64)) : a("", !0)]))), 128))])], 4)
}
const Q = _(w, [["render", z]]);
export {Q as default};
