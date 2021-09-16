"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : undefined, function (T, e) {
  "use strict";
  function g(e) {
    return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
  }function y(e) {
    return null != e && e === e.window;
  }var t = [],
      n = Object.getPrototypeOf,
      s = t.slice,
      m = t.flat ? function (e) {
    return t.flat.call(e);
  } : function (e) {
    return t.concat.apply([], e);
  },
      u = t.push,
      i = t.indexOf,
      r = {},
      o = r.toString,
      v = r.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      x = {},
      C = T.document,
      c = { type: !0, src: !0, nonce: !0, noModule: !0 };function b(e, t, n) {
    var r,
        i,
        o = (n = n || C).createElement("script");if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }n.head.appendChild(o).parentNode.removeChild(o);
  }function h(e) {
    return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? r[o.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
  }var f = "3.6.0",
      E = function E(e, t) {
    return new E.fn.init(e, t);
  };function p(e) {
    var t = !!e && "length" in e && e.length,
        n = h(e);return !g(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }E.fn = E.prototype = { jquery: f, constructor: E, length: 0, toArray: function toArray() {
      return s.call(this);
    }, get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    }, pushStack: function pushStack(e) {
      e = E.merge(this.constructor(), e);return e.prevObject = this, e;
    }, each: function each(e) {
      return E.each(this, e);
    }, map: function map(n) {
      return this.pushStack(E.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    }, slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, even: function even() {
      return this.pushStack(E.grep(this, function (e, t) {
        return (t + 1) % 2;
      }));
    }, odd: function odd() {
      return this.pushStack(E.grep(this, function (e, t) {
        return t % 2;
      }));
    }, eq: function eq(e) {
      var t = this.length,
          e = +e + (e < 0 ? t : 0);return this.pushStack(0 <= e && e < t ? [this[e]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: u, sort: t.sort, splice: t.splice }, E.extend = E.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o = arguments[0] || {},
        a = 1,
        s = arguments.length,
        u = !1;for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) || g(o) || (o = {}), a === s && (o = this, a--); a < s; a++) {
      if (null != (e = arguments[a])) for (t in e) {
        n = e[t], "__proto__" !== t && o !== n && (u && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t], i = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {}, r = !1, o[t] = E.extend(u, i, n)) : void 0 !== n && (o[t] = n));
      }
    }return o;
  }, E.extend({ expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
      throw new Error(e);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(e) {
      return !(!e || "[object Object]" !== o.call(e) || (e = n(e)) && ("function" != typeof (e = v.call(e, "constructor") && e.constructor) || a.call(e) !== l));
    }, isEmptyObject: function isEmptyObject(e) {
      for (var t in e) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(e, t, n) {
      b(e, { nonce: t && t.nonce }, n);
    }, each: function each(e, t) {
      var n,
          r = 0;if (p(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }return e;
    }, makeArray: function makeArray(e, t) {
      t = t || [];return null != e && (p(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : u.call(t, e)), t;
    }, inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    }, merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }return e.length = i, e;
    }, grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) != a && r.push(e[i]);
      }return r;
    }, map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];if (p(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }return m(a);
    }, guid: 1, support: x }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    r["[object " + t + "]"] = t.toLowerCase();
  });var d = function (n) {
    function f(e, t) {
      return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320));
    }function p(e, t) {
      return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    }function r() {
      T();
    }var e,
        d,
        b,
        o,
        i,
        h,
        g,
        y,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        m,
        s,
        c,
        v,
        S = "sizzle" + +new Date(),
        x = n.document,
        k = 0,
        A = 0,
        N = ue(),
        j = ue(),
        D = ue(),
        q = ue(),
        L = function L(e, t) {
      return e === t && (l = !0), 0;
    },
        H = {}.hasOwnProperty,
        t = [],
        O = t.pop,
        P = t.push,
        R = t.push,
        M = t.slice,
        I = function I(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }return -1;
    },
        W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        F = "[\\x20\\t\\r\\n\\f]",
        B = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        $ = "\\[" + F + "*(" + B + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + F + "*\\]",
        _ = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
        z = new RegExp(F + "+", "g"),
        U = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
        X = new RegExp("^" + F + "*," + F + "*"),
        V = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
        G = new RegExp(F + "|>"),
        Y = new RegExp(_),
        Q = new RegExp("^" + B + "$"),
        J = { ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), TAG: new RegExp("^(" + B + "|[*])"), ATTR: new RegExp("^" + $), PSEUDO: new RegExp("^" + _), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"), bool: new RegExp("^(?:" + W + ")$", "i"), needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i") },
        K = /HTML$/i,
        Z = /^(?:input|select|textarea|button)$/i,
        ee = /^h\d$/i,
        te = /^[^{]+\{\s*\[native \w/,
        ne = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        re = /[+~]/,
        ie = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])", "g"),
        oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ae = ve(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, { dir: "parentNode", next: "legend" });try {
      R.apply(t = M.call(x.childNodes), x.childNodes), t[x.childNodes.length].nodeType;
    } catch (e) {
      R = { apply: t.length ? function (e, t) {
          P.apply(e, M.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
        } };
    }function se(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c = t && t.ownerDocument,
          f = t ? t.nodeType : 9;if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;if (!r && (T(t), t = t || C, E)) {
        if (11 !== f && (s = ne.exec(e))) if (l = s[1]) {
          if (9 === f) {
            if (!(o = t.getElementById(l))) return n;if (o.id === l) return n.push(o), n;
          } else if (c && (o = c.getElementById(l)) && v(t, o) && o.id === l) return n.push(o), n;
        } else {
          if (s[2]) return R.apply(n, t.getElementsByTagName(e)), n;if ((l = s[3]) && d.getElementsByClassName && t.getElementsByClassName) return R.apply(n, t.getElementsByClassName(l)), n;
        }if (d.qsa && !q[e + " "] && (!m || !m.test(e)) && (1 !== f || "object" !== t.nodeName.toLowerCase())) {
          if (l = e, c = t, 1 === f && (G.test(e) || V.test(e))) {
            for ((c = re.test(e) && ge(t.parentNode) || t) === t && d.scope || ((a = t.getAttribute("id")) ? a = a.replace(oe, p) : t.setAttribute("id", a = S)), i = (u = h(e)).length; i--;) {
              u[i] = (a ? "#" + a : ":scope") + " " + me(u[i]);
            }l = u.join(",");
          }try {
            return R.apply(n, c.querySelectorAll(l)), n;
          } catch (t) {
            q(e, !0);
          } finally {
            a === S && t.removeAttribute("id");
          }
        }
      }return y(e.replace(U, "$1"), t, n, r);
    }function ue() {
      var r = [];return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }function le(e) {
      return e[S] = !0, e;
    }function ce(e) {
      var t = C.createElement("fieldset");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t);
      }
    }function fe(e, t) {
      for (var n = e.split("|"), r = n.length; r--;) {
        b.attrHandle[n[r]] = t;
      }
    }function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;if (r) return r;if (n) for (; n = n.nextSibling;) {
        if (n === t) return -1;
      }return e ? 1 : -1;
    }function de(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }function he(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          for (var n, r = a([], e.length, o), i = r.length; i--;) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }function ge(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e && e.namespaceURI,
          e = e && (e.ownerDocument || e).documentElement;return !K.test(t || e && e.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          e = e ? e.ownerDocument || e : x;return e != C && 9 === e.nodeType && e.documentElement && (a = (C = e).documentElement, E = !i(C), x != C && (t = C.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", r, !1) : t.attachEvent && t.attachEvent("onunload", r)), d.scope = ce(function (e) {
        return a.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
      }), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = te.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(ie, f);return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          e = t.getElementById(e);return e ? [e] : [];
        }
      }) : (b.filter.ID = function (e) {
        var t = e.replace(ie, f);return function (e) {
          e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");return e && e.value === t;
        };
      }, b.find.ID = function (e, t) {
        if (void 0 !== t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];for (i = t.getElementsByName(e), r = 0; o = i[r++];) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" !== e) return o;for (; n = o[i++];) {
          1 === n.nodeType && r.push(n);
        }return r;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], m = [], (d.qsa = te.test(C.querySelectorAll)) && (ce(function (e) {
        var t;a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + W + ")"), e.querySelectorAll("[id~=" + S + "-]").length || m.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t = C.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:");
      })), (d.matchesSelector = te.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", _);
      }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = te.test(a.compareDocumentPosition), v = t || te.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            t = t && t.parentNode;return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) {
          if (t === e) return !0;
        }return !1;
      }, L = t ? function (e, t) {
        return e === t ? (l = !0, 0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == x && v(x, e) ? -1 : t == C || t.ownerDocument == x && v(x, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & n ? -1 : 1);var n;
      } : function (e, t) {
        if (e === t) return l = !0, 0;var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;if (i === o) return pe(e, t);for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (n = t; n = n.parentNode;) {
          s.unshift(n);
        }for (; a[r] === s[r];) {
          r++;
        }return r ? pe(a[r], s[r]) : a[r] == x ? -1 : s[r] == x ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if (T(e), d.matchesSelector && E && !q[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
        var n = c.call(e, t);if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        q(t, !0);
      }return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);var n = b.attrHandle[t.toLowerCase()],
          n = n && H.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;return void 0 !== n ? n : d.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(oe, p);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(L), l) {
        for (; t = e[i++];) {
          t === e[i] && (r = n.push(i));
        }for (; r--;) {
          e.splice(n[r], 1);
        }
      }return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r++];) {
        n += o(t);
      }return n;
    }, (b = se.selectors = { cacheLength: 50, createPseudo: le, match: J, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
          return e[1] = e[1].replace(ie, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        }, PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function TAG(e) {
          var t = e.replace(ie, f).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function CLASS(e) {
          var t = N[e + " "];return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && N(e, function (e) {
            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(t, n, r) {
          return function (e) {
            e = se.attr(e, t);return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(z, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"));
          };
        }, CHILD: function CHILD(h, e, t, g, y) {
          var m = "nth" !== h.slice(0, 3),
              v = "last" !== h.slice(-4),
              x = "of-type" === e;return 1 === g && 0 === y ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = m != v ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;if (c) {
              if (m) {
                for (; l;) {
                  for (a = e; a = a[l];) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }u = l = "only" === h && !u && "nextSibling";
                }return !0;
              }if (u = [v ? c.firstChild : c.lastChild], v && p) {
                for (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [k, s, d];break;
                  }
                }
              } else if (!1 === (d = p ? s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : d)) for (; (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a !== e));) {}return (d -= y) === g || d % g == 0 && 0 <= d / g;
            }
          };
        }, PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            for (var n, r = a(e, o), i = r.length; i--;) {
              e[n = I(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        } }, pseudos: { not: le(function (e) {
          var r = [],
              i = [],
              s = g(e.replace(U, "$1"));return s[S] ? le(function (e, t, n, r) {
            for (var i, o = s(e, null, r, []), a = e.length; a--;) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }), has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }), contains: le(function (t) {
          return t = t.replace(ie, f), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }), lang: le(function (n) {
          return Q.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(ie, f).toLowerCase(), function (e) {
            var t;do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);return !1;
          };
        }), target: function target(e) {
          var t = n.location && n.location.hash;return t && t.slice(1) === e.id;
        }, root: function root(e) {
          return e === a;
        }, focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: de(!1), disabled: de(!0), checked: function checked(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(e) {
          return !b.pseudos.empty(e);
        }, header: function header(e) {
          return ee.test(e.nodeName);
        }, input: function input(e) {
          return Z.test(e.nodeName);
        }, button: function button(e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function text(e) {
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
        }, first: he(function () {
          return [0];
        }), last: he(function (e, t) {
          return [t - 1];
        }), eq: he(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }), even: he(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }return e;
        }), odd: he(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }return e;
        }), lt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }return e;
        }), gt: he(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }return e;
        }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      b.pseudos[e] = function (t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }(e);
    }for (e in { submit: !0, reset: !0 }) {
      b.pseudos[e] = function (n) {
        return function (e) {
          var t = e.nodeName.toLowerCase();return ("input" === t || "button" === t) && e.type === n;
        };
      }(e);
    }function ye() {}function me(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }return r;
    }function ve(a, e, t) {
      var s = e.dir,
          u = e.next,
          l = u || s,
          c = t && "parentNode" === l,
          f = A++;return e.first ? function (e, t, n) {
        for (; e = e[s];) {
          if (1 === e.nodeType || c) return a(e, t, n);
        }return !1;
      } : function (e, t, n) {
        var r,
            i,
            o = [k, f];if (n) {
          for (; e = e[s];) {
            if ((1 === e.nodeType || c) && a(e, t, n)) return !0;
          }
        } else for (; e = e[s];) {
          if (1 === e.nodeType || c) if (r = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[s] || e;else {
            if ((i = r[l]) && i[0] === k && i[1] === f) return o[2] = i[2];if ((r[l] = o)[2] = a(e, t, n)) return !0;
          }
        }return !1;
      };
    }function xe(i) {
      return 1 < i.length ? function (e, t, n) {
        for (var r = i.length; r--;) {
          if (!i[r](e, t, n)) return !1;
        }return !0;
      } : i[0];
    }function be(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }return a;
    }function we(e) {
      for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ve(function (e) {
        return e === r;
      }, a, !0), l = ve(function (e) {
        return -1 < I(r, e);
      }, a, !0), c = [function (e, t, n) {
        n = !o && (n || t !== w) || ((r = t).nodeType ? u : l)(e, t, n);return r = null, n;
      }]; s < i; s++) {
        if (t = b.relative[e[s].type]) c = [ve(xe(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < i && !b.relative[e[n].type]; n++) {}return function e(d, h, g, y, m, t) {
              return y && !y[S] && (y = e(y)), m && !m[S] && (m = e(m, t)), le(function (e, t, n, r) {
                var i,
                    o,
                    a,
                    s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) {
                    se(e, t[r], n);
                  }return n;
                }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : be(c, s, d, n, r),
                    p = g ? m || (e ? d : l || y) ? [] : t : f;if (g && g(f, p, n, r), y) for (i = be(p, u), y(i, [], n, r), o = i.length; o--;) {
                  (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                }if (e) {
                  if (m || d) {
                    if (m) {
                      for (i = [], o = p.length; o--;) {
                        (a = p[o]) && i.push(f[o] = a);
                      }m(null, p = [], i, r);
                    }for (o = p.length; o--;) {
                      (a = p[o]) && -1 < (i = m ? I(e, a) : s[o]) && (e[i] = !(t[i] = a));
                    }
                  }
                } else p = be(p === t ? p.splice(l, p.length) : p), m ? m(null, t, p, r) : R.apply(t, p);
              });
            }(1 < s && xe(c), 1 < s && me(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(U, "$1"), t, s < n && we(e.slice(s, n)), n < i && we(e = e.slice(n)), n < i && me(e));
          }c.push(t);
        }
      }return xe(c);
    }return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = j[e + " "];if (l) return t ? 0 : l.slice(0);for (a = e, s = [], u = b.preFilter; a;) {
        for (o in n && !(r = X.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = V.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(U, " ") }), a = a.slice(n.length)), b.filter) {
          !(r = J[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length));
        }if (!n) break;
      }return t ? a.length : a ? se.error(e) : j(e, s).slice(0);
    }, g = se.compile = function (e, t) {
      var n,
          y,
          m,
          v,
          x,
          r,
          i = [],
          o = [],
          a = D[e + " "];if (!a) {
        for (n = (t = t || h(e)).length; n--;) {
          ((a = we(t[n]))[S] ? i : o).push(a);
        }(a = D(e, (v = 0 < (m = i).length, x = 0 < (y = o).length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = k += null == p ? 1 : Math.random() || .1,
              g = d.length;for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              for (a = 0, t || o.ownerDocument == C || (T(o), n = !E); s = y[a++];) {
                if (s(o, t || C, n)) {
                  _r.push(o);break;
                }
              }i && (k = h);
            }v && ((o = !s && o) && u--, e && c.push(o));
          }if (u += l, v && l !== u) {
            for (a = 0; s = m[a++];) {
              s(c, f, t, n);
            }if (e) {
              if (0 < u) for (; l--;) {
                c[l] || f[l] || (f[l] = O.call(_r));
              }f = be(f);
            }R.apply(_r, f), i && !e && 0 < f.length && 1 < u + m.length && se.uniqueSort(_r);
          }return i && (k = h, w = p), c;
        }, v ? le(r) : r))).selector = e;
      }return a;
    }, y = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(ie, f), t) || [])[0])) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }for (i = J.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);) {
          if ((u = b.find[s]) && (r = u(a.matches[0].replace(ie, f), re.test(o[0].type) && ge(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && me(o))) return R.apply(n, r), n;break;
          }
        }
      }return (l || g(e, c))(r, t, !E, n, !t || re.test(e) && ge(t.parentNode) || t), n;
    }, d.sortStable = S.split("").sort(L).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(W, function (e, t, n) {
      if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
    }), se;
  }(T);E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;function w(e, t, n) {
    for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
      if (1 === e.nodeType) {
        if (i && E(e).is(n)) break;r.push(e);
      }
    }return r;
  }function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }return n;
  }var k = E.expr.match.needsContext;function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e, n, r) {
    return g(n) ? E.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? E.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? E.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : E.filter(n, e, r);
  }E.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, E.fn.extend({ find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (E.contains(i[t], this)) return !0;
        }
      }));for (n = this.pushStack([]), t = 0; t < r; t++) {
        E.find(e, i[t], n);
      }return 1 < r ? E.uniqueSort(n) : n;
    }, filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    }, not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    }, is: function is(e) {
      return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length;
    } });var D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init = function (e, t, n) {
    if (!e) return this;if (n = n || q, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : D.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);if (r[1]) {
      if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), N.test(r[1]) && E.isPlainObject(t)) for (var r in t) {
        g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      }return this;
    }return (e = C.getElementById(r[2])) && (this[0] = e, this.length = 1), this;
  }).prototype = E.fn;var q = E(C),
      L = /^(?:parents|prev(?:Until|All))/,
      H = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
  }E.fn.extend({ has: function has(e) {
      var t = E(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (E.contains(this, t[e])) return !0;
        }
      });
    }, closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && E(e);if (!k.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
            o.push(n);break;
          }
        }
      }return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    }, index: function index(e) {
      return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    }, addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), E.each({ parent: function parent(e) {
      e = e.parentNode;return e && 11 !== e.nodeType ? e : null;
    }, parents: function parents(e) {
      return w(e, "parentNode");
    }, parentsUntil: function parentsUntil(e, t, n) {
      return w(e, "parentNode", n);
    }, next: function next(e) {
      return O(e, "nextSibling");
    }, prev: function prev(e) {
      return O(e, "previousSibling");
    }, nextAll: function nextAll(e) {
      return w(e, "nextSibling");
    }, prevAll: function prevAll(e) {
      return w(e, "previousSibling");
    }, nextUntil: function nextUntil(e, t, n) {
      return w(e, "nextSibling", n);
    }, prevUntil: function prevUntil(e, t, n) {
      return w(e, "previousSibling", n);
    }, siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    }, children: function children(e) {
      return S(e.firstChild);
    }, contents: function contents(e) {
      return null != e.contentDocument && n(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
    } }, function (r, i) {
    E.fn[r] = function (e, t) {
      var n = E.map(this, i, e);return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
    };
  });var P = /[^\x20\t\r\n\f]+/g;function R(e) {
    return e;
  }function M(e) {
    throw e;
  }function I(e, t, n, r) {
    var i;try {
      e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }E.Callbacks = function (r) {
    var e, n;r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function (e, t) {
      n[t] = !0;
    }), n) : E.extend({}, r);function i() {
      for (s = s || r.once, a = o = !0; l.length; c = -1) {
        for (t = l.shift(); ++c < u.length;) {
          !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
        }
      }r.memory || (t = !1), o = !1, s && (u = t ? [] : "");
    }var o,
        t,
        a,
        s,
        u = [],
        l = [],
        c = -1,
        f = { add: function add() {
        return u && (t && !o && (c = u.length - 1, l.push(t)), function n(e) {
          E.each(e, function (e, t) {
            g(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t);
          });
        }(arguments), t && !o && i()), this;
      }, remove: function remove() {
        return E.each(arguments, function (e, t) {
          for (var n; -1 < (n = E.inArray(t, u, n));) {
            u.splice(n, 1), n <= c && c--;
          }
        }), this;
      }, has: function has(e) {
        return e ? -1 < E.inArray(e, u) : 0 < u.length;
      }, empty: function empty() {
        return u = u && [], this;
      }, disable: function disable() {
        return s = l = [], u = t = "", this;
      }, disabled: function disabled() {
        return !u;
      }, lock: function lock() {
        return s = l = [], t || o || (u = t = ""), this;
      }, locked: function locked() {
        return !!s;
      }, fireWith: function fireWith(e, t) {
        return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), o || i()), this;
      }, fire: function fire() {
        return f.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!a;
      } };return f;
  }, E.extend({ Deferred: function Deferred(e) {
      var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = { state: function state() {
          return i;
        }, always: function always() {
          return s.done(arguments).fail(arguments), this;
        }, catch: function _catch(e) {
          return a.then(null, e);
        }, pipe: function pipe() {
          var i = arguments;return E.Deferred(function (r) {
            E.each(o, function (e, t) {
              var n = g(i[t[4]]) && i[t[4]];s[t[1]](function () {
                var e = n && n.apply(this, arguments);e && g(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        }, then: function then(t, n, r) {
          var u = 0;function l(i, o, a, s) {
            return function () {
              function e() {
                var e, t;if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");t = e && ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e) && e.then, g(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              }var n = this,
                  r = arguments,
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), T.setTimeout(t));
            };
          }return E.Deferred(function (e) {
            o[0][3].add(l(0, e, g(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, g(t) ? t : R)), o[2][3].add(l(0, e, g(n) ? n : M));
          }).promise();
        }, promise: function promise(e) {
          return null != e ? E.extend(e, a) : a;
        } },
          s = {};return E.each(o, function (e, t) {
        var n = t[2],
            r = t[5];a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    }, when: function when(e) {
      function t(t) {
        return function (e) {
          i[t] = this, o[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(i, o);
        };
      }var n = arguments.length,
          r = n,
          i = Array(r),
          o = s.call(arguments),
          a = E.Deferred();if (n <= 1 && (I(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || g(o[r] && o[r].then))) return a.then();for (; r--;) {
        I(o[r], t(r), a.reject);
      }return a.promise();
    } });var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook = function (e, t) {
    T.console && T.console.warn && e && W.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, E.readyException = function (e) {
    T.setTimeout(function () {
      throw e;
    });
  };var F = E.Deferred();function B() {
    C.removeEventListener("DOMContentLoaded", B), T.removeEventListener("load", B), E.ready();
  }E.fn.ready = function (e) {
    return F.then(e).catch(function (e) {
      E.readyException(e);
    }), this;
  }, E.extend({ isReady: !1, readyWait: 1, ready: function ready(e) {
      (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(C, [E]);
    } }), E.ready.then = F.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", B), T.addEventListener("load", B));function $(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;if ("object" === h(n)) for (s in i = !0, n) {
      $(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, g(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function (e, t, n) {
      return l.call(E(e), n);
    }) : t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  }var _ = /^-ms-/,
      z = /-([a-z])/g;function U(e, t) {
    return t.toUpperCase();
  }function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }function V(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }function G() {
    this.expando = E.expando + G.uid++;
  }G.uid = 1, G.prototype = { cache: function cache(e) {
      var t = e[this.expando];return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
    }, set: function set(e, t, n) {
      var r,
          i = this.cache(e);if ("string" == typeof t) i[X(t)] = n;else for (r in t) {
        i[X(r)] = t[r];
      }return i;
    }, get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
    }, access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function remove(e, t) {
      var n,
          r = e[this.expando];if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;for (; n--;) {
            delete r[t[n]];
          }
        }void 0 !== t && !E.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    }, hasData: function hasData(e) {
      e = e[this.expando];return void 0 !== e && !E.isEmptyObject(e);
    } };var Y = new G(),
      Q = new G(),
      J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      K = /[A-Z]/g;function Z(e, t, n) {
    var r, i;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i);
      } catch (e) {}Q.set(e, t, n);
    } else n = void 0;return n;
  }E.extend({ hasData: function hasData(e) {
      return Q.hasData(e) || Y.hasData(e);
    }, data: function data(e, t, n) {
      return Q.access(e, t, n);
    }, removeData: function removeData(e, t) {
      Q.remove(e, t);
    }, _data: function _data(e, t, n) {
      return Y.access(e, t, n);
    }, _removeData: function _removeData(e, t) {
      Y.remove(e, t);
    } }), E.fn.extend({ data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;if (void 0 !== n) return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? this.each(function () {
        Q.set(this, n);
      }) : $(this, function (e) {
        var t;return o && void 0 === e ? void 0 !== (t = Q.get(o, n)) || void 0 !== (t = Z(o, n)) ? t : void 0 : void this.each(function () {
          Q.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
        for (t = a.length; t--;) {
          a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
        }Y.set(o, "hasDataAttrs", !0);
      }return i;
    }, removeData: function removeData(e) {
      return this.each(function () {
        Q.remove(this, e);
      });
    } }), E.extend({ queue: function queue(e, t, n) {
      var r;if (e) return r = Y.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || [];
    }, dequeue: function dequeue(e, t) {
      t = t || "fx";var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        E.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    }, _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";return Y.get(e, n) || Y.access(e, n, { empty: E.Callbacks("once memory").add(function () {
          Y.remove(e, [t + "queue", n]);
        }) });
    } }), E.fn.extend({ queue: function queue(t, n) {
      var e = 2;return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = E.queue(this, t, n);E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
      });
    }, dequeue: function dequeue(e) {
      return this.each(function () {
        E.dequeue(this, e);
      });
    }, clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    }, promise: function promise(e, t) {
      function n() {
        --i || o.resolveWith(a, [a]);
      }var r,
          i = 1,
          o = E.Deferred(),
          a = this,
          s = this.length;for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) {
        (r = Y.get(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(n));
      }return n(), o.promise(t);
    } });var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
      ne = ["Top", "Right", "Bottom", "Left"],
      re = C.documentElement,
      ie = function ie(e) {
    return E.contains(e.ownerDocument, e);
  },
      oe = { composed: !0 };re.getRootNode && (ie = function ie(e) {
    return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
  });function ae(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display");
  }function se(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return E.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));if (c && c[3] !== l) {
      for (l = l || c[3], c = +(u /= 2) || 1; a--;) {
        E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }E.style(e, t, (c *= 2) + l), n = n || [];
    }return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }var ue = {};function le(e, t) {
    for (var n, r, i, o, a, s, u = [], l = 0, c = e.length; l < c; l++) {
      (r = e[l]).style && (n = r.style.display, t ? ("none" === n && (u[l] = Y.get(r, "display") || null, u[l] || (r.style.display = "")), "" === r.style.display && ae(r) && (u[l] = (s = o = i = void 0, o = r.ownerDocument, a = r.nodeName, (s = ue[a]) || (i = o.body.appendChild(o.createElement(a)), s = E.css(i, "display"), i.parentNode.removeChild(i), ue[a] = s = "none" === s ? "block" : s)))) : "none" !== n && (u[l] = "none", Y.set(r, "display", n)));
    }for (l = 0; l < c; l++) {
      null != u[l] && (e[l].style.display = u[l]);
    }return e;
  }E.fn.extend({ show: function show() {
      return le(this, !0);
    }, hide: function hide() {
      return le(this);
    }, toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        ae(this) ? E(this).show() : E(this).hide();
      });
    } });var ce = /^(?:checkbox|radio)$/i,
      fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      pe = /^$|^module$|\/(?:java|ecma)script/i,
      f = C.createDocumentFragment().appendChild(C.createElement("div"));(d = C.createElement("input")).setAttribute("type", "radio"), d.setAttribute("checked", "checked"), d.setAttribute("name", "t"), f.appendChild(d), x.checkClone = f.cloneNode(!0).cloneNode(!0).lastChild.checked, f.innerHTML = "<textarea>x</textarea>", x.noCloneChecked = !!f.cloneNode(!0).lastChild.defaultValue, f.innerHTML = "<option></option>", x.option = !!f.lastChild;var de = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function he(e, t) {
    var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && A(e, t) ? E.merge([e], n) : n;
  }function ge(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
  }de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td, x.option || (de.optgroup = de.option = [1, "<select multiple='multiple'>", "</select>"]);var ye = /<|&#?\w+;/;function me(e, t, n, r, i) {
    for (var o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) {
      if ((o = e[p]) || 0 === o) if ("object" === h(o)) E.merge(f, o.nodeType ? [o] : o);else if (ye.test(o)) {
        for (a = a || c.appendChild(t.createElement("div")), s = (fe.exec(o) || ["", ""])[1].toLowerCase(), s = de[s] || de._default, a.innerHTML = s[1] + E.htmlPrefilter(o) + s[2], l = s[0]; l--;) {
          a = a.lastChild;
        }E.merge(f, a.childNodes), (a = c.firstChild).textContent = "";
      } else f.push(t.createTextNode(o));
    }for (c.textContent = "", p = 0; o = f[p++];) {
      if (r && -1 < E.inArray(o, r)) i && i.push(o);else if (u = ie(o), a = he(c.appendChild(o), "script"), u && ge(a), n) for (l = 0; o = a[l++];) {
        pe.test(o.type || "") && n.push(o);
      }
    }return c;
  }var ve = /^([^.]*)(?:\.(.+)|)/;function xe() {
    return !0;
  }function be() {
    return !1;
  }function we(e, t) {
    return e === function () {
      try {
        return C.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }function Te(e, t, n, r, i, o) {
    var a, s;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Te(e, s, n, r, t[s], o);
      }return e;
    }if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = be;else if (!i) return e;return 1 === o && (a = i, (i = function i(e) {
      return E().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
      E.event.add(this, t, i, r, n);
    });
  }function Ce(e, i, o) {
    o ? (Y.set(e, i, !1), E.event.add(e, i, { namespace: !1, handler: function handler(e) {
        var t,
            n,
            r = Y.get(this, i);if (1 & e.isTrigger && this[i]) {
          if (r.length) (E.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
        } else r.length && (Y.set(this, i, { value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
      } })) : void 0 === Y.get(e, i) && E.event.add(e, i, xe);
  }E.event = { global: {}, add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = Y.get(t);if (V(t)) for (n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (s = h.events) || (s = h.events = Object.create(null)), (a = h.handle) || (a = h.handle = function (e) {
        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
      }), u = (e = (e || "").match(P) || [""]).length; u--;) {
        f = d = (l = ve.exec(e[u]) || [])[1], p = (l[2] || "").split(".").sort(), f && (c = E.event.special[f] || {}, f = (i ? c.delegateType : c.bindType) || f, c = E.event.special[f] || {}, l = E.extend({ type: f, origType: d, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && E.expr.match.needsContext.test(i), namespace: p.join(".") }, o), (d = s[f]) || ((d = s[f] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)), c.add && (c.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), E.event.global[f] = !0);
      }
    }, remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          y = Y.hasData(e) && Y.get(e);if (y && (u = y.events)) {
        for (l = (t = (t || "").match(P) || [""]).length; l--;) {
          if (d = g = (s = ve.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            for (f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d]);
          } else for (d in u) {
            E.event.remove(e, d + t[l], n, r, !0);
          }
        }E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    }, dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a = new Array(arguments.length),
          s = E.event.fix(e),
          u = (Y.get(this, "events") || Object.create(null))[s.type] || [],
          e = E.event.special[s.type] || {};for (a[0] = s, t = 1; t < arguments.length; t++) {
        a[t] = arguments[t];
      }if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
        for (o = E.event.handlers.call(this, s, u), t = 0; (r = o[t++]) && !s.isPropagationStopped();) {
          for (s.currentTarget = r.elem, n = 0; (i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) {
            s.rnamespace && !1 !== i.namespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, void 0 !== (i = ((E.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
          }
        }return e.postDispatch && e.postDispatch.call(this, s), s.result;
      }
    }, handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
          }o.length && s.push({ elem: l, handlers: o });
        }
      }return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    }, addProp: function addProp(t, e) {
      Object.defineProperty(E.Event.prototype, t, { enumerable: !0, configurable: !0, get: g(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        }, set: function set(e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        } });
    }, fix: function fix(e) {
      return e[E.expando] ? e : new E.Event(e);
    }, special: { load: { noBubble: !0 }, click: { setup: function setup(e) {
          e = this || e;return ce.test(e.type) && e.click && A(e, "input") && Ce(e, "click", xe), !1;
        }, trigger: function trigger(e) {
          e = this || e;return ce.test(e.type) && e.click && A(e, "input") && Ce(e, "click"), !0;
        }, _default: function _default(e) {
          e = e.target;return ce.test(e.type) && e.click && A(e, "input") && Y.get(e, "click") || A(e, "a");
        } }, beforeunload: { postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } } }, E.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, E.Event = function (e, t) {
    if (!(this instanceof E.Event)) return new E.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : be, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
  }, E.Event.prototype = { constructor: E.Event, isDefaultPrevented: be, isPropagationStopped: be, isImmediatePropagationStopped: be, isSimulated: !1, preventDefault: function preventDefault() {
      var e = this.originalEvent;this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var e = this.originalEvent;this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    } }, E.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: !0 }, E.event.addProp), E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    E.event.special[e] = { setup: function setup() {
        return Ce(this, e, we), !1;
      }, trigger: function trigger() {
        return Ce(this, e), !0;
      }, _default: function _default() {
        return !0;
      }, delegateType: t };
  }), E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, i) {
    E.event.special[e] = { delegateType: i, bindType: i, handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      } };
  }), E.fn.extend({ on: function on(e, t, n, r) {
      return Te(this, e, t, n, r);
    }, one: function one(e, t, n, r) {
      return Te(this, e, t, n, r, 1);
    }, off: function off(e, t, n) {
      var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" != (typeof e === "undefined" ? "undefined" : _typeof(e))) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = be), this.each(function () {
        E.event.remove(this, e, n, t);
      });for (i in e) {
        this.off(i, t, e[i]);
      }return this;
    } });var Ee = /<script|<style|<link/i,
      Se = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ae(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
  }function Ne(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function je(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }function De(e, t) {
    var n, r, i, o;if (1 === t.nodeType) {
      if (Y.hasData(e) && (o = Y.get(e).events)) for (i in Y.remove(t, "handle events"), o) {
        for (n = 0, r = o[i].length; n < r; n++) {
          E.event.add(t, i, o[i][n]);
        }
      }Q.hasData(e) && (e = Q.access(e), e = E.extend({}, e), Q.set(t, e));
    }
  }function qe(n, r, i, o) {
    r = m(r);var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = g(d);if (h || 1 < f && "string" == typeof d && !x.checkClone && Se.test(d)) return n.each(function (e) {
      var t = n.eq(e);h && (r[0] = d.call(this, e, t.html())), qe(t, r, i, o);
    });if (f && (t = (e = me(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = E.map(he(e, "script"), Ne)).length; c < f; c++) {
        u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, he(u, "script"))), i.call(n[c], u, c);
      }if (s) for (l = a[a.length - 1].ownerDocument, E.map(a, je), c = 0; c < s; c++) {
        u = a[c], pe.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, l) : b(u.textContent.replace(ke, ""), u, l));
      }
    }return n;
  }function Le(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || E.cleanData(he(r)), r.parentNode && (n && ie(r) && ge(he(r, "script")), r.parentNode.removeChild(r));
    }return e;
  }E.extend({ htmlPrefilter: function htmlPrefilter(e) {
      return e;
    }, clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = ie(e);if (!(x.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = he(c), r = 0, i = (o = he(e)).length; r < i; r++) {
        s = o[r], "input" === (l = (u = a[r]).nodeName.toLowerCase()) && ce.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }if (t) if (n) for (o = o || he(e), a = a || he(c), r = 0, i = o.length; r < i; r++) {
        De(o[r], a[r]);
      } else De(e, c);return 0 < (a = he(c, "script")).length && ge(a, !f && he(e, "script")), c;
    }, cleanData: function cleanData(e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (V(n)) {
          if (t = n[Y.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            }n[Y.expando] = void 0;
          }n[Q.expando] && (n[Q.expando] = void 0);
        }
      }
    } }), E.fn.extend({ detach: function detach(e) {
      return Le(this, e, !0);
    }, remove: function remove(e) {
      return Le(this, e);
    }, text: function text(e) {
      return $(this, function (e) {
        return void 0 === e ? E.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function append() {
      return qe(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e);
      });
    }, prepend: function prepend() {
      return qe(this, arguments, function (e) {
        var t;1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Ae(this, e)).insertBefore(e, t.firstChild);
      });
    }, before: function before() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function after() {
      return qe(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (E.cleanData(he(e, !1)), e.textContent = "");
      }return this;
    }, clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return E.clone(this, e, t);
      });
    }, html: function html(e) {
      return $(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ee.test(e) && !de[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = E.htmlPrefilter(e);try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (E.cleanData(he(t, !1)), t.innerHTML = e);
            }t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function replaceWith() {
      var n = [];return qe(this, arguments, function (e) {
        var t = this.parentNode;E.inArray(this, n) < 0 && (E.cleanData(he(this)), t && t.replaceChild(e, this));
      }, n);
    } }), E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, a) {
    E.fn[e] = function (e) {
      for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
      }return this.pushStack(n);
    };
  });function He(e) {
    var t = e.ownerDocument.defaultView;return (t = !t || !t.opener ? T : t).getComputedStyle(e);
  }function Oe(e, t, n) {
    var r,
        i = {};for (r in t) {
      i[r] = e.style[r], e.style[r] = t[r];
    }for (r in n = n.call(e), t) {
      e.style[r] = i[r];
    }return n;
  }var Pe,
      Re,
      Me,
      Ie,
      We,
      Fe,
      Be,
      $e,
      _e = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
      ze = new RegExp(ne.join("|"), "i");function Ue(e, t, n) {
    var r,
        i,
        o = e.style;return (n = n || He(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || ie(e) || (i = E.style(e, t)), !x.pixelBoxStyles() && _e.test(i) && ze.test(t) && (r = o.width, e = o.minWidth, t = o.maxWidth, o.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = r, o.minWidth = e, o.maxWidth = t)), void 0 !== i ? i + "" : i;
  }function Xe(e, t) {
    return { get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
      } };
  }function Ve() {
    var e;$e && (Be.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", $e.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(Be).appendChild($e), e = T.getComputedStyle($e), Pe = "1%" !== e.top, Fe = 12 === Ge(e.marginLeft), $e.style.right = "60%", Ie = 36 === Ge(e.right), Re = 36 === Ge(e.width), $e.style.position = "absolute", Me = 12 === Ge($e.offsetWidth / 3), re.removeChild(Be), $e = null);
  }function Ge(e) {
    return Math.round(parseFloat(e));
  }Be = C.createElement("div"), ($e = C.createElement("div")).style && ($e.style.backgroundClip = "content-box", $e.cloneNode(!0).style.backgroundClip = "", x.clearCloneStyle = "content-box" === $e.style.backgroundClip, E.extend(x, { boxSizingReliable: function boxSizingReliable() {
      return Ve(), Re;
    }, pixelBoxStyles: function pixelBoxStyles() {
      return Ve(), Ie;
    }, pixelPosition: function pixelPosition() {
      return Ve(), Pe;
    }, reliableMarginLeft: function reliableMarginLeft() {
      return Ve(), Fe;
    }, scrollboxSize: function scrollboxSize() {
      return Ve(), Me;
    }, reliableTrDimensions: function reliableTrDimensions() {
      var e, t, n;return null == We && (e = C.createElement("table"), t = C.createElement("tr"), n = C.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), n = T.getComputedStyle(t), We = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), We;
    } }));var Ye = ["Webkit", "Moz", "ms"],
      Qe = C.createElement("div").style,
      Je = {};function Ke(e) {
    return E.cssProps[e] || Je[e] || (e in Qe ? e : Je[e] = function (e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;) {
        if ((e = Ye[n] + t) in Qe) return e;
      }
    }(e) || e);
  }var Ze = /^(none|table(?!-c[ea]).+)/,
      et = /^--/,
      tt = { position: "absolute", visibility: "hidden", display: "block" },
      nt = { letterSpacing: "0", fontWeight: "400" };function rt(e, t, n) {
    var r = te.exec(t);return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }function it(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;if (n === (r ? "border" : "content")) return 0;for (; a < 4; a += 2) {
      "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
    }return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }function ot(e, t, n) {
    var r = He(e),
        i = (!x.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
        o = i,
        a = Ue(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);if (_e.test(a)) {
      if (!n) return a;a = "auto";
    }return (!x.boxSizingReliable() && i || !x.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + it(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }function at(e, t, n, r, i) {
    return new at.prototype.init(e, t, n, r, i);
  }E.extend({ cssHooks: { opacity: { get: function get(e, t) {
          if (t) {
            e = Ue(e, "opacity");return "" === e ? "1" : e;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = X(t),
            u = et.test(t),
            l = e.style;if (u || (t = Ke(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];"string" == (o = typeof n === "undefined" ? "undefined" : _typeof(n)) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), x.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    }, css: function css(e, t, n, r) {
      var i,
          o = X(t);return et.test(t) || (t = Ke(o)), "normal" === (i = void 0 === (i = (o = E.cssHooks[t] || E.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ? Ue(e, t, r) : i) && t in nt && (i = nt[t]), "" === n || n ? (t = parseFloat(i), !0 === n || isFinite(t) ? t || 0 : i) : i;
    } }), E.each(["height", "width"], function (e, s) {
    E.cssHooks[s] = { get: function get(e, t, n) {
        if (t) return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ot(e, s, n) : Oe(e, tt, function () {
          return ot(e, s, n);
        });
      }, set: function set(e, t, n) {
        var r,
            i = He(e),
            o = !x.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            n = n ? it(e, s, n, a, i) : 0;return a && o && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - it(e, s, "border", !1, i) - .5)), n && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = E.css(e, s)), rt(0, t, n);
      } };
  }), E.cssHooks.marginLeft = Xe(x.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, { marginLeft: 0 }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
    E.cssHooks[i + o] = { expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
        }return n;
      } }, "margin" !== i && (E.cssHooks[i + o].set = rt);
  }), E.fn.extend({ css: function css(e, t) {
      return $(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;if (Array.isArray(t)) {
          for (r = He(e), i = t.length; a < i; a++) {
            o[t[a]] = E.css(e, t[a], !1, r);
          }return o;
        }return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
      }, e, t, 1 < arguments.length);
    } }), ((E.Tween = at).prototype = { constructor: at, init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var e = at.propHooks[this.prop];return (e && e.get ? e : at.propHooks._default).get(this);
    }, run: function run(e) {
      var t,
          n = at.propHooks[this.prop];return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : at.propHooks._default).set(this), this;
    } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function get(e) {
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
      }, set: function set(e) {
        E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
      } } }).scrollTop = at.propHooks.scrollLeft = { set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, E.easing = { linear: function linear(e) {
      return e;
    }, swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }, _default: "swing" }, E.fx = at.prototype.init, E.fx.step = {};var st,
      ut,
      lt = /^(?:toggle|show|hide)$/,
      ct = /queueHooks$/;function ft() {
    ut && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ft) : T.setTimeout(ft, E.fx.interval), E.fx.tick());
  }function pt() {
    return T.setTimeout(function () {
      st = void 0;
    }), st = Date.now();
  }function dt(e, t) {
    var n,
        r = 0,
        i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    }return t && (i.opacity = i.width = e), i;
  }function ht(e, t, n) {
    for (var r, i = (gt.tweeners[t] || []).concat(gt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }function gt(i, e, t) {
    var n,
        o,
        r = 0,
        a = gt.prefilters.length,
        s = E.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (o) return !1;for (var e = st || pt(), e = Math.max(0, l.startTime + l.duration - e), t = 1 - (e / l.duration || 0), n = 0, r = l.tweens.length; n < r; n++) {
        l.tweens[n].run(t);
      }return s.notifyWith(i, [l, t, e]), t < 1 && r ? e : (r || s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l]), !1);
    },
        l = s.promise({ elem: i, props: E.extend({}, e), opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t), originalProperties: e, originalOptions: t, startTime: st || pt(), duration: t.duration, tweens: [], createTween: function createTween(e, t) {
        e = E.Tween(i, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);return l.tweens.push(e), e;
      }, stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;if (o) return this;for (o = !0; t < n; t++) {
          l.tweens[t].run(1);
        }return e ? (s.notifyWith(i, [l, 1, 0]), s.resolveWith(i, [l, e])) : s.rejectWith(i, [l, e]), this;
      } }),
        c = l.props;for (function (e, t) {
      var n, r, i, o, a;for (n in e) {
        if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < a; r++) {
      if (n = gt.prefilters[r].call(l, i, c, l.opts)) return g(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }return E.map(c, ht, l), g(l.opts.start) && l.opts.start.call(i, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, { elem: i, anim: l, queue: l.opts.queue })), l;
  }E.Animation = E.extend(gt, { tweeners: { "*": [function (e, t) {
        var n = this.createTween(e, t);return se(n.elem, e, te.exec(t), n), n;
      }] }, tweener: function tweener(e, t) {
      for (var n, r = 0, i = (e = g(e) ? (t = e, ["*"]) : e.match(P)).length; r < i; r++) {
        n = e[r], gt.tweeners[n] = gt.tweeners[n] || [], gt.tweeners[n].unshift(t);
      }
    }, prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = "width" in t || "height" in t,
          f = this,
          p = {},
          d = e.style,
          h = e.nodeType && ae(e),
          g = Y.get(e, "fxshow");for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, f.always(function () {
        f.always(function () {
          a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], lt.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
            if ("show" !== i || !g || void 0 === g[r]) continue;h = !0;
          }p[r] = g && g[r] || E.style(e, r);
        }
      }if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(p)) for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (f.done(function () {
        d.display = l;
      }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
      })), u = !1, p) {
        u || (g ? "hidden" in g && (h = g.hidden) : g = Y.access(e, "fxshow", { display: l }), o && (g.hidden = !h), h && le([e], !0), f.done(function () {
          for (r in h || le([e]), Y.remove(e, "fxshow"), p) {
            E.style(e, r, p[r]);
          }
        })), u = ht(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0));
      }
    }], prefilter: function prefilter(e, t) {
      t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
    } }), E.speed = function (e, t, n) {
    var r = e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? E.extend({}, e) : { complete: n || !n && t || g(e) && e, duration: e, easing: n && t || t && !g(t) && t };return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      g(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
    }, r;
  }, E.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function animate(t, e, n, r) {
      var i = E.isEmptyObject(t),
          o = E.speed(e, n, r),
          r = function r() {
        var e = gt(this, E.extend({}, t), o);(i || Y.get(this, "finish")) && e.stop(!0);
      };return r.finish = r, i || !1 === o.queue ? this.each(r) : this.queue(o.queue, r);
    }, stop: function stop(i, e, o) {
      function a(e) {
        var t = e.stop;delete e.stop, t(o);
      }return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = E.timers,
            r = Y.get(this);if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ct.test(t) && a(r[t]);
        }for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }!e && o || E.dequeue(this, i);
      });
    }, finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Y.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = E.timers,
            o = n ? n.length : 0;for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }delete t.finish;
      });
    } }), E.each(["toggle", "show", "hide"], function (e, r) {
    var i = E.fn[r];E.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(dt(r, !0), e, t, n);
    };
  }), E.each({ slideDown: dt("show"), slideUp: dt("hide"), slideToggle: dt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, r) {
    E.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), E.timers = [], E.fx.tick = function () {
    var e,
        t = 0,
        n = E.timers;for (st = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }n.length || E.fx.stop(), st = void 0;
  }, E.fx.timer = function (e) {
    E.timers.push(e), E.fx.start();
  }, E.fx.interval = 13, E.fx.start = function () {
    ut || (ut = !0, ft());
  }, E.fx.stop = function () {
    ut = null;
  }, E.fx.speeds = { slow: 600, fast: 200, _default: 400 }, E.fn.delay = function (r, e) {
    return r = E.fx && E.fx.speeds[r] || r, this.queue(e = e || "fx", function (e, t) {
      var n = T.setTimeout(e, r);t.stop = function () {
        T.clearTimeout(n);
      };
    });
  }, f = C.createElement("input"), ee = C.createElement("select").appendChild(C.createElement("option")), f.type = "checkbox", x.checkOn = "" !== f.value, x.optSelected = ee.selected, (f = C.createElement("input")).value = "t", f.type = "radio", x.radioValue = "t" === f.value;var yt,
      mt = E.expr.attrHandle;E.fn.extend({ attr: function attr(e, t) {
      return $(this, E.attr, e, t, 1 < arguments.length);
    }, removeAttr: function removeAttr(e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    } }), E.extend({ attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (r = i.get(e, t))) && null == (r = E.find.attr(e, t)) ? void 0 : r);
    }, attrHooks: { type: { set: function set(e, t) {
          if (!x.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(P);if (i && 1 === e.nodeType) for (; n = i[r++];) {
        e.removeAttribute(n);
      }
    } }), yt = { set: function set(e, t, n) {
      return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = mt[t] || E.find.attr;mt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();return n || (i = mt[o], mt[o] = r, r = null != a(e, t, n) ? o : null, mt[o] = i), r;
    };
  });var vt = /^(?:input|select|textarea|button)$/i,
      xt = /^(?:a|area)$/i;function bt(e) {
    return (e.match(P) || []).join(" ");
  }function wt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }function Tt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || [];
  }E.fn.extend({ prop: function prop(e, t) {
      return $(this, E.prop, e, t, 1 < arguments.length);
    }, removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    } }), E.extend({ prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function get(e) {
          var t = E.find.attr(e, "tabindex");return t ? parseInt(t, 10) : vt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), x.optSelected || (E.propHooks.selected = { get: function get(e) {
      e = e.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set: function set(e) {
      e = e.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    } }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    E.propFix[this.toLowerCase()] = this;
  }), E.fn.extend({ addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s = 0;if (g(t)) return this.each(function (e) {
        E(this).addClass(t.call(this, e, wt(this)));
      });if ((e = Tt(t)).length) for (; n = this[s++];) {
        if (a = wt(n), r = 1 === n.nodeType && " " + bt(a) + " ") {
          for (o = 0; i = e[o++];) {
            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
          }a !== (a = bt(r)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s = 0;if (g(t)) return this.each(function (e) {
        E(this).removeClass(t.call(this, e, wt(this)));
      });if (!arguments.length) return this.attr("class", "");if ((e = Tt(t)).length) for (; n = this[s++];) {
        if (a = wt(n), r = 1 === n.nodeType && " " + bt(a) + " ") {
          for (o = 0; i = e[o++];) {
            for (; -1 < r.indexOf(" " + i + " ");) {
              r = r.replace(" " + i + " ", " ");
            }
          }a !== (a = bt(r)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(i, t) {
      var o = typeof i === "undefined" ? "undefined" : _typeof(i),
          a = "string" == o || Array.isArray(i);return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : g(i) ? this.each(function (e) {
        E(this).toggleClass(i.call(this, e, wt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;if (a) for (t = 0, n = E(this), r = Tt(i); e = r[t++];) {
          n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
        } else void 0 !== i && "boolean" != o || ((e = wt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && Y.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(e) {
      for (var t, n = 0, r = " " + e + " "; t = this[n++];) {
        if (1 === t.nodeType && -1 < (" " + bt(wt(t)) + " ").indexOf(r)) return !0;
      }return !1;
    } });var Ct = /\r/g;E.fn.extend({ val: function val(t) {
      var n,
          e,
          r,
          i = this[0];return arguments.length ? (r = g(t), this.each(function (e) {
        1 === this.nodeType && (null == (e = r ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function (e) {
          return null == e ? "" : e + "";
        })), (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e));
      })) : i ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(Ct, "") : null == e ? "" : e : void 0;
    } }), E.extend({ valHooks: { option: { get: function get(e) {
          var t = E.find.attr(e, "value");return null != t ? t : bt(E.text(e));
        } }, select: { get: function get(e) {
          for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r : 0; s < a; s++) {
            if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !A(t.parentNode, "optgroup"))) {
              if (t = E(t).val(), i) return t;o.push(t);
            }
          }return o;
        }, set: function set(e, t) {
          for (var n, r, i = e.options, o = E.makeArray(t), a = i.length; a--;) {
            ((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
          }return n || (e.selectedIndex = -1), o;
        } } } }), E.each(["radio", "checkbox"], function () {
    E.valHooks[this] = { set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t);
      } }, x.checkOn || (E.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), x.focusin = "onfocusin" in T;function Et(e) {
    e.stopPropagation();
  }var St = /^(?:focusinfocus|focusoutblur)$/;E.extend(E.event, { trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = [n || C],
          p = v.call(e, "type") ? e.type : e,
          d = v.call(e, "namespace") ? e.namespace.split(".") : [],
          h = c = o = n = n || C;if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(p + E.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[E.expando] ? e : new E.Event(p, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), l = E.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
        if (!r && !l.noBubble && !y(n)) {
          for (a = l.delegateType || p, St.test(a + p) || (h = h.parentNode); h; h = h.parentNode) {
            f.push(h), o = h;
          }o === (n.ownerDocument || C) && f.push(o.defaultView || o.parentWindow || T);
        }for (i = 0; (h = f[i++]) && !e.isPropagationStopped();) {
          c = h, e.type = 1 < i ? a : l.bindType || p, (u = (Y.get(h, "events") || Object.create(null))[e.type] && Y.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && V(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
        }return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !V(n) || s && g(n[p]) && !y(n) && ((o = n[s]) && (n[s] = null), E.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Et), n[p](), e.isPropagationStopped() && c.removeEventListener(p, Et), E.event.triggered = void 0, o && (n[s] = o)), e.result;
      }
    }, simulate: function simulate(e, t, n) {
      e = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });E.event.trigger(e, null, t);
    } }), E.fn.extend({ trigger: function trigger(e, t) {
      return this.each(function () {
        E.event.trigger(e, t, this);
      });
    }, triggerHandler: function triggerHandler(e, t) {
      var n = this[0];if (n) return E.event.trigger(e, t, n, !0);
    } }), x.focusin || E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
    function i(e) {
      E.event.simulate(r, e.target, E.event.fix(e));
    }E.event.special[r] = { setup: function setup() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r);t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
      }, teardown: function teardown() {
        var e = this.ownerDocument || this.document || this,
            t = Y.access(e, r) - 1;t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
      } };
  });var kt = T.location,
      At = { guid: Date.now() },
      Nt = /\?/;E.parseXML = function (e) {
    var t, n;if (!e || "string" != typeof e) return null;try {
      t = new T.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function (e) {
      return e.textContent;
    }).join("\n") : e)), t;
  };var jt = /\[\]$/,
      Dt = /\r?\n/g,
      qt = /^(?:submit|button|image|reset|file)$/i,
      Lt = /^(?:input|select|textarea|keygen)/i;E.param = function (e, t) {
    function n(e, t) {
      t = g(t) ? t() : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t);
    }var r,
        i = [];if (null == e) return "";if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
      n(this.name, this.value);
    });else for (r in e) {
      !function n(r, e, i, o) {
        if (Array.isArray(e)) E.each(e, function (e, t) {
          i || jt.test(r) ? o(r, t) : n(r + "[" + ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null != t ? e : "") + "]", t, i, o);
        });else if (i || "object" !== h(e)) o(r, e);else for (var t in e) {
          n(r + "[" + t + "]", e[t], i, o);
        }
      }(r, e[r], t, n);
    }return i.join("&");
  }, E.fn.extend({ serialize: function serialize() {
      return E.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var e = E.prop(this, "elements");return e ? E.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !E(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !ce.test(e));
      }).map(function (e, t) {
        var n = E(this).val();return null == n ? null : Array.isArray(n) ? E.map(n, function (e) {
          return { name: t.name, value: e.replace(Dt, "\r\n") };
        }) : { name: t.name, value: n.replace(Dt, "\r\n") };
      }).get();
    } });var Ht = /%20/g,
      Ot = /#.*$/,
      Pt = /([?&])_=[^&]*/,
      Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Mt = /^(?:GET|HEAD)$/,
      It = /^\/\//,
      Wt = {},
      Ft = {},
      Bt = "*/".concat("*"),
      $t = C.createElement("a");function _t(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");var n,
          r = 0,
          i = e.toLowerCase().match(P) || [];if (g(t)) for (; n = i[r++];) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }function zt(t, r, i, o) {
    var a = {},
        s = t === Ft;function u(e) {
      var n;return a[e] = !0, E.each(t[e] || [], function (e, t) {
        t = t(r, i, o);return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1);
      }), n;
    }return u(r.dataTypes[0]) || !a["*"] && u("*");
  }function Ut(e, t) {
    var n,
        r,
        i = E.ajaxSettings.flatOptions || {};for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
    }return r && E.extend(!0, e, r), e;
  }$t.href = kt.href, E.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: kt.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
      return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e);
    }, ajaxPrefilter: _t(Wt), ajaxTransport: _t(Ft), ajax: function ajax(e, t) {
      "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (t = e, e = void 0);var u,
          l,
          c,
          n,
          f,
          p,
          d,
          r,
          i,
          h = E.ajaxSetup({}, t = t || {}),
          g = h.context || h,
          y = h.context && (g.nodeType || g.jquery) ? E(g) : E.event,
          m = E.Deferred(),
          v = E.Callbacks("once memory"),
          x = h.statusCode || {},
          o = {},
          a = {},
          s = "canceled",
          b = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
          var t;if (p) {
            if (!n) for (n = {}; t = Rt.exec(c);) {
              n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
            }t = n[e.toLowerCase() + " "];
          }return null == t ? null : t.join(", ");
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return p ? c : null;
        }, setRequestHeader: function setRequestHeader(e, t) {
          return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, o[e] = t), this;
        }, overrideMimeType: function overrideMimeType(e) {
          return null == p && (h.mimeType = e), this;
        }, statusCode: function statusCode(e) {
          if (e) if (p) b.always(e[b.status]);else for (var t in e) {
            x[t] = [x[t], e[t]];
          }return this;
        }, abort: function abort(e) {
          e = e || s;return u && u.abort(e), w(0, e), this;
        } };if (m.promise(b), h.url = ((e || h.url || kt.href) + "").replace(It, kt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(P) || [""], null == h.crossDomain) {
        i = C.createElement("a");try {
          i.href = h.url, i.href = i.href, h.crossDomain = $t.protocol + "//" + $t.host != i.protocol + "//" + i.host;
        } catch (e) {
          h.crossDomain = !0;
        }
      }if (h.data && h.processData && "string" != typeof h.data && (h.data = E.param(h.data, h.traditional)), zt(Wt, h, t, b), p) return b;for (r in (d = E.event && h.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Mt.test(h.type), l = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (i = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (Nt.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Pt, "$1"), i = (Nt.test(l) ? "&" : "?") + "_=" + At.guid++ + i), h.url = l + i), h.ifModified && (E.lastModified[l] && b.setRequestHeader("If-Modified-Since", E.lastModified[l]), E.etag[l] && b.setRequestHeader("If-None-Match", E.etag[l])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]), h.headers) {
        b.setRequestHeader(r, h.headers[r]);
      }if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();if (s = "abort", v.add(h.complete), b.done(h.success), b.fail(h.error), u = zt(Ft, h, t, b)) {
        if (b.readyState = 1, d && y.trigger("ajaxSend", [b, h]), p) return b;h.async && 0 < h.timeout && (f = T.setTimeout(function () {
          b.abort("timeout");
        }, h.timeout));try {
          p = !1, u.send(o, w);
        } catch (e) {
          if (p) throw e;w(-1, e);
        }
      } else w(-1, "No Transport");function w(e, t, n, r) {
        var i,
            o,
            a,
            s = t;p || (p = !0, f && T.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function (e, t, n) {
          for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);break;
            }
          }if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;break;
              }a = a || i;
            }o = o || a;
          }if (o) return o !== u[0] && u.unshift(o), n[o];
        }(h, b, n)), !r && -1 < E.inArray("script", h.dataTypes) && E.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), a = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }for (o = c.shift(); o;) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));break;
                }
              }if (!0 !== a) if (a && e.throws) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
              }
            }
          }return { state: "success", data: t };
        }(h, a, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (E.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (E.etag[l] = n)), 204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i = a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? m.resolveWith(g, [i, s, b]) : m.rejectWith(g, [b, s, o]), b.statusCode(x), x = void 0, d && y.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? i : o]), v.fireWith(g, [b, s]), d && (y.trigger("ajaxComplete", [b, h]), --E.active || E.event.trigger("ajaxStop")));
      }return b;
    }, getJSON: function getJSON(e, t, n) {
      return E.get(e, t, n, "json");
    }, getScript: function getScript(e, t) {
      return E.get(e, void 0, t, "script");
    } }), E.each(["get", "post"], function (e, i) {
    E[i] = function (e, t, n, r) {
      return g(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({ url: e, type: i, dataType: r, data: t, success: n }, E.isPlainObject(e) && e));
    };
  }), E.ajaxPrefilter(function (e) {
    for (var t in e.headers) {
      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
    }
  }), E._evalUrl = function (e, t, n) {
    return E.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function textScript() {} }, dataFilter: function dataFilter(e) {
        E.globalEval(e, t, n);
      } });
  }, E.fn.extend({ wrapAll: function wrapAll(e) {
      return this[0] && (g(e) && (e = e.call(this[0])), e = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var e = this; e.firstElementChild;) {
          e = e.firstElementChild;
        }return e;
      }).append(this)), this;
    }, wrapInner: function wrapInner(n) {
      return g(n) ? this.each(function (e) {
        E(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = E(this),
            t = e.contents();t.length ? t.wrapAll(n) : e.append(n);
      });
    }, wrap: function wrap(t) {
      var n = g(t);return this.each(function (e) {
        E(this).wrapAll(n ? t.call(this, e) : t);
      });
    }, unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        E(this).replaceWith(this.childNodes);
      }), this;
    } }), E.expr.pseudos.hidden = function (e) {
    return !E.expr.pseudos.visible(e);
  }, E.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, E.ajaxSettings.xhr = function () {
    try {
      return new T.XMLHttpRequest();
    } catch (e) {}
  };var Xt = { 0: 200, 1223: 204 },
      Vt = E.ajaxSettings.xhr();x.cors = !!Vt && "withCredentials" in Vt, x.ajax = Vt = !!Vt, E.ajaxTransport(function (i) {
    var _o, a;if (x.cors || Vt && !i.crossDomain) return { send: function send(e, t) {
        var n,
            r = i.xhr();if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }_o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Xt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && T.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      }, abort: function abort() {
        _o && _o();
      } };
  }), E.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), E.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(e) {
        return E.globalEval(e), e;
      } } }), E.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), E.ajaxTransport("script", function (n) {
    var r, _i;if (n.crossDomain || n.scriptAttrs) return { send: function send(e, t) {
        r = E("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), C.head.appendChild(r[0]);
      }, abort: function abort() {
        _i && _i();
      } };
  });var Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;E.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || E.expando + "_" + At.guid++;return this[e] = !0, e;
    } }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || E.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = T[r], T[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? E(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && g(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), x.createHTMLDocument = ((f = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === f.childNodes.length), E.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (x.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(r)) : t = C), r = !n && [], (n = N.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, r), r && r.length && E(r).remove(), E.merge([], n.childNodes)));var r;
  }, E.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");return -1 < s && (r = bt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (i = "POST"), 0 < a.length && E.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function (e) {
      o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, E.expr.pseudos.animated = function (t) {
    return E.grep(E.timers, function (e) {
      return t === e.elem;
    }).length;
  }, E.offset = { setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s = E.css(e, "position"),
          u = E(e),
          l = {};"static" === s && (e.style.position = "relative"), o = u.offset(), r = E.css(e, "top"), a = E.css(e, "left"), a = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (i = (s = u.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = g(t) ? t.call(e, n, E.extend({}, o)) : t).top && (l.top = t.top - o.top + i), null != t.left && (l.left = t.left - o.left + a), "using" in t ? t.using.call(e, l) : u.css(l);
    } }, E.fn.extend({ offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        E.offset.setOffset(this, t, e);
      });var e,
          n = this[0];return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();else {
          for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) {
            e = e.parentNode;
          }e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0));
        }return { top: t.top - i.top - E.css(r, "marginTop", !0), left: t.left - i.left - E.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var e = this.offsetParent; e && "static" === E.css(e, "position");) {
          e = e.offsetParent;
        }return e || re;
      });
    } }), E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, i) {
    var o = "pageYOffset" === i;E.fn[t] = function (e) {
      return $(this, function (e, t, n) {
        var r;return y(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n);
      }, t, e, arguments.length);
    };
  }), E.each(["top", "left"], function (e, n) {
    E.cssHooks[n] = Xe(x.pixelPosition, function (e, t) {
      if (t) return t = Ue(e, n), _e.test(t) ? E(e).position()[n] + "px" : t;
    });
  }), E.each({ Height: "height", Width: "width" }, function (a, s) {
    E.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
      E.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");return $(this, function (e, t, n) {
          var r;return y(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    E.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), E.fn.extend({ bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function unbind(e, t) {
      return this.off(e, null, t);
    }, delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }, hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    } }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    E.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  });var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;E.proxy = function (e, t) {
    var n, r;if ("string" == typeof t && (r = e[t], t = e, e = r), g(e)) return n = s.call(arguments, 2), (r = function r() {
      return e.apply(t || this, n.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || E.guid++, r;
  }, E.holdReady = function (e) {
    e ? E.readyWait++ : E.ready(!0);
  }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = g, E.isWindow = y, E.camelCase = X, E.type = h, E.now = Date.now, E.isNumeric = function (e) {
    var t = E.type(e);return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  }, E.trim = function (e) {
    return null == e ? "" : (e + "").replace(Qt, "");
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return E;
  });var Jt = T.jQuery,
      Kt = T.$;return E.noConflict = function (e) {
    return T.$ === E && (T.$ = Kt), e && T.jQuery === E && (T.jQuery = Jt), E;
  }, void 0 === e && (T.jQuery = T.$ = E), E;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t();
}(undefined, function () {
  "use strict";
  function r(e) {
    return e && "[object Function]" === {}.toString.call(e);
  }function d(e, t) {
    if (1 !== e.nodeType) return [];e = e.ownerDocument.defaultView.getComputedStyle(e, null);return t ? e[t] : e;
  }function p(e) {
    return "HTML" === e.nodeName ? e : e.parentNode || e.host;
  }function l(e) {
    if (!e) return document.body;switch (e.nodeName) {case "HTML":case "BODY":
        return e.ownerDocument.body;case "#document":
        return e.body;}var t = d(e),
        n = t.overflow,
        o = t.overflowX,
        t = t.overflowY;return (/(auto|scroll|overlay)/.test(n + t + o) ? e : l(p(e))
    );
  }function u(e) {
    return e && e.referenceNode ? e.referenceNode : e;
  }function c(e) {
    return 11 === e ? V : 10 !== e && V || q;
  }function m(e) {
    if (!e) return document.documentElement;for (var t = c(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }var o = n && n.nodeName;return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === d(n, "position") ? m(n) : n : (e ? e.ownerDocument : document).documentElement;
  }function i(e) {
    return null === e.parentNode ? e : i(e.parentNode);
  }function h(e, t) {
    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        o = n ? e : t,
        r = n ? t : e,
        n = document.createRange();n.setStart(o, 0), n.setEnd(r, 0);n = n.commonAncestorContainer;if (e !== n && t !== n || o.contains(r)) return "BODY" === (r = (o = n).nodeName) || "HTML" !== r && m(o.firstElementChild) !== o ? m(n) : n;n = i(e);return n.host ? h(n.host, t) : h(e, i(t).host);
  }function g(e, t) {
    var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
        t = e.nodeName;if ("BODY" !== t && "HTML" !== t) return e[n];t = e.ownerDocument.documentElement;return (e.ownerDocument.scrollingElement || t)[n];
  }function s(e, t) {
    var n = "x" === t ? "Left" : "Top",
        t = "Left" == n ? "Right" : "Bottom";return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + t + "Width"]);
  }function o(e, t, n, o) {
    return I(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], c(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0);
  }function b(e) {
    var t = e.body,
        n = e.documentElement,
        e = c(10) && getComputedStyle(n);return { height: o("Height", t, n, e), width: o("Width", t, n, e) };
  }function v(e) {
    return G({}, e, { right: e.left + e.width, bottom: e.top + e.height });
  }function w(e) {
    var t = {};try {
      c(10) ? (t = e.getBoundingClientRect(), n = g(e, "top"), o = g(e, "left"), t.top += n, t.left += o, t.bottom += n, t.right += o) : t = e.getBoundingClientRect();
    } catch (e) {}var n = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
        o = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
        t = o.width || e.clientWidth || n.width,
        o = o.height || e.clientHeight || n.height,
        t = e.offsetWidth - t,
        o = e.offsetHeight - o;return (t || o) && (t -= s(e = d(e), "x"), o -= s(e, "y"), n.width -= t, n.height -= o), v(n);
  }function y(e, t, n) {
    var o = 2 < arguments.length && void 0 !== n && n,
        r = c(10),
        i = "HTML" === t.nodeName,
        s = w(e),
        f = w(t),
        a = l(e),
        p = d(t),
        n = parseFloat(p.borderTopWidth),
        e = parseFloat(p.borderLeftWidth);o && i && (f.top = I(f.top, 0), f.left = I(f.left, 0));s = v({ top: s.top - f.top - n, left: s.left - f.left - e, width: s.width, height: s.height });return s.marginTop = 0, s.marginLeft = 0, !r && i && (i = parseFloat(p.marginTop), p = parseFloat(p.marginLeft), s.top -= n - i, s.bottom -= n - i, s.left -= e - p, s.right -= e - p, s.marginTop = i, s.marginLeft = p), s = (r && !o ? t.contains(a) : t === a && "BODY" !== a.nodeName) ? function (e, t, n) {
      var o = 2 < arguments.length && void 0 !== n && n,
          n = g(t, "top"),
          t = g(t, "left"),
          o = o ? -1 : 1;return e.top += n * o, e.bottom += n * o, e.left += t * o, e.right += t * o, e;
    }(s, t) : s;
  }function E(e) {
    if (!e || !e.parentElement || c()) return document.documentElement;for (var t = e.parentElement; t && "none" === d(t, "transform");) {
      t = t.parentElement;
    }return t || document.documentElement;
  }function x(e, t, n, o, r) {
    var i,
        s = 4 < arguments.length && void 0 !== r && r,
        f = { top: 0, left: 0 },
        r = s ? E(e) : h(e, u(t));"viewport" === o ? f = function (e, t) {
      var n = 1 < arguments.length && void 0 !== t && t,
          o = e.ownerDocument.documentElement,
          r = y(e, o),
          i = I(o.clientWidth, window.innerWidth || 0),
          t = I(o.clientHeight, window.innerHeight || 0),
          e = n ? 0 : g(o),
          o = n ? 0 : g(o, "left");return v({ top: e - r.top + r.marginTop, left: o - r.left + r.marginLeft, width: i, height: t });
    }(r, s) : ("scrollParent" === o ? "BODY" === (i = l(p(t))).nodeName && (i = e.ownerDocument.documentElement) : i = "window" === o ? e.ownerDocument.documentElement : o, a = y(i, r, s), "HTML" !== i.nodeName || function e(t) {
      var n = t.nodeName;if ("BODY" === n || "HTML" === n) return !1;if ("fixed" === d(t, "position")) return !0;t = p(t);return !!t && e(t);
    }(r) ? f = a : (e = (r = b(e.ownerDocument)).height, r = r.width, f.top += a.top - a.marginTop, f.bottom = e + a.top, f.left += a.left - a.marginLeft, f.right = r + a.left));var a = "number" == typeof (n = n || 0);return f.left += a ? n : n.left || 0, f.top += a ? n : n.top || 0, f.right -= a ? n : n.right || 0, f.bottom -= a ? n : n.bottom || 0, f;
  }function f(e, t, n, o, r, i) {
    i = 5 < arguments.length && void 0 !== i ? i : 0;if (-1 === e.indexOf("auto")) return e;var r = x(n, o, i, r),
        s = { top: { width: r.width, height: t.top - r.top }, right: { width: r.right - t.right, height: r.height }, bottom: { width: r.width, height: r.bottom - t.bottom }, left: { width: t.left - r.left, height: r.height } },
        t = Object.keys(s).map(function (e) {
      return G({ key: e }, s[e], { area: (e = s[e]).width * e.height });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        r = t.filter(function (e) {
      var t = e.width,
          e = e.height;return t >= n.clientWidth && e >= n.clientHeight;
    }),
        t = (0 < r.length ? r : t)[0].key,
        e = e.split("-")[1];return t + (e ? "-" + e : "");
  }function a(e, t, n, o) {
    o = 3 < arguments.length && void 0 !== o ? o : null;return y(n, o ? E(t) : h(t, u(n)), o);
  }function O(e) {
    var t = e.ownerDocument.defaultView.getComputedStyle(e),
        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
        t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);return { width: e.offsetWidth + t, height: e.offsetHeight + n };
  }function L(e) {
    var t = { left: "right", right: "left", bottom: "top", top: "bottom" };return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }function T(e, t, n) {
    n = n.split("-")[0];var o = O(e),
        r = { width: o.width, height: o.height },
        i = -1 !== ["right", "left"].indexOf(n),
        s = i ? "top" : "left",
        f = i ? "left" : "top",
        e = i ? "height" : "width",
        i = i ? "width" : "height";return r[s] = t[s] + t[e] / 2 - o[e] / 2, r[f] = n === f ? t[f] - o[i] : t[L(f)], r;
  }function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }function N(e, n, t) {
    return (void 0 === t ? e : e.slice(0, function (e, t, n) {
      if (Array.prototype.findIndex) return e.findIndex(function (e) {
        return e[t] === n;
      });var o = D(e, function (e) {
        return e[t] === n;
      });return e.indexOf(o);
    }(e, "name", t))).forEach(function (e) {
      e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t = e.function || e.fn;e.enabled && r(t) && (n.offsets.popper = v(n.offsets.popper), n.offsets.reference = v(n.offsets.reference), n = t(n, e));
    }), n;
  }function e(e, n) {
    return e.some(function (e) {
      var t = e.name;return e.enabled && t === n;
    });
  }function F(e) {
    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
      var r = t[o],
          r = r ? "" + r + n : e;if (void 0 !== document.body.style[r]) return r;
    }return null;
  }function H(e) {
    e = e.ownerDocument;return e ? e.defaultView : window;
  }function t(e, t, n, o) {
    n.updateBound = o, H(e).addEventListener("resize", n.updateBound, { passive: !0 });e = l(e);return function e(t, n, o, r) {
      var i = "BODY" === t.nodeName,
          t = i ? t.ownerDocument.defaultView : t;t.addEventListener(n, o, { passive: !0 }), i || e(l(t.parentNode), n, o, r), r.push(t);
    }(e, "scroll", n.updateBound, n.scrollParents), n.scrollElement = e, n.eventsEnabled = !0, n;
  }function n() {
    var e, t;this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, H(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener("scroll", t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t));
  }function C(e) {
    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }function k(n, o) {
    Object.keys(o).forEach(function (e) {
      var t = "";-1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && C(o[e]) && (t = "px"), n.style[e] = o[e] + t;
    });
  }function B(e, t, n) {
    var o = D(e, function (e) {
      return e.name === t;
    }),
        r = !!o && e.some(function (e) {
      return e.name === n && e.enabled && e.order < o.order;
    });return r || (e = "`" + t + "`", console.warn("`" + n + "` modifier is required by " + e + " modifier in order to work, be sure to include it before " + e + "!")), r;
  }function A(e, t) {
    t = 1 < arguments.length && void 0 !== t && t, e = J.indexOf(e), e = J.slice(e + 1).concat(J.slice(0, e));return t ? e.reverse() : e;
  }function M(e, f, a, t) {
    var r = [0, 0],
        o = -1 !== ["right", "left"].indexOf(t),
        n = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        t = n.indexOf(D(n, function (e) {
      return -1 !== e.search(/,|\s/);
    }));n[t] && -1 === n[t].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");e = /\s*,\s*|\s+/;return (-1 === t ? [n] : [n.slice(0, t).concat([n[t].split(e)[0]]), [n[t].split(e)[1]].concat(n.slice(t + 1))]).map(function (e, t) {
      var s = (1 === t ? !o : o) ? "height" : "width",
          n = !1;return e.reduce(function (e, t) {
        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, n = !0, e) : n ? (e[e.length - 1] += t, n = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return n = s, o = f, r = a, e = +(i = (t = e).match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1], i = i[2], e ? 0 !== i.indexOf("%") ? "vh" !== i && "vw" !== i ? e : ("vh" === i ? I(document.documentElement.clientHeight, window.innerHeight || 0) : I(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * e : v(r = "%p" === i ? o : r)[n] / 100 * e : t;var t, n, o, r, i;
      });
    }).forEach(function (n, o) {
      n.forEach(function (e, t) {
        C(e) && (r[o] += e * ("-" === n[t - 1] ? -1 : 1));
      });
    }), r;
  }function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }var S = Math.min,
      W = Math.floor,
      j = Math.round,
      I = Math.max,
      R = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
      U = function () {
    for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) {
      if (R && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
    }return 0;
  }(),
      Y = R && window.Promise ? function (e) {
    var t = !1;return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, U));
    };
  },
      V = R && !(!window.MSInputMethodContext || !document.documentMode),
      q = R && /MSIE 10/.test(navigator.userAgent),
      z = function z(e, t, n) {
    return t && ee(e.prototype, t), n && ee(e, n), e;
  },
      G = Object.assign || function (e) {
    for (var t, n = 1; n < arguments.length; n++) {
      for (var o in t = arguments[n]) {
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
      }
    }return e;
  },
      _ = R && /Firefox/i.test(navigator.userAgent),
      X = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
      J = X.slice(3),
      K = "flip",
      Q = "clockwise",
      Z = "counterclockwise",
      z = (z($, [{ key: "update", value: function value() {
      return function () {
        var e;this.state.isDestroyed || ((e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }).offsets.reference = a(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = f(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = N(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)));
      }.call(this);
    } }, { key: "destroy", value: function value() {
      return function () {
        return this.state.isDestroyed = !0, e(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
      }.call(this);
    } }, { key: "enableEventListeners", value: function value() {
      return function () {
        this.state.eventsEnabled || (this.state = t(this.reference, this.options, this.state, this.scheduleUpdate));
      }.call(this);
    } }, { key: "disableEventListeners", value: function value() {
      return n.call(this);
    } }]), $);function $(e, t) {
    var n = this,
        o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};(function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    })(this, $), this.scheduleUpdate = function () {
      return requestAnimationFrame(n.update);
    }, this.update = Y(this.update.bind(this)), this.options = G({}, $.Defaults, o), this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(G({}, $.Defaults.modifiers, o.modifiers)).forEach(function (e) {
      n.options.modifiers[e] = G({}, $.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {});
    }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
      return G({ name: e }, n.options.modifiers[e]);
    }).sort(function (e, t) {
      return e.order - t.order;
    }), this.modifiers.forEach(function (e) {
      e.enabled && r(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state);
    }), this.update();t = this.options.eventsEnabled;t && this.enableEventListeners(), this.state.eventsEnabled = t;
  }function ee(e, t) {
    for (var n, o = 0; o < t.length; o++) {
      (n = t[o]).enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }return z.Utils = ("undefined" == typeof window ? global : window).PopperUtils, z.placements = X, z.Defaults = { placement: "bottom", positionFixed: !1, eventsEnabled: !0, removeOnDestroy: !1, onCreate: function onCreate() {}, onUpdate: function onUpdate() {}, modifiers: { shift: { order: 100, enabled: !0, fn: function fn(e) {
          var t,
              n,
              o = e.placement,
              r = o.split("-")[0],
              i = o.split("-")[1];return i && (t = (n = e.offsets).reference, o = n.popper, r = (n = -1 !== ["bottom", "top"].indexOf(r)) ? "width" : "height", r = { start: P({}, n = n ? "left" : "top", t[n]), end: P({}, n, t[n] + t[r] - o[r]) }, e.offsets.popper = G({}, o, r[i])), e;
        } }, offset: { order: 200, enabled: !0, fn: function fn(e, t) {
          var n = t.offset,
              o = e.placement,
              t = (r = e.offsets).popper,
              r = r.reference,
              o = o.split("-")[0],
              r = C(+n) ? [+n, 0] : M(n, t, r, o);return "left" === o ? (t.top += r[0], t.left -= r[1]) : "right" === o ? (t.top += r[0], t.left += r[1]) : "top" === o ? (t.left += r[0], t.top -= r[1]) : "bottom" === o && (t.left += r[0], t.top += r[1]), e.popper = t, e;
        }, offset: 0 }, preventOverflow: { order: 300, enabled: !0, fn: function fn(e, o) {
          var t = o.boundariesElement || m(e.instance.popper);e.instance.reference === t && (t = m(t));var n = F("transform"),
              r = e.instance.popper.style,
              i = r.top,
              s = r.left,
              f = r[n];r.top = "", r.left = "", r[n] = "";var a = x(e.instance.popper, e.instance.reference, o.padding, t, e.positionFixed);r.top = i, r.left = s, r[n] = f, o.boundaries = a;var f = o.priority,
              p = e.offsets.popper,
              l = { primary: function primary(e) {
              var t = p[e];return p[e] < a[e] && !o.escapeWithReference && (t = I(p[e], a[e])), P({}, e, t);
            }, secondary: function secondary(e) {
              var t = "right" === e ? "left" : "top",
                  n = p[t];return p[e] > a[e] && !o.escapeWithReference && (n = S(p[t], a[e] - ("right" === e ? p.width : p.height))), P({}, t, n);
            } };return f.forEach(function (e) {
            var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";p = G({}, p, l[t](e));
          }), e.offsets.popper = p, e;
        }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent" }, keepTogether: { order: 400, enabled: !0, fn: function fn(e) {
          var t = e.offsets,
              n = t.popper,
              o = t.reference,
              r = e.placement.split("-")[0],
              i = W,
              s = -1 !== ["top", "bottom"].indexOf(r),
              t = s ? "right" : "bottom",
              r = s ? "left" : "top",
              s = s ? "width" : "height";return n[t] < i(o[r]) && (e.offsets.popper[r] = i(o[r]) - n[s]), n[r] > i(o[t]) && (e.offsets.popper[r] = i(o[t])), e;
        } }, arrow: { order: 500, enabled: !0, fn: function fn(e, t) {
          if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;var n = t.element;if ("string" == typeof n) {
            if (!(n = e.instance.popper.querySelector(n))) return e;
          } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;var o = e.placement.split("-")[0],
              r = e.offsets,
              i = r.popper,
              s = r.reference,
              f = -1 !== ["left", "right"].indexOf(o),
              a = f ? "height" : "width",
              p = f ? "Top" : "Left",
              l = p.toLowerCase(),
              t = f ? "left" : "top",
              r = f ? "bottom" : "right",
              o = O(n)[a];s[r] - o < i[l] && (e.offsets.popper[l] -= i[l] - (s[r] - o)), s[l] + o > i[r] && (e.offsets.popper[l] += s[l] + o - i[r]), e.offsets.popper = v(e.offsets.popper);f = s[l] + s[a] / 2 - o / 2, r = d(e.instance.popper), s = parseFloat(r["margin" + p]), p = parseFloat(r["border" + p + "Width"]), p = f - e.offsets.popper[l] - s - p, p = I(S(i[a] - o, p), 0);return e.arrowElement = n, e.offsets.arrow = (P(n = {}, l, j(p)), P(n, t, ""), n), e;
        }, element: "[x-arrow]" }, flip: { order: 600, enabled: !0, fn: function fn(p, l) {
          if (e(p.instance.modifiers, "inner")) return p;if (p.flipped && p.placement === p.originalPlacement) return p;var d = x(p.instance.popper, p.instance.reference, l.padding, l.boundariesElement, p.positionFixed),
              u = p.placement.split("-")[0],
              c = L(u),
              h = p.placement.split("-")[1] || "",
              m = [];switch (l.behavior) {case K:
              m = [u, c];break;case Q:
              m = A(u);break;case Z:
              m = A(u, !0);break;default:
              m = l.behavior;}return m.forEach(function (e, t) {
            if (u !== e || m.length === t + 1) return p;u = p.placement.split("-")[0], c = L(u);var n = p.offsets.popper,
                o = p.offsets.reference,
                r = W,
                i = "left" === u && r(n.right) > r(o.left) || "right" === u && r(n.left) < r(o.right) || "top" === u && r(n.bottom) > r(o.top) || "bottom" === u && r(n.top) < r(o.bottom),
                s = r(n.left) < r(d.left),
                f = r(n.right) > r(d.right),
                a = r(n.top) < r(d.top),
                e = r(n.bottom) > r(d.bottom),
                o = "left" === u && s || "right" === u && f || "top" === u && a || "bottom" === u && e,
                n = -1 !== ["top", "bottom"].indexOf(u),
                r = !!l.flipVariations && (n && "start" === h && s || n && "end" === h && f || !n && "start" === h && a || !n && "end" === h && e),
                a = !!l.flipVariationsByContent && (n && "start" === h && f || n && "end" === h && s || !n && "start" === h && e || !n && "end" === h && a),
                a = r || a;(i || o || a) && (p.flipped = !0, (i || o) && (u = m[t + 1]), a && (h = "end" === (a = h) ? "start" : "start" === a ? "end" : a), p.placement = u + (h ? "-" + h : ""), p.offsets.popper = G({}, p.offsets.popper, T(p.instance.popper, p.offsets.reference, p.placement)), p = N(p.instance.modifiers, p, "flip"));
          }), p;
        }, behavior: "flip", padding: 5, boundariesElement: "viewport", flipVariations: !1, flipVariationsByContent: !1 }, inner: { order: 700, enabled: !1, fn: function fn(e) {
          var t = e.placement,
              n = t.split("-")[0],
              o = e.offsets,
              r = o.popper,
              i = o.reference,
              s = -1 !== ["left", "right"].indexOf(n),
              o = -1 === ["top", "left"].indexOf(n);return r[s ? "left" : "top"] = i[n] - (o ? r[s ? "width" : "height"] : 0), e.placement = L(t), e.offsets.popper = v(r), e;
        } }, hide: { order: 800, enabled: !0, fn: function fn(e) {
          if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;var t = e.offsets.reference,
              n = D(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (!0 === e.hide) return e;e.hide = !0, e.attributes["x-out-of-boundaries"] = "";
          } else {
            if (!1 === e.hide) return e;e.hide = !1, e.attributes["x-out-of-boundaries"] = !1;
          }return e;
        } }, computeStyle: { order: 850, enabled: !0, fn: function fn(e, t) {
          var n = t.x,
              o = t.y,
              r = e.offsets.popper,
              i = D(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,
              f,
              a,
              p,
              l = void 0 === i ? t.gpuAcceleration : i,
              d = m(e.instance.popper),
              u = w(d),
              c = { position: r.position },
              t = (s = e, f = window.devicePixelRatio < 2 || !_, h = (p = s.offsets).popper, a = p.reference, t = function t(e) {
            return e;
          }, r = (i = j)(a.width), p = i(h.width), a = -1 !== ["left", "right"].indexOf(s.placement), s = -1 !== s.placement.indexOf("-"), a = f ? a || s || r % 2 == p % 2 ? i : W : t, t = f ? i : t, { left: a(1 == r % 2 && 1 == p % 2 && !s && f ? h.left - 1 : h.left), top: t(h.top), bottom: t(h.bottom), right: a(h.right) }),
              a = "bottom" === n ? "top" : "bottom",
              h = "right" === o ? "left" : "right",
              n = F("transform"),
              o = "bottom" == a ? "HTML" === d.nodeName ? -d.clientHeight + t.bottom : -u.height + t.bottom : t.top,
              t = "right" == h ? "HTML" === d.nodeName ? -d.clientWidth + t.right : -u.width + t.right : t.left;l && n ? (c[n] = "translate3d(" + t + "px, " + o + "px, 0)", c[a] = 0, c[h] = 0, c.willChange = "transform") : (n = "right" == h ? -1 : 1, c[a] = o * ("bottom" == a ? -1 : 1), c[h] = t * n, c.willChange = a + ", " + h);var h = { "x-placement": e.placement };return e.attributes = G({}, h, e.attributes), e.styles = G({}, c, e.styles), e.arrowStyles = G({}, e.offsets.arrow, e.arrowStyles), e;
        }, gpuAcceleration: !0, x: "bottom", y: "right" }, applyStyle: { order: 900, enabled: !0, fn: function fn(e) {
          return k(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function (e) {
            !1 === n[e] ? t.removeAttribute(e) : t.setAttribute(e, n[e]);
          }), e.arrowElement && Object.keys(e.arrowStyles).length && k(e.arrowElement, e.arrowStyles), e;var t, n;
        }, onLoad: function onLoad(e, t, n, o, r) {
          r = a(r, t, e, n.positionFixed), e = f(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);return t.setAttribute("x-placement", e), k(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
        }, gpuAcceleration: void 0 } } }, z;
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = {}, t.jQuery, t.Popper);
}(undefined, function (t, e, n) {
  "use strict";
  function i(t) {
    return t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "default" in t ? t : { default: t };
  }var d = i(e),
      o = i(n);function s(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function a(t, e, n) {
    return e && s(t.prototype, e), n && s(t, n), t;
  }function l() {
    return (l = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n,
            i = arguments[e];for (n in i) {
          Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
      }return t;
    }).apply(this, arguments);
  }var c = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
    }, getSelectorFromElement: function getSelectorFromElement(t) {
      var e,
          n = t.getAttribute("data-target");n && "#" !== n || (n = (e = t.getAttribute("href")) && "#" !== e ? e.trim() : "");try {
        return document.querySelector(n) ? n : null;
      } catch (t) {
        return null;
      }
    }, getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
      if (!t) return 0;var e = d.default(t).css("transition-duration"),
          n = d.default(t).css("transition-delay"),
          i = parseFloat(e),
          t = parseFloat(n);return i || t ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(e) + parseFloat(n))) : 0;
    }, reflow: function reflow(t) {
      return t.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(t) {
      d.default(t).trigger("transitionend");
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean("transitionend");
    }, isElement: function isElement(t) {
      return (t[0] || t).nodeType;
    }, typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
              s = e[i],
              s = s && c.isElement(s) ? "element" : null === s || void 0 === s ? "" + s : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }
    }, findShadowRoot: function findShadowRoot(t) {
      if (!document.documentElement.attachShadow) return null;if ("function" != typeof t.getRootNode) return t instanceof ShadowRoot ? t : t.parentNode ? c.findShadowRoot(t.parentNode) : null;t = t.getRootNode();return t instanceof ShadowRoot ? t : null;
    }, jQueryDetection: function jQueryDetection() {
      if (void 0 === d.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t = d.default.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    } };c.jQueryDetection(), d.default.fn.emulateTransitionEnd = function (t) {
    var e = this,
        n = !1;return d.default(this).one(c.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || c.triggerTransitionEnd(e);
    }, t), this;
  }, d.default.event.special[c.TRANSITION_END] = { bindType: "transitionend", delegateType: "transitionend", handle: function handle(t) {
      if (d.default(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    } };var r = "alert",
      u = d.default.fn[r],
      f = ((n = h.prototype).close = function (t) {
    var e = this._element;t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.alert"), this._element = null;
  }, n._getRootElement = function (t) {
    var e = c.getSelectorFromElement(t),
        n = !1;return n = (n = e ? document.querySelector(e) : n) || d.default(t).closest(".alert")[0];
  }, n._triggerCloseEvent = function (t) {
    var e = d.default.Event("close.bs.alert");return d.default(t).trigger(e), e;
  }, n._removeElement = function (e) {
    var t,
        n = this;d.default(e).removeClass("show"), d.default(e).hasClass("fade") ? (t = c.getTransitionDurationFromElement(e), d.default(e).one(c.TRANSITION_END, function (t) {
      return n._destroyElement(e, t);
    }).emulateTransitionEnd(t)) : this._destroyElement(e);
  }, n._destroyElement = function (t) {
    d.default(t).detach().trigger("closed.bs.alert").remove();
  }, h._jQueryInterface = function (n) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.alert");e || (e = new h(this), t.data("bs.alert", e)), "close" === n && e[n](this);
    });
  }, h._handleDismiss = function (e) {
    return function (t) {
      t && t.preventDefault(), e.close(this);
    };
  }, a(h, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }]), h);function h(t) {
    this._element = t;
  }d.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f())), d.default.fn[r] = f._jQueryInterface, d.default.fn[r].Constructor = f, d.default.fn[r].noConflict = function () {
    return d.default.fn[r] = u, f._jQueryInterface;
  };var g = d.default.fn.button,
      m = ((n = p.prototype).toggle = function () {
    var t,
        e = !0,
        n = !0,
        i = d.default(this._element).closest('[data-toggle="buttons"]')[0];!i || (t = this._element.querySelector('input:not([type="hidden"])')) && ("radio" === t.type && (t.checked && this._element.classList.contains("active") ? e = !1 : (i = i.querySelector(".active")) && d.default(i).removeClass("active")), e && ("checkbox" !== t.type && "radio" !== t.type || (t.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || d.default(t).trigger("change")), t.focus(), n = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && d.default(this._element).toggleClass("active"));
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.button"), this._element = null;
  }, p._jQueryInterface = function (n, i) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.button");e || (e = new p(this), t.data("bs.button", e)), e.shouldAvoidTriggerChange = i, "toggle" === n && e[n]();
    });
  }, a(p, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }]), p);function p(t) {
    this._element = t, this.shouldAvoidTriggerChange = !1;
  }d.default(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e,
        n = t.target,
        i = n;!(n = !d.default(n).hasClass("btn") ? d.default(n).closest(".btn")[0] : n) || n.hasAttribute("disabled") || n.classList.contains("disabled") || (e = n.querySelector('input:not([type="hidden"])')) && (e.hasAttribute("disabled") || e.classList.contains("disabled")) ? t.preventDefault() : "INPUT" !== i.tagName && "LABEL" === n.tagName || m._jQueryInterface.call(d.default(n), "toggle", "INPUT" === i.tagName);
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (t) {
    var e = d.default(t.target).closest(".btn")[0];d.default(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
  }), d.default(window).on("load.bs.button.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), e = 0, n = t.length; e < n; e++) {
      var i = t[e],
          o = i.querySelector('input:not([type="hidden"])');o.checked || o.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
    }for (var s = 0, a = (t = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; s < a; s++) {
      var l = t[s];"true" === l.getAttribute("aria-pressed") ? l.classList.add("active") : l.classList.remove("active");
    }
  }), d.default.fn.button = m._jQueryInterface, d.default.fn.button.Constructor = m, d.default.fn.button.noConflict = function () {
    return d.default.fn.button = g, m._jQueryInterface;
  };var _ = "carousel",
      v = d.default.fn[_],
      b = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
      y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
      E = { TOUCH: "touch", PEN: "pen" },
      w = ((n = T.prototype).next = function () {
    this._isSliding || this._slide("next");
  }, n.nextWhenVisible = function () {
    var t = d.default(this._element);!document.hidden && t.is(":visible") && "hidden" !== t.css("visibility") && this.next();
  }, n.prev = function () {
    this._isSliding || this._slide("prev");
  }, n.pause = function (t) {
    t || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
  }, n.cycle = function (t) {
    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
  }, n.to = function (t) {
    var e = this;this._activeElement = this._element.querySelector(".active.carousel-item");var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) d.default(this._element).one("slid.bs.carousel", function () {
      return e.to(t);
    });else {
      if (n === t) return this.pause(), void this.cycle();this._slide(n < t ? "next" : "prev", this._items[t]);
    }
  }, n.dispose = function () {
    d.default(this._element).off(".bs.carousel"), d.default.removeData(this._element, "bs.carousel"), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
  }, n._getConfig = function (t) {
    return t = l({}, b, t), c.typeCheckConfig(_, t, y), t;
  }, n._handleSwipe = function () {
    var t = Math.abs(this.touchDeltaX);t <= 40 || (t = t / this.touchDeltaX, (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next());
  }, n._addEventListeners = function () {
    var e = this;this._config.keyboard && d.default(this._element).on("keydown.bs.carousel", function (t) {
      return e._keydown(t);
    }), "hover" === this._config.pause && d.default(this._element).on("mouseenter.bs.carousel", function (t) {
      return e.pause(t);
    }).on("mouseleave.bs.carousel", function (t) {
      return e.cycle(t);
    }), this._config.touch && this._addTouchEventListeners();
  }, n._addTouchEventListeners = function () {
    var t,
        e,
        n = this;this._touchSupported && (t = function t(_t2) {
      n._pointerEvent && E[_t2.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = _t2.originalEvent.clientX : n._pointerEvent || (n.touchStartX = _t2.originalEvent.touches[0].clientX);
    }, e = function e(t) {
      n._pointerEvent && E[t.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function (t) {
        return n.cycle(t);
      }, 500 + n._config.interval));
    }, d.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (t) {
      return t.preventDefault();
    }), this._pointerEvent ? (d.default(this._element).on("pointerdown.bs.carousel", t), d.default(this._element).on("pointerup.bs.carousel", e), this._element.classList.add("pointer-event")) : (d.default(this._element).on("touchstart.bs.carousel", t), d.default(this._element).on("touchmove.bs.carousel", function (t) {
      (t = t).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX;
    }), d.default(this._element).on("touchend.bs.carousel", e)));
  }, n._keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
        t.preventDefault(), this.prev();break;case 39:
        t.preventDefault(), this.next();}
  }, n._getItemIndex = function (t) {
    return this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(t);
  }, n._getItemByDirection = function (t, e) {
    var n = "next" === t,
        i = "prev" === t,
        o = this._getItemIndex(e),
        s = this._items.length - 1;if ((i && 0 === o || n && o === s) && !this._config.wrap) return e;t = (o + ("prev" === t ? -1 : 1)) % this._items.length;return -1 == t ? this._items[this._items.length - 1] : this._items[t];
  }, n._triggerSlideEvent = function (t, e) {
    var n = this._getItemIndex(t),
        i = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
        n = d.default.Event("slide.bs.carousel", { relatedTarget: t, direction: e, from: i, to: n });return d.default(this._element).trigger(n), n;
  }, n._setActiveIndicatorElement = function (t) {
    var e;this._indicatorsElement && (e = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), d.default(e).removeClass("active"), (t = this._indicatorsElement.children[this._getItemIndex(t)]) && d.default(t).addClass("active"));
  }, n._updateInterval = function () {
    var t = this._activeElement || this._element.querySelector(".active.carousel-item");t && ((t = parseInt(t.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval);
  }, n._slide = function (t, e) {
    var n,
        i,
        o,
        s = this,
        a = this._element.querySelector(".active.carousel-item"),
        l = this._getItemIndex(a),
        r = e || a && this._getItemByDirection(t, a),
        u = this._getItemIndex(r),
        e = Boolean(this._interval),
        t = "next" === t ? (n = "carousel-item-left", i = "carousel-item-next", "left") : (n = "carousel-item-right", i = "carousel-item-prev", "right");r && d.default(r).hasClass("active") ? this._isSliding = !1 : !this._triggerSlideEvent(r, t).isDefaultPrevented() && a && r && (this._isSliding = !0, e && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r, o = d.default.Event("slid.bs.carousel", { relatedTarget: r, direction: t, from: l, to: u }), d.default(this._element).hasClass("slide") ? (d.default(r).addClass(i), c.reflow(r), d.default(a).addClass(n), d.default(r).addClass(n), u = c.getTransitionDurationFromElement(a), d.default(a).one(c.TRANSITION_END, function () {
      d.default(r).removeClass(n + " " + i).addClass("active"), d.default(a).removeClass("active " + i + " " + n), s._isSliding = !1, setTimeout(function () {
        return d.default(s._element).trigger(o);
      }, 0);
    }).emulateTransitionEnd(u)) : (d.default(a).removeClass("active"), d.default(r).addClass("active"), this._isSliding = !1, d.default(this._element).trigger(o)), e && this.cycle());
  }, T._jQueryInterface = function (i) {
    return this.each(function () {
      var t = d.default(this).data("bs.carousel"),
          e = l({}, b, d.default(this).data());"object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && (e = l({}, e, i));var n = "string" == typeof i ? i : e.slide;if (t || (t = new T(this, e), d.default(this).data("bs.carousel", t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
      } else e.interval && e.ride && (t.pause(), t.cycle());
    });
  }, T._dataApiClickHandler = function (t) {
    var e,
        n,
        i = c.getSelectorFromElement(this);!i || (e = d.default(i)[0]) && d.default(e).hasClass("carousel") && (n = l({}, d.default(e).data(), d.default(this).data()), (i = this.getAttribute("data-slide-to")) && (n.interval = !1), T._jQueryInterface.call(d.default(e), n), i && d.default(e).data("bs.carousel").to(i), t.preventDefault());
  }, a(T, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return b;
    } }]), T);function T(t, e) {
    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners();
  }d.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler), d.default(window).on("load.bs.carousel.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), e = 0, n = t.length; e < n; e++) {
      var i = d.default(t[e]);w._jQueryInterface.call(i, i.data());
    }
  }), d.default.fn[_] = w._jQueryInterface, d.default.fn[_].Constructor = w, d.default.fn[_].noConflict = function () {
    return d.default.fn[_] = v, w._jQueryInterface;
  };var C = "collapse",
      S = d.default.fn[C],
      N = { toggle: !0, parent: "" },
      D = { toggle: "boolean", parent: "(string|element)" },
      k = ((n = A.prototype).toggle = function () {
    d.default(this._element).hasClass("show") ? this.hide() : this.show();
  }, n.show = function () {
    var t,
        e,
        n,
        i,
        o = this;this._isTransitioning || d.default(this._element).hasClass("show") || (i = this._parent && 0 === (i = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (t) {
      return "string" == typeof o._config.parent ? t.getAttribute("data-parent") === o._config.parent : t.classList.contains("collapse");
    })).length ? null : i) && (n = d.default(i).not(this._selector).data("bs.collapse")) && n._isTransitioning || (t = d.default.Event("show.bs.collapse"), d.default(this._element).trigger(t), t.isDefaultPrevented() || (i && (A._jQueryInterface.call(d.default(i).not(this._selector), "hide"), n || d.default(i).data("bs.collapse", null)), e = this._getDimension(), d.default(this._element).removeClass("collapse").addClass("collapsing"), this._element.style[e] = 0, this._triggerArray.length && d.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0), this.setTransitioning(!0), n = "scroll" + (e[0].toUpperCase() + e.slice(1)), i = c.getTransitionDurationFromElement(this._element), d.default(this._element).one(c.TRANSITION_END, function () {
      d.default(o._element).removeClass("collapsing").addClass("collapse show"), o._element.style[e] = "", o.setTransitioning(!1), d.default(o._element).trigger("shown.bs.collapse");
    }).emulateTransitionEnd(i), this._element.style[e] = this._element[n] + "px"));
  }, n.hide = function () {
    var t = this;if (!this._isTransitioning && d.default(this._element).hasClass("show")) {
      var e = d.default.Event("hide.bs.collapse");if (d.default(this._element).trigger(e), !e.isDefaultPrevented()) {
        e = this._getDimension();this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", c.reflow(this._element), d.default(this._element).addClass("collapsing").removeClass("collapse show");var n = this._triggerArray.length;if (0 < n) for (var i = 0; i < n; i++) {
          var o = this._triggerArray[i],
              s = c.getSelectorFromElement(o);null !== s && (d.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || d.default(o).addClass("collapsed").attr("aria-expanded", !1));
        }this.setTransitioning(!0), this._element.style[e] = "";e = c.getTransitionDurationFromElement(this._element);d.default(this._element).one(c.TRANSITION_END, function () {
          t.setTransitioning(!1), d.default(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        }).emulateTransitionEnd(e);
      }
    }
  }, n.setTransitioning = function (t) {
    this._isTransitioning = t;
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.collapse"), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
  }, n._getConfig = function (t) {
    return (t = l({}, N, t)).toggle = Boolean(t.toggle), c.typeCheckConfig(C, t, D), t;
  }, n._getDimension = function () {
    return d.default(this._element).hasClass("width") ? "width" : "height";
  }, n._getParent = function () {
    var t,
        n = this;c.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
        e = [].slice.call(t.querySelectorAll(e));return d.default(e).each(function (t, e) {
      n._addAriaAndCollapsedClass(A._getTargetFromElement(e), [e]);
    }), t;
  }, n._addAriaAndCollapsedClass = function (t, e) {
    t = d.default(t).hasClass("show");e.length && d.default(e).toggleClass("collapsed", !t).attr("aria-expanded", t);
  }, A._getTargetFromElement = function (t) {
    t = c.getSelectorFromElement(t);return t ? document.querySelector(t) : null;
  }, A._jQueryInterface = function (i) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.collapse"),
          n = l({}, N, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i ? i : {});if (!e && n.toggle && "string" == typeof i && /show|hide/.test(i) && (n.toggle = !1), e || (e = new A(this, n), t.data("bs.collapse", e)), "string" == typeof i) {
        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
      }
    });
  }, a(A, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return N;
    } }]), A);function A(e, t) {
    this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));for (var n = [].slice.call(document.querySelectorAll('[data-toggle="collapse"]')), i = 0, o = n.length; i < o; i++) {
      var s = n[i],
          a = c.getSelectorFromElement(s),
          l = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
        return t === e;
      });null !== a && 0 < l.length && (this._selector = a, this._triggerArray.push(s));
    }this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
  }d.default(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();var n = d.default(this),
        t = c.getSelectorFromElement(this),
        t = [].slice.call(document.querySelectorAll(t));d.default(t).each(function () {
      var t = d.default(this),
          e = t.data("bs.collapse") ? "toggle" : n.data();k._jQueryInterface.call(t, e);
    });
  }), d.default.fn[C] = k._jQueryInterface, d.default.fn[C].Constructor = k, d.default.fn[C].noConflict = function () {
    return d.default.fn[C] = S, k._jQueryInterface;
  };var I = "dropdown",
      j = d.default.fn[I],
      O = new RegExp("38|40|27"),
      x = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
      P = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
      R = ((n = L.prototype).toggle = function () {
    var t;this._element.disabled || d.default(this._element).hasClass("disabled") || (t = d.default(this._menu).hasClass("show"), L._clearMenus(), t || this.show(!0));
  }, n.show = function (t) {
    if (void 0 === t && (t = !1), !(this._element.disabled || d.default(this._element).hasClass("disabled") || d.default(this._menu).hasClass("show"))) {
      var e = { relatedTarget: this._element },
          n = d.default.Event("show.bs.dropdown", e),
          i = L._getParentFromElement(this._element);if (d.default(i).trigger(n), !n.isDefaultPrevented()) {
        if (!this._inNavbar && t) {
          if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");t = this._element;"parent" === this._config.reference ? t = i : c.isElement(this._config.reference) && (t = this._config.reference, void 0 !== this._config.reference.jquery && (t = this._config.reference[0])), "scrollParent" !== this._config.boundary && d.default(i).addClass("position-static"), this._popper = new o.default(t, this._menu, this._getPopperConfig());
        }"ontouchstart" in document.documentElement && 0 === d.default(i).closest(".navbar-nav").length && d.default(document.body).children().on("mouseover", null, d.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), d.default(this._menu).toggleClass("show"), d.default(i).toggleClass("show").trigger(d.default.Event("shown.bs.dropdown", e));
      }
    }
  }, n.hide = function () {
    var t, e, n;this._element.disabled || d.default(this._element).hasClass("disabled") || !d.default(this._menu).hasClass("show") || (t = { relatedTarget: this._element }, e = d.default.Event("hide.bs.dropdown", t), n = L._getParentFromElement(this._element), d.default(n).trigger(e), e.isDefaultPrevented() || (this._popper && this._popper.destroy(), d.default(this._menu).toggleClass("show"), d.default(n).toggleClass("show").trigger(d.default.Event("hidden.bs.dropdown", t))));
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.dropdown"), d.default(this._element).off(".bs.dropdown"), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
  }, n.update = function () {
    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
  }, n._addEventListeners = function () {
    var e = this;d.default(this._element).on("click.bs.dropdown", function (t) {
      t.preventDefault(), t.stopPropagation(), e.toggle();
    });
  }, n._getConfig = function (t) {
    return t = l({}, this.constructor.Default, d.default(this._element).data(), t), c.typeCheckConfig(I, t, this.constructor.DefaultType), t;
  }, n._getMenuElement = function () {
    var t;return this._menu || (t = L._getParentFromElement(this._element)) && (this._menu = t.querySelector(".dropdown-menu")), this._menu;
  }, n._getPlacement = function () {
    var t = d.default(this._element.parentNode),
        e = "bottom-start";return t.hasClass("dropup") ? e = d.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start" : t.hasClass("dropright") ? e = "right-start" : t.hasClass("dropleft") ? e = "left-start" : d.default(this._menu).hasClass("dropdown-menu-right") && (e = "bottom-end"), e;
  }, n._detectNavbar = function () {
    return 0 < d.default(this._element).closest(".navbar").length;
  }, n._getOffset = function () {
    var e = this,
        t = {};return "function" == typeof this._config.offset ? t.fn = function (t) {
      return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t;
    } : t.offset = this._config.offset, t;
  }, n._getPopperConfig = function () {
    var t = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };return "static" === this._config.display && (t.modifiers.applyStyle = { enabled: !1 }), l({}, t, this._config.popperConfig);
  }, L._jQueryInterface = function (e) {
    return this.each(function () {
      var t = d.default(this).data("bs.dropdown");if (t || (t = new L(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? e : null), d.default(this).data("bs.dropdown", t)), "string" == typeof e) {
        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
      }
    });
  }, L._clearMenus = function (t) {
    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), n = 0, i = e.length; n < i; n++) {
      var o,
          s,
          a = L._getParentFromElement(e[n]),
          l = d.default(e[n]).data("bs.dropdown"),
          r = { relatedTarget: e[n] };t && "click" === t.type && (r.clickEvent = t), l && (o = l._menu, !d.default(a).hasClass("show") || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && d.default.contains(a, t.target) || (s = d.default.Event("hide.bs.dropdown", r), d.default(a).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && d.default(document.body).children().off("mouseover", null, d.default.noop), e[n].setAttribute("aria-expanded", "false"), l._popper && l._popper.destroy(), d.default(o).removeClass("show"), d.default(a).removeClass("show").trigger(d.default.Event("hidden.bs.dropdown", r)))));
    }
  }, L._getParentFromElement = function (t) {
    var e,
        n = c.getSelectorFromElement(t);return (e = n ? document.querySelector(n) : e) || t.parentNode;
  }, L._dataApiKeydownHandler = function (t) {
    if (!(/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || d.default(t.target).closest(".dropdown-menu").length) : !O.test(t.which)) && !this.disabled && !d.default(this).hasClass("disabled")) {
      var e = L._getParentFromElement(this),
          n = d.default(e).hasClass("show");if (n || 27 !== t.which) {
        if (t.preventDefault(), t.stopPropagation(), !n || 27 === t.which || 32 === t.which) return 27 === t.which && d.default(e.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void d.default(this).trigger("click");n = [].slice.call(e.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (t) {
          return d.default(t).is(":visible");
        });0 !== n.length && (e = n.indexOf(t.target), 38 === t.which && 0 < e && e--, 40 === t.which && e < n.length - 1 && e++, n[e = e < 0 ? 0 : e].focus());
      }
    }
  }, a(L, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return x;
    } }, { key: "DefaultType", get: function get() {
      return P;
    } }]), L);function L(t, e) {
    this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
  }d.default(document).on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', R._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api", ".dropdown-menu", R._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", R._clearMenus).on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (t) {
    t.preventDefault(), t.stopPropagation(), R._jQueryInterface.call(d.default(this), "toggle");
  }).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
    t.stopPropagation();
  }), d.default.fn[I] = R._jQueryInterface, d.default.fn[I].Constructor = R, d.default.fn[I].noConflict = function () {
    return d.default.fn[I] = j, R._jQueryInterface;
  };var q = d.default.fn.modal,
      F = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
      Q = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
      B = ((n = H.prototype).toggle = function (t) {
    return this._isShown ? this.hide() : this.show(t);
  }, n.show = function (t) {
    var e,
        n = this;this._isShown || this._isTransitioning || (d.default(this._element).hasClass("fade") && (this._isTransitioning = !0), e = d.default.Event("show.bs.modal", { relatedTarget: t }), d.default(this._element).trigger(e), this._isShown || e.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), d.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (t) {
      return n.hide(t);
    }), d.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
      d.default(n._element).one("mouseup.dismiss.bs.modal", function (t) {
        d.default(t.target).is(n._element) && (n._ignoreBackdropClick = !0);
      });
    }), this._showBackdrop(function () {
      return n._showElement(t);
    })));
  }, n.hide = function (t) {
    var e = this;t && t.preventDefault(), this._isShown && !this._isTransitioning && (t = d.default.Event("hide.bs.modal"), d.default(this._element).trigger(t), this._isShown && !t.isDefaultPrevented() && (this._isShown = !1, (t = d.default(this._element).hasClass("fade")) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), d.default(document).off("focusin.bs.modal"), d.default(this._element).removeClass("show"), d.default(this._element).off("click.dismiss.bs.modal"), d.default(this._dialog).off("mousedown.dismiss.bs.modal"), t ? (t = c.getTransitionDurationFromElement(this._element), d.default(this._element).one(c.TRANSITION_END, function (t) {
      return e._hideModal(t);
    }).emulateTransitionEnd(t)) : this._hideModal()));
  }, n.dispose = function () {
    [window, this._element, this._dialog].forEach(function (t) {
      return d.default(t).off(".bs.modal");
    }), d.default(document).off("focusin.bs.modal"), d.default.removeData(this._element, "bs.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null;
  }, n.handleUpdate = function () {
    this._adjustDialog();
  }, n._getConfig = function (t) {
    return t = l({}, F, t), c.typeCheckConfig("modal", t, Q), t;
  }, n._triggerBackdropTransition = function () {
    var t,
        e,
        n = this,
        i = d.default.Event("hidePrevented.bs.modal");d.default(this._element).trigger(i), i.isDefaultPrevented() || ((t = this._element.scrollHeight > document.documentElement.clientHeight) || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static"), e = c.getTransitionDurationFromElement(this._dialog), d.default(this._element).off(c.TRANSITION_END), d.default(this._element).one(c.TRANSITION_END, function () {
      n._element.classList.remove("modal-static"), t || d.default(n._element).one(c.TRANSITION_END, function () {
        n._element.style.overflowY = "";
      }).emulateTransitionEnd(n._element, e);
    }).emulateTransitionEnd(e), this._element.focus());
  }, n._showElement = function (t) {
    var e = this,
        n = d.default(this._element).hasClass("fade"),
        i = this._dialog ? this._dialog.querySelector(".modal-body") : null;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), d.default(this._dialog).hasClass("modal-dialog-scrollable") && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && c.reflow(this._element), d.default(this._element).addClass("show"), this._config.focus && this._enforceFocus();var o = d.default.Event("shown.bs.modal", { relatedTarget: t }),
        t = function t() {
      e._config.focus && e._element.focus(), e._isTransitioning = !1, d.default(e._element).trigger(o);
    };n ? (n = c.getTransitionDurationFromElement(this._dialog), d.default(this._dialog).one(c.TRANSITION_END, t).emulateTransitionEnd(n)) : t();
  }, n._enforceFocus = function () {
    var e = this;d.default(document).off("focusin.bs.modal").on("focusin.bs.modal", function (t) {
      document !== t.target && e._element !== t.target && 0 === d.default(e._element).has(t.target).length && e._element.focus();
    });
  }, n._setEscapeEvent = function () {
    var e = this;this._isShown ? d.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
      e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
    }) : this._isShown || d.default(this._element).off("keydown.dismiss.bs.modal");
  }, n._setResizeEvent = function () {
    var e = this;this._isShown ? d.default(window).on("resize.bs.modal", function (t) {
      return e.handleUpdate(t);
    }) : d.default(window).off("resize.bs.modal");
  }, n._hideModal = function () {
    var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop(function () {
      d.default(document.body).removeClass("modal-open"), t._resetAdjustments(), t._resetScrollbar(), d.default(t._element).trigger("hidden.bs.modal");
    });
  }, n._removeBackdrop = function () {
    this._backdrop && (d.default(this._backdrop).remove(), this._backdrop = null);
  }, n._showBackdrop = function (t) {
    var e,
        n = this,
        i = d.default(this._element).hasClass("fade") ? "fade" : "";this._isShown && this._config.backdrop ? (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), d.default(this._backdrop).appendTo(document.body), d.default(this._element).on("click.dismiss.bs.modal", function (t) {
      n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._triggerBackdropTransition() : n.hide());
    }), i && c.reflow(this._backdrop), d.default(this._backdrop).addClass("show"), t && (i ? (e = c.getTransitionDurationFromElement(this._backdrop), d.default(this._backdrop).one(c.TRANSITION_END, t).emulateTransitionEnd(e)) : t())) : !this._isShown && this._backdrop ? (d.default(this._backdrop).removeClass("show"), i = function i() {
      n._removeBackdrop(), t && t();
    }, d.default(this._element).hasClass("fade") ? (e = c.getTransitionDurationFromElement(this._backdrop), d.default(this._backdrop).one(c.TRANSITION_END, i).emulateTransitionEnd(e)) : i()) : t && t();
  }, n._adjustDialog = function () {
    var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
  }, n._resetAdjustments = function () {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }, n._checkScrollbar = function () {
    var t = document.body.getBoundingClientRect();this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
  }, n._setScrollbar = function () {
    var t,
        e,
        o = this;this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")), e = [].slice.call(document.querySelectorAll(".sticky-top")), d.default(t).each(function (t, e) {
      var n = e.style.paddingRight,
          i = d.default(e).css("padding-right");d.default(e).data("padding-right", n).css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
    }), d.default(e).each(function (t, e) {
      var n = e.style.marginRight,
          i = d.default(e).css("margin-right");d.default(e).data("margin-right", n).css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
    }), t = document.body.style.paddingRight, e = d.default(document.body).css("padding-right"), d.default(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px")), d.default(document.body).addClass("modal-open");
  }, n._resetScrollbar = function () {
    var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));d.default(t).each(function (t, e) {
      var n = d.default(e).data("padding-right");d.default(e).removeData("padding-right"), e.style.paddingRight = n || "";
    });t = [].slice.call(document.querySelectorAll(".sticky-top"));d.default(t).each(function (t, e) {
      var n = d.default(e).data("margin-right");void 0 !== n && d.default(e).css("margin-right", n).removeData("margin-right");
    });t = d.default(document.body).data("padding-right");d.default(document.body).removeData("padding-right"), document.body.style.paddingRight = t || "";
  }, n._getScrollbarWidth = function () {
    var t = document.createElement("div");t.className = "modal-scrollbar-measure", document.body.appendChild(t);var e = t.getBoundingClientRect().width - t.clientWidth;return document.body.removeChild(t), e;
  }, H._jQueryInterface = function (n, i) {
    return this.each(function () {
      var t = d.default(this).data("bs.modal"),
          e = l({}, F, d.default(this).data(), "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n ? n : {});if (t || (t = new H(this, e), d.default(this).data("bs.modal", t)), "string" == typeof n) {
        if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');t[n](i);
      } else e.show && t.show(i);
    });
  }, a(H, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return F;
    } }]), H);function H(t, e) {
    this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0;
  }d.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (t) {
    var e,
        n = this,
        i = c.getSelectorFromElement(this);i && (e = document.querySelector(i));i = d.default(e).data("bs.modal") ? "toggle" : l({}, d.default(e).data(), d.default(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var o = d.default(e).one("show.bs.modal", function (t) {
      t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
        d.default(n).is(":visible") && n.focus();
      });
    });B._jQueryInterface.call(d.default(e), i, this);
  }), d.default.fn.modal = B._jQueryInterface, d.default.fn.modal.Constructor = B, d.default.fn.modal.noConflict = function () {
    return d.default.fn.modal = q, B._jQueryInterface;
  };var U = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
      M = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      W = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function V(t, o, e) {
    if (0 === t.length) return t;if (e && "function" == typeof e) return e(t);for (var t = new window.DOMParser().parseFromString(t, "text/html"), s = Object.keys(o), a = [].slice.call(t.body.querySelectorAll("*")), n = 0, i = a.length; n < i; n++) {
      !function (t) {
        var e = a[t],
            n = e.nodeName.toLowerCase();if (-1 === s.indexOf(e.nodeName.toLowerCase())) return e.parentNode.removeChild(e);var t = [].slice.call(e.attributes),
            i = [].concat(o["*"] || [], o[n] || []);t.forEach(function (t) {
          !function (t, e) {
            var n = t.nodeName.toLowerCase();if (-1 !== e.indexOf(n)) return -1 === U.indexOf(n) || Boolean(t.nodeValue.match(M) || t.nodeValue.match(W));for (var i = e.filter(function (t) {
              return t instanceof RegExp;
            }), o = 0, s = i.length; o < s; o++) {
              if (n.match(i[o])) return 1;
            }
          }(t, i) && e.removeAttribute(t.nodeName);
        });
      }(n);
    }return t.body.innerHTML;
  }var z = "tooltip",
      K = d.default.fn[z],
      X = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Y = ["sanitize", "whiteList", "sanitizeFn"],
      $ = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string|function)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", whiteList: "object", popperConfig: "(null|object)" },
      J = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
      G = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: 0, container: !1, fallbackPlacement: "flip", boundary: "scrollParent", customClass: "", sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null },
      Z = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" },
      tt = ((n = et.prototype).enable = function () {
    this._isEnabled = !0;
  }, n.disable = function () {
    this._isEnabled = !1;
  }, n.toggleEnabled = function () {
    this._isEnabled = !this._isEnabled;
  }, n.toggle = function (t) {
    var e, n;this._isEnabled && (t ? (e = this.constructor.DATA_KEY, (n = d.default(t.currentTarget).data(e)) || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), d.default(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)) : d.default(this.getTipElement()).hasClass("show") ? this._leave(null, this) : this._enter(null, this));
  }, n.dispose = function () {
    clearTimeout(this._timeout), d.default.removeData(this.element, this.constructor.DATA_KEY), d.default(this.element).off(this.constructor.EVENT_KEY), d.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && d.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
  }, n.show = function () {
    var e = this;if ("none" === d.default(this.element).css("display")) throw new Error("Please use show on visible elements");var t,
        n,
        i = d.default.Event(this.constructor.Event.SHOW);this.isWithContent() && this._isEnabled && (d.default(this.element).trigger(i), n = c.findShadowRoot(this.element), t = d.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element), !i.isDefaultPrevented() && t && (n = this.getTipElement(), i = c.getUID(this.constructor.NAME), n.setAttribute("id", i), this.element.setAttribute("aria-describedby", i), this.setContent(), this.config.animation && d.default(n).addClass("fade"), t = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement, i = this._getAttachment(t), this.addAttachmentClass(i), t = this._getContainer(), d.default(n).data(this.constructor.DATA_KEY, this), d.default.contains(this.element.ownerDocument.documentElement, this.tip) || d.default(n).appendTo(t), d.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, n, this._getPopperConfig(i)), d.default(n).addClass("show"), d.default(n).addClass(this.config.customClass), "ontouchstart" in document.documentElement && d.default(document.body).children().on("mouseover", null, d.default.noop), i = function i() {
      e.config.animation && e._fixTransition();var t = e._hoverState;e._hoverState = null, d.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
    }, d.default(this.tip).hasClass("fade") ? (n = c.getTransitionDurationFromElement(this.tip), d.default(this.tip).one(c.TRANSITION_END, i).emulateTransitionEnd(n)) : i()));
  }, n.hide = function (t) {
    function e() {
      "show" !== n._hoverState && i.parentNode && i.parentNode.removeChild(i), n._cleanTipClass(), n.element.removeAttribute("aria-describedby"), d.default(n.element).trigger(n.constructor.Event.HIDDEN), null !== n._popper && n._popper.destroy(), t && t();
    }var n = this,
        i = this.getTipElement(),
        o = d.default.Event(this.constructor.Event.HIDE);d.default(this.element).trigger(o), o.isDefaultPrevented() || (d.default(i).removeClass("show"), "ontouchstart" in document.documentElement && d.default(document.body).children().off("mouseover", null, d.default.noop), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, d.default(this.tip).hasClass("fade") ? (o = c.getTransitionDurationFromElement(i), d.default(i).one(c.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "");
  }, n.update = function () {
    null !== this._popper && this._popper.scheduleUpdate();
  }, n.isWithContent = function () {
    return Boolean(this.getTitle());
  }, n.addAttachmentClass = function (t) {
    d.default(this.getTipElement()).addClass("bs-tooltip-" + t);
  }, n.getTipElement = function () {
    return this.tip = this.tip || d.default(this.config.template)[0], this.tip;
  }, n.setContent = function () {
    var t = this.getTipElement();this.setElementContent(d.default(t.querySelectorAll(".tooltip-inner")), this.getTitle()), d.default(t).removeClass("fade show");
  }, n.setElementContent = function (t, e) {
    "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) || !e.nodeType && !e.jquery ? this.config.html ? (this.config.sanitize && (e = V(e, this.config.whiteList, this.config.sanitizeFn)), t.html(e)) : t.text(e) : this.config.html ? d.default(e).parent().is(t) || t.empty().append(e) : t.text(d.default(e).text());
  }, n.getTitle = function () {
    return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
  }, n._getPopperConfig = function (t) {
    var e = this;return l({}, { placement: t, modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } }, onCreate: function onCreate(t) {
        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
      }, onUpdate: function onUpdate(t) {
        return e._handlePopperPlacementChange(t);
      } }, this.config.popperConfig);
  }, n._getOffset = function () {
    var e = this,
        t = {};return "function" == typeof this.config.offset ? t.fn = function (t) {
      return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t;
    } : t.offset = this.config.offset, t;
  }, n._getContainer = function () {
    return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? d.default(this.config.container) : d.default(document).find(this.config.container);
  }, n._getAttachment = function (t) {
    return J[t.toUpperCase()];
  }, n._setListeners = function () {
    var n = this;this.config.trigger.split(" ").forEach(function (t) {
      var e;"click" === t ? d.default(n.element).on(n.constructor.Event.CLICK, n.config.selector, function (t) {
        return n.toggle(t);
      }) : "manual" !== t && (e = "hover" === t ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN, t = "hover" === t ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT, d.default(n.element).on(e, n.config.selector, function (t) {
        return n._enter(t);
      }).on(t, n.config.selector, function (t) {
        return n._leave(t);
      }));
    }), this._hideModalHandler = function () {
      n.element && n.hide();
    }, d.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
  }, n._fixTitle = function () {
    var t = _typeof(this.element.getAttribute("data-original-title"));!this.element.getAttribute("title") && "string" == t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
  }, n._enter = function (t, e) {
    var n = this.constructor.DATA_KEY;(e = e || d.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), d.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), d.default(e.getTipElement()).hasClass("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
      "show" === e._hoverState && e.show();
    }, e.config.delay.show) : e.show());
  }, n._leave = function (t, e) {
    var n = this.constructor.DATA_KEY;(e = e || d.default(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), d.default(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
      "out" === e._hoverState && e.hide();
    }, e.config.delay.hide) : e.hide());
  }, n._isWithActiveTrigger = function () {
    for (var t in this._activeTrigger) {
      if (this._activeTrigger[t]) return !0;
    }return !1;
  }, n._getConfig = function (t) {
    var e = d.default(this.element).data();return Object.keys(e).forEach(function (t) {
      -1 !== Y.indexOf(t) && delete e[t];
    }), "number" == typeof (t = l({}, this.constructor.Default, e, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), c.typeCheckConfig(z, t, this.constructor.DefaultType), t.sanitize && (t.template = V(t.template, t.whiteList, t.sanitizeFn)), t;
  }, n._getDelegateConfig = function () {
    var t = {};if (this.config) for (var e in this.config) {
      this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
    }return t;
  }, n._cleanTipClass = function () {
    var t = d.default(this.getTipElement()),
        e = t.attr("class").match(X);null !== e && e.length && t.removeClass(e.join(""));
  }, n._handlePopperPlacementChange = function (t) {
    this.tip = t.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
  }, n._fixTransition = function () {
    var t = this.getTipElement(),
        e = this.config.animation;null === t.getAttribute("x-placement") && (d.default(t).removeClass("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
  }, et._jQueryInterface = function (i) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.tooltip"),
          n = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i;if ((e || !/dispose|hide/.test(i)) && (e || (e = new et(this, n), t.data("bs.tooltip", e)), "string" == typeof i)) {
        if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');e[i]();
      }
    });
  }, a(et, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return G;
    } }, { key: "NAME", get: function get() {
      return z;
    } }, { key: "DATA_KEY", get: function get() {
      return "bs.tooltip";
    } }, { key: "Event", get: function get() {
      return Z;
    } }, { key: "EVENT_KEY", get: function get() {
      return ".bs.tooltip";
    } }, { key: "DefaultType", get: function get() {
      return $;
    } }]), et);function et(t, e) {
    if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
  }d.default.fn[z] = tt._jQueryInterface, d.default.fn[z].Constructor = tt, d.default.fn[z].noConflict = function () {
    return d.default.fn[z] = K, tt._jQueryInterface;
  };var nt = "popover",
      it = d.default.fn[nt],
      ot = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      st = l({}, tt.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
      at = l({}, tt.DefaultType, { content: "(string|element|function)" }),
      lt = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" },
      rt = function (t) {
    var e;function i() {
      return t.apply(this, arguments) || this;
    }n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;var n = i.prototype;return n.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, n.addAttachmentClass = function (t) {
      d.default(this.getTipElement()).addClass("bs-popover-" + t);
    }, n.getTipElement = function () {
      return this.tip = this.tip || d.default(this.config.template)[0], this.tip;
    }, n.setContent = function () {
      var t = d.default(this.getTipElement());this.setElementContent(t.find(".popover-header"), this.getTitle());var e = this._getContent();"function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(".popover-body"), e), t.removeClass("fade show");
    }, n._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, n._cleanTipClass = function () {
      var t = d.default(this.getTipElement()),
          e = t.attr("class").match(ot);null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = d.default(this).data("bs.popover"),
            e = "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? n : null;if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), d.default(this).data("bs.popover", t)), "string" == typeof n)) {
          if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');t[n]();
        }
      });
    }, a(i, null, [{ key: "VERSION", get: function get() {
        return "4.6.0";
      } }, { key: "Default", get: function get() {
        return st;
      } }, { key: "NAME", get: function get() {
        return nt;
      } }, { key: "DATA_KEY", get: function get() {
        return "bs.popover";
      } }, { key: "Event", get: function get() {
        return lt;
      } }, { key: "EVENT_KEY", get: function get() {
        return ".bs.popover";
      } }, { key: "DefaultType", get: function get() {
        return at;
      } }]), i;
  }(tt);d.default.fn[nt] = rt._jQueryInterface, d.default.fn[nt].Constructor = rt, d.default.fn[nt].noConflict = function () {
    return d.default.fn[nt] = it, rt._jQueryInterface;
  };var ut = "scrollspy",
      dt = d.default.fn[ut],
      ct = { offset: 10, method: "auto", target: "" },
      ft = { offset: "number", method: "string", target: "(string|element)" },
      ht = ((n = gt.prototype).refresh = function () {
    var e = this,
        t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
        i = "auto" === this._config.method ? t : this._config.method,
        o = "position" === i ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
      var e,
          n = c.getSelectorFromElement(t);if (e = n ? document.querySelector(n) : e) {
        t = e.getBoundingClientRect();if (t.width || t.height) return [d.default(e)[i]().top + o, n];
      }return null;
    }).filter(function (t) {
      return t;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).forEach(function (t) {
      e._offsets.push(t[0]), e._targets.push(t[1]);
    });
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.scrollspy"), d.default(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
  }, n._getConfig = function (t) {
    var e;return "string" != typeof (t = l({}, ct, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {})).target && c.isElement(t.target) && ((e = d.default(t.target).attr("id")) || (e = c.getUID(ut), d.default(t.target).attr("id", e)), t.target = "#" + e), c.typeCheckConfig(ut, t, ft), t;
  }, n._getScrollTop = function () {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }, n._getScrollHeight = function () {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }, n._getOffsetHeight = function () {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
  }, n._process = function () {
    var t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
      n = this._targets[this._targets.length - 1];this._activeTarget !== n && this._activate(n);
    } else {
      if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var i = this._offsets.length; i--;) {
        this._activeTarget !== this._targets[i] && t >= this._offsets[i] && (void 0 === this._offsets[i + 1] || t < this._offsets[i + 1]) && this._activate(this._targets[i]);
      }
    }
  }, n._activate = function (e) {
    this._activeTarget = e, this._clear();var t = this._selector.split(",").map(function (t) {
      return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
    }),
        t = d.default([].slice.call(document.querySelectorAll(t.join(","))));t.hasClass("dropdown-item") ? (t.closest(".dropdown").find(".dropdown-toggle").addClass("active"), t.addClass("active")) : (t.addClass("active"), t.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"), t.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")), d.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
  }, n._clear = function () {
    [].slice.call(document.querySelectorAll(this._selector)).filter(function (t) {
      return t.classList.contains("active");
    }).forEach(function (t) {
      return t.classList.remove("active");
    });
  }, gt._jQueryInterface = function (e) {
    return this.each(function () {
      var t = d.default(this).data("bs.scrollspy");if (t || (t = new gt(this, "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e), d.default(this).data("bs.scrollspy", t)), "string" == typeof e) {
        if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');t[e]();
      }
    });
  }, a(gt, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "Default", get: function get() {
      return ct;
    } }]), gt);function gt(t, e) {
    var n = this;this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, d.default(this._scrollElement).on("scroll.bs.scrollspy", function (t) {
      return n._process(t);
    }), this.refresh(), this._process();
  }d.default(window).on("load.bs.scrollspy.data-api", function () {
    for (var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), e = t.length; e--;) {
      var n = d.default(t[e]);ht._jQueryInterface.call(n, n.data());
    }
  }), d.default.fn[ut] = ht._jQueryInterface, d.default.fn[ut].Constructor = ht, d.default.fn[ut].noConflict = function () {
    return d.default.fn[ut] = dt, ht._jQueryInterface;
  };var mt = d.default.fn.tab,
      pt = ((n = _t.prototype).show = function () {
    var t,
        e,
        n,
        i,
        o,
        s,
        a = this;this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && d.default(this._element).hasClass("active") || d.default(this._element).hasClass("disabled") || (s = d.default(this._element).closest(".nav, .list-group")[0], e = c.getSelectorFromElement(this._element), s && (o = "UL" === s.nodeName || "OL" === s.nodeName ? "> li > .active" : ".active", n = (n = d.default.makeArray(d.default(s).find(o)))[n.length - 1]), i = d.default.Event("hide.bs.tab", { relatedTarget: this._element }), o = d.default.Event("show.bs.tab", { relatedTarget: n }), n && d.default(n).trigger(i), d.default(this._element).trigger(o), o.isDefaultPrevented() || i.isDefaultPrevented() || (e && (t = document.querySelector(e)), this._activate(this._element, s), s = function s() {
      var t = d.default.Event("hidden.bs.tab", { relatedTarget: a._element }),
          e = d.default.Event("shown.bs.tab", { relatedTarget: n });d.default(n).trigger(t), d.default(a._element).trigger(e);
    }, t ? this._activate(t, t.parentNode, s) : s()));
  }, n.dispose = function () {
    d.default.removeData(this._element, "bs.tab"), this._element = null;
  }, n._activate = function (t, e, n) {
    var i = this,
        o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? d.default(e).children(".active") : d.default(e).find("> li > .active"))[0],
        s = n && o && d.default(o).hasClass("fade"),
        e = function e() {
      return i._transitionComplete(t, o, n);
    };o && s ? (s = c.getTransitionDurationFromElement(o), d.default(o).removeClass("show").one(c.TRANSITION_END, e).emulateTransitionEnd(s)) : e();
  }, n._transitionComplete = function (t, e, n) {
    var i;e && (d.default(e).removeClass("active"), (i = d.default(e.parentNode).find("> .dropdown-menu .active")[0]) && d.default(i).removeClass("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)), d.default(t).addClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), c.reflow(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && d.default(t.parentNode).hasClass("dropdown-menu") && ((e = d.default(t).closest(".dropdown")[0]) && (e = [].slice.call(e.querySelectorAll(".dropdown-toggle")), d.default(e).addClass("active")), t.setAttribute("aria-expanded", !0)), n && n();
  }, _t._jQueryInterface = function (n) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.tab");if (e || (e = new _t(this), t.data("bs.tab", e)), "string" == typeof n) {
        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');e[n]();
      }
    });
  }, a(_t, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }]), _t);function _t(t) {
    this._element = t;
  }d.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (t) {
    t.preventDefault(), pt._jQueryInterface.call(d.default(this), "show");
  }), d.default.fn.tab = pt._jQueryInterface, d.default.fn.tab.Constructor = pt, d.default.fn.tab.noConflict = function () {
    return d.default.fn.tab = mt, pt._jQueryInterface;
  };var vt = d.default.fn.toast,
      bt = { animation: "boolean", autohide: "boolean", delay: "number" },
      yt = { animation: !0, autohide: !0, delay: 500 },
      Et = ((n = wt.prototype).show = function () {
    var t,
        e = this,
        n = d.default.Event("show.bs.toast");d.default(this._element).trigger(n), n.isDefaultPrevented() || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), t = function t() {
      e._element.classList.remove("showing"), e._element.classList.add("show"), d.default(e._element).trigger("shown.bs.toast"), e._config.autohide && (e._timeout = setTimeout(function () {
        e.hide();
      }, e._config.delay));
    }, this._element.classList.remove("hide"), c.reflow(this._element), this._element.classList.add("showing"), this._config.animation ? (n = c.getTransitionDurationFromElement(this._element), d.default(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(n)) : t());
  }, n.hide = function () {
    var t;this._element.classList.contains("show") && (t = d.default.Event("hide.bs.toast"), d.default(this._element).trigger(t), t.isDefaultPrevented() || this._close());
  }, n.dispose = function () {
    this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), d.default(this._element).off("click.dismiss.bs.toast"), d.default.removeData(this._element, "bs.toast"), this._element = null, this._config = null;
  }, n._getConfig = function (t) {
    return t = l({}, yt, d.default(this._element).data(), "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t ? t : {}), c.typeCheckConfig("toast", t, this.constructor.DefaultType), t;
  }, n._setListeners = function () {
    var t = this;d.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
      return t.hide();
    });
  }, n._close = function () {
    function t() {
      n._element.classList.add("hide"), d.default(n._element).trigger("hidden.bs.toast");
    }var e,
        n = this;this._element.classList.remove("show"), this._config.animation ? (e = c.getTransitionDurationFromElement(this._element), d.default(this._element).one(c.TRANSITION_END, t).emulateTransitionEnd(e)) : t();
  }, n._clearTimeout = function () {
    clearTimeout(this._timeout), this._timeout = null;
  }, wt._jQueryInterface = function (n) {
    return this.each(function () {
      var t = d.default(this),
          e = t.data("bs.toast");if (e || (e = new wt(this, "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) && n), t.data("bs.toast", e)), "string" == typeof n) {
        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');e[n](this);
      }
    });
  }, a(wt, null, [{ key: "VERSION", get: function get() {
      return "4.6.0";
    } }, { key: "DefaultType", get: function get() {
      return bt;
    } }, { key: "Default", get: function get() {
      return yt;
    } }]), wt);function wt(t, e) {
    this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners();
  }d.default.fn.toast = Et._jQueryInterface, d.default.fn.toast.Constructor = Et, d.default.fn.toast.noConflict = function () {
    return d.default.fn.toast = vt, Et._jQueryInterface;
  }, t.Alert = f, t.Button = m, t.Carousel = w, t.Collapse = k, t.Dropdown = R, t.Modal = B, t.Popover = rt, t.Scrollspy = ht, t.Tab = pt, t.Toast = Et, t.Tooltip = tt, t.Util = c, Object.defineProperty(t, "__esModule", { value: !0 });
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (i) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery);
}(function (a) {
  "use strict";
  var o,
      r = window.Slick || {};o = 0, (r = function r(i, e) {
    var t = this;t.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(i), appendDots: a(i), arrows: !0, asNavFor: null, prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>', nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(i, e) {
        return a('<button type="button" />').text(e + 1);
      }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, focusOnChange: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, t.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, scrolling: !1, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, swiping: !1, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(t, t.initials), t.activeBreakpoint = null, t.animType = null, t.animProp = null, t.breakpoints = [], t.breakpointSettings = [], t.cssTransitions = !1, t.focussed = !1, t.interrupted = !1, t.hidden = "hidden", t.paused = !0, t.positionProp = null, t.respondTo = null, t.rowCount = 1, t.shouldClick = !0, t.$slider = a(i), t.$slidesCache = null, t.transformType = null, t.transitionType = null, t.visibilityChange = "visibilitychange", t.windowWidth = 0, t.windowTimer = null, i = a(i).data("slick") || {}, t.options = a.extend({}, t.defaults, e, i), t.currentSlide = t.options.initialSlide, t.originalSettings = t.options, void 0 !== document.mozHidden ? (t.hidden = "mozHidden", t.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (t.hidden = "webkitHidden", t.visibilityChange = "webkitvisibilitychange"), t.autoPlay = a.proxy(t.autoPlay, t), t.autoPlayClear = a.proxy(t.autoPlayClear, t), t.autoPlayIterator = a.proxy(t.autoPlayIterator, t), t.changeSlide = a.proxy(t.changeSlide, t), t.clickHandler = a.proxy(t.clickHandler, t), t.selectHandler = a.proxy(t.selectHandler, t), t.setPosition = a.proxy(t.setPosition, t), t.swipeHandler = a.proxy(t.swipeHandler, t), t.dragHandler = a.proxy(t.dragHandler, t), t.keyHandler = a.proxy(t.keyHandler, t), t.instanceUid = o++, t.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, t.registerBreakpoints(), t.init(!0);
  }).prototype.activateADA = function () {
    this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
  }, r.prototype.addSlide = r.prototype.slickAdd = function (i, e, t) {
    var o = this;if ("boolean" == typeof e) t = e, e = null;else if (e < 0 || e >= o.slideCount) return !1;o.unload(), "number" == typeof e ? 0 === e && 0 === o.$slides.length ? a(i).appendTo(o.$slideTrack) : t ? a(i).insertBefore(o.$slides.eq(e)) : a(i).insertAfter(o.$slides.eq(e)) : !0 === t ? a(i).prependTo(o.$slideTrack) : a(i).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (i, e) {
      a(e).attr("data-slick-index", i);
    }), o.$slidesCache = o.$slides, o.reinit();
  }, r.prototype.animateHeight = function () {
    var i,
        e = this;1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({ height: i }, e.options.speed));
  }, r.prototype.animateSlide = function (i, e) {
    var t = {},
        o = this;o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (i = -i), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({ left: i }, o.options.speed, o.options.easing, e) : o.$slideTrack.animate({ top: i }, o.options.speed, o.options.easing, e) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), a({ animStart: o.currentLeft }).animate({ animStart: i }, { duration: o.options.speed, easing: o.options.easing, step: function step(i) {
        i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate(" + i + "px, 0px)" : t[o.animType] = "translate(0px," + i + "px)", o.$slideTrack.css(t);
      }, complete: function complete() {
        e && e.call();
      } })) : (o.applyTransition(), i = Math.ceil(i), !1 === o.options.vertical ? t[o.animType] = "translate3d(" + i + "px, 0px, 0px)" : t[o.animType] = "translate3d(0px," + i + "px, 0px)", o.$slideTrack.css(t), e && setTimeout(function () {
      o.disableTransition(), e.call();
    }, o.options.speed));
  }, r.prototype.getNavTarget = function () {
    var i = this.options.asNavFor;return i = i && null !== i ? a(i).not(this.$slider) : i;
  }, r.prototype.asNavFor = function (e) {
    var i = this.getNavTarget();null !== i && "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i.each(function () {
      var i = a(this).slick("getSlick");i.unslicked || i.slideHandler(e, !0);
    });
  }, r.prototype.applyTransition = function (i) {
    var e = this,
        t = {};!1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, (!1 === e.options.fade ? e.$slideTrack : e.$slides.eq(i)).css(t);
  }, r.prototype.autoPlay = function () {
    var i = this;i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
  }, r.prototype.autoPlayClear = function () {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
  }, r.prototype.autoPlayIterator = function () {
    var i = this,
        e = i.currentSlide + i.options.slidesToScroll;i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e));
  }, r.prototype.buildArrows = function () {
    var i = this;!0 === i.options.arrows && (i.$prevArrow = a(i.options.prevArrow).addClass("slick-arrow"), i.$nextArrow = a(i.options.nextArrow).addClass("slick-arrow"), i.slideCount > i.options.slidesToShow ? (i.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.prependTo(i.options.appendArrows), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.appendTo(i.options.appendArrows), !0 !== i.options.infinite && i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : i.$prevArrow.add(i.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
  }, r.prototype.buildDots = function () {
    var i,
        e,
        t = this;if (!0 === t.options.dots) {
      for (t.$slider.addClass("slick-dotted"), e = a("<ul />").addClass(t.options.dotsClass), i = 0; i <= t.getDotCount(); i += 1) {
        e.append(a("<li />").append(t.options.customPaging.call(this, t, i)));
      }t.$dots = e.appendTo(t.options.appendDots), t.$dots.find("li").first().addClass("slick-active");
    }
  }, r.prototype.buildOut = function () {
    var i = this;i.$slides = i.$slider.children(i.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), i.slideCount = i.$slides.length, i.$slides.each(function (i, e) {
      a(e).attr("data-slick-index", i).data("originalStyling", a(e).attr("style") || "");
    }), i.$slider.addClass("slick-slider"), i.$slideTrack = 0 === i.slideCount ? a('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent(), i.$list = i.$slideTrack.wrap('<div class="slick-list"/>').parent(), i.$slideTrack.css("opacity", 0), !0 !== i.options.centerMode && !0 !== i.options.swipeToSlide || (i.options.slidesToScroll = 1), a("img[data-lazy]", i.$slider).not("[src]").addClass("slick-loading"), i.setupInfinite(), i.buildArrows(), i.buildDots(), i.updateDots(), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), !0 === i.options.draggable && i.$list.addClass("draggable");
  }, r.prototype.buildRows = function () {
    var i,
        e,
        t,
        o = this,
        s = document.createDocumentFragment(),
        n = o.$slider.children();if (1 < o.options.rows) {
      for (t = o.options.slidesPerRow * o.options.rows, e = Math.ceil(n.length / t), i = 0; i < e; i++) {
        for (var r = document.createElement("div"), l = 0; l < o.options.rows; l++) {
          for (var d = document.createElement("div"), a = 0; a < o.options.slidesPerRow; a++) {
            var c = i * t + (l * o.options.slidesPerRow + a);n.get(c) && d.appendChild(n.get(c));
          }r.appendChild(d);
        }s.appendChild(r);
      }o.$slider.empty().append(s), o.$slider.children().children().children().css({ width: 100 / o.options.slidesPerRow + "%", display: "inline-block" });
    }
  }, r.prototype.checkResponsive = function (i, e) {
    var t,
        o,
        s,
        n = this,
        r = !1,
        l = n.$slider.width(),
        d = window.innerWidth || a(window).width();if ("window" === n.respondTo ? s = d : "slider" === n.respondTo ? s = l : "min" === n.respondTo && (s = Math.min(d, l)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
      for (t in o = null, n.breakpoints) {
        n.breakpoints.hasOwnProperty(t) && (!1 === n.originalSettings.mobileFirst ? s < n.breakpoints[t] && (o = n.breakpoints[t]) : s > n.breakpoints[t] && (o = n.breakpoints[t]));
      }null !== o ? null !== n.activeBreakpoint && o === n.activeBreakpoint && !e || (n.activeBreakpoint = o, "unslick" === n.breakpointSettings[o] ? n.unslick(o) : (n.options = a.extend({}, n.originalSettings, n.breakpointSettings[o]), !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i)), r = o) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === i && (n.currentSlide = n.options.initialSlide), n.refresh(i), r = o), i || !1 === r || n.$slider.trigger("breakpoint", [n, r]);
    }
  }, r.prototype.changeSlide = function (i, e) {
    var t,
        o = this,
        s = a(i.currentTarget);switch (s.is("a") && i.preventDefault(), s.is("li") || (s = s.closest("li")), t = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, i.data.message) {case "previous":
        n = 0 == t ? o.options.slidesToScroll : o.options.slidesToShow - t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, e);break;case "next":
        n = 0 == t ? o.options.slidesToScroll : t, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, e);break;case "index":
        var n = 0 === i.data.index ? 0 : i.data.index || s.index() * o.options.slidesToScroll;o.slideHandler(o.checkNavigable(n), !1, e), s.children().trigger("focus");break;default:
        return;}
  }, r.prototype.checkNavigable = function (i) {
    var e = this.getNavigableIndexes(),
        t = 0;if (i > e[e.length - 1]) i = e[e.length - 1];else for (var o in e) {
      if (i < e[o]) {
        i = t;break;
      }t = e[o];
    }return i;
  }, r.prototype.cleanUpEvents = function () {
    var i = this;i.options.dots && null !== i.$dots && (a("li", i.$dots).off("click.slick", i.changeSlide).off("mouseenter.slick", a.proxy(i.interrupt, i, !0)).off("mouseleave.slick", a.proxy(i.interrupt, i, !1)), !0 === i.options.accessibility && i.$dots.off("keydown.slick", i.keyHandler)), i.$slider.off("focus.slick blur.slick"), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow && i.$prevArrow.off("click.slick", i.changeSlide), i.$nextArrow && i.$nextArrow.off("click.slick", i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow && i.$prevArrow.off("keydown.slick", i.keyHandler), i.$nextArrow && i.$nextArrow.off("keydown.slick", i.keyHandler))), i.$list.off("touchstart.slick mousedown.slick", i.swipeHandler), i.$list.off("touchmove.slick mousemove.slick", i.swipeHandler), i.$list.off("touchend.slick mouseup.slick", i.swipeHandler), i.$list.off("touchcancel.slick mouseleave.slick", i.swipeHandler), i.$list.off("click.slick", i.clickHandler), a(document).off(i.visibilityChange, i.visibility), i.cleanUpSlideEvents(), !0 === i.options.accessibility && i.$list.off("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().off("click.slick", i.selectHandler), a(window).off("orientationchange.slick.slick-" + i.instanceUid, i.orientationChange), a(window).off("resize.slick.slick-" + i.instanceUid, i.resize), a("[draggable!=true]", i.$slideTrack).off("dragstart", i.preventDefault), a(window).off("load.slick.slick-" + i.instanceUid, i.setPosition);
  }, r.prototype.cleanUpSlideEvents = function () {
    var i = this;i.$list.off("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.off("mouseleave.slick", a.proxy(i.interrupt, i, !1));
  }, r.prototype.cleanUpRows = function () {
    var i;1 < this.options.rows && ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i));
  }, r.prototype.clickHandler = function (i) {
    !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
  }, r.prototype.destroy = function (i) {
    var e = this;e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), a(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, i || e.$slider.trigger("destroy", [e]);
  }, r.prototype.disableTransition = function (i) {
    var e = {};e[this.transitionType] = "", (!1 === this.options.fade ? this.$slideTrack : this.$slides.eq(i)).css(e);
  }, r.prototype.fadeSlide = function (i, e) {
    var t = this;!1 === t.cssTransitions ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }), e && setTimeout(function () {
      t.disableTransition(i), e.call();
    }, t.options.speed));
  }, r.prototype.fadeSlideOut = function (i) {
    var e = this;!1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
  }, r.prototype.filterSlides = r.prototype.slickFilter = function (i) {
    var e = this;null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
  }, r.prototype.focusHandler = function () {
    var t = this;t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
      i.stopImmediatePropagation();var e = a(this);setTimeout(function () {
        t.options.pauseOnFocus && (t.focussed = e.is(":focus"), t.autoPlay());
      }, 0);
    });
  }, r.prototype.getCurrent = r.prototype.slickCurrentSlide = function () {
    return this.currentSlide;
  }, r.prototype.getDotCount = function () {
    var i = this,
        e = 0,
        t = 0,
        o = 0;if (!0 === i.options.infinite) {
      if (i.slideCount <= i.options.slidesToShow) ++o;else for (; e < i.slideCount;) {
        ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
      }
    } else if (!0 === i.options.centerMode) o = i.slideCount;else if (i.options.asNavFor) for (; e < i.slideCount;) {
      ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    } else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);return o - 1;
  }, r.prototype.getLeft = function (i) {
    var e,
        t,
        o = this,
        s = 0;return o.slideOffset = 0, e = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, t = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? t = -1.5 : 1 === o.options.slidesToShow && (t = -2)), s = e * o.options.slidesToShow * t), o.slideCount % o.options.slidesToScroll != 0 && i + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = i > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (i - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (i - o.slideCount)) * e * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * e * -1))) : i + o.options.slidesToShow > o.slideCount && (o.slideOffset = (i + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (i + o.options.slidesToShow - o.slideCount) * e), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? i * o.slideWidth * -1 + o.slideOffset : i * e * -1 + s, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(i) : o.$slideTrack.children(".slick-slide").eq(i + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (o.$list.width() - s.outerWidth()) / 2)), e;
  }, r.prototype.getOption = r.prototype.slickGetOption = function (i) {
    return this.options[i];
  }, r.prototype.getNavigableIndexes = function () {
    for (var i = this, e = 0, t = 0, o = [], s = !1 === i.options.infinite ? i.slideCount : (e = -1 * i.options.slidesToScroll, t = -1 * i.options.slidesToScroll, 2 * i.slideCount); e < s;) {
      o.push(e), e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
    }return o;
  }, r.prototype.getSlick = function () {
    return this;
  }, r.prototype.getSlideCount = function () {
    var t,
        o = this,
        s = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0;return !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function (i, e) {
      if (e.offsetLeft - s + a(e).outerWidth() / 2 > -1 * o.swipeLeft) return t = e, !1;
    }), Math.abs(a(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll;
  }, r.prototype.goTo = r.prototype.slickGoTo = function (i, e) {
    this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
  }, r.prototype.init = function (i) {
    var e = this;a(e.$slider).hasClass("slick-initialized") || (a(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), i && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay());
  }, r.prototype.initADA = function () {
    var t = this,
        o = Math.ceil(t.slideCount / t.options.slidesToShow),
        s = t.getNavigableIndexes().filter(function (i) {
      return 0 <= i && i < t.slideCount;
    });t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
      var e = s.indexOf(i);a(this).attr({ role: "tabpanel", id: "slick-slide" + t.instanceUid + i, tabindex: -1 }), -1 !== e && a(this).attr({ "aria-describedby": "slick-slide-control" + t.instanceUid + e });
    }), t.$dots.attr("role", "tablist").find("li").each(function (i) {
      var e = s[i];a(this).attr({ role: "presentation" }), a(this).find("button").first().attr({ role: "tab", id: "slick-slide-control" + t.instanceUid + i, "aria-controls": "slick-slide" + t.instanceUid + e, "aria-label": i + 1 + " of " + o, "aria-selected": null, tabindex: "-1" });
    }).eq(t.currentSlide).find("button").attr({ "aria-selected": "true", tabindex: "0" }).end());for (var i = t.currentSlide, e = i + t.options.slidesToShow; i < e; i++) {
      t.$slides.eq(i).attr("tabindex", 0);
    }t.activateADA();
  }, r.prototype.initArrowEvents = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
  }, r.prototype.initDotEvents = function () {
    var i = this;!0 === i.options.dots && (a("li", i.$dots).on("click.slick", { message: "index" }, i.changeSlide), !0 === i.options.accessibility && i.$dots.on("keydown.slick", i.keyHandler)), !0 === i.options.dots && !0 === i.options.pauseOnDotsHover && a("li", i.$dots).on("mouseenter.slick", a.proxy(i.interrupt, i, !0)).on("mouseleave.slick", a.proxy(i.interrupt, i, !1));
  }, r.prototype.initSlideEvents = function () {
    var i = this;i.options.pauseOnHover && (i.$list.on("mouseenter.slick", a.proxy(i.interrupt, i, !0)), i.$list.on("mouseleave.slick", a.proxy(i.interrupt, i, !1)));
  }, r.prototype.initializeEvents = function () {
    var i = this;i.initArrowEvents(), i.initDotEvents(), i.initSlideEvents(), i.$list.on("touchstart.slick mousedown.slick", { action: "start" }, i.swipeHandler), i.$list.on("touchmove.slick mousemove.slick", { action: "move" }, i.swipeHandler), i.$list.on("touchend.slick mouseup.slick", { action: "end" }, i.swipeHandler), i.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, i.swipeHandler), i.$list.on("click.slick", i.clickHandler), a(document).on(i.visibilityChange, a.proxy(i.visibility, i)), !0 === i.options.accessibility && i.$list.on("keydown.slick", i.keyHandler), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), a(window).on("orientationchange.slick.slick-" + i.instanceUid, a.proxy(i.orientationChange, i)), a(window).on("resize.slick.slick-" + i.instanceUid, a.proxy(i.resize, i)), a("[draggable!=true]", i.$slideTrack).on("dragstart", i.preventDefault), a(window).on("load.slick.slick-" + i.instanceUid, i.setPosition), a(i.setPosition);
  }, r.prototype.initUI = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
  }, r.prototype.keyHandler = function (i) {
    var e = this;i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
  }, r.prototype.lazyLoad = function () {
    function i(i) {
      a("img[data-lazy]", i).each(function () {
        var i = a(this),
            e = a(this).attr("data-lazy"),
            t = a(this).attr("data-srcset"),
            o = a(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            s = document.createElement("img");s.onload = function () {
          i.animate({ opacity: 0 }, 100, function () {
            t && (i.attr("srcset", t), o && i.attr("sizes", o)), i.attr("src", e).animate({ opacity: 1 }, 200, function () {
              i.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
            }), n.$slider.trigger("lazyLoaded", [n, i, e]);
          });
        }, s.onerror = function () {
          i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, i, e]);
        }, s.src = e;
      });
    }var e,
        t,
        o,
        n = this;if (!0 === n.options.centerMode ? o = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, o <= n.slideCount && o++)), e = n.$slider.find(".slick-slide").slice(t, o), "anticipated" === n.options.lazyLoad) for (var s = t - 1, r = o, l = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) {
      s < 0 && (s = n.slideCount - 1), e = (e = e.add(l.eq(s))).add(l.eq(r)), s--, r++;
    }i(e), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
  }, r.prototype.loadSlider = function () {
    var i = this;i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
  }, r.prototype.next = r.prototype.slickNext = function () {
    this.changeSlide({ data: { message: "next" } });
  }, r.prototype.orientationChange = function () {
    this.checkResponsive(), this.setPosition();
  }, r.prototype.pause = r.prototype.slickPause = function () {
    this.autoPlayClear(), this.paused = !0;
  }, r.prototype.play = r.prototype.slickPlay = function () {
    var i = this;i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1;
  }, r.prototype.postSlide = function (i) {
    var e = this;e.unslicked || (e.$slider.trigger("afterChange", [e, i]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && a(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
  }, r.prototype.prev = r.prototype.slickPrev = function () {
    this.changeSlide({ data: { message: "previous" } });
  }, r.prototype.preventDefault = function (i) {
    i.preventDefault();
  }, r.prototype.progressiveLazyLoad = function (i) {
    i = i || 1;var e,
        t,
        o,
        s,
        n = this,
        r = a("img[data-lazy]", n.$slider);r.length ? (e = r.first(), t = e.attr("data-lazy"), o = e.attr("data-srcset"), s = e.attr("data-sizes") || n.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function () {
      o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === n.options.adaptiveHeight && n.setPosition(), n.$slider.trigger("lazyLoaded", [n, e, t]), n.progressiveLazyLoad();
    }, r.onerror = function () {
      i < 3 ? setTimeout(function () {
        n.progressiveLazyLoad(i + 1);
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]), n.progressiveLazyLoad());
    }, r.src = t) : n.$slider.trigger("allImagesLoaded", [n]);
  }, r.prototype.refresh = function (i) {
    var e = this,
        t = e.slideCount - e.options.slidesToShow;!e.options.infinite && e.currentSlide > t && (e.currentSlide = t), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), t = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, { currentSlide: t }), e.init(), i || e.changeSlide({ data: { message: "index", index: t } }, !1);
  }, r.prototype.registerBreakpoints = function () {
    var i,
        e,
        t,
        o = this,
        s = o.options.responsive || null;if ("array" === a.type(s) && s.length) {
      for (i in o.respondTo = o.options.respondTo || "window", s) {
        if (t = o.breakpoints.length - 1, s.hasOwnProperty(i)) {
          for (e = s[i].breakpoint; 0 <= t;) {
            o.breakpoints[t] && o.breakpoints[t] === e && o.breakpoints.splice(t, 1), t--;
          }o.breakpoints.push(e), o.breakpointSettings[e] = s[i].settings;
        }
      }o.breakpoints.sort(function (i, e) {
        return o.options.mobileFirst ? i - e : e - i;
      });
    }
  }, r.prototype.reinit = function () {
    var i = this;i.$slides = i.$slideTrack.children(i.options.slide).addClass("slick-slide"), i.slideCount = i.$slides.length, i.currentSlide >= i.slideCount && 0 !== i.currentSlide && (i.currentSlide = i.currentSlide - i.options.slidesToScroll), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), i.registerBreakpoints(), i.setProps(), i.setupInfinite(), i.buildArrows(), i.updateArrows(), i.initArrowEvents(), i.buildDots(), i.updateDots(), i.initDotEvents(), i.cleanUpSlideEvents(), i.initSlideEvents(), i.checkResponsive(!1, !0), !0 === i.options.focusOnSelect && a(i.$slideTrack).children().on("click.slick", i.selectHandler), i.setSlideClasses("number" == typeof i.currentSlide ? i.currentSlide : 0), i.setPosition(), i.focusHandler(), i.paused = !i.options.autoplay, i.autoPlay(), i.$slider.trigger("reInit", [i]);
  }, r.prototype.resize = function () {
    var i = this;a(window).width() !== i.windowWidth && (clearTimeout(i.windowDelay), i.windowDelay = window.setTimeout(function () {
      i.windowWidth = a(window).width(), i.checkResponsive(), i.unslicked || i.setPosition();
    }, 50));
  }, r.prototype.removeSlide = r.prototype.slickRemove = function (i, e, t) {
    var o = this;if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;o.unload(), (!0 === t ? o.$slideTrack.children() : o.$slideTrack.children(this.options.slide).eq(i)).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit();
  }, r.prototype.setCSS = function (i) {
    var e,
        t,
        o = this,
        s = {};!0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled || (!(s = {}) === o.cssTransitions ? s[o.animType] = "translate(" + e + ", " + t + ")" : s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s);
  }, r.prototype.setDimensions = function () {
    var i = this;!1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();!1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
  }, r.prototype.setFade = function () {
    var t,
        o = this;o.$slides.each(function (i, e) {
      t = o.slideWidth * i * -1, !0 === o.options.rtl ? a(e).css({ position: "relative", right: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: t, top: 0, zIndex: o.options.zIndex - 2, opacity: 0 });
    }), o.$slides.eq(o.currentSlide).css({ zIndex: o.options.zIndex - 1, opacity: 1 });
  }, r.prototype.setHeight = function () {
    var i,
        e = this;1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (i = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", i));
  }, r.prototype.setOption = r.prototype.slickSetOption = function () {
    var i,
        e,
        t,
        o,
        s,
        n = this,
        r = !1;if ("object" === a.type(arguments[0]) ? (t = arguments[0], r = arguments[1], s = "multiple") : "string" === a.type(arguments[0]) && (t = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) n.options[t] = o;else if ("multiple" === s) a.each(t, function (i, e) {
      n.options[i] = e;
    });else if ("responsive" === s) for (e in o) {
      if ("array" !== a.type(n.options.responsive)) n.options.responsive = [o[e]];else {
        for (i = n.options.responsive.length - 1; 0 <= i;) {
          n.options.responsive[i].breakpoint === o[e].breakpoint && n.options.responsive.splice(i, 1), i--;
        }n.options.responsive.push(o[e]);
      }
    }r && (n.unload(), n.reinit());
  }, r.prototype.setPosition = function () {
    var i = this;i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
  }, r.prototype.setProps = function () {
    var i = this,
        e = document.body.style;i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType;
  }, r.prototype.setSlideClasses = function (i) {
    var e,
        t,
        o,
        s = this,
        n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");s.$slides.eq(i).addClass("slick-current"), !0 === s.options.centerMode ? (t = s.options.slidesToShow % 2 == 0 ? 1 : 0, o = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (o <= i && i <= s.slideCount - 1 - o ? s.$slides.slice(i - o + t, i + o + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = s.options.slidesToShow + i, n.slice(e - o + 1 + t, e + o + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : i === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(i).addClass("slick-center")) : 0 <= i && i <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, e = !0 === s.options.infinite ? s.options.slidesToShow + i : i, (s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - i < s.options.slidesToShow ? n.slice(e - (s.options.slidesToShow - o), e + o) : n.slice(e, e + s.options.slidesToShow)).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad();
  }, r.prototype.setupInfinite = function () {
    var i,
        e,
        t,
        o = this;if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (e = null, o.slideCount > o.options.slidesToShow)) {
      for (t = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount; i > o.slideCount - t; --i) {
        a(o.$slides[e = i - 1]).clone(!0).attr("id", "").attr("data-slick-index", e - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
      }for (i = 0; i < t + o.slideCount; i += 1) {
        e = i, a(o.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
      }o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, r.prototype.interrupt = function (i) {
    i || this.autoPlay(), this.interrupted = i;
  }, r.prototype.selectHandler = function (i) {
    i = a(i.target).is(".slick-slide") ? a(i.target) : a(i.target).parents(".slick-slide"), i = parseInt(i.attr("data-slick-index")) || 0;this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i);
  }, r.prototype.slideHandler = function (i, e, t) {
    var o,
        s,
        n,
        r,
        l = this;if (e = e || !1, !(!0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === i)) if (!1 === e && l.asNavFor(i), o = i, r = l.getLeft(o), e = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? e : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (i < 0 || i > l.getDotCount() * l.options.slidesToScroll)) !1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(e, function () {
      l.postSlide(o);
    }) : l.postSlide(o));else if (!1 === l.options.infinite && !0 === l.options.centerMode && (i < 0 || i > l.slideCount - l.options.slidesToScroll)) !1 === l.options.fade && (o = l.currentSlide, !0 !== t ? l.animateSlide(e, function () {
      l.postSlide(o);
    }) : l.postSlide(o));else {
      if (l.options.autoplay && clearInterval(l.autoPlayTimer), s = o < 0 ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + o : o >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : o - l.slideCount : o, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, s]), e = l.currentSlide, l.currentSlide = s, l.setSlideClasses(l.currentSlide), l.options.asNavFor && (n = (n = l.getNavTarget()).slick("getSlick")).slideCount <= n.options.slidesToShow && n.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade) return !0 !== t ? (l.fadeSlideOut(e), l.fadeSlide(s, function () {
        l.postSlide(s);
      })) : l.postSlide(s), void l.animateHeight();!0 !== t ? l.animateSlide(r, function () {
        l.postSlide(s);
      }) : l.postSlide(s);
    }
  }, r.prototype.startLoad = function () {
    var i = this;!0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading");
  }, r.prototype.swipeDirection = function () {
    var i = this,
        e = i.touchObject.startX - i.touchObject.curX,
        t = i.touchObject.startY - i.touchObject.curY,
        e = Math.atan2(t, e);return (e = (e = Math.round(180 * e / Math.PI)) < 0 ? 360 - Math.abs(e) : e) <= 45 && 0 <= e || e <= 360 && 315 <= e ? !1 === i.options.rtl ? "left" : "right" : 135 <= e && e <= 225 ? !1 === i.options.rtl ? "right" : "left" : !0 === i.options.verticalSwiping ? 35 <= e && e <= 135 ? "down" : "up" : "vertical";
  }, r.prototype.swipeEnd = function (i) {
    var e,
        t,
        o = this;if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1;if (o.interrupted = !1, o.shouldClick = !(10 < o.touchObject.swipeLength), void 0 === o.touchObject.curX) return !1;if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
      switch (t = o.swipeDirection()) {case "left":case "down":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;break;case "right":case "up":
          e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1;}"vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]));
    } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {});
  }, r.prototype.swipeHandler = function (i) {
    var e = this;if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {case "start":
        e.swipeStart(i);break;case "move":
        e.swipeMove(i);break;case "end":
        e.swipeEnd(i);}
  }, r.prototype.swipeMove = function (i) {
    var e,
        t,
        o = this,
        s = void 0 !== i.originalEvent ? i.originalEvent.touches : null;return !(!o.dragging || o.scrolling || s && 1 !== s.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== s ? s[0].pageX : i.clientX, o.touchObject.curY = void 0 !== s ? s[0].pageY : i.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), t = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && 4 < t ? !(o.scrolling = !0) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = t), s = o.swipeDirection(), void 0 !== i.originalEvent && 4 < o.touchObject.swipeLength && (o.swiping = !0, i.preventDefault()), t = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (t = o.touchObject.curY > o.touchObject.startY ? 1 : -1), i = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === s || o.currentSlide >= o.getDotCount() && "left" === s) && (i = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + i * t : o.swipeLeft = e + i * (o.$list.height() / o.listWidth) * t, !0 === o.options.verticalSwiping && (o.swipeLeft = e + i * t), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))));
  }, r.prototype.swipeStart = function (i) {
    var e,
        t = this;if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return !(t.touchObject = {});void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0;
  }, r.prototype.unfilterSlides = r.prototype.slickUnfilter = function () {
    var i = this;null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
  }, r.prototype.unload = function () {
    var i = this;a(".slick-cloned", i.$slider).remove(), i.$dots && i.$dots.remove(), i.$prevArrow && i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove(), i.$nextArrow && i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove(), i.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, r.prototype.unslick = function (i) {
    this.$slider.trigger("unslick", [this, i]), this.destroy();
  }, r.prototype.updateArrows = function () {
    var i = this;Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode || i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode) && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, r.prototype.updateDots = function () {
    var i = this;null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"));
  }, r.prototype.visibility = function () {
    this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1);
  }, a.fn.slick = function () {
    for (var i, e = this, t = arguments[0], o = Array.prototype.slice.call(arguments, 1), s = e.length, n = 0; n < s; n++) {
      if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || void 0 === t ? e[n].slick = new r(e[n], t) : i = e[n].slick[t].apply(e[n].slick, o), void 0 !== i) return i;
    }return e;
  };
});
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery);
}(undefined, function (e) {
  !function (I) {
    "use strict";
    var d = ["sanitize", "whiteList", "sanitizeFn"],
        v = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        g = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        b = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function z(e, t, i) {
      if (i && "function" == typeof i) return i(e);for (var s = Object.keys(t), n = 0, o = e.length; n < o; n++) {
        for (var l = e[n].querySelectorAll("*"), r = 0, a = l.length; r < a; r++) {
          var c = l[r],
              d = c.nodeName.toLowerCase();if (-1 !== s.indexOf(d)) for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
            var m = h[u];!function (e, t) {
              var i = e.nodeName.toLowerCase();if (-1 !== I.inArray(i, t)) return -1 === I.inArray(i, v) || Boolean(e.nodeValue.match(g) || e.nodeValue.match(b));for (var s = I(t).filter(function (e, t) {
                return t instanceof RegExp;
              }), n = 0, o = s.length; n < o; n++) {
                if (i.match(s[n])) return 1;
              }
            }(m, p) && c.removeAttribute(m.nodeName);
          } else c.parentNode.removeChild(c);
        }
      }
    }"classList" in document.createElement("_") || function (e) {
      if ("Element" in e) {
        var t = "classList",
            i = "prototype",
            s = e.Element[i],
            n = Object,
            o = function o() {
          var i = I(this);return { add: function add(e) {
              return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e);
            }, remove: function remove(e) {
              return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e);
            }, toggle: function toggle(e, t) {
              return i.toggleClass(e, t);
            }, contains: function contains(e) {
              return i.hasClass(e);
            } };
        };if (n.defineProperty) {
          var l = { get: o, enumerable: !0, configurable: !0 };try {
            n.defineProperty(s, t, l);
          } catch (e) {
            void 0 !== e.number && -2146823252 !== e.number || (l.enumerable = !1, n.defineProperty(s, t, l));
          }
        } else n[i].__defineGetter__ && s.__defineGetter__(t, o);
      }
    }(window);var r,
        e,
        t,
        i,
        s = document.createElement("_");function n(e) {
      if (null == this) throw new TypeError();var t = String(this);if (e && "[object RegExp]" == r.call(e)) throw new TypeError();var i = t.length,
          s = String(e),
          n = s.length,
          e = 1 < arguments.length ? arguments[1] : void 0,
          e = e ? Number(e) : 0;e != e && (e = 0);var o = Math.min(Math.max(e, 0), i);if (i < n + o) return !1;for (var l = -1; ++l < n;) {
        if (t.charCodeAt(o + l) != s.charCodeAt(l)) return !1;
      }return !0;
    }function x(e, t) {
      var i,
          s = e.selectedOptions,
          n = [];if (t) {
        for (var o = 0, l = s.length; o < l; o++) {
          (i = s[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || n.push(i);
        }return n;
      }return s;
    }function k(e, t) {
      for (var i, s = [], n = t || e.selectedOptions, o = 0, l = n.length; o < l; o++) {
        (i = n[o]).disabled || "OPTGROUP" === i.parentNode.tagName && i.parentNode.disabled || s.push(i.value);
      }return e.multiple ? s : s.length ? s[0] : null;
    }s.classList.add("c1", "c2"), s.classList.contains("c2") || (e = DOMTokenList.prototype.add, t = DOMTokenList.prototype.remove, DOMTokenList.prototype.add = function () {
      Array.prototype.forEach.call(arguments, e.bind(this));
    }, DOMTokenList.prototype.remove = function () {
      Array.prototype.forEach.call(arguments, t.bind(this));
    }), s.classList.toggle("c3", !1), s.classList.contains("c3") && (i = DOMTokenList.prototype.toggle, DOMTokenList.prototype.toggle = function (e, t) {
      return 1 in arguments && !this.contains(e) == !t ? t : i.call(this, e);
    }), s = null, String.prototype.startsWith || (m = function () {
      try {
        var e = {},
            t = Object.defineProperty,
            i = t(e, e, e) && t;
      } catch (e) {}return i;
    }(), r = {}.toString, m ? m(String.prototype, "startsWith", { value: n, configurable: !0, writable: !0 }) : String.prototype.startsWith = n), Object.keys || (Object.keys = function (e, t, i) {
      for (t in i = [], e) {
        i.hasOwnProperty.call(e, t) && i.push(t);
      }return i;
    }), HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") && Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", { get: function get() {
        return this.querySelectorAll(":checked");
      } });var o = { useDefault: !1, _set: I.valHooks.select.set };I.valHooks.select.set = function (e, t) {
      return t && !o.useDefault && I(e).data("selected", !0), o._set.apply(this, arguments);
    };var y = null,
        l = function () {
      try {
        return new Event("change"), !0;
      } catch (e) {
        return !1;
      }
    }();function w(e, t, i, s) {
      for (var n = ["display", "subtext", "tokens"], o = !1, l = 0; l < n.length; l++) {
        var r = n[l],
            a = e[r];if (a && (a = a.toString(), "display" === r && (a = a.replace(/<[^>]+>/g, "")), a = (a = s ? u(a) : a).toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break;
      }return o;
    }function $(e) {
      return parseInt(e, 10) || 0;
    }I.fn.triggerNative = function (e) {
      var t,
          i = this[0];i.dispatchEvent ? (l ? t = new Event(e, { bubbles: !0 }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e);
    };var a = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "Ç": "C", "ç": "c", "Ð": "D", "ð": "d", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "è": "e", "é": "e", "ê": "e", "ë": "e", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "ì": "i", "í": "i", "î": "i", "ï": "i", "Ñ": "N", "ñ": "n", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "ù": "u", "ú": "u", "û": "u", "ü": "u", "Ý": "Y", "ý": "y", "ÿ": "y", "Æ": "Ae", "æ": "ae", "Þ": "Th", "þ": "th", "ß": "ss", "Ā": "A", "Ă": "A", "Ą": "A", "ā": "a", "ă": "a", "ą": "a", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "Ď": "D", "Đ": "D", "ď": "d", "đ": "d", "Ē": "E", "Ĕ": "E", "Ė": "E", "Ę": "E", "Ě": "E", "ē": "e", "ĕ": "e", "ė": "e", "ę": "e", "ě": "e", "Ĝ": "G", "Ğ": "G", "Ġ": "G", "Ģ": "G", "ĝ": "g", "ğ": "g", "ġ": "g", "ģ": "g", "Ĥ": "H", "Ħ": "H", "ĥ": "h", "ħ": "h", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "Į": "I", "İ": "I", "ĩ": "i", "ī": "i", "ĭ": "i", "į": "i", "ı": "i", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "ĸ": "k", "Ĺ": "L", "Ļ": "L", "Ľ": "L", "Ŀ": "L", "Ł": "L", "ĺ": "l", "ļ": "l", "ľ": "l", "ŀ": "l", "ł": "l", "Ń": "N", "Ņ": "N", "Ň": "N", "Ŋ": "N", "ń": "n", "ņ": "n", "ň": "n", "ŋ": "n", "Ō": "O", "Ŏ": "O", "Ő": "O", "ō": "o", "ŏ": "o", "ő": "o", "Ŕ": "R", "Ŗ": "R", "Ř": "R", "ŕ": "r", "ŗ": "r", "ř": "r", "Ś": "S", "Ŝ": "S", "Ş": "S", "Š": "S", "ś": "s", "ŝ": "s", "ş": "s", "š": "s", "Ţ": "T", "Ť": "T", "Ŧ": "T", "ţ": "t", "ť": "t", "ŧ": "t", "Ũ": "U", "Ū": "U", "Ŭ": "U", "Ů": "U", "Ű": "U", "Ų": "U", "ũ": "u", "ū": "u", "ŭ": "u", "ů": "u", "ű": "u", "ų": "u", "Ŵ": "W", "ŵ": "w", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Ź": "Z", "Ż": "Z", "Ž": "Z", "ź": "z", "ż": "z", "ž": "z", "Ĳ": "IJ", "ĳ": "ij", "Œ": "Oe", "œ": "oe", "ŉ": "'n", "ſ": "s" },
        c = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
        h = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");function p(e) {
      return a[e];
    }function u(e) {
      return (e = e.toString()) && e.replace(c, p).replace(h, "");
    }var f,
        m,
        S,
        E,
        C = (f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" }, m = "(?:" + Object.keys(f).join("|") + ")", S = RegExp(m), E = RegExp(m, "g"), function (e) {
      return S.test(e = null == e ? "" : "" + e) ? e.replace(E, O) : e;
    });function O(e) {
      return f[e];
    }var T = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X", 89: "Y", 90: "Z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" },
        N = { success: !1, major: "3" };try {
      N.full = (I.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), N.major = N.full[0], N.success = !0;
    } catch (e) {}var A = 0,
        L = ".bs.select",
        D = { DISABLED: "disabled", DIVIDER: "divider", SHOW: "open", DROPUP: "dropup", MENU: "dropdown-menu", MENURIGHT: "dropdown-menu-right", MENULEFT: "dropdown-menu-left", BUTTONCLASS: "btn-default", POPOVERHEADER: "popover-title", ICONBASE: "glyphicon", TICKICON: "glyphicon-ok" },
        H = { MENU: "." + D.MENU },
        P = { div: document.createElement("div"), span: document.createElement("span"), i: document.createElement("i"), subtext: document.createElement("small"), a: document.createElement("a"), li: document.createElement("li"), whitespace: document.createTextNode(" "), fragment: document.createDocumentFragment() };P.noResults = P.li.cloneNode(!1), P.noResults.className = "no-results", P.a.setAttribute("role", "option"), P.a.className = "dropdown-item", P.subtext.className = "text-muted", P.text = P.span.cloneNode(!1), P.text.className = "text", P.checkMark = P.span.cloneNode(!1);function W(e, t) {
      var i = this;o.useDefault || (I.valHooks.select.set = o._set, o.useDefault = !0), this.$element = I(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = { main: {}, search: {}, current: {}, view: {}, isSearching: !1, keydown: { keyHistory: "", resetKeyHistory: { start: function start() {
              return setTimeout(function () {
                i.selectpicker.keydown.keyHistory = "";
              }, 800);
            } } } }, this.sizeInfo = {}, null === this.options.title && (this.options.title = this.$element.attr("title")), "number" == typeof (t = this.options.windowPadding) && (this.options.windowPadding = [t, t, t, t]), this.val = W.prototype.val, this.render = W.prototype.render, this.refresh = W.prototype.refresh, this.setStyle = W.prototype.setStyle, this.selectAll = W.prototype.selectAll, this.deselectAll = W.prototype.deselectAll, this.destroy = W.prototype.destroy, this.remove = W.prototype.remove, this.show = W.prototype.show, this.hide = W.prototype.hide, this.init();
    }var B = new RegExp("38|40"),
        R = new RegExp("^9$|27"),
        M = { li: function li(e, t, i) {
        var s = P.li.cloneNode(!1);return e && (1 === e.nodeType || 11 === e.nodeType ? s.appendChild(e) : s.innerHTML = e), void 0 !== t && "" !== t && (s.className = t), null != i && s.classList.add("optgroup-" + i), s;
      }, a: function a(e, t, i) {
        var s = P.a.cloneNode(!0);return e && (11 === e.nodeType ? s.appendChild(e) : s.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && s.classList.add.apply(s.classList, t.split(/\s+/)), i && s.setAttribute("style", i), s;
      }, text: function text(e, t) {
        var i,
            s,
            n = P.text.cloneNode(!1);if (e.content ? n.innerHTML = e.content : (n.textContent = e.text, e.icon && (s = P.whitespace.cloneNode(!1), (i = (!0 === t ? P.i : P.span).cloneNode(!1)).className = this.options.iconBase + " " + e.icon, P.fragment.appendChild(i), P.fragment.appendChild(s)), e.subtext && ((s = P.subtext.cloneNode(!1)).textContent = e.subtext, n.appendChild(s))), !0 === t) for (; 0 < n.childNodes.length;) {
          P.fragment.appendChild(n.childNodes[0]);
        } else P.fragment.appendChild(n);return P.fragment;
      }, label: function label(e) {
        var t,
            i,
            s = P.text.cloneNode(!1);return s.innerHTML = e.display, e.icon && (i = P.whitespace.cloneNode(!1), (t = P.span.cloneNode(!1)).className = this.options.iconBase + " " + e.icon, P.fragment.appendChild(t), P.fragment.appendChild(i)), e.subtext && ((i = P.subtext.cloneNode(!1)).textContent = e.subtext, s.appendChild(i)), P.fragment.appendChild(s), P.fragment;
      } };function U(e) {
      var r,
          a = arguments,
          c = e;if ([].shift.apply(a), !N.success) {
        try {
          N.full = (I.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".");
        } catch (e) {
          W.BootstrapVersion ? N.full = W.BootstrapVersion.split(" ")[0].split(".") : (N.full = [N.major, "0", "0"], console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e));
        }N.major = N.full[0], N.success = !0;
      }if ("4" === N.major) {
        var t = [];W.DEFAULTS.style === D.BUTTONCLASS && t.push({ name: "style", className: "BUTTONCLASS" }), W.DEFAULTS.iconBase === D.ICONBASE && t.push({ name: "iconBase", className: "ICONBASE" }), W.DEFAULTS.tickIcon === D.TICKICON && t.push({ name: "tickIcon", className: "TICKICON" }), D.DIVIDER = "dropdown-divider", D.SHOW = "show", D.BUTTONCLASS = "btn-light", D.POPOVERHEADER = "popover-header", D.ICONBASE = "", D.TICKICON = "bs-ok-default";for (var i = 0; i < t.length; i++) {
          e = t[i], W.DEFAULTS[e.name] = D[e.className];
        }
      }var s = this.each(function () {
        var e = I(this);if (e.is("select")) {
          var t = e.data("selectpicker"),
              i = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;if (t) {
            if (i) for (var s in i) {
              Object.prototype.hasOwnProperty.call(i, s) && (t.options[s] = i[s]);
            }
          } else {
            var n,
                o = e.data();for (n in o) {
              Object.prototype.hasOwnProperty.call(o, n) && -1 !== I.inArray(n, d) && delete o[n];
            }var l = I.extend({}, W.DEFAULTS, I.fn.selectpicker.defaults || {}, o, i);l.template = I.extend({}, W.DEFAULTS.template, I.fn.selectpicker.defaults ? I.fn.selectpicker.defaults.template : {}, o.template, i.template), e.data("selectpicker", t = new W(this, l));
          }"string" == typeof c && (r = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c]);
        }
      });return void 0 !== r ? r : s;
    }W.VERSION = "1.13.18", W.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function countSelectedText(e, t) {
        return 1 == e ? "{0} item selected" : "{0} items selected";
      }, maxOptionsText: function maxOptionsText(e, t) {
        return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"];
      }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: D.BUTTONCLASS, size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: D.ICONBASE, tickIcon: D.TICKICON, showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1, windowPadding: 0, virtualScroll: 600, display: !1, sanitize: !0, sanitizeFn: null, whiteList: { "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] } }, W.prototype = { constructor: W, init: function init() {
        var i = this,
            e = this.$element.attr("id"),
            t = this.$element[0],
            s = t.form;A++, this.selectId = "bs-select-" + A, t.classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), t.classList.contains("show-tick") && (this.options.showTick = !0), this.$newElement = this.createDropdown(), this.buildData(), this.$element.after(this.$newElement).prependTo(this.$newElement), s && null === t.form && (s.id || (s.id = "form-" + this.selectId), t.setAttribute("form", s.id)), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(H.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), t.classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(D.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch ? (this.liveSearchListener(), this.focusedParent = this.$searchbox[0]) : this.focusedParent = this.$menuInner[0], this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + L, function () {
          var e, t;i.isVirtual() && (t = (e = i.$menuInner[0]).firstChild.cloneNode(!1), e.replaceChild(t, e.firstChild), e.scrollTop = 0);
        }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function hideBsDropdown(e) {
            i.$element.trigger("hide" + L, e);
          }, "hidden.bs.dropdown": function hiddenBsDropdown(e) {
            i.$element.trigger("hidden" + L, e);
          }, "show.bs.dropdown": function showBsDropdown(e) {
            i.$element.trigger("show" + L, e);
          }, "shown.bs.dropdown": function shownBsDropdown(e) {
            i.$element.trigger("shown" + L, e);
          } }), t.hasAttribute("required") && this.$element.on("invalid" + L, function () {
          i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + L + ".invalid", function () {
            i.$element.val(i.$element.val()).off("shown" + L + ".invalid");
          }).on("rendered" + L, function () {
            this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + L);
          }), i.$button.on("blur" + L, function () {
            i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + L);
          });
        }), setTimeout(function () {
          i.buildList(), i.$element.trigger("loaded" + L);
        });
      }, createDropdown: function createDropdown() {
        var e = this.multiple || this.options.showTick ? " show-tick" : "",
            t = this.multiple ? ' aria-multiselectable="true"' : "",
            i = "",
            s = this.autofocus ? " autofocus" : "";N.major < 4 && this.$element.parent().hasClass("input-group") && (i = " input-group-btn");var n = "",
            o = "",
            l = "",
            r = "";return this.options.header && (n = '<div class="' + D.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (o = '<div class="bs-searchbox"><input type="search" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + C(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list"></div>'), this.multiple && this.options.actionsBox && (l = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + D.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + D.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (r = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + D.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), r = '<div class="dropdown bootstrap-select' + e + i + '"><button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + s + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === N.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + D.MENU + " " + ("4" === N.major ? "" : D.SHOW) + '">' + n + o + l + '<div class="inner ' + D.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + t + '><ul class="' + D.MENU + " inner " + ("4" === N.major ? D.SHOW : "") + '" role="presentation"></ul></div>' + r + "</div></div>", I(r);
      }, setPositionData: function setPositionData() {
        this.selectpicker.view.canHighlight = [], this.selectpicker.view.size = 0, this.selectpicker.view.firstHighlightIndex = !1;for (var e = 0; e < this.selectpicker.current.data.length; e++) {
          var t = this.selectpicker.current.data[e],
              i = !0;"divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), i && (this.selectpicker.view.size++, t.posinset = this.selectpicker.view.size, !1 === this.selectpicker.view.firstHighlightIndex && (this.selectpicker.view.firstHighlightIndex = e)), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height;
        }
      }, isVirtual: function isVirtual() {
        return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll;
      }, createView: function createView($, e, t) {
        var S,
            E,
            C = this,
            i = 0,
            O = [];function s(e, t) {
          var i,
              s,
              n,
              o,
              l = C.selectpicker.current.elements.length,
              r = [],
              a = !0,
              c = C.isVirtual();C.selectpicker.view.scrollTop = e;for (var d, h = Math.ceil(C.sizeInfo.menuInnerHeight / C.sizeInfo.liHeight * 1.5), p = Math.round(l / h) || 1, u = 0; u < p; u++) {
            var f = u === p - 1 ? l : (u + 1) * h;if (r[u] = [u * h + (u ? 1 : 0), f], !l) break;void 0 === n && e - 1 <= C.selectpicker.current.data[f - 1].position - C.sizeInfo.menuInnerHeight && (n = u);
          }if (void 0 === n && (n = 0), o = [C.selectpicker.view.position0, C.selectpicker.view.position1], i = Math.max(0, n - 1), s = Math.min(p - 1, n + 1), C.selectpicker.view.position0 = !1 !== c && Math.max(0, r[i][0]) || 0, C.selectpicker.view.position1 = !1 === c ? l : Math.min(l, r[s][1]) || 0, o = o[0] !== C.selectpicker.view.position0 || o[1] !== C.selectpicker.view.position1, void 0 !== C.activeIndex && (E = C.selectpicker.main.elements[C.prevActiveIndex], O = C.selectpicker.main.elements[C.activeIndex], S = C.selectpicker.main.elements[C.selectedIndex], t && (C.activeIndex !== C.selectedIndex && C.defocusItem(O), C.activeIndex = void 0), C.activeIndex && C.activeIndex !== C.selectedIndex && C.defocusItem(S)), void 0 !== C.prevActiveIndex && C.prevActiveIndex !== C.activeIndex && C.prevActiveIndex !== C.selectedIndex && C.defocusItem(E), (t || o) && (o = C.selectpicker.view.visibleElements ? C.selectpicker.view.visibleElements.slice() : [], C.selectpicker.view.visibleElements = !1 === c ? C.selectpicker.current.elements : C.selectpicker.current.elements.slice(C.selectpicker.view.position0, C.selectpicker.view.position1), C.setOptionStatus(), ($ || !1 === c && t) && (g = o, d = C.selectpicker.view.visibleElements, a = !(g.length === d.length && g.every(function (e, t) {
            return e === d[t];
          }))), (t || !0 === c) && a)) {
            var m = C.$menuInner[0],
                v = document.createDocumentFragment(),
                g = m.firstChild.cloneNode(!1),
                b = C.selectpicker.view.visibleElements,
                w = [];m.replaceChild(g, m.firstChild);for (var u = 0, I = b.length; u < I; u++) {
              var x,
                  k,
                  y = b[u];C.options.sanitize && (x = y.lastChild) && (k = C.selectpicker.current.data[u + C.selectpicker.view.position0]) && k.content && !k.sanitized && (w.push(x), k.sanitized = !0), v.appendChild(y);
            }C.options.sanitize && w.length && z(w, C.options.whiteList, C.options.sanitizeFn), !0 === c ? (a = 0 === C.selectpicker.view.position0 ? 0 : C.selectpicker.current.data[C.selectpicker.view.position0 - 1].position, g = C.selectpicker.view.position1 > l - 1 ? 0 : C.selectpicker.current.data[l - 1].position - C.selectpicker.current.data[C.selectpicker.view.position1 - 1].position, m.firstChild.style.marginTop = a + "px", m.firstChild.style.marginBottom = g + "px") : (m.firstChild.style.marginTop = 0, m.firstChild.style.marginBottom = 0), m.firstChild.appendChild(v), !0 === c && C.sizeInfo.hasScrollBar && (c = m.firstChild.offsetWidth, t && c < C.sizeInfo.menuInnerInnerWidth && C.sizeInfo.totalMenuWidth > C.sizeInfo.selectWidth ? m.firstChild.style.minWidth = C.sizeInfo.menuInnerInnerWidth + "px" : c > C.sizeInfo.menuInnerInnerWidth && (C.$menu[0].style.minWidth = 0, (c = m.firstChild.offsetWidth) > C.sizeInfo.menuInnerInnerWidth && (C.sizeInfo.menuInnerInnerWidth = c, m.firstChild.style.minWidth = C.sizeInfo.menuInnerInnerWidth + "px"), C.$menu[0].style.minWidth = ""));
          }C.prevActiveIndex = C.activeIndex, C.options.liveSearch ? $ && t && (C.selectpicker.view.canHighlight[m = 0] || (m = 1 + C.selectpicker.view.canHighlight.slice(1).indexOf(!0)), t = C.selectpicker.view.visibleElements[m], C.defocusItem(C.selectpicker.view.currentActive), C.activeIndex = (C.selectpicker.current.data[m] || {}).index, C.focusItem(t)) : C.$menuInner.trigger("focus");
        }this.selectpicker.isSearching = $, this.selectpicker.current = $ ? this.selectpicker.search : this.selectpicker.main, this.setPositionData(), e && (t ? i = this.$menuInner[0].scrollTop : C.multiple || "number" != typeof (t = ((t = C.$element[0]).options[t.selectedIndex] || {}).liIndex) || !1 === C.options.size || (t = (t = C.selectpicker.main.data[t]) && t.position) && (i = t - (C.sizeInfo.menuInnerHeight + C.sizeInfo.liHeight) / 2)), s(i, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function (e, t) {
          C.noScroll || s(this.scrollTop, t), C.noScroll = !1;
        }), I(window).off("resize" + L + "." + this.selectId + ".createView").on("resize" + L + "." + this.selectId + ".createView", function () {
          C.$newElement.hasClass(D.SHOW) && s(C.$menuInner[0].scrollTop);
        });
      }, focusItem: function focusItem(e, t, i) {
        var s;e && (t = t || this.selectpicker.main.data[this.activeIndex], (s = e.firstChild) && (s.setAttribute("aria-setsize", this.selectpicker.view.size), s.setAttribute("aria-posinset", t.posinset), !0 !== i && (this.focusedParent.setAttribute("aria-activedescendant", s.id), e.classList.add("active"), s.classList.add("active"))));
      }, defocusItem: function defocusItem(e) {
        e && (e.classList.remove("active"), e.firstChild && e.firstChild.classList.remove("active"));
      }, setPlaceholder: function setPlaceholder() {
        var e,
            t,
            i,
            s,
            n,
            o,
            l = this,
            r = !1;return this.options.title && !this.multiple && (this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = this.$element[0], t = !(r = !0), i = !this.selectpicker.view.titleOption.parentNode, s = e.selectedIndex, n = e.options[s], o = (o = window.performance && window.performance.getEntriesByType("navigation")) && o.length ? "back_forward" !== o[0].type : 2 !== window.performance.navigation.type, i && (this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", t = !n || 0 === s && !1 === n.defaultSelected && void 0 === this.$element.data("selected")), !i && 0 === this.selectpicker.view.titleOption.index || e.insertBefore(this.selectpicker.view.titleOption, e.firstChild), t && o ? e.selectedIndex = 0 : "complete" !== document.readyState && window.addEventListener("pageshow", function () {
          l.selectpicker.view.displayedValue !== e.value && l.render();
        })), r;
      }, buildData: function buildData() {
        var h = ':not([hidden]):not([data-hidden="true"])',
            p = [],
            u = 0,
            f = this.setPlaceholder() ? 1 : 0;this.options.hideDisabled && (h += ":not(:disabled)");var e = this.$element[0].querySelectorAll("select > *" + h);function m(e) {
          var t = p[p.length - 1];t && "divider" === t.type && (t.optID || e.optID) || ((e = e || {}).type = "divider", p.push(e));
        }function v(e, t) {
          var i, s, n;(t = t || {}).divider = "true" === e.getAttribute("data-divider"), t.divider ? m({ optID: t.optID }) : (i = p.length, s = (n = e.style.cssText) ? C(n) : "", n = (e.className || "") + (t.optgroupClass || ""), t.optID && (n = "opt " + n), t.optionClass = n.trim(), t.inlineStyle = s, t.text = e.textContent, t.content = e.getAttribute("data-content"), t.tokens = e.getAttribute("data-tokens"), t.subtext = e.getAttribute("data-subtext"), t.icon = e.getAttribute("data-icon"), e.liIndex = i, t.display = t.content || t.text, t.type = "option", t.index = i, t.option = e, t.selected = !!e.selected, t.disabled = t.disabled || !!e.disabled, p.push(t));
        }for (var t = e.length, i = f; i < t; i++) {
          var s = e[i];"OPTGROUP" !== s.tagName ? v(s, {}) : function (e, t) {
            var i = t[e],
                s = !(e - 1 < f) && t[e - 1],
                e = t[e + 1],
                n = i.querySelectorAll("option" + h);if (n.length) {
              var o,
                  l,
                  r = { display: C(i.label), subtext: i.getAttribute("data-subtext"), icon: i.getAttribute("data-icon"), type: "optgroup-label", optgroupClass: " " + (i.className || "") };u++, s && m({ optID: u }), r.optID = u, p.push(r);for (var a = 0, c = n.length; a < c; a++) {
                var d = n[a];0 === a && (l = (o = p.length - 1) + c), v(d, { headerIndex: o, lastIndex: l, optID: r.optID, optgroupClass: r.optgroupClass, disabled: i.disabled });
              }e && m({ optID: u });
            }
          }(i, e);
        }this.selectpicker.main.data = this.selectpicker.current.data = p;
      }, buildList: function buildList() {
        var s = this,
            e = this.selectpicker.main.data,
            n = [],
            o = 0;!s.options.showTick && !s.multiple || P.checkMark.parentNode || (P.checkMark.className = this.options.iconBase + " " + s.options.tickIcon + " check-mark", P.a.appendChild(P.checkMark));for (var t = e.length, i = 0; i < t; i++) {
          !function (e) {
            var t,
                i = 0;switch (e.type) {case "divider":
                t = M.li(!1, D.DIVIDER, e.optID ? e.optID + "div" : void 0);break;case "option":
                (t = M.li(M.a(M.text.call(s, e), e.optionClass, e.inlineStyle), "", e.optID)).firstChild && (t.firstChild.id = s.selectId + "-" + e.index);break;case "optgroup-label":
                t = M.li(M.label.call(s, e), "dropdown-header" + e.optgroupClass, e.optID);}e.element = t, n.push(t), e.display && (i += e.display.length), e.subtext && (i += e.subtext.length), e.icon && (i += 1), o < i && (o = i, s.selectpicker.view.widestOption = n[n.length - 1]);
          }(e[i]);
        }this.selectpicker.main.elements = this.selectpicker.current.elements = n;
      }, findLis: function findLis() {
        return this.$menuInner.find(".inner > li");
      }, render: function render() {
        var e = this,
            t = this.$element[0],
            i = this.setPlaceholder() && 0 === t.selectedIndex,
            s = x(t, this.options.hideDisabled),
            n = s.length,
            o = this.$button[0],
            l = o.querySelector(".filter-option-inner-inner"),
            r = document.createTextNode(this.options.multipleSeparator),
            a = P.fragment.cloneNode(!1),
            c = !1;if (o.classList.toggle("bs-placeholder", e.multiple ? !n : !k(t, s)), e.multiple || 1 !== s.length || (e.selectpicker.view.displayedValue = k(t, s)), "static" === this.options.selectedTextFormat) a = M.text.call(this, { text: this.options.title }, !0);else if (!1 === (this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < n && (1 < (t = this.options.selectedTextFormat.split(">")).length && n > t[1] || 1 === t.length && 2 <= n))) {
          if (!i) {
            for (var d = 0; d < n && d < 50; d++) {
              var h = s[d],
                  p = this.selectpicker.main.data[h.liIndex],
                  u = {};this.multiple && 0 < d && a.appendChild(r.cloneNode(!1)), h.title ? u.text = h.title : p && (p.content && e.options.showContent ? (u.content = p.content.toString(), c = !0) : (e.options.showIcon && (u.icon = p.icon), e.options.showSubtext && !e.multiple && p.subtext && (u.subtext = " " + p.subtext), u.text = h.textContent.trim())), a.appendChild(M.text.call(this, u, !0));
            }49 < n && a.appendChild(document.createTextNode("..."));
          }
        } else {
          i = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled && (i += ":not(:disabled)");var f = this.$element[0].querySelectorAll("select > option" + i + ", optgroup" + i + " option" + i).length,
              i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(n, f) : this.options.countSelectedText,
              a = M.text.call(this, { text: i.replace("{0}", n.toString()).replace("{1}", f.toString()) }, !0);
        }null == this.options.title && (this.options.title = this.$element.attr("title")), a.childNodes.length || (a = M.text.call(this, { text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText }, !0)), o.title = a.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && c && z([a], e.options.whiteList, e.options.sanitizeFn), l.innerHTML = "", l.appendChild(a), N.major < 4 && this.$newElement[0].classList.contains("bs3-has-addon") && (f = o.querySelector(".filter-expand"), (l = l.cloneNode(!0)).className = "filter-expand", f ? o.replaceChild(l, f) : o.appendChild(l)), this.$element.trigger("rendered" + L);
      }, setStyle: function setStyle(e, t) {
        var i = this.$button[0],
            s = this.$newElement[0],
            n = this.options.style.trim();this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")), N.major < 4 && (s.classList.add("bs3"), s.parentNode.classList && s.parentNode.classList.contains("input-group") && (s.previousElementSibling || s.nextElementSibling) && (s.previousElementSibling || s.nextElementSibling).classList.contains("input-group-addon") && s.classList.add("bs3-has-addon")), e = e ? e.trim() : n, "add" == t ? e && i.classList.add.apply(i.classList, e.split(" ")) : "remove" == t ? e && i.classList.remove.apply(i.classList, e.split(" ")) : (n && i.classList.remove.apply(i.classList, n.split(" ")), e && i.classList.add.apply(i.classList, e.split(" ")));
      }, liHeight: function liHeight(e) {
        if (e || !1 !== this.options.size && !Object.keys(this.sizeInfo).length) {
          var t,
              i = P.div.cloneNode(!1),
              s = P.div.cloneNode(!1),
              n = P.div.cloneNode(!1),
              o = document.createElement("ul"),
              l = P.li.cloneNode(!1),
              r = P.li.cloneNode(!1),
              a = P.a.cloneNode(!1),
              c = P.span.cloneNode(!1),
              d = this.options.header && 0 < this.$menu.find("." + D.POPOVERHEADER).length ? this.$menu.find("." + D.POPOVERHEADER)[0].cloneNode(!0) : null,
              h = this.options.liveSearch ? P.div.cloneNode(!1) : null,
              p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
              u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
              e = this.$element.find("option")[0];if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (e ? e.className : ""), i.className = this.$menu[0].parentNode.className + " " + D.SHOW, i.style.width = 0, "auto" === this.options.width && (s.style.minWidth = 0), s.className = D.MENU + " " + D.SHOW, n.className = "inner " + D.SHOW, o.className = D.MENU + " inner " + ("4" === N.major ? D.SHOW : ""), l.className = D.DIVIDER, r.className = "dropdown-header", c.appendChild(document.createTextNode("​")), this.selectpicker.current.data.length) for (var f = 0; f < this.selectpicker.current.data.length; f++) {
            var m = this.selectpicker.current.data[f];if ("option" === m.type) {
              t = m.element;break;
            }
          } else t = P.li.cloneNode(!1), a.appendChild(c), t.appendChild(a);r.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && o.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), o.appendChild(t), o.appendChild(l), o.appendChild(r), d && s.appendChild(d), h && (v = document.createElement("input"), h.className = "bs-searchbox", v.className = "form-control", h.appendChild(v), s.appendChild(h)), p && s.appendChild(p), n.appendChild(o), s.appendChild(n), u && s.appendChild(u), i.appendChild(s), document.body.appendChild(i);var e = t.offsetHeight,
              a = r ? r.offsetHeight : 0,
              c = d ? d.offsetHeight : 0,
              v = h ? h.offsetHeight : 0,
              o = p ? p.offsetHeight : 0,
              r = u ? u.offsetHeight : 0,
              d = I(l).outerHeight(!0),
              h = !!window.getComputedStyle && window.getComputedStyle(s),
              p = s.offsetWidth,
              u = h ? null : I(s),
              l = { vert: $(h ? h.paddingTop : u.css("paddingTop")) + $(h ? h.paddingBottom : u.css("paddingBottom")) + $(h ? h.borderTopWidth : u.css("borderTopWidth")) + $(h ? h.borderBottomWidth : u.css("borderBottomWidth")), horiz: $(h ? h.paddingLeft : u.css("paddingLeft")) + $(h ? h.paddingRight : u.css("paddingRight")) + $(h ? h.borderLeftWidth : u.css("borderLeftWidth")) + $(h ? h.borderRightWidth : u.css("borderRightWidth")) },
              u = { vert: l.vert + $(h ? h.marginTop : u.css("marginTop")) + $(h ? h.marginBottom : u.css("marginBottom")) + 2, horiz: l.horiz + $(h ? h.marginLeft : u.css("marginLeft")) + $(h ? h.marginRight : u.css("marginRight")) + 2 };n.style.overflowY = "scroll", s = s.offsetWidth - p, document.body.removeChild(i), this.sizeInfo.liHeight = e, this.sizeInfo.dropdownHeaderHeight = a, this.sizeInfo.headerHeight = c, this.sizeInfo.searchHeight = v, this.sizeInfo.actionsHeight = o, this.sizeInfo.doneButtonHeight = r, this.sizeInfo.dividerHeight = d, this.sizeInfo.menuPadding = l, this.sizeInfo.menuExtras = u, this.sizeInfo.menuWidth = p, this.sizeInfo.menuInnerInnerWidth = p - l.horiz, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = s, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData();
        }
      }, getSelectPosition: function getSelectPosition() {
        var e,
            t = I(window),
            i = this.$newElement.offset(),
            s = I(this.options.container);this.options.container && s.length && !s.is("body") ? ((e = s.offset()).top += parseInt(s.css("borderTopWidth")), e.left += parseInt(s.css("borderLeftWidth"))) : e = { top: 0, left: 0 };s = this.options.windowPadding;this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1], this.sizeInfo.selectOffsetTop -= s[0], this.sizeInfo.selectOffsetLeft -= s[3];
      }, setMenuSize: function setMenuSize(e) {
        this.getSelectPosition();var t,
            i,
            s,
            n,
            o,
            l,
            r = this.sizeInfo.selectWidth,
            a = this.sizeInfo.liHeight,
            c = this.sizeInfo.headerHeight,
            d = this.sizeInfo.searchHeight,
            h = this.sizeInfo.actionsHeight,
            p = this.sizeInfo.doneButtonHeight,
            u = this.sizeInfo.dividerHeight,
            f = this.sizeInfo.menuPadding,
            m = 0;if (this.options.dropupAuto && (l = a * this.selectpicker.current.elements.length + f.vert, l = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot, !0 === this.selectpicker.isSearching && (l = this.selectpicker.dropup), this.$newElement.toggleClass(D.DROPUP, l), this.selectpicker.dropup = l), "auto" === this.options.size) s = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, t = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, i = s + c + d + h + p, o = Math.max(s - f.vert, 0), s = (n = t = this.$newElement.hasClass(D.DROPUP) ? this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert : t) - c - d - h - p - f.vert;else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
          for (var v = 0; v < this.options.size; v++) {
            "divider" === this.selectpicker.current.data[v].type && m++;
          }s = (t = a * this.options.size + m * u + f.vert) - f.vert, n = t + c + d + h + p, i = o = "";
        }this.$menu.css({ "max-height": n + "px", overflow: "hidden", "min-height": i + "px" }), this.$menuInner.css({ "max-height": s + "px", "overflow-y": "auto", "min-height": o + "px" }), this.sizeInfo.menuInnerHeight = Math.max(s, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth), "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(D.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - r), this.dropdown && this.dropdown._popper && this.dropdown._popper.update();
      }, setSize: function setSize(e) {
        var t, i;this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size && (t = this, i = I(window), this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function () {
          return t.setMenuSize();
        }), "auto" === this.options.size ? i.off("resize" + L + "." + this.selectId + ".setMenuSize scroll" + L + "." + this.selectId + ".setMenuSize").on("resize" + L + "." + this.selectId + ".setMenuSize scroll" + L + "." + this.selectId + ".setMenuSize", function () {
          return t.setMenuSize();
        }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && i.off("resize" + L + "." + this.selectId + ".setMenuSize scroll" + L + "." + this.selectId + ".setMenuSize")), this.createView(!1, !0, e);
      }, setWidth: function setWidth() {
        var i = this;"auto" === this.options.width ? requestAnimationFrame(function () {
          i.$menu.css("min-width", "0"), i.$element.on("loaded" + L, function () {
            i.liHeight(), i.setMenuSize();var e = i.$newElement.clone().appendTo("body"),
                t = e.css("width", "auto").children("button").outerWidth();e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px");
          });
        }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width");
      }, selectPosition: function selectPosition() {
        function e(e) {
          var t = {},
              i = l.options.display || !!I.fn.dropdown.Constructor.Default && I.fn.dropdown.Constructor.Default.display;l.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(D.DROPUP, e.hasClass(D.DROPUP)), s = e.offset(), r.is("body") ? n = { top: 0, left: 0 } : ((n = r.offset()).top += parseInt(r.css("borderTopWidth")) - r.scrollTop(), n.left += parseInt(r.css("borderLeftWidth")) - r.scrollLeft()), o = e.hasClass(D.DROPUP) ? 0 : e[0].offsetHeight, (N.major < 4 || "static" === i) && (t.top = s.top - n.top + o, t.left = s.left - n.left), t.width = e[0].offsetWidth, l.$bsContainer.css(t);
        }this.$bsContainer = I('<div class="bs-container" />');var s,
            n,
            o,
            l = this,
            r = I(this.options.container);this.$button.on("click.bs.dropdown.data-api", function () {
          l.isDisabled() || (e(l.$newElement), l.$bsContainer.appendTo(l.options.container).toggleClass(D.SHOW, !l.$button.hasClass(D.SHOW)).append(l.$menu));
        }), I(window).off("resize" + L + "." + this.selectId + " scroll" + L + "." + this.selectId).on("resize" + L + "." + this.selectId + " scroll" + L + "." + this.selectId, function () {
          l.$newElement.hasClass(D.SHOW) && e(l.$newElement);
        }), this.$element.on("hide" + L, function () {
          l.$menu.data("height", l.$menu.height()), l.$bsContainer.detach();
        });
      }, setOptionStatus: function setOptionStatus(e) {
        var t = this;if (t.noScroll = !1, t.selectpicker.view.visibleElements && t.selectpicker.view.visibleElements.length) for (var i = 0; i < t.selectpicker.view.visibleElements.length; i++) {
          var s = t.selectpicker.current.data[i + t.selectpicker.view.position0],
              n = s.option;n && (!0 !== e && t.setDisabled(s.index, s.disabled), t.setSelected(s.index, n.selected));
        }
      }, setSelected: function setSelected(e, t) {
        var i,
            s = this.selectpicker.main.elements[e],
            n = this.selectpicker.main.data[e],
            o = void 0 !== this.activeIndex,
            l = this.activeIndex === e || t && !this.multiple && !o;n.selected = t, i = s.firstChild, t && (this.selectedIndex = e), s.classList.toggle("selected", t), l ? (this.focusItem(s, n), this.selectpicker.view.currentActive = s, this.activeIndex = e) : this.defocusItem(s), i && (i.classList.toggle("selected", t), t ? i.setAttribute("aria-selected", !0) : this.multiple ? i.setAttribute("aria-selected", !1) : i.removeAttribute("aria-selected")), l || o || !t || void 0 === this.prevActiveIndex || (t = this.selectpicker.main.elements[this.prevActiveIndex], this.defocusItem(t));
      }, setDisabled: function setDisabled(e, t) {
        var i = this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled = t, e = i.firstChild, i.classList.toggle(D.DISABLED, t), e && ("4" === N.major && e.classList.toggle(D.DISABLED, t), t ? (e.setAttribute("aria-disabled", t), e.setAttribute("tabindex", -1)) : (e.removeAttribute("aria-disabled"), e.setAttribute("tabindex", 0)));
      }, isDisabled: function isDisabled() {
        return this.$element[0].disabled;
      }, checkDisabled: function checkDisabled() {
        this.isDisabled() ? (this.$newElement[0].classList.add(D.DISABLED), this.$button.addClass(D.DISABLED).attr("aria-disabled", !0)) : this.$button[0].classList.contains(D.DISABLED) && (this.$newElement[0].classList.remove(D.DISABLED), this.$button.removeClass(D.DISABLED).attr("aria-disabled", !1));
      }, clickListener: function clickListener() {
        var w = this,
            t = I(document);function e() {
          (w.options.liveSearch ? w.$searchbox : w.$menuInner).trigger("focus");
        }function i() {
          w.dropdown && w.dropdown._popper && w.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i);
        }t.data("spaceSelect", !1), this.$button.on("keyup", function (e) {
          /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1));
        }), this.$newElement.on("show.bs.dropdown", function () {
          3 < N.major && !w.dropdown && (w.dropdown = w.$button.data("bs.dropdown"), w.dropdown._menu = w.$menu[0]);
        }), this.$button.on("click.bs.dropdown.data-api", function () {
          w.$newElement.hasClass(D.SHOW) || w.setSize();
        }), this.$element.on("shown" + L, function () {
          w.$menuInner[0].scrollTop !== w.selectpicker.view.scrollTop && (w.$menuInner[0].scrollTop = w.selectpicker.view.scrollTop), 3 < N.major ? requestAnimationFrame(i) : e();
        }), this.$menuInner.on("mouseenter", "li a", function (e) {
          var t = this.parentElement,
              i = w.isVirtual() ? w.selectpicker.view.position0 : 0,
              s = Array.prototype.indexOf.call(t.parentElement.children, t),
              i = w.selectpicker.current.data[s + i];w.focusItem(t, i, !0);
        }), this.$menuInner.on("click", "li a", function (e, t) {
          var i = I(this),
              s = w.$element[0],
              n = w.isVirtual() ? w.selectpicker.view.position0 : 0,
              o = w.selectpicker.current.data[i.parent().index() + n],
              l = o.index,
              r = k(s),
              a = s.selectedIndex,
              c = s.options[a],
              d = !0;if (w.multiple && 1 !== w.options.maxOptions && e.stopPropagation(), e.preventDefault(), !w.isDisabled() && !i.parent().hasClass(D.DISABLED)) {
            var h = o.option,
                p = I(h),
                u = h.selected,
                f = p.parent("optgroup"),
                m = f.find("option"),
                n = w.options.maxOptions,
                e = f.data("maxOptions") || !1;if ((t = l === w.activeIndex ? !0 : t) || (w.prevActiveIndex = w.activeIndex, w.activeIndex = void 0), w.multiple) {
              if (h.selected = !u, w.setSelected(l, !u), w.focusedParent.focus(), !1 !== n || !1 !== e) {
                i = n < x(s).length, o = e < f.find("option:selected").length;if (n && i || e && o) if (n && 1 == n) s.selectedIndex = -1, h.selected = !0, w.setOptionStatus(!0);else if (e && 1 == e) {
                  for (var v = 0; v < m.length; v++) {
                    var g = m[v];g.selected = !1, w.setSelected(g.liIndex, !1);
                  }h.selected = !0, w.setSelected(l, !0);
                } else {
                  var t = "string" == typeof w.options.maxOptionsText ? [w.options.maxOptionsText, w.options.maxOptionsText] : w.options.maxOptionsText,
                      u = "function" == typeof t ? t(n, e) : t,
                      f = u[0].replace("{n}", n),
                      t = u[1].replace("{n}", e),
                      b = I('<div class="notify"></div>');u[2] && (f = f.replace("{var}", u[2][1 < n ? 0 : 1]), t = t.replace("{var}", u[2][1 < e ? 0 : 1])), h.selected = !1, w.$menu.append(b), n && i && (b.append(I("<div>" + f + "</div>")), d = !1, w.$element.trigger("maxReached" + L)), e && o && (b.append(I("<div>" + t + "</div>")), d = !1, w.$element.trigger("maxReachedGrp" + L)), setTimeout(function () {
                    w.setSelected(l, !1);
                  }, 10), b[0].classList.add("fadeOut"), setTimeout(function () {
                    b.remove();
                  }, 1050);
                }
              }
            } else c && (c.selected = !1), h.selected = !0, w.setSelected(l, !0);!w.multiple || w.multiple && 1 === w.options.maxOptions ? w.$button.trigger("focus") : w.options.liveSearch && w.$searchbox.trigger("focus"), d && (!w.multiple && a === s.selectedIndex || (y = [h.index, p.prop("selected"), r], w.$element.triggerNative("change")));
          }
        }), this.$menu.on("click", "li." + D.DISABLED + " a, ." + D.POPOVERHEADER + ", ." + D.POPOVERHEADER + " :not(.close)", function (e) {
          e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), (w.options.liveSearch && !I(e.target).hasClass("close") ? w.$searchbox : w.$button).trigger("focus"));
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function (e) {
          e.preventDefault(), e.stopPropagation(), (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus");
        }), this.$menu.on("click", "." + D.POPOVERHEADER + " .close", function () {
          w.$button.trigger("click");
        }), this.$searchbox.on("click", function (e) {
          e.stopPropagation();
        }), this.$menu.on("click", ".actions-btn", function (e) {
          (w.options.liveSearch ? w.$searchbox : w.$button).trigger("focus"), e.preventDefault(), e.stopPropagation(), I(this).hasClass("bs-select-all") ? w.selectAll() : w.deselectAll();
        }), this.$button.on("focus" + L, function (e) {
          var t = w.$element[0].getAttribute("tabindex");void 0 !== t && e.originalEvent && e.originalEvent.isTrusted && (this.setAttribute("tabindex", t), w.$element[0].setAttribute("tabindex", -1), w.selectpicker.view.tabindex = t);
        }).on("blur" + L, function (e) {
          void 0 !== w.selectpicker.view.tabindex && e.originalEvent && e.originalEvent.isTrusted && (w.$element[0].setAttribute("tabindex", w.selectpicker.view.tabindex), this.setAttribute("tabindex", -1), w.selectpicker.view.tabindex = void 0);
        }), this.$element.on("change" + L, function () {
          w.render(), w.$element.trigger("changed" + L, y), y = null;
        }).on("focus" + L, function () {
          w.options.mobile || w.$button[0].focus();
        });
      }, liveSearchListener: function liveSearchListener() {
        var p = this;this.$button.on("click.bs.dropdown.data-api", function () {
          p.$searchbox.val() && (p.$searchbox.val(""), p.selectpicker.search.previousValue = void 0);
        }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function (e) {
          e.stopPropagation();
        }), this.$searchbox.on("input propertychange", function () {
          var e = p.$searchbox[0].value;if (p.selectpicker.search.elements = [], p.selectpicker.search.data = [], e) {
            var t = [],
                i = e.toUpperCase(),
                s = {},
                n = [],
                o = p._searchStyle(),
                l = p.options.liveSearchNormalize;l && (i = u(i));for (var r = 0; r < p.selectpicker.main.data.length; r++) {
              var a = p.selectpicker.main.data[r];s[r] || (s[r] = w(a, i, o, l)), s[r] && void 0 !== a.headerIndex && -1 === n.indexOf(a.headerIndex) && (0 < a.headerIndex && (s[a.headerIndex - 1] = !0, n.push(a.headerIndex - 1)), s[a.headerIndex] = !0, n.push(a.headerIndex), s[a.lastIndex + 1] = !0), s[r] && "optgroup-label" !== a.type && n.push(r);
            }for (var r = 0, c = n.length; r < c; r++) {
              var d = n[r],
                  h = n[r - 1],
                  h = (a = p.selectpicker.main.data[d], p.selectpicker.main.data[h]);("divider" !== a.type || "divider" === a.type && h && "divider" !== h.type && c - 1 !== r) && (p.selectpicker.search.data.push(a), t.push(p.selectpicker.main.elements[d]));
            }p.activeIndex = void 0, p.noScroll = !0, p.$menuInner.scrollTop(0), p.selectpicker.search.elements = t, p.createView(!0), function (e, t) {
              e.length || (P.noResults.innerHTML = this.options.noneResultsText.replace("{0}", '"' + C(t) + '"'), this.$menuInner[0].firstChild.appendChild(P.noResults));
            }.call(p, t, e);
          } else p.selectpicker.search.previousValue && (p.$menuInner.scrollTop(0), p.createView(!1));p.selectpicker.search.previousValue = e;
        });
      }, _searchStyle: function _searchStyle() {
        return this.options.liveSearchStyle || "contains";
      }, val: function val(e) {
        var t = this.$element[0];if (void 0 === e) return this.$element.val();var i = k(t);return y = [null, null, i], this.$element.val(e).trigger("changed" + L, y), this.$newElement.hasClass(D.SHOW) && (this.multiple ? this.setOptionStatus(!0) : "number" == typeof (t = (t.options[t.selectedIndex] || {}).liIndex) && (this.setSelected(this.selectedIndex, !1), this.setSelected(t, !0))), this.render(), y = null, this.$element;
      }, changeAll: function changeAll(e) {
        if (this.multiple) {
          void 0 === e && (e = !0);var t = this.$element[0],
              i = 0,
              s = 0,
              n = k(t);t.classList.add("bs-select-hidden");for (var o = 0, l = this.selectpicker.current.data, r = l.length; o < r; o++) {
            var a = l[o],
                c = a.option;c && !a.disabled && "divider" !== a.type && (a.selected && i++, !0 === (c.selected = e) && s++);
          }t.classList.remove("bs-select-hidden"), i !== s && (this.setOptionStatus(), y = [null, null, n], this.$element.triggerNative("change"));
        }
      }, selectAll: function selectAll() {
        return this.changeAll(!0);
      }, deselectAll: function deselectAll() {
        return this.changeAll(!1);
      }, toggle: function toggle(e) {
        (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api");
      }, keydown: function keydown(e) {
        var t,
            i,
            s,
            n = I(this),
            o = n.hasClass("dropdown-toggle"),
            l = (o ? n.closest(".dropdown") : n.closest(H.MENU)).data("this"),
            r = l.findLis(),
            a = !1,
            c = 9 === e.which && !o && !l.options.selectOnTab,
            d = B.test(e.which) || c,
            h = l.$menuInner[0].scrollTop,
            p = !0 === l.isVirtual() ? l.selectpicker.view.position0 : 0;if (!(112 <= e.which && e.which <= 123)) if (!(o = l.$newElement.hasClass(D.SHOW)) && (d || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (l.$button.trigger("click.bs.dropdown.data-api"), l.options.liveSearch)) l.$searchbox.trigger("focus");else {
          if (27 === e.which && o && (e.preventDefault(), l.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), d) {
            if (!r.length) return;-1 !== (d = (t = l.selectpicker.main.elements[l.activeIndex]) ? Array.prototype.indexOf.call(t.parentElement.children, t) : -1) && l.defocusItem(t), 38 === e.which ? (-1 !== d && d--, d + p < 0 && (d += r.length), l.selectpicker.view.canHighlight[d + p] || -1 == (d = l.selectpicker.view.canHighlight.slice(0, d + p).lastIndexOf(!0) - p) && (d = r.length - 1)) : 40 !== e.which && !c || (++d + p >= l.selectpicker.view.canHighlight.length && (d = l.selectpicker.view.firstHighlightIndex), l.selectpicker.view.canHighlight[d + p] || (d = d + 1 + l.selectpicker.view.canHighlight.slice(d + p + 1).indexOf(!0))), e.preventDefault();var u = p + d;38 === e.which ? 0 === p && d === r.length - 1 ? (l.$menuInner[0].scrollTop = l.$menuInner[0].scrollHeight, u = l.selectpicker.current.elements.length - 1) : a = (s = (i = l.selectpicker.current.data[u]).position - i.height) < h : 40 !== e.which && !c || (d === l.selectpicker.view.firstHighlightIndex ? (l.$menuInner[0].scrollTop = 0, u = l.selectpicker.view.firstHighlightIndex) : a = h < (s = (i = l.selectpicker.current.data[u]).position - l.sizeInfo.menuInnerHeight)), t = l.selectpicker.current.elements[u], l.activeIndex = l.selectpicker.current.data[u].index, l.focusItem(t), l.selectpicker.view.currentActive = t, a && (l.$menuInner[0].scrollTop = s), (l.options.liveSearch ? l.$searchbox : n).trigger("focus");
          } else if (!n.is("input") && !R.test(e.which) || 32 === e.which && l.selectpicker.keydown.keyHistory) {
            var f,
                m = [];e.preventDefault(), l.selectpicker.keydown.keyHistory += T[e.which], l.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(l.selectpicker.keydown.resetKeyHistory.cancel), l.selectpicker.keydown.resetKeyHistory.cancel = l.selectpicker.keydown.resetKeyHistory.start(), f = l.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(f) && (f = f.charAt(0));for (var v = 0; v < l.selectpicker.current.data.length; v++) {
              var g = l.selectpicker.current.data[v];w(g, f, "startsWith", !0) && l.selectpicker.view.canHighlight[v] && m.push(g.index);
            }m.length && (u = 0, r.removeClass("active").find("a").removeClass("active"), 1 === f.length && (-1 === (u = m.indexOf(l.activeIndex)) || u === m.length - 1 ? u = 0 : u++), r = m[u], a = 0 < h - (i = l.selectpicker.main.data[r]).position ? (s = i.position - i.height, !0) : (s = i.position - l.sizeInfo.menuInnerHeight, i.position > h + l.sizeInfo.menuInnerHeight), t = l.selectpicker.main.elements[r], l.activeIndex = m[u], l.focusItem(t), t && t.firstChild.focus(), a && (l.$menuInner[0].scrollTop = s), n.trigger("focus"));
          }o && (32 === e.which && !l.selectpicker.keydown.keyHistory || 13 === e.which || 9 === e.which && l.options.selectOnTab) && (32 !== e.which && e.preventDefault(), l.options.liveSearch && 32 === e.which || (l.$menuInner.find(".active a").trigger("click", !0), n.trigger("focus"), l.options.liveSearch || (e.preventDefault(), I(document).data("spaceSelect", !0))));
        }
      }, mobile: function mobile() {
        this.options.mobile = !0, this.$element[0].classList.add("mobile-device");
      }, refresh: function refresh() {
        var e = I.extend({}, this.options, this.$element.data());this.options = e, this.checkDisabled(), this.buildData(), this.setStyle(), this.render(), this.buildList(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + L);
      }, hide: function hide() {
        this.$newElement.hide();
      }, show: function show() {
        this.$newElement.show();
      }, remove: function remove() {
        this.$newElement.remove(), this.$element.remove();
      }, destroy: function destroy() {
        this.$newElement.before(this.$element).remove(), (this.$bsContainer || this.$menu).remove(), this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode && this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption), this.$element.off(L).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), I(window).off(L + "." + this.selectId);
      } };var j = I.fn.selectpicker;function V() {
      if (I.fn.dropdown) return (I.fn.dropdown.Constructor._dataApiKeydownHandler || I.fn.dropdown.Constructor.prototype.keydown).apply(this, arguments);
    }I.fn.selectpicker = U, I.fn.selectpicker.Constructor = W, I.fn.selectpicker.noConflict = function () {
      return I.fn.selectpicker = j, this;
    }, I(document).off("keydown.bs.dropdown.data-api").on("keydown.bs.dropdown.data-api", ':not(.bootstrap-select) > [data-toggle="dropdown"]', V).on("keydown.bs.dropdown.data-api", ":not(.bootstrap-select) > .dropdown-menu", V).on("keydown" + L, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', W.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) {
      e.stopPropagation();
    }), I(window).on("load" + L + ".data-api", function () {
      I(".selectpicker").each(function () {
        var e = I(this);U.call(e, e.data());
      });
    });
  }(e);
});
"use strict";
"use strict";