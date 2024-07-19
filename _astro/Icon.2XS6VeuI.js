import {s as Dt, u as nt, w as Nt, o as Rt, e as Bt, n as Qt} from "./runtime-core.esm-bundler.xhKuL3HG.js";
import {_ as qt} from "./_plugin-vue_export-helper.x3n3nnut.js";
const j = /^[a-z0-9]+(-[a-z0-9]+)*$/
  , L = (t,e,n,r="")=>{
    const o = t.split(":");
    if (t.slice(0, 1) === "@") {
        if (o.length < 2 || o.length > 3)
            return null;
        r = o.shift().slice(1)
    }
    if (o.length > 3 || !o.length)
        return null;
    if (o.length > 1) {
        const c = o.pop()
          , l = o.pop()
          , f = {
            provider: o.length > 0 ? o[0] : r,
            prefix: l,
            name: c
        };
        return e && !F(f) ? null : f
    }
    const s = o[0]
      , i = s.split("-");
    if (i.length > 1) {
        const c = {
            provider: r,
            prefix: i.shift(),
            name: i.join("-")
        };
        return e && !F(c) ? null : c
    }
    if (n && r === "") {
        const c = {
            provider: r,
            prefix: "",
            name: s
        };
        return e && !F(c, n) ? null : c
    }
    return null
}
  , F = (t,e)=>t ? !!((t.provider === "" || t.provider.match(j)) && (e && t.prefix === "" || t.prefix.match(j)) && t.name.match(j)) : !1
  , It = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , _ = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , G = Object.freeze({
    ...It,
    ..._
})
  , B = Object.freeze({
    ...G,
    body: "",
    hidden: !1
});
function Ht(t, e) {
    const n = {};
    !t.hFlip != !e.hFlip && (n.hFlip = !0),
    !t.vFlip != !e.vFlip && (n.vFlip = !0);
    const r = ((t.rotate || 0) + (e.rotate || 0)) % 4;
    return r && (n.rotate = r),
    n
}
function ot(t, e) {
    const n = Ht(t, e);
    for (const r in B)
        r in _ ? r in t && !(r in n) && (n[r] = _[r]) : r in e ? n[r] = e[r] : r in t && (n[r] = t[r]);
    return n
}
function Ut(t, e) {
    const n = t.icons
      , r = t.aliases || Object.create(null)
      , o = Object.create(null);
    function s(i) {
        if (n[i])
            return o[i] = [];
        if (!(i in o)) {
            o[i] = null;
            const c = r[i] && r[i].parent
              , l = c && s(c);
            l && (o[i] = [c].concat(l))
        }
        return o[i]
    }
    return (e || Object.keys(n).concat(Object.keys(r))).forEach(s),
    o
}
function Vt(t, e, n) {
    const r = t.icons
      , o = t.aliases || Object.create(null);
    let s = {};
    function i(c) {
        s = ot(r[c] || o[c], s)
    }
    return i(e),
    n.forEach(i),
    ot(t, s)
}
function xt(t, e) {
    const n = [];
    if (typeof t != "object" || typeof t.icons != "object")
        return n;
    t.not_found instanceof Array && t.not_found.forEach(o=>{
        e(o, null),
        n.push(o)
    }
    );
    const r = Ut(t);
    for (const o in r) {
        const s = r[o];
        s && (e(o, Vt(t, o, s)),
        n.push(o))
    }
    return n
}
const Kt = {
    provider: "",
    aliases: {},
    not_found: {},
    ...It
};
function D(t, e) {
    for (const n in e)
        if (n in t && typeof t[n] != typeof e[n])
            return !1;
    return !0
}
function St(t) {
    if (typeof t != "object" || t === null)
        return null;
    const e = t;
    if (typeof e.prefix != "string" || !t.icons || typeof t.icons != "object" || !D(t, Kt))
        return null;
    const n = e.icons;
    for (const o in n) {
        const s = n[o];
        if (!o.match(j) || typeof s.body != "string" || !D(s, B))
            return null
    }
    const r = e.aliases || Object.create(null);
    for (const o in r) {
        const s = r[o]
          , i = s.parent;
        if (!o.match(j) || typeof i != "string" || !n[i] && !r[i] || !D(s, B))
            return null
    }
    return e
}
const rt = Object.create(null);
function Gt(t, e) {
    return {
        provider: t,
        prefix: e,
        icons: Object.create(null),
        missing: new Set
    }
}
function v(t, e) {
    const n = rt[t] || (rt[t] = Object.create(null));
    return n[e] || (n[e] = Gt(t, e))
}
function J(t, e) {
    return St(e) ? xt(e, (n,r)=>{
        r ? t.icons[n] = r : t.missing.add(n)
    }
    ) : []
}
function Jt(t, e, n) {
    try {
        if (typeof n.body == "string")
            return t.icons[e] = {
                ...n
            },
            !0
    } catch {}
    return !1
}
let T = !1;
function vt(t) {
    return typeof t == "boolean" && (T = t),
    T
}
function Wt(t) {
    const e = typeof t == "string" ? L(t, !0, T) : t;
    if (e) {
        const n = v(e.provider, e.prefix)
          , r = e.name;
        return n.icons[r] || (n.missing.has(r) ? null : void 0)
    }
}
function Xt(t, e) {
    const n = L(t, !0, T);
    if (!n)
        return !1;
    const r = v(n.provider, n.prefix);
    return Jt(r, n.name, e)
}
function Yt(t, e) {
    if (typeof t != "object")
        return !1;
    if (typeof e != "string" && (e = t.provider || ""),
    T && !e && !t.prefix) {
        let o = !1;
        return St(t) && (t.prefix = "",
        xt(t, (s,i)=>{
            i && Xt(s, i) && (o = !0)
        }
        )),
        o
    }
    const n = t.prefix;
    if (!F({
        provider: e,
        prefix: n,
        name: "a"
    }))
        return !1;
    const r = v(e, n);
    return !!J(r, t)
}
const Zt = Object.freeze({
    width: null,
    height: null
})
  , te = Object.freeze({
    ...Zt,
    ..._
});
"" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
const Q = Object.create(null);
function ee(t, e) {
    Q[t] = e
}
function q(t) {
    return Q[t] || Q[""]
}
function W(t) {
    let e;
    if (typeof t.resources == "string")
        e = [t.resources];
    else if (e = t.resources,
    !(e instanceof Array) || !e.length)
        return null;
    return {
        resources: e,
        path: t.path || "/",
        maxURL: t.maxURL || 500,
        rotate: t.rotate || 750,
        timeout: t.timeout || 5e3,
        random: t.random === !0,
        index: t.index || 0,
        dataAfterTimeout: t.dataAfterTimeout !== !1
    }
}
const X = Object.create(null)
  , k = ["https://api.simplesvg.com", "https://api.unisvg.com"]
  , M = [];
