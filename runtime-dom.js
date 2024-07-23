import {v as nt, x as _, y as L, z as Tt, A as St, B as Et, F as At, C as wt, D as W, E as q, l as _t, G as Lt, H as Nt, u as Pt, I as Mt, J as Dt, K as It, L as R, M as N, N as $t, O as Rt, P as yt, Q as xt, R as Bt, T as Ot, U as Ht, V as st, W as Ft} from "./runtime-core.js";
const zt = "http://www.w3.org/2000/svg"
  , T = typeof document < "u" ? document : null
  , G = T && T.createElement("template")
  , Kt = {
    insert: (t,e,n)=>{
        e.insertBefore(t, n || null)
    }
    ,
    remove: t=>{
        const e = t.parentNode;
        e && e.removeChild(t)
    }
    ,
    createElement: (t,e,n,s)=>{
        const r = e ? T.createElementNS(zt, t) : T.createElement(t, n ? {
            is: n
        } : void 0);
        return t === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple),
        r
    }
    ,
    createText: t=>T.createTextNode(t),
    createComment: t=>T.createComment(t),
    setText: (t,e)=>{
        t.nodeValue = e
    }
    ,
    setElementText: (t,e)=>{
        t.textContent = e
    }
    ,
    parentNode: t=>t.parentNode,
    nextSibling: t=>t.nextSibling,
    querySelector: t=>T.querySelector(t),
    setScopeId(t, e) {
        t.setAttribute(e, "")
    },
    insertStaticContent(t, e, n, s, r, o) {
        const a = n ? n.previousSibling : e.lastChild;
        if (r && (r === o || r.nextSibling))
            for (; e.insertBefore(r.cloneNode(!0), n),
            !(r === o || !(r = r.nextSibling)); )
                ;
        else {
            G.innerHTML = s ? `<svg>${t}</svg>` : t;
            const l = G.content;
            if (s) {
                const u = l.firstChild;
                for (; u.firstChild; )
                    l.appendChild(u.firstChild);
                l.removeChild(u)
            }
            e.insertBefore(l, n)
        }
        return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
    }
};
function Wt(t, e, n) {
    const s = t._vtc;
    s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
function qt(t, e, n) {
    const s = t.style
      , r = _(n);
    if (n && !r) {
        if (e && !_(e))
            for (const o in e)
                n[o] == null && $(s, o, "");
        for (const o in n)
            $(s, o, n[o])
    } else {
        const o = s.display;
        r ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"),
        "_vod"in t && (s.display = o)
    }
}
const j = /\s*!important$/;
function $(t, e, n) {
    if (N(n))
        n.forEach(s=>$(t, e, s));
    else if (n == null && (n = ""),
    e.startsWith("--"))
        t.setProperty(e, n);
    else {
        const s = Gt(t, e);
        j.test(n) ? t.setProperty(R(s), n.replace(j, ""), "important") : t[s] = n
    }
}
const U = ["Webkit", "Moz", "ms"]
  , M = {};
function Gt(t, e) {
    const n = M[e];
    if (n)
        return n;
    let s = Bt(e);
    if (s !== "filter" && s in t)
        return M[e] = s;
    s = Ot(s);
    for (let r = 0; r < U.length; r++) {
        const o = U[r] + s;
        if (o in t)
            return M[e] = o
    }
    return e
}
const J = "http://www.w3.org/1999/xlink";
function jt(t, e, n, s, r) {
    if (s && e.startsWith("xlink:"))
        n == null ? t.removeAttributeNS(J, e.slice(6, e.length)) : t.setAttributeNS(J, e, n);
    else {
        const o = Ht(e);
        n == null || o && !st(n) ? t.removeAttribute(e) : t.setAttribute(e, o ? "" : n)
    }
}
function Ut(t, e, n, s, r, o, a) {
    if (e === "innerHTML" || e === "textContent") {
        s && a(s, r, o),
        t[e] = n ?? "";
        return
    }
    const l = t.tagName;
    if (e === "value" && l !== "PROGRESS" && !l.includes("-")) {
        t._value = n;
        const c = l === "OPTION" ? t.getAttribute("value") : t.value
          , f = n ?? "";
        c !== f && (t.value = f),
        n == null && t.removeAttribute(e);
        return
    }
    let u = !1;
    if (n === "" || n == null) {
        const c = typeof t[e];
        c === "boolean" ? n = st(n) : n == null && c === "string" ? (n = "",
        u = !0) : c === "number" && (n = 0,
        u = !0)
    }
    try {
        t[e] = n
    } catch {}
    u && t.removeAttribute(e)
}
function Jt(t, e, n, s) {
    t.addEventListener(e, n, s)
}
function Qt(t, e, n, s) {
    t.removeEventListener(e, n, s)
}
function Xt(t, e, n, s, r=null) {
    const o = t._vei || (t._vei = {})
      , a = o[e];
    if (s && a)
        a.value = s;
    else {
        const [l,u] = Yt(e);
        if (s) {
            const c = o[e] = kt(s, r);
            Jt(t, l, c, u)
        } else
            a && (Qt(t, l, a, u),
            o[e] = void 0)
    }
}
const Q = /(?:Once|Passive|Capture)$/;
function Yt(t) {
    let e;
    if (Q.test(t)) {
        e = {};
        let s;
        for (; s = t.match(Q); )
            t = t.slice(0, t.length - s[0].length),
            e[s[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : R(t.slice(2)), e]
}
let D = 0;
const Zt = Promise.resolve()
  , Vt = ()=>D || (Zt.then(()=>D = 0),
D = Date.now());
function kt(t, e) {
    const n = s=>{
        if (!s._vts)
            s._vts = Date.now();
        else if (s._vts <= n.attached)
            return;
        Ft(te(s, n.value), e, 5, [s])
    }
    ;
    return n.value = t,
    n.attached = Vt(),
    n
}
function te(t, e) {
    if (N(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = ()=>{
            n.call(t),
            t._stopped = !0
        }
        ,
        e.map(s=>r=>!r._stopped && s && s(r))
    } else
        return e
}
const X = /^on[a-z]/
  , ee = (t,e,n,s,r=!1,o,a,l,u)=>{
    e === "class" ? Wt(t, s, r) : e === "style" ? qt(t, n, s) : yt(e) ? xt(e) || Xt(t, e, n, s, a) : (e[0] === "." ? (e = e.slice(1),
    !0) : e[0] === "^" ? (e = e.slice(1),
    !1) : ne(t, e, s, r)) ? Ut(t, e, s, o, a, l, u) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s),
    jt(t, e, s, r))
}
;
function ne(t, e, n, s) {
    return s ? !!(e === "innerHTML" || e === "textContent" || e in t && X.test(e) && nt(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || X.test(e) && _(n) ? !1 : e in t
}
const v = "transition"
  , A = "animation"
  , rt = (t,{slots: e})=>Pt(Mt, it(t), e);
rt.displayName = "Transition";
const ot = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , se = rt.props = L({}, Dt, ot)
  , b = (t,e=[])=>{
    N(t) ? t.forEach(n=>n(...e)) : t && t(...e)
}
  , Y = t=>t ? N(t) ? t.some(e=>e.length > 1) : t.length > 1 : !1;
function it(t) {
    const e = {};
    for (const i in t)
        i in ot || (e[i] = t[i]);
    if (t.css === !1)
        return e;
    const {name: n="v", type: s, duration: r, enterFromClass: o=`${n}-enter-from`, enterActiveClass: a=`${n}-enter-active`, enterToClass: l=`${n}-enter-to`, appearFromClass: u=o, appearActiveClass: c=a, appearToClass: f=l, leaveFromClass: p=`${n}-leave-from`, leaveActiveClass: d=`${n}-leave-active`, leaveToClass: S=`${n}-leave-to`} = t
      , E = re(r)
      , mt = E && E[0]
      , gt = E && E[1]
      , {onBeforeEnter: y, onEnter: x, onEnterCancelled: B, onLeave: O, onLeaveCancelled: vt, onBeforeAppear: ht=y, onAppear: Ct=x, onAppearCancelled: bt=B} = e
      , P = (i,m,C)=>{
        h(i, m ? f : l),
        h(i, m ? c : a),
        C && C()
    }
      , H = (i,m)=>{
        i._isLeaving = !1,
        h(i, p),
        h(i, S),
        h(i, d),
        m && m()
    }
      , F = i=>(m,C)=>{
        const z = i ? Ct : x
          , K = ()=>P(m, i, C);
        b(z, [m, K]),
        Z(()=>{
            h(m, i ? u : o),
            g(m, i ? f : l),
            Y(z) || V(m, s, mt, K)
        }
        )
    }
    ;
    return L(e, {
        onBeforeEnter(i) {
            b(y, [i]),
            g(i, o),
            g(i, a)
        },
        onBeforeAppear(i) {
            b(ht, [i]),
            g(i, u),
            g(i, c)
        },
        onEnter: F(!1),
        onAppear: F(!0),
        onLeave(i, m) {
            i._isLeaving = !0;
            const C = ()=>H(i, m);
            g(i, p),
            ct(),
            g(i, d),
            Z(()=>{
                i._isLeaving && (h(i, p),
                g(i, S),
                Y(O) || V(i, s, gt, C))
            }
            ),
            b(O, [i, C])
        },
        onEnterCancelled(i) {
            P(i, !1),
            b(B, [i])
        },
        onAppearCancelled(i) {
            P(i, !0),
            b(bt, [i])
        },
        onLeaveCancelled(i) {
            H(i),
            b(vt, [i])
        }
    })
}
function re(t) {
    if (t == null)
        return null;
    if (It(t))
        return [I(t.enter), I(t.leave)];
    {
        const e = I(t);
        return [e, e]
    }
}
function I(t) {
    return $t(t)
}
function g(t, e) {
    e.split(/\s+/).forEach(n=>n && t.classList.add(n)),
    (t._vtc || (t._vtc = new Set)).add(e)
}
function h(t, e) {
    e.split(/\s+/).forEach(s=>s && t.classList.remove(s));
    const {_vtc: n} = t;
    n && (n.delete(e),
    n.size || (t._vtc = void 0))
}
function Z(t) {
    requestAnimationFrame(()=>{
        requestAnimationFrame(t)
    }
    )
}
let oe = 0;
function V(t, e, n, s) {
    const r = t._endId = ++oe
      , o = ()=>{
        r === t._endId && s()
    }
    ;
    if (n)
        return setTimeout(o, n);
    const {type: a, timeout: l, propCount: u} = at(t, e);
    if (!a)
        return s();
    const c = a + "end";
    let f = 0;
    const p = ()=>{
        t.removeEventListener(c, d),
        o()
    }
      , d = S=>{
        S.target === t && ++f >= u && p()
    }
    ;
    setTimeout(()=>{
        f < u && p()
    }
    , l + 1),
    t.addEventListener(c, d)
}
function at(t, e) {
    const n = window.getComputedStyle(t)
      , s = E=>(n[E] || "").split(", ")
      , r = s(`${v}Delay`)
      , o = s(`${v}Duration`)
      , a = k(r, o)
      , l = s(`${A}Delay`)
      , u = s(`${A}Duration`)
      , c = k(l, u);
    let f = null
      , p = 0
      , d = 0;
    e === v ? a > 0 && (f = v,
    p = a,
    d = o.length) : e === A ? c > 0 && (f = A,
    p = c,
    d = u.length) : (p = Math.max(a, c),
    f = p > 0 ? a > c ? v : A : null,
    d = f ? f === v ? o.length : u.length : 0);
    const S = f === v && /\b(transform|all)(,|$)/.test(s(`${v}Property`).toString());
    return {
        type: f,
        timeout: p,
        propCount: d,
        hasTransform: S
    }
}
function k(t, e) {
    for (; t.length < e.length; )
        t = t.concat(t);
    return Math.max(...e.map((n,s)=>tt(n) + tt(t[s])))
}
function tt(t) {
    return Number(t.slice(0, -1).replace(",", ".")) * 1e3
}
function ct() {
    return document.body.offsetHeight
}
const lt = new WeakMap
  , ft = new WeakMap
  , ut = {
    name: "TransitionGroup",
    props: L({}, se, {
        tag: String,
        moveClass: String
    }),
    setup(t, {slots: e}) {
        const n = Rt()
          , s = Tt();
        let r, o;
        return St(()=>{
            if (!r.length)
                return;
            const a = t.moveClass || `${t.name || "v"}-move`;
            if (!fe(r[0].el, n.vnode.el, a))
                return;
            r.forEach(ae),
            r.forEach(ce);
            const l = r.filter(le);
            ct(),
            l.forEach(u=>{
                const c = u.el
                  , f = c.style;
                g(c, a),
                f.transform = f.webkitTransform = f.transitionDuration = "";
                const p = c._moveCb = d=>{
                    d && d.target !== c || (!d || /transform$/.test(d.propertyName)) && (c.removeEventListener("transitionend", p),
                    c._moveCb = null,
                    h(c, a))
                }
                ;
                c.addEventListener("transitionend", p)
            }
            )
        }
        ),
        ()=>{
            const a = Et(t)
              , l = it(a);
            let u = a.tag || At;
            r = o,
            o = e.default ? wt(e.default()) : [];
            for (let c = 0; c < o.length; c++) {
                const f = o[c];
                f.key != null && W(f, q(f, l, s, n))
            }
            if (r)
                for (let c = 0; c < r.length; c++) {
                    const f = r[c];
                    W(f, q(f, l, s, n)),
                    lt.set(f, f.el.getBoundingClientRect())
                }
            return _t(u, null, o)
        }
    }
}
  , ie = t=>delete t.mode;
ut.props;
const he = ut;
function ae(t) {
    const e = t.el;
    e._moveCb && e._moveCb(),
    e._enterCb && e._enterCb()
}
function ce(t) {
    ft.set(t, t.el.getBoundingClientRect())
}
function le(t) {
    const e = lt.get(t)
      , n = ft.get(t)
      , s = e.left - n.left
      , r = e.top - n.top;
    if (s || r) {
        const o = t.el.style;
        return o.transform = o.webkitTransform = `translate(${s}px,${r}px)`,
        o.transitionDuration = "0s",
        t
    }
}
function fe(t, e, n) {
    const s = t.cloneNode();
    t._vtc && t._vtc.forEach(a=>{
        a.split(/\s+/).forEach(l=>l && s.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a=>a && s.classList.add(a)),
    s.style.display = "none";
    const r = e.nodeType === 1 ? e : e.parentNode;
    r.appendChild(s);
    const {hasTransform: o} = at(s);
    return r.removeChild(s),
    o
}
const ue = ["ctrl", "shift", "alt", "meta"]
  , pe = {
    stop: t=>t.stopPropagation(),
    prevent: t=>t.preventDefault(),
    self: t=>t.target !== t.currentTarget,
    ctrl: t=>!t.ctrlKey,
    shift: t=>!t.shiftKey,
    alt: t=>!t.altKey,
    meta: t=>!t.metaKey,
    left: t=>"button"in t && t.button !== 0,
    middle: t=>"button"in t && t.button !== 1,
    right: t=>"button"in t && t.button !== 2,
    exact: (t,e)=>ue.some(n=>t[`${n}Key`] && !e.includes(n))
}
  , Ce = (t,e)=>(n,...s)=>{
    for (let r = 0; r < e.length; r++) {
        const o = pe[e[r]];
        if (o && o(n, e))
            return
    }
    return t(n, ...s)
}
  , de = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , be = (t,e)=>n=>{
    if (!("key"in n))
        return;
    const s = R(n.key);
    if (e.some(r=>r === s || de[r] === s))
        return t(n)
}
  , pt = L({
    patchProp: ee
}, Kt);
let w, et = !1;
function me() {
    return w || (w = Lt(pt))
}
function ge() {
    return w = et ? w : Nt(pt),
    et = !0,
    w
}
const Te = (...t)=>{
    const e = me().createApp(...t)
      , {mount: n} = e;
    return e.mount = s=>{
        const r = dt(s);
        if (!r)
            return;
        const o = e._component;
        !nt(o) && !o.render && !o.template && (o.template = r.innerHTML),
        r.innerHTML = "";
        const a = n(r, !1, r instanceof SVGElement);
        return r instanceof Element && (r.removeAttribute("v-cloak"),
        r.setAttribute("data-v-app", "")),
        a
    }
    ,
    e
}
  , Se = (...t)=>{
    const e = ge().createApp(...t)
      , {mount: n} = e;
    return e.mount = s=>{
        const r = dt(s);
        if (r)
            return n(r, !0, r instanceof SVGElement)
    }
    ,
    e
}
;
function dt(t) {
    return _(t) ? document.querySelector(t) : t
}
export {rt as T, be as a, he as b, Se as c, Te as d, Ce as w};
