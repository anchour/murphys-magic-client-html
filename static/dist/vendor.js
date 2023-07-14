/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./static/resources/scripts/vendor.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function r(n, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
  }
}
function Jt(n, t, i) {
  t && r(n.prototype, t), i && r(n, i), Object.defineProperty(n, "prototype", {
    writable: !1
  });
}
/*!
 * Splide.js
 * Version  : 4.1.2
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var n, t;
n = undefined, t = function t() {
  "use strict";

  var v = "(prefers-reduced-motion: reduce)",
    G = 4,
    rn = 5,
    r = {
      CREATED: 1,
      MOUNTED: 2,
      IDLE: 3,
      MOVING: G,
      SCROLLING: rn,
      DRAGGING: 6,
      DESTROYED: 7
    };
  function D(n) {
    n.length = 0;
  }
  function o(n, t, i) {
    return Array.prototype.slice.call(n, t, i);
  }
  function R(n) {
    return n.bind.apply(n, [null].concat(o(arguments, 1)));
  }
  function on() {}
  var p = setTimeout;
  function h(n) {
    return requestAnimationFrame(n);
  }
  function u(n, t) {
    return _typeof(t) === n;
  }
  function un(n) {
    return !c(n) && u("object", n);
  }
  var e = Array.isArray,
    x = R(u, "function"),
    C = R(u, "string"),
    en = R(u, "undefined");
  function c(n) {
    return null === n;
  }
  function m(n) {
    try {
      return n instanceof (n.ownerDocument.defaultView || window).HTMLElement;
    } catch (n) {
      return !1;
    }
  }
  function y(n) {
    return e(n) ? n : [n];
  }
  function g(n, t) {
    y(n).forEach(t);
  }
  function b(n, t) {
    return -1 < n.indexOf(t);
  }
  function k(n, t) {
    return n.push.apply(n, y(t)), n;
  }
  function A(t, n, i) {
    t && g(n, function (n) {
      n && t.classList[i ? "add" : "remove"](n);
    });
  }
  function M(n, t) {
    A(n, C(t) ? t.split(" ") : t, !0);
  }
  function L(n, t) {
    g(t, n.appendChild.bind(n));
  }
  function O(n, i) {
    g(n, function (n) {
      var t = (i || n).parentNode;
      t && t.insertBefore(n, i);
    });
  }
  function cn(n, t) {
    return m(n) && (n.msMatchesSelector || n.matches).call(n, t);
  }
  function S(n, t) {
    n = n ? o(n.children) : [];
    return t ? n.filter(function (n) {
      return cn(n, t);
    }) : n;
  }
  function fn(n, t) {
    return t ? S(n, t)[0] : n.firstElementChild;
  }
  var E = Object.keys;
  function w(t, i, n) {
    t && (n ? E(t).reverse() : E(t)).forEach(function (n) {
      "__proto__" !== n && i(t[n], n);
    });
  }
  function an(r) {
    return o(arguments, 1).forEach(function (i) {
      w(i, function (n, t) {
        r[t] = i[t];
      });
    }), r;
  }
  function d(i) {
    return o(arguments, 1).forEach(function (n) {
      w(n, function (n, t) {
        e(n) ? i[t] = n.slice() : un(n) ? i[t] = d({}, un(i[t]) ? i[t] : {}, n) : i[t] = n;
      });
    }), i;
  }
  function sn(t, n) {
    g(n || E(t), function (n) {
      delete t[n];
    });
  }
  function P(n, i) {
    g(n, function (t) {
      g(i, function (n) {
        t && t.removeAttribute(n);
      });
    });
  }
  function I(i, t, r) {
    un(t) ? w(t, function (n, t) {
      I(i, t, n);
    }) : g(i, function (n) {
      c(r) || "" === r ? P(n, t) : n.setAttribute(t, String(r));
    });
  }
  function j(n, t, i) {
    n = document.createElement(n);
    return t && (C(t) ? M : I)(n, t), i && L(i, n), n;
  }
  function _(n, t, i) {
    if (en(i)) return getComputedStyle(n)[t];
    c(i) || (n.style[t] = "" + i);
  }
  function ln(n, t) {
    _(n, "display", t);
  }
  function dn(n) {
    n.setActive && n.setActive() || n.focus({
      preventScroll: !0
    });
  }
  function z(n, t) {
    return n.getAttribute(t);
  }
  function vn(n, t) {
    return n && n.classList.contains(t);
  }
  function N(n) {
    return n.getBoundingClientRect();
  }
  function T(n) {
    g(n, function (n) {
      n && n.parentNode && n.parentNode.removeChild(n);
    });
  }
  function hn(n) {
    return fn(new DOMParser().parseFromString(n, "text/html").body);
  }
  function F(n, t) {
    n.preventDefault(), t && (n.stopPropagation(), n.stopImmediatePropagation());
  }
  function pn(n, t) {
    return n && n.querySelector(t);
  }
  function gn(n, t) {
    return t ? o(n.querySelectorAll(t)) : [];
  }
  function X(n, t) {
    A(n, t, !1);
  }
  function mn(n) {
    return n.timeStamp;
  }
  function W(n) {
    return C(n) ? n : n ? n + "px" : "";
  }
  var yn = "splide",
    f = "data-" + yn;
  function bn(n, t) {
    if (!n) throw new Error("[" + yn + "] " + (t || ""));
  }
  var Y = Math.min,
    wn = Math.max,
    xn = Math.floor,
    kn = Math.ceil,
    U = Math.abs;
  function Sn(n, t, i) {
    return U(n - t) < i;
  }
  function En(n, t, i, r) {
    var o = Y(t, i),
      t = wn(t, i);
    return r ? o < n && n < t : o <= n && n <= t;
  }
  function q(n, t, i) {
    var r = Y(t, i),
      t = wn(t, i);
    return Y(wn(r, n), t);
  }
  function Ln(n) {
    return (0 < n) - (n < 0);
  }
  function On(t, n) {
    return g(n, function (n) {
      t = t.replace("%s", "" + n);
    }), t;
  }
  function An(n) {
    return n < 10 ? "0" + n : "" + n;
  }
  var _n = {};
  function zn() {
    var c = [];
    function i(n, i, r) {
      g(n, function (t) {
        t && g(i, function (n) {
          n.split(" ").forEach(function (n) {
            n = n.split(".");
            r(t, n[0], n[1]);
          });
        });
      });
    }
    return {
      bind: function bind(n, t, u, e) {
        i(n, t, function (n, t, i) {
          var r = ("addEventListener" in n),
            o = r ? n.removeEventListener.bind(n, t, u, e) : n.removeListener.bind(n, u);
          r ? n.addEventListener(t, u, e) : n.addListener(u), c.push([n, t, i, u, o]);
        });
      },
      unbind: function unbind(n, t, o) {
        i(n, t, function (t, i, r) {
          c = c.filter(function (n) {
            return !!(n[0] !== t || n[1] !== i || n[2] !== r || o && n[3] !== o) || (n[4](), !1);
          });
        });
      },
      dispatch: function dispatch(n, t, i) {
        var r;
        return "function" == typeof CustomEvent ? r = new CustomEvent(t, {
          bubbles: !0,
          detail: i
        }) : (r = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !1, i), n.dispatchEvent(r), r;
      },
      destroy: function destroy() {
        c.forEach(function (n) {
          n[4]();
        }), D(c);
      }
    };
  }
  var B = "mounted",
    H = "move",
    Dn = "moved",
    Mn = "click",
    Pn = "active",
    In = "inactive",
    Rn = "visible",
    Cn = "hidden",
    J = "refresh",
    K = "updated",
    jn = "resize",
    Nn = "resized",
    Tn = "scroll",
    V = "scrolled",
    a = "destroy",
    Gn = "navigation:mounted",
    Fn = "autoplay:play",
    Xn = "autoplay:pause",
    Wn = "lazyload:loaded",
    Yn = "sk",
    Un = "sh";
  function Q(n) {
    var i = n ? n.event.bus : document.createDocumentFragment(),
      r = zn();
    return n && n.event.on(a, r.destroy), an(r, {
      bus: i,
      on: function on(n, t) {
        r.bind(i, y(n).join(" "), function (n) {
          t.apply(t, e(n.detail) ? n.detail : []);
        });
      },
      off: R(r.unbind, i),
      emit: function emit(n) {
        r.dispatch(i, n, o(arguments, 1));
      }
    });
  }
  function qn(t, n, i, r) {
    var o,
      u,
      e = Date.now,
      c = 0,
      f = !0,
      a = 0;
    function s() {
      if (!f) {
        if (c = t ? Y((e() - o) / t, 1) : 1, i && i(c), 1 <= c && (n(), o = e(), r && ++a >= r)) return l();
        u = h(s);
      }
    }
    function l() {
      f = !0;
    }
    function d() {
      u && cancelAnimationFrame(u), f = !(u = c = 0);
    }
    return {
      start: function start(n) {
        n || d(), o = e() - (n ? c * t : 0), f = !1, u = h(s);
      },
      rewind: function rewind() {
        o = e(), c = 0, i && i(c);
      },
      pause: l,
      cancel: d,
      set: function set(n) {
        t = n;
      },
      isPaused: function isPaused() {
        return f;
      }
    };
  }
  function s(n) {
    var t = n;
    return {
      set: function set(n) {
        t = n;
      },
      is: function is(n) {
        return b(y(n), t);
      }
    };
  }
  var n = "Arrow",
    Bn = n + "Left",
    Hn = n + "Right",
    t = n + "Up",
    n = n + "Down",
    Jn = "ttb",
    l = {
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: [t, Hn],
      ArrowRight: [n, Bn]
    };
  var Z = "role",
    $ = "tabindex",
    i = "aria-",
    Kn = i + "controls",
    Vn = i + "current",
    Qn = i + "selected",
    nn = i + "label",
    Zn = i + "labelledby",
    $n = i + "hidden",
    nt = i + "orientation",
    tt = i + "roledescription",
    it = i + "live",
    rt = i + "busy",
    ot = i + "atomic",
    ut = [Z, $, "disabled", Kn, Vn, nn, Zn, $n, nt, tt],
    i = yn + "__",
    et = yn,
    ct = i + "track",
    ft = i + "list",
    at = i + "slide",
    st = at + "--clone",
    lt = at + "__container",
    dt = i + "arrows",
    vt = i + "arrow",
    ht = vt + "--prev",
    pt = vt + "--next",
    gt = i + "pagination",
    mt = gt + "__page",
    yt = i + "progress" + "__bar",
    bt = i + "toggle",
    wt = i + "sr",
    tn = "is-active",
    xt = "is-prev",
    kt = "is-next",
    St = "is-visible",
    Et = "is-loading",
    Lt = "is-focus-in",
    Ot = "is-overflow",
    At = [tn, St, xt, kt, Et, Lt, Ot];
  var _t = "touchstart mousedown",
    zt = "touchmove mousemove",
    Dt = "touchend touchcancel mouseup click";
  var Mt = "slide",
    Pt = "loop",
    It = "fade";
  function Rt(o, r, t, u) {
    var e,
      n = Q(o),
      i = n.on,
      c = n.emit,
      f = n.bind,
      a = o.Components,
      s = o.root,
      l = o.options,
      d = l.isNavigation,
      v = l.updateOnMove,
      h = l.i18n,
      p = l.pagination,
      g = l.slideFocus,
      m = a.Direction.resolve,
      y = z(u, "style"),
      b = z(u, nn),
      w = -1 < t,
      x = fn(u, "." + lt);
    function k() {
      var n = o.splides.map(function (n) {
        n = n.splide.Components.Slides.getAt(r);
        return n ? n.slide.id : "";
      }).join(" ");
      I(u, nn, On(h.slideX, (w ? t : r) + 1)), I(u, Kn, n), I(u, Z, g ? "button" : ""), g && P(u, tt);
    }
    function S() {
      e || E();
    }
    function E() {
      var n, t, i;
      e || (n = o.index, (i = L()) !== vn(u, tn) && (A(u, tn, i), I(u, Vn, d && i || ""), c(i ? Pn : In, O)), i = function () {
        if (o.is(It)) return L();
        var n = N(a.Elements.track),
          t = N(u),
          i = m("left", !0),
          r = m("right", !0);
        return xn(n[i]) <= kn(t[i]) && xn(t[r]) <= kn(n[r]);
      }(), t = !i && (!L() || w), o.state.is([G, rn]) || I(u, $n, t || ""), I(gn(u, l.focusableNodes || ""), $, t ? -1 : ""), g && I(u, $, t ? -1 : 0), i !== vn(u, St) && (A(u, St, i), c(i ? Rn : Cn, O)), i || document.activeElement !== u || (t = a.Slides.getAt(o.index)) && dn(t.slide), A(u, xt, r === n - 1), A(u, kt, r === n + 1));
    }
    function L() {
      var n = o.index;
      return n === r || l.cloneStatus && n === t;
    }
    var O = {
      index: r,
      slideIndex: t,
      slide: u,
      container: x,
      isClone: w,
      mount: function mount() {
        w || (u.id = s.id + "-slide" + An(r + 1), I(u, Z, p ? "tabpanel" : "group"), I(u, tt, h.slide), I(u, nn, b || On(h.slideLabel, [r + 1, o.length]))), f(u, "click", R(c, Mn, O)), f(u, "keydown", R(c, Yn, O)), i([Dn, Un, V], E), i(Gn, k), v && i(H, S);
      },
      destroy: function destroy() {
        e = !0, n.destroy(), X(u, At), P(u, ut), I(u, "style", y), I(u, nn, b || "");
      },
      update: E,
      style: function style(n, t, i) {
        _(i && x || u, n, t);
      },
      isWithin: function isWithin(n, t) {
        return n = U(n - r), (n = w || !l.rewind && !o.is(Pt) ? n : Y(n, o.length - n)) <= t;
      }
    };
    return O;
  }
  var Ct = f + "-interval";
  var jt = {
    passive: !1,
    capture: !0
  };
  var Nt = {
    Spacebar: " ",
    Right: Hn,
    Left: Bn,
    Up: t,
    Down: n
  };
  function Tt(n) {
    return n = C(n) ? n : n.key, Nt[n] || n;
  }
  var Gt = "keydown";
  var Ft = f + "-lazy",
    Xt = Ft + "-srcset",
    Wt = "[" + Ft + "], [" + Xt + "]";
  var Yt = [" ", "Enter"];
  var Ut = Object.freeze({
      __proto__: null,
      Media: function Media(r, n, o) {
        var u = r.state,
          t = o.breakpoints || {},
          e = o.reducedMotion || {},
          i = zn(),
          c = [];
        function f(n) {
          n && i.destroy();
        }
        function a(n, t) {
          t = matchMedia(t);
          i.bind(t, "change", s), c.push([n, t]);
        }
        function s() {
          var n = u.is(7),
            t = o.direction,
            i = c.reduce(function (n, t) {
              return d(n, t[1].matches ? t[0] : {});
            }, {});
          sn(o), l(i), o.destroy ? r.destroy("completely" === o.destroy) : n ? (f(!0), r.mount()) : t !== o.direction && r.refresh();
        }
        function l(n, t, i) {
          d(o, n), t && d(Object.getPrototypeOf(o), n), !i && u.is(1) || r.emit(K, o);
        }
        return {
          setup: function setup() {
            var i = "min" === o.mediaQuery;
            E(t).sort(function (n, t) {
              return i ? +n - +t : +t - +n;
            }).forEach(function (n) {
              a(t[n], "(" + (i ? "min" : "max") + "-width:" + n + "px)");
            }), a(e, v), s();
          },
          destroy: f,
          reduce: function reduce(n) {
            matchMedia(v).matches && (n ? d(o, e) : sn(o, E(e)));
          },
          set: l
        };
      },
      Direction: function Direction(n, t, o) {
        return {
          resolve: function resolve(n, t, i) {
            var r = "rtl" !== (i = i || o.direction) || t ? i === Jn ? 0 : -1 : 1;
            return l[n] && l[n][r] || n.replace(/width|left|right/i, function (n, t) {
              n = l[n.toLowerCase()][r] || n;
              return 0 < t ? n.charAt(0).toUpperCase() + n.slice(1) : n;
            });
          },
          orient: function orient(n) {
            return n * ("rtl" === o.direction ? 1 : -1);
          }
        };
      },
      Elements: function Elements(n, t, i) {
        var r,
          o,
          u,
          e = Q(n),
          c = e.on,
          f = e.bind,
          a = n.root,
          s = i.i18n,
          l = {},
          d = [],
          v = [],
          h = [];
        function p() {
          r = y("." + ct), o = fn(r, "." + ft), bn(r && o, "A track/list element is missing."), k(d, S(o, "." + at + ":not(." + st + ")")), w({
            arrows: dt,
            pagination: gt,
            prev: ht,
            next: pt,
            bar: yt,
            toggle: bt
          }, function (n, t) {
            l[t] = y("." + n);
          }), an(l, {
            root: a,
            track: r,
            list: o,
            slides: d
          });
          var n = a.id || function (n) {
              return "" + n + An(_n[n] = (_n[n] || 0) + 1);
            }(yn),
            t = i.role;
          a.id = n, r.id = r.id || n + "-track", o.id = o.id || n + "-list", !z(a, Z) && "SECTION" !== a.tagName && t && I(a, Z, t), I(a, tt, s.carousel), I(o, Z, "presentation"), m();
        }
        function g(n) {
          var t = ut.concat("style");
          D(d), X(a, v), X(r, h), P([r, o], t), P(a, n ? t : ["style", tt]);
        }
        function m() {
          X(a, v), X(r, h), v = b(et), h = b(ct), M(a, v), M(r, h), I(a, nn, i.label), I(a, Zn, i.labelledby);
        }
        function y(n) {
          n = pn(a, n);
          return n && function (n, t) {
            if (x(n.closest)) return n.closest(t);
            for (var i = n; i && 1 === i.nodeType && !cn(i, t);) i = i.parentElement;
            return i;
          }(n, "." + et) === a ? n : void 0;
        }
        function b(n) {
          return [n + "--" + i.type, n + "--" + i.direction, i.drag && n + "--draggable", i.isNavigation && n + "--nav", n === et && tn];
        }
        return an(l, {
          setup: p,
          mount: function mount() {
            c(J, g), c(J, p), c(K, m), f(document, _t + " keydown", function (n) {
              u = "keydown" === n.type;
            }, {
              capture: !0
            }), f(a, "focusin", function () {
              A(a, Lt, !!u);
            });
          },
          destroy: g
        });
      },
      Slides: function Slides(r, o, u) {
        var n = Q(r),
          t = n.on,
          e = n.emit,
          c = n.bind,
          f = (n = o.Elements).slides,
          a = n.list,
          s = [];
        function i() {
          f.forEach(function (n, t) {
            d(n, t, -1);
          });
        }
        function l() {
          h(function (n) {
            n.destroy();
          }), D(s);
        }
        function d(n, t, i) {
          t = Rt(r, t, i, n);
          t.mount(), s.push(t), s.sort(function (n, t) {
            return n.index - t.index;
          });
        }
        function v(n) {
          return n ? p(function (n) {
            return !n.isClone;
          }) : s;
        }
        function h(n, t) {
          v(t).forEach(n);
        }
        function p(t) {
          return s.filter(x(t) ? t : function (n) {
            return C(t) ? cn(n.slide, t) : b(y(t), n.index);
          });
        }
        return {
          mount: function mount() {
            i(), t(J, l), t(J, i);
          },
          destroy: l,
          update: function update() {
            h(function (n) {
              n.update();
            });
          },
          register: d,
          get: v,
          getIn: function getIn(n) {
            var t = o.Controller,
              i = t.toIndex(n),
              r = t.hasFocus() ? 1 : u.perPage;
            return p(function (n) {
              return En(n.index, i, i + r - 1);
            });
          },
          getAt: function getAt(n) {
            return p(n)[0];
          },
          add: function add(n, o) {
            g(n, function (n) {
              var t, i, r;
              m(n = C(n) ? hn(n) : n) && ((t = f[o]) ? O(n, t) : L(a, n), M(n, u.classes.slide), t = n, i = R(e, jn), t = gn(t, "img"), (r = t.length) ? t.forEach(function (n) {
                c(n, "load error", function () {
                  --r || i();
                });
              }) : i());
            }), e(J);
          },
          remove: function remove(n) {
            T(p(n).map(function (n) {
              return n.slide;
            })), e(J);
          },
          forEach: h,
          filter: p,
          style: function style(t, i, r) {
            h(function (n) {
              n.style(t, i, r);
            });
          },
          getLength: function getLength(n) {
            return (n ? f : s).length;
          },
          isEnough: function isEnough() {
            return s.length > u.perPage;
          }
        };
      },
      Layout: function Layout(t, n, i) {
        var r,
          o,
          u,
          e = (a = Q(t)).on,
          c = a.bind,
          f = a.emit,
          a = n.Slides,
          s = n.Direction.resolve,
          l = (n = n.Elements).root,
          d = n.track,
          v = n.list,
          h = a.getAt,
          p = a.style;
        function g() {
          r = i.direction === Jn, _(l, "maxWidth", W(i.width)), _(d, s("paddingLeft"), y(!1)), _(d, s("paddingRight"), y(!0)), m(!0);
        }
        function m(n) {
          var t = N(l);
          !n && o.width === t.width && o.height === t.height || (_(d, "height", function () {
            var n = "";
            r && (bn(n = b(), "height or heightRatio is missing."), n = "calc(" + n + " - " + y(!1) + " - " + y(!0) + ")");
            return n;
          }()), p(s("marginRight"), W(i.gap)), p("width", i.autoWidth ? null : W(i.fixedWidth) || (r ? "" : w())), p("height", W(i.fixedHeight) || (r ? i.autoHeight ? null : w() : b()), !0), o = t, f(Nn), u !== (u = O()) && (A(l, Ot, u), f("overflow", u)));
        }
        function y(n) {
          var t = i.padding,
            n = s(n ? "right" : "left");
          return t && W(t[n] || (un(t) ? 0 : t)) || "0px";
        }
        function b() {
          return W(i.height || N(v).width * i.heightRatio);
        }
        function w() {
          var n = W(i.gap);
          return "calc((100%" + (n && " + " + n) + ")/" + (i.perPage || 1) + (n && " - " + n) + ")";
        }
        function x() {
          return N(v)[s("width")];
        }
        function k(n, t) {
          n = h(n || 0);
          return n ? N(n.slide)[s("width")] + (t ? 0 : L()) : 0;
        }
        function S(n, t) {
          var i,
            n = h(n);
          return n ? (n = N(n.slide)[s("right")], i = N(v)[s("left")], U(n - i) + (t ? 0 : L())) : 0;
        }
        function E(n) {
          return S(t.length - 1) - S(0) + k(0, n);
        }
        function L() {
          var n = h(0);
          return n && parseFloat(_(n.slide, s("marginRight"))) || 0;
        }
        function O() {
          return t.is(It) || E(!0) > x();
        }
        return {
          mount: function mount() {
            var n, t, i;
            g(), c(window, "resize load", (n = R(f, jn), i = qn(t || 0, n, null, 1), function () {
              i.isPaused() && i.start();
            })), e([K, J], g), e(jn, m);
          },
          resize: m,
          listSize: x,
          slideSize: k,
          sliderSize: E,
          totalSize: S,
          getPadding: function getPadding(n) {
            return parseFloat(_(d, s("padding" + (n ? "Right" : "Left")))) || 0;
          },
          isOverflow: O
        };
      },
      Clones: function Clones(c, i, f) {
        var t,
          r = Q(c),
          n = r.on,
          a = i.Elements,
          s = i.Slides,
          o = i.Direction.resolve,
          l = [];
        function u() {
          if (n(J, d), n([K, jn], v), t = h()) {
            var o = t,
              u = s.get().slice(),
              e = u.length;
            if (e) {
              for (; u.length < o;) k(u, u);
              k(u.slice(-o), u.slice(0, o)).forEach(function (n, t) {
                var i = t < o,
                  r = function (n, t) {
                    n = n.cloneNode(!0);
                    return M(n, f.classes.clone), n.id = c.root.id + "-clone" + An(t + 1), n;
                  }(n.slide, t);
                i ? O(r, u[0].slide) : L(a.list, r), k(l, r), s.register(r, t - o + (i ? 0 : e), n.index);
              });
            }
            i.Layout.resize(!0);
          }
        }
        function d() {
          e(), u();
        }
        function e() {
          T(l), D(l), r.destroy();
        }
        function v() {
          var n = h();
          t !== n && (t < n || !n) && r.emit(J);
        }
        function h() {
          var n,
            t = f.clones;
          return c.is(Pt) ? en(t) && (t = (n = f[o("fixedWidth")] && i.Layout.slideSize(0)) && kn(N(a.track)[o("width")] / n) || f[o("autoWidth")] && c.length || 2 * f.perPage) : t = 0, t;
        }
        return {
          mount: u,
          destroy: e
        };
      },
      Move: function Move(r, c, o) {
        var e,
          n = Q(r),
          t = n.on,
          f = n.emit,
          a = r.state.set,
          u = (n = c.Layout).slideSize,
          i = n.getPadding,
          s = n.totalSize,
          l = n.listSize,
          d = n.sliderSize,
          v = (n = c.Direction).resolve,
          h = n.orient,
          p = (n = c.Elements).list,
          g = n.track;
        function m() {
          c.Controller.isBusy() || (c.Scroll.cancel(), y(r.index), c.Slides.update());
        }
        function y(n) {
          b(S(n, !0));
        }
        function b(n, t) {
          r.is(It) || (t = t ? n : function (n) {
            {
              var t, i;
              r.is(Pt) && (t = k(n), i = t > c.Controller.getEnd(), (t < 0 || i) && (n = w(n, i)));
            }
            return n;
          }(n), _(p, "transform", "translate" + v("X") + "(" + t + "px)"), n !== t && f(Un));
        }
        function w(n, t) {
          var i = n - L(t),
            r = d();
          return n -= h(r * (kn(U(i) / r) || 1)) * (t ? 1 : -1);
        }
        function x() {
          b(E(), !0), e.cancel();
        }
        function k(n) {
          for (var t = c.Slides.get(), i = 0, r = 1 / 0, o = 0; o < t.length; o++) {
            var u = t[o].index,
              e = U(S(u, !0) - n);
            if (!(e <= r)) break;
            r = e, i = u;
          }
          return i;
        }
        function S(n, t) {
          var i = h(s(n - 1) - (n = n, "center" === (i = o.focus) ? (l() - u(n, !0)) / 2 : +i * u(n) || 0));
          return t ? (n = i, n = o.trimSpace && r.is(Mt) ? q(n, 0, h(d(!0) - l())) : n) : i;
        }
        function E() {
          var n = v("left");
          return N(p)[n] - N(g)[n] + h(i(!1));
        }
        function L(n) {
          return S(n ? c.Controller.getEnd() : 0, !!o.trimSpace);
        }
        return {
          mount: function mount() {
            e = c.Transition, t([B, Nn, K, J], m);
          },
          move: function move(n, t, i, r) {
            var o, u;
            n !== t && (o = i < n, u = h(w(E(), o)), o ? 0 <= u : u <= p[v("scrollWidth")] - N(g)[v("width")]) && (x(), b(w(E(), i < n), !0)), a(G), f(H, t, i, n), e.start(t, function () {
              a(3), f(Dn, t, i, n), r && r();
            });
          },
          jump: y,
          translate: b,
          shift: w,
          cancel: x,
          toIndex: k,
          toPosition: S,
          getPosition: E,
          getLimit: L,
          exceededLimit: function exceededLimit(n, t) {
            t = en(t) ? E() : t;
            var i = !0 !== n && h(t) < h(L(!1)),
              n = !1 !== n && h(t) > h(L(!0));
            return i || n;
          },
          reposition: m
        };
      },
      Controller: function Controller(o, u, e) {
        var c,
          f,
          a,
          s,
          n = Q(o),
          t = n.on,
          i = n.emit,
          l = u.Move,
          d = l.getPosition,
          r = l.getLimit,
          v = l.toPosition,
          h = (n = u.Slides).isEnough,
          p = n.getLength,
          g = e.omitEnd,
          m = o.is(Pt),
          y = o.is(Mt),
          b = R(L, !1),
          w = R(L, !0),
          x = e.start || 0,
          k = x;
        function S() {
          f = p(!0), a = e.perMove, s = e.perPage, c = _();
          var n = q(x, 0, g ? c : f - 1);
          n !== x && (x = n, l.reposition());
        }
        function E() {
          c !== _() && i("ei");
        }
        function L(n, t) {
          var i = a || (P() ? 1 : s),
            i = O(x + i * (n ? -1 : 1), x, !(a || P()));
          return -1 === i && y && !Sn(d(), r(!n), 1) ? n ? 0 : c : t ? i : A(i);
        }
        function O(n, t, i) {
          var r;
          return h() || P() ? ((r = function (n) {
            if (y && "move" === e.trimSpace && n !== x) for (var t = d(); t === v(n, !0) && En(n, 0, o.length - 1, !e.rewind);) n < x ? --n : ++n;
            return n;
          }(n)) !== n && (t = n, n = r, i = !1), n < 0 || c < n ? n = a || !En(0, n, t, !0) && !En(c, t, n, !0) ? m ? i ? n < 0 ? -(f % s || s) : f : n : e.rewind ? n < 0 ? c : 0 : -1 : z(D(n)) : i && n !== t && (n = z(D(t) + (n < t ? -1 : 1)))) : n = -1, n;
        }
        function A(n) {
          return m ? (n + f) % f || 0 : n;
        }
        function _() {
          for (var n = f - (P() || m && a ? 1 : s); g && 0 < n--;) if (v(f - 1, !0) !== v(n, !0)) {
            n++;
            break;
          }
          return q(n, 0, f - 1);
        }
        function z(n) {
          return q(P() ? n : s * n, 0, c);
        }
        function D(n) {
          return P() ? Y(n, c) : xn((c <= n ? f - 1 : n) / s);
        }
        function M(n) {
          n !== x && (k = x, x = n);
        }
        function P() {
          return !en(e.focus) || e.isNavigation;
        }
        function I() {
          return o.state.is([G, rn]) && !!e.waitForTransition;
        }
        return {
          mount: function mount() {
            S(), t([K, J, "ei"], S), t(Nn, E);
          },
          go: function go(n, t, i) {
            var r;
            I() || -1 < (r = A(n = function (n) {
              var t = x;
              {
                var i, r;
                C(n) ? (r = n.match(/([+\-<>])(\d+)?/) || [], i = r[1], r = r[2], "+" === i || "-" === i ? t = O(x + +("" + i + (+r || 1)), x) : ">" === i ? t = r ? z(+r) : b(!0) : "<" === i && (t = w(!0))) : t = m ? n : q(n, 0, c);
              }
              return t;
            }(n))) && (t || r !== x) && (M(r), l.move(n, r, k, i));
          },
          scroll: function scroll(n, t, i, r) {
            u.Scroll.scroll(n, t, i, function () {
              var n = A(l.toIndex(d()));
              M(g ? Y(n, c) : n), r && r();
            });
          },
          getNext: b,
          getPrev: w,
          getAdjacent: L,
          getEnd: _,
          setIndex: M,
          getIndex: function getIndex(n) {
            return n ? k : x;
          },
          toIndex: z,
          toPage: D,
          toDest: function toDest(n) {
            return n = l.toIndex(n), y ? q(n, 0, c) : n;
          },
          hasFocus: P,
          isBusy: I
        };
      },
      Arrows: function Arrows(o, n, t) {
        var i,
          r,
          u = Q(o),
          e = u.on,
          c = u.bind,
          f = u.emit,
          a = t.classes,
          s = t.i18n,
          l = n.Elements,
          d = n.Controller,
          v = l.arrows,
          h = l.track,
          p = v,
          g = l.prev,
          m = l.next,
          y = {};
        function b() {
          var n = t.arrows;
          !n || g && m || (p = v || j("div", a.arrows), g = S(!0), m = S(!1), i = !0, L(p, [g, m]), v || O(p, h)), g && m && (an(y, {
            prev: g,
            next: m
          }), ln(p, n ? "" : "none"), M(p, r = dt + "--" + t.direction), n && (e([B, Dn, J, V, "ei"], E), c(m, "click", R(k, ">")), c(g, "click", R(k, "<")), E(), I([g, m], Kn, h.id), f("arrows:mounted", g, m))), e(K, w);
        }
        function w() {
          x(), b();
        }
        function x() {
          u.destroy(), X(p, r), i ? (T(v ? [g, m] : p), g = m = null) : P([g, m], ut);
        }
        function k(n) {
          d.go(n, !0);
        }
        function S(n) {
          return hn('<button class="' + a.arrow + " " + (n ? a.prev : a.next) + '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' + (t.arrowPath || "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") + '" />');
        }
        function E() {
          var n, t, i, r;
          g && m && (r = o.index, n = d.getPrev(), t = d.getNext(), i = -1 < n && r < n ? s.last : s.prev, r = -1 < t && t < r ? s.first : s.next, g.disabled = n < 0, m.disabled = t < 0, I(g, nn, i), I(m, nn, r), f("arrows:updated", g, m, n, t));
        }
        return {
          arrows: y,
          mount: b,
          destroy: x,
          update: E
        };
      },
      Autoplay: function Autoplay(n, t, i) {
        var r,
          o,
          u = Q(n),
          e = u.on,
          c = u.bind,
          f = u.emit,
          a = qn(i.interval, n.go.bind(n, ">"), function (n) {
            var t = l.bar;
            t && _(t, "width", 100 * n + "%"), f("autoplay:playing", n);
          }),
          s = a.isPaused,
          l = t.Elements,
          d = (u = t.Elements).root,
          v = u.toggle,
          h = i.autoplay,
          p = "pause" === h;
        function g() {
          s() && t.Slides.isEnough() && (a.start(!i.resetProgress), o = r = p = !1, b(), f(Fn));
        }
        function m(n) {
          p = !!(n = void 0 === n ? !0 : n), b(), s() || (a.pause(), f(Xn));
        }
        function y() {
          p || (r || o ? m(!1) : g());
        }
        function b() {
          v && (A(v, tn, !p), I(v, nn, i.i18n[p ? "play" : "pause"]));
        }
        function w(n) {
          n = t.Slides.getAt(n);
          a.set(n && +z(n.slide, Ct) || i.interval);
        }
        return {
          mount: function mount() {
            h && (i.pauseOnHover && c(d, "mouseenter mouseleave", function (n) {
              r = "mouseenter" === n.type, y();
            }), i.pauseOnFocus && c(d, "focusin focusout", function (n) {
              o = "focusin" === n.type, y();
            }), v && c(v, "click", function () {
              p ? g() : m(!0);
            }), e([H, Tn, J], a.rewind), e(H, w), v && I(v, Kn, l.track.id), p || g(), b());
          },
          destroy: a.cancel,
          play: g,
          pause: m,
          isPaused: s
        };
      },
      Cover: function Cover(n, t, i) {
        var r = Q(n).on;
        function o(i) {
          t.Slides.forEach(function (n) {
            var t = fn(n.container || n.slide, "img");
            t && t.src && u(i, t, n);
          });
        }
        function u(n, t, i) {
          i.style("background", n ? 'center/cover no-repeat url("' + t.src + '")' : "", !0), ln(t, n ? "none" : "");
        }
        return {
          mount: function mount() {
            i.cover && (r(Wn, R(u, !0)), r([B, K, J], R(o, !0)));
          },
          destroy: R(o, !1)
        };
      },
      Scroll: function Scroll(n, c, u) {
        var f,
          a,
          t = Q(n),
          i = t.on,
          s = t.emit,
          l = n.state.set,
          d = c.Move,
          v = d.getPosition,
          e = d.getLimit,
          h = d.exceededLimit,
          p = d.translate,
          g = n.is(Mt),
          m = 1;
        function y(n, t, i, r, o) {
          var u,
            e = v(),
            i = (x(), !i || g && h() || (i = c.Layout.sliderSize(), u = Ln(n) * i * xn(U(n) / i) || 0, n = d.toPosition(c.Controller.toDest(n % i)) + u), Sn(e, n, 1));
          m = 1, t = i ? 0 : t || wn(U(n - e) / 1.5, 800), a = r, f = qn(t, b, R(w, e, n, o), 1), l(rn), s(Tn), f.start();
        }
        function b() {
          l(3), a && a(), s(V);
        }
        function w(n, t, i, r) {
          var o = v(),
            r = (n + (t - n) * (t = r, (n = u.easingFunc) ? n(t) : 1 - Math.pow(1 - t, 4)) - o) * m;
          p(o + r), g && !i && h() && (m *= .6, U(r) < 10 && y(e(h(!0)), 600, !1, a, !0));
        }
        function x() {
          f && f.cancel();
        }
        function r() {
          f && !f.isPaused() && (x(), b());
        }
        return {
          mount: function mount() {
            i(H, x), i([K, J], r);
          },
          destroy: x,
          scroll: y,
          cancel: r
        };
      },
      Drag: function Drag(e, o, c) {
        var f,
          t,
          u,
          a,
          s,
          l,
          d,
          v,
          n = Q(e),
          i = n.on,
          h = n.emit,
          p = n.bind,
          g = n.unbind,
          m = e.state,
          y = o.Move,
          b = o.Scroll,
          w = o.Controller,
          x = o.Elements.track,
          k = o.Media.reduce,
          r = (n = o.Direction).resolve,
          S = n.orient,
          E = y.getPosition,
          L = y.exceededLimit,
          O = !1;
        function j() {
          var n = c.drag;
          C(!n), a = "free" === n;
        }
        function N(n) {
          var t, i, r;
          l = !1, d || (t = R(n), i = n.target, r = c.noDrag, cn(i, "." + mt + ", ." + vt) || r && cn(i, r) || !t && n.button || (w.isBusy() ? F(n, !0) : (v = t ? x : window, s = m.is([G, rn]), u = null, p(v, zt, A, jt), p(v, Dt, _, jt), y.cancel(), b.cancel(), z(n))));
        }
        function A(n) {
          var t, i, r, o, u;
          m.is(6) || (m.set(6), h("drag")), n.cancelable && (s ? (y.translate(f + D(n) / (O && e.is(Mt) ? 5 : 1)), u = 200 < M(n), t = O !== (O = L()), (u || t) && z(n), l = !0, h("dragging"), F(n)) : U(D(u = n)) > U(D(u, !0)) && (t = n, i = c.dragMinThreshold, r = un(i), o = r && i.mouse || 0, r = (r ? i.touch : +i) || 10, s = U(D(t)) > (R(t) ? r : o), F(n)));
        }
        function _(n) {
          var t, i, r;
          m.is(6) && (m.set(3), h("dragged")), s && (i = function (n) {
            return E() + Ln(n) * Y(U(n) * (c.flickPower || 600), a ? 1 / 0 : o.Layout.listSize() * (c.flickMaxPages || 1));
          }(t = function (n) {
            if (e.is(Pt) || !O) {
              var t = M(n);
              if (t && t < 200) return D(n) / t;
            }
            return 0;
          }(t = n)), r = c.rewind && c.rewindByDrag, k(!1), a ? w.scroll(i, 0, c.snap) : e.is(It) ? w.go(S(Ln(t)) < 0 ? r ? "<" : "-" : r ? ">" : "+") : e.is(Mt) && O && r ? w.go(L(!0) ? ">" : "<") : w.go(w.toDest(i), !0), k(!0), F(n)), g(v, zt, A), g(v, Dt, _), s = !1;
        }
        function T(n) {
          !d && l && F(n, !0);
        }
        function z(n) {
          u = t, t = n, f = E();
        }
        function D(n, t) {
          return I(n, t) - I(P(n), t);
        }
        function M(n) {
          return mn(n) - mn(P(n));
        }
        function P(n) {
          return t === n && u || t;
        }
        function I(n, t) {
          return (R(n) ? n.changedTouches[0] : n)["page" + r(t ? "Y" : "X")];
        }
        function R(n) {
          return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
        }
        function C(n) {
          d = n;
        }
        return {
          mount: function mount() {
            p(x, zt, on, jt), p(x, Dt, on, jt), p(x, _t, N, jt), p(x, "click", T, {
              capture: !0
            }), p(x, "dragstart", F), i([B, K], j);
          },
          disable: C,
          isDragging: function isDragging() {
            return s;
          }
        };
      },
      Keyboard: function Keyboard(t, n, i) {
        var r,
          o,
          u = Q(t),
          e = u.on,
          c = u.bind,
          f = u.unbind,
          a = t.root,
          s = n.Direction.resolve;
        function l() {
          var n = i.keyboard;
          n && (r = "global" === n ? window : a, c(r, Gt, h));
        }
        function d() {
          f(r, Gt);
        }
        function v() {
          var n = o;
          o = !0, p(function () {
            o = n;
          });
        }
        function h(n) {
          o || ((n = Tt(n)) === s(Bn) ? t.go("<") : n === s(Hn) && t.go(">"));
        }
        return {
          mount: function mount() {
            l(), e(K, d), e(K, l), e(H, v);
          },
          destroy: d,
          disable: function disable(n) {
            o = n;
          }
        };
      },
      LazyLoad: function LazyLoad(i, n, o) {
        var t = Q(i),
          r = t.on,
          u = t.off,
          e = t.bind,
          c = t.emit,
          f = "sequential" === o.lazyLoad,
          a = [Dn, V],
          s = [];
        function l() {
          D(s), n.Slides.forEach(function (r) {
            gn(r.slide, Wt).forEach(function (n) {
              var t = z(n, Ft),
                i = z(n, Xt);
              t === n.src && i === n.srcset || (t = o.classes.spinner, t = fn(i = n.parentElement, "." + t) || j("span", t, i), s.push([n, r, t]), n.src || ln(n, "none"));
            });
          }), (f ? p : (u(a), r(a, d), d))();
        }
        function d() {
          (s = s.filter(function (n) {
            var t = o.perPage * ((o.preloadPages || 1) + 1) - 1;
            return !n[1].isWithin(i.index, t) || v(n);
          })).length || u(a);
        }
        function v(n) {
          var t = n[0];
          M(n[1].slide, Et), e(t, "load error", R(h, n)), I(t, "src", z(t, Ft)), I(t, "srcset", z(t, Xt)), P(t, Ft), P(t, Xt);
        }
        function h(n, t) {
          var i = n[0],
            r = n[1];
          X(r.slide, Et), "error" !== t.type && (T(n[2]), ln(i, ""), c(Wn, i, r), c(jn)), f && p();
        }
        function p() {
          s.length && v(s.shift());
        }
        return {
          mount: function mount() {
            o.lazyLoad && (l(), r(J, l));
          },
          destroy: R(D, s),
          check: d
        };
      },
      Pagination: function Pagination(l, n, d) {
        var v,
          h,
          t = Q(l),
          p = t.on,
          g = t.emit,
          m = t.bind,
          y = n.Slides,
          b = n.Elements,
          w = n.Controller,
          x = w.hasFocus,
          r = w.getIndex,
          e = w.go,
          c = n.Direction.resolve,
          k = b.pagination,
          S = [];
        function E() {
          v && (T(k ? o(v.children) : v), X(v, h), D(S), v = null), t.destroy();
        }
        function L(n) {
          e(">" + n, !0);
        }
        function O(n, t) {
          var i = S.length,
            r = Tt(t),
            o = A(),
            u = -1,
            o = (r === c(Hn, !1, o) ? u = ++n % i : r === c(Bn, !1, o) ? u = (--n + i) % i : "Home" === r ? u = 0 : "End" === r && (u = i - 1), S[u]);
          o && (dn(o.button), e(">" + u), F(t, !0));
        }
        function A() {
          return d.paginationDirection || d.direction;
        }
        function _(n) {
          return S[w.toPage(n)];
        }
        function z() {
          var n,
            t = _(r(!0)),
            i = _(r());
          t && (X(n = t.button, tn), P(n, Qn), I(n, $, -1)), i && (M(n = i.button, tn), I(n, Qn, !0), I(n, $, "")), g("pagination:updated", {
            list: v,
            items: S
          }, t, i);
        }
        return {
          items: S,
          mount: function n() {
            E(), p([K, J, "ei"], n);
            var t = d.pagination;
            if (k && ln(k, t ? "" : "none"), t) {
              p([H, Tn, V], z);
              var t = l.length,
                i = d.classes,
                r = d.i18n,
                o = d.perPage,
                u = x() ? w.getEnd() + 1 : kn(t / o);
              M(v = k || j("ul", i.pagination, b.track.parentElement), h = gt + "--" + A()), I(v, Z, "tablist"), I(v, nn, r.select), I(v, nt, A() === Jn ? "vertical" : "");
              for (var e = 0; e < u; e++) {
                var c = j("li", null, v),
                  f = j("button", {
                    "class": i.page,
                    type: "button"
                  }, c),
                  a = y.getIn(e).map(function (n) {
                    return n.slide.id;
                  }),
                  s = !x() && 1 < o ? r.pageX : r.slideX;
                m(f, "click", R(L, e)), d.paginationKeyboard && m(f, "keydown", R(O, e)), I(c, Z, "presentation"), I(f, Z, "tab"), I(f, Kn, a.join(" ")), I(f, nn, On(s, e + 1)), I(f, $, -1), S.push({
                  li: c,
                  button: f,
                  page: e
                });
              }
              z(), g("pagination:mounted", {
                list: v,
                items: S
              }, _(l.index));
            }
          },
          destroy: E,
          getAt: _,
          update: z
        };
      },
      Sync: function Sync(i, n, t) {
        var r = t.isNavigation,
          o = t.slideFocus,
          u = [];
        function e() {
          var n, t;
          i.splides.forEach(function (n) {
            n.isParent || (f(i, n.splide), f(n.splide, i));
          }), r && (n = Q(i), (t = n.on)(Mn, s), t(Yn, l), t([B, K], a), u.push(n), n.emit(Gn, i.splides));
        }
        function c() {
          u.forEach(function (n) {
            n.destroy();
          }), D(u);
        }
        function f(n, r) {
          n = Q(n);
          n.on(H, function (n, t, i) {
            r.go(r.is(Pt) ? i : n);
          }), u.push(n);
        }
        function a() {
          I(n.Elements.list, nt, t.direction === Jn ? "vertical" : "");
        }
        function s(n) {
          i.go(n.index);
        }
        function l(n, t) {
          b(Yt, Tt(t)) && (s(n), F(t));
        }
        return {
          setup: R(n.Media.set, {
            slideFocus: en(o) ? r : o
          }, !0),
          mount: e,
          destroy: c,
          remount: function remount() {
            c(), e();
          }
        };
      },
      Wheel: function Wheel(e, c, f) {
        var n = Q(e).bind,
          a = 0;
        function t(n) {
          var t, i, r, o, u;
          n.cancelable && (t = (u = n.deltaY) < 0, i = mn(n), r = f.wheelMinThreshold || 0, o = f.wheelSleep || 0, U(u) > r && o < i - a && (e.go(t ? "<" : ">"), a = i), u = t, f.releaseWheel && !e.state.is(G) && -1 === c.Controller.getAdjacent(u) || F(n));
        }
        return {
          mount: function mount() {
            f.wheel && n(c.Elements.track, "wheel", t, jt);
          }
        };
      },
      Live: function Live(n, t, i) {
        var r = Q(n).on,
          o = t.Elements.track,
          u = i.live && !i.isNavigation,
          e = j("span", wt),
          c = qn(90, R(f, !1));
        function f(n) {
          I(o, rt, n), n ? (L(o, e), c.start()) : (T(e), c.cancel());
        }
        function a(n) {
          u && I(o, it, n ? "off" : "polite");
        }
        return {
          mount: function mount() {
            u && (a(!t.Autoplay.isPaused()), I(o, ot, !0), e.textContent = "…", r(Fn, R(a, !0)), r(Xn, R(a, !1)), r([Dn, V], R(f, !0)));
          },
          disable: a,
          destroy: function destroy() {
            P(o, [it, ot, rt]), T(e);
          }
        };
      }
    }),
    qt = {
      type: "slide",
      role: "region",
      speed: 400,
      perPage: 1,
      cloneStatus: !0,
      arrows: !0,
      pagination: !0,
      paginationKeyboard: !0,
      interval: 5e3,
      pauseOnHover: !0,
      pauseOnFocus: !0,
      resetProgress: !0,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
      drag: !0,
      direction: "ltr",
      trimSpace: !0,
      focusableNodes: "a, button, textarea, input, select, iframe",
      live: !0,
      classes: {
        slide: at,
        clone: st,
        arrows: dt,
        arrow: vt,
        prev: ht,
        next: pt,
        pagination: gt,
        page: mt,
        spinner: i + "spinner"
      },
      i18n: {
        prev: "Previous slide",
        next: "Next slide",
        first: "Go to first slide",
        last: "Go to last slide",
        slideX: "Go to slide %s",
        pageX: "Go to page %s",
        play: "Start autoplay",
        pause: "Pause autoplay",
        carousel: "carousel",
        slide: "slide",
        select: "Select a slide to show",
        slideLabel: "%s of %s"
      },
      reducedMotion: {
        speed: 0,
        rewindSpeed: 0,
        autoplay: "pause"
      }
    };
  function Bt(n, t, i) {
    var r = t.Slides;
    function o() {
      r.forEach(function (n) {
        n.style("transform", "translateX(-" + 100 * n.index + "%)");
      });
    }
    return {
      mount: function mount() {
        Q(n).on([B, J], o);
      },
      start: function start(n, t) {
        r.style("transition", "opacity " + i.speed + "ms " + i.easing), p(t);
      },
      cancel: on
    };
  }
  function Ht(u, n, e) {
    var c,
      f = n.Move,
      a = n.Controller,
      s = n.Scroll,
      t = n.Elements.list,
      l = R(_, t, "transition");
    function i() {
      l(""), s.cancel();
    }
    return {
      mount: function mount() {
        Q(u).bind(t, "transitionend", function (n) {
          n.target === t && c && (i(), c());
        });
      },
      start: function start(n, t) {
        var i = f.toPosition(n, !0),
          r = f.getPosition(),
          o = function (n) {
            var t = e.rewindSpeed;
            if (u.is(Mt) && t) {
              var i = a.getIndex(!0),
                r = a.getEnd();
              if (0 === i && r <= n || r <= i && 0 === n) return t;
            }
            return e.speed;
          }(n);
        1 <= U(i - r) && 1 <= o ? e.useScroll ? s.scroll(i, o, !1, t) : (l("transform " + o + "ms " + e.easing), f.translate(i, !0), c = t) : (f.jump(n), t());
      },
      cancel: i
    };
  }
  t = function () {
    function i(n, t) {
      this.event = Q(), this.Components = {}, this.state = s(1), this.splides = [], this.n = {}, this.t = {};
      n = C(n) ? pn(document, n) : n;
      bn(n, n + " is invalid."), t = d({
        label: z(this.root = n, nn) || "",
        labelledby: z(n, Zn) || ""
      }, qt, i.defaults, t || {});
      try {
        d(t, JSON.parse(z(n, f)));
      } catch (n) {
        bn(!1, "Invalid JSON");
      }
      this.n = Object.create(d({}, t));
    }
    var n = i.prototype;
    return n.mount = function (n, t) {
      var i = this,
        r = this.state,
        o = this.Components;
      return bn(r.is([1, 7]), "Already mounted!"), r.set(1), this.i = o, this.r = t || this.r || (this.is(It) ? Bt : Ht), this.t = n || this.t, w(an({}, Ut, this.t, {
        Transition: this.r
      }), function (n, t) {
        n = n(i, o, i.n);
        (o[t] = n).setup && n.setup();
      }), w(o, function (n) {
        n.mount && n.mount();
      }), this.emit(B), M(this.root, "is-initialized"), r.set(3), this.emit("ready"), this;
    }, n.sync = function (n) {
      return this.splides.push({
        splide: n
      }), n.splides.push({
        splide: this,
        isParent: !0
      }), this.state.is(3) && (this.i.Sync.remount(), n.Components.Sync.remount()), this;
    }, n.go = function (n) {
      return this.i.Controller.go(n), this;
    }, n.on = function (n, t) {
      return this.event.on(n, t), this;
    }, n.off = function (n) {
      return this.event.off(n), this;
    }, n.emit = function (n) {
      var t;
      return (t = this.event).emit.apply(t, [n].concat(o(arguments, 1))), this;
    }, n.add = function (n, t) {
      return this.i.Slides.add(n, t), this;
    }, n.remove = function (n) {
      return this.i.Slides.remove(n), this;
    }, n.is = function (n) {
      return this.n.type === n;
    }, n.refresh = function () {
      return this.emit(J), this;
    }, n.destroy = function (t) {
      void 0 === t && (t = !0);
      var n = this.event,
        i = this.state;
      return i.is(1) ? Q(this).on("ready", this.destroy.bind(this, t)) : (w(this.i, function (n) {
        n.destroy && n.destroy(t);
      }, !0), n.emit(a), n.destroy(), t && D(this.splides), i.set(7)), this;
    }, Jt(i, [{
      key: "options",
      get: function get() {
        return this.n;
      },
      set: function set(n) {
        this.i.Media.set(n, !0, !0);
      }
    }, {
      key: "length",
      get: function get() {
        return this.i.Slides.getLength(!0);
      }
    }, {
      key: "index",
      get: function get() {
        return this.i.Controller.getIndex();
      }
    }]), i;
  }();
  return t.defaults = {}, t.STATES = r, t;
}, "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (n = "undefined" != typeof globalThis ? globalThis : n || self).Splide = t();
function St(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function qt(t, n) {
  t.prototype = Object.create(n.prototype), e(t.prototype.constructor = t, n);
}
function e(t, n) {
  return (e = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, n) {
    return t.__proto__ = n, t;
  })(t, n);
}
/*!
 * Splide.js
 * Version  : 0.8.0
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var t;
t = function t() {
  "use strict";

  function n(t, n, e) {
    return Array.prototype.slice.call(t, n, e);
  }
  function r(t) {
    return t.bind.apply(t, [null].concat(n(arguments, 1)));
  }
  function t(t, n) {
    return _typeof(n) === t;
  }
  var q = Array.isArray;
  function o(t) {
    return q(t) ? t : [t];
  }
  function V(t, n) {
    o(t).forEach(n);
  }
  r(t, "function"), r(t, "string"), r(t, "undefined");
  var N = Object.keys;
  function z(s) {
    return n(arguments, 1).forEach(function (e) {
      var t = e,
        n = function n(t, _n2) {
          s[_n2] = e[_n2];
        },
        i = void 0;
      if (t) for (var r = N(t), r = i ? r.reverse() : r, o = 0; o < r.length; o++) {
        var u = r[o];
        if ("__proto__" !== u && !1 === n(t[u], u)) break;
      }
    }), s;
  }
  function W() {
    var s = [];
    function e(t, e, i) {
      V(t, function (n) {
        n && V(e, function (t) {
          t.split(" ").forEach(function (t) {
            t = t.split(".");
            i(n, t[0], t[1]);
          });
        });
      });
    }
    return {
      bind: function bind(t, n, o, u) {
        e(t, n, function (t, n, e) {
          var i = ("addEventListener" in t),
            r = i ? t.removeEventListener.bind(t, n, o, u) : t.removeListener.bind(t, o);
          i ? t.addEventListener(n, o, u) : t.addListener(o), s.push([t, n, e, o, r]);
        });
      },
      unbind: function unbind(t, n, r) {
        e(t, n, function (n, e, i) {
          s = s.filter(function (t) {
            return !!(t[0] !== n || t[1] !== e || t[2] !== i || r && t[3] !== r) || (t[4](), !1);
          });
        });
      },
      dispatch: function dispatch(t, n, e) {
        var i;
        return "function" == typeof CustomEvent ? i = new CustomEvent(n, {
          bubbles: !0,
          detail: e
        }) : (i = document.createEvent("CustomEvent")).initCustomEvent(n, !0, !1, e), t.dispatchEvent(i), i;
      },
      destroy: function destroy() {
        s.forEach(function (t) {
          t[4]();
        }), s.length = 0;
      }
    };
  }
  var i = "dragging",
    L = "destroy";
  function u(t) {
    var e = t ? t.event.bus : document.createDocumentFragment(),
      i = W();
    return t && t.event.on(L, i.destroy), z(i, {
      bus: e,
      on: function on(t, n) {
        i.bind(e, o(t).join(" "), function (t) {
          n.apply(n, q(t.detail) ? t.detail : []);
        });
      },
      off: r(i.unbind, e),
      emit: function emit(t) {
        i.dispatch(e, t, n(arguments, 1));
      }
    });
  }
  function Y(t) {
    var e = t;
    return {
      set: function set(t) {
        e = t;
      },
      is: function is(t) {
        return t = o(t), n = e, -1 < t.indexOf(n);
        var n;
      }
    };
  }
  var s = "splide__slide",
    e = s + "__container";
  function c(t, n, e) {
    return Array.prototype.slice.call(t, n, e);
  }
  function a(t) {
    return t.bind.apply(t, [null].concat(c(arguments, 1)));
  }
  function f(t, n) {
    return _typeof(n) === t;
  }
  function h(t) {
    return !l(t) && f("object", t);
  }
  var Q = Array.isArray,
    U = a(f, "function"),
    B = a(f, "string"),
    D = a(f, "undefined");
  function l(t) {
    return null === t;
  }
  function d(t, n) {
    (Q(t = t) ? t : [t]).forEach(n);
  }
  function v(n, t, e) {
    n && d(t, function (t) {
      t && n.classList[e ? "add" : "remove"](t);
    });
  }
  function y(t, n) {
    v(t, B(n) ? n.split(" ") : n, !0);
  }
  function H(t, n) {
    return t instanceof HTMLElement && (t.msMatchesSelector || t.matches).call(t, n);
  }
  function J(t, n) {
    return n ? (e = n, n = (n = t) ? c(n.children) : [], (e ? n.filter(function (t) {
      return H(t, e);
    }) : n)[0]) : t.firstElementChild;
    var e;
  }
  var X = Object.keys;
  function p(t, n, e) {
    if (t) for (var i = X(t), i = e ? i.reverse() : i, r = 0; r < i.length; r++) {
      var o = i[r];
      if ("__proto__" !== o && !1 === n(t[o], o)) break;
    }
  }
  function $(i) {
    return c(arguments, 1).forEach(function (e) {
      p(e, function (t, n) {
        i[n] = e[n];
      });
    }), i;
  }
  function G(e) {
    return c(arguments, 1).forEach(function (t) {
      p(t, function (t, n) {
        Q(t) ? e[n] = t.slice() : h(t) ? e[n] = G({}, h(e[n]) ? e[n] : {}, t) : e[n] = t;
      });
    }), e;
  }
  function K(e, n, i) {
    h(n) ? p(n, function (t, n) {
      K(e, n, t);
    }) : d(e, function (t) {
      var e;
      l(i) || "" === i ? (e = n, d(t, function (n) {
        d(e, function (t) {
          n && n.removeAttribute(t);
        });
      })) : t.setAttribute(n, String(i));
    });
  }
  function w(t, n, e) {
    t = document.createElement(t);
    return n && (B(n) ? y : K)(t, n), e && d(t, e.appendChild.bind(e)), t;
  }
  function Z(t, n) {
    var e = "display";
    D(n) ? getComputedStyle(t)[e] : l(n) || (t.style[e] = "" + n);
  }
  function tt(t, n) {
    v(t, n, !1);
  }
  var nt = Math.min,
    et = Math.max;
  Math.floor, Math.ceil, Math.abs;
  function it(t, n, e) {
    var i = nt(n, e),
      n = et(n, e);
    return nt(et(i, t), n);
  }
  var rt = "splide__video",
    m = "--has-video",
    ot = {
      hideControls: !1,
      loop: !1,
      mute: !1,
      volume: .2
    },
    ut = "video:click",
    st = function () {
      function t(t, n, e) {
        this.state = Y(1), this.event = u(), this.target = t, this.videoId = n, this.options = e || {}, this.onPlay = this.onPlay.bind(this), this.onPause = this.onPause.bind(this), this.onEnded = this.onEnded.bind(this), this.onPlayerReady = this.onPlayerReady.bind(this), this.onError = this.onError.bind(this);
      }
      var n = t.prototype;
      return n.on = function (t, n) {
        this.event.on(t, n);
      }, n.play = function () {
        var t = this.state;
        if (!t.is(9)) return this.event.emit("play"), t.is(2) ? t.set(4) : t.is(3) ? (this.player = this.createPlayer(this.videoId), t.set(4)) : void (t.is([4, 8]) || t.is(5) && (t.set(6), this.playVideo()));
        console.error("[splide] Can not play this video.");
      }, n.pause = function () {
        var t = this.state;
        if (!t.is(9)) return this.event.emit("pause"), t.is(4) ? t.set(2) : t.is(6) ? t.set(7) : void (t.is(8) && (this.pauseVideo(), this.state.set(5)));
      }, n.isPaused = function () {
        return !this.state.is(8);
      }, n.destroy = function () {
        this.event.destroy();
      }, n.onPlayerReady = function () {
        var t = this.state,
          n = t.is(4);
        t.set(5), n && this.play();
      }, n.onPlay = function () {
        var t = this.state,
          n = t.is(7);
        t.set(8), n ? this.pause() : this.event.emit("played");
      }, n.onPause = function () {
        this.state.set(5), this.event.emit("paused");
      }, n.onEnded = function () {
        this.state.set(5), this.event.emit("ended");
      }, n.onError = function () {
        this.state.set(9), this.event.emit("error");
      }, t;
    }(),
    ct = function (i) {
      function t(t, n, e) {
        return (t = i.call(this, t, n, e = void 0 === e ? {} : e) || this).state.set(3), t;
      }
      qt(t, i);
      var n = t.prototype;
      return n.createPlayer = function (t) {
        var n = this.options,
          e = this.options.playerOptions,
          e = void 0 === e ? {} : e,
          t = w("video", {
            src: t
          }, this.target),
          i = t.addEventListener.bind(t);
        return $(t, {
          controls: !n.hideControls,
          loop: n.loop,
          volume: it(n.volume, 0, 1),
          muted: n.mute
        }, e.htmlVideo || {}), i("play", this.onPlay), i("pause", this.onPause), i("ended", this.onEnded), i("loadeddata", this.onPlayerReady), i("error", this.onError), t;
      }, n.playVideo = function () {
        var t = this.player.play();
        t && t["catch"](this.onError.bind(this));
      }, n.pauseVideo = function () {
        this.player.pause();
      }, n.onError = function () {
        this.state.is(7) ? this.state.set(5) : i.prototype.onError.call(this);
      }, n.destroy = function () {
        i.prototype.destroy.call(this);
        var t = this.player,
          t = t.addEventListener.bind(t);
        t("play", this.onPlay), t("pause", this.onPause), t("ended", this.onEnded), t("loadeddata", this.onPlayerReady);
      }, t;
    }(st);
  function at(t, n) {
    for (var e = 0; e < n.length; e++) {
      var i = n[e];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  var ft = "undefined" != typeof global && "[object global]" === {}.toString.call(global);
  function ht(t, n) {
    return 0 === t.indexOf(n.toLowerCase()) ? t : "".concat(n.toLowerCase()).concat(t.substr(0, 1).toUpperCase()).concat(t.substr(1));
  }
  function b(t) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(t);
  }
  function lt(t) {
    var n,
      t = 0 < arguments.length && void 0 !== t ? t : {},
      e = t.id,
      t = t.url,
      t = e || t;
    if (!t) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (n = t, !isNaN(parseFloat(n)) && isFinite(n) && Math.floor(n) == n) return "https://vimeo.com/".concat(t);
    if (b(t)) return t.replace("http:", "https:");
    if (e) throw new TypeError("“".concat(e, "” is not a valid video id."));
    throw new TypeError("“".concat(t, "” is not a vimeo.com url."));
  }
  var k = void 0 !== Array.prototype.indexOf,
    g = "undefined" != typeof window && void 0 !== window.postMessage;
  if (!(ft || k && g)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
  var dt,
    vt,
    E,
    yt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function T() {
    if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
    if (E(this, "_id", "_WeakMap_" + pt() + "." + pt()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported");
  }
  function P(t, n) {
    if (!F(t) || !dt.call(t, "_id")) throw new TypeError(n + " method called on incompatible receiver " + _typeof(t));
  }
  function pt() {
    return Math.random().toString().substring(2);
  }
  function F(t) {
    return Object(t) === t;
  }
  (
  /*!
     * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
     * https://github.com/polygonplanet/weakmap-polyfill
     * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
     * @license MIT
     */
  k = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : yt).WeakMap || (dt = Object.prototype.hasOwnProperty, vt = Object.defineProperty && function () {
    try {
      return 1 === Object.defineProperty({}, "x", {
        value: 1
      }).x;
    } catch (t) {}
  }(), k.WeakMap = ((E = function E(t, n, e) {
    vt ? Object.defineProperty(t, n, {
      configurable: !0,
      writable: !0,
      value: e
    }) : t[n] = e;
  })(T.prototype, "delete", function (t) {
    var n;
    return P(this, "delete"), !!F(t) && !(!(n = t[this.t]) || n[0] !== t) && (delete t[this.t], !0);
  }), E(T.prototype, "get", function (t) {
    var n;
    return P(this, "get"), F(t) && (n = t[this.t]) && n[0] === t ? n[1] : void 0;
  }), E(T.prototype, "has", function (t) {
    var n;
    return P(this, "has"), !!F(t) && !(!(n = t[this.t]) || n[0] !== t);
  }), E(T.prototype, "set", function (t, n) {
    var e;
    if (P(this, "set"), F(t)) return (e = t[this.t]) && e[0] === t ? e[1] = n : E(t, this.t, [t, n]), this;
    throw new TypeError("Invalid value used as weak map key");
  }), E(T, "_polyfill", !0), T));
  (function (t) {
    /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
    var n, e, i;
    i = function i() {
      var n,
        e,
        i,
        r,
        o,
        t = Object.prototype.toString,
        u = "undefined" != typeof setImmediate ? function (t) {
          return setImmediate(t);
        } : setTimeout;
      try {
        Object.defineProperty({}, "x", {}), n = function n(t, _n3, e, i) {
          return Object.defineProperty(t, _n3, {
            value: e,
            writable: !0,
            configurable: !1 !== i
          });
        };
      } catch (t) {
        n = function n(t, _n4, e) {
          return t[_n4] = e, t;
        };
      }
      function s(t, n) {
        this.fn = t, this.self = n, this.next = void 0;
      }
      function c(t, n) {
        w.add(t, n), e = e || u(w.drain);
      }
      function a(t) {
        var n,
          e = _typeof(t);
        return "function" == typeof (n = null == t || "object" != e && "function" != e ? n : t.then) && n;
      }
      function f() {
        for (var t = 0; t < this.chain.length; t++) {
          e = n = o = r = i = void 0;
          var n,
            e,
            i = this,
            r = 1 === this.state ? this.chain[t].success : this.chain[t].failure,
            o = this.chain[t];
          try {
            !1 === r ? o.reject(i.msg) : (n = !0 === r ? i.msg : r.call(void 0, i.msg)) === o.promise ? o.reject(TypeError("Promise-chain cycle")) : (e = a(n)) ? e.call(n, o.resolve, o.reject) : o.resolve(n);
          } catch (t) {
            o.reject(t);
          }
        }
        this.chain.length = 0;
      }
      function h(t) {
        var e,
          i = this;
        if (!i.triggered) {
          i.triggered = !0, i.def && (i = i.def);
          try {
            (e = a(t)) ? c(function () {
              var n = new v(i);
              try {
                e.call(t, function () {
                  h.apply(n, arguments);
                }, function () {
                  l.apply(n, arguments);
                });
              } catch (t) {
                l.call(n, t);
              }
            }) : (i.msg = t, i.state = 1, 0 < i.chain.length && c(f, i));
          } catch (t) {
            l.call(new v(i), t);
          }
        }
      }
      function l(t) {
        var n = this;
        n.triggered || (n.triggered = !0, (n = n.def ? n.def : n).msg = t, n.state = 2, 0 < n.chain.length && c(f, n));
      }
      function d(t, e, i, r) {
        for (var n = 0; n < e.length; n++) !function (n) {
          t.resolve(e[n]).then(function (t) {
            i(n, t);
          }, r);
        }(n);
      }
      function v(t) {
        this.def = t, this.triggered = !1;
      }
      function y(t) {
        this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0;
      }
      function p(t) {
        if ("function" != typeof t) throw TypeError("Not a function");
        if (0 !== this.n) throw TypeError("Not a promise");
        this.n = 1;
        var i = new y(this);
        this.then = function (t, n) {
          var e = {
            success: "function" != typeof t || t,
            failure: "function" == typeof n && n
          };
          return e.promise = new this.constructor(function (t, n) {
            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
            e.resolve = t, e.reject = n;
          }), i.chain.push(e), 0 !== i.state && c(f, i), e.promise;
        }, this["catch"] = function (t) {
          return this.then(void 0, t);
        };
        try {
          t.call(void 0, function (t) {
            h.call(i, t);
          }, function (t) {
            l.call(i, t);
          });
        } catch (t) {
          l.call(i, t);
        }
      }
      var w = {
          add: function add(t, n) {
            o = new s(t, n), r ? r.next = o : i = o, r = o, o = void 0;
          },
          drain: function drain() {
            var t = i;
            for (i = r = e = void 0; t;) t.fn.call(t.self), t = t.next;
          }
        },
        m = n({}, "constructor", p, !1);
      return n(p.prototype = m, "__NPO__", 0, !1), n(p, "resolve", function (e) {
        return e && "object" == _typeof(e) && 1 === e.n ? e : new this(function (t, n) {
          if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
          t(e);
        });
      }), n(p, "reject", function (e) {
        return new this(function (t, n) {
          if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
          n(e);
        });
      }), n(p, "all", function (n) {
        var u = this;
        return "[object Array]" != t.call(n) ? u.reject(TypeError("Not an array")) : 0 === n.length ? u.resolve([]) : new u(function (e, t) {
          if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
          var i = n.length,
            r = Array(i),
            o = 0;
          d(u, n, function (t, n) {
            r[t] = n, ++o === i && e(r);
          }, t);
        });
      }), n(p, "race", function (n) {
        var i = this;
        return "[object Array]" != t.call(n) ? i.reject(TypeError("Not an array")) : new i(function (e, t) {
          if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
          d(i, n, function (t, n) {
            e(n);
          }, t);
        });
      }), p;
    }, (e = yt)[n = "Promise"] = e[n] || i(), t.exports && (t.exports = e[n]);
  })(g = {
    exports: {}
  });
  var _ = g.exports,
    C = new WeakMap();
  function j(t, n, e) {
    var i = C.get(t.element) || {};
    n in i || (i[n] = []), i[n].push(e), C.set(t.element, i);
  }
  function M(t, n) {
    return (C.get(t.element) || {})[n] || [];
  }
  function x(t, n, e) {
    var i = C.get(t.element) || {};
    return !i[n] || (e ? (-1 !== (e = i[n].indexOf(e)) && i[n].splice(e, 1), C.set(t.element, i), i[n] && 0 === i[n].length) : (i[n] = [], C.set(t.element, i), !0));
  }
  function wt(t) {
    if ("string" == typeof t) try {
      t = JSON.parse(t);
    } catch (t) {
      return console.warn(t), {};
    }
    return t;
  }
  function I(t, n, e) {
    t.element.contentWindow && t.element.contentWindow.postMessage && (n = {
      method: n
    }, void 0 !== e && (n.value = e), 8 <= (e = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"))) && e < 10 && (n = JSON.stringify(n)), t.element.contentWindow.postMessage(n, t.origin));
  }
  function mt(e, i) {
    var n,
      t,
      r,
      o,
      u = [];
    (i = wt(i)).event ? ("error" === i.event && M(e, i.data.method).forEach(function (t) {
      var n = new Error(i.data.message);
      n.name = i.data.name, t.reject(n), x(e, i.data.method, t);
    }), u = M(e, "event:".concat(i.event)), n = i.data) : i.method && (t = e, r = i.method, (r = !((o = M(t, r)).length < 1) && (x(t, r, t = o.shift()), t)) && (u.push(r), n = i.value)), u.forEach(function (t) {
      try {
        "function" == typeof t ? t.call(e, n) : t.resolve(n);
      } catch (t) {}
    });
  }
  var bt = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "interactive_params", "keyboard", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];
  function kt(i, t) {
    return bt.reduce(function (t, n) {
      var e = i.getAttribute("data-vimeo-".concat(n));
      return !e && "" !== e || (t[n] = "" === e ? 1 : e), t;
    }, 1 < arguments.length && void 0 !== t ? t : {});
  }
  function gt(t, n) {
    var e,
      t = t.html;
    if (n) return null === n.getAttribute("data-vimeo-initialized") && ((e = document.createElement("div")).innerHTML = t, n.appendChild(e.firstChild), n.setAttribute("data-vimeo-initialized", "true")), n.querySelector("iframe");
    throw new TypeError("An element must be provided");
  }
  function Et(o, t, n) {
    var u = 1 < arguments.length && void 0 !== t ? t : {},
      s = 2 < arguments.length ? n : void 0;
    return new Promise(function (n, e) {
      if (!b(o)) throw new TypeError("“".concat(o, "” is not a vimeo.com url."));
      var t,
        i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(o));
      for (t in u) u.hasOwnProperty(t) && (i += "&".concat(t, "=").concat(encodeURIComponent(u[t])));
      var r = new ("XDomainRequest" in window ? XDomainRequest : XMLHttpRequest)();
      r.open("GET", i, !0), r.onload = function () {
        if (404 === r.status) e(new Error("“".concat(o, "” was not found.")));else if (403 === r.status) e(new Error("“".concat(o, "” is not embeddable.")));else try {
          var t = JSON.parse(r.responseText);
          403 === t.domain_status_code ? (gt(t, s), e(new Error("“".concat(o, "” is not embeddable.")))) : n(t);
        } catch (t) {
          e(t);
        }
      }, r.onerror = function () {
        var t = r.status ? " (".concat(r.status, ")") : "";
        e(new Error("There was an error fetching the embed code from Vimeo".concat(t, ".")));
      }, r.send();
    });
  }
  function Tt(t) {
    function e(t) {
      "console" in window && console.error && console.error("There was an error creating an embed: ".concat(t));
    }
    t = 0 < arguments.length && void 0 !== t ? t : document, t = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    t.forEach(function (n) {
      try {
        var t;
        null === n.getAttribute("data-vimeo-defer") && Et(lt(t = kt(n)), t, n).then(function (t) {
          return gt(t, n);
        })["catch"](e);
      } catch (t) {
        e(t);
      }
    });
  }
  function Pt(t) {
    var s = 0 < arguments.length && void 0 !== t ? t : document;
    window.VimeoSeoMetadataAppended || (window.VimeoSeoMetadataAppended = !0, window.addEventListener("message", function (t) {
      if (b(t.origin)) {
        var n = wt(t.data);
        if (n && "ready" === n.event) for (var e, i = s.querySelectorAll("iframe"), r = 0; r < i.length; r++) {
          var o = i[r],
            u = o.contentWindow === t.source;
          e = o.src, /^https:\/\/player\.vimeo\.com\/video\/\d+/.test(e) && u && new Ct(o).callMethod("appendVideoMetadata", window.location.href);
        }
      }
    }));
  }
  var R,
    Ft,
    A,
    O = new WeakMap(),
    _t = new WeakMap(),
    S = {},
    Ct = function () {
      function r(o) {
        var u = this,
          n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          t = this,
          e = r;
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        if (window.jQuery && o instanceof jQuery && (1 < o.length && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), o = o[0]), "undefined" != typeof document && "string" == typeof o && (o = document.getElementById(o)), t = o, !Boolean(t && 1 === t.nodeType && "nodeName" in t && t.ownerDocument && t.ownerDocument.defaultView)) throw new TypeError("You must pass either a valid element or a valid id.");
        if ("IFRAME" === o.nodeName || (e = o.querySelector("iframe")) && (o = e), "IFRAME" === o.nodeName && !b(o.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
        if (O.has(o)) return O.get(o);
        this.e = o.ownerDocument.defaultView, this.element = o, this.origin = "*";
        var i,
          t = new _(function (i, r) {
            var t;
            u.i = function (t) {
              var n, e;
              b(t.origin) && u.element.contentWindow === t.source && ("*" === u.origin && (u.origin = t.origin), (t = wt(t.data)) && "error" === t.event && t.data && "ready" === t.data.method ? ((n = new Error(t.data.message)).name = t.data.name, r(n)) : (n = t && "ready" === t.event, e = t && "ping" === t.method, n || e ? (u.element.setAttribute("data-ready", "true"), i()) : mt(u, t)));
            }, u.e.addEventListener("message", u.i), "IFRAME" !== u.element.nodeName && Et(lt(t = kt(o, n)), t, o).then(function (t) {
              var n,
                e,
                i = gt(t, o);
              return u.element = i, u.r = o, n = o, i = i, e = C.get(n), C.set(i, e), C["delete"](n), O.set(u.element, u), t;
            })["catch"](r);
          });
        return _t.set(this, t), O.set(this.element, this), "IFRAME" === this.element.nodeName && I(this, "ping"), S.isEnabled && (i = function i() {
          return S.exit();
        }, this.fullscreenchangeHandler = function () {
          (S.isFullscreen ? j : x)(u, "event:exitFullscreen", i), u.ready().then(function () {
            I(u, "fullscreenchange", S.isFullscreen);
          });
        }, S.on("fullscreenchange", this.fullscreenchangeHandler)), this;
      }
      var t, n, e;
      return t = r, (n = [{
        key: "callMethod",
        value: function value(e) {
          var i = this,
            r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          return new _(function (t, n) {
            return i.ready().then(function () {
              j(i, e, {
                resolve: t,
                reject: n
              }), I(i, e, r);
            })["catch"](n);
          });
        }
      }, {
        key: "get",
        value: function value(e) {
          var i = this;
          return new _(function (t, n) {
            return e = ht(e, "get"), i.ready().then(function () {
              j(i, e, {
                resolve: t,
                reject: n
              }), I(i, e);
            })["catch"](n);
          });
        }
      }, {
        key: "set",
        value: function value(e, i) {
          var r = this;
          return new _(function (t, n) {
            if (e = ht(e, "set"), null == i) throw new TypeError("There must be a value to set.");
            return r.ready().then(function () {
              j(r, e, {
                resolve: t,
                reject: n
              }), I(r, e, i);
            })["catch"](n);
          });
        }
      }, {
        key: "on",
        value: function value(t, n) {
          if (!t) throw new TypeError("You must pass an event name.");
          if (!n) throw new TypeError("You must pass a callback function.");
          if ("function" != typeof n) throw new TypeError("The callback must be a function.");
          0 === M(this, "event:".concat(t)).length && this.callMethod("addEventListener", t)["catch"](function () {}), j(this, "event:".concat(t), n);
        }
      }, {
        key: "off",
        value: function value(t, n) {
          if (!t) throw new TypeError("You must pass an event name.");
          if (n && "function" != typeof n) throw new TypeError("The callback must be a function.");
          x(this, "event:".concat(t), n) && this.callMethod("removeEventListener", t)["catch"](function (t) {});
        }
      }, {
        key: "loadVideo",
        value: function value(t) {
          return this.callMethod("loadVideo", t);
        }
      }, {
        key: "ready",
        value: function value() {
          var t = _t.get(this) || new _(function (t, n) {
            n(new Error("Unknown player. Probably unloaded."));
          });
          return _.resolve(t);
        }
      }, {
        key: "addCuePoint",
        value: function value(t) {
          return this.callMethod("addCuePoint", {
            time: t,
            data: 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}
          });
        }
      }, {
        key: "removeCuePoint",
        value: function value(t) {
          return this.callMethod("removeCuePoint", t);
        }
      }, {
        key: "enableTextTrack",
        value: function value(t, n) {
          if (t) return this.callMethod("enableTextTrack", {
            language: t,
            kind: n
          });
          throw new TypeError("You must pass a language.");
        }
      }, {
        key: "disableTextTrack",
        value: function value() {
          return this.callMethod("disableTextTrack");
        }
      }, {
        key: "pause",
        value: function value() {
          return this.callMethod("pause");
        }
      }, {
        key: "play",
        value: function value() {
          return this.callMethod("play");
        }
      }, {
        key: "requestFullscreen",
        value: function value() {
          return S.isEnabled ? S.request(this.element) : this.callMethod("requestFullscreen");
        }
      }, {
        key: "exitFullscreen",
        value: function value() {
          return S.isEnabled ? S.exit() : this.callMethod("exitFullscreen");
        }
      }, {
        key: "getFullscreen",
        value: function value() {
          return S.isEnabled ? _.resolve(S.isFullscreen) : this.get("fullscreen");
        }
      }, {
        key: "requestPictureInPicture",
        value: function value() {
          return this.callMethod("requestPictureInPicture");
        }
      }, {
        key: "exitPictureInPicture",
        value: function value() {
          return this.callMethod("exitPictureInPicture");
        }
      }, {
        key: "getPictureInPicture",
        value: function value() {
          return this.get("pictureInPicture");
        }
      }, {
        key: "unload",
        value: function value() {
          return this.callMethod("unload");
        }
      }, {
        key: "destroy",
        value: function value() {
          var e = this;
          return new _(function (t) {
            var n;
            _t["delete"](e), O["delete"](e.element), e.r && (O["delete"](e.r), e.r.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && (e.element.parentNode.parentNode && e.r && e.r !== e.element.parentNode ? e.element.parentNode.parentNode.removeChild(e.element.parentNode) : e.element.parentNode.removeChild(e.element)), e.element && "DIV" === e.element.nodeName && e.element.parentNode && (e.element.removeAttribute("data-vimeo-initialized"), (n = e.element.querySelector("iframe")) && n.parentNode && (n.parentNode.parentNode && e.r && e.r !== n.parentNode ? n.parentNode.parentNode.removeChild(n.parentNode) : n.parentNode.removeChild(n))), e.e.removeEventListener("message", e.i), S.isEnabled && S.off("fullscreenchange", e.fullscreenchangeHandler), t();
          });
        }
      }, {
        key: "getAutopause",
        value: function value() {
          return this.get("autopause");
        }
      }, {
        key: "setAutopause",
        value: function value(t) {
          return this.set("autopause", t);
        }
      }, {
        key: "getBuffered",
        value: function value() {
          return this.get("buffered");
        }
      }, {
        key: "getCameraProps",
        value: function value() {
          return this.get("cameraProps");
        }
      }, {
        key: "setCameraProps",
        value: function value(t) {
          return this.set("cameraProps", t);
        }
      }, {
        key: "getChapters",
        value: function value() {
          return this.get("chapters");
        }
      }, {
        key: "getCurrentChapter",
        value: function value() {
          return this.get("currentChapter");
        }
      }, {
        key: "getColor",
        value: function value() {
          return this.get("color");
        }
      }, {
        key: "setColor",
        value: function value(t) {
          return this.set("color", t);
        }
      }, {
        key: "getCuePoints",
        value: function value() {
          return this.get("cuePoints");
        }
      }, {
        key: "getCurrentTime",
        value: function value() {
          return this.get("currentTime");
        }
      }, {
        key: "setCurrentTime",
        value: function value(t) {
          return this.set("currentTime", t);
        }
      }, {
        key: "getDuration",
        value: function value() {
          return this.get("duration");
        }
      }, {
        key: "getEnded",
        value: function value() {
          return this.get("ended");
        }
      }, {
        key: "getLoop",
        value: function value() {
          return this.get("loop");
        }
      }, {
        key: "setLoop",
        value: function value(t) {
          return this.set("loop", t);
        }
      }, {
        key: "setMuted",
        value: function value(t) {
          return this.set("muted", t);
        }
      }, {
        key: "getMuted",
        value: function value() {
          return this.get("muted");
        }
      }, {
        key: "getPaused",
        value: function value() {
          return this.get("paused");
        }
      }, {
        key: "getPlaybackRate",
        value: function value() {
          return this.get("playbackRate");
        }
      }, {
        key: "setPlaybackRate",
        value: function value(t) {
          return this.set("playbackRate", t);
        }
      }, {
        key: "getPlayed",
        value: function value() {
          return this.get("played");
        }
      }, {
        key: "getQualities",
        value: function value() {
          return this.get("qualities");
        }
      }, {
        key: "getQuality",
        value: function value() {
          return this.get("quality");
        }
      }, {
        key: "setQuality",
        value: function value(t) {
          return this.set("quality", t);
        }
      }, {
        key: "getSeekable",
        value: function value() {
          return this.get("seekable");
        }
      }, {
        key: "getSeeking",
        value: function value() {
          return this.get("seeking");
        }
      }, {
        key: "getTextTracks",
        value: function value() {
          return this.get("textTracks");
        }
      }, {
        key: "getVideoEmbedCode",
        value: function value() {
          return this.get("videoEmbedCode");
        }
      }, {
        key: "getVideoId",
        value: function value() {
          return this.get("videoId");
        }
      }, {
        key: "getVideoTitle",
        value: function value() {
          return this.get("videoTitle");
        }
      }, {
        key: "getVideoWidth",
        value: function value() {
          return this.get("videoWidth");
        }
      }, {
        key: "getVideoHeight",
        value: function value() {
          return this.get("videoHeight");
        }
      }, {
        key: "getVideoUrl",
        value: function value() {
          return this.get("videoUrl");
        }
      }, {
        key: "getVolume",
        value: function value() {
          return this.get("volume");
        }
      }, {
        key: "setVolume",
        value: function value(t) {
          return this.set("volume", t);
        }
      }]) && at(t.prototype, n), e && at(t, e), r;
    }(),
    k = (ft || (R = function () {
      for (var t, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], e = 0, i = n.length, r = {}; e < i; e++) if ((t = n[e]) && t[1] in document) {
        for (e = 0; e < t.length; e++) r[n[0][e]] = t[e];
        return r;
      }
      return !1;
    }(), Ft = {
      fullscreenchange: R.fullscreenchange,
      fullscreenerror: R.fullscreenerror
    }, A = {
      request: function request(r) {
        return new Promise(function (t, n) {
          function e() {
            A.off("fullscreenchange", e), t();
          }
          A.on("fullscreenchange", e);
          var i = (r = r || document.documentElement)[R.requestFullscreen]();
          i instanceof Promise && i.then(e)["catch"](n);
        });
      },
      exit: function exit() {
        return new Promise(function (n, t) {
          var e, i;
          A.isFullscreen ? (A.on("fullscreenchange", e = function t() {
            A.off("fullscreenchange", t), n();
          }), (i = document[R.exitFullscreen]()) instanceof Promise && i.then(e)["catch"](t)) : n();
        });
      },
      on: function on(t, n) {
        t = Ft[t];
        t && document.addEventListener(t, n);
      },
      off: function off(t, n) {
        t = Ft[t];
        t && document.removeEventListener(t, n);
      }
    }, Object.defineProperties(A, {
      isFullscreen: {
        get: function get() {
          return Boolean(document[R.fullscreenElement]);
        }
      },
      element: {
        enumerable: !0,
        get: function get() {
          return document[R.fullscreenElement];
        }
      },
      isEnabled: {
        enumerable: !0,
        get: function get() {
          return Boolean(document[R.fullscreenEnabled]);
        }
      }
    }), S = A, Tt(), function (t) {
      var i = 0 < arguments.length && void 0 !== t ? t : document;
      window.VimeoPlayerResizeEmbeds_ || (window.VimeoPlayerResizeEmbeds_ = !0, window.addEventListener("message", function (t) {
        if (b(t.origin) && t.data && "spacechange" === t.data.event) for (var n = i.querySelectorAll("iframe"), e = 0; e < n.length; e++) if (n[e].contentWindow === t.source) {
          n[e].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
          break;
        }
      }));
    }(), Pt()), function (i) {
      function t(t, n, e) {
        return (t = i.call(this, t, n, e = void 0 === e ? {} : e) || this).state.set(3), t;
      }
      qt(t, i);
      var n = t.prototype;
      return n.createPlayer = function (t) {
        var n = this.options,
          e = this.options.playerOptions,
          e = void 0 === e ? {} : e,
          t = 0 === t.indexOf("http") ? {
            url: t
          } : {
            id: +t
          },
          t = new Ct(this.target, $(t, {
            controls: !n.hideControls,
            loop: n.loop,
            muted: n.mute
          }, e.vimeo || {}));
        return t.on("play", this.onPlay), t.on("pause", this.onPause), t.on("ended", this.onEnded), t.ready().then(this.onPlayerReady, this.onError), t.getMuted() || t.setVolume(it(n.volume, 0, 1)), t;
      }, n.playVideo = function () {
        var t = this;
        this.player.play()["catch"](function () {
          t.state.is(7) && t.state.set(5);
        });
      }, n.pauseVideo = function () {
        this.player.pause();
      }, t;
    }(st)),
    jt = "//www.youtube.com/player_api",
    Mt = function () {
      function t() {}
      var n = t.prototype;
      return n.load = function (t) {
        if (window.YT && U(window.YT.Player)) return t();
        this.attachCallback(t), this.shouldLoad() && w("script", {
          src: location.protocol + jt
        }, document.head);
      }, n.shouldLoad = function () {
        return t = document, !((n = "script") ? c(t.querySelectorAll(n)) : []).some(function (t) {
          return t.src.replace(/^https?:/, "") === jt;
        });
        var t, n;
      }, n.attachCallback = function (t) {
        var n;
        D(window.onYouTubeIframeAPIReady) || (n = window.onYouTubeIframeAPIReady), window.onYouTubeIframeAPIReady = function () {
          n && n(), t();
        };
      }, t;
    }(),
    g = function (i) {
      function t(t, n, e) {
        return (t = i.call(this, t, n, e = void 0 === e ? {} : e) || this).videoId = t.parseVideoId(n), t.videoId && (t.state.set(2), new Mt().load(t.onAPIReady.bind(St(t)))), t;
      }
      qt(t, i);
      var n = t.prototype;
      return n.onAPIReady = function () {
        var t = this.state,
          n = t.is(4);
        t.set(3), n && this.play();
      }, n.createPlayer = function (t) {
        var n = this.options,
          e = this.options.playerOptions;
        return new YT.Player(this.target, {
          videoId: t,
          host: n.host,
          playerVars: $({
            controls: n.hideControls ? 0 : 1,
            iv_load_policy: 3,
            loop: n.loop ? 1 : 0,
            playlist: n.loop ? t : void 0,
            rel: 0,
            autoplay: 0,
            mute: n.mute ? 1 : 0
          }, (void 0 === e ? {} : e).youtube || {}),
          events: {
            onReady: this.onPlayerReady.bind(this),
            onStateChange: this.onPlayerStateChange.bind(this),
            onError: this.onError.bind(this)
          }
        });
      }, n.onPlayerReady = function () {
        i.prototype.onPlayerReady.call(this), this.player.setVolume(100 * it(this.options.volume, 0, 1));
      }, n.onPlayerStateChange = function (t) {
        var n = YT.PlayerState,
          e = n.PLAYING,
          i = n.PAUSED,
          n = n.ENDED;
        switch (!0) {
          case t.data === e:
            this.onPlay();
            break;
          case t.data === i:
            this.onPause();
            break;
          case t.data === n:
            this.onEnded();
        }
      }, n.playVideo = function () {
        this.player.playVideo();
      }, n.pauseVideo = function () {
        this.player.pauseVideo();
      }, n.parseVideoId = function (t) {
        return 0 === t.indexOf("http") ? this.parseUrl(t) : t;
      }, n.parseUrl = function (t) {
        var n,
          t = t.split(/[#?]/)[1],
          t = (t = t.split("&"), n = function n(t) {
            return 0 === t.indexOf("v=");
          }, c(t).filter(n)[0]);
        return t && t.replace("v=", "");
      }, t;
    }(st),
    xt = "Play Video",
    It = function () {
      function t(t, n) {
        this.event = u(), this.Splide = t, this.slide = n, this.container = J(this.slide, "." + e), this.parent = this.container || this.slide, this.init(), this.create(), this.show(), this.listen();
      }
      var n = t.prototype;
      return n.init = function () {
        y(this.slide, s + m), y(this.container, e + m);
      }, n.create = function () {
        this.video = w("div", rt, this.parent), this.playButton = w("button", {
          "class": "splide__video__play",
          type: "button",
          "aria-label": this.Splide.options.i18n.playVideo || xt
        }, this.video), this.wrapper = w("div", "splide__video__wrapper", this.video), this.placeholder = w("div", null, this.wrapper);
      }, n.listen = function () {
        var t = this;
        this.parent.addEventListener("click", function () {
          t.event.emit("click");
        });
      }, n.toggleButton = function (t) {
        Z(this.playButton, t ? "" : "none");
      }, n.toggleWrapper = function (t) {
        Z(this.wrapper, t ? "" : "none");
      }, n.getPlaceholder = function () {
        return this.placeholder;
      }, n.hide = function () {
        this.toggleButton(!1), this.toggleWrapper(!0);
      }, n.show = function () {
        this.disabled || this.toggleButton(!0), this.toggleWrapper(!1);
      }, n.disable = function (t) {
        (this.disabled = t) && this.toggleButton(!1);
      }, n.on = function (t, n) {
        this.event.on(t, n);
      }, n.destroy = function () {
        tt(this.slide, s + m), tt(this.container, e + m), d(this.video, function (t) {
          t && t.parentNode && t.parentNode.removeChild(t);
        }), this.event.destroy();
      }, t;
    }(),
    Rt = [["data-splide-youtube", g], ["data-splide-vimeo", k], ["data-splide-html-video", ct]],
    At = function () {
      function t(t, n) {
        this.Splide = t, this.slide = n, this.event = u(t), this.options = G(G({}, ot), this.Splide.options.video), this.createPlayer(n), this.player && this.listen();
      }
      var n = t.prototype;
      return n.createPlayer = function (e) {
        var i = this;
        Rt.forEach(function (t) {
          var n = t[0],
            t = t[1],
            n = e.getAttribute(n);
          n && (i.ui = new It(i.Splide, e), i.player = new t(i.ui.getPlaceholder(), n, i.options), i.ui.disable(i.options.disableOverlayUI));
        });
      }, n.listen = function () {
        var t = this,
          n = this.player,
          e = this.event;
        this.ui.on("click", this.onClick.bind(this)), n.on("play", this.onPlay.bind(this)), n.on("played", this.onPlayed.bind(this)), n.on("pause", this.onPause.bind(this)), n.on("paused", this.onPaused.bind(this)), n.on("ended", this.onEnded.bind(this)), n.on("error", this.onError.bind(this)), e.on(["move", "scroll"], this.pause.bind(this)), e.on(ut, this.onVideoClick.bind(this)), e.on("drag", function () {
          e.off(i), e.on(i, function () {
            t.pause(), e.off(i);
          });
        }), this.options.autoplay && e.on(["mounted", "moved", "scrolled"], this.onAutoplayRequested.bind(this));
      }, n.onClick = function () {
        this.isPaused() ? this.play() : this.pause(), this.event.emit(ut, this);
      }, n.onVideoClick = function (t) {
        this !== t && this.pause();
      }, n.onPlay = function () {
        this.ui.hide();
      }, n.onPlayed = function () {
        this.ui.hide(), this.togglePlaying(!0), this.event.emit("video:play", this);
      }, n.onPause = function () {
        this.ui.show();
      }, n.onPaused = function () {
        this.togglePlaying(!1), this.event.emit("video:pause", this);
      }, n.onEnded = function () {
        this.togglePlaying(!1), this.event.emit("video:ended", this);
      }, n.onError = function () {
        y(this.slide, "is-error"), this.ui.show(), this.event.emit("video:error", this);
      }, n.onAutoplayRequested = function () {
        this.Splide.Components.Slides.getAt(this.Splide.index).slide === this.slide && this.play();
      }, n.togglePlaying = function (t) {
        v(this.Splide.root, "is-playing", t);
      }, n.play = function () {
        this.player && !this.disabled && this.player.play();
      }, n.pause = function () {
        this.player && !this.disabled && this.player.pause();
      }, n.destroy = function () {
        this.player && (this.ui.destroy(), this.player.destroy()), this.disable(!1);
      }, n.disable = function (t) {
        this.disabled = t, v(this.Splide.root, "is-video-disabled", t);
      }, n.isPaused = function () {
        return this.player.isPaused();
      }, t;
    }();
  function Ot(r, t) {
    var n = u(r).on,
      e = t.Slides,
      o = {};
    function i() {
      e.forEach(function (t) {
        var n,
          e,
          i = t.slide;
        e = s + m, (n = i) && n.classList.contains(e) || (o[t.index] = new At(r, i));
      }), e.update();
    }
    return {
      mount: function mount() {
        i(), n("refresh", i);
      },
      destroy: function destroy() {
        p(o, function (t) {
          t.destroy();
        });
      },
      play: function play(t) {
        void 0 === t && (t = r.index), (t = o[t]) && t.play();
      },
      pause: function pause() {
        p(o, function (t) {
          t.pause();
        });
      },
      disable: function disable(n) {
        p(o, function (t) {
          t.disable(n);
        });
      }
    };
  }
  "undefined" != typeof window && (window.splide = window.splide || {}, window.splide.Extensions = window.splide.Extensions || {}, window.splide.Extensions.Video = Ot);
}, "function" == typeof define && define.amd ? define(t) : t();
/******/ })()
;