for (; k.length > 0; )
    k.length === 1 || Math.random() > .5 ? M.push(k.shift()) : M.push(k.pop());
X[""] = W({
    resources: ["https://api.iconify.design"].concat(M)
});
function ne(t, e) {
    const n = W(e);
    return n === null ? !1 : (X[t] = n,
    !0)
}
function Y(t) {
    return X[t]
}
const oe = ()=>{
    let t;
    try {
        if (t = fetch,
        typeof t == "function")
            return t
    } catch {}
}
;
let st = oe();
function re(t, e) {
    const n = Y(t);
    if (!n)
        return 0;
    let r;
    if (!n.maxURL)
        r = 0;
    else {
        let o = 0;
        n.resources.forEach(i=>{
            o = Math.max(o, i.length)
        }
        );
        const s = e + ".json?icons=";
        r = n.maxURL - o - n.path.length - s.length
    }
    return r
}
function se(t) {
    return t === 404
}
const ie = (t,e,n)=>{
    const r = []
      , o = re(t, e)
      , s = "icons";
    let i = {
        type: s,
        provider: t,
        prefix: e,
        icons: []
    }
      , c = 0;
    return n.forEach((l,f)=>{
        c += l.length + 1,
        c >= o && f > 0 && (r.push(i),
        i = {
            type: s,
            provider: t,
            prefix: e,
            icons: []
        },
        c = l.length),
        i.icons.push(l)
    }
    ),
    r.push(i),
    r
}
;
function ce(t) {
    if (typeof t == "string") {
        const e = Y(t);
        if (e)
            return e.path
    }
    return "/"
}
const le = (t,e,n)=>{
    if (!st) {
        n("abort", 424);
        return
    }
    let r = ce(e.provider);
    switch (e.type) {
    case "icons":
        {
            const s = e.prefix
              , c = e.icons.join(",")
              , l = new URLSearchParams({
                icons: c
            });
            r += s + ".json?" + l.toString();
            break
        }
    case "custom":
        {
            const s = e.uri;
            r += s.slice(0, 1) === "/" ? s.slice(1) : s;
            break
        }
    default:
        n("abort", 400);
        return
    }
    let o = 503;
    st(t + r).then(s=>{
        const i = s.status;
        if (i !== 200) {
            setTimeout(()=>{
                n(se(i) ? "abort" : "next", i)
            }
            );
            return
        }
        return o = 501,
        s.json()
    }
    ).then(s=>{
        if (typeof s != "object" || s === null) {
            setTimeout(()=>{
                s === 404 ? n("abort", s) : n("next", o)
            }
            );
            return
        }
        setTimeout(()=>{
            n("success", s)
        }
        )
    }
    ).catch(()=>{
        n("next", o)
    }
    )
}
  , fe = {
    prepare: ie,
    send: le
};
function ae(t) {
    const e = {
        loaded: [],
        missing: [],
        pending: []
    }
      , n = Object.create(null);
    t.sort((o,s)=>o.provider !== s.provider ? o.provider.localeCompare(s.provider) : o.prefix !== s.prefix ? o.prefix.localeCompare(s.prefix) : o.name.localeCompare(s.name));
    let r = {
        provider: "",
        prefix: "",
        name: ""
    };
    return t.forEach(o=>{
        if (r.name === o.name && r.prefix === o.prefix && r.provider === o.provider)
            return;
        r = o;
        const s = o.provider
          , i = o.prefix
          , c = o.name
          , l = n[s] || (n[s] = Object.create(null))
          , f = l[i] || (l[i] = v(s, i));
        let a;
        c in f.icons ? a = e.loaded : i === "" || f.missing.has(c) ? a = e.missing : a = e.pending;
        const d = {
            provider: s,
            prefix: i,
            name: c
        };
        a.push(d)
    }
    ),
    e
}
function Ct(t, e) {
    t.forEach(n=>{
        const r = n.loaderCallbacks;
        r && (n.loaderCallbacks = r.filter(o=>o.id !== e))
    }
    )
}
function ue(t) {
    t.pendingCallbacksFlag || (t.pendingCallbacksFlag = !0,
    setTimeout(()=>{
        t.pendingCallbacksFlag = !1;
        const e = t.loaderCallbacks ? t.loaderCallbacks.slice(0) : [];
        if (!e.length)
            return;
        let n = !1;
        const r = t.provider
          , o = t.prefix;
        e.forEach(s=>{
            const i = s.icons
              , c = i.pending.length;
            i.pending = i.pending.filter(l=>{
                if (l.prefix !== o)
                    return !0;
                const f = l.name;
                if (t.icons[f])
                    i.loaded.push({
                        provider: r,
                        prefix: o,
                        name: f
                    });
                else if (t.missing.has(f))
                    i.missing.push({
                        provider: r,
                        prefix: o,
                        name: f
                    });
                else
                    return n = !0,
                    !0;
                return !1
            }
            ),
            i.pending.length !== c && (n || Ct([t], s.id),
            s.callback(i.loaded.slice(0), i.missing.slice(0), i.pending.slice(0), s.abort))
        }
        )
    }
    ))
}
let de = 0;
function pe(t, e, n) {
    const r = de++
      , o = Ct.bind(null, n, r);
    if (!e.pending.length)
        return o;
    const s = {
        id: r,
        icons: e,
        callback: t,
        abort: o
    };
    return n.forEach(i=>{
        (i.loaderCallbacks || (i.loaderCallbacks = [])).push(s)
    }
    ),
    o
}
function he(t, e=!0, n=!1) {
    const r = [];
    return t.forEach(o=>{
        const s = typeof o == "string" ? L(o, e, n) : o;
        s && r.push(s)
    }
    ),
    r
}
var ge = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: !1,
    dataAfterTimeout: !1
};
function me(t, e, n, r) {
    const o = t.resources.length
      , s = t.random ? Math.floor(Math.random() * o) : t.index;
    let i;
    if (t.random) {
        let h = t.resources.slice(0);
        for (i = []; h.length > 1; ) {
            const I = Math.floor(Math.random() * h.length);
            i.push(h[I]),
            h = h.slice(0, I).concat(h.slice(I + 1))
        }
        i = i.concat(h)
    } else
        i = t.resources.slice(s).concat(t.resources.slice(0, s));
    const c = Date.now();
    let l = "pending", f = 0, a, d = null, g = [], m = [];
    typeof r == "function" && m.push(r);
    function w() {
        d && (clearTimeout(d),
        d = null)
    }
    function p() {
        l === "pending" && (l = "aborted"),
        w(),
        g.forEach(h=>{
            h.status === "pending" && (h.status = "aborted")
        }
        ),
        g = []
    }
    function u(h, I) {
        I && (m = []),
        typeof h == "function" && m.push(h)
    }
    function x() {
        return {
            startTime: c,
            payload: e,
            status: l,
            queriesSent: f,
            queriesPending: g.length,
            subscribe: u,
            abort: p
        }
    }
    function y() {
        l = "failed",
        m.forEach(h=>{
            h(void 0, a)
        }
        )
    }
    function b() {
        g.forEach(h=>{
            h.status === "pending" && (h.status = "aborted")
        }
        ),
        g = []
    }
    function zt(h, I, C) {
        const O = I !== "success";
        switch (g = g.filter(S=>S !== h),
        l) {
        case "pending":
            break;
        case "failed":
            if (O || !t.dataAfterTimeout)
                return;
            break;
        default:
            return
        }
        if (I === "abort") {
            a = C,
            y();
            return
        }
        if (O) {
            a = C,
            g.length || (i.length ? z() : y());
            return
        }
        if (w(),
        b(),
        !t.random) {
            const S = t.resources.indexOf(h.resource);
            S !== -1 && S !== t.index && (t.index = S)
        }
        l = "completed",
        m.forEach(S=>{
            S(C)
        }
        )
    }
    function z() {
        if (l !== "pending")
            return;
        w();
        const h = i.shift();
        if (h === void 0) {
            if (g.length) {
                d = setTimeout(()=>{
                    w(),
                    l === "pending" && (b(),
                    y())
                }
                , t.timeout);
                return
            }
            y();
            return
        }
        const I = {
            status: "pending",
            resource: h,
            callback: (C,O)=>{
                zt(I, C, O)
            }
        };
        g.push(I),
        f++,
        d = setTimeout(z, t.rotate),
        n(h, e, I.callback)
    }
    return setTimeout(z),
    x
}
function kt(t) {
    const e = {
        ...ge,
        ...t
    };
    let n = [];
    function r() {
        n = n.filter(c=>c().status === "pending")
    }
    function o(c, l, f) {
        const a = me(e, c, l, (d,g)=>{
            r(),
            f && f(d, g)
        }
        );
        return n.push(a),
        a
    }
    function s(c) {
        return n.find(l=>c(l)) || null
    }
    return {
        query: o,
        find: s,
        setIndex: c=>{
            e.index = c
        }
        ,
        getIndex: ()=>e.index,
        cleanup: r
    }
}
function it() {}
const N = Object.create(null);
function ye(t) {
    if (!N[t]) {
        const e = Y(t);
        if (!e)
            return;
        const n = kt(e)
          , r = {
            config: e,
            redundancy: n
        };
        N[t] = r
    }
    return N[t]
}
function be(t, e, n) {
    let r, o;
    if (typeof t == "string") {
        const s = q(t);
        if (!s)
            return n(void 0, 424),
            it;
        o = s.send;
        const i = ye(t);
        i && (r = i.redundancy)
    } else {
        const s = W(t);
        if (s) {
            r = kt(s);
            const i = t.resources ? t.resources[0] : ""
              , c = q(i);
            c && (o = c.send)
        }
    }
    return !r || !o ? (n(void 0, 424),
    it) : r.query(e, o, n)().abort
}
const ct = "iconify2"
  , P = "iconify"
  , jt = P + "-count"
  , lt = P + "-version"
  , Tt = 36e5
  , we = 168;
