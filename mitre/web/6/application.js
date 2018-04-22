function IsIdInArray(t, e) {
    for (var n = 0; n < t.length; n++)
        if (t[n] === e)
            return !0;
    return !1
}
var ready_run_once;
!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(C, t) {
    "use strict";
    function m(t, e, n) {
        var r, i = (e = e || st).createElement("script");
        if (i.text = t,
        n)
            for (r in Et)
                n[r] && (i[r] = n[r]);
        e.head.appendChild(i).parentNode.removeChild(i)
    }
    function g(t) {
        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ht[dt.call(t)] || "object" : typeof t
    }
    function a(t) {
        var e = !!t && "length"in t && t.length
          , n = g(t);
        return !vt(t) && !bt(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    function l(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    function e(t, n, r) {
        return vt(n) ? _t.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        }) : n.nodeType ? _t.grep(t, function(t) {
            return t === n !== r
        }) : "string" != typeof n ? _t.grep(t, function(t) {
            return -1 < ft.call(n, t) !== r
        }) : _t.filter(n, t, r)
    }
    function n(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function c(t) {
        var n = {};
        return _t.each(t.match(Nt) || [], function(t, e) {
            n[e] = !0
        }),
        n
    }
    function f(t) {
        return t
    }
    function h(t) {
        throw t
    }
    function u(t, e, n, r) {
        var i;
        try {
            t && vt(i = t.promise) ? i.call(t).done(e).fail(n) : t && vt(i = t.then) ? i.call(t, e, n) : e.apply(undefined, [t].slice(r))
        } catch (t) {
            n.apply(undefined, [t])
        }
    }
    function r() {
        st.removeEventListener("DOMContentLoaded", r),
        C.removeEventListener("load", r),
        _t.ready()
    }
    function i(t, e) {
        return e.toUpperCase()
    }
    function d(t) {
        return t.replace(jt, "ms-").replace(Mt, i)
    }
    function o() {
        this.expando = _t.expando + o.uid++
    }
    function s(t) {
        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Bt.test(t) ? JSON.parse(t) : t)
    }
    function p(t, e, n) {
        var r;
        if (n === undefined && 1 === t.nodeType)
            if (r = "data-" + e.replace(Ut, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(r))) {
                try {
                    n = s(n)
                } catch (i) {}
                Ft.set(t, e, n)
            } else
                n = undefined;
        return n
    }
    function y(t, e, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return _t.css(t, e, "")
        }
        , u = a(), l = n && n[3] || (_t.cssNumber[e] ? "" : "px"), c = (_t.cssNumber[e] || "px" !== l && +u) && Gt.exec(_t.css(t, e));
        if (c && c[3] !== l) {
            for (u /= 2,
            l = l || c[3],
            c = +u || 1; s--; )
                _t.style(t, e, c + l),
                (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0),
                c /= o;
            c *= 2,
            _t.style(t, e, c + l),
            n = n || []
        }
        return n && (c = +c || +u || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
        r.start = c,
        r.end = i)),
        i
    }
    function v(t) {
        var e, n = t.ownerDocument, r = t.nodeName, i = Xt[r];
        return i || (e = n.body.appendChild(n.createElement(r)),
        i = _t.css(e, "display"),
        e.parentNode.removeChild(e),
        "none" === i && (i = "block"),
        Xt[r] = i)
    }
    function b(t, e) {
        for (var n, r, i = [], o = 0, s = t.length; o < s; o++)
            (r = t[o]).style && (n = r.style.display,
            e ? ("none" === n && (i[o] = Wt.get(r, "display") || null,
            i[o] || (r.style.display = "")),
            "" === r.style.display && $t(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none",
            Wt.set(r, "display", n)));
        for (o = 0; o < s; o++)
            null != i[o] && (t[o].style.display = i[o]);
        return t
    }
    function E(t, e) {
        var n;
        return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        e === undefined || e && l(t, e) ? _t.merge([t], n) : n
    }
    function T(t, e) {
        for (var n = 0, r = t.length; n < r; n++)
            Wt.set(t[n], "globalEval", !e || Wt.get(e[n], "globalEval"))
    }
    function _(t, e, n, r, i) {
        for (var o, s, a, u, l, c, f = e.createDocumentFragment(), h = [], d = 0, p = t.length; d < p; d++)
            if ((o = t[d]) || 0 === o)
                if ("object" === g(o))
                    _t.merge(h, o.nodeType ? [o] : o);
                else if (ne.test(o)) {
                    for (s = s || f.appendChild(e.createElement("div")),
                    a = (Yt.exec(o) || ["", ""])[1].toLowerCase(),
                    u = Zt[a] || Zt._default,
                    s.innerHTML = u[1] + _t.htmlPrefilter(o) + u[2],
                    c = u[0]; c--; )
                        s = s.lastChild;
                    _t.merge(h, s.childNodes),
                    (s = f.firstChild).textContent = ""
                } else
                    h.push(e.createTextNode(o));
        for (f.textContent = "",
        d = 0; o = h[d++]; )
            if (r && -1 < _t.inArray(o, r))
                i && i.push(o);
            else if (l = _t.contains(o.ownerDocument, o),
            s = E(f.appendChild(o), "script"),
            l && T(s),
            n)
                for (c = 0; o = s[c++]; )
                    Jt.test(o.type || "") && n.push(o);
        return f
    }
    function w() {
        return !0
    }
    function S() {
        return !1
    }
    function A() {
        try {
            return st.activeElement
        } catch (t) {}
    }
    function x(t, e, n, r, i, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (r = r || n,
            n = undefined),
            e)
                x(t, a, n, r, e[a], o);
            return t
        }
        if (null == r && null == i ? (i = n,
        r = n = undefined) : null == i && ("string" == typeof n ? (i = r,
        r = undefined) : (i = r,
        r = n,
        n = undefined)),
        !1 === i)
            i = S;
        else if (!i)
            return t;
        return 1 === o && (s = i,
        (i = function(t) {
            return _t().off(t),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = _t.guid++)),
        t.each(function() {
            _t.event.add(this, e, i, r, n)
        })
    }
    function D(t, e) {
        return l(t, "table") && l(11 !== e.nodeType ? e : e.firstChild, "tr") && _t(t).children("tbody")[0] || t
    }
    function k(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function I(t) {
        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
        t
    }
    function O(t, e) {
        var n, r, i, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (Wt.hasData(t) && (o = Wt.access(t),
            s = Wt.set(e, o),
            l = o.events))
                for (i in delete s.handle,
                s.events = {},
                l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        _t.event.add(e, i, l[i][n]);
            Ft.hasData(t) && (a = Ft.access(t),
            u = _t.extend({}, a),
            Ft.set(e, u))
        }
    }
    function L(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && zt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function N(n, r, i, o) {
        r = lt.apply([], r);
        var t, e, s, a, u, l, c = 0, f = n.length, h = f - 1, d = r[0], p = vt(d);
        if (p || 1 < f && "string" == typeof d && !yt.checkClone && le.test(d))
            return n.each(function(t) {
                var e = n.eq(t);
                p && (r[0] = d.call(this, t, e.html())),
                N(e, r, i, o)
            });
        if (f && (e = (t = _(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === t.childNodes.length && (t = e),
        e || o)) {
            for (a = (s = _t.map(E(t, "script"), k)).length; c < f; c++)
                u = t,
                c !== h && (u = _t.clone(u, !0, !0),
                a && _t.merge(s, E(u, "script"))),
                i.call(n[c], u, c);
            if (a)
                for (l = s[s.length - 1].ownerDocument,
                _t.map(s, I),
                c = 0; c < a; c++)
                    u = s[c],
                    Jt.test(u.type || "") && !Wt.access(u, "globalEval") && _t.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? _t._evalUrl && _t._evalUrl(u.src) : m(u.textContent.replace(ce, ""), l, u))
        }
        return n
    }
    function P(t, e, n) {
        for (var r, i = e ? _t.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || _t.cleanData(E(r)),
            r.parentNode && (n && _t.contains(r.ownerDocument, r) && T(E(r, "script")),
            r.parentNode.removeChild(r));
        return t
    }
    function R(t, e, n) {
        var r, i, o, s, a = t.style;
        return (n = n || he(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || _t.contains(t.ownerDocument, t) || (s = _t.style(t, e)),
        !yt.pixelBoxStyles() && fe.test(s) && de.test(e) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o)),
        s !== undefined ? s + "" : s
    }
    function H(t, e) {
        return {
            get: function() {
                if (!t())
                    return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }
    function j(t) {
        if (t in be)
            return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ve.length; n--; )
            if ((t = ve[n] + e)in be)
                return t
    }
    function M(t) {
        var e = _t.cssProps[t];
        return e || (e = _t.cssProps[t] = j(t) || t),
        e
    }
    function q(t, e, n) {
        var r = Gt.exec(e);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
    }
    function W(t, e, n, r, i, o) {
        var s = "width" === e ? 1 : 0
          , a = 0
          , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (u += _t.css(t, n + Kt[s], !0, i)),
            r ? ("content" === n && (u -= _t.css(t, "padding" + Kt[s], !0, i)),
            "margin" !== n && (u -= _t.css(t, "border" + Kt[s] + "Width", !0, i))) : (u += _t.css(t, "padding" + Kt[s], !0, i),
            "padding" !== n ? u += _t.css(t, "border" + Kt[s] + "Width", !0, i) : a += _t.css(t, "border" + Kt[s] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - a - .5))),
        u
    }
    function F(t, e, n) {
        var r = he(t)
          , i = R(t, e, r)
          , o = "border-box" === _t.css(t, "boxSizing", !1, r)
          , s = o;
        if (fe.test(i)) {
            if (!n)
                return i;
            i = "auto"
        }
        return s = s && (yt.boxSizingReliable() || i === t.style[e]),
        ("auto" === i || !parseFloat(i) && "inline" === _t.css(t, "display", !1, r)) && (i = t["offset" + e[0].toUpperCase() + e.slice(1)],
        s = !0),
        (i = parseFloat(i) || 0) + W(t, e, n || (o ? "border" : "content"), s, r, i) + "px"
    }
    function B(t, e, n, r, i) {
        return new B.prototype.init(t,e,n,r,i)
    }
    function U() {
        Te && (!1 === st.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(U) : C.setTimeout(U, _t.fx.interval),
        _t.fx.tick())
    }
    function V() {
        return C.setTimeout(function() {
            Ee = undefined
        }),
        Ee = Date.now()
    }
    function G(t, e) {
        var n, r = 0, i = {
            height: t
        };
        for (e = e ? 1 : 0; r < 4; r += 2 - e)
            i["margin" + (n = Kt[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t),
        i
    }
    function K(t, e, n) {
        for (var r, i = (X.tweeners[e] || []).concat(X.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t))
                return r
    }
    function $(t, e, n) {
        var r, i, o, s, a, u, l, c, f = "width"in e || "height"in e, h = this, d = {}, p = t.style, m = t.nodeType && $t(t), g = Wt.get(t, "fxshow");
        for (r in n.queue || (null == (s = _t._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
        a = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || a()
        }
        ),
        s.unqueued++,
        h.always(function() {
            h.always(function() {
                s.unqueued--,
                _t.queue(t, "fx").length || s.empty.fire()
            })
        })),
        e)
            if (i = e[r],
            Ce.test(i)) {
                if (delete e[r],
                o = o || "toggle" === i,
                i === (m ? "hide" : "show")) {
                    if ("show" !== i || !g || g[r] === undefined)
                        continue;
                    m = !0
                }
                d[r] = g && g[r] || _t.style(t, r)
            }
        if ((u = !_t.isEmptyObject(e)) || !_t.isEmptyObject(d))
            for (r in f && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
            null == (l = g && g.display) && (l = Wt.get(t, "display")),
            "none" === (c = _t.css(t, "display")) && (l ? c = l : (b([t], !0),
            l = t.style.display || l,
            c = _t.css(t, "display"),
            b([t]))),
            ("inline" === c || "inline-block" === c && null != l) && "none" === _t.css(t, "float") && (u || (h.done(function() {
                p.display = l
            }),
            null == l && (c = p.display,
            l = "none" === c ? "" : c)),
            p.display = "inline-block")),
            n.overflow && (p.overflow = "hidden",
            h.always(function() {
                p.overflow = n.overflow[0],
                p.overflowX = n.overflow[1],
                p.overflowY = n.overflow[2]
            })),
            u = !1,
            d)
                u || (g ? "hidden"in g && (m = g.hidden) : g = Wt.access(t, "fxshow", {
                    display: l
                }),
                o && (g.hidden = !m),
                m && b([t], !0),
                h.done(function() {
                    for (r in m || b([t]),
                    Wt.remove(t, "fxshow"),
                    d)
                        _t.style(t, r, d[r])
                })),
                u = K(m ? g[r] : 0, r, h),
                r in g || (g[r] = u.start,
                m && (u.end = u.start,
                u.start = 0))
    }
    function Q(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (i = e[r = d(n)],
            o = t[n],
            Array.isArray(o) && (i = o[1],
            o = t[n] = o[0]),
            n !== r && (t[r] = o,
            delete t[n]),
            (s = _t.cssHooks[r]) && "expand"in s)
                for (n in o = s.expand(o),
                delete t[r],
                o)
                    n in t || (t[n] = o[n],
                    e[n] = i);
            else
                e[r] = i
    }
    function X(o, t, e) {
        var n, s, r = 0, i = X.prefilters.length, a = _t.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (s)
                return !1;
            for (var t = Ee || V(), e = Math.max(0, l.startTime + l.duration - t), n = 1 - (e / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return a.notifyWith(o, [l, n, e]),
            n < 1 && i ? e : (i || a.notifyWith(o, [l, 1, 0]),
            a.resolveWith(o, [l]),
            !1)
        }, l = a.promise({
            elem: o,
            props: _t.extend({}, t),
            opts: _t.extend(!0, {
                specialEasing: {},
                easing: _t.easing._default
            }, e),
            originalProperties: t,
            originalOptions: e,
            startTime: Ee || V(),
            duration: e.duration,
            tweens: [],
            createTween: function(t, e) {
                var n = _t.Tween(o, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(n),
                n
            },
            stop: function(t) {
                var e = 0
                  , n = t ? l.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; e < n; e++)
                    l.tweens[e].run(1);
                return t ? (a.notifyWith(o, [l, 1, 0]),
                a.resolveWith(o, [l, t])) : a.rejectWith(o, [l, t]),
                this
            }
        }), c = l.props;
        for (Q(c, l.opts.specialEasing); r < i; r++)
            if (n = X.prefilters[r].call(l, o, c, l.opts))
                return vt(n.stop) && (_t._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                n;
        return _t.map(c, K, l),
        vt(l.opts.start) && l.opts.start.call(o, l),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
        _t.fx.timer(_t.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })),
        l
    }
    function z(t) {
        return (t.match(Nt) || []).join(" ")
    }
    function Y(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    function J(t) {
        return Array.isArray(t) ? t : "string" == typeof t && t.match(Nt) || []
    }
    function Z(n, t, r, i) {
        var e;
        if (Array.isArray(t))
            _t.each(t, function(t, e) {
                r || He.test(n) ? i(n, e) : Z(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, r, i)
            });
        else if (r || "object" !== g(t))
            i(n, t);
        else
            for (e in t)
                Z(n + "[" + e + "]", t[e], r, i)
    }
    function tt(o) {
        return function(t, e) {
            "string" != typeof t && (e = t,
            t = "*");
            var n, r = 0, i = t.toLowerCase().match(Nt) || [];
            if (vt(e))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }
    function et(e, i, o, s) {
        function a(t) {
            var r;
            return u[t] = !0,
            _t.each(e[t] || [], function(t, e) {
                var n = e(i, o, s);
                return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                a(n),
                !1)
            }),
            r
        }
        var u = {}
          , l = e === Qe;
        return a(i.dataTypes[0]) || !u["*"] && a("*")
    }
    function nt(t, e) {
        var n, r, i = _t.ajaxSettings.flatOptions || {};
        for (n in e)
            e[n] !== undefined && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && _t.extend(!0, t, r),
        t
    }
    function rt(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function it(t, e, n, r) {
        var i, o, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
            !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (!(s = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    var ot = []
      , st = C.document
      , at = Object.getPrototypeOf
      , ut = ot.slice
      , lt = ot.concat
      , ct = ot.push
      , ft = ot.indexOf
      , ht = {}
      , dt = ht.toString
      , pt = ht.hasOwnProperty
      , mt = pt.toString
      , gt = mt.call(Object)
      , yt = {}
      , vt = function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType
    }
      , bt = function(t) {
        return null != t && t === t.window
    }
      , Et = {
        type: !0,
        src: !0,
        noModule: !0
    }
      , Tt = "3.3.1"
      , _t = function(t, e) {
        return new _t.fn.init(t,e)
    }
      , wt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    _t.fn = _t.prototype = {
        jquery: Tt,
        constructor: _t,
        length: 0,
        toArray: function() {
            return ut.call(this)
        },
        get: function(t) {
            return null == t ? ut.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = _t.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return _t.each(this, t)
        },
        map: function(n) {
            return this.pushStack(_t.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(ut.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ct,
        sort: ot.sort,
        splice: ot.splice
    },
    _t.extend = _t.fn.extend = function(t) {
        var e, n, r, i, o, s, a = t || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[u] || {},
        u++),
        "object" == typeof a || vt(a) || (a = {}),
        u === l && (a = this,
        u--); u < l; u++)
            if (null != (e = arguments[u]))
                for (n in e)
                    r = a[n],
                    a !== (i = e[n]) && (c && i && (_t.isPlainObject(i) || (o = Array.isArray(i))) ? (o ? (o = !1,
                    s = r && Array.isArray(r) ? r : []) : s = r && _t.isPlainObject(r) ? r : {},
                    a[n] = _t.extend(c, s, i)) : i !== undefined && (a[n] = i));
        return a
    }
    ,
    _t.extend({
        expando: "jQuery" + (Tt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== dt.call(t)) && (!(e = at(t)) || "function" == typeof (n = pt.call(e, "constructor") && e.constructor) && mt.call(n) === gt)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        globalEval: function(t) {
            m(t)
        },
        each: function(t, e) {
            var n, r = 0;
            if (a(t))
                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++)
                    ;
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(wt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (a(Object(t)) ? _t.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : ft.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++)
                t[i++] = e[r];
            return t.length = i,
            t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++)
                !e(t[i], i) !== s && r.push(t[i]);
            return r
        },
        map: function(t, e, n) {
            var r, i, o = 0, s = [];
            if (a(t))
                for (r = t.length; o < r; o++)
                    null != (i = e(t[o], o, n)) && s.push(i);
            else
                for (o in t)
                    null != (i = e(t[o], o, n)) && s.push(i);
            return lt.apply([], s)
        },
        guid: 1,
        support: yt
    }),
    "function" == typeof Symbol && (_t.fn[Symbol.iterator] = ot[Symbol.iterator]),
    _t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        ht["[object " + e + "]"] = e.toLowerCase()
    });
    var Ct = function(n) {
        function E(t, e, n, r) {
            var i, o, s, a, u, l, c, f = e && e.ownerDocument, h = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((e ? e.ownerDocument || e : F) !== N && L(e),
            e = e || N,
            R)) {
                if (11 !== h && (u = yt.exec(t)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(s = e.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (f && (s = f.getElementById(i)) && q(e, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return J.apply(n, e.getElementsByTagName(t)),
                            n;
                        if ((i = u[3]) && _.getElementsByClassName && e.getElementsByClassName)
                            return J.apply(n, e.getElementsByClassName(i)),
                            n
                    }
                if (_.qsa && !K[t + " "] && (!H || !H.test(t))) {
                    if (1 !== h)
                        f = e,
                        c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(Tt, _t) : e.setAttribute("id", a = W),
                        o = (l = A(t)).length; o--; )
                            l[o] = "#" + a + " " + m(l[o]);
                        c = l.join(","),
                        f = vt.test(t) && p(e.parentNode) || e
                    }
                    if (c)
                        try {
                            return J.apply(n, f.querySelectorAll(c)),
                            n
                        } catch (d) {} finally {
                            a === W && e.removeAttribute("id")
                        }
                }
            }
            return D(t.replace(at, "$1"), e, n, r)
        }
        function t() {
            function n(t, e) {
                return r.push(t + " ") > w.cacheLength && delete n[r.shift()],
                n[t + " "] = e
            }
            var r = [];
            return n
        }
        function u(t) {
            return t[W] = !0,
            t
        }
        function i(t) {
            var e = N.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function e(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                w.attrHandle[n[r]] = e
        }
        function l(t, e) {
            var n = e && t
              , r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function r(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function o(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ct(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function a(s) {
            return u(function(o) {
                return o = +o,
                u(function(t, e) {
                    for (var n, r = s([], t.length, o), i = r.length; i--; )
                        t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }
        function p(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function c() {}
        function m(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++)
                r += t[e].value;
            return r
        }
        function f(a, t, e) {
            var u = t.dir
              , l = t.next
              , c = l || u
              , f = e && "parentNode" === c
              , h = U++;
            return t.first ? function(t, e, n) {
                for (; t = t[u]; )
                    if (1 === t.nodeType || f)
                        return a(t, e, n);
                return !1
            }
            : function(t, e, n) {
                var r, i, o, s = [B, h];
                if (n) {
                    for (; t = t[u]; )
                        if ((1 === t.nodeType || f) && a(t, e, n))
                            return !0
                } else
                    for (; t = t[u]; )
                        if (1 === t.nodeType || f)
                            if (i = (o = t[W] || (t[W] = {}))[t.uniqueID] || (o[t.uniqueID] = {}),
                            l && l === t.nodeName.toLowerCase())
                                t = t[u] || t;
                            else {
                                if ((r = i[c]) && r[0] === B && r[1] === h)
                                    return s[2] = r[2];
                                if ((i[c] = s)[2] = a(t, e, n))
                                    return !0
                            }
                return !1
            }
        }
        function h(i) {
            return 1 < i.length ? function(t, e, n) {
                for (var r = i.length; r--; )
                    if (!i[r](t, e, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function v(t, e, n) {
            for (var r = 0, i = e.length; r < i; r++)
                E(t, e[r], n);
            return n
        }
        function T(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)
                (o = t[a]) && (n && !n(o, r, i) || (s.push(o),
                l && e.push(a)));
            return s
        }
        function b(d, p, m, g, y, t) {
            return g && !g[W] && (g = b(g)),
            y && !y[W] && (y = b(y, t)),
            u(function(t, e, n, r) {
                var i, o, s, a = [], u = [], l = e.length, c = t || v(p || "*", n.nodeType ? [n] : n, []), f = !d || !t && p ? c : T(c, a, d, n, r), h = m ? y || (t ? d : l || g) ? [] : e : f;
                if (m && m(f, h, n, r),
                g)
                    for (i = T(h, u),
                    g(i, [], n, r),
                    o = i.length; o--; )
                        (s = i[o]) && (h[u[o]] = !(f[u[o]] = s));
                if (t) {
                    if (y || d) {
                        if (y) {
                            for (i = [],
                            o = h.length; o--; )
                                (s = h[o]) && i.push(f[o] = s);
                            y(null, h = [], i, r)
                        }
                        for (o = h.length; o--; )
                            (s = h[o]) && -1 < (i = y ? tt(t, s) : a[o]) && (t[i] = !(e[i] = s))
                    }
                } else
                    h = T(h === e ? h.splice(l, h.length) : h),
                    y ? y(null, e, h, r) : J.apply(e, h)
            })
        }
        function d(t) {
            for (var i, e, n, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, u = f(function(t) {
                return t === i
            }, s, !0), l = f(function(t) {
                return -1 < tt(i, t)
            }, s, !0), c = [function(t, e, n) {
                var r = !o && (n || e !== k) || ((i = e).nodeType ? u(t, e, n) : l(t, e, n));
                return i = null,
                r
            }
            ]; a < r; a++)
                if (e = w.relative[t[a].type])
                    c = [f(h(c), e)];
                else {
                    if ((e = w.filter[t[a].type].apply(null, t[a].matches))[W]) {
                        for (n = ++a; n < r && !w.relative[t[n].type]; n++)
                            ;
                        return b(1 < a && h(c), 1 < a && m(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), e, a < n && d(t.slice(a, n)), n < r && d(t = t.slice(n)), n < r && m(t))
                    }
                    c.push(e)
                }
            return h(c)
        }
        function g(g, y) {
            var v = 0 < y.length
              , b = 0 < g.length
              , t = function(t, e, n, r, i) {
                var o, s, a, u = 0, l = "0", c = t && [], f = [], h = k, d = t || b && w.find.TAG("*", i), p = B += null == h ? 1 : Math.random() || .1, m = d.length;
                for (i && (k = e === N || e || i); l !== m && null != (o = d[l]); l++) {
                    if (b && o) {
                        for (s = 0,
                        e || o.ownerDocument === N || (L(o),
                        n = !R); a = g[s++]; )
                            if (a(o, e || N, n)) {
                                r.push(o);
                                break
                            }
                        i && (B = p)
                    }
                    v && ((o = !a && o) && u--,
                    t && c.push(o))
                }
                if (u += l,
                v && l !== u) {
                    for (s = 0; a = y[s++]; )
                        a(c, f, e, n);
                    if (t) {
                        if (0 < u)
                            for (; l--; )
                                c[l] || f[l] || (f[l] = z.call(r));
                        f = T(f)
                    }
                    J.apply(r, f),
                    i && !t && 0 < f.length && 1 < u + y.length && E.uniqueSort(r)
                }
                return i && (B = p,
                k = h),
                c
            };
            return v ? u(t) : t
        }
        var y, _, w, C, S, A, x, D, k, I, O, L, N, P, R, H, j, M, q, W = "sizzle" + 1 * new Date, F = n.document, B = 0, U = 0, V = t(), G = t(), K = t(), $ = function(t, e) {
            return t === e && (O = !0),
            0
        }, Q = {}.hasOwnProperty, X = [], z = X.pop, Y = X.push, J = X.push, Z = X.slice, tt = function(t, e) {
            for (var n = 0, r = t.length; n < r; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)", st = new RegExp(nt + "+","g"), at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), ut = new RegExp("^" + nt + "*," + nt + "*"), lt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ft = new RegExp(ot), ht = new RegExp("^" + rt + "$"), dt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            TAG: new RegExp("^(" + rt + "|[*])"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, pt = /^(?:input|select|textarea|button)$/i, mt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/, yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, vt = /[+~]/, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), Et = function(t, e, n) {
            var r = "0x" + e - 65536;
            return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _t = function(t, e) {
            return e ? "\0" === t ? "\ufffd" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, wt = function() {
            L()
        }, Ct = f(function(t) {
            return !0 === t.disabled && ("form"in t || "label"in t)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            J.apply(X = Z.call(F.childNodes), F.childNodes),
            X[F.childNodes.length].nodeType
        } catch (St) {
            J = {
                apply: X.length ? function(t, e) {
                    Y.apply(t, Z.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        for (y in _ = E.support = {},
        S = E.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        L = E.setDocument = function(t) {
            var e, n, r = t ? t.ownerDocument || t : F;
            return r !== N && 9 === r.nodeType && r.documentElement && (P = (N = r).documentElement,
            R = !S(N),
            F !== N && (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", wt, !1) : n.attachEvent && n.attachEvent("onunload", wt)),
            _.attributes = i(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            _.getElementsByTagName = i(function(t) {
                return t.appendChild(N.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            _.getElementsByClassName = gt.test(N.getElementsByClassName),
            _.getById = i(function(t) {
                return P.appendChild(t).id = W,
                !N.getElementsByName || !N.getElementsByName(W).length
            }),
            _.getById ? (w.filter.ID = function(t) {
                var e = t.replace(bt, Et);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ) : (w.filter.ID = function(t) {
                var n = t.replace(bt, Et);
                return function(t) {
                    var e = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return e && e.value === n
                }
            }
            ,
            w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var n, r, i, o = e.getElementById(t);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                        for (i = e.getElementsByName(t),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === t)
                                return [o]
                    }
                    return []
                }
            }
            ),
            w.find.TAG = _.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : _.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, r = [], i = 0, o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            w.find.CLASS = _.getElementsByClassName && function(t, e) {
                if ("undefined" != typeof e.getElementsByClassName && R)
                    return e.getElementsByClassName(t)
            }
            ,
            j = [],
            H = [],
            (_.qsa = gt.test(N.querySelectorAll)) && (i(function(t) {
                P.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + W + "-]").length || H.push("~="),
                t.querySelectorAll(":checked").length || H.push(":checked"),
                t.querySelectorAll("a#" + W + "+*").length || H.push(".#.+[+~]")
            }),
            i(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = N.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"),
                P.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                H.push(",.*:")
            })),
            (_.matchesSelector = gt.test(M = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && i(function(t) {
                _.disconnectedMatch = M.call(t, "*"),
                M.call(t, "[s!='']:x"),
                j.push("!=", ot)
            }),
            H = H.length && new RegExp(H.join("|")),
            j = j.length && new RegExp(j.join("|")),
            e = gt.test(P.compareDocumentPosition),
            q = e || gt.test(P.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , r = e && e.parentNode;
                return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            $ = e ? function(t, e) {
                if (t === e)
                    return O = !0,
                    0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !_.sortDetached && e.compareDocumentPosition(t) === n ? t === N || t.ownerDocument === F && q(F, t) ? -1 : e === N || e.ownerDocument === F && q(F, e) ? 1 : I ? tt(I, t) - tt(I, e) : 0 : 4 & n ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return O = !0,
                    0;
                var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], a = [e];
                if (!i || !o)
                    return t === N ? -1 : e === N ? 1 : i ? -1 : o ? 1 : I ? tt(I, t) - tt(I, e) : 0;
                if (i === o)
                    return l(t, e);
                for (n = t; n = n.parentNode; )
                    s.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; s[r] === a[r]; )
                    r++;
                return r ? l(s[r], a[r]) : s[r] === F ? -1 : a[r] === F ? 1 : 0
            }
            ),
            N
        }
        ,
        E.matches = function(t, e) {
            return E(t, null, null, e)
        }
        ,
        E.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== N && L(t),
            e = e.replace(ct, "='$1']"),
            _.matchesSelector && R && !K[e + " "] && (!j || !j.test(e)) && (!H || !H.test(e)))
                try {
                    var n = M.call(t, e);
                    if (n || _.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (St) {}
            return 0 < E(e, N, null, [t]).length
        }
        ,
        E.contains = function(t, e) {
            return (t.ownerDocument || t) !== N && L(t),
            q(t, e)
        }
        ,
        E.attr = function(t, e) {
            (t.ownerDocument || t) !== N && L(t);
            var n = w.attrHandle[e.toLowerCase()]
              , r = n && Q.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !R) : undefined;
            return r !== undefined ? r : _.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }
        ,
        E.escape = function(t) {
            return (t + "").replace(Tt, _t)
        }
        ,
        E.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        E.uniqueSort = function(t) {
            var e, n = [], r = 0, i = 0;
            if (O = !_.detectDuplicates,
            I = !_.sortStable && t.slice(0),
            t.sort($),
            O) {
                for (; e = t[i++]; )
                    e === t[i] && (r = n.push(i));
                for (; r--; )
                    t.splice(n[r], 1)
            }
            return I = null,
            t
        }
        ,
        C = E.getText = function(t) {
            var e, n = "", r = 0, i = t.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += C(t)
                } else if (3 === i || 4 === i)
                    return t.nodeValue
            } else
                for (; e = t[r++]; )
                    n += C(e);
            return n
        }
        ,
        (w = E.selectors = {
            cacheLength: 50,
            createPseudo: u,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, Et),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(bt, Et),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || E.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && E.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = A(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, Et).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = V[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && V(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, r, i) {
                    return function(t) {
                        var e = E.attr(t, n);
                        return null == e ? "!=" === r : !r || (e += "",
                        "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e.replace(st, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(p, t, e, m, g) {
                    var y = "nth" !== p.slice(0, 3)
                      , v = "last" !== p.slice(-4)
                      , b = "of-type" === t;
                    return 1 === m && 0 === g ? function(t) {
                        return !!t.parentNode
                    }
                    : function(t, e, n) {
                        var r, i, o, s, a, u, l = y !== v ? "nextSibling" : "previousSibling", c = t.parentNode, f = b && t.nodeName.toLowerCase(), h = !n && !b, d = !1;
                        if (c) {
                            if (y) {
                                for (; l; ) {
                                    for (s = t; s = s[l]; )
                                        if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType)
                                            return !1;
                                    u = l = "only" === p && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [v ? c.firstChild : c.lastChild],
                            v && h) {
                                for (d = (a = (r = (i = (o = (s = c)[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === B && r[1]) && r[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[l] || (d = a = 0) || u.pop(); )
                                    if (1 === s.nodeType && ++d && s === t) {
                                        i[p] = [B, a, d];
                                        break
                                    }
                            } else if (h && (d = a = (r = (i = (o = (s = t)[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === B && r[1]),
                            !1 === d)
                                for (; (s = ++a && s && s[l] || (d = a = 0) || u.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++d || (h && ((i = (o = s[W] || (s[W] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [B, d]),
                                s !== t)); )
                                    ;
                            return (d -= g) === m || d % m == 0 && 0 <= d / m
                        }
                    }
                },
                PSEUDO: function(t, o) {
                    var e, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || E.error("unsupported pseudo: " + t);
                    return s[W] ? s(o) : 1 < s.length ? (e = [t, t, "", o],
                    w.setFilters.hasOwnProperty(t.toLowerCase()) ? u(function(t, e) {
                        for (var n, r = s(t, o), i = r.length; i--; )
                            t[n = tt(t, r[i])] = !(e[n] = r[i])
                    }) : function(t) {
                        return s(t, 0, e)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: u(function(t) {
                    var r = []
                      , i = []
                      , a = x(t.replace(at, "$1"));
                    return a[W] ? u(function(t, e, n, r) {
                        for (var i, o = a(t, null, r, []), s = t.length; s--; )
                            (i = o[s]) && (t[s] = !(e[s] = i))
                    }) : function(t, e, n) {
                        return r[0] = t,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: u(function(e) {
                    return function(t) {
                        return 0 < E(e, t).length
                    }
                }),
                contains: u(function(e) {
                    return e = e.replace(bt, Et),
                    function(t) {
                        return -1 < (t.textContent || t.innerText || C(t)).indexOf(e)
                    }
                }),
                lang: u(function(n) {
                    return ht.test(n || "") || E.error("unsupported lang: " + n),
                    n = n.replace(bt, Et).toLowerCase(),
                    function(t) {
                        var e;
                        do {
                            if (e = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var e = n.location && n.location.hash;
                    return e && e.slice(1) === t.id
                },
                root: function(t) {
                    return t === P
                },
                focus: function(t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return mt.test(t.nodeName)
                },
                input: function(t) {
                    return pt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: a(function() {
                    return [0]
                }),
                last: a(function(t, e) {
                    return [e - 1]
                }),
                eq: a(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: a(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: a(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: a(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; 0 <= --r; )
                        t.push(r);
                    return t
                }),
                gt: a(function(t, e, n) {
                    for (var r = n < 0 ? n + e : n; ++r < e; )
                        t.push(r);
                    return t
                })
            }
        }).pseudos.nth = w.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            w.pseudos[y] = r(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            w.pseudos[y] = o(y);
        return c.prototype = w.filters = w.pseudos,
        w.setFilters = new c,
        A = E.tokenize = function(t, e) {
            var n, r, i, o, s, a, u, l = G[t + " "];
            if (l)
                return e ? 0 : l.slice(0);
            for (s = t,
            a = [],
            u = w.preFilter; s; ) {
                for (o in n && !(r = ut.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                a.push(i = [])),
                n = !1,
                (r = lt.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }),
                s = s.slice(n.length)),
                w.filter)
                    !(r = dt[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return e ? s.length : s ? E.error(t) : G(t, a).slice(0)
        }
        ,
        x = E.compile = function(t, e) {
            var n, r = [], i = [], o = K[t + " "];
            if (!o) {
                for (e || (e = A(t)),
                n = e.length; n--; )
                    (o = d(e[n]))[W] ? r.push(o) : i.push(o);
                (o = K(t, g(i, r))).selector = t
            }
            return o
        }
        ,
        D = E.select = function(t, e, n, r) {
            var i, o, s, a, u, l = "function" == typeof t && t, c = !r && A(t = l.selector || t);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === e.nodeType && R && w.relative[o[1].type]) {
                    if (!(e = (w.find.ID(s.matches[0].replace(bt, Et), e) || [])[0]))
                        return n;
                    l && (e = e.parentNode),
                    t = t.slice(o.shift().value.length)
                }
                for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i],
                !w.relative[a = s.type]); )
                    if ((u = w.find[a]) && (r = u(s.matches[0].replace(bt, Et), vt.test(o[0].type) && p(e.parentNode) || e))) {
                        if (o.splice(i, 1),
                        !(t = r.length && m(o)))
                            return J.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || x(t, c))(r, e, !R, n, !e || vt.test(t) && p(e.parentNode) || e),
            n
        }
        ,
        _.sortStable = W.split("").sort($).join("") === W,
        _.detectDuplicates = !!O,
        L(),
        _.sortDetached = i(function(t) {
            return 1 & t.compareDocumentPosition(N.createElement("fieldset"))
        }),
        i(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        _.attributes && i(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || e("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        i(function(t) {
            return null == t.getAttribute("disabled")
        }) || e(et, function(t, e, n) {
            var r;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }),
        E
    }(C);
    _t.find = Ct,
    _t.expr = Ct.selectors,
    _t.expr[":"] = _t.expr.pseudos,
    _t.uniqueSort = _t.unique = Ct.uniqueSort,
    _t.text = Ct.getText,
    _t.isXMLDoc = Ct.isXML,
    _t.contains = Ct.contains,
    _t.escapeSelector = Ct.escape;
    var St = function(t, e, n) {
        for (var r = [], i = n !== undefined; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (i && _t(t).is(n))
                    break;
                r.push(t)
            }
        return r
    }
      , At = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , xt = _t.expr.match.needsContext
      , Dt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    _t.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === r.nodeType ? _t.find.matchesSelector(r, t) ? [r] : [] : _t.find.matches(t, _t.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    _t.fn.extend({
        find: function(t) {
            var e, n, r = this.length, i = this;
            if ("string" != typeof t)
                return this.pushStack(_t(t).filter(function() {
                    for (e = 0; e < r; e++)
                        if (_t.contains(i[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < r; e++)
                _t.find(t, i[e], n);
            return 1 < r ? _t.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function(t) {
            return !!e(this, "string" == typeof t && xt.test(t) ? _t(t) : t || [], !1).length
        }
    });
    var kt, It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (_t.fn.init = function(t, e, n) {
        var r, i;
        if (!t)
            return this;
        if (n = n || kt,
        "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : It.exec(t)) || !r[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (e = e instanceof _t ? e[0] : e,
                _t.merge(this, _t.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : st, !0)),
                Dt.test(r[1]) && _t.isPlainObject(e))
                    for (r in e)
                        vt(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (i = st.getElementById(r[2])) && (this[0] = i,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : vt(t) ? n.ready !== undefined ? n.ready(t) : t(_t) : _t.makeArray(t, this)
    }
    ).prototype = _t.fn,
    kt = _t(st);
    var Ot = /^(?:parents|prev(?:Until|All))/
      , Lt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    _t.fn.extend({
        has: function(t) {
            var e = _t(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (_t.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof t && _t(t);
            if (!xt.test(t))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && _t.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? _t.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ft.call(_t(t), this[0]) : ft.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(_t.uniqueSort(_t.merge(this.get(), _t(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    _t.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return St(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return St(t, "parentNode", n)
        },
        next: function(t) {
            return n(t, "nextSibling")
        },
        prev: function(t) {
            return n(t, "previousSibling")
        },
        nextAll: function(t) {
            return St(t, "nextSibling")
        },
        prevAll: function(t) {
            return St(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return St(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return St(t, "previousSibling", n)
        },
        siblings: function(t) {
            return At((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return At(t.firstChild)
        },
        contents: function(t) {
            return l(t, "iframe") ? t.contentDocument : (l(t, "template") && (t = t.content || t),
            _t.merge([], t.childNodes))
        }
    }, function(r, i) {
        _t.fn[r] = function(t, e) {
            var n = _t.map(this, i, t);
            return "Until" !== r.slice(-5) && (e = t),
            e && "string" == typeof e && (n = _t.filter(e, n)),
            1 < this.length && (Lt[r] || _t.uniqueSort(n),
            Ot.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var Nt = /[^\x20\t\r\n\f]+/g;
    _t.Callbacks = function(r) {
        r = "string" == typeof r ? c(r) : _t.extend({}, r);
        var i, t, e, n, o = [], s = [], a = -1, u = function() {
            for (n = n || r.once,
            e = i = !0; s.length; a = -1)
                for (t = s.shift(); ++a < o.length; )
                    !1 === o[a].apply(t[0], t[1]) && r.stopOnFalse && (a = o.length,
                    t = !1);
            r.memory || (t = !1),
            i = !1,
            n && (o = t ? [] : "")
        }, l = {
            add: function() {
                return o && (t && !i && (a = o.length - 1,
                s.push(t)),
                function n(t) {
                    _t.each(t, function(t, e) {
                        vt(e) ? r.unique && l.has(e) || o.push(e) : e && e.length && "string" !== g(e) && n(e)
                    })
                }(arguments),
                t && !i && u()),
                this
            },
            remove: function() {
                return _t.each(arguments, function(t, e) {
                    for (var n; -1 < (n = _t.inArray(e, o, n)); )
                        o.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(t) {
                return t ? -1 < _t.inArray(t, o) : 0 < o.length
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return n = s = [],
                o = t = "",
                this
            },
            disabled: function() {
                return !o
            },
            lock: function() {
                return n = s = [],
                t || i || (o = t = ""),
                this
            },
            locked: function() {
                return !!n
            },
            fireWith: function(t, e) {
                return n || (e = [t, (e = e || []).slice ? e.slice() : e],
                s.push(e),
                i || u()),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!e
            }
        };
        return l
    }
    ,
    _t.extend({
        Deferred: function(t) {
            var o = [["notify", "progress", _t.Callbacks("memory"), _t.Callbacks("memory"), 2], ["resolve", "done", _t.Callbacks("once memory"), _t.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", _t.Callbacks("once memory"), _t.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                "catch": function(t) {
                    return s.then(null, t)
                },
                pipe: function() {
                    var i = arguments;
                    return _t.Deferred(function(r) {
                        _t.each(o, function(t, e) {
                            var n = vt(i[e[4]]) && i[e[4]];
                            a[e[1]](function() {
                                var t = n && n.apply(this, arguments);
                                t && vt(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, n ? [t] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(e, n, r) {
                    function l(o, s, a, u) {
                        return function() {
                            var n = this
                              , r = arguments
                              , e = function() {
                                var t, e;
                                if (!(o < c)) {
                                    if ((t = a.apply(n, r)) === s.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    e = t && ("object" == typeof t || "function" == typeof t) && t.then,
                                    vt(e) ? u ? e.call(t, l(c, s, f, u), l(c, s, h, u)) : (c++,
                                    e.call(t, l(c, s, f, u), l(c, s, h, u), l(c, s, f, s.notifyWith))) : (a !== f && (n = undefined,
                                    r = [t]),
                                    (u || s.resolveWith)(n, r))
                                }
                            }
                              , i = u ? e : function() {
                                try {
                                    e()
                                } catch (t) {
                                    _t.Deferred.exceptionHook && _t.Deferred.exceptionHook(t, i.stackTrace),
                                    c <= o + 1 && (a !== h && (n = undefined,
                                    r = [t]),
                                    s.rejectWith(n, r))
                                }
                            }
                            ;
                            o ? i() : (_t.Deferred.getStackHook && (i.stackTrace = _t.Deferred.getStackHook()),
                            C.setTimeout(i))
                        }
                    }
                    var c = 0;
                    return _t.Deferred(function(t) {
                        o[0][3].add(l(0, t, vt(r) ? r : f, t.notifyWith)),
                        o[1][3].add(l(0, t, vt(e) ? e : f)),
                        o[2][3].add(l(0, t, vt(n) ? n : h))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? _t.extend(t, s) : s
                }
            }
              , a = {};
            return _t.each(o, function(t, e) {
                var n = e[2]
                  , r = e[5];
                s[e[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(e[3].fire),
                a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? undefined : this, arguments),
                    this
                }
                ,
                a[e[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            t && t.call(a, a),
            a
        },
        when: function(t) {
            var n = arguments.length
              , e = n
              , r = Array(e)
              , i = ut.call(arguments)
              , o = _t.Deferred()
              , s = function(e) {
                return function(t) {
                    r[e] = this,
                    i[e] = 1 < arguments.length ? ut.call(arguments) : t,
                    --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && (u(t, o.done(s(e)).resolve, o.reject, !n),
            "pending" === o.state() || vt(i[e] && i[e].then)))
                return o.then();
            for (; e--; )
                u(i[e], s(e), o.reject);
            return o.promise()
        }
    });
    var Pt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    _t.Deferred.exceptionHook = function(t, e) {
        C.console && C.console.warn && t && Pt.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
    }
    ,
    _t.readyException = function(t) {
        C.setTimeout(function() {
            throw t
        })
    }
    ;
    var Rt = _t.Deferred();
    _t.fn.ready = function(t) {
        return Rt.then(t)["catch"](function(t) {
            _t.readyException(t)
        }),
        this
    }
    ,
    _t.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --_t.readyWait : _t.isReady) || (_t.isReady = !0) !== t && 0 < --_t.readyWait || Rt.resolveWith(st, [_t])
        }
    }),
    _t.ready.then = Rt.then,
    "complete" === st.readyState || "loading" !== st.readyState && !st.documentElement.doScroll ? C.setTimeout(_t.ready) : (st.addEventListener("DOMContentLoaded", r),
    C.addEventListener("load", r));
    var Ht = function(t, e, n, r, i, o, s) {
        var a = 0
          , u = t.length
          , l = null == n;
        if ("object" === g(n))
            for (a in i = !0,
            n)
                Ht(t, e, a, n[a], !0, o, s);
        else if (r !== undefined && (i = !0,
        vt(r) || (s = !0),
        l && (s ? (e.call(t, r),
        e = null) : (l = e,
        e = function(t, e, n) {
            return l.call(_t(t), n)
        }
        )),
        e))
            for (; a < u; a++)
                e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    }
      , jt = /^-ms-/
      , Mt = /-([a-z])/g
      , qt = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    o.uid = 1,
    o.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            qt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var r, i = this.cache(t);
            if ("string" == typeof e)
                i[d(e)] = n;
            else
                for (r in e)
                    i[d(r)] = e[r];
            return i
        },
        get: function(t, e) {
            return e === undefined ? this.cache(t) : t[this.expando] && t[this.expando][d(e)]
        },
        access: function(t, e, n) {
            return e === undefined || e && "string" == typeof e && n === undefined ? this.get(t, e) : (this.set(t, e, n),
            n !== undefined ? n : e)
        },
        remove: function(t, e) {
            var n, r = t[this.expando];
            if (r !== undefined) {
                if (e !== undefined) {
                    n = (e = Array.isArray(e) ? e.map(d) : (e = d(e))in r ? [e] : e.match(Nt) || []).length;
                    for (; n--; )
                        delete r[e[n]]
                }
                (e === undefined || _t.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = undefined : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return e !== undefined && !_t.isEmptyObject(e)
        }
    };
    var Wt = new o
      , Ft = new o
      , Bt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ut = /[A-Z]/g;
    _t.extend({
        hasData: function(t) {
            return Ft.hasData(t) || Wt.hasData(t)
        },
        data: function(t, e, n) {
            return Ft.access(t, e, n)
        },
        removeData: function(t, e) {
            Ft.remove(t, e)
        },
        _data: function(t, e, n) {
            return Wt.access(t, e, n)
        },
        _removeData: function(t, e) {
            Wt.remove(t, e)
        }
    }),
    _t.fn.extend({
        data: function(n, t) {
            var e, r, i, o = this[0], s = o && o.attributes;
            if (n === undefined) {
                if (this.length && (i = Ft.get(o),
                1 === o.nodeType && !Wt.get(o, "hasDataAttrs"))) {
                    for (e = s.length; e--; )
                        s[e] && 0 === (r = s[e].name).indexOf("data-") && (r = d(r.slice(5)),
                        p(o, r, i[r]));
                    Wt.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Ft.set(this, n)
            }) : Ht(this, function(t) {
                var e;
                if (o && t === undefined)
                    return (e = Ft.get(o, n)) !== undefined ? e : (e = p(o, n)) !== undefined ? e : void 0;
                this.each(function() {
                    Ft.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                Ft.remove(this, t)
            })
        }
    }),
    _t.extend({
        queue: function(t, e, n) {
            var r;
            if (t)
                return e = (e || "fx") + "queue",
                r = Wt.get(t, e),
                n && (!r || Array.isArray(n) ? r = Wt.access(t, e, _t.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = _t.queue(t, e)
              , r = n.length
              , i = n.shift()
              , o = _t._queueHooks(t, e)
              , s = function() {
                _t.dequeue(t, e)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            i.call(t, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Wt.get(t, n) || Wt.access(t, n, {
                empty: _t.Callbacks("once memory").add(function() {
                    Wt.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    _t.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            t--),
            arguments.length < t ? _t.queue(this[0], e) : n === undefined ? this : this.each(function() {
                var t = _t.queue(this, e, n);
                _t._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && _t.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                _t.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1, i = _t.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof t && (e = t,
            t = undefined),
            t = t || "fx"; s--; )
                (n = Wt.get(o[s], t + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(e)
        }
    });
    var Vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Gt = new RegExp("^(?:([+-])=|)(" + Vt + ")([a-z%]*)$","i")
      , Kt = ["Top", "Right", "Bottom", "Left"]
      , $t = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && _t.contains(t.ownerDocument, t) && "none" === _t.css(t, "display")
    }
      , Qt = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e)
            s[o] = t.style[o],
            t.style[o] = e[o];
        for (o in i = n.apply(t, r || []),
        e)
            t.style[o] = s[o];
        return i
    }
      , Xt = {};
    _t.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                $t(this) ? _t(this).show() : _t(this).hide()
            })
        }
    });
    var zt = /^(?:checkbox|radio)$/i
      , Yt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Jt = /^$|^module$|\/(?:java|ecma)script/i
      , Zt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Zt.optgroup = Zt.option,
    Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead,
    Zt.th = Zt.td;
    var te, ee, ne = /<|&#?\w+;/;
    te = st.createDocumentFragment().appendChild(st.createElement("div")),
    (ee = st.createElement("input")).setAttribute("type", "radio"),
    ee.setAttribute("checked", "checked"),
    ee.setAttribute("name", "t"),
    te.appendChild(ee),
    yt.checkClone = te.cloneNode(!0).cloneNode(!0).lastChild.checked,
    te.innerHTML = "<textarea>x</textarea>",
    yt.noCloneChecked = !!te.cloneNode(!0).lastChild.defaultValue;
    var re = st.documentElement
      , ie = /^key/
      , oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , se = /^([^.]*)(?:\.(.+)|)/;
    _t.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, h, d, p, m, g = Wt.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && _t.find.matchesSelector(re, i),
                n.guid || (n.guid = _t.guid++),
                (u = g.events) || (u = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return void 0 !== _t && _t.event.triggered !== t.type ? _t.event.dispatch.apply(e, arguments) : undefined
                }
                ),
                l = (t = (t || "").match(Nt) || [""]).length; l--; )
                    d = m = (a = se.exec(t[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d && (f = _t.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = _t.event.special[d] || {},
                    c = _t.extend({
                        type: d,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && _t.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, o),
                    (h = u[d]) || ((h = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(e, r, p, s) || e.addEventListener && e.addEventListener(d, s)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    _t.event.global[d] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, l, c, f, h, d, p, m, g = Wt.hasData(t) && Wt.get(t);
            if (g && (u = g.events)) {
                for (l = (e = (e || "").match(Nt) || [""]).length; l--; )
                    if (d = m = (a = se.exec(e[l]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = _t.event.special[d] || {},
                        h = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = h.length; o--; )
                            c = h[o],
                            !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(t, c));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, g.handle) || _t.removeEvent(t, d, g.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            _t.event.remove(t, d + e[l], n, r, !0);
                _t.isEmptyObject(u) && Wt.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, r, i, o, s, a = _t.event.fix(t), u = new Array(arguments.length), l = (Wt.get(this, "events") || {})[a.type] || [], c = _t.event.special[a.type] || {};
            for (u[0] = a,
            e = 1; e < arguments.length; e++)
                u[e] = arguments[e];
            if (a.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                for (s = _t.event.handlers.call(this, a, l),
                e = 0; (i = s[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(o.namespace) || (a.handleObj = o,
                        a.data = o.data,
                        (r = ((_t.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) !== undefined && !1 === (a.result = r) && (a.preventDefault(),
                        a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s, a = [], u = e.delegateCount, l = t.target;
            if (u && l.nodeType && !("click" === t.type && 1 <= t.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < u; n++)
                            s[i = (r = e[n]).selector + " "] === undefined && (s[i] = r.needsContext ? -1 < _t(i, this).index(l) : _t.find(i, this, null, [l]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < e.length && a.push({
                elem: l,
                handlers: e.slice(u)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(_t.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: vt(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(t) {
            return t[_t.expando] ? t : new _t.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== A() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === A() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && l(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return l(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    _t.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    _t.Event = function(t, e) {
        if (!(this instanceof _t.Event))
            return new _t.Event(t,e);
        t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? w : S,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && _t.extend(this, e),
        this.timeStamp = t && t.timeStamp || Date.now(),
        this[_t.expando] = !0
    }
    ,
    _t.Event.prototype = {
        constructor: _t.Event,
        isDefaultPrevented: S,
        isPropagationStopped: S,
        isImmediatePropagationStopped: S,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = w,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = w,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = w,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    _t.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && ie.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && e !== undefined && oe.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, _t.event.addProp),
    _t.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, o) {
        _t.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function(t) {
                var e, n = this, r = t.relatedTarget, i = t.handleObj;
                return r && (r === n || _t.contains(n, r)) || (t.type = i.origType,
                e = i.handler.apply(this, arguments),
                t.type = o),
                e
            }
        }
    }),
    _t.fn.extend({
        on: function(t, e, n, r) {
            return x(this, t, e, n, r)
        },
        one: function(t, e, n, r) {
            return x(this, t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj)
                return r = t.handleObj,
                _t(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof t) {
                for (i in t)
                    this.off(i, e, t[i]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = undefined),
            !1 === n && (n = S),
            this.each(function() {
                _t.event.remove(this, t, n, e)
            })
        }
    });
    var ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , ue = /<script|<style|<link/i
      , le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    _t.extend({
        htmlPrefilter: function(t) {
            return t.replace(ae, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0), u = _t.contains(t.ownerDocument, t);
            if (!(yt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _t.isXMLDoc(t)))
                for (s = E(a),
                r = 0,
                i = (o = E(t)).length; r < i; r++)
                    L(o[r], s[r]);
            if (e)
                if (n)
                    for (o = o || E(t),
                    s = s || E(a),
                    r = 0,
                    i = o.length; r < i; r++)
                        O(o[r], s[r]);
                else
                    O(t, a);
            return 0 < (s = E(a, "script")).length && T(s, !u && E(t, "script")),
            a
        },
        cleanData: function(t) {
            for (var e, n, r, i = _t.event.special, o = 0; (n = t[o]) !== undefined; o++)
                if (qt(n)) {
                    if (e = n[Wt.expando]) {
                        if (e.events)
                            for (r in e.events)
                                i[r] ? _t.event.remove(n, r) : _t.removeEvent(n, r, e.handle);
                        n[Wt.expando] = undefined
                    }
                    n[Ft.expando] && (n[Ft.expando] = undefined)
                }
        }
    }),
    _t.fn.extend({
        detach: function(t) {
            return P(this, t, !0)
        },
        remove: function(t) {
            return P(this, t)
        },
        text: function(t) {
            return Ht(this, function(t) {
                return t === undefined ? _t.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return N(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || D(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return N(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = D(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return N(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (_t.cleanData(E(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return _t.clone(this, t, e)
            })
        },
        html: function(t) {
            return Ht(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (t === undefined && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !ue.test(t) && !Zt[(Yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = _t.htmlPrefilter(t);
                    try {
                        for (; n < r; n++)
                            1 === (e = this[n] || {}).nodeType && (_t.cleanData(E(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (i) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return N(this, arguments, function(t) {
                var e = this.parentNode;
                _t.inArray(this, n) < 0 && (_t.cleanData(E(this)),
                e && e.replaceChild(t, this))
            }, n)
        }
    }),
    _t.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        _t.fn[t] = function(t) {
            for (var e, n = [], r = _t(t), i = r.length - 1, o = 0; o <= i; o++)
                e = o === i ? this : this.clone(!0),
                _t(r[o])[s](e),
                ct.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var fe = new RegExp("^(" + Vt + ")(?!px)[a-z%]+$","i")
      , he = function(t) {
        var e = t.ownerDocument.defaultView;
        return e && e.opener || (e = C),
        e.getComputedStyle(t)
    }
      , de = new RegExp(Kt.join("|"),"i");
    !function() {
        function t() {
            if (u) {
                a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                re.appendChild(a).appendChild(u);
                var t = C.getComputedStyle(u);
                n = "1%" !== t.top,
                s = 12 === e(t.marginLeft),
                u.style.right = "60%",
                o = 36 === e(t.right),
                r = 36 === e(t.width),
                u.style.position = "absolute",
                i = 36 === u.offsetWidth || "absolute",
                re.removeChild(a),
                u = null
            }
        }
        function e(t) {
            return Math.round(parseFloat(t))
        }
        var n, r, i, o, s, a = st.createElement("div"), u = st.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        yt.clearCloneStyle = "content-box" === u.style.backgroundClip,
        _t.extend(yt, {
            boxSizingReliable: function() {
                return t(),
                r
            },
            pixelBoxStyles: function() {
                return t(),
                o
            },
            pixelPosition: function() {
                return t(),
                n
            },
            reliableMarginLeft: function() {
                return t(),
                s
            },
            scrollboxSize: function() {
                return t(),
                i
            }
        }))
    }();
    var pe = /^(none|table(?!-c[ea]).+)/
      , me = /^--/
      , ge = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , ye = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , ve = ["Webkit", "Moz", "ms"]
      , be = st.createElement("div").style;
    _t.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = R(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = d(e), u = me.test(e), l = t.style;
                if (u || (e = M(a)),
                s = _t.cssHooks[e] || _t.cssHooks[a],
                n === undefined)
                    return s && "get"in s && (i = s.get(t, !1, r)) !== undefined ? i : l[e];
                "string" === (o = typeof n) && (i = Gt.exec(n)) && i[1] && (n = y(t, e, i),
                o = "number"),
                null != n && n == n && ("number" === o && (n += i && i[3] || (_t.cssNumber[a] ? "" : "px")),
                yt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && (n = s.set(t, n, r)) === undefined || (u ? l.setProperty(e, n) : l[e] = n))
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = d(e);
            return me.test(e) || (e = M(a)),
            (s = _t.cssHooks[e] || _t.cssHooks[a]) && "get"in s && (i = s.get(t, !0, n)),
            i === undefined && (i = R(t, e, r)),
            "normal" === i && e in ye && (i = ye[e]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    _t.each(["height", "width"], function(t, a) {
        _t.cssHooks[a] = {
            get: function(t, e, n) {
                if (e)
                    return !pe.test(_t.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? F(t, a, n) : Qt(t, ge, function() {
                        return F(t, a, n)
                    })
            },
            set: function(t, e, n) {
                var r, i = he(t), o = "border-box" === _t.css(t, "boxSizing", !1, i), s = n && W(t, a, n, o, i);
                return o && yt.scrollboxSize() === i.position && (s -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(i[a]) - W(t, a, "border", !1, i) - .5)),
                s && (r = Gt.exec(e)) && "px" !== (r[3] || "px") && (t.style[a] = e,
                e = _t.css(t, a)),
                q(t, e, s)
            }
        }
    }),
    _t.cssHooks.marginLeft = H(yt.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat(R(t, "marginLeft")) || t.getBoundingClientRect().left - Qt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    _t.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        _t.cssHooks[i + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++)
                    n[i + Kt[e] + o] = r[e] || r[e - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (_t.cssHooks[i + o].set = q)
    }),
    _t.fn.extend({
        css: function(t, e) {
            return Ht(this, function(t, e, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(e)) {
                    for (r = he(t),
                    i = e.length; s < i; s++)
                        o[e[s]] = _t.css(t, e[s], !1, r);
                    return o
                }
                return n !== undefined ? _t.style(t, e, n) : _t.css(t, e)
            }, t, e, 1 < arguments.length)
        }
    }),
    (_t.Tween = B).prototype = {
        constructor: B,
        init: function(t, e, n, r, i, o) {
            this.elem = t,
            this.prop = n,
            this.easing = i || _t.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (_t.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = B.propHooks[this.prop];
            return t && t.get ? t.get(this) : B.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = e = _t.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
        }
    },
    B.prototype.init.prototype = B.prototype,
    B.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _t.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                _t.fx.step[t.prop] ? _t.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[_t.cssProps[t.prop]] && !_t.cssHooks[t.prop] ? t.elem[t.prop] = t.now : _t.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    },
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    _t.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    _t.fx = B.prototype.init,
    _t.fx.step = {};
    var Ee, Te, _e, we, Ce = /^(?:toggle|show|hide)$/, Se = /queueHooks$/;
    _t.Animation = _t.extend(X, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return y(n.elem, t, Gt.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            vt(t) ? (e = t,
            t = ["*"]) : t = t.match(Nt);
            for (var n, r = 0, i = t.length; r < i; r++)
                n = t[r],
                X.tweeners[n] = X.tweeners[n] || [],
                X.tweeners[n].unshift(e)
        },
        prefilters: [$],
        prefilter: function(t, e) {
            e ? X.prefilters.unshift(t) : X.prefilters.push(t)
        }
    }),
    _t.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? _t.extend({}, t) : {
            complete: n || !n && e || vt(t) && t,
            duration: t,
            easing: n && e || e && !vt(e) && e
        };
        return _t.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _t.fx.speeds ? r.duration = _t.fx.speeds[r.duration] : r.duration = _t.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            vt(r.old) && r.old.call(this),
            r.queue && _t.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    _t.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter($t).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(e, t, n, r) {
            var i = _t.isEmptyObject(e)
              , o = _t.speed(t, n, r)
              , s = function() {
                var t = X(this, _t.extend({}, e), o);
                (i || Wt.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, t, o) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop,
                e(o)
            };
            return "string" != typeof i && (o = t,
            t = i,
            i = undefined),
            t && !1 !== i && this.queue(i || "fx", []),
            this.each(function() {
                var t = !0
                  , e = null != i && i + "queueHooks"
                  , n = _t.timers
                  , r = Wt.get(this);
                if (e)
                    r[e] && r[e].stop && s(r[e]);
                else
                    for (e in r)
                        r[e] && r[e].stop && Se.test(e) && s(r[e]);
                for (e = n.length; e--; )
                    n[e].elem !== this || null != i && n[e].queue !== i || (n[e].anim.stop(o),
                    t = !1,
                    n.splice(e, 1));
                !t && o || _t.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var t, e = Wt.get(this), n = e[s + "queue"], r = e[s + "queueHooks"], i = _t.timers, o = n ? n.length : 0;
                for (e.finish = !0,
                _t.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === s && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }),
    _t.each(["toggle", "show", "hide"], function(t, r) {
        var i = _t.fn[r];
        _t.fn[r] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(G(r, !0), t, e, n)
        }
    }),
    _t.each({
        slideDown: G("show"),
        slideUp: G("hide"),
        slideToggle: G("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, r) {
        _t.fn[t] = function(t, e, n) {
            return this.animate(r, t, e, n)
        }
    }),
    _t.timers = [],
    _t.fx.tick = function() {
        var t, e = 0, n = _t.timers;
        for (Ee = Date.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || _t.fx.stop(),
        Ee = undefined
    }
    ,
    _t.fx.timer = function(t) {
        _t.timers.push(t),
        _t.fx.start()
    }
    ,
    _t.fx.interval = 13,
    _t.fx.start = function() {
        Te || (Te = !0,
        U())
    }
    ,
    _t.fx.stop = function() {
        Te = null
    }
    ,
    _t.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    _t.fn.delay = function(r, t) {
        return r = _t.fx && _t.fx.speeds[r] || r,
        t = t || "fx",
        this.queue(t, function(t, e) {
            var n = C.setTimeout(t, r);
            e.stop = function() {
                C.clearTimeout(n)
            }
        })
    }
    ,
    _e = st.createElement("input"),
    we = st.createElement("select").appendChild(st.createElement("option")),
    _e.type = "checkbox",
    yt.checkOn = "" !== _e.value,
    yt.optSelected = we.selected,
    (_e = st.createElement("input")).value = "t",
    _e.type = "radio",
    yt.radioValue = "t" === _e.value;
    var Ae, xe = _t.expr.attrHandle;
    _t.fn.extend({
        attr: function(t, e) {
            return Ht(this, _t.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                _t.removeAttr(this, t)
            })
        }
    }),
    _t.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof t.getAttribute ? _t.prop(t, e, n) : (1 === o && _t.isXMLDoc(t) || (i = _t.attrHooks[e.toLowerCase()] || (_t.expr.match.bool.test(e) ? Ae : undefined)),
                n !== undefined ? null === n ? void _t.removeAttr(t, e) : i && "set"in i && (r = i.set(t, n, e)) !== undefined ? r : (t.setAttribute(e, n + ""),
                n) : i && "get"in i && null !== (r = i.get(t, e)) ? r : null == (r = _t.find.attr(t, e)) ? undefined : r)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!yt.radioValue && "radio" === e && l(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, r = 0, i = e && e.match(Nt);
            if (i && 1 === t.nodeType)
                for (; n = i[r++]; )
                    t.removeAttribute(n)
        }
    }),
    Ae = {
        set: function(t, e, n) {
            return !1 === e ? _t.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    _t.each(_t.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var s = xe[e] || _t.find.attr;
        xe[e] = function(t, e, n) {
            var r, i, o = e.toLowerCase();
            return n || (i = xe[o],
            xe[o] = r,
            r = null != s(t, e, n) ? o : null,
            xe[o] = i),
            r
        }
    });
    var De = /^(?:input|select|textarea|button)$/i
      , ke = /^(?:a|area)$/i;
    _t.fn.extend({
        prop: function(t, e) {
            return Ht(this, _t.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[_t.propFix[t] || t]
            })
        }
    }),
    _t.extend({
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && _t.isXMLDoc(t) || (e = _t.propFix[e] || e,
                i = _t.propHooks[e]),
                n !== undefined ? i && "set"in i && (r = i.set(t, n, e)) !== undefined ? r : t[e] = n : i && "get"in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = _t.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : De.test(t.nodeName) || ke.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    yt.optSelected || (_t.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    _t.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _t.propFix[this.toLowerCase()] = this
    }),
    _t.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (vt(e))
                return this.each(function(t) {
                    _t(this).addClass(e.call(this, t, Y(this)))
                });
            if ((t = J(e)).length)
                for (; n = this[u++]; )
                    if (i = Y(n),
                    r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (s = 0; o = t[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (a = z(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (vt(e))
                return this.each(function(t) {
                    _t(this).removeClass(e.call(this, t, Y(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = J(e)).length)
                for (; n = this[u++]; )
                    if (i = Y(n),
                    r = 1 === n.nodeType && " " + z(i) + " ") {
                        for (s = 0; o = t[s++]; )
                            for (; -1 < r.indexOf(" " + o + " "); )
                                r = r.replace(" " + o + " ", " ");
                        i !== (a = z(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, e) {
            var o = typeof i
              , s = "string" === o || Array.isArray(i);
            return "boolean" == typeof e && s ? e ? this.addClass(i) : this.removeClass(i) : vt(i) ? this.each(function(t) {
                _t(this).toggleClass(i.call(this, t, Y(this), e), e)
            }) : this.each(function() {
                var t, e, n, r;
                if (s)
                    for (e = 0,
                    n = _t(this),
                    r = J(i); t = r[e++]; )
                        n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else
                    i !== undefined && "boolean" !== o || ((t = Y(this)) && Wt.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === i ? "" : Wt.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, r = 0;
            for (e = " " + t + " "; n = this[r++]; )
                if (1 === n.nodeType && -1 < (" " + z(Y(n)) + " ").indexOf(e))
                    return !0;
            return !1
        }
    });
    var Ie = /\r/g;
    _t.fn.extend({
        val: function(n) {
            var r, t, i, e = this[0];
            return arguments.length ? (i = vt(n),
            this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = i ? n.call(this, t, _t(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = _t.map(e, function(t) {
                    return null == t ? "" : t + ""
                })),
                (r = _t.valHooks[this.type] || _t.valHooks[this.nodeName.toLowerCase()]) && "set"in r && r.set(this, e, "value") !== undefined || (this.value = e))
            })) : e ? (r = _t.valHooks[e.type] || _t.valHooks[e.nodeName.toLowerCase()]) && "get"in r && (t = r.get(e, "value")) !== undefined ? t : "string" == typeof (t = e.value) ? t.replace(Ie, "") : null == t ? "" : t : void 0
        }
    }),
    _t.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = _t.find.attr(t, "value");
                    return null != e ? e : z(_t.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, r, i = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], u = s ? o + 1 : i.length;
                    for (r = o < 0 ? u : s ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !l(n.parentNode, "optgroup"))) {
                            if (e = _t(n).val(),
                            s)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = _t.makeArray(e), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < _t.inArray(_t.valHooks.option.get(r), o)) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    _t.each(["radio", "checkbox"], function() {
        _t.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = -1 < _t.inArray(_t(t).val(), e)
            }
        },
        yt.checkOn || (_t.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    yt.focusin = "onfocusin"in C;
    var Oe = /^(?:focusinfocus|focusoutblur)$/
      , Le = function(t) {
        t.stopPropagation()
    };
    _t.extend(_t.event, {
        trigger: function(t, e, n, r) {
            var i, o, s, a, u, l, c, f, h = [n || st], d = pt.call(t, "type") ? t.type : t, p = pt.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = f = s = n = n || st,
            3 !== n.nodeType && 8 !== n.nodeType && !Oe.test(d + _t.event.triggered) && (-1 < d.indexOf(".") && (d = (p = d.split(".")).shift(),
            p.sort()),
            u = d.indexOf(":") < 0 && "on" + d,
            (t = t[_t.expando] ? t : new _t.Event(d,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = undefined,
            t.target || (t.target = n),
            e = null == e ? [t] : _t.makeArray(e, [t]),
            c = _t.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                if (!r && !c.noBubble && !bt(n)) {
                    for (a = c.delegateType || d,
                    Oe.test(a + d) || (o = o.parentNode); o; o = o.parentNode)
                        h.push(o),
                        s = o;
                    s === (n.ownerDocument || st) && h.push(s.defaultView || s.parentWindow || C)
                }
                for (i = 0; (o = h[i++]) && !t.isPropagationStopped(); )
                    f = o,
                    t.type = 1 < i ? a : c.bindType || d,
                    (l = (Wt.get(o, "events") || {})[t.type] && Wt.get(o, "handle")) && l.apply(o, e),
                    (l = u && o[u]) && l.apply && qt(o) && (t.result = l.apply(o, e),
                    !1 === t.result && t.preventDefault());
                return t.type = d,
                r || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !qt(n) || u && vt(n[d]) && !bt(n) && ((s = n[u]) && (n[u] = null),
                _t.event.triggered = d,
                t.isPropagationStopped() && f.addEventListener(d, Le),
                n[d](),
                t.isPropagationStopped() && f.removeEventListener(d, Le),
                _t.event.triggered = undefined,
                s && (n[u] = s)),
                t.result
            }
        },
        simulate: function(t, e, n) {
            var r = _t.extend(new _t.Event, n, {
                type: t,
                isSimulated: !0
            });
            _t.event.trigger(r, null, e)
        }
    }),
    _t.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                _t.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return _t.event.trigger(t, e, n, !0)
        }
    }),
    yt.focusin || _t.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(t) {
            _t.event.simulate(r, t.target, _t.event.fix(t))
        };
        _t.event.special[r] = {
            setup: function() {
                var t = this.ownerDocument || this
                  , e = Wt.access(t, r);
                e || t.addEventListener(n, i, !0),
                Wt.access(t, r, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this
                  , e = Wt.access(t, r) - 1;
                e ? Wt.access(t, r, e) : (t.removeEventListener(n, i, !0),
                Wt.remove(t, r))
            }
        }
    });
    var Ne = C.location
      , Pe = Date.now()
      , Re = /\?/;
    _t.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t)
            return null;
        try {
            e = (new C.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            e = undefined
        }
        return e && !e.getElementsByTagName("parsererror").length || _t.error("Invalid XML: " + t),
        e
    }
    ;
    var He = /\[\]$/
      , je = /\r?\n/g
      , Me = /^(?:submit|button|image|reset|file)$/i
      , qe = /^(?:input|select|textarea|keygen)/i;
    _t.param = function(t, e) {
        var n, r = [], i = function(t, e) {
            var n = vt(e) ? e() : e;
            r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(t) || t.jquery && !_t.isPlainObject(t))
            _t.each(t, function() {
                i(this.name, this.value)
            });
        else
            for (n in t)
                Z(n, t[n], e, i);
        return r.join("&")
    }
    ,
    _t.fn.extend({
        serialize: function() {
            return _t.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = _t.prop(this, "elements");
                return t ? _t.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !_t(this).is(":disabled") && qe.test(this.nodeName) && !Me.test(t) && (this.checked || !zt.test(t))
            }).map(function(t, e) {
                var n = _t(this).val();
                return null == n ? null : Array.isArray(n) ? _t.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(je, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(je, "\r\n")
                }
            }).get()
        }
    });
    var We = /%20/g
      , Fe = /#.*$/
      , Be = /([?&])_=[^&]*/
      , Ue = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Ge = /^(?:GET|HEAD)$/
      , Ke = /^\/\//
      , $e = {}
      , Qe = {}
      , Xe = "*/".concat("*")
      , ze = st.createElement("a");
    ze.href = Ne.href,
    _t.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ne.href,
            type: "GET",
            isLocal: Ve.test(Ne.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": _t.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? nt(nt(t, _t.ajaxSettings), e) : nt(_t.ajaxSettings, t)
        },
        ajaxPrefilter: tt($e),
        ajaxTransport: tt(Qe),
        ajax: function(t, e) {
            function n(t, e, n, r) {
                var i, o, s, a, u, l = e;
                p || (p = !0,
                d && C.clearTimeout(d),
                c = undefined,
                h = r || "",
                _.readyState = 0 < t ? 4 : 0,
                i = 200 <= t && t < 300 || 304 === t,
                n && (a = rt(g, _, n)),
                a = it(g, a, _, i),
                i ? (g.ifModified && ((u = _.getResponseHeader("Last-Modified")) && (_t.lastModified[f] = u),
                (u = _.getResponseHeader("etag")) && (_t.etag[f] = u)),
                204 === t || "HEAD" === g.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = a.state,
                o = a.data,
                i = !(s = a.error))) : (s = l,
                !t && l || (l = "error",
                t < 0 && (t = 0))),
                _.status = t,
                _.statusText = (e || l) + "",
                i ? b.resolveWith(y, [o, l, _]) : b.rejectWith(y, [_, l, s]),
                _.statusCode(T),
                T = undefined,
                m && v.trigger(i ? "ajaxSuccess" : "ajaxError", [_, g, i ? o : s]),
                E.fireWith(y, [_, l]),
                m && (v.trigger("ajaxComplete", [_, g]),
                --_t.active || _t.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t,
            t = undefined),
            e = e || {};
            var c, f, h, r, d, i, p, m, o, s, g = _t.ajaxSetup({}, e), y = g.context || g, v = g.context && (y.nodeType || y.jquery) ? _t(y) : _t.event, b = _t.Deferred(), E = _t.Callbacks("once memory"), T = g.statusCode || {}, a = {}, u = {}, l = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (p) {
                        if (!r)
                            for (r = {}; e = Ue.exec(h); )
                                r[e[1].toLowerCase()] = e[2];
                        e = r[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return p ? h : null
                },
                setRequestHeader: function(t, e) {
                    return null == p && (t = u[t.toLowerCase()] = u[t.toLowerCase()] || t,
                    a[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == p && (g.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (p)
                            _.always(t[_.status]);
                        else
                            for (e in t)
                                T[e] = [T[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || l;
                    return c && c.abort(e),
                    n(0, e),
                    this
                }
            };
            if (b.promise(_),
            g.url = ((t || g.url || Ne.href) + "").replace(Ke, Ne.protocol + "//"),
            g.type = e.method || e.type || g.method || g.type,
            g.dataTypes = (g.dataType || "*").toLowerCase().match(Nt) || [""],
            null == g.crossDomain) {
                i = st.createElement("a");
                try {
                    i.href = g.url,
                    i.href = i.href,
                    g.crossDomain = ze.protocol + "//" + ze.host != i.protocol + "//" + i.host
                } catch (w) {
                    g.crossDomain = !0
                }
            }
            if (g.data && g.processData && "string" != typeof g.data && (g.data = _t.param(g.data, g.traditional)),
            et($e, g, e, _),
            p)
                return _;
            for (o in (m = _t.event && g.global) && 0 == _t.active++ && _t.event.trigger("ajaxStart"),
            g.type = g.type.toUpperCase(),
            g.hasContent = !Ge.test(g.type),
            f = g.url.replace(Fe, ""),
            g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(We, "+")) : (s = g.url.slice(f.length),
            g.data && (g.processData || "string" == typeof g.data) && (f += (Re.test(f) ? "&" : "?") + g.data,
            delete g.data),
            !1 === g.cache && (f = f.replace(Be, "$1"),
            s = (Re.test(f) ? "&" : "?") + "_=" + Pe++ + s),
            g.url = f + s),
            g.ifModified && (_t.lastModified[f] && _.setRequestHeader("If-Modified-Since", _t.lastModified[f]),
            _t.etag[f] && _.setRequestHeader("If-None-Match", _t.etag[f])),
            (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && _.setRequestHeader("Content-Type", g.contentType),
            _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") : g.accepts["*"]),
            g.headers)
                _.setRequestHeader(o, g.headers[o]);
            if (g.beforeSend && (!1 === g.beforeSend.call(y, _, g) || p))
                return _.abort();
            if (l = "abort",
            E.add(g.complete),
            _.done(g.success),
            _.fail(g.error),
            c = et(Qe, g, e, _)) {
                if (_.readyState = 1,
                m && v.trigger("ajaxSend", [_, g]),
                p)
                    return _;
                g.async && 0 < g.timeout && (d = C.setTimeout(function() {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    p = !1,
                    c.send(a, n)
                } catch (w) {
                    if (p)
                        throw w;
                    n(-1, w)
                }
            } else
                n(-1, "No Transport");
            return _
        },
        getJSON: function(t, e, n) {
            return _t.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return _t.get(t, undefined, e, "script")
        }
    }),
    _t.each(["get", "post"], function(t, i) {
        _t[i] = function(t, e, n, r) {
            return vt(e) && (r = r || n,
            n = e,
            e = undefined),
            _t.ajax(_t.extend({
                url: t,
                type: i,
                dataType: r,
                data: e,
                success: n
            }, _t.isPlainObject(t) && t))
        }
    }),
    _t._evalUrl = function(t) {
        return _t.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    _t.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (vt(t) && (t = t.call(this[0])),
            e = _t(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return vt(n) ? this.each(function(t) {
                _t(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = _t(this)
                  , e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = vt(e);
            return this.each(function(t) {
                _t(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                _t(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    _t.expr.pseudos.hidden = function(t) {
        return !_t.expr.pseudos.visible(t)
    }
    ,
    _t.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    _t.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Ye = {
        0: 200,
        1223: 204
    }
      , Je = _t.ajaxSettings.xhr();
    yt.cors = !!Je && "withCredentials"in Je,
    yt.ajax = Je = !!Je,
    _t.ajaxTransport(function(o) {
        var s, a;
        if (yt.cors || Je && !o.crossDomain)
            return {
                send: function(t, e) {
                    var n, r = o.xhr();
                    if (r.open(o.type, o.url, o.async, o.username, o.password),
                    o.xhrFields)
                        for (n in o.xhrFields)
                            r[n] = o.xhrFields[n];
                    for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType),
                    o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"),
                    t)
                        r.setRequestHeader(n, t[n]);
                    s = function(t) {
                        return function() {
                            s && (s = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? e(0, "error") : e(r.status, r.statusText) : e(Ye[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = s(),
                    a = r.onerror = r.ontimeout = s("error"),
                    r.onabort !== undefined ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && C.setTimeout(function() {
                            s && a()
                        })
                    }
                    ,
                    s = s("abort");
                    try {
                        r.send(o.hasContent && o.data || null)
                    } catch (i) {
                        if (s)
                            throw i
                    }
                },
                abort: function() {
                    s && s()
                }
            }
    }),
    _t.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    _t.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return _t.globalEval(t),
                t
            }
        }
    }),
    _t.ajaxPrefilter("script", function(t) {
        t.cache === undefined && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    _t.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain)
            return {
                send: function(t, e) {
                    r = _t("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(t) {
                        r.remove(),
                        i = null,
                        t && e("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    st.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Ze, tn = [], en = /(=)\?(?=&|$)|\?\?/;
    _t.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || _t.expando + "_" + Pe++;
            return this[t] = !0,
            t
        }
    }),
    _t.ajaxPrefilter("json jsonp", function(t, e, n) {
        var r, i, o, s = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = vt(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(en, "$1" + r) : !1 !== t.jsonp && (t.url += (Re.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return o || _t.error(r + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = C[r],
            C[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                i === undefined ? _t(C).removeProp(r) : C[r] = i,
                t[r] && (t.jsonpCallback = e.jsonpCallback,
                tn.push(r)),
                o && vt(i) && i(o[0]),
                o = i = undefined
            }),
            "script"
    }),
    yt.createHTMLDocument = ((Ze = st.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === Ze.childNodes.length),
    _t.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (yt.createHTMLDocument ? ((r = (e = st.implementation.createHTMLDocument("")).createElement("base")).href = st.location.href,
        e.head.appendChild(r)) : e = st),
        o = !n && [],
        (i = Dt.exec(t)) ? [e.createElement(i[1])] : (i = _([t], e, o),
        o && o.length && _t(o).remove(),
        _t.merge([], i.childNodes)));
        var r, i, o
    }
    ,
    _t.fn.load = function(t, e, n) {
        var r, i, o, s = this, a = t.indexOf(" ");
        return -1 < a && (r = z(t.slice(a)),
        t = t.slice(0, a)),
        vt(e) ? (n = e,
        e = undefined) : e && "object" == typeof e && (i = "POST"),
        0 < s.length && _t.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
            s.html(r ? _t("<div>").append(_t.parseHTML(t)).find(r) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(this, o || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    _t.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        _t.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    _t.expr.pseudos.animated = function(e) {
        return _t.grep(_t.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    _t.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, u, l = _t.css(t, "position"), c = _t(t), f = {};
            "static" === l && (t.style.position = "relative"),
            a = c.offset(),
            o = _t.css(t, "top"),
            u = _t.css(t, "left"),
            ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            vt(e) && (e = e.call(t, n, _t.extend({}, a))),
            null != e.top && (f.top = e.top - a.top + s),
            null != e.left && (f.left = e.left - a.left + i),
            "using"in e ? e.using.call(t, f) : c.css(f)
        }
    },
    _t.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return e === undefined ? this : this.each(function(t) {
                    _t.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === _t.css(r, "position"))
                    e = r.getBoundingClientRect();
                else {
                    for (e = this.offset(),
                    n = r.ownerDocument,
                    t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _t.css(t, "position"); )
                        t = t.parentNode;
                    t && t !== r && 1 === t.nodeType && ((i = _t(t).offset()).top += _t.css(t, "borderTopWidth", !0),
                    i.left += _t.css(t, "borderLeftWidth", !0))
                }
                return {
                    top: e.top - i.top - _t.css(r, "marginTop", !0),
                    left: e.left - i.left - _t.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === _t.css(t, "position"); )
                    t = t.offsetParent;
                return t || re
            })
        }
    }),
    _t.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var o = "pageYOffset" === i;
        _t.fn[e] = function(t) {
            return Ht(this, function(t, e, n) {
                var r;
                if (bt(t) ? r = t : 9 === t.nodeType && (r = t.defaultView),
                n === undefined)
                    return r ? r[i] : t[e];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : t[e] = n
            }, e, t, arguments.length)
        }
    }),
    _t.each(["top", "left"], function(t, n) {
        _t.cssHooks[n] = H(yt.pixelPosition, function(t, e) {
            if (e)
                return e = R(t, n),
                fe.test(e) ? _t(t).position()[n] + "px" : e
        })
    }),
    _t.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        _t.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            _t.fn[o] = function(t, e) {
                var n = arguments.length && (r || "boolean" != typeof t)
                  , i = r || (!0 === t || !0 === e ? "margin" : "border");
                return Ht(this, function(t, e, n) {
                    var r;
                    return bt(t) ? 0 === o.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + s], r["scroll" + s], t.body["offset" + s], r["offset" + s], r["client" + s])) : n === undefined ? _t.css(t, e, i) : _t.style(t, e, n, i)
                }, a, n ? t : undefined, n)
            }
        })
    }),
    _t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
        _t.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }),
    _t.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    _t.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    _t.proxy = function(t, e) {
        var n, r, i;
        return "string" == typeof e && (n = t[e],
        e = t,
        t = n),
        vt(t) ? (r = ut.call(arguments, 2),
        (i = function() {
            return t.apply(e || this, r.concat(ut.call(arguments)))
        }
        ).guid = t.guid = t.guid || _t.guid++,
        i) : undefined
    }
    ,
    _t.holdReady = function(t) {
        t ? _t.readyWait++ : _t.ready(!0)
    }
    ,
    _t.isArray = Array.isArray,
    _t.parseJSON = JSON.parse,
    _t.nodeName = l,
    _t.isFunction = vt,
    _t.isWindow = bt,
    _t.camelCase = d,
    _t.type = g,
    _t.now = Date.now,
    _t.isNumeric = function(t) {
        var e = _t.type(t);
        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return _t
    });
    var nn = C.jQuery
      , rn = C.$;
    return _t.noConflict = function(t) {
        return C.$ === _t && (C.$ = rn),
        t && C.jQuery === _t && (C.jQuery = nn),
        _t
    }
    ,
    t || (C.jQuery = C.$ = _t),
    _t
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Popper = e()
}(this, function() {
    "use strict";
    function t(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            window.Promise.resolve().then(function() {
                e = !1,
                t()
            }))
        }
    }
    function e(t) {
        var e = !1;
        return function() {
            e || (e = !0,
            setTimeout(function() {
                e = !1,
                t()
            }, at))
        }
    }
    function a(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }
    function E(t, e) {
        if (1 !== t.nodeType)
            return [];
        var n = getComputedStyle(t, null);
        return e ? n[e] : n
    }
    function f(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }
    function d(t) {
        if (!t)
            return document.body;
        switch (t.nodeName) {
        case "HTML":
        case "BODY":
            return t.ownerDocument.body;
        case "#document":
            return t.body
        }
        var e = E(t)
          , n = e.overflow
          , r = e.overflowX
          , i = e.overflowY;
        return /(auto|scroll)/.test(n + i + r) ? t : d(f(t))
    }
    function v(t) {
        var e = t && t.offsetParent
          , n = e && e.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === E(e, "position") ? v(e) : e : t ? t.ownerDocument.documentElement : document.documentElement
    }
    function u(t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || v(t.firstElementChild) === t)
    }
    function l(t) {
        return null !== t.parentNode ? l(t.parentNode) : t
    }
    function h(t, e) {
        if (!(t && t.nodeType && e && e.nodeType))
            return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING
          , r = n ? t : e
          , i = n ? e : t
          , o = document.createRange();
        o.setStart(r, 0),
        o.setEnd(i, 0);
        var s = o.commonAncestorContainer;
        if (t !== s && e !== s || r.contains(i))
            return u(s) ? s : v(s);
        var a = l(t);
        return a.host ? h(a.host, e) : h(t, l(e).host)
    }
    function p(t, e) {
        var n = "top" === (1 < arguments.length && e !== undefined ? e : "top") ? "scrollTop" : "scrollLeft"
          , r = t.nodeName;
        if ("BODY" === r || "HTML" === r) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[n]
        }
        return t[n]
    }
    function m(t, e, n) {
        var r = 2 < arguments.length && n !== undefined && n
          , i = p(e, "top")
          , o = p(e, "left")
          , s = r ? -1 : 1;
        return t.top += i * s,
        t.bottom += i * s,
        t.left += o * s,
        t.right += o * s,
        t
    }
    function g(t, e) {
        var n = "x" === e ? "Left" : "Top"
          , r = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + r + "Width"], 10)
    }
    function r(t, e, n, r) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], ft() ? n["offset" + t] + r["margin" + ("Height" === t ? "Top" : "Left")] + r["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
    }
    function y() {
        var t = document.body
          , e = document.documentElement
          , n = ft() && getComputedStyle(e);
        return {
            height: r("Height", t, e, n),
            width: r("Width", t, e, n)
        }
    }
    function T(t) {
        return mt({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }
    function b(t) {
        var e = {};
        if (ft())
            try {
                e = t.getBoundingClientRect();
                var n = p(t, "top")
                  , r = p(t, "left");
                e.top += n,
                e.left += r,
                e.bottom += n,
                e.right += r
            } catch (f) {}
        else
            e = t.getBoundingClientRect();
        var i = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
        }
          , o = "HTML" === t.nodeName ? y() : {}
          , s = o.width || t.clientWidth || i.right - i.left
          , a = o.height || t.clientHeight || i.bottom - i.top
          , u = t.offsetWidth - s
          , l = t.offsetHeight - a;
        if (u || l) {
            var c = E(t);
            u -= g(c, "x"),
            l -= g(c, "y"),
            i.width -= u,
            i.height -= l
        }
        return T(i)
    }
    function _(t, e) {
        var n = ft()
          , r = "HTML" === e.nodeName
          , i = b(t)
          , o = b(e)
          , s = d(t)
          , a = E(e)
          , u = parseFloat(a.borderTopWidth, 10)
          , l = parseFloat(a.borderLeftWidth, 10)
          , c = T({
            top: i.top - o.top - u,
            left: i.left - o.left - l,
            width: i.width,
            height: i.height
        });
        if (c.marginTop = 0,
        c.marginLeft = 0,
        !n && r) {
            var f = parseFloat(a.marginTop, 10)
              , h = parseFloat(a.marginLeft, 10);
            c.top -= u - f,
            c.bottom -= u - f,
            c.left -= l - h,
            c.right -= l - h,
            c.marginTop = f,
            c.marginLeft = h
        }
        return (n ? e.contains(s) : e === s && "BODY" !== s.nodeName) && (c = m(c, e)),
        c
    }
    function w(t) {
        var e = t.ownerDocument.documentElement
          , n = _(t, e)
          , r = Math.max(e.clientWidth, window.innerWidth || 0)
          , i = Math.max(e.clientHeight, window.innerHeight || 0)
          , o = p(e)
          , s = p(e, "left");
        return T({
            top: o - n.top + n.marginTop,
            left: s - n.left + n.marginLeft,
            width: r,
            height: i
        })
    }
    function C(t) {
        var e = t.nodeName;
        return "BODY" !== e && "HTML" !== e && ("fixed" === E(t, "position") || C(f(t)))
    }
    function S(t, e, n, r) {
        var i = {
            top: 0,
            left: 0
        }
          , o = h(t, e);
        if ("viewport" === r)
            i = w(o);
        else {
            var s = void 0;
            "scrollParent" === r ? "BODY" === (s = d(f(e))).nodeName && (s = t.ownerDocument.documentElement) : s = "window" === r ? t.ownerDocument.documentElement : r;
            var a = _(s, o);
            if ("HTML" !== s.nodeName || C(o))
                i = a;
            else {
                var u = y()
                  , l = u.height
                  , c = u.width;
                i.top += a.top - a.marginTop,
                i.bottom = l + a.top,
                i.left += a.left - a.marginLeft,
                i.right = c + a.left
            }
        }
        return i.left += n,
        i.top += n,
        i.right -= n,
        i.bottom -= n,
        i
    }
    function A(t) {
        return t.width * t.height
    }
    function c(t, e, r, n, i, o) {
        var s = 5 < arguments.length && o !== undefined ? o : 0;
        if (-1 === t.indexOf("auto"))
            return t;
        var a = S(r, n, s, i)
          , u = {
            top: {
                width: a.width,
                height: e.top - a.top
            },
            right: {
                width: a.right - e.right,
                height: a.height
            },
            bottom: {
                width: a.width,
                height: a.bottom - e.bottom
            },
            left: {
                width: e.left - a.left,
                height: a.height
            }
        }
          , l = Object.keys(u).map(function(t) {
            return mt({
                key: t
            }, u[t], {
                area: A(u[t])
            })
        }).sort(function(t, e) {
            return e.area - t.area
        })
          , c = l.filter(function(t) {
            var e = t.width
              , n = t.height;
            return e >= r.clientWidth && n >= r.clientHeight
        })
          , f = 0 < c.length ? c[0].key : l[0].key
          , h = t.split("-")[1];
        return f + (h ? "-" + h : "")
    }
    function x(t, e, n) {
        return _(n, h(e, n))
    }
    function D(t) {
        var e = getComputedStyle(t)
          , n = parseFloat(e.marginTop) + parseFloat(e.marginBottom)
          , r = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
            width: t.offsetWidth + r,
            height: t.offsetHeight + n
        }
    }
    function k(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }
    function I(t, e, n) {
        n = n.split("-")[0];
        var r = D(t)
          , i = {
            width: r.width,
            height: r.height
        }
          , o = -1 !== ["right", "left"].indexOf(n)
          , s = o ? "top" : "left"
          , a = o ? "left" : "top"
          , u = o ? "height" : "width"
          , l = o ? "width" : "height";
        return i[s] = e[s] + e[u] / 2 - r[u] / 2,
        i[a] = n === a ? e[a] - r[l] : e[k(a)],
        i
    }
    function O(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }
    function i(t, e, n) {
        if (Array.prototype.findIndex)
            return t.findIndex(function(t) {
                return t[e] === n
            });
        var r = O(t, function(t) {
            return t[e] === n
        });
        return t.indexOf(r)
    }
    function L(t, n, e) {
        return (e === undefined ? t : t.slice(0, i(t, "name", e))).forEach(function(t) {
            t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var e = t["function"] || t.fn;
            t.enabled && a(e) && (n.offsets.popper = T(n.offsets.popper),
            n.offsets.reference = T(n.offsets.reference),
            n = e(n, t))
        }),
        n
    }
    function n() {
        if (!this.state.isDestroyed) {
            var t = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: !1,
                offsets: {}
            };
            t.offsets.reference = x(this.state, this.popper, this.reference),
            t.placement = c(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
            t.originalPlacement = t.placement,
            t.offsets.popper = I(this.popper, t.offsets.reference, t.placement),
            t.offsets.popper.position = "absolute",
            t = L(this.modifiers, t),
            this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0,
            this.options.onCreate(t))
        }
    }
    function o(t, n) {
        return t.some(function(t) {
            var e = t.name;
            return t.enabled && e === n
        })
    }
    function N(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length - 1; r++) {
            var i = e[r]
              , o = i ? "" + i + n : t;
            if ("undefined" != typeof document.body.style[o])
                return o
        }
        return null
    }
    function P() {
        return this.state.isDestroyed = !0,
        o(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
        this.popper.style.left = "",
        this.popper.style.position = "",
        this.popper.style.top = "",
        this.popper.style[N("transform")] = ""),
        this.disableEventListeners(),
        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
        this
    }
    function s(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }
    function R(t, e, n, r) {
        var i = "BODY" === t.nodeName
          , o = i ? t.ownerDocument.defaultView : t;
        o.addEventListener(e, n, {
            passive: !0
        }),
        i || R(d(o.parentNode), e, n, r),
        r.push(o)
    }
    function H(t, e, n, r) {
        n.updateBound = r,
        s(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var i = d(t);
        return R(i, "scroll", n.updateBound, n.scrollParents),
        n.scrollElement = i,
        n.eventsEnabled = !0,
        n
    }
    function j() {
        this.state.eventsEnabled || (this.state = H(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function M(t, e) {
        return s(t).removeEventListener("resize", e.updateBound),
        e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }),
        e.updateBound = null,
        e.scrollParents = [],
        e.scrollElement = null,
        e.eventsEnabled = !1,
        e
    }
    function q() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
        this.state = M(this.reference, this.state))
    }
    function W(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }
    function F(n, r) {
        Object.keys(r).forEach(function(t) {
            var e = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(t) && W(r[t]) && (e = "px"),
            n.style[t] = r[t] + e
        })
    }
    function B(e, n) {
        Object.keys(n).forEach(function(t) {
            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
        })
    }
    function U(t) {
        return F(t.instance.popper, t.styles),
        B(t.instance.popper, t.attributes),
        t.arrowElement && Object.keys(t.arrowStyles).length && F(t.arrowElement, t.arrowStyles),
        t
    }
    function V(t, e, n, r, i) {
        var o = x(i, e, t)
          , s = c(n.placement, o, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
        return e.setAttribute("x-placement", s),
        F(e, {
            position: "absolute"
        }),
        n
    }
    function G(t, e) {
        var n = e.x
          , r = e.y
          , i = t.offsets.popper
          , o = O(t.instance.modifiers, function(t) {
            return "applyStyle" === t.name
        }).gpuAcceleration;
        o !== undefined && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var s = o !== undefined ? o : e.gpuAcceleration
          , a = b(v(t.instance.popper))
          , u = {
            position: i.position
        }
          , l = {
            left: Math.floor(i.left),
            top: Math.floor(i.top),
            bottom: Math.floor(i.bottom),
            right: Math.floor(i.right)
        }
          , c = "bottom" === n ? "top" : "bottom"
          , f = "right" === r ? "left" : "right"
          , h = N("transform")
          , d = void 0
          , p = void 0;
        if (p = "bottom" === c ? -a.height + l.bottom : l.top,
        d = "right" === f ? -a.width + l.right : l.left,
        s && h)
            u[h] = "translate3d(" + d + "px, " + p + "px, 0)",
            u[c] = 0,
            u[f] = 0,
            u.willChange = "transform";
        else {
            var m = "bottom" === c ? -1 : 1
              , g = "right" === f ? -1 : 1;
            u[c] = p * m,
            u[f] = d * g,
            u.willChange = c + ", " + f
        }
        var y = {
            "x-placement": t.placement
        };
        return t.attributes = mt({}, y, t.attributes),
        t.styles = mt({}, u, t.styles),
        t.arrowStyles = mt({}, t.offsets.arrow, t.arrowStyles),
        t
    }
    function K(t, e, n) {
        var r = O(t, function(t) {
            return t.name === e
        })
          , i = !!r && t.some(function(t) {
            return t.name === n && t.enabled && t.order < r.order
        });
        if (!i) {
            var o = "`" + e + "`"
              , s = "`" + n + "`";
            console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
        }
        return i
    }
    function $(t, e) {
        var n;
        if (!K(t.instance.modifiers, "arrow", "keepTogether"))
            return t;
        var r = e.element;
        if ("string" == typeof r) {
            if (!(r = t.instance.popper.querySelector(r)))
                return t
        } else if (!t.instance.popper.contains(r))
            return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
            t;
        var i = t.placement.split("-")[0]
          , o = t.offsets
          , s = o.popper
          , a = o.reference
          , u = -1 !== ["left", "right"].indexOf(i)
          , l = u ? "height" : "width"
          , c = u ? "Top" : "Left"
          , f = c.toLowerCase()
          , h = u ? "left" : "top"
          , d = u ? "bottom" : "right"
          , p = D(r)[l];
        a[d] - p < s[f] && (t.offsets.popper[f] -= s[f] - (a[d] - p)),
        a[f] + p > s[d] && (t.offsets.popper[f] += a[f] + p - s[d]),
        t.offsets.popper = T(t.offsets.popper);
        var m = a[f] + a[l] / 2 - p / 2
          , g = E(t.instance.popper)
          , y = parseFloat(g["margin" + c], 10)
          , v = parseFloat(g["border" + c + "Width"], 10)
          , b = m - t.offsets.popper[f] - y - v;
        return b = Math.max(Math.min(s[l] - p, b), 0),
        t.arrowElement = r,
        t.offsets.arrow = (pt(n = {}, f, Math.round(b)),
        pt(n, h, ""),
        n),
        t
    }
    function Q(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
    }
    function X(t, e) {
        var n = 1 < arguments.length && e !== undefined && e
          , r = yt.indexOf(t)
          , i = yt.slice(r + 1).concat(yt.slice(0, r));
        return n ? i.reverse() : i
    }
    function z(d, p) {
        if (o(d.instance.modifiers, "inner"))
            return d;
        if (d.flipped && d.placement === d.originalPlacement)
            return d;
        var m = S(d.instance.popper, d.instance.reference, p.padding, p.boundariesElement)
          , g = d.placement.split("-")[0]
          , y = k(g)
          , v = d.placement.split("-")[1] || ""
          , b = [];
        switch (p.behavior) {
        case vt.FLIP:
            b = [g, y];
            break;
        case vt.CLOCKWISE:
            b = X(g);
            break;
        case vt.COUNTERCLOCKWISE:
            b = X(g, !0);
            break;
        default:
            b = p.behavior
        }
        return b.forEach(function(t, e) {
            if (g !== t || b.length === e + 1)
                return d;
            g = d.placement.split("-")[0],
            y = k(g);
            var n = d.offsets.popper
              , r = d.offsets.reference
              , i = Math.floor
              , o = "left" === g && i(n.right) > i(r.left) || "right" === g && i(n.left) < i(r.right) || "top" === g && i(n.bottom) > i(r.top) || "bottom" === g && i(n.top) < i(r.bottom)
              , s = i(n.left) < i(m.left)
              , a = i(n.right) > i(m.right)
              , u = i(n.top) < i(m.top)
              , l = i(n.bottom) > i(m.bottom)
              , c = "left" === g && s || "right" === g && a || "top" === g && u || "bottom" === g && l
              , f = -1 !== ["top", "bottom"].indexOf(g)
              , h = !!p.flipVariations && (f && "start" === v && s || f && "end" === v && a || !f && "start" === v && u || !f && "end" === v && l);
            (o || c || h) && (d.flipped = !0,
            (o || c) && (g = b[e + 1]),
            h && (v = Q(v)),
            d.placement = g + (v ? "-" + v : ""),
            d.offsets.popper = mt({}, d.offsets.popper, I(d.instance.popper, d.offsets.reference, d.placement)),
            d = L(d.instance.modifiers, d, "flip"))
        }),
        d
    }
    function Y(t) {
        var e = t.offsets
          , n = e.popper
          , r = e.reference
          , i = t.placement.split("-")[0]
          , o = Math.floor
          , s = -1 !== ["top", "bottom"].indexOf(i)
          , a = s ? "right" : "bottom"
          , u = s ? "left" : "top"
          , l = s ? "width" : "height";
        return n[a] < o(r[u]) && (t.offsets.popper[u] = o(r[u]) - n[l]),
        n[u] > o(r[a]) && (t.offsets.popper[u] = o(r[a])),
        t
    }
    function J(t, e, n, r) {
        var i = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
          , o = +i[1]
          , s = i[2];
        if (!o)
            return t;
        if (0 === s.indexOf("%")) {
            var a = void 0;
            switch (s) {
            case "%p":
                a = n;
                break;
            case "%":
            case "%r":
            default:
                a = r
            }
            return T(a)[e] / 100 * o
        }
        if ("vh" === s || "vw" === s) {
            return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o
        }
        return o
    }
    function Z(t, i, o, e) {
        var s = [0, 0]
          , a = -1 !== ["right", "left"].indexOf(e)
          , n = t.split(/(\+|\-)/).map(function(t) {
            return t.trim()
        })
          , r = n.indexOf(O(n, function(t) {
            return -1 !== t.search(/,|\s/)
        }));
        n[r] && -1 === n[r].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var u = /\s*,\s*|\s+/
          , l = -1 !== r ? [n.slice(0, r).concat([n[r].split(u)[0]]), [n[r].split(u)[1]].concat(n.slice(r + 1))] : [n];
        return (l = l.map(function(t, e) {
            var n = (1 === e ? !a : a) ? "height" : "width"
              , r = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e,
                r = !0,
                t) : r ? (t[t.length - 1] += e,
                r = !1,
                t) : t.concat(e)
            }, []).map(function(t) {
                return J(t, n, i, o)
            })
        })).forEach(function(n, r) {
            n.forEach(function(t, e) {
                W(t) && (s[r] += t * ("-" === n[e - 1] ? -1 : 1))
            })
        }),
        s
    }
    function tt(t, e) {
        var n = e.offset
          , r = t.placement
          , i = t.offsets
          , o = i.popper
          , s = i.reference
          , a = r.split("-")[0]
          , u = void 0;
        return u = W(+n) ? [+n, 0] : Z(n, o, s, a),
        "left" === a ? (o.top += u[0],
        o.left -= u[1]) : "right" === a ? (o.top += u[0],
        o.left += u[1]) : "top" === a ? (o.left += u[0],
        o.top -= u[1]) : "bottom" === a && (o.left += u[0],
        o.top += u[1]),
        t.popper = o,
        t
    }
    function et(t, r) {
        var e = r.boundariesElement || v(t.instance.popper);
        t.instance.reference === e && (e = v(e));
        var i = S(t.instance.popper, t.instance.reference, r.padding, e);
        r.boundaries = i;
        var n = r.priority
          , o = t.offsets.popper
          , s = {
            primary: function(t) {
                var e = o[t];
                return o[t] < i[t] && !r.escapeWithReference && (e = Math.max(o[t], i[t])),
                pt({}, t, e)
            },
            secondary: function(t) {
                var e = "right" === t ? "left" : "top"
                  , n = o[e];
                return o[t] > i[t] && !r.escapeWithReference && (n = Math.min(o[e], i[t] - ("right" === t ? o.width : o.height))),
                pt({}, e, n)
            }
        };
        return n.forEach(function(t) {
            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
            o = mt({}, o, s[e](t))
        }),
        t.offsets.popper = o,
        t
    }
    function nt(t) {
        var e = t.placement
          , n = e.split("-")[0]
          , r = e.split("-")[1];
        if (r) {
            var i = t.offsets
              , o = i.reference
              , s = i.popper
              , a = -1 !== ["bottom", "top"].indexOf(n)
              , u = a ? "left" : "top"
              , l = a ? "width" : "height"
              , c = {
                start: pt({}, u, o[u]),
                end: pt({}, u, o[u] + o[l] - s[l])
            };
            t.offsets.popper = mt({}, s, c[r])
        }
        return t
    }
    function rt(t) {
        if (!K(t.instance.modifiers, "hide", "preventOverflow"))
            return t;
        var e = t.offsets.reference
          , n = O(t.instance.modifiers, function(t) {
            return "preventOverflow" === t.name
        }).boundaries;
        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
            if (!0 === t.hide)
                return t;
            t.hide = !0,
            t.attributes["x-out-of-boundaries"] = ""
        } else {
            if (!1 === t.hide)
                return t;
            t.hide = !1,
            t.attributes["x-out-of-boundaries"] = !1
        }
        return t
    }
    function it(t) {
        var e = t.placement
          , n = e.split("-")[0]
          , r = t.offsets
          , i = r.popper
          , o = r.reference
          , s = -1 !== ["left", "right"].indexOf(n)
          , a = -1 === ["top", "left"].indexOf(n);
        return i[s ? "left" : "top"] = o[n] - (a ? i[s ? "width" : "height"] : 0),
        t.placement = k(e),
        t.offsets.popper = T(i),
        t
    }
    for (var ot = "undefined" != typeof window && "undefined" != typeof document, st = ["Edge", "Trident", "Firefox"], at = 0, ut = 0; ut < st.length; ut += 1)
        if (ot && 0 <= navigator.userAgent.indexOf(st[ut])) {
            at = 1;
            break
        }
    var lt = ot && window.Promise ? t : e
      , ct = undefined
      , ft = function() {
        return ct === undefined && (ct = -1 !== navigator.appVersion.indexOf("MSIE 10")),
        ct
    }
      , ht = function(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
      , dt = function() {
        function r(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(t, r.key, r)
            }
        }
        return function(t, e, n) {
            return e && r(t.prototype, e),
            n && r(t, n),
            t
        }
    }()
      , pt = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
      , mt = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
    }
      , gt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
      , yt = gt.slice(3)
      , vt = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    }
      , bt = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: !0,
                fn: nt
            },
            offset: {
                order: 200,
                enabled: !0,
                fn: tt,
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: !0,
                fn: et,
                priority: ["left", "right", "top", "bottom"],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: !0,
                fn: Y
            },
            arrow: {
                order: 500,
                enabled: !0,
                fn: $,
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: !0,
                fn: z,
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport"
            },
            inner: {
                order: 700,
                enabled: !1,
                fn: it
            },
            hide: {
                order: 800,
                enabled: !0,
                fn: rt
            },
            computeStyle: {
                order: 850,
                enabled: !0,
                fn: G,
                gpuAcceleration: !0,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: !0,
                fn: U,
                onLoad: V,
                gpuAcceleration: undefined
            }
        }
    }
      , Et = function() {
        function s(t, e, n) {
            var r = this
              , i = 2 < arguments.length && n !== undefined ? n : {};
            ht(this, s),
            this.scheduleUpdate = function() {
                return requestAnimationFrame(r.update)
            }
            ,
            this.update = lt(this.update.bind(this)),
            this.options = mt({}, s.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = t && t.jquery ? t[0] : t,
            this.popper = e && e.jquery ? e[0] : e,
            this.options.modifiers = {},
            Object.keys(mt({}, s.Defaults.modifiers, i.modifiers)).forEach(function(t) {
                r.options.modifiers[t] = mt({}, s.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                return mt({
                    name: t
                }, r.options.modifiers[t])
            }).sort(function(t, e) {
                return t.order - e.order
            }),
            this.modifiers.forEach(function(t) {
                t.enabled && a(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }),
            this.update();
            var o = this.options.eventsEnabled;
            o && this.enableEventListeners(),
            this.state.eventsEnabled = o
        }
        return dt(s, [{
            key: "update",
            value: function() {
                return n.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return P.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return j.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return q.call(this)
            }
        }]),
        s
    }();
    return Et.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
    Et.placements = gt,
    Et.Defaults = bt,
    Et
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, c) {
    "use strict";
    function r(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function s(t, e, n) {
        return e && r(t.prototype, e),
        n && r(t, n),
        t
    }
    function i(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
        t
    }
    function a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
              , r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable
            }))),
            r.forEach(function(t) {
                i(e, t, n[t])
            })
        }
        return e
    }
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    e = e && e.hasOwnProperty("default") ? e["default"] : e,
    c = c && c.hasOwnProperty("default") ? c["default"] : c;
    var o, u, l, f, h, d, p, m, g, y, v, b, E, T, _, w, C, S, A, x, D, k, I, O, L, N, P, R, H, j, M, q, W, F, B, U, V, G, K, $, Q, X, z, Y, J, Z, tt, et, nt, rt, it, ot, st, at, ut, lt, ct, ft, ht, dt, pt, mt, gt, yt, vt, bt, Et, Tt, _t, wt, Ct, St, At, xt, Dt, kt, It, Ot, Lt, Nt, Pt, Rt, Ht, jt, Mt, qt, Wt, Ft, Bt, Ut, Vt, Gt, Kt, $t, Qt, Xt, zt, Yt, Jt, Zt, te, ee, ne, re, ie, oe, se, ae, ue, le, ce, fe, he, de, pe, me, ge, ye, ve, be, Ee, Te, _e, we, Ce, Se, Ae, xe, De, ke, Ie, Oe, Le, Ne, Pe, Re, He, je, Me, qe, We, Fe, Be, Ue, Ve = function(r) {
        function a(t) {
            return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
        }
        function t() {
            return {
                bindType: i,
                delegateType: i,
                handle: function(t) {
                    return r(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : undefined
                }
            }
        }
        function e(t) {
            var e = this
              , n = !1;
            return r(this).one(u.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || u.triggerTransitionEnd(e)
            }, t),
            this
        }
        function n() {
            r.fn.emulateTransitionEnd = e,
            r.event.special[u.TRANSITION_END] = t()
        }
        var i = "transitionend"
          , o = 1e6
          , s = 1e3
          , u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                for (; t += ~~(Math.random() * o),
                document.getElementById(t); )
                    ;
                return t
            },
            getSelectorFromElement: function(t) {
                var e = t.getAttribute("data-target");
                e && "#" !== e || (e = t.getAttribute("href") || "");
                try {
                    return 0 < r(document).find(e).length ? e : null
                } catch (n) {
                    return null
                }
            },
            getTransitionDurationFromElement: function(t) {
                if (!t)
                    return 0;
                var e = r(t).css("transition-duration");
                return parseFloat(e) ? (e = e.split(",")[0],
                parseFloat(e) * s) : 0
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(t) {
                r(t).trigger(i)
            },
            supportsTransitionEnd: function() {
                return Boolean(i)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var r in n)
                    if (Object.prototype.hasOwnProperty.call(n, r)) {
                        var i = n[r]
                          , o = e[r]
                          , s = o && u.isElement(o) ? "element" : a(o);
                        if (!new RegExp(i).test(s))
                            throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + s + '" but expected type "' + i + '".')
                    }
            }
        };
        return n(),
        u
    }(e), Ge = (u = "alert",
    l = "4.1.0",
    h = "." + (f = "bs.alert"),
    d = ".data-api",
    p = (o = e).fn[u],
    m = {
        DISMISS: '[data-dismiss="alert"]'
    },
    g = {
        CLOSE: "close" + h,
        CLOSED: "closed" + h,
        CLICK_DATA_API: "click" + h + d
    },
    y = {
        ALERT: "alert",
        FADE: "fade",
        SHOW: "show"
    },
    v = function() {
        function r(t) {
            this._element = t
        }
        var t = r.prototype;
        return t.close = function(t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        t.dispose = function() {
            o.removeData(this._element, f),
            this._element = null
        }
        ,
        t._getRootElement = function(t) {
            var e = Ve.getSelectorFromElement(t)
              , n = !1;
            return e && (n = o(e)[0]),
            n || (n = o(t).closest("." + y.ALERT)[0]),
            n
        }
        ,
        t._triggerCloseEvent = function(t) {
            var e = o.Event(g.CLOSE);
            return o(t).trigger(e),
            e
        }
        ,
        t._removeElement = function(e) {
            var n = this;
            if (o(e).removeClass(y.SHOW),
            o(e).hasClass(y.FADE)) {
                var t = Ve.getTransitionDurationFromElement(e);
                o(e).one(Ve.TRANSITION_END, function(t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else
                this._destroyElement(e)
        }
        ,
        t._destroyElement = function(t) {
            o(t).detach().trigger(g.CLOSED).remove()
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var t = o(this)
                  , e = t.data(f);
                e || (e = new r(this),
                t.data(f, e)),
                "close" === n && e[n](this)
            })
        }
        ,
        r._handleDismiss = function(e) {
            return function(t) {
                t && t.preventDefault(),
                e.close(this)
            }
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return l
            }
        }]),
        r
    }(),
    o(document).on(g.CLICK_DATA_API, m.DISMISS, v._handleDismiss(new v)),
    o.fn[u] = v._jQueryInterface,
    o.fn[u].Constructor = v,
    o.fn[u].noConflict = function() {
        return o.fn[u] = p,
        v._jQueryInterface
    }
    ,
    v), Ke = (E = "button",
    T = "4.1.0",
    w = "." + (_ = "bs.button"),
    C = ".data-api",
    S = (b = e).fn[E],
    A = {
        ACTIVE: "active",
        BUTTON: "btn",
        FOCUS: "focus"
    },
    x = {
        DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
        DATA_TOGGLE: '[data-toggle="buttons"]',
        INPUT: "input",
        ACTIVE: ".active",
        BUTTON: ".btn"
    },
    D = {
        CLICK_DATA_API: "click" + w + C,
        FOCUS_BLUR_DATA_API: "focus" + w + C + " blur" + w + C
    },
    k = function() {
        function n(t) {
            this._element = t
        }
        var t = n.prototype;
        return t.toggle = function() {
            var t = !0
              , e = !0
              , n = b(this._element).closest(x.DATA_TOGGLE)[0];
            if (n) {
                var r = b(this._element).find(x.INPUT)[0];
                if (r) {
                    if ("radio" === r.type)
                        if (r.checked && b(this._element).hasClass(A.ACTIVE))
                            t = !1;
                        else {
                            var i = b(n).find(x.ACTIVE)[0];
                            i && b(i).removeClass(A.ACTIVE)
                        }
                    if (t) {
                        if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        r.checked = !b(this._element).hasClass(A.ACTIVE),
                        b(r).trigger("change")
                    }
                    r.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !b(this._element).hasClass(A.ACTIVE)),
            t && b(this._element).toggleClass(A.ACTIVE)
        }
        ,
        t.dispose = function() {
            b.removeData(this._element, _),
            this._element = null
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = b(this).data(_);
                t || (t = new n(this),
                b(this).data(_, t)),
                "toggle" === e && t[e]()
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return T
            }
        }]),
        n
    }(),
    b(document).on(D.CLICK_DATA_API, x.DATA_TOGGLE_CARROT, function(t) {
        t.preventDefault();
        var e = t.target;
        b(e).hasClass(A.BUTTON) || (e = b(e).closest(x.BUTTON)),
        k._jQueryInterface.call(b(e), "toggle")
    }).on(D.FOCUS_BLUR_DATA_API, x.DATA_TOGGLE_CARROT, function(t) {
        var e = b(t.target).closest(x.BUTTON)[0];
        b(e).toggleClass(A.FOCUS, /^focus(in)?$/.test(t.type))
    }),
    b.fn[E] = k._jQueryInterface,
    b.fn[E].Constructor = k,
    b.fn[E].noConflict = function() {
        return b.fn[E] = S,
        k._jQueryInterface
    }
    ,
    k), $e = (O = "carousel",
    L = "4.1.0",
    P = "." + (N = "bs.carousel"),
    R = ".data-api",
    H = (I = e).fn[O],
    j = 37,
    M = 39,
    W = {
        interval: 5e3,
        keyboard: !0,
        slide: !(q = 500),
        pause: "hover",
        wrap: !0
    },
    F = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean"
    },
    B = {
        NEXT: "next",
        PREV: "prev",
        LEFT: "left",
        RIGHT: "right"
    },
    U = {
        SLIDE: "slide" + P,
        SLID: "slid" + P,
        KEYDOWN: "keydown" + P,
        MOUSEENTER: "mouseenter" + P,
        MOUSELEAVE: "mouseleave" + P,
        TOUCHEND: "touchend" + P,
        LOAD_DATA_API: "load" + P + R,
        CLICK_DATA_API: "click" + P + R
    },
    V = {
        CAROUSEL: "carousel",
        ACTIVE: "active",
        SLIDE: "slide",
        RIGHT: "carousel-item-right",
        LEFT: "carousel-item-left",
        NEXT: "carousel-item-next",
        PREV: "carousel-item-prev",
        ITEM: "carousel-item"
    },
    G = {
        ACTIVE: ".active",
        ACTIVE_ITEM: ".active.carousel-item",
        ITEM: ".carousel-item",
        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
        INDICATORS: ".carousel-indicators",
        DATA_SLIDE: "[data-slide], [data-slide-to]",
        DATA_RIDE: '[data-ride="carousel"]'
    },
    K = function() {
        function o(t, e) {
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this._config = this._getConfig(e),
            this._element = I(t)[0],
            this._indicatorsElement = I(this._element).find(G.INDICATORS)[0],
            this._addEventListeners()
        }
        var t = o.prototype;
        return t.next = function() {
            this._isSliding || this._slide(B.NEXT)
        }
        ,
        t.nextWhenVisible = function() {
            !document.hidden && I(this._element).is(":visible") && "hidden" !== I(this._element).css("visibility") && this.next()
        }
        ,
        t.prev = function() {
            this._isSliding || this._slide(B.PREV)
        }
        ,
        t.pause = function(t) {
            t || (this._isPaused = !0),
            I(this._element).find(G.NEXT_PREV)[0] && (Ve.triggerTransitionEnd(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        ,
        t.cycle = function(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        ,
        t.to = function(t) {
            var e = this;
            this._activeElement = I(this._element).find(G.ACTIVE_ITEM)[0];
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
                if (this._isSliding)
                    I(this._element).one(U.SLID, function() {
                        return e.to(t)
                    });
                else {
                    if (n === t)
                        return this.pause(),
                        void this.cycle();
                    var r = n < t ? B.NEXT : B.PREV;
                    this._slide(r, this._items[t])
                }
        }
        ,
        t.dispose = function() {
            I(this._element).off(P),
            I.removeData(this._element, N),
            this._items = null,
            this._config = null,
            this._element = null,
            this._interval = null,
            this._isPaused = null,
            this._isSliding = null,
            this._activeElement = null,
            this._indicatorsElement = null
        }
        ,
        t._getConfig = function(t) {
            return t = a({}, W, t),
            Ve.typeCheckConfig(O, t, F),
            t
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            this._config.keyboard && I(this._element).on(U.KEYDOWN, function(t) {
                return e._keydown(t)
            }),
            "hover" === this._config.pause && (I(this._element).on(U.MOUSEENTER, function(t) {
                return e.pause(t)
            }).on(U.MOUSELEAVE, function(t) {
                return e.cycle(t)
            }),
            "ontouchstart"in document.documentElement && I(this._element).on(U.TOUCHEND, function() {
                e.pause(),
                e.touchTimeout && clearTimeout(e.touchTimeout),
                e.touchTimeout = setTimeout(function(t) {
                    return e.cycle(t)
                }, q + e._config.interval)
            }))
        }
        ,
        t._keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName))
                switch (t.which) {
                case j:
                    t.preventDefault(),
                    this.prev();
                    break;
                case M:
                    t.preventDefault(),
                    this.next()
                }
        }
        ,
        t._getItemIndex = function(t) {
            return this._items = I.makeArray(I(t).parent().find(G.ITEM)),
            this._items.indexOf(t)
        }
        ,
        t._getItemByDirection = function(t, e) {
            var n = t === B.NEXT
              , r = t === B.PREV
              , i = this._getItemIndex(e)
              , o = this._items.length - 1;
            if ((r && 0 === i || n && i === o) && !this._config.wrap)
                return e;
            var s = (i + (t === B.PREV ? -1 : 1)) % this._items.length;
            return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }
        ,
        t._triggerSlideEvent = function(t, e) {
            var n = this._getItemIndex(t)
              , r = this._getItemIndex(I(this._element).find(G.ACTIVE_ITEM)[0])
              , i = I.Event(U.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: r,
                to: n
            });
            return I(this._element).trigger(i),
            i
        }
        ,
        t._setActiveIndicatorElement = function(t) {
            if (this._indicatorsElement) {
                I(this._indicatorsElement).find(G.ACTIVE).removeClass(V.ACTIVE);
                var e = this._indicatorsElement.children[this._getItemIndex(t)];
                e && I(e).addClass(V.ACTIVE)
            }
        }
        ,
        t._slide = function(t, e) {
            var n, r, i, o = this, s = I(this._element).find(G.ACTIVE_ITEM)[0], a = this._getItemIndex(s), u = e || s && this._getItemByDirection(t, s), l = this._getItemIndex(u), c = Boolean(this._interval);
            if (t === B.NEXT ? (n = V.LEFT,
            r = V.NEXT,
            i = B.LEFT) : (n = V.RIGHT,
            r = V.PREV,
            i = B.RIGHT),
            u && I(u).hasClass(V.ACTIVE))
                this._isSliding = !1;
            else if (!this._triggerSlideEvent(u, i).isDefaultPrevented() && s && u) {
                this._isSliding = !0,
                c && this.pause(),
                this._setActiveIndicatorElement(u);
                var f = I.Event(U.SLID, {
                    relatedTarget: u,
                    direction: i,
                    from: a,
                    to: l
                });
                if (I(this._element).hasClass(V.SLIDE)) {
                    I(u).addClass(r),
                    Ve.reflow(u),
                    I(s).addClass(n),
                    I(u).addClass(n);
                    var h = Ve.getTransitionDurationFromElement(s);
                    I(s).one(Ve.TRANSITION_END, function() {
                        I(u).removeClass(n + " " + r).addClass(V.ACTIVE),
                        I(s).removeClass(V.ACTIVE + " " + r + " " + n),
                        o._isSliding = !1,
                        setTimeout(function() {
                            return I(o._element).trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(h)
                } else
                    I(s).removeClass(V.ACTIVE),
                    I(u).addClass(V.ACTIVE),
                    this._isSliding = !1,
                    I(this._element).trigger(f);
                c && this.cycle()
            }
        }
        ,
        o._jQueryInterface = function(r) {
            return this.each(function() {
                var t = I(this).data(N)
                  , e = a({}, W, I(this).data());
                "object" == typeof r && (e = a({}, e, r));
                var n = "string" == typeof r ? r : e.slide;
                if (t || (t = new o(this,e),
                I(this).data(N, t)),
                "number" == typeof r)
                    t.to(r);
                else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else
                    e.interval && (t.pause(),
                    t.cycle())
            })
        }
        ,
        o._dataApiClickHandler = function(t) {
            var e = Ve.getSelectorFromElement(this);
            if (e) {
                var n = I(e)[0];
                if (n && I(n).hasClass(V.CAROUSEL)) {
                    var r = a({}, I(n).data(), I(this).data())
                      , i = this.getAttribute("data-slide-to");
                    i && (r.interval = !1),
                    o._jQueryInterface.call(I(n), r),
                    i && I(n).data(N).to(i),
                    t.preventDefault()
                }
            }
        }
        ,
        s(o, null, [{
            key: "VERSION",
            get: function() {
                return L
            }
        }, {
            key: "Default",
            get: function() {
                return W
            }
        }]),
        o
    }(),
    I(document).on(U.CLICK_DATA_API, G.DATA_SLIDE, K._dataApiClickHandler),
    I(window).on(U.LOAD_DATA_API, function() {
        I(G.DATA_RIDE).each(function() {
            var t = I(this);
            K._jQueryInterface.call(t, t.data())
        })
    }),
    I.fn[O] = K._jQueryInterface,
    I.fn[O].Constructor = K,
    I.fn[O].noConflict = function() {
        return I.fn[O] = H,
        K._jQueryInterface
    }
    ,
    K), Qe = (Q = "collapse",
    X = "4.1.0",
    Y = "." + (z = "bs.collapse"),
    J = ".data-api",
    Z = ($ = e).fn[Q],
    tt = {
        toggle: !0,
        parent: ""
    },
    et = {
        toggle: "boolean",
        parent: "(string|element)"
    },
    nt = {
        SHOW: "show" + Y,
        SHOWN: "shown" + Y,
        HIDE: "hide" + Y,
        HIDDEN: "hidden" + Y,
        CLICK_DATA_API: "click" + Y + J
    },
    rt = {
        SHOW: "show",
        COLLAPSE: "collapse",
        COLLAPSING: "collapsing",
        COLLAPSED: "collapsed"
    },
    it = {
        WIDTH: "width",
        HEIGHT: "height"
    },
    ot = {
        ACTIVES: ".show, .collapsing",
        DATA_TOGGLE: '[data-toggle="collapse"]'
    },
    st = function() {
        function u(t, e) {
            this._isTransitioning = !1,
            this._element = t,
            this._config = this._getConfig(e),
            this._triggerArray = $.makeArray($('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
            for (var n = $(ot.DATA_TOGGLE), r = 0; r < n.length; r++) {
                var i = n[r]
                  , o = Ve.getSelectorFromElement(i);
                null !== o && 0 < $(o).filter(t).length && (this._selector = o,
                this._triggerArray.push(i))
            }
            this._parent = this._config.parent ? this._getParent() : null,
            this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = u.prototype;
        return t.toggle = function() {
            $(this._element).hasClass(rt.SHOW) ? this.hide() : this.show()
        }
        ,
        t.show = function() {
            var t, e, n = this;
            if (!this._isTransitioning && !$(this._element).hasClass(rt.SHOW) && (this._parent && 0 === (t = $.makeArray($(this._parent).find(ot.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null),
            !(t && (e = $(t).not(this._selector).data(z)) && e._isTransitioning))) {
                var r = $.Event(nt.SHOW);
                if ($(this._element).trigger(r),
                !r.isDefaultPrevented()) {
                    t && (u._jQueryInterface.call($(t).not(this._selector), "hide"),
                    e || $(t).data(z, null));
                    var i = this._getDimension();
                    $(this._element).removeClass(rt.COLLAPSE).addClass(rt.COLLAPSING),
                    (this._element.style[i] = 0) < this._triggerArray.length && $(this._triggerArray).removeClass(rt.COLLAPSED).attr("aria-expanded", !0),
                    this.setTransitioning(!0);
                    var o = function() {
                        $(n._element).removeClass(rt.COLLAPSING).addClass(rt.COLLAPSE).addClass(rt.SHOW),
                        n._element.style[i] = "",
                        n.setTransitioning(!1),
                        $(n._element).trigger(nt.SHOWN)
                    }
                      , s = "scroll" + (i[0].toUpperCase() + i.slice(1))
                      , a = Ve.getTransitionDurationFromElement(this._element);
                    $(this._element).one(Ve.TRANSITION_END, o).emulateTransitionEnd(a),
                    this._element.style[i] = this._element[s] + "px"
                }
            }
        }
        ,
        t.hide = function() {
            var t = this;
            if (!this._isTransitioning && $(this._element).hasClass(rt.SHOW)) {
                var e = $.Event(nt.HIDE);
                if ($(this._element).trigger(e),
                !e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px",
                    Ve.reflow(this._element),
                    $(this._element).addClass(rt.COLLAPSING).removeClass(rt.COLLAPSE).removeClass(rt.SHOW),
                    0 < this._triggerArray.length)
                        for (var r = 0; r < this._triggerArray.length; r++) {
                            var i = this._triggerArray[r]
                              , o = Ve.getSelectorFromElement(i);
                            if (null !== o)
                                $(o).hasClass(rt.SHOW) || $(i).addClass(rt.COLLAPSED).attr("aria-expanded", !1)
                        }
                    this.setTransitioning(!0);
                    var s = function() {
                        t.setTransitioning(!1),
                        $(t._element).removeClass(rt.COLLAPSING).addClass(rt.COLLAPSE).trigger(nt.HIDDEN)
                    };
                    this._element.style[n] = "";
                    var a = Ve.getTransitionDurationFromElement(this._element);
                    $(this._element).one(Ve.TRANSITION_END, s).emulateTransitionEnd(a)
                }
            }
        }
        ,
        t.setTransitioning = function(t) {
            this._isTransitioning = t
        }
        ,
        t.dispose = function() {
            $.removeData(this._element, z),
            this._config = null,
            this._parent = null,
            this._element = null,
            this._triggerArray = null,
            this._isTransitioning = null
        }
        ,
        t._getConfig = function(t) {
            return (t = a({}, tt, t)).toggle = Boolean(t.toggle),
            Ve.typeCheckConfig(Q, t, et),
            t
        }
        ,
        t._getDimension = function() {
            return $(this._element).hasClass(it.WIDTH) ? it.WIDTH : it.HEIGHT
        }
        ,
        t._getParent = function() {
            var n = this
              , t = null;
            Ve.isElement(this._config.parent) ? (t = this._config.parent,
            "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = $(this._config.parent)[0];
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
            return $(t).find(e).each(function(t, e) {
                n._addAriaAndCollapsedClass(u._getTargetFromElement(e), [e])
            }),
            t
        }
        ,
        t._addAriaAndCollapsedClass = function(t, e) {
            if (t) {
                var n = $(t).hasClass(rt.SHOW);
                0 < e.length && $(e).toggleClass(rt.COLLAPSED, !n).attr("aria-expanded", n)
            }
        }
        ,
        u._getTargetFromElement = function(t) {
            var e = Ve.getSelectorFromElement(t);
            return e ? $(e)[0] : null
        }
        ,
        u._jQueryInterface = function(r) {
            return this.each(function() {
                var t = $(this)
                  , e = t.data(z)
                  , n = a({}, tt, t.data(), "object" == typeof r && r);
                if (!e && n.toggle && /show|hide/.test(r) && (n.toggle = !1),
                e || (e = new u(this,n),
                t.data(z, e)),
                "string" == typeof r) {
                    if ("undefined" == typeof e[r])
                        throw new TypeError('No method named "' + r + '"');
                    e[r]()
                }
            })
        }
        ,
        s(u, null, [{
            key: "VERSION",
            get: function() {
                return X
            }
        }, {
            key: "Default",
            get: function() {
                return tt
            }
        }]),
        u
    }(),
    $(document).on(nt.CLICK_DATA_API, ot.DATA_TOGGLE, function(t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = $(this)
          , e = Ve.getSelectorFromElement(this);
        $(e).each(function() {
            var t = $(this)
              , e = t.data(z) ? "toggle" : n.data();
            st._jQueryInterface.call(t, e)
        })
    }),
    $.fn[Q] = st._jQueryInterface,
    $.fn[Q].Constructor = st,
    $.fn[Q].noConflict = function() {
        return $.fn[Q] = Z,
        st._jQueryInterface
    }
    ,
    st), Xe = (ut = "dropdown",
    lt = "4.1.0",
    ft = "." + (ct = "bs.dropdown"),
    ht = ".data-api",
    dt = (at = e).fn[ut],
    pt = 27,
    mt = 32,
    gt = 9,
    yt = 38,
    vt = 40,
    bt = 3,
    Et = new RegExp(yt + "|" + vt + "|" + pt),
    Tt = {
        HIDE: "hide" + ft,
        HIDDEN: "hidden" + ft,
        SHOW: "show" + ft,
        SHOWN: "shown" + ft,
        CLICK: "click" + ft,
        CLICK_DATA_API: "click" + ft + ht,
        KEYDOWN_DATA_API: "keydown" + ft + ht,
        KEYUP_DATA_API: "keyup" + ft + ht
    },
    _t = {
        DISABLED: "disabled",
        SHOW: "show",
        DROPUP: "dropup",
        DROPRIGHT: "dropright",
        DROPLEFT: "dropleft",
        MENURIGHT: "dropdown-menu-right",
        MENULEFT: "dropdown-menu-left",
        POSITION_STATIC: "position-static"
    },
    wt = {
        DATA_TOGGLE: '[data-toggle="dropdown"]',
        FORM_CHILD: ".dropdown form",
        MENU: ".dropdown-menu",
        NAVBAR_NAV: ".navbar-nav",
        VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
    },
    Ct = {
        TOP: "top-start",
        TOPEND: "top-end",
        BOTTOM: "bottom-start",
        BOTTOMEND: "bottom-end",
        RIGHT: "right-start",
        RIGHTEND: "right-end",
        LEFT: "left-start",
        LEFTEND: "left-end"
    },
    St = {
        offset: 0,
        flip: !0,
        boundary: "scrollParent",
        reference: "toggle",
        display: "dynamic"
    },
    At = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string"
    },
    xt = function() {
        function u(t, e) {
            this._element = t,
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar(),
            this._addEventListeners()
        }
        var t = u.prototype;
        return t.toggle = function() {
            if (!this._element.disabled && !at(this._element).hasClass(_t.DISABLED)) {
                var t = u._getParentFromElement(this._element)
                  , e = at(this._menu).hasClass(_t.SHOW);
                if (u._clearMenus(),
                !e) {
                    var n = {
                        relatedTarget: this._element
                    }
                      , r = at.Event(Tt.SHOW, n);
                    if (at(t).trigger(r),
                    !r.isDefaultPrevented()) {
                        if (!this._inNavbar) {
                            if (void 0 === c)
                                throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var i = this._element;
                            "parent" === this._config.reference ? i = t : Ve.isElement(this._config.reference) && (i = this._config.reference,
                            "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])),
                            "scrollParent" !== this._config.boundary && at(t).addClass(_t.POSITION_STATIC),
                            this._popper = new c(i,this._menu,this._getPopperConfig())
                        }
                        "ontouchstart"in document.documentElement && 0 === at(t).closest(wt.NAVBAR_NAV).length && at(document.body).children().on("mouseover", null, at.noop),
                        this._element.focus(),
                        this._element.setAttribute("aria-expanded", !0),
                        at(this._menu).toggleClass(_t.SHOW),
                        at(t).toggleClass(_t.SHOW).trigger(at.Event(Tt.SHOWN, n))
                    }
                }
            }
        }
        ,
        t.dispose = function() {
            at.removeData(this._element, ct),
            at(this._element).off(ft),
            this._element = null,
            (this._menu = null) !== this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        ,
        t.update = function() {
            this._inNavbar = this._detectNavbar(),
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t._addEventListeners = function() {
            var e = this;
            at(this._element).on(Tt.CLICK, function(t) {
                t.preventDefault(),
                t.stopPropagation(),
                e.toggle()
            })
        }
        ,
        t._getConfig = function(t) {
            return t = a({}, this.constructor.Default, at(this._element).data(), t),
            Ve.typeCheckConfig(ut, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getMenuElement = function() {
            if (!this._menu) {
                var t = u._getParentFromElement(this._element);
                this._menu = at(t).find(wt.MENU)[0]
            }
            return this._menu
        }
        ,
        t._getPlacement = function() {
            var t = at(this._element).parent()
              , e = Ct.BOTTOM;
            return t.hasClass(_t.DROPUP) ? (e = Ct.TOP,
            at(this._menu).hasClass(_t.MENURIGHT) && (e = Ct.TOPEND)) : t.hasClass(_t.DROPRIGHT) ? e = Ct.RIGHT : t.hasClass(_t.DROPLEFT) ? e = Ct.LEFT : at(this._menu).hasClass(_t.MENURIGHT) && (e = Ct.BOTTOMEND),
            e
        }
        ,
        t._detectNavbar = function() {
            return 0 < at(this._element).closest(".navbar").length
        }
        ,
        t._getPopperConfig = function() {
            var e = this
              , t = {};
            "function" == typeof this._config.offset ? t.fn = function(t) {
                return t.offsets = a({}, t.offsets, e._config.offset(t.offsets) || {}),
                t
            }
            : t.offset = this._config.offset;
            var n = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: t,
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (n.modifiers.applyStyle = {
                enabled: !1
            }),
            n
        }
        ,
        u._jQueryInterface = function(e) {
            return this.each(function() {
                var t = at(this).data(ct);
                if (t || (t = new u(this,"object" == typeof e ? e : null),
                at(this).data(ct, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        u._clearMenus = function(t) {
            if (!t || t.which !== bt && ("keyup" !== t.type || t.which === gt))
                for (var e = at.makeArray(at(wt.DATA_TOGGLE)), n = 0; n < e.length; n++) {
                    var r = u._getParentFromElement(e[n])
                      , i = at(e[n]).data(ct)
                      , o = {
                        relatedTarget: e[n]
                    };
                    if (i) {
                        var s = i._menu;
                        if (at(r).hasClass(_t.SHOW) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === gt) && at.contains(r, t.target))) {
                            var a = at.Event(Tt.HIDE, o);
                            at(r).trigger(a),
                            a.isDefaultPrevented() || ("ontouchstart"in document.documentElement && at(document.body).children().off("mouseover", null, at.noop),
                            e[n].setAttribute("aria-expanded", "false"),
                            at(s).removeClass(_t.SHOW),
                            at(r).removeClass(_t.SHOW).trigger(at.Event(Tt.HIDDEN, o)))
                        }
                    }
                }
        }
        ,
        u._getParentFromElement = function(t) {
            var e, n = Ve.getSelectorFromElement(t);
            return n && (e = at(n)[0]),
            e || t.parentNode
        }
        ,
        u._dataApiKeydownHandler = function(t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(t.which === mt || t.which !== pt && (t.which !== vt && t.which !== yt || at(t.target).closest(wt.MENU).length)) : Et.test(t.which)) && (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !at(this).hasClass(_t.DISABLED))) {
                var e = u._getParentFromElement(this)
                  , n = at(e).hasClass(_t.SHOW);
                if ((n || t.which === pt && t.which === mt) && (!n || t.which !== pt && t.which !== mt)) {
                    var r = at(e).find(wt.VISIBLE_ITEMS).get();
                    if (0 !== r.length) {
                        var i = r.indexOf(t.target);
                        t.which === yt && 0 < i && i--,
                        t.which === vt && i < r.length - 1 && i++,
                        i < 0 && (i = 0),
                        r[i].focus()
                    }
                } else {
                    if (t.which === pt) {
                        var o = at(e).find(wt.DATA_TOGGLE)[0];
                        at(o).trigger("focus")
                    }
                    at(this).trigger("click")
                }
            }
        }
        ,
        s(u, null, [{
            key: "VERSION",
            get: function() {
                return lt
            }
        }, {
            key: "Default",
            get: function() {
                return St
            }
        }, {
            key: "DefaultType",
            get: function() {
                return At
            }
        }]),
        u
    }(),
    at(document).on(Tt.KEYDOWN_DATA_API, wt.DATA_TOGGLE, xt._dataApiKeydownHandler).on(Tt.KEYDOWN_DATA_API, wt.MENU, xt._dataApiKeydownHandler).on(Tt.CLICK_DATA_API + " " + Tt.KEYUP_DATA_API, xt._clearMenus).on(Tt.CLICK_DATA_API, wt.DATA_TOGGLE, function(t) {
        t.preventDefault(),
        t.stopPropagation(),
        xt._jQueryInterface.call(at(this), "toggle")
    }).on(Tt.CLICK_DATA_API, wt.FORM_CHILD, function(t) {
        t.stopPropagation()
    }),
    at.fn[ut] = xt._jQueryInterface,
    at.fn[ut].Constructor = xt,
    at.fn[ut].noConflict = function() {
        return at.fn[ut] = dt,
        xt._jQueryInterface
    }
    ,
    xt), ze = (kt = "modal",
    It = "4.1.0",
    Lt = "." + (Ot = "bs.modal"),
    Nt = ".data-api",
    Pt = (Dt = e).fn[kt],
    Rt = 27,
    Ht = {
        backdrop: !0,
        keyboard: !0,
        focus: !0,
        show: !0
    },
    jt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean",
        show: "boolean"
    },
    Mt = {
        HIDE: "hide" + Lt,
        HIDDEN: "hidden" + Lt,
        SHOW: "show" + Lt,
        SHOWN: "shown" + Lt,
        FOCUSIN: "focusin" + Lt,
        RESIZE: "resize" + Lt,
        CLICK_DISMISS: "click.dismiss" + Lt,
        KEYDOWN_DISMISS: "keydown.dismiss" + Lt,
        MOUSEUP_DISMISS: "mouseup.dismiss" + Lt,
        MOUSEDOWN_DISMISS: "mousedown.dismiss" + Lt,
        CLICK_DATA_API: "click" + Lt + Nt
    },
    qt = {
        SCROLLBAR_MEASURER: "modal-scrollbar-measure",
        BACKDROP: "modal-backdrop",
        OPEN: "modal-open",
        FADE: "fade",
        SHOW: "show"
    },
    Wt = {
        DIALOG: ".modal-dialog",
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        STICKY_CONTENT: ".sticky-top",
        NAVBAR_TOGGLER: ".navbar-toggler"
    },
    Ft = function() {
        function i(t, e) {
            this._config = this._getConfig(e),
            this._element = t,
            this._dialog = Dt(t).find(Wt.DIALOG)[0],
            this._backdrop = null,
            this._isShown = !1,
            this._isBodyOverflowing = !1,
            this._ignoreBackdropClick = !1,
            this._scrollbarWidth = 0
        }
        var t = i.prototype;
        return t.toggle = function(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        ,
        t.show = function(t) {
            var e = this;
            if (!this._isTransitioning && !this._isShown) {
                Dt(this._element).hasClass(qt.FADE) && (this._isTransitioning = !0);
                var n = Dt.Event(Mt.SHOW, {
                    relatedTarget: t
                });
                Dt(this._element).trigger(n),
                this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                Dt(document.body).addClass(qt.OPEN),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                Dt(this._element).on(Mt.CLICK_DISMISS, Wt.DATA_DISMISS, function(t) {
                    return e.hide(t)
                }),
                Dt(this._dialog).on(Mt.MOUSEDOWN_DISMISS, function() {
                    Dt(e._element).one(Mt.MOUSEUP_DISMISS, function(t) {
                        Dt(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                    })
                }),
                this._showBackdrop(function() {
                    return e._showElement(t)
                }))
            }
        }
        ,
        t.hide = function(t) {
            var e = this;
            if (t && t.preventDefault(),
            !this._isTransitioning && this._isShown) {
                var n = Dt.Event(Mt.HIDE);
                if (Dt(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented()) {
                    this._isShown = !1;
                    var r = Dt(this._element).hasClass(qt.FADE);
                    if (r && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    Dt(document).off(Mt.FOCUSIN),
                    Dt(this._element).removeClass(qt.SHOW),
                    Dt(this._element).off(Mt.CLICK_DISMISS),
                    Dt(this._dialog).off(Mt.MOUSEDOWN_DISMISS),
                    r) {
                        var i = Ve.getTransitionDurationFromElement(this._element);
                        Dt(this._element).one(Ve.TRANSITION_END, function(t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(i)
                    } else
                        this._hideModal()
                }
            }
        }
        ,
        t.dispose = function() {
            Dt.removeData(this._element, Ot),
            Dt(window, document, this._element, this._backdrop).off(Lt),
            this._config = null,
            this._element = null,
            this._dialog = null,
            this._backdrop = null,
            this._isShown = null,
            this._isBodyOverflowing = null,
            this._ignoreBackdropClick = null,
            this._scrollbarWidth = null
        }
        ,
        t.handleUpdate = function() {
            this._adjustDialog()
        }
        ,
        t._getConfig = function(t) {
            return t = a({}, Ht, t),
            Ve.typeCheckConfig(kt, t, jt),
            t
        }
        ,
        t._showElement = function(t) {
            var e = this
              , n = Dt(this._element).hasClass(qt.FADE);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.scrollTop = 0,
            n && Ve.reflow(this._element),
            Dt(this._element).addClass(qt.SHOW),
            this._config.focus && this._enforceFocus();
            var r = Dt.Event(Mt.SHOWN, {
                relatedTarget: t
            })
              , i = function() {
                e._config.focus && e._element.focus(),
                e._isTransitioning = !1,
                Dt(e._element).trigger(r)
            };
            if (n) {
                var o = Ve.getTransitionDurationFromElement(this._element);
                Dt(this._dialog).one(Ve.TRANSITION_END, i).emulateTransitionEnd(o)
            } else
                i()
        }
        ,
        t._enforceFocus = function() {
            var e = this;
            Dt(document).off(Mt.FOCUSIN).on(Mt.FOCUSIN, function(t) {
                document !== t.target && e._element !== t.target && 0 === Dt(e._element).has(t.target).length && e._element.focus()
            })
        }
        ,
        t._setEscapeEvent = function() {
            var e = this;
            this._isShown && this._config.keyboard ? Dt(this._element).on(Mt.KEYDOWN_DISMISS, function(t) {
                t.which === Rt && (t.preventDefault(),
                e.hide())
            }) : this._isShown || Dt(this._element).off(Mt.KEYDOWN_DISMISS)
        }
        ,
        t._setResizeEvent = function() {
            var e = this;
            this._isShown ? Dt(window).on(Mt.RESIZE, function(t) {
                return e.handleUpdate(t)
            }) : Dt(window).off(Mt.RESIZE)
        }
        ,
        t._hideModal = function() {
            var t = this;
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._isTransitioning = !1,
            this._showBackdrop(function() {
                Dt(document.body).removeClass(qt.OPEN),
                t._resetAdjustments(),
                t._resetScrollbar(),
                Dt(t._element).trigger(Mt.HIDDEN)
            })
        }
        ,
        t._removeBackdrop = function() {
            this._backdrop && (Dt(this._backdrop).remove(),
            this._backdrop = null)
        }
        ,
        t._showBackdrop = function(t) {
            var e = this
              , n = Dt(this._element).hasClass(qt.FADE) ? qt.FADE : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"),
                this._backdrop.className = qt.BACKDROP,
                n && Dt(this._backdrop).addClass(n),
                Dt(this._backdrop).appendTo(document.body),
                Dt(this._element).on(Mt.CLICK_DISMISS, function(t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                }),
                n && Ve.reflow(this._backdrop),
                Dt(this._backdrop).addClass(qt.SHOW),
                !t)
                    return;
                if (!n)
                    return void t();
                var r = Ve.getTransitionDurationFromElement(this._backdrop);
                Dt(this._backdrop).one(Ve.TRANSITION_END, t).emulateTransitionEnd(r)
            } else if (!this._isShown && this._backdrop) {
                Dt(this._backdrop).removeClass(qt.SHOW);
                var i = function() {
                    e._removeBackdrop(),
                    t && t()
                };
                if (Dt(this._element).hasClass(qt.FADE)) {
                    var o = Ve.getTransitionDurationFromElement(this._backdrop);
                    Dt(this._backdrop).one(Ve.TRANSITION_END, i).emulateTransitionEnd(o)
                } else
                    i()
            } else
                t && t()
        }
        ,
        t._adjustDialog = function() {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
            this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }
        ,
        t._resetAdjustments = function() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        ,
        t._checkScrollbar = function() {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth,
            this._scrollbarWidth = this._getScrollbarWidth()
        }
        ,
        t._setScrollbar = function() {
            var i = this;
            if (this._isBodyOverflowing) {
                Dt(Wt.FIXED_CONTENT).each(function(t, e) {
                    var n = Dt(e)[0].style.paddingRight
                      , r = Dt(e).css("padding-right");
                    Dt(e).data("padding-right", n).css("padding-right", parseFloat(r) + i._scrollbarWidth + "px")
                }),
                Dt(Wt.STICKY_CONTENT).each(function(t, e) {
                    var n = Dt(e)[0].style.marginRight
                      , r = Dt(e).css("margin-right");
                    Dt(e).data("margin-right", n).css("margin-right", parseFloat(r) - i._scrollbarWidth + "px")
                }),
                Dt(Wt.NAVBAR_TOGGLER).each(function(t, e) {
                    var n = Dt(e)[0].style.marginRight
                      , r = Dt(e).css("margin-right");
                    Dt(e).data("margin-right", n).css("margin-right", parseFloat(r) + i._scrollbarWidth + "px")
                });
                var t = document.body.style.paddingRight
                  , e = Dt(document.body).css("padding-right");
                Dt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")
            }
        }
        ,
        t._resetScrollbar = function() {
            Dt(Wt.FIXED_CONTENT).each(function(t, e) {
                var n = Dt(e).data("padding-right");
                void 0 !== n && Dt(e).css("padding-right", n).removeData("padding-right")
            }),
            Dt(Wt.STICKY_CONTENT + ", " + Wt.NAVBAR_TOGGLER).each(function(t, e) {
                var n = Dt(e).data("margin-right");
                void 0 !== n && Dt(e).css("margin-right", n).removeData("margin-right")
            });
            var t = Dt(document.body).data("padding-right");
            void 0 !== t && Dt(document.body).css("padding-right", t).removeData("padding-right")
        }
        ,
        t._getScrollbarWidth = function() {
            var t = document.createElement("div");
            t.className = qt.SCROLLBAR_MEASURER,
            document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t),
            e
        }
        ,
        i._jQueryInterface = function(n, r) {
            return this.each(function() {
                var t = Dt(this).data(Ot)
                  , e = a({}, i.Default, Dt(this).data(), "object" == typeof n && n);
                if (t || (t = new i(this,e),
                Dt(this).data(Ot, t)),
                "string" == typeof n) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n](r)
                } else
                    e.show && t.show(r)
            })
        }
        ,
        s(i, null, [{
            key: "VERSION",
            get: function() {
                return It
            }
        }, {
            key: "Default",
            get: function() {
                return Ht
            }
        }]),
        i
    }(),
    Dt(document).on(Mt.CLICK_DATA_API, Wt.DATA_TOGGLE, function(t) {
        var e, n = this, r = Ve.getSelectorFromElement(this);
        r && (e = Dt(r)[0]);
        var i = Dt(e).data(Ot) ? "toggle" : a({}, Dt(e).data(), Dt(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var o = Dt(e).one(Mt.SHOW, function(t) {
            t.isDefaultPrevented() || o.one(Mt.HIDDEN, function() {
                Dt(n).is(":visible") && n.focus()
            })
        });
        Ft._jQueryInterface.call(Dt(e), i, this)
    }),
    Dt.fn[kt] = Ft._jQueryInterface,
    Dt.fn[kt].Constructor = Ft,
    Dt.fn[kt].noConflict = function() {
        return Dt.fn[kt] = Pt,
        Ft._jQueryInterface
    }
    ,
    Ft), Ye = (Ut = "tooltip",
    Vt = "4.1.0",
    Kt = "." + (Gt = "bs.tooltip"),
    $t = (Bt = e).fn[Ut],
    Qt = "bs-tooltip",
    Xt = new RegExp("(^|\\s)" + Qt + "\\S+","g"),
    Jt = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !(Yt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }),
        selector: !(zt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }),
        placement: "top",
        offset: 0,
        container: !1,
        fallbackPlacement: "flip",
        boundary: "scrollParent"
    },
    Zt = {
        SHOW: "show",
        OUT: "out"
    },
    te = {
        HIDE: "hide" + Kt,
        HIDDEN: "hidden" + Kt,
        SHOW: "show" + Kt,
        SHOWN: "shown" + Kt,
        INSERTED: "inserted" + Kt,
        CLICK: "click" + Kt,
        FOCUSIN: "focusin" + Kt,
        FOCUSOUT: "focusout" + Kt,
        MOUSEENTER: "mouseenter" + Kt,
        MOUSELEAVE: "mouseleave" + Kt
    },
    ee = {
        FADE: "fade",
        SHOW: "show"
    },
    ne = {
        TOOLTIP: ".tooltip",
        TOOLTIP_INNER: ".tooltip-inner",
        ARROW: ".arrow"
    },
    re = {
        HOVER: "hover",
        FOCUS: "focus",
        CLICK: "click",
        MANUAL: "manual"
    },
    ie = function() {
        function r(t, e) {
            if (void 0 === c)
                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this.element = t,
            this.config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        var t = r.prototype;
        return t.enable = function() {
            this._isEnabled = !0
        }
        ,
        t.disable = function() {
            this._isEnabled = !1
        }
        ,
        t.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }
        ,
        t.toggle = function(t) {
            if (this._isEnabled)
                if (t) {
                    var e = this.constructor.DATA_KEY
                      , n = Bt(t.currentTarget).data(e);
                    n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    Bt(t.currentTarget).data(e, n)),
                    n._activeTrigger.click = !n._activeTrigger.click,
                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (Bt(this.getTipElement()).hasClass(ee.SHOW))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        ,
        t.dispose = function() {
            clearTimeout(this._timeout),
            Bt.removeData(this.element, this.constructor.DATA_KEY),
            Bt(this.element).off(this.constructor.EVENT_KEY),
            Bt(this.element).closest(".modal").off("hide.bs.modal"),
            this.tip && Bt(this.tip).remove(),
            this._isEnabled = null,
            this._timeout = null,
            this._hoverState = null,
            (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
            this._popper = null,
            this.element = null,
            this.config = null,
            this.tip = null
        }
        ,
        t.show = function() {
            var e = this;
            if ("none" === Bt(this.element).css("display"))
                throw new Error("Please use show on visible elements");
            var t = Bt.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                Bt(this.element).trigger(t);
                var n = Bt.contains(this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || !n)
                    return;
                var r = this.getTipElement()
                  , i = Ve.getUID(this.constructor.NAME);
                r.setAttribute("id", i),
                this.element.setAttribute("aria-describedby", i),
                this.setContent(),
                this.config.animation && Bt(r).addClass(ee.FADE);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                  , s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = !1 === this.config.container ? document.body : Bt(this.config.container);
                Bt(r).data(this.constructor.DATA_KEY, this),
                Bt.contains(this.element.ownerDocument.documentElement, this.tip) || Bt(r).appendTo(a),
                Bt(this.element).trigger(this.constructor.Event.INSERTED),
                this._popper = new c(this.element,r,{
                    placement: s,
                    modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ne.ARROW
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function(t) {
                        e._handlePopperPlacementChange(t)
                    }
                }),
                Bt(r).addClass(ee.SHOW),
                "ontouchstart"in document.documentElement && Bt(document.body).children().on("mouseover", null, Bt.noop);
                var u = function() {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState;
                    e._hoverState = null,
                    Bt(e.element).trigger(e.constructor.Event.SHOWN),
                    t === Zt.OUT && e._leave(null, e)
                };
                if (Bt(this.tip).hasClass(ee.FADE)) {
                    var l = Ve.getTransitionDurationFromElement(this.tip);
                    Bt(this.tip).one(Ve.TRANSITION_END, u).emulateTransitionEnd(l)
                } else
                    u()
            }
        }
        ,
        t.hide = function(t) {
            var e = this
              , n = this.getTipElement()
              , r = Bt.Event(this.constructor.Event.HIDE)
              , i = function() {
                e._hoverState !== Zt.SHOW && n.parentNode && n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute("aria-describedby"),
                Bt(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            };
            if (Bt(this.element).trigger(r),
            !r.isDefaultPrevented()) {
                if (Bt(n).removeClass(ee.SHOW),
                "ontouchstart"in document.documentElement && Bt(document.body).children().off("mouseover", null, Bt.noop),
                this._activeTrigger[re.CLICK] = !1,
                this._activeTrigger[re.FOCUS] = !1,
                this._activeTrigger[re.HOVER] = !1,
                Bt(this.tip).hasClass(ee.FADE)) {
                    var o = Ve.getTransitionDurationFromElement(n);
                    Bt(n).one(Ve.TRANSITION_END, i).emulateTransitionEnd(o)
                } else
                    i();
                this._hoverState = ""
            }
        }
        ,
        t.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }
        ,
        t.isWithContent = function() {
            return Boolean(this.getTitle())
        }
        ,
        t.addAttachmentClass = function(t) {
            Bt(this.getTipElement()).addClass(Qt + "-" + t)
        }
        ,
        t.getTipElement = function() {
            return this.tip = this.tip || Bt(this.config.template)[0],
            this.tip
        }
        ,
        t.setContent = function() {
            var t = Bt(this.getTipElement());
            this.setElementContent(t.find(ne.TOOLTIP_INNER), this.getTitle()),
            t.removeClass(ee.FADE + " " + ee.SHOW)
        }
        ,
        t.setElementContent = function(t, e) {
            var n = this.config.html;
            "object" == typeof e && (e.nodeType || e.jquery) ? n ? Bt(e).parent().is(t) || t.empty().append(e) : t.text(Bt(e).text()) : t[n ? "html" : "text"](e)
        }
        ,
        t.getTitle = function() {
            var t = this.element.getAttribute("data-original-title");
            return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
            t
        }
        ,
        t._getAttachment = function(t) {
            return Yt[t.toUpperCase()]
        }
        ,
        t._setListeners = function() {
            var r = this;
            this.config.trigger.split(" ").forEach(function(t) {
                if ("click" === t)
                    Bt(r.element).on(r.constructor.Event.CLICK, r.config.selector, function(t) {
                        return r.toggle(t)
                    });
                else if (t !== re.MANUAL) {
                    var e = t === re.HOVER ? r.constructor.Event.MOUSEENTER : r.constructor.Event.FOCUSIN
                      , n = t === re.HOVER ? r.constructor.Event.MOUSELEAVE : r.constructor.Event.FOCUSOUT;
                    Bt(r.element).on(e, r.config.selector, function(t) {
                        return r._enter(t)
                    }).on(n, r.config.selector, function(t) {
                        return r._leave(t)
                    })
                }
                Bt(r.element).closest(".modal").on("hide.bs.modal", function() {
                    return r.hide()
                })
            }),
            this.config.selector ? this.config = a({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }
        ,
        t._fixTitle = function() {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
            this.element.setAttribute("title", ""))
        }
        ,
        t._enter = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Bt(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            Bt(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusin" === t.type ? re.FOCUS : re.HOVER] = !0),
            Bt(e.getTipElement()).hasClass(ee.SHOW) || e._hoverState === Zt.SHOW ? e._hoverState = Zt.SHOW : (clearTimeout(e._timeout),
            e._hoverState = Zt.SHOW,
            e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                e._hoverState === Zt.SHOW && e.show()
            }, e.config.delay.show) : e.show())
        }
        ,
        t._leave = function(t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || Bt(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget,this._getDelegateConfig()),
            Bt(t.currentTarget).data(n, e)),
            t && (e._activeTrigger["focusout" === t.type ? re.FOCUS : re.HOVER] = !1),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Zt.OUT,
            e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                e._hoverState === Zt.OUT && e.hide()
            }, e.config.delay.hide) : e.hide())
        }
        ,
        t._isWithActiveTrigger = function() {
            for (var t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        ,
        t._getConfig = function(t) {
            return "number" == typeof (t = a({}, this.constructor.Default, Bt(this.element).data(), t)).delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            Ve.typeCheckConfig(Ut, t, this.constructor.DefaultType),
            t
        }
        ,
        t._getDelegateConfig = function() {
            var t = {};
            if (this.config)
                for (var e in this.config)
                    this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
            return t
        }
        ,
        t._cleanTipClass = function() {
            var t = Bt(this.getTipElement())
              , e = t.attr("class").match(Xt);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        t._handlePopperPlacementChange = function(t) {
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }
        ,
        t._fixTransition = function() {
            var t = this.getTipElement()
              , e = this.config.animation;
            null === t.getAttribute("x-placement") && (Bt(t).removeClass(ee.FADE),
            this.config.animation = !1,
            this.hide(),
            this.show(),
            this.config.animation = e)
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var t = Bt(this).data(Gt)
                  , e = "object" == typeof n && n;
                if ((t || !/dispose|hide/.test(n)) && (t || (t = new r(this,e),
                Bt(this).data(Gt, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return Vt
            }
        }, {
            key: "Default",
            get: function() {
                return Jt
            }
        }, {
            key: "NAME",
            get: function() {
                return Ut
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Gt
            }
        }, {
            key: "Event",
            get: function() {
                return te
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return Kt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return zt
            }
        }]),
        r
    }(),
    Bt.fn[Ut] = ie._jQueryInterface,
    Bt.fn[Ut].Constructor = ie,
    Bt.fn[Ut].noConflict = function() {
        return Bt.fn[Ut] = $t,
        ie._jQueryInterface
    }
    ,
    ie), Je = (se = "popover",
    ae = "4.1.0",
    le = "." + (ue = "bs.popover"),
    ce = (oe = e).fn[se],
    fe = "bs-popover",
    he = new RegExp("(^|\\s)" + fe + "\\S+","g"),
    de = a({}, Ye.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    pe = a({}, Ye.DefaultType, {
        content: "(string|element|function)"
    }),
    me = {
        FADE: "fade",
        SHOW: "show"
    },
    ge = {
        TITLE: ".popover-header",
        CONTENT: ".popover-body"
    },
    ye = {
        HIDE: "hide" + le,
        HIDDEN: "hidden" + le,
        SHOW: "show" + le,
        SHOWN: "shown" + le,
        INSERTED: "inserted" + le,
        CLICK: "click" + le,
        FOCUSIN: "focusin" + le,
        FOCUSOUT: "focusout" + le,
        MOUSEENTER: "mouseenter" + le,
        MOUSELEAVE: "mouseleave" + le
    },
    ve = function(t) {
        function r() {
            return t.apply(this, arguments) || this
        }
        n(r, t);
        var e = r.prototype;
        return e.isWithContent = function() {
            return this.getTitle() || this._getContent()
        }
        ,
        e.addAttachmentClass = function(t) {
            oe(this.getTipElement()).addClass(fe + "-" + t)
        }
        ,
        e.getTipElement = function() {
            return this.tip = this.tip || oe(this.config.template)[0],
            this.tip
        }
        ,
        e.setContent = function() {
            var t = oe(this.getTipElement());
            this.setElementContent(t.find(ge.TITLE), this.getTitle());
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(ge.CONTENT), e),
            t.removeClass(me.FADE + " " + me.SHOW)
        }
        ,
        e._getContent = function() {
            return this.element.getAttribute("data-content") || this.config.content
        }
        ,
        e._cleanTipClass = function() {
            var t = oe(this.getTipElement())
              , e = t.attr("class").match(he);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var t = oe(this).data(ue)
                  , e = "object" == typeof n ? n : null;
                if ((t || !/destroy|hide/.test(n)) && (t || (t = new r(this,e),
                oe(this).data(ue, t)),
                "string" == typeof n)) {
                    if ("undefined" == typeof t[n])
                        throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return ae
            }
        }, {
            key: "Default",
            get: function() {
                return de
            }
        }, {
            key: "NAME",
            get: function() {
                return se
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return ue
            }
        }, {
            key: "Event",
            get: function() {
                return ye
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return le
            }
        }, {
            key: "DefaultType",
            get: function() {
                return pe
            }
        }]),
        r
    }(Ye),
    oe.fn[se] = ve._jQueryInterface,
    oe.fn[se].Constructor = ve,
    oe.fn[se].noConflict = function() {
        return oe.fn[se] = ce,
        ve._jQueryInterface
    }
    ,
    ve), Ze = (Ee = "scrollspy",
    Te = "4.1.0",
    we = "." + (_e = "bs.scrollspy"),
    Ce = ".data-api",
    Se = (be = e).fn[Ee],
    Ae = {
        offset: 10,
        method: "auto",
        target: ""
    },
    xe = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    },
    De = {
        ACTIVATE: "activate" + we,
        SCROLL: "scroll" + we,
        LOAD_DATA_API: "load" + we + Ce
    },
    ke = {
        DROPDOWN_ITEM: "dropdown-item",
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active"
    },
    Ie = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: ".active",
        NAV_LIST_GROUP: ".nav, .list-group",
        NAV_LINKS: ".nav-link",
        NAV_ITEMS: ".nav-item",
        LIST_ITEMS: ".list-group-item",
        DROPDOWN: ".dropdown",
        DROPDOWN_ITEMS: ".dropdown-item",
        DROPDOWN_TOGGLE: ".dropdown-toggle"
    },
    Oe = {
        OFFSET: "offset",
        POSITION: "position"
    },
    Le = function() {
        function n(t, e) {
            var n = this;
            this._element = t,
            this._scrollElement = "BODY" === t.tagName ? window : t,
            this._config = this._getConfig(e),
            this._selector = this._config.target + " " + Ie.NAV_LINKS + "," + this._config.target + " " + Ie.LIST_ITEMS + "," + this._config.target + " " + Ie.DROPDOWN_ITEMS,
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            be(this._scrollElement).on(De.SCROLL, function(t) {
                return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype;
        return t.refresh = function() {
            var e = this
              , t = this._scrollElement === this._scrollElement.window ? Oe.OFFSET : Oe.POSITION
              , i = "auto" === this._config.method ? t : this._config.method
              , o = i === Oe.POSITION ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            be.makeArray(be(this._selector)).map(function(t) {
                var e, n = Ve.getSelectorFromElement(t);
                if (n && (e = be(n)[0]),
                e) {
                    var r = e.getBoundingClientRect();
                    if (r.width || r.height)
                        return [be(e)[i]().top + o, n]
                }
                return null
            }).filter(function(t) {
                return t
            }).sort(function(t, e) {
                return t[0] - e[0]
            }).forEach(function(t) {
                e._offsets.push(t[0]),
                e._targets.push(t[1])
            })
        }
        ,
        t.dispose = function() {
            be.removeData(this._element, _e),
            be(this._scrollElement).off(we),
            this._element = null,
            this._scrollElement = null,
            this._config = null,
            this._selector = null,
            this._offsets = null,
            this._targets = null,
            this._activeTarget = null,
            this._scrollHeight = null
        }
        ,
        t._getConfig = function(t) {
            if ("string" != typeof (t = a({}, Ae, t)).target) {
                var e = be(t.target).attr("id");
                e || (e = Ve.getUID(Ee),
                be(t.target).attr("id", e)),
                t.target = "#" + e
            }
            return Ve.typeCheckConfig(Ee, t, xe),
            t
        }
        ,
        t._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        ,
        t._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        t._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        ,
        t._process = function() {
            var t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            n <= t) {
                var r = this._targets[this._targets.length - 1];
                this._activeTarget !== r && this._activate(r)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0])
                    return this._activeTarget = null,
                    void this._clear();
                for (var i = this._offsets.length; i--; ) {
                    this._activeTarget !== this._targets[i] && t >= this._offsets[i] && ("undefined" == typeof this._offsets[i + 1] || t < this._offsets[i + 1]) && this._activate(this._targets[i])
                }
            }
        }
        ,
        t._activate = function(e) {
            this._activeTarget = e,
            this._clear();
            var t = this._selector.split(",");
            t = t.map(function(t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var n = be(t.join(","));
            n.hasClass(ke.DROPDOWN_ITEM) ? (n.closest(Ie.DROPDOWN).find(Ie.DROPDOWN_TOGGLE).addClass(ke.ACTIVE),
            n.addClass(ke.ACTIVE)) : (n.addClass(ke.ACTIVE),
            n.parents(Ie.NAV_LIST_GROUP).prev(Ie.NAV_LINKS + ", " + Ie.LIST_ITEMS).addClass(ke.ACTIVE),
            n.parents(Ie.NAV_LIST_GROUP).prev(Ie.NAV_ITEMS).children(Ie.NAV_LINKS).addClass(ke.ACTIVE)),
            be(this._scrollElement).trigger(De.ACTIVATE, {
                relatedTarget: e
            })
        }
        ,
        t._clear = function() {
            be(this._selector).filter(Ie.ACTIVE).removeClass(ke.ACTIVE)
        }
        ,
        n._jQueryInterface = function(e) {
            return this.each(function() {
                var t = be(this).data(_e);
                if (t || (t = new n(this,"object" == typeof e && e),
                be(this).data(_e, t)),
                "string" == typeof e) {
                    if ("undefined" == typeof t[e])
                        throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        }
        ,
        s(n, null, [{
            key: "VERSION",
            get: function() {
                return Te
            }
        }, {
            key: "Default",
            get: function() {
                return Ae
            }
        }]),
        n
    }(),
    be(window).on(De.LOAD_DATA_API, function() {
        for (var t = be.makeArray(be(Ie.DATA_SPY)), e = t.length; e--; ) {
            var n = be(t[e]);
            Le._jQueryInterface.call(n, n.data())
        }
    }),
    be.fn[Ee] = Le._jQueryInterface,
    be.fn[Ee].Constructor = Le,
    be.fn[Ee].noConflict = function() {
        return be.fn[Ee] = Se,
        Le._jQueryInterface
    }
    ,
    Le), tn = (Pe = "tab",
    Re = "4.1.0",
    je = "." + (He = "bs.tab"),
    Me = ".data-api",
    qe = (Ne = e).fn[Pe],
    We = {
        HIDE: "hide" + je,
        HIDDEN: "hidden" + je,
        SHOW: "show" + je,
        SHOWN: "shown" + je,
        CLICK_DATA_API: "click" + je + Me
    },
    Fe = {
        DROPDOWN_MENU: "dropdown-menu",
        ACTIVE: "active",
        DISABLED: "disabled",
        FADE: "fade",
        SHOW: "show"
    },
    Be = {
        DROPDOWN: ".dropdown",
        NAV_LIST_GROUP: ".nav, .list-group",
        ACTIVE: ".active",
        ACTIVE_UL: "> li > .active",
        DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        DROPDOWN_TOGGLE: ".dropdown-toggle",
        DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
    },
    Ue = function() {
        function r(t) {
            this._element = t
        }
        var t = r.prototype;
        return t.show = function() {
            var n = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Ne(this._element).hasClass(Fe.ACTIVE) || Ne(this._element).hasClass(Fe.DISABLED))) {
                var t, r, e = Ne(this._element).closest(Be.NAV_LIST_GROUP)[0], i = Ve.getSelectorFromElement(this._element);
                if (e) {
                    var o = "UL" === e.nodeName ? Be.ACTIVE_UL : Be.ACTIVE;
                    r = (r = Ne.makeArray(Ne(e).find(o)))[r.length - 1]
                }
                var s = Ne.Event(We.HIDE, {
                    relatedTarget: this._element
                })
                  , a = Ne.Event(We.SHOW, {
                    relatedTarget: r
                });
                if (r && Ne(r).trigger(s),
                Ne(this._element).trigger(a),
                !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                    i && (t = Ne(i)[0]),
                    this._activate(this._element, e);
                    var u = function() {
                        var t = Ne.Event(We.HIDDEN, {
                            relatedTarget: n._element
                        })
                          , e = Ne.Event(We.SHOWN, {
                            relatedTarget: r
                        });
                        Ne(r).trigger(t),
                        Ne(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, u) : u()
                }
            }
        }
        ,
        t.dispose = function() {
            Ne.removeData(this._element, He),
            this._element = null
        }
        ,
        t._activate = function(t, e, n) {
            var r = this
              , i = ("UL" === e.nodeName ? Ne(e).find(Be.ACTIVE_UL) : Ne(e).children(Be.ACTIVE))[0]
              , o = n && i && Ne(i).hasClass(Fe.FADE)
              , s = function() {
                return r._transitionComplete(t, i, n)
            };
            if (i && o) {
                var a = Ve.getTransitionDurationFromElement(i);
                Ne(i).one(Ve.TRANSITION_END, s).emulateTransitionEnd(a)
            } else
                s()
        }
        ,
        t._transitionComplete = function(t, e, n) {
            if (e) {
                Ne(e).removeClass(Fe.SHOW + " " + Fe.ACTIVE);
                var r = Ne(e.parentNode).find(Be.DROPDOWN_ACTIVE_CHILD)[0];
                r && Ne(r).removeClass(Fe.ACTIVE),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            if (Ne(t).addClass(Fe.ACTIVE),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            Ve.reflow(t),
            Ne(t).addClass(Fe.SHOW),
            t.parentNode && Ne(t.parentNode).hasClass(Fe.DROPDOWN_MENU)) {
                var i = Ne(t).closest(Be.DROPDOWN)[0];
                i && Ne(i).find(Be.DROPDOWN_TOGGLE).addClass(Fe.ACTIVE),
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        ,
        r._jQueryInterface = function(n) {
            return this.each(function() {
                var t = Ne(this)
                  , e = t.data(He);
                if (e || (e = new r(this),
                t.data(He, e)),
                "string" == typeof n) {
                    if ("undefined" == typeof e[n])
                        throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }
        ,
        s(r, null, [{
            key: "VERSION",
            get: function() {
                return Re
            }
        }]),
        r
    }(),
    Ne(document).on(We.CLICK_DATA_API, Be.DATA_TOGGLE, function(t) {
        t.preventDefault(),
        Ue._jQueryInterface.call(Ne(this), "show")
    }),
    Ne.fn[Pe] = Ue._jQueryInterface,
    Ne.fn[Pe].Constructor = Ue,
    Ne.fn[Pe].noConflict = function() {
        return Ne.fn[Pe] = qe,
        Ue._jQueryInterface
    }
    ,
    Ue);
    !function(t) {
        if (void 0 === t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".")
          , n = 1
          , r = 2
          , i = 9
          , o = 1
          , s = 4;
        if (e[0] < r && e[1] < i || e[0] === n && e[1] === i && e[2] < o || e[0] >= s)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = Ve,
    t.Alert = Ge,
    t.Button = Ke,
    t.Carousel = $e,
    t.Collapse = Qe,
    t.Dropdown = Xe,
    t.Modal = ze,
    t.Popover = Je,
    t.Scrollspy = Ze,
    t.Tab = tn,
    t.Tooltip = Ye,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function() {
    var t = this;
    (function() {
        (function() {
            this.Rails = {
                linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                buttonClickSelector: {
                    selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                    exclude: "form button"
                },
                inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                formSubmitSelector: "form",
                formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                fileInputSelector: "input[name][type=file]:not([disabled])",
                linkDisableSelector: "a[data-disable-with], a[data-disable]",
                buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
            }
        }
        ).call(this)
    }
    ).call(t);
    var v = t.Rails;
    (function() {
        (function() {
            v.cspNonce = function() {
                var t;
                return (t = document.querySelector("meta[name=csp-nonce]")) && t.content
            }
        }
        ).call(this),
        function() {
            var r, n;
            n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector,
            v.matches = function(t, e) {
                return null != e.exclude ? n.call(t, e.selector) && !n.call(t, e.exclude) : n.call(t, e)
            }
            ,
            r = "_ujsData",
            v.getData = function(t, e) {
                var n;
                return null != (n = t[r]) ? n[e] : void 0
            }
            ,
            v.setData = function(t, e, n) {
                return null == t[r] && (t[r] = {}),
                t[r][e] = n
            }
            ,
            v.$ = function(t) {
                return Array.prototype.slice.call(document.querySelectorAll(t))
            }
        }
        .call(this),
        function() {
            var n, r, i;
            n = v.$,
            i = v.csrfToken = function() {
                var t;
                return (t = document.querySelector("meta[name=csrf-token]")) && t.content
            }
            ,
            r = v.csrfParam = function() {
                var t;
                return (t = document.querySelector("meta[name=csrf-param]")) && t.content
            }
            ,
            v.CSRFProtection = function(t) {
                var e;
                if (null != (e = i()))
                    return t.setRequestHeader("X-CSRF-Token", e)
            }
            ,
            v.refreshCSRFTokens = function() {
                var t, e;
                if (e = i(),
                t = r(),
                null != e && null != t)
                    return n('form input[name="' + t + '"]').forEach(function(t) {
                        return t.value = e
                    })
            }
        }
        .call(this),
        function() {
            var i, e, o, n;
            o = v.matches,
            "function" != typeof (i = window.CustomEvent) && ((i = function(t, e) {
                var n;
                return (n = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
                n
            }
            ).prototype = window.Event.prototype,
            n = i.prototype.preventDefault,
            i.prototype.preventDefault = function() {
                var t;
                return t = n.call(this),
                this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                }),
                t
            }
            ),
            e = v.fire = function(t, e, n) {
                var r;
                return r = new i(e,{
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }),
                t.dispatchEvent(r),
                !r.defaultPrevented
            }
            ,
            v.stopEverything = function(t) {
                return e(t.target, "ujs:everythingStopped"),
                t.preventDefault(),
                t.stopPropagation(),
                t.stopImmediatePropagation()
            }
            ,
            v.delegate = function(t, n, e, r) {
                return t.addEventListener(e, function(t) {
                    var e;
                    for (e = t.target; e instanceof Element && !o(e, n); )
                        e = e.parentNode;
                    if (e instanceof Element && !1 === r.call(e, t))
                        return t.preventDefault(),
                        t.stopPropagation()
                })
            }
        }
        .call(this),
        function() {
            var e, r, t, o, i, s;
            o = v.cspNonce,
            r = v.CSRFProtection,
            v.fire,
            e = {
                "*": "*/*",
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            v.ajax = function(n) {
                var r;
                return n = i(n),
                r = t(n, function() {
                    var t, e;
                    return e = s(null != (t = r.response) ? t : r.responseText, r.getResponseHeader("Content-Type")),
                    2 === Math.floor(r.status / 100) ? "function" == typeof n.success && n.success(e, r.statusText, r) : "function" == typeof n.error && n.error(e, r.statusText, r),
                    "function" == typeof n.complete ? n.complete(r, r.statusText) : void 0
                }),
                !(null != n.beforeSend && !n.beforeSend(r, n)) && (r.readyState === XMLHttpRequest.OPENED ? r.send(n.data) : void 0)
            }
            ,
            i = function(t) {
                return t.url = t.url || location.href,
                t.type = t.type.toUpperCase(),
                "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? t.url += "?" + t.data : t.url += "&" + t.data),
                null == e[t.dataType] && (t.dataType = "*"),
                t.accept = e[t.dataType],
                "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
                t
            }
            ,
            t = function(t, e) {
                var n;
                return (n = new XMLHttpRequest).open(t.type, t.url, !0),
                n.setRequestHeader("Accept", t.accept),
                "string" == typeof t.data && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                t.crossDomain || n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                r(n),
                n.withCredentials = !!t.withCredentials,
                n.onreadystatechange = function() {
                    if (n.readyState === XMLHttpRequest.DONE)
                        return e(n)
                }
                ,
                n
            }
            ,
            s = function(t, e) {
                var n, r;
                if ("string" == typeof t && "string" == typeof e)
                    if (e.match(/\bjson\b/))
                        try {
                            t = JSON.parse(t)
                        } catch (i) {}
                    else if (e.match(/\b(?:java|ecma)script\b/))
                        (r = document.createElement("script")).nonce = o(),
                        r.text = t,
                        document.head.appendChild(r).parentNode.removeChild(r);
                    else if (e.match(/\b(xml|html|svg)\b/)) {
                        n = new DOMParser,
                        e = e.replace(/;.+/, "");
                        try {
                            t = n.parseFromString(t, e)
                        } catch (i) {}
                    }
                return t
            }
            ,
            v.href = function(t) {
                return t.href
            }
            ,
            v.isCrossDomain = function(t) {
                var e, n;
                (e = document.createElement("a")).href = location.href,
                n = document.createElement("a");
                try {
                    return n.href = t,
                    !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (r) {
                    return r,
                    !0
                }
            }
        }
        .call(this),
        function() {
            var i, o;
            i = v.matches,
            o = function(t) {
                return Array.prototype.slice.call(t)
            }
            ,
            v.serializeElement = function(t, e) {
                var n, r;
                return n = [t],
                i(t, "form") && (n = o(t.elements)),
                r = [],
                n.forEach(function(e) {
                    if (e.name && !e.disabled)
                        return i(e, "select") ? o(e.options).forEach(function(t) {
                            if (t.selected)
                                return r.push({
                                    name: e.name,
                                    value: t.value
                                })
                        }) : e.checked || -1 === ["radio", "checkbox", "submit"].indexOf(e.type) ? r.push({
                            name: e.name,
                            value: e.value
                        }) : void 0
                }),
                e && r.push(e),
                r.map(function(t) {
                    return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
                }).join("&")
            }
            ,
            v.formElements = function(t, e) {
                return i(t, "form") ? o(t.elements).filter(function(t) {
                    return i(t, e)
                }) : o(t.querySelectorAll(e))
            }
        }
        .call(this),
        function() {
            var e, o, n;
            o = v.fire,
            n = v.stopEverything,
            v.handleConfirm = function(t) {
                if (!e(this))
                    return n(t)
            }
            ,
            e = function(t) {
                var e, n, r;
                if (!(r = t.getAttribute("data-confirm")))
                    return !0;
                if (e = !1,
                o(t, "confirm")) {
                    try {
                        e = confirm(r)
                    } catch (i) {}
                    n = o(t, "confirm:complete", [e])
                }
                return e && n
            }
        }
        .call(this),
        function() {
            var n, r, i, o, s, a, e, u, l, c, f;
            l = v.matches,
            u = v.getData,
            c = v.setData,
            f = v.stopEverything,
            e = v.formElements,
            v.handleDisabledElement = function(t) {
                if (this.disabled)
                    return f(t)
            }
            ,
            v.enableElement = function(t) {
                var e;
                return e = t instanceof Event ? t.target : t,
                l(e, v.linkDisableSelector) ? a(e) : l(e, v.buttonDisableSelector) || l(e, v.formEnableSelector) ? o(e) : l(e, v.formSubmitSelector) ? s(e) : void 0
            }
            ,
            v.disableElement = function(t) {
                var e;
                return e = t instanceof Event ? t.target : t,
                l(e, v.linkDisableSelector) ? i(e) : l(e, v.buttonDisableSelector) || l(e, v.formDisableSelector) ? n(e) : l(e, v.formSubmitSelector) ? r(e) : void 0
            }
            ,
            i = function(t) {
                var e;
                return null != (e = t.getAttribute("data-disable-with")) && (c(t, "ujs:enable-with", t.innerHTML),
                t.innerHTML = e),
                t.addEventListener("click", f),
                c(t, "ujs:disabled", !0)
            }
            ,
            a = function(t) {
                var e;
                return null != (e = u(t, "ujs:enable-with")) && (t.innerHTML = e,
                c(t, "ujs:enable-with", null)),
                t.removeEventListener("click", f),
                c(t, "ujs:disabled", null)
            }
            ,
            r = function(t) {
                return e(t, v.formDisableSelector).forEach(n)
            }
            ,
            n = function(t) {
                var e;
                return null != (e = t.getAttribute("data-disable-with")) && (l(t, "button") ? (c(t, "ujs:enable-with", t.innerHTML),
                t.innerHTML = e) : (c(t, "ujs:enable-with", t.value),
                t.value = e)),
                t.disabled = !0,
                c(t, "ujs:disabled", !0)
            }
            ,
            s = function(t) {
                return e(t, v.formEnableSelector).forEach(o)
            }
            ,
            o = function(t) {
                var e;
                return null != (e = u(t, "ujs:enable-with")) && (l(t, "button") ? t.innerHTML = e : t.value = e,
                c(t, "ujs:enable-with", null)),
                t.disabled = !1,
                c(t, "ujs:disabled", null)
            }
        }
        .call(this),
        function() {
            var u;
            u = v.stopEverything,
            v.handleMethod = function(t) {
                var e, n, r, i, o, s, a;
                if (a = (s = this).getAttribute("data-method"))
                    return o = v.href(s),
                    n = v.csrfToken(),
                    e = v.csrfParam(),
                    r = document.createElement("form"),
                    i = "<input name='_method' value='" + a + "' type='hidden' />",
                    null == e || null == n || v.isCrossDomain(o) || (i += "<input name='" + e + "' value='" + n + "' type='hidden' />"),
                    i += '<input type="submit" />',
                    r.method = "post",
                    r.action = o,
                    r.target = s.target,
                    r.innerHTML = i,
                    r.style.display = "none",
                    document.body.appendChild(r),
                    r.querySelector('[type="submit"]').click(),
                    u(t)
            }
        }
        .call(this),
        function() {
            var u, l, c, f, h, d, p, m, g, y = [].slice;
            d = v.matches,
            c = v.getData,
            m = v.setData,
            l = v.fire,
            g = v.stopEverything,
            u = v.ajax,
            f = v.isCrossDomain,
            p = v.serializeElement,
            h = function(t) {
                var e;
                return null != (e = t.getAttribute("data-remote")) && "false" !== e
            }
            ,
            v.handleRemote = function(t) {
                var e, n, r, i, o, s, a;
                return !h(i = this) || (l(i, "ajax:before") ? (a = i.getAttribute("data-with-credentials"),
                r = i.getAttribute("data-type") || "script",
                d(i, v.formSubmitSelector) ? (e = c(i, "ujs:submit-button"),
                o = c(i, "ujs:submit-button-formmethod") || i.method,
                s = c(i, "ujs:submit-button-formaction") || i.getAttribute("action") || location.href,
                "GET" === o.toUpperCase() && (s = s.replace(/\?.*$/, "")),
                "multipart/form-data" === i.enctype ? (n = new FormData(i),
                null != e && n.append(e.name, e.value)) : n = p(i, e),
                m(i, "ujs:submit-button", null),
                m(i, "ujs:submit-button-formmethod", null),
                m(i, "ujs:submit-button-formaction", null)) : d(i, v.buttonClickSelector) || d(i, v.inputChangeSelector) ? (o = i.getAttribute("data-method"),
                s = i.getAttribute("data-url"),
                n = p(i, i.getAttribute("data-params"))) : (o = i.getAttribute("data-method"),
                s = v.href(i),
                n = i.getAttribute("data-params")),
                u({
                    type: o || "GET",
                    url: s,
                    data: n,
                    dataType: r,
                    beforeSend: function(t, e) {
                        return l(i, "ajax:beforeSend", [t, e]) ? l(i, "ajax:send", [t]) : (l(i, "ajax:stopped"),
                        !1)
                    },
                    success: function() {
                        var t;
                        return t = 1 <= arguments.length ? y.call(arguments, 0) : [],
                        l(i, "ajax:success", t)
                    },
                    error: function() {
                        var t;
                        return t = 1 <= arguments.length ? y.call(arguments, 0) : [],
                        l(i, "ajax:error", t)
                    },
                    complete: function() {
                        var t;
                        return t = 1 <= arguments.length ? y.call(arguments, 0) : [],
                        l(i, "ajax:complete", t)
                    },
                    crossDomain: f(s),
                    withCredentials: null != a && "false" !== a
                }),
                g(t)) : (l(i, "ajax:stopped"),
                !1))
            }
            ,
            v.formSubmitButtonClick = function() {
                var t, e;
                if (e = (t = this).form)
                    return t.name && m(e, "ujs:submit-button", {
                        name: t.name,
                        value: t.value
                    }),
                    m(e, "ujs:formnovalidate-button", t.formNoValidate),
                    m(e, "ujs:submit-button-formaction", t.getAttribute("formaction")),
                    m(e, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
            }
            ,
            v.handleMetaClick = function(t) {
                var e, n, r;
                if (r = ((n = this).getAttribute("data-method") || "GET").toUpperCase(),
                e = n.getAttribute("data-params"),
                (t.metaKey || t.ctrlKey) && "GET" === r && !e)
                    return t.stopImmediatePropagation()
            }
        }
        .call(this),
        function() {
            var t, r, e, n, i, o, s, a, u, l, c, f, h, d;
            o = v.fire,
            e = v.delegate,
            a = v.getData,
            t = v.$,
            d = v.refreshCSRFTokens,
            r = v.CSRFProtection,
            i = v.enableElement,
            n = v.disableElement,
            l = v.handleDisabledElement,
            u = v.handleConfirm,
            h = v.handleRemote,
            s = v.formSubmitButtonClick,
            c = v.handleMetaClick,
            f = v.handleMethod,
            "undefined" == typeof jQuery || null === jQuery || null == jQuery.ajax || jQuery.rails || (jQuery.rails = v,
            jQuery.ajaxPrefilter(function(t, e, n) {
                if (!t.crossDomain)
                    return r(n)
            })),
            v.start = function() {
                if (window._rails_loaded)
                    throw new Error("rails-ujs has already been loaded!");
                return window.addEventListener("pageshow", function() {
                    return t(v.formEnableSelector).forEach(function(t) {
                        if (a(t, "ujs:disabled"))
                            return i(t)
                    }),
                    t(v.linkDisableSelector).forEach(function(t) {
                        if (a(t, "ujs:disabled"))
                            return i(t)
                    })
                }),
                e(document, v.linkDisableSelector, "ajax:complete", i),
                e(document, v.linkDisableSelector, "ajax:stopped", i),
                e(document, v.buttonDisableSelector, "ajax:complete", i),
                e(document, v.buttonDisableSelector, "ajax:stopped", i),
                e(document, v.linkClickSelector, "click", l),
                e(document, v.linkClickSelector, "click", u),
                e(document, v.linkClickSelector, "click", c),
                e(document, v.linkClickSelector, "click", n),
                e(document, v.linkClickSelector, "click", h),
                e(document, v.linkClickSelector, "click", f),
                e(document, v.buttonClickSelector, "click", l),
                e(document, v.buttonClickSelector, "click", u),
                e(document, v.buttonClickSelector, "click", n),
                e(document, v.buttonClickSelector, "click", h),
                e(document, v.inputChangeSelector, "change", l),
                e(document, v.inputChangeSelector, "change", u),
                e(document, v.inputChangeSelector, "change", h),
                e(document, v.formSubmitSelector, "submit", l),
                e(document, v.formSubmitSelector, "submit", u),
                e(document, v.formSubmitSelector, "submit", h),
                e(document, v.formSubmitSelector, "submit", function(t) {
                    return setTimeout(function() {
                        return n(t)
                    }, 13)
                }),
                e(document, v.formSubmitSelector, "ajax:send", n),
                e(document, v.formSubmitSelector, "ajax:complete", i),
                e(document, v.formInputClickSelector, "click", l),
                e(document, v.formInputClickSelector, "click", u),
                e(document, v.formInputClickSelector, "click", s),
                document.addEventListener("DOMContentLoaded", d),
                window._rails_loaded = !0
            }
            ,
            window.Rails === v && o(document, "rails:attachBindings") && v.start()
        }
        .call(this)
    }
    ).call(this),
    "object" == typeof module && module.exports ? module.exports = v : "function" == typeof define && define.amd && define(v)
}
.call(this),
function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ActiveStorage = e() : t.ActiveStorage = e()
}(this, function() {
    return function(n) {
        function r(t) {
            if (i[t])
                return i[t].exports;
            var e = i[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return n[t].call(e.exports, e, e.exports, r),
            e.l = !0,
            e.exports
        }
        var i = {};
        return r.m = n,
        r.c = i,
        r.d = function(t, e, n) {
            r.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        r.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            }
            : function() {
                return t
            }
            ;
            return r.d(e, "a", e),
            e
        }
        ,
        r.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        r.p = "",
        r(r.s = 2)
    }([function(t, e) {
        "use strict";
        function n(t) {
            var e = i(document.head, 'meta[name="' + t + '"]');
            if (e)
                return e.getAttribute("content")
        }
        function r(t, e) {
            return "string" == typeof t && (e = t,
            t = document),
            s(t.querySelectorAll(e))
        }
        function i(t, e) {
            return "string" == typeof t && (e = t,
            t = document),
            t.querySelector(e)
        }
        function o(t, e, n) {
            var r = 2 < arguments.length && void 0 !== n ? n : {}
              , i = t.disabled
              , o = r.bubbles
              , s = r.cancelable
              , a = r.detail
              , u = document.createEvent("Event");
            u.initEvent(e, o || !0, s || !0),
            u.detail = a || {};
            try {
                t.disabled = !1,
                t.dispatchEvent(u)
            } finally {
                t.disabled = i
            }
            return u
        }
        function s(t) {
            return Array.isArray(t) ? t : Array.from ? Array.from(t) : [].slice.call(t)
        }
        e.d = n,
        e.c = r,
        e.b = i,
        e.a = o,
        e.e = s
    }
    , function(t, e, n) {
        "use strict";
        function i(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if (t && "function" == typeof t[e]) {
                for (var n = arguments.length, r = Array(2 < n ? n - 2 : 0), i = 2; i < n; i++)
                    r[i - 2] = arguments[i];
                return t[e].apply(t, r)
            }
        }
        n.d(e, "a", function() {
            return r
        });
        var s = n(6)
          , a = n(8)
          , u = n(9)
          , l = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , c = 0
          , r = function() {
            function r(t, e, n) {
                i(this, r),
                this.id = ++c,
                this.file = t,
                this.url = e,
                this.delegate = n
            }
            return l(r, [{
                key: "create",
                value: function(r) {
                    var i = this;
                    s.a.create(this.file, function(t, e) {
                        if (t)
                            r(t);
                        else {
                            var n = new a.a(i.file,e,i.url);
                            o(i.delegate, "directUploadWillCreateBlobWithXHR", n.xhr),
                            n.create(function(t) {
                                if (t)
                                    r(t);
                                else {
                                    var e = new u.a(n);
                                    o(i.delegate, "directUploadWillStoreFileWithXHR", e.xhr),
                                    e.create(function(t) {
                                        t ? r(t) : r(null, n.toJSON())
                                    })
                                }
                            })
                        }
                    })
                }
            }]),
            r
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            window.ActiveStorage && Object(i.a)()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n(3)
          , o = n(1);
        n.d(e, "start", function() {
            return i.a
        }),
        n.d(e, "DirectUpload", function() {
            return o.a
        }),
        setTimeout(r, 1)
    }
    , function(t, e, n) {
        "use strict";
        function r() {
            d || (d = !0,
            document.addEventListener("submit", i),
            document.addEventListener("ajax:before", o))
        }
        function i(t) {
            s(t)
        }
        function o(t) {
            "FORM" == t.target.tagName && s(t)
        }
        function s(t) {
            var e = t.target;
            if (e.hasAttribute(h))
                t.preventDefault();
            else {
                var n = new c.a(e)
                  , r = n.inputs;
                r.length && (t.preventDefault(),
                e.setAttribute(h, ""),
                r.forEach(u),
                n.start(function(t) {
                    e.removeAttribute(h),
                    t ? r.forEach(l) : a(e)
                }))
            }
        }
        function a(t) {
            var e = Object(f.b)(t, "input[type=submit]");
            if (e) {
                var n = e.disabled;
                e.disabled = !1,
                e.focus(),
                e.click(),
                e.disabled = n
            } else
                (e = document.createElement("input")).type = "submit",
                e.style.display = "none",
                t.appendChild(e),
                e.click(),
                t.removeChild(e)
        }
        function u(t) {
            t.disabled = !0
        }
        function l(t) {
            t.disabled = !1
        }
        e.a = r;
        var c = n(4)
          , f = n(0)
          , h = "data-direct-uploads-processing"
          , d = !1
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return u
        });
        var i = n(5)
          , o = n(0)
          , s = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , a = "input[type=file][data-direct-upload-url]:not([disabled])"
          , u = function() {
            function e(t) {
                r(this, e),
                this.form = t,
                this.inputs = Object(o.c)(t, a).filter(function(t) {
                    return t.files.length
                })
            }
            return s(e, [{
                key: "start",
                value: function(n) {
                    var r = this
                      , i = this.createDirectUploadControllers();
                    this.dispatch("start"),
                    function e() {
                        var t = i.shift();
                        t ? t.start(function(t) {
                            t ? (n(t),
                            r.dispatch("end")) : e()
                        }) : (n(),
                        r.dispatch("end"))
                    }()
                }
            }, {
                key: "createDirectUploadControllers",
                value: function() {
                    var r = [];
                    return this.inputs.forEach(function(n) {
                        Object(o.e)(n.files).forEach(function(t) {
                            var e = new i.a(n,t);
                            r.push(e)
                        })
                    }),
                    r
                }
            }, {
                key: "dispatch",
                value: function(t, e) {
                    var n = 1 < arguments.length && void 0 !== e ? e : {};
                    return Object(o.a)(this.form, "direct-uploads:" + t, {
                        detail: n
                    })
                }
            }]),
            e
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return a
        });
        var i = n(1)
          , o = n(0)
          , s = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , a = function() {
            function n(t, e) {
                r(this, n),
                this.input = t,
                this.file = e,
                this.directUpload = new i.a(this.file,this.url,this),
                this.dispatch("initialize")
            }
            return s(n, [{
                key: "start",
                value: function(n) {
                    var r = this
                      , i = document.createElement("input");
                    i.type = "hidden",
                    i.name = this.input.name,
                    this.input.insertAdjacentElement("beforebegin", i),
                    this.dispatch("start"),
                    this.directUpload.create(function(t, e) {
                        t ? (i.parentNode.removeChild(i),
                        r.dispatchError(t)) : i.value = e.signed_id,
                        r.dispatch("end"),
                        n(t)
                    })
                }
            }, {
                key: "uploadRequestDidProgress",
                value: function(t) {
                    var e = t.loaded / t.total * 100;
                    e && this.dispatch("progress", {
                        progress: e
                    })
                }
            }, {
                key: "dispatch",
                value: function(t, e) {
                    var n = 1 < arguments.length && void 0 !== e ? e : {};
                    return n.file = this.file,
                    n.id = this.directUpload.id,
                    Object(o.a)(this.input, "direct-upload:" + t, {
                        detail: n
                    })
                }
            }, {
                key: "dispatchError",
                value: function(t) {
                    this.dispatch("error", {
                        error: t
                    }).defaultPrevented || alert(t)
                }
            }, {
                key: "directUploadWillCreateBlobWithXHR",
                value: function(t) {
                    this.dispatch("before-blob-request", {
                        xhr: t
                    })
                }
            }, {
                key: "directUploadWillStoreFileWithXHR",
                value: function(t) {
                    var e = this;
                    this.dispatch("before-storage-request", {
                        xhr: t
                    }),
                    t.upload.addEventListener("progress", function(t) {
                        return e.uploadRequestDidProgress(t)
                    })
                }
            }, {
                key: "url",
                get: function() {
                    return this.input.getAttribute("data-direct-upload-url")
                }
            }]),
            n
        }()
    }
    , function(t, e, n) {
        "use strict";
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return u
        });
        var i = n(7)
          , o = n.n(i)
          , s = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , a = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
          , u = function() {
            function n(t) {
                r(this, n),
                this.file = t,
                this.chunkSize = 2097152,
                this.chunkCount = Math.ceil(this.file.size / this.chunkSize),
                this.chunkIndex = 0
            }
            return s(n, null, [{
                key: "create",
                value: function(t, e) {
                    new n(t).create(e)
                }
            }]),
            s(n, [{
                key: "create",
                value: function(t) {
                    var e = this;
                    this.callback = t,
                    this.md5Buffer = new o.a.ArrayBuffer,
                    this.fileReader = new FileReader,
                    this.fileReader.addEventListener("load", function(t) {
                        return e.fileReaderDidLoad(t)
                    }),
                    this.fileReader.addEventListener("error", function(t) {
                        return e.fileReaderDidError(t)
                    }),
                    this.readNextChunk()
                }
            }, {
                key: "fileReaderDidLoad",
                value: function(t) {
                    if (this.md5Buffer.append(t.target.result),
                    !this.readNextChunk()) {
                        var e = this.md5Buffer.end(!0)
                          , n = btoa(e);
                        this.callback(null, n)
                    }
                }
            }, {
                key: "fileReaderDidError",
                value: function() {
                    this.callback("Error reading " + this.file.name)
                }
            }, {
                key: "readNextChunk",
                value: function() {
                    if (this.chunkIndex < this.chunkCount) {
                        var t = this.chunkIndex * this.chunkSize
                          , e = Math.min(t + this.chunkSize, this.file.size)
                          , n = a.call(this.file, t, e);
                        return this.fileReader.readAsArrayBuffer(n),
                        this.chunkIndex++,
                        !0
                    }
                    return !1
                }
            }]),
            n
        }()
    }
    , function(t) {
        var e;
        e = function(c) {
            "use strict";
            function l(t, e) {
                var n = t[0]
                  , r = t[1]
                  , i = t[2]
                  , o = t[3];
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[0] - 680876936 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[2] + 606105819 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[3] - 1044525330 | 0) << 22 | r >>> 10) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[4] - 176418897 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[6] - 1473231341 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[7] - 45705983 | 0) << 22 | r >>> 10) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[10] - 42063 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[11] - 1990404162 | 0) << 22 | r >>> 10) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & i | ~r & o) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + r | 0) & r | ~n & i) + e[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & r) + e[14] - 1502002290 | 0) << 17 | i >>> 15) + o | 0) & o | ~i & n) + e[15] + 1236535329 | 0) << 22 | r >>> 10) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[1] - 165796510 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[11] + 643717713 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[0] - 373897302 | 0) << 20 | r >>> 12) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[5] - 701558691 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[15] - 660478335 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[4] - 405537848 | 0) << 20 | r >>> 12) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[9] + 568446438 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[3] - 187363961 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[8] + 1163531501 | 0) << 20 | r >>> 12) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r & o | i & ~o) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + r | 0) & i | r & ~i) + e[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & r | n & ~r) + e[7] + 1735328473 | 0) << 14 | i >>> 18) + o | 0) & n | o & ~n) + e[12] - 1926607734 | 0) << 20 | r >>> 12) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[5] - 378558 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[11] + 1839030562 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[14] - 35309556 | 0) << 23 | r >>> 9) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[7] - 155497632 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[10] - 1094730640 | 0) << 23 | r >>> 9) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[13] + 681279174 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[3] - 722521979 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[6] + 76029189 | 0) << 23 | r >>> 9) + i | 0,
                r = ((r += ((i = ((i += ((o = ((o += ((n = ((n += (r ^ i ^ o) + e[9] - 640364487 | 0) << 4 | n >>> 28) + r | 0) ^ r ^ i) + e[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ r) + e[15] + 530742520 | 0) << 16 | i >>> 16) + o | 0) ^ o ^ n) + e[2] - 995338651 | 0) << 23 | r >>> 9) + i | 0,
                r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[14] - 1416354905 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | r >>> 11) + i | 0,
                r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[10] - 1051523 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | r >>> 11) + i | 0,
                r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[6] - 1560198380 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | r >>> 11) + i | 0,
                r = ((r += ((o = ((o += (r ^ ((n = ((n += (i ^ (r | ~o)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + r | 0) | ~i)) + e[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((i = ((i += (n ^ (o | ~r)) + e[2] + 718787259 | 0) << 15 | i >>> 17) + o | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | r >>> 11) + i | 0,
                t[0] = n + t[0] | 0,
                t[1] = r + t[1] | 0,
                t[2] = i + t[2] | 0,
                t[3] = o + t[3] | 0
            }
            function f(t) {
                var e, n = [];
                for (e = 0; e < 64; e += 4)
                    n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
                return n
            }
            function h(t) {
                var e, n = [];
                for (e = 0; e < 64; e += 4)
                    n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
                return n
            }
            function r(t) {
                var e, n, r, i, o, s, a = t.length, u = [1732584193, -271733879, -1732584194, 271733878];
                for (e = 64; e <= a; e += 64)
                    l(u, f(t.substring(e - 64, e)));
                for (n = (t = t.substring(e - 64)).length,
                r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                e = 0; e < n; e += 1)
                    r[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
                if (r[e >> 2] |= 128 << (e % 4 << 3),
                55 < e)
                    for (l(u, r),
                    e = 0; e < 16; e += 1)
                        r[e] = 0;
                return i = (i = 8 * a).toString(16).match(/(.*?)(.{0,8})$/),
                o = parseInt(i[2], 16),
                s = parseInt(i[1], 16) || 0,
                r[14] = o,
                r[15] = s,
                l(u, r),
                u
            }
            function i(t) {
                var e, n, r, i, o, s, a = t.length, u = [1732584193, -271733879, -1732584194, 271733878];
                for (e = 64; e <= a; e += 64)
                    l(u, h(t.subarray(e - 64, e)));
                for (n = (t = e - 64 < a ? t.subarray(e - 64) : new Uint8Array(0)).length,
                r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                e = 0; e < n; e += 1)
                    r[e >> 2] |= t[e] << (e % 4 << 3);
                if (r[e >> 2] |= 128 << (e % 4 << 3),
                55 < e)
                    for (l(u, r),
                    e = 0; e < 16; e += 1)
                        r[e] = 0;
                return i = (i = 8 * a).toString(16).match(/(.*?)(.{0,8})$/),
                o = parseInt(i[2], 16),
                s = parseInt(i[1], 16) || 0,
                r[14] = o,
                r[15] = s,
                l(u, r),
                u
            }
            function n(t) {
                var e, n = "";
                for (e = 0; e < 4; e += 1)
                    n += m[t >> 8 * e + 4 & 15] + m[t >> 8 * e & 15];
                return n
            }
            function s(t) {
                var e;
                for (e = 0; e < t.length; e += 1)
                    t[e] = n(t[e]);
                return t.join("")
            }
            function o(t) {
                return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))),
                t
            }
            function e(t, e) {
                var n, r = t.length, i = new ArrayBuffer(r), o = new Uint8Array(i);
                for (n = 0; n < r; n += 1)
                    o[n] = t.charCodeAt(n);
                return e ? o : i
            }
            function a(t) {
                return String.fromCharCode.apply(null, new Uint8Array(t))
            }
            function u(t, e, n) {
                var r = new Uint8Array(t.byteLength + e.byteLength);
                return r.set(new Uint8Array(t)),
                r.set(new Uint8Array(e), t.byteLength),
                n ? r : r.buffer
            }
            function d(t) {
                var e, n = [], r = t.length;
                for (e = 0; e < r - 1; e += 2)
                    n.push(parseInt(t.substr(e, 2), 16));
                return String.fromCharCode.apply(String, n)
            }
            function p() {
                this.reset()
            }
            var m = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            return s(r("hello")),
            "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function() {
                function l(t, e) {
                    return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e)
                }
                ArrayBuffer.prototype.slice = function(t, e) {
                    var n, r, i, o, s = this.byteLength, a = l(t, s), u = s;
                    return e !== c && (u = l(e, s)),
                    u < a ? new ArrayBuffer(0) : (n = u - a,
                    r = new ArrayBuffer(n),
                    i = new Uint8Array(r),
                    o = new Uint8Array(this,a,n),
                    i.set(o),
                    r)
                }
            }(),
            p.prototype.append = function(t) {
                return this.appendBinary(o(t)),
                this
            }
            ,
            p.prototype.appendBinary = function(t) {
                this._buff += t,
                this._length += t.length;
                var e, n = this._buff.length;
                for (e = 64; e <= n; e += 64)
                    l(this._hash, f(this._buff.substring(e - 64, e)));
                return this._buff = this._buff.substring(e - 64),
                this
            }
            ,
            p.prototype.end = function(t) {
                var e, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < i; e += 1)
                    o[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
                return this._finish(o, i),
                n = s(this._hash),
                t && (n = d(n)),
                this.reset(),
                n
            }
            ,
            p.prototype.reset = function() {
                return this._buff = "",
                this._length = 0,
                this._hash = [1732584193, -271733879, -1732584194, 271733878],
                this
            }
            ,
            p.prototype.getState = function() {
                return {
                    buff: this._buff,
                    length: this._length,
                    hash: this._hash
                }
            }
            ,
            p.prototype.setState = function(t) {
                return this._buff = t.buff,
                this._length = t.length,
                this._hash = t.hash,
                this
            }
            ,
            p.prototype.destroy = function() {
                delete this._hash,
                delete this._buff,
                delete this._length
            }
            ,
            p.prototype._finish = function(t, e) {
                var n, r, i, o = e;
                if (t[o >> 2] |= 128 << (o % 4 << 3),
                55 < o)
                    for (l(this._hash, t),
                    o = 0; o < 16; o += 1)
                        t[o] = 0;
                n = (n = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/),
                r = parseInt(n[2], 16),
                i = parseInt(n[1], 16) || 0,
                t[14] = r,
                t[15] = i,
                l(this._hash, t)
            }
            ,
            p.hash = function(t, e) {
                return p.hashBinary(o(t), e)
            }
            ,
            p.hashBinary = function(t, e) {
                var n = s(r(t));
                return e ? d(n) : n
            }
            ,
            p.ArrayBuffer = function() {
                this.reset()
            }
            ,
            p.ArrayBuffer.prototype.append = function(t) {
                var e, n = u(this._buff.buffer, t, !0), r = n.length;
                for (this._length += t.byteLength,
                e = 64; e <= r; e += 64)
                    l(this._hash, h(n.subarray(e - 64, e)));
                return this._buff = e - 64 < r ? new Uint8Array(n.buffer.slice(e - 64)) : new Uint8Array(0),
                this
            }
            ,
            p.ArrayBuffer.prototype.end = function(t) {
                var e, n, r = this._buff, i = r.length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (e = 0; e < i; e += 1)
                    o[e >> 2] |= r[e] << (e % 4 << 3);
                return this._finish(o, i),
                n = s(this._hash),
                t && (n = d(n)),
                this.reset(),
                n
            }
            ,
            p.ArrayBuffer.prototype.reset = function() {
                return this._buff = new Uint8Array(0),
                this._length = 0,
                this._hash = [1732584193, -271733879, -1732584194, 271733878],
                this
            }
            ,
            p.ArrayBuffer.prototype.getState = function() {
                var t = p.prototype.getState.call(this);
                return t.buff = a(t.buff),
                t
            }
            ,
            p.ArrayBuffer.prototype.setState = function(t) {
                return t.buff = e(t.buff, !0),
                p.prototype.setState.call(this, t)
            }
            ,
            p.ArrayBuffer.prototype.destroy = p.prototype.destroy,
            p.ArrayBuffer.prototype._finish = p.prototype._finish,
            p.ArrayBuffer.hash = function(t, e) {
                var n = s(i(new Uint8Array(t)));
                return e ? d(n) : n
            }
            ,
            p
        }
        ,
        t.exports = e()
    }
    , function(t, e, n) {
        "use strict";
        function o(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return i
        });
        var s = n(0)
          , r = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , i = function() {
            function i(t, e, n) {
                var r = this;
                o(this, i),
                this.file = t,
                this.attributes = {
                    filename: t.name,
                    content_type: t.type,
                    byte_size: t.size,
                    checksum: e
                },
                this.xhr = new XMLHttpRequest,
                this.xhr.open("POST", n, !0),
                this.xhr.responseType = "json",
                this.xhr.setRequestHeader("Content-Type", "application/json"),
                this.xhr.setRequestHeader("Accept", "application/json"),
                this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                this.xhr.setRequestHeader("X-CSRF-Token", Object(s.d)("csrf-token")),
                this.xhr.addEventListener("load", function(t) {
                    return r.requestDidLoad(t)
                }),
                this.xhr.addEventListener("error", function(t) {
                    return r.requestDidError(t)
                })
            }
            return r(i, [{
                key: "create",
                value: function(t) {
                    this.callback = t,
                    this.xhr.send(JSON.stringify({
                        blob: this.attributes
                    }))
                }
            }, {
                key: "requestDidLoad",
                value: function(t) {
                    if (200 <= this.status && this.status < 300) {
                        var e = this.response
                          , n = e.direct_upload;
                        delete e.direct_upload,
                        this.attributes = e,
                        this.directUploadData = n,
                        this.callback(null, this.toJSON())
                    } else
                        this.requestDidError(t)
                }
            }, {
                key: "requestDidError",
                value: function() {
                    this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status)
                }
            }, {
                key: "toJSON",
                value: function() {
                    var t = {};
                    for (var e in this.attributes)
                        t[e] = this.attributes[e];
                    return t
                }
            }, {
                key: "status",
                get: function() {
                    return this.xhr.status
                }
            }, {
                key: "response",
                get: function() {
                    var t = this.xhr
                      , e = t.responseType
                      , n = t.response;
                    return "json" == e ? n : JSON.parse(n)
                }
            }]),
            i
        }()
    }
    , function(t, e, n) {
        "use strict";
        function a(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(e, "a", function() {
            return i
        });
        var r = function() {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r)
                }
            }
            return function(t, e, n) {
                return e && r(t.prototype, e),
                n && r(t, n),
                t
            }
        }()
          , i = function() {
            function s(t) {
                var e = this;
                a(this, s),
                this.blob = t,
                this.file = t.file;
                var n = t.directUploadData
                  , r = n.url
                  , i = n.headers;
                for (var o in this.xhr = new XMLHttpRequest,
                this.xhr.open("PUT", r, !0),
                this.xhr.responseType = "text",
                i)
                    this.xhr.setRequestHeader(o, i[o]);
                this.xhr.addEventListener("load", function(t) {
                    return e.requestDidLoad(t)
                }),
                this.xhr.addEventListener("error", function(t) {
                    return e.requestDidError(t)
                })
            }
            return r(s, [{
                key: "create",
                value: function(t) {
                    this.callback = t,
                    this.xhr.send(this.file.slice())
                }
            }, {
                key: "requestDidLoad",
                value: function(t) {
                    var e = this.xhr
                      , n = e.status
                      , r = e.response;
                    200 <= n && n < 300 ? this.callback(null, r) : this.requestDidError(t)
                }
            }, {
                key: "requestDidError",
                value: function() {
                    this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status)
                }
            }]),
            s
        }()
    }
    ])
}),
function() {
    this.Turbolinks = {
        supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
        visit: function(t, e) {
            return Turbolinks.controller.visit(t, e)
        },
        clearCache: function() {
            return Turbolinks.controller.clearCache()
        },
        setProgressBarDelay: function(t) {
            return Turbolinks.controller.setProgressBarDelay(t)
        }
    }
}
.call(this),
function() {
    var n, r, u, t, e, i, o, s, a, l = [].slice;
    Turbolinks.copyObject = function(t) {
        var e, n, r;
        for (e in n = {},
        t)
            r = t[e],
            n[e] = r;
        return n
    }
    ,
    Turbolinks.closest = function(t, e) {
        return n.call(t, e)
    }
    ,
    n = null != (a = document.documentElement.closest) ? a : function(t) {
        var e;
        for (e = this; e; ) {
            if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t))
                return e;
            e = e.parentNode
        }
    }
    ,
    Turbolinks.defer = function(t) {
        return setTimeout(t, 1)
    }
    ,
    Turbolinks.throttle = function(n) {
        var r;
        return r = null,
        function() {
            var t, e;
            return t = 1 <= arguments.length ? l.call(arguments, 0) : [],
            null != r ? r : r = requestAnimationFrame((e = this,
            function() {
                return r = null,
                n.apply(e, t)
            }
            ))
        }
    }
    ,
    Turbolinks.dispatch = function(t, e) {
        var n, r, i, o, s, a;
        return a = (s = null != e ? e : {}).target,
        n = s.cancelable,
        r = s.data,
        (i = document.createEvent("Events")).initEvent(t, !0, !0 === n),
        i.data = null != r ? r : {},
        i.cancelable && !u && (o = i.preventDefault,
        i.preventDefault = function() {
            return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                get: function() {
                    return !0
                }
            }),
            o.call(this)
        }
        ),
        (null != a ? a : document).dispatchEvent(i),
        i
    }
    ,
    (s = document.createEvent("Events")).initEvent("test", !0, !0),
    s.preventDefault(),
    u = s.defaultPrevented,
    Turbolinks.match = function(t, e) {
        return r.call(t, e)
    }
    ,
    r = null != (e = null != (i = null != (o = (t = document.documentElement).matchesSelector) ? o : t.webkitMatchesSelector) ? i : t.msMatchesSelector) ? e : t.mozMatchesSelector,
    Turbolinks.uuid = function() {
        var t, e, n;
        for (n = "",
        t = e = 1; e <= 36; t = ++e)
            n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
        return n
    }
}
.call(this),
function() {
    Turbolinks.Location = function() {
        function t(t) {
            var e, n;
            null == t && (t = ""),
            (n = document.createElement("a")).href = t.toString(),
            this.absoluteURL = n.href,
            (e = n.hash.length) < 2 ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e),
            this.anchor = n.hash.slice(1))
        }
        var e, n, r, i;
        return t.wrap = function(t) {
            return t instanceof this ? t : new this(t)
        }
        ,
        t.prototype.getOrigin = function() {
            return this.absoluteURL.split("/", 3).join("/")
        }
        ,
        t.prototype.getPath = function() {
            var t, e;
            return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
        }
        ,
        t.prototype.getPathComponents = function() {
            return this.getPath().split("/").slice(1)
        }
        ,
        t.prototype.getLastPathComponent = function() {
            return this.getPathComponents().slice(-1)[0]
        }
        ,
        t.prototype.getExtension = function() {
            var t, e;
            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
        }
        ,
        t.prototype.isHTML = function() {
            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
        }
        ,
        t.prototype.isPrefixedBy = function(t) {
            var e;
            return e = n(t),
            this.isEqualTo(t) || i(this.absoluteURL, e)
        }
        ,
        t.prototype.isEqualTo = function(t) {
            return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
        }
        ,
        t.prototype.toCacheKey = function() {
            return this.requestURL
        }
        ,
        t.prototype.toJSON = function() {
            return this.absoluteURL
        }
        ,
        t.prototype.toString = function() {
            return this.absoluteURL
        }
        ,
        t.prototype.valueOf = function() {
            return this.absoluteURL
        }
        ,
        n = function(t) {
            return e(t.getOrigin() + t.getPath())
        }
        ,
        e = function(t) {
            return r(t, "/") ? t : t + "/"
        }
        ,
        i = function(t, e) {
            return t.slice(0, e.length) === e
        }
        ,
        r = function(t, e) {
            return t.slice(-e.length) === e
        }
        ,
        t
    }()
}
.call(this),
function() {
    var r = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.HttpRequest = function() {
        function t(t, e, n) {
            this.delegate = t,
            this.requestCanceled = r(this.requestCanceled, this),
            this.requestTimedOut = r(this.requestTimedOut, this),
            this.requestFailed = r(this.requestFailed, this),
            this.requestLoaded = r(this.requestLoaded, this),
            this.requestProgressed = r(this.requestProgressed, this),
            this.url = Turbolinks.Location.wrap(e).requestURL,
            this.referrer = Turbolinks.Location.wrap(n).absoluteURL,
            this.createXHR()
        }
        return t.NETWORK_FAILURE = 0,
        t.TIMEOUT_FAILURE = -1,
        t.timeout = 60,
        t.prototype.send = function() {
            var t;
            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(),
            this.setProgress(0),
            this.xhr.send(),
            this.sent = !0,
            "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
        }
        ,
        t.prototype.cancel = function() {
            return this.xhr && this.sent ? this.xhr.abort() : void 0
        }
        ,
        t.prototype.requestProgressed = function(t) {
            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
        }
        ,
        t.prototype.requestLoaded = function() {
            return this.endRequest((e = this,
            function() {
                var t;
                return 200 <= (t = e.xhr.status) && t < 300 ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0,
                e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
            }
            ));
            var e
        }
        ,
        t.prototype.requestFailed = function() {
            return this.endRequest((t = this,
            function() {
                return t.failed = !0,
                t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
            }
            ));
            var t
        }
        ,
        t.prototype.requestTimedOut = function() {
            return this.endRequest((t = this,
            function() {
                return t.failed = !0,
                t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
            }
            ));
            var t
        }
        ,
        t.prototype.requestCanceled = function() {
            return this.endRequest()
        }
        ,
        t.prototype.notifyApplicationBeforeRequestStart = function() {
            return Turbolinks.dispatch("turbolinks:request-start", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        }
        ,
        t.prototype.notifyApplicationAfterRequestEnd = function() {
            return Turbolinks.dispatch("turbolinks:request-end", {
                data: {
                    url: this.url,
                    xhr: this.xhr
                }
            })
        }
        ,
        t.prototype.createXHR = function() {
            return this.xhr = new XMLHttpRequest,
            this.xhr.open("GET", this.url, !0),
            this.xhr.timeout = 1e3 * this.constructor.timeout,
            this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"),
            this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer),
            this.xhr.onprogress = this.requestProgressed,
            this.xhr.onload = this.requestLoaded,
            this.xhr.onerror = this.requestFailed,
            this.xhr.ontimeout = this.requestTimedOut,
            this.xhr.onabort = this.requestCanceled
        }
        ,
        t.prototype.endRequest = function(t) {
            return this.xhr ? (this.notifyApplicationAfterRequestEnd(),
            null != t && t.call(this),
            this.destroy()) : void 0
        }
        ,
        t.prototype.setProgress = function(t) {
            var e;
            return this.progress = t,
            "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
        }
        ,
        t.prototype.destroy = function() {
            var t;
            return this.setProgress(1),
            "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(),
            this.delegate = null,
            this.xhr = null
        }
        ,
        t
    }()
}
.call(this),
function() {
    var n = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.ProgressBar = function() {
        function t() {
            this.trickle = n(this.trickle, this),
            this.stylesheetElement = this.createStylesheetElement(),
            this.progressElement = this.createProgressElement()
        }
        var e;
        return e = 300,
        t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + e + "ms ease-out, opacity " + e / 2 + "ms " + e / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",
        t.prototype.show = function() {
            return this.visible ? void 0 : (this.visible = !0,
            this.installStylesheetElement(),
            this.installProgressElement(),
            this.startTrickling())
        }
        ,
        t.prototype.hide = function() {
            return this.visible && !this.hiding ? (this.hiding = !0,
            this.fadeProgressElement((t = this,
            function() {
                return t.uninstallProgressElement(),
                t.stopTrickling(),
                t.visible = !1,
                t.hiding = !1
            }
            ))) : void 0;
            var t
        }
        ,
        t.prototype.setValue = function(t) {
            return this.value = t,
            this.refresh()
        }
        ,
        t.prototype.installStylesheetElement = function() {
            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
        }
        ,
        t.prototype.installProgressElement = function() {
            return this.progressElement.style.width = 0,
            this.progressElement.style.opacity = 1,
            document.documentElement.insertBefore(this.progressElement, document.body),
            this.refresh()
        }
        ,
        t.prototype.fadeProgressElement = function(t) {
            return this.progressElement.style.opacity = 0,
            setTimeout(t, 1.5 * e)
        }
        ,
        t.prototype.uninstallProgressElement = function() {
            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
        }
        ,
        t.prototype.startTrickling = function() {
            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, e)
        }
        ,
        t.prototype.stopTrickling = function() {
            return clearInterval(this.trickleInterval),
            this.trickleInterval = null
        }
        ,
        t.prototype.trickle = function() {
            return this.setValue(this.value + Math.random() / 100)
        }
        ,
        t.prototype.refresh = function() {
            return requestAnimationFrame((t = this,
            function() {
                return t.progressElement.style.width = 10 + 90 * t.value + "%"
            }
            ));
            var t
        }
        ,
        t.prototype.createStylesheetElement = function() {
            var t;
            return (t = document.createElement("style")).type = "text/css",
            t.textContent = this.constructor.defaultCSS,
            t
        }
        ,
        t.prototype.createProgressElement = function() {
            var t;
            return (t = document.createElement("div")).className = "turbolinks-progress-bar",
            t
        }
        ,
        t
    }()
}
.call(this),
function() {
    var i = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.BrowserAdapter = function() {
        function t(t) {
            this.controller = t,
            this.showProgressBar = i(this.showProgressBar, this),
            this.progressBar = new Turbolinks.ProgressBar
        }
        var n, r, e;
        return e = Turbolinks.HttpRequest,
        n = e.NETWORK_FAILURE,
        r = e.TIMEOUT_FAILURE,
        t.prototype.visitProposedToLocationWithAction = function(t, e) {
            return this.controller.startVisitToLocationWithAction(t, e)
        }
        ,
        t.prototype.visitStarted = function(t) {
            return t.issueRequest(),
            t.changeHistory(),
            t.loadCachedSnapshot()
        }
        ,
        t.prototype.visitRequestStarted = function(t) {
            return this.progressBar.setValue(0),
            t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
        }
        ,
        t.prototype.visitRequestProgressed = function(t) {
            return this.progressBar.setValue(t.progress)
        }
        ,
        t.prototype.visitRequestCompleted = function(t) {
            return t.loadResponse()
        }
        ,
        t.prototype.visitRequestFailedWithStatusCode = function(t, e) {
            switch (e) {
            case n:
            case r:
                return this.reload();
            default:
                return t.loadResponse()
            }
        }
        ,
        t.prototype.visitRequestFinished = function() {
            return this.hideProgressBar()
        }
        ,
        t.prototype.visitCompleted = function(t) {
            return t.followRedirect()
        }
        ,
        t.prototype.pageInvalidated = function() {
            return this.reload()
        }
        ,
        t.prototype.showProgressBarAfterDelay = function() {
            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
        }
        ,
        t.prototype.showProgressBar = function() {
            return this.progressBar.show()
        }
        ,
        t.prototype.hideProgressBar = function() {
            return this.progressBar.hide(),
            clearTimeout(this.progressBarTimeout)
        }
        ,
        t.prototype.reload = function() {
            return window.location.reload()
        }
        ,
        t
    }()
}
.call(this),
function() {
    var e = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.History = function() {
        function t(t) {
            this.delegate = t,
            this.onPageLoad = e(this.onPageLoad, this),
            this.onPopState = e(this.onPopState, this)
        }
        return t.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1),
            addEventListener("load", this.onPageLoad, !1),
            this.started = !0)
        }
        ,
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("popstate", this.onPopState, !1),
            removeEventListener("load", this.onPageLoad, !1),
            this.started = !1) : void 0
        }
        ,
        t.prototype.push = function(t, e) {
            return t = Turbolinks.Location.wrap(t),
            this.update("push", t, e)
        }
        ,
        t.prototype.replace = function(t, e) {
            return t = Turbolinks.Location.wrap(t),
            this.update("replace", t, e)
        }
        ,
        t.prototype.onPopState = function(t) {
            var e, n, r, i;
            return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (e = Turbolinks.Location.wrap(window.location),
            r = i.restorationIdentifier,
            this.delegate.historyPoppedToLocationWithRestorationIdentifier(e, r)) : void 0
        }
        ,
        t.prototype.onPageLoad = function() {
            return Turbolinks.defer((t = this,
            function() {
                return t.pageLoaded = !0
            }
            ));
            var t
        }
        ,
        t.prototype.shouldHandlePopState = function() {
            return this.pageIsLoaded()
        }
        ,
        t.prototype.pageIsLoaded = function() {
            return this.pageLoaded || "complete" === document.readyState
        }
        ,
        t.prototype.update = function(t, e, n) {
            var r;
            return r = {
                turbolinks: {
                    restorationIdentifier: n
                }
            },
            history[t + "State"](r, null, e)
        }
        ,
        t
    }()
}
.call(this),
function() {
    Turbolinks.Snapshot = function() {
        function t(t) {
            var e, n;
            n = t.head,
            e = t.body,
            this.head = null != n ? n : document.createElement("head"),
            this.body = null != e ? e : document.createElement("body")
        }
        return t.wrap = function(t) {
            return t instanceof this ? t : this.fromHTML(t)
        }
        ,
        t.fromHTML = function(t) {
            var e;
            return (e = document.createElement("html")).innerHTML = t,
            this.fromElement(e)
        }
        ,
        t.fromElement = function(t) {
            return new this({
                head: t.querySelector("head"),
                body: t.querySelector("body")
            })
        }
        ,
        t.prototype.clone = function() {
            return new t({
                head: this.head.cloneNode(!0),
                body: this.body.cloneNode(!0)
            })
        }
        ,
        t.prototype.getRootLocation = function() {
            var t, e;
            return e = null != (t = this.getSetting("root")) ? t : "/",
            new Turbolinks.Location(e)
        }
        ,
        t.prototype.getCacheControlValue = function() {
            return this.getSetting("cache-control")
        }
        ,
        t.prototype.getElementForAnchor = function(t) {
            try {
                return this.body.querySelector("[id='" + t + "'], a[name='" + t + "']")
            } catch (e) {}
        }
        ,
        t.prototype.hasAnchor = function(t) {
            return null != this.getElementForAnchor(t)
        }
        ,
        t.prototype.isPreviewable = function() {
            return "no-preview" !== this.getCacheControlValue()
        }
        ,
        t.prototype.isCacheable = function() {
            return "no-cache" !== this.getCacheControlValue()
        }
        ,
        t.prototype.isVisitable = function() {
            return "reload" !== this.getSetting("visit-control")
        }
        ,
        t.prototype.getSetting = function(t) {
            var e, n;
            return null != (e = (n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"))[n.length - 1]) ? e.getAttribute("content") : void 0
        }
        ,
        t
    }()
}
.call(this),
function() {
    var o = [].slice;
    Turbolinks.Renderer = function() {
        function t() {}
        var n;
        return t.render = function(t, e) {
            var n, r, i;
            return r = t,
            n = e,
            (i = function(t, e, n) {
                n.prototype = t.prototype;
                var r = new n
                  , i = t.apply(r, e);
                return Object(i) === i ? i : r
            }(this, 3 <= arguments.length ? o.call(arguments, 2) : [], function() {})).delegate = r,
            i.render(n),
            i
        }
        ,
        t.prototype.renderView = function(t) {
            return this.delegate.viewWillRender(this.newBody),
            t(),
            this.delegate.viewRendered(this.newBody)
        }
        ,
        t.prototype.invalidateView = function() {
            return this.delegate.viewInvalidated()
        }
        ,
        t.prototype.createScriptElement = function(t) {
            var e;
            return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent,
            e.async = !1,
            n(e, t),
            e)
        }
        ,
        n = function(t, e) {
            var n, r, i, o, s, a, u;
            for (a = [],
            n = 0,
            r = (o = e.attributes).length; n < r; n++)
                i = (s = o[n]).name,
                u = s.value,
                a.push(t.setAttribute(i, u));
            return a
        }
        ,
        t
    }()
}
.call(this),
function() {
    Turbolinks.HeadDetails = function() {
        function t(t) {
            var e, n, r, i, o, s;
            for (this.element = t,
            this.elements = {},
            r = 0,
            o = (s = this.element.childNodes).length; r < o; r++)
                (n = s[r]).nodeType === Node.ELEMENT_NODE && (i = n.outerHTML,
                (null != (e = this.elements)[i] ? e[i] : e[i] = {
                    type: u(n),
                    tracked: a(n),
                    elements: []
                }).elements.push(n))
        }
        var e, n, a, u;
        return t.prototype.hasElementWithKey = function(t) {
            return t in this.elements
        }
        ,
        t.prototype.getTrackedElementSignature = function() {
            var n;
            return function() {
                var t, e;
                for (n in e = [],
                t = this.elements)
                    t[n].tracked && e.push(n);
                return e
            }
            .call(this).join("")
        }
        ,
        t.prototype.getScriptElementsNotInDetails = function(t) {
            return this.getElementsMatchingTypeNotInDetails("script", t)
        }
        ,
        t.prototype.getStylesheetElementsNotInDetails = function(t) {
            return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
        }
        ,
        t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
            var n, r, i, o, s, a;
            for (r in s = [],
            i = this.elements)
                a = (o = i[r]).type,
                n = o.elements,
                a !== t || e.hasElementWithKey(r) || s.push(n[0]);
            return s
        }
        ,
        t.prototype.getProvisionalElements = function() {
            var t, e, n, r, i, o, s;
            for (e in n = [],
            r = this.elements)
                s = (i = r[e]).type,
                o = i.tracked,
                t = i.elements,
                null != s || o ? 1 < t.length && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
            return n
        }
        ,
        u = function(t) {
            return e(t) ? "script" : n(t) ? "stylesheet" : void 0
        }
        ,
        a = function(t) {
            return "reload" === t.getAttribute("data-turbolinks-track")
        }
        ,
        e = function(t) {
            return "script" === t.tagName.toLowerCase()
        }
        ,
        n = function(t) {
            var e;
            return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
        }
        ,
        t
    }()
}
.call(this),
function() {
    var n = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var r in e)
            i.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }
      , i = {}.hasOwnProperty;
    Turbolinks.SnapshotRenderer = function(t) {
        function e(t, e, n) {
            this.currentSnapshot = t,
            this.newSnapshot = e,
            this.isPreview = n,
            this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head),
            this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head),
            this.newBody = this.newSnapshot.body
        }
        return n(e, t),
        e.prototype.render = function(t) {
            return this.shouldRender() ? (this.mergeHead(),
            this.renderView((e = this,
            function() {
                return e.replaceBody(),
                e.isPreview || e.focusFirstAutofocusableElement(),
                t()
            }
            ))) : this.invalidateView();
            var e
        }
        ,
        e.prototype.mergeHead = function() {
            return this.copyNewHeadStylesheetElements(),
            this.copyNewHeadScriptElements(),
            this.removeCurrentHeadProvisionalElements(),
            this.copyNewHeadProvisionalElements()
        }
        ,
        e.prototype.replaceBody = function() {
            return this.activateBodyScriptElements(),
            this.importBodyPermanentElements(),
            this.assignNewBody()
        }
        ,
        e.prototype.shouldRender = function() {
            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
        }
        ,
        e.prototype.trackedElementsAreIdentical = function() {
            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
        }
        ,
        e.prototype.copyNewHeadStylesheetElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadStylesheetElements()).length; e < n; e++)
                t = r[e],
                i.push(document.head.appendChild(t));
            return i
        }
        ,
        e.prototype.copyNewHeadScriptElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadScriptElements()).length; e < n; e++)
                t = r[e],
                i.push(document.head.appendChild(this.createScriptElement(t)));
            return i
        }
        ,
        e.prototype.removeCurrentHeadProvisionalElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getCurrentHeadProvisionalElements()).length; e < n; e++)
                t = r[e],
                i.push(document.head.removeChild(t));
            return i
        }
        ,
        e.prototype.copyNewHeadProvisionalElements = function() {
            var t, e, n, r, i;
            for (i = [],
            e = 0,
            n = (r = this.getNewHeadProvisionalElements()).length; e < n; e++)
                t = r[e],
                i.push(document.head.appendChild(t));
            return i
        }
        ,
        e.prototype.importBodyPermanentElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getNewBodyPermanentElements()).length; e < n; e++)
                i = r[e],
                (t = this.findCurrentBodyPermanentElement(i)) ? o.push(i.parentNode.replaceChild(t, i)) : o.push(void 0);
            return o
        }
        ,
        e.prototype.activateBodyScriptElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getNewBodyScriptElements()).length; e < n; e++)
                i = r[e],
                t = this.createScriptElement(i),
                o.push(i.parentNode.replaceChild(t, i));
            return o
        }
        ,
        e.prototype.assignNewBody = function() {
            return document.body = this.newBody
        }
        ,
        e.prototype.focusFirstAutofocusableElement = function() {
            var t;
            return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
        }
        ,
        e.prototype.getNewHeadStylesheetElements = function() {
            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
        }
        ,
        e.prototype.getNewHeadScriptElements = function() {
            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
        }
        ,
        e.prototype.getCurrentHeadProvisionalElements = function() {
            return this.currentHeadDetails.getProvisionalElements()
        }
        ,
        e.prototype.getNewHeadProvisionalElements = function() {
            return this.newHeadDetails.getProvisionalElements()
        }
        ,
        e.prototype.getNewBodyPermanentElements = function() {
            return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
        }
        ,
        e.prototype.findCurrentBodyPermanentElement = function(t) {
            return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
        }
        ,
        e.prototype.getNewBodyScriptElements = function() {
            return this.newBody.querySelectorAll("script")
        }
        ,
        e.prototype.findFirstAutofocusableElement = function() {
            return document.body.querySelector("[autofocus]")
        }
        ,
        e
    }(Turbolinks.Renderer)
}
.call(this),
function() {
    var n = function(t, e) {
        function n() {
            this.constructor = t
        }
        for (var r in e)
            i.call(e, r) && (t[r] = e[r]);
        return n.prototype = e.prototype,
        t.prototype = new n,
        t.__super__ = e.prototype,
        t
    }
      , i = {}.hasOwnProperty;
    Turbolinks.ErrorRenderer = function(t) {
        function e(t) {
            this.html = t
        }
        return n(e, t),
        e.prototype.render = function(t) {
            return this.renderView((e = this,
            function() {
                return e.replaceDocumentHTML(),
                e.activateBodyScriptElements(),
                t()
            }
            ));
            var e
        }
        ,
        e.prototype.replaceDocumentHTML = function() {
            return document.documentElement.innerHTML = this.html
        }
        ,
        e.prototype.activateBodyScriptElements = function() {
            var t, e, n, r, i, o;
            for (o = [],
            e = 0,
            n = (r = this.getScriptElements()).length; e < n; e++)
                i = r[e],
                t = this.createScriptElement(i),
                o.push(i.parentNode.replaceChild(t, i));
            return o
        }
        ,
        e.prototype.getScriptElements = function() {
            return document.documentElement.querySelectorAll("script")
        }
        ,
        e
    }(Turbolinks.Renderer)
}
.call(this),
function() {
    Turbolinks.View = function() {
        function t(t) {
            this.delegate = t,
            this.element = document.documentElement
        }
        return t.prototype.getRootLocation = function() {
            return this.getSnapshot().getRootLocation()
        }
        ,
        t.prototype.getElementForAnchor = function(t) {
            return this.getSnapshot().getElementForAnchor(t)
        }
        ,
        t.prototype.getSnapshot = function() {
            return Turbolinks.Snapshot.fromElement(this.element)
        }
        ,
        t.prototype.render = function(t, e) {
            var n, r, i;
            return i = t.snapshot,
            n = t.error,
            r = t.isPreview,
            this.markAsPreview(r),
            null != i ? this.renderSnapshot(i, r, e) : this.renderError(n, e)
        }
        ,
        t.prototype.markAsPreview = function(t) {
            return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
        }
        ,
        t.prototype.renderSnapshot = function(t, e, n) {
            return Turbolinks.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), Turbolinks.Snapshot.wrap(t), e)
        }
        ,
        t.prototype.renderError = function(t, e) {
            return Turbolinks.ErrorRenderer.render(this.delegate, e, t)
        }
        ,
        t
    }()
}
.call(this),
function() {
    var e = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.ScrollManager = function() {
        function t(t) {
            this.delegate = t,
            this.onScroll = e(this.onScroll, this),
            this.onScroll = Turbolinks.throttle(this.onScroll)
        }
        return t.prototype.start = function() {
            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1),
            this.onScroll(),
            this.started = !0)
        }
        ,
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("scroll", this.onScroll, !1),
            this.started = !1) : void 0
        }
        ,
        t.prototype.scrollToElement = function(t) {
            return t.scrollIntoView()
        }
        ,
        t.prototype.scrollToPosition = function(t) {
            var e, n;
            return e = t.x,
            n = t.y,
            window.scrollTo(e, n)
        }
        ,
        t.prototype.onScroll = function() {
            return this.updatePosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            })
        }
        ,
        t.prototype.updatePosition = function(t) {
            var e;
            return this.position = t,
            null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
        }
        ,
        t
    }()
}
.call(this),
function() {
    Turbolinks.SnapshotCache = function() {
        function t(t) {
            this.size = t,
            this.keys = [],
            this.snapshots = {}
        }
        var r;
        return t.prototype.has = function(t) {
            return r(t)in this.snapshots
        }
        ,
        t.prototype.get = function(t) {
            var e;
            if (this.has(t))
                return e = this.read(t),
                this.touch(t),
                e
        }
        ,
        t.prototype.put = function(t, e) {
            return this.write(t, e),
            this.touch(t),
            e
        }
        ,
        t.prototype.read = function(t) {
            var e;
            return e = r(t),
            this.snapshots[e]
        }
        ,
        t.prototype.write = function(t, e) {
            var n;
            return n = r(t),
            this.snapshots[n] = e
        }
        ,
        t.prototype.touch = function(t) {
            var e, n;
            return n = r(t),
            -1 < (e = this.keys.indexOf(n)) && this.keys.splice(e, 1),
            this.keys.unshift(n),
            this.trim()
        }
        ,
        t.prototype.trim = function() {
            var t, e, n, r, i;
            for (i = [],
            t = 0,
            n = (r = this.keys.splice(this.size)).length; t < n; t++)
                e = r[t],
                i.push(delete this.snapshots[e]);
            return i
        }
        ,
        r = function(t) {
            return Turbolinks.Location.wrap(t).toCacheKey()
        }
        ,
        t
    }()
}
.call(this),
function() {
    var r = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.Visit = function() {
        function t(t, e, n) {
            this.controller = t,
            this.action = n,
            this.performScroll = r(this.performScroll, this),
            this.identifier = Turbolinks.uuid(),
            this.location = Turbolinks.Location.wrap(e),
            this.adapter = this.controller.adapter,
            this.state = "initialized",
            this.timingMetrics = {}
        }
        var n;
        return t.prototype.start = function() {
            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"),
            this.state = "started",
            this.adapter.visitStarted(this)) : void 0
        }
        ,
        t.prototype.cancel = function() {
            var t;
            return "started" === this.state ? (null != (t = this.request) && t.cancel(),
            this.cancelRender(),
            this.state = "canceled") : void 0
        }
        ,
        t.prototype.complete = function() {
            var t;
            return "started" === this.state ? (this.recordTimingMetric("visitEnd"),
            this.state = "completed",
            "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this),
            this.controller.visitCompleted(this)) : void 0
        }
        ,
        t.prototype.fail = function() {
            var t;
            return "started" === this.state ? (this.state = "failed",
            "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
        }
        ,
        t.prototype.changeHistory = function() {
            var t, e;
            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action,
            e = n(t),
            this.controller[e](this.location, this.restorationIdentifier),
            this.historyChanged = !0)
        }
        ,
        t.prototype.issueRequest = function() {
            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0,
            this.request = new Turbolinks.HttpRequest(this,this.location,this.referrer),
            this.request.send()) : void 0
        }
        ,
        t.prototype.getCachedSnapshot = function() {
            var t;
            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
        }
        ,
        t.prototype.hasCachedSnapshot = function() {
            return null != this.getCachedSnapshot()
        }
        ,
        t.prototype.loadCachedSnapshot = function() {
            var e, n;
            return (n = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(),
            this.render(function() {
                var t;
                return this.cacheSnapshot(),
                this.controller.render({
                    snapshot: n,
                    isPreview: e
                }, this.performScroll),
                "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this),
                e ? void 0 : this.complete()
            })) : void 0
        }
        ,
        t.prototype.loadResponse = function() {
            return null != this.response ? this.render(function() {
                var t, e;
                return this.cacheSnapshot(),
                this.request.failed ? (this.controller.render({
                    error: this.response
                }, this.performScroll),
                "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this),
                this.fail()) : (this.controller.render({
                    snapshot: this.response
                }, this.performScroll),
                "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this),
                this.complete())
            }) : void 0
        }
        ,
        t.prototype.followRedirect = function() {
            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation,
            this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier),
            this.followedRedirect = !0) : void 0
        }
        ,
        t.prototype.requestStarted = function() {
            var t;
            return this.recordTimingMetric("requestStart"),
            "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
        }
        ,
        t.prototype.requestProgressed = function(t) {
            var e;
            return this.progress = t,
            "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
        }
        ,
        t.prototype.requestCompletedWithResponse = function(t, e) {
            return this.response = t,
            null != e && (this.redirectedToLocation = Turbolinks.Location.wrap(e)),
            this.adapter.visitRequestCompleted(this)
        }
        ,
        t.prototype.requestFailedWithStatusCode = function(t, e) {
            return this.response = e,
            this.adapter.visitRequestFailedWithStatusCode(this, t)
        }
        ,
        t.prototype.requestFinished = function() {
            var t;
            return this.recordTimingMetric("requestEnd"),
            "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
        }
        ,
        t.prototype.performScroll = function() {
            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(),
            this.scrolled = !0)
        }
        ,
        t.prototype.scrollToRestoredPosition = function() {
            var t, e;
            return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t),
            !0) : void 0
        }
        ,
        t.prototype.scrollToAnchor = function() {
            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor),
            !0) : void 0
        }
        ,
        t.prototype.scrollToTop = function() {
            return this.controller.scrollToPosition({
                x: 0,
                y: 0
            })
        }
        ,
        t.prototype.recordTimingMetric = function(t) {
            var e;
            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
        }
        ,
        t.prototype.getTimingMetrics = function() {
            return Turbolinks.copyObject(this.timingMetrics)
        }
        ,
        n = function(t) {
            switch (t) {
            case "replace":
                return "replaceHistoryWithLocationAndRestorationIdentifier";
            case "advance":
            case "restore":
                return "pushHistoryWithLocationAndRestorationIdentifier"
            }
        }
        ,
        t.prototype.shouldIssueRequest = function() {
            return "restore" !== this.action || !this.hasCachedSnapshot()
        }
        ,
        t.prototype.cacheSnapshot = function() {
            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(),
            this.snapshotCached = !0)
        }
        ,
        t.prototype.render = function(t) {
            return this.cancelRender(),
            this.frame = requestAnimationFrame((e = this,
            function() {
                return e.frame = null,
                t.call(e)
            }
            ));
            var e
        }
        ,
        t.prototype.cancelRender = function() {
            return this.frame ? cancelAnimationFrame(this.frame) : void 0
        }
        ,
        t
    }()
}
.call(this),
function() {
    var e = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    };
    Turbolinks.Controller = function() {
        function t() {
            this.clickBubbled = e(this.clickBubbled, this),
            this.clickCaptured = e(this.clickCaptured, this),
            this.pageLoaded = e(this.pageLoaded, this),
            this.history = new Turbolinks.History(this),
            this.view = new Turbolinks.View(this),
            this.scrollManager = new Turbolinks.ScrollManager(this),
            this.restorationData = {},
            this.clearCache(),
            this.setProgressBarDelay(500)
        }
        return t.prototype.start = function() {
            return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0),
            addEventListener("DOMContentLoaded", this.pageLoaded, !1),
            this.scrollManager.start(),
            this.startHistory(),
            this.started = !0,
            this.enabled = !0) : void 0
        }
        ,
        t.prototype.disable = function() {
            return this.enabled = !1
        }
        ,
        t.prototype.stop = function() {
            return this.started ? (removeEventListener("click", this.clickCaptured, !0),
            removeEventListener("DOMContentLoaded", this.pageLoaded, !1),
            this.scrollManager.stop(),
            this.stopHistory(),
            this.started = !1) : void 0
        }
        ,
        t.prototype.clearCache = function() {
            return this.cache = new Turbolinks.SnapshotCache(10)
        }
        ,
        t.prototype.visit = function(t, e) {
            var n, r;
            return null == e && (e = {}),
            t = Turbolinks.Location.wrap(t),
            this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (r = e.action) ? r : "advance",
            this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0
        }
        ,
        t.prototype.startVisitToLocationWithAction = function(t, e, n) {
            var r;
            return Turbolinks.supported ? (r = this.getRestorationDataForIdentifier(n),
            this.startVisit(t, e, {
                restorationData: r
            })) : window.location = t
        }
        ,
        t.prototype.setProgressBarDelay = function(t) {
            return this.progressBarDelay = t
        }
        ,
        t.prototype.startHistory = function() {
            return this.location = Turbolinks.Location.wrap(window.location),
            this.restorationIdentifier = Turbolinks.uuid(),
            this.history.start(),
            this.history.replace(this.location, this.restorationIdentifier)
        }
        ,
        t.prototype.stopHistory = function() {
            return this.history.stop()
        }
        ,
        t.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, e) {
            return this.restorationIdentifier = e,
            this.location = Turbolinks.Location.wrap(t),
            this.history.push(this.location, this.restorationIdentifier)
        }
        ,
        t.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, e) {
            return this.restorationIdentifier = e,
            this.location = Turbolinks.Location.wrap(t),
            this.history.replace(this.location, this.restorationIdentifier)
        }
        ,
        t.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, e) {
            var n;
            return this.restorationIdentifier = e,
            this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier),
            this.startVisit(t, "restore", {
                restorationIdentifier: this.restorationIdentifier,
                restorationData: n,
                historyChanged: !0
            }),
            this.location = Turbolinks.Location.wrap(t)) : this.adapter.pageInvalidated()
        }
        ,
        t.prototype.getCachedSnapshotForLocation = function(t) {
            var e;
            return (e = this.cache.get(t)) ? e.clone() : void 0
        }
        ,
        t.prototype.shouldCacheSnapshot = function() {
            return this.view.getSnapshot().isCacheable()
        }
        ,
        t.prototype.cacheSnapshot = function() {
            var t;
            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(),
            t = this.view.getSnapshot(),
            this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
        }
        ,
        t.prototype.scrollToAnchor = function(t) {
            var e;
            return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                x: 0,
                y: 0
            })
        }
        ,
        t.prototype.scrollToElement = function(t) {
            return this.scrollManager.scrollToElement(t)
        }
        ,
        t.prototype.scrollToPosition = function(t) {
            return this.scrollManager.scrollToPosition(t)
        }
        ,
        t.prototype.scrollPositionChanged = function(t) {
            return this.getCurrentRestorationData().scrollPosition = t
        }
        ,
        t.prototype.render = function(t, e) {
            return this.view.render(t, e)
        }
        ,
        t.prototype.viewInvalidated = function() {
            return this.adapter.pageInvalidated()
        }
        ,
        t.prototype.viewWillRender = function(t) {
            return this.notifyApplicationBeforeRender(t)
        }
        ,
        t.prototype.viewRendered = function() {
            return this.lastRenderedLocation = this.currentVisit.location,
            this.notifyApplicationAfterRender()
        }
        ,
        t.prototype.pageLoaded = function() {
            return this.lastRenderedLocation = this.location,
            this.notifyApplicationAfterPageLoad()
        }
        ,
        t.prototype.clickCaptured = function() {
            return removeEventListener("click", this.clickBubbled, !1),
            addEventListener("click", this.clickBubbled, !1)
        }
        ,
        t.prototype.clickBubbled = function(t) {
            var e, n, r;
            return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (t.preventDefault(),
            e = this.getActionForLink(n),
            this.visit(r, {
                action: e
            })) : void 0
        }
        ,
        t.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
            return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
        }
        ,
        t.prototype.applicationAllowsVisitingLocation = function(t) {
            return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
        }
        ,
        t.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, e) {
            return Turbolinks.dispatch("turbolinks:click", {
                target: t,
                data: {
                    url: e.absoluteURL
                },
                cancelable: !0
            })
        }
        ,
        t.prototype.notifyApplicationBeforeVisitingLocation = function(t) {
            return Turbolinks.dispatch("turbolinks:before-visit", {
                data: {
                    url: t.absoluteURL
                },
                cancelable: !0
            })
        }
        ,
        t.prototype.notifyApplicationAfterVisitingLocation = function(t) {
            return Turbolinks.dispatch("turbolinks:visit", {
                data: {
                    url: t.absoluteURL
                }
            })
        }
        ,
        t.prototype.notifyApplicationBeforeCachingSnapshot = function() {
            return Turbolinks.dispatch("turbolinks:before-cache")
        }
        ,
        t.prototype.notifyApplicationBeforeRender = function(t) {
            return Turbolinks.dispatch("turbolinks:before-render", {
                data: {
                    newBody: t
                }
            })
        }
        ,
        t.prototype.notifyApplicationAfterRender = function() {
            return Turbolinks.dispatch("turbolinks:render")
        }
        ,
        t.prototype.notifyApplicationAfterPageLoad = function(t) {
            return null == t && (t = {}),
            Turbolinks.dispatch("turbolinks:load", {
                data: {
                    url: this.location.absoluteURL,
                    timing: t
                }
            })
        }
        ,
        t.prototype.startVisit = function(t, e, n) {
            var r;
            return null != (r = this.currentVisit) && r.cancel(),
            this.currentVisit = this.createVisit(t, e, n),
            this.currentVisit.start(),
            this.notifyApplicationAfterVisitingLocation(t)
        }
        ,
        t.prototype.createVisit = function(t, e, n) {
            var r, i, o, s, a;
            return s = (i = null != n ? n : {}).restorationIdentifier,
            o = i.restorationData,
            r = i.historyChanged,
            (a = new Turbolinks.Visit(this,t,e)).restorationIdentifier = null != s ? s : Turbolinks.uuid(),
            a.restorationData = Turbolinks.copyObject(o),
            a.historyChanged = r,
            a.referrer = this.location,
            a
        }
        ,
        t.prototype.visitCompleted = function(t) {
            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
        }
        ,
        t.prototype.clickEventIsSignificant = function(t) {
            return !(t.defaultPrevented || t.target.isContentEditable || 1 < t.which || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
        }
        ,
        t.prototype.getVisitableLinkForNode = function(t) {
            return this.nodeIsVisitable(t) ? Turbolinks.closest(t, "a[href]:not([target]):not([download])") : void 0
        }
        ,
        t.prototype.getVisitableLocationForLink = function(t) {
            var e;
            return e = new Turbolinks.Location(t.getAttribute("href")),
            this.locationIsVisitable(e) ? e : void 0
        }
        ,
        t.prototype.getActionForLink = function(t) {
            var e;
            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
        }
        ,
        t.prototype.nodeIsVisitable = function(t) {
            var e;
            return !(e = Turbolinks.closest(t, "[data-turbolinks]")) || "false" !== e.getAttribute("data-turbolinks")
        }
        ,
        t.prototype.locationIsVisitable = function(t) {
            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
        }
        ,
        t.prototype.getCurrentRestorationData = function() {
            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
        }
        ,
        t.prototype.getRestorationDataForIdentifier = function(t) {
            var e;
            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
        }
        ,
        t
    }()
}
.call(this),
function() {
    !function() {
        var t, e;
        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
            for (; t = t.parentNode; )
                if (t === document.body)
                    return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
    }()
}
.call(this),
function() {
    var t, e, n;
    Turbolinks.start = function() {
        return e() ? (null == Turbolinks.controller && (Turbolinks.controller = t()),
        Turbolinks.controller.start()) : void 0
    }
    ,
    e = function() {
        return null == window.Turbolinks && (window.Turbolinks = Turbolinks),
        n()
    }
    ,
    t = function() {
        var t;
        return (t = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(t),
        t
    }
    ,
    (n = function() {
        return window.Turbolinks === Turbolinks
    }
    )() && Turbolinks.start()
}
.call(this),
function() {
    var t = this;
    (function() {
        (function() {
            var n = [].slice;
            this.ActionCable = {
                INTERNAL: {
                    message_types: {
                        welcome: "welcome",
                        ping: "ping",
                        confirmation: "confirm_subscription",
                        rejection: "reject_subscription"
                    },
                    default_mount_path: "/cable",
                    protocols: ["actioncable-v1-json", "actioncable-unsupported"]
                },
                WebSocket: window.WebSocket,
                logger: window.console,
                createConsumer: function(t) {
                    var e;
                    return null == t && (t = null != (e = this.getConfig("url")) ? e : this.INTERNAL.default_mount_path),
                    new u.Consumer(this.createWebSocketURL(t))
                },
                getConfig: function(t) {
                    var e;
                    return null != (e = document.head.querySelector("meta[name='action-cable-" + t + "']")) ? e.getAttribute("content") : void 0
                },
                createWebSocketURL: function(t) {
                    var e;
                    return t && !/^wss?:/i.test(t) ? ((e = document.createElement("a")).href = t,
                    e.href = e.href,
                    e.protocol = e.protocol.replace("http", "ws"),
                    e.href) : t
                },
                startDebugging: function() {
                    return this.debugging = !0
                },
                stopDebugging: function() {
                    return this.debugging = null
                },
                log: function() {
                    var t, e;
                    if (t = 1 <= arguments.length ? n.call(arguments, 0) : [],
                    this.debugging)
                        return t.push(Date.now()),
                        (e = this.logger).log.apply(e, ["[ActionCable]"].concat(n.call(t)))
                }
            }
        }
        ).call(this)
    }
    ).call(t);
    var u = t.ActionCable;
    (function() {
        (function() {
            var r = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
            u.ConnectionMonitor = function() {
                function t(t) {
                    this.connection = t,
                    this.visibilityDidChange = r(this.visibilityDidChange, this),
                    this.reconnectAttempts = 0
                }
                var i, e, n;
                return t.pollInterval = {
                    min: 3,
                    max: 30
                },
                t.staleThreshold = 6,
                t.prototype.start = function() {
                    if (!this.isRunning())
                        return this.startedAt = e(),
                        delete this.stoppedAt,
                        this.startPolling(),
                        document.addEventListener("visibilitychange", this.visibilityDidChange),
                        u.log("ConnectionMonitor started. pollInterval = " + this.getPollInterval() + " ms")
                }
                ,
                t.prototype.stop = function() {
                    if (this.isRunning())
                        return this.stoppedAt = e(),
                        this.stopPolling(),
                        document.removeEventListener("visibilitychange", this.visibilityDidChange),
                        u.log("ConnectionMonitor stopped")
                }
                ,
                t.prototype.isRunning = function() {
                    return null != this.startedAt && null == this.stoppedAt
                }
                ,
                t.prototype.recordPing = function() {
                    return this.pingedAt = e()
                }
                ,
                t.prototype.recordConnect = function() {
                    return this.reconnectAttempts = 0,
                    this.recordPing(),
                    delete this.disconnectedAt,
                    u.log("ConnectionMonitor recorded connect")
                }
                ,
                t.prototype.recordDisconnect = function() {
                    return this.disconnectedAt = e(),
                    u.log("ConnectionMonitor recorded disconnect")
                }
                ,
                t.prototype.startPolling = function() {
                    return this.stopPolling(),
                    this.poll()
                }
                ,
                t.prototype.stopPolling = function() {
                    return clearTimeout(this.pollTimeout)
                }
                ,
                t.prototype.poll = function() {
                    return this.pollTimeout = setTimeout((t = this,
                    function() {
                        return t.reconnectIfStale(),
                        t.poll()
                    }
                    ), this.getPollInterval());
                    var t
                }
                ,
                t.prototype.getPollInterval = function() {
                    var t, e, n, r;
                    return n = (r = this.constructor.pollInterval).min,
                    e = r.max,
                    t = 5 * Math.log(this.reconnectAttempts + 1),
                    Math.round(1e3 * i(t, n, e))
                }
                ,
                t.prototype.reconnectIfStale = function() {
                    if (this.connectionIsStale())
                        return u.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + this.getPollInterval() + " ms, time disconnected = " + n(this.disconnectedAt) + " s, stale threshold = " + this.constructor.staleThreshold + " s"),
                        this.reconnectAttempts++,
                        this.disconnectedRecently() ? u.log("ConnectionMonitor skipping reopening recent disconnect") : (u.log("ConnectionMonitor reopening"),
                        this.connection.reopen())
                }
                ,
                t.prototype.connectionIsStale = function() {
                    var t;
                    return n(null != (t = this.pingedAt) ? t : this.startedAt) > this.constructor.staleThreshold
                }
                ,
                t.prototype.disconnectedRecently = function() {
                    return this.disconnectedAt && n(this.disconnectedAt) < this.constructor.staleThreshold
                }
                ,
                t.prototype.visibilityDidChange = function() {
                    if ("visible" === document.visibilityState)
                        return setTimeout((t = this,
                        function() {
                            if (t.connectionIsStale() || !t.connection.isOpen())
                                return u.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState),
                                t.connection.reopen()
                        }
                        ), 200);
                    var t
                }
                ,
                e = function() {
                    return (new Date).getTime()
                }
                ,
                n = function(t) {
                    return (e() - t) / 1e3
                }
                ,
                i = function(t, e, n) {
                    return Math.max(e, Math.min(n, t))
                }
                ,
                t
            }()
        }
        ).call(this),
        function() {
            var t, i, e, n, r, o = [].slice, s = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }, a = [].indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (e in this && this[e] === t)
                        return e;
                return -1
            }
            ;
            n = u.INTERNAL,
            i = n.message_types,
            e = n.protocols,
            r = 2 <= e.length ? o.call(e, 0, t = e.length - 1) : (t = 0,
            []),
            e[t++],
            u.Connection = function() {
                function t(t) {
                    this.consumer = t,
                    this.open = s(this.open, this),
                    this.subscriptions = this.consumer.subscriptions,
                    this.monitor = new u.ConnectionMonitor(this),
                    this.disconnected = !0
                }
                return t.reopenDelay = 500,
                t.prototype.send = function(t) {
                    return !!this.isOpen() && (this.webSocket.send(JSON.stringify(t)),
                    !0)
                }
                ,
                t.prototype.open = function() {
                    return this.isActive() ? (u.log("Attempted to open WebSocket, but existing socket is " + this.getState()),
                    !1) : (u.log("Opening WebSocket, current state is " + this.getState() + ", subprotocols: " + e),
                    null != this.webSocket && this.uninstallEventHandlers(),
                    this.webSocket = new u.WebSocket(this.consumer.url,e),
                    this.installEventHandlers(),
                    this.monitor.start(),
                    !0)
                }
                ,
                t.prototype.close = function(t) {
                    var e;
                    if ((null != t ? t : {
                        allowReconnect: !0
                    }).allowReconnect || this.monitor.stop(),
                    this.isActive())
                        return null != (e = this.webSocket) ? e.close() : void 0
                }
                ,
                t.prototype.reopen = function() {
                    var t;
                    if (u.log("Reopening WebSocket, current state is " + this.getState()),
                    !this.isActive())
                        return this.open();
                    try {
                        return this.close()
                    } catch (e) {
                        return t = e,
                        u.log("Failed to reopen WebSocket", t)
                    } finally {
                        u.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms"),
                        setTimeout(this.open, this.constructor.reopenDelay)
                    }
                }
                ,
                t.prototype.getProtocol = function() {
                    var t;
                    return null != (t = this.webSocket) ? t.protocol : void 0
                }
                ,
                t.prototype.isOpen = function() {
                    return this.isState("open")
                }
                ,
                t.prototype.isActive = function() {
                    return this.isState("open", "connecting")
                }
                ,
                t.prototype.isProtocolSupported = function() {
                    var t;
                    return t = this.getProtocol(),
                    0 <= a.call(r, t)
                }
                ,
                t.prototype.isState = function() {
                    var t, e;
                    return e = 1 <= arguments.length ? o.call(arguments, 0) : [],
                    t = this.getState(),
                    0 <= a.call(e, t)
                }
                ,
                t.prototype.getState = function() {
                    var t, e;
                    for (e in WebSocket)
                        if (WebSocket[e] === (null != (t = this.webSocket) ? t.readyState : void 0))
                            return e.toLowerCase();
                    return null
                }
                ,
                t.prototype.installEventHandlers = function() {
                    var t, e;
                    for (t in this.events)
                        e = this.events[t].bind(this),
                        this.webSocket["on" + t] = e
                }
                ,
                t.prototype.uninstallEventHandlers = function() {
                    var t;
                    for (t in this.events)
                        this.webSocket["on" + t] = function() {}
                }
                ,
                t.prototype.events = {
                    message: function(t) {
                        var e, n, r;
                        if (this.isProtocolSupported())
                            switch (e = (r = JSON.parse(t.data)).identifier,
                            n = r.message,
                            r.type) {
                            case i.welcome:
                                return this.monitor.recordConnect(),
                                this.subscriptions.reload();
                            case i.ping:
                                return this.monitor.recordPing();
                            case i.confirmation:
                                return this.subscriptions.notify(e, "connected");
                            case i.rejection:
                                return this.subscriptions.reject(e);
                            default:
                                return this.subscriptions.notify(e, "received", n)
                            }
                    },
                    open: function() {
                        if (u.log("WebSocket onopen event, using '" + this.getProtocol() + "' subprotocol"),
                        this.disconnected = !1,
                        !this.isProtocolSupported())
                            return u.log("Protocol is unsupported. Stopping monitor and disconnecting."),
                            this.close({
                                allowReconnect: !1
                            })
                    },
                    close: function() {
                        if (u.log("WebSocket onclose event"),
                        !this.disconnected)
                            return this.disconnected = !0,
                            this.monitor.recordDisconnect(),
                            this.subscriptions.notifyAll("disconnected", {
                                willAttemptReconnect: this.monitor.isRunning()
                            })
                    },
                    error: function() {
                        return u.log("WebSocket onerror event")
                    }
                },
                t
            }()
        }
        .call(this),
        function() {
            var l = [].slice;
            u.Subscriptions = function() {
                function t(t) {
                    this.consumer = t,
                    this.subscriptions = []
                }
                return t.prototype.create = function(t, e) {
                    var n, r, i;
                    return r = "object" == typeof (n = t) ? n : {
                        channel: n
                    },
                    i = new u.Subscription(this.consumer,r,e),
                    this.add(i)
                }
                ,
                t.prototype.add = function(t) {
                    return this.subscriptions.push(t),
                    this.consumer.ensureActiveConnection(),
                    this.notify(t, "initialized"),
                    this.sendCommand(t, "subscribe"),
                    t
                }
                ,
                t.prototype.remove = function(t) {
                    return this.forget(t),
                    this.findAll(t.identifier).length || this.sendCommand(t, "unsubscribe"),
                    t
                }
                ,
                t.prototype.reject = function(t) {
                    var e, n, r, i, o;
                    for (i = [],
                    e = 0,
                    n = (r = this.findAll(t)).length; e < n; e++)
                        o = r[e],
                        this.forget(o),
                        this.notify(o, "rejected"),
                        i.push(o);
                    return i
                }
                ,
                t.prototype.forget = function(i) {
                    var o;
                    return this.subscriptions = function() {
                        var t, e, n, r;
                        for (r = [],
                        t = 0,
                        e = (n = this.subscriptions).length; t < e; t++)
                            (o = n[t]) !== i && r.push(o);
                        return r
                    }
                    .call(this),
                    i
                }
                ,
                t.prototype.findAll = function(t) {
                    var e, n, r, i, o;
                    for (i = [],
                    e = 0,
                    n = (r = this.subscriptions).length; e < n; e++)
                        (o = r[e]).identifier === t && i.push(o);
                    return i
                }
                ,
                t.prototype.reload = function() {
                    var t, e, n, r, i;
                    for (r = [],
                    t = 0,
                    e = (n = this.subscriptions).length; t < e; t++)
                        i = n[t],
                        r.push(this.sendCommand(i, "subscribe"));
                    return r
                }
                ,
                t.prototype.notifyAll = function(t) {
                    var e, n, r, i, o, s, a;
                    for (n = t,
                    e = 2 <= arguments.length ? l.call(arguments, 1) : [],
                    s = [],
                    r = 0,
                    i = (o = this.subscriptions).length; r < i; r++)
                        a = o[r],
                        s.push(this.notify.apply(this, [a, n].concat(l.call(e))));
                    return s
                }
                ,
                t.prototype.notify = function(t, e) {
                    var n, r, i, o, s, a, u;
                    for (a = t,
                    r = e,
                    n = 3 <= arguments.length ? l.call(arguments, 2) : [],
                    s = [],
                    i = 0,
                    o = (u = "string" == typeof a ? this.findAll(a) : [a]).length; i < o; i++)
                        a = u[i],
                        s.push("function" == typeof a[r] ? a[r].apply(a, n) : void 0);
                    return s
                }
                ,
                t.prototype.sendCommand = function(t, e) {
                    var n;
                    return n = t.identifier,
                    this.consumer.send({
                        command: e,
                        identifier: n
                    })
                }
                ,
                t
            }()
        }
        .call(this),
        function() {
            u.Subscription = function() {
                function t(t, e, n) {
                    this.consumer = t,
                    null == e && (e = {}),
                    this.identifier = JSON.stringify(e),
                    r(this, n)
                }
                var r;
                return t.prototype.perform = function(t, e) {
                    return null == e && (e = {}),
                    e.action = t,
                    this.send(e)
                }
                ,
                t.prototype.send = function(t) {
                    return this.consumer.send({
                        command: "message",
                        identifier: this.identifier,
                        data: JSON.stringify(t)
                    })
                }
                ,
                t.prototype.unsubscribe = function() {
                    return this.consumer.subscriptions.remove(this)
                }
                ,
                r = function(t, e) {
                    var n, r;
                    if (null != e)
                        for (n in e)
                            r = e[n],
                            t[n] = r;
                    return t
                }
                ,
                t
            }()
        }
        .call(this),
        function() {
            u.Consumer = function() {
                function t(t) {
                    this.url = t,
                    this.subscriptions = new u.Subscriptions(this),
                    this.connection = new u.Connection(this)
                }
                return t.prototype.send = function(t) {
                    return this.connection.send(t)
                }
                ,
                t.prototype.connect = function() {
                    return this.connection.open()
                }
                ,
                t.prototype.disconnect = function() {
                    return this.connection.close({
                        allowReconnect: !1
                    })
                }
                ,
                t.prototype.ensureActiveConnection = function() {
                    if (!this.connection.isActive())
                        return this.connection.open()
                }
                ,
                t
            }()
        }
        .call(this)
    }
    ).call(this),
    "object" == typeof module && module.exports ? module.exports = u : "function" == typeof define && define.amd && define(u)
}
.call(this),
function() {
    this.App || (this.App = {}),
    App.cable = ActionCable.createConsumer()
}
.call(this),
Array.prototype.diff = function(e) {
    return this.filter(function(t) {
        return e.indexOf(t) < 0
    })
}
,
ready_run_once = function() {
    $.makeArray($("#usertable tr[id]").map(function() {
        return this.id
    }));
    $(document).on("click", "#search_submit", function(t) {
        t.preventDefault(),
        $.ajax({
            url: $(this).attr("href"),
            data: {
                query: $("#search").val()
            },
            success: function(t) {
                var n = t.ids.map(function(t) {
                    return "#userNum" + t
                });
                $("#usertable tr[id]").each(function(t, e) {
                    IsIdInArray(n, e.id) ? $(e).fadeIn() : $(e).fadeOut()
                })
            }
        })
    })
}
,
$(document).ready(ready_run_once),
$(document).on("page:load", ready_run_once),
function() {}
.call(this);
