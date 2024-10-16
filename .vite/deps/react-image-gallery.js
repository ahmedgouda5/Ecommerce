import {
  require_react
} from "./chunk-BTNJN4YD.js";
import {
  __commonJS
} from "./chunk-HL2QZUHZ.js";

// node_modules/react-image-gallery/build/image-gallery.js
var require_image_gallery = __commonJS({
  "node_modules/react-image-gallery/build/image-gallery.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react()) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.ImageGallery = t(require_react()) : e.ImageGallery = t(e.React);
    }(exports, (e) => (() => {
      var t = { 703: (e2, t2, n2) => {
        "use strict";
        var i2 = n2(414);
        function r2() {
        }
        function a() {
        }
        a.resetWarningCache = r2, e2.exports = function() {
          function e3(e4, t4, n4, r3, a2, o) {
            if (o !== i2) {
              var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw s.name = "Invariant Violation", s;
            }
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var n3 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: a, resetWarningCache: r2 };
          return n3.PropTypes = n3, n3;
        };
      }, 697: (e2, t2, n2) => {
        e2.exports = n2(703)();
      }, 414: (e2) => {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, 590: (e2) => {
        var t2 = "undefined" != typeof Element, n2 = "function" == typeof Map, i2 = "function" == typeof Set, r2 = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
        function a(e3, o) {
          if (e3 === o)
            return true;
          if (e3 && o && "object" == typeof e3 && "object" == typeof o) {
            if (e3.constructor !== o.constructor)
              return false;
            var s, l, u, c;
            if (Array.isArray(e3)) {
              if ((s = e3.length) != o.length)
                return false;
              for (l = s; 0 != l--; )
                if (!a(e3[l], o[l]))
                  return false;
              return true;
            }
            if (n2 && e3 instanceof Map && o instanceof Map) {
              if (e3.size !== o.size)
                return false;
              for (c = e3.entries(); !(l = c.next()).done; )
                if (!o.has(l.value[0]))
                  return false;
              for (c = e3.entries(); !(l = c.next()).done; )
                if (!a(l.value[1], o.get(l.value[0])))
                  return false;
              return true;
            }
            if (i2 && e3 instanceof Set && o instanceof Set) {
              if (e3.size !== o.size)
                return false;
              for (c = e3.entries(); !(l = c.next()).done; )
                if (!o.has(l.value[0]))
                  return false;
              return true;
            }
            if (r2 && ArrayBuffer.isView(e3) && ArrayBuffer.isView(o)) {
              if ((s = e3.length) != o.length)
                return false;
              for (l = s; 0 != l--; )
                if (e3[l] !== o[l])
                  return false;
              return true;
            }
            if (e3.constructor === RegExp)
              return e3.source === o.source && e3.flags === o.flags;
            if (e3.valueOf !== Object.prototype.valueOf)
              return e3.valueOf() === o.valueOf();
            if (e3.toString !== Object.prototype.toString)
              return e3.toString() === o.toString();
            if ((s = (u = Object.keys(e3)).length) !== Object.keys(o).length)
              return false;
            for (l = s; 0 != l--; )
              if (!Object.prototype.hasOwnProperty.call(o, u[l]))
                return false;
            if (t2 && e3 instanceof Element)
              return false;
            for (l = s; 0 != l--; )
              if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !e3.$$typeof) && !a(e3[u[l]], o[u[l]]))
                return false;
            return true;
          }
          return e3 != e3 && o != o;
        }
        e2.exports = function(e3, t3) {
          try {
            return a(e3, t3);
          } catch (e4) {
            if ((e4.message || "").match(/stack|recursion/i))
              return console.warn("react-fast-compare cannot handle circular refs"), false;
            throw e4;
          }
        };
      }, 359: (t2) => {
        "use strict";
        t2.exports = e;
      } }, n = {};
      function i(e2) {
        var r2 = n[e2];
        if (void 0 !== r2)
          return r2.exports;
        var a = n[e2] = { exports: {} };
        return t[e2](a, a.exports, i), a.exports;
      }
      i.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return i.d(t2, { a: t2 }), t2;
      }, i.d = (e2, t2) => {
        for (var n2 in t2)
          i.o(t2, n2) && !i.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: t2[n2] });
      }, i.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), i.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), i.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        "use strict";
        function e2(t3) {
          var n3, i2, r2 = "";
          if ("string" == typeof t3 || "number" == typeof t3)
            r2 += t3;
          else if ("object" == typeof t3)
            if (Array.isArray(t3))
              for (n3 = 0; n3 < t3.length; n3++)
                t3[n3] && (i2 = e2(t3[n3])) && (r2 && (r2 += " "), r2 += i2);
            else
              for (n3 in t3)
                t3[n3] && (r2 && (r2 += " "), r2 += n3);
          return r2;
        }
        function t2() {
          for (var t3, n3, i2 = 0, r2 = ""; i2 < arguments.length; )
            (t3 = arguments[i2++]) && (n3 = e2(t3)) && (r2 && (r2 += " "), r2 += n3);
          return r2;
        }
        i.r(r), i.d(r, { default: () => nt });
        var n2 = i(359), a = i.n(n2);
        const o = function(e3) {
          var t3 = typeof e3;
          return null != e3 && ("object" == t3 || "function" == t3);
        }, s = "object" == typeof global && global && global.Object === Object && global;
        var l = "object" == typeof self && self && self.Object === Object && self;
        const u = s || l || Function("return this")(), c = function() {
          return u.Date.now();
        };
        var h = /\s/;
        var d = /^\s+/;
        const p = function(e3) {
          return e3 ? e3.slice(0, function(e4) {
            for (var t3 = e4.length; t3-- && h.test(e4.charAt(t3)); )
              ;
            return t3;
          }(e3) + 1).replace(d, "") : e3;
        }, f = u.Symbol;
        var m = Object.prototype, b = m.hasOwnProperty, g = m.toString, v = f ? f.toStringTag : void 0;
        var y = Object.prototype.toString;
        var w = f ? f.toStringTag : void 0;
        const S = function(e3) {
          return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : w && w in Object(e3) ? function(e4) {
            var t3 = b.call(e4, v), n3 = e4[v];
            try {
              e4[v] = void 0;
              var i2 = true;
            } catch (e5) {
            }
            var r2 = g.call(e4);
            return i2 && (t3 ? e4[v] = n3 : delete e4[v]), r2;
          }(e3) : function(e4) {
            return y.call(e4);
          }(e3);
        };
        var T = /^[-+]0x[0-9a-f]+$/i, O = /^0b[01]+$/i, E = /^0o[0-7]+$/i, k = parseInt;
        const I = function(e3) {
          if ("number" == typeof e3)
            return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || function(e5) {
              return null != e5 && "object" == typeof e5;
            }(e4) && "[object Symbol]" == S(e4);
          }(e3))
            return NaN;
          if (o(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = o(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3)
            return 0 === e3 ? e3 : +e3;
          e3 = p(e3);
          var n3 = O.test(e3);
          return n3 || E.test(e3) ? k(e3.slice(2), n3 ? 2 : 8) : T.test(e3) ? NaN : +e3;
        };
        var j = Math.max, x = Math.min;
        const P = function(e3, t3, n3) {
          var i2, r2, a2, s2, l2, u2, h2 = 0, d2 = false, p2 = false, f2 = true;
          if ("function" != typeof e3)
            throw new TypeError("Expected a function");
          function m2(t4) {
            var n4 = i2, a3 = r2;
            return i2 = r2 = void 0, h2 = t4, s2 = e3.apply(a3, n4);
          }
          function b2(e4) {
            return h2 = e4, l2 = setTimeout(v2, t3), d2 ? m2(e4) : s2;
          }
          function g2(e4) {
            var n4 = e4 - u2;
            return void 0 === u2 || n4 >= t3 || n4 < 0 || p2 && e4 - h2 >= a2;
          }
          function v2() {
            var e4 = c();
            if (g2(e4))
              return y2(e4);
            l2 = setTimeout(v2, function(e5) {
              var n4 = t3 - (e5 - u2);
              return p2 ? x(n4, a2 - (e5 - h2)) : n4;
            }(e4));
          }
          function y2(e4) {
            return l2 = void 0, f2 && i2 ? m2(e4) : (i2 = r2 = void 0, s2);
          }
          function w2() {
            var e4 = c(), n4 = g2(e4);
            if (i2 = arguments, r2 = this, u2 = e4, n4) {
              if (void 0 === l2)
                return b2(u2);
              if (p2)
                return clearTimeout(l2), l2 = setTimeout(v2, t3), m2(u2);
            }
            return void 0 === l2 && (l2 = setTimeout(v2, t3)), s2;
          }
          return t3 = I(t3) || 0, o(n3) && (d2 = !!n3.leading, a2 = (p2 = "maxWait" in n3) ? j(I(n3.maxWait) || 0, t3) : a2, f2 = "trailing" in n3 ? !!n3.trailing : f2), w2.cancel = function() {
            void 0 !== l2 && clearTimeout(l2), h2 = 0, i2 = u2 = r2 = l2 = void 0;
          }, w2.flush = function() {
            return void 0 === l2 ? s2 : y2(c());
          }, w2;
        }, _ = function(e3, t3, n3) {
          var i2 = true, r2 = true;
          if ("function" != typeof e3)
            throw new TypeError("Expected a function");
          return o(n3) && (i2 = "leading" in n3 ? !!n3.leading : i2, r2 = "trailing" in n3 ? !!n3.trailing : r2), P(e3, t3, { leading: i2, maxWait: t3, trailing: r2 });
        };
        var R = i(590), M = i.n(R), L = function() {
          if ("undefined" != typeof Map)
            return Map;
          function e3(e4, t3) {
            var n3 = -1;
            return e4.some(function(e5, i2) {
              return e5[0] === t3 && (n3 = i2, true);
            }), n3;
          }
          return function() {
            function t3() {
              this.__entries__ = [];
            }
            return Object.defineProperty(t3.prototype, "size", { get: function() {
              return this.__entries__.length;
            }, enumerable: true, configurable: true }), t3.prototype.get = function(t4) {
              var n3 = e3(this.__entries__, t4), i2 = this.__entries__[n3];
              return i2 && i2[1];
            }, t3.prototype.set = function(t4, n3) {
              var i2 = e3(this.__entries__, t4);
              ~i2 ? this.__entries__[i2][1] = n3 : this.__entries__.push([t4, n3]);
            }, t3.prototype.delete = function(t4) {
              var n3 = this.__entries__, i2 = e3(n3, t4);
              ~i2 && n3.splice(i2, 1);
            }, t3.prototype.has = function(t4) {
              return !!~e3(this.__entries__, t4);
            }, t3.prototype.clear = function() {
              this.__entries__.splice(0);
            }, t3.prototype.forEach = function(e4, t4) {
              void 0 === t4 && (t4 = null);
              for (var n3 = 0, i2 = this.__entries__; n3 < i2.length; n3++) {
                var r2 = i2[n3];
                e4.call(t4, r2[1], r2[0]);
              }
            }, t3;
          }();
        }(), D = "undefined" != typeof window && "undefined" != typeof document && window.document === document, W = void 0 !== i.g && i.g.Math === Math ? i.g : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(), C = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(W) : function(e3) {
          return setTimeout(function() {
            return e3(Date.now());
          }, 1e3 / 60);
        }, F = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], z = "undefined" != typeof MutationObserver, N = function() {
          function e3() {
            this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = /* @__PURE__ */ function(e4, t3) {
              var n3 = false, i2 = false, r2 = 0;
              function a2() {
                n3 && (n3 = false, e4()), i2 && s2();
              }
              function o2() {
                C(a2);
              }
              function s2() {
                var e5 = Date.now();
                if (n3) {
                  if (e5 - r2 < 2)
                    return;
                  i2 = true;
                } else
                  n3 = true, i2 = false, setTimeout(o2, 20);
                r2 = e5;
              }
              return s2;
            }(this.refresh.bind(this));
          }
          return e3.prototype.addObserver = function(e4) {
            ~this.observers_.indexOf(e4) || this.observers_.push(e4), this.connected_ || this.connect_();
          }, e3.prototype.removeObserver = function(e4) {
            var t3 = this.observers_, n3 = t3.indexOf(e4);
            ~n3 && t3.splice(n3, 1), !t3.length && this.connected_ && this.disconnect_();
          }, e3.prototype.refresh = function() {
            this.updateObservers_() && this.refresh();
          }, e3.prototype.updateObservers_ = function() {
            var e4 = this.observers_.filter(function(e5) {
              return e5.gatherActive(), e5.hasActive();
            });
            return e4.forEach(function(e5) {
              return e5.broadcastActive();
            }), e4.length > 0;
          }, e3.prototype.connect_ = function() {
            D && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), z ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
          }, e3.prototype.disconnect_ = function() {
            D && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
          }, e3.prototype.onTransitionEnd_ = function(e4) {
            var t3 = e4.propertyName, n3 = void 0 === t3 ? "" : t3;
            F.some(function(e5) {
              return !!~n3.indexOf(e5);
            }) && this.refresh();
          }, e3.getInstance = function() {
            return this.instance_ || (this.instance_ = new e3()), this.instance_;
          }, e3.instance_ = null, e3;
        }(), B = function(e3, t3) {
          for (var n3 = 0, i2 = Object.keys(t3); n3 < i2.length; n3++) {
            var r2 = i2[n3];
            Object.defineProperty(e3, r2, { value: t3[r2], enumerable: false, writable: false, configurable: true });
          }
          return e3;
        }, A = function(e3) {
          return e3 && e3.ownerDocument && e3.ownerDocument.defaultView || W;
        }, U = V(0, 0, 0, 0);
        function G(e3) {
          return parseFloat(e3) || 0;
        }
        function q(e3) {
          for (var t3 = [], n3 = 1; n3 < arguments.length; n3++)
            t3[n3 - 1] = arguments[n3];
          return t3.reduce(function(t4, n4) {
            return t4 + G(e3["border-" + n4 + "-width"]);
          }, 0);
        }
        var H = "undefined" != typeof SVGGraphicsElement ? function(e3) {
          return e3 instanceof A(e3).SVGGraphicsElement;
        } : function(e3) {
          return e3 instanceof A(e3).SVGElement && "function" == typeof e3.getBBox;
        };
        function K(e3) {
          return D ? H(e3) ? function(e4) {
            var t3 = e4.getBBox();
            return V(0, 0, t3.width, t3.height);
          }(e3) : function(e4) {
            var t3 = e4.clientWidth, n3 = e4.clientHeight;
            if (!t3 && !n3)
              return U;
            var i2 = A(e4).getComputedStyle(e4), r2 = function(e5) {
              for (var t4 = {}, n4 = 0, i3 = ["top", "right", "bottom", "left"]; n4 < i3.length; n4++) {
                var r3 = i3[n4], a3 = e5["padding-" + r3];
                t4[r3] = G(a3);
              }
              return t4;
            }(i2), a2 = r2.left + r2.right, o2 = r2.top + r2.bottom, s2 = G(i2.width), l2 = G(i2.height);
            if ("border-box" === i2.boxSizing && (Math.round(s2 + a2) !== t3 && (s2 -= q(i2, "left", "right") + a2), Math.round(l2 + o2) !== n3 && (l2 -= q(i2, "top", "bottom") + o2)), !function(e5) {
              return e5 === A(e5).document.documentElement;
            }(e4)) {
              var u2 = Math.round(s2 + a2) - t3, c2 = Math.round(l2 + o2) - n3;
              1 !== Math.abs(u2) && (s2 -= u2), 1 !== Math.abs(c2) && (l2 -= c2);
            }
            return V(r2.left, r2.top, s2, l2);
          }(e3) : U;
        }
        function V(e3, t3, n3, i2) {
          return { x: e3, y: t3, width: n3, height: i2 };
        }
        var X = function() {
          function e3(e4) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = V(0, 0, 0, 0), this.target = e4;
          }
          return e3.prototype.isActive = function() {
            var e4 = K(this.target);
            return this.contentRect_ = e4, e4.width !== this.broadcastWidth || e4.height !== this.broadcastHeight;
          }, e3.prototype.broadcastRect = function() {
            var e4 = this.contentRect_;
            return this.broadcastWidth = e4.width, this.broadcastHeight = e4.height, e4;
          }, e3;
        }(), $ = function(e3, t3) {
          var n3, i2, r2, a2, o2, s2, l2, u2 = (i2 = (n3 = t3).x, r2 = n3.y, a2 = n3.width, o2 = n3.height, s2 = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, l2 = Object.create(s2.prototype), B(l2, { x: i2, y: r2, width: a2, height: o2, top: r2, right: i2 + a2, bottom: o2 + r2, left: i2 }), l2);
          B(this, { target: e3, contentRect: u2 });
        }, Y = function() {
          function e3(e4, t3, n3) {
            if (this.activeObservations_ = [], this.observations_ = new L(), "function" != typeof e4)
              throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e4, this.controller_ = t3, this.callbackCtx_ = n3;
          }
          return e3.prototype.observe = function(e4) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e4 instanceof A(e4).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t3 = this.observations_;
              t3.has(e4) || (t3.set(e4, new X(e4)), this.controller_.addObserver(this), this.controller_.refresh());
            }
          }, e3.prototype.unobserve = function(e4) {
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
              if (!(e4 instanceof A(e4).Element))
                throw new TypeError('parameter 1 is not of type "Element".');
              var t3 = this.observations_;
              t3.has(e4) && (t3.delete(e4), t3.size || this.controller_.removeObserver(this));
            }
          }, e3.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
          }, e3.prototype.gatherActive = function() {
            var e4 = this;
            this.clearActive(), this.observations_.forEach(function(t3) {
              t3.isActive() && e4.activeObservations_.push(t3);
            });
          }, e3.prototype.broadcastActive = function() {
            if (this.hasActive()) {
              var e4 = this.callbackCtx_, t3 = this.activeObservations_.map(function(e5) {
                return new $(e5.target, e5.broadcastRect());
              });
              this.callback_.call(e4, t3, e4), this.clearActive();
            }
          }, e3.prototype.clearActive = function() {
            this.activeObservations_.splice(0);
          }, e3.prototype.hasActive = function() {
            return this.activeObservations_.length > 0;
          }, e3;
        }(), J = "undefined" != typeof WeakMap ? /* @__PURE__ */ new WeakMap() : new L(), Q = function e3(t3) {
          if (!(this instanceof e3))
            throw new TypeError("Cannot call a class as a function.");
          if (!arguments.length)
            throw new TypeError("1 argument required, but only 0 present.");
          var n3 = N.getInstance(), i2 = new Y(t3, n3, this);
          J.set(this, i2);
        };
        ["observe", "unobserve", "disconnect"].forEach(function(e3) {
          Q.prototype[e3] = function() {
            var t3;
            return (t3 = J.get(this))[e3].apply(t3, arguments);
          };
        });
        const Z = void 0 !== W.ResizeObserver ? W.ResizeObserver : Q, ee = "Left", te = "Right", ne = "Up", ie = "Down", re = { delta: 10, preventScrollOnSwipe: false, rotationAngle: 0, trackMouse: false, trackTouch: true, swipeDuration: 1 / 0, touchEventOptions: { passive: true } }, ae = { first: true, initial: [0, 0], start: 0, swiping: false, xy: [0, 0] }, oe = "mousemove", se = "mouseup";
        function le(e3, t3) {
          if (0 === t3)
            return e3;
          const n3 = Math.PI / 180 * t3;
          return [e3[0] * Math.cos(n3) + e3[1] * Math.sin(n3), e3[1] * Math.cos(n3) - e3[0] * Math.sin(n3)];
        }
        function ue(e3) {
          const { trackMouse: t3 } = e3, i2 = n2.useRef(Object.assign({}, ae)), r2 = n2.useRef(Object.assign({}, re)), a2 = n2.useRef(Object.assign({}, r2.current));
          let o2;
          for (o2 in a2.current = Object.assign({}, r2.current), r2.current = Object.assign(Object.assign({}, re), e3), re)
            void 0 === r2.current[o2] && (r2.current[o2] = re[o2]);
          const [s2, l2] = n2.useMemo(() => function(e4, t4) {
            const n3 = (t5) => {
              const n4 = "touches" in t5;
              n4 && t5.touches.length > 1 || e4((e5, r4) => {
                r4.trackMouse && !n4 && (document.addEventListener(oe, i3), document.addEventListener(se, a3));
                const { clientX: o4, clientY: s4 } = n4 ? t5.touches[0] : t5, l3 = le([o4, s4], r4.rotationAngle);
                return r4.onTouchStartOrOnMouseDown && r4.onTouchStartOrOnMouseDown({ event: t5 }), Object.assign(Object.assign(Object.assign({}, e5), ae), { initial: l3.slice(), xy: l3, start: t5.timeStamp || 0 });
              });
            }, i3 = (t5) => {
              e4((e5, n4) => {
                const i4 = "touches" in t5;
                if (i4 && t5.touches.length > 1)
                  return e5;
                if (t5.timeStamp - e5.start > n4.swipeDuration)
                  return e5.swiping ? Object.assign(Object.assign({}, e5), { swiping: false }) : e5;
                const { clientX: r4, clientY: a4 } = i4 ? t5.touches[0] : t5, [o4, s4] = le([r4, a4], n4.rotationAngle), l3 = o4 - e5.xy[0], u2 = s4 - e5.xy[1], c2 = Math.abs(l3), h2 = Math.abs(u2), d2 = (t5.timeStamp || 0) - e5.start, p2 = Math.sqrt(c2 * c2 + h2 * h2) / (d2 || 1), f2 = [l3 / (d2 || 1), u2 / (d2 || 1)], m2 = function(e6, t6, n5, i5) {
                  return e6 > t6 ? n5 > 0 ? te : ee : i5 > 0 ? ie : ne;
                }(c2, h2, l3, u2), b2 = "number" == typeof n4.delta ? n4.delta : n4.delta[m2.toLowerCase()] || re.delta;
                if (c2 < b2 && h2 < b2 && !e5.swiping)
                  return e5;
                const g2 = { absX: c2, absY: h2, deltaX: l3, deltaY: u2, dir: m2, event: t5, first: e5.first, initial: e5.initial, velocity: p2, vxvy: f2 };
                g2.first && n4.onSwipeStart && n4.onSwipeStart(g2), n4.onSwiping && n4.onSwiping(g2);
                let v2 = false;
                return (n4.onSwiping || n4.onSwiped || n4[`onSwiped${m2}`]) && (v2 = true), v2 && n4.preventScrollOnSwipe && n4.trackTouch && t5.cancelable && t5.preventDefault(), Object.assign(Object.assign({}, e5), { first: false, eventData: g2, swiping: true });
              });
            }, r3 = (t5) => {
              e4((e5, n4) => {
                let i4;
                if (e5.swiping && e5.eventData) {
                  if (t5.timeStamp - e5.start < n4.swipeDuration) {
                    i4 = Object.assign(Object.assign({}, e5.eventData), { event: t5 }), n4.onSwiped && n4.onSwiped(i4);
                    const r4 = n4[`onSwiped${i4.dir}`];
                    r4 && r4(i4);
                  }
                } else
                  n4.onTap && n4.onTap({ event: t5 });
                return n4.onTouchEndOrOnMouseUp && n4.onTouchEndOrOnMouseUp({ event: t5 }), Object.assign(Object.assign(Object.assign({}, e5), ae), { eventData: i4 });
              });
            }, a3 = (e5) => {
              document.removeEventListener(oe, i3), document.removeEventListener(se, a3), r3(e5);
            }, o3 = (e5, t5) => {
              let a4 = () => {
              };
              if (e5 && e5.addEventListener) {
                const o4 = Object.assign(Object.assign({}, re.touchEventOptions), t5.touchEventOptions), s4 = [["touchstart", n3, o4], ["touchmove", i3, Object.assign(Object.assign({}, o4), t5.preventScrollOnSwipe ? { passive: false } : {})], ["touchend", r3, o4]];
                s4.forEach(([t6, n4, i4]) => e5.addEventListener(t6, n4, i4)), a4 = () => s4.forEach(([t6, n4]) => e5.removeEventListener(t6, n4));
              }
              return a4;
            }, s3 = { ref: (t5) => {
              null !== t5 && e4((e5, n4) => {
                if (e5.el === t5)
                  return e5;
                const i4 = {};
                return e5.el && e5.el !== t5 && e5.cleanUpTouch && (e5.cleanUpTouch(), i4.cleanUpTouch = void 0), n4.trackTouch && t5 && (i4.cleanUpTouch = o3(t5, n4)), Object.assign(Object.assign(Object.assign({}, e5), { el: t5 }), i4);
              });
            } };
            return t4.trackMouse && (s3.onMouseDown = n3), [s3, o3];
          }((e4) => i2.current = e4(i2.current, r2.current), { trackMouse: t3 }), [t3]);
          return i2.current = function(e4, t4, n3, i3) {
            return t4.trackTouch && e4.el ? e4.cleanUpTouch ? t4.preventScrollOnSwipe !== n3.preventScrollOnSwipe || t4.touchEventOptions.passive !== n3.touchEventOptions.passive ? (e4.cleanUpTouch(), Object.assign(Object.assign({}, e4), { cleanUpTouch: i3(e4.el, t4) })) : e4 : Object.assign(Object.assign({}, e4), { cleanUpTouch: i3(e4.el, t4) }) : (e4.cleanUpTouch && e4.cleanUpTouch(), Object.assign(Object.assign({}, e4), { cleanUpTouch: void 0 }));
          }(i2.current, r2.current, a2.current, l2), s2;
        }
        var ce = i(697);
        function he(e3) {
          return he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, he(e3);
        }
        function de(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e3);
            t3 && (i2 = i2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, i2);
          }
          return n3;
        }
        function pe(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? de(Object(n3), true).forEach(function(t4) {
              fe(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : de(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function fe(e3, t3, n3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" !== he(e5) || null === e5)
                return e5;
              var n4 = e5[Symbol.toPrimitive];
              if (void 0 !== n4) {
                var i2 = n4.call(e5, t5);
                if ("object" !== he(i2))
                  return i2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4, "string");
            return "symbol" === he(t4) ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
        }
        var me = { description: "", fullscreen: "", isFullscreen: false, originalAlt: "", originalHeight: "", originalWidth: "", originalTitle: "", sizes: "", srcSet: "", loading: "eager" }, be = a().memo(function(e3) {
          var t3 = pe(pe({}, me), e3), n3 = t3.description, i2 = t3.fullscreen, r2 = t3.handleImageLoaded, o2 = t3.isFullscreen, s2 = t3.onImageError, l2 = t3.original, u2 = t3.originalAlt, c2 = t3.originalHeight, h2 = t3.originalWidth, d2 = t3.originalTitle, p2 = t3.sizes, f2 = t3.srcSet, m2 = t3.loading, b2 = o2 && i2 || l2;
          return a().createElement(a().Fragment, null, a().createElement("img", { className: "image-gallery-image", src: b2, alt: u2, srcSet: f2, height: c2, width: h2, sizes: p2, title: d2, onLoad: function(e4) {
            return r2(e4, l2);
          }, onError: s2, loading: m2 }), n3 && a().createElement("span", { className: "image-gallery-description" }, n3));
        });
        be.displayName = "Item", be.propTypes = { description: ce.string, fullscreen: ce.string, handleImageLoaded: ce.func.isRequired, isFullscreen: ce.bool, onImageError: ce.func.isRequired, original: ce.string.isRequired, originalAlt: ce.string, originalHeight: ce.string, originalWidth: ce.string, originalTitle: ce.string, sizes: ce.string, srcSet: ce.string, loading: ce.string };
        const ge = be;
        function ve(e3) {
          return ve = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, ve(e3);
        }
        function ye(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e3);
            t3 && (i2 = i2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, i2);
          }
          return n3;
        }
        function we(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? ye(Object(n3), true).forEach(function(t4) {
              Se(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : ye(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function Se(e3, t3, n3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" !== ve(e5) || null === e5)
                return e5;
              var n4 = e5[Symbol.toPrimitive];
              if (void 0 !== n4) {
                var i2 = n4.call(e5, t5);
                if ("object" !== ve(i2))
                  return i2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4, "string");
            return "symbol" === ve(t4) ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
        }
        var Te = { left: a().createElement("polyline", { points: "15 18 9 12 15 6" }), right: a().createElement("polyline", { points: "9 18 15 12 9 6" }), maximize: a().createElement("path", { d: "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" }), minimize: a().createElement("path", { d: "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" }), play: a().createElement("polygon", { points: "5 3 19 12 5 21 5 3" }), pause: a().createElement(a().Fragment, null, a().createElement("rect", { x: "6", y: "4", width: "4", height: "16" }), a().createElement("rect", { x: "14", y: "4", width: "4", height: "16" })) }, Oe = { strokeWidth: 1, viewBox: "0 0 24 24" }, Ee = function(e3) {
          var t3 = we(we({}, Oe), e3), n3 = t3.strokeWidth, i2 = t3.viewBox, r2 = t3.icon;
          return a().createElement("svg", { className: "image-gallery-svg", xmlns: "http://www.w3.org/2000/svg", viewBox: i2, fill: "none", stroke: "currentColor", strokeWidth: n3, strokeLinecap: "round", strokeLinejoin: "round" }, Te[r2]);
        };
        Ee.propTypes = { strokeWidth: ce.number, viewBox: ce.string, icon: (0, ce.oneOf)(["left", "right", "maximize", "minimize", "play", "pause"]).isRequired };
        const ke = Ee;
        var Ie = a().memo(function(e3) {
          var t3 = e3.isFullscreen, n3 = e3.onClick;
          return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-fullscreen-button", onClick: n3, "aria-label": "Open Fullscreen" }, a().createElement(ke, { strokeWidth: 2, icon: t3 ? "minimize" : "maximize" }));
        });
        Ie.displayName = "Fullscreen", Ie.propTypes = { isFullscreen: ce.bool.isRequired, onClick: ce.func.isRequired };
        const je = Ie;
        var xe = a().memo(function(e3) {
          var t3 = e3.disabled, n3 = e3.onClick;
          return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-left-nav", disabled: t3, onClick: n3, "aria-label": "Previous Slide" }, a().createElement(ke, { icon: "left", viewBox: "6 0 12 24" }));
        });
        xe.displayName = "LeftNav", xe.propTypes = { disabled: ce.bool.isRequired, onClick: ce.func.isRequired };
        const Pe = xe;
        var _e = a().memo(function(e3) {
          var t3 = e3.disabled, n3 = e3.onClick;
          return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-right-nav", disabled: t3, onClick: n3, "aria-label": "Next Slide" }, a().createElement(ke, { icon: "right", viewBox: "6 0 12 24" }));
        });
        _e.displayName = "RightNav", _e.propTypes = { disabled: ce.bool.isRequired, onClick: ce.func.isRequired };
        const Re = _e;
        var Me = a().memo(function(e3) {
          var t3 = e3.isPlaying, n3 = e3.onClick;
          return a().createElement("button", { type: "button", className: "image-gallery-icon image-gallery-play-button", onClick: n3, "aria-label": "Play or Pause Slideshow" }, a().createElement(ke, { strokeWidth: 2, icon: t3 ? "pause" : "play" }));
        });
        Me.displayName = "PlayPause", Me.propTypes = { isPlaying: ce.bool.isRequired, onClick: ce.func.isRequired };
        const Le = Me;
        function De(e3) {
          return De = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, De(e3);
        }
        function We() {
          return We = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              for (var i2 in n3)
                Object.prototype.hasOwnProperty.call(n3, i2) && (e3[i2] = n3[i2]);
            }
            return e3;
          }, We.apply(this, arguments);
        }
        function Ce(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e3);
            t3 && (i2 = i2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, i2);
          }
          return n3;
        }
        function Fe(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? Ce(Object(n3), true).forEach(function(t4) {
              ze(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ce(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function ze(e3, t3, n3) {
          return (t3 = function(e4) {
            var t4 = function(e5, t5) {
              if ("object" !== De(e5) || null === e5)
                return e5;
              var n4 = e5[Symbol.toPrimitive];
              if (void 0 !== n4) {
                var i2 = n4.call(e5, t5);
                if ("object" !== De(i2))
                  return i2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e5);
            }(e4, "string");
            return "symbol" === De(t4) ? t4 : String(t4);
          }(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
        }
        var Ne = { className: "", delta: 0, onSwiping: function() {
        }, onSwiped: function() {
        } }, Be = function(e3) {
          var t3 = Fe(Fe({}, Ne), e3), n3 = t3.children, i2 = t3.className, r2 = ue({ delta: t3.delta, onSwiping: t3.onSwiping, onSwiped: t3.onSwiped });
          return a().createElement("div", We({}, r2, { className: i2 }), n3);
        };
        Be.propTypes = { children: ce.node.isRequired, className: ce.string, delta: ce.number, onSwiped: ce.func, onSwiping: ce.func };
        const Ae = Be;
        function Ue(e3) {
          return Ue = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, Ue(e3);
        }
        function Ge(e3, t3) {
          var n3 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e3);
            t3 && (i2 = i2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), n3.push.apply(n3, i2);
          }
          return n3;
        }
        function qe(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? Ge(Object(n3), true).forEach(function(t4) {
              Ye(e3, t4, n3[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Ge(Object(n3)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
            });
          }
          return e3;
        }
        function He(e3, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var i2 = t3[n3];
            i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(e3, Je(i2.key), i2);
          }
        }
        function Ke(e3, t3) {
          return Ke = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, Ke(e3, t3);
        }
        function Ve(e3, t3) {
          if (t3 && ("object" === Ue(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return Xe(e3);
        }
        function Xe(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function $e(e3) {
          return $e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, $e(e3);
        }
        function Ye(e3, t3, n3) {
          return (t3 = Je(t3)) in e3 ? Object.defineProperty(e3, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e3[t3] = n3, e3;
        }
        function Je(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== Ue(e4) || null === e4)
              return e4;
            var n3 = e4[Symbol.toPrimitive];
            if (void 0 !== n3) {
              var i2 = n3.call(e4, t4);
              if ("object" !== Ue(i2))
                return i2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3, "string");
          return "symbol" === Ue(t3) ? t3 : String(t3);
        }
        var Qe = ["fullscreenchange", "MSFullscreenChange", "mozfullscreenchange", "webkitfullscreenchange"], Ze = (0, ce.arrayOf)((0, ce.shape)({ srcSet: ce.string, media: ce.string }));
        function et(e3) {
          var t3 = parseInt(e3.keyCode || e3.which || 0, 10);
          return 66 === t3 || 62 === t3;
        }
        var tt = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && Ke(e4, t3);
          }(l2, e3);
          var n3, i2, r2, o2, s2 = (r2 = l2, o2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = $e(r2);
            if (o2) {
              var n4 = $e(this).constructor;
              e4 = Reflect.construct(t3, arguments, n4);
            } else
              e4 = t3.apply(this, arguments);
            return Ve(this, e4);
          });
          function l2(e4) {
            var t3;
            return function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, l2), Ye(Xe(t3 = s2.call(this, e4)), "onBulletClick", function(e5, n4) {
              var i3 = t3.props, r3 = i3.onBulletClick, a2 = i3.items, o3 = t3.state.currentIndex;
              e5.target.blur(), o3 !== n4 && (2 === a2.length ? t3.slideToIndexWithStyleReset(n4, e5) : t3.slideToIndex(n4, e5)), r3 && r3(e5, n4);
            }), t3.state = { currentIndex: e4.startIndex, thumbsTranslate: 0, thumbsSwipedTranslate: 0, currentSlideOffset: 0, galleryWidth: 0, thumbnailsWrapperWidth: 0, thumbnailsWrapperHeight: 0, thumbsStyle: { transition: "all ".concat(e4.slideDuration, "ms ease-out") }, isFullscreen: false, isSwipingThumbnail: false, isPlaying: false }, t3.loadedImages = {}, t3.imageGallery = a().createRef(), t3.thumbnailsWrapper = a().createRef(), t3.thumbnails = a().createRef(), t3.imageGallerySlideWrapper = a().createRef(), t3.handleImageLoaded = t3.handleImageLoaded.bind(Xe(t3)), t3.handleKeyDown = t3.handleKeyDown.bind(Xe(t3)), t3.handleMouseDown = t3.handleMouseDown.bind(Xe(t3)), t3.handleResize = t3.handleResize.bind(Xe(t3)), t3.handleTouchMove = t3.handleTouchMove.bind(Xe(t3)), t3.handleOnSwiped = t3.handleOnSwiped.bind(Xe(t3)), t3.handleScreenChange = t3.handleScreenChange.bind(Xe(t3)), t3.handleSwiping = t3.handleSwiping.bind(Xe(t3)), t3.handleThumbnailSwiping = t3.handleThumbnailSwiping.bind(Xe(t3)), t3.handleOnThumbnailSwiped = t3.handleOnThumbnailSwiped.bind(Xe(t3)), t3.onThumbnailMouseLeave = t3.onThumbnailMouseLeave.bind(Xe(t3)), t3.handleImageError = t3.handleImageError.bind(Xe(t3)), t3.pauseOrPlay = t3.pauseOrPlay.bind(Xe(t3)), t3.renderThumbInner = t3.renderThumbInner.bind(Xe(t3)), t3.renderItem = t3.renderItem.bind(Xe(t3)), t3.slideLeft = t3.slideLeft.bind(Xe(t3)), t3.slideRight = t3.slideRight.bind(Xe(t3)), t3.toggleFullScreen = t3.toggleFullScreen.bind(Xe(t3)), t3.togglePlay = t3.togglePlay.bind(Xe(t3)), t3.unthrottledSlideToIndex = t3.slideToIndex, t3.slideToIndex = _(t3.unthrottledSlideToIndex, e4.slideDuration, { trailing: false }), e4.lazyLoad && (t3.lazyLoaded = []), t3;
          }
          return n3 = l2, i2 = [{ key: "componentDidMount", value: function() {
            var e4 = this.props, t3 = e4.autoPlay, n4 = e4.useWindowKeyDown;
            t3 && this.play(), n4 ? window.addEventListener("keydown", this.handleKeyDown) : this.imageGallery.current.addEventListener("keydown", this.handleKeyDown), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("touchmove", this.handleTouchMove, { passive: false }), this.initSlideWrapperResizeObserver(this.imageGallerySlideWrapper), this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper), this.addScreenChangeEvent();
          } }, { key: "componentDidUpdate", value: function(e4, t3) {
            var n4 = this.props, i3 = n4.items, r3 = n4.lazyLoad, a2 = n4.slideDuration, o3 = n4.slideInterval, s3 = n4.startIndex, l3 = n4.thumbnailPosition, u2 = n4.showThumbnails, c2 = n4.useWindowKeyDown, h2 = this.state, d2 = h2.currentIndex, p2 = h2.isPlaying, f2 = e4.items.length !== i3.length, m2 = !M()(e4.items, i3), b2 = e4.startIndex !== s3, g2 = e4.thumbnailPosition !== l3, v2 = e4.showThumbnails !== u2;
            o3 === e4.slideInterval && a2 === e4.slideDuration || p2 && (this.pause(), this.play()), g2 && (this.removeResizeObserver(), this.initSlideWrapperResizeObserver(this.imageGallerySlideWrapper), this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper)), v2 && u2 && this.initThumbnailWrapperResizeObserver(this.thumbnailsWrapper), v2 && !u2 && this.removeThumbnailsResizeObserver(), (f2 || v2) && this.handleResize(), t3.currentIndex !== d2 && this.slideThumbnailBar(), e4.slideDuration !== a2 && (this.slideToIndex = _(this.unthrottledSlideToIndex, a2, { trailing: false })), !r3 || e4.lazyLoad && !m2 || (this.lazyLoaded = []), c2 !== e4.useWindowKeyDown && (c2 ? (this.imageGallery.current.removeEventListener("keydown", this.handleKeyDown), window.addEventListener("keydown", this.handleKeyDown)) : (window.removeEventListener("keydown", this.handleKeyDown), this.imageGallery.current.addEventListener("keydown", this.handleKeyDown))), (b2 || m2) && this.setState({ currentIndex: s3, slideStyle: { transition: "none" } });
          } }, { key: "componentWillUnmount", value: function() {
            var e4 = this.props.useWindowKeyDown;
            window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("touchmove", this.handleTouchMove), this.removeScreenChangeEvent(), this.removeResizeObserver(), this.playPauseIntervalId && (window.clearInterval(this.playPauseIntervalId), this.playPauseIntervalId = null), this.transitionTimer && window.clearTimeout(this.transitionTimer), e4 ? window.removeEventListener("keydown", this.handleKeyDown) : this.imageGallery.current.removeEventListener("keydown", this.handleKeyDown);
          } }, { key: "onSliding", value: function() {
            var e4 = this, t3 = this.state, n4 = t3.currentIndex, i3 = t3.isTransitioning, r3 = this.props, a2 = r3.onSlide, o3 = r3.slideDuration;
            this.transitionTimer = window.setTimeout(function() {
              i3 && (e4.setState({ isTransitioning: !i3, isSwipingThumbnail: false }), a2 && a2(n4));
            }, o3 + 50);
          } }, { key: "onThumbnailClick", value: function(e4, t3) {
            var n4 = this.props, i3 = n4.onThumbnailClick, r3 = n4.items, a2 = this.state.currentIndex;
            e4.target.parentNode.parentNode.blur(), a2 !== t3 && (2 === r3.length ? this.slideToIndexWithStyleReset(t3, e4) : this.slideToIndex(t3, e4)), i3 && i3(e4, t3);
          } }, { key: "onThumbnailMouseOver", value: function(e4, t3) {
            var n4 = this;
            this.thumbnailMouseOverTimer && (window.clearTimeout(this.thumbnailMouseOverTimer), this.thumbnailMouseOverTimer = null), this.thumbnailMouseOverTimer = window.setTimeout(function() {
              n4.slideToIndex(t3), n4.pause();
            }, 300);
          } }, { key: "onThumbnailMouseLeave", value: function() {
            if (this.thumbnailMouseOverTimer) {
              var e4 = this.props.autoPlay;
              window.clearTimeout(this.thumbnailMouseOverTimer), this.thumbnailMouseOverTimer = null, e4 && this.play();
            }
          } }, { key: "setThumbsTranslate", value: function(e4) {
            this.setState({ thumbsTranslate: e4 });
          } }, { key: "setModalFullscreen", value: function(e4) {
            var t3 = this.props.onScreenChange;
            this.setState({ modalFullscreen: e4 }), t3 && t3(e4);
          } }, { key: "getThumbsTranslate", value: function(e4) {
            var t3, n4 = this.props, i3 = n4.disableThumbnailScroll, r3 = n4.items, a2 = this.state, o3 = a2.thumbnailsWrapperWidth, s3 = a2.thumbnailsWrapperHeight, l3 = this.thumbnails && this.thumbnails.current;
            if (i3)
              return 0;
            if (l3) {
              if (this.isThumbnailVertical()) {
                if (l3.scrollHeight <= s3)
                  return 0;
                t3 = l3.scrollHeight - s3;
              } else {
                if (l3.scrollWidth <= o3 || o3 <= 0)
                  return 0;
                t3 = l3.scrollWidth - o3;
              }
              return e4 * (t3 / (r3.length - 1));
            }
            return 0;
          } }, { key: "getThumbnailPositionClassName", value: function(e4) {
            switch (e4) {
              case "left":
                e4 = " ".concat("image-gallery-thumbnails-left");
                break;
              case "right":
                e4 = " ".concat("image-gallery-thumbnails-right");
                break;
              case "bottom":
                e4 = " ".concat("image-gallery-thumbnails-bottom");
                break;
              case "top":
                e4 = " ".concat("image-gallery-thumbnails-top");
            }
            return e4;
          } }, { key: "getAlignmentClassName", value: function(e4) {
            var t3 = this.state.currentIndex, n4 = this.props, i3 = n4.infinite, r3 = n4.items, a2 = "", o3 = "image-gallery-left", s3 = "image-gallery-right";
            switch (e4) {
              case t3 - 1:
                a2 = " ".concat(o3);
                break;
              case t3:
                a2 = " ".concat("image-gallery-center");
                break;
              case t3 + 1:
                a2 = " ".concat(s3);
            }
            return r3.length >= 3 && i3 && (0 === e4 && t3 === r3.length - 1 ? a2 = " ".concat(s3) : e4 === r3.length - 1 && 0 === t3 && (a2 = " ".concat(o3))), a2;
          } }, { key: "getTranslateXForTwoSlide", value: function(e4) {
            var t3 = this.state, n4 = t3.currentIndex, i3 = t3.currentSlideOffset, r3 = t3.previousIndex, a2 = n4 !== r3, o3 = 0 === e4 && 0 === r3, s3 = 1 === e4 && 1 === r3, l3 = 0 === e4 && 1 === n4, u2 = 1 === e4 && 0 === n4, c2 = 0 === i3, h2 = -100 * n4 + 100 * e4 + i3;
            return i3 > 0 ? this.direction = "left" : i3 < 0 && (this.direction = "right"), u2 && i3 > 0 && (h2 = -100 + i3), l3 && i3 < 0 && (h2 = 100 + i3), a2 ? o3 && c2 && "left" === this.direction ? h2 = 100 : s3 && c2 && "right" === this.direction && (h2 = -100) : (u2 && c2 && "left" === this.direction && (h2 = -100), l3 && c2 && "right" === this.direction && (h2 = 100)), h2;
          } }, { key: "getThumbnailBarHeight", value: function() {
            return this.isThumbnailVertical() ? { height: this.state.gallerySlideWrapperHeight } : {};
          } }, { key: "getSlideStyle", value: function(e4) {
            var t3 = this.state, n4 = t3.currentIndex, i3 = t3.currentSlideOffset, r3 = t3.slideStyle, a2 = this.props, o3 = a2.infinite, s3 = a2.items, l3 = a2.useTranslate3D, u2 = a2.isRTL, c2 = -100 * n4, h2 = s3.length - 1, d2 = (c2 + 100 * e4) * (u2 ? -1 : 1) + i3;
            o3 && s3.length > 2 && (0 === n4 && e4 === h2 ? d2 = -100 * (u2 ? -1 : 1) + i3 : n4 === h2 && 0 === e4 && (d2 = 100 * (u2 ? -1 : 1) + i3)), o3 && 2 === s3.length && (d2 = this.getTranslateXForTwoSlide(e4));
            var p2 = "translate(".concat(d2, "%, 0)");
            return l3 && (p2 = "translate3d(".concat(d2, "%, 0, 0)")), qe({ display: this.isSlideVisible(e4) ? "inherit" : "none", WebkitTransform: p2, MozTransform: p2, msTransform: p2, OTransform: p2, transform: p2 }, r3);
          } }, { key: "getCurrentIndex", value: function() {
            return this.state.currentIndex;
          } }, { key: "getThumbnailStyle", value: function() {
            var e4, t3 = this.props, n4 = t3.useTranslate3D, i3 = t3.isRTL, r3 = this.state, a2 = r3.thumbsTranslate, o3 = r3.thumbsStyle, s3 = i3 ? -1 * a2 : a2;
            return this.isThumbnailVertical() ? (e4 = "translate(0, ".concat(a2, "px)"), n4 && (e4 = "translate3d(0, ".concat(a2, "px, 0)"))) : (e4 = "translate(".concat(s3, "px, 0)"), n4 && (e4 = "translate3d(".concat(s3, "px, 0, 0)"))), qe({ WebkitTransform: e4, MozTransform: e4, msTransform: e4, OTransform: e4, transform: e4 }, o3);
          } }, { key: "getSlideItems", value: function() {
            var e4 = this, n4 = this.state.currentIndex, i3 = this.props, r3 = i3.items, o3 = i3.slideOnThumbnailOver, s3 = i3.onClick, l3 = i3.lazyLoad, u2 = i3.onTouchMove, c2 = i3.onTouchEnd, h2 = i3.onTouchStart, d2 = i3.onMouseOver, p2 = i3.onMouseLeave, f2 = i3.renderItem, m2 = i3.renderThumbInner, b2 = i3.showThumbnails, g2 = i3.showBullets, v2 = [], y2 = [], w2 = [];
            return r3.forEach(function(i4, r4) {
              var S2 = e4.getAlignmentClassName(r4), T2 = i4.originalClass ? " ".concat(i4.originalClass) : "", O2 = i4.thumbnailClass ? " ".concat(i4.thumbnailClass) : "", E2 = i4.renderItem || f2 || e4.renderItem, k2 = i4.renderThumbInner || m2 || e4.renderThumbInner, I2 = !l3 || S2 || e4.lazyLoaded[r4];
              I2 && l3 && !e4.lazyLoaded[r4] && (e4.lazyLoaded[r4] = true);
              var j2 = e4.getSlideStyle(r4), x2 = a().createElement("div", { "aria-label": "Go to Slide ".concat(r4 + 1), key: "slide-".concat(r4), tabIndex: "-1", className: "image-gallery-slide ".concat(S2, " ").concat(T2), style: j2, onClick: s3, onKeyUp: e4.handleSlideKeyUp, onTouchMove: u2, onTouchEnd: c2, onTouchStart: h2, onMouseOver: d2, onFocus: d2, onMouseLeave: p2, role: "button" }, I2 ? E2(i4) : a().createElement("div", { style: { height: "100%" } }));
              if (v2.push(x2), b2 && i4.thumbnail) {
                var P2 = t2("image-gallery-thumbnail", O2, { active: n4 === r4 });
                y2.push(a().createElement("button", { key: "thumbnail-".concat(r4), type: "button", tabIndex: "0", "aria-pressed": n4 === r4 ? "true" : "false", "aria-label": "Go to Slide ".concat(r4 + 1), className: P2, onMouseLeave: o3 ? e4.onThumbnailMouseLeave : null, onMouseOver: function(t3) {
                  return e4.handleThumbnailMouseOver(t3, r4);
                }, onFocus: function(t3) {
                  return e4.handleThumbnailMouseOver(t3, r4);
                }, onKeyUp: function(t3) {
                  return e4.handleThumbnailKeyUp(t3, r4);
                }, onClick: function(t3) {
                  return e4.onThumbnailClick(t3, r4);
                } }, k2(i4)));
              }
              if (g2) {
                var _2 = t2("image-gallery-bullet", i4.bulletClass, { active: n4 === r4 });
                w2.push(a().createElement("button", { type: "button", key: "bullet-".concat(r4), className: _2, onClick: function(t3) {
                  return e4.onBulletClick(t3, r4);
                }, "aria-pressed": n4 === r4 ? "true" : "false", "aria-label": "Go to Slide ".concat(r4 + 1) }));
              }
            }), { slides: v2, thumbnails: y2, bullets: w2 };
          } }, { key: "ignoreIsTransitioning", value: function() {
            var e4 = this.props.items, t3 = this.state, n4 = t3.previousIndex, i3 = t3.currentIndex, r3 = e4.length - 1;
            return Math.abs(n4 - i3) > 1 && !(0 === n4 && i3 === r3) && !(n4 === r3 && 0 === i3);
          } }, { key: "isFirstOrLastSlide", value: function(e4) {
            return e4 === this.props.items.length - 1 || 0 === e4;
          } }, { key: "slideIsTransitioning", value: function(e4) {
            var t3 = this.state, n4 = t3.isTransitioning, i3 = t3.previousIndex, r3 = t3.currentIndex;
            return n4 && !(e4 === i3 || e4 === r3);
          } }, { key: "isSlideVisible", value: function(e4) {
            return !this.slideIsTransitioning(e4) || this.ignoreIsTransitioning() && !this.isFirstOrLastSlide(e4);
          } }, { key: "slideThumbnailBar", value: function() {
            var e4 = this.state, t3 = e4.currentIndex, n4 = e4.isSwipingThumbnail, i3 = -this.getThumbsTranslate(t3);
            n4 || (0 === t3 ? this.setState({ thumbsTranslate: 0, thumbsSwipedTranslate: 0 }) : this.setState({ thumbsTranslate: i3, thumbsSwipedTranslate: i3 }));
          } }, { key: "canSlide", value: function() {
            return this.props.items.length >= 2;
          } }, { key: "canSlideLeft", value: function() {
            return this.props.infinite || this.canSlidePrevious();
          } }, { key: "canSlideRight", value: function() {
            return this.props.infinite || this.canSlideNext();
          } }, { key: "canSlidePrevious", value: function() {
            return this.state.currentIndex > 0;
          } }, { key: "canSlideNext", value: function() {
            return this.state.currentIndex < this.props.items.length - 1;
          } }, { key: "handleSwiping", value: function(e4) {
            var t3 = e4.event, n4 = e4.absX, i3 = e4.dir, r3 = this.props, a2 = r3.disableSwipe, o3 = r3.stopPropagation, s3 = this.state, l3 = s3.galleryWidth, u2 = s3.isTransitioning, c2 = s3.swipingUpDown, h2 = s3.swipingLeftRight;
            if (i3 !== ne && i3 !== ie && !c2 || h2) {
              if (i3 !== ee && i3 !== te || h2 || this.setState({ swipingLeftRight: true }), !a2) {
                var d2 = this.props.swipingTransitionDuration;
                if (o3 && t3.preventDefault(), u2)
                  this.setState({ currentSlideOffset: 0 });
                else {
                  var p2 = i3 === te ? 1 : -1, f2 = n4 / l3 * 100;
                  Math.abs(f2) >= 100 && (f2 = 100);
                  var m2 = { transition: "transform ".concat(d2, "ms ease-out") };
                  this.setState({ currentSlideOffset: p2 * f2, slideStyle: m2 });
                }
              }
            } else
              c2 || this.setState({ swipingUpDown: true });
          } }, { key: "handleThumbnailSwiping", value: function(e4) {
            var t3 = e4.event, n4 = e4.absX, i3 = e4.absY, r3 = e4.dir, a2 = this.props, o3 = a2.stopPropagation, s3 = a2.swipingThumbnailTransitionDuration, l3 = this.state, u2 = l3.thumbsSwipedTranslate, c2 = l3.thumbnailsWrapperHeight, h2 = l3.thumbnailsWrapperWidth, d2 = l3.swipingUpDown, p2 = l3.swipingLeftRight;
            if (this.isThumbnailVertical()) {
              if ((r3 === ee || r3 === te || p2) && !d2)
                return void (p2 || this.setState({ swipingLeftRight: true }));
              r3 !== ne && r3 !== ie || d2 || this.setState({ swipingUpDown: true });
            } else {
              if ((r3 === ne || r3 === ie || d2) && !p2)
                return void (d2 || this.setState({ swipingUpDown: true }));
              r3 !== ee && r3 !== te || p2 || this.setState({ swipingLeftRight: true });
            }
            var f2, m2, b2, g2, v2, y2 = this.thumbnails && this.thumbnails.current;
            if (this.isThumbnailVertical() ? (f2 = u2 + (r3 === ie ? i3 : -i3), m2 = y2.scrollHeight - c2 + 20, b2 = Math.abs(f2) > m2, g2 = f2 > 20, v2 = y2.scrollHeight <= c2) : (f2 = u2 + (r3 === te ? n4 : -n4), m2 = y2.scrollWidth - h2 + 20, b2 = Math.abs(f2) > m2, g2 = f2 > 20, v2 = y2.scrollWidth <= h2), !v2 && (r3 !== ee && r3 !== ne || !b2) && (r3 !== te && r3 !== ie || !g2)) {
              o3 && t3.stopPropagation();
              var w2 = { transition: "transform ".concat(s3, "ms ease-out") };
              this.setState({ thumbsTranslate: f2, thumbsStyle: w2 });
            }
          } }, { key: "handleOnThumbnailSwiped", value: function() {
            var e4 = this.state.thumbsTranslate, t3 = this.props.slideDuration;
            this.resetSwipingDirection(), this.setState({ isSwipingThumbnail: true, thumbsSwipedTranslate: e4, thumbsStyle: { transition: "all ".concat(t3, "ms ease-out") } });
          } }, { key: "sufficientSwipe", value: function() {
            var e4 = this.state.currentSlideOffset, t3 = this.props.swipeThreshold;
            return Math.abs(e4) > t3;
          } }, { key: "resetSwipingDirection", value: function() {
            var e4 = this.state, t3 = e4.swipingUpDown, n4 = e4.swipingLeftRight;
            t3 && this.setState({ swipingUpDown: false }), n4 && this.setState({ swipingLeftRight: false });
          } }, { key: "handleOnSwiped", value: function(e4) {
            var t3 = e4.event, n4 = e4.dir, i3 = e4.velocity, r3 = this.props, a2 = r3.disableSwipe, o3 = r3.stopPropagation, s3 = r3.flickThreshold;
            if (!a2) {
              var l3 = this.props.isRTL;
              o3 && t3.stopPropagation(), this.resetSwipingDirection();
              var u2 = (n4 === ee ? 1 : -1) * (l3 ? -1 : 1), c2 = i3 > s3 && !(n4 === ne || n4 === ie);
              this.handleOnSwipedTo(u2, c2);
            }
          } }, { key: "handleOnSwipedTo", value: function(e4, t3) {
            var n4 = this.state, i3 = n4.currentIndex, r3 = n4.isTransitioning, a2 = i3;
            !this.sufficientSwipe() && !t3 || r3 || (a2 += e4), (-1 === e4 && !this.canSlideLeft() || 1 === e4 && !this.canSlideRight()) && (a2 = i3), this.unthrottledSlideToIndex(a2);
          } }, { key: "handleTouchMove", value: function(e4) {
            this.state.swipingLeftRight && e4.preventDefault();
          } }, { key: "handleMouseDown", value: function() {
            this.imageGallery.current.classList.add("image-gallery-using-mouse");
          } }, { key: "handleKeyDown", value: function(e4) {
            var t3 = this.props, n4 = t3.disableKeyDown, i3 = t3.useBrowserFullscreen, r3 = this.state.isFullscreen;
            if (this.imageGallery.current.classList.remove("image-gallery-using-mouse"), !n4)
              switch (parseInt(e4.keyCode || e4.which || 0, 10)) {
                case 37:
                  this.canSlideLeft() && !this.playPauseIntervalId && this.slideLeft(e4);
                  break;
                case 39:
                  this.canSlideRight() && !this.playPauseIntervalId && this.slideRight(e4);
                  break;
                case 27:
                  r3 && !i3 && this.exitFullScreen();
              }
          } }, { key: "handleImageError", value: function(e4) {
            var t3 = this.props.onErrorImageURL;
            t3 && -1 === e4.target.src.indexOf(t3) && (e4.target.src = t3);
          } }, { key: "removeThumbnailsResizeObserver", value: function() {
            this.resizeThumbnailWrapperObserver && this.thumbnailsWrapper && this.thumbnailsWrapper.current && (this.resizeThumbnailWrapperObserver.unobserve(this.thumbnailsWrapper.current), this.resizeThumbnailWrapperObserver = null);
          } }, { key: "removeResizeObserver", value: function() {
            this.resizeSlideWrapperObserver && this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current && (this.resizeSlideWrapperObserver.unobserve(this.imageGallerySlideWrapper.current), this.resizeSlideWrapperObserver = null), this.removeThumbnailsResizeObserver();
          } }, { key: "handleResize", value: function() {
            var e4 = this.state.currentIndex;
            this.imageGallery && (this.imageGallery && this.imageGallery.current && this.setState({ galleryWidth: this.imageGallery.current.offsetWidth }), this.imageGallerySlideWrapper && this.imageGallerySlideWrapper.current && this.setState({ gallerySlideWrapperHeight: this.imageGallerySlideWrapper.current.offsetHeight }), this.setThumbsTranslate(-this.getThumbsTranslate(e4)));
          } }, { key: "initSlideWrapperResizeObserver", value: function(e4) {
            var t3 = this;
            e4 && !e4.current || (this.resizeSlideWrapperObserver = new Z(P(function(e5) {
              e5 && e5.forEach(function(e6) {
                t3.setState({ thumbnailsWrapperWidth: e6.contentRect.width }, t3.handleResize);
              });
            }, 50)), this.resizeSlideWrapperObserver.observe(e4.current));
          } }, { key: "initThumbnailWrapperResizeObserver", value: function(e4) {
            var t3 = this;
            e4 && !e4.current || (this.resizeThumbnailWrapperObserver = new Z(P(function(e5) {
              e5 && e5.forEach(function(e6) {
                t3.setState({ thumbnailsWrapperHeight: e6.contentRect.height }, t3.handleResize);
              });
            }, 50)), this.resizeThumbnailWrapperObserver.observe(e4.current));
          } }, { key: "toggleFullScreen", value: function() {
            this.state.isFullscreen ? this.exitFullScreen() : this.fullScreen();
          } }, { key: "togglePlay", value: function() {
            this.playPauseIntervalId ? this.pause() : this.play();
          } }, { key: "handleScreenChange", value: function() {
            var e4 = this.props, t3 = e4.onScreenChange, n4 = e4.useBrowserFullscreen, i3 = document.fullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement, r3 = this.imageGallery.current === i3;
            t3 && t3(r3), n4 && this.setState({ isFullscreen: r3 });
          } }, { key: "slideToIndex", value: function(e4, t3) {
            var n4 = this.state, i3 = n4.currentIndex, r3 = n4.isTransitioning, a2 = this.props, o3 = a2.items, s3 = a2.slideDuration, l3 = a2.onBeforeSlide;
            if (!r3) {
              t3 && this.playPauseIntervalId && (this.pause(false), this.play(false));
              var u2 = o3.length - 1, c2 = e4;
              e4 < 0 ? c2 = u2 : e4 > u2 && (c2 = 0), l3 && c2 !== i3 && l3(c2), this.setState({ previousIndex: i3, currentIndex: c2, isTransitioning: c2 !== i3, currentSlideOffset: 0, slideStyle: { transition: "all ".concat(s3, "ms ease-out") } }, this.onSliding);
            }
          } }, { key: "slideLeft", value: function(e4) {
            var t3 = this.props.isRTL;
            this.slideTo(e4, t3 ? "right" : "left");
          } }, { key: "slideRight", value: function(e4) {
            var t3 = this.props.isRTL;
            this.slideTo(e4, t3 ? "left" : "right");
          } }, { key: "slideTo", value: function(e4, t3) {
            var n4 = this.state, i3 = n4.currentIndex, r3 = n4.isTransitioning, a2 = this.props.items, o3 = i3 + ("left" === t3 ? -1 : 1);
            r3 || (2 === a2.length ? this.slideToIndexWithStyleReset(o3, e4) : this.slideToIndex(o3, e4));
          } }, { key: "slideToIndexWithStyleReset", value: function(e4, t3) {
            var n4 = this, i3 = this.state, r3 = i3.currentIndex, a2 = i3.currentSlideOffset;
            this.setState({ currentSlideOffset: a2 + (r3 > e4 ? 1e-3 : -1e-3), slideStyle: { transition: "none" } }, function() {
              window.setTimeout(function() {
                return n4.slideToIndex(e4, t3);
              }, 25);
            });
          } }, { key: "handleThumbnailMouseOver", value: function(e4, t3) {
            this.props.slideOnThumbnailOver && this.onThumbnailMouseOver(e4, t3);
          } }, { key: "handleThumbnailKeyUp", value: function(e4, t3) {
            et(e4) && this.onThumbnailClick(e4, t3);
          } }, { key: "handleSlideKeyUp", value: function(e4) {
            et(e4) && (0, this.props.onClick)(e4);
          } }, { key: "isThumbnailVertical", value: function() {
            var e4 = this.props.thumbnailPosition;
            return "left" === e4 || "right" === e4;
          } }, { key: "addScreenChangeEvent", value: function() {
            var e4 = this;
            Qe.forEach(function(t3) {
              document.addEventListener(t3, e4.handleScreenChange);
            });
          } }, { key: "removeScreenChangeEvent", value: function() {
            var e4 = this;
            Qe.forEach(function(t3) {
              document.removeEventListener(t3, e4.handleScreenChange);
            });
          } }, { key: "fullScreen", value: function() {
            var e4 = this.props.useBrowserFullscreen, t3 = this.imageGallery.current;
            e4 ? t3.requestFullscreen ? t3.requestFullscreen() : t3.msRequestFullscreen ? t3.msRequestFullscreen() : t3.mozRequestFullScreen ? t3.mozRequestFullScreen() : t3.webkitRequestFullscreen ? t3.webkitRequestFullscreen() : this.setModalFullscreen(true) : this.setModalFullscreen(true), this.setState({ isFullscreen: true });
          } }, { key: "exitFullScreen", value: function() {
            var e4 = this.state.isFullscreen, t3 = this.props.useBrowserFullscreen;
            e4 && (t3 ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() : this.setModalFullscreen(false) : this.setModalFullscreen(false), this.setState({ isFullscreen: false }));
          } }, { key: "pauseOrPlay", value: function() {
            var e4 = this.props.infinite, t3 = this.state.currentIndex;
            e4 || this.canSlideRight() ? this.slideToIndex(t3 + 1) : this.pause();
          } }, { key: "play", value: function() {
            var e4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t3 = this.props, n4 = t3.onPlay, i3 = t3.slideInterval, r3 = t3.slideDuration, a2 = this.state.currentIndex;
            this.playPauseIntervalId || (this.setState({ isPlaying: true }), this.playPauseIntervalId = window.setInterval(this.pauseOrPlay, Math.max(i3, r3)), n4 && e4 && n4(a2));
          } }, { key: "pause", value: function() {
            var e4 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t3 = this.props.onPause, n4 = this.state.currentIndex;
            this.playPauseIntervalId && (window.clearInterval(this.playPauseIntervalId), this.playPauseIntervalId = null, this.setState({ isPlaying: false }), t3 && e4 && t3(n4));
          } }, { key: "isImageLoaded", value: function(e4) {
            return !!this.loadedImages[e4.original] || (this.loadedImages[e4.original] = true, false);
          } }, { key: "handleImageLoaded", value: function(e4, t3) {
            var n4 = this.props.onImageLoad;
            !this.loadedImages[t3] && n4 && (this.loadedImages[t3] = true, n4(e4));
          } }, { key: "renderItem", value: function(e4) {
            var t3 = this.state.isFullscreen, n4 = this.props.onImageError || this.handleImageError;
            return a().createElement(ge, { description: e4.description, fullscreen: e4.fullscreen, handleImageLoaded: this.handleImageLoaded, isFullscreen: t3, onImageError: n4, original: e4.original, originalAlt: e4.originalAlt, originalHeight: e4.originalHeight, originalWidth: e4.originalWidth, originalTitle: e4.originalTitle, sizes: e4.sizes, loading: e4.loading, srcSet: e4.srcSet });
          } }, { key: "renderThumbInner", value: function(e4) {
            var t3 = this.props.onThumbnailError || this.handleImageError;
            return a().createElement("span", { className: "image-gallery-thumbnail-inner" }, a().createElement("img", { className: "image-gallery-thumbnail-image", src: e4.thumbnail, height: e4.thumbnailHeight, width: e4.thumbnailWidth, alt: e4.thumbnailAlt, title: e4.thumbnailTitle, loading: e4.thumbnailLoading, onError: t3 }), e4.thumbnailLabel && a().createElement("div", { className: "image-gallery-thumbnail-label" }, e4.thumbnailLabel));
          } }, { key: "render", value: function() {
            var e4 = this.state, n4 = e4.currentIndex, i3 = e4.isFullscreen, r3 = e4.modalFullscreen, o3 = e4.isPlaying, s3 = this.props, l3 = s3.additionalClass, u2 = s3.disableThumbnailSwipe, c2 = s3.indexSeparator, h2 = s3.isRTL, d2 = s3.items, p2 = s3.thumbnailPosition, f2 = s3.renderFullscreenButton, m2 = s3.renderCustomControls, b2 = s3.renderLeftNav, g2 = s3.renderRightNav, v2 = s3.showBullets, y2 = s3.showFullscreenButton, w2 = s3.showIndex, S2 = s3.showThumbnails, T2 = s3.showNav, O2 = s3.showPlayButton, E2 = s3.renderPlayPauseButton, k2 = this.getThumbnailStyle(), I2 = this.getSlideItems(), j2 = I2.slides, x2 = I2.thumbnails, P2 = I2.bullets, _2 = t2("image-gallery-slide-wrapper", this.getThumbnailPositionClassName(p2), { "image-gallery-rtl": h2 }), R2 = a().createElement("div", { ref: this.imageGallerySlideWrapper, className: _2 }, m2 && m2(), this.canSlide() ? a().createElement(a().Fragment, null, T2 && a().createElement(a().Fragment, null, b2(this.slideLeft, !this.canSlideLeft()), g2(this.slideRight, !this.canSlideRight())), a().createElement(Ae, { className: "image-gallery-swipe", delta: 0, onSwiping: this.handleSwiping, onSwiped: this.handleOnSwiped }, a().createElement("div", { className: "image-gallery-slides" }, j2))) : a().createElement("div", { className: "image-gallery-slides" }, j2), O2 && E2(this.togglePlay, o3), v2 && a().createElement("div", { className: "image-gallery-bullets" }, a().createElement("div", { className: "image-gallery-bullets-container", role: "navigation", "aria-label": "Bullet Navigation" }, P2)), y2 && f2(this.toggleFullScreen, i3), w2 && a().createElement("div", { className: "image-gallery-index" }, a().createElement("span", { className: "image-gallery-index-current" }, n4 + 1), a().createElement("span", { className: "image-gallery-index-separator" }, c2), a().createElement("span", { className: "image-gallery-index-total" }, d2.length))), M2 = t2("image-gallery", l3, { "fullscreen-modal": r3 }), L2 = t2("image-gallery-content", this.getThumbnailPositionClassName(p2), { fullscreen: i3 }), D2 = t2("image-gallery-thumbnails-wrapper", this.getThumbnailPositionClassName(p2), { "thumbnails-wrapper-rtl": !this.isThumbnailVertical() && h2 }, { "thumbnails-swipe-horizontal": !this.isThumbnailVertical() && !u2 }, { "thumbnails-swipe-vertical": this.isThumbnailVertical() && !u2 });
            return a().createElement("div", { ref: this.imageGallery, className: M2, "aria-live": "polite" }, a().createElement("div", { className: L2 }, ("bottom" === p2 || "right" === p2) && R2, S2 && x2.length > 0 ? a().createElement(Ae, { className: D2, delta: 0, onSwiping: !u2 && this.handleThumbnailSwiping, onSwiped: !u2 && this.handleOnThumbnailSwiped }, a().createElement("div", { className: "image-gallery-thumbnails", ref: this.thumbnailsWrapper, style: this.getThumbnailBarHeight() }, a().createElement("nav", { ref: this.thumbnails, className: "image-gallery-thumbnails-container", style: k2, "aria-label": "Thumbnail Navigation" }, x2))) : null, ("top" === p2 || "left" === p2) && R2));
          } }], i2 && He(n3.prototype, i2), Object.defineProperty(n3, "prototype", { writable: false }), l2;
        }(a().Component);
        tt.propTypes = { flickThreshold: ce.number, items: (0, ce.arrayOf)((0, ce.shape)({ bulletClass: ce.string, bulletOnClick: ce.func, description: ce.string, original: ce.string, originalHeight: ce.number, originalWidth: ce.number, loading: ce.string, thumbnailHeight: ce.number, thumbnailWidth: ce.number, thumbnailLoading: ce.string, fullscreen: ce.string, originalAlt: ce.string, originalTitle: ce.string, thumbnail: ce.string, thumbnailAlt: ce.string, thumbnailLabel: ce.string, thumbnailTitle: ce.string, originalClass: ce.string, thumbnailClass: ce.string, renderItem: ce.func, renderThumbInner: ce.func, imageSet: Ze, srcSet: ce.string, sizes: ce.string })).isRequired, showNav: ce.bool, autoPlay: ce.bool, lazyLoad: ce.bool, infinite: ce.bool, showIndex: ce.bool, showBullets: ce.bool, showThumbnails: ce.bool, showPlayButton: ce.bool, showFullscreenButton: ce.bool, disableThumbnailScroll: ce.bool, disableKeyDown: ce.bool, disableSwipe: ce.bool, disableThumbnailSwipe: ce.bool, useBrowserFullscreen: ce.bool, onErrorImageURL: ce.string, indexSeparator: ce.string, thumbnailPosition: (0, ce.oneOf)(["top", "bottom", "left", "right"]), startIndex: ce.number, slideDuration: ce.number, slideInterval: ce.number, slideOnThumbnailOver: ce.bool, swipeThreshold: ce.number, swipingTransitionDuration: ce.number, swipingThumbnailTransitionDuration: ce.number, onSlide: ce.func, onBeforeSlide: ce.func, onScreenChange: ce.func, onPause: ce.func, onPlay: ce.func, onClick: ce.func, onImageLoad: ce.func, onImageError: ce.func, onTouchMove: ce.func, onTouchEnd: ce.func, onTouchStart: ce.func, onMouseOver: ce.func, onMouseLeave: ce.func, onBulletClick: ce.func, onThumbnailError: ce.func, onThumbnailClick: ce.func, renderCustomControls: ce.func, renderLeftNav: ce.func, renderRightNav: ce.func, renderPlayPauseButton: ce.func, renderFullscreenButton: ce.func, renderItem: ce.func, renderThumbInner: ce.func, stopPropagation: ce.bool, additionalClass: ce.string, useTranslate3D: ce.bool, isRTL: ce.bool, useWindowKeyDown: ce.bool }, tt.defaultProps = { onErrorImageURL: "", additionalClass: "", showNav: true, autoPlay: false, lazyLoad: false, infinite: true, showIndex: false, showBullets: false, showThumbnails: true, showPlayButton: true, showFullscreenButton: true, disableThumbnailScroll: false, disableKeyDown: false, disableSwipe: false, disableThumbnailSwipe: false, useTranslate3D: true, isRTL: false, useBrowserFullscreen: true, flickThreshold: 0.4, stopPropagation: false, indexSeparator: " / ", thumbnailPosition: "bottom", startIndex: 0, slideDuration: 450, swipingTransitionDuration: 0, swipingThumbnailTransitionDuration: 0, onSlide: null, onBeforeSlide: null, onScreenChange: null, onPause: null, onPlay: null, onClick: null, onImageLoad: null, onImageError: null, onTouchMove: null, onTouchEnd: null, onTouchStart: null, onMouseOver: null, onMouseLeave: null, onBulletClick: null, onThumbnailError: null, onThumbnailClick: null, renderCustomControls: null, renderThumbInner: null, renderItem: null, slideInterval: 3e3, slideOnThumbnailOver: false, swipeThreshold: 30, renderLeftNav: function(e3, t3) {
          return a().createElement(Pe, { onClick: e3, disabled: t3 });
        }, renderRightNav: function(e3, t3) {
          return a().createElement(Re, { onClick: e3, disabled: t3 });
        }, renderPlayPauseButton: function(e3, t3) {
          return a().createElement(Le, { onClick: e3, isPlaying: t3 });
        }, renderFullscreenButton: function(e3, t3) {
          return a().createElement(je, { onClick: e3, isFullscreen: t3 });
        }, useWindowKeyDown: true };
        const nt = tt;
      })(), r;
    })());
  }
});
export default require_image_gallery();
//# sourceMappingURL=react-image-gallery.js.map