function H(t, e) {
    try {
        return t.getItem(e)
    } catch {}
}
function Z(t, e, n) {
    try {
        return t.setItem(e, n),
        !0
    } catch {}
}
function ft(t, e) {
    try {
        t.removeItem(e)
    } catch {}
}
function U(t, e) {
    return Z(t, jt, e.toString())
}
function V(t) {
    return parseInt(H(t, jt)) || 0
}
const $ = {
    local: !0,
    session: !0
}
  , Pt = {
    local: new Set,
    session: new Set
};
let tt = !1;
function Ie(t) {
    tt = t
}
let E = typeof window > "u" ? {} : window;
function Ot(t) {
    const e = t + "Storage";
    try {
        if (E && E[e] && typeof E[e].length == "number")
            return E[e]
    } catch {}
    $[t] = !1
}
function Et(t, e) {
    const n = Ot(t);
    if (!n)
        return;
    const r = H(n, lt);
    if (r !== ct) {
        if (r) {
            const c = V(n);
            for (let l = 0; l < c; l++)
                ft(n, P + l.toString())
        }
        Z(n, lt, ct),
        U(n, 0);
        return
    }
    const o = Math.floor(Date.now() / Tt) - we
      , s = c=>{
        const l = P + c.toString()
          , f = H(n, l);
        if (typeof f == "string") {
            try {
                const a = JSON.parse(f);
                if (typeof a == "object" && typeof a.cached == "number" && a.cached > o && typeof a.provider == "string" && typeof a.data == "object" && typeof a.data.prefix == "string" && e(a, c))
                    return !0
            } catch {}
            ft(n, l)
        }
    }
    ;
    let i = V(n);
    for (let c = i - 1; c >= 0; c--)
        s(c) || (c === i - 1 ? (i--,
        U(n, i)) : Pt[t].add(c))
}
function Ft() {
    if (!tt) {
        Ie(!0);
        for (const t in $)
            Et(t, e=>{
                const n = e.data
                  , r = e.provider
                  , o = n.prefix
                  , s = v(r, o);
                if (!J(s, n).length)
                    return !1;
                const i = n.lastModified || -1;
                return s.lastModifiedCached = s.lastModifiedCached ? Math.min(s.lastModifiedCached, i) : i,
                !0
            }
            )
    }
}
function xe(t, e) {
    const n = t.lastModifiedCached;
    if (n && n >= e)
        return n === e;
    if (t.lastModifiedCached = e,
    n)
        for (const r in $)
            Et(r, o=>{
                const s = o.data;
                return o.provider !== t.provider || s.prefix !== t.prefix || s.lastModified === e
            }
            );
    return !0
}
function Se(t, e) {
    tt || Ft();
    function n(r) {
        let o;
        if (!$[r] || !(o = Ot(r)))
            return;
        const s = Pt[r];
        let i;
        if (s.size)
            s.delete(i = Array.from(s).shift());
        else if (i = V(o),
        !U(o, i + 1))
            return;
        const c = {
            cached: Math.floor(Date.now() / Tt),
            provider: t.provider,
            data: e
        };
        return Z(o, P + i.toString(), JSON.stringify(c))
    }
    e.lastModified && !xe(t, e.lastModified) || Object.keys(e.icons).length && (e.not_found && (e = Object.assign({}, e),
    delete e.not_found),
    n("local") || n("session"))
}
function at() {}
function ve(t) {
    t.iconsLoaderFlag || (t.iconsLoaderFlag = !0,
    setTimeout(()=>{
        t.iconsLoaderFlag = !1,
        ue(t)
    }
    ))
}
function Ce(t, e) {
    t.iconsToLoad ? t.iconsToLoad = t.iconsToLoad.concat(e).sort() : t.iconsToLoad = e,
    t.iconsQueueFlag || (t.iconsQueueFlag = !0,
    setTimeout(()=>{
        t.iconsQueueFlag = !1;
        const {provider: n, prefix: r} = t
          , o = t.iconsToLoad;
        delete t.iconsToLoad;
        let s;
        if (!o || !(s = q(n)))
            return;
        s.prepare(n, r, o).forEach(c=>{
            be(n, c, l=>{
                if (typeof l != "object")
                    c.icons.forEach(f=>{
                        t.missing.add(f)
                    }
                    );
                else
                    try {
                        const f = J(t, l);
                        if (!f.length)
                            return;
                        const a = t.pendingIcons;
                        a && f.forEach(d=>{
                            a.delete(d)
                        }
                        ),
                        Se(t, l)
                    } catch (f) {
                        console.error(f)
                    }
                ve(t)
            }
            )
        }
        )
    }
    ))
}
const ke = (t,e)=>{
    const n = he(t, !0, vt())
      , r = ae(n);
    if (!r.pending.length) {
        let l = !0;
        return e && setTimeout(()=>{
            l && e(r.loaded, r.missing, r.pending, at)
        }
        ),
        ()=>{
            l = !1
        }
    }
    const o = Object.create(null)
      , s = [];
    let i, c;
    return r.pending.forEach(l=>{
        const {provider: f, prefix: a} = l;
        if (a === c && f === i)
            return;
        i = f,
        c = a,
        s.push(v(f, a));
        const d = o[f] || (o[f] = Object.create(null));
        d[a] || (d[a] = [])
    }
    ),
    r.pending.forEach(l=>{
        const {provider: f, prefix: a, name: d} = l
          , g = v(f, a)
          , m = g.pendingIcons || (g.pendingIcons = new Set);
        m.has(d) || (m.add(d),
        o[f][a].push(d))
    }
    ),
    s.forEach(l=>{
        const {provider: f, prefix: a} = l;
        o[f][a].length && Ce(l, o[f][a])
    }
    ),
    e ? pe(e, r, s) : at
}
  , ut = t=>new Promise((e,n)=>{
    const r = typeof t == "string" ? L(t, !0) : t;
    if (!r) {
        n(t);
        return
    }
    ke([r || t], o=>{
        if (o.length && r) {
            const s = Wt(r);
            if (s) {
                e({
                    ...G,
                    ...s
                });
                return
            }
        }
        n(t)
    }
    )
}
);
({
    ...te
});
const dt = {
    backgroundColor: "currentColor"
}
  , je = {
    backgroundColor: "transparent"
}
  , pt = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , ht = {
    webkitMask: dt,
    mask: dt,
    background: je
};
for (const t in ht) {
    const e = ht[t];
    for (const n in pt)
        e[t + n] = pt[n]
}
const R = {};
["horizontal", "vertical"].forEach(t=>{
    const e = t.slice(0, 1) + "Flip";
    R[t + "-flip"] = e,
    R[t.slice(0, 1) + "-flip"] = e,
    R[t + "Flip"] = e
}
);
vt(!0);
ee("", fe);
if (typeof document < "u" && typeof window < "u") {
    Ft();
    const t = window;
    if (t.IconifyPreload !== void 0) {
        const e = t.IconifyPreload
          , n = "Invalid IconifyPreload syntax.";
        typeof e == "object" && e !== null && (e instanceof Array ? e : [e]).forEach(r=>{
            try {
                (typeof r != "object" || r === null || r instanceof Array || typeof r.icons != "object" || typeof r.prefix != "string" || !Yt(r)) && console.error(n)
            } catch {
                console.error(n)
            }
        }
        )
    }
    if (t.IconifyProviders !== void 0) {
        const e = t.IconifyProviders;
        if (typeof e == "object" && e !== null)
            for (let n in e) {
                const r = "IconifyProviders[" + n + "] is invalid.";
                try {
                    const o = e[n];
                    if (typeof o != "object" || !o || o.resources === void 0)
                        continue;
                    ne(n, o) || console.error(r)
                } catch {
                    console.error(r)
                }
            }
    }
}
({
    ...G
});
const Mt = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
})
  , At = Object.freeze({
    rotate: 0,
    vFlip: !1,
    hFlip: !1
})
  , et = Object.freeze({
    ...Mt,
    ...At
});
Object.freeze({
    ...et,
    body: "",
    hidden: !1
});
({
    ...Mt
});
const _t = Object.freeze({
    width: null,
    height: null
})
  , Lt = Object.freeze({
    ..._t,
    ...At
});
function Te(t, e) {
    const n = {
        ...t
    };
    for (const r in e) {
        const o = e[r]
          , s = typeof o;
        r in _t ? (o === null || o && (s === "string" || s === "number")) && (n[r] = o) : s === typeof n[r] && (n[r] = r === "rotate" ? o % 4 : o)
    }
    return n
}
const Pe = /[\s,]+/;
function Oe(t, e) {
    e.split(Pe).forEach(n=>{
        switch (n.trim()) {
        case "horizontal":
            t.hFlip = !0;
            break;
        case "vertical":
            t.vFlip = !0;
            break
        }
    }
    )
}
function Ee(t, e=0) {
    const n = t.replace(/^-?[0-9.]*/, "");
    function r(o) {
        for (; o < 0; )
            o += 4;
        return o % 4
    }
    if (n === "") {
        const o = parseInt(t);
        return isNaN(o) ? 0 : r(o)
    } else if (n !== t) {
        let o = 0;
        switch (n) {
        case "%":
            o = 25;
            break;
        case "deg":
            o = 90
        }
        if (o) {
            let s = parseFloat(t.slice(0, t.length - n.length));
            return isNaN(s) ? 0 : (s = s / o,
            s % 1 === 0 ? r(s) : 0)
        }
    }
    return e
}
const Fe = /(-?[0-9.]*[0-9]+[0-9.]*)/g
  , Me = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function gt(t, e, n) {
    if (e === 1)
        return t;
    if (n = n || 100,
    typeof t == "number")
        return Math.ceil(t * e * n) / n;
    if (typeof t != "string")
        return t;
    const r = t.split(Fe);
    if (r === null || !r.length)
        return t;
    const o = [];
    let s = r.shift()
      , i = Me.test(s);
    for (; ; ) {
        if (i) {
            const c = parseFloat(s);
            isNaN(c) ? o.push(s) : o.push(Math.ceil(c * e * n) / n)
        } else
            o.push(s);
        if (s = r.shift(),
        s === void 0)
            return o.join("");
        i = !i
    }
}
const Ae = t=>t === "unset" || t === "undefined" || t === "none";
function _e(t, e) {
    const n = {
        ...et,
        ...t
    }
      , r = {
        ...Lt,
        ...e
    }
      , o = {
        left: n.left,
        top: n.top,
        width: n.width,
        height: n.height
    };
    let s = n.body;
    [n, r].forEach(w=>{
        const p = []
          , u = w.hFlip
          , x = w.vFlip;
        let y = w.rotate;
        u ? x ? y += 2 : (p.push("translate(" + (o.width + o.left).toString() + " " + (0 - o.top).toString() + ")"),
        p.push("scale(-1 1)"),
        o.top = o.left = 0) : x && (p.push("translate(" + (0 - o.left).toString() + " " + (o.height + o.top).toString() + ")"),
        p.push("scale(1 -1)"),
        o.top = o.left = 0);
        let b;
        switch (y < 0 && (y -= Math.floor(y / 4) * 4),
        y = y % 4,
        y) {
        case 1:
            b = o.height / 2 + o.top,
            p.unshift("rotate(90 " + b.toString() + " " + b.toString() + ")");
            break;
        case 2:
            p.unshift("rotate(180 " + (o.width / 2 + o.left).toString() + " " + (o.height / 2 + o.top).toString() + ")");
            break;
        case 3:
            b = o.width / 2 + o.left,
            p.unshift("rotate(-90 " + b.toString() + " " + b.toString() + ")");
            break
        }
        y % 2 === 1 && (o.left !== o.top && (b = o.left,
        o.left = o.top,
        o.top = b),
        o.width !== o.height && (b = o.width,
        o.width = o.height,
        o.height = b)),
        p.length && (s = '<g transform="' + p.join(" ") + '">' + s + "</g>")
    }
    );
    const i = r.width
      , c = r.height
      , l = o.width
      , f = o.height;
    let a, d;
    i === null ? (d = c === null ? "1em" : c === "auto" ? f : c,
    a = gt(d, l / f)) : (a = i === "auto" ? l : i,
    d = c === null ? gt(a, f / l) : c === "auto" ? f : c);
    const g = {}
      , m = (w,p)=>{
        Ae(p) || (g[w] = p.toString())
    }
    ;
    return m("width", a),
    m("height", d),
    g.viewBox = o.left.toString() + " " + o.top.toString() + " " + l.toString() + " " + f.toString(),
    {
        attributes: g,
        body: s
    }
}
const Le = /\sid="(\S+)"/g
  , $e = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let ze = 0;
