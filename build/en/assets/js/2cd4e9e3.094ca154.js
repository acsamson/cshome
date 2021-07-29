"use strict";
(self.webpackChunksamtools_cshome = self.webpackChunksamtools_cshome || []).push([
    [71], {
        3905: function (e, t, r) {
            r.d(t, {
                Zo: function () {
                    return l
                },
                kt: function () {
                    return m
                }
            });
            var n = r(7294);

            function o(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function (t) {
                        o(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var r, n, o = function (e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            var u = n.createContext({}),
                p = function (e) {
                    var t = n.useContext(u),
                        r = t;
                    return e && (r = "function" == typeof e ? e(t) : c(c({}, t), e)), r
                },
                l = function (e) {
                    var t = p(e.components);
                    return n.createElement(u.Provider, {
                        value: t
                    }, e.children)
                },
                s = {
                    inlineCode: "code",
                    wrapper: function (e) {
                        var t = e.children;
                        return n.createElement(n.Fragment, {}, t)
                    }
                },
                f = n.forwardRef((function (e, t) {
                    var r = e.components,
                        o = e.mdxType,
                        i = e.originalType,
                        u = e.parentName,
                        l = a(e, ["components", "mdxType", "originalType", "parentName"]),
                        f = p(r),
                        m = o,
                        d = f["".concat(u, ".").concat(m)] || f[m] || s[m] || i;
                    return r ? n.createElement(d, c(c({
                        ref: t
                    }, l), {}, {
                        components: r
                    })) : n.createElement(d, c({
                        ref: t
                    }, l))
                }));

            function m(e, t) {
                var r = arguments,
                    o = t && t.mdxType;
                if ("string" == typeof e || o) {
                    var i = r.length,
                        c = new Array(i);
                    c[0] = f;
                    var a = {};
                    for (var u in t) hasOwnProperty.call(t, u) && (a[u] = t[u]);
                    a.originalType = e, a.mdxType = "string" == typeof e ? e : o, c[1] = a;
                    for (var p = 2; p < i; p++) c[p] = r[p];
                    return n.createElement.apply(null, c)
                }
                return n.createElement.apply(null, r)
            }
            f.displayName = "MDXCreateElement"
        },
        1528: function (e, t, r) {
            r.r(t), r.d(t, {
                frontMatter: function () {
                    return a
                },
                contentTitle: function () {
                    return u
                },
                metadata: function () {
                    return p
                },
                toc: function () {
                    return l
                },
                default: function () {
                    return f
                }
            });
            var n = r(2122),
                o = r(9756),
                i = (r(7294), r(3905)),
                c = ["components"],
                a = {
                    id: "support",
                    title: "Need Help?"
                },
                u = void 0,
                p = {
                    unversionedId: "support",
                    id: "support",
                    isDocsHomePage: !1,
                    title: "Need Help?",
                    description: "dsa",
                    source: "@site/engineering/support.md",
                    sourceDirName: ".",
                    slug: "/support",
                    permalink: "/en/engineering/support",
                    editUrl: "https://github.com/acsamson/cshome/edit/master/engineering/support.md",
                    version: "current",
                    frontMatter: {
                        id: "support",
                        title: "Need Help?"
                    },
                    sidebar: "tutorialSidebar"
                },
                l = [],
                s = {
                    toc: l
                };

            function f(e) {
                var t = e.components,
                    r = (0, o.Z)(e, c);
                return (0, i.kt)("wrapper", (0, n.Z)({}, s, r, {
                    components: t,
                    mdxType: "MDXLayout"
                }), (0, i.kt)("p", null, "dsa"))
            }
            f.isMDXComponent = !0
        }
    }
]);