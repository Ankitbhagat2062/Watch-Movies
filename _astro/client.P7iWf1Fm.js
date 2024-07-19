import {c as f, d as p} from "./runtime-dom.esm-bundler.LymGwMhj.js";
import {s as m, u as r, S as y} from "./runtime-core.esm-bundler.xhKuL3HG.js";
const S = ()=>{}
  , A = m({
    props: {
        value: String,
        name: String,
        hydrate: {
            type: Boolean,
            default: !0
        }
    },
    setup({name: n, value: t, hydrate: s}) {
        if (!t)
            return ()=>null;
        let o = s ? "astro-slot" : "astro-static-slot";
        return ()=>r(o, {
            name: n,
            innerHTML: t
        })
    }
})
  , v = n=>async(t,s,o,{client: i})=>{
    if (delete s.class,
    !n.hasAttribute("ssr"))
        return;
    const l = t.name ? `${t.name} Host` : void 0
      , a = {};
    for (const [e,d] of Object.entries(o))
        a[e] = ()=>r(A, {
            value: d,
            name: e === "default" ? void 0 : e
        });
    const u = i !== "only"
      , c = (u ? f : p)({
        name: l,
        render() {
            let e = r(t, s, a);
            return b(t.setup) && (e = r(y, null, e)),
            e
        }
    });
    await S(),
    c.mount(n, u),
    n.addEventListener("astro:unmount", ()=>c.unmount(), {
        once: !0
    })
}
;
function b(n) {
    const t = n?.constructor;
    return t && t.name === "AsyncFunction"
}
export {v as default};