function De(t, e=$e) {
    const n = [];
    let r;
    for (; r = Le.exec(t); )
        n.push(r[1]);
    if (!n.length)
        return t;
    const o = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    return n.forEach(s=>{
        const i = typeof e == "function" ? e(s) : e + (ze++).toString()
          , c = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        t = t.replace(new RegExp('([#;"])(' + c + ')([")]|\\.[a-z])',"g"), "$1" + i + o + "$3")
    }
    ),
    t = t.replace(new RegExp(o,"g"), ""),
    t
}
function Ne(t, e) {
    let n = t.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const r in e)
        n += " " + r + '="' + e[r] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + t + "</svg>"
}
function Re(t) {
    return t.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ")
}
function Be(t) {
    return "data:image/svg+xml," + Re(t)
}
function Qe(t) {
    return 'url("' + Be(t) + '")'
}
const mt = {
    ...Lt,
    inline: !1
}
  , qe = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": !0,
    role: "img"
}
  , He = {
    display: "inline-block"
}
  , K = {
    backgroundColor: "currentColor"
}
  , $t = {
    backgroundColor: "transparent"
}
  , yt = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
}
  , bt = {
    webkitMask: K,
    mask: K,
    background: $t
};
for (const t in bt) {
    const e = bt[t];
    for (const n in yt)
        e[t + n] = yt[n]
}
const A = {};
["horizontal", "vertical"].forEach(t=>{
    const e = t.slice(0, 1) + "Flip";
    A[t + "-flip"] = e,
    A[t.slice(0, 1) + "-flip"] = e,
    A[t + "Flip"] = e
}
);
function wt(t) {
    return t + (t.match(/^[-0-9.]+$/) ? "px" : "")
}
const Ue = (t,e)=>{
    const n = Te(mt, e)
      , r = {
        ...qe
    }
      , o = e.mode || "svg"
      , s = {}
      , i = e.style
      , c = typeof i == "object" && !(i instanceof Array) ? i : {};
    for (let p in e) {
        const u = e[p];
        if (u !== void 0)
            switch (p) {
            case "icon":
            case "style":
            case "onLoad":
            case "mode":
                break;
            case "inline":
            case "hFlip":
            case "vFlip":
                n[p] = u === !0 || u === "true" || u === 1;
                break;
            case "flip":
                typeof u == "string" && Oe(n, u);
                break;
            case "color":
                s.color = u;
                break;
            case "rotate":
                typeof u == "string" ? n[p] = Ee(u) : typeof u == "number" && (n[p] = u);
                break;
            case "ariaHidden":
            case "aria-hidden":
                u !== !0 && u !== "true" && delete r["aria-hidden"];
                break;
            default:
                {
                    const x = A[p];
                    x ? (u === !0 || u === "true" || u === 1) && (n[x] = !0) : mt[p] === void 0 && (r[p] = u)
                }
            }
    }
    const l = _e(t, n)
      , f = l.attributes;
    if (n.inline && (s.verticalAlign = "-0.125em"),
    o === "svg") {
        r.style = {
            ...s,
            ...c
        },
        Object.assign(r, f);
        let p = 0
          , u = e.id;
        return typeof u == "string" && (u = u.replace(/-/g, "_")),
        r.innerHTML = De(l.body, u ? ()=>u + "ID" + p++ : "iconifyVue"),
        nt("svg", r)
    }
    const {body: a, width: d, height: g} = t
      , m = o === "mask" || (o === "bg" ? !1 : a.indexOf("currentColor") !== -1)
      , w = Ne(a, {
        ...f,
        width: d + "",
        height: g + ""
    });
    return r.style = {
        ...s,
        "--svg": Qe(w),
        width: wt(f.width),
        height: wt(f.height),
        ...He,
        ...m ? K : $t,
        ...c
    },
    nt("span", r)
}
  , Ve = Object.create(null)
  , Ke = Dt({
    inheritAttrs: !1,
    render() {
        const t = this.$attrs
          , e = t.icon
          , n = typeof e == "string" ? Ve[e] : typeof e == "object" ? e : null;
        return n === null || typeof n != "object" || typeof n.body != "string" ? this.$slots.default ? this.$slots.default() : null : Ue({
            ...et,
            ...n
        }, t)
    }
})
  , Ge = {
    __name: "Icon",
    props: {
        name: String,
        pack: String,
        title: String,
        optimize: {
            type: Boolean,
            default: !0
        },
        class: String
    },
    async setup(t, {expose: e}) {
        e();
        let n, r;
        const o = t;
        let s = null;
        try {
            if (console.info(`Loading icon ${o.name}...`),
            typeof o.name != "string")
                throw Error(`Icon name is not a string: ${o.name}`);
            s = ([n,r] = Nt(()=>ut(o.name)),
            n = await n,
            r(),
            n)
        } catch (c) {
            console.error(`Failed to load icon ${o.name}`),
            console.error(c)
        }
        const i = {
            props: o,
            get icon() {
                return s
            },
            set icon(c) {
                s = c
            },
            get loadIcon() {
                return ut
            },
            get Iconify() {
                return Ke
            }
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
};
function Je(t, e, n, r, o, s) {
    return Rt(),
    Bt(r.Iconify, {
        icon: r.icon,
        class: Qt(n.class)
    }, null, 8, ["icon", "class"])
}
const Ye = qt(Ge, [["render", Je]]);
export {Ye as I};
