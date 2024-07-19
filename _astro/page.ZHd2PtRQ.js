/*!
 * CookieConsent v2.9.2
 * https://www.github.com/orestbida/cookieconsent
 * Author Orest Bida
 * Released under the MIT License
 */
(function() {
    var Ze = "initCookieConsent";
    typeof window < "u" && typeof window[Ze] != "function" && (window[Ze] = function(kt) {
        var d, I, K, le, J, de, et, tt, X, U, ue, De, He, Ee, B, qe, V, pe, v, ke, Ce, R, D, z, W, m, N, we, Z, ee, C, te, ne, ie, oe, r = {
            mode: "opt-in",
            current_lang: "en",
            auto_language: null,
            autorun: !0,
            page_scripts: !0,
            hide_from_bots: !0,
            cookie_name: "cc_cookie",
            cookie_expiration: 182,
            cookie_domain: location.hostname,
            cookie_path: "/",
            cookie_same_site: "Lax",
            use_rfc_cookie: !1,
            autoclear_cookies: !0,
            revision: 0,
            script_selector: "data-cookiecategory"
        },
         u = {}, g = {}, w = null, O = !0, H = !1, fe = !1, ae = !1, Ie = !1, Ae = !0, F = [], Se = !1, Je = [], nt = [], Ue = [], it = !1, Re = [], ot = [], E = [], A = [], xe = [], ge = document.documentElement, Ct = function(e) {
            typeof (d = e).cookie_expiration == "number" && (r.cookie_expiration = d.cookie_expiration),
            typeof d.cookie_necessary_only_expiration == "number" && (r.cookie_necessary_only_expiration = d.cookie_necessary_only_expiration),
            typeof d.autorun == "boolean" && (r.autorun = d.autorun),
            typeof d.cookie_domain == "string" && (r.cookie_domain = d.cookie_domain),
            typeof d.cookie_same_site == "string" && (r.cookie_same_site = d.cookie_same_site),
            typeof d.cookie_path == "string" && (r.cookie_path = d.cookie_path),
            typeof d.cookie_name == "string" && (r.cookie_name = d.cookie_name),
            typeof d.onAccept == "function" && (ue = d.onAccept),
            typeof d.onFirstAction == "function" && (He = d.onFirstAction),
            typeof d.onChange == "function" && (De = d.onChange),
            d.mode === "opt-out" && (r.mode = "opt-out"),
            typeof d.revision == "number" && (d.revision > -1 && (r.revision = d.revision),
            Ie = !0),
            typeof d.autoclear_cookies == "boolean" && (r.autoclear_cookies = d.autoclear_cookies),
            d.use_rfc_cookie === !0 && (r.use_rfc_cookie = !0),
            typeof d.hide_from_bots == "boolean" && (r.hide_from_bots = d.hide_from_bots),
            r.hide_from_bots && (it = navigator && (navigator.userAgent && /bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent) || navigator.webdriver)),
            r.page_scripts = d.page_scripts === !0,
            d.auto_language === "browser" || d.auto_language === !0 ? r.auto_language = "browser" : d.auto_language === "document" && (r.auto_language = "document"),
            r.current_lang = wt(d.languages, d.current_lang)
        },
         at = function(e) {
            for (var t = "accept-", n = p("c-settings"), i = p(t + "all"), a = p(t + "necessary"), o = p(t + "custom"), c = 0; c < n.length; c++)
                n[c].setAttribute("aria-haspopup", "dialog"),
                y(n[c], "click", function(f) {
                    f.preventDefault(),
                    u.showSettings(0)
                });
            for (c = 0; c < i.length; c++)
                y(i[c], "click", function(f) {
                    s(f, "all")
                });
            for (c = 0; c < o.length; c++)
                y(o[c], "click", function(f) {
                    s(f)
                });
            for (c = 0; c < a.length; c++)
                y(a[c], "click", function(f) {
                    s(f, [])
                });
            function p(f) {
                return (e || document).querySelectorAll('[data-cc="' + f + '"]')
            }
            function s(f, L) {
                f.preventDefault(),
                u.accept(L),
                u.hideSettings(),
                u.hide()
            }
        }, Ne = function(e, t) {
            return t.hasOwnProperty(e) ? e : _e(t).length > 0 ? t.hasOwnProperty(r.current_lang) ? r.current_lang : _e(t)[0] : void 0
        }, ze = function(e) {
            if (d.force_consent === !0 && T(ge, "force--consent"),
            !v) {
                v = l("div");
                var t = l("div")
                  , n = l("div");
                v.id = "cm",
                t.id = "c-inr-i",
                n.id = "cm-ov",
                v.tabIndex = -1,
                v.setAttribute("role", "dialog"),
                v.setAttribute("aria-modal", "true"),
                v.setAttribute("aria-hidden", "false"),
                v.setAttribute("aria-labelledby", "c-ttl"),
                v.setAttribute("aria-describedby", "c-txt"),
                pe.appendChild(v),
                pe.appendChild(n),
                v.style.visibility = n.style.visibility = "hidden",
                n.style.opacity = 0
            }
            var i = d.languages[e].consent_modal.title;
            i && (ke || ((ke = l("h2")).id = "c-ttl",
            t.appendChild(ke)),
            ke.innerHTML = i);
            var a = d.languages[e].consent_modal.description;
            Ie && (a = Ae ? a.replace("{{revision_message}}", "") : a.replace("{{revision_message}}", d.languages[e].consent_modal.revision_message || "")),
            Ce || ((Ce = l("div")).id = "c-txt",
            t.appendChild(Ce)),
            Ce.innerHTML = a;
            var o, c = d.languages[e].consent_modal.primary_btn, p = d.languages[e].consent_modal.secondary_btn;
            c && (R || ((R = l("button")).id = "c-p-bn",
            R.className = "c-bn",
            R.appendChild(Xe(1)),
            c.role === "accept_all" && (o = "all"),
            y(R, "click", function() {
                u.hide(),
                u.accept(o)
            })),
            R.firstElementChild.innerHTML = d.languages[e].consent_modal.primary_btn.text),
            p && (D || ((D = l("button")).id = "c-s-bn",
            D.className = "c-bn c_link",
            D.appendChild(Xe(1)),
            p.role === "accept_necessary" ? y(D, "click", function() {
                u.hide(),
                u.accept([])
            }) : y(D, "click", function() {
                u.showSettings(0)
            })),
            D.firstElementChild.innerHTML = d.languages[e].consent_modal.secondary_btn.text);
            var s = d.gui_options;
            W || ((W = l("div")).id = "c-inr",
            W.appendChild(t)),
            z || ((z = l("div")).id = "c-bns",
            s && s.consent_modal && s.consent_modal.swap_buttons === !0 ? (p && z.appendChild(D),
            c && z.appendChild(R),
            z.className = "swap") : (c && z.appendChild(R),
            p && z.appendChild(D)),
            (c || p) && W.appendChild(z),
            v.appendChild(W)),
            H = !0,
            at(W)
        }, rt = function(e) {
            if (m)
                (C = l("div")).id = "s-bl";
            else {
                (m = l("div")).tabIndex = -1;
                var t = l("div")
                  , n = l("div")
                  , i = l("div");
                N = l("div"),
                we = l("h2");
                var a = l("div");
                (Z = l("button")).appendChild(Xe(2));
                var o = l("div");
                ee = l("div");
                var c = l("div")
                  , p = !1;
                y(m, "mouseup", function(P) {
                    !ae || p || N.contains(P.target) || u.hideSettings()
                }),
                y(m, "mousedown", function(P) {
                    ae && (p = N.contains(P.target))
                }),
                m.id = "s-cnt",
                t.id = "c-vln",
                i.id = "c-s-in",
                n.id = "cs",
                we.id = "s-ttl",
                N.id = "s-inr",
                a.id = "s-hdr",
                ee.id = "s-bl",
                Z.id = "s-c-bn",
                c.id = "cs-ov",
                o.id = "s-c-bnc",
                Z.className = "c-bn",
                m.setAttribute("role", "dialog"),
                m.setAttribute("aria-modal", "true"),
                m.setAttribute("aria-hidden", "true"),
                m.setAttribute("aria-labelledby", "s-ttl"),
                m.style.visibility = c.style.visibility = "hidden",
                c.style.opacity = 0,
                o.appendChild(Z),
                y(document, "keydown", function(P) {
                    P.keyCode === 27 && ae && u.hideSettings()
                }, !0),
                y(Z, "click", function() {
                    u.hideSettings()
                })
            }
            var s = d.languages[e].settings_modal;
            Z.setAttribute("aria-label", s.close_btn_label || "Close"),
            U = s.blocks,
            X = s.cookie_table_headers;
            var f = s.cookie_table_caption
              , L = U.length;
            we.innerHTML = s.title;
            for (var k = 0; k < L; ++k) {
                var b = U[k].title
                  , h = U[k].description
                  , _ = U[k].toggle
                  , x = U[k].cookie_table
                  , ve = d.remove_cookie_tables === !0
                  , re = !!h || !ve && !!x
                  , j = l("div")
                  , M = l("div");
                if (h) {
                    var G = l("div");
                    G.className = "p",
                    G.insertAdjacentHTML("beforeend", h)
                }
                var q = l("div");
                if (q.className = "title",
                j.className = "c-bl",
                M.className = "desc",
                _ !== void 0) {
                    var lt = "c-ac-" + k
                      , Y = l(re ? "button" : "div")
                      , me = l("label")
                      , $ = l("input")
                      , ce = l("span")
                      , Qe = l("span")
                      , dt = l("span")
                      , ut = l("span");
                    Y.className = re ? "b-tl exp" : "b-tl",
                    me.className = "b-tg",
                    $.className = "c-tgl",
                    dt.className = "on-i",
                    ut.className = "off-i",
                    ce.className = "c-tg",
                    Qe.className = "t-lb",
                    re && (Y.setAttribute("aria-expanded", "false"),
                    Y.setAttribute("aria-controls", lt)),
                    $.type = "checkbox",
                    ce.setAttribute("aria-hidden", "true");
                    var be = _.value;
                    $.value = be,
                    Qe.textContent = b,
                    Y.insertAdjacentHTML("beforeend", b),
                    q.appendChild(Y),
                    ce.appendChild(dt),
                    ce.appendChild(ut),
                    O ? _.enabled ? ($.checked = !0,
                    !C && E.push(!0),
                    _.enabled && !C && Ue.push(be)) : !C && E.push(!1) : S(g.categories, be) > -1 ? ($.checked = !0,
                    !C && E.push(!0)) : !C && E.push(!1),
                    !C && A.push(be),
                    _.readonly && ($.disabled = !0,
                    T(ce, "c-ro"),
                    !C && xe.push(be)),
                    T(M, "b-acc"),
                    T(q, "b-bn"),
                    T(j, "b-ex"),
                    M.id = lt,
                    M.setAttribute("aria-hidden", "true"),
                    me.appendChild($),
                    me.appendChild(ce),
                    me.appendChild(Qe),
                    q.appendChild(me),
                    re && function(P, We, yt) {
                        y(Y, "click", function() {
                            St(We, "act") ? (Ke(We, "act"),
                            yt.setAttribute("aria-expanded", "false"),
                            P.setAttribute("aria-hidden", "true")) : (T(We, "act"),
                            yt.setAttribute("aria-expanded", "true"),
                            P.setAttribute("aria-hidden", "false"))
                        }, !1)
                    }(M, j, Y)
                } else if (b) {
                    var ye = l("div");
                    ye.className = "b-tl",
                    ye.setAttribute("role", "heading"),
                    ye.setAttribute("aria-level", "3"),
                    ye.insertAdjacentHTML("beforeend", b),
                    q.appendChild(ye)
                }
                if (b && j.appendChild(q),
                h && M.appendChild(G),
                !ve && x !== void 0) {
                    for (var pt = document.createDocumentFragment(), je = 0; je < X.length; ++je) {
                        var Ye = l("th")
                          , se = X[je];
                        if (Ye.setAttribute("scope", "col"),
                        se) {
                            var Oe = se && _e(se)[0];
                            Ye.textContent = X[je][Oe],
                            pt.appendChild(Ye)
                        }
                    }
                    var ft = l("tr");
                    ft.appendChild(pt);
                    var gt = l("thead");
                    gt.appendChild(ft);
                    var Me = l("table");
                    if (f) {
                        var ht = l("caption");
                        ht.innerHTML = f,
                        Me.appendChild(ht)
                    }
                    Me.appendChild(gt);
                    for (var _t = document.createDocumentFragment(), $e = 0; $e < x.length; $e++) {
                        for (var vt = l("tr"), Be = 0; Be < X.length; ++Be)
                            if (se = X[Be]) {
                                Oe = _e(se)[0];
                                var Ve = l("td");
                                Ve.insertAdjacentHTML("beforeend", x[$e][Oe]),
                                Ve.setAttribute("data-column", se[Oe]),
                                vt.appendChild(Ve)
                            }
                        _t.appendChild(vt)
                    }
                    var mt = l("tbody");
                    mt.appendChild(_t),
                    Me.appendChild(mt),
                    M.appendChild(Me)
                }
                (_ && b || !_ && (b || h)) && (j.appendChild(M),
                C ? C.appendChild(j) : ee.appendChild(j))
            }
            te || ((te = l("div")).id = "s-bns"),
            ie || ((ie = l("button")).id = "s-all-bn",
            ie.className = "c-bn",
            te.appendChild(ie),
            y(ie, "click", function() {
                u.accept("all"),
                u.hideSettings(),
                u.hide()
            })),
            ie.innerHTML = s.accept_all_btn;
            var bt = s.reject_all_btn;
            if (bt && (oe || ((oe = l("button")).id = "s-rall-bn",
            oe.className = "c-bn",
            y(oe, "click", function() {
                u.accept([]),
                u.hideSettings(),
                u.hide()
            }),
            N.className = "bns-t",
            te.appendChild(oe)),
            oe.innerHTML = bt),
            ne || ((ne = l("button")).id = "s-sv-bn",
            ne.className = "c-bn",
            te.appendChild(ne),
            y(ne, "click", function() {
                u.accept(),
                u.hideSettings(),
                u.hide()
            })),
            ne.innerHTML = s.save_settings_btn,
            C)
                return N.replaceChild(C, ee),
                void (ee = C);
            a.appendChild(we),
            a.appendChild(o),
            N.appendChild(a),
            N.appendChild(ee),
            N.appendChild(te),
            i.appendChild(N),
            n.appendChild(i),
            t.appendChild(n),
            m.appendChild(t),
            pe.appendChild(m),
            pe.appendChild(c)
        };
        u.updateLanguage = function(e, t) {
            if (typeof e == "string") {
                var n = Ne(e, d.languages);
                return (n !== r.current_lang || t === !0) && (r.current_lang = n,
                H && ze(n),
                rt(n),
                !0)
            }
        }
        ;
        var ct = function(e) {
            var t = U.length
              , n = -1;
            Se = !1;
            var i = he("", "all")
              , a = [r.cookie_domain, "." + r.cookie_domain];
            if (r.cookie_domain.slice(0, 4) === "www.") {
                var o = r.cookie_domain.substr(4);
                a.push(o),
                a.push("." + o)
            }
            for (var c = 0; c < t; c++) {
                var p = U[c];
                if (p.hasOwnProperty("toggle")) {
                    var s = S(F, p.toggle.value) > -1;
                    if (!E[++n] && p.hasOwnProperty("cookie_table") && (e || s)) {
                        var f = p.cookie_table
                          , L = _e(X[0])[0]
                          , k = f.length;
                        p.toggle.reload === "on_disable" && s && (Se = !0);
                        for (var b = 0; b < k; b++) {
                            var h = a
                              , _ = f[b]
                              , x = []
                              , ve = _[L]
                              , re = _.is_regex || !1
                              , j = _.domain || null
                              , M = _.path || !1;
                            if (j && (h = [j, "." + j]),
                            re)
                                for (var G = 0; G < i.length; G++)
                                    i[G].match(ve) && x.push(i[G]);
                            else {
                                var q = S(i, ve);
                                q > -1 && x.push(i[q])
                            }
                            x.length > 0 && (st(x, M, h),
                            p.toggle.reload === "on_clear" && (Se = !0))
                        }
                    }
                }
            }
        }
          , S = function(e, t) {
            return e.indexOf(t)
        }
          , l = function(e) {
            var t = document.createElement(e);
            return e === "button" && t.setAttribute("type", e),
            t
        }
          , wt = function(e, t) {
            return r.auto_language === "browser" ? Ne(At(), e) : r.auto_language === "document" ? Ne(document.documentElement.lang, e) : typeof t == "string" ? r.current_lang = Ne(t, e) : r.current_lang
        }
          , At = function() {
            var e = navigator.language || navigator.browserLanguage;
            return e.length > 2 && (e = e[0] + e[1]),
            e.toLowerCase()
        };
        u.allowedCategory = function(e) {
            if (O && r.mode !== "opt-in")
                t = Ue;
            else
                var t = JSON.parse(he(r.cookie_name, "one", !0) || "{}").categories || [];
            return S(t, e) > -1
        }
        ,
        u.run = function(e) {
            if (!document.getElementById("cc_div")) {
                if (Ct(e),
                it)
                    return;
                g = JSON.parse(he(r.cookie_name, "one", !0) || "{}");
                var t = (le = g.consent_uuid) !== void 0;
                if ((I = g.consent_date) && (I = new Date(I)),
                (K = g.last_consent_update) && (K = new Date(K)),
                w = g.data !== void 0 ? g.data : null,
                Ie && g.revision !== r.revision && (Ae = !1),
                H = O = !(t && Ae && I && K && le),
                function() {
                    (V = l("div")).id = "cc--main",
                    V.style.position = "fixed",
                    V.innerHTML = '<div id="cc_div" class="cc_div"></div>',
                    pe = V.children[0];
                    var i = r.current_lang;
                    H && ze(i),
                    rt(i),
                    (kt || document.body).appendChild(V)
                }(),
                function() {
                    var i = ["[href]", "button", "input", "details", '[tabindex="0"]'];
                    function a(o, c) {
                        try {
                            var p = o.querySelectorAll(i.join(':not([tabindex="-1"]), '))
                        } catch {
                            return o.querySelectorAll(i.join(", "))
                        }
                        c[0] = p[0],
                        c[1] = p[p.length - 1]
                    }
                    a(N, ot),
                    H && a(v, Re)
                }(),
                function(i, a) {
                    if (typeof i == "object") {
                        var o = i.consent_modal
                          , c = i.settings_modal;
                        H && o && p(v, ["box", "bar", "cloud"], ["top", "middle", "bottom"], ["zoom", "slide"], o.layout, o.position, o.transition),
                        c && p(m, ["bar"], ["left", "right"], ["zoom", "slide"], c.layout, c.position, c.transition)
                    }
                    function p(s, f, L, k, b, h, _) {
                        if (h = h && h.split(" ") || [],
                        S(f, b) > -1 && (T(s, b),
                        (b !== "bar" || h[0] !== "middle") && S(L, h[0]) > -1))
                            for (var x = 0; x < h.length; x++)
                                T(s, h[x]);
                        S(k, _) > -1 && T(s, _)
                    }
                }(e.gui_options),
                at(),
                r.autorun && H && u.show(e.delay || 0),
                setTimeout(function() {
                    T(V, "c--anim")
                }, 30),
                setTimeout(function() {
                    y(document, "keydown", function(i) {
                        if (i.key === "Tab" && (fe || ae) && J) {
                            var a = Le();
                            i.shiftKey ? a !== J[0] && de.contains(a) || (i.preventDefault(),
                            Q(J[1])) : a !== J[1] && de.contains(a) || (i.preventDefault(),
                            Q(J[0]))
                        }
                    })
                }, 100),
                O)
                    r.mode === "opt-out" && Te();
                else {
                    var n = typeof g.rfc_cookie == "boolean";
                    (!n || n && g.rfc_cookie !== r.use_rfc_cookie) && (g.rfc_cookie = r.use_rfc_cookie,
                    Pe(r.cookie_name, JSON.stringify(g))),
                    Ee = Ge(Fe()),
                    Te(),
                    typeof ue == "function" && ue(g)
                }
            }
        }
        ;
        var Te = function() {
            if (r.page_scripts) {
                var e = g.categories || [];
                O && r.mode === "opt-out" && (e = Ue);
                var t = document.querySelectorAll("script[" + r.script_selector + "]")
                  , n = function(i, a) {
                    if (a < i.length) {
                        var o = i[a]
                          , c = o.getAttribute(r.script_selector);
                        if (S(e, c) > -1) {
                            o.type = o.getAttribute("data-type") || "text/javascript",
                            o.removeAttribute(r.script_selector);
                            var p = o.getAttribute("data-src");
                            p && o.removeAttribute("data-src");
                            var s = l("script");
                            if (s.textContent = o.innerHTML,
                            function(f, L) {
                                for (var k = L.attributes, b = k.length, h = 0; h < b; h++) {
                                    var _ = k[h].nodeName;
                                    f.setAttribute(_, L[_] || L.getAttribute(_))
                                }
                            }(s, o),
                            p ? s.src = p : p = o.src,
                            p && (s.readyState ? s.onreadystatechange = function() {
                                s.readyState !== "loaded" && s.readyState !== "complete" || (s.onreadystatechange = null,
                                n(i, ++a))
                            }
                            : s.onload = function() {
                                s.onload = null,
                                n(i, ++a)
                            }
                            ),
                            o.parentNode.replaceChild(s, o),
                            p)
                                return
                        }
                        n(i, ++a)
                    }
                };
                n(t, 0)
            }
        };
        u.set = function(e, t) {
            return e === "data" && function(n, i) {
                var a = !1;
                if (i === "update") {
                    var o = typeof (w = u.get("data")) == typeof n;
                    if (o && typeof w == "object")
                        for (var c in !w && (w = {}),
                        n)
                            w[c] !== n[c] && (w[c] = n[c],
                            a = !0);
                    else
                        !o && w || w === n || (w = n,
                        a = !0)
                } else
                    w = n,
                    a = !0;
                return a && (g.data = w,
                Pe(r.cookie_name, JSON.stringify(g))),
                a
            }(t.value, t.mode)
        }
        ,
        u.get = function(e, t) {
            return JSON.parse(he(t || r.cookie_name, "one", !0) || "{}")[e]
        }
        ,
        u.getConfig = function(e) {
            return r[e] || d[e]
        }
        ;
        var Fe = function() {
            return Je = g.categories || [],
            nt = A.filter(function(e) {
                return S(Je, e) === -1
            }),
            {
                accepted: Je,
                rejected: nt
            }
        }
          , Ge = function(e) {
            var t = "custom"
              , n = xe.length;
            return e.accepted.length === A.length ? t = "all" : e.accepted.length === n && (t = "necessary"),
            t
        };
        u.getUserPreferences = function() {
            var e = Fe();
            return {
                accept_type: Ge(e),
                accepted_categories: e.accepted,
                rejected_categories: e.rejected
            }
        }
        ,
        u.loadScript = function(e, t, n) {
            var i = typeof t == "function";
            if (document.querySelector('script[src="' + e + '"]'))
                i && t();
            else {
                var a = l("script");
                if (n && n.length > 0)
                    for (var o = 0; o < n.length; ++o)
                        n[o] && a.setAttribute(n[o].name, n[o].value);
                i && (a.onload = t),
                a.src = e,
                document.head.appendChild(a)
            }
        }
        ,
        u.updateScripts = function() {
            Te()
        }
        ,
        u.show = function(e, t) {
            t === !0 && ze(r.current_lang),
            H && (B = Le(),
            J = Re,
            de = v,
            fe = !0,
            v.removeAttribute("aria-hidden"),
            setTimeout(function() {
                T(ge, "show--consent")
            }, e > 0 ? e : t ? 30 : 0))
        }
        ,
        u.hide = function() {
            H && (fe = !1,
            Q(et),
            v.setAttribute("aria-hidden", "true"),
            Ke(ge, "show--consent"),
            Q(B),
            B = null)
        }
        ,
        u.showSettings = function(e) {
            ae = !0,
            m.removeAttribute("aria-hidden"),
            fe ? qe = Le() : B = Le(),
            de = m,
            J = ot,
            setTimeout(function() {
                T(ge, "show--settings")
            }, e > 0 ? e : 0)
        }
        ,
        u.hideSettings = function() {
            ae = !1,
            xt(),
            Q(tt),
            m.setAttribute("aria-hidden", "true"),
            Ke(ge, "show--settings"),
            fe ? (Q(qe),
            qe = null,
            de = v,
            J = Re) : (Q(B),
            B = null)
        }
        ,
        u.accept = function(e, t) {
            var n = e || void 0
              , i = t || []
              , a = [];
            if (n)
                if (typeof n == "object" && typeof n.length == "number")
                    for (var o = 0; o < n.length; o++)
                        S(A, n[o]) !== -1 && a.push(n[o]);
                else
                    typeof n == "string" && (n === "all" ? a = A.slice() : S(A, n) !== -1 && a.push(n));
            else
                a = function() {
                    for (var c = document.querySelectorAll(".c-tgl") || [], p = [], s = 0; s < c.length; s++)
                        c[s].checked && p.push(c[s].value);
                    return p
                }();
            if (i.length >= 1)
                for (o = 0; o < i.length; o++)
                    a = a.filter(function(c) {
                        return c !== i[o]
                    });
            for (o = 0; o < A.length; o++)
                xe.includes(A[o]) === !0 && S(a, A[o]) === -1 && a.push(A[o]);
            (function(c) {
                F = [];
                var p = m.querySelectorAll(".c-tgl") || [];
                if (p.length > 0)
                    for (var s = 0; s < p.length; s++)
                        S(c, A[s]) !== -1 ? (p[s].checked = !0,
                        E[s] || (F.push(A[s]),
                        E[s] = !0)) : (p[s].checked = !1,
                        E[s] && (F.push(A[s]),
                        E[s] = !1));
                !O && r.autoclear_cookies && F.length > 0 && ct(),
                I || (I = new Date),
                le || (le = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, function(f) {
                    try {
                        return (f ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> f / 4).toString(16)
                    } catch {
                        return ""
                    }
                })),
                g = {
                    categories: c,
                    level: c,
                    revision: r.revision,
                    data: w,
                    rfc_cookie: r.use_rfc_cookie,
                    consent_date: I.toISOString(),
                    consent_uuid: le
                },
                (O || F.length > 0) && (Ae = !0,
                K = K ? new Date : I,
                g.last_consent_update = K.toISOString(),
                Ee = Ge(Fe()),
                Pe(r.cookie_name, JSON.stringify(g)),
                Te()),
                O && (r.autoclear_cookies && ct(!0),
                typeof He == "function" && He(u.getUserPreferences(), g),
                typeof ue == "function" && ue(g),
                O = !1,
                r.mode === "opt-in") || (typeof De == "function" && F.length > 0 && De(g, F),
                Se && location.reload())
            }
            )(a)
        }
        ,
        u.eraseCookies = function(e, t, n) {
            var i = []
              , a = n ? [n, "." + n] : [r.cookie_domain, "." + r.cookie_domain];
            if (typeof e == "object" && e.length > 0)
                for (var o = 0; o < e.length; o++)
                    this.validCookie(e[o]) && i.push(e[o]);
            else
                this.validCookie(e) && i.push(e);
            st(i, t, a)
        }
        ;
        var Pe = function(e, t) {
            var n = r.cookie_expiration;
            typeof r.cookie_necessary_only_expiration == "number" && Ee === "necessary" && (n = r.cookie_necessary_only_expiration),
            t = r.use_rfc_cookie ? encodeURIComponent(t) : t;
            var i = new Date;
            i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
            var a = e + "=" + (t || "") + "; expires=" + i.toUTCString() + "; Path=" + r.cookie_path + ";";
            a += " SameSite=" + r.cookie_same_site + ";",
            location.hostname.indexOf(".") > -1 && r.cookie_domain && (a += " Domain=" + r.cookie_domain + ";"),
            location.protocol === "https:" && (a += " Secure;"),
            document.cookie = a
        }
          , he = function(e, t, n) {
            var i;
            if (t === "one") {
                if ((i = (i = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)")) ? n ? i.pop() : e : "") && e === r.cookie_name) {
                    try {
                        i = JSON.parse(i)
                    } catch {
                        try {
                            i = JSON.parse(decodeURIComponent(i))
                        } catch {
                            i = {}
                        }
                    }
                    i = JSON.stringify(i)
                }
            } else if (t === "all") {
                var a = document.cookie.split(/;\s*/);
                i = [];
                for (var o = 0; o < a.length; o++)
                    i.push(a[o].split("=")[0])
            }
            return i
        }
          , st = function(e, t, n) {
            for (var i = t || "/", a = 0; a < e.length; a++) {
                for (var o = 0; o < n.length; o++)
                    document.cookie = e[a] + "=; path=" + i + (n[o].indexOf(".") == 0 ? "; domain=" + n[o] : "") + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
                e[a]
            }
        };
        u.validCookie = function(e) {
            return he(e, "one", !0) !== ""
        }
        ,
        u.validConsent = function() {
            return !O
        }
        ;
        var y = function(e, t, n, i) {
            e.addEventListener(t, n, i === !0 && {
                passive: !0
            })
        }
          , _e = function(e) {
            if (typeof e == "object")
                return Object.keys(e)
        }
          , T = function(e, t) {
            e.classList.add(t)
        }
          , Ke = function(e, t) {
            e.classList.remove(t)
        }
          , St = function(e, t) {
            return e.classList.contains(t)
        }
          , Xe = function(e) {
            var t = l("span");
            return t.tabIndex = -1,
            e === 1 ? et = t : tt = t,
            t
        }
          , Q = function(e) {
            e && e instanceof HTMLElement && e.focus()
        }
          , xt = function() {
            for (var e = N.querySelectorAll(".c-tgl"), t = 0; t < e.length; t++) {
                var n = e[t].value
                  , i = xe.includes(n);
                e[t].checked = i || u.allowedCategory(n)
            }
        }
          , Le = function() {
            return document.activeElement
        };
        return u
    }
    )
}
)();
window.cookieConsentConfiguration = {
    current_lang: "en",
    autorun: !1,
    autoclear_cookies: !0,
    page_scripts: !0,
    languages: {
        en: {
            consent_modal: {
                title: "Cookies & Tracking",
                description: 'We use cookies and tracking to analyze the usage of our website and continuously improve it. By clicking on "Agree" you consent to the use of cookies and tracking. For more information, please refer to the privacy policy and the imprint.',
                primary_btn: {
                    text: "Agree",
                    role: "accept_all"
                },
                secondary_btn: {
                    text: "Settings",
                    role: "settings"
                }
            },
            settings_modal: {
                title: "Cookie settings",
                accept_all_btn: "Accept all",
                reject_all_btn: "Reject all",
                close_btn_label: "Close",
                save_settings_btn: "Save settings",
                cookie_table_headers: [{
                    col1: "Name"
                }, {
                    col2: "Service"
                }, {
                    col3: "Description"
                }],
                blocks: []
            }
        }
    },
    gui_options: {
        consent_modal: {
            title: "Cookies & Tracking",
            layout: "cloud",
            position: "bottom center",
            transition: "slide",
            swap_buttons: !1
        },
        settings_modal: {
            layout: "box",
            transition: "slide"
        }
    }
};
window.cookieConsent = initCookieConsent();
window.cookieConsent.run(window.cookieConsentConfiguration);
