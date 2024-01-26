import { decompress as fs, compress as ws } from "lz-string";
import "lineclip";
import { toJS as Xs, autorun as Es, ApplianceNames as ed, isRoom as $l, isPlayer as es, InvisiblePlugin as js, RoomPhase as Bs } from "white-web-sdk";
import { setValue as Os, val as Ds } from "value-enhancer";
import Vl, { useContext as td, useState as sd, useMemo as Kd, useEffect as Hd } from "react";
import li from "react-draggable";
import As, { EventEmitter2 as qs } from "eventemitter2";
import { debounce as $s, isEqual as _s, cloneDeep as lt } from "lodash";
import { Resizable as dt } from "re-resizable";
var od;
(function(Z) {
  Z[Z.pedding = 0] = "pedding", Z[Z.mounted = 1] = "mounted", Z[Z.update = 2] = "update", Z[Z.unmounted = 3] = "unmounted";
})(od || (od = {}));
var _l;
(function(Z) {
  Z[Z.Normal = 0] = "Normal", Z[Z.Stroke = 1] = "Stroke", Z[Z.Dotted = 2] = "Dotted", Z[Z.LongDotted = 3] = "LongDotted";
})(_l || (_l = {}));
var ul;
(function(Z) {
  Z.ShowFloatBar = "ShowFloatBar", Z.ZIndexFloatBar = "ZIndexFloatBar", Z.DeleteNode = "DeleteNode", Z.CopyNode = "CopyNode", Z.ZIndexActive = "ZIndexActive", Z.ZIndexNode = "ZIndexNode", Z.RotateNode = "RotateNode", Z.SetColorNode = "SetColorNode", Z.TranslateNode = "TranslateNode", Z.ScaleNode = "ScaleNode", Z.OriginalEvent = "OriginalEvent", Z.CreateScene = "createScene";
})(ul || (ul = {}));
var pl;
(function(Z) {
  Z.DisplayState = "DisplayState", Z.FloatBar = "FloatBar", Z.CanvasSelector = "CanvasSelector", Z.MainEngine = "MainEngine", Z.DisplayContainer = "DisplayContainer";
})(pl || (pl = {}));
var Jl;
(function(Z) {
  Z[Z.Pencil = 1] = "Pencil", Z[Z.Eraser = 2] = "Eraser", Z[Z.Selector = 3] = "Selector", Z[Z.Clicker = 4] = "Clicker", Z[Z.Arrow = 5] = "Arrow", Z[Z.Hand = 6] = "Hand", Z[Z.LaserPen = 7] = "LaserPen";
})(Jl || (Jl = {}));
var ui;
(function(Z) {
  Z[Z.Path = 0] = "Path", Z[Z.Rect = 1] = "Rect";
})(ui || (ui = {}));
var Fl;
(function(Z) {
  Z[Z.Local = 1] = "Local", Z[Z.Service = 2] = "Service";
})(Fl || (Fl = {}));
var Ll;
(function(Z) {
  Z[Z.Pending = 0] = "Pending", Z[Z.Start = 1] = "Start", Z[Z.Doing = 2] = "Doing", Z[Z.Done = 3] = "Done", Z[Z.Freeze = 4] = "Freeze", Z[Z.Unwritable = 5] = "Unwritable";
})(Ll || (Ll = {}));
var hl;
(function(Z) {
  Z[Z.Init = 0] = "Init", Z[Z.UpdateCamera = 1] = "UpdateCamera", Z[Z.UpdateTools = 2] = "UpdateTools", Z[Z.CreateWork = 3] = "CreateWork", Z[Z.DrawWork = 4] = "DrawWork", Z[Z.FullWork = 5] = "FullWork", Z[Z.UpdateNode = 6] = "UpdateNode", Z[Z.RemoveNode = 7] = "RemoveNode", Z[Z.Clear = 8] = "Clear", Z[Z.Select = 9] = "Select", Z[Z.Destroy = 10] = "Destroy", Z[Z.None = 11] = "None", Z[Z.Snapshot = 12] = "Snapshot";
})(hl || (hl = {}));
var Vi;
(function(Z) {
  Z[Z.Path = 0] = "Path", Z[Z.Rect = 1] = "Rect", Z[Z.Texture = 2] = "Texture";
})(Vi || (Vi = {}));
var Od;
(function(Z) {
  Z.Webgl2 = "webgl2", Z.Webgl = "webgl", Z.Canvas2d = "2d";
})(Od || (Od = {}));
var ad;
(function(Z) {
  Z[Z.Float = 1] = "Float", Z[Z.Bg = 2] = "Bg", Z[Z.Selector = 3] = "Selector", Z[Z.None = 4] = "None";
})(ad || (ad = {}));
var hi;
(function(Z) {
  Z.LT = "topLeft", Z.LC = "left", Z.LB = "bottomLeft", Z.TC = "top", Z.RT = "topRight", Z.RC = "right", Z.RB = "bottomRight", Z.BC = "bottom";
})(hi || (hi = {}));
class it {
  constructor(d, l) {
    Object.defineProperty(this, "syncUnitTime", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 1e3
    }), Object.defineProperty(this, "drawLayer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "fullLayer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "workId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.fullLayer = d, this.drawLayer = l;
  }
  setWorkId(d) {
    this.workId = d;
  }
  getWorkId() {
    return this.workId;
  }
  getWorkOptions() {
    return this.workOptions;
  }
  setWorkOptions(d) {
    this.workOptions = d, this.syncUnitTime = d.syncUnitTime || this.syncUnitTime;
  }
}
var Nl = (
  /******/
  function(Z) {
    var d = {};
    function l(s) {
      if (d[s])
        return d[s].exports;
      var c = d[s] = {
        /******/
        i: s,
        /******/
        l: !1,
        /******/
        exports: {}
        /******/
      };
      return Z[s].call(c.exports, c, c.exports, l), c.l = !0, c.exports;
    }
    return l.m = Z, l.c = d, l.d = function(s, c, o) {
      l.o(s, c) || Object.defineProperty(s, c, { enumerable: !0, get: o });
    }, l.r = function(s) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
    }, l.t = function(s, c) {
      if (c & 1 && (s = l(s)), c & 8 || c & 4 && typeof s == "object" && s && s.__esModule)
        return s;
      var o = /* @__PURE__ */ Object.create(null);
      if (l.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: s }), c & 2 && typeof s != "string")
        for (var u in s)
          l.d(o, u, (function(e) {
            return s[e];
          }).bind(null, u));
      return o;
    }, l.n = function(s) {
      var c = s && s.__esModule ? (
        /******/
        function() {
          return s.default;
        }
      ) : (
        /******/
        function() {
          return s;
        }
      );
      return l.d(c, "a", c), c;
    }, l.o = function(s, c) {
      return Object.prototype.hasOwnProperty.call(s, c);
    }, l.p = "/js/", l(l.s = 0);
  }([
    /* 0 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "version", function() {
        return w;
      }), l.d(d, "helpers", function() {
        return H;
      }), l.d(d, "createElement", function() {
        return F;
      }), l.d(d, "isSpriteNode", function() {
        return r;
      }), l.d(d, "registerNode", function() {
        return Y;
      });
      var s = l(12);
      l.d(d, "ENV", function() {
        return s.ENV;
      });
      var c = l(68);
      l.d(d, "requestAnimationFrame", function() {
        return c.requestAnimationFrame;
      }), l.d(d, "cancelAnimationFrame", function() {
        return c.cancelAnimationFrame;
      });
      var o = l(70);
      l.d(d, "Node", function() {
        return o.default;
      });
      var u = l(217);
      l.d(d, "Cloud", function() {
        return u.default;
      });
      var e = l(219);
      l.d(d, "Block", function() {
        return e.default;
      });
      var n = l(224);
      l.d(d, "Sprite", function() {
        return n.default;
      });
      var G = l(226);
      l.d(d, "Path", function() {
        return G.default;
      });
      var y = l(229);
      l.d(d, "Rect", function() {
        return y.default;
      });
      var a = l(231);
      l.d(d, "Triangle", function() {
        return a.default;
      });
      var I = l(236);
      l.d(d, "Parallel", function() {
        return I.default;
      });
      var h = l(238);
      l.d(d, "Regular", function() {
        return h.default;
      });
      var S = l(240);
      l.d(d, "Star", function() {
        return S.default;
      });
      var p = l(242);
      l.d(d, "Ellipse", function() {
        return p.default;
      });
      var X = l(244);
      l.d(d, "Arc", function() {
        return X.default;
      });
      var V = l(246);
      l.d(d, "Ring", function() {
        return V.default;
      });
      var i = l(232);
      l.d(d, "Polyline", function() {
        return i.default;
      });
      var b = l(248);
      l.d(d, "Label", function() {
        return b.default;
      });
      var t = l(250);
      l.d(d, "Group", function() {
        return t.default;
      });
      var m = l(286);
      l.d(d, "Layer", function() {
        return m.default;
      });
      var K = l(287);
      l.d(d, "SpriteSvg", function() {
        return K.default;
      });
      var x = l(289);
      l.d(d, "LayerWorker", function() {
        return x.default;
      });
      var C = l(290);
      l.d(d, "Scene", function() {
        return C.default;
      });
      var T = l(213), R = l(221);
      l.d(d, "Color", function() {
        return R.Color;
      }), l.d(d, "Gradient", function() {
        return R.Gradient;
      });
      var J = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const F = T.default.createElement, r = T.default.isSpriteNode, Y = T.default.registerNode, H = {
        parseColor: R.parseColor,
        sizeToPixel: J.sizeToPixel,
        toArray: J.toArray,
        toString: J.toString,
        toNumber: J.toNumber
      };
      let Q;
      Q = "3.8.3";
      const w = Q;
    },
    /* 1 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(2);
      l.d(d, "glMatrix", function() {
        return s;
      });
      var c = l(3);
      l.d(d, "mat2", function() {
        return c;
      });
      var o = l(4);
      l.d(d, "mat2d", function() {
        return o;
      });
      var u = l(5);
      l.d(d, "mat3", function() {
        return u;
      });
      var e = l(6);
      l.d(d, "mat4", function() {
        return e;
      });
      var n = l(7);
      l.d(d, "quat", function() {
        return n;
      });
      var G = l(10);
      l.d(d, "quat2", function() {
        return G;
      });
      var y = l(11);
      l.d(d, "vec2", function() {
        return y;
      });
      var a = l(8);
      l.d(d, "vec3", function() {
        return a;
      });
      var I = l(9);
      l.d(d, "vec4", function() {
        return I;
      });
    },
    /* 2 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "EPSILON", function() {
        return s;
      }), l.d(d, "ARRAY_TYPE", function() {
        return c;
      }), l.d(d, "RANDOM", function() {
        return o;
      }), l.d(d, "setMatrixArrayType", function() {
        return u;
      }), l.d(d, "toRadian", function() {
        return n;
      }), l.d(d, "equals", function() {
        return G;
      });
      var s = 1e-6, c = typeof Float32Array < "u" ? Float32Array : Array, o = Math.random;
      function u(y) {
        c = y;
      }
      var e = Math.PI / 180;
      function n(y) {
        return y * e;
      }
      function G(y, a) {
        return Math.abs(y - a) <= s * Math.max(1, Math.abs(y), Math.abs(a));
      }
      Math.hypot || (Math.hypot = function() {
        for (var y = 0, a = arguments.length; a--; )
          y += arguments[a] * arguments[a];
        return Math.sqrt(y);
      });
    },
    /* 3 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "copy", function() {
        return u;
      }), l.d(d, "identity", function() {
        return e;
      }), l.d(d, "fromValues", function() {
        return n;
      }), l.d(d, "set", function() {
        return G;
      }), l.d(d, "transpose", function() {
        return y;
      }), l.d(d, "invert", function() {
        return a;
      }), l.d(d, "adjoint", function() {
        return I;
      }), l.d(d, "determinant", function() {
        return h;
      }), l.d(d, "multiply", function() {
        return S;
      }), l.d(d, "rotate", function() {
        return p;
      }), l.d(d, "scale", function() {
        return X;
      }), l.d(d, "fromRotation", function() {
        return V;
      }), l.d(d, "fromScaling", function() {
        return i;
      }), l.d(d, "str", function() {
        return b;
      }), l.d(d, "frob", function() {
        return t;
      }), l.d(d, "LDU", function() {
        return m;
      }), l.d(d, "add", function() {
        return K;
      }), l.d(d, "subtract", function() {
        return x;
      }), l.d(d, "exactEquals", function() {
        return C;
      }), l.d(d, "equals", function() {
        return T;
      }), l.d(d, "multiplyScalar", function() {
        return R;
      }), l.d(d, "multiplyScalarAndAdd", function() {
        return J;
      }), l.d(d, "mul", function() {
        return F;
      }), l.d(d, "sub", function() {
        return r;
      });
      var s = l(2);
      function c() {
        var Y = new s.ARRAY_TYPE(4);
        return s.ARRAY_TYPE != Float32Array && (Y[1] = 0, Y[2] = 0), Y[0] = 1, Y[3] = 1, Y;
      }
      function o(Y) {
        var H = new s.ARRAY_TYPE(4);
        return H[0] = Y[0], H[1] = Y[1], H[2] = Y[2], H[3] = Y[3], H;
      }
      function u(Y, H) {
        return Y[0] = H[0], Y[1] = H[1], Y[2] = H[2], Y[3] = H[3], Y;
      }
      function e(Y) {
        return Y[0] = 1, Y[1] = 0, Y[2] = 0, Y[3] = 1, Y;
      }
      function n(Y, H, Q, w) {
        var O = new s.ARRAY_TYPE(4);
        return O[0] = Y, O[1] = H, O[2] = Q, O[3] = w, O;
      }
      function G(Y, H, Q, w, O) {
        return Y[0] = H, Y[1] = Q, Y[2] = w, Y[3] = O, Y;
      }
      function y(Y, H) {
        if (Y === H) {
          var Q = H[1];
          Y[1] = H[2], Y[2] = Q;
        } else
          Y[0] = H[0], Y[1] = H[2], Y[2] = H[1], Y[3] = H[3];
        return Y;
      }
      function a(Y, H) {
        var Q = H[0], w = H[1], O = H[2], q = H[3], k = Q * q - O * w;
        return k ? (k = 1 / k, Y[0] = q * k, Y[1] = -w * k, Y[2] = -O * k, Y[3] = Q * k, Y) : null;
      }
      function I(Y, H) {
        var Q = H[0];
        return Y[0] = H[3], Y[1] = -H[1], Y[2] = -H[2], Y[3] = Q, Y;
      }
      function h(Y) {
        return Y[0] * Y[3] - Y[2] * Y[1];
      }
      function S(Y, H, Q) {
        var w = H[0], O = H[1], q = H[2], k = H[3], P = Q[0], D = Q[1], ll = Q[2], _ = Q[3];
        return Y[0] = w * P + q * D, Y[1] = O * P + k * D, Y[2] = w * ll + q * _, Y[3] = O * ll + k * _, Y;
      }
      function p(Y, H, Q) {
        var w = H[0], O = H[1], q = H[2], k = H[3], P = Math.sin(Q), D = Math.cos(Q);
        return Y[0] = w * D + q * P, Y[1] = O * D + k * P, Y[2] = w * -P + q * D, Y[3] = O * -P + k * D, Y;
      }
      function X(Y, H, Q) {
        var w = H[0], O = H[1], q = H[2], k = H[3], P = Q[0], D = Q[1];
        return Y[0] = w * P, Y[1] = O * P, Y[2] = q * D, Y[3] = k * D, Y;
      }
      function V(Y, H) {
        var Q = Math.sin(H), w = Math.cos(H);
        return Y[0] = w, Y[1] = Q, Y[2] = -Q, Y[3] = w, Y;
      }
      function i(Y, H) {
        return Y[0] = H[0], Y[1] = 0, Y[2] = 0, Y[3] = H[1], Y;
      }
      function b(Y) {
        return "mat2(" + Y[0] + ", " + Y[1] + ", " + Y[2] + ", " + Y[3] + ")";
      }
      function t(Y) {
        return Math.hypot(Y[0], Y[1], Y[2], Y[3]);
      }
      function m(Y, H, Q, w) {
        return Y[2] = w[2] / w[0], Q[0] = w[0], Q[1] = w[1], Q[3] = w[3] - Y[2] * Q[1], [Y, H, Q];
      }
      function K(Y, H, Q) {
        return Y[0] = H[0] + Q[0], Y[1] = H[1] + Q[1], Y[2] = H[2] + Q[2], Y[3] = H[3] + Q[3], Y;
      }
      function x(Y, H, Q) {
        return Y[0] = H[0] - Q[0], Y[1] = H[1] - Q[1], Y[2] = H[2] - Q[2], Y[3] = H[3] - Q[3], Y;
      }
      function C(Y, H) {
        return Y[0] === H[0] && Y[1] === H[1] && Y[2] === H[2] && Y[3] === H[3];
      }
      function T(Y, H) {
        var Q = Y[0], w = Y[1], O = Y[2], q = Y[3], k = H[0], P = H[1], D = H[2], ll = H[3];
        return Math.abs(Q - k) <= s.EPSILON * Math.max(1, Math.abs(Q), Math.abs(k)) && Math.abs(w - P) <= s.EPSILON * Math.max(1, Math.abs(w), Math.abs(P)) && Math.abs(O - D) <= s.EPSILON * Math.max(1, Math.abs(O), Math.abs(D)) && Math.abs(q - ll) <= s.EPSILON * Math.max(1, Math.abs(q), Math.abs(ll));
      }
      function R(Y, H, Q) {
        return Y[0] = H[0] * Q, Y[1] = H[1] * Q, Y[2] = H[2] * Q, Y[3] = H[3] * Q, Y;
      }
      function J(Y, H, Q, w) {
        return Y[0] = H[0] + Q[0] * w, Y[1] = H[1] + Q[1] * w, Y[2] = H[2] + Q[2] * w, Y[3] = H[3] + Q[3] * w, Y;
      }
      var F = S, r = x;
    },
    /* 4 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "copy", function() {
        return u;
      }), l.d(d, "identity", function() {
        return e;
      }), l.d(d, "fromValues", function() {
        return n;
      }), l.d(d, "set", function() {
        return G;
      }), l.d(d, "invert", function() {
        return y;
      }), l.d(d, "determinant", function() {
        return a;
      }), l.d(d, "multiply", function() {
        return I;
      }), l.d(d, "rotate", function() {
        return h;
      }), l.d(d, "scale", function() {
        return S;
      }), l.d(d, "translate", function() {
        return p;
      }), l.d(d, "fromRotation", function() {
        return X;
      }), l.d(d, "fromScaling", function() {
        return V;
      }), l.d(d, "fromTranslation", function() {
        return i;
      }), l.d(d, "str", function() {
        return b;
      }), l.d(d, "frob", function() {
        return t;
      }), l.d(d, "add", function() {
        return m;
      }), l.d(d, "subtract", function() {
        return K;
      }), l.d(d, "multiplyScalar", function() {
        return x;
      }), l.d(d, "multiplyScalarAndAdd", function() {
        return C;
      }), l.d(d, "exactEquals", function() {
        return T;
      }), l.d(d, "equals", function() {
        return R;
      }), l.d(d, "mul", function() {
        return J;
      }), l.d(d, "sub", function() {
        return F;
      });
      var s = l(2);
      function c() {
        var r = new s.ARRAY_TYPE(6);
        return s.ARRAY_TYPE != Float32Array && (r[1] = 0, r[2] = 0, r[4] = 0, r[5] = 0), r[0] = 1, r[3] = 1, r;
      }
      function o(r) {
        var Y = new s.ARRAY_TYPE(6);
        return Y[0] = r[0], Y[1] = r[1], Y[2] = r[2], Y[3] = r[3], Y[4] = r[4], Y[5] = r[5], Y;
      }
      function u(r, Y) {
        return r[0] = Y[0], r[1] = Y[1], r[2] = Y[2], r[3] = Y[3], r[4] = Y[4], r[5] = Y[5], r;
      }
      function e(r) {
        return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = 0, r[5] = 0, r;
      }
      function n(r, Y, H, Q, w, O) {
        var q = new s.ARRAY_TYPE(6);
        return q[0] = r, q[1] = Y, q[2] = H, q[3] = Q, q[4] = w, q[5] = O, q;
      }
      function G(r, Y, H, Q, w, O, q) {
        return r[0] = Y, r[1] = H, r[2] = Q, r[3] = w, r[4] = O, r[5] = q, r;
      }
      function y(r, Y) {
        var H = Y[0], Q = Y[1], w = Y[2], O = Y[3], q = Y[4], k = Y[5], P = H * O - Q * w;
        return P ? (P = 1 / P, r[0] = O * P, r[1] = -Q * P, r[2] = -w * P, r[3] = H * P, r[4] = (w * k - O * q) * P, r[5] = (Q * q - H * k) * P, r) : null;
      }
      function a(r) {
        return r[0] * r[3] - r[1] * r[2];
      }
      function I(r, Y, H) {
        var Q = Y[0], w = Y[1], O = Y[2], q = Y[3], k = Y[4], P = Y[5], D = H[0], ll = H[1], _ = H[2], bl = H[3], $ = H[4], el = H[5];
        return r[0] = Q * D + O * ll, r[1] = w * D + q * ll, r[2] = Q * _ + O * bl, r[3] = w * _ + q * bl, r[4] = Q * $ + O * el + k, r[5] = w * $ + q * el + P, r;
      }
      function h(r, Y, H) {
        var Q = Y[0], w = Y[1], O = Y[2], q = Y[3], k = Y[4], P = Y[5], D = Math.sin(H), ll = Math.cos(H);
        return r[0] = Q * ll + O * D, r[1] = w * ll + q * D, r[2] = Q * -D + O * ll, r[3] = w * -D + q * ll, r[4] = k, r[5] = P, r;
      }
      function S(r, Y, H) {
        var Q = Y[0], w = Y[1], O = Y[2], q = Y[3], k = Y[4], P = Y[5], D = H[0], ll = H[1];
        return r[0] = Q * D, r[1] = w * D, r[2] = O * ll, r[3] = q * ll, r[4] = k, r[5] = P, r;
      }
      function p(r, Y, H) {
        var Q = Y[0], w = Y[1], O = Y[2], q = Y[3], k = Y[4], P = Y[5], D = H[0], ll = H[1];
        return r[0] = Q, r[1] = w, r[2] = O, r[3] = q, r[4] = Q * D + O * ll + k, r[5] = w * D + q * ll + P, r;
      }
      function X(r, Y) {
        var H = Math.sin(Y), Q = Math.cos(Y);
        return r[0] = Q, r[1] = H, r[2] = -H, r[3] = Q, r[4] = 0, r[5] = 0, r;
      }
      function V(r, Y) {
        return r[0] = Y[0], r[1] = 0, r[2] = 0, r[3] = Y[1], r[4] = 0, r[5] = 0, r;
      }
      function i(r, Y) {
        return r[0] = 1, r[1] = 0, r[2] = 0, r[3] = 1, r[4] = Y[0], r[5] = Y[1], r;
      }
      function b(r) {
        return "mat2d(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + r[3] + ", " + r[4] + ", " + r[5] + ")";
      }
      function t(r) {
        return Math.hypot(r[0], r[1], r[2], r[3], r[4], r[5], 1);
      }
      function m(r, Y, H) {
        return r[0] = Y[0] + H[0], r[1] = Y[1] + H[1], r[2] = Y[2] + H[2], r[3] = Y[3] + H[3], r[4] = Y[4] + H[4], r[5] = Y[5] + H[5], r;
      }
      function K(r, Y, H) {
        return r[0] = Y[0] - H[0], r[1] = Y[1] - H[1], r[2] = Y[2] - H[2], r[3] = Y[3] - H[3], r[4] = Y[4] - H[4], r[5] = Y[5] - H[5], r;
      }
      function x(r, Y, H) {
        return r[0] = Y[0] * H, r[1] = Y[1] * H, r[2] = Y[2] * H, r[3] = Y[3] * H, r[4] = Y[4] * H, r[5] = Y[5] * H, r;
      }
      function C(r, Y, H, Q) {
        return r[0] = Y[0] + H[0] * Q, r[1] = Y[1] + H[1] * Q, r[2] = Y[2] + H[2] * Q, r[3] = Y[3] + H[3] * Q, r[4] = Y[4] + H[4] * Q, r[5] = Y[5] + H[5] * Q, r;
      }
      function T(r, Y) {
        return r[0] === Y[0] && r[1] === Y[1] && r[2] === Y[2] && r[3] === Y[3] && r[4] === Y[4] && r[5] === Y[5];
      }
      function R(r, Y) {
        var H = r[0], Q = r[1], w = r[2], O = r[3], q = r[4], k = r[5], P = Y[0], D = Y[1], ll = Y[2], _ = Y[3], bl = Y[4], $ = Y[5];
        return Math.abs(H - P) <= s.EPSILON * Math.max(1, Math.abs(H), Math.abs(P)) && Math.abs(Q - D) <= s.EPSILON * Math.max(1, Math.abs(Q), Math.abs(D)) && Math.abs(w - ll) <= s.EPSILON * Math.max(1, Math.abs(w), Math.abs(ll)) && Math.abs(O - _) <= s.EPSILON * Math.max(1, Math.abs(O), Math.abs(_)) && Math.abs(q - bl) <= s.EPSILON * Math.max(1, Math.abs(q), Math.abs(bl)) && Math.abs(k - $) <= s.EPSILON * Math.max(1, Math.abs(k), Math.abs($));
      }
      var J = I, F = K;
    },
    /* 5 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "fromMat4", function() {
        return o;
      }), l.d(d, "clone", function() {
        return u;
      }), l.d(d, "copy", function() {
        return e;
      }), l.d(d, "fromValues", function() {
        return n;
      }), l.d(d, "set", function() {
        return G;
      }), l.d(d, "identity", function() {
        return y;
      }), l.d(d, "transpose", function() {
        return a;
      }), l.d(d, "invert", function() {
        return I;
      }), l.d(d, "adjoint", function() {
        return h;
      }), l.d(d, "determinant", function() {
        return S;
      }), l.d(d, "multiply", function() {
        return p;
      }), l.d(d, "translate", function() {
        return X;
      }), l.d(d, "rotate", function() {
        return V;
      }), l.d(d, "scale", function() {
        return i;
      }), l.d(d, "fromTranslation", function() {
        return b;
      }), l.d(d, "fromRotation", function() {
        return t;
      }), l.d(d, "fromScaling", function() {
        return m;
      }), l.d(d, "fromMat2d", function() {
        return K;
      }), l.d(d, "fromQuat", function() {
        return x;
      }), l.d(d, "normalFromMat4", function() {
        return C;
      }), l.d(d, "projection", function() {
        return T;
      }), l.d(d, "str", function() {
        return R;
      }), l.d(d, "frob", function() {
        return J;
      }), l.d(d, "add", function() {
        return F;
      }), l.d(d, "subtract", function() {
        return r;
      }), l.d(d, "multiplyScalar", function() {
        return Y;
      }), l.d(d, "multiplyScalarAndAdd", function() {
        return H;
      }), l.d(d, "exactEquals", function() {
        return Q;
      }), l.d(d, "equals", function() {
        return w;
      }), l.d(d, "mul", function() {
        return O;
      }), l.d(d, "sub", function() {
        return q;
      });
      var s = l(2);
      function c() {
        var k = new s.ARRAY_TYPE(9);
        return s.ARRAY_TYPE != Float32Array && (k[1] = 0, k[2] = 0, k[3] = 0, k[5] = 0, k[6] = 0, k[7] = 0), k[0] = 1, k[4] = 1, k[8] = 1, k;
      }
      function o(k, P) {
        return k[0] = P[0], k[1] = P[1], k[2] = P[2], k[3] = P[4], k[4] = P[5], k[5] = P[6], k[6] = P[8], k[7] = P[9], k[8] = P[10], k;
      }
      function u(k) {
        var P = new s.ARRAY_TYPE(9);
        return P[0] = k[0], P[1] = k[1], P[2] = k[2], P[3] = k[3], P[4] = k[4], P[5] = k[5], P[6] = k[6], P[7] = k[7], P[8] = k[8], P;
      }
      function e(k, P) {
        return k[0] = P[0], k[1] = P[1], k[2] = P[2], k[3] = P[3], k[4] = P[4], k[5] = P[5], k[6] = P[6], k[7] = P[7], k[8] = P[8], k;
      }
      function n(k, P, D, ll, _, bl, $, el, nl) {
        var z = new s.ARRAY_TYPE(9);
        return z[0] = k, z[1] = P, z[2] = D, z[3] = ll, z[4] = _, z[5] = bl, z[6] = $, z[7] = el, z[8] = nl, z;
      }
      function G(k, P, D, ll, _, bl, $, el, nl, z) {
        return k[0] = P, k[1] = D, k[2] = ll, k[3] = _, k[4] = bl, k[5] = $, k[6] = el, k[7] = nl, k[8] = z, k;
      }
      function y(k) {
        return k[0] = 1, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 1, k[5] = 0, k[6] = 0, k[7] = 0, k[8] = 1, k;
      }
      function a(k, P) {
        if (k === P) {
          var D = P[1], ll = P[2], _ = P[5];
          k[1] = P[3], k[2] = P[6], k[3] = D, k[5] = P[7], k[6] = ll, k[7] = _;
        } else
          k[0] = P[0], k[1] = P[3], k[2] = P[6], k[3] = P[1], k[4] = P[4], k[5] = P[7], k[6] = P[2], k[7] = P[5], k[8] = P[8];
        return k;
      }
      function I(k, P) {
        var D = P[0], ll = P[1], _ = P[2], bl = P[3], $ = P[4], el = P[5], nl = P[6], z = P[7], M = P[8], E = M * $ - el * z, B = -M * bl + el * nl, g = z * bl - $ * nl, U = D * E + ll * B + _ * g;
        return U ? (U = 1 / U, k[0] = E * U, k[1] = (-M * ll + _ * z) * U, k[2] = (el * ll - _ * $) * U, k[3] = B * U, k[4] = (M * D - _ * nl) * U, k[5] = (-el * D + _ * bl) * U, k[6] = g * U, k[7] = (-z * D + ll * nl) * U, k[8] = ($ * D - ll * bl) * U, k) : null;
      }
      function h(k, P) {
        var D = P[0], ll = P[1], _ = P[2], bl = P[3], $ = P[4], el = P[5], nl = P[6], z = P[7], M = P[8];
        return k[0] = $ * M - el * z, k[1] = _ * z - ll * M, k[2] = ll * el - _ * $, k[3] = el * nl - bl * M, k[4] = D * M - _ * nl, k[5] = _ * bl - D * el, k[6] = bl * z - $ * nl, k[7] = ll * nl - D * z, k[8] = D * $ - ll * bl, k;
      }
      function S(k) {
        var P = k[0], D = k[1], ll = k[2], _ = k[3], bl = k[4], $ = k[5], el = k[6], nl = k[7], z = k[8];
        return P * (z * bl - $ * nl) + D * (-z * _ + $ * el) + ll * (nl * _ - bl * el);
      }
      function p(k, P, D) {
        var ll = P[0], _ = P[1], bl = P[2], $ = P[3], el = P[4], nl = P[5], z = P[6], M = P[7], E = P[8], B = D[0], g = D[1], U = D[2], W = D[3], L = D[4], N = D[5], v = D[6], f = D[7], j = D[8];
        return k[0] = B * ll + g * $ + U * z, k[1] = B * _ + g * el + U * M, k[2] = B * bl + g * nl + U * E, k[3] = W * ll + L * $ + N * z, k[4] = W * _ + L * el + N * M, k[5] = W * bl + L * nl + N * E, k[6] = v * ll + f * $ + j * z, k[7] = v * _ + f * el + j * M, k[8] = v * bl + f * nl + j * E, k;
      }
      function X(k, P, D) {
        var ll = P[0], _ = P[1], bl = P[2], $ = P[3], el = P[4], nl = P[5], z = P[6], M = P[7], E = P[8], B = D[0], g = D[1];
        return k[0] = ll, k[1] = _, k[2] = bl, k[3] = $, k[4] = el, k[5] = nl, k[6] = B * ll + g * $ + z, k[7] = B * _ + g * el + M, k[8] = B * bl + g * nl + E, k;
      }
      function V(k, P, D) {
        var ll = P[0], _ = P[1], bl = P[2], $ = P[3], el = P[4], nl = P[5], z = P[6], M = P[7], E = P[8], B = Math.sin(D), g = Math.cos(D);
        return k[0] = g * ll + B * $, k[1] = g * _ + B * el, k[2] = g * bl + B * nl, k[3] = g * $ - B * ll, k[4] = g * el - B * _, k[5] = g * nl - B * bl, k[6] = z, k[7] = M, k[8] = E, k;
      }
      function i(k, P, D) {
        var ll = D[0], _ = D[1];
        return k[0] = ll * P[0], k[1] = ll * P[1], k[2] = ll * P[2], k[3] = _ * P[3], k[4] = _ * P[4], k[5] = _ * P[5], k[6] = P[6], k[7] = P[7], k[8] = P[8], k;
      }
      function b(k, P) {
        return k[0] = 1, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = 1, k[5] = 0, k[6] = P[0], k[7] = P[1], k[8] = 1, k;
      }
      function t(k, P) {
        var D = Math.sin(P), ll = Math.cos(P);
        return k[0] = ll, k[1] = D, k[2] = 0, k[3] = -D, k[4] = ll, k[5] = 0, k[6] = 0, k[7] = 0, k[8] = 1, k;
      }
      function m(k, P) {
        return k[0] = P[0], k[1] = 0, k[2] = 0, k[3] = 0, k[4] = P[1], k[5] = 0, k[6] = 0, k[7] = 0, k[8] = 1, k;
      }
      function K(k, P) {
        return k[0] = P[0], k[1] = P[1], k[2] = 0, k[3] = P[2], k[4] = P[3], k[5] = 0, k[6] = P[4], k[7] = P[5], k[8] = 1, k;
      }
      function x(k, P) {
        var D = P[0], ll = P[1], _ = P[2], bl = P[3], $ = D + D, el = ll + ll, nl = _ + _, z = D * $, M = ll * $, E = ll * el, B = _ * $, g = _ * el, U = _ * nl, W = bl * $, L = bl * el, N = bl * nl;
        return k[0] = 1 - E - U, k[3] = M - N, k[6] = B + L, k[1] = M + N, k[4] = 1 - z - U, k[7] = g - W, k[2] = B - L, k[5] = g + W, k[8] = 1 - z - E, k;
      }
      function C(k, P) {
        var D = P[0], ll = P[1], _ = P[2], bl = P[3], $ = P[4], el = P[5], nl = P[6], z = P[7], M = P[8], E = P[9], B = P[10], g = P[11], U = P[12], W = P[13], L = P[14], N = P[15], v = D * el - ll * $, f = D * nl - _ * $, j = D * z - bl * $, A = ll * nl - _ * el, dl = ll * z - bl * el, il = _ * z - bl * nl, cl = M * W - E * U, ml = M * L - B * U, tl = M * N - g * U, sl = E * L - B * W, Zl = E * N - g * W, al = B * N - g * L, ol = v * al - f * Zl + j * sl + A * tl - dl * ml + il * cl;
        return ol ? (ol = 1 / ol, k[0] = (el * al - nl * Zl + z * sl) * ol, k[1] = (nl * tl - $ * al - z * ml) * ol, k[2] = ($ * Zl - el * tl + z * cl) * ol, k[3] = (_ * Zl - ll * al - bl * sl) * ol, k[4] = (D * al - _ * tl + bl * ml) * ol, k[5] = (ll * tl - D * Zl - bl * cl) * ol, k[6] = (W * il - L * dl + N * A) * ol, k[7] = (L * j - U * il - N * f) * ol, k[8] = (U * dl - W * j + N * v) * ol, k) : null;
      }
      function T(k, P, D) {
        return k[0] = 2 / P, k[1] = 0, k[2] = 0, k[3] = 0, k[4] = -2 / D, k[5] = 0, k[6] = -1, k[7] = 1, k[8] = 1, k;
      }
      function R(k) {
        return "mat3(" + k[0] + ", " + k[1] + ", " + k[2] + ", " + k[3] + ", " + k[4] + ", " + k[5] + ", " + k[6] + ", " + k[7] + ", " + k[8] + ")";
      }
      function J(k) {
        return Math.hypot(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8]);
      }
      function F(k, P, D) {
        return k[0] = P[0] + D[0], k[1] = P[1] + D[1], k[2] = P[2] + D[2], k[3] = P[3] + D[3], k[4] = P[4] + D[4], k[5] = P[5] + D[5], k[6] = P[6] + D[6], k[7] = P[7] + D[7], k[8] = P[8] + D[8], k;
      }
      function r(k, P, D) {
        return k[0] = P[0] - D[0], k[1] = P[1] - D[1], k[2] = P[2] - D[2], k[3] = P[3] - D[3], k[4] = P[4] - D[4], k[5] = P[5] - D[5], k[6] = P[6] - D[6], k[7] = P[7] - D[7], k[8] = P[8] - D[8], k;
      }
      function Y(k, P, D) {
        return k[0] = P[0] * D, k[1] = P[1] * D, k[2] = P[2] * D, k[3] = P[3] * D, k[4] = P[4] * D, k[5] = P[5] * D, k[6] = P[6] * D, k[7] = P[7] * D, k[8] = P[8] * D, k;
      }
      function H(k, P, D, ll) {
        return k[0] = P[0] + D[0] * ll, k[1] = P[1] + D[1] * ll, k[2] = P[2] + D[2] * ll, k[3] = P[3] + D[3] * ll, k[4] = P[4] + D[4] * ll, k[5] = P[5] + D[5] * ll, k[6] = P[6] + D[6] * ll, k[7] = P[7] + D[7] * ll, k[8] = P[8] + D[8] * ll, k;
      }
      function Q(k, P) {
        return k[0] === P[0] && k[1] === P[1] && k[2] === P[2] && k[3] === P[3] && k[4] === P[4] && k[5] === P[5] && k[6] === P[6] && k[7] === P[7] && k[8] === P[8];
      }
      function w(k, P) {
        var D = k[0], ll = k[1], _ = k[2], bl = k[3], $ = k[4], el = k[5], nl = k[6], z = k[7], M = k[8], E = P[0], B = P[1], g = P[2], U = P[3], W = P[4], L = P[5], N = P[6], v = P[7], f = P[8];
        return Math.abs(D - E) <= s.EPSILON * Math.max(1, Math.abs(D), Math.abs(E)) && Math.abs(ll - B) <= s.EPSILON * Math.max(1, Math.abs(ll), Math.abs(B)) && Math.abs(_ - g) <= s.EPSILON * Math.max(1, Math.abs(_), Math.abs(g)) && Math.abs(bl - U) <= s.EPSILON * Math.max(1, Math.abs(bl), Math.abs(U)) && Math.abs($ - W) <= s.EPSILON * Math.max(1, Math.abs($), Math.abs(W)) && Math.abs(el - L) <= s.EPSILON * Math.max(1, Math.abs(el), Math.abs(L)) && Math.abs(nl - N) <= s.EPSILON * Math.max(1, Math.abs(nl), Math.abs(N)) && Math.abs(z - v) <= s.EPSILON * Math.max(1, Math.abs(z), Math.abs(v)) && Math.abs(M - f) <= s.EPSILON * Math.max(1, Math.abs(M), Math.abs(f));
      }
      var O = p, q = r;
    },
    /* 6 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "copy", function() {
        return u;
      }), l.d(d, "fromValues", function() {
        return e;
      }), l.d(d, "set", function() {
        return n;
      }), l.d(d, "identity", function() {
        return G;
      }), l.d(d, "transpose", function() {
        return y;
      }), l.d(d, "invert", function() {
        return a;
      }), l.d(d, "adjoint", function() {
        return I;
      }), l.d(d, "determinant", function() {
        return h;
      }), l.d(d, "multiply", function() {
        return S;
      }), l.d(d, "translate", function() {
        return p;
      }), l.d(d, "scale", function() {
        return X;
      }), l.d(d, "rotate", function() {
        return V;
      }), l.d(d, "rotateX", function() {
        return i;
      }), l.d(d, "rotateY", function() {
        return b;
      }), l.d(d, "rotateZ", function() {
        return t;
      }), l.d(d, "fromTranslation", function() {
        return m;
      }), l.d(d, "fromScaling", function() {
        return K;
      }), l.d(d, "fromRotation", function() {
        return x;
      }), l.d(d, "fromXRotation", function() {
        return C;
      }), l.d(d, "fromYRotation", function() {
        return T;
      }), l.d(d, "fromZRotation", function() {
        return R;
      }), l.d(d, "fromRotationTranslation", function() {
        return J;
      }), l.d(d, "fromQuat2", function() {
        return F;
      }), l.d(d, "getTranslation", function() {
        return r;
      }), l.d(d, "getScaling", function() {
        return Y;
      }), l.d(d, "getRotation", function() {
        return H;
      }), l.d(d, "fromRotationTranslationScale", function() {
        return Q;
      }), l.d(d, "fromRotationTranslationScaleOrigin", function() {
        return w;
      }), l.d(d, "fromQuat", function() {
        return O;
      }), l.d(d, "frustum", function() {
        return q;
      }), l.d(d, "perspective", function() {
        return k;
      }), l.d(d, "perspectiveFromFieldOfView", function() {
        return P;
      }), l.d(d, "ortho", function() {
        return D;
      }), l.d(d, "lookAt", function() {
        return ll;
      }), l.d(d, "targetTo", function() {
        return _;
      }), l.d(d, "str", function() {
        return bl;
      }), l.d(d, "frob", function() {
        return $;
      }), l.d(d, "add", function() {
        return el;
      }), l.d(d, "subtract", function() {
        return nl;
      }), l.d(d, "multiplyScalar", function() {
        return z;
      }), l.d(d, "multiplyScalarAndAdd", function() {
        return M;
      }), l.d(d, "exactEquals", function() {
        return E;
      }), l.d(d, "equals", function() {
        return B;
      }), l.d(d, "mul", function() {
        return g;
      }), l.d(d, "sub", function() {
        return U;
      });
      var s = l(2);
      function c() {
        var W = new s.ARRAY_TYPE(16);
        return s.ARRAY_TYPE != Float32Array && (W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0), W[0] = 1, W[5] = 1, W[10] = 1, W[15] = 1, W;
      }
      function o(W) {
        var L = new s.ARRAY_TYPE(16);
        return L[0] = W[0], L[1] = W[1], L[2] = W[2], L[3] = W[3], L[4] = W[4], L[5] = W[5], L[6] = W[6], L[7] = W[7], L[8] = W[8], L[9] = W[9], L[10] = W[10], L[11] = W[11], L[12] = W[12], L[13] = W[13], L[14] = W[14], L[15] = W[15], L;
      }
      function u(W, L) {
        return W[0] = L[0], W[1] = L[1], W[2] = L[2], W[3] = L[3], W[4] = L[4], W[5] = L[5], W[6] = L[6], W[7] = L[7], W[8] = L[8], W[9] = L[9], W[10] = L[10], W[11] = L[11], W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15], W;
      }
      function e(W, L, N, v, f, j, A, dl, il, cl, ml, tl, sl, Zl, al, ol) {
        var Xl = new s.ARRAY_TYPE(16);
        return Xl[0] = W, Xl[1] = L, Xl[2] = N, Xl[3] = v, Xl[4] = f, Xl[5] = j, Xl[6] = A, Xl[7] = dl, Xl[8] = il, Xl[9] = cl, Xl[10] = ml, Xl[11] = tl, Xl[12] = sl, Xl[13] = Zl, Xl[14] = al, Xl[15] = ol, Xl;
      }
      function n(W, L, N, v, f, j, A, dl, il, cl, ml, tl, sl, Zl, al, ol, Xl) {
        return W[0] = L, W[1] = N, W[2] = v, W[3] = f, W[4] = j, W[5] = A, W[6] = dl, W[7] = il, W[8] = cl, W[9] = ml, W[10] = tl, W[11] = sl, W[12] = Zl, W[13] = al, W[14] = ol, W[15] = Xl, W;
      }
      function G(W) {
        return W[0] = 1, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = 1, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[10] = 1, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function y(W, L) {
        if (W === L) {
          var N = L[1], v = L[2], f = L[3], j = L[6], A = L[7], dl = L[11];
          W[1] = L[4], W[2] = L[8], W[3] = L[12], W[4] = N, W[6] = L[9], W[7] = L[13], W[8] = v, W[9] = j, W[11] = L[14], W[12] = f, W[13] = A, W[14] = dl;
        } else
          W[0] = L[0], W[1] = L[4], W[2] = L[8], W[3] = L[12], W[4] = L[1], W[5] = L[5], W[6] = L[9], W[7] = L[13], W[8] = L[2], W[9] = L[6], W[10] = L[10], W[11] = L[14], W[12] = L[3], W[13] = L[7], W[14] = L[11], W[15] = L[15];
        return W;
      }
      function a(W, L) {
        var N = L[0], v = L[1], f = L[2], j = L[3], A = L[4], dl = L[5], il = L[6], cl = L[7], ml = L[8], tl = L[9], sl = L[10], Zl = L[11], al = L[12], ol = L[13], Xl = L[14], Gl = L[15], xl = N * dl - v * A, Rl = N * il - f * A, Kl = N * cl - j * A, Yl = v * il - f * dl, Sl = v * cl - j * dl, Ql = f * cl - j * il, kl = ml * ol - tl * al, vl = ml * Xl - sl * al, Ul = ml * Gl - Zl * al, Pl = tl * Xl - sl * ol, fl = tl * Gl - Zl * ol, wl = sl * Gl - Zl * Xl, Tl = xl * wl - Rl * fl + Kl * Pl + Yl * Ul - Sl * vl + Ql * kl;
        return Tl ? (Tl = 1 / Tl, W[0] = (dl * wl - il * fl + cl * Pl) * Tl, W[1] = (f * fl - v * wl - j * Pl) * Tl, W[2] = (ol * Ql - Xl * Sl + Gl * Yl) * Tl, W[3] = (sl * Sl - tl * Ql - Zl * Yl) * Tl, W[4] = (il * Ul - A * wl - cl * vl) * Tl, W[5] = (N * wl - f * Ul + j * vl) * Tl, W[6] = (Xl * Kl - al * Ql - Gl * Rl) * Tl, W[7] = (ml * Ql - sl * Kl + Zl * Rl) * Tl, W[8] = (A * fl - dl * Ul + cl * kl) * Tl, W[9] = (v * Ul - N * fl - j * kl) * Tl, W[10] = (al * Sl - ol * Kl + Gl * xl) * Tl, W[11] = (tl * Kl - ml * Sl - Zl * xl) * Tl, W[12] = (dl * vl - A * Pl - il * kl) * Tl, W[13] = (N * Pl - v * vl + f * kl) * Tl, W[14] = (ol * Rl - al * Yl - Xl * xl) * Tl, W[15] = (ml * Yl - tl * Rl + sl * xl) * Tl, W) : null;
      }
      function I(W, L) {
        var N = L[0], v = L[1], f = L[2], j = L[3], A = L[4], dl = L[5], il = L[6], cl = L[7], ml = L[8], tl = L[9], sl = L[10], Zl = L[11], al = L[12], ol = L[13], Xl = L[14], Gl = L[15];
        return W[0] = dl * (sl * Gl - Zl * Xl) - tl * (il * Gl - cl * Xl) + ol * (il * Zl - cl * sl), W[1] = -(v * (sl * Gl - Zl * Xl) - tl * (f * Gl - j * Xl) + ol * (f * Zl - j * sl)), W[2] = v * (il * Gl - cl * Xl) - dl * (f * Gl - j * Xl) + ol * (f * cl - j * il), W[3] = -(v * (il * Zl - cl * sl) - dl * (f * Zl - j * sl) + tl * (f * cl - j * il)), W[4] = -(A * (sl * Gl - Zl * Xl) - ml * (il * Gl - cl * Xl) + al * (il * Zl - cl * sl)), W[5] = N * (sl * Gl - Zl * Xl) - ml * (f * Gl - j * Xl) + al * (f * Zl - j * sl), W[6] = -(N * (il * Gl - cl * Xl) - A * (f * Gl - j * Xl) + al * (f * cl - j * il)), W[7] = N * (il * Zl - cl * sl) - A * (f * Zl - j * sl) + ml * (f * cl - j * il), W[8] = A * (tl * Gl - Zl * ol) - ml * (dl * Gl - cl * ol) + al * (dl * Zl - cl * tl), W[9] = -(N * (tl * Gl - Zl * ol) - ml * (v * Gl - j * ol) + al * (v * Zl - j * tl)), W[10] = N * (dl * Gl - cl * ol) - A * (v * Gl - j * ol) + al * (v * cl - j * dl), W[11] = -(N * (dl * Zl - cl * tl) - A * (v * Zl - j * tl) + ml * (v * cl - j * dl)), W[12] = -(A * (tl * Xl - sl * ol) - ml * (dl * Xl - il * ol) + al * (dl * sl - il * tl)), W[13] = N * (tl * Xl - sl * ol) - ml * (v * Xl - f * ol) + al * (v * sl - f * tl), W[14] = -(N * (dl * Xl - il * ol) - A * (v * Xl - f * ol) + al * (v * il - f * dl)), W[15] = N * (dl * sl - il * tl) - A * (v * sl - f * tl) + ml * (v * il - f * dl), W;
      }
      function h(W) {
        var L = W[0], N = W[1], v = W[2], f = W[3], j = W[4], A = W[5], dl = W[6], il = W[7], cl = W[8], ml = W[9], tl = W[10], sl = W[11], Zl = W[12], al = W[13], ol = W[14], Xl = W[15], Gl = L * A - N * j, xl = L * dl - v * j, Rl = L * il - f * j, Kl = N * dl - v * A, Yl = N * il - f * A, Sl = v * il - f * dl, Ql = cl * al - ml * Zl, kl = cl * ol - tl * Zl, vl = cl * Xl - sl * Zl, Ul = ml * ol - tl * al, Pl = ml * Xl - sl * al, fl = tl * Xl - sl * ol;
        return Gl * fl - xl * Pl + Rl * Ul + Kl * vl - Yl * kl + Sl * Ql;
      }
      function S(W, L, N) {
        var v = L[0], f = L[1], j = L[2], A = L[3], dl = L[4], il = L[5], cl = L[6], ml = L[7], tl = L[8], sl = L[9], Zl = L[10], al = L[11], ol = L[12], Xl = L[13], Gl = L[14], xl = L[15], Rl = N[0], Kl = N[1], Yl = N[2], Sl = N[3];
        return W[0] = Rl * v + Kl * dl + Yl * tl + Sl * ol, W[1] = Rl * f + Kl * il + Yl * sl + Sl * Xl, W[2] = Rl * j + Kl * cl + Yl * Zl + Sl * Gl, W[3] = Rl * A + Kl * ml + Yl * al + Sl * xl, Rl = N[4], Kl = N[5], Yl = N[6], Sl = N[7], W[4] = Rl * v + Kl * dl + Yl * tl + Sl * ol, W[5] = Rl * f + Kl * il + Yl * sl + Sl * Xl, W[6] = Rl * j + Kl * cl + Yl * Zl + Sl * Gl, W[7] = Rl * A + Kl * ml + Yl * al + Sl * xl, Rl = N[8], Kl = N[9], Yl = N[10], Sl = N[11], W[8] = Rl * v + Kl * dl + Yl * tl + Sl * ol, W[9] = Rl * f + Kl * il + Yl * sl + Sl * Xl, W[10] = Rl * j + Kl * cl + Yl * Zl + Sl * Gl, W[11] = Rl * A + Kl * ml + Yl * al + Sl * xl, Rl = N[12], Kl = N[13], Yl = N[14], Sl = N[15], W[12] = Rl * v + Kl * dl + Yl * tl + Sl * ol, W[13] = Rl * f + Kl * il + Yl * sl + Sl * Xl, W[14] = Rl * j + Kl * cl + Yl * Zl + Sl * Gl, W[15] = Rl * A + Kl * ml + Yl * al + Sl * xl, W;
      }
      function p(W, L, N) {
        var v = N[0], f = N[1], j = N[2], A, dl, il, cl, ml, tl, sl, Zl, al, ol, Xl, Gl;
        return L === W ? (W[12] = L[0] * v + L[4] * f + L[8] * j + L[12], W[13] = L[1] * v + L[5] * f + L[9] * j + L[13], W[14] = L[2] * v + L[6] * f + L[10] * j + L[14], W[15] = L[3] * v + L[7] * f + L[11] * j + L[15]) : (A = L[0], dl = L[1], il = L[2], cl = L[3], ml = L[4], tl = L[5], sl = L[6], Zl = L[7], al = L[8], ol = L[9], Xl = L[10], Gl = L[11], W[0] = A, W[1] = dl, W[2] = il, W[3] = cl, W[4] = ml, W[5] = tl, W[6] = sl, W[7] = Zl, W[8] = al, W[9] = ol, W[10] = Xl, W[11] = Gl, W[12] = A * v + ml * f + al * j + L[12], W[13] = dl * v + tl * f + ol * j + L[13], W[14] = il * v + sl * f + Xl * j + L[14], W[15] = cl * v + Zl * f + Gl * j + L[15]), W;
      }
      function X(W, L, N) {
        var v = N[0], f = N[1], j = N[2];
        return W[0] = L[0] * v, W[1] = L[1] * v, W[2] = L[2] * v, W[3] = L[3] * v, W[4] = L[4] * f, W[5] = L[5] * f, W[6] = L[6] * f, W[7] = L[7] * f, W[8] = L[8] * j, W[9] = L[9] * j, W[10] = L[10] * j, W[11] = L[11] * j, W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15], W;
      }
      function V(W, L, N, v) {
        var f = v[0], j = v[1], A = v[2], dl = Math.hypot(f, j, A), il, cl, ml, tl, sl, Zl, al, ol, Xl, Gl, xl, Rl, Kl, Yl, Sl, Ql, kl, vl, Ul, Pl, fl, wl, Tl, Dl;
        return dl < s.EPSILON ? null : (dl = 1 / dl, f *= dl, j *= dl, A *= dl, il = Math.sin(N), cl = Math.cos(N), ml = 1 - cl, tl = L[0], sl = L[1], Zl = L[2], al = L[3], ol = L[4], Xl = L[5], Gl = L[6], xl = L[7], Rl = L[8], Kl = L[9], Yl = L[10], Sl = L[11], Ql = f * f * ml + cl, kl = j * f * ml + A * il, vl = A * f * ml - j * il, Ul = f * j * ml - A * il, Pl = j * j * ml + cl, fl = A * j * ml + f * il, wl = f * A * ml + j * il, Tl = j * A * ml - f * il, Dl = A * A * ml + cl, W[0] = tl * Ql + ol * kl + Rl * vl, W[1] = sl * Ql + Xl * kl + Kl * vl, W[2] = Zl * Ql + Gl * kl + Yl * vl, W[3] = al * Ql + xl * kl + Sl * vl, W[4] = tl * Ul + ol * Pl + Rl * fl, W[5] = sl * Ul + Xl * Pl + Kl * fl, W[6] = Zl * Ul + Gl * Pl + Yl * fl, W[7] = al * Ul + xl * Pl + Sl * fl, W[8] = tl * wl + ol * Tl + Rl * Dl, W[9] = sl * wl + Xl * Tl + Kl * Dl, W[10] = Zl * wl + Gl * Tl + Yl * Dl, W[11] = al * wl + xl * Tl + Sl * Dl, L !== W && (W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15]), W);
      }
      function i(W, L, N) {
        var v = Math.sin(N), f = Math.cos(N), j = L[4], A = L[5], dl = L[6], il = L[7], cl = L[8], ml = L[9], tl = L[10], sl = L[11];
        return L !== W && (W[0] = L[0], W[1] = L[1], W[2] = L[2], W[3] = L[3], W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15]), W[4] = j * f + cl * v, W[5] = A * f + ml * v, W[6] = dl * f + tl * v, W[7] = il * f + sl * v, W[8] = cl * f - j * v, W[9] = ml * f - A * v, W[10] = tl * f - dl * v, W[11] = sl * f - il * v, W;
      }
      function b(W, L, N) {
        var v = Math.sin(N), f = Math.cos(N), j = L[0], A = L[1], dl = L[2], il = L[3], cl = L[8], ml = L[9], tl = L[10], sl = L[11];
        return L !== W && (W[4] = L[4], W[5] = L[5], W[6] = L[6], W[7] = L[7], W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15]), W[0] = j * f - cl * v, W[1] = A * f - ml * v, W[2] = dl * f - tl * v, W[3] = il * f - sl * v, W[8] = j * v + cl * f, W[9] = A * v + ml * f, W[10] = dl * v + tl * f, W[11] = il * v + sl * f, W;
      }
      function t(W, L, N) {
        var v = Math.sin(N), f = Math.cos(N), j = L[0], A = L[1], dl = L[2], il = L[3], cl = L[4], ml = L[5], tl = L[6], sl = L[7];
        return L !== W && (W[8] = L[8], W[9] = L[9], W[10] = L[10], W[11] = L[11], W[12] = L[12], W[13] = L[13], W[14] = L[14], W[15] = L[15]), W[0] = j * f + cl * v, W[1] = A * f + ml * v, W[2] = dl * f + tl * v, W[3] = il * f + sl * v, W[4] = cl * f - j * v, W[5] = ml * f - A * v, W[6] = tl * f - dl * v, W[7] = sl * f - il * v, W;
      }
      function m(W, L) {
        return W[0] = 1, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = 1, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[10] = 1, W[11] = 0, W[12] = L[0], W[13] = L[1], W[14] = L[2], W[15] = 1, W;
      }
      function K(W, L) {
        return W[0] = L[0], W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = L[1], W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[10] = L[2], W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function x(W, L, N) {
        var v = N[0], f = N[1], j = N[2], A = Math.hypot(v, f, j), dl, il, cl;
        return A < s.EPSILON ? null : (A = 1 / A, v *= A, f *= A, j *= A, dl = Math.sin(L), il = Math.cos(L), cl = 1 - il, W[0] = v * v * cl + il, W[1] = f * v * cl + j * dl, W[2] = j * v * cl - f * dl, W[3] = 0, W[4] = v * f * cl - j * dl, W[5] = f * f * cl + il, W[6] = j * f * cl + v * dl, W[7] = 0, W[8] = v * j * cl + f * dl, W[9] = f * j * cl - v * dl, W[10] = j * j * cl + il, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W);
      }
      function C(W, L) {
        var N = Math.sin(L), v = Math.cos(L);
        return W[0] = 1, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = v, W[6] = N, W[7] = 0, W[8] = 0, W[9] = -N, W[10] = v, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function T(W, L) {
        var N = Math.sin(L), v = Math.cos(L);
        return W[0] = v, W[1] = 0, W[2] = -N, W[3] = 0, W[4] = 0, W[5] = 1, W[6] = 0, W[7] = 0, W[8] = N, W[9] = 0, W[10] = v, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function R(W, L) {
        var N = Math.sin(L), v = Math.cos(L);
        return W[0] = v, W[1] = N, W[2] = 0, W[3] = 0, W[4] = -N, W[5] = v, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[10] = 1, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function J(W, L, N) {
        var v = L[0], f = L[1], j = L[2], A = L[3], dl = v + v, il = f + f, cl = j + j, ml = v * dl, tl = v * il, sl = v * cl, Zl = f * il, al = f * cl, ol = j * cl, Xl = A * dl, Gl = A * il, xl = A * cl;
        return W[0] = 1 - (Zl + ol), W[1] = tl + xl, W[2] = sl - Gl, W[3] = 0, W[4] = tl - xl, W[5] = 1 - (ml + ol), W[6] = al + Xl, W[7] = 0, W[8] = sl + Gl, W[9] = al - Xl, W[10] = 1 - (ml + Zl), W[11] = 0, W[12] = N[0], W[13] = N[1], W[14] = N[2], W[15] = 1, W;
      }
      function F(W, L) {
        var N = new s.ARRAY_TYPE(3), v = -L[0], f = -L[1], j = -L[2], A = L[3], dl = L[4], il = L[5], cl = L[6], ml = L[7], tl = v * v + f * f + j * j + A * A;
        return tl > 0 ? (N[0] = (dl * A + ml * v + il * j - cl * f) * 2 / tl, N[1] = (il * A + ml * f + cl * v - dl * j) * 2 / tl, N[2] = (cl * A + ml * j + dl * f - il * v) * 2 / tl) : (N[0] = (dl * A + ml * v + il * j - cl * f) * 2, N[1] = (il * A + ml * f + cl * v - dl * j) * 2, N[2] = (cl * A + ml * j + dl * f - il * v) * 2), J(W, L, N), W;
      }
      function r(W, L) {
        return W[0] = L[12], W[1] = L[13], W[2] = L[14], W;
      }
      function Y(W, L) {
        var N = L[0], v = L[1], f = L[2], j = L[4], A = L[5], dl = L[6], il = L[8], cl = L[9], ml = L[10];
        return W[0] = Math.hypot(N, v, f), W[1] = Math.hypot(j, A, dl), W[2] = Math.hypot(il, cl, ml), W;
      }
      function H(W, L) {
        var N = new s.ARRAY_TYPE(3);
        Y(N, L);
        var v = 1 / N[0], f = 1 / N[1], j = 1 / N[2], A = L[0] * v, dl = L[1] * f, il = L[2] * j, cl = L[4] * v, ml = L[5] * f, tl = L[6] * j, sl = L[8] * v, Zl = L[9] * f, al = L[10] * j, ol = A + ml + al, Xl = 0;
        return ol > 0 ? (Xl = Math.sqrt(ol + 1) * 2, W[3] = 0.25 * Xl, W[0] = (tl - Zl) / Xl, W[1] = (sl - il) / Xl, W[2] = (dl - cl) / Xl) : A > ml && A > al ? (Xl = Math.sqrt(1 + A - ml - al) * 2, W[3] = (tl - Zl) / Xl, W[0] = 0.25 * Xl, W[1] = (dl + cl) / Xl, W[2] = (sl + il) / Xl) : ml > al ? (Xl = Math.sqrt(1 + ml - A - al) * 2, W[3] = (sl - il) / Xl, W[0] = (dl + cl) / Xl, W[1] = 0.25 * Xl, W[2] = (tl + Zl) / Xl) : (Xl = Math.sqrt(1 + al - A - ml) * 2, W[3] = (dl - cl) / Xl, W[0] = (sl + il) / Xl, W[1] = (tl + Zl) / Xl, W[2] = 0.25 * Xl), W;
      }
      function Q(W, L, N, v) {
        var f = L[0], j = L[1], A = L[2], dl = L[3], il = f + f, cl = j + j, ml = A + A, tl = f * il, sl = f * cl, Zl = f * ml, al = j * cl, ol = j * ml, Xl = A * ml, Gl = dl * il, xl = dl * cl, Rl = dl * ml, Kl = v[0], Yl = v[1], Sl = v[2];
        return W[0] = (1 - (al + Xl)) * Kl, W[1] = (sl + Rl) * Kl, W[2] = (Zl - xl) * Kl, W[3] = 0, W[4] = (sl - Rl) * Yl, W[5] = (1 - (tl + Xl)) * Yl, W[6] = (ol + Gl) * Yl, W[7] = 0, W[8] = (Zl + xl) * Sl, W[9] = (ol - Gl) * Sl, W[10] = (1 - (tl + al)) * Sl, W[11] = 0, W[12] = N[0], W[13] = N[1], W[14] = N[2], W[15] = 1, W;
      }
      function w(W, L, N, v, f) {
        var j = L[0], A = L[1], dl = L[2], il = L[3], cl = j + j, ml = A + A, tl = dl + dl, sl = j * cl, Zl = j * ml, al = j * tl, ol = A * ml, Xl = A * tl, Gl = dl * tl, xl = il * cl, Rl = il * ml, Kl = il * tl, Yl = v[0], Sl = v[1], Ql = v[2], kl = f[0], vl = f[1], Ul = f[2], Pl = (1 - (ol + Gl)) * Yl, fl = (Zl + Kl) * Yl, wl = (al - Rl) * Yl, Tl = (Zl - Kl) * Sl, Dl = (1 - (sl + Gl)) * Sl, Id = (Xl + xl) * Sl, pd = (al + Rl) * Ql, Wi = (Xl - xl) * Ql, Gi = (1 - (sl + ol)) * Ql;
        return W[0] = Pl, W[1] = fl, W[2] = wl, W[3] = 0, W[4] = Tl, W[5] = Dl, W[6] = Id, W[7] = 0, W[8] = pd, W[9] = Wi, W[10] = Gi, W[11] = 0, W[12] = N[0] + kl - (Pl * kl + Tl * vl + pd * Ul), W[13] = N[1] + vl - (fl * kl + Dl * vl + Wi * Ul), W[14] = N[2] + Ul - (wl * kl + Id * vl + Gi * Ul), W[15] = 1, W;
      }
      function O(W, L) {
        var N = L[0], v = L[1], f = L[2], j = L[3], A = N + N, dl = v + v, il = f + f, cl = N * A, ml = v * A, tl = v * dl, sl = f * A, Zl = f * dl, al = f * il, ol = j * A, Xl = j * dl, Gl = j * il;
        return W[0] = 1 - tl - al, W[1] = ml + Gl, W[2] = sl - Xl, W[3] = 0, W[4] = ml - Gl, W[5] = 1 - cl - al, W[6] = Zl + ol, W[7] = 0, W[8] = sl + Xl, W[9] = Zl - ol, W[10] = 1 - cl - tl, W[11] = 0, W[12] = 0, W[13] = 0, W[14] = 0, W[15] = 1, W;
      }
      function q(W, L, N, v, f, j, A) {
        var dl = 1 / (N - L), il = 1 / (f - v), cl = 1 / (j - A);
        return W[0] = j * 2 * dl, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = j * 2 * il, W[6] = 0, W[7] = 0, W[8] = (N + L) * dl, W[9] = (f + v) * il, W[10] = (A + j) * cl, W[11] = -1, W[12] = 0, W[13] = 0, W[14] = A * j * 2 * cl, W[15] = 0, W;
      }
      function k(W, L, N, v, f) {
        var j = 1 / Math.tan(L / 2), A;
        return W[0] = j / N, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = j, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[11] = -1, W[12] = 0, W[13] = 0, W[15] = 0, f != null && f !== 1 / 0 ? (A = 1 / (v - f), W[10] = (f + v) * A, W[14] = 2 * f * v * A) : (W[10] = -1, W[14] = -2 * v), W;
      }
      function P(W, L, N, v) {
        var f = Math.tan(L.upDegrees * Math.PI / 180), j = Math.tan(L.downDegrees * Math.PI / 180), A = Math.tan(L.leftDegrees * Math.PI / 180), dl = Math.tan(L.rightDegrees * Math.PI / 180), il = 2 / (A + dl), cl = 2 / (f + j);
        return W[0] = il, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = cl, W[6] = 0, W[7] = 0, W[8] = -((A - dl) * il * 0.5), W[9] = (f - j) * cl * 0.5, W[10] = v / (N - v), W[11] = -1, W[12] = 0, W[13] = 0, W[14] = v * N / (N - v), W[15] = 0, W;
      }
      function D(W, L, N, v, f, j, A) {
        var dl = 1 / (L - N), il = 1 / (v - f), cl = 1 / (j - A);
        return W[0] = -2 * dl, W[1] = 0, W[2] = 0, W[3] = 0, W[4] = 0, W[5] = -2 * il, W[6] = 0, W[7] = 0, W[8] = 0, W[9] = 0, W[10] = 2 * cl, W[11] = 0, W[12] = (L + N) * dl, W[13] = (f + v) * il, W[14] = (A + j) * cl, W[15] = 1, W;
      }
      function ll(W, L, N, v) {
        var f, j, A, dl, il, cl, ml, tl, sl, Zl, al = L[0], ol = L[1], Xl = L[2], Gl = v[0], xl = v[1], Rl = v[2], Kl = N[0], Yl = N[1], Sl = N[2];
        return Math.abs(al - Kl) < s.EPSILON && Math.abs(ol - Yl) < s.EPSILON && Math.abs(Xl - Sl) < s.EPSILON ? G(W) : (ml = al - Kl, tl = ol - Yl, sl = Xl - Sl, Zl = 1 / Math.hypot(ml, tl, sl), ml *= Zl, tl *= Zl, sl *= Zl, f = xl * sl - Rl * tl, j = Rl * ml - Gl * sl, A = Gl * tl - xl * ml, Zl = Math.hypot(f, j, A), Zl ? (Zl = 1 / Zl, f *= Zl, j *= Zl, A *= Zl) : (f = 0, j = 0, A = 0), dl = tl * A - sl * j, il = sl * f - ml * A, cl = ml * j - tl * f, Zl = Math.hypot(dl, il, cl), Zl ? (Zl = 1 / Zl, dl *= Zl, il *= Zl, cl *= Zl) : (dl = 0, il = 0, cl = 0), W[0] = f, W[1] = dl, W[2] = ml, W[3] = 0, W[4] = j, W[5] = il, W[6] = tl, W[7] = 0, W[8] = A, W[9] = cl, W[10] = sl, W[11] = 0, W[12] = -(f * al + j * ol + A * Xl), W[13] = -(dl * al + il * ol + cl * Xl), W[14] = -(ml * al + tl * ol + sl * Xl), W[15] = 1, W);
      }
      function _(W, L, N, v) {
        var f = L[0], j = L[1], A = L[2], dl = v[0], il = v[1], cl = v[2], ml = f - N[0], tl = j - N[1], sl = A - N[2], Zl = ml * ml + tl * tl + sl * sl;
        Zl > 0 && (Zl = 1 / Math.sqrt(Zl), ml *= Zl, tl *= Zl, sl *= Zl);
        var al = il * sl - cl * tl, ol = cl * ml - dl * sl, Xl = dl * tl - il * ml;
        return Zl = al * al + ol * ol + Xl * Xl, Zl > 0 && (Zl = 1 / Math.sqrt(Zl), al *= Zl, ol *= Zl, Xl *= Zl), W[0] = al, W[1] = ol, W[2] = Xl, W[3] = 0, W[4] = tl * Xl - sl * ol, W[5] = sl * al - ml * Xl, W[6] = ml * ol - tl * al, W[7] = 0, W[8] = ml, W[9] = tl, W[10] = sl, W[11] = 0, W[12] = f, W[13] = j, W[14] = A, W[15] = 1, W;
      }
      function bl(W) {
        return "mat4(" + W[0] + ", " + W[1] + ", " + W[2] + ", " + W[3] + ", " + W[4] + ", " + W[5] + ", " + W[6] + ", " + W[7] + ", " + W[8] + ", " + W[9] + ", " + W[10] + ", " + W[11] + ", " + W[12] + ", " + W[13] + ", " + W[14] + ", " + W[15] + ")";
      }
      function $(W) {
        return Math.hypot(W[0], W[1], W[2], W[3], W[4], W[5], W[6], W[7], W[8], W[9], W[10], W[11], W[12], W[13], W[14], W[15]);
      }
      function el(W, L, N) {
        return W[0] = L[0] + N[0], W[1] = L[1] + N[1], W[2] = L[2] + N[2], W[3] = L[3] + N[3], W[4] = L[4] + N[4], W[5] = L[5] + N[5], W[6] = L[6] + N[6], W[7] = L[7] + N[7], W[8] = L[8] + N[8], W[9] = L[9] + N[9], W[10] = L[10] + N[10], W[11] = L[11] + N[11], W[12] = L[12] + N[12], W[13] = L[13] + N[13], W[14] = L[14] + N[14], W[15] = L[15] + N[15], W;
      }
      function nl(W, L, N) {
        return W[0] = L[0] - N[0], W[1] = L[1] - N[1], W[2] = L[2] - N[2], W[3] = L[3] - N[3], W[4] = L[4] - N[4], W[5] = L[5] - N[5], W[6] = L[6] - N[6], W[7] = L[7] - N[7], W[8] = L[8] - N[8], W[9] = L[9] - N[9], W[10] = L[10] - N[10], W[11] = L[11] - N[11], W[12] = L[12] - N[12], W[13] = L[13] - N[13], W[14] = L[14] - N[14], W[15] = L[15] - N[15], W;
      }
      function z(W, L, N) {
        return W[0] = L[0] * N, W[1] = L[1] * N, W[2] = L[2] * N, W[3] = L[3] * N, W[4] = L[4] * N, W[5] = L[5] * N, W[6] = L[6] * N, W[7] = L[7] * N, W[8] = L[8] * N, W[9] = L[9] * N, W[10] = L[10] * N, W[11] = L[11] * N, W[12] = L[12] * N, W[13] = L[13] * N, W[14] = L[14] * N, W[15] = L[15] * N, W;
      }
      function M(W, L, N, v) {
        return W[0] = L[0] + N[0] * v, W[1] = L[1] + N[1] * v, W[2] = L[2] + N[2] * v, W[3] = L[3] + N[3] * v, W[4] = L[4] + N[4] * v, W[5] = L[5] + N[5] * v, W[6] = L[6] + N[6] * v, W[7] = L[7] + N[7] * v, W[8] = L[8] + N[8] * v, W[9] = L[9] + N[9] * v, W[10] = L[10] + N[10] * v, W[11] = L[11] + N[11] * v, W[12] = L[12] + N[12] * v, W[13] = L[13] + N[13] * v, W[14] = L[14] + N[14] * v, W[15] = L[15] + N[15] * v, W;
      }
      function E(W, L) {
        return W[0] === L[0] && W[1] === L[1] && W[2] === L[2] && W[3] === L[3] && W[4] === L[4] && W[5] === L[5] && W[6] === L[6] && W[7] === L[7] && W[8] === L[8] && W[9] === L[9] && W[10] === L[10] && W[11] === L[11] && W[12] === L[12] && W[13] === L[13] && W[14] === L[14] && W[15] === L[15];
      }
      function B(W, L) {
        var N = W[0], v = W[1], f = W[2], j = W[3], A = W[4], dl = W[5], il = W[6], cl = W[7], ml = W[8], tl = W[9], sl = W[10], Zl = W[11], al = W[12], ol = W[13], Xl = W[14], Gl = W[15], xl = L[0], Rl = L[1], Kl = L[2], Yl = L[3], Sl = L[4], Ql = L[5], kl = L[6], vl = L[7], Ul = L[8], Pl = L[9], fl = L[10], wl = L[11], Tl = L[12], Dl = L[13], Id = L[14], pd = L[15];
        return Math.abs(N - xl) <= s.EPSILON * Math.max(1, Math.abs(N), Math.abs(xl)) && Math.abs(v - Rl) <= s.EPSILON * Math.max(1, Math.abs(v), Math.abs(Rl)) && Math.abs(f - Kl) <= s.EPSILON * Math.max(1, Math.abs(f), Math.abs(Kl)) && Math.abs(j - Yl) <= s.EPSILON * Math.max(1, Math.abs(j), Math.abs(Yl)) && Math.abs(A - Sl) <= s.EPSILON * Math.max(1, Math.abs(A), Math.abs(Sl)) && Math.abs(dl - Ql) <= s.EPSILON * Math.max(1, Math.abs(dl), Math.abs(Ql)) && Math.abs(il - kl) <= s.EPSILON * Math.max(1, Math.abs(il), Math.abs(kl)) && Math.abs(cl - vl) <= s.EPSILON * Math.max(1, Math.abs(cl), Math.abs(vl)) && Math.abs(ml - Ul) <= s.EPSILON * Math.max(1, Math.abs(ml), Math.abs(Ul)) && Math.abs(tl - Pl) <= s.EPSILON * Math.max(1, Math.abs(tl), Math.abs(Pl)) && Math.abs(sl - fl) <= s.EPSILON * Math.max(1, Math.abs(sl), Math.abs(fl)) && Math.abs(Zl - wl) <= s.EPSILON * Math.max(1, Math.abs(Zl), Math.abs(wl)) && Math.abs(al - Tl) <= s.EPSILON * Math.max(1, Math.abs(al), Math.abs(Tl)) && Math.abs(ol - Dl) <= s.EPSILON * Math.max(1, Math.abs(ol), Math.abs(Dl)) && Math.abs(Xl - Id) <= s.EPSILON * Math.max(1, Math.abs(Xl), Math.abs(Id)) && Math.abs(Gl - pd) <= s.EPSILON * Math.max(1, Math.abs(Gl), Math.abs(pd));
      }
      var g = S, U = nl;
    },
    /* 7 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return e;
      }), l.d(d, "identity", function() {
        return n;
      }), l.d(d, "setAxisAngle", function() {
        return G;
      }), l.d(d, "getAxisAngle", function() {
        return y;
      }), l.d(d, "getAngle", function() {
        return a;
      }), l.d(d, "multiply", function() {
        return I;
      }), l.d(d, "rotateX", function() {
        return h;
      }), l.d(d, "rotateY", function() {
        return S;
      }), l.d(d, "rotateZ", function() {
        return p;
      }), l.d(d, "calculateW", function() {
        return X;
      }), l.d(d, "exp", function() {
        return V;
      }), l.d(d, "ln", function() {
        return i;
      }), l.d(d, "pow", function() {
        return b;
      }), l.d(d, "slerp", function() {
        return t;
      }), l.d(d, "random", function() {
        return m;
      }), l.d(d, "invert", function() {
        return K;
      }), l.d(d, "conjugate", function() {
        return x;
      }), l.d(d, "fromMat3", function() {
        return C;
      }), l.d(d, "fromEuler", function() {
        return T;
      }), l.d(d, "str", function() {
        return R;
      }), l.d(d, "clone", function() {
        return J;
      }), l.d(d, "fromValues", function() {
        return F;
      }), l.d(d, "copy", function() {
        return r;
      }), l.d(d, "set", function() {
        return Y;
      }), l.d(d, "add", function() {
        return H;
      }), l.d(d, "mul", function() {
        return Q;
      }), l.d(d, "scale", function() {
        return w;
      }), l.d(d, "dot", function() {
        return O;
      }), l.d(d, "lerp", function() {
        return q;
      }), l.d(d, "length", function() {
        return k;
      }), l.d(d, "len", function() {
        return P;
      }), l.d(d, "squaredLength", function() {
        return D;
      }), l.d(d, "sqrLen", function() {
        return ll;
      }), l.d(d, "normalize", function() {
        return _;
      }), l.d(d, "exactEquals", function() {
        return bl;
      }), l.d(d, "equals", function() {
        return $;
      }), l.d(d, "rotationTo", function() {
        return el;
      }), l.d(d, "sqlerp", function() {
        return nl;
      }), l.d(d, "setAxes", function() {
        return z;
      });
      var s = l(2), c = l(5), o = l(8), u = l(9);
      function e() {
        var M = new s.ARRAY_TYPE(4);
        return s.ARRAY_TYPE != Float32Array && (M[0] = 0, M[1] = 0, M[2] = 0), M[3] = 1, M;
      }
      function n(M) {
        return M[0] = 0, M[1] = 0, M[2] = 0, M[3] = 1, M;
      }
      function G(M, E, B) {
        B = B * 0.5;
        var g = Math.sin(B);
        return M[0] = g * E[0], M[1] = g * E[1], M[2] = g * E[2], M[3] = Math.cos(B), M;
      }
      function y(M, E) {
        var B = Math.acos(E[3]) * 2, g = Math.sin(B / 2);
        return g > s.EPSILON ? (M[0] = E[0] / g, M[1] = E[1] / g, M[2] = E[2] / g) : (M[0] = 1, M[1] = 0, M[2] = 0), B;
      }
      function a(M, E) {
        var B = O(M, E);
        return Math.acos(2 * B * B - 1);
      }
      function I(M, E, B) {
        var g = E[0], U = E[1], W = E[2], L = E[3], N = B[0], v = B[1], f = B[2], j = B[3];
        return M[0] = g * j + L * N + U * f - W * v, M[1] = U * j + L * v + W * N - g * f, M[2] = W * j + L * f + g * v - U * N, M[3] = L * j - g * N - U * v - W * f, M;
      }
      function h(M, E, B) {
        B *= 0.5;
        var g = E[0], U = E[1], W = E[2], L = E[3], N = Math.sin(B), v = Math.cos(B);
        return M[0] = g * v + L * N, M[1] = U * v + W * N, M[2] = W * v - U * N, M[3] = L * v - g * N, M;
      }
      function S(M, E, B) {
        B *= 0.5;
        var g = E[0], U = E[1], W = E[2], L = E[3], N = Math.sin(B), v = Math.cos(B);
        return M[0] = g * v - W * N, M[1] = U * v + L * N, M[2] = W * v + g * N, M[3] = L * v - U * N, M;
      }
      function p(M, E, B) {
        B *= 0.5;
        var g = E[0], U = E[1], W = E[2], L = E[3], N = Math.sin(B), v = Math.cos(B);
        return M[0] = g * v + U * N, M[1] = U * v - g * N, M[2] = W * v + L * N, M[3] = L * v - W * N, M;
      }
      function X(M, E) {
        var B = E[0], g = E[1], U = E[2];
        return M[0] = B, M[1] = g, M[2] = U, M[3] = Math.sqrt(Math.abs(1 - B * B - g * g - U * U)), M;
      }
      function V(M, E) {
        var B = E[0], g = E[1], U = E[2], W = E[3], L = Math.sqrt(B * B + g * g + U * U), N = Math.exp(W), v = L > 0 ? N * Math.sin(L) / L : 0;
        return M[0] = B * v, M[1] = g * v, M[2] = U * v, M[3] = N * Math.cos(L), M;
      }
      function i(M, E) {
        var B = E[0], g = E[1], U = E[2], W = E[3], L = Math.sqrt(B * B + g * g + U * U), N = L > 0 ? Math.atan2(L, W) / L : 0;
        return M[0] = B * N, M[1] = g * N, M[2] = U * N, M[3] = 0.5 * Math.log(B * B + g * g + U * U + W * W), M;
      }
      function b(M, E, B) {
        return i(M, E), w(M, M, B), V(M, M), M;
      }
      function t(M, E, B, g) {
        var U = E[0], W = E[1], L = E[2], N = E[3], v = B[0], f = B[1], j = B[2], A = B[3], dl, il, cl, ml, tl;
        return il = U * v + W * f + L * j + N * A, il < 0 && (il = -il, v = -v, f = -f, j = -j, A = -A), 1 - il > s.EPSILON ? (dl = Math.acos(il), cl = Math.sin(dl), ml = Math.sin((1 - g) * dl) / cl, tl = Math.sin(g * dl) / cl) : (ml = 1 - g, tl = g), M[0] = ml * U + tl * v, M[1] = ml * W + tl * f, M[2] = ml * L + tl * j, M[3] = ml * N + tl * A, M;
      }
      function m(M) {
        var E = s.RANDOM(), B = s.RANDOM(), g = s.RANDOM(), U = Math.sqrt(1 - E), W = Math.sqrt(E);
        return M[0] = U * Math.sin(2 * Math.PI * B), M[1] = U * Math.cos(2 * Math.PI * B), M[2] = W * Math.sin(2 * Math.PI * g), M[3] = W * Math.cos(2 * Math.PI * g), M;
      }
      function K(M, E) {
        var B = E[0], g = E[1], U = E[2], W = E[3], L = B * B + g * g + U * U + W * W, N = L ? 1 / L : 0;
        return M[0] = -B * N, M[1] = -g * N, M[2] = -U * N, M[3] = W * N, M;
      }
      function x(M, E) {
        return M[0] = -E[0], M[1] = -E[1], M[2] = -E[2], M[3] = E[3], M;
      }
      function C(M, E) {
        var B = E[0] + E[4] + E[8], g;
        if (B > 0)
          g = Math.sqrt(B + 1), M[3] = 0.5 * g, g = 0.5 / g, M[0] = (E[5] - E[7]) * g, M[1] = (E[6] - E[2]) * g, M[2] = (E[1] - E[3]) * g;
        else {
          var U = 0;
          E[4] > E[0] && (U = 1), E[8] > E[U * 3 + U] && (U = 2);
          var W = (U + 1) % 3, L = (U + 2) % 3;
          g = Math.sqrt(E[U * 3 + U] - E[W * 3 + W] - E[L * 3 + L] + 1), M[U] = 0.5 * g, g = 0.5 / g, M[3] = (E[W * 3 + L] - E[L * 3 + W]) * g, M[W] = (E[W * 3 + U] + E[U * 3 + W]) * g, M[L] = (E[L * 3 + U] + E[U * 3 + L]) * g;
        }
        return M;
      }
      function T(M, E, B, g) {
        var U = 0.5 * Math.PI / 180;
        E *= U, B *= U, g *= U;
        var W = Math.sin(E), L = Math.cos(E), N = Math.sin(B), v = Math.cos(B), f = Math.sin(g), j = Math.cos(g);
        return M[0] = W * v * j - L * N * f, M[1] = L * N * j + W * v * f, M[2] = L * v * f - W * N * j, M[3] = L * v * j + W * N * f, M;
      }
      function R(M) {
        return "quat(" + M[0] + ", " + M[1] + ", " + M[2] + ", " + M[3] + ")";
      }
      var J = u.clone, F = u.fromValues, r = u.copy, Y = u.set, H = u.add, Q = I, w = u.scale, O = u.dot, q = u.lerp, k = u.length, P = k, D = u.squaredLength, ll = D, _ = u.normalize, bl = u.exactEquals, $ = u.equals, el = function() {
        var M = o.create(), E = o.fromValues(1, 0, 0), B = o.fromValues(0, 1, 0);
        return function(g, U, W) {
          var L = o.dot(U, W);
          return L < -0.999999 ? (o.cross(M, E, U), o.len(M) < 1e-6 && o.cross(M, B, U), o.normalize(M, M), G(g, M, Math.PI), g) : L > 0.999999 ? (g[0] = 0, g[1] = 0, g[2] = 0, g[3] = 1, g) : (o.cross(M, U, W), g[0] = M[0], g[1] = M[1], g[2] = M[2], g[3] = 1 + L, _(g, g));
        };
      }(), nl = function() {
        var M = e(), E = e();
        return function(B, g, U, W, L, N) {
          return t(M, g, L, N), t(E, U, W, N), t(B, M, E, 2 * N * (1 - N)), B;
        };
      }(), z = function() {
        var M = c.create();
        return function(E, B, g, U) {
          return M[0] = g[0], M[3] = g[1], M[6] = g[2], M[1] = U[0], M[4] = U[1], M[7] = U[2], M[2] = -B[0], M[5] = -B[1], M[8] = -B[2], _(E, C(E, M));
        };
      }();
    },
    /* 8 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "length", function() {
        return u;
      }), l.d(d, "fromValues", function() {
        return e;
      }), l.d(d, "copy", function() {
        return n;
      }), l.d(d, "set", function() {
        return G;
      }), l.d(d, "add", function() {
        return y;
      }), l.d(d, "subtract", function() {
        return a;
      }), l.d(d, "multiply", function() {
        return I;
      }), l.d(d, "divide", function() {
        return h;
      }), l.d(d, "ceil", function() {
        return S;
      }), l.d(d, "floor", function() {
        return p;
      }), l.d(d, "min", function() {
        return X;
      }), l.d(d, "max", function() {
        return V;
      }), l.d(d, "round", function() {
        return i;
      }), l.d(d, "scale", function() {
        return b;
      }), l.d(d, "scaleAndAdd", function() {
        return t;
      }), l.d(d, "distance", function() {
        return m;
      }), l.d(d, "squaredDistance", function() {
        return K;
      }), l.d(d, "squaredLength", function() {
        return x;
      }), l.d(d, "negate", function() {
        return C;
      }), l.d(d, "inverse", function() {
        return T;
      }), l.d(d, "normalize", function() {
        return R;
      }), l.d(d, "dot", function() {
        return J;
      }), l.d(d, "cross", function() {
        return F;
      }), l.d(d, "lerp", function() {
        return r;
      }), l.d(d, "hermite", function() {
        return Y;
      }), l.d(d, "bezier", function() {
        return H;
      }), l.d(d, "random", function() {
        return Q;
      }), l.d(d, "transformMat4", function() {
        return w;
      }), l.d(d, "transformMat3", function() {
        return O;
      }), l.d(d, "transformQuat", function() {
        return q;
      }), l.d(d, "rotateX", function() {
        return k;
      }), l.d(d, "rotateY", function() {
        return P;
      }), l.d(d, "rotateZ", function() {
        return D;
      }), l.d(d, "angle", function() {
        return ll;
      }), l.d(d, "zero", function() {
        return _;
      }), l.d(d, "str", function() {
        return bl;
      }), l.d(d, "exactEquals", function() {
        return $;
      }), l.d(d, "equals", function() {
        return el;
      }), l.d(d, "sub", function() {
        return nl;
      }), l.d(d, "mul", function() {
        return z;
      }), l.d(d, "div", function() {
        return M;
      }), l.d(d, "dist", function() {
        return E;
      }), l.d(d, "sqrDist", function() {
        return B;
      }), l.d(d, "len", function() {
        return g;
      }), l.d(d, "sqrLen", function() {
        return U;
      }), l.d(d, "forEach", function() {
        return W;
      });
      var s = l(2);
      function c() {
        var L = new s.ARRAY_TYPE(3);
        return s.ARRAY_TYPE != Float32Array && (L[0] = 0, L[1] = 0, L[2] = 0), L;
      }
      function o(L) {
        var N = new s.ARRAY_TYPE(3);
        return N[0] = L[0], N[1] = L[1], N[2] = L[2], N;
      }
      function u(L) {
        var N = L[0], v = L[1], f = L[2];
        return Math.hypot(N, v, f);
      }
      function e(L, N, v) {
        var f = new s.ARRAY_TYPE(3);
        return f[0] = L, f[1] = N, f[2] = v, f;
      }
      function n(L, N) {
        return L[0] = N[0], L[1] = N[1], L[2] = N[2], L;
      }
      function G(L, N, v, f) {
        return L[0] = N, L[1] = v, L[2] = f, L;
      }
      function y(L, N, v) {
        return L[0] = N[0] + v[0], L[1] = N[1] + v[1], L[2] = N[2] + v[2], L;
      }
      function a(L, N, v) {
        return L[0] = N[0] - v[0], L[1] = N[1] - v[1], L[2] = N[2] - v[2], L;
      }
      function I(L, N, v) {
        return L[0] = N[0] * v[0], L[1] = N[1] * v[1], L[2] = N[2] * v[2], L;
      }
      function h(L, N, v) {
        return L[0] = N[0] / v[0], L[1] = N[1] / v[1], L[2] = N[2] / v[2], L;
      }
      function S(L, N) {
        return L[0] = Math.ceil(N[0]), L[1] = Math.ceil(N[1]), L[2] = Math.ceil(N[2]), L;
      }
      function p(L, N) {
        return L[0] = Math.floor(N[0]), L[1] = Math.floor(N[1]), L[2] = Math.floor(N[2]), L;
      }
      function X(L, N, v) {
        return L[0] = Math.min(N[0], v[0]), L[1] = Math.min(N[1], v[1]), L[2] = Math.min(N[2], v[2]), L;
      }
      function V(L, N, v) {
        return L[0] = Math.max(N[0], v[0]), L[1] = Math.max(N[1], v[1]), L[2] = Math.max(N[2], v[2]), L;
      }
      function i(L, N) {
        return L[0] = Math.round(N[0]), L[1] = Math.round(N[1]), L[2] = Math.round(N[2]), L;
      }
      function b(L, N, v) {
        return L[0] = N[0] * v, L[1] = N[1] * v, L[2] = N[2] * v, L;
      }
      function t(L, N, v, f) {
        return L[0] = N[0] + v[0] * f, L[1] = N[1] + v[1] * f, L[2] = N[2] + v[2] * f, L;
      }
      function m(L, N) {
        var v = N[0] - L[0], f = N[1] - L[1], j = N[2] - L[2];
        return Math.hypot(v, f, j);
      }
      function K(L, N) {
        var v = N[0] - L[0], f = N[1] - L[1], j = N[2] - L[2];
        return v * v + f * f + j * j;
      }
      function x(L) {
        var N = L[0], v = L[1], f = L[2];
        return N * N + v * v + f * f;
      }
      function C(L, N) {
        return L[0] = -N[0], L[1] = -N[1], L[2] = -N[2], L;
      }
      function T(L, N) {
        return L[0] = 1 / N[0], L[1] = 1 / N[1], L[2] = 1 / N[2], L;
      }
      function R(L, N) {
        var v = N[0], f = N[1], j = N[2], A = v * v + f * f + j * j;
        return A > 0 && (A = 1 / Math.sqrt(A)), L[0] = N[0] * A, L[1] = N[1] * A, L[2] = N[2] * A, L;
      }
      function J(L, N) {
        return L[0] * N[0] + L[1] * N[1] + L[2] * N[2];
      }
      function F(L, N, v) {
        var f = N[0], j = N[1], A = N[2], dl = v[0], il = v[1], cl = v[2];
        return L[0] = j * cl - A * il, L[1] = A * dl - f * cl, L[2] = f * il - j * dl, L;
      }
      function r(L, N, v, f) {
        var j = N[0], A = N[1], dl = N[2];
        return L[0] = j + f * (v[0] - j), L[1] = A + f * (v[1] - A), L[2] = dl + f * (v[2] - dl), L;
      }
      function Y(L, N, v, f, j, A) {
        var dl = A * A, il = dl * (2 * A - 3) + 1, cl = dl * (A - 2) + A, ml = dl * (A - 1), tl = dl * (3 - 2 * A);
        return L[0] = N[0] * il + v[0] * cl + f[0] * ml + j[0] * tl, L[1] = N[1] * il + v[1] * cl + f[1] * ml + j[1] * tl, L[2] = N[2] * il + v[2] * cl + f[2] * ml + j[2] * tl, L;
      }
      function H(L, N, v, f, j, A) {
        var dl = 1 - A, il = dl * dl, cl = A * A, ml = il * dl, tl = 3 * A * il, sl = 3 * cl * dl, Zl = cl * A;
        return L[0] = N[0] * ml + v[0] * tl + f[0] * sl + j[0] * Zl, L[1] = N[1] * ml + v[1] * tl + f[1] * sl + j[1] * Zl, L[2] = N[2] * ml + v[2] * tl + f[2] * sl + j[2] * Zl, L;
      }
      function Q(L, N) {
        N = N || 1;
        var v = s.RANDOM() * 2 * Math.PI, f = s.RANDOM() * 2 - 1, j = Math.sqrt(1 - f * f) * N;
        return L[0] = Math.cos(v) * j, L[1] = Math.sin(v) * j, L[2] = f * N, L;
      }
      function w(L, N, v) {
        var f = N[0], j = N[1], A = N[2], dl = v[3] * f + v[7] * j + v[11] * A + v[15];
        return dl = dl || 1, L[0] = (v[0] * f + v[4] * j + v[8] * A + v[12]) / dl, L[1] = (v[1] * f + v[5] * j + v[9] * A + v[13]) / dl, L[2] = (v[2] * f + v[6] * j + v[10] * A + v[14]) / dl, L;
      }
      function O(L, N, v) {
        var f = N[0], j = N[1], A = N[2];
        return L[0] = f * v[0] + j * v[3] + A * v[6], L[1] = f * v[1] + j * v[4] + A * v[7], L[2] = f * v[2] + j * v[5] + A * v[8], L;
      }
      function q(L, N, v) {
        var f = v[0], j = v[1], A = v[2], dl = v[3], il = N[0], cl = N[1], ml = N[2], tl = j * ml - A * cl, sl = A * il - f * ml, Zl = f * cl - j * il, al = j * Zl - A * sl, ol = A * tl - f * Zl, Xl = f * sl - j * tl, Gl = dl * 2;
        return tl *= Gl, sl *= Gl, Zl *= Gl, al *= 2, ol *= 2, Xl *= 2, L[0] = il + tl + al, L[1] = cl + sl + ol, L[2] = ml + Zl + Xl, L;
      }
      function k(L, N, v, f) {
        var j = [], A = [];
        return j[0] = N[0] - v[0], j[1] = N[1] - v[1], j[2] = N[2] - v[2], A[0] = j[0], A[1] = j[1] * Math.cos(f) - j[2] * Math.sin(f), A[2] = j[1] * Math.sin(f) + j[2] * Math.cos(f), L[0] = A[0] + v[0], L[1] = A[1] + v[1], L[2] = A[2] + v[2], L;
      }
      function P(L, N, v, f) {
        var j = [], A = [];
        return j[0] = N[0] - v[0], j[1] = N[1] - v[1], j[2] = N[2] - v[2], A[0] = j[2] * Math.sin(f) + j[0] * Math.cos(f), A[1] = j[1], A[2] = j[2] * Math.cos(f) - j[0] * Math.sin(f), L[0] = A[0] + v[0], L[1] = A[1] + v[1], L[2] = A[2] + v[2], L;
      }
      function D(L, N, v, f) {
        var j = [], A = [];
        return j[0] = N[0] - v[0], j[1] = N[1] - v[1], j[2] = N[2] - v[2], A[0] = j[0] * Math.cos(f) - j[1] * Math.sin(f), A[1] = j[0] * Math.sin(f) + j[1] * Math.cos(f), A[2] = j[2], L[0] = A[0] + v[0], L[1] = A[1] + v[1], L[2] = A[2] + v[2], L;
      }
      function ll(L, N) {
        var v = L[0], f = L[1], j = L[2], A = N[0], dl = N[1], il = N[2], cl = Math.sqrt(v * v + f * f + j * j), ml = Math.sqrt(A * A + dl * dl + il * il), tl = cl * ml, sl = tl && J(L, N) / tl;
        return Math.acos(Math.min(Math.max(sl, -1), 1));
      }
      function _(L) {
        return L[0] = 0, L[1] = 0, L[2] = 0, L;
      }
      function bl(L) {
        return "vec3(" + L[0] + ", " + L[1] + ", " + L[2] + ")";
      }
      function $(L, N) {
        return L[0] === N[0] && L[1] === N[1] && L[2] === N[2];
      }
      function el(L, N) {
        var v = L[0], f = L[1], j = L[2], A = N[0], dl = N[1], il = N[2];
        return Math.abs(v - A) <= s.EPSILON * Math.max(1, Math.abs(v), Math.abs(A)) && Math.abs(f - dl) <= s.EPSILON * Math.max(1, Math.abs(f), Math.abs(dl)) && Math.abs(j - il) <= s.EPSILON * Math.max(1, Math.abs(j), Math.abs(il));
      }
      var nl = a, z = I, M = h, E = m, B = K, g = u, U = x, W = function() {
        var L = c();
        return function(N, v, f, j, A, dl) {
          var il, cl;
          for (v || (v = 3), f || (f = 0), j ? cl = Math.min(j * v + f, N.length) : cl = N.length, il = f; il < cl; il += v)
            L[0] = N[il], L[1] = N[il + 1], L[2] = N[il + 2], A(L, L, dl), N[il] = L[0], N[il + 1] = L[1], N[il + 2] = L[2];
          return N;
        };
      }();
    },
    /* 9 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "fromValues", function() {
        return u;
      }), l.d(d, "copy", function() {
        return e;
      }), l.d(d, "set", function() {
        return n;
      }), l.d(d, "add", function() {
        return G;
      }), l.d(d, "subtract", function() {
        return y;
      }), l.d(d, "multiply", function() {
        return a;
      }), l.d(d, "divide", function() {
        return I;
      }), l.d(d, "ceil", function() {
        return h;
      }), l.d(d, "floor", function() {
        return S;
      }), l.d(d, "min", function() {
        return p;
      }), l.d(d, "max", function() {
        return X;
      }), l.d(d, "round", function() {
        return V;
      }), l.d(d, "scale", function() {
        return i;
      }), l.d(d, "scaleAndAdd", function() {
        return b;
      }), l.d(d, "distance", function() {
        return t;
      }), l.d(d, "squaredDistance", function() {
        return m;
      }), l.d(d, "length", function() {
        return K;
      }), l.d(d, "squaredLength", function() {
        return x;
      }), l.d(d, "negate", function() {
        return C;
      }), l.d(d, "inverse", function() {
        return T;
      }), l.d(d, "normalize", function() {
        return R;
      }), l.d(d, "dot", function() {
        return J;
      }), l.d(d, "cross", function() {
        return F;
      }), l.d(d, "lerp", function() {
        return r;
      }), l.d(d, "random", function() {
        return Y;
      }), l.d(d, "transformMat4", function() {
        return H;
      }), l.d(d, "transformQuat", function() {
        return Q;
      }), l.d(d, "zero", function() {
        return w;
      }), l.d(d, "str", function() {
        return O;
      }), l.d(d, "exactEquals", function() {
        return q;
      }), l.d(d, "equals", function() {
        return k;
      }), l.d(d, "sub", function() {
        return P;
      }), l.d(d, "mul", function() {
        return D;
      }), l.d(d, "div", function() {
        return ll;
      }), l.d(d, "dist", function() {
        return _;
      }), l.d(d, "sqrDist", function() {
        return bl;
      }), l.d(d, "len", function() {
        return $;
      }), l.d(d, "sqrLen", function() {
        return el;
      }), l.d(d, "forEach", function() {
        return nl;
      });
      var s = l(2);
      function c() {
        var z = new s.ARRAY_TYPE(4);
        return s.ARRAY_TYPE != Float32Array && (z[0] = 0, z[1] = 0, z[2] = 0, z[3] = 0), z;
      }
      function o(z) {
        var M = new s.ARRAY_TYPE(4);
        return M[0] = z[0], M[1] = z[1], M[2] = z[2], M[3] = z[3], M;
      }
      function u(z, M, E, B) {
        var g = new s.ARRAY_TYPE(4);
        return g[0] = z, g[1] = M, g[2] = E, g[3] = B, g;
      }
      function e(z, M) {
        return z[0] = M[0], z[1] = M[1], z[2] = M[2], z[3] = M[3], z;
      }
      function n(z, M, E, B, g) {
        return z[0] = M, z[1] = E, z[2] = B, z[3] = g, z;
      }
      function G(z, M, E) {
        return z[0] = M[0] + E[0], z[1] = M[1] + E[1], z[2] = M[2] + E[2], z[3] = M[3] + E[3], z;
      }
      function y(z, M, E) {
        return z[0] = M[0] - E[0], z[1] = M[1] - E[1], z[2] = M[2] - E[2], z[3] = M[3] - E[3], z;
      }
      function a(z, M, E) {
        return z[0] = M[0] * E[0], z[1] = M[1] * E[1], z[2] = M[2] * E[2], z[3] = M[3] * E[3], z;
      }
      function I(z, M, E) {
        return z[0] = M[0] / E[0], z[1] = M[1] / E[1], z[2] = M[2] / E[2], z[3] = M[3] / E[3], z;
      }
      function h(z, M) {
        return z[0] = Math.ceil(M[0]), z[1] = Math.ceil(M[1]), z[2] = Math.ceil(M[2]), z[3] = Math.ceil(M[3]), z;
      }
      function S(z, M) {
        return z[0] = Math.floor(M[0]), z[1] = Math.floor(M[1]), z[2] = Math.floor(M[2]), z[3] = Math.floor(M[3]), z;
      }
      function p(z, M, E) {
        return z[0] = Math.min(M[0], E[0]), z[1] = Math.min(M[1], E[1]), z[2] = Math.min(M[2], E[2]), z[3] = Math.min(M[3], E[3]), z;
      }
      function X(z, M, E) {
        return z[0] = Math.max(M[0], E[0]), z[1] = Math.max(M[1], E[1]), z[2] = Math.max(M[2], E[2]), z[3] = Math.max(M[3], E[3]), z;
      }
      function V(z, M) {
        return z[0] = Math.round(M[0]), z[1] = Math.round(M[1]), z[2] = Math.round(M[2]), z[3] = Math.round(M[3]), z;
      }
      function i(z, M, E) {
        return z[0] = M[0] * E, z[1] = M[1] * E, z[2] = M[2] * E, z[3] = M[3] * E, z;
      }
      function b(z, M, E, B) {
        return z[0] = M[0] + E[0] * B, z[1] = M[1] + E[1] * B, z[2] = M[2] + E[2] * B, z[3] = M[3] + E[3] * B, z;
      }
      function t(z, M) {
        var E = M[0] - z[0], B = M[1] - z[1], g = M[2] - z[2], U = M[3] - z[3];
        return Math.hypot(E, B, g, U);
      }
      function m(z, M) {
        var E = M[0] - z[0], B = M[1] - z[1], g = M[2] - z[2], U = M[3] - z[3];
        return E * E + B * B + g * g + U * U;
      }
      function K(z) {
        var M = z[0], E = z[1], B = z[2], g = z[3];
        return Math.hypot(M, E, B, g);
      }
      function x(z) {
        var M = z[0], E = z[1], B = z[2], g = z[3];
        return M * M + E * E + B * B + g * g;
      }
      function C(z, M) {
        return z[0] = -M[0], z[1] = -M[1], z[2] = -M[2], z[3] = -M[3], z;
      }
      function T(z, M) {
        return z[0] = 1 / M[0], z[1] = 1 / M[1], z[2] = 1 / M[2], z[3] = 1 / M[3], z;
      }
      function R(z, M) {
        var E = M[0], B = M[1], g = M[2], U = M[3], W = E * E + B * B + g * g + U * U;
        return W > 0 && (W = 1 / Math.sqrt(W)), z[0] = E * W, z[1] = B * W, z[2] = g * W, z[3] = U * W, z;
      }
      function J(z, M) {
        return z[0] * M[0] + z[1] * M[1] + z[2] * M[2] + z[3] * M[3];
      }
      function F(z, M, E, B) {
        var g = E[0] * B[1] - E[1] * B[0], U = E[0] * B[2] - E[2] * B[0], W = E[0] * B[3] - E[3] * B[0], L = E[1] * B[2] - E[2] * B[1], N = E[1] * B[3] - E[3] * B[1], v = E[2] * B[3] - E[3] * B[2], f = M[0], j = M[1], A = M[2], dl = M[3];
        return z[0] = j * v - A * N + dl * L, z[1] = -(f * v) + A * W - dl * U, z[2] = f * N - j * W + dl * g, z[3] = -(f * L) + j * U - A * g, z;
      }
      function r(z, M, E, B) {
        var g = M[0], U = M[1], W = M[2], L = M[3];
        return z[0] = g + B * (E[0] - g), z[1] = U + B * (E[1] - U), z[2] = W + B * (E[2] - W), z[3] = L + B * (E[3] - L), z;
      }
      function Y(z, M) {
        M = M || 1;
        var E, B, g, U, W, L;
        do
          E = s.RANDOM() * 2 - 1, B = s.RANDOM() * 2 - 1, W = E * E + B * B;
        while (W >= 1);
        do
          g = s.RANDOM() * 2 - 1, U = s.RANDOM() * 2 - 1, L = g * g + U * U;
        while (L >= 1);
        var N = Math.sqrt((1 - W) / L);
        return z[0] = M * E, z[1] = M * B, z[2] = M * g * N, z[3] = M * U * N, z;
      }
      function H(z, M, E) {
        var B = M[0], g = M[1], U = M[2], W = M[3];
        return z[0] = E[0] * B + E[4] * g + E[8] * U + E[12] * W, z[1] = E[1] * B + E[5] * g + E[9] * U + E[13] * W, z[2] = E[2] * B + E[6] * g + E[10] * U + E[14] * W, z[3] = E[3] * B + E[7] * g + E[11] * U + E[15] * W, z;
      }
      function Q(z, M, E) {
        var B = M[0], g = M[1], U = M[2], W = E[0], L = E[1], N = E[2], v = E[3], f = v * B + L * U - N * g, j = v * g + N * B - W * U, A = v * U + W * g - L * B, dl = -W * B - L * g - N * U;
        return z[0] = f * v + dl * -W + j * -N - A * -L, z[1] = j * v + dl * -L + A * -W - f * -N, z[2] = A * v + dl * -N + f * -L - j * -W, z[3] = M[3], z;
      }
      function w(z) {
        return z[0] = 0, z[1] = 0, z[2] = 0, z[3] = 0, z;
      }
      function O(z) {
        return "vec4(" + z[0] + ", " + z[1] + ", " + z[2] + ", " + z[3] + ")";
      }
      function q(z, M) {
        return z[0] === M[0] && z[1] === M[1] && z[2] === M[2] && z[3] === M[3];
      }
      function k(z, M) {
        var E = z[0], B = z[1], g = z[2], U = z[3], W = M[0], L = M[1], N = M[2], v = M[3];
        return Math.abs(E - W) <= s.EPSILON * Math.max(1, Math.abs(E), Math.abs(W)) && Math.abs(B - L) <= s.EPSILON * Math.max(1, Math.abs(B), Math.abs(L)) && Math.abs(g - N) <= s.EPSILON * Math.max(1, Math.abs(g), Math.abs(N)) && Math.abs(U - v) <= s.EPSILON * Math.max(1, Math.abs(U), Math.abs(v));
      }
      var P = y, D = a, ll = I, _ = t, bl = m, $ = K, el = x, nl = function() {
        var z = c();
        return function(M, E, B, g, U, W) {
          var L, N;
          for (E || (E = 4), B || (B = 0), g ? N = Math.min(g * E + B, M.length) : N = M.length, L = B; L < N; L += E)
            z[0] = M[L], z[1] = M[L + 1], z[2] = M[L + 2], z[3] = M[L + 3], U(z, z, W), M[L] = z[0], M[L + 1] = z[1], M[L + 2] = z[2], M[L + 3] = z[3];
          return M;
        };
      }();
    },
    /* 10 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return u;
      }), l.d(d, "clone", function() {
        return e;
      }), l.d(d, "fromValues", function() {
        return n;
      }), l.d(d, "fromRotationTranslationValues", function() {
        return G;
      }), l.d(d, "fromRotationTranslation", function() {
        return y;
      }), l.d(d, "fromTranslation", function() {
        return a;
      }), l.d(d, "fromRotation", function() {
        return I;
      }), l.d(d, "fromMat4", function() {
        return h;
      }), l.d(d, "copy", function() {
        return S;
      }), l.d(d, "identity", function() {
        return p;
      }), l.d(d, "set", function() {
        return X;
      }), l.d(d, "getReal", function() {
        return V;
      }), l.d(d, "getDual", function() {
        return i;
      }), l.d(d, "setReal", function() {
        return b;
      }), l.d(d, "setDual", function() {
        return t;
      }), l.d(d, "getTranslation", function() {
        return m;
      }), l.d(d, "translate", function() {
        return K;
      }), l.d(d, "rotateX", function() {
        return x;
      }), l.d(d, "rotateY", function() {
        return C;
      }), l.d(d, "rotateZ", function() {
        return T;
      }), l.d(d, "rotateByQuatAppend", function() {
        return R;
      }), l.d(d, "rotateByQuatPrepend", function() {
        return J;
      }), l.d(d, "rotateAroundAxis", function() {
        return F;
      }), l.d(d, "add", function() {
        return r;
      }), l.d(d, "multiply", function() {
        return Y;
      }), l.d(d, "mul", function() {
        return H;
      }), l.d(d, "scale", function() {
        return Q;
      }), l.d(d, "dot", function() {
        return w;
      }), l.d(d, "lerp", function() {
        return O;
      }), l.d(d, "invert", function() {
        return q;
      }), l.d(d, "conjugate", function() {
        return k;
      }), l.d(d, "length", function() {
        return P;
      }), l.d(d, "len", function() {
        return D;
      }), l.d(d, "squaredLength", function() {
        return ll;
      }), l.d(d, "sqrLen", function() {
        return _;
      }), l.d(d, "normalize", function() {
        return bl;
      }), l.d(d, "str", function() {
        return $;
      }), l.d(d, "exactEquals", function() {
        return el;
      }), l.d(d, "equals", function() {
        return nl;
      });
      var s = l(2), c = l(7), o = l(6);
      function u() {
        var z = new s.ARRAY_TYPE(8);
        return s.ARRAY_TYPE != Float32Array && (z[0] = 0, z[1] = 0, z[2] = 0, z[4] = 0, z[5] = 0, z[6] = 0, z[7] = 0), z[3] = 1, z;
      }
      function e(z) {
        var M = new s.ARRAY_TYPE(8);
        return M[0] = z[0], M[1] = z[1], M[2] = z[2], M[3] = z[3], M[4] = z[4], M[5] = z[5], M[6] = z[6], M[7] = z[7], M;
      }
      function n(z, M, E, B, g, U, W, L) {
        var N = new s.ARRAY_TYPE(8);
        return N[0] = z, N[1] = M, N[2] = E, N[3] = B, N[4] = g, N[5] = U, N[6] = W, N[7] = L, N;
      }
      function G(z, M, E, B, g, U, W) {
        var L = new s.ARRAY_TYPE(8);
        L[0] = z, L[1] = M, L[2] = E, L[3] = B;
        var N = g * 0.5, v = U * 0.5, f = W * 0.5;
        return L[4] = N * B + v * E - f * M, L[5] = v * B + f * z - N * E, L[6] = f * B + N * M - v * z, L[7] = -N * z - v * M - f * E, L;
      }
      function y(z, M, E) {
        var B = E[0] * 0.5, g = E[1] * 0.5, U = E[2] * 0.5, W = M[0], L = M[1], N = M[2], v = M[3];
        return z[0] = W, z[1] = L, z[2] = N, z[3] = v, z[4] = B * v + g * N - U * L, z[5] = g * v + U * W - B * N, z[6] = U * v + B * L - g * W, z[7] = -B * W - g * L - U * N, z;
      }
      function a(z, M) {
        return z[0] = 0, z[1] = 0, z[2] = 0, z[3] = 1, z[4] = M[0] * 0.5, z[5] = M[1] * 0.5, z[6] = M[2] * 0.5, z[7] = 0, z;
      }
      function I(z, M) {
        return z[0] = M[0], z[1] = M[1], z[2] = M[2], z[3] = M[3], z[4] = 0, z[5] = 0, z[6] = 0, z[7] = 0, z;
      }
      function h(z, M) {
        var E = c.create();
        o.getRotation(E, M);
        var B = new s.ARRAY_TYPE(3);
        return o.getTranslation(B, M), y(z, E, B), z;
      }
      function S(z, M) {
        return z[0] = M[0], z[1] = M[1], z[2] = M[2], z[3] = M[3], z[4] = M[4], z[5] = M[5], z[6] = M[6], z[7] = M[7], z;
      }
      function p(z) {
        return z[0] = 0, z[1] = 0, z[2] = 0, z[3] = 1, z[4] = 0, z[5] = 0, z[6] = 0, z[7] = 0, z;
      }
      function X(z, M, E, B, g, U, W, L, N) {
        return z[0] = M, z[1] = E, z[2] = B, z[3] = g, z[4] = U, z[5] = W, z[6] = L, z[7] = N, z;
      }
      var V = c.copy;
      function i(z, M) {
        return z[0] = M[4], z[1] = M[5], z[2] = M[6], z[3] = M[7], z;
      }
      var b = c.copy;
      function t(z, M) {
        return z[4] = M[0], z[5] = M[1], z[6] = M[2], z[7] = M[3], z;
      }
      function m(z, M) {
        var E = M[4], B = M[5], g = M[6], U = M[7], W = -M[0], L = -M[1], N = -M[2], v = M[3];
        return z[0] = (E * v + U * W + B * N - g * L) * 2, z[1] = (B * v + U * L + g * W - E * N) * 2, z[2] = (g * v + U * N + E * L - B * W) * 2, z;
      }
      function K(z, M, E) {
        var B = M[0], g = M[1], U = M[2], W = M[3], L = E[0] * 0.5, N = E[1] * 0.5, v = E[2] * 0.5, f = M[4], j = M[5], A = M[6], dl = M[7];
        return z[0] = B, z[1] = g, z[2] = U, z[3] = W, z[4] = W * L + g * v - U * N + f, z[5] = W * N + U * L - B * v + j, z[6] = W * v + B * N - g * L + A, z[7] = -B * L - g * N - U * v + dl, z;
      }
      function x(z, M, E) {
        var B = -M[0], g = -M[1], U = -M[2], W = M[3], L = M[4], N = M[5], v = M[6], f = M[7], j = L * W + f * B + N * U - v * g, A = N * W + f * g + v * B - L * U, dl = v * W + f * U + L * g - N * B, il = f * W - L * B - N * g - v * U;
        return c.rotateX(z, M, E), B = z[0], g = z[1], U = z[2], W = z[3], z[4] = j * W + il * B + A * U - dl * g, z[5] = A * W + il * g + dl * B - j * U, z[6] = dl * W + il * U + j * g - A * B, z[7] = il * W - j * B - A * g - dl * U, z;
      }
      function C(z, M, E) {
        var B = -M[0], g = -M[1], U = -M[2], W = M[3], L = M[4], N = M[5], v = M[6], f = M[7], j = L * W + f * B + N * U - v * g, A = N * W + f * g + v * B - L * U, dl = v * W + f * U + L * g - N * B, il = f * W - L * B - N * g - v * U;
        return c.rotateY(z, M, E), B = z[0], g = z[1], U = z[2], W = z[3], z[4] = j * W + il * B + A * U - dl * g, z[5] = A * W + il * g + dl * B - j * U, z[6] = dl * W + il * U + j * g - A * B, z[7] = il * W - j * B - A * g - dl * U, z;
      }
      function T(z, M, E) {
        var B = -M[0], g = -M[1], U = -M[2], W = M[3], L = M[4], N = M[5], v = M[6], f = M[7], j = L * W + f * B + N * U - v * g, A = N * W + f * g + v * B - L * U, dl = v * W + f * U + L * g - N * B, il = f * W - L * B - N * g - v * U;
        return c.rotateZ(z, M, E), B = z[0], g = z[1], U = z[2], W = z[3], z[4] = j * W + il * B + A * U - dl * g, z[5] = A * W + il * g + dl * B - j * U, z[6] = dl * W + il * U + j * g - A * B, z[7] = il * W - j * B - A * g - dl * U, z;
      }
      function R(z, M, E) {
        var B = E[0], g = E[1], U = E[2], W = E[3], L = M[0], N = M[1], v = M[2], f = M[3];
        return z[0] = L * W + f * B + N * U - v * g, z[1] = N * W + f * g + v * B - L * U, z[2] = v * W + f * U + L * g - N * B, z[3] = f * W - L * B - N * g - v * U, L = M[4], N = M[5], v = M[6], f = M[7], z[4] = L * W + f * B + N * U - v * g, z[5] = N * W + f * g + v * B - L * U, z[6] = v * W + f * U + L * g - N * B, z[7] = f * W - L * B - N * g - v * U, z;
      }
      function J(z, M, E) {
        var B = M[0], g = M[1], U = M[2], W = M[3], L = E[0], N = E[1], v = E[2], f = E[3];
        return z[0] = B * f + W * L + g * v - U * N, z[1] = g * f + W * N + U * L - B * v, z[2] = U * f + W * v + B * N - g * L, z[3] = W * f - B * L - g * N - U * v, L = E[4], N = E[5], v = E[6], f = E[7], z[4] = B * f + W * L + g * v - U * N, z[5] = g * f + W * N + U * L - B * v, z[6] = U * f + W * v + B * N - g * L, z[7] = W * f - B * L - g * N - U * v, z;
      }
      function F(z, M, E, B) {
        if (Math.abs(B) < s.EPSILON)
          return S(z, M);
        var g = Math.hypot(E[0], E[1], E[2]);
        B = B * 0.5;
        var U = Math.sin(B), W = U * E[0] / g, L = U * E[1] / g, N = U * E[2] / g, v = Math.cos(B), f = M[0], j = M[1], A = M[2], dl = M[3];
        z[0] = f * v + dl * W + j * N - A * L, z[1] = j * v + dl * L + A * W - f * N, z[2] = A * v + dl * N + f * L - j * W, z[3] = dl * v - f * W - j * L - A * N;
        var il = M[4], cl = M[5], ml = M[6], tl = M[7];
        return z[4] = il * v + tl * W + cl * N - ml * L, z[5] = cl * v + tl * L + ml * W - il * N, z[6] = ml * v + tl * N + il * L - cl * W, z[7] = tl * v - il * W - cl * L - ml * N, z;
      }
      function r(z, M, E) {
        return z[0] = M[0] + E[0], z[1] = M[1] + E[1], z[2] = M[2] + E[2], z[3] = M[3] + E[3], z[4] = M[4] + E[4], z[5] = M[5] + E[5], z[6] = M[6] + E[6], z[7] = M[7] + E[7], z;
      }
      function Y(z, M, E) {
        var B = M[0], g = M[1], U = M[2], W = M[3], L = E[4], N = E[5], v = E[6], f = E[7], j = M[4], A = M[5], dl = M[6], il = M[7], cl = E[0], ml = E[1], tl = E[2], sl = E[3];
        return z[0] = B * sl + W * cl + g * tl - U * ml, z[1] = g * sl + W * ml + U * cl - B * tl, z[2] = U * sl + W * tl + B * ml - g * cl, z[3] = W * sl - B * cl - g * ml - U * tl, z[4] = B * f + W * L + g * v - U * N + j * sl + il * cl + A * tl - dl * ml, z[5] = g * f + W * N + U * L - B * v + A * sl + il * ml + dl * cl - j * tl, z[6] = U * f + W * v + B * N - g * L + dl * sl + il * tl + j * ml - A * cl, z[7] = W * f - B * L - g * N - U * v + il * sl - j * cl - A * ml - dl * tl, z;
      }
      var H = Y;
      function Q(z, M, E) {
        return z[0] = M[0] * E, z[1] = M[1] * E, z[2] = M[2] * E, z[3] = M[3] * E, z[4] = M[4] * E, z[5] = M[5] * E, z[6] = M[6] * E, z[7] = M[7] * E, z;
      }
      var w = c.dot;
      function O(z, M, E, B) {
        var g = 1 - B;
        return w(M, E) < 0 && (B = -B), z[0] = M[0] * g + E[0] * B, z[1] = M[1] * g + E[1] * B, z[2] = M[2] * g + E[2] * B, z[3] = M[3] * g + E[3] * B, z[4] = M[4] * g + E[4] * B, z[5] = M[5] * g + E[5] * B, z[6] = M[6] * g + E[6] * B, z[7] = M[7] * g + E[7] * B, z;
      }
      function q(z, M) {
        var E = ll(M);
        return z[0] = -M[0] / E, z[1] = -M[1] / E, z[2] = -M[2] / E, z[3] = M[3] / E, z[4] = -M[4] / E, z[5] = -M[5] / E, z[6] = -M[6] / E, z[7] = M[7] / E, z;
      }
      function k(z, M) {
        return z[0] = -M[0], z[1] = -M[1], z[2] = -M[2], z[3] = M[3], z[4] = -M[4], z[5] = -M[5], z[6] = -M[6], z[7] = M[7], z;
      }
      var P = c.length, D = P, ll = c.squaredLength, _ = ll;
      function bl(z, M) {
        var E = ll(M);
        if (E > 0) {
          E = Math.sqrt(E);
          var B = M[0] / E, g = M[1] / E, U = M[2] / E, W = M[3] / E, L = M[4], N = M[5], v = M[6], f = M[7], j = B * L + g * N + U * v + W * f;
          z[0] = B, z[1] = g, z[2] = U, z[3] = W, z[4] = (L - B * j) / E, z[5] = (N - g * j) / E, z[6] = (v - U * j) / E, z[7] = (f - W * j) / E;
        }
        return z;
      }
      function $(z) {
        return "quat2(" + z[0] + ", " + z[1] + ", " + z[2] + ", " + z[3] + ", " + z[4] + ", " + z[5] + ", " + z[6] + ", " + z[7] + ")";
      }
      function el(z, M) {
        return z[0] === M[0] && z[1] === M[1] && z[2] === M[2] && z[3] === M[3] && z[4] === M[4] && z[5] === M[5] && z[6] === M[6] && z[7] === M[7];
      }
      function nl(z, M) {
        var E = z[0], B = z[1], g = z[2], U = z[3], W = z[4], L = z[5], N = z[6], v = z[7], f = M[0], j = M[1], A = M[2], dl = M[3], il = M[4], cl = M[5], ml = M[6], tl = M[7];
        return Math.abs(E - f) <= s.EPSILON * Math.max(1, Math.abs(E), Math.abs(f)) && Math.abs(B - j) <= s.EPSILON * Math.max(1, Math.abs(B), Math.abs(j)) && Math.abs(g - A) <= s.EPSILON * Math.max(1, Math.abs(g), Math.abs(A)) && Math.abs(U - dl) <= s.EPSILON * Math.max(1, Math.abs(U), Math.abs(dl)) && Math.abs(W - il) <= s.EPSILON * Math.max(1, Math.abs(W), Math.abs(il)) && Math.abs(L - cl) <= s.EPSILON * Math.max(1, Math.abs(L), Math.abs(cl)) && Math.abs(N - ml) <= s.EPSILON * Math.max(1, Math.abs(N), Math.abs(ml)) && Math.abs(v - tl) <= s.EPSILON * Math.max(1, Math.abs(v), Math.abs(tl));
      }
    },
    /* 11 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return c;
      }), l.d(d, "clone", function() {
        return o;
      }), l.d(d, "fromValues", function() {
        return u;
      }), l.d(d, "copy", function() {
        return e;
      }), l.d(d, "set", function() {
        return n;
      }), l.d(d, "add", function() {
        return G;
      }), l.d(d, "subtract", function() {
        return y;
      }), l.d(d, "multiply", function() {
        return a;
      }), l.d(d, "divide", function() {
        return I;
      }), l.d(d, "ceil", function() {
        return h;
      }), l.d(d, "floor", function() {
        return S;
      }), l.d(d, "min", function() {
        return p;
      }), l.d(d, "max", function() {
        return X;
      }), l.d(d, "round", function() {
        return V;
      }), l.d(d, "scale", function() {
        return i;
      }), l.d(d, "scaleAndAdd", function() {
        return b;
      }), l.d(d, "distance", function() {
        return t;
      }), l.d(d, "squaredDistance", function() {
        return m;
      }), l.d(d, "length", function() {
        return K;
      }), l.d(d, "squaredLength", function() {
        return x;
      }), l.d(d, "negate", function() {
        return C;
      }), l.d(d, "inverse", function() {
        return T;
      }), l.d(d, "normalize", function() {
        return R;
      }), l.d(d, "dot", function() {
        return J;
      }), l.d(d, "cross", function() {
        return F;
      }), l.d(d, "lerp", function() {
        return r;
      }), l.d(d, "random", function() {
        return Y;
      }), l.d(d, "transformMat2", function() {
        return H;
      }), l.d(d, "transformMat2d", function() {
        return Q;
      }), l.d(d, "transformMat3", function() {
        return w;
      }), l.d(d, "transformMat4", function() {
        return O;
      }), l.d(d, "rotate", function() {
        return q;
      }), l.d(d, "angle", function() {
        return k;
      }), l.d(d, "zero", function() {
        return P;
      }), l.d(d, "str", function() {
        return D;
      }), l.d(d, "exactEquals", function() {
        return ll;
      }), l.d(d, "equals", function() {
        return _;
      }), l.d(d, "len", function() {
        return bl;
      }), l.d(d, "sub", function() {
        return $;
      }), l.d(d, "mul", function() {
        return el;
      }), l.d(d, "div", function() {
        return nl;
      }), l.d(d, "dist", function() {
        return z;
      }), l.d(d, "sqrDist", function() {
        return M;
      }), l.d(d, "sqrLen", function() {
        return E;
      }), l.d(d, "forEach", function() {
        return B;
      });
      var s = l(2);
      function c() {
        var g = new s.ARRAY_TYPE(2);
        return s.ARRAY_TYPE != Float32Array && (g[0] = 0, g[1] = 0), g;
      }
      function o(g) {
        var U = new s.ARRAY_TYPE(2);
        return U[0] = g[0], U[1] = g[1], U;
      }
      function u(g, U) {
        var W = new s.ARRAY_TYPE(2);
        return W[0] = g, W[1] = U, W;
      }
      function e(g, U) {
        return g[0] = U[0], g[1] = U[1], g;
      }
      function n(g, U, W) {
        return g[0] = U, g[1] = W, g;
      }
      function G(g, U, W) {
        return g[0] = U[0] + W[0], g[1] = U[1] + W[1], g;
      }
      function y(g, U, W) {
        return g[0] = U[0] - W[0], g[1] = U[1] - W[1], g;
      }
      function a(g, U, W) {
        return g[0] = U[0] * W[0], g[1] = U[1] * W[1], g;
      }
      function I(g, U, W) {
        return g[0] = U[0] / W[0], g[1] = U[1] / W[1], g;
      }
      function h(g, U) {
        return g[0] = Math.ceil(U[0]), g[1] = Math.ceil(U[1]), g;
      }
      function S(g, U) {
        return g[0] = Math.floor(U[0]), g[1] = Math.floor(U[1]), g;
      }
      function p(g, U, W) {
        return g[0] = Math.min(U[0], W[0]), g[1] = Math.min(U[1], W[1]), g;
      }
      function X(g, U, W) {
        return g[0] = Math.max(U[0], W[0]), g[1] = Math.max(U[1], W[1]), g;
      }
      function V(g, U) {
        return g[0] = Math.round(U[0]), g[1] = Math.round(U[1]), g;
      }
      function i(g, U, W) {
        return g[0] = U[0] * W, g[1] = U[1] * W, g;
      }
      function b(g, U, W, L) {
        return g[0] = U[0] + W[0] * L, g[1] = U[1] + W[1] * L, g;
      }
      function t(g, U) {
        var W = U[0] - g[0], L = U[1] - g[1];
        return Math.hypot(W, L);
      }
      function m(g, U) {
        var W = U[0] - g[0], L = U[1] - g[1];
        return W * W + L * L;
      }
      function K(g) {
        var U = g[0], W = g[1];
        return Math.hypot(U, W);
      }
      function x(g) {
        var U = g[0], W = g[1];
        return U * U + W * W;
      }
      function C(g, U) {
        return g[0] = -U[0], g[1] = -U[1], g;
      }
      function T(g, U) {
        return g[0] = 1 / U[0], g[1] = 1 / U[1], g;
      }
      function R(g, U) {
        var W = U[0], L = U[1], N = W * W + L * L;
        return N > 0 && (N = 1 / Math.sqrt(N)), g[0] = U[0] * N, g[1] = U[1] * N, g;
      }
      function J(g, U) {
        return g[0] * U[0] + g[1] * U[1];
      }
      function F(g, U, W) {
        var L = U[0] * W[1] - U[1] * W[0];
        return g[0] = g[1] = 0, g[2] = L, g;
      }
      function r(g, U, W, L) {
        var N = U[0], v = U[1];
        return g[0] = N + L * (W[0] - N), g[1] = v + L * (W[1] - v), g;
      }
      function Y(g, U) {
        U = U || 1;
        var W = s.RANDOM() * 2 * Math.PI;
        return g[0] = Math.cos(W) * U, g[1] = Math.sin(W) * U, g;
      }
      function H(g, U, W) {
        var L = U[0], N = U[1];
        return g[0] = W[0] * L + W[2] * N, g[1] = W[1] * L + W[3] * N, g;
      }
      function Q(g, U, W) {
        var L = U[0], N = U[1];
        return g[0] = W[0] * L + W[2] * N + W[4], g[1] = W[1] * L + W[3] * N + W[5], g;
      }
      function w(g, U, W) {
        var L = U[0], N = U[1];
        return g[0] = W[0] * L + W[3] * N + W[6], g[1] = W[1] * L + W[4] * N + W[7], g;
      }
      function O(g, U, W) {
        var L = U[0], N = U[1];
        return g[0] = W[0] * L + W[4] * N + W[12], g[1] = W[1] * L + W[5] * N + W[13], g;
      }
      function q(g, U, W, L) {
        var N = U[0] - W[0], v = U[1] - W[1], f = Math.sin(L), j = Math.cos(L);
        return g[0] = N * j - v * f + W[0], g[1] = N * f + v * j + W[1], g;
      }
      function k(g, U) {
        var W = g[0], L = g[1], N = U[0], v = U[1], f = Math.sqrt(W * W + L * L) * Math.sqrt(N * N + v * v), j = f && (W * N + L * v) / f;
        return Math.acos(Math.min(Math.max(j, -1), 1));
      }
      function P(g) {
        return g[0] = 0, g[1] = 0, g;
      }
      function D(g) {
        return "vec2(" + g[0] + ", " + g[1] + ")";
      }
      function ll(g, U) {
        return g[0] === U[0] && g[1] === U[1];
      }
      function _(g, U) {
        var W = g[0], L = g[1], N = U[0], v = U[1];
        return Math.abs(W - N) <= s.EPSILON * Math.max(1, Math.abs(W), Math.abs(N)) && Math.abs(L - v) <= s.EPSILON * Math.max(1, Math.abs(L), Math.abs(v));
      }
      var bl = K, $ = y, el = a, nl = I, z = t, M = m, E = x, B = function() {
        var g = c();
        return function(U, W, L, N, v, f) {
          var j, A;
          for (W || (W = 2), L || (L = 0), N ? A = Math.min(N * W + L, U.length) : A = U.length, j = L; j < A; j += W)
            g[0] = U[j], g[1] = U[j + 1], v(g, g, f), U[j] = g[0], U[j + 1] = g[1];
          return U;
        };
      }();
    },
    /* 12 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(13);
      l.d(d, "Renderer", function() {
        return s.default;
      });
      var c = l(40);
      l.d(d, "Figure2D", function() {
        return c.default;
      });
      var o = l(56);
      l.d(d, "Mesh2D", function() {
        return o.default;
      });
      var u = l(29);
      l.d(d, "MeshCloud", function() {
        return u.default;
      });
      var e = l(23);
      l.d(d, "parseFont", function() {
        return e.default;
      });
      var n = l(31);
      l.d(d, "parseColor", function() {
        return n.default;
      });
      var G = l(21);
      l.d(d, "ENV", function() {
        return G.default;
      }), l(1).glMatrix.setMatrixArrayType(Array);
    },
    /* 13 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return T;
      });
      var s = l(14), c = l(1), o = l(20), u = l(27), e = l(25), n = l(40), G = l(56), y = l(29), a = l(59), I = l(21), h = l(63);
      l(1).glMatrix.setMatrixArrayType(Array);
      const S = {
        autoUpdate: !1,
        // premultipliedAlpha: true,
        preserveDrawingBuffer: !1,
        // depth: false,
        // antialias: false,
        bufferSize: 1500
      }, p = `attribute vec3 a_vertexPosition;
attribute vec3 a_vertexTextureCoord;
varying vec3 vTextureCoord;
uniform mat3 viewMatrix;
uniform mat3 projectionMatrix;

void main() {
  gl_PointSize = 1.0;
  vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
  gl_Position = vec4(pos.xy, 1.0, 1.0);    
  vTextureCoord = a_vertexTextureCoord;              
}
`, X = `precision mediump float;
varying vec3 vTextureCoord;
uniform sampler2D u_texSampler;
void main() {
  gl_FragColor = texture2D(u_texSampler, vTextureCoord.xy);
}
`, V = Symbol("glRenderer"), i = Symbol("canvasRenderer"), b = Symbol("options"), t = Symbol("globalTransform"), m = Symbol("applyGlobalTransform"), K = Symbol("canvas");
      function x(R) {
        const J = R.gl, F = R.fbo;
        F && J.bindFramebuffer(J.FRAMEBUFFER, F), R._draw(), F && J.bindFramebuffer(J.FRAMEBUFFER, null);
      }
      function C(R, J, F, r) {
        const Y = R.createTexture(J.canvas), H = [[[0, 0], [F, 0], [F, r], [0, r], [0, 0]]];
        H.closed = !0;
        const Q = new G.default({
          contours: H
        });
        Q.setTexture(Y), R.setMeshData([Q.meshData]), x(R), Y.delete(), J.clearRect(0, 0, F, r), delete J._filter;
      }
      class T {
        constructor(J, F = {}) {
          let r = F.contextType;
          if (r || (typeof WebGL2RenderingContext == "function" ? r = "webgl2" : typeof WebGLRenderingContext == "function" ? r = "webgl" : r = "2d"), !J.getContext) {
            const Y = J;
            J = {
              getContext() {
                return Y;
              },
              width: F.width,
              height: F.height
            }, Y.canvas = J, r = "2d";
          }
          if (this[K] = J, r !== "webgl" && r !== "webgl2" && r !== "2d")
            throw new Error(`Unknown context type ${r}`);
          if (F.contextType = r, this[b] = Object.assign({}, S, F), r === "webgl" || r === "webgl2") {
            r === "webgl2" && (this[b].webgl2 = !0);
            const Y = new s.default(J, this[b]);
            r === "webgl2" && !Y.isWebGL2 && (F.contextType = "webgl"), Object(h.createShaders)(Y), Object(h.applyShader)(Y), Object(h.createCloudShaders)(Y);
            const H = Y.gl;
            H.clearColor(0, 0, 0, 0), H.blendFuncSeparate(H.SRC_ALPHA, H.ONE_MINUS_SRC_ALPHA, H.ONE, H.ONE_MINUS_SRC_ALPHA), this[V] = Y;
          } else
            this[i] = new o.default(J, this[b]);
          this[t] = [1, 0, 0, 0, 1, 0, 0, 0, 1], this.updateResolution();
        }
        get canvas() {
          return this[K];
        }
        get canvasRenderer() {
          return this[i];
        }
        get glRenderer() {
          return this[V];
        }
        get isWebGL2() {
          return this[V] && this[V].isWebGL2;
        }
        get options() {
          return this[b];
        }
        get globalTransformMatrix() {
          const J = this[t];
          return [J[0], J[1], J[3], J[4], J[6], J[7]];
        }
        get viewMatrix() {
          return this[t];
        }
        [m]() {
          const J = this[V] || this[i];
          if (this[V]) {
            const {
              width: F,
              height: r
            } = this.canvas;
            J.uniforms.viewMatrix = this.viewMatrix, J.uniforms.projectionMatrix = this.projectionMatrix, J.uniforms.u_resolution = [F, r];
          }
        }
        updateResolution() {
          const {
            width: J,
            height: F
          } = this.canvas, r = [
            // translation
            1,
            0,
            0,
            0,
            1,
            0,
            -J / 2,
            -F / 2,
            1
          ], Y = [
            // scale
            2 / J,
            0,
            0,
            0,
            -2 / F,
            0,
            0,
            0,
            1
          ], H = c.mat3.multiply(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), Y, r);
          this.projectionMatrix = H, this[V] && this[V].gl.viewport(0, 0, J, F);
        }
        createTexture(J, F) {
          return (this[V] || this[i]).createTexture(J, F);
        }
        /* async */
        loadTexture(J, {
          useImageBitmap: F = !1
        } = {}) {
          return (this[V] || this[i]).loadTexture(J, {
            useImageBitmap: F
          });
        }
        createText(J, {
          font: F = "16px arial",
          fillColor: r = null,
          strokeColor: Y = null,
          strokeWidth: H = 1
        } = {}) {
          if (this[V]) {
            const Q = I.default.createText(J, {
              font: F,
              fillColor: r,
              strokeColor: Y,
              strokeWidth: H
            });
            return {
              image: this.createTexture(Q.image),
              rect: Q.rect
            };
          }
          return {
            _img: {
              font: F,
              fillColor: r,
              strokeColor: Y,
              strokeWidth: H,
              text: J
            }
          };
        }
        createProgram({
          vertex: J,
          fragment: F,
          options: r
        } = {}) {
          if (this[V]) {
            const Y = this[V].compileSync(F, J);
            return Y._attribOpts = r, Y;
          }
          throw new Error("Context 2D cannot create webgl program.");
        }
        createPassProgram({
          vertex: J = p,
          fragment: F = X,
          options: r
        } = {}) {
          return this.createProgram({
            vertex: J,
            fragment: F,
            options: r
          });
        }
        useProgram(J, F = {}) {
          if (this[V]) {
            const r = Object.assign({}, J._attribOpts, F);
            return this[V].useProgram(J, r);
          }
          throw new Error("Context 2D cannot use webgl program.");
        }
        deleteTexture(J) {
          return (this[V] || this[i]).deleteTexture(J);
        }
        clear(...J) {
          if (this[V]) {
            const F = this[V].gl;
            F.clear(F.COLOR_BUFFER_BIT);
          } else
            this[i].clear(...J);
        }
        drawMeshCloud(J, {
          clear: F = !1,
          program: r = null
        } = {}) {
          const Y = this[V] || this[i], H = r || J.program;
          if (this[V]) {
            const Q = Y.gl;
            if (F && Q.clear(Q.COLOR_BUFFER_BIT), H)
              Y.program !== H && this.useProgram(H, {
                a_color: {
                  type: "UNSIGNED_BYTE",
                  normalize: !0
                },
                a_fillCloudColor: {
                  type: "UNSIGNED_BYTE",
                  normalize: !0
                },
                a_strokeCloudColor: {
                  type: "UNSIGNED_BYTE",
                  normalize: !0
                },
                a_frameIndex: {
                  type: "UNSIGNED_BYTE",
                  normalize: !1
                }
              });
            else {
              const w = J.mesh.meshData, O = !!w.uniforms.u_texSampler, q = !!w.uniforms.u_filterFlag, k = !!w.uniforms.u_radialGradientVector, P = J.hasCloudColor, D = J.hasCloudFilter, ll = !!w.uniforms.u_clipSampler;
              Object(h.applyCloudShader)(Y, {
                hasTexture: O,
                hasFilter: q,
                hasGradient: k,
                hasCloudColor: P,
                hasCloudFilter: D,
                hasClipPath: ll
              });
            }
            this[m](), Y.setMeshData([J.meshData]), J.beforeRender && J.beforeRender(Q, J), x(Y), J.afterRender && J.afterRender(Q, J);
          } else
            Y.setTransform(this.globalTransformMatrix), Y.drawMeshCloud(J, {
              clear: F,
              hook: !1
            });
        }
        drawMeshes(J, {
          clear: F = !1,
          program: r = null
        } = {}) {
          const Y = this[V] || this[i];
          if (this[V]) {
            const H = Y.fbo, Q = Object(u.default)(this, J, r == null), w = Y.gl;
            F && w.clear(w.COLOR_BUFFER_BIT);
            const O = !Object(a.isUnitTransform)(this.globalTransformMatrix);
            this._drawCalls = 0;
            for (const q of Q) {
              this._drawCalls++;
              const k = r || q.program;
              if (q instanceof y.default)
                this.drawMeshCloud(q, {
                  clear: F,
                  program: k
                });
              else {
                const {
                  width: P,
                  height: D
                } = this.canvas;
                if (q.beforeRender && q.beforeRender(w, q), q.pass.length && ((!this.fbo || this.fbo.width !== P || this.fbo.height !== D) && (this.fbo = {
                  width: P,
                  height: D,
                  target: Y.createFBO(),
                  buffer: Y.createFBO(),
                  swap() {
                    [this.target, this.buffer] = [this.buffer, this.target];
                  }
                }), Y.bindFBO(this.fbo.target)), !k && q.filterCanvas) {
                  Object(h.applyShader)(Y, {
                    hasTexture: !0
                  });
                  let ll = this.filterContext;
                  ll || (ll = I.default.createCanvas(P, D).getContext("2d"), this.filterContext = ll);
                  const _ = J[q.packIndex], bl = _.filter, $ = J[q.packIndex + 1], el = J[q.packIndex - 1];
                  (!el || !el.filterCanvas || el.filter !== bl) && (!$ || !$.filterCanvas || $.filter !== bl) ? (O ? (ll.save(), Object(e.drawMesh2D)(_, ll, !1), ll.restore(), Object(e.applyFilter)(ll, bl)) : Object(e.drawMesh2D)(_, ll, !0), this[m](), C(Y, ll, P, D)) : (O && ll.save(), Object(e.drawMesh2D)(_, ll, !1), O && ll.restore(), (!$ || !$.filterCanvas || _.filter !== $.filter) && (Object(e.applyFilter)(ll, bl), this[m](), C(Y, ll, P, D)));
                } else {
                  if (k)
                    Y.program !== k && this.useProgram(k, {
                      a_color: {
                        type: "UNSIGNED_BYTE",
                        normalize: !0
                      }
                    });
                  else {
                    const ll = !!q.uniforms.u_texSampler, _ = !!q.uniforms.u_filterFlag, bl = !!q.uniforms.u_radialGradientVector, $ = !!q.uniforms.u_clipSampler;
                    Object(h.applyShader)(Y, {
                      hasTexture: ll,
                      hasFilter: _,
                      hasGradient: bl,
                      hasClipPath: $
                    });
                  }
                  q.filterCanvas && console.warn("User program ignored some filter effects."), this[m](), Y.setMeshData([q]), x(Y);
                }
                if (q.pass.length) {
                  const ll = q.pass.length;
                  q.pass.forEach((_, bl) => {
                    _.blend = q.enableBlend, _.setTexture(Y.fbo.texture), bl === ll - 1 ? Y.bindFBO(H) : (this.fbo.swap(), Y.bindFBO(this.fbo.target)), _.program ? Y.useProgram(_.program) : (this.defaultPassProgram = this.defaultPassProgram || this.createPassProgram(), Y.useProgram(this.defaultPassProgram)), Y.setMeshData([_.meshData]), w.clear(w.COLOR_BUFFER_BIT), x(Y);
                  });
                }
                q.afterRender && q.afterRender(w, q);
              }
            }
          } else
            Y.setTransform(this.globalTransformMatrix), Y.drawMeshes(J, {
              clear: F
            });
        }
        drawImage(J, ...F) {
          const r = F.length;
          if (r < 2)
            throw new TypeError(`Failed to execute 'drawImage' on 'Renderer': 3 arguments required, but only ${F.length + 1} present.`);
          if (r !== 2 && r !== 4 && r !== 8)
            throw new TypeError(`Failed to execute 'drawImage' on 'Renderer': Valid arities are: [3, 5, 9], but ${F.length + 1} arguments provided.`);
          let Y = null, H = null;
          r === 2 ? Y = [F[0], F[1], J.width, J.height] : r === 4 ? Y = F : r === 8 && (H = F.slice(0, 4), Y = F.slice(4));
          const Q = this.createTexture(J), {
            width: w,
            height: O
          } = this.canvas, q = new n.default();
          q.rect(Y[0], Y[1], w, O);
          const k = new G.default(q, {
            width: w,
            height: O
          });
          k.setTexture(Q, {
            rect: Y,
            srcRect: H
          }), this.drawMeshes([k]), this.deleteTexture(Q);
        }
        setGlobalTransform(...J) {
          return this[t] = [J[0], J[1], 0, J[2], J[3], 0, J[4], J[5], 1], this;
        }
        globalTransform(...J) {
          const F = this[t];
          return this[t] = c.mat3.multiply(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), F, J), this;
        }
        globalTranslate(J, F) {
          let r = c.mat3.create();
          return r = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), r, [J, F]), this.globalTransform(...r);
        }
        globalRotate(J, [F, r] = [0, 0]) {
          let Y = c.mat3.create();
          return Y = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), Y, [F, r]), Y = c.mat3.rotate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), Y, J), Y = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), Y, [-F, -r]), this.globalTransform(...Y);
        }
        globalScale(J, F = J, [r, Y] = [0, 0]) {
          let H = c.mat3.create();
          return H = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, [r, Y]), H = c.mat3.scale(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, [J, F]), H = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, [-r, -Y]), this.globalTransform(...H);
        }
        globalSkew(J, F = J, [r, Y] = [0, 0]) {
          let H = c.mat3.create();
          return H = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, [r, Y]), H = c.mat3.multiply(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, c.mat3.fromValues(1, Math.tan(F), Math.tan(J), 1, 0, 0)), H = c.mat3.translate(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), H, [-r, -Y]), this.globalTransform(...H);
        }
        transformPoint(J, F, r) {
          let Y = this.globalTransformMatrix;
          r && (Y = c.mat3.multiply(Array.of(0, 0, 0, 0, 0, 0, 0, 0, 0), Y, r));
          const H = J * Y[0] + F * Y[2] + Y[4], Q = J * Y[1] + F * Y[3] + Y[5];
          return [H, Q];
        }
      }
    },
    /* 14 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(15);
      l(1).glMatrix.setMatrixArrayType(Array), d.default = s.default;
    },
    /* 15 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return h;
      });
      var s = l(16), c = l(17), o = l(18), u = l(19);
      l(1).glMatrix.setMatrixArrayType(Array);
      function e(S, p, X) {
        return p in S ? Object.defineProperty(S, p, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : S[p] = X, S;
      }
      const n = {};
      function G(S, p = 3) {
        const X = [], V = S.length;
        for (let i = 0; i < V; i++)
          i % p < 2 && X.push(0.5 * (S[i] + 1));
        return X;
      }
      function y(S, p) {
        const X = p._buffers;
        Object.values(X).forEach((V) => {
          S.deleteBuffer(V);
        }), p._buffers = {};
      }
      function a(S, p, X) {
        return S.activeTexture(S.TEXTURE0 + X), Array.isArray(p._img) ? S.bindTexture(S.TEXTURE_CUBE_MAP, p) : S.bindTexture(S.TEXTURE_2D, p), p;
      }
      const I = {
        int: "1i",
        ivec2: "2i",
        ivec3: "3i",
        ivec4: "4i",
        float: "1f",
        vec2: "2f",
        vec3: "3f",
        vec4: "4f",
        mat2: "Matrix2fv",
        mat3: "Matrix3fv",
        mat4: "Matrix4fv",
        sampler1D: "sampler1D",
        sampler2D: "sampler2D",
        sampler3D: "sampler3D",
        samplerCube: "samplerCube",
        sampler1DShadow: "sampler1DShadow",
        sampler2DShadow: "sampler2DShadow",
        sampler2DRect: "sampler2DRect",
        sampler2DRectShadow: "sampler2DRectShadow"
      };
      class h {
        static addLibs(p = {}) {
          Object.assign(n, p);
        }
        static FLOAT(p, X) {
          return Object(s.pointsToBuffer)(p, Float32Array, X);
        }
        static UNSIGNED_BYTE(p, X) {
          return Object(s.pointsToBuffer)(p, Uint8Array, X);
        }
        static UNSIGNED_SHORT(p, X) {
          return Object(s.pointsToBuffer)(p, Uint16Array, X);
        }
        static BYTE(p, X) {
          return Object(s.pointsToBuffer)(p, Int8Array, X);
        }
        static SHORT(p, X) {
          return Object(s.pointsToBuffer)(p, Int16Array, X);
        }
        constructor(p, X = {}) {
          this.options = Object.assign({}, h.defaultOptions, X), this.canvas = p;
          let V;
          this.options.webgl2 && (V = p.getContext("webgl2", this.options)), V == null && (V = Object(s.setupWebGL)(p, this.options), this.aia_ext = V.getExtension("ANGLE_instanced_arrays")), this.gl = V, V.viewport(0, 0, p.width, p.height), V.clearColor(0, 0, 0, 0), V.blendFuncSeparate(V.SRC_ALPHA, V.ONE_MINUS_SRC_ALPHA, V.ONE, V.ONE_MINUS_SRC_ALPHA), this.programs = [], this._events = {};
        }
        get program() {
          const p = this.gl;
          return p.getParameter(p.CURRENT_PROGRAM);
        }
        // WebGLRenderingContext.uniform[1234][fi][v]()
        // WebGLRenderingContext.uniformMatrix[234]fv()
        _declareUniform(p, X, V = "1f") {
          const i = this.gl, b = i.getUniformLocation(p, X);
          let t;
          const m = this;
          if (/^sampler/.test(V)) {
            const K = p._samplerMap, x = p._bindTextures;
            Object.defineProperty(p.uniforms, X, {
              get() {
                return t;
              },
              set(C) {
                t = C;
                const T = K[X] != null ? K[X] : x.length;
                x[T] = C, a(i, C, T), K[X] || (K[X] = T, i.uniform1i(b, T)), m.options.autoUpdate && m.update();
              },
              configurable: !1,
              enumerable: !0
            });
          } else {
            const K = V.indexOf("Matrix") === 0, x = !K && /v$/.test(V), C = i[`uniform${V}`].bind(i);
            Object.defineProperty(p.uniforms, X, {
              get() {
                return t;
              },
              set(T) {
                t = T, typeof T == "number" && (T = [T]), K ? C(b, !1, T) : x ? C(b, T) : C(b, ...T), m.options.autoUpdate && m.update();
              },
              configurable: !1,
              enumerable: !0
            });
          }
        }
        _draw() {
          const p = this.program;
          p.meshData.forEach((X, V) => {
            const {
              positions: i,
              cells: b,
              instanceCount: t,
              cellsCount: m,
              attributes: K,
              uniforms: x,
              textureCoord: C,
              enableBlend: T
            } = X, R = this.gl;
            let J = X.mode != null ? X.mode : R.TRIANGLES;
            typeof J == "string" && (J = R[J]), T ? R.enable(R.BLEND) : R.disable(R.BLEND), R.bindBuffer(R.ARRAY_BUFFER, p._buffers.verticesBuffer), R.bufferData(R.ARRAY_BUFFER, i, R.STATIC_DRAW), b && (R.bindBuffer(R.ELEMENT_ARRAY_BUFFER, p._buffers.cellsBuffer), R.bufferData(R.ELEMENT_ARRAY_BUFFER, b, R.STATIC_DRAW));
            const F = [];
            K && Object.values(K).forEach(({
              name: Y,
              data: H,
              divisor: Q
            }) => {
              if (R.bindBuffer(R.ARRAY_BUFFER, p._buffers[Y]), R.bufferData(R.ARRAY_BUFFER, H, R.STATIC_DRAW), Q != null) {
                const w = R.getAttribLocation(p, Y);
                w >= 0 && (R.enableVertexAttribArray(w), F.push(w), R.vertexAttribDivisor ? R.vertexAttribDivisor(w, Q) : this.aia_ext && this.aia_ext.vertexAttribDivisorANGLE(w, Q));
              }
            }), x && Object.entries(x).forEach(([Y, H]) => {
              this.uniforms[Y] = H;
            });
            let r;
            if (!b) {
              const Y = p._dimension;
              r = i.length / Y;
            }
            if (p._enableTextures && p._buffers.texCoordBuffer) {
              const Y = C || G(i, p._dimension);
              R.bindBuffer(R.ARRAY_BUFFER, p._buffers.texCoordBuffer), R.bufferData(R.ARRAY_BUFFER, h.FLOAT(Y), R.STATIC_DRAW);
            }
            t != null ? (b ? R.drawElementsInstanced ? R.drawElementsInstanced(J, m, R.UNSIGNED_SHORT, 0, t) : this.aia_ext && this.aia_ext.drawElementsInstancedANGLE(J, m, R.UNSIGNED_SHORT, 0, t) : R.drawArraysInstanced ? R.drawArraysInstanced(J, 0, r, t) : this.aia_ext.drawArraysInstancedANGLE(J, 0, r, t), F.forEach((Y) => {
              R.vertexAttribDivisor ? R.vertexAttribDivisor(Y, null) : this.aia_ext && this.aia_ext.vertexAttribDivisorANGLE(Y, null);
            })) : b ? R.drawElements(J, m, R.UNSIGNED_SHORT, 0) : R.drawArrays(J, 0, r);
          });
        }
        get isWebGL2() {
          return typeof WebGL2RenderingContext < "u" && this.gl instanceof WebGL2RenderingContext;
        }
        get enableTextures() {
          return this.program && this.program._enableTextures;
        }
        get uniforms() {
          const p = this.program;
          if (!p || !p.uniforms)
            throw Error("No avaliable program.");
          return p.uniforms;
        }
        deleteProgram(p) {
          const X = this.gl;
          this.program === p && (this.startRender = !1, this._renderFrameID && (cancelAnimationFrame(this._renderFrameID), delete this._renderFrameID), X.useProgram(null));
          const V = this.programs.indexOf(p);
          V >= 0 && this.programs.splice(V, 1), y(X, p), X.deleteProgram(p);
        }
        /**
          [{
            positions: ...
            cells: ...
            textureCoord: ...
            attributes: {name: {data:..., normalize: true}},
            uniforms: ...
          }]
         */
        setMeshData(p) {
          Array.isArray(p) || (p = [p]);
          const X = this.program;
          X.meshData = p.map(({
            mode: V,
            positions: i,
            instanceCount: b,
            cells: t,
            cellsCount: m,
            attributes: K,
            uniforms: x,
            textureCoord: C,
            enableBlend: T
          }) => {
            const R = {
              positions: h.FLOAT(i),
              uniforms: x,
              enableBlend: !!T,
              textureCoord: h.FLOAT(C)
            };
            if (t && (R.cells = h.USHORT(t), R.cellsCount = m || R.cells.length), V != null && (R.mode = V), b != null) {
              if (!this.isWebGL2 && !this.aia_ext)
                throw new Error("Cannot use instanceCount in this rendering context, use webgl2 context instead.");
              R.instanceCount = b;
            }
            if (K) {
              const J = {};
              Object.entries(K).forEach(([F, r]) => {
                if (!X._attribute[F])
                  X._attribute[F] = "ignored";
                else if (X._attribute[F] !== "ignored") {
                  const {
                    name: Y,
                    type: H
                  } = X._attribute[F];
                  let Q = r.data || r;
                  if (Array.isArray(Q) && (Q = h[H](Q)), J[F] = {
                    name: Y,
                    data: Q
                  }, r.divisor != null) {
                    if (!this.isWebGL2 && !this.aia_ext)
                      throw new Error("Cannot use divisor in this rendering context, use webgl2 context instead.");
                    J[F].divisor = r.divisor;
                  }
                }
              }), R.attributes = J;
            }
            return R;
          }), this.options.autoUpdate && this.update();
        }
        createProgram(p, X) {
          const V = /^\s*uniform\s+sampler/mg.test(p);
          p == null && (p = o.default), X == null && (X = V ? u.default : c.default);
          const i = this.gl, b = Object(s.createProgram)(i, X, p);
          b.shaderText = {
            vertexShader: X,
            fragmentShader: p
          }, b._buffers = {}, b._attribute = {}, b.uniforms = {}, b._samplerMap = {}, b._bindTextures = [];
          const t = new RegExp(`(?:attribute|in) vec(\\d) ${this.options.vertexPosition}`, "im");
          let m = X.match(t);
          m && (b._dimension = Number(m[1]));
          const K = new RegExp(`(?:attribute|in) vec(\\d) ${this.options.vertexTextureCoord}`, "im");
          m = X.match(K), m && (b._texCoordSize = Number(m[1]));
          const x = /^\s*(?:attribute|in) (\w+?)(\d*) (\w+)/gim;
          if (m = X.match(x), m)
            for (let R = 0; R < m.length; R++) {
              const J = /^\s*(?:attribute|in) (\w+?)(\d*) (\w+)/im, F = m[R].match(J);
              if (F && F[3] !== this.options.vertexPosition && F[3] !== this.options.vertexTextureCoord) {
                let [, r, Y, H] = F;
                r === "mat" && (Y **= 2), b._buffers[H] = i.createBuffer(), b._attribute[H] = {
                  name: H,
                  type: r,
                  size: Number(Y) || 1
                };
              }
            }
          const C = /^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/mg;
          m = X.match(C) || [], m = m.concat(p.match(C) || []), m.forEach((R) => {
            const J = R.match(/^\s*uniform\s+(\w+)\s+(\w+)(\[\d+\])?/);
            let [F, r, Y] = J.slice(1);
            F = I[F], Y = !!Y, F.indexOf("Matrix") !== 0 && Y && (F += "v"), this._declareUniform(b, r, F);
          }), b._buffers.verticesBuffer = i.createBuffer(), b._buffers.cellsBuffer = i.createBuffer();
          const T = i.getAttribLocation(b, this.options.vertexTextureCoord);
          return b._enableTextures = T >= 0, b._enableTextures && (b._buffers.texCoordBuffer = i.createBuffer()), this.programs.push(b), b;
        }
        useProgram(p, X = {}) {
          this.startRender = !1, this._renderFrameID && (cancelAnimationFrame(this._renderFrameID), delete this._renderFrameID);
          const V = this.gl;
          V.useProgram(p);
          const i = p._dimension;
          V.bindBuffer(V.ARRAY_BUFFER, p._buffers.verticesBuffer);
          const b = V.getAttribLocation(p, this.options.vertexPosition);
          if (V.vertexAttribPointer(b, i, V.FLOAT, !1, 0, 0), V.enableVertexAttribArray(b), p._enableTextures) {
            V.bindBuffer(V.ARRAY_BUFFER, p._buffers.texCoordBuffer);
            const t = V.getAttribLocation(p, this.options.vertexTextureCoord);
            V.vertexAttribPointer(t, p._texCoordSize || 2, V.FLOAT, !1, 0, 0), V.enableVertexAttribArray(t);
          }
          if (Object.entries(p._attribute).forEach(([t, m]) => {
            if (m !== "ignored") {
              const K = m.size, x = X[t] || {}, C = !!x.normalize;
              let T = x.type || "FLOAT";
              const R = x.key || t;
              T === "UBYTE" && (T = "UNSIGNED_BYTE"), T === "USHORT" && (T = "UNSIGNED_SHORT"), m.type = T, R && R !== t && (p._attribute[R] = m), V.bindBuffer(V.ARRAY_BUFFER, p._buffers[t]);
              const J = V.getAttribLocation(p, t);
              J >= 0 && (V.vertexAttribPointer(J, K, V[T], C, 0, 0), V.enableVertexAttribArray(J));
            }
          }), !p.meshData) {
            const t = [[-1, -1, 0, 1].slice(0, i), [1, -1, 0, 1].slice(0, i), [1, 1, 0, 1].slice(0, i), [-1, 1, 0, 1].slice(0, i)], m = [[0, 1, 3], [3, 1, 2]];
            this.setMeshData({
              positions: t,
              cells: m
            });
          }
          return p;
        }
        compileSync(p, X) {
          p = p || o.default;
          const V = {};
          function i(K) {
            K = K.replace(/^\s*/mg, "");
            const x = [], C = K.match(/^#pragma\s+include\s+.*/mg);
            if (C) {
              for (let T = 0; T < C.length; T++) {
                const J = C[T].match(/(?:<|")(.*)(?:>|")/);
                if (J) {
                  const F = J[0].indexOf("<") === 0 ? "lib" : "link";
                  let r = J[1];
                  if (r === "graph" && (r = "graphics"), V[r])
                    x.push(`/* included ${r} */`);
                  else if (V[r] = !0, F === "lib") {
                    const Y = i(n[r]);
                    x.push(Y);
                  } else if (F === "link")
                    throw new Error("Cannot load external links synchronously. Use compile instead of compileSync.");
                }
              }
              x.forEach((T) => {
                K = K.replace(/^#pragma\s+include\s+.*/m, T);
              });
            }
            return K;
          }
          const b = i(p), t = X ? i(X) : null;
          return this.createProgram(b, t);
        }
        async compile(p, X) {
          p = p || o.default;
          const V = {};
          async function i(K) {
            K = K.replace(/^\s*/mg, "");
            const x = [], C = K.match(/^#pragma\s+include\s+.*/mg);
            if (C) {
              for (let T = 0; T < C.length; T++) {
                const J = C[T].match(/(?:<|")(.*)(?:>|")/);
                if (J) {
                  const F = J[0].indexOf("<") === 0 ? "lib" : "link";
                  let r = J[1];
                  if (r === "graph" && (r = "graphics"), V[r])
                    x.push(`/* included ${r} */`);
                  else if (V[r] = !0, F === "lib") {
                    const Y = await i(n[r]);
                    x.push(Y);
                  } else if (F === "link") {
                    let Y = await h.fetchShader(r);
                    Y = await i(Y), x.push(Y);
                  }
                }
              }
              x.forEach((T) => {
                K = K.replace(/^#pragma\s+include\s+.*/m, T);
              });
            }
            return K;
          }
          const b = await i(p), t = X ? await i(X) : null;
          return this.createProgram(b, t);
        }
        async load(p, X = null) {
          return p = await h.fetchShader(p), X && (X = await h.fetchShader(X)), this.compile(p, X);
        }
        createTexture(p = null, {
          wrapS: X = this.gl.CLAMP_TO_EDGE,
          wrapT: V = this.gl.CLAMP_TO_EDGE,
          minFilter: i = this.gl.LINEAR,
          magFilter: b = this.gl.LINEAR
        } = {}) {
          const t = this.gl, m = Array.isArray(p) ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D;
          this._max_texture_image_units = this._max_texture_image_units || t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS), t.activeTexture(t.TEXTURE0 + this._max_texture_image_units - 1);
          const K = t.createTexture();
          t.bindTexture(m, K), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, !0);
          const {
            width: x,
            height: C
          } = this.canvas;
          if (p)
            if (m === t.TEXTURE_CUBE_MAP)
              for (let T = 0; T < 6; T++)
                t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, p[T]);
            else
              t.texImage2D(m, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, p);
          else if (m === t.TEXTURE_CUBE_MAP)
            for (let T = 0; T < 6; T++)
              this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X + T, 0, t.RGBA, x, C, 0, t.RGBA, t.UNSIGNED_BYTE, null);
          else
            t.texImage2D(m, 0, t.RGBA, x, C, 0, t.RGBA, t.UNSIGNED_BYTE, null);
          return t.texParameteri(m, t.TEXTURE_MIN_FILTER, i), t.texParameteri(m, t.TEXTURE_MAG_FILTER, b), t.texParameteri(m, t.TEXTURE_WRAP_S, X), t.texParameteri(m, t.TEXTURE_WRAP_T, V), m === t.TEXTURE_CUBE_MAP && (p.width = p[0].width, p.height = p[0].height), t.bindTexture(m, null), K._img = p || {
            width: x,
            height: C
          }, K.delete = () => {
            this.deleteTexture(K);
          }, K;
        }
        deleteTexture(p) {
          const X = p._img;
          this.gl.deleteTexture(p), typeof X.close == "function" && X.close();
        }
        async loadTexture(p, {
          useImageBitmap: X = !0
        } = {}) {
          const V = await h.loadImage(p, {
            useImageBitmap: X
          });
          return this.createTexture(V);
        }
        createFBO({
          color: p = 1,
          blend: X = !1,
          depth: V = this.options.depth !== !1,
          stencil: i = !!this.options.stencil
        } = {}) {
          const b = this.gl, t = b.createFramebuffer();
          b.bindFramebuffer(b.FRAMEBUFFER, t);
          const m = [];
          for (let C = 0; C < p; C++) {
            const T = this.createTexture();
            b.framebufferTexture2D(
              b.FRAMEBUFFER,
              b.COLOR_ATTACHMENT0 + C,
              b.TEXTURE_2D,
              T,
              0
              /* level */
            ), m.push(T);
          }
          t.textures = m, t.texture = m[0], t.blend = X;
          const {
            width: K,
            height: x
          } = this.canvas;
          return V && !i && (t.depthBuffer = b.createRenderbuffer(), b.bindRenderbuffer(b.RENDERBUFFER, t.depthBuffer), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, K, x), b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, t.depthBuffer)), i && !V && (t.stencilBuffer = b.createRenderbuffer(), b.bindRenderbuffer(b.RENDERBUFFER, t.stencilBuffer), b.renderbufferStorage(b.RENDERBUFFER, b.STENCIL_INDEX8, K, x), b.framebufferRenderbuffer(b.FRAMEBUFFER, b.STENCIL_ATTACHMENT, b.RENDERBUFFER, t.stencilBuffer)), V && i && (t.depthStencilBuffer = b.createRenderbuffer(), b.bindRenderbuffer(b.RENDERBUFFER, t.depthStencilBuffer), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_STENCIL, K, x), b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_STENCIL_ATTACHMENT, b.RENDERBUFFER, t.depthStencilBuffer)), b.bindFramebuffer(b.FRAMEBUFFER, null), t;
        }
        bindFBO(p = null) {
          this.fbo = p;
        }
        render({
          clearBuffer: p = !0
        } = {}) {
          this.startRender = !0;
          const X = this.gl;
          let V = this.program;
          V || (V = this.createProgram(), this.useProgram(V)), this.fbo && X.bindFramebuffer(X.FRAMEBUFFER, this.fbo);
          const i = this.options.depth;
          i && X.enable(X.DEPTH_TEST), this.gl.clear(this.gl.COLOR_BUFFER_BIT | (i ? this.gl.DEPTH_BUFFER_BIT : 0) | (this.options.stencil ? this.gl.STENCIL_BUFFER_BIT : 0));
          const b = this._renderFrameID;
          this._draw(), this.fbo && X.bindFramebuffer(X.FRAMEBUFFER, null), this._renderFrameID === b && (this._renderFrameID = null);
        }
        update() {
          this.startRender && this._renderFrameID == null && (this._renderFrameID = requestAnimationFrame(this.render.bind(this)));
        }
      }
      e(h, "defaultOptions", {
        preserveDrawingBuffer: !0,
        autoUpdate: !0,
        vertexPosition: "a_vertexPosition",
        vertexTextureCoord: "a_vertexTextureCoord",
        webgl2: !1
      }), e(h, "UBYTE", h.UNSIGNED_BYTE), e(h, "USHORT", h.UNSIGNED_SHORT), e(h, "fetchShader", s.fetchShader), e(h, "loadImage", s.loadImage);
    },
    /* 16 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "setupWebGL", function() {
        return c;
      }), l.d(d, "createProgram", function() {
        return o;
      }), l.d(d, "pointsToBuffer", function() {
        return u;
      }), l.d(d, "loadImage", function() {
        return n;
      }), l.d(d, "fetchShader", function() {
        return y;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(a, I) {
        const h = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
        let S = null;
        for (let p = 0; p < h.length; ++p) {
          try {
            S = a.getContext(h[p], I);
          } catch {
          }
          if (S)
            break;
        }
        return S;
      }
      function c(a, I) {
        const h = s(a, I);
        if (!h)
          throw new Error("Sorry, your browser doesn't support WebGL.");
        return h;
      }
      function o(a, I, h) {
        const S = a.createShader(a.VERTEX_SHADER);
        if (a.shaderSource(S, I), a.compileShader(S), !a.getShaderParameter(S, a.COMPILE_STATUS)) {
          const V = `Vertex shader failed to compile.  The error log is:${a.getShaderInfoLog(S)}`;
          throw new Error(V);
        }
        const p = a.createShader(a.FRAGMENT_SHADER);
        if (a.shaderSource(p, h), a.compileShader(p), !a.getShaderParameter(p, a.COMPILE_STATUS)) {
          const V = `Fragment shader failed to compile.  The error log is:${a.getShaderInfoLog(p)}`;
          throw new Error(V);
        }
        const X = a.createProgram();
        if (a.attachShader(X, S), a.attachShader(X, p), a.linkProgram(X), !a.getProgramParameter(X, a.LINK_STATUS)) {
          const V = `Shader program failed to link.  The error log is:${a.getProgramInfoLog(X)}`;
          throw new Error(V);
        }
        return a.deleteShader(S), a.deleteShader(p), X;
      }
      function u(a, I = Float32Array, h = null) {
        if (h && !(h instanceof I))
          throw new TypeError("Wrong buffer type.");
        if (a == null || a instanceof I)
          return a;
        if (a[0] == null || a[0].length == null)
          return h ? (h.set(a, 0), h) : new I(a);
        const S = a[0].length, p = a.length;
        h || (h = new I(S * p));
        let X = 0;
        for (let V = 0; V < p; V++)
          for (let i = 0; i < S; i++)
            h[X++] = a[V][i];
        return h;
      }
      const e = {};
      function n(a, {
        useImageBitmap: I = !0,
        alias: h = null
      } = {}) {
        if (!e[a]) {
          if (typeof Image == "function") {
            const S = new Image();
            typeof a == "string" && !(typeof location == "object" && /^file:/.test(location.href)) && !/^data:/.test(a) && (S.crossOrigin = "anonymous"), e[a] = new Promise((p) => {
              S.onload = function() {
                I && typeof createImageBitmap == "function" ? createImageBitmap(S, {
                  imageOrientation: "flipY"
                }).then((X) => {
                  e[a] = X, h && (e[h] = X), p(X);
                }) : (e[a] = S, h && (e[h] = S), p(S));
              }, S.src = a;
            }), h && (e[h] = e[a]);
          } else if (typeof fetch == "function")
            return fetch(a, {
              method: "GET",
              mode: "cors",
              cache: "default"
            }).then((S) => S.blob()).then((S) => createImageBitmap(S, {
              imageOrientation: "flipY"
            }).then((p) => (e[a] = p, h && (e[h] = p), p)));
        }
        return e[a];
      }
      const G = {};
      async function y(a) {
        if (G[a])
          return G[a];
        const I = await fetch(a);
        if (I.status >= 200 && I.status < 300) {
          const h = await I.text();
          return G[a] = h, h;
        }
        throw new Error("Shader loaded error.");
      }
    },
    /* 17 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `attribute vec3 a_vertexPosition;

void main() {
  gl_PointSize = 1.0;
  gl_Position = vec4(a_vertexPosition, 1);
}`;
    },
    /* 18 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `#ifdef GL_ES
precision mediump float;
#endif

void main() {
  gl_FragColor = vec4(0.0, 0.0, 0.0, 0.1);
}`;
    },
    /* 19 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `attribute vec4 a_vertexPosition;
attribute vec2 a_vertexTextureCoord;
varying vec2 vTextureCoord;

void main() {
  gl_PointSize = 1.0;
  gl_Position = a_vertexPosition;
  vTextureCoord = a_vertexTextureCoord;
}`;
    },
    /* 20 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return u;
      });
      var s = l(21), c = l(25);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol("transform");
      class u {
        constructor(n, G) {
          this.context = n.getContext("2d"), this.options = G, this[o] = [1, 0, 0, 1, 0, 0];
        }
        createTexture(n) {
          return {
            _img: n
          };
        }
        async loadTexture(n) {
          const G = await s.default.loadImage(n, {
            useImageBitmap: !1
          });
          return this.createTexture(G);
        }
        deleteTexture(n) {
          return n;
        }
        clear(n, G, y, a) {
          const I = this.context;
          n = n || 0, G = G || 0, y = y || I.canvas.width - n, a = a || I.canvas.height - G, I.clearRect(n, G, y, a);
        }
        drawMeshCloud(n, {
          clear: G = !1
        } = {}) {
          const y = [];
          for (let a = 0; a < n.amount; a++) {
            const I = n.getTransform(a);
            let h = n.getTextureFrame(a);
            h && (h = h._img);
            const S = n.getFilter(a), {
              fill: p,
              stroke: X
            } = n.getCloudRGBA(a);
            y.push({
              mesh: n.mesh,
              _cloudOptions: [p, X, h, I, S]
            });
          }
          n.beforeRender && n.beforeRender(this.context, n), this.drawMeshes(y, {
            clear: G,
            hook: !1
          }), n.afterRender && n.afterRender(this.context, n);
        }
        drawMeshes(n, {
          clear: G = !1,
          hook: y = !0
        } = {}) {
          const a = this.context;
          G && a.clearRect(0, 0, a.canvas.width, a.canvas.height);
          let I = null;
          const {
            width: h,
            height: S
          } = a.canvas, p = n.length;
          n.forEach((X, V) => {
            let i, b, t, m, K;
            y && X.beforeRender && X.beforeRender(a, X), X._cloudOptions && ([i, b, t, m, K] = X._cloudOptions, X = X.mesh);
            let x = X.filter;
            if (K && (x = x ? `${x} ${K}` : K), x && !this.filterBuffer && this.filterBuffer !== !1) {
              const C = s.default.createCanvas(h, S);
              C ? this.filterBuffer = C.getContext("2d") : this.filterBuffer = !1;
            }
            I && I !== x && (Object(c.applyFilter)(this.filterBuffer, I), a.drawImage(this.filterBuffer.canvas, 0, 0, h, S), this.filterBuffer.clearRect(0, 0, h, S), I = null), x && this.filterBuffer ? (this.filterBuffer.save(), this.filterBuffer.transform(...this[o]), Object(c.drawMesh2D)(X, this.filterBuffer, !1, i, b, t, m), this.filterBuffer.restore(), V === p - 1 ? (Object(c.applyFilter)(this.filterBuffer, x), a.drawImage(this.filterBuffer.canvas, 0, 0, h, S), this.filterBuffer.clearRect(0, 0, h, S)) : I = x) : (a.save(), a.transform(...this[o]), Object(c.drawMesh2D)(X, a, !1, i, b, t, m), a.restore()), y && X.afterRender && X.afterRender(a, X);
          });
        }
        setTransform(n) {
          this[o] = n;
        }
      }
    },
    /* 21 */
    /***/
    function(Z, d, l) {
      l.r(d), (function(s) {
        var c = l(14), o = l(23), u = l(24);
        l(1).glMatrix.setMatrixArrayType(Array);
        const e = {};
        function n(h, S) {
          const {
            style: p,
            variant: X,
            weight: V,
            stretch: i,
            size: b,
            pxLineHeight: t,
            family: m
          } = h;
          return i === "normal" ? `${p} ${X} ${V} ${b * S}px/${t * S}px ${m}` : `${p} ${X} ${V} ${i} ${b * S}px/${t * S}px ${m}`;
        }
        function G(h, {
          font: S,
          fillColor: p,
          strokeColor: X,
          strokeWidth: V,
          ratio: i = 1,
          textCanvas: b,
          cachable: t = !1
        }) {
          let m;
          if (t) {
            m = [h, S, String(p), String(X), String(V)].join("###");
            const Q = e[m];
            if (Q)
              return Q;
          }
          b || (b = a(1, 1));
          const K = b.getContext("2d");
          K.save(), K.font = S;
          let {
            width: x
          } = K.measureText(h);
          K.restore();
          const C = Object(o.default)(S), T = Math.max(C.pxLineHeight, C.pxHeight * 1.13);
          /italic|oblique/.test(S) && (x += T * Math.tan(15 * Math.PI / 180)), !p && !X && (p = "#000");
          const R = K.canvas, J = Math.ceil(x), F = Math.ceil(T);
          R.width = Math.round(J * i), R.height = Math.round(F * i), K.save(), K.font = n(C, i), K.textAlign = "center", K.textBaseline = "middle";
          const r = R.height * 0.5 + C.pxHeight * 0.05 * i, Y = R.width * 0.5;
          if (p) {
            if (Array.isArray(p))
              p = Object(u.default)(p);
            else if (p.vector) {
              let Q;
              const {
                vector: w,
                colors: O
              } = p;
              w.length === 6 ? Q = K.createRadialGradient(...w) : Q = K.createLinearGradient(...w), O.forEach(({
                offset: q,
                color: k
              }) => {
                Q.addColorStop(q, k);
              }), p = Q;
            }
            K.fillStyle = p, K.fillText(h, Y, r);
          }
          if (X) {
            if (K.lineWidth = V * i, Array.isArray(X))
              X = Object(u.default)(X);
            else if (X.vector) {
              let Q;
              const {
                vector: w,
                colors: O
              } = X;
              w.length === 6 ? Q = K.createRadialGradient(...w) : Q = K.createLinearGradient(...w), O.forEach(({
                offset: q,
                color: k
              }) => {
                Q.addColorStop(q, k);
              }), X = Q;
            }
            K.strokeStyle = X, K.strokeText(h, Y, r);
          }
          K.restore();
          const H = {
            image: b,
            rect: [0, 0, J, F]
          };
          return t && (e[m] = H), H;
        }
        let y = !1;
        if (typeof navigator == "object" && typeof navigator.userAgent == "string") {
          const h = navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/);
          h && (y = Number(h[1]) < 70);
        }
        function a(h, S, p = {}) {
          const X = p.offscreen || !y && p.offscreen !== !1;
          let V;
          return typeof s < "u" && typeof s.createCanvas == "function" ? V = s.createCanvas(h, S, p) : X && typeof OffscreenCanvas == "function" ? V = new OffscreenCanvas(h, S) : (V = document.createElement("canvas"), V.width = h, V.height = S), V;
        }
        const I = {
          createCanvas: a,
          createText: G,
          loadImage: c.default.loadImage
        };
        d.default = I;
      }).call(this, l(22));
    },
    /* 22 */
    /***/
    function(Z, d) {
      var l;
      l = /* @__PURE__ */ function() {
        return this;
      }();
      try {
        l = l || new Function("return this")();
      } catch {
        typeof window == "object" && (l = window);
      }
      Z.exports = l;
    },
    /* 23 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return p;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(X, V) {
        if (typeof X == "string") {
          const t = X.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);
          t ? X = {
            size: parseFloat(t[1]),
            unit: t[2]
          } : X = {
            size: parseInt(X, 10),
            unit: "px"
          };
        }
        let {
          size: i,
          unit: b
        } = X;
        if (b === "pt")
          i /= 0.75;
        else if (b === "pc")
          i *= 16;
        else if (b === "in")
          i *= 96;
        else if (b === "cm")
          i *= 96 / 2.54;
        else if (b === "mm")
          i *= 96 / 25.4;
        else if (b === "em" || b === "rem" || b === "ex") {
          if (!V && typeof getComputedStyle == "function" && typeof document < "u") {
            const t = getComputedStyle(document.documentElement).fontSize;
            V = s(t, 16);
          }
          i *= V, b === "ex" && (i /= 2);
        } else if (b === "q")
          i *= 96 / 25.4 / 4;
        else if (b === "vw" || b === "vh") {
          if (typeof document < "u") {
            const t = b === "vw" ? document.documentElement.clientWidth : document.documentElement.clientHeight;
            i *= t / 100;
          }
        } else if ((b === "vmax" || b === "vmin") && typeof document < "u") {
          const t = document.documentElement.clientWidth, m = document.documentElement.clientHeight;
          b === "vmax" ? i *= Math.max(t, m) / 100 : i *= Math.min(t, m) / 100;
        }
        return i;
      }
      const c = "bold|bolder|lighter|[1-9]00", o = "italic|oblique", u = "small-caps", e = "ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded", n = "px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%", G = `'([^']+)'|"([^"]+)"|([\\w-]|[一-龥])+`, y = new RegExp(`(${c}) +`, "i"), a = new RegExp(`(${o}) +`, "i"), I = new RegExp(`(${u}) +`, "i"), h = new RegExp(`(${e}) +`, "i"), S = new RegExp("([\\d\\.]+)(" + n + ")(?:\\/([\\d\\.]+)(" + n + "))? *((?:" + G + ")( *, *(?:" + G + "))*)");
      function p(X, V) {
        const i = S.exec(X);
        if (!i)
          return;
        const b = parseFloat(i[3]), t = {
          weight: "normal",
          style: "normal",
          stretch: "normal",
          variant: "normal",
          size: parseFloat(i[1]),
          unit: i[2],
          lineHeight: Number.isFinite(b) ? b : void 0,
          lineHeightUnit: i[4],
          family: i[5].replace(/ *, */g, ",")
        }, m = X.substring(0, i.index), K = y.exec(m), x = a.exec(m), C = I.exec(m), T = h.exec(m);
        return K && (t.weight = K[1]), x && (t.style = x[1]), C && (t.variant = C[1]), T && (t.stretch = T[1]), t.pxHeight = s({
          size: t.size,
          unit: t.unit
        }, V), t.pxLineHeight = s({
          size: t.lineHeight || t.size,
          unit: t.lineHeightUnit || t.unit
        }, V), t;
      }
    },
    /* 24 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return s;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(c) {
        return `rgba(${c.map((o, u) => u < 3 ? Math.round(o * 255) : o).join()})`;
      }
    },
    /* 25 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "applyFilter", function() {
        return e;
      }), l.d(d, "drawMesh2D", function() {
        return G;
      });
      var s = l(1), c = l(24), o = l(23), u = l(26);
      l(1).glMatrix.setMatrixArrayType(Array);
      function e(y, a) {
        const I = y.canvas;
        y.save(), y.filter = a, y.drawImage(I, 0, 0, I.width, I.height), y.restore();
      }
      function n(y, a) {
        const I = /rgba\((\d+),(\d+),(\d+),(\d+)\)/;
        y = y.match(I).slice(1, 5).map(Number), a = a.match(I).slice(1, 5).map(Number);
        const h = [], S = a[3];
        for (let p = 0; p < 4; p++)
          h[p] = Object(u.mix)(y[p], a[p], S);
        return `rgba(${h.join()})`;
      }
      function G(y, a, I = !0, h = null, S = null, p = null, X = null) {
        a.save();
        let V = !1, i = !1;
        if (a.globalAlpha = y.getOpacity(), y._updateMatrix && y.transformScale / y.contours.scale > 1.5 && y.accurate(y.transformScale), y.lineWidth) {
          let m = y.gradient && y.gradient.stroke;
          if (m) {
            const {
              vector: K,
              colors: x
            } = m;
            if (K.length === 6)
              m = a.createRadialGradient(...K);
            else if (K.length === 4)
              m = a.createLinearGradient(...K);
            else if (K.length === 3)
              m = a.createCircularGradient(...K);
            else
              throw new TypeError("Invalid vector dimension.");
            x.forEach(({
              offset: C,
              color: T
            }) => {
              let R = Object(c.default)(T);
              S && (R = n(R, S)), m.addColorStop(C, R);
            }), a.strokeStyle = m, V = !0;
          } else
            y.strokeStyle && (S ? a.strokeStyle = n(y.strokeStyle, S) : a.strokeStyle = y.strokeStyle, V = !0);
        }
        V && (a.lineWidth = y.lineWidth, a.lineJoin = y.lineJoin, a.lineCap = y.lineCap, a.miterLimit = y.miterLimit, y.lineDash && (a.setLineDash(y.lineDash), y.lineDashOffset && (a.lineDashOffset = y.lineDashOffset)));
        let b = y.gradient && y.gradient.fill;
        if (b) {
          const {
            vector: m,
            colors: K
          } = b;
          if (m.length === 6)
            b = a.createRadialGradient(...m);
          else if (m.length === 4)
            b = a.createLinearGradient(...m);
          else if (m.length === 3)
            b = a.createCircularGradient(...m);
          else
            throw new TypeError("Invalid vector dimension.");
          K.forEach(({
            offset: x,
            color: C
          }) => {
            let T = Object(c.default)(C);
            S && (T = n(T, S)), b.addColorStop(x, T);
          }), a.fillStyle = b, i = !0;
        } else
          y.fillStyle && (h ? a.fillStyle = n(y.fillStyle, h) : a.fillStyle = y.fillStyle, i = !0);
        if (X && a.transform(...X), a.transform(...y.transformMatrix), y.clipPath) {
          const m = y.clipPath, K = new Path2D(m);
          a.clip(K);
        }
        const t = y.contours.length;
        if (y.contours.forEach((m, K) => {
          const x = m.length, C = x > 1 && s.vec2.equals(m[0], m[x - 1]), T = K === t - 1 && y.texture;
          if (m && x > 0) {
            if (i || V || T) {
              a.beginPath(), a.moveTo(...m[0]);
              for (let R = 1; R < x; R++)
                R === x - 1 && C ? a.closePath() : a.lineTo(...m[R]);
            }
            if (i && a.fill(y.fillRule), T) {
              a.save(), a.clip();
              let {
                image: R,
                options: J
              } = y.texture;
              if (p && (R = p), J.repeat && console.warn("Context 2D not supported image repeat yet."), R.font) {
                J.scale && console.warn("Context 2D not supported text scale yet."), J.srcRect && console.warn("Context 2D not supported text srcRect yet.");
                let {
                  font: F,
                  fillColor: r,
                  strokeColor: Y,
                  strokeWidth: H,
                  text: Q
                } = R;
                !r && !Y && (r = "#000"), Array.isArray(r) && (r = Object(c.default)(r)), Array.isArray(Y) && (Y = Object(c.default)(Y)), a.font = F;
                const {
                  width: w
                } = a.measureText(Q), O = Object(o.default)(F), q = Math.max(O.pxLineHeight, O.pxHeight * 1.13);
                a.textAlign = "center", a.textBaseline = "middle";
                const k = J.rect, P = k[0] + q * 0.5 + O.pxHeight * 0.06, D = k[1] + w * 0.5;
                k[2] != null && a.scale(k[2] / w, k[3] / q), r && (a.fillStyle = r, a.fillText(Q, D, P)), Y && (a.lineWidth = H, a.strokeStyle = Y, a.strokeText(Q, D, P));
              } else {
                let F = J.rect;
                const r = J.srcRect;
                J.scale && (F = [0, 0, a.canvas.width, a.canvas.height]), J.rotated && F && (F = [-F[1], F[0], F[3], F[2]]), r && (F = F || [0, 0, r[2], r[3]]), J.rotated && (a.translate(0, F ? F[2] : R.width), a.rotate(-0.5 * Math.PI)), r ? a.drawImage(R, ...r, ...F) : F ? a.drawImage(R, ...F) : a.drawImage(R, 0, 0);
              }
              a.restore();
            }
            V && a.stroke();
          }
        }), a.restore(), I) {
          const m = y.filter;
          m && e(a, m);
        }
      }
    },
    /* 26 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "clamp", function() {
        return s;
      }), l.d(d, "mix", function() {
        return c;
      }), l.d(d, "transformPoint", function() {
        return o;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(u, e, n) {
        return e > n && ([e, n] = [n, e]), u < e ? e : u > n ? n : u;
      }
      function c(u, e, n) {
        return u * (1 - n) + e * n;
      }
      function o(u, e) {
        const [n, G] = u;
        return [n * e[0] + G * e[2] + e[4], n * e[1] + G * e[3] + e[5]];
      }
    },
    /* 27 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return n;
      });
      var s = l(28), c = l(29);
      l(1).glMatrix.setMatrixArrayType(Array);
      function o(G, y, a) {
        const I = G.uniforms || {}, h = y.uniforms || {};
        if (I.u_texSampler && h.u_texSampler && I.u_texSampler !== h.u_texSampler)
          return !1;
        const S = Object.keys(I), p = Object.keys(h), X = S.indexOf("u_texSampler"), V = p.indexOf("u_texSampler");
        if (X >= 0 && S.splice(X, 1), V >= 0 && p.splice(V, 1), S.length !== p.length)
          return !1;
        const i = S.every((b) => {
          const t = I[b], m = h[b];
          if (t === m)
            return !0;
          if (t.length && m.length && t.length === m.length) {
            for (let K = 0; K < t.length; K++)
              if (t[K] !== m[K])
                return !1;
            return !0;
          }
          return !1;
        });
        if (i) {
          if (I.u_texSampler && !h.u_texSampler)
            y.setTexture(I.u_texSampler, {
              hidden: !0
            });
          else if (!I.u_texSampler && h.u_texSampler)
            for (let b = 0; b < a.length; b++)
              a[b].setTexture(h.u_texSampler, {
                hidden: !0
              });
        }
        return i;
      }
      const u = {};
      function e(G, y) {
        if (G.length) {
          const a = Object(s.default)(G, u);
          return a.enableBlend = y, G[0].filterCanvas && (a.filterCanvas = !0), a.packIndex = G[0].packIndex, a.packLength = G.length, a.beforeRender = G[0].beforeRender, a.pass = G[0].pass, a.afterRender = G[G.length - 1].afterRender, G.length = 0, a;
        }
      }
      function* n(G, y, a = !1) {
        const I = [], h = G.options.bufferSize;
        let S = 0, p = !1;
        for (let X = 0; X < y.length; X++) {
          const V = y[X];
          if (V instanceof c.default)
            I.length && (yield e(I, p)), S = 0, p = !1, yield V;
          else {
            const i = V.meshData;
            if (i.clipPath && !i.uniforms.u_clipSampler) {
              const t = G.createTexture(i.clipPath);
              i.uniforms.u_clipSampler = t;
            }
            let b = 0;
            if ((!a || !V.canIgnore()) && i && i.positions.length) {
              V.packIndex = X;
              const t = V.filterCanvas;
              if (b = i.positions.length, t || S + b > h)
                I.length && (yield e(I, p)), S = 0, p = !1;
              else if (S) {
                const m = I[I.length - 1];
                m && (m.filterCanvas || m.afterRender || V.beforeRender || m.pass.length || V.pass.length || m.program !== V.program || !o(m, V, I)) && (yield e(I, p), S = 0, p = !1);
              }
              I.push(V), p = p || V.enableBlend, S += b;
            }
            X === y.length - 1 && I.length && (yield e(I, p));
          }
        }
      }
    },
    /* 28 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return o;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      const s = {
        UNSIGNED_BYTE: Uint8Array,
        UNSIGNED_SHORT: Uint16Array,
        BYTE: Int8Array,
        SHORT: Int16Array,
        FLOAT: Float32Array
      };
      function c(u, e) {
        let n = 0, G = 0, y = 0, a = 0, I = 0, h = 0, S = 0;
        const p = u[0].program;
        for (let X = 0; X < u.length; X++) {
          const V = u[X].meshData;
          if (V) {
            S += V.positions.length;
            const i = V.positions[0].length;
            n += V.positions.length * i, G += V.cells.length * 3, h += V.attributes.a_color.length * 4;
            const b = V.textureCoord;
            b && (y += b.length * b[0].length);
            const t = V.attributes.a_sourceRect;
            t && (a += t.length * 4);
            const m = V.attributes.a_clipUV;
            m && (I += m.length * 2);
          }
        }
        if ((!e.positions || e.positions.length < n) && (e.positions = new Float32Array(n)), (!e.cells || e.cells.length < G) && (e.cells = new Uint16Array(G)), y && (!e.textureCoord || e.textureCoord.length < y) && (e.textureCoord = new Float32Array(y)), (!e.a_color || e.a_color.length < h) && (e.a_color = new Uint8Array(h)), a && (!e.a_sourceRect || e.a_sourceRect.length < a) && (e.a_sourceRect = new Float32Array(a)), I && (!e.a_clipUV || e.a_clipUV.length < I) && (e.a_clipUV = new Float32Array(I)), p) {
          const X = Object.entries(p._attribute), V = p._attribOpts || {};
          for (let i = 0; i < X.length; i++) {
            const [b, t] = X[i];
            if (b !== "a_color" && b !== "a_sourceRect" && t !== "ignored") {
              const m = V[b] ? V[b].type : "FLOAT", K = s[m], x = t.size * S;
              (!e[b] || e[b].length < x) && (e[b] = new K(x));
            }
          }
        }
        return e;
      }
      function o(u, e) {
        let n = [], G = [], y = [], a = [], I = [], h = [], S = 0, p = 0;
        const X = u[0] ? u[0].uniforms || {} : {}, V = u[0] ? u[0].program : null;
        e && (c(u, e), G = e.cells, n = e.positions, y = e.textureCoord, a = e.a_color, I = e.a_sourceRect, h = e.a_clipUV);
        let i = !1, b = !1;
        const t = {};
        for (let K = 0; K < u.length; K++) {
          let x = u[K];
          if (x) {
            if (x.meshData && (x = x.meshData), e) {
              const T = x.positions;
              for (let R = 0; R < T.length; R++) {
                const J = T[R], F = 3 * (S + R);
                for (let r = 0; r < J.length; r++)
                  n[F + r] = J[r];
              }
            } else
              n.push(...x.positions);
            const C = x.cells;
            for (let T = 0; T < C.length; T++) {
              const R = C[T];
              if (e) {
                const J = 3 * (p + T);
                G[J] = R[0] + S, G[J + 1] = R[1] + S, G[J + 2] = R[2] + S;
              } else
                G.push([R[0] + S, R[1] + S, R[2] + S]);
            }
            if (e) {
              const T = x.attributes.a_color;
              for (let R = 0; R < T.length; R++) {
                const J = T[R], F = 4 * (S + R);
                a[F] = J[0], a[F + 1] = J[1], a[F + 2] = J[2], a[F + 3] = J[3];
              }
            } else
              a.push(...x.attributes.a_color);
            if (x.attributes.a_sourceRect)
              if (i = !0, e) {
                const T = x.attributes.a_sourceRect;
                for (let R = 0; R < T.length; R++) {
                  const J = T[R], F = 4 * (S + R);
                  I[F] = J[0], I[F + 1] = J[1], I[F + 2] = J[2], I[F + 3] = J[3];
                }
              } else
                I.push(...x.attributes.a_sourceRect);
            if (x.attributes.a_clipUV)
              if (b = !0, e) {
                const T = x.attributes.a_clipUV;
                for (let R = 0; R < T.length; R++) {
                  const J = T[R], F = 2 * (S + R);
                  h[F] = J[0], h[F + 1] = J[1];
                }
              } else
                h.push(...x.attributes.a_clipUV);
            if (x.textureCoord)
              if (e) {
                const T = x.textureCoord;
                for (let R = 0; R < T.length; R++) {
                  const J = T[R], F = 3 * (S + R);
                  for (let r = 0; r < J.length; r++)
                    y[F + r] = J[r];
                }
              } else
                y.push(...x.textureCoord);
            if (V) {
              const T = Object.entries(V._attribute);
              for (let R = 0; R < T.length; R++) {
                const [J, F] = T[R];
                if (J !== "a_color" && J !== "a_sourceRect" && F !== "ignored")
                  if (t[J] = [], e) {
                    t[J] = e[J];
                    const r = x.attributes[J], Y = r[0].length;
                    for (let H = 0; H < r.length; H++) {
                      const Q = r[H], w = Y * (S + H);
                      for (let O = 0; O < Q.length; O++)
                        t[J][w + O] = Q[O];
                    }
                  } else
                    t[J].push(...x.attributes[J]);
              }
            }
            S += x.positions.length, p += x.cells.length;
          }
        }
        t.a_color = a, i && I && I.length > 0 && (t.a_sourceRect = I);
        const m = {
          positions: n,
          cells: G,
          attributes: t,
          uniforms: X,
          cellsCount: p * 3,
          program: V
        };
        return y && y.length && (m.textureCoord = y), b && h.length > 0 && (t.a_clipUV = h), m;
      }
    },
    /* 29 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(1), c = l(30), o = l(26), u = l(31);
      l(1).glMatrix.setMatrixArrayType(Array);
      function e(t, m) {
        var K = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var x = Object.getOwnPropertySymbols(t);
          m && (x = x.filter(function(C) {
            return Object.getOwnPropertyDescriptor(t, C).enumerable;
          })), K.push.apply(K, x);
        }
        return K;
      }
      function n(t) {
        for (var m = 1; m < arguments.length; m++) {
          var K = arguments[m] != null ? arguments[m] : {};
          m % 2 ? e(Object(K), !0).forEach(function(x) {
            G(t, x, K[x]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(K)) : e(Object(K)).forEach(function(x) {
            Object.defineProperty(t, x, Object.getOwnPropertyDescriptor(K, x));
          });
        }
        return t;
      }
      function G(t, m, K) {
        return m in t ? Object.defineProperty(t, m, { value: K, enumerable: !0, configurable: !0, writable: !0 }) : t[m] = K, t;
      }
      const y = Symbol("mesh"), a = Symbol("count"), I = Symbol("blend"), h = Symbol("filter"), S = Symbol("textures"), p = Symbol("textureOptions"), X = Symbol("cloudColor"), V = Symbol("cloudFilter"), i = Symbol("buffer");
      function b(t, m = null) {
        const K = new Float32Array(3 * t), x = new Float32Array(3 * t), C = new Float32Array(4 * t), T = new Float32Array(4 * t), R = new Float32Array(4 * t), J = new Float32Array(4 * t), F = new Float32Array(4 * t), r = new Uint8Array(t), Y = new Uint8Array(4 * t), H = new Uint8Array(4 * t);
        return m && (K.set(m.transform0, 0), x.set(m.transform1, 0), C.set(m.color0, 0), T.set(m.color1, 0), R.set(m.color2, 0), J.set(m.color3, 0), F.set(m.color4, 0), r.set(m.frameIndex, 0), Y.set(m.fillColor, 0), H.set(m.strokeColor, 0)), {
          bufferSize: t,
          transform0: K,
          transform1: x,
          color0: C,
          color1: T,
          color2: R,
          color3: J,
          color4: F,
          frameIndex: r,
          fillColor: Y,
          strokeColor: H
        };
      }
      d.default = class {
        constructor(t, m = 1, {
          buffer: K = 1e3
        } = {}) {
          K = Math.max(K, m), this[a] = m, this[y] = t, this[i] = b(K), this[S] = [], this[h] = [], this[X] = !1, this[V] = !1, this[I] = !1, this.initBuffer();
        }
        initBuffer(t = 0) {
          const m = this[a];
          for (let K = t; K < m; K++)
            this[i].transform0.set([1, 0, 0], K * 3), this[i].transform1.set([0, 1, 0], K * 3), this[i].frameIndex.set([-1], K), this[i].fillColor.set([0, 0, 0, 0], K * 4), this[i].strokeColor.set([0, 0, 0, 0], K * 4), this.setColorTransform(K, null);
        }
        get bufferSize() {
          return this[i].bufferSize;
        }
        get mesh() {
          return this[y];
        }
        set mesh(t) {
          this[y] = t, this[S] && this.setTextureFrames(this[S], this[p]);
        }
        get hasCloudColor() {
          return this[X];
        }
        get hasCloudFilter() {
          return this[V];
        }
        _getFilter(t) {
          return this[h][t] = this[h][t] || [], this[h][t];
        }
        getFilter(t) {
          return this._getFilter(t).join(" ");
        }
        get enableBlend() {
          return this[y].enableBlend || this[I];
        }
        canIgnore() {
          return this[y].canIgnore();
        }
        delete(t) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          const {
            transform0: m,
            transform1: K,
            color0: x,
            color1: C,
            color2: T,
            color3: R,
            color4: J,
            frameIndex: F,
            fillColor: r,
            strokeColor: Y
          } = this[i];
          m.set(m.subarray(3 * (t + 1)), 3 * t), K.set(K.subarray(3 * (t + 1)), 3 * t), x.set(x.subarray(4 * (t + 1)), 4 * t), C.set(C.subarray(4 * (t + 1)), 4 * t), T.set(T.subarray(4 * (t + 1)), 4 * t), R.set(R.subarray(4 * (t + 1)), 4 * t), J.set(J.subarray(4 * (t + 1)), 4 * t), F.set(F.subarray(t + 1), t), r.set(r.subarray(4 * (t + 1)), 4 * t), Y.set(Y.subarray(4 * (t + 1)), 4 * t);
          for (const H in this[h])
            H === t ? delete this[h][H] : H > t && (this[h][H - 1] = this[h][H], delete this[h][H]);
          this[a]--;
        }
        setColorTransform(t, m) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          t *= 4;
          const {
            color0: K,
            color1: x,
            color2: C,
            color3: T,
            color4: R
          } = this[i];
          return m != null ? (K.set([m[0], m[5], m[10], m[15]], t), x.set([m[1], m[6], m[11], m[16]], t), C.set([m[2], m[7], m[12], m[17]], t), T.set([m[3], m[8], m[13], m[18]], t), R.set([m[4], m[9], m[14], m[19]], t), this[I] = this[I] || m[18] < 1, this[V] = !0) : (K.set([1, 0, 0, 0], t), x.set([0, 1, 0, 0], t), C.set([0, 0, 1, 0], t), T.set([0, 0, 0, 1], t), R.set([0, 0, 0, 0], t)), this;
        }
        getColorTransform(t) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          t *= 4;
          const {
            color0: m,
            color1: K,
            color2: x,
            color3: C,
            color4: T
          } = this[i];
          return [m[t], K[t], x[t], C[t], T[t], m[t + 1], K[t + 1], x[t + 1], C[t + 1], T[t + 1], m[t + 2], K[t + 2], x[t + 2], C[t + 2], T[t + 2], m[t + 3], K[t + 3], x[t + 3], C[t + 3], T[t + 3]];
        }
        transformColor(t, m) {
          let K = this.getColorTransform(t);
          return K = Object(c.multiply)(K, m), this.setColorTransform(t, K), this;
        }
        setFillColor(t, m) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          typeof m == "string" && (m = Object(u.default)(m)), m[3] > 0 && (this[X] = !0), this[i].fillColor.set(m.map((K) => Math.round(255 * K)), 4 * t);
        }
        setStrokeColor(t, m) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          typeof m == "string" && (m = Object(u.default)(m)), m[3] > 0 && (this[X] = !0), this[i].strokeColor.set(m.map((K) => Math.round(255 * K)), 4 * t);
        }
        getCloudRGBA(t) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          t *= 4;
          const {
            fillColor: m,
            strokeColor: K
          } = this[i], x = [m[t], m[t + 1], m[t + 2], m[t + 3]], C = [K[t], K[t + 1], K[t + 2], K[t + 3]];
          return x[3] /= 255, C[3] /= 255, {
            fill: `rgba(${x.join()})`,
            stroke: `rgba(${C.join()})`
          };
        }
        grayscale(t, m) {
          this.transformColor(t, Object(c.grayscale)(m)), this._getFilter(t).push(`grayscale(${100 * m}%)`);
        }
        brightness(t, m) {
          this.transformColor(t, Object(c.brightness)(m)), this._getFilter(t).push(`brightness(${100 * m}%)`);
        }
        saturate(t, m) {
          this.transformColor(t, Object(c.saturate)(m)), this._getFilter(t).push(`saturate(${100 * m}%)`);
        }
        contrast(t, m) {
          this.transformColor(t, Object(c.contrast)(m)), this._getFilter(t).push(`contrast(${100 * m}%)`);
        }
        invert(t, m) {
          this.transformColor(t, Object(c.invert)(m)), this._getFilter(t).push(`invert(${100 * m}%)`);
        }
        sepia(t, m) {
          this.transformColor(t, Object(c.sepia)(m)), this._getFilter(t).push(`sepia(${100 * m}%)`);
        }
        opacity(t, m) {
          this.transformColor(t, Object(c.opacity)(m)), this._getFilter(t).push(`opacity(${100 * m}%)`);
        }
        hueRotate(t, m) {
          this.transformColor(t, Object(c.hueRotate)(m)), this._getFilter(t).push(`hue-rotate(${m}deg)`);
        }
        setTransform(t, m) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          t *= 3, m == null && (m = [1, 0, 0, 1, 0, 0]);
          const {
            transform0: K,
            transform1: x
          } = this[i];
          return K.set([m[0], m[2], m[4]], t), x.set([m[1], m[3], m[5]], t), this;
        }
        getTransform(t) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          t *= 3;
          const {
            transform0: m,
            transform1: K
          } = this[i];
          return [m[t], K[t], m[t + 1], K[t + 1], m[t + 2], K[t + 2]];
        }
        getTextureFrame(t) {
          return this[S][this[i].frameIndex[t]];
        }
        setTextureFrames(t = [], m = {}) {
          if (t.length > 12)
            throw new Error("Max frames exceed. Allow 12 frames.");
          t.length && this[y].setTexture(t[0], m), this[S] = t, this[p] = m;
        }
        setFrameIndex(t, m) {
          if (t >= this[a] || t < 0)
            throw new Error("Out of range.");
          const K = this[S].length;
          if (K <= 0)
            throw new Error("No frames");
          this[i].frameIndex[t] = m % K;
        }
        get amount() {
          return this[a];
        }
        set amount(t) {
          const m = this[a];
          t !== m && (t > this[i].bufferSize && (this[i] = b(Math.max(t, this[i].bufferSize + 1e3), this[i])), this[a] = t, t > m && this.initBuffer(m));
        }
        get meshData() {
          const {
            attributes: t,
            cells: m,
            positions: K,
            textureCoord: x,
            uniforms: C
          } = this[y].meshData, T = this[S], R = {
            attributes: n({}, t),
            cells: m,
            positions: K,
            textureCoord: x,
            uniforms: n({}, C),
            instanceCount: this[a],
            enableBlend: this.enableBlend
          };
          T.length && T.forEach((P, D) => {
            R.uniforms[`u_texFrame${D}`] = P;
          });
          const {
            transform0: J,
            transform1: F,
            color0: r,
            color1: Y,
            color2: H,
            color3: Q,
            color4: w,
            fillColor: O,
            strokeColor: q,
            frameIndex: k
          } = this[i];
          return this[y].uniforms.u_texSampler && (R.attributes.a_frameIndex = {
            data: k,
            divisor: 1
          }), R.attributes.a_transform0 = {
            data: J,
            divisor: 1
          }, R.attributes.a_transform1 = {
            data: F,
            divisor: 1
          }, R.attributes.a_colorCloud0 = {
            data: r,
            divisor: 1
          }, R.attributes.a_colorCloud1 = {
            data: Y,
            divisor: 1
          }, R.attributes.a_colorCloud2 = {
            data: H,
            divisor: 1
          }, R.attributes.a_colorCloud3 = {
            data: Q,
            divisor: 1
          }, R.attributes.a_colorCloud4 = {
            data: w,
            divisor: 1
          }, this.hasCloudColor && (R.attributes.a_fillCloudColor = {
            data: O,
            divisor: 1
          }, R.attributes.a_strokeCloudColor = {
            data: q,
            divisor: 1
          }), R;
        }
        setProgram(t) {
          this[y].setProgram(t);
        }
        get program() {
          return this[y].program;
        }
        transform(t, m) {
          const K = this.getTransform(t);
          return m = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), K, m), this.setTransform(t, m), this;
        }
        translate(t, [m, K]) {
          let x = s.mat2d.create();
          return x = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), x, [m, K]), this.transform(t, x);
        }
        rotate(t, m, [K, x] = [0, 0]) {
          let C = s.mat2d.create();
          return C = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), C, [K, x]), C = s.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), C, m), C = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), C, [-K, -x]), this.transform(t, C);
        }
        scale(t, [m, K = m], [x, C] = [0, 0]) {
          let T = s.mat2d.create();
          return T = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), T, [x, C]), T = s.mat2d.scale(Array.of(0, 0, 0, 0, 0, 0), T, [m, K]), T = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), T, [-x, -C]), this.transform(t, T);
        }
        skew(t, [m, K = m], [x, C] = [0, 0]) {
          let T = s.mat2d.create();
          return T = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), T, [x, C]), T = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), T, s.mat2d.fromValues(1, Math.tan(K), Math.tan(m), 1, 0, 0)), T = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), T, [-x, -C]), this.transform(t, T);
        }
        isPointCollision(t, [m, K], x = "both") {
          const C = this.getTransform(t), T = Object(o.transformPoint)([m, K], s.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), C));
          return this[y].isPointCollision(...T, x);
        }
        isPointInFill(t, [m, K]) {
          return this.isPointCollision(t, [m, K], "fill");
        }
        isPointInStroke(t, [m, K]) {
          return this.isPointCollision(t, [m, K], "stroke");
        }
      };
    },
    /* 30 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "multiply", function() {
        return c;
      }), l.d(d, "grayscale", function() {
        return o;
      }), l.d(d, "brightness", function() {
        return u;
      }), l.d(d, "saturate", function() {
        return e;
      }), l.d(d, "contrast", function() {
        return n;
      }), l.d(d, "invert", function() {
        return G;
      }), l.d(d, "sepia", function() {
        return y;
      }), l.d(d, "opacity", function() {
        return a;
      }), l.d(d, "hueRotate", function() {
        return I;
      });
      var s = l(26);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(h, S) {
        const p = [], X = h[0], V = h[1], i = h[2], b = h[3], t = h[4], m = h[5], K = h[6], x = h[7], C = h[8], T = h[9], R = h[10], J = h[11], F = h[12], r = h[13], Y = h[14], H = h[15], Q = h[16], w = h[17], O = h[18], q = h[19];
        let k = S[0], P = S[1], D = S[2], ll = S[3], _ = S[4];
        return p[0] = k * X + P * m + D * R + ll * H, p[1] = k * V + P * K + D * J + ll * Q, p[2] = k * i + P * x + D * F + ll * w, p[3] = k * b + P * C + D * r + ll * O, p[4] = k * t + P * T + D * Y + ll * q + _, k = S[5], P = S[6], D = S[7], ll = S[8], _ = S[9], p[5] = k * X + P * m + D * R + ll * H, p[6] = k * V + P * K + D * J + ll * Q, p[7] = k * i + P * x + D * F + ll * w, p[8] = k * b + P * C + D * r + ll * O, p[9] = k * t + P * T + D * Y + ll * q + _, k = S[10], P = S[11], D = S[12], ll = S[13], _ = S[14], p[10] = k * X + P * m + D * R + ll * H, p[11] = k * V + P * K + D * J + ll * Q, p[12] = k * i + P * x + D * F + ll * w, p[13] = k * b + P * C + D * r + ll * O, p[14] = k * t + P * T + D * Y + ll * q + _, k = S[15], P = S[16], D = S[17], ll = S[18], _ = S[19], p[15] = k * X + P * m + D * R + ll * H, p[16] = k * V + P * K + D * J + ll * Q, p[17] = k * i + P * x + D * F + ll * w, p[18] = k * b + P * C + D * r + ll * O, p[19] = k * t + P * T + D * Y + ll * q + _, p;
      }
      function o(h) {
        h = Object(s.clamp)(0, 1, h);
        const S = 0.2126 * h, p = 0.7152 * h, X = 0.0722 * h;
        return [S + 1 - h, p, X, 0, 0, S, p + 1 - h, X, 0, 0, S, p, X + 1 - h, 0, 0, 0, 0, 0, 1, 0];
      }
      function u(h) {
        return [h, 0, 0, 0, 0, 0, h, 0, 0, 0, 0, 0, h, 0, 0, 0, 0, 0, 1, 0];
      }
      function e(h) {
        const S = 0.2126 * (1 - h), p = 0.7152 * (1 - h), X = 0.0722 * (1 - h);
        return [S + h, p, X, 0, 0, S, p + h, X, 0, 0, S, p, X + h, 0, 0, 0, 0, 0, 1, 0];
      }
      function n(h) {
        const S = 0.5 * (1 - h);
        return [h, 0, 0, 0, S, 0, h, 0, 0, S, 0, 0, h, 0, S, 0, 0, 0, 1, 0];
      }
      function G(h) {
        const S = 1 - 2 * h;
        return [S, 0, 0, 0, h, 0, S, 0, 0, h, 0, 0, S, 0, h, 0, 0, 0, 1, 0];
      }
      function y(h) {
        return [1 - 0.607 * h, 0.769 * h, 0.189 * h, 0, 0, 0.349 * h, 1 - 0.314 * h, 0.168 * h, 0, 0, 0.272 * h, 0.534 * h, 1 - 0.869 * h, 0, 0, 0, 0, 0, 1, 0];
      }
      function a(h) {
        return [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, h, 0];
      }
      function I(h) {
        const S = h / 180 * Math.PI, p = Math.cos(S), X = Math.sin(S), V = 0.2126, i = 0.7152, b = 0.0722;
        return [V + p * (1 - V) + X * -V, i + p * -i + X * -i, b + p * -b + X * (1 - b), 0, 0, V + p * -V + X * 0.143, i + p * (1 - i) + X * 0.14, b + p * -b + X * -0.283, 0, 0, V + p * -V + X * -(1 - V), i + p * -i + X * i, b + p * (1 - b) + X * b, 0, 0, 0, 0, 0, 1, 0];
      }
    },
    /* 31 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return o;
      });
      var s = l(32), c = /* @__PURE__ */ l.n(s);
      l(1).glMatrix.setMatrixArrayType(Array);
      function o(u) {
        const e = c()(u);
        if (!e || !e.length)
          throw new TypeError("Invalid color value.");
        return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]];
      }
    },
    /* 32 */
    /***/
    function(Z, d, l) {
      var s = l(33), c = l(37), o = l(39);
      Z.exports = function(e) {
        var n, G = s(e);
        return G.space ? (n = Array(3), n[0] = o(G.values[0], 0, 255), n[1] = o(G.values[1], 0, 255), n[2] = o(G.values[2], 0, 255), G.space[0] === "h" && (n = c.rgb(n)), n.push(o(G.alpha, 0, 1)), n) : [];
      };
    },
    /* 33 */
    /***/
    function(Z, d, l) {
      (function(s) {
        var c = l(34), o = l(35), u = l(36);
        Z.exports = n;
        var e = {
          red: 0,
          orange: 60,
          yellow: 120,
          green: 180,
          blue: 240,
          purple: 300
        };
        function n(G) {
          var y, a = [], I = 1, h;
          if (typeof G == "string")
            if (c[G])
              a = c[G].slice(), h = "rgb";
            else if (G === "transparent")
              I = 0, h = "rgb", a = [0, 0, 0];
            else if (/^#[A-Fa-f0-9]+$/.test(G)) {
              var S = G.slice(1), p = S.length, X = p <= 4;
              I = 1, X ? (a = [
                parseInt(S[0] + S[0], 16),
                parseInt(S[1] + S[1], 16),
                parseInt(S[2] + S[2], 16)
              ], p === 4 && (I = parseInt(S[3] + S[3], 16) / 255)) : (a = [
                parseInt(S[0] + S[1], 16),
                parseInt(S[2] + S[3], 16),
                parseInt(S[4] + S[5], 16)
              ], p === 8 && (I = parseInt(S[6] + S[7], 16) / 255)), a[0] || (a[0] = 0), a[1] || (a[1] = 0), a[2] || (a[2] = 0), h = "rgb";
            } else if (y = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(G)) {
              var V = y[1], i = V === "rgb", S = V.replace(/a$/, "");
              h = S;
              var p = S === "cmyk" ? 4 : S === "gray" ? 1 : 3;
              a = y[2].trim().split(/\s*,\s*/).map(function(K, x) {
                if (/%$/.test(K))
                  return x === p ? parseFloat(K) / 100 : S === "rgb" ? parseFloat(K) * 255 / 100 : parseFloat(K);
                if (S[x] === "h") {
                  if (/deg$/.test(K))
                    return parseFloat(K);
                  if (e[K] !== void 0)
                    return e[K];
                }
                return parseFloat(K);
              }), V === S && a.push(1), I = i || a[p] === void 0 ? 1 : a[p], a = a.slice(0, p);
            } else
              G.length > 10 && /[0-9](?:\s|\/)/.test(G) && (a = G.match(/([0-9]+)/g).map(function(t) {
                return parseFloat(t);
              }), h = G.match(/([a-z])/ig).join("").toLowerCase());
          else if (!isNaN(G))
            h = "rgb", a = [G >>> 16, (G & 65280) >>> 8, G & 255];
          else if (o(G)) {
            var b = u(G.r, G.red, G.R, null);
            b !== null ? (h = "rgb", a = [
              b,
              u(G.g, G.green, G.G),
              u(G.b, G.blue, G.B)
            ]) : (h = "hsl", a = [
              u(G.h, G.hue, G.H),
              u(G.s, G.saturation, G.S),
              u(G.l, G.lightness, G.L, G.b, G.brightness)
            ]), I = u(G.a, G.alpha, G.opacity, 1), G.opacity != null && (I /= 100);
          } else
            (Array.isArray(G) || s.ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(G)) && (a = [G[0], G[1], G[2]], h = "rgb", I = G.length === 4 ? G[3] : 1);
          return {
            space: h,
            values: a,
            alpha: I
          };
        }
      }).call(this, l(22));
    },
    /* 34 */
    /***/
    function(Z, d, l) {
      Z.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    },
    /* 35 */
    /***/
    function(Z, d, l) {
      var s = Object.prototype.toString;
      Z.exports = function(c) {
        var o;
        return s.call(c) === "[object Object]" && (o = Object.getPrototypeOf(c), o === null || o === Object.getPrototypeOf({}));
      };
    },
    /* 36 */
    /***/
    function(Z, d) {
      Z.exports = function() {
        for (var l = 0; l < arguments.length; l++)
          if (arguments[l] !== void 0)
            return arguments[l];
      };
    },
    /* 37 */
    /***/
    function(Z, d, l) {
      var s = l(38);
      Z.exports = {
        name: "hsl",
        min: [0, 0, 0],
        max: [360, 100, 100],
        channel: ["hue", "saturation", "lightness"],
        alias: ["HSL"],
        rgb: function(c) {
          var o = c[0] / 360, u = c[1] / 100, e = c[2] / 100, n, G, y, a, I;
          if (u === 0)
            return I = e * 255, [I, I, I];
          e < 0.5 ? G = e * (1 + u) : G = e + u - e * u, n = 2 * e - G, a = [0, 0, 0];
          for (var h = 0; h < 3; h++)
            y = o + 1 / 3 * -(h - 1), y < 0 ? y++ : y > 1 && y--, 6 * y < 1 ? I = n + (G - n) * 6 * y : 2 * y < 1 ? I = G : 3 * y < 2 ? I = n + (G - n) * (2 / 3 - y) * 6 : I = n, a[h] = I * 255;
          return a;
        }
      }, s.hsl = function(c) {
        var o = c[0] / 255, u = c[1] / 255, e = c[2] / 255, n = Math.min(o, u, e), G = Math.max(o, u, e), y = G - n, a, I, h;
        return G === n ? a = 0 : o === G ? a = (u - e) / y : u === G ? a = 2 + (e - o) / y : e === G && (a = 4 + (o - u) / y), a = Math.min(a * 60, 360), a < 0 && (a += 360), h = (n + G) / 2, G === n ? I = 0 : h <= 0.5 ? I = y / (G + n) : I = y / (2 - G - n), [a, I * 100, h * 100];
      };
    },
    /* 38 */
    /***/
    function(Z, d, l) {
      Z.exports = {
        name: "rgb",
        min: [0, 0, 0],
        max: [255, 255, 255],
        channel: ["red", "green", "blue"],
        alias: ["RGB"]
      };
    },
    /* 39 */
    /***/
    function(Z, d) {
      Z.exports = l;
      function l(s, c, o) {
        return c < o ? s < c ? c : s > o ? o : s : s < o ? o : s > c ? c : s;
      }
    },
    /* 40 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return b;
      });
      var s = l(41), c = /* @__PURE__ */ l.n(s), o = l(42), u = /* @__PURE__ */ l.n(o), e = l(43), n = /* @__PURE__ */ l.n(e), G = l(44), y = l(46), a = /* @__PURE__ */ l.n(y), I = l(53), h = l(55);
      l(1).glMatrix.setMatrixArrayType(Array);
      const S = Symbol("contours"), p = Symbol("path"), X = Symbol("simplify"), V = Symbol("scale"), i = 2 * Math.PI;
      class b {
        constructor(m = {}) {
          typeof m == "string" && (m = {
            path: m
          }), m.path ? this[p] = c()(m.path) : this[p] = [], this[S] = null, this[X] = m.simplify != null ? m.simplify : 0, this[V] = m.scale != null ? m.scale : 2;
        }
        get contours() {
          let m = null;
          if (!this[S] && this[p]) {
            const K = Object(G.default)(n()(this[p]));
            this[S] = a()(K, this[V], this[X]), this[S].path = K, this[S].simplify = this[X], this[S].scale = this[V];
          }
          return this[S] && (m = this[S].map((K) => [...K]), m.path = this[S].path, m.simplify = this[S].simplify, m.scale = this[S].scale), m;
        }
        get path() {
          return this[p];
        }
        get simplify() {
          return this[X];
        }
        get boundingBox() {
          const m = this.contours;
          if (m && m.length) {
            const K = m.reduce((x, C) => [...x, ...C]);
            return u()(K);
          }
          return [[0, 0], [0, 0]];
        }
        get boundingCenter() {
          const m = this.boundingBox;
          return m ? [0.5 * (m[0][0] + m[1][0]), 0.5 * (m[0][1] + m[1][1])] : [0, 0];
        }
        normalize(m = 0, K = 0) {
          const x = Object(G.default)(n()(this[p])).map(([C, ...T]) => {
            const R = [C];
            for (let J = 0; J < T.length; J += 2) {
              const F = T[J] - m, r = T[J + 1] - K;
              R.push(F, r);
            }
            return R;
          });
          return this.beginPath(), this[p].push(...x), this;
        }
        getPointAtLength(m) {
          return this.contours ? Object(I.getPointAtLength)(this[S], m) : null;
        }
        getTotalLength() {
          return this.contours ? Object(I.getTotalLength)(this[S]) : 0;
        }
        addPath(m) {
          this[S] = null, typeof m == "string" && (m = c()(m)), this[p].push(...m);
        }
        beginPath() {
          this[p] = [], this[S] = null;
        }
        clear() {
          this.beginPath();
        }
        ellipse(m, K, x, C, T, R, J, F = 0) {
          if (R += T, J += T, x <= 0 || C <= 0 || J === R)
            return;
          J < R && (J = R + i + (J - R) % i), J - R > i && (J = R + i);
          const r = J - R;
          r >= i && (J -= 1e-3);
          let Y = this[p].length > 0 && r < i ? "L" : "M";
          const H = Object(h.getPoint)(m, K, x, C, R), Q = Object(h.getPoint)(m, K, x, C, J), w = +!F;
          let O = r > Math.PI ? 1 : 0;
          F && (O = 1 - O), Y += H.join(" "), Y += `A${x} ${C} 0 ${O} ${w} ${Q.join(" ")}`, r >= i && (Y += "Z"), this.addPath(Y);
        }
        arc(m, K, x, C, T, R = 0) {
          return this.ellipse(m, K, x, x, 0, C, T, R);
        }
        arcTo(m, K, x, C, T, R, J) {
          this[S] = null, this[p].push(["A", m, K, x, C, T, R, J]);
        }
        moveTo(m, K) {
          this[S] = null, this[p].push(["M", m, K]);
        }
        lineTo(m, K) {
          this[S] = null, this[p].push(["L", m, K]);
        }
        bezierCurveTo(m, K, x, C, T, R) {
          this[S] = null, this[p].push(["C", m, K, x, C, T, R]);
        }
        quadraticCurveTo(m, K, x, C) {
          this[S] = null, this[p].push(["Q", m, K, x, C]);
        }
        rect(m, K, x, C) {
          const T = `M${m} ${K}L${m + x} ${K}L${m + x} ${K + C}L${m} ${K + C}Z`;
          this.addPath(T);
        }
        closePath() {
          this[S] = null;
          let m = [];
          const K = this[p].length;
          K > 0 && (m = this[p][K - 1]), m[0] !== "Z" && m[0] !== "z" && this[p].push(["Z"]);
        }
      }
    },
    /* 41 */
    /***/
    function(Z, d) {
      Z.exports = c;
      var l = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0 }, s = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
      function c(e) {
        var n = [];
        return e.replace(s, function(G, y, a) {
          var I = y.toLowerCase();
          for (a = u(a), I == "m" && a.length > 2 && (n.push([y].concat(a.splice(0, 2))), I = "l", y = y == "m" ? "l" : "L"); ; ) {
            if (a.length == l[I])
              return a.unshift(y), n.push(a);
            if (a.length < l[I])
              throw new Error("malformed path data");
            n.push([y].concat(a.splice(0, l[I])));
          }
        }), n;
      }
      var o = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
      function u(e) {
        var n = e.match(o);
        return n ? n.map(Number) : [];
      }
    },
    /* 42 */
    /***/
    function(Z, d, l) {
      Z.exports = s;
      function s(c) {
        var o = c.length;
        if (o === 0)
          return [[], []];
        for (var u = c[0].length, e = c[0].slice(), n = c[0].slice(), G = 1; G < o; ++G)
          for (var y = c[G], a = 0; a < u; ++a) {
            var I = y[a];
            e[a] = Math.min(e[a], I), n[a] = Math.max(n[a], I);
          }
        return [e, n];
      }
    },
    /* 43 */
    /***/
    function(Z, d) {
      Z.exports = l;
      function l(s) {
        var c = 0, o = 0, u = 0, e = 0;
        return s.map(function(n) {
          n = n.slice();
          var G = n[0], y = G.toUpperCase();
          if (G != y)
            switch (n[0] = y, G) {
              case "a":
                n[6] += u, n[7] += e;
                break;
              case "v":
                n[1] += e;
                break;
              case "h":
                n[1] += u;
                break;
              default:
                for (var a = 1; a < n.length; )
                  n[a++] += u, n[a++] += e;
            }
          switch (y) {
            case "Z":
              u = c, e = o;
              break;
            case "H":
              u = n[1];
              break;
            case "V":
              e = n[1];
              break;
            case "M":
              u = c = n[1], e = o = n[2];
              break;
            default:
              u = n[n.length - 2], e = n[n.length - 1];
          }
          return n;
        });
      }
    },
    /* 44 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return c;
      });
      var s = l(45);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(e) {
        for (var n, G = [], y = 0, a = 0, I = 0, h = 0, S = null, p = null, X = 0, V = 0, i = 0, b = e.length; i < b; i++) {
          var t = e[i], m = t[0];
          switch (m) {
            case "M":
              I = t[1], h = t[2];
              break;
            case "A":
              var K = Object(s.default)(X, V, t[6], t[7], t[4], t[5], t[1], t[2], t[3]);
              if (!K.length)
                continue;
              K = K.map((J) => {
                const [F, r, Y, H, Q, w, O, q] = J;
                return {
                  x1: Y,
                  y1: H,
                  x2: Q,
                  y2: w,
                  x: O,
                  y: q
                };
              });
              for (var x = 0, C; x < K.length; x++)
                C = K[x], t = ["C", C.x1, C.y1, C.x2, C.y2, C.x, C.y], x < K.length - 1 && G.push(t);
              break;
            case "S":
              var T = X, R = V;
              (n == "C" || n == "S") && (T += T - y, R += R - a), t = ["C", T, R, t[1], t[2], t[3], t[4]];
              break;
            case "T":
              n == "Q" || n == "T" ? (S = X * 2 - S, p = V * 2 - p) : (S = X, p = V), t = u(X, V, S, p, t[1], t[2]);
              break;
            case "Q":
              S = t[1], p = t[2], t = u(X, V, t[1], t[2], t[3], t[4]);
              break;
            case "L":
              t = o(X, V, t[1], t[2]);
              break;
            case "H":
              t = o(X, V, t[1], V);
              break;
            case "V":
              t = o(X, V, X, t[1]);
              break;
            case "Z":
              t = o(X, V, I, h);
              break;
          }
          n = m, X = t[t.length - 2], V = t[t.length - 1], t.length > 4 ? (y = t[t.length - 4], a = t[t.length - 3]) : (y = X, a = V), G.push(t);
        }
        return G;
      }
      function o(e, n, G, y) {
        return ["C", e, n, G, y, G, y];
      }
      function u(e, n, G, y, a, I) {
        return ["C", e / 3 + 2 / 3 * G, n / 3 + 2 / 3 * y, a / 3 + 2 / 3 * G, I / 3 + 2 / 3 * y, a, I];
      }
    },
    /* 45 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      const s = Math.PI * 2;
      function c(n, G, y, a) {
        const I = n * a - G * y < 0 ? -1 : 1;
        let h = n * y + G * a;
        return h > 1 && (h = 1), h < -1 && (h = -1), I * Math.acos(h);
      }
      function o(n, G, y, a, I, h, S, p, X, V) {
        const i = V * (n - y) / 2 + X * (G - a) / 2, b = -X * (n - y) / 2 + V * (G - a) / 2, t = S * S, m = p * p, K = i * i, x = b * b;
        let C = t * m - t * x - m * K;
        C < 0 && (C = 0), C /= t * x + m * K, C = Math.sqrt(C) * (I === h ? -1 : 1);
        const T = C * S / p * b, R = C * -p / S * i, J = V * T - X * R + (n + y) / 2, F = X * T + V * R + (G + a) / 2, r = (i - T) / S, Y = (b - R) / p, H = (-i - T) / S, Q = (-b - R) / p, w = c(1, 0, r, Y);
        let O = c(r, Y, H, Q);
        return h === 0 && O > 0 && (O -= s), h === 1 && O < 0 && (O += s), [J, F, w, O];
      }
      function u(n, G) {
        const y = 1.3333333333333333 * Math.tan(G / 4), a = Math.cos(n), I = Math.sin(n), h = Math.cos(n + G), S = Math.sin(n + G);
        return [a, I, a - I * y, I + a * y, h + S * y, S - h * y, h, S];
      }
      function e(n, G, y, a, I, h, S, p, X) {
        const V = Math.sin(X * s / 360), i = Math.cos(X * s / 360), b = i * (n - y) / 2 + V * (G - a) / 2, t = -V * (n - y) / 2 + i * (G - a) / 2;
        if (b === 0 && t === 0)
          return [];
        if (S === 0 || p === 0)
          return [];
        S = Math.abs(S), p = Math.abs(p);
        const m = b * b / (S * S) + t * t / (p * p);
        m > 1 && (S *= Math.sqrt(m), p *= Math.sqrt(m));
        const K = o(n, G, y, a, I, h, S, p, V, i), x = [];
        let C = K[2], T = K[3];
        const R = Math.max(Math.ceil(Math.abs(T) / (s / 4)), 1);
        T /= R;
        for (let J = 0; J < R; J++)
          x.push(u(C, T)), C += T;
        return x.map((J) => {
          for (let F = 0; F < J.length; F += 2) {
            let r = J[F + 0], Y = J[F + 1];
            r *= S, Y *= p;
            const H = i * r - V * Y, Q = V * r + i * Y;
            J[F + 0] = H + K[0], J[F + 1] = Q + K[1];
          }
          return J;
        });
      }
    },
    /* 46 */
    /***/
    function(Z, d, l) {
      l(1).glMatrix.setMatrixArrayType(Array);
      var s = l(47), {
        copy: c
      } = l(49), o = l(50);
      function u(a, I, h) {
        return a[0] = I, a[1] = h, a;
      }
      var e = [0, 0], n = [0, 0], G = [0, 0];
      function y(a, I, h, S) {
        s(h, u(e, S[1], S[2]), u(n, S[3], S[4]), u(G, S[5], S[6]), I, a);
      }
      Z.exports = function(I, h, S) {
        var p = [], X = [], V = [0, 0];
        return I.forEach(function(i, b, t) {
          if (i[0] === "M")
            c(V, i.slice(1)), X.length > 0 && (p.push(X), X = []);
          else if (i[0] === "C")
            y(X, h, V, i), u(V, i[5], i[6]);
          else
            throw new Error("illegal type in SVG: " + i[0]);
        }), X.length > 0 && p.push(X), p.map(function(i) {
          return o(i, S || 0);
        });
      };
    },
    /* 47 */
    /***/
    function(Z, d, l) {
      Z.exports = l(48)();
    },
    /* 48 */
    /***/
    function(Z, d) {
      function l(c) {
        return [c[0], c[1]];
      }
      function s(c, o) {
        return [c, o];
      }
      Z.exports = function(o) {
        o = o || {};
        var u = typeof o.recursion == "number" ? o.recursion : 8, e = typeof o.epsilon == "number" ? o.epsilon : 11920929e-14, n = typeof o.pathEpsilon == "number" ? o.pathEpsilon : 1, G = typeof o.angleEpsilon == "number" ? o.angleEpsilon : 0.01, y = o.angleTolerance || 0, a = o.cuspLimit || 0;
        return function(p, X, V, i, b, t) {
          t || (t = []), b = typeof b == "number" ? b : 1;
          var m = n / b;
          return m *= m, I(p, X, V, i, t, m), t;
        };
        function I(S, p, X, V, i, b) {
          i.push(l(S));
          var t = S[0], m = S[1], K = p[0], x = p[1], C = X[0], T = X[1], R = V[0], J = V[1];
          h(t, m, K, x, C, T, R, J, i, b, 0), i.push(l(V));
        }
        function h(S, p, X, V, i, b, t, m, K, x, C) {
          if (!(C > u)) {
            var T = Math.PI, R = (S + X) / 2, J = (p + V) / 2, F = (X + i) / 2, r = (V + b) / 2, Y = (i + t) / 2, H = (b + m) / 2, Q = (R + F) / 2, w = (J + r) / 2, O = (F + Y) / 2, q = (r + H) / 2, k = (Q + O) / 2, P = (w + q) / 2;
            if (C > 0) {
              var D = t - S, ll = m - p, _ = Math.abs((X - t) * ll - (V - m) * D), bl = Math.abs((i - t) * ll - (b - m) * D), $, el;
              if (_ > e && bl > e) {
                if ((_ + bl) * (_ + bl) <= x * (D * D + ll * ll)) {
                  if (y < G) {
                    K.push(s(k, P));
                    return;
                  }
                  var nl = Math.atan2(b - V, i - X);
                  if ($ = Math.abs(nl - Math.atan2(V - p, X - S)), el = Math.abs(Math.atan2(m - b, t - i) - nl), $ >= T && ($ = 2 * T - $), el >= T && (el = 2 * T - el), $ + el < y) {
                    K.push(s(k, P));
                    return;
                  }
                  if (a !== 0) {
                    if ($ > a) {
                      K.push(s(X, V));
                      return;
                    }
                    if (el > a) {
                      K.push(s(i, b));
                      return;
                    }
                  }
                }
              } else if (_ > e) {
                if (_ * _ <= x * (D * D + ll * ll)) {
                  if (y < G) {
                    K.push(s(k, P));
                    return;
                  }
                  if ($ = Math.abs(Math.atan2(b - V, i - X) - Math.atan2(V - p, X - S)), $ >= T && ($ = 2 * T - $), $ < y) {
                    K.push(s(X, V)), K.push(s(i, b));
                    return;
                  }
                  if (a !== 0 && $ > a) {
                    K.push(s(X, V));
                    return;
                  }
                }
              } else if (bl > e) {
                if (bl * bl <= x * (D * D + ll * ll)) {
                  if (y < G) {
                    K.push(s(k, P));
                    return;
                  }
                  if ($ = Math.abs(Math.atan2(m - b, t - i) - Math.atan2(b - V, i - X)), $ >= T && ($ = 2 * T - $), $ < y) {
                    K.push(s(X, V)), K.push(s(i, b));
                    return;
                  }
                  if (a !== 0 && $ > a) {
                    K.push(s(i, b));
                    return;
                  }
                }
              } else if (D = k - (S + t) / 2, ll = P - (p + m) / 2, D * D + ll * ll <= x) {
                K.push(s(k, P));
                return;
              }
            }
            h(S, p, R, J, Q, w, k, P, K, x, C + 1), h(k, P, O, q, Y, H, t, m, K, x, C + 1);
          }
        }
      };
    },
    /* 49 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "create", function() {
        return o;
      }), l.d(d, "clone", function() {
        return c;
      }), l.d(d, "copy", function() {
        return u;
      }), l.d(d, "scaleAndAdd", function() {
        return e;
      }), l.d(d, "dot", function() {
        return n;
      }), l.d(d, "rotate", function() {
        return G;
      }), l.d(d, "cross", function() {
        return y;
      }), l.d(d, "sub", function() {
        return a;
      }), l.d(d, "add", function() {
        return I;
      }), l.d(d, "computeMiter", function() {
        return X;
      }), l.d(d, "normal", function() {
        return V;
      }), l.d(d, "direction", function() {
        return i;
      });
      var s = l(1);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(b) {
        return [b[0], b[1]];
      }
      function o() {
        return [0, 0];
      }
      const u = s.vec2.copy, e = s.vec2.scaleAndAdd, n = s.vec2.dot, G = s.vec2.rotate, y = s.vec2.cross, a = s.vec2.sub, I = s.vec2.add, h = s.vec2.normalize, S = s.vec2.set, p = o();
      function X(b, t, m, K, x) {
        I(b, m, K), h(b, b), S(t, -b[1], b[0]), S(p, -m[1], m[0]);
        const C = x / n(t, p);
        return Math.abs(C);
      }
      function V(b, t) {
        return S(b, -t[1], t[0]), b;
      }
      function i(b, t, m) {
        return a(b, t, m), h(b, b), b;
      }
    },
    /* 50 */
    /***/
    function(Z, d, l) {
      var s = l(51), c = l(52);
      Z.exports = function(u, e) {
        return u = s(u, e), u = c(u, e), u;
      }, Z.exports.radialDistance = s, Z.exports.douglasPeucker = c;
    },
    /* 51 */
    /***/
    function(Z, d) {
      function l(s, c) {
        var o = s[0] - c[0], u = s[1] - c[1];
        return o * o + u * u;
      }
      Z.exports = function(c, o) {
        if (c.length <= 1)
          return c;
        o = typeof o == "number" ? o : 1;
        for (var u = o * o, e = c[0], n = [e], G, y = 1, a = c.length; y < a; y++)
          G = c[y], l(G, e) > u && (n.push(G), e = G);
        return e !== G && n.push(G), n;
      };
    },
    /* 52 */
    /***/
    function(Z, d) {
      function l(c, o, u) {
        var e = o[0], n = o[1], G = u[0] - e, y = u[1] - n;
        if (G !== 0 || y !== 0) {
          var a = ((c[0] - e) * G + (c[1] - n) * y) / (G * G + y * y);
          a > 1 ? (e = u[0], n = u[1]) : a > 0 && (e += G * a, n += y * a);
        }
        return G = c[0] - e, y = c[1] - n, G * G + y * y;
      }
      function s(c, o, u, e, n) {
        for (var G = e, y, a = o + 1; a < u; a++) {
          var I = l(c[a], c[o], c[u]);
          I > G && (y = a, G = I);
        }
        G > e && (y - o > 1 && s(c, o, y, e, n), n.push(c[y]), u - y > 1 && s(c, y, u, e, n));
      }
      Z.exports = function(o, u) {
        if (o.length <= 1)
          return o;
        u = typeof u == "number" ? u : 1;
        var e = u * u, n = o.length - 1, G = [o[0]];
        return s(o, 0, n, e, G), G.push(o[n]), G;
      };
    },
    /* 53 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "getTotalLength", function() {
        return c;
      }), l.d(d, "getPointAtLength", function() {
        return u;
      }), l.d(d, "getDashContours", function() {
        return e;
      });
      var s = l(54);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(n) {
        if (n.totalLength != null)
          return n.totalLength;
        let G = 0;
        return n.forEach((y) => {
          let a = y[0];
          for (let I = 1; I < y.length; I++) {
            const h = y[I];
            G += Object(s.distance)(a, h), a = h;
          }
        }), n.totalLength = G, G;
      }
      function o(n, G, y = !0) {
        if (G = Number(G), !Number.isFinite(G))
          throw new TypeError("Failed to execute 'getPointAtLength' on figure: The provided float value is non-finite.");
        if (G <= 0)
          throw new TypeError("Length must > 0");
        const a = c(n);
        if (G >= a) {
          const h = n[n.length - 1], S = h[h.length - 2], p = h[h.length - 1], X = Math.atan2(p[1] - S[1], p[0] - S[0]);
          return {
            current: n.map((V) => [...V]),
            point: {
              x: p[0],
              y: p[1],
              angle: X
            }
          };
        }
        const I = [];
        for (let h = 0; h < n.length; h++) {
          I[h] = [];
          const S = n[h];
          let p = S[0];
          for (let X = 1; X < S.length; X++) {
            const V = S[X], i = Object(s.distance)(p, V);
            if (G < i) {
              const b = G / i, t = Math.atan2(V[1] - p[1], V[0] - p[0]), m = {
                x: p[0] * (1 - b) + V[0] * b,
                y: p[1] * (1 - b) + V[1] * b,
                angle: t
              };
              if (I[h].push(p), G > 0 && I[h].push([m.x, m.y]), !y)
                return {
                  current: I,
                  point: m
                };
              const K = [], x = h;
              for (; h < n.length; h++) {
                for (K[h - x] = [], h === x && K[0].push([m.x, m.y]); X < S.length; X++)
                  K[h - x].push(S[X]);
                X = 0;
              }
              return {
                current: I,
                point: m,
                rest: K
              };
            }
            G -= i, I[h].push(p), p = V;
          }
        }
      }
      function u(n, G) {
        if (G = Number(G), !Number.isFinite(G))
          throw new TypeError("Failed to execute 'getPointAtLength' on figure: The provided float value is non-finite.");
        if (n.length <= 0)
          return {
            x: 0,
            y: 0,
            angle: 0
          };
        if (G <= 0) {
          const y = n[0][0], a = n[0][1], I = Math.atan2(a[1] - y[1], a[0] - y[0]);
          return {
            x: y[0],
            y: y[1],
            angle: I
          };
        }
        return o(n, G, !1).point;
      }
      function e(n, G, y) {
        let a = 0, I = G[0], h = n;
        const S = [], p = G.length;
        if (y > 0) {
          do
            y -= G[a % p], a++;
          while (y > 0);
          y < 0 && (I = -y, a--);
        } else if (y < 0) {
          a = -1;
          do
            y += G[a % p + p - 1], a--;
          while (y < 0);
          y >= 0 && (a++, I = G[a % p + p - 1] - y);
        }
        do {
          const X = o(h, I);
          h = X.rest, ++a % 2 && S.push(...X.current);
          let V = a % p;
          V < 0 && (V += p), I = G[V];
        } while (h);
        return S;
      }
    },
    /* 54 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "normalize", function() {
        return s;
      }), l.d(d, "distance", function() {
        return c;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s([o, u, e], n, G, y) {
        return o = o * 2 / n - 1, u = 1 - u * 2 / G, Number.isFinite(y) ? (e = e * 2 / y - 1, [o, u, e]) : [o, u];
      }
      function c([o, u, e = 0], [n, G, y = 0]) {
        return Math.hypot(n - o, G - u, y - e);
      }
    },
    /* 55 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "getPoint", function() {
        return c;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      const s = Math.PI * 2;
      function c(o, u, e, n, G) {
        G %= s, G < 0 && (G += s);
        const y = Math.tan(G);
        if (Math.abs(y) < 1e5) {
          const a = u - y * o, I = 1 / e ** 2 + y ** 2 / n ** 2;
          let h = -1;
          (G <= Math.PI / 2 || G > 3 * Math.PI / 2) && (h = 1);
          const S = h * Math.sqrt(1 / I) + o, p = y * S + a;
          return [S, p];
        }
        return G < Math.PI ? [o, u + n] : [o, u - n];
      }
    },
    /* 56 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return E;
      });
      var s = l(1), c = l(42), o = /* @__PURE__ */ l.n(c), u = l(57), e = l(28), n = l(24), G = l(30), y = l(59), a = l(53), I = l(60), h = /* @__PURE__ */ l.n(I), S = l(46), p = /* @__PURE__ */ l.n(S), X = l(31), V = l(40), i = l(21);
      l(1).glMatrix.setMatrixArrayType(Array);
      function b(B, g) {
        if (B == null)
          return {};
        var U = t(B, g), W, L;
        if (Object.getOwnPropertySymbols) {
          var N = Object.getOwnPropertySymbols(B);
          for (L = 0; L < N.length; L++)
            W = N[L], !(g.indexOf(W) >= 0) && Object.prototype.propertyIsEnumerable.call(B, W) && (U[W] = B[W]);
        }
        return U;
      }
      function t(B, g) {
        if (B == null)
          return {};
        var U = {}, W = Object.keys(B), L, N;
        for (N = 0; N < W.length; N++)
          L = W[N], !(g.indexOf(L) >= 0) && (U[L] = B[L]);
        return U;
      }
      const m = Symbol("mesh"), K = Symbol("contours"), x = Symbol("stroke"), C = Symbol("fill"), T = Symbol("strokeColor"), R = Symbol("fillColor"), J = Symbol("transform"), F = Symbol("invertTransform"), r = Symbol("uniforms"), Y = Symbol("texOptions"), H = Symbol("blend"), Q = Symbol("applyTexture"), w = Symbol("applyTransform"), O = Symbol("applyGradientTransform"), q = Symbol("applyProgram"), k = Symbol("gradient"), P = Symbol("filter"), D = Symbol("opacity"), ll = Symbol("program"), _ = Symbol("attributes"), bl = Symbol("pass"), $ = Symbol("clipContext"), el = Symbol("applyClipPath");
      function nl(B, g) {
        const [U, W] = [B[1][0] - B[0][0], B[1][1] - B[0][1]], L = [];
        for (let N = 0; N < g.length; N++) {
          const v = g[N], f = [(v[0] - B[0][0]) / U, 1 - (v[1] - B[0][1]) / W];
          L.push(f);
        }
        return L;
      }
      function z([B, g], [U, W, L, N], {
        scale: v
      }) {
        return v || (B /= L, g = 1 - g / N, B -= U, g += W), [B, g, 0];
      }
      function M(B, g, U) {
        const W = p()(B, g, U);
        return W.path = B, W.simplify = U, W.scale = g, W;
      }
      class E {
        constructor(g) {
          this[x] = null, this[C] = null, this[J] = [1, 0, 0, 1, 0, 0], this[D] = 1, this[r] = {}, this[P] = [], this[H] = null, this[Y] = {}, this.contours = g.contours, this[ll] = null, this[_] = {}, this[bl] = [];
        }
        get contours() {
          return this[K];
        }
        set contours(g) {
          this[m] = null, this[K] = g;
          const U = g.scale;
          this.transformScale / U > 1.5 && this.accurate(this.transformScale);
        }
        setProgram(g) {
          this[ll] = g, this[m] && this[q](g);
        }
        get program() {
          return this[ll];
        }
        setAttribute(g, U) {
          U == null ? delete this[_][g] : this[_][g] = U;
        }
        getOpacity() {
          return this[D];
        }
        setOpacity(g) {
          if (g < 0 || g > 1)
            throw new TypeError("Invalid opacity value.");
          this[m] && this[m].positions.forEach((U) => {
            U[2] = 1 / U[2] > 0 ? g : -g;
          }), this[D] = g;
        }
        setClipPath(g) {
          this.clipPath = g, this[r].u_clipSampler && this[r].u_clipSampler.delete(), this.setUniforms({
            u_clipSampler: null
          }), this[m] && delete this[m].attributes.a_clipUV, g && this[m] && this[el]();
        }
        [el]() {
          if (this.clipPath) {
            this[$] || (this[$] = i.default.createCanvas(1, 1));
            const [[g, U], [W, L]] = this.boundingBox;
            W && L && (this[$].width = W - g, this[$].height = L - U);
            const N = this[$].getContext("2d"), v = new Path2D(this.clipPath);
            N.clearRect(0, 0, this[$].width, this[$].height), N.save(), N.translate(-g, -U), N.fillStyle = "white", N.fill(v), N.restore(), this[m].clipPath = this[$];
            const f = nl(this.boundingBox, this[m].position0);
            this[m].attributes.a_clipUV = f;
          }
        }
        getPointAtLength(g) {
          return Object(a.getPointAtLength)(this[K], g);
        }
        getTotalLength() {
          return Object(a.getTotalLength)(this[K]);
        }
        get blend() {
          return this[H] == null ? "auto" : this[H];
        }
        set blend(g) {
          this[H] = g, this[m] && (this[m].enableBlend = this.enableBlend);
        }
        get boundingBox() {
          if (this[m] && this[m].boundingBox)
            return this[m].boundingBox;
          const g = this.meshData;
          if (g) {
            const U = g.position0;
            if (U.length)
              g.boundingBox = o()(U);
            else
              return [[0, 0], [0, 0]];
            return g.boundingBox;
          }
          return [[0, 0], [0, 0]];
        }
        get boundingCenter() {
          const g = this.boundingBox;
          return g ? [0.5 * (g[0][0] + g[1][0]), 0.5 * (g[0][1] + g[1][1])] : [0, 0];
        }
        get fillRule() {
          return this[C] ? this[C].rule : "nonzero";
        }
        get lineWidth() {
          return this[x] ? this[x].lineWidth : 0;
        }
        get lineCap() {
          return this[x] ? this[x].lineCap : "";
        }
        get lineJoin() {
          return this[x] ? this[x].lineJoin : "";
        }
        get miterLimit() {
          return this[x] ? this[x].miterLimit : 0;
        }
        get strokeStyle() {
          return this[T] && this[T][3] !== 0 ? Object(n.default)(this[T]) : "";
        }
        get lineDash() {
          return this[x] ? this[x].lineDash : null;
        }
        get lineDashOffset() {
          return this[x] ? this[x].lineDashOffset : 0;
        }
        get fillStyle() {
          return this[R] && this[R][3] !== 0 ? Object(n.default)(this[R]) : "";
        }
        get gradient() {
          return this[k];
        }
        get texture() {
          return this[r].u_texSampler ? {
            image: this[r].u_texSampler._img,
            options: this[Y]
          } : null;
        }
        get enableBlend() {
          return this[H] === !0 || this[H] === !1 ? this[H] : this[D] < 1 || this[T] != null && this[T][3] < 1 || this[R] != null && this[R][3] < 1 || this[r].u_colorMatrix != null && this[r].u_colorMatrix[18] < 1 || this[r].u_radialGradientVector != null || this.beforeRender || this.afterRender;
        }
        get filterCanvas() {
          return /blur|drop-shadow|url/.test(this.filter);
        }
        get filter() {
          return this[P].join(" ");
        }
        get transformMatrix() {
          return this[J];
        }
        get invertMatrix() {
          if (!this[F]) {
            const g = s.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), this[J]);
            this[F] = g;
          }
          return this[F];
        }
        get transformScale() {
          const g = this[J];
          return Math.max(Math.hypot(g[0], g[1]), Math.hypot(g[2], g[3]));
        }
        get uniforms() {
          return this[r];
        }
        get pass() {
          return this[bl];
        }
        [q](g) {
          const U = this[_], W = this[m].position0, L = Object.entries(g._attribute);
          for (let N = 0; N < L.length; N++) {
            const [v, f] = L[N];
            if (v !== "a_color" && v !== "a_sourceRect" && f !== "ignored") {
              const j = U[v];
              if (v === "uv" && !j) {
                const A = this[m].boundingBox || o()(W);
                this[m].attributes[v] = nl(A, W);
              } else {
                this[m].attributes[v] = [];
                for (let A = 0; A < W.length; A++) {
                  const dl = W[A];
                  this[m].attributes[v].push(j ? j(dl, N, W) : Array(f.size).fill(0));
                }
              }
            }
          }
        }
        // {stroke, fill}
        get meshData() {
          if (this._updateMatrix && this.transformScale / this.contours.scale > 1.5 && this.accurate(this.transformScale), !this[m]) {
            !this[C] && !this[x] && this.setFill();
            const g = this[K], U = {};
            if (g && g.length) {
              if (this[C])
                try {
                  const N = h()(g, this[C]);
                  N.positions = N.positions.map((v) => (v.push(this[D]), v)), N.attributes = {
                    a_color: Array.from({
                      length: N.positions.length
                    }).map(() => this[R].map((v) => Math.round(255 * v)))
                    // a_sourceRect: Array.from({length: mesh.positions.length}).map(() => [0, 0, 0, 0]),
                  }, U.fill = N;
                } catch {
                }
              if (this[x]) {
                const N = this[x].lineDash;
                let v = g;
                if (N) {
                  const j = this[x].lineDashOffset;
                  v = Object(a.getDashContours)(g, N, j);
                }
                const f = v.map((j, A) => {
                  const dl = j.length > 1 && s.vec2.equals(j[0], j[j.length - 1]), il = this[x].build(j, dl);
                  return h()([il]);
                });
                f.forEach((j) => {
                  j.positions = j.positions.map((A) => (A.push(-this[D]), A)), j.attributes = {
                    a_color: Array.from({
                      length: j.positions.length
                    }).map(() => this[T].map((A) => Math.round(255 * A)))
                  };
                }), U.stroke = Object(e.default)(f);
              }
            }
            const W = Object(e.default)([U.fill, U.stroke]);
            W.fillPointCount = U.fill ? U.fill.positions.length : 0, W.enableBlend = this.enableBlend, W.position0 = W.positions.map(([N, v, f]) => [N, v, f]), W.uniforms = this[r], this[m] = W, this[r].u_texSampler && this[Q](W, this[Y]);
            const L = this[J];
            Object(y.isUnitTransform)(L) || (this[w](W, L), this[r].u_radialGradientVector && this[O]()), this.clipPath && this[el](), this[ll] && this[q](this[ll]);
          }
          return this._updateMatrix && (this[m].matrix = this[J], this[w](this[m], this[J]), this[r].u_radialGradientVector && this[O]()), this[m];
        }
        [w](g, U) {
          const {
            positions: W,
            position0: L
          } = g;
          for (let N = 0; N < W.length; N++) {
            const [v, f] = L[N], j = W[N];
            j[0] = v * U[0] + f * U[2] + U[4], j[1] = v * U[1] + f * U[3] + U[5];
          }
          this._updateMatrix = !1;
        }
        [O]() {
          const g = this[J], U = [...this._radialGradientVector];
          if (U) {
            const [W, L, , N, v] = U;
            U[0] = W * g[0] + L * g[2] + g[4], U[1] = W * g[1] + L * g[3] + g[5], U[3] = N * g[0] + v * g[2] + g[4], U[4] = N * g[1] + v * g[3] + g[5], this[r].u_radialGradientVector = U;
          }
        }
        [Q](g, U) {
          function W(A, dl) {
            return A == null && dl == null ? !0 : A == null || dl == null ? !1 : A[0] === dl[0] && A[1] === dl[1] && A[2] === dl[2] && A[3] === dl[3];
          }
          const L = this[r].u_texSampler;
          if (!L)
            return;
          const {
            width: N,
            height: v
          } = L._img, f = U.srcRect;
          let j = U.rect || [0, 0];
          if (U.rotated && (j = [-j[1], j[0], j[3], j[2]]), j[2] == null && (j[2] = f ? f[2] : N), j[3] == null && (j[3] = f ? f[3] : v), U.hidden)
            g.textureCoord = g.positions.map(() => [-1, -1, -1]);
          else if (!g.textureCoord || !W(this[Y].rect, U.rect) || this[Y].hidden !== U.hidden || this[Y].rotated !== U.rotated) {
            let A = null;
            U.rotated && (A = s.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), s.mat2d.fromValues(1, 0, 0, 1, 0, 0), 0.5 * Math.PI), A = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), A, [0, -j[2]])), g.textureCoord = g.position0.map(([dl, il, cl]) => {
              if (1 / cl > 0) {
                if (U.rotated) {
                  const tl = dl * A[0] + il * A[2] + A[4], sl = dl * A[1] + il * A[3] + A[5];
                  [dl, il] = [tl, sl];
                }
                const ml = z([dl, il], [j[0] / j[2], j[1] / j[3], j[2], j[3]], U);
                return U.repeat && (ml[2] = 1), ml;
              }
              return [-1, -1, -1];
            });
          }
          if (f) {
            const A = [f[0] / N, f[1] / v, f[2] / N, f[3] / v];
            g.attributes.a_sourceRect = g.positions.map(() => [...A]);
          } else
            g.attributes.a_sourceRect = g.positions.map(() => [0, 0, 0, 0]);
        }
        accurate(g) {
          if (!this.contours)
            return;
          if (this.contours.path) {
            const W = this.contours.simplify, L = M(this.contours.path, 2 * g, W);
            this[m] = null, this[K] = L;
          }
        }
        canIgnore() {
          const g = this[x] == null || this[x].lineWidth === 0 || this[T][3] === 0, U = this[C] == null || this[R][3] === 0, W = this[r].u_radialGradientVector == null, L = this[r].u_texSampler == null;
          return this[D] === 0 || this[ll] == null && g && U && W && L && !this.beforeRender && !this.afterRender;
        }
        // join: 'miter' or 'bevel'
        // cap: 'butt' or 'square'
        // lineDash: null
        // lineDashOffset: 0
        setStroke({
          thickness: g = 1,
          cap: U = "butt",
          join: W = "miter",
          miterLimit: L = 10,
          color: N = [0, 0, 0, 0],
          lineDash: v = null,
          lineDashOffset: f = 0,
          roundSegments: j = 20
        } = {}) {
          return this[m] = null, this[x] = new u.default({
            lineWidth: g,
            lineCap: U,
            lineJoin: W,
            miterLimit: L,
            roundSegments: j
          }), typeof N == "string" && (N = Object(X.default)(N)), this[T] = N, this[x].lineDash = v, this[x].lineDashOffset = f, this;
        }
        setFill({
          rule: g = this.fillRule,
          color: U = [0, 0, 0, 0]
        } = {}) {
          return this[m] = null, this[C] = {
            rule: g
          }, typeof U == "string" && (U = Object(X.default)(U)), this[R] = U, this;
        }
        /**
          options: {
            scale: false,
            repeat: false,
            rotated: false,
            rect: [10, 10],
            srcRect: [...],
            hidden: false,
          }
         */
        setTexture(g, U = {}) {
          if (g && g.image) {
            const {
              image: W,
              rect: L
            } = g;
            if (g = W, U.rect)
              for (let N = 0; N < U.rect.length; N++)
                L[N] = U.rect[N];
            U.rect = L;
          }
          return this[C] || this.setFill(), this.setUniforms({
            u_texSampler: g
          }), this[m] && this[Q](this[m], U), this[Y] = U, this;
        }
        setCircularGradient({
          vector: g,
          colors: U,
          type: W = "fill"
        } = {}) {
          if (g.length !== 3)
            throw new TypeError("Invalid linearGradient.");
          this.setGradient({
            vector: g,
            colors: U,
            type: W
          });
        }
        setLinearGradient({
          vector: g,
          colors: U,
          type: W = "fill"
        } = {}) {
          if (g.length !== 4)
            throw new TypeError("Invalid linearGradient.");
          this.setGradient({
            vector: g,
            colors: U,
            type: W
          });
        }
        setRadialGradient({
          vector: g,
          colors: U,
          type: W = "fill"
        } = {}) {
          if (g.length !== 6)
            throw new TypeError("Invalid radialGradient.");
          this.setGradient({
            vector: g,
            colors: U,
            type: W
          });
        }
        /**
          vector: [x0, y0, r0, x1, y1, r1],
          colors: [{offset:0, color}, {offset:1, color}, ...],
         */
        setGradient({
          vector: g,
          colors: U,
          type: W = "fill"
        } = {}) {
          U = U.map(({
            offset: v,
            color: f
          }) => (typeof f == "string" && (f = Object(X.default)(f)), {
            offset: v,
            color: f
          })), this[k] = this[k] || {}, this[k][W] = {
            vector: g,
            colors: U
          }, U.sort((v, f) => v.offset - f.offset);
          const L = [];
          U.forEach(({
            offset: v,
            color: f
          }) => {
            L.push(v, ...f);
          });
          let N;
          if (g.length === 4 ? N = [g[0], g[1], 0, g[2], g[3], 0] : N = [...g], L.length < 40 && L.push(-1), L.length > 40)
            throw new Error("Too many colors, should be less than 8 colors");
          return this._radialGradientVector = N, this[r].u_colorSteps = L, W === "fill" ? this[r].u_gradientType = 1 : this[r].u_gradientType = 0, this[O](), this;
        }
        setUniforms(g = {}) {
          return Object.assign(this[r], g), this;
        }
        setTransform(...g) {
          const U = this[J];
          return s.mat2d.equals(g, U) || (this[J] = g, delete this[F], this._updateMatrix = !0), this;
        }
        transform(...g) {
          const U = this[J];
          return this[J] = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), U, g), delete this[F], this._updateMatrix = !0, this;
        }
        translate(g, U) {
          let W = s.mat2d.create();
          return W = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), W, [g, U]), this.transform(...W);
        }
        rotate(g, [U, W] = [0, 0]) {
          let L = s.mat2d.create();
          return L = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), L, [U, W]), L = s.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), L, g), L = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), L, [-U, -W]), this.transform(...L);
        }
        scale(g, U = g, [W, L] = [0, 0]) {
          let N = s.mat2d.create();
          return N = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), N, [W, L]), N = s.mat2d.scale(Array.of(0, 0, 0, 0, 0, 0), N, [g, U]), N = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), N, [-W, -L]), this.transform(...N);
        }
        skew(g, U = g, [W, L] = [0, 0]) {
          let N = s.mat2d.create();
          return N = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), N, [W, L]), N = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), N, s.mat2d.fromValues(1, Math.tan(U), Math.tan(g), 1, 0, 0)), N = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), N, [-W, -L]), this.transform(...N);
        }
        clearFilter() {
          return this.setColorTransform(null), this[P].length = 0, this;
        }
        setColorTransform(...g) {
          return g[0] === null ? this.setUniforms({
            u_filterFlag: 0,
            u_colorMatrix: 0
          }) : this.setUniforms({
            u_filterFlag: 1,
            u_colorMatrix: g
          }), this;
        }
        // apply linear color transform
        transformColor(...g) {
          let U = this.uniforms.u_colorMatrix;
          return U ? U = Object(G.multiply)(U, g) : U = g, this.setColorTransform(...U), this;
        }
        blur(g) {
          return this[P].push(`blur(${g}px)`), this;
        }
        brightness(g = 1) {
          return this[P].push(`brightness(${100 * g}%)`), this.transformColor(...Object(G.brightness)(g));
        }
        contrast(g = 1) {
          return this[P].push(`contrast(${100 * g}%)`), this.transformColor(...Object(G.contrast)(g));
        }
        dropShadow(g, U, W = 0, L = [0, 0, 0, 1]) {
          return Array.isArray(L) && (L = Object(n.default)(L)), this[P].push(`drop-shadow(${g}px ${U}px ${W}px ${L})`), this;
        }
        grayscale(g = 1) {
          return this[P].push(`grayscale(${100 * g}%)`), this.transformColor(...Object(G.grayscale)(g));
        }
        // https://github.com/phoboslab/WebGLImageFilter/blob/master/webgl-image-filter.js#L371
        hueRotate(g = 0) {
          return this[P].push(`hue-rotate(${g}deg)`), this.transformColor(...Object(G.hueRotate)(g));
        }
        invert(g = 1) {
          return this[P].push(`invert(${100 * g}%)`), this.transformColor(...Object(G.invert)(g));
        }
        opacity(g = 1) {
          return this[P].push(`opacity(${100 * g}%)`), this.transformColor(...Object(G.opacity)(g));
        }
        saturate(g = 1) {
          return this[P].push(`saturate(${100 * g}%)`), this.transformColor(...Object(G.saturate)(g));
        }
        sepia(g = 1) {
          return this[P].push(`sepia(${100 * g}%)`), this.transformColor(...Object(G.sepia)(g));
        }
        url(g) {
          return this[P].push(`url(${g})`), this;
        }
        isPointCollision(g, U, W = "both") {
          const L = this.meshData, {
            positions: N,
            cells: v
          } = L, f = this.invertMatrix, j = f[0] * g + f[2] * U + f[4], A = f[1] * g + f[3] * U + f[5], dl = this.boundingBox;
          if (j < dl[0][0] || j > dl[1][0] || A < dl[0][1] || A > dl[1][1])
            return !1;
          function il([cl, ml], [tl, sl], [Zl, al]) {
            const ol = Zl - tl, Xl = al - sl, Gl = ((cl - tl) * ol + (ml - sl) * Xl) / (ol ** 2 + Xl ** 2);
            return Gl >= 0 && Gl <= 1;
          }
          for (let cl = 0; cl < v.length; cl++) {
            const ml = v[cl];
            if (W === "fill" && ml[0] >= L.fillPointCount)
              break;
            if (W === "stroke" && ml[0] < L.fillPointCount)
              continue;
            const [[tl, sl], [Zl, al], [ol, Xl]] = ml.map((Kl) => N[Kl]), Gl = Math.sign((g - tl) * (al - sl) - (Zl - tl) * (U - sl));
            if (Gl === 0 && il([g, U], [tl, sl], [Zl, al]))
              return !0;
            const xl = Math.sign((g - Zl) * (Xl - al) - (ol - Zl) * (U - al));
            if (xl === 0 && il([g, U], [Zl, al], [ol, Xl]))
              return !0;
            const Rl = Math.sign((g - ol) * (sl - Xl) - (tl - ol) * (U - Xl));
            if (Rl === 0 && il([g, U], [ol, Xl], [tl, sl]) || Gl === 1 && xl === 1 && Rl === 1 || Gl === -1 && xl === -1 && Rl === -1)
              return !0;
          }
          return !1;
        }
        isPointInFill(g, U) {
          return this.isPointCollision(g, U, "fill");
        }
        isPointInStroke(g, U) {
          return this.isPointCollision(g, U, "stroke");
        }
        addPass(g, U = {}) {
          let {
            width: W,
            height: L
          } = U, N = b(U, ["width", "height"]);
          const v = new V.default();
          v.rect(0, 0, W, L);
          const f = new E(v, {
            width: W,
            height: L
          });
          f.setUniforms(N), f.setProgram(g), this[bl].push(f);
        }
      }
    },
    /* 57 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(58);
      l(1).glMatrix.setMatrixArrayType(Array), d.default = s.Stroke;
    },
    /* 58 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "Stroke", function() {
        return y;
      });
      var s = l(49);
      l(1).glMatrix.setMatrixArrayType(Array);
      const c = Object(s.create)(), o = Object(s.create)(), u = Object(s.create)(), e = Object(s.create)(), n = Object(s.create)(), G = 1e20;
      class y {
        constructor({
          lineWidth: p = 1,
          lineJoin: X = "miter",
          miterLimit: V = 10,
          lineCap: i = "butt",
          roundSegments: b = 20
        } = {}) {
          this.lineWidth = p, this.lineJoin = X, this.miterLimit = V, this.lineCap = i, this.roundSegments = b, this._normal = null;
        }
        build(p, X = !1) {
          let V = p.length;
          if (p = [...p], V < 2)
            return p;
          X && ((p[0][0] !== p[V - 1][0] || p[0][1] !== p[V - 1][1]) && p.push([...p[0]]), p.push([...p[1]])), V = p.length, this._normal = null;
          const i = {
            left: [],
            right: []
          }, b = this.lineWidth / 2, t = this.lineCap;
          if (!X && t === "square") {
            Object(s.direction)(o, p[0], p[1]), Object(s.scaleAndAdd)(p[0], p[0], o, b);
            const K = p.length - 1;
            Object(s.direction)(o, p[K], p[K - 1]), Object(s.scaleAndAdd)(p[K], p[K], o, b);
          }
          for (let K = 1; K < V; K++) {
            const x = p[K - 1], C = p[K], T = p[K + 1];
            this._seg(i, x, C, T, b, X);
          }
          return !X && t === "round" && h(i, this.roundSegments), [...i.left, ...i.right.reverse()];
        }
        _seg(p, X, V, i, b, t) {
          const m = this.lineJoin === "bevel", K = this.lineJoin === "round";
          if (Object(s.direction)(o, V, X), this._normal || (this._normal = Object(s.create)(), Object(s.normal)(this._normal, o)), p.left.length || I(p, X, this._normal, b), !i)
            Object(s.normal)(this._normal, o), t ? I(p, X, this._normal, b) : I(p, V, this._normal, b);
          else {
            Object(s.direction)(u, i, V);
            let x = Object(s.computeMiter)(e, n, o, u, b);
            x = Math.min(x, G);
            const C = Object(s.dot)(e, this._normal) < 0 ? -1 : 1;
            let T = m || K;
            if (!T && this.lineJoin === "miter" && x / b > this.miterLimit && (T = !0), T) {
              Object(s.scaleAndAdd)(c, V, this._normal, -b * C), a(p, c, C);
              let R = 1 / 0;
              X && (R = Math.min(R, Math.hypot(V[0] - X[0], V[1] - X[1]))), i && (R = Math.min(R, Math.hypot(i[0] - V[0], i[1] - V[1])));
              const J = Math.max(b, Math.min(x, R));
              if (Object(s.scaleAndAdd)(c, V, n, J * C), a(p, c, -C), i)
                if (Object(s.normal)(c, u), Object(s.copy)(this._normal, c), Object(s.scaleAndAdd)(c, V, c, -b * C), K) {
                  const F = Object(s.clone)(c), r = C > 0 ? p.left[p.left.length - 1] : p.right[p.right.length - 1], Y = Object(s.clone)(V), H = Object(s.sub)(Object(s.create)(), r, Y), Q = Object(s.sub)(Object(s.create)(), F, Y), w = Math.PI / this.roundSegments;
                  for (let O = 0; O < this.roundSegments && (Object(s.rotate)(H, H, [0, 0], C * w), Math.sign(Object(s.cross)(c, H, Q)[2]) === C); O++)
                    Object(s.add)(c, H, Y), a(p, c, C);
                  a(p, F, C);
                } else
                  a(p, c, C);
            } else
              I(p, V, n, x), Object(s.copy)(this._normal, n);
          }
        }
      }
      function a(S, p, X) {
        X > 0 ? S.left.push(Object(s.clone)(p)) : S.right.push(Object(s.clone)(p));
      }
      function I(S, p, X, V, i = -1) {
        Object(s.scaleAndAdd)(c, p, X, -V), a(S, c, -i), Object(s.scaleAndAdd)(c, p, X, V), a(S, c, i);
      }
      function h({
        left: S,
        right: p
      }, X) {
        const V = Object(s.create)(), i = Object(s.create)();
        let b = S[0], t = p[0], m = [0.5 * (b[0] + t[0]), 0.5 * (b[1] + t[1])];
        Object(s.sub)(i, b, m);
        for (let K = 1; K <= X; K++) {
          const x = -1 * Math.PI * K / X;
          Object(s.rotate)(V, i, [0, 0], x), Object(s.add)(c, m, V), S.unshift(Object(s.clone)(c));
        }
        b = p[p.length - 1], t = S[S.length - 1], m = [0.5 * (b[0] + t[0]), 0.5 * (b[1] + t[1])], Object(s.sub)(i, b, m);
        for (let K = 1; K <= X; K++) {
          const x = -1 * Math.PI * K / X;
          Object(s.rotate)(V, i, [0, 0], x), Object(s.add)(c, m, V), p.push(Object(s.clone)(c));
        }
      }
    },
    /* 59 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "isUnitTransform", function() {
        return s;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(c) {
        return c[0] === 1 && c[1] === 0 && c[2] === 0 && c[3] === 1 && c[4] === 0 && c[5] === 0;
      }
    },
    /* 60 */
    /***/
    function(Z, d, l) {
      l(1).glMatrix.setMatrixArrayType(Array);
      var s = l(61), c = l(62);
      Z.exports = function(o, u) {
        if (u = u || {}, o = o.filter(function(X) {
          return X.length > 2;
        }), o.length === 0)
          return {
            positions: [],
            cells: []
          };
        typeof u.vertexSize != "number" && (u.vertexSize = o[0][0].length), o = o.map(function(X) {
          return X.reduce(function(V, i) {
            return V.concat(i);
          });
        });
        const e = u.rule === "evenodd" ? s.WINDING_ODD : s.WINDING_NONZERO;
        for (var n = s.tesselate(c({
          contours: o,
          windingRule: e,
          elementType: s.POLYGONS,
          polySize: 3,
          vertexSize: 2
        }, u)), G = [], y = 0; y < n.vertices.length; y += u.vertexSize) {
          var a = n.vertices.slice(y, y + u.vertexSize);
          G.push(a);
        }
        var I = [];
        for (y = 0; y < n.elements.length; y += 3) {
          var h = n.elements[y], S = n.elements[y + 1], p = n.elements[y + 2];
          I.push([h, S, p]);
        }
        return {
          positions: G,
          cells: I
        };
      };
    },
    /* 61 */
    /***/
    function(Z, d, l) {
      l(1).glMatrix.setMatrixArrayType(Array);
      var s = {}, c = {};
      Z.exports = s, s.WINDING_ODD = 0, s.WINDING_NONZERO = 1, s.WINDING_POSITIVE = 2, s.WINDING_NEGATIVE = 3, s.WINDING_ABS_GEQ_TWO = 4, s.POLYGONS = 0, s.CONNECTED_POLYGONS = 1, s.BOUNDARY_CONTOURS = 2, s.tesselate = function(i) {
        for (var b = i.debug || !1, t = new V(), m = 0; m < i.contours.length; m++)
          t.addContour(i.vertexSize || 2, i.contours[m]);
        return t.tesselate(i.windingRule || s.WINDING_ODD, i.elementType || s.POLYGONS, i.polySize || 3, i.vertexSize || 2, i.normal || [0, 0, 1]), {
          vertices: t.vertices,
          vertexIndices: t.vertexIndices,
          vertexCount: t.vertexCount,
          elements: t.elements,
          elementCount: t.elementCount,
          mesh: b ? t.mesh : void 0
        };
      };
      var o = function(i) {
        if (!i)
          throw "Assertion Failed!";
      };
      function u() {
        this.next = null, this.prev = null, this.anEdge = null, this.coords = [0, 0, 0], this.s = 0, this.t = 0, this.pqHandle = 0, this.n = 0, this.idx = 0;
      }
      function e() {
        this.next = null, this.prev = null, this.anEdge = null, this.trail = null, this.n = 0, this.marked = !1, this.inside = !1;
      }
      function n(i) {
        this.next = null, this.Sym = null, this.Onext = null, this.Lnext = null, this.Org = null, this.Lface = null, this.activeRegion = null, this.winding = 0, this.side = i;
      }
      n.prototype = {
        get Rface() {
          return this.Sym.Lface;
        },
        set Rface(i) {
          this.Sym.Lface = i;
        },
        get Dst() {
          return this.Sym.Org;
        },
        set Dst(i) {
          this.Sym.Org = i;
        },
        get Oprev() {
          return this.Sym.Lnext;
        },
        set Oprev(i) {
          this.Sym.Lnext = i;
        },
        get Lprev() {
          return this.Onext.Sym;
        },
        set Lprev(i) {
          this.Onext.Sym = i;
        },
        get Dprev() {
          return this.Lnext.Sym;
        },
        set Dprev(i) {
          this.Lnext.Sym = i;
        },
        get Rprev() {
          return this.Sym.Onext;
        },
        set Rprev(i) {
          this.Sym.Onext = i;
        },
        get Dnext() {
          return (
            /*this.Rprev*/
            this.Sym.Onext.Sym
          );
        },
        /* 3 pointers */
        set Dnext(i) {
          this.Sym.Onext.Sym = i;
        },
        /* 3 pointers */
        get Rnext() {
          return (
            /*this.Oprev*/
            this.Sym.Lnext.Sym
          );
        },
        /* 3 pointers */
        set Rnext(i) {
          this.Sym.Lnext.Sym = i;
        }
        /* 3 pointers */
      };
      function G() {
        var i = new u(), b = new e(), t = new n(0), m = new n(1);
        i.next = i.prev = i, i.anEdge = null, b.next = b.prev = b, b.anEdge = null, b.trail = null, b.marked = !1, b.inside = !1, t.next = t, t.Sym = m, t.Onext = null, t.Lnext = null, t.Org = null, t.Lface = null, t.winding = 0, t.activeRegion = null, m.next = m, m.Sym = t, m.Onext = null, m.Lnext = null, m.Org = null, m.Lface = null, m.winding = 0, m.activeRegion = null, this.vHead = i, this.fHead = b, this.eHead = t, this.eHeadSym = m;
      }
      G.prototype = {
        /* MakeEdge creates a new pair of half-edges which form their own loop.
        * No vertex or face structures are allocated, but these must be assigned
        * before the current edge operation is completed.
        */
        //static TESShalfEdge *MakeEdge( TESSmesh* mesh, TESShalfEdge *eNext )
        makeEdge_: function(i) {
          var b = new n(0), t = new n(1);
          i.Sym.side < i.side && (i = i.Sym);
          var m = i.Sym.next;
          return t.next = m, m.Sym.next = b, b.next = i, i.Sym.next = t, b.Sym = t, b.Onext = b, b.Lnext = t, b.Org = null, b.Lface = null, b.winding = 0, b.activeRegion = null, t.Sym = b, t.Onext = t, t.Lnext = b, t.Org = null, t.Lface = null, t.winding = 0, t.activeRegion = null, b;
        },
        /* Splice( a, b ) is best described by the Guibas/Stolfi paper or the
        * CS348a notes (see mesh.h).  Basically it modifies the mesh so that
        * a->Onext and b->Onext are exchanged.  This can have various effects
        * depending on whether a and b belong to different face or vertex rings.
        * For more explanation see tessMeshSplice() below.
        */
        // static void Splice( TESShalfEdge *a, TESShalfEdge *b )
        splice_: function(i, b) {
          var t = i.Onext, m = b.Onext;
          t.Sym.Lnext = b, m.Sym.Lnext = i, i.Onext = m, b.Onext = t;
        },
        /* MakeVertex( newVertex, eOrig, vNext ) attaches a new vertex and makes it the
        * origin of all edges in the vertex loop to which eOrig belongs. "vNext" gives
        * a place to insert the new vertex in the global vertex list.  We insert
        * the new vertex *before* vNext so that algorithms which walk the vertex
        * list will not see the newly created vertices.
        */
        //static void MakeVertex( TESSvertex *newVertex, TESShalfEdge *eOrig, TESSvertex *vNext )
        makeVertex_: function(i, b, t) {
          var m = i;
          o(m !== null);
          var K = t.prev;
          m.prev = K, K.next = m, m.next = t, t.prev = m, m.anEdge = b;
          var x = b;
          do
            x.Org = m, x = x.Onext;
          while (x !== b);
        },
        /* MakeFace( newFace, eOrig, fNext ) attaches a new face and makes it the left
        * face of all edges in the face loop to which eOrig belongs.  "fNext" gives
        * a place to insert the new face in the global face list.  We insert
        * the new face *before* fNext so that algorithms which walk the face
        * list will not see the newly created faces.
        */
        // static void MakeFace( TESSface *newFace, TESShalfEdge *eOrig, TESSface *fNext )
        makeFace_: function(i, b, t) {
          var m = i;
          o(m !== null);
          var K = t.prev;
          m.prev = K, K.next = m, m.next = t, t.prev = m, m.anEdge = b, m.trail = null, m.marked = !1, m.inside = t.inside;
          var x = b;
          do
            x.Lface = m, x = x.Lnext;
          while (x !== b);
        },
        /* KillEdge( eDel ) destroys an edge (the half-edges eDel and eDel->Sym),
        * and removes from the global edge list.
        */
        //static void KillEdge( TESSmesh *mesh, TESShalfEdge *eDel )
        killEdge_: function(i) {
          i.Sym.side < i.side && (i = i.Sym);
          var b = i.next, t = i.Sym.next;
          b.Sym.next = t, t.Sym.next = b;
        },
        /* KillVertex( vDel ) destroys a vertex and removes it from the global
        * vertex list.  It updates the vertex loop to point to a given new vertex.
        */
        //static void KillVertex( TESSmesh *mesh, TESSvertex *vDel, TESSvertex *newOrg )
        killVertex_: function(i, b) {
          var t = i.anEdge, m = t;
          do
            m.Org = b, m = m.Onext;
          while (m !== t);
          var K = i.prev, x = i.next;
          x.prev = K, K.next = x;
        },
        /* KillFace( fDel ) destroys a face and removes it from the global face
        * list.  It updates the face loop to point to a given new face.
        */
        //static void KillFace( TESSmesh *mesh, TESSface *fDel, TESSface *newLface )
        killFace_: function(i, b) {
          var t = i.anEdge, m = t;
          do
            m.Lface = b, m = m.Lnext;
          while (m !== t);
          var K = i.prev, x = i.next;
          x.prev = K, K.next = x;
        },
        /****************** Basic Edge Operations **********************/
        /* tessMeshMakeEdge creates one edge, two vertices, and a loop (face).
        * The loop consists of the two new half-edges.
        */
        //TESShalfEdge *tessMeshMakeEdge( TESSmesh *mesh )
        makeEdge: function() {
          var i = new u(), b = new u(), t = new e(), m = this.makeEdge_(this.eHead);
          return this.makeVertex_(i, m, this.vHead), this.makeVertex_(b, m.Sym, this.vHead), this.makeFace_(t, m, this.fHead), m;
        },
        /* tessMeshSplice( eOrg, eDst ) is the basic operation for changing the
        * mesh connectivity and topology.  It changes the mesh so that
        *	eOrg->Onext <- OLD( eDst->Onext )
        *	eDst->Onext <- OLD( eOrg->Onext )
        * where OLD(...) means the value before the meshSplice operation.
        *
        * This can have two effects on the vertex structure:
        *  - if eOrg->Org != eDst->Org, the two vertices are merged together
        *  - if eOrg->Org == eDst->Org, the origin is split into two vertices
        * In both cases, eDst->Org is changed and eOrg->Org is untouched.
        *
        * Similarly (and independently) for the face structure,
        *  - if eOrg->Lface == eDst->Lface, one loop is split into two
        *  - if eOrg->Lface != eDst->Lface, two distinct loops are joined into one
        * In both cases, eDst->Lface is changed and eOrg->Lface is unaffected.
        *
        * Some special cases:
        * If eDst == eOrg, the operation has no effect.
        * If eDst == eOrg->Lnext, the new face will have a single edge.
        * If eDst == eOrg->Lprev, the old face will have a single edge.
        * If eDst == eOrg->Onext, the new vertex will have a single edge.
        * If eDst == eOrg->Oprev, the old vertex will have a single edge.
        */
        //int tessMeshSplice( TESSmesh* mesh, TESShalfEdge *eOrg, TESShalfEdge *eDst )
        splice: function(i, b) {
          var t = !1, m = !1;
          if (i !== b) {
            if (b.Org !== i.Org && (m = !0, this.killVertex_(b.Org, i.Org)), b.Lface !== i.Lface && (t = !0, this.killFace_(b.Lface, i.Lface)), this.splice_(b, i), !m) {
              var K = new u();
              this.makeVertex_(K, b, i.Org), i.Org.anEdge = i;
            }
            if (!t) {
              var x = new e();
              this.makeFace_(x, b, i.Lface), i.Lface.anEdge = i;
            }
          }
        },
        /* tessMeshDelete( eDel ) removes the edge eDel.  There are several cases:
        * if (eDel->Lface != eDel->Rface), we join two loops into one; the loop
        * eDel->Lface is deleted.  Otherwise, we are splitting one loop into two;
        * the newly created loop will contain eDel->Dst.  If the deletion of eDel
        * would create isolated vertices, those are deleted as well.
        *
        * This function could be implemented as two calls to tessMeshSplice
        * plus a few calls to memFree, but this would allocate and delete
        * unnecessary vertices and faces.
        */
        //int tessMeshDelete( TESSmesh *mesh, TESShalfEdge *eDel )
        delete: function(i) {
          var b = i.Sym, t = !1;
          if (i.Lface !== i.Rface && (t = !0, this.killFace_(i.Lface, i.Rface)), i.Onext === i)
            this.killVertex_(i.Org, null);
          else if (i.Rface.anEdge = i.Oprev, i.Org.anEdge = i.Onext, this.splice_(i, i.Oprev), !t) {
            var m = new e();
            this.makeFace_(m, i, i.Lface);
          }
          b.Onext === b ? (this.killVertex_(b.Org, null), this.killFace_(b.Lface, null)) : (i.Lface.anEdge = b.Oprev, b.Org.anEdge = b.Onext, this.splice_(b, b.Oprev)), this.killEdge_(i);
        },
        /******************** Other Edge Operations **********************/
        /* All these routines can be implemented with the basic edge
        * operations above.  They are provided for convenience and efficiency.
        */
        /* tessMeshAddEdgeVertex( eOrg ) creates a new edge eNew such that
        * eNew == eOrg->Lnext, and eNew->Dst is a newly created vertex.
        * eOrg and eNew will have the same left face.
        */
        // TESShalfEdge *tessMeshAddEdgeVertex( TESSmesh *mesh, TESShalfEdge *eOrg );
        addEdgeVertex: function(i) {
          var b = this.makeEdge_(i), t = b.Sym;
          this.splice_(b, i.Lnext), b.Org = i.Dst;
          var m = new u();
          return this.makeVertex_(m, t, b.Org), b.Lface = t.Lface = i.Lface, b;
        },
        /* tessMeshSplitEdge( eOrg ) splits eOrg into two edges eOrg and eNew,
        * such that eNew == eOrg->Lnext.  The new vertex is eOrg->Dst == eNew->Org.
        * eOrg and eNew will have the same left face.
        */
        // TESShalfEdge *tessMeshSplitEdge( TESSmesh *mesh, TESShalfEdge *eOrg );
        splitEdge: function(i, b) {
          var t = this.addEdgeVertex(i), m = t.Sym;
          return this.splice_(i.Sym, i.Sym.Oprev), this.splice_(i.Sym, m), i.Dst = m.Org, m.Dst.anEdge = m.Sym, m.Rface = i.Rface, m.winding = i.winding, m.Sym.winding = i.Sym.winding, m;
        },
        /* tessMeshConnect( eOrg, eDst ) creates a new edge from eOrg->Dst
        * to eDst->Org, and returns the corresponding half-edge eNew.
        * If eOrg->Lface == eDst->Lface, this splits one loop into two,
        * and the newly created loop is eNew->Lface.  Otherwise, two disjoint
        * loops are merged into one, and the loop eDst->Lface is destroyed.
        *
        * If (eOrg == eDst), the new face will have only two edges.
        * If (eOrg->Lnext == eDst), the old face is reduced to a single edge.
        * If (eOrg->Lnext->Lnext == eDst), the old face is reduced to two edges.
        */
        // TESShalfEdge *tessMeshConnect( TESSmesh *mesh, TESShalfEdge *eOrg, TESShalfEdge *eDst );
        connect: function(i, b) {
          var t = !1, m = this.makeEdge_(i), K = m.Sym;
          if (b.Lface !== i.Lface && (t = !0, this.killFace_(b.Lface, i.Lface)), this.splice_(m, i.Lnext), this.splice_(K, b), m.Org = i.Dst, K.Org = b.Org, m.Lface = K.Lface = i.Lface, i.Lface.anEdge = K, !t) {
            var x = new e();
            this.makeFace_(x, m, i.Lface);
          }
          return m;
        },
        /* tessMeshZapFace( fZap ) destroys a face and removes it from the
        * global face list.  All edges of fZap will have a NULL pointer as their
        * left face.  Any edges which also have a NULL pointer as their right face
        * are deleted entirely (along with any isolated vertices this produces).
        * An entire mesh can be deleted by zapping its faces, one at a time,
        * in any order.  Zapped faces cannot be used in further mesh operations!
        */
        zapFace: function(i) {
          var b = i.anEdge, t, m, K, x, C;
          m = b.Lnext;
          do
            t = m, m = t.Lnext, t.Lface = null, t.Rface === null && (t.Onext === t ? this.killVertex_(t.Org, null) : (t.Org.anEdge = t.Onext, this.splice_(t, t.Oprev)), K = t.Sym, K.Onext === K ? this.killVertex_(K.Org, null) : (K.Org.anEdge = K.Onext, this.splice_(K, K.Oprev)), this.killEdge_(t));
          while (t != b);
          x = i.prev, C = i.next, C.prev = x, x.next = C;
        },
        countFaceVerts_: function(i) {
          var b = i.anEdge, t = 0;
          do
            t++, b = b.Lnext;
          while (b !== i.anEdge);
          return t;
        },
        //int tessMeshMergeConvexFaces( TESSmesh *mesh, int maxVertsPerFace )
        mergeConvexFaces: function(i) {
          var b, t, m, K, x, C, T;
          for (b = this.fHead.next; b !== this.fHead; b = b.next)
            if (b.inside)
              for (t = b.anEdge, x = t.Org; m = t.Lnext, K = t.Sym, K && K.Lface && K.Lface.inside && (C = this.countFaceVerts_(b), T = this.countFaceVerts_(K.Lface), C + T - 2 <= i && c.vertCCW(t.Lprev.Org, t.Org, K.Lnext.Lnext.Org) && c.vertCCW(K.Lprev.Org, K.Org, t.Lnext.Lnext.Org) && (m = K.Lnext, this.delete(K), t = null, K = null)), !(t && t.Lnext.Org === x); )
                t = m;
          return !0;
        },
        /* tessMeshCheckMesh( mesh ) checks a mesh for self-consistency.
        */
        check: function() {
          var i = this.fHead, b = this.vHead, t = this.eHead, m, K, x, C, T, R;
          for (K = i, K = i; (m = K.next) !== i; K = m) {
            o(m.prev === K), T = m.anEdge;
            do
              o(T.Sym !== T), o(T.Sym.Sym === T), o(T.Lnext.Onext.Sym === T), o(T.Onext.Sym.Lnext === T), o(T.Lface === m), T = T.Lnext;
            while (T !== m.anEdge);
          }
          for (o(m.prev === K && m.anEdge === null), C = b, C = b; (x = C.next) !== b; C = x) {
            o(x.prev === C), T = x.anEdge;
            do
              o(T.Sym !== T), o(T.Sym.Sym === T), o(T.Lnext.Onext.Sym === T), o(T.Onext.Sym.Lnext === T), o(T.Org === x), T = T.Onext;
            while (T !== x.anEdge);
          }
          for (o(x.prev === C && x.anEdge === null), R = t, R = t; (T = R.next) !== t; R = T)
            o(T.Sym.next === R.Sym), o(T.Sym !== T), o(T.Sym.Sym === T), o(T.Org !== null), o(T.Dst !== null), o(T.Lnext.Onext.Sym === T), o(T.Onext.Sym.Lnext === T);
          o(T.Sym.next === R.Sym && T.Sym === this.eHeadSym && T.Sym.Sym === T && T.Org === null && T.Dst === null && T.Lface === null && T.Rface === null);
        }
      }, c.vertEq = function(i, b) {
        return i.s === b.s && i.t === b.t;
      }, c.vertLeq = function(i, b) {
        return i.s < b.s || i.s === b.s && i.t <= b.t;
      }, c.transLeq = function(i, b) {
        return i.t < b.t || i.t === b.t && i.s <= b.s;
      }, c.edgeGoesLeft = function(i) {
        return c.vertLeq(i.Dst, i.Org);
      }, c.edgeGoesRight = function(i) {
        return c.vertLeq(i.Org, i.Dst);
      }, c.vertL1dist = function(i, b) {
        return Math.abs(i.s - b.s) + Math.abs(i.t - b.t);
      }, c.edgeEval = function(i, b, t) {
        o(c.vertLeq(i, b) && c.vertLeq(b, t));
        var m = b.s - i.s, K = t.s - b.s;
        return m + K > 0 ? m < K ? b.t - i.t + (i.t - t.t) * (m / (m + K)) : b.t - t.t + (t.t - i.t) * (K / (m + K)) : 0;
      }, c.edgeSign = function(i, b, t) {
        o(c.vertLeq(i, b) && c.vertLeq(b, t));
        var m = b.s - i.s, K = t.s - b.s;
        return m + K > 0 ? (b.t - t.t) * m + (b.t - i.t) * K : 0;
      }, c.transEval = function(i, b, t) {
        o(c.transLeq(i, b) && c.transLeq(b, t));
        var m = b.t - i.t, K = t.t - b.t;
        return m + K > 0 ? m < K ? b.s - i.s + (i.s - t.s) * (m / (m + K)) : b.s - t.s + (t.s - i.s) * (K / (m + K)) : 0;
      }, c.transSign = function(i, b, t) {
        o(c.transLeq(i, b) && c.transLeq(b, t));
        var m = b.t - i.t, K = t.t - b.t;
        return m + K > 0 ? (b.s - t.s) * m + (b.s - i.s) * K : 0;
      }, c.vertCCW = function(i, b, t) {
        return i.s * (b.t - t.t) + b.s * (t.t - i.t) + t.s * (i.t - b.t) >= 0;
      }, c.interpolate = function(i, b, t, m) {
        return i = i < 0 ? 0 : i, t = t < 0 ? 0 : t, i <= t ? t === 0 ? (b + m) / 2 : b + (m - b) * (i / (i + t)) : m + (b - m) * (t / (i + t));
      }, c.intersect = function(i, b, t, m, K) {
        var x, C, T;
        c.vertLeq(i, b) || (T = i, i = b, b = T), c.vertLeq(t, m) || (T = t, t = m, m = T), c.vertLeq(i, t) || (T = i, i = t, t = T, T = b, b = m, m = T), c.vertLeq(t, b) ? c.vertLeq(b, m) ? (x = c.edgeEval(i, t, b), C = c.edgeEval(t, b, m), x + C < 0 && (x = -x, C = -C), K.s = c.interpolate(x, t.s, C, b.s)) : (x = c.edgeSign(i, t, b), C = -c.edgeSign(i, m, b), x + C < 0 && (x = -x, C = -C), K.s = c.interpolate(x, t.s, C, m.s)) : K.s = (t.s + b.s) / 2, c.transLeq(i, b) || (T = i, i = b, b = T), c.transLeq(t, m) || (T = t, t = m, m = T), c.transLeq(i, t) || (T = i, i = t, t = T, T = b, b = m, m = T), c.transLeq(t, b) ? c.transLeq(b, m) ? (x = c.transEval(i, t, b), C = c.transEval(t, b, m), x + C < 0 && (x = -x, C = -C), K.t = c.interpolate(x, t.t, C, b.t)) : (x = c.transSign(i, t, b), C = -c.transSign(i, m, b), x + C < 0 && (x = -x, C = -C), K.t = c.interpolate(x, t.t, C, m.t)) : K.t = (t.t + b.t) / 2;
      };
      function y() {
        this.key = null, this.next = null, this.prev = null;
      }
      function a(i, b) {
        this.head = new y(), this.head.next = this.head, this.head.prev = this.head, this.frame = i, this.leq = b;
      }
      a.prototype = {
        min: function() {
          return this.head.next;
        },
        max: function() {
          return this.head.prev;
        },
        insert: function(i) {
          return this.insertBefore(this.head, i);
        },
        search: function(i) {
          var b = this.head;
          do
            b = b.next;
          while (b.key !== null && !this.leq(this.frame, i, b.key));
          return b;
        },
        insertBefore: function(i, b) {
          do
            i = i.prev;
          while (i.key !== null && !this.leq(this.frame, i.key, b));
          var t = new y();
          return t.key = b, t.next = i.next, i.next.prev = t, t.prev = i, i.next = t, t;
        },
        delete: function(i) {
          i.next.prev = i.prev, i.prev.next = i.next;
        }
      };
      function I() {
        this.handle = null;
      }
      function h() {
        this.key = null, this.node = null;
      }
      function S(i, b) {
        this.size = 0, this.max = i, this.nodes = [], this.nodes.length = i + 1;
        var t;
        for (t = 0; t < this.nodes.length; t++)
          this.nodes[t] = new I();
        for (this.handles = [], this.handles.length = i + 1, t = 0; t < this.handles.length; t++)
          this.handles[t] = new h();
        this.initialized = !1, this.freeList = 0, this.leq = b, this.nodes[1].handle = 1, this.handles[1].key = null;
      }
      S.prototype = {
        floatDown_: function(i) {
          var b = this.nodes, t = this.handles, m, K, x;
          for (m = b[i].handle; ; ) {
            if (x = i << 1, x < this.size && this.leq(t[b[x + 1].handle].key, t[b[x].handle].key) && ++x, o(x <= this.max), K = b[x].handle, x > this.size || this.leq(t[m].key, t[K].key)) {
              b[i].handle = m, t[m].node = i;
              break;
            }
            b[i].handle = K, t[K].node = i, i = x;
          }
        },
        floatUp_: function(i) {
          var b = this.nodes, t = this.handles, m, K, x;
          for (m = b[i].handle; ; ) {
            if (x = i >> 1, K = b[x].handle, x === 0 || this.leq(t[K].key, t[m].key)) {
              b[i].handle = m, t[m].node = i;
              break;
            }
            b[i].handle = K, t[K].node = i, i = x;
          }
        },
        init: function() {
          for (var i = this.size; i >= 1; --i)
            this.floatDown_(i);
          this.initialized = !0;
        },
        min: function() {
          return this.handles[this.nodes[1].handle].key;
        },
        /* really pqHeapInsert */
        /* returns INV_HANDLE iff out of memory */
        //PQhandle pqHeapInsert( TESSalloc* alloc, PriorityQHeap *pq, PQkey keyNew )
        insert: function(i) {
          var b, t;
          if (b = ++this.size, b * 2 > this.max) {
            this.max *= 2;
            var m, K;
            for (K = this.nodes.length, this.nodes.length = this.max + 1, m = K; m < this.nodes.length; m++)
              this.nodes[m] = new I();
            for (K = this.handles.length, this.handles.length = this.max + 1, m = K; m < this.handles.length; m++)
              this.handles[m] = new h();
          }
          return this.freeList === 0 ? t = b : (t = this.freeList, this.freeList = this.handles[t].node), this.nodes[b].handle = t, this.handles[t].node = b, this.handles[t].key = i, this.initialized && this.floatUp_(b), t;
        },
        //PQkey pqHeapExtractMin( PriorityQHeap *pq )
        extractMin: function() {
          var i = this.nodes, b = this.handles, t = i[1].handle, m = b[t].key;
          return this.size > 0 && (i[1].handle = i[this.size].handle, b[i[1].handle].node = 1, b[t].key = null, b[t].node = this.freeList, this.freeList = t, --this.size, this.size > 0 && this.floatDown_(1)), m;
        },
        delete: function(i) {
          var b = this.nodes, t = this.handles, m;
          o(i >= 1 && i <= this.max && t[i].key !== null), m = t[i].node, b[m].handle = b[this.size].handle, t[b[m].handle].node = m, --this.size, m <= this.size && (m <= 1 || this.leq(t[b[m >> 1].handle].key, t[b[m].handle].key) ? this.floatDown_(m) : this.floatUp_(m)), t[i].key = null, t[i].node = this.freeList, this.freeList = i;
        }
      };
      function p() {
        this.eUp = null, this.nodeUp = null, this.windingNumber = 0, this.inside = !1, this.sentinel = !1, this.dirty = !1, this.fixUpperEdge = !1;
      }
      var X = {};
      X.regionBelow = function(i) {
        return i.nodeUp.prev.key;
      }, X.regionAbove = function(i) {
        return i.nodeUp.next.key;
      }, X.debugEvent = function(i) {
      }, X.addWinding = function(i, b) {
        i.winding += b.winding, i.Sym.winding += b.Sym.winding;
      }, X.edgeLeq = function(i, b, t) {
        var m = i.event, C, T, K = b.eUp, x = t.eUp;
        if (K.Dst === m)
          return x.Dst === m ? c.vertLeq(K.Org, x.Org) ? c.edgeSign(x.Dst, K.Org, x.Org) <= 0 : c.edgeSign(K.Dst, x.Org, K.Org) >= 0 : c.edgeSign(x.Dst, m, x.Org) <= 0;
        if (x.Dst === m)
          return c.edgeSign(K.Dst, m, K.Org) >= 0;
        var C = c.edgeEval(K.Dst, m, K.Org), T = c.edgeEval(x.Dst, m, x.Org);
        return C >= T;
      }, X.deleteRegion = function(i, b) {
        b.fixUpperEdge && o(b.eUp.winding === 0), b.eUp.activeRegion = null, i.dict.delete(b.nodeUp);
      }, X.fixUpperEdge = function(i, b, t) {
        o(b.fixUpperEdge), i.mesh.delete(b.eUp), b.fixUpperEdge = !1, b.eUp = t, t.activeRegion = b;
      }, X.topLeftRegion = function(i, b) {
        var t = b.eUp.Org, m;
        do
          b = X.regionAbove(b);
        while (b.eUp.Org === t);
        if (b.fixUpperEdge) {
          if (m = i.mesh.connect(X.regionBelow(b).eUp.Sym, b.eUp.Lnext), m === null)
            return null;
          X.fixUpperEdge(i, b, m), b = X.regionAbove(b);
        }
        return b;
      }, X.topRightRegion = function(i) {
        var b = i.eUp.Dst;
        do
          i = X.regionAbove(i);
        while (i.eUp.Dst === b);
        return i;
      }, X.addRegionBelow = function(i, b, t) {
        var m = new p();
        return m.eUp = t, m.nodeUp = i.dict.insertBefore(b.nodeUp, m), m.fixUpperEdge = !1, m.sentinel = !1, m.dirty = !1, t.activeRegion = m, m;
      }, X.isWindingInside = function(i, b) {
        switch (i.windingRule) {
          case s.WINDING_ODD:
            return (b & 1) !== 0;
          case s.WINDING_NONZERO:
            return b !== 0;
          case s.WINDING_POSITIVE:
            return b > 0;
          case s.WINDING_NEGATIVE:
            return b < 0;
          case s.WINDING_ABS_GEQ_TWO:
            return b >= 2 || b <= -2;
        }
        return o(!1), !1;
      }, X.computeWinding = function(i, b) {
        b.windingNumber = X.regionAbove(b).windingNumber + b.eUp.winding, b.inside = X.isWindingInside(i, b.windingNumber);
      }, X.finishRegion = function(i, b) {
        var t = b.eUp, m = t.Lface;
        m.inside = b.inside, m.anEdge = t, X.deleteRegion(i, b);
      }, X.finishLeftRegions = function(i, b, t) {
        for (var m, C, K = null, x = b, C = b.eUp; x !== t; ) {
          if (x.fixUpperEdge = !1, K = X.regionBelow(x), m = K.eUp, m.Org != C.Org) {
            if (!K.fixUpperEdge) {
              X.finishRegion(i, x);
              break;
            }
            m = i.mesh.connect(C.Lprev, m.Sym), X.fixUpperEdge(i, K, m);
          }
          C.Onext !== m && (i.mesh.splice(m.Oprev, m), i.mesh.splice(C, m)), X.finishRegion(i, x), C = K.eUp, x = K;
        }
        return C;
      }, X.addRightEdges = function(i, b, t, m, K, x) {
        var C, T, R, J, F = !0;
        R = t;
        do
          o(c.vertLeq(R.Org, R.Dst)), X.addRegionBelow(i, b, R.Sym), R = R.Onext;
        while (R !== m);
        for (K === null && (K = X.regionBelow(b).eUp.Rprev), T = b, J = K; C = X.regionBelow(T), R = C.eUp.Sym, R.Org === J.Org; )
          R.Onext !== J && (i.mesh.splice(R.Oprev, R), i.mesh.splice(J.Oprev, R)), C.windingNumber = T.windingNumber - R.winding, C.inside = X.isWindingInside(i, C.windingNumber), T.dirty = !0, !F && X.checkForRightSplice(i, T) && (X.addWinding(R, J), X.deleteRegion(i, T), i.mesh.delete(J)), F = !1, T = C, J = R;
        T.dirty = !0, o(T.windingNumber - R.winding === C.windingNumber), x && X.walkDirtyRegions(i, T);
      }, X.spliceMergeVertices = function(i, b, t) {
        i.mesh.splice(b, t);
      }, X.vertexWeights = function(i, b, t) {
        var m = c.vertL1dist(b, i), K = c.vertL1dist(t, i), x = 0.5 * K / (m + K), C = 0.5 * m / (m + K);
        i.coords[0] += x * b.coords[0] + C * t.coords[0], i.coords[1] += x * b.coords[1] + C * t.coords[1], i.coords[2] += x * b.coords[2] + C * t.coords[2];
      }, X.getIntersectData = function(i, b, t, m, K, x) {
        b.coords[0] = b.coords[1] = b.coords[2] = 0, b.idx = -1, X.vertexWeights(b, t, m), X.vertexWeights(b, K, x);
      }, X.checkForRightSplice = function(i, b) {
        var t = X.regionBelow(b), m = b.eUp, K = t.eUp;
        if (c.vertLeq(m.Org, K.Org)) {
          if (c.edgeSign(K.Dst, m.Org, K.Org) > 0)
            return !1;
          c.vertEq(m.Org, K.Org) ? m.Org !== K.Org && (i.pq.delete(m.Org.pqHandle), X.spliceMergeVertices(i, K.Oprev, m)) : (i.mesh.splitEdge(K.Sym), i.mesh.splice(m, K.Oprev), b.dirty = t.dirty = !0);
        } else {
          if (c.edgeSign(m.Dst, K.Org, m.Org) < 0)
            return !1;
          X.regionAbove(b).dirty = b.dirty = !0, i.mesh.splitEdge(m.Sym), i.mesh.splice(K.Oprev, m);
        }
        return !0;
      }, X.checkForLeftSplice = function(i, b) {
        var t = X.regionBelow(b), m = b.eUp, K = t.eUp, x;
        if (o(!c.vertEq(m.Dst, K.Dst)), c.vertLeq(m.Dst, K.Dst)) {
          if (c.edgeSign(m.Dst, K.Dst, m.Org) < 0)
            return !1;
          X.regionAbove(b).dirty = b.dirty = !0, x = i.mesh.splitEdge(m), i.mesh.splice(K.Sym, x), x.Lface.inside = b.inside;
        } else {
          if (c.edgeSign(K.Dst, m.Dst, K.Org) > 0)
            return !1;
          b.dirty = t.dirty = !0, x = i.mesh.splitEdge(K), i.mesh.splice(m.Lnext, K.Sym), x.Rface.inside = b.inside;
        }
        return !0;
      }, X.checkForIntersect = function(i, b) {
        var t = X.regionBelow(b), m = b.eUp, K = t.eUp, x = m.Org, C = K.Org, T = m.Dst, R = K.Dst, J, F, r = new u(), Y, H;
        if (o(!c.vertEq(R, T)), o(c.edgeSign(T, i.event, x) <= 0), o(c.edgeSign(R, i.event, C) >= 0), o(x !== i.event && C !== i.event), o(!b.fixUpperEdge && !t.fixUpperEdge), x === C || (J = Math.min(x.t, T.t), F = Math.max(C.t, R.t), J > F))
          return !1;
        if (c.vertLeq(x, C)) {
          if (c.edgeSign(R, x, C) > 0)
            return !1;
        } else if (c.edgeSign(T, C, x) < 0)
          return !1;
        return X.debugEvent(i), c.intersect(T, x, R, C, r), o(Math.min(x.t, T.t) <= r.t), o(r.t <= Math.max(C.t, R.t)), o(Math.min(R.s, T.s) <= r.s), o(r.s <= Math.max(C.s, x.s)), c.vertLeq(r, i.event) && (r.s = i.event.s, r.t = i.event.t), Y = c.vertLeq(x, C) ? x : C, c.vertLeq(Y, r) && (r.s = Y.s, r.t = Y.t), c.vertEq(r, x) || c.vertEq(r, C) ? (X.checkForRightSplice(i, b), !1) : !c.vertEq(T, i.event) && c.edgeSign(T, i.event, r) >= 0 || !c.vertEq(R, i.event) && c.edgeSign(R, i.event, r) <= 0 ? R === i.event ? (i.mesh.splitEdge(m.Sym), i.mesh.splice(K.Sym, m), b = X.topLeftRegion(i, b), m = X.regionBelow(b).eUp, X.finishLeftRegions(i, X.regionBelow(b), t), X.addRightEdges(i, b, m.Oprev, m, m, !0), !0) : T === i.event ? (i.mesh.splitEdge(K.Sym), i.mesh.splice(m.Lnext, K.Oprev), t = b, b = X.topRightRegion(b), H = X.regionBelow(b).eUp.Rprev, t.eUp = K.Oprev, K = X.finishLeftRegions(i, t, null), X.addRightEdges(i, b, K.Onext, m.Rprev, H, !0), !0) : (c.edgeSign(T, i.event, r) >= 0 && (X.regionAbove(b).dirty = b.dirty = !0, i.mesh.splitEdge(m.Sym), m.Org.s = i.event.s, m.Org.t = i.event.t), c.edgeSign(R, i.event, r) <= 0 && (b.dirty = t.dirty = !0, i.mesh.splitEdge(K.Sym), K.Org.s = i.event.s, K.Org.t = i.event.t), !1) : (i.mesh.splitEdge(m.Sym), i.mesh.splitEdge(K.Sym), i.mesh.splice(K.Oprev, m), m.Org.s = r.s, m.Org.t = r.t, m.Org.pqHandle = i.pq.insert(m.Org), X.getIntersectData(i, m.Org, x, T, C, R), X.regionAbove(b).dirty = b.dirty = t.dirty = !0, !1);
      }, X.walkDirtyRegions = function(i, b) {
        for (var t = X.regionBelow(b), m, K; ; ) {
          for (; t.dirty; )
            b = t, t = X.regionBelow(t);
          if (!b.dirty && (t = b, b = X.regionAbove(b), b === null || !b.dirty))
            return;
          if (b.dirty = !1, m = b.eUp, K = t.eUp, m.Dst !== K.Dst && X.checkForLeftSplice(i, b) && (t.fixUpperEdge ? (X.deleteRegion(i, t), i.mesh.delete(K), t = X.regionBelow(b), K = t.eUp) : b.fixUpperEdge && (X.deleteRegion(i, b), i.mesh.delete(m), b = X.regionAbove(t), m = b.eUp)), m.Org !== K.Org)
            if (m.Dst !== K.Dst && !b.fixUpperEdge && !t.fixUpperEdge && (m.Dst === i.event || K.Dst === i.event)) {
              if (X.checkForIntersect(i, b))
                return;
            } else
              X.checkForRightSplice(i, b);
          m.Org === K.Org && m.Dst === K.Dst && (X.addWinding(K, m), X.deleteRegion(i, b), i.mesh.delete(m), b = X.regionAbove(t));
        }
      }, X.connectRightVertex = function(i, b, t) {
        var m, K = t.Onext, x = X.regionBelow(b), C = b.eUp, T = x.eUp, R = !1;
        if (C.Dst !== T.Dst && X.checkForIntersect(i, b), c.vertEq(C.Org, i.event) && (i.mesh.splice(K.Oprev, C), b = X.topLeftRegion(i, b), K = X.regionBelow(b).eUp, X.finishLeftRegions(i, X.regionBelow(b), x), R = !0), c.vertEq(T.Org, i.event) && (i.mesh.splice(t, T.Oprev), t = X.finishLeftRegions(i, x, null), R = !0), R) {
          X.addRightEdges(i, b, t.Onext, K, K, !0);
          return;
        }
        c.vertLeq(T.Org, C.Org) ? m = T.Oprev : m = C, m = i.mesh.connect(t.Lprev, m), X.addRightEdges(i, b, m, m.Onext, m.Onext, !1), m.Sym.activeRegion.fixUpperEdge = !0, X.walkDirtyRegions(i, b);
      }, X.connectLeftDegenerate = function(i, b, t) {
        var m, K, x, C, T;
        if (m = b.eUp, c.vertEq(m.Org, t)) {
          o(
            !1
            /*TOLERANCE_NONZERO*/
          ), X.spliceMergeVertices(i, m, t.anEdge);
          return;
        }
        if (!c.vertEq(m.Dst, t)) {
          i.mesh.splitEdge(m.Sym), b.fixUpperEdge && (i.mesh.delete(m.Onext), b.fixUpperEdge = !1), i.mesh.splice(t.anEdge, m), X.sweepEvent(i, t);
          return;
        }
        o(
          !1
          /*TOLERANCE_NONZERO*/
        ), b = X.topRightRegion(b), T = X.regionBelow(b), x = T.eUp.Sym, K = C = x.Onext, T.fixUpperEdge && (o(K !== x), X.deleteRegion(i, T), i.mesh.delete(x), x = K.Oprev), i.mesh.splice(t.anEdge, x), c.edgeGoesLeft(K) || (K = null), X.addRightEdges(i, b, x.Onext, C, K, !0);
      }, X.connectLeftVertex = function(i, b) {
        var t, m, K, x, C, T, R = new p();
        if (R.eUp = b.anEdge.Sym, t = i.dict.search(R).key, m = X.regionBelow(t), !!m) {
          if (x = t.eUp, C = m.eUp, c.edgeSign(x.Dst, b, x.Org) === 0) {
            X.connectLeftDegenerate(i, t, b);
            return;
          }
          if (K = c.vertLeq(C.Dst, x.Dst) ? t : m, t.inside || K.fixUpperEdge) {
            if (K === t)
              T = i.mesh.connect(b.anEdge.Sym, x.Lnext);
            else {
              var J = i.mesh.connect(C.Dnext, b.anEdge);
              T = J.Sym;
            }
            K.fixUpperEdge ? X.fixUpperEdge(i, K, T) : X.computeWinding(i, X.addRegionBelow(i, t, T)), X.sweepEvent(i, b);
          } else
            X.addRightEdges(i, t, b.anEdge, b.anEdge, null, !0);
        }
      }, X.sweepEvent = function(i, b) {
        i.event = b, X.debugEvent(i);
        for (var t = b.anEdge; t.activeRegion === null; )
          if (t = t.Onext, t === b.anEdge) {
            X.connectLeftVertex(i, b);
            return;
          }
        var m = X.topLeftRegion(i, t.activeRegion);
        o(m !== null);
        var K = X.regionBelow(m), x = K.eUp, C = X.finishLeftRegions(i, K, null);
        C.Onext === x ? X.connectRightVertex(i, m, C) : X.addRightEdges(i, m, C.Onext, x, x, !0);
      }, X.addSentinel = function(i, b, t, m) {
        var K = new p(), x = i.mesh.makeEdge();
        x.Org.s = t, x.Org.t = m, x.Dst.s = b, x.Dst.t = m, i.event = x.Dst, K.eUp = x, K.windingNumber = 0, K.inside = !1, K.fixUpperEdge = !1, K.sentinel = !0, K.dirty = !1, K.nodeUp = i.dict.insert(K);
      }, X.initEdgeDict = function(i) {
        i.dict = new a(i, X.edgeLeq);
        var b = i.bmax[0] - i.bmin[0], t = i.bmax[1] - i.bmin[1], m = i.bmin[0] - b, K = i.bmax[0] + b, x = i.bmin[1] - t, C = i.bmax[1] + t;
        X.addSentinel(i, m, K, x), X.addSentinel(i, m, K, C);
      }, X.doneEdgeDict = function(i) {
        for (var b, t = 0; (b = i.dict.min().key) !== null; )
          b.sentinel || (o(b.fixUpperEdge), o(++t === 1)), o(b.windingNumber === 0), X.deleteRegion(i, b);
      }, X.removeDegenerateEdges = function(i) {
        var b, t, m, K = i.mesh.eHead;
        for (b = K.next; b !== K; b = t)
          t = b.next, m = b.Lnext, c.vertEq(b.Org, b.Dst) && b.Lnext.Lnext !== b && (X.spliceMergeVertices(i, m, b), i.mesh.delete(b), b = m, m = b.Lnext), m.Lnext === b && (m !== b && ((m === t || m === t.Sym) && (t = t.next), i.mesh.delete(m)), (b === t || b === t.Sym) && (t = t.next), i.mesh.delete(b));
      }, X.initPriorityQ = function(i) {
        var b, t, m, K = 0;
        for (m = i.mesh.vHead, t = m.next; t !== m; t = t.next)
          K++;
        for (K += 8, b = i.pq = new S(K, c.vertLeq), m = i.mesh.vHead, t = m.next; t !== m; t = t.next)
          t.pqHandle = b.insert(t);
        return t !== m ? !1 : (b.init(), !0);
      }, X.donePriorityQ = function(i) {
        i.pq = null;
      }, X.removeDegenerateFaces = function(i, b) {
        var t, m, K;
        for (t = b.fHead.next; t !== b.fHead; t = m)
          m = t.next, K = t.anEdge, o(K.Lnext !== K), K.Lnext.Lnext === K && (X.addWinding(K.Onext, K), i.mesh.delete(K));
        return !0;
      }, X.computeInterior = function(i) {
        var b, t;
        if (X.removeDegenerateEdges(i), !X.initPriorityQ(i))
          return !1;
        for (X.initEdgeDict(i); (b = i.pq.extractMin()) !== null; ) {
          for (; t = i.pq.min(), !(t === null || !c.vertEq(t, b)); )
            t = i.pq.extractMin(), X.spliceMergeVertices(i, b.anEdge, t.anEdge);
          X.sweepEvent(i, b);
        }
        return i.event = i.dict.min().key.eUp.Org, X.debugEvent(i), X.doneEdgeDict(i), X.donePriorityQ(i), X.removeDegenerateFaces(i, i.mesh) ? (i.mesh.check(), !0) : !1;
      };
      function V() {
        this.mesh = null, this.normal = [0, 0, 0], this.sUnit = [0, 0, 0], this.tUnit = [0, 0, 0], this.bmin = [0, 0], this.bmax = [0, 0], this.windingRule = s.WINDING_ODD, this.dict = null, this.pq = null, this.event = null, this.vertexIndexCounter = 0, this.vertices = [], this.vertexIndices = [], this.vertexCount = 0, this.elements = [], this.elementCount = 0;
      }
      V.prototype = {
        dot_: function(i, b) {
          return i[0] * b[0] + i[1] * b[1] + i[2] * b[2];
        },
        normalize_: function(i) {
          var b = i[0] * i[0] + i[1] * i[1] + i[2] * i[2];
          o(b > 0), b = Math.sqrt(b), i[0] /= b, i[1] /= b, i[2] /= b;
        },
        longAxis_: function(i) {
          var b = 0;
          return Math.abs(i[1]) > Math.abs(i[0]) && (b = 1), Math.abs(i[2]) > Math.abs(i[b]) && (b = 2), b;
        },
        computeNormal_: function(i) {
          var b, t, m, K, x, C, T = [0, 0, 0], R = [0, 0, 0], J = [0, 0, 0], F = [0, 0, 0], r = [0, 0, 0], Y = [null, null, null], H = [null, null, null], Q = this.mesh.vHead, w;
          for (b = Q.next, w = 0; w < 3; ++w)
            K = b.coords[w], R[w] = K, H[w] = b, T[w] = K, Y[w] = b;
          for (b = Q.next; b !== Q; b = b.next)
            for (w = 0; w < 3; ++w)
              K = b.coords[w], K < R[w] && (R[w] = K, H[w] = b), K > T[w] && (T[w] = K, Y[w] = b);
          if (w = 0, T[1] - R[1] > T[0] - R[0] && (w = 1), T[2] - R[2] > T[w] - R[w] && (w = 2), R[w] >= T[w]) {
            i[0] = 0, i[1] = 0, i[2] = 1;
            return;
          }
          for (C = 0, t = H[w], m = Y[w], J[0] = t.coords[0] - m.coords[0], J[1] = t.coords[1] - m.coords[1], J[2] = t.coords[2] - m.coords[2], b = Q.next; b !== Q; b = b.next)
            F[0] = b.coords[0] - m.coords[0], F[1] = b.coords[1] - m.coords[1], F[2] = b.coords[2] - m.coords[2], r[0] = J[1] * F[2] - J[2] * F[1], r[1] = J[2] * F[0] - J[0] * F[2], r[2] = J[0] * F[1] - J[1] * F[0], x = r[0] * r[0] + r[1] * r[1] + r[2] * r[2], x > C && (C = x, i[0] = r[0], i[1] = r[1], i[2] = r[2]);
          C <= 0 && (i[0] = i[1] = i[2] = 0, i[this.longAxis_(J)] = 1);
        },
        checkOrientation_: function() {
          var i, b, t = this.mesh.fHead, m, K = this.mesh.vHead, x;
          for (i = 0, b = t.next; b !== t; b = b.next)
            if (x = b.anEdge, !(x.winding <= 0))
              do
                i += (x.Org.s - x.Dst.s) * (x.Org.t + x.Dst.t), x = x.Lnext;
              while (x !== b.anEdge);
          if (i < 0) {
            for (m = K.next; m !== K; m = m.next)
              m.t = -m.t;
            this.tUnit[0] = -this.tUnit[0], this.tUnit[1] = -this.tUnit[1], this.tUnit[2] = -this.tUnit[2];
          }
        },
        /*	#ifdef FOR_TRITE_TEST_PROGRAM
          #include <stdlib.h>
          extern int RandomSweep;
          #define S_UNIT_X	(RandomSweep ? (2*drand48()-1) : 1.0)
          #define S_UNIT_Y	(RandomSweep ? (2*drand48()-1) : 0.0)
          #else
          #if defined(SLANTED_SWEEP) */
        /* The "feature merging" is not intended to be complete.  There are
        * special cases where edges are nearly parallel to the sweep line
        * which are not implemented.  The algorithm should still behave
        * robustly (ie. produce a reasonable tesselation) in the presence
        * of such edges, however it may miss features which could have been
        * merged.  We could minimize this effect by choosing the sweep line
        * direction to be something unusual (ie. not parallel to one of the
        * coordinate axes).
        */
        /*	#define S_UNIT_X	(TESSreal)0.50941539564955385	// Pre-normalized
          #define S_UNIT_Y	(TESSreal)0.86052074622010633
          #else
          #define S_UNIT_X	(TESSreal)1.0
          #define S_UNIT_Y	(TESSreal)0.0
          #endif
          #endif*/
        /* Determine the polygon normal and project vertices onto the plane
        * of the polygon.
        */
        projectPolygon_: function() {
          var i, b = this.mesh.vHead, t = [0, 0, 0], m, K, x, C, T = !1;
          for (t[0] = this.normal[0], t[1] = this.normal[1], t[2] = this.normal[2], t[0] === 0 && t[1] === 0 && t[2] === 0 && (this.computeNormal_(t), T = !0), m = this.sUnit, K = this.tUnit, x = this.longAxis_(t), m[x] = 0, m[(x + 1) % 3] = 1, m[(x + 2) % 3] = 0, K[x] = 0, K[(x + 1) % 3] = 0, K[(x + 2) % 3] = t[x] > 0 ? 1 : -1, i = b.next; i !== b; i = i.next)
            i.s = this.dot_(i.coords, m), i.t = this.dot_(i.coords, K);
          for (T && this.checkOrientation_(), C = !0, i = b.next; i !== b; i = i.next)
            C ? (this.bmin[0] = this.bmax[0] = i.s, this.bmin[1] = this.bmax[1] = i.t, C = !1) : (i.s < this.bmin[0] && (this.bmin[0] = i.s), i.s > this.bmax[0] && (this.bmax[0] = i.s), i.t < this.bmin[1] && (this.bmin[1] = i.t), i.t > this.bmax[1] && (this.bmax[1] = i.t));
        },
        addWinding_: function(i, b) {
          i.winding += b.winding, i.Sym.winding += b.Sym.winding;
        },
        /* tessMeshTessellateMonoRegion( face ) tessellates a monotone region
        * (what else would it do??)  The region must consist of a single
        * loop of half-edges (see mesh.h) oriented CCW.  "Monotone" in this
        * case means that any vertical line intersects the interior of the
        * region in a single interval.  
        *
        * Tessellation consists of adding interior edges (actually pairs of
        * half-edges), to split the region into non-overlapping triangles.
        *
        * The basic idea is explained in Preparata and Shamos (which I don''t
        * have handy right now), although their implementation is more
        * complicated than this one.  The are two edge chains, an upper chain
        * and a lower chain.  We process all vertices from both chains in order,
        * from right to left.
        *
        * The algorithm ensures that the following invariant holds after each
        * vertex is processed: the untessellated region consists of two
        * chains, where one chain (say the upper) is a single edge, and
        * the other chain is concave.  The left vertex of the single edge
        * is always to the left of all vertices in the concave chain.
        *
        * Each step consists of adding the rightmost unprocessed vertex to one
        * of the two chains, and forming a fan of triangles from the rightmost
        * of two chain endpoints.  Determining whether we can add each triangle
        * to the fan is a simple orientation test.  By making the fan as large
        * as possible, we restore the invariant (check it yourself).
        */
        //	int tessMeshTessellateMonoRegion( TESSmesh *mesh, TESSface *face )
        tessellateMonoRegion_: function(i, b) {
          var t, m;
          for (t = b.anEdge, o(t.Lnext !== t && t.Lnext.Lnext !== t); c.vertLeq(t.Dst, t.Org); t = t.Lprev)
            ;
          for (; c.vertLeq(t.Org, t.Dst); t = t.Lnext)
            ;
          for (m = t.Lprev; t.Lnext !== m; )
            if (c.vertLeq(t.Dst, m.Org)) {
              for (; m.Lnext !== t && (c.edgeGoesLeft(m.Lnext) || c.edgeSign(m.Org, m.Dst, m.Lnext.Dst) <= 0); ) {
                var K = i.connect(m.Lnext, m);
                m = K.Sym;
              }
              m = m.Lprev;
            } else {
              for (; m.Lnext !== t && (c.edgeGoesRight(t.Lprev) || c.edgeSign(t.Dst, t.Org, t.Lprev.Org) >= 0); ) {
                var K = i.connect(t, t.Lprev);
                t = K.Sym;
              }
              t = t.Lnext;
            }
          for (o(m.Lnext !== t); m.Lnext.Lnext !== t; ) {
            var K = i.connect(m.Lnext, m);
            m = K.Sym;
          }
          return !0;
        },
        /* tessMeshTessellateInterior( mesh ) tessellates each region of
        * the mesh which is marked "inside" the polygon.  Each such region
        * must be monotone.
        */
        //int tessMeshTessellateInterior( TESSmesh *mesh )
        tessellateInterior_: function(i) {
          var b, t;
          for (b = i.fHead.next; b !== i.fHead; b = t)
            if (t = b.next, b.inside && !this.tessellateMonoRegion_(i, b))
              return !1;
          return !0;
        },
        /* tessMeshDiscardExterior( mesh ) zaps (ie. sets to NULL) all faces
        * which are not marked "inside" the polygon.  Since further mesh operations
        * on NULL faces are not allowed, the main purpose is to clean up the
        * mesh so that exterior loops are not represented in the data structure.
        */
        //void tessMeshDiscardExterior( TESSmesh *mesh )
        discardExterior_: function(i) {
          var b, t;
          for (b = i.fHead.next; b !== i.fHead; b = t)
            t = b.next, b.inside || i.zapFace(b);
        },
        /* tessMeshSetWindingNumber( mesh, value, keepOnlyBoundary ) resets the
        * winding numbers on all edges so that regions marked "inside" the
        * polygon have a winding number of "value", and regions outside
        * have a winding number of 0.
        *
        * If keepOnlyBoundary is TRUE, it also deletes all edges which do not
        * separate an interior region from an exterior one.
        */
        //	int tessMeshSetWindingNumber( TESSmesh *mesh, int value, int keepOnlyBoundary )
        setWindingNumber_: function(i, b, t) {
          var m, K;
          for (m = i.eHead.next; m !== i.eHead; m = K)
            K = m.next, m.Rface.inside !== m.Lface.inside ? m.winding = m.Lface.inside ? b : -b : t ? i.delete(m) : m.winding = 0;
        },
        getNeighbourFace_: function(i) {
          return !i.Rface || !i.Rface.inside ? -1 : i.Rface.n;
        },
        outputPolymesh_: function(i, b, t, m) {
          var K, x, C, T = 0, R = 0, J, F;
          for (t > 3 && i.mergeConvexFaces(t), K = i.vHead.next; K !== i.vHead; K = K.next)
            K.n = -1;
          for (x = i.fHead.next; x !== i.fHead; x = x.next)
            if (x.n = -1, !!x.inside) {
              C = x.anEdge, J = 0;
              do
                K = C.Org, K.n === -1 && (K.n = R, R++), J++, C = C.Lnext;
              while (C !== x.anEdge);
              o(J <= t), x.n = T, ++T;
            }
          for (this.elementCount = T, b === s.CONNECTED_POLYGONS && (T *= 2), this.elements = [], this.elements.length = T * t, this.vertexCount = R, this.vertices = [], this.vertices.length = R * m, this.vertexIndices = [], this.vertexIndices.length = R, K = i.vHead.next; K !== i.vHead; K = K.next)
            if (K.n !== -1) {
              var r = K.n * m;
              this.vertices[r + 0] = K.coords[0], this.vertices[r + 1] = K.coords[1], m > 2 && (this.vertices[r + 2] = K.coords[2]), this.vertexIndices[K.n] = K.idx;
            }
          var Y = 0;
          for (x = i.fHead.next; x !== i.fHead; x = x.next)
            if (x.inside) {
              C = x.anEdge, J = 0;
              do
                K = C.Org, this.elements[Y++] = K.n, J++, C = C.Lnext;
              while (C !== x.anEdge);
              for (F = J; F < t; ++F)
                this.elements[Y++] = -1;
              if (b === s.CONNECTED_POLYGONS) {
                C = x.anEdge;
                do
                  this.elements[Y++] = this.getNeighbourFace_(C), C = C.Lnext;
                while (C !== x.anEdge);
                for (F = J; F < t; ++F)
                  this.elements[Y++] = -1;
              }
            }
        },
        //	void OutputContours( TESStesselator *tess, TESSmesh *mesh, int vertexSize )
        outputContours_: function(i, b) {
          var t, m, K, x = 0, C = 0;
          for (this.vertexCount = 0, this.elementCount = 0, t = i.fHead.next; t !== i.fHead; t = t.next)
            if (t.inside) {
              K = m = t.anEdge;
              do
                this.vertexCount++, m = m.Lnext;
              while (m !== K);
              this.elementCount++;
            }
          this.elements = [], this.elements.length = this.elementCount * 2, this.vertices = [], this.vertices.length = this.vertexCount * b, this.vertexIndices = [], this.vertexIndices.length = this.vertexCount;
          var T = 0, R = 0, J = 0;
          for (x = 0, t = i.fHead.next; t !== i.fHead; t = t.next)
            if (t.inside) {
              C = 0, K = m = t.anEdge;
              do
                this.vertices[T++] = m.Org.coords[0], this.vertices[T++] = m.Org.coords[1], b > 2 && (this.vertices[T++] = m.Org.coords[2]), this.vertexIndices[R++] = m.Org.idx, C++, m = m.Lnext;
              while (m !== K);
              this.elements[J++] = x, this.elements[J++] = C, x += C;
            }
        },
        addContour: function(i, b) {
          var t, m;
          for (this.mesh === null && (this.mesh = new G()), i < 2 && (i = 2), i > 3 && (i = 3), t = null, m = 0; m < b.length; m += i)
            t === null ? (t = this.mesh.makeEdge(), this.mesh.splice(t, t.Sym)) : (this.mesh.splitEdge(t), t = t.Lnext), t.Org.coords[0] = b[m + 0], t.Org.coords[1] = b[m + 1], i > 2 ? t.Org.coords[2] = b[m + 2] : t.Org.coords[2] = 0, t.Org.idx = this.vertexIndexCounter++, t.winding = 1, t.Sym.winding = -1;
        },
        //	int tessTesselate( TESStesselator *tess, int windingRule, int elementType, int polySize, int vertexSize, const TESSreal* normal )
        tesselate: function(i, b, t, m, K) {
          if (this.vertices = [], this.elements = [], this.vertexIndices = [], this.vertexIndexCounter = 0, K && (this.normal[0] = K[0], this.normal[1] = K[1], this.normal[2] = K[2]), this.windingRule = i, m < 2 && (m = 2), m > 3 && (m = 3), !this.mesh)
            return !1;
          this.projectPolygon_(), X.computeInterior(this);
          var x = this.mesh;
          return b === s.BOUNDARY_CONTOURS ? this.setWindingNumber_(x, 1, !0) : this.tessellateInterior_(x), x.check(), b === s.BOUNDARY_CONTOURS ? this.outputContours_(x, m) : this.outputPolymesh_(x, b, t, m), !0;
        }
      };
    },
    /* 62 */
    /***/
    function(Z, d) {
      Z.exports = s;
      var l = Object.prototype.hasOwnProperty;
      function s() {
        for (var c = {}, o = 0; o < arguments.length; o++) {
          var u = arguments[o];
          for (var e in u)
            l.call(u, e) && (c[e] = u[e]);
        }
        return c;
      }
    },
    /* 63 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "createShaders", function() {
        return n;
      }), l.d(d, "applyShader", function() {
        return G;
      }), l.d(d, "createCloudShaders", function() {
        return a;
      }), l.d(d, "applyCloudShader", function() {
        return I;
      });
      var s = l(64), c = l(65), o = l(66), u = l(67);
      l(1).glMatrix.setMatrixArrayType(Array);
      const e = Symbol("shaders");
      function n(h) {
        h[e] = [];
        for (let S = 0; S < 16; S++) {
          const p = [], X = !!(S & 1), V = !!(S & 2), i = !!(S & 4), b = !!(S & 8);
          X && p.push("#define TEXTURE 1"), V && p.push("#define FILTER 1"), i && p.push("#define GRADIENT 1"), b && p.push("#define CLIPPATH 1");
          const t = `${p.join(`
`)}
`, m = [];
          X && m.push("uniform sampler2D u_texSampler;"), b && m.push("uniform sampler2D u_clipSampler;"), h[e][S] = [t + m.join(`
`) + c.default, t + s.default];
        }
      }
      function G(h, {
        hasTexture: S = !1,
        hasFilter: p = !1,
        hasGradient: X = !1,
        hasClipPath: V = !1
      } = {}) {
        const i = S | p << 1 | X << 2 | V << 3;
        let b = h[e][i];
        Array.isArray(b) && (b = h.createProgram(...b), h[e][i] = b), h.program !== b && h.useProgram(b, {
          a_color: {
            type: "UNSIGNED_BYTE",
            normalize: !0
          }
        });
      }
      const y = [];
      function a(h) {
        for (let S = 0; S < 64; S++) {
          const p = [], X = !!(S & 1), V = !!(S & 2), i = !!(S & 4), b = !!(S & 8), t = !!(S & 16), m = !!(S & 32);
          X && p.push("#define TEXTURE 1"), V && p.push("#define FILTER 1"), i && p.push("#define GRADIENT 1"), b && p.push("#define CLOUDCOLOR 1"), t && p.push("#define CLOUDFILTER 1"), m && p.push("#define CLIPPATH 1");
          const K = `${p.join(`
`)}
`, x = [];
          if (X) {
            x.push("uniform sampler2D u_texSampler;");
            for (let C = 0; C < 12; C++)
              x.push(`uniform sampler2D u_texFrame${C};`);
          }
          m && x.push("uniform sampler2D u_clipSampler;"), y[S] = [K + x.join(`
`) + u.default, K + o.default];
        }
      }
      function I(h, {
        hasTexture: S = !1,
        hasFilter: p = !1,
        hasGradient: X = !1,
        hasCloudColor: V = !1,
        hasCloudFilter: i = !1,
        hasClipPath: b = !1
      } = {}) {
        const t = S | p << 1 | X << 2 | V << 3 | i << 4 | b << 5;
        let m = y[t];
        Array.isArray(m) && (m = h.createProgram(...m), y[t] = m), h.program !== m && h.useProgram(m, {
          a_color: {
            type: "UNSIGNED_BYTE",
            normalize: !0
          },
          a_fillCloudColor: {
            type: "UNSIGNED_BYTE",
            normalize: !0
          },
          a_strokeCloudColor: {
            type: "UNSIGNED_BYTE",
            normalize: !0
          },
          a_frameIndex: {
            type: "UNSIGNED_BYTE",
            normalize: !1
          }
        });
      }
    },
    /* 64 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `attribute vec3 a_vertexPosition;
attribute vec4 a_color;
varying vec4 vColor;
varying float flagBackground;
uniform vec2 u_resolution;
uniform mat3 viewMatrix;
uniform mat3 projectionMatrix;

#ifdef TEXTURE
attribute vec3 a_vertexTextureCoord;
varying vec3 vTextureCoord;
attribute vec4 a_sourceRect;
varying vec4 vSourceRect;
#endif

#ifdef CLIPPATH
attribute vec2 a_clipUV;
varying vec2 vClipUV;
#endif

#ifdef GRADIENT
uniform float u_radialGradientVector[6];
varying vec3 vGradientVector1;
varying vec3 vGradientVector2;
#endif

void main() {
  gl_PointSize = 1.0;

  vec3 pos = projectionMatrix * viewMatrix * vec3(a_vertexPosition.xy, 1.0);
  gl_Position = vec4(pos.xy, 1.0, 1.0);

#ifdef GRADIENT
  vec3 vg1 = viewMatrix * vec3(u_radialGradientVector[0], u_radialGradientVector[1], 1.0);
  vec3 vg2 = viewMatrix * vec3(u_radialGradientVector[3], u_radialGradientVector[4], 1.0);
  float h = u_resolution.y;
  vg1.y = h - vg1.y;
  vg2.y = h - vg2.y;
  vGradientVector1 = vec3(vg1.xy, u_radialGradientVector[2]);
  vGradientVector2 = vec3(vg2.xy, u_radialGradientVector[5]);
#endif
  
  flagBackground = a_vertexPosition.z;
  vColor = a_color;

#ifdef TEXTURE
  vTextureCoord = a_vertexTextureCoord;
  vSourceRect = a_sourceRect;
#endif

#ifdef CLIPPATH
  vClipUV = a_clipUV;
#endif
}`;
    },
    /* 65 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `precision mediump float;

varying vec4 vColor;
varying float flagBackground;

#ifdef TEXTURE
varying vec3 vTextureCoord;
varying vec4 vSourceRect;
#endif

#ifdef CLIPPATH
varying vec2 vClipUV;
#endif

#ifdef FILTER
uniform int u_filterFlag;
uniform float u_colorMatrix[20];
#endif

#ifdef GRADIENT
varying vec3 vGradientVector1;
varying vec3 vGradientVector2;
uniform float u_colorSteps[40];
uniform int u_gradientType;
// uniform float u_radialGradientVector[6];

void gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {
  float t;
  // center circle radius
  float cr = gv1.z;
  // focal circle radius
  float fr = gv2.z;

  if(cr > 0.0 || fr > 0.0) {
    // radial gradient
    vec2 center = gv1.xy;
    vec2 focal = gv2.xy;
    float x = focal.x - gl_FragCoord.x;
    float y = focal.y - gl_FragCoord.y;
    float dx = focal.x - center.x;
    float dy = focal.y - center.y;
    float dr = cr - fr;
    float a = dx * dx + dy * dy - dr * dr;
    float b = -2.0 * (y * dy + x * dx + fr * dr);
    float c = x * x + y * y - fr * fr;
    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));
  } else {
    // linear gradient
    vec2 v1 = gl_FragCoord.xy - gv1.xy;
    vec2 v2 = gv2.xy - gv1.xy;
    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);
  }

  vec4 colors[8];
  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);
  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);
  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);
  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);
  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);
  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);
  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);
  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);
  
  float steps[8];
  steps[0] = colorSteps[0];
  steps[1] = colorSteps[5];
  steps[2] = colorSteps[10];
  steps[3] = colorSteps[15];
  steps[4] = colorSteps[20];
  steps[5] = colorSteps[25];
  steps[6] = colorSteps[30];
  steps[7] = colorSteps[35];

  color = colors[0];
  for (int i = 1; i < 8; i++) {
    if (steps[i] < 0.0 || steps[i] > 1.0) {
      break;
    }
    if(steps[i] == steps[i - 1]) {
      color = colors[i];
    } else {
      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));
    }
    if (steps[i] >= t) {
      break;
    }
  }
}
#endif

#ifdef FILTER
void transformColor(inout vec4 color, in float colorMatrix[20]) {
  float r = color.r, g = color.g, b = color.b, a = color.a;
  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];
  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];
  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];
  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];
}
#endif

void main() {
  vec4 color = vColor;
  float opacity = abs(flagBackground);

#ifdef GRADIENT
  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {
    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);
  }
#endif

  if(opacity < 1.0) {
    color.a *= opacity;
  }

#ifdef TEXTURE
  if(flagBackground > 0.0) {
    vec3 texCoord = vTextureCoord;

    if(texCoord.z == 1.0) {
      texCoord = fract(texCoord);
    }

    if(texCoord.x <= 1.0 && texCoord.x >= 0.0
      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {
      if(vSourceRect.z > 0.0) {
        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;
        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);
      }
      vec4 texColor = texture2D(u_texSampler, texCoord.xy);
      float alpha = texColor.a;
      if(opacity < 1.0) {
        texColor.a *= opacity;
        alpha *= mix(0.465, 1.0, opacity);
      }
      // color = mix(color, texColor, texColor.a);
      color.rgb = mix(color.rgb, texColor.rgb, alpha);
      // color.rgb = mix(texColor.rgb, color.rgb, color.a);
      color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
      color.a = texColor.a + (1.0 - texColor.a) * color.a;
    }
  }
#endif

#ifdef FILTER
  if(u_filterFlag > 0) {
    transformColor(color, u_colorMatrix);
  }
#endif

#ifdef CLIPPATH
  float clip = texture2D(u_clipSampler, vClipUV).r;
  color *= clip;
#endif

  gl_FragColor = color;
}`;
    },
    /* 66 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `attribute vec3 a_vertexPosition;
attribute vec4 a_color;
varying vec4 vColor;
varying float flagBackground;
attribute vec3 a_transform0;
attribute vec3 a_transform1;
uniform vec2 u_resolution;
uniform mat3 viewMatrix;
uniform mat3 projectionMatrix;

#ifdef TEXTURE
attribute vec3 a_vertexTextureCoord;
varying vec3 vTextureCoord;
attribute float a_frameIndex;
varying float frameIndex;
attribute vec4 a_sourceRect;
varying vec4 vSourceRect;
#endif

#ifdef CLIPPATH
attribute vec2 a_clipUV;
varying vec2 vClipUV;
#endif

#ifdef CLOUDFILTER
attribute vec4 a_colorCloud0;
attribute vec4 a_colorCloud1;
attribute vec4 a_colorCloud2;
attribute vec4 a_colorCloud3;
attribute vec4 a_colorCloud4;
varying vec4 colorCloud0;
varying vec4 colorCloud1;
varying vec4 colorCloud2;
varying vec4 colorCloud3;
varying vec4 colorCloud4;
#endif

#ifdef CLOUDCOLOR
attribute vec4 a_fillCloudColor;
attribute vec4 a_strokeCloudColor;
#endif

#ifdef GRADIENT
uniform float u_radialGradientVector[6];
varying vec3 vGradientVector1;
varying vec3 vGradientVector2;
#endif

void main() {
  gl_PointSize = 1.0;

  mat3 modelMatrix = mat3(
    a_transform0.x, a_transform1.x, 0, 
    a_transform0.y, a_transform1.y, 0,
    a_transform0.z, a_transform1.z, 1
  );

  vec3 pos = projectionMatrix * viewMatrix * modelMatrix * vec3(a_vertexPosition.xy, 1.0);
  gl_Position = vec4(pos.xy, 1.0, 1.0);

#ifdef GRADIENT
  vec3 vg1 = viewMatrix * vec3(u_radialGradientVector[0], u_radialGradientVector[1], 1.0);
  vec3 vg2 = viewMatrix * vec3(u_radialGradientVector[3], u_radialGradientVector[4], 1.0);
  float h = u_resolution.y;
  vg1.y = h - vg1.y;
  vg2.y = h - vg2.y;
  vGradientVector1 = vec3(vg1.xy, u_radialGradientVector[2]);
  vGradientVector2 = vec3(vg2.xy, u_radialGradientVector[5]);
#endif
  
  flagBackground = a_vertexPosition.z;

#ifdef CLOUDCOLOR
  if(flagBackground > 0.0) {
    vColor = mix(a_color, a_fillCloudColor, a_fillCloudColor.a);
  } else {
    vColor = mix(a_color, a_strokeCloudColor, a_strokeCloudColor.a);
  }
#else
  vColor = a_color;
#endif

#ifdef TEXTURE
  vTextureCoord = a_vertexTextureCoord;
  frameIndex = a_frameIndex;
  vSourceRect = a_sourceRect;
#endif

#ifdef CLIPPATH
  vClipUV = a_clipUV;
#endif

#ifdef CLOUDFILTER
  colorCloud0 = a_colorCloud0;
  colorCloud1 = a_colorCloud1;
  colorCloud2 = a_colorCloud2;
  colorCloud3 = a_colorCloud3;
  colorCloud4 = a_colorCloud4;
#endif
}`;
    },
    /* 67 */
    /***/
    function(Z, d, l) {
      l.r(d), d.default = `precision mediump float;

varying vec4 vColor;
varying float flagBackground;

#ifdef TEXTURE
varying float frameIndex;
varying vec3 vTextureCoord;
varying vec4 vSourceRect;
#endif

#ifdef CLIPPATH
varying vec2 vClipUV;
#endif

#ifdef FILTER
uniform int u_filterFlag;
uniform float u_colorMatrix[20];
#endif

#ifdef CLOUDFILTER
varying vec4 colorCloud0;
varying vec4 colorCloud1;
varying vec4 colorCloud2;
varying vec4 colorCloud3;
varying vec4 colorCloud4;
#endif

#ifdef GRADIENT
varying vec3 vGradientVector1;
varying vec3 vGradientVector2;
uniform float u_colorSteps[40];
uniform int u_gradientType;

void gradient(inout vec4 color, vec3 gv1, vec3 gv2, float colorSteps[40]) {
  float t;
  // center circle radius
  float cr = gv1.z;
  // focal circle radius
  float fr = gv2.z;

  if(cr > 0.0 || fr > 0.0) {
    // radial gradient
    vec2 center = gv1.xy;
    vec2 focal = gv2.xy;
    float x = focal.x - gl_FragCoord.x;
    float y = focal.y - gl_FragCoord.y;
    float dx = focal.x - center.x;
    float dy = focal.y - center.y;
    float dr = cr - fr;
    float a = dx * dx + dy * dy - dr * dr;
    float b = -2.0 * (y * dy + x * dx + fr * dr);
    float c = x * x + y * y - fr * fr;
    t = 1.0 - 0.5 * (1.0 / a) * (-b + sqrt(b * b - 4.0 * a * c));
  } else {
    // linear gradient
    vec2 v1 = gl_FragCoord.xy - gv1.xy;
    vec2 v2 = gv2.xy - gv1.xy;
    t = (v1.x * v2.x + v1.y * v2.y) / (v2.x * v2.x + v2.y * v2.y);
  }

  vec4 colors[8];
  colors[0] = vec4(colorSteps[1], colorSteps[2], colorSteps[3], colorSteps[4]);
  colors[1] = vec4(colorSteps[6], colorSteps[7], colorSteps[8], colorSteps[9]);
  colors[2] = vec4(colorSteps[11], colorSteps[12], colorSteps[13], colorSteps[14]);
  colors[3] = vec4(colorSteps[16], colorSteps[17], colorSteps[18], colorSteps[19]);
  colors[4] = vec4(colorSteps[21], colorSteps[22], colorSteps[23], colorSteps[24]);
  colors[5] = vec4(colorSteps[26], colorSteps[27], colorSteps[28], colorSteps[29]);
  colors[6] = vec4(colorSteps[31], colorSteps[32], colorSteps[33], colorSteps[34]);
  colors[7] = vec4(colorSteps[36], colorSteps[37], colorSteps[38], colorSteps[39]);
  
  float steps[8];
  steps[0] = colorSteps[0];
  steps[1] = colorSteps[5];
  steps[2] = colorSteps[10];
  steps[3] = colorSteps[15];
  steps[4] = colorSteps[20];
  steps[5] = colorSteps[25];
  steps[6] = colorSteps[30];
  steps[7] = colorSteps[35];

  color = colors[0];
  for (int i = 1; i < 8; i++) {
    if (steps[i] < 0.0 || steps[i] > 1.0) {
      break;
    }
    if(steps[i] == steps[i - 1]) {
      color = colors[i];
    } else {
      color = mix(color, colors[i], clamp((t - steps[i - 1]) / (steps[i] - steps[i - 1]), 0.0, 1.0));
    }
    if (steps[i] >= t) {
      break;
    }
  }
}
#endif

void transformColor(inout vec4 color, in float colorMatrix[20]) {
  float r = color.r, g = color.g, b = color.b, a = color.a;
  color[0] = colorMatrix[0] * r + colorMatrix[1] * g + colorMatrix[2] * b + colorMatrix[3] * a + colorMatrix[4];
  color[1] = colorMatrix[5] * r + colorMatrix[6] * g + colorMatrix[7] * b + colorMatrix[8] * a + colorMatrix[9];
  color[2] = colorMatrix[10] * r + colorMatrix[11] * g + colorMatrix[12] * b + colorMatrix[13] * a + colorMatrix[14];
  color[3] = colorMatrix[15] * r + colorMatrix[16] * g + colorMatrix[17] * b + colorMatrix[18] * a + colorMatrix[19];
}

#ifdef CLOUDFILTER
void buildCloudColor(inout float colorCloudMatrix[20]) {
  colorCloudMatrix[0] = colorCloud0[0];
  colorCloudMatrix[1] = colorCloud1[0];
  colorCloudMatrix[2] = colorCloud2[0];
  colorCloudMatrix[3] = colorCloud3[0];
  colorCloudMatrix[4] = colorCloud4[0];

  colorCloudMatrix[5] = colorCloud0[1];
  colorCloudMatrix[6] = colorCloud1[1];
  colorCloudMatrix[7] = colorCloud2[1];
  colorCloudMatrix[8] = colorCloud3[1];
  colorCloudMatrix[9] = colorCloud4[1];

  colorCloudMatrix[10] = colorCloud0[2];
  colorCloudMatrix[11] = colorCloud1[2];
  colorCloudMatrix[12] = colorCloud2[2];
  colorCloudMatrix[13] = colorCloud3[2];
  colorCloudMatrix[14] = colorCloud4[2];

  colorCloudMatrix[15] = colorCloud0[3];
  colorCloudMatrix[16] = colorCloud1[3];
  colorCloudMatrix[17] = colorCloud2[3];
  colorCloudMatrix[18] = colorCloud3[3];
  colorCloudMatrix[19] = colorCloud4[3];
}
#endif

void main() {
  vec4 color = vColor;
  float opacity = abs(flagBackground);

#ifdef GRADIENT
  if(u_gradientType > 0 && flagBackground > 0.0 || u_gradientType == 0 && flagBackground <= 0.0) {
    gradient(color, vGradientVector1, vGradientVector2, u_colorSteps);
  }
#endif

  if(opacity < 1.0) {
    color.a *= opacity;
  }

#ifdef TEXTURE
  if(flagBackground > 0.0) {
    vec3 texCoord = vTextureCoord;

    if(texCoord.z == 1.0) {
      texCoord = fract(texCoord);
    }

    if(texCoord.x <= 1.0 && texCoord.x >= 0.0
      && texCoord.y <= 1.0 && texCoord.y >= 0.0) {
      if(vSourceRect.z > 0.0) {
        texCoord.x = vSourceRect.x + texCoord.x * vSourceRect.z;
        texCoord.y = 1.0 - (vSourceRect.y + (1.0 - texCoord.y) * vSourceRect.w);
      }
      if(frameIndex < 0.0) {
        vec4 texColor = texture2D(u_texSampler, texCoord.xy);
        color = mix(color, texColor, texColor.a);
      } else {
        int index = int(floor(clamp(0.0, 11.0, frameIndex)));
        vec4 texColor;
        if(index == 0) texColor = texture2D(u_texFrame0, texCoord.xy);
        else if(index == 1) texColor = texture2D(u_texFrame1, texCoord.xy);
        else if(index == 2) texColor = texture2D(u_texFrame2, texCoord.xy);
        else if(index == 3) texColor = texture2D(u_texFrame3, texCoord.xy);
        else if(index == 4) texColor = texture2D(u_texFrame4, texCoord.xy);
        else if(index == 5) texColor = texture2D(u_texFrame5, texCoord.xy);
        else if(index == 6) texColor = texture2D(u_texFrame6, texCoord.xy);
        else if(index == 7) texColor = texture2D(u_texFrame7, texCoord.xy);
        else if(index == 8) texColor = texture2D(u_texFrame8, texCoord.xy);
        else if(index == 9) texColor = texture2D(u_texFrame9, texCoord.xy);
        else if(index == 10) texColor = texture2D(u_texFrame10, texCoord.xy);
        else texColor = texture2D(u_texFrame11, texCoord.xy);
        float alpha = texColor.a;
        if(opacity < 1.0) {
          texColor.a *= opacity;
          alpha *= mix(0.465, 1.0, opacity);
        }
        // color = mix(color, texColor, texColor.a);
        color.rgb = mix(color.rgb, texColor.rgb, alpha);
        // color.rgb = mix(texColor.rgb, color.rgb, color.a);
        color.rgb = mix(texColor.rgb, color.rgb, clamp(color.a / max(0.0001, texColor.a), 0.0, 1.0));
        color.a = texColor.a + (1.0 - texColor.a) * color.a;
      }
    }
  }
#endif

#ifdef FILTER
  if(u_filterFlag > 0) {
    transformColor(color, u_colorMatrix);
  }
#endif

#ifdef CLOUDFILTER
  float colorCloudMatrix[20];
  buildCloudColor(colorCloudMatrix);
  transformColor(color, colorCloudMatrix);
#endif

#ifdef CLIPPATH
  float clip = texture2D(u_clipSampler, vClipUV).r;
  color *= clip;
#endif

  gl_FragColor = color;
}`;
    },
    /* 68 */
    /***/
    function(Z, d, l) {
      l.r(d), (function(s, c) {
        l.d(d, "requestAnimationFrame", function() {
          return u;
        }), l.d(d, "cancelAnimationFrame", function() {
          return e;
        }), l(1).glMatrix.setMatrixArrayType(Array);
        function o() {
          if (typeof performance < "u" && performance.now)
            return performance.now();
          if (typeof s < "u" && s.hrtime) {
            const [n, G] = s.hrtime();
            return n * 1e3 + G * 1e-6;
          }
          return Date.now ? Date.now() : (/* @__PURE__ */ new Date()).getTime();
        }
        let u, e;
        typeof c < "u" && typeof c.requestAnimationFrame == "function" ? (u = c.requestAnimationFrame, e = c.cancelAnimationFrame) : (u = function(n) {
          return setTimeout(() => {
            n(o());
          }, 16);
        }, e = function(n) {
          return clearTimeout(n);
        });
      }).call(this, l(69), l(22));
    },
    /* 69 */
    /***/
    function(Z, d) {
      var l = Z.exports = {}, s, c;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function u() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          typeof setTimeout == "function" ? s = setTimeout : s = o;
        } catch {
          s = o;
        }
        try {
          typeof clearTimeout == "function" ? c = clearTimeout : c = u;
        } catch {
          c = u;
        }
      })();
      function e(V) {
        if (s === setTimeout)
          return setTimeout(V, 0);
        if ((s === o || !s) && setTimeout)
          return s = setTimeout, setTimeout(V, 0);
        try {
          return s(V, 0);
        } catch {
          try {
            return s.call(null, V, 0);
          } catch {
            return s.call(this, V, 0);
          }
        }
      }
      function n(V) {
        if (c === clearTimeout)
          return clearTimeout(V);
        if ((c === u || !c) && clearTimeout)
          return c = clearTimeout, clearTimeout(V);
        try {
          return c(V);
        } catch {
          try {
            return c.call(null, V);
          } catch {
            return c.call(this, V);
          }
        }
      }
      var G = [], y = !1, a, I = -1;
      function h() {
        !y || !a || (y = !1, a.length ? G = a.concat(G) : I = -1, G.length && S());
      }
      function S() {
        if (!y) {
          var V = e(h);
          y = !0;
          for (var i = G.length; i; ) {
            for (a = G, G = []; ++I < i; )
              a && a[I].run();
            I = -1, i = G.length;
          }
          a = null, y = !1, n(V);
        }
      }
      l.nextTick = function(V) {
        var i = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var b = 1; b < arguments.length; b++)
            i[b - 1] = arguments[b];
        G.push(new p(V, i)), G.length === 1 && !y && e(S);
      };
      function p(V, i) {
        this.fun = V, this.array = i;
      }
      p.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {};
      function X() {
      }
      l.on = X, l.addListener = X, l.once = X, l.off = X, l.removeListener = X, l.removeAllListeners = X, l.emit = X, l.prependListener = X, l.prependOnceListener = X, l.listeners = function(V) {
        return [];
      }, l.binding = function(V) {
        throw new Error("process.binding is not supported");
      }, l.cwd = function() {
        return "/";
      }, l.chdir = function(V) {
        throw new Error("process.chdir is not supported");
      }, l.umask = function() {
        return 0;
      };
    },
    /* 70 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return C;
      });
      var s = l(1), c = l(71), o = l(73), u = l(213), e = l(214), n = l(215), G = l(216);
      l(1).glMatrix.setMatrixArrayType(Array);
      function y(T, R) {
        var J = Object.keys(T);
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols(T);
          R && (F = F.filter(function(r) {
            return Object.getOwnPropertyDescriptor(T, r).enumerable;
          })), J.push.apply(J, F);
        }
        return J;
      }
      function a(T) {
        for (var R = 1; R < arguments.length; R++) {
          var J = arguments[R] != null ? arguments[R] : {};
          R % 2 ? y(Object(J), !0).forEach(function(F) {
            I(T, F, J[F]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(J)) : y(Object(J)).forEach(function(F) {
            Object.defineProperty(T, F, Object.getOwnPropertyDescriptor(J, F));
          });
        }
        return T;
      }
      function I(T, R, J) {
        return R in T ? Object.defineProperty(T, R, { value: J, enumerable: !0, configurable: !0, writable: !0 }) : T[R] = J, T;
      }
      const h = Symbol.for("spritejs_changedAttrs"), S = Symbol.for("spritejs_attributes"), p = Symbol("resolution"), X = Symbol("animations"), V = Symbol("eventListeners"), i = Symbol("captureEventListeners"), b = Symbol("filters"), t = Symbol("display"), m = Symbol("program"), K = Symbol("shaderAttrs"), x = Symbol("uniforms");
      class C {
        constructor(R = {}) {
          this.attributes = new this.constructor.Attr(this), this[p] = {
            width: 300,
            height: 150
          }, Object.assign(this.attributes, R), this[X] = /* @__PURE__ */ new Set(), this[V] = {}, this[i] = {};
        }
        get ancestors() {
          let R = this.parent;
          const J = [];
          for (; R; )
            J.push(R), R = R.parent;
          return J;
        }
        get animations() {
          return this[X];
        }
        get filters() {
          return this[b] || this.parent && this.parent.filters;
        }
        get isVisible() {
          return !1;
        }
        get layer() {
          return this.parent ? this.parent.layer : null;
        }
        get localMatrix() {
          const R = this.transformMatrix, {
            x: J,
            y: F
          } = this.attributes;
          return R[4] += J, R[5] += F, R;
        }
        get opacity() {
          let R = this.attributes.opacity;
          return this.parent && this.parent.opacity != null && (R *= this.parent.opacity), R;
        }
        get parentNode() {
          return this.parent;
        }
        get nextSibling() {
          return this.getNodeNearBy(1);
        }
        get previousSibling() {
          return this.getNodeNearBy(-1);
        }
        get program() {
          return this[m];
        }
        /* get parent defined by connect method */
        get renderer() {
          return this.parent ? this.parent.renderer : null;
        }
        get renderMatrix() {
          if (this.__cacheRenderMatrix)
            return this.__cacheRenderMatrix;
          let R = this.localMatrix;
          const J = this.parent;
          if (J) {
            const F = J.__cacheRenderMatrix || J.renderMatrix;
            F && (R = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), F, R));
          }
          return R;
        }
        get worldScaling() {
          const R = this.renderMatrix;
          return [Math.hypot(R[0], R[1]), Math.hypot(R[2], R[3])];
        }
        get worldRotation() {
          const R = this.renderMatrix;
          return Math.atan2(R[1], R[3]);
        }
        get worldPosition() {
          const R = this.renderMatrix;
          return [R[4], R[5]];
        }
        get uniforms() {
          return this[x];
        }
        /* get zOrder defined by connect method */
        /* attributes */
        get className() {
          return this.attributes.className;
        }
        set className(R) {
          this.attributes.className = R;
        }
        get id() {
          return this.attributes.id;
        }
        set id(R) {
          this.attributes.id = R;
        }
        get name() {
          return this.attributes.name;
        }
        set name(R) {
          this.attributes.name = R;
        }
        get zIndex() {
          return this.attributes.zIndex;
        }
        set zIndex(R) {
          this.attributes.zIndex = R;
        }
        get mesh() {
          return null;
        }
        get shaderAttrs() {
          return this[K] || {};
        }
        activateAnimations() {
          const R = this.layer;
          if (R) {
            const J = this[X];
            J.forEach((r) => {
              r.baseTimeline = R.timeline, r.play(), r.finished.then(() => {
                J.delete(r);
              });
            });
            const F = this.children;
            F && F.forEach((r) => {
              r.activateAnimations && r.activateAnimations();
            });
          }
        }
        addEventListener(R, J, F = {}) {
          R === "mousewheel" && (R = "wheel"), typeof F == "boolean" && (F = {
            capture: F
          });
          const {
            capture: r,
            once: Y
          } = F, H = r ? i : V;
          return this[H][R] = this[H][R] || [], this[H][R].push({
            listener: J,
            once: Y
          }), this;
        }
        animate(R, J) {
          const F = new o.default(this, R, J);
          return this.effects && F.applyEffects(this.effects), this.layer && (F.baseTimeline = this.layer.timeline, F.play(), F.finished.then(() => {
            this[X].delete(F);
          })), this[X].add(F), F;
        }
        attr(...R) {
          if (R.length === 0)
            return this.attributes[S];
          if (R.length > 1) {
            let [J, F] = R;
            return typeof F == "function" && (F = F(this.attr(J))), this.setAttribute(J, F), this;
          }
          return typeof R[0] == "string" ? this.getAttribute(R[0]) : (Object.assign(this.attributes, R[0]), this);
        }
        cloneNode() {
          const R = new this.constructor(), J = this.attributes[h];
          return R.attr(J), R;
        }
        connect(R, J) {
          Object.defineProperty(this, "parent", {
            value: R,
            writable: !1,
            configurable: !0
          }), Object.defineProperty(this, "zOrder", {
            value: J,
            writable: !1,
            configurable: !0
          }), R.timeline && this.activateAnimations(), this.setResolution(R.getResolution()), this.forceUpdate(), this.dispatchEvent({
            type: "append",
            detail: {
              parent: R,
              zOrder: J
            }
          });
        }
        contains(R) {
          for (; R && this !== R; )
            R = R.parent;
          return !!R;
        }
        deactivateAnimations() {
          this[X].forEach((J) => J.cancel());
          const R = this.children;
          R && R.forEach((J) => {
            J.deactivateAnimations && J.deactivateAnimations();
          });
        }
        disconnect() {
          const {
            parent: R,
            zOrder: J
          } = this;
          delete this.parent, delete this.zOrder, this.deactivateAnimations(), this.dispatchEvent({
            type: "remove",
            detail: {
              parent: R,
              zOrder: J
            }
          }), R && R.forceUpdate();
        }
        dispatchEvent(R) {
          R instanceof e.default || (R = new e.default(R)), R.target = this;
          let J = R.type;
          J === "mousewheel" && (J = "wheel");
          const F = [this];
          let r = this.parent;
          for (; R.bubbles && r; )
            F.push(r), r = r.parent;
          for (let Y = F.length - 1; Y >= 0; Y--) {
            const H = F[Y], Q = H[i] && H[i][J];
            if (Q && Q.length && (R.currentTarget = H, Q.forEach(({
              listener: w,
              once: O
            }) => {
              w.call(this, R), O && F.removeEventListener(w);
            }), delete R.currentTarget), !R.bubbles && R.cancelBubble)
              break;
          }
          if (!R.cancelBubble)
            for (let Y = 0; Y < F.length; Y++) {
              const H = F[Y], Q = H[V] && H[V][J];
              if (Q && Q.length && (R.currentTarget = H, Q.forEach(({
                listener: w,
                once: O
              }) => {
                w.call(this, R), O && F.removeEventListener(w);
              }), delete R.currentTarget), !R.bubbles || R.cancelBubble)
                break;
            }
        }
        dispatchPointerEvent(R) {
          const {
            layerX: J,
            layerY: F
          } = R;
          return this.isPointCollision(J, F) ? (this.dispatchEvent(R), !0) : !1;
        }
        draw(R = []) {
          const J = this.mesh;
          if (J) {
            if (Object(n.applyFilters)(J, this.filters), R.push(J), this[m]) {
              J.setProgram(this[m]);
              const F = this[K];
              F && Object.entries(F).forEach(([Y, H]) => {
                J.setAttribute(Y, H);
              });
              const r = this[x];
              if (this[x]) {
                const Y = {};
                Object.entries(r).forEach(([H, Q]) => {
                  typeof Q == "function" && (Q = Q(this, H)), Y[H] = Q;
                }), J.setUniforms(Y);
              }
            }
            Object(G.default)(this, J);
          }
          return R;
        }
        forceUpdate() {
          this.parent && this.parent.forceUpdate();
        }
        getAttribute(R) {
          return this.attributes[R];
        }
        getListeners(R, {
          capture: J = !1
        } = {}) {
          return [...this[J ? i : V][R] || []];
        }
        getNodeNearBy(R = 1) {
          if (!this.parent)
            return null;
          if (R === 0)
            return this;
          const J = this.parent.children, F = J.indexOf(this);
          return J[F + R];
        }
        getWorldPosition(R, J) {
          const F = this.renderMatrix, r = R * F[0] + J * F[2] + F[4], Y = R * F[1] + J * F[3] + F[5];
          return [r, Y];
        }
        getOffsetPosition(R, J) {
          const F = s.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), this.renderMatrix), r = R * F[0] + J * F[2] + F[4], Y = R * F[1] + J * F[3] + F[5];
          return [r, Y];
        }
        getResolution() {
          return a({}, this[p]);
        }
        isPointCollision(R, J) {
          if (!this.mesh)
            return !1;
          const F = this.attributes.pointerEvents;
          if (F === "none" || F !== "all" && !this.isVisible)
            return !1;
          let r = "both";
          return F === "visibleFill" && (r = "fill"), F === "visibleStroke" && (r = "stroke"), this.mesh.isPointCollision(R, J, r);
        }
        onPropertyChange(R, J, F) {
          R !== "id" && R !== "name" && R !== "className" && R !== "pointerEvents" && R !== "passEvents" && this.forceUpdate(), R === "filter" && (this[b] = Object(n.parseFilterString)(J)), R === "zIndex" && this.parent && this.parent.reorder();
        }
        setAttribute(R, J) {
          R === "attrs" && this.attr(J), this.attributes[R] = J;
        }
        setMouseCapture() {
          this.layer && (this.layer.__mouseCapturedTarget = this);
        }
        // layer.renderer.createProgram(fragmentShader, vertexShader, attributeOptions)
        setProgram(R) {
          this[m] = R, this.forceUpdate();
        }
        setShaderAttribute(R, J) {
          this[K] = this[K] || {}, this[K][R] = J, this.forceUpdate();
        }
        setUniforms(R) {
          this[x] = this[x] || {}, Object.assign(this[x], R), this.forceUpdate();
        }
        setResolution({
          width: R,
          height: J
        }) {
          const {
            width: F,
            height: r
          } = this[p];
          (F !== R || r !== J) && (this[p] = {
            width: R,
            height: J
          }, this.forceUpdate(), this.dispatchEvent({
            type: "resolutionchange",
            detail: {
              width: R,
              height: J
            }
          }));
        }
        show() {
          this.attributes.display === "none" && (this.attributes.display = this[t] || "");
        }
        hide() {
          this.attributes.display !== "none" && (this[t] = this.attributes.display, this.attributes.display = "none");
        }
        releaseMouseCapture() {
          this.layer && this.layer.__mouseCapturedTarget === this && (this.layer.__mouseCapturedTarget = null);
        }
        remove() {
          return this.parent && this.parent.removeChild ? (this.parent.removeChild(this), !0) : !1;
        }
        removeAllListeners(R, J = {}) {
          typeof J == "boolean" && (J = {
            capture: J
          });
          const r = J.capture ? i : V;
          return this[r][R] && (this[r][R] = []), this;
        }
        removeAttribute(R) {
          this.setAttribute(R, null);
        }
        removeEventListener(R, J, F = {}) {
          typeof F == "boolean" && (F = {
            capture: F
          });
          const Y = F.capture ? i : V;
          if (this[Y][R]) {
            const H = this[Y][R];
            if (H)
              for (let Q = 0; Q < H.length; Q++) {
                const {
                  listener: w
                } = H[Q];
                if (w === J) {
                  this[Y][R].splice(Q, 1);
                  break;
                }
              }
          }
          return this;
        }
        transition(R, J = "linear") {
          const F = this, r = Symbol("animation");
          J = J || "linear";
          let Y = 0;
          return typeof R == "object" && (Y = R.delay || 0, R = R.duration), {
            [r]: null,
            cancel(H = !1) {
              const Q = this[r];
              Q && Q.cancel(H);
            },
            end() {
              const H = this[r];
              H && (H.playState === "running" || H.playState === "pending") && H.finish();
            },
            reverse() {
              const H = this[r];
              if (H)
                if (H.playState === "running" || H.playState === "pending")
                  H.playbackRate = -H.playbackRate;
                else {
                  const Q = H.timing.direction;
                  H.timing.direction = Q === "reverse" ? "normal" : "reverse", H.play();
                }
              return H.finished;
            },
            attr(H, Q) {
              return this.end(), typeof H == "string" && (H = {
                [H]: Q
              }), Object.entries(H).forEach(([w, O]) => {
                typeof O == "function" && (H[w] = O(F.attr(w)));
              }), this[r] = F.animate([H], {
                duration: R * 1e3,
                delay: Y * 1e3,
                fill: "forwards",
                easing: J
              }), this[r].finished;
            }
          };
        }
        updateContours() {
        }
      }
      I(C, "Attr", c.default), u.default.registerNode(C, "node");
    },
    /* 71 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return C;
      });
      var s = l(1), c = l(12), o = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttributeDefault"), e = Symbol.for("spritejs_declareAlias"), n = Symbol.for("spritejs_setAttribute"), G = Symbol.for("spritejs_getAttribute"), y = Symbol.for("spritejs_attributes"), a = Symbol.for("spritejs_changedAttrs"), I = Symbol("subject"), h = Symbol("attr"), S = Symbol("default"), p = Symbol("alias");
      function X(T, [R, J]) {
        let F = s.mat2d.fromValues(1, 0, 0, 1, 0, 0);
        return [...T].forEach(([r, Y]) => {
          if ((R || J) && (F = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), F, [R, J])), r === "matrix")
            F = s.mat2d.multiply(F, F, Y);
          else if (r === "offsetTranslate")
            F[4] += Y[0], F[5] += Y[1];
          else if (r === "offsetRotate")
            F = s.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), F, Y);
          else if (r === "skew") {
            const [H, Q] = Y;
            F = s.mat2d.multiply(F, F, s.mat2d.fromValues(1, Math.tan(Q), Math.tan(H), 1, 0, 0));
          } else
            s.mat2d[r](F, F, Y);
          (R || J) && (F = s.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), F, [-R, -J]));
        }), F;
      }
      const V = Symbol("transformMatrix"), i = Symbol("transforms"), b = Symbol("changedAttrs"), t = Symbol("lastChangedAttr"), m = Symbol("offsetFigure");
      function K(T, R, J) {
        const F = T[h][R];
        if (T[n](R, J, !1) || T[t] !== R) {
          const Y = T[i];
          Y.has(R) && Y.delete(R), J && (R === "rotate" && (J = Math.PI * J / 180), R === "scale" && (J = J.map((H) => Math.abs(H) > 1e-5 ? H : 1 / H > 0 ? 1e-5 : -1e-5)), Y.set(R, J)), T[V] = null, T[I].onPropertyChange(R, J, F, T);
        }
      }
      function x(T) {
        const R = T[m], J = T.offsetDistance * R.getTotalLength(), F = R.getPointAtLength(J);
        if (F) {
          const r = T[i];
          let Y = T.offsetRotate;
          Y === "auto" ? Y = F.angle : Y === "reverse" ? Y = Math.PI + F.angle : Y = Math.PI * Y / 180, r.set("offsetRotate", Y), r.set("offsetTranslate", [F.x, F.y]), T[V] = null;
        }
      }
      class C {
        static setDefault(R, ...J) {
          return R[u](...J);
        }
        static declareAlias(R, ...J) {
          return R[e](...J);
        }
        static setAttribute(R, ...J) {
          return R[n](...J);
        }
        static getAttribute(R, ...J) {
          return R[G](...J);
        }
        static getAttributes(R) {
          return R[y];
        }
        static getChangedAttributes(R) {
          return R[a];
        }
        constructor(R) {
          this[I] = R, this[h] = {}, this[V] = s.mat2d.fromValues(1, 0, 0, 1, 0, 0), this[i] = /* @__PURE__ */ new Map(), this[S] = {}, this[p] = [], Object.defineProperty(R, "transformMatrix", {
            get: () => (this[V] || (this[V] = X(this[i], this.transformOrigin)), [...this[V]])
          }), this[u]({
            id: "",
            name: "",
            className: "",
            /* class */
            x: 0,
            y: 0,
            /* pos */
            transformOrigin: [0, 0],
            transform: "",
            translate: [0, 0],
            rotate: 0,
            scale: [1, 1],
            skew: [0, 0],
            opacity: 1,
            zIndex: 0,
            offsetPath: void 0,
            offsetDistance: 0,
            offsetRotate: "auto",
            pointerEvents: "visible",
            // none | visible | visibleFill | visibleStroke | all
            filter: "none",
            display: ""
          }), this[e]("class", "pos"), this[b] = /* @__PURE__ */ new Set(), this[m] = new c.Figure2D({
            scale: 5,
            simplify: 0
          });
        }
        get [a]() {
          const R = {};
          return [...this[b]].forEach((J) => {
            R[J] = this[h][J];
          }), R;
        }
        get [y]() {
          const R = Object.assign({}, this[h]);
          for (let J = 0; J < this[p].length; J++) {
            const F = this[p][J];
            R[F] = this[F];
          }
          return R;
        }
        [u](R) {
          Object.assign(this[S], R), Object.assign(this[h], R);
        }
        [e](...R) {
          this[p].push(...R);
        }
        [n](R, J, F = !0) {
          const r = this[h][R], Y = this[I];
          return J == null && (J = this[S][R]), Object(o.compareValue)(r, J) ? !1 : (this[h][R] = J, this[b].has(R) && this[b].delete(R), this[b].add(R), this[t] = R, F && Y.onPropertyChange(R, J, r, this), !0);
        }
        [G](R) {
          return this[h][R];
        }
        set id(R) {
          this[n]("id", R);
        }
        get id() {
          return this[G]("id");
        }
        set name(R) {
          this[n]("name", R);
        }
        get name() {
          return this[G]("name");
        }
        set className(R) {
          this[n]("className", R);
        }
        get className() {
          return this[G]("className");
        }
        set class(R) {
          this.className = R;
        }
        get class() {
          return this.className;
        }
        get x() {
          return this[G]("x");
        }
        set x(R) {
          this[n]("x", Object(o.toNumber)(R));
        }
        get y() {
          return this[G]("y");
        }
        set y(R) {
          this[n]("y", Object(o.toNumber)(R));
        }
        get pos() {
          return [this.x, this.y];
        }
        set pos(R) {
          R = Object(o.toArray)(R), Array.isArray(R) || (R = [R, R]), this.x = R[0], this.y = R[1];
        }
        get transform() {
          return this[G]("transform");
        }
        set transform(R) {
          let J = null;
          if (Array.isArray(R) && (J = R, R = `matrix(${R.map(o.toNumber).join()})`), typeof R == "string")
            R = R.replace(/\s*,\s*/g, ",");
          else if (R != null)
            throw new TypeError("Invalid transform value.");
          const F = this[h].transform;
          if (this[n]("transform", R, !1)) {
            const r = this[i];
            if (r.has("matrix") && r.delete("matrix"), J)
              r.set("matrix", J);
            else if (R) {
              const Y = R.match(/(matrix|translate|rotate|scale|skew)\([^()]+\)/g);
              if (Y) {
                let H = s.mat2d.fromValues(1, 0, 0, 1, 0, 0);
                for (let Q = 0; Q < Y.length; Q++) {
                  const O = Y[Q].match(/^(matrix|translate|rotate|scale|skew)\(([^()]+)\)/);
                  if (O) {
                    let [, q, k] = O;
                    q === "rotate" ? k = Math.PI * parseFloat(k) / 180 : k = k.trim().split(/[\s,]+/).map((P) => Object(o.toNumber)(P)), q === "matrix" ? H = s.mat2d.multiply(H, H, k) : q === "skew" ? H = s.mat2d.multiply(H, H, s.mat2d.fromValues(1, Math.tan(k[1]), Math.tan(k[0]), 1, 0, 0)) : s.mat2d[q](H, H, k), r.set("matrix", H);
                  }
                }
              } else
                throw new TypeError("Invalid transform value.");
            }
            this[V] = null, this[I].onPropertyChange("transform", R, F, this);
          }
        }
        get transformOrigin() {
          return this[G]("transformOrigin");
        }
        set transformOrigin(R) {
          R = Object(o.toArray)(R, !0), R != null && !Array.isArray(R) && (R = [R, R]), this[n]("transformOrigin", R) && (this[V] = null);
        }
        get rotate() {
          return this[G]("rotate");
        }
        set rotate(R) {
          K(this, "rotate", R);
        }
        get translate() {
          return this[G]("translate");
        }
        set translate(R) {
          R = Object(o.toArray)(R, !0), R != null && !Array.isArray(R) && (R = [R, R]), K(this, "translate", R);
        }
        get scale() {
          return this[G]("scale");
        }
        set scale(R) {
          R = Object(o.toArray)(R, !0), R != null && !Array.isArray(R) && (R = [R, R]), K(this, "scale", R);
        }
        get skew() {
          return this[G]("skew");
        }
        set skew(R) {
          R = Object(o.toArray)(R, !0), R != null && !Array.isArray(R) && (R = [R, R]), K(this, "skew", R);
        }
        get opacity() {
          return this[G]("opacity");
        }
        set opacity(R) {
          R != null && (R = Number(R)), this[n]("opacity", R);
        }
        get zIndex() {
          return this[G]("zIndex");
        }
        set zIndex(R) {
          R != null && (R = Number(R)), this[n]("zIndex", R);
        }
        get offsetPath() {
          return this[G]("offsetPath");
        }
        set offsetPath(R) {
          this[n]("offsetPath", R) && (this[m].beginPath(), R != null && this[m].addPath(R), x(this));
        }
        get offsetDistance() {
          return this[G]("offsetDistance");
        }
        set offsetDistance(R) {
          this[n]("offsetDistance", Object(o.toNumber)(R)) && x(this);
        }
        get offsetRotate() {
          return this[G]("offsetRotate");
        }
        set offsetRotate(R) {
          this[n]("offsetRotate", R), x(this);
        }
        get pointerEvents() {
          return this[G]("pointerEvents");
        }
        set pointerEvents(R) {
          if (R != null && R !== "none" && R !== "visible" && R !== "visibleFill" && R !== "visibleStroke" && R !== "all")
            throw new TypeError("Invalid pointerEvents type.");
          this[n]("pointerEvents", R);
        }
        get filter() {
          return this[G]("filter");
        }
        set filter(R) {
          this[n]("filter", R);
        }
        get display() {
          return this[G]("display");
        }
        set display(R) {
          this[n]("display", R);
        }
        /* istanbul ignore next */
        set offset(R) {
        }
      }
    },
    /* 72 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "sizeToPixel", function() {
        return s;
      }), l.d(d, "toString", function() {
        return c;
      }), l.d(d, "toNumber", function() {
        return o;
      }), l.d(d, "toArray", function() {
        return u;
      }), l.d(d, "compareValue", function() {
        return e;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(n, G) {
        const y = n.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);
        y ? n = {
          size: parseFloat(y[1]),
          unit: y[2]
        } : n = {
          size: parseFloat(n),
          unit: "px"
        };
        let {
          size: a,
          unit: I
        } = n;
        if (I === "pt")
          a /= 0.75;
        else if (I === "pc")
          a *= 16;
        else if (I === "in")
          a *= 96;
        else if (I === "cm")
          a *= 96 / 2.54;
        else if (I === "mm")
          a *= 96 / 25.4;
        else if (I === "em" || I === "rem" || I === "ex") {
          if (!G && typeof getComputedStyle == "function" && typeof document < "u") {
            const h = getComputedStyle(document.documentElement).fontSize;
            h ? G = s(h, 16) : G = 16;
          }
          a *= G, I === "ex" && (a /= 2);
        } else if (I === "q")
          a *= 96 / 25.4 / 4;
        else if (I === "vw" || I === "vh") {
          if (typeof document < "u") {
            const h = I === "vw" ? window.innerWidth || document.documentElement.clientWidth : window.innerHeight || document.documentElement.clientHeight;
            a *= h / 100;
          }
        } else if ((I === "vmax" || I === "vmin") && typeof document < "u") {
          const h = window.innerWidth || document.documentElement.clientWidth, S = window.innerHeight || document.documentElement.clientHeight;
          I === "vmax" ? a *= Math.max(h, S) / 100 : a *= Math.min(h, S) / 100;
        }
        return a;
      }
      function c(n) {
        return n == null ? n : String(n);
      }
      function o(n) {
        if (n == null)
          return n;
        if (typeof n == "string" && (n = s(n)), !Number.isFinite(n))
          throw new TypeError("Invalid value");
        return n;
      }
      function u(n, G = !1) {
        return n === "" ? null : (typeof n == "string" && (n = n.split(/[\s,]+/g)), Array.isArray(n) && (G && (n = n.map(o)), n.length === 1) ? n[0] : n);
      }
      function e(n, G) {
        if (Array.isArray(n) && Array.isArray(G)) {
          if (n.length !== G.length)
            return !1;
          for (let y = 0; y < n.length; y++)
            if (n[y] !== G[y])
              return !1;
          return !0;
        }
        return n == null && G == null || n === G;
      }
    },
    /* 73 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return I;
      });
      var s = l(74), c = l(32), o = /* @__PURE__ */ l.n(c), u = l(68), e = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      function n() {
        return n = Object.assign || function(h) {
          for (var S = 1; S < arguments.length; S++) {
            var p = arguments[S];
            for (var X in p)
              Object.prototype.hasOwnProperty.call(p, X) && (h[X] = p[X]);
          }
          return h;
        }, n.apply(this, arguments);
      }
      function G(h) {
        if (typeof h == "string") {
          if (h = h.trim(), /^[0-9.]+%$/.test(h))
            return parseFloat(h) / 100;
          if (/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/.test(h))
            return Object(e.sizeToPixel)(h);
        }
        return h;
      }
      function y(h, S, p, X, V) {
        return typeof h == "string" && (h = o()(h)), typeof S == "string" && (S = o()(S)), s.Effects.default(h, S, p, X, V);
      }
      function a(h, S, p, X, V) {
        return s.Effects.default(h, S, p, X, V);
      }
      s.Effects.default = function(h, S, p, X, V) {
        return Array.isArray(h) && Array.isArray(S) ? h.map((i, b) => i + (p - X) / (V - X) * (S[b] - i)) : typeof h == "number" && typeof S == "number" ? h + (p - X) / (V - X) * (S - h) : p - X > V - p ? S : h;
      }, s.Effects.fillColor = y, s.Effects.strokeColor = y, s.Effects.bgcolor = y, s.Effects.borderColor = y, s.Effects.text = a;
      class I extends s.Animator {
        constructor(S, p, X) {
          const V = S.attr();
          Object.entries(V).forEach(([i, b]) => {
            V[i] = s.Effects[i] ? b : G(b);
          }), p = p.map((i) => {
            let b = n({}, i);
            const t = {};
            return Object.entries(b).forEach(([m, K]) => {
              t[m] = s.Effects[m] ? K : G(K);
            }), t;
          }), super(V, p, X), this.target = S, this.setter = function(i, b) {
            b.attr(i);
          };
        }
        get playState() {
          return this.target.parent ? super.playState : "idle";
        }
        get finished() {
          return super.finished.then(() => {
            const S = this;
            return new Promise((p) => {
              function X() {
                S.setter(S.frame, S.target);
                const V = S.playState;
                V === "finished" || V === "idle" ? (Object(u.cancelAnimationFrame)(S.requestId), p()) : Object(u.requestAnimationFrame)(X);
              }
              X();
            });
          });
        }
        finish() {
          super.finish(), Object(u.cancelAnimationFrame)(this.requestId), this.setter(this.frame, this.target);
        }
        play() {
          if (!this.target.parent || this.playState === "running")
            return;
          super.play(), this.setter(this.frame, this.target);
          const S = this;
          this.ready.then(() => {
            S.setter(S.frame, S.target), S.requestId = Object(u.requestAnimationFrame)(function p() {
              const X = S.target;
              if (typeof document < "u" && document.documentElement && document.documentElement.contains && X.layer && X.layer.canvas && !document.documentElement.contains(X.layer.canvas)) {
                S.cancel();
                return;
              }
              const V = S.playState;
              S.setter(S.frame, S.target), V !== "idle" && (V === "running" ? S.requestId = Object(u.requestAnimationFrame)(p) : (V === "paused" || V === "pending" && S.timeline.currentTime < 0) && S.ready.then(() => {
                S.setter(S.frame, S.target), S.requestId = Object(u.requestAnimationFrame)(p);
              }));
            });
          });
        }
        cancel(S = !1) {
          Object(u.cancelAnimationFrame)(this.requestId), S ? (this.setter(this.frame, this.target), super.cancel()) : (super.cancel(), this.setter(this.frame, this.target));
        }
      }
    },
    /* 74 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      }), d.Timeline = d.Effects = d.Easings = d.Animator = void 0;
      var s = l(75), c = y(s), o = l(187), u = y(o), e = l(188), n = l(190), G = y(n);
      function y(a) {
        return a && a.__esModule ? a : { default: a };
      }
      d.Animator = G.default, d.Easings = e.Easings, d.Effects = u.default, d.Timeline = c.default;
    },
    /* 75 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      });
      var s = l(76), c = i(s), o = l(133), u = i(o), e = l(141), n = i(e), G = l(164), y = i(G), a = l(170), I = i(a), h = l(171), S = i(h), p = l(175), X = i(p), V = l(186);
      function i(F) {
        return F && F.__esModule ? F : { default: F };
      }
      var b = (0, V.createNowTime)(), t = {
        originTime: 0,
        playbackRate: 1
      }, m = (0, X.default)("timeMark"), K = (0, X.default)("playbackRate"), x = (0, X.default)("timers"), C = (0, X.default)("originTime"), T = (0, X.default)("setTimer"), R = (0, X.default)("parent"), J = function() {
        function F(r, Y) {
          (0, I.default)(this, F), r instanceof F && (Y = r, r = {}), r = (0, y.default)({}, t, r), Y && (this[R] = Y);
          var H = r.nowtime || b;
          if (Y)
            Object.defineProperty(this, "globalTime", {
              get: function() {
                return Y.currentTime;
              }
            });
          else {
            var Q = H();
            Object.defineProperty(this, "globalTime", {
              get: function() {
                return H() - Q;
              }
            });
          }
          this[m] = [{
            globalTime: this.globalTime,
            localTime: -r.originTime,
            entropy: -r.originTime,
            playbackRate: r.playbackRate,
            globalEntropy: 0
          }], this[R] && (this[m][0].globalEntropy = this[R].entropy), this[C] = r.originTime, this[K] = r.playbackRate, this[x] = new n.default();
        }
        return (0, S.default)(F, [{
          key: "markTime",
          value: function() {
            var Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, H = Y.time, Q = H === void 0 ? this.currentTime : H, w = Y.entropy, O = w === void 0 ? this.entropy : w, q = Y.playbackRate, k = q === void 0 ? this.playbackRate : q, P = {
              globalTime: this.globalTime,
              localTime: Q,
              entropy: O,
              playbackRate: k,
              globalEntropy: this.globalEntropy
            };
            this[m].push(P);
          }
        }, {
          key: "fork",
          value: function(Y) {
            return new F(Y, this);
          }
        }, {
          key: "seekGlobalTime",
          value: function(Y) {
            var H = this.seekTimeMark(Y), Q = this[m][H], w = Q.entropy, O = Q.playbackRate, q = Q.globalTime;
            return q + (Y - w) / Math.abs(O);
          }
        }, {
          key: "seekLocalTime",
          value: function(Y) {
            var H = this.seekTimeMark(Y), Q = this[m][H], w = Q.localTime, O = Q.entropy, q = Q.playbackRate;
            return q > 0 ? w + (Y - O) : w - (Y - O);
          }
        }, {
          key: "seekTimeMark",
          value: function(Y) {
            var H = this[m], Q = 0, w = H.length - 1;
            if (Y <= H[Q].entropy)
              return Q;
            if (Y >= H[w].entropy)
              return w;
            for (var O = Math.floor((Q + w) / 2); O > Q && O < w; ) {
              if (Y === H[O].entropy)
                return O;
              Y < H[O].entropy ? w = O : Y > H[O].entropy && (Q = O), O = Math.floor((Q + w) / 2);
            }
            return Q;
          }
        }, {
          key: "updateTimers",
          value: function() {
            var Y = this, H = [].concat((0, u.default)(this[x]));
            H.forEach(function(Q) {
              var w = (0, c.default)(Q, 2), O = w[0], q = w[1];
              Y[T](q.handler, q.time, O);
            });
          }
        }, {
          key: "clearTimeout",
          value: function(r) {
            function Y(H) {
              return r.apply(this, arguments);
            }
            return Y.toString = function() {
              return r.toString();
            }, Y;
          }(function(r) {
            var Y = this[x].get(r);
            Y && Y.timerID != null && (this[R] ? this[R].clearTimeout(Y.timerID) : clearTimeout(Y.timerID)), this[x].delete(r);
          })
        }, {
          key: "clearInterval",
          value: function(Y) {
            return this.clearTimeout(Y);
          }
        }, {
          key: "clear",
          value: function() {
            var Y = this, H = this[x];
            [].concat((0, u.default)(H.keys())).forEach(function(Q) {
              Y.clearTimeout(Q);
            });
          }
          /*
            setTimeout(func, {delay: 100, isEntropy: true})
            setTimeout(func, {entropy: 100})
            setTimeout(func, 100})
           */
        }, {
          key: "setTimeout",
          value: function(Y) {
            var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { delay: 0 };
            return this[T](Y, H);
          }
        }, {
          key: "setInterval",
          value: function(Y) {
            var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { delay: 0 }, Q = this, w = this[T](function O() {
              Q[T](O, H, w), Y();
            }, H);
            return w;
          }
        }, {
          key: T,
          value: function(Y, H) {
            var Q = this, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : (0, X.default)("timerID");
            H = (0, V.formatDelay)(H);
            var O = this[x].get(w), q = void 0, k = null, P = void 0, D = void 0;
            O ? (this.clearTimeout(w), H.isEntropy ? q = (H.delay - (this.entropy - O.startEntropy)) / Math.abs(this.playbackRate) : q = (H.delay - (this.currentTime - O.startTime)) / this.playbackRate, P = O.startTime, D = O.startEntropy) : (q = H.delay / (H.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate), P = this.currentTime, D = this.entropy);
            var ll = this[R], _ = ll ? ll.setTimeout.bind(ll) : setTimeout, bl = H.heading;
            return !ll && bl === !1 && q < 0 && (q = 1 / 0), (isFinite(q) || ll) && (q = Math.ceil(q), _ !== setTimeout && (q = { delay: q, heading: bl }), k = _(function() {
              Q[x].delete(w), Y();
            }, q)), this[x].set(w, {
              timerID: k,
              handler: Y,
              time: H,
              startTime: P,
              startEntropy: D
            }), w;
          }
        }, {
          key: "parent",
          get: function() {
            return this[R];
          }
        }, {
          key: "lastTimeMark",
          get: function() {
            return this[m][this[m].length - 1];
          }
        }, {
          key: "currentTime",
          get: function() {
            var Y = this.lastTimeMark, H = Y.localTime, Q = Y.globalTime;
            return H + (this.globalTime - Q) * this.playbackRate;
          },
          set: function(Y) {
            var H = this, Q = this.currentTime, w = Y, O = this[x];
            this.markTime({ time: Y }), [].concat((0, u.default)(O)).forEach(function(q) {
              var k = (0, c.default)(q, 2), P = k[0], D = k[1];
              if (O.has(P)) {
                var ll = D.time, _ = ll.isEntropy, bl = ll.delay, $ = ll.heading, el = D.handler, nl = D.startTime;
                if (_)
                  bl === 0 && (el(), H.clearTimeout(P));
                else {
                  var z = nl + bl;
                  (bl === 0 || $ !== !1 && (w - Q) * bl <= 0 || Q <= z && z <= w || Q >= z && z >= w) && (el(), H.clearTimeout(P));
                }
              }
            }), this.updateTimers();
          }
          // Both currentTime and entropy should be influenced by playbackRate.
          // If current playbackRate is negative, the currentTime should go backwards
          // while the entropy remain to go forwards.
          // Both of the initial values is set to -originTime
        }, {
          key: "entropy",
          get: function() {
            var Y = this.lastTimeMark, H = Y.entropy, Q = Y.globalEntropy;
            return H + Math.abs((this.globalEntropy - Q) * this.playbackRate);
          },
          // get globalTime() {
          //   if(this[_parent]) {
          //     return this[_parent].currentTime;
          //   }
          //   return nowtime();
          // }
          // change entropy will NOT cause currentTime changing but may influence the pass
          // and the future of the timeline. (It may change the result of seek***Time)
          // While entropy is set, all the marks behind will be droped
          set: function(Y) {
            if (this.entropy > Y) {
              var H = this.seekTimeMark(Y);
              this[m].length = H + 1;
            }
            this.markTime({ entropy: Y }), this.updateTimers();
          }
        }, {
          key: "globalEntropy",
          get: function() {
            return this[R] ? this[R].entropy : this.globalTime;
          }
        }, {
          key: "playbackRate",
          get: function() {
            return this[K];
          },
          set: function(Y) {
            Y !== this.playbackRate && (this.markTime({ playbackRate: Y }), this[K] = Y, this.updateTimers());
          }
        }, {
          key: "paused",
          get: function() {
            if (this.playbackRate === 0)
              return !0;
            for (var Y = this.parent; Y; ) {
              if (Y.playbackRate === 0)
                return !0;
              Y = Y.parent;
            }
            return !1;
          }
        }]), F;
      }();
      d.default = J;
    },
    /* 76 */
    /***/
    function(Z, d, l) {
      d.__esModule = !0;
      var s = l(77), c = e(s), o = l(129), u = e(o);
      function e(n) {
        return n && n.__esModule ? n : { default: n };
      }
      d.default = /* @__PURE__ */ function() {
        function n(G, y) {
          var a = [], I = !0, h = !1, S = void 0;
          try {
            for (var p = (0, u.default)(G), X; !(I = (X = p.next()).done) && (a.push(X.value), !(y && a.length === y)); I = !0)
              ;
          } catch (V) {
            h = !0, S = V;
          } finally {
            try {
              !I && p.return && p.return();
            } finally {
              if (h)
                throw S;
            }
          }
          return a;
        }
        return function(G, y) {
          if (Array.isArray(G))
            return G;
          if ((0, c.default)(Object(G)))
            return n(G, y);
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
      }();
    },
    /* 77 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(78), __esModule: !0 };
    },
    /* 78 */
    /***/
    function(Z, d, l) {
      l(79), l(125), Z.exports = l(127);
    },
    /* 79 */
    /***/
    function(Z, d, l) {
      l(80);
      for (var s = l(91), c = l(95), o = l(83), u = l(122)("toStringTag"), e = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), n = 0; n < e.length; n++) {
        var G = e[n], y = s[G], a = y && y.prototype;
        a && !a[u] && c(a, u, G), o[G] = o.Array;
      }
    },
    /* 80 */
    /***/
    function(Z, d, l) {
      var s = l(81), c = l(82), o = l(83), u = l(84);
      Z.exports = l(88)(Array, "Array", function(e, n) {
        this._t = u(e), this._i = 0, this._k = n;
      }, function() {
        var e = this._t, n = this._k, G = this._i++;
        return !e || G >= e.length ? (this._t = void 0, c(1)) : n == "keys" ? c(0, G) : n == "values" ? c(0, e[G]) : c(0, [G, e[G]]);
      }, "values"), o.Arguments = o.Array, s("keys"), s("values"), s("entries");
    },
    /* 81 */
    /***/
    function(Z, d) {
      Z.exports = function() {
      };
    },
    /* 82 */
    /***/
    function(Z, d) {
      Z.exports = function(l, s) {
        return { value: s, done: !!l };
      };
    },
    /* 83 */
    /***/
    function(Z, d) {
      Z.exports = {};
    },
    /* 84 */
    /***/
    function(Z, d, l) {
      var s = l(85), c = l(87);
      Z.exports = function(o) {
        return s(c(o));
      };
    },
    /* 85 */
    /***/
    function(Z, d, l) {
      var s = l(86);
      Z.exports = Object("z").propertyIsEnumerable(0) ? Object : function(c) {
        return s(c) == "String" ? c.split("") : Object(c);
      };
    },
    /* 86 */
    /***/
    function(Z, d) {
      var l = {}.toString;
      Z.exports = function(s) {
        return l.call(s).slice(8, -1);
      };
    },
    /* 87 */
    /***/
    function(Z, d) {
      Z.exports = function(l) {
        if (l == null)
          throw TypeError("Can't call method on  " + l);
        return l;
      };
    },
    /* 88 */
    /***/
    function(Z, d, l) {
      var s = l(89), c = l(90), o = l(106), u = l(95), e = l(83), n = l(107), G = l(121), y = l(123), a = l(122)("iterator"), I = !([].keys && "next" in [].keys()), h = "@@iterator", S = "keys", p = "values", X = function() {
        return this;
      };
      Z.exports = function(V, i, b, t, m, K, x) {
        n(b, i, t);
        var C = function(k) {
          if (!I && k in F)
            return F[k];
          switch (k) {
            case S:
              return function() {
                return new b(this, k);
              };
            case p:
              return function() {
                return new b(this, k);
              };
          }
          return function() {
            return new b(this, k);
          };
        }, T = i + " Iterator", R = m == p, J = !1, F = V.prototype, r = F[a] || F[h] || m && F[m], Y = r || C(m), H = m ? R ? C("entries") : Y : void 0, Q = i == "Array" && F.entries || r, w, O, q;
        if (Q && (q = y(Q.call(new V())), q !== Object.prototype && q.next && (G(q, T, !0), !s && typeof q[a] != "function" && u(q, a, X))), R && r && r.name !== p && (J = !0, Y = function() {
          return r.call(this);
        }), (!s || x) && (I || J || !F[a]) && u(F, a, Y), e[i] = Y, e[T] = X, m)
          if (w = {
            values: R ? Y : C(p),
            keys: K ? Y : C(S),
            entries: H
          }, x)
            for (O in w)
              O in F || o(F, O, w[O]);
          else
            c(c.P + c.F * (I || J), i, w);
        return w;
      };
    },
    /* 89 */
    /***/
    function(Z, d) {
      Z.exports = !0;
    },
    /* 90 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(92), o = l(93), u = l(95), e = l(105), n = "prototype", G = function(y, a, I) {
        var h = y & G.F, S = y & G.G, p = y & G.S, X = y & G.P, V = y & G.B, i = y & G.W, b = S ? c : c[a] || (c[a] = {}), t = b[n], m = S ? s : p ? s[a] : (s[a] || {})[n], K, x, C;
        S && (I = a);
        for (K in I)
          x = !h && m && m[K] !== void 0, !(x && e(b, K)) && (C = x ? m[K] : I[K], b[K] = S && typeof m[K] != "function" ? I[K] : V && x ? o(C, s) : i && m[K] == C ? function(T) {
            var R = function(J, F, r) {
              if (this instanceof T) {
                switch (arguments.length) {
                  case 0:
                    return new T();
                  case 1:
                    return new T(J);
                  case 2:
                    return new T(J, F);
                }
                return new T(J, F, r);
              }
              return T.apply(this, arguments);
            };
            return R[n] = T[n], R;
          }(C) : X && typeof C == "function" ? o(Function.call, C) : C, X && ((b.virtual || (b.virtual = {}))[K] = C, y & G.R && t && !t[K] && u(t, K, C)));
      };
      G.F = 1, G.G = 2, G.S = 4, G.P = 8, G.B = 16, G.W = 32, G.U = 64, G.R = 128, Z.exports = G;
    },
    /* 91 */
    /***/
    function(Z, d) {
      var l = Z.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
      typeof __g == "number" && (__g = l);
    },
    /* 92 */
    /***/
    function(Z, d) {
      var l = Z.exports = { version: "2.6.11" };
      typeof __e == "number" && (__e = l);
    },
    /* 93 */
    /***/
    function(Z, d, l) {
      var s = l(94);
      Z.exports = function(c, o, u) {
        if (s(c), o === void 0)
          return c;
        switch (u) {
          case 1:
            return function(e) {
              return c.call(o, e);
            };
          case 2:
            return function(e, n) {
              return c.call(o, e, n);
            };
          case 3:
            return function(e, n, G) {
              return c.call(o, e, n, G);
            };
        }
        return function() {
          return c.apply(o, arguments);
        };
      };
    },
    /* 94 */
    /***/
    function(Z, d) {
      Z.exports = function(l) {
        if (typeof l != "function")
          throw TypeError(l + " is not a function!");
        return l;
      };
    },
    /* 95 */
    /***/
    function(Z, d, l) {
      var s = l(96), c = l(104);
      Z.exports = l(100) ? function(o, u, e) {
        return s.f(o, u, c(1, e));
      } : function(o, u, e) {
        return o[u] = e, o;
      };
    },
    /* 96 */
    /***/
    function(Z, d, l) {
      var s = l(97), c = l(99), o = l(103), u = Object.defineProperty;
      d.f = l(100) ? Object.defineProperty : function(n, G, y) {
        if (s(n), G = o(G, !0), s(y), c)
          try {
            return u(n, G, y);
          } catch {
          }
        if ("get" in y || "set" in y)
          throw TypeError("Accessors not supported!");
        return "value" in y && (n[G] = y.value), n;
      };
    },
    /* 97 */
    /***/
    function(Z, d, l) {
      var s = l(98);
      Z.exports = function(c) {
        if (!s(c))
          throw TypeError(c + " is not an object!");
        return c;
      };
    },
    /* 98 */
    /***/
    function(Z, d) {
      Z.exports = function(l) {
        return typeof l == "object" ? l !== null : typeof l == "function";
      };
    },
    /* 99 */
    /***/
    function(Z, d, l) {
      Z.exports = !l(100) && !l(101)(function() {
        return Object.defineProperty(l(102)("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    },
    /* 100 */
    /***/
    function(Z, d, l) {
      Z.exports = !l(101)(function() {
        return Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    },
    /* 101 */
    /***/
    function(Z, d) {
      Z.exports = function(l) {
        try {
          return !!l();
        } catch {
          return !0;
        }
      };
    },
    /* 102 */
    /***/
    function(Z, d, l) {
      var s = l(98), c = l(91).document, o = s(c) && s(c.createElement);
      Z.exports = function(u) {
        return o ? c.createElement(u) : {};
      };
    },
    /* 103 */
    /***/
    function(Z, d, l) {
      var s = l(98);
      Z.exports = function(c, o) {
        if (!s(c))
          return c;
        var u, e;
        if (o && typeof (u = c.toString) == "function" && !s(e = u.call(c)) || typeof (u = c.valueOf) == "function" && !s(e = u.call(c)) || !o && typeof (u = c.toString) == "function" && !s(e = u.call(c)))
          return e;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    /* 104 */
    /***/
    function(Z, d) {
      Z.exports = function(l, s) {
        return {
          enumerable: !(l & 1),
          configurable: !(l & 2),
          writable: !(l & 4),
          value: s
        };
      };
    },
    /* 105 */
    /***/
    function(Z, d) {
      var l = {}.hasOwnProperty;
      Z.exports = function(s, c) {
        return l.call(s, c);
      };
    },
    /* 106 */
    /***/
    function(Z, d, l) {
      Z.exports = l(95);
    },
    /* 107 */
    /***/
    function(Z, d, l) {
      var s = l(108), c = l(104), o = l(121), u = {};
      l(95)(u, l(122)("iterator"), function() {
        return this;
      }), Z.exports = function(e, n, G) {
        e.prototype = s(u, { next: c(1, G) }), o(e, n + " Iterator");
      };
    },
    /* 108 */
    /***/
    function(Z, d, l) {
      var s = l(97), c = l(109), o = l(119), u = l(116)("IE_PROTO"), e = function() {
      }, n = "prototype", G = function() {
        var y = l(102)("iframe"), a = o.length, I = "<", h = ">", S;
        for (y.style.display = "none", l(120).appendChild(y), y.src = "javascript:", S = y.contentWindow.document, S.open(), S.write(I + "script" + h + "document.F=Object" + I + "/script" + h), S.close(), G = S.F; a--; )
          delete G[n][o[a]];
        return G();
      };
      Z.exports = Object.create || function(a, I) {
        var h;
        return a !== null ? (e[n] = s(a), h = new e(), e[n] = null, h[u] = a) : h = G(), I === void 0 ? h : c(h, I);
      };
    },
    /* 109 */
    /***/
    function(Z, d, l) {
      var s = l(96), c = l(97), o = l(110);
      Z.exports = l(100) ? Object.defineProperties : function(e, n) {
        c(e);
        for (var G = o(n), y = G.length, a = 0, I; y > a; )
          s.f(e, I = G[a++], n[I]);
        return e;
      };
    },
    /* 110 */
    /***/
    function(Z, d, l) {
      var s = l(111), c = l(119);
      Z.exports = Object.keys || function(u) {
        return s(u, c);
      };
    },
    /* 111 */
    /***/
    function(Z, d, l) {
      var s = l(105), c = l(84), o = l(112)(!1), u = l(116)("IE_PROTO");
      Z.exports = function(e, n) {
        var G = c(e), y = 0, a = [], I;
        for (I in G)
          I != u && s(G, I) && a.push(I);
        for (; n.length > y; )
          s(G, I = n[y++]) && (~o(a, I) || a.push(I));
        return a;
      };
    },
    /* 112 */
    /***/
    function(Z, d, l) {
      var s = l(84), c = l(113), o = l(115);
      Z.exports = function(u) {
        return function(e, n, G) {
          var y = s(e), a = c(y.length), I = o(G, a), h;
          if (u && n != n) {
            for (; a > I; )
              if (h = y[I++], h != h)
                return !0;
          } else
            for (; a > I; I++)
              if ((u || I in y) && y[I] === n)
                return u || I || 0;
          return !u && -1;
        };
      };
    },
    /* 113 */
    /***/
    function(Z, d, l) {
      var s = l(114), c = Math.min;
      Z.exports = function(o) {
        return o > 0 ? c(s(o), 9007199254740991) : 0;
      };
    },
    /* 114 */
    /***/
    function(Z, d) {
      var l = Math.ceil, s = Math.floor;
      Z.exports = function(c) {
        return isNaN(c = +c) ? 0 : (c > 0 ? s : l)(c);
      };
    },
    /* 115 */
    /***/
    function(Z, d, l) {
      var s = l(114), c = Math.max, o = Math.min;
      Z.exports = function(u, e) {
        return u = s(u), u < 0 ? c(u + e, 0) : o(u, e);
      };
    },
    /* 116 */
    /***/
    function(Z, d, l) {
      var s = l(117)("keys"), c = l(118);
      Z.exports = function(o) {
        return s[o] || (s[o] = c(o));
      };
    },
    /* 117 */
    /***/
    function(Z, d, l) {
      var s = l(92), c = l(91), o = "__core-js_shared__", u = c[o] || (c[o] = {});
      (Z.exports = function(e, n) {
        return u[e] || (u[e] = n !== void 0 ? n : {});
      })("versions", []).push({
        version: s.version,
        mode: l(89) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
      });
    },
    /* 118 */
    /***/
    function(Z, d) {
      var l = 0, s = Math.random();
      Z.exports = function(c) {
        return "Symbol(".concat(c === void 0 ? "" : c, ")_", (++l + s).toString(36));
      };
    },
    /* 119 */
    /***/
    function(Z, d) {
      Z.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    /* 120 */
    /***/
    function(Z, d, l) {
      var s = l(91).document;
      Z.exports = s && s.documentElement;
    },
    /* 121 */
    /***/
    function(Z, d, l) {
      var s = l(96).f, c = l(105), o = l(122)("toStringTag");
      Z.exports = function(u, e, n) {
        u && !c(u = n ? u : u.prototype, o) && s(u, o, { configurable: !0, value: e });
      };
    },
    /* 122 */
    /***/
    function(Z, d, l) {
      var s = l(117)("wks"), c = l(118), o = l(91).Symbol, u = typeof o == "function", e = Z.exports = function(n) {
        return s[n] || (s[n] = u && o[n] || (u ? o : c)("Symbol." + n));
      };
      e.store = s;
    },
    /* 123 */
    /***/
    function(Z, d, l) {
      var s = l(105), c = l(124), o = l(116)("IE_PROTO"), u = Object.prototype;
      Z.exports = Object.getPrototypeOf || function(e) {
        return e = c(e), s(e, o) ? e[o] : typeof e.constructor == "function" && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
      };
    },
    /* 124 */
    /***/
    function(Z, d, l) {
      var s = l(87);
      Z.exports = function(c) {
        return Object(s(c));
      };
    },
    /* 125 */
    /***/
    function(Z, d, l) {
      var s = l(126)(!0);
      l(88)(String, "String", function(c) {
        this._t = String(c), this._i = 0;
      }, function() {
        var c = this._t, o = this._i, u;
        return o >= c.length ? { value: void 0, done: !0 } : (u = s(c, o), this._i += u.length, { value: u, done: !1 });
      });
    },
    /* 126 */
    /***/
    function(Z, d, l) {
      var s = l(114), c = l(87);
      Z.exports = function(o) {
        return function(u, e) {
          var n = String(c(u)), G = s(e), y = n.length, a, I;
          return G < 0 || G >= y ? o ? "" : void 0 : (a = n.charCodeAt(G), a < 55296 || a > 56319 || G + 1 === y || (I = n.charCodeAt(G + 1)) < 56320 || I > 57343 ? o ? n.charAt(G) : a : o ? n.slice(G, G + 2) : (a - 55296 << 10) + (I - 56320) + 65536);
        };
      };
    },
    /* 127 */
    /***/
    function(Z, d, l) {
      var s = l(128), c = l(122)("iterator"), o = l(83);
      Z.exports = l(92).isIterable = function(u) {
        var e = Object(u);
        return e[c] !== void 0 || "@@iterator" in e || o.hasOwnProperty(s(e));
      };
    },
    /* 128 */
    /***/
    function(Z, d, l) {
      var s = l(86), c = l(122)("toStringTag"), o = s(/* @__PURE__ */ function() {
        return arguments;
      }()) == "Arguments", u = function(e, n) {
        try {
          return e[n];
        } catch {
        }
      };
      Z.exports = function(e) {
        var n, G, y;
        return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (G = u(n = Object(e), c)) == "string" ? G : o ? s(n) : (y = s(n)) == "Object" && typeof n.callee == "function" ? "Arguments" : y;
      };
    },
    /* 129 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(130), __esModule: !0 };
    },
    /* 130 */
    /***/
    function(Z, d, l) {
      l(79), l(125), Z.exports = l(131);
    },
    /* 131 */
    /***/
    function(Z, d, l) {
      var s = l(97), c = l(132);
      Z.exports = l(92).getIterator = function(o) {
        var u = c(o);
        if (typeof u != "function")
          throw TypeError(o + " is not iterable!");
        return s(u.call(o));
      };
    },
    /* 132 */
    /***/
    function(Z, d, l) {
      var s = l(128), c = l(122)("iterator"), o = l(83);
      Z.exports = l(92).getIteratorMethod = function(u) {
        if (u != null)
          return u[c] || u["@@iterator"] || o[s(u)];
      };
    },
    /* 133 */
    /***/
    function(Z, d, l) {
      d.__esModule = !0;
      var s = l(134), c = o(s);
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      d.default = function(u) {
        if (Array.isArray(u)) {
          for (var e = 0, n = Array(u.length); e < u.length; e++)
            n[e] = u[e];
          return n;
        } else
          return (0, c.default)(u);
      };
    },
    /* 134 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(135), __esModule: !0 };
    },
    /* 135 */
    /***/
    function(Z, d, l) {
      l(125), l(136), Z.exports = l(92).Array.from;
    },
    /* 136 */
    /***/
    function(Z, d, l) {
      var s = l(93), c = l(90), o = l(124), u = l(137), e = l(138), n = l(113), G = l(139), y = l(132);
      c(c.S + c.F * !l(140)(function(a) {
        Array.from(a);
      }), "Array", {
        // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
        from: function(I) {
          var h = o(I), S = typeof this == "function" ? this : Array, p = arguments.length, X = p > 1 ? arguments[1] : void 0, V = X !== void 0, i = 0, b = y(h), t, m, K, x;
          if (V && (X = s(X, p > 2 ? arguments[2] : void 0, 2)), b != null && !(S == Array && e(b)))
            for (x = b.call(h), m = new S(); !(K = x.next()).done; i++)
              G(m, i, V ? u(x, X, [K.value, i], !0) : K.value);
          else
            for (t = n(h.length), m = new S(t); t > i; i++)
              G(m, i, V ? X(h[i], i) : h[i]);
          return m.length = i, m;
        }
      });
    },
    /* 137 */
    /***/
    function(Z, d, l) {
      var s = l(97);
      Z.exports = function(c, o, u, e) {
        try {
          return e ? o(s(u)[0], u[1]) : o(u);
        } catch (G) {
          var n = c.return;
          throw n !== void 0 && s(n.call(c)), G;
        }
      };
    },
    /* 138 */
    /***/
    function(Z, d, l) {
      var s = l(83), c = l(122)("iterator"), o = Array.prototype;
      Z.exports = function(u) {
        return u !== void 0 && (s.Array === u || o[c] === u);
      };
    },
    /* 139 */
    /***/
    function(Z, d, l) {
      var s = l(96), c = l(104);
      Z.exports = function(o, u, e) {
        u in o ? s.f(o, u, c(0, e)) : o[u] = e;
      };
    },
    /* 140 */
    /***/
    function(Z, d, l) {
      var s = l(122)("iterator"), c = !1;
      try {
        var o = [7][s]();
        o.return = function() {
          c = !0;
        }, Array.from(o, function() {
          throw 2;
        });
      } catch {
      }
      Z.exports = function(u, e) {
        if (!e && !c)
          return !1;
        var n = !1;
        try {
          var G = [7], y = G[s]();
          y.next = function() {
            return { done: n = !0 };
          }, G[s] = function() {
            return y;
          }, u(G);
        } catch {
        }
        return n;
      };
    },
    /* 141 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(142), __esModule: !0 };
    },
    /* 142 */
    /***/
    function(Z, d, l) {
      l(143), l(125), l(79), l(144), l(157), l(160), l(162), Z.exports = l(92).Map;
    },
    /* 143 */
    /***/
    function(Z, d) {
    },
    /* 144 */
    /***/
    function(Z, d, l) {
      var s = l(145), c = l(151), o = "Map";
      Z.exports = l(152)(o, function(u) {
        return function() {
          return u(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      }, {
        // 23.1.3.6 Map.prototype.get(key)
        get: function(e) {
          var n = s.getEntry(c(this, o), e);
          return n && n.v;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function(e, n) {
          return s.def(c(this, o), e === 0 ? 0 : e, n);
        }
      }, s, !0);
    },
    /* 145 */
    /***/
    function(Z, d, l) {
      var s = l(96).f, c = l(108), o = l(146), u = l(93), e = l(147), n = l(148), G = l(88), y = l(82), a = l(149), I = l(100), h = l(150).fastKey, S = l(151), p = I ? "_s" : "size", X = function(V, i) {
        var b = h(i), t;
        if (b !== "F")
          return V._i[b];
        for (t = V._f; t; t = t.n)
          if (t.k == i)
            return t;
      };
      Z.exports = {
        getConstructor: function(V, i, b, t) {
          var m = V(function(K, x) {
            e(K, m, i, "_i"), K._t = i, K._i = c(null), K._f = void 0, K._l = void 0, K[p] = 0, x != null && n(x, b, K[t], K);
          });
          return o(m.prototype, {
            // 23.1.3.1 Map.prototype.clear()
            // 23.2.3.2 Set.prototype.clear()
            clear: function() {
              for (var x = S(this, i), C = x._i, T = x._f; T; T = T.n)
                T.r = !0, T.p && (T.p = T.p.n = void 0), delete C[T.i];
              x._f = x._l = void 0, x[p] = 0;
            },
            // 23.1.3.3 Map.prototype.delete(key)
            // 23.2.3.4 Set.prototype.delete(value)
            delete: function(K) {
              var x = S(this, i), C = X(x, K);
              if (C) {
                var T = C.n, R = C.p;
                delete x._i[C.i], C.r = !0, R && (R.n = T), T && (T.p = R), x._f == C && (x._f = T), x._l == C && (x._l = R), x[p]--;
              }
              return !!C;
            },
            // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
            // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
            forEach: function(x) {
              S(this, i);
              for (var C = u(x, arguments.length > 1 ? arguments[1] : void 0, 3), T; T = T ? T.n : this._f; )
                for (C(T.v, T.k, this); T && T.r; )
                  T = T.p;
            },
            // 23.1.3.7 Map.prototype.has(key)
            // 23.2.3.7 Set.prototype.has(value)
            has: function(x) {
              return !!X(S(this, i), x);
            }
          }), I && s(m.prototype, "size", {
            get: function() {
              return S(this, i)[p];
            }
          }), m;
        },
        def: function(V, i, b) {
          var t = X(V, i), m, K;
          return t ? t.v = b : (V._l = t = {
            i: K = h(i, !0),
            // <- index
            k: i,
            // <- key
            v: b,
            // <- value
            p: m = V._l,
            // <- previous entry
            n: void 0,
            // <- next entry
            r: !1
            // <- removed
          }, V._f || (V._f = t), m && (m.n = t), V[p]++, K !== "F" && (V._i[K] = t)), V;
        },
        getEntry: X,
        setStrong: function(V, i, b) {
          G(V, i, function(t, m) {
            this._t = S(t, i), this._k = m, this._l = void 0;
          }, function() {
            for (var t = this, m = t._k, K = t._l; K && K.r; )
              K = K.p;
            return !t._t || !(t._l = K = K ? K.n : t._t._f) ? (t._t = void 0, y(1)) : m == "keys" ? y(0, K.k) : m == "values" ? y(0, K.v) : y(0, [K.k, K.v]);
          }, b ? "entries" : "values", !b, !0), a(i);
        }
      };
    },
    /* 146 */
    /***/
    function(Z, d, l) {
      var s = l(95);
      Z.exports = function(c, o, u) {
        for (var e in o)
          u && c[e] ? c[e] = o[e] : s(c, e, o[e]);
        return c;
      };
    },
    /* 147 */
    /***/
    function(Z, d) {
      Z.exports = function(l, s, c, o) {
        if (!(l instanceof s) || o !== void 0 && o in l)
          throw TypeError(c + ": incorrect invocation!");
        return l;
      };
    },
    /* 148 */
    /***/
    function(Z, a, l) {
      var s = l(93), c = l(137), o = l(138), u = l(97), e = l(113), n = l(132), G = {}, y = {}, a = Z.exports = function(I, h, S, p, X) {
        var V = X ? function() {
          return I;
        } : n(I), i = s(S, p, h ? 2 : 1), b = 0, t, m, K, x;
        if (typeof V != "function")
          throw TypeError(I + " is not iterable!");
        if (o(V)) {
          for (t = e(I.length); t > b; b++)
            if (x = h ? i(u(m = I[b])[0], m[1]) : i(I[b]), x === G || x === y)
              return x;
        } else
          for (K = V.call(I); !(m = K.next()).done; )
            if (x = c(K, i, m.value, h), x === G || x === y)
              return x;
      };
      a.BREAK = G, a.RETURN = y;
    },
    /* 149 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(92), o = l(96), u = l(100), e = l(122)("species");
      Z.exports = function(n) {
        var G = typeof c[n] == "function" ? c[n] : s[n];
        u && G && !G[e] && o.f(G, e, {
          configurable: !0,
          get: function() {
            return this;
          }
        });
      };
    },
    /* 150 */
    /***/
    function(Z, d, l) {
      var s = l(118)("meta"), c = l(98), o = l(105), u = l(96).f, e = 0, n = Object.isExtensible || function() {
        return !0;
      }, G = !l(101)(function() {
        return n(Object.preventExtensions({}));
      }), y = function(p) {
        u(p, s, { value: {
          i: "O" + ++e,
          // object ID
          w: {}
          // weak collections IDs
        } });
      }, a = function(p, X) {
        if (!c(p))
          return typeof p == "symbol" ? p : (typeof p == "string" ? "S" : "P") + p;
        if (!o(p, s)) {
          if (!n(p))
            return "F";
          if (!X)
            return "E";
          y(p);
        }
        return p[s].i;
      }, I = function(p, X) {
        if (!o(p, s)) {
          if (!n(p))
            return !0;
          if (!X)
            return !1;
          y(p);
        }
        return p[s].w;
      }, h = function(p) {
        return G && S.NEED && n(p) && !o(p, s) && y(p), p;
      }, S = Z.exports = {
        KEY: s,
        NEED: !1,
        fastKey: a,
        getWeak: I,
        onFreeze: h
      };
    },
    /* 151 */
    /***/
    function(Z, d, l) {
      var s = l(98);
      Z.exports = function(c, o) {
        if (!s(c) || c._t !== o)
          throw TypeError("Incompatible receiver, " + o + " required!");
        return c;
      };
    },
    /* 152 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(90), o = l(150), u = l(101), e = l(95), n = l(146), G = l(148), y = l(147), a = l(98), I = l(121), h = l(96).f, S = l(153)(0), p = l(100);
      Z.exports = function(X, V, i, b, t, m) {
        var K = s[X], x = K, C = t ? "set" : "add", T = x && x.prototype, R = {};
        return !p || typeof x != "function" || !(m || T.forEach && !u(function() {
          new x().entries().next();
        })) ? (x = b.getConstructor(V, X, t, C), n(x.prototype, i), o.NEED = !0) : (x = V(function(J, F) {
          y(J, x, X, "_c"), J._c = new K(), F != null && G(F, t, J[C], J);
        }), S("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(J) {
          var F = J == "add" || J == "set";
          J in T && !(m && J == "clear") && e(x.prototype, J, function(r, Y) {
            if (y(this, x, J), !F && m && !a(r))
              return J == "get" ? void 0 : !1;
            var H = this._c[J](r === 0 ? 0 : r, Y);
            return F ? this : H;
          });
        }), m || h(x.prototype, "size", {
          get: function() {
            return this._c.size;
          }
        })), I(x, X), R[X] = x, c(c.G + c.W + c.F, R), m || b.setStrong(x, X, t), x;
      };
    },
    /* 153 */
    /***/
    function(Z, d, l) {
      var s = l(93), c = l(85), o = l(124), u = l(113), e = l(154);
      Z.exports = function(n, G) {
        var y = n == 1, a = n == 2, I = n == 3, h = n == 4, S = n == 6, p = n == 5 || S, X = G || e;
        return function(V, i, b) {
          for (var t = o(V), m = c(t), K = s(i, b, 3), x = u(m.length), C = 0, T = y ? X(V, x) : a ? X(V, 0) : void 0, R, J; x > C; C++)
            if ((p || C in m) && (R = m[C], J = K(R, C, t), n)) {
              if (y)
                T[C] = J;
              else if (J)
                switch (n) {
                  case 3:
                    return !0;
                  case 5:
                    return R;
                  case 6:
                    return C;
                  case 2:
                    T.push(R);
                }
              else if (h)
                return !1;
            }
          return S ? -1 : I || h ? h : T;
        };
      };
    },
    /* 154 */
    /***/
    function(Z, d, l) {
      var s = l(155);
      Z.exports = function(c, o) {
        return new (s(c))(o);
      };
    },
    /* 155 */
    /***/
    function(Z, d, l) {
      var s = l(98), c = l(156), o = l(122)("species");
      Z.exports = function(u) {
        var e;
        return c(u) && (e = u.constructor, typeof e == "function" && (e === Array || c(e.prototype)) && (e = void 0), s(e) && (e = e[o], e === null && (e = void 0))), e === void 0 ? Array : e;
      };
    },
    /* 156 */
    /***/
    function(Z, d, l) {
      var s = l(86);
      Z.exports = Array.isArray || function(o) {
        return s(o) == "Array";
      };
    },
    /* 157 */
    /***/
    function(Z, d, l) {
      var s = l(90);
      s(s.P + s.R, "Map", { toJSON: l(158)("Map") });
    },
    /* 158 */
    /***/
    function(Z, d, l) {
      var s = l(128), c = l(159);
      Z.exports = function(o) {
        return function() {
          if (s(this) != o)
            throw TypeError(o + "#toJSON isn't generic");
          return c(this);
        };
      };
    },
    /* 159 */
    /***/
    function(Z, d, l) {
      var s = l(148);
      Z.exports = function(c, o) {
        var u = [];
        return s(c, !1, u.push, u, o), u;
      };
    },
    /* 160 */
    /***/
    function(Z, d, l) {
      l(161)("Map");
    },
    /* 161 */
    /***/
    function(Z, d, l) {
      var s = l(90);
      Z.exports = function(c) {
        s(s.S, c, { of: function() {
          for (var u = arguments.length, e = new Array(u); u--; )
            e[u] = arguments[u];
          return new this(e);
        } });
      };
    },
    /* 162 */
    /***/
    function(Z, d, l) {
      l(163)("Map");
    },
    /* 163 */
    /***/
    function(Z, d, l) {
      var s = l(90), c = l(94), o = l(93), u = l(148);
      Z.exports = function(e) {
        s(s.S, e, { from: function(G) {
          var y = arguments[1], a, I, h, S;
          return c(this), a = y !== void 0, a && c(y), G == null ? new this() : (I = [], a ? (h = 0, S = o(y, arguments[2], 2), u(G, !1, function(p) {
            I.push(S(p, h++));
          })) : u(G, !1, I.push, I), new this(I));
        } });
      };
    },
    /* 164 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(165), __esModule: !0 };
    },
    /* 165 */
    /***/
    function(Z, d, l) {
      l(166), Z.exports = l(92).Object.assign;
    },
    /* 166 */
    /***/
    function(Z, d, l) {
      var s = l(90);
      s(s.S + s.F, "Object", { assign: l(167) });
    },
    /* 167 */
    /***/
    function(Z, d, l) {
      var s = l(100), c = l(110), o = l(168), u = l(169), e = l(124), n = l(85), G = Object.assign;
      Z.exports = !G || l(101)(function() {
        var y = {}, a = {}, I = Symbol(), h = "abcdefghijklmnopqrst";
        return y[I] = 7, h.split("").forEach(function(S) {
          a[S] = S;
        }), G({}, y)[I] != 7 || Object.keys(G({}, a)).join("") != h;
      }) ? function(a, I) {
        for (var h = e(a), S = arguments.length, p = 1, X = o.f, V = u.f; S > p; )
          for (var i = n(arguments[p++]), b = X ? c(i).concat(X(i)) : c(i), t = b.length, m = 0, K; t > m; )
            K = b[m++], (!s || V.call(i, K)) && (h[K] = i[K]);
        return h;
      } : G;
    },
    /* 168 */
    /***/
    function(Z, d) {
      d.f = Object.getOwnPropertySymbols;
    },
    /* 169 */
    /***/
    function(Z, d) {
      d.f = {}.propertyIsEnumerable;
    },
    /* 170 */
    /***/
    function(Z, d, l) {
      d.__esModule = !0, d.default = function(s, c) {
        if (!(s instanceof c))
          throw new TypeError("Cannot call a class as a function");
      };
    },
    /* 171 */
    /***/
    function(Z, d, l) {
      d.__esModule = !0;
      var s = l(172), c = o(s);
      function o(u) {
        return u && u.__esModule ? u : { default: u };
      }
      d.default = /* @__PURE__ */ function() {
        function u(e, n) {
          for (var G = 0; G < n.length; G++) {
            var y = n[G];
            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), (0, c.default)(e, y.key, y);
          }
        }
        return function(e, n, G) {
          return n && u(e.prototype, n), G && u(e, G), e;
        };
      }();
    },
    /* 172 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(173), __esModule: !0 };
    },
    /* 173 */
    /***/
    function(Z, d, l) {
      l(174);
      var s = l(92).Object;
      Z.exports = function(o, u, e) {
        return s.defineProperty(o, u, e);
      };
    },
    /* 174 */
    /***/
    function(Z, d, l) {
      var s = l(90);
      s(s.S + s.F * !l(100), "Object", { defineProperty: l(96).f });
    },
    /* 175 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(176), __esModule: !0 };
    },
    /* 176 */
    /***/
    function(Z, d, l) {
      l(177), l(143), l(184), l(185), Z.exports = l(92).Symbol;
    },
    /* 177 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(105), o = l(100), u = l(90), e = l(106), n = l(150).KEY, G = l(101), y = l(117), a = l(121), I = l(118), h = l(122), S = l(178), p = l(179), X = l(180), V = l(156), i = l(97), b = l(98), t = l(124), m = l(84), K = l(103), x = l(104), C = l(108), T = l(181), R = l(183), J = l(168), F = l(96), r = l(110), Y = R.f, H = F.f, Q = T.f, w = s.Symbol, O = s.JSON, q = O && O.stringify, k = "prototype", P = h("_hidden"), D = h("toPrimitive"), ll = {}.propertyIsEnumerable, _ = y("symbol-registry"), bl = y("symbols"), $ = y("op-symbols"), el = Object[k], nl = typeof w == "function" && !!J.f, z = s.QObject, M = !z || !z[k] || !z[k].findChild, E = o && G(function() {
        return C(H({}, "a", {
          get: function() {
            return H(this, "a", { value: 7 }).a;
          }
        })).a != 7;
      }) ? function(tl, sl, Zl) {
        var al = Y(el, sl);
        al && delete el[sl], H(tl, sl, Zl), al && tl !== el && H(el, sl, al);
      } : H, B = function(tl) {
        var sl = bl[tl] = C(w[k]);
        return sl._k = tl, sl;
      }, g = nl && typeof w.iterator == "symbol" ? function(tl) {
        return typeof tl == "symbol";
      } : function(tl) {
        return tl instanceof w;
      }, U = function(sl, Zl, al) {
        return sl === el && U($, Zl, al), i(sl), Zl = K(Zl, !0), i(al), c(bl, Zl) ? (al.enumerable ? (c(sl, P) && sl[P][Zl] && (sl[P][Zl] = !1), al = C(al, { enumerable: x(0, !1) })) : (c(sl, P) || H(sl, P, x(1, {})), sl[P][Zl] = !0), E(sl, Zl, al)) : H(sl, Zl, al);
      }, W = function(sl, Zl) {
        i(sl);
        for (var al = X(Zl = m(Zl)), ol = 0, Xl = al.length, Gl; Xl > ol; )
          U(sl, Gl = al[ol++], Zl[Gl]);
        return sl;
      }, L = function(sl, Zl) {
        return Zl === void 0 ? C(sl) : W(C(sl), Zl);
      }, N = function(sl) {
        var Zl = ll.call(this, sl = K(sl, !0));
        return this === el && c(bl, sl) && !c($, sl) ? !1 : Zl || !c(this, sl) || !c(bl, sl) || c(this, P) && this[P][sl] ? Zl : !0;
      }, v = function(sl, Zl) {
        if (sl = m(sl), Zl = K(Zl, !0), !(sl === el && c(bl, Zl) && !c($, Zl))) {
          var al = Y(sl, Zl);
          return al && c(bl, Zl) && !(c(sl, P) && sl[P][Zl]) && (al.enumerable = !0), al;
        }
      }, f = function(sl) {
        for (var Zl = Q(m(sl)), al = [], ol = 0, Xl; Zl.length > ol; )
          !c(bl, Xl = Zl[ol++]) && Xl != P && Xl != n && al.push(Xl);
        return al;
      }, j = function(sl) {
        for (var Zl = sl === el, al = Q(Zl ? $ : m(sl)), ol = [], Xl = 0, Gl; al.length > Xl; )
          c(bl, Gl = al[Xl++]) && (!Zl || c(el, Gl)) && ol.push(bl[Gl]);
        return ol;
      };
      nl || (w = function() {
        if (this instanceof w)
          throw TypeError("Symbol is not a constructor!");
        var sl = I(arguments.length > 0 ? arguments[0] : void 0), Zl = function(al) {
          this === el && Zl.call($, al), c(this, P) && c(this[P], sl) && (this[P][sl] = !1), E(this, sl, x(1, al));
        };
        return o && M && E(el, sl, { configurable: !0, set: Zl }), B(sl);
      }, e(w[k], "toString", function() {
        return this._k;
      }), R.f = v, F.f = U, l(182).f = T.f = f, l(169).f = N, J.f = j, o && !l(89) && e(el, "propertyIsEnumerable", N, !0), S.f = function(tl) {
        return B(h(tl));
      }), u(u.G + u.W + u.F * !nl, { Symbol: w });
      for (var A = (
        // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
        "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
      ), dl = 0; A.length > dl; )
        h(A[dl++]);
      for (var il = r(h.store), cl = 0; il.length > cl; )
        p(il[cl++]);
      u(u.S + u.F * !nl, "Symbol", {
        // 19.4.2.1 Symbol.for(key)
        for: function(tl) {
          return c(_, tl += "") ? _[tl] : _[tl] = w(tl);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function(sl) {
          if (!g(sl))
            throw TypeError(sl + " is not a symbol!");
          for (var Zl in _)
            if (_[Zl] === sl)
              return Zl;
        },
        useSetter: function() {
          M = !0;
        },
        useSimple: function() {
          M = !1;
        }
      }), u(u.S + u.F * !nl, "Object", {
        // 19.1.2.2 Object.create(O [, Properties])
        create: L,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: U,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: W,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: v,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: f,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: j
      });
      var ml = G(function() {
        J.f(1);
      });
      u(u.S + u.F * ml, "Object", {
        getOwnPropertySymbols: function(sl) {
          return J.f(t(sl));
        }
      }), O && u(u.S + u.F * (!nl || G(function() {
        var tl = w();
        return q([tl]) != "[null]" || q({ a: tl }) != "{}" || q(Object(tl)) != "{}";
      })), "JSON", {
        stringify: function(sl) {
          for (var Zl = [sl], al = 1, ol, Xl; arguments.length > al; )
            Zl.push(arguments[al++]);
          if (Xl = ol = Zl[1], !(!b(ol) && sl === void 0 || g(sl)))
            return V(ol) || (ol = function(Gl, xl) {
              if (typeof Xl == "function" && (xl = Xl.call(this, Gl, xl)), !g(xl))
                return xl;
            }), Zl[1] = ol, q.apply(O, Zl);
        }
      }), w[k][D] || l(95)(w[k], D, w[k].valueOf), a(w, "Symbol"), a(Math, "Math", !0), a(s.JSON, "JSON", !0);
    },
    /* 178 */
    /***/
    function(Z, d, l) {
      d.f = l(122);
    },
    /* 179 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(92), o = l(89), u = l(178), e = l(96).f;
      Z.exports = function(n) {
        var G = c.Symbol || (c.Symbol = o ? {} : s.Symbol || {});
        n.charAt(0) != "_" && !(n in G) && e(G, n, { value: u.f(n) });
      };
    },
    /* 180 */
    /***/
    function(Z, d, l) {
      var s = l(110), c = l(168), o = l(169);
      Z.exports = function(u) {
        var e = s(u), n = c.f;
        if (n)
          for (var G = n(u), y = o.f, a = 0, I; G.length > a; )
            y.call(u, I = G[a++]) && e.push(I);
        return e;
      };
    },
    /* 181 */
    /***/
    function(Z, d, l) {
      var s = l(84), c = l(182).f, o = {}.toString, u = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], e = function(n) {
        try {
          return c(n);
        } catch {
          return u.slice();
        }
      };
      Z.exports.f = function(G) {
        return u && o.call(G) == "[object Window]" ? e(G) : c(s(G));
      };
    },
    /* 182 */
    /***/
    function(Z, d, l) {
      var s = l(111), c = l(119).concat("length", "prototype");
      d.f = Object.getOwnPropertyNames || function(u) {
        return s(u, c);
      };
    },
    /* 183 */
    /***/
    function(Z, d, l) {
      var s = l(169), c = l(104), o = l(84), u = l(103), e = l(105), n = l(99), G = Object.getOwnPropertyDescriptor;
      d.f = l(100) ? G : function(a, I) {
        if (a = o(a), I = u(I, !0), n)
          try {
            return G(a, I);
          } catch {
          }
        if (e(a, I))
          return c(!s.f.call(a, I), a[I]);
      };
    },
    /* 184 */
    /***/
    function(Z, d, l) {
      l(179)("asyncIterator");
    },
    /* 185 */
    /***/
    function(Z, d, l) {
      l(179)("observable");
    },
    /* 186 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      }), d.createNowTime = s, d.formatDelay = c;
      function s() {
        var o = null;
        return Date.now ? o = Date.now : o = function() {
          return (/* @__PURE__ */ new Date()).getTime();
        }, o;
      }
      function c(o) {
        return typeof o == "number" ? o = { delay: o } : "entropy" in o && (o = { delay: o.entropy, isEntropy: !0 }), o;
      }
    },
    /* 187 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      }), d.default = {
        // s - startFrame, e - endFrame
        default: function(c, o, u, e, n) {
          return typeof c == "number" && typeof o == "number" ? c + (u - e) / (n - e) * (o - c) : u - e > n - u ? o : c;
        }
      };
    },
    /* 188 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      }), d.parseEasing = d.Easings = void 0;
      var s = l(76), c = G(s), o = l(133), u = G(o), e = l(141), n = G(e);
      function G(V) {
        return V && V.__esModule ? V : { default: V };
      }
      var y = l(189), a = new n.default();
      function I() {
        for (var V = arguments.length, i = Array(V), b = 0; b < V; b++)
          i[b] = arguments[b];
        var t = a.get(i);
        return t || (t = y.apply(void 0, i), a.set(i, t), t);
      }
      function h(V) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "end";
        return function(b, t) {
          for (var m = 1; m < t.length; m++) {
            var K = t[m].offset;
            if (b <= K) {
              var x = t[m - 1].offset, C = K, T = (b - x) / (C - x), R = 1 / V, J = T / R;
              return i === "end" ? J = Math.floor(J) : J = Math.ceil(J), R * J * (C - x) + x;
            }
          }
          return 0;
        };
      }
      function S(V) {
        var i = /^cubic-bezier\((.*)\)/, b = V.match(i);
        if (b) {
          var t = b[1].trim();
          return t = t.split(",").map(function(R) {
            return parseFloat(R.trim());
          }), I.apply(void 0, (0, u.default)(t));
        }
        if (i = /^steps\((.*)\)/, b = V.match(i), b) {
          var m = b[1].trim();
          m = m.split(",").map(function(R) {
            return R.trim();
          });
          var K = m, x = (0, c.default)(K, 2), C = x[0], T = x[1];
          return h(parseInt(C, 10), T);
        }
        return V;
      }
      var p = {
        linear: function(i) {
          return i;
        },
        ease: I(0.25, 0.1, 0.25, 1),
        "ease-in": I(0.42, 0, 1, 1),
        "ease-out": I(0, 0, 0.58, 1),
        "ease-in-out": I(0.42, 0, 0.58, 1),
        // 'step-start': function(p, frames){
        //   let ret = 0
        //   for(let i = 0; i < frames.length; i++){
        //     const {offset} = frames[i]
        //     ret = offset
        //     if(p < offset){
        //       break
        //     }
        //   }
        //   return ret
        // },
        // 'step-end': function(p, frames){
        //   let ret = 0
        //   for(let i = 0; i < frames.length; i++){
        //     const {offset} = frames[i]
        //     if(p < offset){
        //       break
        //     }
        //     ret = offset
        //   }
        //   return ret
        // }
        "step-start": h(1, "start"),
        "step-end": h(1, "end")
      };
      function X(V) {
        return typeof V == "string" ? p[V] ? V = p[V] : V = S(V) : V.type === "cubic-bezier" ? V = I.apply(void 0, (0, u.default)(V.value)) : V.type === "steps" && (V = h(V.step, V.pos)), V;
      }
      d.Easings = p, d.parseEasing = X;
    },
    /* 189 */
    /***/
    function(Z, d) {
      var l = 4, s = 1e-3, c = 1e-7, o = 10, u = 11, e = 1 / (u - 1), n = typeof Float32Array == "function";
      function G(V, i) {
        return 1 - 3 * i + 3 * V;
      }
      function y(V, i) {
        return 3 * i - 6 * V;
      }
      function a(V) {
        return 3 * V;
      }
      function I(V, i, b) {
        return ((G(i, b) * V + y(i, b)) * V + a(i)) * V;
      }
      function h(V, i, b) {
        return 3 * G(i, b) * V * V + 2 * y(i, b) * V + a(i);
      }
      function S(V, i, b, t, m) {
        var K, x, C = 0;
        do
          x = i + (b - i) / 2, K = I(x, t, m) - V, K > 0 ? b = x : i = x;
        while (Math.abs(K) > c && ++C < o);
        return x;
      }
      function p(V, i, b, t) {
        for (var m = 0; m < l; ++m) {
          var K = h(i, b, t);
          if (K === 0)
            return i;
          var x = I(i, b, t) - V;
          i -= x / K;
        }
        return i;
      }
      function X(V) {
        return V;
      }
      Z.exports = function(i, b, t, m) {
        if (!(0 <= i && i <= 1 && 0 <= t && t <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (i === b && t === m)
          return X;
        for (var K = n ? new Float32Array(u) : new Array(u), x = 0; x < u; ++x)
          K[x] = I(x * e, i, t);
        function C(T) {
          for (var R = 0, J = 1, F = u - 1; J !== F && K[J] <= T; ++J)
            R += e;
          --J;
          var r = (T - K[J]) / (K[J + 1] - K[J]), Y = R + r * e, H = h(Y, i, t);
          return H >= s ? p(T, Y, i, t) : H === 0 ? Y : S(T, R, R + e, i, t);
        }
        return function(R) {
          return R === 0 ? 0 : R === 1 ? 1 : I(C(R), b, m);
        };
      };
    },
    /* 190 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      });
      var s = l(191), c = b(s), o = l(204), u = b(o), e = l(164), n = b(e), G = l(170), y = b(G), a = l(171), I = b(a), h = l(175), S = b(h), p = l(75), X = b(p), V = l(208), i = l(188);
      function b(H) {
        return H && H.__esModule ? H : { default: H };
      }
      var t = (0, S.default)("timing"), m = (0, S.default)("keyframes"), K = (0, S.default)("initState"), x = (0, S.default)("readyDefer"), C = (0, S.default)("finishedDefer"), T = (0, S.default)("effects"), R = (0, S.default)("activeReadyTimer"), J = (0, S.default)("activeFinishTimer"), F = (0, S.default)("removeDefer"), r = {
        delay: 0,
        endDelay: 0,
        fill: "auto",
        iterations: 1,
        playbackRate: 1,
        direction: "normal",
        easing: "linear",
        effect: null
      }, Y = function() {
        function H(Q, w, O) {
          var q = this;
          if ((0, y.default)(this, H), Array.isArray(Q)) {
            var k = [Q[0], Q, w];
            Q = k[0], w = k[1], O = k[2];
          }
          typeof O == "number" && (O = { duration: O }), this[t] = (0, n.default)({}, r, O), this[t].easing = (0, i.parseEasing)(this[t].easing), this[m] = (0, V.calculateFramesOffset)(w);
          var P = this[m][this[m].length - 1];
          this[K] = {}, (0, u.default)(P).forEach(function(D) {
            Object.prototype.hasOwnProperty.call(Q, D) && D !== "easing" && D !== "offset" && (q[K][D] = Q[D]);
          }), this[m] = this[m].map(function(D) {
            return (0, n.default)({}, q[K], D);
          }), this[m][0].offset !== 0 && this[m].unshift((0, n.default)({}, this[K], { offset: 0 })), P.offset < 1 && this[m].push((0, n.default)({}, P, { offset: 1 })), this[T] = {}, this.timeline = null;
        }
        return (0, I.default)(H, [{
          key: "pause",
          value: function() {
            this.timeline.playbackRate = 0;
          }
        }, {
          key: R,
          value: function() {
            var w = this;
            this[x] && !this[x].timerID && (this.timeline.currentTime < 0 ? this[x].timerID = this.timeline.setTimeout(function() {
              w[x].resolve(), delete w[x];
            }, { delay: -this.timeline.currentTime, heading: !1 }) : this[x].timerID = this.timeline.setTimeout(function() {
              w[x].resolve(), delete w[x];
            }, { delay: 0, isEntropy: !0 }));
          }
        }, {
          key: J,
          value: function() {
            var w = this, O = this[t], q = O.duration, k = O.iterations, P = O.endDelay, D = Math.ceil(q * k + P - this.timeline.currentTime) + 1;
            this[C] && !this[C].timerID && (this[C].timerID = this.timeline.setTimeout(function() {
              w[C].resolve(), w[F](x), w[F](C);
            }, { delay: D, heading: !1 }), this[C].reverseTimerID = this.timeline.setTimeout(function() {
              w[C].resolve(), w[F](x), w[F](C), w.timeline = null;
            }, { delay: -this[t].delay - 1, heading: !1 }));
          }
        }, {
          key: "play",
          value: function() {
            if (this.playState === "finished" && this.cancel(), this.playState === "idle") {
              if (this.playbackRate <= 0)
                return;
              var w = this[t], O = w.delay, q = w.playbackRate, k = w.timeline;
              this.timeline = new X.default({
                originTime: O,
                playbackRate: q
              }, k), this[R](), this[J]();
            } else
              this.playState === "paused" && (this.timeline.playbackRate = this.playbackRate, this[R]());
          }
        }, {
          key: F,
          value: function(w) {
            var O = this[w], q = this.timeline;
            O && q && (q.clearTimeout(O.timerID), O.reverseTimerID && q.clearTimeout(O.reverseTimerID)), delete this[w];
          }
        }, {
          key: "cancel",
          value: function() {
            this[F](x), this[F](C), this.timeline = null;
          }
        }, {
          key: "finish",
          value: function() {
            this.timeline && (this.timeline.currentTime = 1 / 0 / this.playbackRate), this[F](x), this[F](C);
          }
        }, {
          key: "applyEffects",
          value: function(w) {
            return (0, n.default)(this[T], w);
          }
        }, {
          key: "playbackRate",
          get: function() {
            return this[t].playbackRate;
          },
          set: function(w) {
            this.timeline && (this.timeline.playbackRate = w), this[t].playbackRate = w;
          }
        }, {
          key: "playState",
          get: function() {
            var w = this.timeline, O = this[t], q = O.iterations, k = O.duration, P = O.endDelay, D = "running";
            if (w == null)
              D = "idle";
            else if (w.paused)
              D = "paused";
            else if (w.currentTime < 0)
              D = "pending";
            else {
              var ll = w.currentTime - q * k;
              ll > 0 && ll < P ? D = "pending" : ll >= P && (D = "finished");
            }
            return D;
          }
        }, {
          key: "progress",
          get: function() {
            if (!this.timeline)
              return 0;
            var w = this[t], O = w.duration, q = w.iterations, k = this.timeline, P = this.playState, D = void 0;
            if (P === "idle")
              D = 0;
            else if (P === "paused" && k.currentTime < 0)
              D = 0;
            else if (P === "pending")
              if (k.currentTime < 0)
                D = 0;
              else {
                var ll = k.seekLocalTime(q * O);
                D = (0, V.periodicity)(ll, O)[1] / O;
              }
            else
              (P === "running" || P === "paused") && (D = (0, V.periodicity)(k.currentTime, O)[1] / O);
            return P === "finished" && (D = (0, V.periodicity)(q, 1)[1]), D;
          }
        }, {
          key: "frame",
          get: function() {
            var w = this.playState, O = this[K], q = this[t].fill;
            if (w === "idle")
              return O;
            var k = this.timeline.currentTime, P = this[m].slice(0), D = (0, V.getProgress)(this.timeline, this[t], this.progress), ll = D.p, _ = D.inverted, bl = O;
            return k < 0 && w === "pending" ? (q === "backwards" || q === "both") && (bl = _ ? P[P.length - 1] : P[0]) : (w !== "pending" && w !== "finished" || q === "forwards" || q === "both") && (bl = (0, V.getCurrentFrame)(this[t], P, this[T], ll)), bl;
          }
        }, {
          key: "timing",
          get: function() {
            return this[t];
          }
        }, {
          key: "effects",
          get: function() {
            return this[T];
          }
        }, {
          key: "baseTimeline",
          set: function(w) {
            this[t].timeline = w;
          },
          get: function() {
            return this[t].timeline;
          }
        }, {
          key: "ready",
          get: function() {
            return this[x] ? this[x].promise : this.timeline && this.timeline.currentTime >= 0 && this.playState !== "paused" ? c.default.resolve() : (this[x] = (0, V.defer)(), this.timeline && this[R](), this[x] ? this[x].promise : c.default.resolve());
          }
        }, {
          key: "finished",
          get: function() {
            return this.playState === "finished" ? c.default.resolve() : (this[C] || (this[C] = (0, V.defer)(), this.timeline && this[J]()), this[C].promise);
          }
        }]), H;
      }();
      d.default = Y;
    },
    /* 191 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(192), __esModule: !0 };
    },
    /* 192 */
    /***/
    function(Z, d, l) {
      l(143), l(125), l(79), l(193), l(202), l(203), Z.exports = l(92).Promise;
    },
    /* 193 */
    /***/
    function(Z, d, l) {
      var s = l(89), c = l(91), o = l(93), u = l(128), e = l(90), n = l(98), G = l(94), y = l(147), a = l(148), I = l(194), h = l(195).set, S = l(197)(), p = l(198), X = l(199), V = l(200), i = l(201), b = "Promise", t = c.TypeError, m = c.process, K = m && m.versions, x = K && K.v8 || "", C = c[b], T = u(m) == "process", R = function() {
      }, J, F, r, Y, H = F = p.f, Q = !!function() {
        try {
          var _ = C.resolve(1), bl = (_.constructor = {})[l(122)("species")] = function($) {
            $(R, R);
          };
          return (T || typeof PromiseRejectionEvent == "function") && _.then(R) instanceof bl && x.indexOf("6.6") !== 0 && V.indexOf("Chrome/66") === -1;
        } catch {
        }
      }(), w = function(_) {
        var bl;
        return n(_) && typeof (bl = _.then) == "function" ? bl : !1;
      }, O = function(_, bl) {
        if (!_._n) {
          _._n = !0;
          var $ = _._c;
          S(function() {
            for (var el = _._v, nl = _._s == 1, z = 0, M = function(E) {
              var B = nl ? E.ok : E.fail, g = E.resolve, U = E.reject, W = E.domain, L, N, v;
              try {
                B ? (nl || (_._h == 2 && P(_), _._h = 1), B === !0 ? L = el : (W && W.enter(), L = B(el), W && (W.exit(), v = !0)), L === E.promise ? U(t("Promise-chain cycle")) : (N = w(L)) ? N.call(L, g, U) : g(L)) : U(el);
              } catch (f) {
                W && !v && W.exit(), U(f);
              }
            }; $.length > z; )
              M($[z++]);
            _._c = [], _._n = !1, bl && !_._h && q(_);
          });
        }
      }, q = function(_) {
        h.call(c, function() {
          var bl = _._v, $ = k(_), el, nl, z;
          if ($ && (el = X(function() {
            T ? m.emit("unhandledRejection", bl, _) : (nl = c.onunhandledrejection) ? nl({ promise: _, reason: bl }) : (z = c.console) && z.error && z.error("Unhandled promise rejection", bl);
          }), _._h = T || k(_) ? 2 : 1), _._a = void 0, $ && el.e)
            throw el.v;
        });
      }, k = function(_) {
        return _._h !== 1 && (_._a || _._c).length === 0;
      }, P = function(_) {
        h.call(c, function() {
          var bl;
          T ? m.emit("rejectionHandled", _) : (bl = c.onrejectionhandled) && bl({ promise: _, reason: _._v });
        });
      }, D = function(_) {
        var bl = this;
        bl._d || (bl._d = !0, bl = bl._w || bl, bl._v = _, bl._s = 2, bl._a || (bl._a = bl._c.slice()), O(bl, !0));
      }, ll = function(_) {
        var bl = this, $;
        if (!bl._d) {
          bl._d = !0, bl = bl._w || bl;
          try {
            if (bl === _)
              throw t("Promise can't be resolved itself");
            ($ = w(_)) ? S(function() {
              var el = { _w: bl, _d: !1 };
              try {
                $.call(_, o(ll, el, 1), o(D, el, 1));
              } catch (nl) {
                D.call(el, nl);
              }
            }) : (bl._v = _, bl._s = 1, O(bl, !1));
          } catch (el) {
            D.call({ _w: bl, _d: !1 }, el);
          }
        }
      };
      Q || (C = function(bl) {
        y(this, C, b, "_h"), G(bl), J.call(this);
        try {
          bl(o(ll, this, 1), o(D, this, 1));
        } catch ($) {
          D.call(this, $);
        }
      }, J = function(bl) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
      }, J.prototype = l(146)(C.prototype, {
        // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
        then: function(bl, $) {
          var el = H(I(this, C));
          return el.ok = typeof bl == "function" ? bl : !0, el.fail = typeof $ == "function" && $, el.domain = T ? m.domain : void 0, this._c.push(el), this._a && this._a.push(el), this._s && O(this, !1), el.promise;
        },
        // 25.4.5.1 Promise.prototype.catch(onRejected)
        catch: function(_) {
          return this.then(void 0, _);
        }
      }), r = function() {
        var _ = new J();
        this.promise = _, this.resolve = o(ll, _, 1), this.reject = o(D, _, 1);
      }, p.f = H = function(_) {
        return _ === C || _ === Y ? new r(_) : F(_);
      }), e(e.G + e.W + e.F * !Q, { Promise: C }), l(121)(C, b), l(149)(b), Y = l(92)[b], e(e.S + e.F * !Q, b, {
        // 25.4.4.5 Promise.reject(r)
        reject: function(bl) {
          var $ = H(this), el = $.reject;
          return el(bl), $.promise;
        }
      }), e(e.S + e.F * (s || !Q), b, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function(bl) {
          return i(s && this === Y ? C : this, bl);
        }
      }), e(e.S + e.F * !(Q && l(140)(function(_) {
        C.all(_).catch(R);
      })), b, {
        // 25.4.4.1 Promise.all(iterable)
        all: function(bl) {
          var $ = this, el = H($), nl = el.resolve, z = el.reject, M = X(function() {
            var E = [], B = 0, g = 1;
            a(bl, !1, function(U) {
              var W = B++, L = !1;
              E.push(void 0), g++, $.resolve(U).then(function(N) {
                L || (L = !0, E[W] = N, --g || nl(E));
              }, z);
            }), --g || nl(E);
          });
          return M.e && z(M.v), el.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function(bl) {
          var $ = this, el = H($), nl = el.reject, z = X(function() {
            a(bl, !1, function(M) {
              $.resolve(M).then(el.resolve, nl);
            });
          });
          return z.e && nl(z.v), el.promise;
        }
      });
    },
    /* 194 */
    /***/
    function(Z, d, l) {
      var s = l(97), c = l(94), o = l(122)("species");
      Z.exports = function(u, e) {
        var n = s(u).constructor, G;
        return n === void 0 || (G = s(n)[o]) == null ? e : c(G);
      };
    },
    /* 195 */
    /***/
    function(Z, d, l) {
      var s = l(93), c = l(196), o = l(120), u = l(102), e = l(91), n = e.process, G = e.setImmediate, y = e.clearImmediate, a = e.MessageChannel, I = e.Dispatch, h = 0, S = {}, p = "onreadystatechange", X, V, i, b = function() {
        var m = +this;
        if (S.hasOwnProperty(m)) {
          var K = S[m];
          delete S[m], K();
        }
      }, t = function(m) {
        b.call(m.data);
      };
      (!G || !y) && (G = function(K) {
        for (var x = [], C = 1; arguments.length > C; )
          x.push(arguments[C++]);
        return S[++h] = function() {
          c(typeof K == "function" ? K : Function(K), x);
        }, X(h), h;
      }, y = function(K) {
        delete S[K];
      }, l(86)(n) == "process" ? X = function(m) {
        n.nextTick(s(b, m, 1));
      } : I && I.now ? X = function(m) {
        I.now(s(b, m, 1));
      } : a ? (V = new a(), i = V.port2, V.port1.onmessage = t, X = s(i.postMessage, i, 1)) : e.addEventListener && typeof postMessage == "function" && !e.importScripts ? (X = function(m) {
        e.postMessage(m + "", "*");
      }, e.addEventListener("message", t, !1)) : p in u("script") ? X = function(m) {
        o.appendChild(u("script"))[p] = function() {
          o.removeChild(this), b.call(m);
        };
      } : X = function(m) {
        setTimeout(s(b, m, 1), 0);
      }), Z.exports = {
        set: G,
        clear: y
      };
    },
    /* 196 */
    /***/
    function(Z, d) {
      Z.exports = function(l, s, c) {
        var o = c === void 0;
        switch (s.length) {
          case 0:
            return o ? l() : l.call(c);
          case 1:
            return o ? l(s[0]) : l.call(c, s[0]);
          case 2:
            return o ? l(s[0], s[1]) : l.call(c, s[0], s[1]);
          case 3:
            return o ? l(s[0], s[1], s[2]) : l.call(c, s[0], s[1], s[2]);
          case 4:
            return o ? l(s[0], s[1], s[2], s[3]) : l.call(c, s[0], s[1], s[2], s[3]);
        }
        return l.apply(c, s);
      };
    },
    /* 197 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = l(195).set, o = s.MutationObserver || s.WebKitMutationObserver, u = s.process, e = s.Promise, n = l(86)(u) == "process";
      Z.exports = function() {
        var G, y, a, I = function() {
          var X, V;
          for (n && (X = u.domain) && X.exit(); G; ) {
            V = G.fn, G = G.next;
            try {
              V();
            } catch (i) {
              throw G ? a() : y = void 0, i;
            }
          }
          y = void 0, X && X.enter();
        };
        if (n)
          a = function() {
            u.nextTick(I);
          };
        else if (o && !(s.navigator && s.navigator.standalone)) {
          var h = !0, S = document.createTextNode("");
          new o(I).observe(S, { characterData: !0 }), a = function() {
            S.data = h = !h;
          };
        } else if (e && e.resolve) {
          var p = e.resolve(void 0);
          a = function() {
            p.then(I);
          };
        } else
          a = function() {
            c.call(s, I);
          };
        return function(X) {
          var V = { fn: X, next: void 0 };
          y && (y.next = V), G || (G = V, a()), y = V;
        };
      };
    },
    /* 198 */
    /***/
    function(Z, d, l) {
      var s = l(94);
      function c(o) {
        var u, e;
        this.promise = new o(function(n, G) {
          if (u !== void 0 || e !== void 0)
            throw TypeError("Bad Promise constructor");
          u = n, e = G;
        }), this.resolve = s(u), this.reject = s(e);
      }
      Z.exports.f = function(o) {
        return new c(o);
      };
    },
    /* 199 */
    /***/
    function(Z, d) {
      Z.exports = function(l) {
        try {
          return { e: !1, v: l() };
        } catch (s) {
          return { e: !0, v: s };
        }
      };
    },
    /* 200 */
    /***/
    function(Z, d, l) {
      var s = l(91), c = s.navigator;
      Z.exports = c && c.userAgent || "";
    },
    /* 201 */
    /***/
    function(Z, d, l) {
      var s = l(97), c = l(98), o = l(198);
      Z.exports = function(u, e) {
        if (s(u), c(e) && e.constructor === u)
          return e;
        var n = o.f(u), G = n.resolve;
        return G(e), n.promise;
      };
    },
    /* 202 */
    /***/
    function(Z, d, l) {
      var s = l(90), c = l(92), o = l(91), u = l(194), e = l(201);
      s(s.P + s.R, "Promise", { finally: function(n) {
        var G = u(this, c.Promise || o.Promise), y = typeof n == "function";
        return this.then(
          y ? function(a) {
            return e(G, n()).then(function() {
              return a;
            });
          } : n,
          y ? function(a) {
            return e(G, n()).then(function() {
              throw a;
            });
          } : n
        );
      } });
    },
    /* 203 */
    /***/
    function(Z, d, l) {
      var s = l(90), c = l(198), o = l(199);
      s(s.S, "Promise", { try: function(u) {
        var e = c.f(this), n = o(u);
        return (n.e ? e.reject : e.resolve)(n.v), e.promise;
      } });
    },
    /* 204 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(205), __esModule: !0 };
    },
    /* 205 */
    /***/
    function(Z, d, l) {
      l(206), Z.exports = l(92).Object.keys;
    },
    /* 206 */
    /***/
    function(Z, d, l) {
      var s = l(124), c = l(110);
      l(207)("keys", function() {
        return function(u) {
          return c(s(u));
        };
      });
    },
    /* 207 */
    /***/
    function(Z, d, l) {
      var s = l(90), c = l(92), o = l(101);
      Z.exports = function(u, e) {
        var n = (c.Object || {})[u] || Object[u], G = {};
        G[u] = e(n), s(s.S + s.F * o(function() {
          n(1);
        }), "Object", G);
      };
    },
    /* 208 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", {
        value: !0
      });
      var s = l(76), c = S(s), o = l(209), u = S(o), e = l(164), n = S(e), G = l(191), y = S(G);
      d.defer = p, d.periodicity = X, d.calculateFramesOffset = V, d.getProgress = i, d.getCurrentFrame = t;
      var a = l(188), I = l(187), h = S(I);
      function S(m) {
        return m && m.__esModule ? m : { default: m };
      }
      function p() {
        var m = {};
        return m.promise = new y.default(function(K, x) {
          m.resolve = K, m.reject = x;
        }), m;
      }
      function X(m, K) {
        var x = Math.floor(m / K), C = m - x * K;
        return C === 0 && x > 0 && (C = K, x--), [x, C];
      }
      function V(m) {
        m = m.slice(0);
        var K = m[0], x = m[m.length - 1];
        x.offset = x.offset || 1, K.offset = K.offset || 0;
        for (var C = 0, T = -1, R = 0; R < m.length; R++) {
          var J = m[R];
          if (J.offset != null) {
            var F = R - T;
            if (F > 1)
              for (var r = (J.offset - C) / F, Y = 0; Y < F - 1; Y++)
                m[T + Y + 1].offset = C + r * (Y + 1);
            C = J.offset, T = R;
          }
          if (J.easing != null && (J.easing = (0, a.parseEasing)(J.easing)), R > 0) {
            var H = m[R].easing != null;
            m[R] = (0, n.default)({}, m[R - 1], m[R]), H || delete m[R].easing;
          }
        }
        return m;
      }
      function i(m, K, x) {
        var C = m.currentTime, T = K.direction, R = K.duration, J = !1;
        if (T === "reverse")
          x = 1 - x, J = !0;
        else if (T === "alternate" || T === "alternate-reverse") {
          var F = Math.floor(C / R);
          x === 1 && F--, F % 2 ^ T === "alternate-reverse" && (x = 1 - x, J = !0);
        }
        return { p: x, inverted: J };
      }
      function b(m, K, x, C) {
        var T = {};
        return (0, u.default)(K).forEach(function(R) {
          var J = (0, c.default)(R, 2), F = J[0], r = J[1];
          if (F !== "offset" && F !== "easing") {
            var Y = x[F] || x.default, H = Y(m[F], r, C, m.offset, K.offset);
            H != null && (T[F] = H);
          }
        }), T;
      }
      function t(m, K, x, C) {
        var T = m.easing, R = m.effect;
        R || (x = (0, n.default)({}, h.default, x));
        var J = {};
        C = T(C, K);
        for (var F = 1; F < K.length; F++) {
          var r = K[F], Y = r.offset;
          if (Y >= C || F === K.length - 1) {
            var H = K[F - 1], Q = H.offset, w = H.easing, O = C;
            if (w) {
              var q = Y - Q;
              O = w((C - Q) / q) * q + Q;
            }
            R ? J = R(H, r, O, Q, Y) : J = b(H, r, x, O);
            break;
          }
        }
        return J;
      }
    },
    /* 209 */
    /***/
    function(Z, d, l) {
      Z.exports = { default: l(210), __esModule: !0 };
    },
    /* 210 */
    /***/
    function(Z, d, l) {
      l(211), Z.exports = l(92).Object.entries;
    },
    /* 211 */
    /***/
    function(Z, d, l) {
      var s = l(90), c = l(212)(!0);
      s(s.S, "Object", {
        entries: function(u) {
          return c(u);
        }
      });
    },
    /* 212 */
    /***/
    function(Z, d, l) {
      var s = l(100), c = l(110), o = l(84), u = l(169).f;
      Z.exports = function(e) {
        return function(n) {
          for (var G = o(n), y = c(G), a = y.length, I = 0, h = [], S; a > I; )
            S = y[I++], (!s || u.call(G, S)) && h.push(e ? [S, G[S]] : G[S]);
          return h;
        };
      };
    },
    /* 213 */
    /***/
    function(Z, d, l) {
      l.r(d), l(1).glMatrix.setMatrixArrayType(Array);
      const s = /* @__PURE__ */ new Map();
      function c(u, e = {}, n = []) {
        u = u.toLowerCase();
        const G = s.get(u);
        if (!G)
          throw new TypeError(`Invalid node: ${u}`);
        const y = new G(e);
        return n.forEach((a) => {
          y.appendChild(a);
        }), y;
      }
      const o = {
        registerNode(u, e, n = 100) {
          if (e = e.toLowerCase(), s.has(e))
            throw new TypeError(`Cannot registerNode, ${e} has been taken.`);
          s.set(e, u), Object.defineProperties(u.prototype, {
            nodeType: {
              value: n
            },
            tagName: {
              value: e.toUpperCase()
            },
            nodeName: {
              value: e
            },
            ownerDocument: {
              value: o
            },
            namespaceURI: {
              value: `http://spritejs.com/${e}`
            }
          });
        },
        createElement: c,
        createElementNS(u, e) {
          return c(e);
        },
        isSpriteNode(u) {
          return s.has(u.toLowerCase());
        }
      };
      d.default = o;
    },
    /* 214 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      const s = Symbol("type"), c = Symbol("bubbles"), o = Symbol("originalEvent"), u = Symbol("detail");
      class e {
        constructor(G, {
          bubbles: y = null
        } = {}) {
          if (typeof G == "string" ? (this[s] = G, this[c] = !!y) : (this[s] = G.type, this[o] = G, this[c] = y != null ? !!y : !!G.bubbles, G.detail && (this[u] = G.detail)), !this[s])
            throw new TypeError("Invalid event type.");
          this.cancelBubble = !1;
        }
        setOriginalEvent(G) {
          this[o] = G;
        }
        get originalEvent() {
          return this[o];
        }
        get type() {
          return this[s];
        }
        get bubbles() {
          return this[c];
        }
        get detail() {
          return this[u];
        }
        stopPropagation() {
          this.cancelBubble = !0;
        }
      }
    },
    /* 215 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "parseFilterString", function() {
        return c;
      }), l.d(d, "applyFilters", function() {
        return o;
      });
      var s = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(u) {
        if (u = u.trim(), !u || u === "none")
          return null;
        const e = /^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+$/i, n = u.match(/(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+?/ig), G = [];
        return n && n.forEach((y) => {
          const a = y.match(e);
          if (!a)
            throw new TypeError("Invalid fitler string.");
          let [, I, h] = a;
          I = I.toLowerCase(), h = h.trim().match(/([^( )]+|([^( )]+\(.*\)))(?=\s|$)/g).map((S, p) => {
            let X;
            return I === "url" || I === "drop-shadow" && p === 3 ? X = S : X = Object(s.toNumber)(S), /%$/.test(S) && (X /= 100), X;
          }), G.push({
            type: I,
            args: h
          });
        }), G;
      }
      function o(u, e) {
        u.clearFilter(), e && e.forEach(({
          type: n,
          args: G
        }) => {
          let y = n;
          y === "drop-shadow" ? y = "dropShadow" : y === "hue-rotate" && (y = "hueRotate"), u[y](...G);
        });
      }
    },
    /* 216 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return s;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(c, o) {
        if (!o)
          return;
        const u = c.getListeners("beforerender"), e = c.getListeners("afterrender");
        u.length && !o.beforeRender ? o.beforeRender = (n) => {
          c.dispatchEvent({
            type: "beforerender",
            detail: {
              context: n
            }
          });
        } : u.length || (o.beforeRender = null), e.length && !o.afterRender ? o.afterRender = (n) => {
          c.dispatchEvent({
            type: "afterrender",
            detail: {
              context: n
            }
          });
        } : e.length || (o.afterRender = null);
      }
    },
    /* 217 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(12), c = l(218), o = l(70), u = l(213);
      l(1).glMatrix.setMatrixArrayType(Array);
      const e = Symbol("amount"), n = Symbol("meshCloud");
      class G extends o.default {
        constructor(a, I = 1) {
          super(), this.meshNode = a, a.connect(this), this[e] = I, this[n] = null;
        }
        get meshCloud() {
          const a = this.meshNode, I = this[e];
          return !this[n] && a.mesh && (this[n] = new s.MeshCloud(a.mesh, I)), this[n];
        }
        /* override */
        get isVisible() {
          return !!this.meshNode && this.meshNode.isVisible;
        }
        get amount() {
          return this[e];
        }
        set amount(a) {
          this[e] = a, this[n] && (this[n].amount = a);
        }
        brightness(a, I) {
          this.meshCloud && (this.meshCloud.brightness(a, I), this.forceUpdate());
        }
        contrast(a, I) {
          this.meshCloud && (this.meshCloud.contrast(a, I), this.forceUpdate());
        }
        delete(a) {
          this.meshCloud && (this.meshCloud.delete(a), this[e]--, this.forceUpdate());
        }
        /* override */
        draw(a = []) {
          if (super.draw(a), this.meshCloud) {
            if (this.program) {
              this.meshCloud.setProgram(this.program);
              const I = this.shaderAttrs;
              I && Object.entries(I).forEach(([S, p]) => {
                this.meshCloud.mesh.setAttribute(S, p);
              });
              const h = this.uniforms;
              if (this.uniforms) {
                const S = {};
                Object.entries(h).forEach(([p, X]) => {
                  typeof X == "function" && (X = X(this, p)), S[p] = X;
                }), this.meshCloud.mesh.setUniforms(S);
              }
            }
            this.meshNode.textureImage && Object(c.drawTexture)(this.meshNode, this.meshNode.mesh), a.push(this.meshCloud);
          }
          return a;
        }
        getTransform(a) {
          if (this.meshCloud)
            return this.meshCloud.getTransform(a);
        }
        grayscale(a, I) {
          this.meshCloud && (this.meshCloud.grayscale(a, I), this.forceUpdate());
        }
        hueRotate(a, I) {
          this.meshCloud && (this.meshCloud.hueRotate(a, I), this.forceUpdate());
        }
        invert(a, I) {
          this.meshCloud && (this.meshCloud.invert(a, I), this.forceUpdate());
        }
        /* override */
        isPointCollision(a, I) {
          if (!this.meshCloud)
            return !1;
          const h = this.attributes.pointerEvents;
          if (h === "none" || h !== "all" && !this.isVisible)
            return !1;
          let S = "both";
          h === "visibleFill" && (S = "fill"), h === "visibleStroke" && (S = "stroke");
          for (let p = 0; p < this[e]; p++)
            if (!this.meshCloud.isPointCollision(p, [a, I], S))
              return !1;
          return !0;
        }
        setOpacity(a, I) {
          this.meshCloud && (this.meshCloud.opacity(a, I), this.forceUpdate());
        }
        rotate(a, I, [h, S] = [0, 0]) {
          const p = Math.PI * I / 180;
          if (this.meshCloud) {
            const {
              x: X,
              y: V
            } = this.meshNode.attributes;
            this.meshCloud.rotate(a, p, [h + X, S + V]), this.forceUpdate();
          }
        }
        saturate(a, I) {
          this.meshCloud && (this.meshCloud.saturate(a, I), this.forceUpdate());
        }
        scale(a, [I, h = I], [S, p] = [0, 0]) {
          if (this.meshCloud) {
            const {
              x: X,
              y: V
            } = this.meshNode.attributes, i = 1e-5;
            Math.abs(I) < i && (I = 1 / I > 0 ? i : -i), Math.abs(h) < i && (h = 1 / h > 0 ? i : -i), this.meshCloud.scale(a, [I, h], [S + X, p + V]), this.forceUpdate();
          }
        }
        setColorTransform(a, I) {
          this.meshCloud && (this.meshCloud.setColorTransform(a, I), this.forceUpdate());
        }
        setFillColor(a, I) {
          this.meshCloud && (Array.isArray(I) && (I = [...I], I[0] /= 255, I[1] /= 255, I[2] /= 255), this.meshCloud.setFillColor(a, I), this.forceUpdate());
        }
        sepia(a, I) {
          this.meshCloud && (this.meshCloud.sepia(a, I), this.forceUpdate());
        }
        /* override */
        setResolution({
          width: a,
          height: I
        }) {
          super.setResolution({
            width: a,
            height: I
          }), this.meshNode.setResolution({
            width: a,
            height: I
          });
        }
        setStrokeColor(a, I) {
          this.meshCloud && (Array.isArray(I) && (I = [...I], I[0] /= 255, I[1] /= 255, I[2] /= 255), this.meshCloud.setStrokeColor(a, I), this.forceUpdate());
        }
        setTransform(a, I) {
          this.meshCloud && (this.meshCloud.setTransform(a, I), this.forceUpdate());
        }
        skew(a, [I, h = I], [S, p] = [0, 0]) {
          if (this.meshCloud) {
            const {
              x: X,
              y: V
            } = this.meshNode.attributes;
            this.meshCloud.skew(a, [I, h], [S + X, p + V]), this.forceUpdate();
          }
        }
        transform(a, I) {
          this.meshCloud && (this.meshCloud.transform(a, I), this.forceUpdate());
        }
        transformColor(a, I) {
          this.meshCloud && (this.meshCloud.transformColor(a, I), this.forceUpdate());
        }
        translate(a, [I, h]) {
          this.meshCloud && (this.meshCloud.translate(a, [I, h]), this.forceUpdate());
        }
        updateMesh() {
          this[n] && (this[n].mesh = this.meshNode.mesh, this.forceUpdate());
        }
      }
      u.default.registerNode(G, "cloud");
    },
    /* 218 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "loadTexture", function() {
        return u;
      }), l.d(d, "applyTexture", function() {
        return e;
      }), l.d(d, "createTexture", function() {
        return G;
      }), l.d(d, "deleteTexture", function() {
        return y;
      }), l.d(d, "drawTexture", function() {
        return I;
      }), l.d(d, "loadFrames", function() {
        return h;
      });
      var s = l(12), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = {};
      function u(S, p) {
        if (o[S])
          return o[S];
        const X = s.ENV.loadImage(S, {
          alias: p,
          useImageBitmap: !1
        });
        return X ?? S;
      }
      async function e(S, p, X) {
        let V = p;
        if (typeof p == "string" && (V = u(p)), V && typeof V.then == "function" && (V = await V), p === S.attributes.texture) {
          V && V.image && (V.sourceRect && (S.attributes.sourceRect = V.sourceRect), S.textureImageRotated = !!V.rotated, V = V.image);
          const {
            width: i,
            height: b,
            textureRect: t
          } = S.attributes, m = S.textureImage;
          S.textureImage = V, X && m !== V && !t && (i == null || b == null) && S.updateContours(), S.forceUpdate();
        }
        return V;
      }
      const n = Symbol("textureMap");
      function G(S, p) {
        if (p[n] = p[n] || /* @__PURE__ */ new Map(), p[n].has(S))
          return p[n].get(S);
        const X = p.createTexture(S);
        return !/^blob:/.test(S.src) && typeof S.getContext != "function" && p[n].set(S, X), X;
      }
      function y(S, p) {
        if (p[n] && p[n].has(S)) {
          const X = p[n].get(S);
          return p.deleteTexture(X), p[n].delete(S), !0;
        }
        return !1;
      }
      const a = Symbol("textureContext");
      function I(S, p) {
        const X = S.textureImage instanceof String ? String(S.textureImage) : S.textureImage, V = S.textureImageRotated, i = p.texture, b = S.renderer;
        if (X) {
          const t = S.originalContentRect;
          let m = S.attributes.textureRect;
          const K = S.attributes.textureRepeat, x = S.attributes.sourceRect;
          if (!i || S[a] && S[a] !== b || i.image !== X || i.options.repeat !== K || !Object(c.compareValue)(i.options.rect, m) || !Object(c.compareValue)(i.options.srcRect, x)) {
            const C = G(X, b);
            m ? (m[0] += t[0], m[1] += t[1]) : m = t;
            let T = null;
            i && !b[n].has(i.image) && (!i.options || !i.options.hidden) && (T = p.uniforms.u_texSampler), p.setTexture(C, {
              rect: m,
              repeat: K,
              srcRect: x,
              rotated: V
            }), T && T.delete && T.delete(), S[a] = b;
          }
        } else if (i) {
          let t = null;
          !b[n].has(i.image) && (!i.options || !i.options.hidden) && (t = p.uniforms.u_texSampler), p.setTexture(null), t && t.delete && t.delete();
        }
      }
      async function h(S, p) {
        typeof p == "string" && (p = await (await fetch(p, {
          method: "GET",
          mode: "cors",
          cache: "default"
        })).json());
        const X = await u(S), V = p.frames;
        return Object.entries(V).forEach(([i, b]) => {
          const {
            x: t,
            y: m,
            w: K,
            h: x
          } = b.frame;
          let C = [t, m, K, x];
          const T = b.rotated;
          T && (C = [C[0], C[1], C[3], C[2]]), o[i] = {
            image: X,
            sourceRect: C,
            rotated: T
          };
        }), X;
      }
    },
    /* 219 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return h;
      });
      var s = l(1), c = l(12), o = l(70), u = l(220), e = l(221), n = l(222), G = l(213), y = l(223);
      l(1).glMatrix.setMatrixArrayType(Array);
      function a(S, p, X) {
        return p in S ? Object.defineProperty(S, p, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : S[p] = X, S;
      }
      const I = Symbol("mesh");
      class h extends o.default {
        constructor(p = {}) {
          super(p);
        }
        get borderSize() {
          const {
            paddingTop: p,
            paddingRight: X,
            paddingBottom: V,
            paddingLeft: i,
            borderWidth: b
          } = this.attributes, [t, m] = this.contentSize;
          return [i + t + X + b, p + m + V + b];
        }
        // content + padding
        get clientSize() {
          const {
            paddingTop: p,
            paddingRight: X,
            paddingBottom: V,
            paddingLeft: i
          } = this.attributes, [b, t] = this.contentSize;
          return [i + b + X, p + t + V];
        }
        get contentSize() {
          let {
            width: p,
            height: X,
            boxSizing: V,
            paddingTop: i,
            paddingRight: b,
            paddingBottom: t,
            paddingLeft: m
          } = this.attributes;
          if (p = p || 0, X = X || 0, V === "border-box") {
            const K = 2 * this.attributes.borderWidth;
            p -= K + b + m, X -= K + i + t, p = Math.max(0, p), X = Math.max(0, X);
          }
          return [p, X];
        }
        get hasBorder() {
          return this.attributes.borderWidth > 0;
        }
        /* override */
        get isVisible() {
          const [p, X] = this.borderSize;
          return p > 0 && X > 0;
        }
        get mesh() {
          if (this.attributes.display === "none")
            return null;
          const p = this.clientBox;
          if (p) {
            let X = this[I];
            if (X)
              X.box !== p && (X.contours = p.contours, X.box = p);
            else {
              X = new c.Mesh2D(p), X.box = p;
              const i = this.attributes.bgcolor;
              if (Object(e.setFillColor)(X, {
                color: i
              }), this.hasBorder) {
                const {
                  borderColor: t,
                  borderWidth: m,
                  borderDash: K,
                  borderDashOffset: x
                } = this.attributes;
                Object(e.setStrokeColor)(X, {
                  color: t,
                  lineWidth: m,
                  lineDash: K,
                  lineDashOffset: x
                });
              }
              this[I] = X;
              const b = this.attributes.clipPath;
              b && this[I].setClipPath(b);
            }
            const V = this.opacity;
            return X.getOpacity() !== V && X.setOpacity(V), X.setTransform(...this.renderMatrix), X;
          }
          return null;
        }
        // content + padding + border
        get offsetSize() {
          const {
            paddingTop: p,
            paddingRight: X,
            paddingBottom: V,
            paddingLeft: i,
            borderWidth: b
          } = this.attributes, [t, m] = this.contentSize, K = 2 * b;
          return [i + t + X + K, p + m + V + K];
        }
        get originalClientRect() {
          if (this.mesh) {
            const p = this.mesh.boundingBox;
            return [p[0][0], p[0][1], p[1][0] - p[0][0], p[1][1] - p[0][1]];
          }
          return [0, 0, 0, 0];
        }
        get originalContentRect() {
          const [p, X, V, i] = this.originalClientRect, b = this.attributes.padding;
          return [p + b[0], X + b[1], V - b[0] - b[2], i - b[1] - b[3]];
        }
        getBoundingClientRect() {
          let p = this.renderMatrix;
          this.layer && this.layer.layerTransformInvert && (p = s.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), this.layer.transformMatrix, p));
          let X = null;
          if (this.mesh) {
            X = [...this.mesh.boundingBox];
            const V = this.attributes.borderWidth;
            V && (X[0] = [X[0][0] - V, X[0][1] - V], X[1] = [X[1][0] + V, X[1][1] + V]);
          }
          return Object(y.default)(X, p);
        }
        // transformPoint(x, y) {
        //   const m = mat2d.invert(this.renderMatrix);
        //   const newX = x * m[0] + y * m[2] + m[4];
        //   const newY = x * m[1] + y * m[3] + m[5];
        //   return [newX, newY];
        // }
        /* override */
        onPropertyChange(p, X, V) {
          if (super.onPropertyChange(p, X, V), (p === "anchorX" || p === "anchorY" || p === "boxSizing" || p === "width" || p === "height" || p === "borderWidth" || p === "paddingLeft" || p === "paddingRight" || p === "paddingTop" || p === "paddingBottom" || /^border(TopLeft|TopRight|BottomRight|BottomLeft)Radius$/.test(p)) && this.updateContours(), this[I] && p === "clipPath" && this[I].setClipPath(X), this[I] && p === "bgcolor" && Object(e.setFillColor)(this[I], {
            color: X
          }), this[I] && (p === "borderColor" || p === "borderWidth" || p === "borderDash" || p === "borderDashOffset")) {
            const {
              borderColor: i,
              borderWidth: b,
              borderDash: t,
              borderDashOffset: m
            } = this.attributes;
            Object(e.setStrokeColor)(this[I], {
              color: i,
              lineWidth: b,
              lineDash: b ? t : 0,
              lineDashOffset: m
            });
          }
        }
        /* override */
        updateContours() {
          const {
            anchorX: p,
            anchorY: X,
            borderWidth: V,
            borderRadius: i
          } = this.attributes, [b, t] = this.borderSize, m = this.offsetSize, K = 0.5 * V, x = -p * m[0] + K, C = -X * m[1] + K;
          this.clientBox = new c.Figure2D(), Object(n.createRadiusBox)(this.clientBox, [x, C, b, t], i);
        }
      }
      a(h, "Attr", u.default), G.default.registerNode(h, "block");
    },
    /* 220 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return y;
      });
      var s = l(71), c = l(72), o = l(221);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute"), n = Symbol.for("spritejs_setAttributeDefault"), G = Symbol.for("spritejs_declareAlias");
      class y extends s.default {
        constructor(I) {
          super(I), this[n]({
            anchorX: 0,
            anchorY: 0,
            /* anchor */
            width: void 0,
            height: void 0,
            /* size */
            borderWidth: 0,
            borderColor: "rgba(0,0,0,1)",
            /* border */
            borderDash: void 0,
            borderDashOffset: 0,
            borderTopLeftRadius: [0, 0],
            borderTopRightRadius: [0, 0],
            borderBottomRightRadius: [0, 0],
            borderBottomLeftRadius: [0, 0],
            /* borderRadius */
            bgcolor: "rgba(0,0,0,0)",
            paddingTop: 0,
            paddingRight: 0,
            paddingBottom: 0,
            paddingLeft: 0,
            /* padding */
            boxSizing: "content-box",
            clipPath: void 0
          }), this[G]("anchor", "size", "border", "borderRadius", "padding");
        }
        get anchorX() {
          return this[e]("anchorX");
        }
        set anchorX(I) {
          this[u]("anchorX", Object(c.toNumber)(I));
        }
        get anchorY() {
          return this[e]("anchorY");
        }
        set anchorY(I) {
          this[u]("anchorY", Object(c.toNumber)(I));
        }
        get anchor() {
          return [this.anchorX, this.anchorY];
        }
        set anchor(I) {
          I = Object(c.toArray)(I), Array.isArray(I) || (I = [I, I]), this.anchorX = I[0], this.anchorY = I[1];
        }
        get width() {
          return this[e]("width");
        }
        set width(I) {
          this[u]("width", Object(c.toNumber)(I));
        }
        get height() {
          return this[e]("height");
        }
        set height(I) {
          this[u]("height", Object(c.toNumber)(I));
        }
        get size() {
          return [this.width, this.height];
        }
        set size(I) {
          I = Object(c.toArray)(I), Array.isArray(I) || (I = [I, I]), this.width = I[0], this.height = I[1];
        }
        get borderWidth() {
          return this[e]("borderWidth");
        }
        set borderWidth(I) {
          this[u]("borderWidth", Object(c.toNumber)(I));
        }
        get borderColor() {
          return this[e]("borderColor");
        }
        set borderColor(I) {
          this[u]("borderColor", Object(o.parseColor)(I));
        }
        get border() {
          return [this.borderWidth, this.borderColor];
        }
        set border(I) {
          I = Object(c.toArray)(I), Array.isArray(I) || (I = [I]), this.borderWidth = I[0], I[1] != null && (this.borderColor = I[1]);
        }
        get borderDash() {
          return this[e]("borderDash");
        }
        set borderDash(I) {
          I = Object(c.toArray)(I, !0), I != null && !Array.isArray(I) && (I = [I]), this[u]("borderDash", I ? I.map(c.toNumber) : null);
        }
        get borderDashOffset() {
          return this[e]("borderDashOffset");
        }
        set borderDashOffset(I) {
          this[u]("borderDashOffset", Object(c.toNumber)(I));
        }
        get borderTopLeftRadius() {
          return this[e]("borderTopLeftRadius");
        }
        set borderTopLeftRadius(I) {
          I = Object(c.toArray)(I, !0), Array.isArray(I) || (I = [I, I]), this[u]("borderTopLeftRadius", I.map(c.toNumber));
        }
        get borderTopRightRadius() {
          return this[e]("borderTopRightRadius");
        }
        set borderTopRightRadius(I) {
          I = Object(c.toArray)(I, !0), Array.isArray(I) || (I = [I, I]), this[u]("borderTopRightRadius", I.map(c.toNumber));
        }
        get borderBottomRightRadius() {
          return this[e]("borderBottomRightRadius");
        }
        set borderBottomRightRadius(I) {
          I = Object(c.toArray)(I, !0), Array.isArray(I) || (I = [I, I]), this[u]("borderBottomRightRadius", I.map(c.toNumber));
        }
        get borderBottomLeftRadius() {
          return this[e]("borderBottomLeftRadius");
        }
        set borderBottomLeftRadius(I) {
          I = Object(c.toArray)(I, !0), Array.isArray(I) || (I = [I, I]), this[u]("borderBottomLeftRadius", I.map(c.toNumber));
        }
        get borderRadius() {
          return [...this.borderTopLeftRadius, ...this.borderTopRightRadius, ...this.borderBottomRightRadius, ...this.borderBottomLeftRadius];
        }
        set borderRadius(I) {
          if (I = Object(c.toArray)(I), !Array.isArray(I))
            I = Array(8).fill(I);
          else if (I.length === 2)
            I = [I[0], I[1], I[0], I[1], I[0], I[1], I[0], I[1]];
          else if (I.length === 4)
            I = [I[0], I[1], I[2], I[3], I[0], I[1], I[2], I[3]];
          else if (I.length === 6)
            I = [I[0], I[1], I[2], I[3], I[4], I[5], I[2], I[3]];
          else if (I.length !== 8)
            throw new TypeError("Invalid borderRadius value.");
          this.borderTopLeftRadius = [I[0], I[1]], this.borderTopRightRadius = [I[2], I[3]], this.borderBottomRightRadius = [I[4], I[5]], this.borderBottomLeftRadius = [I[6], I[7]];
        }
        get bgcolor() {
          return this[e]("bgcolor");
        }
        set bgcolor(I) {
          this[u]("bgcolor", Object(o.parseColor)(I));
        }
        get paddingTop() {
          return this[e]("paddingTop");
        }
        set paddingTop(I) {
          this[u]("paddingTop", Object(c.toNumber)(I));
        }
        get paddingRight() {
          return this[e]("paddingRight");
        }
        set paddingRight(I) {
          this[u]("paddingRight", Object(c.toNumber)(I));
        }
        get paddingBottom() {
          return this[e]("paddingBottom");
        }
        set paddingBottom(I) {
          this[u]("paddingBottom", Object(c.toNumber)(I));
        }
        get paddingLeft() {
          return this[e]("paddingLeft");
        }
        set paddingLeft(I) {
          this[u]("paddingLeft", Object(c.toNumber)(I));
        }
        get padding() {
          return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
        }
        set padding(I) {
          I = Object(c.toArray)(I), Array.isArray(I) ? I.length === 2 ? I = [I[0], I[1], I[0], I[1]] : I.length === 3 && (I = [I[0], I[1], I[2], I[1]]) : I = [I, I, I, I], this.paddingTop = I[0], this.paddingRight = I[1], this.paddingBottom = I[2], this.paddingLeft = I[3];
        }
        get clipPath() {
          return this[e]("clipPath");
        }
        set clipPath(I) {
          this[u]("clipPath", I);
        }
        get boxSizing() {
          return this[e]("boxSizing");
        }
        set boxSizing(I) {
          if (I != null && I !== "border-box" && I !== "content-box")
            throw new TypeError("Invalid boxSizing type.");
          this[u]("boxSizing", I);
        }
      }
    },
    /* 221 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "Gradient", function() {
        return o;
      }), l.d(d, "isTransparent", function() {
        return u;
      }), l.d(d, "parseColor", function() {
        return e;
      }), l.d(d, "setFillColor", function() {
        return G;
      }), l.d(d, "setStrokeColor", function() {
        return y;
      }), l.d(d, "Color", function() {
        return a;
      });
      var s = l(32), c = /* @__PURE__ */ l.n(s);
      l(1).glMatrix.setMatrixArrayType(Array);
      class o {
        constructor({
          vector: h,
          colors: S
        }) {
          if (!Array.isArray(h) || h.length !== 4 && h.length !== 6 && h.length !== 3)
            throw new TypeError("Invalid gradient");
          this.vector = h, this.colors = S.map(({
            offset: p,
            color: X
          }) => ({
            offset: p,
            color: e(X)
          }));
        }
        toString() {
          return JSON.stringify({
            vector: this.vector,
            colors: this.colors
          });
        }
      }
      function u(I) {
        return I instanceof o ? !1 : I == null ? !0 : c()(I)[3] === 0;
      }
      function e(I) {
        if (I == null || (I || (I = "transparent"), I instanceof o))
          return I;
        const h = c()(I);
        if (!h || !h.length)
          throw new TypeError("Invalid color value.");
        return `rgba(${h.join()})`;
      }
      function n(I, h, S) {
        const p = I.boundingBox[0];
        if (S.vector) {
          let {
            vector: X,
            colors: V
          } = S;
          X.length === 4 ? (X = [X[0] + p[0], X[1] + p[1], X[2] + p[0], X[3] + p[1]], I.setLinearGradient({
            vector: X,
            colors: V,
            type: h
          })) : X.length === 3 ? (X = [X[0] + p[0], X[1] + p[1], X[2]], I.setCircularGradient({
            vector: X,
            colors: V,
            type: h
          })) : (X = [X[0] + p[0], X[1] + p[1], X[2], X[3] + p[0], X[4] + p[1], X[5]], I.setRadialGradient({
            vector: X,
            colors: V,
            type: h
          }));
        } else
          I.gradient && I.gradient[h] && (delete I.gradient[h], delete I.uniforms.u_radialGradientVector);
      }
      function G(I, {
        color: h,
        rule: S = "nonzero"
      }) {
        return n(I, "fill", h), h.vector || I.setFill({
          color: h,
          rule: S
        }), I;
      }
      function y(I, {
        color: h,
        lineWidth: S,
        lineCap: p,
        lineJoin: X,
        lineDash: V,
        lineDashOffset: i,
        miterLimit: b,
        roundSegments: t
      }) {
        n(I, "stroke", h), h.vector && (h = [0, 0, 0, 1]), I.setStroke({
          color: h,
          thickness: S,
          cap: p,
          join: X,
          miterLimit: b,
          lineDash: V,
          lineDashOffset: i,
          roundSegments: t
        });
      }
      class a extends Array {
        constructor(h = 0, S = 0, p = 0, X = 0) {
          return Array.isArray(h) && ([h, S, p, X] = h), typeof h == "string" && ([h, S, p, X] = c()(h), h /= 255, S /= 255, p /= 255), super(h, S, p, X), this;
        }
        get r() {
          return Math.round(this[0] * 255);
        }
        set r(h) {
          this[0] = h / 255;
        }
        get g() {
          return Math.round(this[1] * 255);
        }
        set g(h) {
          this[1] = h / 255;
        }
        get b() {
          return Math.round(this[2] * 255);
        }
        set b(h) {
          this[2] = h / 255;
        }
        get a() {
          return this[3];
        }
        set a(h) {
          this[3] = h;
        }
        get hex() {
          const h = `0${this.r.toString(16)}`.slice(-2), S = `0${this.g.toString(16)}`.slice(-2), p = `0${this.b.toString(16)}`.slice(-2);
          let X;
          return this.a < 1 && (X = Math.round(this[3] * 255), X = `0${X.toString(16)}`.slice(-2)), `#${h}${S}${p}${X || ""}`;
        }
        get rgba() {
          return `rgba(${this.r},${this.g},${this.b},${this.a})`;
        }
        fromColor(h) {
          return typeof h == "string" && (h = c()(h), h[0] /= 255, h[1] /= 255, h[2] /= 255), this[0] = h[0], this[1] = h[1], this[2] = h[2], this[3] = h[3], this;
        }
      }
    },
    /* 222 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "createRadiusBox", function() {
        return c;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(o, u, e, n, G, y = "leftTop") {
        const a = 0.5522848, I = n / 2 * a, h = G / 2 * a, S = u + n, p = e + G, X = u + n / 2, V = e + G / 2;
        y === "leftTop" ? (o.moveTo(u, V), o.bezierCurveTo(u, V - h, X - I, e, X, e)) : y === "rightTop" ? o.bezierCurveTo(X + I, e, S, V - h, S, V) : y === "rightBottom" ? o.bezierCurveTo(S, V + h, X + I, p, X, p) : y === "leftBottom" && o.bezierCurveTo(X - I, p, u, V + h, u, V);
      }
      function c(o, [u, e, n, G], y) {
        if (!y || Array.isArray(y) && y.every((a) => a === 0))
          o.beginPath(), o.rect(u, e, n, G);
        else {
          typeof y == "number" && (y = Array(8).fill(y));
          const [a, I, h, S, p, X, V, i] = y.map((b, t) => t % 2 ? Math.min(b, G / 2) : Math.min(b, n / 2));
          o.beginPath(), o.moveTo(u, e + I), s(o, u, e, a * 2, I * 2, "leftTop"), o.lineTo(u + n - h, e), s(o, u + n - h * 2, e, h * 2, S * 2, "rightTop"), o.lineTo(u + n, e + G - X), s(o, u + n - p * 2, e + G - X * 2, p * 2, X * 2, "rightBottom"), o.lineTo(u + V, e + G), s(o, u, e + G - i * 2, V * 2, i * 2, "leftBottom"), o.closePath();
        }
        return o;
      }
    },
    /* 223 */
    /***/
    function(Z, d, l) {
      l.r(d), l(1).glMatrix.setMatrixArrayType(Array), d.default = function(s, c) {
        if (!s)
          return {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
          };
        const [[o, u], [e, n]] = s, G = o * c[0] + u * c[2] + c[4], y = o * c[1] + u * c[3] + c[5], a = e * c[0] + u * c[2] + c[4], I = e * c[1] + u * c[3] + c[5], h = e * c[0] + n * c[2] + c[4], S = e * c[1] + n * c[3] + c[5], p = o * c[0] + n * c[2] + c[4], X = o * c[1] + n * c[3] + c[5], V = Math.min(G, a, h, p), i = Math.min(y, I, S, X), b = Math.max(G, a, h, p), t = Math.max(y, I, S, X);
        return {
          x: V,
          y: i,
          width: b - V,
          height: t - i,
          left: V,
          top: i,
          right: b,
          bottom: t
        };
      };
    },
    /* 224 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(218), c = l(219), o = l(225), u = l(213);
      l(1).glMatrix.setMatrixArrayType(Array);
      function e(y, a, I) {
        return a in y ? Object.defineProperty(y, a, { value: I, enumerable: !0, configurable: !0, writable: !0 }) : y[a] = I, y;
      }
      const n = Symbol("textureTask");
      class G extends c.default {
        constructor(a = {}) {
          typeof a == "string" && (a = {
            texture: a
          }), super(a);
        }
        /* override */
        get contentSize() {
          let [a, I] = super.contentSize;
          const {
            width: h,
            height: S
          } = this.attributes;
          if (h == null || S == null) {
            const p = this.textureImage, X = this.attributes.textureRect, V = this.attributes.sourceRect;
            if (X)
              h == null && (a = X[0] + X[2]), S == null && (I = X[1] + X[3]);
            else if (V) {
              const i = this.layer ? this.layer.displayRatio : 1;
              h == null && (a = V[2] / i), S == null && (I = V[3] / i);
            } else if (p) {
              const i = this.layer ? this.layer.displayRatio : 1;
              h == null && (a = p.width / i), S == null && (I = p.height / i);
            }
          }
          return [a, I];
        }
        get textureImageReady() {
          return this[n] || Promise.resolve();
        }
        /* override */
        draw(a = []) {
          super.draw(a);
          const I = this.mesh;
          return I && Object(s.drawTexture)(this, I), a;
        }
        /* override */
        onPropertyChange(a, I, h) {
          if (super.onPropertyChange(a, I, h), a === "texture" && (this[n] = Object(s.applyTexture)(this, I, !0)), a === "textureRect") {
            const {
              width: S,
              height: p
            } = this.attributes;
            (S == null || p == null) && this.updateContours();
          }
        }
      }
      e(G, "Attr", o.default), u.default.registerNode(G, "sprite");
    },
    /* 225 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(220);
      l(1).glMatrix.setMatrixArrayType(Array);
      const c = Symbol.for("spritejs_setAttributeDefault"), o = Symbol.for("spritejs_setAttribute"), u = Symbol.for("spritejs_getAttribute");
      class e extends s.default {
        constructor(G) {
          super(G), this[c]({
            texture: void 0,
            textureRect: void 0,
            textureRepeat: !1,
            sourceRect: void 0
          });
        }
        get texture() {
          return this[u]("texture");
        }
        set texture(G) {
          this[o]("texture", G);
        }
        get textureRect() {
          return this[u]("textureRect");
        }
        set textureRect(G) {
          this[o]("textureRect", G);
        }
        get sourceRect() {
          return this[u]("sourceRect");
        }
        set sourceRect(G) {
          this[o]("sourceRect", G);
        }
        get textureRepeat() {
          return this[u]("textureRepeat");
        }
        set textureRepeat(G) {
          this[o]("textureRepeat", !!G);
        }
      }
    },
    /* 226 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return S;
      });
      var s = l(12), c = l(227), o = /* @__PURE__ */ l.n(c), u = l(70), e = l(228), n = l(221), G = l(218), y = l(213), a = l(223);
      l(1).glMatrix.setMatrixArrayType(Array);
      function I(p, X, V) {
        return X in p ? Object.defineProperty(p, X, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : p[X] = V, p;
      }
      const h = Symbol("mesh");
      class S extends u.default {
        constructor(X = {}) {
          typeof X == "string" && (X = {
            d: X
          }), super(X), this.effects = {
            d(V, i, b, t, m) {
              const K = (b - t) / (m - t);
              if (K <= 0)
                return V;
              if (K >= 1)
                return i;
              const x = o.a._preprocessing(o.a.path2shapes(V), o.a.path2shapes(i)), C = o.a._lerp(...x, K)[0];
              return C.reduce((R, J) => `${R}${J.slice(2).join(" ")} `, `M${C[0][0]} ${C[0][1]}C`).trim();
            }
          };
        }
        /* override */
        get isVisible() {
          return !!this.d;
        }
        get mesh() {
          if (this.attributes.display === "none")
            return null;
          const X = this.path;
          if (X) {
            let V = this[h];
            if (V)
              V.path !== X && (V.contours = X.contours, V.path = X);
            else {
              V = new s.Mesh2D(this.path), V.path = X;
              const b = this.attributes.fillColor, t = this.attributes.fillRule;
              b && Object(n.setFillColor)(V, {
                color: b,
                rule: t
              });
              const m = this.attributes.lineWidth, K = this.attributes.strokeColor;
              if (K && m > 0) {
                const {
                  lineCap: C,
                  lineJoin: T,
                  miterLimit: R,
                  lineDash: J,
                  lineDashOffset: F,
                  roundSegments: r
                } = this.attributes;
                Object(n.setStrokeColor)(V, {
                  color: K,
                  lineWidth: m,
                  lineCap: C,
                  lineJoin: T,
                  miterLimit: R,
                  lineDash: J,
                  lineDashOffset: F,
                  roundSegments: r
                });
              }
              this[h] = V;
              const x = this.attributes.clipPath;
              x && this[h].setClipPath(x);
            }
            const i = this.opacity;
            return V.getOpacity() !== i && V.setOpacity(i), V.setTransform(...this.renderMatrix), V;
          }
          return null;
        }
        get originalContentRect() {
          if (this.path) {
            const X = this.path.boundingBox;
            return [X[0][0], X[0][1], X[1][0] - X[0][0], X[1][1] - X[0][1]];
          }
          return [0, 0, 0, 0];
        }
        get originalClientRect() {
          if (this.mesh) {
            const X = this.mesh.boundingBox;
            return [X[0][0], X[0][1], X[1][0] - X[0][0], X[1][1] - X[0][1]];
          }
          return [0, 0, 0, 0];
        }
        get originalClientCenter() {
          return this.mesh ? this.mesh.boundingCenter : [0, 0];
        }
        set d(X) {
          this.attributes.d = X;
        }
        get d() {
          return this.attributes.d;
        }
        /* override */
        draw(X = []) {
          super.draw(X);
          const V = this.mesh;
          return V && Object(G.drawTexture)(this, V), X;
        }
        getBoundingClientRect() {
          let X = null;
          return this.mesh && (X = this.mesh.boundingBox), Object(a.default)(X, this.renderMatrix);
        }
        getPathLength() {
          return this.mesh ? this.mesh.getTotalLength() : 0;
        }
        getPointAtLength(X) {
          if (this.mesh) {
            const V = this.mesh.getPointAtLength(X);
            if (V)
              return [V.x, V.y];
          }
          return [0, 0];
        }
        /* override */
        onPropertyChange(X, V, i) {
          if (super.onPropertyChange(X, V, i), (X === "d" || X === "normalize") && this.updateContours(), this[h] && (X === "fillColor" || X === "fillRule")) {
            const {
              fillColor: b,
              fillRule: t
            } = this.attributes;
            Object(n.setFillColor)(this[h], {
              color: b,
              rule: t
            });
          }
          if (this[h] && (X === "strokeColor" || X === "lineWidth" || X === "lineCap" || X === "lineJoin" || X === "lineDash" || X === "lineDashOffset" || X === "roundSegments")) {
            const {
              strokeColor: b,
              lineWidth: t
            } = this.attributes;
            if (b && t > 0) {
              const {
                lineCap: m,
                lineJoin: K,
                lineDash: x,
                lineDashOffset: C,
                miterLimit: T,
                roundSegments: R
              } = this.attributes;
              Object(n.setStrokeColor)(this[h], {
                color: b,
                lineCap: m,
                lineJoin: K,
                lineWidth: t,
                lineDash: x,
                lineDashOffset: C,
                miterLimit: T,
                roundSegments: R
              });
            }
          }
          this[h] && X === "clipPath" && this[h].setClipPath(V), X === "texture" && Object(G.applyTexture)(this, V);
        }
        /* override */
        updateContours() {
          this.path = new s.Figure2D(), this.path.addPath(this.attributes.d), this.attributes.normalize && this.path.normalize(...this.path.boundingCenter);
        }
      }
      I(S, "Attr", e.default), y.default.registerNode(S, "path");
    },
    /* 227 */
    /***/
    function(Z, d, l) {
      (function(s, c) {
        Z.exports = c();
      })(this, function() {
        var s = /* @__PURE__ */ function() {
          function J(F, r) {
            var Y = [], H = !0, Q = !1, w = void 0;
            try {
              for (var O = F[Symbol.iterator](), q; !(H = (q = O.next()).done) && (Y.push(q.value), !(r && Y.length === r)); H = !0)
                ;
            } catch (k) {
              Q = !0, w = k;
            } finally {
              try {
                !H && O.return && O.return();
              } finally {
                if (Q)
                  throw w;
              }
            }
            return Y;
          }
          return function(F, r) {
            if (Array.isArray(F))
              return F;
            if (Symbol.iterator in Object(F))
              return J(F, r);
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          };
        }(), c = Math.PI * 2, o = function(F, r, Y, H, Q, w, O) {
          var q = F.x, k = F.y;
          q *= r, k *= Y;
          var P = H * q - Q * k, D = Q * q + H * k;
          return {
            x: P + w,
            y: D + O
          };
        }, u = function(F, r) {
          var Y = 1.3333333333333333 * Math.tan(r / 4), H = Math.cos(F), Q = Math.sin(F), w = Math.cos(F + r), O = Math.sin(F + r);
          return [{
            x: H - Q * Y,
            y: Q + H * Y
          }, {
            x: w + O * Y,
            y: O - w * Y
          }, {
            x: w,
            y: O
          }];
        }, e = function(F, r, Y, H) {
          var Q = F * H - r * Y < 0 ? -1 : 1, w = Math.sqrt(F * F + r * r), O = Math.sqrt(F * F + r * r), q = F * Y + r * H, k = q / (w * O);
          return k > 1 && (k = 1), k < -1 && (k = -1), Q * Math.acos(k);
        }, n = function(F, r, Y, H, Q, w, O, q, k, P, D, ll) {
          var _ = Math.pow(Q, 2), bl = Math.pow(w, 2), $ = Math.pow(D, 2), el = Math.pow(ll, 2), nl = _ * bl - _ * el - bl * $;
          nl < 0 && (nl = 0), nl /= _ * el + bl * $, nl = Math.sqrt(nl) * (O === q ? -1 : 1);
          var z = nl * Q / w * ll, M = nl * -w / Q * D, E = P * z - k * M + (F + Y) / 2, B = k * z + P * M + (r + H) / 2, g = (D - z) / Q, U = (ll - M) / w, W = (-D - z) / Q, L = (-ll - M) / w, N = e(1, 0, g, U), v = e(g, U, W, L);
          return q === 0 && v > 0 && (v -= c), q === 1 && v < 0 && (v += c), [E, B, N, v];
        }, G = function(F) {
          var r = F.px, Y = F.py, H = F.cx, Q = F.cy, w = F.rx, O = F.ry, q = F.xAxisRotation, k = q === void 0 ? 0 : q, P = F.largeArcFlag, D = P === void 0 ? 0 : P, ll = F.sweepFlag, _ = ll === void 0 ? 0 : ll, bl = [];
          if (w === 0 || O === 0)
            return [];
          var $ = Math.sin(k * c / 360), el = Math.cos(k * c / 360), nl = el * (r - H) / 2 + $ * (Y - Q) / 2, z = -$ * (r - H) / 2 + el * (Y - Q) / 2;
          if (nl === 0 && z === 0)
            return [];
          w = Math.abs(w), O = Math.abs(O);
          var M = Math.pow(nl, 2) / Math.pow(w, 2) + Math.pow(z, 2) / Math.pow(O, 2);
          M > 1 && (w *= Math.sqrt(M), O *= Math.sqrt(M));
          var E = n(r, Y, H, Q, w, O, D, _, $, el, nl, z), B = s(E, 4), g = B[0], U = B[1], W = B[2], L = B[3], N = Math.max(Math.ceil(Math.abs(L) / (c / 4)), 1);
          L /= N;
          for (var v = 0; v < N; v++)
            bl.push(u(W, L)), W += L;
          return bl.map(function(f) {
            var j = o(f[0], w, O, el, $, g, U), A = j.x, dl = j.y, il = o(f[1], w, O, el, $, g, U), cl = il.x, ml = il.y, tl = o(f[2], w, O, el, $, g, U), sl = tl.x, Zl = tl.y;
            return { x1: A, y1: dl, x2: cl, y2: ml, x: sl, y: Zl };
          });
        }, y = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0
          /**
           * segment pattern
           * @type {RegExp}
           */
        }, a = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
        function I(J) {
          var F = [];
          return J.replace(a, function(r, Y, H) {
            var Q = Y.toLowerCase();
            for (H = S(H), Q == "m" && H.length > 2 && (F.push([Y].concat(H.splice(0, 2))), Q = "l", Y = Y == "m" ? "l" : "L"); ; ) {
              if (H.length == y[Q])
                return H.unshift(Y), F.push(H);
              if (H.length < y[Q])
                throw new Error("malformed path data");
              F.push([Y].concat(H.splice(0, y[Q])));
            }
          }), F;
        }
        var h = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;
        function S(J) {
          var F = J.match(h);
          return F ? F.map(Number) : [];
        }
        function p(J) {
          var F = J[0][0], r = J[0][1], Y = F, H = r;
          return J.forEach(function(Q) {
            var w = Q[0], O = Q[2], q = Q[4], k = Q[6], P = Q[1], D = Q[3], ll = Q[5], _ = Q[7];
            F = Math.min(F, w, O, q, k), r = Math.min(r, P, D, ll, _), Y = Math.max(Y, w, O, q, k), H = Math.max(H, P, D, ll, _);
          }), [F, r, Y, H];
        }
        function X(J, F) {
          return Math.sqrt(Math.pow(J[0] - F[0], 2) + Math.pow(J[1] - F[1], 2)) + Math.sqrt(Math.pow(J[2] - F[2], 2) + Math.pow(J[3] - F[3], 2));
        }
        function V(J, F) {
          var r = J[0], Y = J[2], H = J[4], Q = J[6], w = J[1], O = J[3], q = J[5], k = J[7], P = F[0], D = F[2], ll = F[4], _ = F[6], bl = F[1], $ = F[3], el = F[5], nl = F[7];
          return Math.sqrt(Math.pow(P - r, 2) + Math.pow(bl - w, 2)) + Math.sqrt(Math.pow(D - Y, 2) + Math.pow($ - O, 2)) + Math.sqrt(Math.pow(ll - H, 2) + Math.pow(el - q, 2)) + Math.sqrt(Math.pow(_ - Q, 2) + Math.pow(nl - k, 2));
        }
        function i(J, F) {
          var r = t(J.length), Y = [];
          r.forEach(function(Q) {
            var w = 0, O = 0;
            Q.forEach(function(q) {
              w += V(J[q], F[O++]);
            }), Y.push({ index: Q, distance: w });
          }), Y.sort(function(Q, w) {
            return Q.distance - w.distance;
          });
          var H = [];
          return Y[0].index.forEach(function(Q) {
            H.push(J[Q]);
          }), H;
        }
        function b(J, F) {
          var r = m(J.length), Y = [];
          r.forEach(function(Q) {
            var w = 0;
            Q.forEach(function(O) {
              w += X(p(J[O]), p(F[O]));
            }), Y.push({ index: Q, distance: w });
          }), Y.sort(function(Q, w) {
            return Q.distance - w.distance;
          });
          var H = [];
          return Y[0].index.forEach(function(Q) {
            H.push(J[Q]);
          }), H;
        }
        function t(J) {
          for (var F = [], r = 0; r < J; r++) {
            for (var Y = [], H = 0; H < J; H++) {
              var Q = H + r;
              Q > J - 1 && (Q -= J), Y[Q] = H;
            }
            F.push(Y);
          }
          return F;
        }
        function m(J) {
          for (var F = [], r = 0; r < J; r++)
            F.push(r);
          return K(F);
        }
        function K(J) {
          var F = [], r = [];
          function Y(H) {
            var Q, w;
            for (Q = 0; Q < H.length; Q++)
              w = H.splice(Q, 1)[0], r.push(w), H.length == 0 && F.push(r.slice()), Y(H), H.splice(Q, 0, w), r.pop();
            return F;
          }
          return Y(J);
        }
        var x = {};
        x.parser = I, x.lerpCurve = function(J, F, r) {
          return x.lerpPoints(J[0], J[1], F[0], F[1], r).concat(x.lerpPoints(J[2], J[3], F[2], F[3], r)).concat(x.lerpPoints(J[4], J[5], F[4], F[5], r)).concat(x.lerpPoints(J[6], J[7], F[6], F[7], r));
        }, x.lerpPoints = function(J, F, r, Y, H) {
          return [J + (r - J) * H, F + (Y - F) * H];
        }, x.q2b = function(J, F, r, Y, H, Q) {
          return [J, F, (J + 2 * r) / 3, (F + 2 * Y) / 3, (H + 2 * r) / 3, (Q + 2 * Y) / 3, H, Q];
        }, x.path2shapes = function(J) {
          for (var F = x.parser(J), r = 0, Y = 0, H = 0, Q = F.length, w = [], O = null, q = void 0, k = void 0, P = void 0, D = void 0, ll = void 0, _ = void 0, bl = void 0; H < Q; H++) {
            var $ = F[H], el = $[0], nl = F[H - 1];
            switch (el) {
              case "m":
                ll = w.length, w[ll] = [], O = w[ll], r = r + $[1], Y = Y + $[2];
                break;
              case "M":
                ll = w.length, w[ll] = [], O = w[ll], r = $[1], Y = $[2];
                break;
              case "l":
                O.push([r, Y, r, Y, r, Y, r + $[1], Y + $[2]]), r += $[1], Y += $[2];
                break;
              case "L":
                O.push([r, Y, $[1], $[2], $[1], $[2], $[1], $[2]]), r = $[1], Y = $[2];
                break;
              case "h":
                O.push([r, Y, r, Y, r, Y, r + $[1], Y]), r += $[1];
                break;
              case "H":
                O.push([r, Y, $[1], Y, $[1], Y, $[1], Y]), r = $[1];
                break;
              case "v":
                O.push([r, Y, r, Y, r, Y, r, Y + $[1]]), Y += $[1];
                break;
              case "V":
                O.push([r, Y, r, $[1], r, $[1], r, $[1]]), Y = $[1];
                break;
              case "C":
                O.push([r, Y, $[1], $[2], $[3], $[4], $[5], $[6]]), r = $[5], Y = $[6];
                break;
              case "S":
                nl[0] === "C" || nl[0] === "c" ? O.push([r, Y, r + nl[5] - nl[3], Y + nl[6] - nl[4], $[1], $[2], $[3], $[4]]) : (nl[0] === "S" || nl[0] === "s") && O.push([r, Y, r + nl[3] - nl[1], Y + nl[4] - nl[2], $[1], $[2], $[3], $[4]]), r = $[3], Y = $[4];
                break;
              case "c":
                O.push([r, Y, r + $[1], Y + $[2], r + $[3], Y + $[4], r + $[5], Y + $[6]]), r = r + $[5], Y = Y + $[6];
                break;
              case "s":
                nl[0] === "C" || nl[0] === "c" ? O.push([r, Y, r + nl[5] - nl[3], Y + nl[6] - nl[4], r + $[1], Y + $[2], r + $[3], Y + $[4]]) : (nl[0] === "S" || nl[0] === "s") && O.push([r, Y, r + nl[3] - nl[1], Y + nl[4] - nl[2], r + $[1], Y + $[2], r + $[3], Y + $[4]]), r = r + $[3], Y = Y + $[4];
                break;
              case "a":
                _ = G({
                  rx: $[1],
                  ry: $[2],
                  px: r,
                  py: Y,
                  xAxisRotation: $[3],
                  largeArcFlag: $[4],
                  sweepFlag: $[5],
                  cx: r + $[6],
                  cy: Y + $[7]
                }), bl = _[_.length - 1], _.forEach(function(z, M) {
                  M === 0 ? O.push([r, Y, z.x1, z.y1, z.x2, z.y2, z.x, z.y]) : O.push([_[M - 1].x, _[M - 1].y, z.x1, z.y1, z.x2, z.y2, z.x, z.y]);
                }), r = bl.x, Y = bl.y;
                break;
              case "A":
                _ = G({
                  rx: $[1],
                  ry: $[2],
                  px: r,
                  py: Y,
                  xAxisRotation: $[3],
                  largeArcFlag: $[4],
                  sweepFlag: $[5],
                  cx: $[6],
                  cy: $[7]
                }), bl = _[_.length - 1], _.forEach(function(z, M) {
                  M === 0 ? O.push([r, Y, z.x1, z.y1, z.x2, z.y2, z.x, z.y]) : O.push([_[M - 1].x, _[M - 1].y, z.x1, z.y1, z.x2, z.y2, z.x, z.y]);
                }), r = bl.x, Y = bl.y;
                break;
              case "Q":
                O.push(x.q2b(r, Y, $[1], $[2], $[3], $[4])), r = $[3], Y = $[4];
                break;
              case "q":
                O.push(x.q2b(r, Y, r + $[1], Y + $[2], $[3] + r, $[4] + Y)), r += $[3], Y += $[4];
                break;
              case "T":
                nl[0] === "Q" || nl[0] === "q" ? (P = r + nl[3] - nl[1], D = Y + nl[4] - nl[2], O.push(x.q2b(r, Y, P, D, $[1], $[2]))) : (nl[0] === "T" || nl[0] === "t") && (O.push(x.q2b(r, Y, r + r - P, Y + Y - D, $[1], $[2])), P = r + r - P, D = Y + Y - D), r = $[1], Y = $[2];
                break;
              case "t":
                nl[0] === "Q" || nl[0] === "q" ? (P = r + nl[3] - nl[1], D = Y + nl[4] - nl[2], O.push(x.q2b(r, Y, P, D, r + $[1], Y + $[2]))) : (nl[0] === "T" || nl[0] === "t") && (O.push(x.q2b(r, Y, r + r - P, Y + Y - D, r + $[1], Y + $[2])), P = r + r - P, D = Y + Y - D), r += $[1], Y += $[2];
                break;
              case "Z":
                q = O[0][0], k = O[0][1], O.push([r, Y, q, k, q, k, q, k]);
                break;
              case "z":
                q = O[0][0], k = O[0][1], O.push([r, Y, q, k, q, k, q, k]);
                break;
            }
          }
          return w;
        }, x._upCurves = function(J, F) {
          for (var r = 0, Y = 0, H = J.length; r < F; r++)
            J.push(J[Y].slice(0)), Y++, Y > H - 1 && (Y -= H);
        };
        function C(J, F, r, Y, H, Q, w, O, q) {
          return {
            left: T(J, F, r, Y, H, Q, w, O, q),
            right: T(w, O, H, Q, r, Y, J, F, 1 - q, !0)
          };
        }
        function T(J, F, r, Y, H, Q, w, O, q, k) {
          var P = (r - J) * q + J, D = (Y - F) * q + F, ll = (H - r) * q + r, _ = (Q - Y) * q + Y, bl = (w - H) * q + H, $ = (O - Q) * q + Q, el = (ll - P) * q + P, nl = (_ - D) * q + D, z = (bl - ll) * q + ll, M = ($ - _) * q + _, E = (z - el) * q + el, B = (M - nl) * q + nl;
          return k ? [E, B, el, nl, P, D, J, F] : [J, F, P, D, el, nl, E, B];
        }
        x._splitCurves = function(J, F) {
          for (var r = 0, Y = 0; r < F; r++) {
            var H = J[Y], Q = C(H[0], H[1], H[2], H[3], H[4], H[5], H[6], H[7], 0.5);
            J.splice(Y, 1), J.splice(Y, 0, Q.left, Q.right), Y += 2, Y >= J.length - 1 && (Y = 0);
          }
        };
        function R(J, F) {
          for (var r = function(Q) {
            var w = J[J.length - 1], O = [];
            w.forEach(function(q) {
              O.push(q.slice(0));
            }), J.push(O);
          }, Y = 0; Y < F; Y++)
            r();
        }
        return x.lerp = function(J, F, r) {
          return x._lerp(x.path2shapes(J), x.path2shapes(F), r);
        }, x.MIM_CURVES_COUNT = 100, x._preprocessing = function(J, F) {
          var r = J.length, Y = F.length, H = JSON.parse(JSON.stringify(J)), Q = JSON.parse(JSON.stringify(F));
          return r > Y ? R(Q, r - Y) : r < Y && R(H, Y - r), H = b(H, Q), H.forEach(function(w, O) {
            var q = w.length, k = Q[O].length;
            q > k ? q < x.MIM_CURVES_COUNT ? (x._splitCurves(w, x.MIM_CURVES_COUNT - q), x._splitCurves(Q[O], x.MIM_CURVES_COUNT - k)) : x._splitCurves(Q[O], q - k) : q < k && (k < x.MIM_CURVES_COUNT ? (x._splitCurves(w, x.MIM_CURVES_COUNT - q), x._splitCurves(Q[O], x.MIM_CURVES_COUNT - k)) : x._splitCurves(w, k - q));
          }), H.forEach(function(w, O) {
            H[O] = i(w, Q[O]);
          }), [H, Q];
        }, x._lerp = function(J, F, r) {
          var Y = [];
          return J.forEach(function(H, Q) {
            var w = [];
            H.forEach(function(O, q) {
              w.push(x.lerpCurve(O, F[Q][q], r));
            }), Y.push(w);
          }), Y;
        }, x.animate = function(J) {
          var F = x.path2shapes(J.from), r = x.path2shapes(J.to), Y = x._preprocessing(F, r), H = /* @__PURE__ */ new Date(), Q = J.end || function() {
          }, w = J.progress || function() {
          }, O = J.begin || function() {
          }, q = J.easing || function(_) {
            return _;
          }, k = null, P = null, D = J.time;
          O(F);
          var ll = function _() {
            var bl = /* @__PURE__ */ new Date() - H;
            if (bl >= D) {
              P = r, w(P, 1), Q(P), cancelAnimationFrame(k);
              return;
            }
            var $ = q(bl / D);
            P = x._lerp(Y[0], Y[1], $), w(P, $), k = requestAnimationFrame(_);
          };
          ll();
        }, x;
      });
    },
    /* 228 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(71), c = l(221), o = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttributeDefault"), e = Symbol.for("spritejs_setAttribute"), n = Symbol.for("spritejs_getAttribute");
      class G extends s.default {
        constructor(a) {
          super(a), this[u]({
            d: "",
            normalize: !1,
            fillColor: void 0,
            fillRule: "nonzero",
            strokeColor: void 0,
            lineWidth: 1,
            lineJoin: "miter",
            // 'miter' or 'bevel' or 'round'
            lineCap: "butt",
            // 'butt' or 'square' or 'round'
            roundSegments: 20,
            // default roundSegment if lineJoin or lineCap is round
            lineDash: void 0,
            lineDashOffset: 0,
            miterLimit: 10,
            texture: void 0,
            textureRect: void 0,
            textureRepeat: !1,
            sourceRect: void 0,
            clipPath: void 0
          });
        }
        get d() {
          return this[n]("d");
        }
        set d(a) {
          this[e]("d", a);
        }
        get normalize() {
          return this[n]("normalize");
        }
        set normalize(a) {
          this[e]("normalize", !!a);
        }
        get fillColor() {
          return this[n]("fillColor");
        }
        set fillColor(a) {
          this[e]("fillColor", Object(c.parseColor)(a));
        }
        get fillRule() {
          return this[n]("fillRule");
        }
        set fillRule(a) {
          if (a != null && a !== "nonzero" && a !== "evenodd")
            throw new TypeError("Invalid fill rule.");
          this[e]("fillRule", a);
        }
        get strokeColor() {
          return this[n]("strokeColor");
        }
        set strokeColor(a) {
          this[e]("strokeColor", Object(c.parseColor)(a));
        }
        get lineWidth() {
          return this[n]("lineWidth");
        }
        set lineWidth(a) {
          this[e]("lineWidth", Object(o.toNumber)(a));
        }
        get lineJoin() {
          return this[n]("lineJoin");
        }
        set lineJoin(a) {
          if (a != null && a !== "miter" && a !== "bevel" && a !== "round")
            throw new TypeError("Invalid lineJoin type.");
          this[e]("lineJoin", a);
        }
        get lineCap() {
          return this[n]("lineCap");
        }
        set lineCap(a) {
          if (a != null && a !== "butt" && a !== "square" && a !== "round")
            throw new TypeError("Invalid lineCap type.");
          this[e]("lineCap", a);
        }
        get lineDash() {
          return this[n]("lineDash");
        }
        set lineDash(a) {
          a = Object(o.toArray)(a, !0), a != null && !Array.isArray(a) && (a = [a]), this[e]("lineDash", a ? a.map(o.toNumber) : null);
        }
        get lineDashOffset() {
          return this[n]("lineDashOffset");
        }
        set lineDashOffset(a) {
          this[e]("lineDashOffset", Object(o.toNumber)(a));
        }
        get miterLimit() {
          return this[n]("miterLimit");
        }
        set miterLimit(a) {
          this[e]("miterLimit", Object(o.toNumber)(a));
        }
        get roundSegments() {
          return this[n]("roundSegments");
        }
        set roundSegments(a) {
          this[e]("roundSegments", a);
        }
        get texture() {
          return this[n]("texture");
        }
        set texture(a) {
          this[e]("texture", a);
        }
        get textureRect() {
          return this[n]("textureRect");
        }
        set textureRect(a) {
          this[e]("textureRect", a);
        }
        get sourceRect() {
          return this[n]("sourceRect");
        }
        set sourceRect(a) {
          this[e]("sourceRect", a);
        }
        get textureRepeat() {
          return this[n]("textureRepeat");
        }
        set textureRepeat(a) {
          this[e]("textureRepeat", !!a);
        }
        get clipPath() {
          return this[n]("clipPath");
        }
        set clipPath(a) {
          this[e]("clipPath", a);
        }
      }
    },
    /* 229 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(226), c = l(213), o = l(230);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        /* override */
        get isVisible() {
          const {
            width: G,
            height: y
          } = this.attributes;
          return G > 0 && y > 0 && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "rect");
    },
    /* 230 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return y;
      });
      var s = l(228), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol.for("spritejs_setAttributeDefault"), u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute"), n = Symbol.for("spritejs_declareAlias");
      function G(a) {
        const {
          width: I,
          height: h
        } = a;
        return `M0 0L${I} 0L${I} ${h}L0 ${h}Z`;
      }
      class y extends s.default {
        constructor(I) {
          super(I), this[o]({
            width: 0,
            height: 0
            /* size */
          }), this[n]("size");
        }
        // readonly
        get d() {
          return this[e]("d");
        }
        set d(I) {
        }
        // eslint-disable-line no-empty-function
        get width() {
          return this[e]("width");
        }
        set width(I) {
          if (I = Object(c.toNumber)(I), this[u]("width", I)) {
            const h = G(this);
            this[u]("d", h);
          }
        }
        get height() {
          return this[e]("height");
        }
        set height(I) {
          if (I = Object(c.toNumber)(I), this[u]("height", I)) {
            const h = G(this);
            this[u]("d", h);
          }
        }
        get size() {
          return [this.width, this.height];
        }
        set size(I) {
          I = Object(c.toArray)(I), Array.isArray(I) || (I = [I, I]), this.width = I[0], this.height = I[1];
        }
      }
    },
    /* 231 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(232), c = l(213), o = l(235);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        get isVisible() {
          const {
            sides: G
          } = this.attributes;
          return G[0] > 0 && G[1] > 0 && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "triangle");
    },
    /* 232 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(226), c = l(213), o = l(233);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        /* override */
        get isVisible() {
          const {
            points: G
          } = this.attributes;
          return G.length > 0 && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "polyline");
    },
    /* 233 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return a;
      });
      var s = l(228), c = l(72), o = l(234);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttributeDefault"), e = Symbol.for("spritejs_setAttribute"), n = Symbol.for("spritejs_getAttribute"), G = Symbol.for("spritejs_declareAlias");
      function y(I) {
        const {
          points: h,
          smooth: S,
          smoothRange: p,
          close: X
        } = I, V = [];
        for (let b = 0; b < h.length; b += 2)
          V.push([h[b], h[b + 1]]);
        let i = "";
        return S ? i = Object(o.makeSmoothCurveLine)(V, p) : V.length && (i = `M${V.map((b) => b.join(" ")).join("L")}`), i && X && (i += "Z"), i;
      }
      class a extends s.default {
        constructor(h) {
          super(h), this[u]({
            points: [],
            smooth: !1,
            smoothRange: [0],
            closeType: "none"
            // none | normal
            /* close */
          }), this[G]("close");
        }
        // readonly
        get d() {
          return this[n]("d");
        }
        set d(h) {
        }
        // eslint-disable-line no-empty-function
        get close() {
          return this.closeType !== "none";
        }
        set close(h) {
          h = h ? "normal" : "none", this.closeType = h;
        }
        get closeType() {
          return this[n]("closeType");
        }
        set closeType(h) {
          if (h != null && h !== "none" && h !== "normal")
            throw new TypeError("Invalid closeType type.");
          if (this[e]("closeType", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get smooth() {
          return this[n]("smooth");
        }
        set smooth(h) {
          if (this[e]("smooth", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get smoothRange() {
          return this[n]("smoothRange");
        }
        set smoothRange(h) {
          if (h && !Array.isArray(h) && (h = [h]), this[e]("smoothRange", h) && this.smooth) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get points() {
          return this[n]("points");
        }
        set points(h) {
          if (h = Object(c.toArray)(h), Array.isArray(h) && (h = h.reduce((S, p) => Array.isArray(p) ? [...S, ...p.map((X) => Object(c.toNumber)(X))] : [...S, Object(c.toNumber)(p)], [])), this[e]("points", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
      }
    },
    /* 234 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "makeSmoothCurveLine", function() {
        return s;
      }), l(1).glMatrix.setMatrixArrayType(Array);
      function s(c, o = [0]) {
        function u(G, y = 0.168, a = 0.168) {
          let I, h, S, p;
          if ((c[G].x === c[G + 1].x || c[G].y === c[G + 1].y) && (y = 0, a = 0), G < 1 ? (I = c[0].x + (c[1].x - c[0].x) * y, h = c[0].y + (c[1].y - c[0].y) * y) : (I = c[G].x + (c[G + 1].x - c[G - 1].x) * y, h = c[G].y + (c[G + 1].y - c[G - 1].y) * y), G > c.length - 3) {
            const X = c.length - 1;
            S = c[X].x - (c[X].x - c[X - 1].x) * a, p = c[X].y - (c[X].y - c[X - 1].y) * a;
          } else
            S = c[G + 1].x - (c[G + 2].x - c[G].x) * a, p = c[G + 1].y - (c[G + 2].y - c[G].y) * a;
          return [{
            x: I,
            y: h
          }, {
            x: S,
            y: p
          }];
        }
        c = c.map(([G, y]) => ({
          x: G,
          y
        }));
        let e = "", n = 0;
        return c.forEach((G, y) => {
          if (y === 0)
            e += `M${G.x} ${G.y}`;
          else {
            for (; y > o[n]; )
              n++;
            if (n % 2) {
              const [a, I] = u(y - 1);
              e += `C${[a.x, a.y, I.x, I.y, G.x, G.y].join(" ")}`;
            } else
              e += `L${G.x} ${G.y}`;
          }
        }), e;
      }
    },
    /* 235 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(233), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol.for("spritejs_setAttributeDefault"), u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute");
      function n(y) {
        const [a, I] = y.sides;
        let h = y.angle % 360;
        return h < 0 && (h += 360), h = Math.PI * h / 180, [0, 0, a, 0, I * Math.cos(h), I * Math.sin(h)];
      }
      class G extends s.default {
        constructor(a) {
          super(a), this[o]({
            sides: [0, 0],
            angle: 60,
            closeType: "normal"
          });
        }
        // readonly
        get points() {
          return super.points;
        }
        set points(a) {
        }
        // eslint-disable-line no-empty-function
        get sides() {
          return this[e]("sides");
        }
        set sides(a) {
          if (a = Object(c.toArray)(a, !0), a != null && !Array.isArray(a) && (a = [a, a]), this[u]("sides", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get angle() {
          return this[e]("angle");
        }
        set angle(a) {
          if (a = Object(c.toNumber)(a), this[u]("angle", a)) {
            const I = n(this);
            super.points = I;
          }
        }
      }
    },
    /* 236 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(232), c = l(213), o = l(237);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        /* override */
        get isVisible() {
          const {
            sides: G
          } = this.attributes;
          return G[0] > 0 && G[1] > 0 && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "parallel");
    },
    /* 237 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(233), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol.for("spritejs_setAttributeDefault"), u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute");
      function n(y) {
        const [a, I] = y.sides;
        let h = y.angle % 360;
        h < 0 && (h += 360), h = Math.PI * h / 180;
        const S = I * Math.cos(h), p = I * Math.sin(h);
        return [0, 0, a, 0, S + a, p, S, p];
      }
      class G extends s.default {
        constructor(a) {
          super(a), this[o]({
            sides: [0, 0],
            angle: 90,
            closeType: "normal"
          });
        }
        // readonly
        get points() {
          return super.points;
        }
        set points(a) {
        }
        // eslint-disable-line no-empty-function
        get sides() {
          return this[e]("sides");
        }
        set sides(a) {
          if (a = Object(c.toArray)(a, !0), a != null && !Array.isArray(a) && (a = [a, a]), this[u]("sides", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get angle() {
          return this[e]("angle");
        }
        set angle(a) {
          if (a = Object(c.toNumber)(a), this[u]("angle", a)) {
            const I = n(this);
            super.points = I;
          }
        }
      }
    },
    /* 238 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(232), c = l(213), o = l(239);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "regular");
    },
    /* 239 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(233), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol.for("spritejs_setAttributeDefault"), u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute");
      function n(y) {
        const {
          edges: a,
          radius: I,
          offsetAngle: h
        } = y, S = Math.PI * h / 180 - 0.5 * Math.PI;
        if (a < 3 || I <= 0)
          return [];
        const p = [];
        for (let X = 0; X < a; X++) {
          const V = X * 2 * Math.PI / a + S, i = I * Math.cos(V), b = I * Math.sin(V);
          p.push(i, b);
        }
        return p;
      }
      class G extends s.default {
        constructor(a) {
          super(a), this[o]({
            edges: 3,
            radius: 0,
            offsetAngle: 0,
            closeType: "normal"
          });
        }
        // readonly
        get points() {
          return super.points;
        }
        set points(a) {
        }
        // eslint-disable-line no-empty-function
        get edges() {
          return this[e]("edges");
        }
        set edges(a) {
          if (a = Object(c.toNumber)(a), this[u]("edges", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get radius() {
          return this[e]("radius");
        }
        set radius(a) {
          if (a = Object(c.toNumber)(a), this[u]("radius", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get offsetAngle() {
          return this[e]("offsetAngle");
        }
        set offsetAngle(a) {
          if (a = Object(c.toNumber)(a), this[u]("offsetAngle", a)) {
            const I = n(this);
            super.points = I;
          }
        }
      }
    },
    /* 240 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(232), c = l(213), o = l(241);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "star");
    },
    /* 241 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return G;
      });
      var s = l(233), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = Symbol.for("spritejs_setAttributeDefault"), u = Symbol.for("spritejs_setAttribute"), e = Symbol.for("spritejs_getAttribute");
      function n(y) {
        const {
          angles: a,
          innerRadius: I,
          outerRadius: h,
          offsetAngle: S
        } = y, p = Math.PI * S / 180 - 0.5 * Math.PI;
        if (a < 3 || I <= 0 || h <= 0)
          return [];
        const X = [];
        for (let V = 0; V < a * 2; V++) {
          const i = V * Math.PI / a + p, b = V % 2 ? I : h, t = b * Math.cos(i), m = b * Math.sin(i);
          X.push(t, m);
        }
        return X;
      }
      class G extends s.default {
        constructor(a) {
          super(a), this[o]({
            angles: 5,
            innerRadius: 0,
            outerRadius: 0,
            /* radius */
            offsetAngle: 0,
            closeType: "normal"
          });
        }
        // readonly
        get points() {
          return super.points;
        }
        set points(a) {
        }
        // eslint-disable-line no-empty-function
        get angles() {
          return this[e]("angles");
        }
        set angles(a) {
          if (a = Object(c.toNumber)(a), this[u]("angles", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get innerRadius() {
          return this[e]("innerRadius");
        }
        set innerRadius(a) {
          if (a = Object(c.toNumber)(a), this[u]("innerRadius", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get outerRadius() {
          return this[e]("outerRadius");
        }
        set outerRadius(a) {
          if (a = Object(c.toNumber)(a), this[u]("outerRadius", a)) {
            const I = n(this);
            super.points = I;
          }
        }
        get radius() {
          return [this.innerRadius, this.outerRadius];
        }
        set radius(a) {
          a = Object(c.toArray)(a, !0), Array.isArray(a) || (a = [a, a]), this.innerRadius = a[0], this.outerRadius = a[1];
        }
        get offsetAngle() {
          return this[e]("offsetAngle");
        }
        set offsetAngle(a) {
          if (a = Object(c.toNumber)(a), this[u]("offsetAngle", a)) {
            const I = n(this);
            super.points = I;
          }
        }
      }
    },
    /* 242 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(226), c = l(213), o = l(243);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        /* override */
        get isVisible() {
          const {
            radiusX: G,
            radiusY: y,
            startAngle: a,
            endAngle: I
          } = this.attributes;
          return G > 0 && y > 0 && a !== I && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "ellipse");
    },
    /* 243 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return a;
      });
      var s = l(12), c = l(228), o = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttributeDefault"), e = Symbol.for("spritejs_setAttribute"), n = Symbol.for("spritejs_getAttribute"), G = Symbol.for("spritejs_declareAlias");
      function y(I) {
        const {
          radiusX: h,
          radiusY: S,
          startAngle: p,
          endAngle: X,
          direction: V,
          closeType: i
        } = I, b = V === "anitclockwise", t = new s.Figure2D();
        return i === "sector" && t.moveTo(0, 0), t.ellipse(0, 0, h, S, 0, Math.PI * p / 180, Math.PI * X / 180, b), i !== "none" && t.closePath(), t.path.reduce((x, C) => x + C.join(" "), "");
      }
      class a extends c.default {
        constructor(h) {
          super(h), this[u]({
            radiusX: 0,
            radiusY: 0,
            /* radius */
            startAngle: 0,
            endAngle: 360,
            /* angle */
            direction: "clockwise",
            // clockwise | anticlockwise
            closeType: "none"
            // none | sector | normal
          }), this[G]("radius", "angle");
        }
        // readonly
        get d() {
          return this[n]("d");
        }
        set d(h) {
        }
        // eslint-disable-line no-empty-function
        get radiusX() {
          return this[n]("radiusX");
        }
        set radiusX(h) {
          if (h = Object(o.toNumber)(h), this[e]("radiusX", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get radiusY() {
          return this[n]("radiusY");
        }
        set radiusY(h) {
          if (h = Object(o.toNumber)(h), this[e]("radiusY", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get radius() {
          return [this.radiusX, this.radiusY];
        }
        set radius(h) {
          h = Object(o.toArray)(h, !0), Array.isArray(h) || (h = [h, h]), this.radiusX = h[0], this.radiusY = h[1];
        }
        get angle() {
          return [this.startAngle, this.endAngle];
        }
        set angle(h) {
          h = Object(o.toArray)(h), Array.isArray(h) || (h = [h, h]), this.startAngle = h[0], this.endAngle = h[1];
        }
        get direction() {
          return this[n]("direction");
        }
        set direction(h) {
          if (h != null && h !== "clockwise" && h !== "anticlockwise")
            throw new TypeError("Invalid direction type.");
          this[e]("direction", h);
        }
        get startAngle() {
          return this[n]("startAngle");
        }
        set startAngle(h) {
          if (h = Object(o.toNumber)(h), this[e]("startAngle", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get endAngle() {
          return this[n]("endAngle");
        }
        set endAngle(h) {
          if (h = Object(o.toNumber)(h), this[e]("endAngle", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get closeType() {
          return this[n]("closeType");
        }
        set closeType(h) {
          if (h != null && h !== "none" && h !== "sector" && h !== "normal")
            throw new TypeError("Invalid closeType type.");
          if (this[e]("closeType", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
      }
    },
    /* 244 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(242), c = l(213), o = l(245);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "arc");
    },
    /* 245 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return o;
      });
      var s = l(243), c = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      class o extends s.default {
        get radius() {
          return super.radiusX;
        }
        set radius(e) {
          e = Object(c.toNumber)(e), super.radiusX = e, super.radiusY = e;
        }
      }
    },
    /* 246 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(226), c = l(213), o = l(247);
      l(1).glMatrix.setMatrixArrayType(Array);
      function u(n, G, y) {
        return G in n ? Object.defineProperty(n, G, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : n[G] = y, n;
      }
      class e extends s.default {
        /* override */
        get isVisible() {
          const {
            innerRadius: G,
            outerRadius: y,
            startAngle: a,
            endAngle: I
          } = this.attributes;
          return (G > 0 || y > 0) && a !== I && super.isVisible;
        }
      }
      u(e, "Attr", o.default), c.default.registerNode(e, "ring");
    },
    /* 247 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return a;
      });
      var s = l(12), c = l(228), o = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      const u = Symbol.for("spritejs_setAttributeDefault"), e = Symbol.for("spritejs_setAttribute"), n = Symbol.for("spritejs_getAttribute"), G = Symbol.for("spritejs_declareAlias");
      function y(I) {
        let {
          innerRadius: h,
          outerRadius: S,
          startAngle: p,
          endAngle: X
        } = I;
        const V = new s.Figure2D();
        if (p = Math.PI * p / 180, X = Math.PI * X / 180, h > S && ([h, S] = [S, h]), h <= 0 && V.moveTo(0, 0), V.arc(0, 0, S, p, X, !1), h > 0) {
          const t = Math.PI * 2;
          X < p && (X = p + t + (X - p) % t), X - p >= t && (X = p + t - 1e-6), V.arc(0, 0, h, X, p, !0);
        }
        return V.closePath(), V.path.reduce((t, m) => t + m.join(" "), "");
      }
      class a extends c.default {
        constructor(h) {
          super(h), this[u]({
            innerRadius: 0,
            outerRadius: 0,
            /* radius */
            startAngle: 0,
            endAngle: 360
            /* angle */
          }), this[G]("radius", "angle");
        }
        // readonly
        get d() {
          return this[n]("d");
        }
        set d(h) {
        }
        // eslint-disable-line no-empty-function
        get innerRadius() {
          return this[n]("innerRadius");
        }
        set innerRadius(h) {
          if (h = Object(o.toNumber)(h), this[e]("innerRadius", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get outerRadius() {
          return this[n]("outerRadius");
        }
        set outerRadius(h) {
          if (h = Object(o.toNumber)(h), this[e]("outerRadius", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get radius() {
          return [this.innerRadius, this.outerRadius];
        }
        set radius(h) {
          h = Object(o.toArray)(h, !0), Array.isArray(h) || (h = [h, h]), this.innerRadius = h[0], this.outerRadius = h[1];
        }
        get startAngle() {
          return this[n]("startAngle");
        }
        set startAngle(h) {
          if (h = Object(o.toNumber)(h), this[e]("startAngle", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get endAngle() {
          return this[n]("endAngle");
        }
        set endAngle(h) {
          if (h = Object(o.toNumber)(h), this[e]("endAngle", h)) {
            const S = y(this);
            this[e]("d", S);
          }
        }
        get angle() {
          return [this.startAngle, this.endAngle];
        }
        set angle(h) {
          h = Object(o.toArray)(h), Array.isArray(h) || (h = [h, h]), this.startAngle = h[0], this.endAngle = h[1];
        }
      }
    },
    /* 248 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return S;
      });
      var s = l(12), c = l(218), o = l(219), u = l(249), e = l(213);
      l(1).glMatrix.setMatrixArrayType(Array);
      function n(p, X, V) {
        return X in p ? Object.defineProperty(p, X, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : p[X] = V, p;
      }
      const G = Symbol("textImage"), y = Symbol("textImageTask"), a = Symbol("textureContext"), I = Symbol("updateTextureRect"), h = Symbol("textCanvas");
      class S extends o.default {
        constructor(X = {}) {
          typeof X == "string" && (X = {
            text: X
          }), super(X);
        }
        /* override */
        get contentSize() {
          let [X, V] = super.contentSize;
          const {
            width: i,
            height: b
          } = this.attributes;
          if (i == null || b == null) {
            const t = this[G];
            t && (i == null && (X = t.rect[2]), b == null && (V = t.rect[3]));
          }
          return [X, V];
        }
        get text() {
          return this.attributes.text;
        }
        set text(X) {
          this.attributes.text = X;
        }
        get textContent() {
          return this.attributes.text;
        }
        set textContent(X) {
          this.attributes.text = X;
        }
        get textImage() {
          return this[G] || {};
        }
        get textImageReady() {
          return this[y] || Promise.resolve();
        }
        /* override */
        draw(X) {
          super.draw(X);
          const V = this.mesh;
          if (V) {
            const i = this[G];
            if (i) {
              let b = V.texture;
              if (!b || this[a] && this[a] !== this.renderer || i.needsUpdate ? (i.needsUpdate = !1, Object(c.deleteTexture)(i.image, this.renderer), b = Object(c.createTexture)(i.image, this.renderer), this[I] = !0) : b = V.uniforms.u_texSampler, this[I]) {
                const [t, m] = i.rect.slice(2), [K, x] = this.contentSize, C = this.attributes.textAlign, T = this.attributes.verticalAlign;
                let R = 0;
                C === "center" ? R = (K - t) / 2 : (C === "right" || C === "end") && (R = K - t);
                const J = this.attributes.fontSize, F = this.attributes.lineHeight;
                let r = 0;
                T === "top" ? r = (J - F) / 2 : T === "bottom" && (r = (F - J) / 2);
                const {
                  paddingLeft: Y,
                  paddingTop: H
                } = this.attributes, {
                  borderWidth: Q
                } = this.attributes;
                R += Y + Q, r += H + Q;
                const {
                  anchorX: w,
                  anchorY: O
                } = this.attributes;
                R -= this.offsetSize[0] * w, r -= this.offsetSize[1] * O, V.setTexture(b, {
                  rect: [R, r, t, m]
                }), this[I] = !1, this[a] = this.renderer;
              }
            }
          }
          return X;
        }
        /* override */
        onPropertyChange(X, V, i) {
          X === "text" || X === "fontSize" || X === "fontFamily" || X === "fontStyle" || X === "fontVariant" || X === "fontWeight" || X === "fontStretch" || X === "lineHeight" || X === "strokeColor" || X === "fillColor" || X === "strokeWidth" ? this.updateText() : ((X === "textAlign" || X === "verticalAlign") && (this[I] = !0), super.onPropertyChange(X, V, i));
        }
        /* override */
        updateContours() {
          super.updateContours(), this[I] = !0;
        }
        updateText() {
          this[y] || (this[y] = Promise.resolve().then(() => {
            this[y] = null;
            const {
              text: X,
              font: V,
              fillColor: i,
              strokeColor: b,
              strokeWidth: t
            } = this.attributes, m = this.layer ? this.layer.displayRatio : 1;
            return this[h] = this[h] || s.ENV.createCanvas(1, 1), this[G] = s.ENV.createText(X, {
              font: V,
              fillColor: i,
              strokeColor: b,
              strokeWidth: t,
              parseFont: s.parseFont,
              ratio: m,
              textCanvas: this[h]
            }), this[G].needsUpdate = !0, this.updateContours(), this.forceUpdate(), this[G];
          }));
        }
      }
      n(S, "Attr", u.default), e.default.registerNode(S, "label");
    },
    /* 249 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return a;
      });
      var s = l(12), c = l(72), o = l(221), u = l(220);
      l(1).glMatrix.setMatrixArrayType(Array);
      const e = Symbol.for("spritejs_setAttributeDefault"), n = Symbol.for("spritejs_setAttribute"), G = Symbol.for("spritejs_getAttribute"), y = Symbol.for("spritejs_declareAlias");
      class a extends u.default {
        constructor(h) {
          super(h), this[e]({
            text: "",
            fontSize: 16,
            fontFamily: "Helvetica,Arial,sans-serif",
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            lineHeight: "",
            /* font */
            textAlign: "left",
            strokeColor: void 0,
            strokeWidth: 1,
            fillColor: void 0,
            verticalAlign: "middle"
          }), this[y]("font");
        }
        get text() {
          return this[G]("text") || " ";
        }
        set text(h) {
          this[n]("text", h);
        }
        get fontSize() {
          return this[G]("fontSize");
        }
        set fontSize(h) {
          this[n]("fontSize", Object(c.toNumber)(h));
        }
        get fontFamily() {
          return this[G]("fontFamily");
        }
        set fontFamily(h) {
          this[n]("fontFamily", h);
        }
        get fontStyle() {
          return this[G]("fontStyle");
        }
        set fontStyle(h) {
          this[n]("fontStyle", h);
        }
        get fontVariant() {
          return this[G]("fontVariant");
        }
        set fontVariant(h) {
          this[n]("fontVariant", h);
        }
        get fontWeight() {
          return this[G]("fontWeight");
        }
        set fontWeight(h) {
          this[n]("fontWeight", h);
        }
        get fontStretch() {
          return this[G]("fontStretch");
        }
        set fontStretch(h) {
          this[n]("fontStretch", h);
        }
        get lineHeight() {
          return this[G]("lineHeight") || this.fontSize;
        }
        set lineHeight(h) {
          this[n]("lineHeight", Object(c.toNumber)(h));
        }
        get textAlign() {
          return this[G]("textAlign");
        }
        set textAlign(h) {
          this[n]("textAlign", h);
        }
        get strokeColor() {
          return this[G]("strokeColor");
        }
        set strokeColor(h) {
          this[n]("strokeColor", Object(o.parseColor)(h));
        }
        get strokeWidth() {
          return this[G]("strokeWidth");
        }
        set strokeWidth(h) {
          this[n]("strokeWidth", Object(c.toNumber)(h));
        }
        get verticalAlign() {
          return this[G]("verticalAlign");
        }
        set verticalAlign(h) {
          this[n]("verticalAlign", h);
        }
        get fillColor() {
          return this[G]("fillColor");
        }
        set fillColor(h) {
          this[n]("fillColor", Object(o.parseColor)(h));
        }
        get font() {
          const {
            fontStyle: h,
            fontVariant: S,
            fontWeight: p,
            fontStretch: X,
            fontSize: V,
            lineHeight: i,
            fontFamily: b
          } = this;
          return `${h} ${S} ${p} ${X} ${V}px/${i}px ${b}`;
        }
        set font(h) {
          if (h == null)
            this.fontStyle = null, this.fontVariant = null, this.fontWeight = null, this.fontStretch = null, this.fontSize = null, this.lineHeight = null, this.fontFamily = null;
          else {
            const S = Object(s.parseFont)(h);
            this.fontStyle = S.style, this.fontVariant = S.variant, this.fontWeight = S.weight, this.fontStretch = S.stretch, this.fontSize = Object(c.toNumber)(`${S.size}${S.unit}`), S.lineHeight && (this.lineHeight = S.pxLineHeight), this.fontFamily = S.family;
          }
        }
      }
    },
    /* 250 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return h;
      });
      var s = l(12), c = l(219), o = l(251), u = l(213), e = l(252);
      l(1).glMatrix.setMatrixArrayType(Array);
      function n(S, p, X) {
        return p in S ? Object.defineProperty(S, p, { value: X, enumerable: !0, configurable: !0, writable: !0 }) : S[p] = X, S;
      }
      const G = Symbol("zOrder"), y = Symbol("ordered"), a = Symbol("children"), I = Symbol("sealed");
      class h extends c.default {
        constructor(p = {}) {
          super(p), this[a] = [], this[y] = null, this[G] = 0;
        }
        get childNodes() {
          return this[a];
        }
        get children() {
          return this[a];
        }
        get orderedChildren() {
          return this[y] || (this[y] = [...this[a]], this[y].sort((p, X) => p.zIndex - X.zIndex || p.zOrder - X.zOrder)), this[y];
        }
        append(...p) {
          return p.map((X) => this.appendChild(X));
        }
        appendChild(p) {
          return p.remove(), this[a].push(p), p.connect(this, this[G]++), this[y] && (this[y].length && p.zIndex < this[y][this[y].length - 1].zIndex ? this.reorder() : this[y].push(p)), p;
        }
        /* override */
        // get isVisible() {
        //   return this.attributes.opacity > 0 && this[_children].length > 0;
        // }
        /* override */
        cloneNode(p = !1) {
          const X = super.cloneNode();
          return p && this[a].forEach((V) => {
            const i = V.cloneNode(p);
            X.appendChild(i);
          }), X;
        }
        /* override */
        dispatchPointerEvent(p) {
          const X = this.orderedChildren;
          for (let V = X.length - 1; V >= 0; V--)
            if (X[V].dispatchPointerEvent(p))
              return !0;
          return super.dispatchPointerEvent(p);
        }
        /* override */
        draw(p = []) {
          if (this.__cacheRenderMatrix = this.renderMatrix, super.draw(p), !this[I] && this.attributes.display !== "none") {
            const X = this.orderedChildren;
            for (let V = 0; V < X.length; V++)
              X[V].draw(p);
          }
          return this.__cacheRenderMatrix = null, p;
        }
        getElementById(p) {
          return Object(e.querySelector)(`#${p}`, this);
        }
        getElementsByClassName(p) {
          return Object(e.querySelectorAll)(`.${p}`, this);
        }
        getElementsByName(p) {
          return Object(e.querySelectorAll)(`[name="${p}"]`, this);
        }
        getElementsByTagName(p) {
          return Object(e.querySelectorAll)(p, this);
        }
        insertBefore(p, X) {
          if (X == null)
            return this.appendChild(p);
          p.remove();
          const V = this[a].indexOf(X);
          if (V < 0)
            throw new Error("Invalid reference node.");
          const i = X.zOrder;
          for (let b = V; b < this[a].length; b++) {
            const t = this[a][b].zOrder, m = this[a][b];
            delete m.zOrder, Object.defineProperty(m, "zOrder", {
              value: t + 1,
              writable: !1,
              configurable: !0
            });
          }
          if (this[a].splice(V, 0, p), p.connect(this, i), this[y])
            if (p.zIndex !== X.zIndex)
              this.reorder();
            else {
              const b = this[y].indexOf(X);
              this[y].splice(b, 0, p);
            }
          return p;
        }
        querySelector(p) {
          return Object(e.querySelector)(p, this);
        }
        querySelectorAll(p) {
          return Object(e.querySelectorAll)(p, this);
        }
        replaceChild(p, X) {
          p.remove();
          const V = this[a].indexOf(X);
          if (V < 0)
            throw new Error("Invalid reference node.");
          if (this[a][V] = p, p.connect(this, X.zOrder), this[y])
            if (p.zIndex !== X.zIndex)
              this.reorder();
            else {
              const i = this[y].indexOf(X);
              this[y][i] = p;
            }
          return X.disconnect(this), p;
        }
        removeAllChildren() {
          const p = this[a];
          for (let X = p.length - 1; X >= 0; X--)
            p[X].remove();
        }
        removeChild(p) {
          const X = this[a].indexOf(p);
          if (X >= 0) {
            if (this[a].splice(X, 1), this[y]) {
              const V = this[y].indexOf(p);
              this[y].splice(V, 1);
            }
            return p.disconnect(this), p;
          }
          return null;
        }
        reorder() {
          this[y] = null;
        }
        seal() {
          function p(b, t) {
            const m = [];
            for (let K = 0; K < b.length; K++) {
              const x = [...b[K]];
              for (let C = 1; C < x.length; C += 2) {
                const T = x[C], R = x[C + 1];
                x[C] = T * t[0] + R * t[2] + t[4], x[C + 1] = T * t[1] + R * t[3] + t[5];
              }
              m.push(x);
            }
            return m;
          }
          const X = this.orderedChildren, V = new s.Figure2D(), i = this.localMatrix;
          for (let b = 0; b < X.length; b++) {
            let t = X[b];
            if (t instanceof h && (t = t.seal()), t.clientBox) {
              let m = t.clientBox.contours.path;
              m = p(m, t.localMatrix), V.addPath(m);
            }
            if (t.path) {
              let m = t.path.contours.path;
              m = p(m, t.localMatrix), V.addPath(m);
            }
          }
          return this[I] = !0, this.clientBox = V, {
            clientBox: V,
            localMatrix: i
          };
        }
        /* override */
        setResolution({
          width: p,
          height: X
        }) {
          super.setResolution({
            width: p,
            height: X
          }), this[a].forEach((V) => {
            V.setResolution({
              width: p,
              height: X
            });
          });
        }
        /* override */
        updateContours() {
          this[I] || super.updateContours();
        }
      }
      n(h, "Attr", o.default), u.default.registerNode(h, "group");
    },
    /* 251 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return c;
      });
      var s = l(220);
      l(1).glMatrix.setMatrixArrayType(Array);
      class c extends s.default {
        // constructor(subject) {
        //   super(subject);
        //   this[setDefault]({
        //     pointerEvents: 'all',
        //   });
        // }
      }
    },
    /* 252 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "querySelectorAll", function() {
        return I;
      }), l.d(d, "querySelector", function() {
        return h;
      }), l.d(d, "isMatched", function() {
        return S;
      }), l.d(d, "compile", function() {
        return p;
      });
      var s = l(221), c = l(213);
      l(1).glMatrix.setMatrixArrayType(Array);
      const o = l(253);
      function u(X) {
        return X.nodeType === 1 || c.default.isSpriteNode(X.nodeName);
      }
      function e(X) {
        return Array.from(X.childNodes || []);
      }
      function n(X) {
        return c.default.isSpriteNode(X.nodeName) ? X.parent || X.canvas || X.container : X.parentElement;
      }
      function G(X) {
        let V = X.length, i, b, t;
        for (; --V > -1; ) {
          for (i = b = X[V], X[V] = null, t = !0; b; ) {
            if (X.indexOf(b) > -1) {
              t = !1, X.splice(V, 1);
              break;
            }
            b = n(b);
          }
          t && (X[V] = i);
        }
        return X;
      }
      const y = {
        isTag: u,
        existsOne(X, V) {
          return V.some((i) => u(i) ? X(i) || y.existsOne(X, e(i)) : !1);
        },
        getSiblings(X) {
          const V = n(X);
          return V && e(V);
        },
        getChildren: e,
        getParent: n,
        getAttributeValue(X, V) {
          if (X.nodeType === 1 && V === "class" || V === "id")
            return X[V];
          if (this.hasAttrib(X, V)) {
            let i = X.attributes[V];
            return Array.isArray(i) && (i = `[${i.join()}]`), String(i);
          }
        },
        hasAttrib(X, V) {
          return X.attributes[V] != null;
        },
        removeSubsets: G,
        getName(X) {
          return X.tagName ? X.tagName.toLowerCase() : null;
        },
        findOne: function X(V, i) {
          let b = null;
          for (let t = 0, m = i.length; t < m && !b; t++)
            if (V(i[t]))
              b = i[t];
            else {
              const K = e(i[t]);
              K && K.length > 0 && (b = X(V, K));
            }
          return b;
        },
        findAll: function X(V, i) {
          let b = [];
          for (let t = 0, m = i.length; t < m; t++) {
            if (!u(i[t]))
              continue;
            V(i[t]) && b.push(i[t]);
            const K = e(i[t]);
            K && (b = b.concat(X(V, K)));
          }
          return b;
        },
        getText: function X(V) {
          return Array.isArray(V) ? V.map(X).join("") : u(V) ? X(e(V)) : V.nodeType === 3 ? V.nodeValue : c.default.isSpriteNode(V.nodeName) ? V.text : "";
        }
      };
      function a(X) {
        if (typeof X != "string")
          return X;
        let V = X.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);
        return V && (V = V.map((i) => {
          const b = i.slice(1, -1).split("="), t = Object(s.parseColor)(b[1].replace(/['"]/g, ""));
          return [i, `[${b[0]}="${t}"]`];
        }), V.forEach(([i, b]) => {
          X = X.replace(i, b);
        })), V = X.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g), V && (V = V.map((i) => {
          const b = i.slice(1, -1).split("="), t = b[1].slice(2, -2).split(/,/g).map((m) => m.trim());
          return [i, `[${b[0]}="[${t}]"]`];
        }), V.forEach(([i, b]) => {
          X = X.replace(i, b);
        })), X;
      }
      function I(X, V) {
        return o.selectAll(a(X), V, {
          adapter: y
        });
      }
      function h(X, V) {
        return o.selectOne(a(X), V, {
          adapter: y
        });
      }
      function S(X, V) {
        return o.is(X, a(V), {
          adapter: y
        });
      }
      function p(X) {
        return o.compile(a(X), {
          adapter: y
        });
      }
    },
    /* 253 */
    /***/
    function(Z, d, l) {
      Z.exports = p;
      var s = l(254), c = l(273).falseFunc, o = l(274);
      function u(X) {
        return function(i, b, t) {
          return b = b || {}, b.adapter = b.adapter || s, X(i, b, t);
        };
      }
      var e = u(o), n = u(o.compileUnsafe);
      function G(X) {
        return function(i, b, t) {
          return t = t || {}, t.adapter = t.adapter || s, typeof i != "function" && (i = n(i, t, b)), i.shouldTestNextSiblings && (b = a(t && t.context || b, t.adapter)), Array.isArray(b) ? b = t.adapter.removeSubsets(b) : b = t.adapter.getChildren(b), X(i, b, t);
        };
      }
      function y(X, V) {
        var i = V.getSiblings(X);
        if (!Array.isArray(i))
          return [];
        for (i = i.slice(0); i.shift() !== X; )
          ;
        return i;
      }
      function a(X, V) {
        Array.isArray(X) || (X = [X]);
        for (var i = X.slice(0), b = 0, t = X.length; b < t; b++) {
          var m = y(i[b], V);
          i.push.apply(i, m);
        }
        return i;
      }
      var I = G(function(V, i, b) {
        return V === c || !i || i.length === 0 ? [] : b.adapter.findAll(V, i);
      }), h = G(function(V, i, b) {
        return V === c || !i || i.length === 0 ? null : b.adapter.findOne(V, i);
      });
      function S(X, V, i) {
        return i = i || {}, i.adapter = i.adapter || s, (typeof V == "function" ? V : e(V, i))(X);
      }
      function p(X, V, i) {
        return I(X, V, i);
      }
      p.compile = e, p.filters = o.Pseudos.filters, p.pseudos = o.Pseudos.pseudos, p.selectAll = I, p.selectOne = h, p.is = S, p.parse = e, p.iterate = I, p._compileUnsafe = n, p._compileToken = o.compileToken;
    },
    /* 254 */
    /***/
    function(Z, d, l) {
      var s = Z.exports;
      [
        l(255),
        l(268),
        l(269),
        l(270),
        l(271),
        l(272)
      ].forEach(function(c) {
        Object.keys(c).forEach(function(o) {
          s[o] = c[o].bind(s);
        });
      });
    },
    /* 255 */
    /***/
    function(Z, d, l) {
      var s = l(256), c = l(257), o = s.isTag;
      Z.exports = {
        getInnerHTML: u,
        getOuterHTML: c,
        getText: e
      };
      function u(n, G) {
        return n.children ? n.children.map(function(y) {
          return c(y, G);
        }).join("") : "";
      }
      function e(n) {
        return Array.isArray(n) ? n.map(e).join("") : o(n) ? n.name === "br" ? `
` : e(n.children) : n.type === s.CDATA ? e(n.children) : n.type === s.Text ? n.data : "";
      }
    },
    /* 256 */
    /***/
    function(Z, d) {
      Z.exports = {
        Text: "text",
        //Text
        Directive: "directive",
        //<? ... ?>
        Comment: "comment",
        //<!-- ... -->
        Script: "script",
        //<script> tags
        Style: "style",
        //<style> tags
        Tag: "tag",
        //Any tag
        CDATA: "cdata",
        //<![CDATA[ ... ]]>
        Doctype: "doctype",
        isTag: function(l) {
          return l.type === "tag" || l.type === "script" || l.type === "style";
        }
      };
    },
    /* 257 */
    /***/
    function(Z, d, l) {
      var s = l(258), c = l(259), o = l(267);
      o.elementNames.__proto__ = null, o.attributeNames.__proto__ = null;
      var u = {
        __proto__: null,
        style: !0,
        script: !0,
        xmp: !0,
        iframe: !0,
        noembed: !0,
        noframes: !0,
        plaintext: !0,
        noscript: !0
      };
      function e(X, V) {
        if (X) {
          var i = "", b;
          for (var t in X)
            b = X[t], i && (i += " "), V.xmlMode === "foreign" && (t = o.attributeNames[t] || t), i += t, (b !== null && b !== "" || V.xmlMode) && (i += '="' + (V.decodeEntities ? c.encodeXML(b) : b.replace(/\"/g, "&quot;")) + '"');
          return i;
        }
      }
      var n = {
        __proto__: null,
        area: !0,
        base: !0,
        basefont: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        frame: !0,
        hr: !0,
        img: !0,
        input: !0,
        isindex: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
      }, G = Z.exports = function(X, V) {
        !Array.isArray(X) && !X.cheerio && (X = [X]), V = V || {};
        for (var i = "", b = 0; b < X.length; b++) {
          var t = X[b];
          t.type === "root" ? i += G(t.children, V) : s.isTag(t) ? i += a(t, V) : t.type === s.Directive ? i += I(t) : t.type === s.Comment ? i += p(t) : t.type === s.CDATA ? i += S(t) : i += h(t, V);
        }
        return i;
      }, y = [
        "mi",
        "mo",
        "mn",
        "ms",
        "mtext",
        "annotation-xml",
        "foreignObject",
        "desc",
        "title"
      ];
      function a(X, V) {
        V.xmlMode === "foreign" && (X.name = o.elementNames[X.name] || X.name, X.parent && y.indexOf(X.parent.name) >= 0 && (V = Object.assign({}, V, { xmlMode: !1 }))), !V.xmlMode && ["svg", "math"].indexOf(X.name) >= 0 && (V = Object.assign({}, V, { xmlMode: "foreign" }));
        var i = "<" + X.name, b = e(X.attribs, V);
        return b && (i += " " + b), V.xmlMode && (!X.children || X.children.length === 0) ? i += "/>" : (i += ">", X.children && (i += G(X.children, V)), (!n[X.name] || V.xmlMode) && (i += "</" + X.name + ">")), i;
      }
      function I(X) {
        return "<" + X.data + ">";
      }
      function h(X, V) {
        var i = X.data || "";
        return V.decodeEntities && !(X.parent && X.parent.name in u) && (i = c.encodeXML(i)), i;
      }
      function S(X) {
        return "<![CDATA[" + X.children[0].data + "]]>";
      }
      function p(X) {
        return "<!--" + X.data + "-->";
      }
    },
    /* 258 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      function s(c) {
        return c.type === "tag" || c.type === "script" || c.type === "style";
      }
      d.isTag = s, d.Text = "text", d.Directive = "directive", d.Comment = "comment", d.Script = "script", d.Style = "style", d.Tag = "tag", d.CDATA = "cdata", d.Doctype = "doctype";
    },
    /* 259 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.encode = d.decodeStrict = d.decode = void 0;
      var s = l(260), c = l(266);
      function o(y, a) {
        return (!a || a <= 0 ? s.decodeXML : s.decodeHTML)(y);
      }
      d.decode = o;
      function u(y, a) {
        return (!a || a <= 0 ? s.decodeXML : s.decodeHTMLStrict)(y);
      }
      d.decodeStrict = u;
      function e(y, a) {
        return (!a || a <= 0 ? c.encodeXML : c.encodeHTML)(y);
      }
      d.encode = e;
      var n = l(266);
      Object.defineProperty(d, "encodeXML", { enumerable: !0, get: function() {
        return n.encodeXML;
      } }), Object.defineProperty(d, "encodeHTML", { enumerable: !0, get: function() {
        return n.encodeHTML;
      } }), Object.defineProperty(d, "escape", { enumerable: !0, get: function() {
        return n.escape;
      } }), Object.defineProperty(d, "encodeHTML4", { enumerable: !0, get: function() {
        return n.encodeHTML;
      } }), Object.defineProperty(d, "encodeHTML5", { enumerable: !0, get: function() {
        return n.encodeHTML;
      } });
      var G = l(260);
      Object.defineProperty(d, "decodeXML", { enumerable: !0, get: function() {
        return G.decodeXML;
      } }), Object.defineProperty(d, "decodeHTML", { enumerable: !0, get: function() {
        return G.decodeHTML;
      } }), Object.defineProperty(d, "decodeHTMLStrict", { enumerable: !0, get: function() {
        return G.decodeHTMLStrict;
      } }), Object.defineProperty(d, "decodeHTML4", { enumerable: !0, get: function() {
        return G.decodeHTML;
      } }), Object.defineProperty(d, "decodeHTML5", { enumerable: !0, get: function() {
        return G.decodeHTML;
      } }), Object.defineProperty(d, "decodeHTML4Strict", { enumerable: !0, get: function() {
        return G.decodeHTMLStrict;
      } }), Object.defineProperty(d, "decodeHTML5Strict", { enumerable: !0, get: function() {
        return G.decodeHTMLStrict;
      } }), Object.defineProperty(d, "decodeXMLStrict", { enumerable: !0, get: function() {
        return G.decodeXML;
      } });
    },
    /* 260 */
    /***/
    function(Z, d, l) {
      var s = this && this.__importDefault || function(a) {
        return a && a.__esModule ? a : { default: a };
      };
      Object.defineProperty(d, "__esModule", { value: !0 }), d.decodeHTML = d.decodeHTMLStrict = d.decodeXML = void 0;
      var c = s(l(261)), o = s(l(262)), u = s(l(263)), e = s(l(264));
      d.decodeXML = n(u.default), d.decodeHTMLStrict = n(c.default);
      function n(a) {
        var I = Object.keys(a).join("|"), h = y(a);
        I += "|#[xX][\\da-fA-F]+|#\\d+";
        var S = new RegExp("&(?:" + I + ");", "g");
        return function(p) {
          return String(p).replace(S, h);
        };
      }
      var G = function(a, I) {
        return a < I ? 1 : -1;
      };
      d.decodeHTML = function() {
        for (var a = Object.keys(o.default).sort(G), I = Object.keys(c.default).sort(G), h = 0, S = 0; h < I.length; h++)
          a[S] === I[h] ? (I[h] += ";?", S++) : I[h] += ";";
        var p = new RegExp("&(?:" + I.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"), X = y(c.default);
        function V(i) {
          return i.substr(-1) !== ";" && (i += ";"), X(i);
        }
        return function(i) {
          return String(i).replace(p, V);
        };
      }();
      function y(a) {
        return function(h) {
          if (h.charAt(1) === "#") {
            var S = h.charAt(2);
            return S === "X" || S === "x" ? e.default(parseInt(h.substr(3), 16)) : e.default(parseInt(h.substr(2), 10));
          }
          return a[h.slice(1, -1)];
        };
      }
    },
    /* 261 */
    /***/
    function(Z) {
      Z.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}');
    },
    /* 262 */
    /***/
    function(Z) {
      Z.exports = JSON.parse('{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}');
    },
    /* 263 */
    /***/
    function(Z) {
      Z.exports = JSON.parse(`{"amp":"&","apos":"'","gt":">","lt":"<","quot":"\\""}`);
    },
    /* 264 */
    /***/
    function(Z, d, l) {
      var s = this && this.__importDefault || function(u) {
        return u && u.__esModule ? u : { default: u };
      };
      Object.defineProperty(d, "__esModule", { value: !0 });
      var c = s(l(265));
      function o(u) {
        if (u >= 55296 && u <= 57343 || u > 1114111)
          return "�";
        u in c.default && (u = c.default[u]);
        var e = "";
        return u > 65535 && (u -= 65536, e += String.fromCharCode(u >>> 10 & 1023 | 55296), u = 56320 | u & 1023), e += String.fromCharCode(u), e;
      }
      d.default = o;
    },
    /* 265 */
    /***/
    function(Z) {
      Z.exports = JSON.parse('{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}');
    },
    /* 266 */
    /***/
    function(Z, d, l) {
      var s = this && this.__importDefault || function(V) {
        return V && V.__esModule ? V : { default: V };
      };
      Object.defineProperty(d, "__esModule", { value: !0 }), d.escape = d.encodeHTML = d.encodeXML = void 0;
      var c = s(l(263)), o = y(c.default), u = a(o);
      d.encodeXML = S(o, u);
      var e = s(l(261)), n = y(e.default), G = a(n);
      d.encodeHTML = S(n, G);
      function y(V) {
        return Object.keys(V).sort().reduce(function(i, b) {
          return i[V[b]] = "&" + b + ";", i;
        }, {});
      }
      function a(V) {
        for (var i = [], b = [], t = 0, m = Object.keys(V); t < m.length; t++) {
          var K = m[t];
          K.length === 1 ? i.push("\\" + K) : b.push(K);
        }
        i.sort();
        for (var x = 0; x < i.length - 1; x++) {
          for (var C = x; C < i.length - 1 && i[C].charCodeAt(1) + 1 === i[C + 1].charCodeAt(1); )
            C += 1;
          var T = 1 + C - x;
          T < 3 || i.splice(x, T, i[x] + "-" + i[C]);
        }
        return b.unshift("[" + i.join("") + "]"), new RegExp(b.join("|"), "g");
      }
      var I = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
      function h(V) {
        return "&#x" + V.codePointAt(0).toString(16).toUpperCase() + ";";
      }
      function S(V, i) {
        return function(b) {
          return b.replace(i, function(t) {
            return V[t];
          }).replace(I, h);
        };
      }
      var p = a(o);
      function X(V) {
        return V.replace(p, h).replace(I, h);
      }
      d.escape = X;
    },
    /* 267 */
    /***/
    function(Z) {
      Z.exports = JSON.parse('{"elementNames":{"altglyph":"altGlyph","altglyphdef":"altGlyphDef","altglyphitem":"altGlyphItem","animatecolor":"animateColor","animatemotion":"animateMotion","animatetransform":"animateTransform","clippath":"clipPath","feblend":"feBlend","fecolormatrix":"feColorMatrix","fecomponenttransfer":"feComponentTransfer","fecomposite":"feComposite","feconvolvematrix":"feConvolveMatrix","fediffuselighting":"feDiffuseLighting","fedisplacementmap":"feDisplacementMap","fedistantlight":"feDistantLight","fedropshadow":"feDropShadow","feflood":"feFlood","fefunca":"feFuncA","fefuncb":"feFuncB","fefuncg":"feFuncG","fefuncr":"feFuncR","fegaussianblur":"feGaussianBlur","feimage":"feImage","femerge":"feMerge","femergenode":"feMergeNode","femorphology":"feMorphology","feoffset":"feOffset","fepointlight":"fePointLight","fespecularlighting":"feSpecularLighting","fespotlight":"feSpotLight","fetile":"feTile","feturbulence":"feTurbulence","foreignobject":"foreignObject","glyphref":"glyphRef","lineargradient":"linearGradient","radialgradient":"radialGradient","textpath":"textPath"},"attributeNames":{"definitionurl":"definitionURL","attributename":"attributeName","attributetype":"attributeType","basefrequency":"baseFrequency","baseprofile":"baseProfile","calcmode":"calcMode","clippathunits":"clipPathUnits","diffuseconstant":"diffuseConstant","edgemode":"edgeMode","filterunits":"filterUnits","glyphref":"glyphRef","gradienttransform":"gradientTransform","gradientunits":"gradientUnits","kernelmatrix":"kernelMatrix","kernelunitlength":"kernelUnitLength","keypoints":"keyPoints","keysplines":"keySplines","keytimes":"keyTimes","lengthadjust":"lengthAdjust","limitingconeangle":"limitingConeAngle","markerheight":"markerHeight","markerunits":"markerUnits","markerwidth":"markerWidth","maskcontentunits":"maskContentUnits","maskunits":"maskUnits","numoctaves":"numOctaves","pathlength":"pathLength","patterncontentunits":"patternContentUnits","patterntransform":"patternTransform","patternunits":"patternUnits","pointsatx":"pointsAtX","pointsaty":"pointsAtY","pointsatz":"pointsAtZ","preservealpha":"preserveAlpha","preserveaspectratio":"preserveAspectRatio","primitiveunits":"primitiveUnits","refx":"refX","refy":"refY","repeatcount":"repeatCount","repeatdur":"repeatDur","requiredextensions":"requiredExtensions","requiredfeatures":"requiredFeatures","specularconstant":"specularConstant","specularexponent":"specularExponent","spreadmethod":"spreadMethod","startoffset":"startOffset","stddeviation":"stdDeviation","stitchtiles":"stitchTiles","surfacescale":"surfaceScale","systemlanguage":"systemLanguage","tablevalues":"tableValues","targetx":"targetX","targety":"targetY","textlength":"textLength","viewbox":"viewBox","viewtarget":"viewTarget","xchannelselector":"xChannelSelector","ychannelselector":"yChannelSelector","zoomandpan":"zoomAndPan"}}');
    },
    /* 268 */
    /***/
    function(Z, d) {
      var l = d.getChildren = function(c) {
        return c.children;
      }, s = d.getParent = function(c) {
        return c.parent;
      };
      d.getSiblings = function(c) {
        var o = s(c);
        return o ? l(o) : [c];
      }, d.getAttributeValue = function(c, o) {
        return c.attribs && c.attribs[o];
      }, d.hasAttrib = function(c, o) {
        return !!c.attribs && hasOwnProperty.call(c.attribs, o);
      }, d.getName = function(c) {
        return c.name;
      };
    },
    /* 269 */
    /***/
    function(Z, d) {
      d.removeElement = function(l) {
        if (l.prev && (l.prev.next = l.next), l.next && (l.next.prev = l.prev), l.parent) {
          var s = l.parent.children;
          s.splice(s.lastIndexOf(l), 1);
        }
      }, d.replaceElement = function(l, s) {
        var c = s.prev = l.prev;
        c && (c.next = s);
        var o = s.next = l.next;
        o && (o.prev = s);
        var u = s.parent = l.parent;
        if (u) {
          var e = u.children;
          e[e.lastIndexOf(l)] = s;
        }
      }, d.appendChild = function(l, s) {
        if (s.parent = l, l.children.push(s) !== 1) {
          var c = l.children[l.children.length - 2];
          c.next = s, s.prev = c, s.next = null;
        }
      }, d.append = function(l, s) {
        var c = l.parent, o = l.next;
        if (s.next = o, s.prev = l, l.next = s, s.parent = c, o) {
          if (o.prev = s, c) {
            var u = c.children;
            u.splice(u.lastIndexOf(o), 0, s);
          }
        } else
          c && c.children.push(s);
      }, d.prepend = function(l, s) {
        var c = l.parent;
        if (c) {
          var o = c.children;
          o.splice(o.lastIndexOf(l), 0, s);
        }
        l.prev && (l.prev.next = s), s.parent = c, s.prev = l.prev, s.next = l, l.prev = s;
      };
    },
    /* 270 */
    /***/
    function(Z, d, l) {
      var s = l(256).isTag;
      Z.exports = {
        filter: c,
        find: o,
        findOneChild: u,
        findOne: e,
        existsOne: n,
        findAll: G
      };
      function c(y, a, I, h) {
        return Array.isArray(a) || (a = [a]), (typeof h != "number" || !isFinite(h)) && (h = 1 / 0), o(y, a, I !== !1, h);
      }
      function o(y, a, I, h) {
        for (var S = [], p, X = 0, V = a.length; X < V && !(y(a[X]) && (S.push(a[X]), --h <= 0) || (p = a[X].children, I && p && p.length > 0 && (p = o(y, p, I, h), S = S.concat(p), h -= p.length, h <= 0))); X++)
          ;
        return S;
      }
      function u(y, a) {
        for (var I = 0, h = a.length; I < h; I++)
          if (y(a[I]))
            return a[I];
        return null;
      }
      function e(y, a) {
        for (var I = null, h = 0, S = a.length; h < S && !I; h++)
          if (s(a[h]))
            y(a[h]) ? I = a[h] : a[h].children.length > 0 && (I = e(y, a[h].children));
          else
            continue;
        return I;
      }
      function n(y, a) {
        for (var I = 0, h = a.length; I < h; I++)
          if (s(a[I]) && (y(a[I]) || a[I].children.length > 0 && n(y, a[I].children)))
            return !0;
        return !1;
      }
      function G(y, a) {
        for (var I = [], h = a.slice(); h.length; ) {
          var S = h.shift();
          s(S) && (S.children && S.children.length > 0 && h.unshift.apply(h, S.children), y(S) && I.push(S));
        }
        return I;
      }
    },
    /* 271 */
    /***/
    function(Z, d, l) {
      var s = l(256), c = d.isTag = s.isTag;
      d.testElement = function(n, G) {
        for (var y in n)
          if (n.hasOwnProperty(y)) {
            if (y === "tag_name") {
              if (!c(G) || !n.tag_name(G.name))
                return !1;
            } else if (y === "tag_type") {
              if (!n.tag_type(G.type))
                return !1;
            } else if (y === "tag_contains") {
              if (c(G) || !n.tag_contains(G.data))
                return !1;
            } else if (!G.attribs || !n[y](G.attribs[y]))
              return !1;
          }
        return !0;
      };
      var o = {
        tag_name: function(n) {
          return typeof n == "function" ? function(G) {
            return c(G) && n(G.name);
          } : n === "*" ? c : function(G) {
            return c(G) && G.name === n;
          };
        },
        tag_type: function(n) {
          return typeof n == "function" ? function(G) {
            return n(G.type);
          } : function(G) {
            return G.type === n;
          };
        },
        tag_contains: function(n) {
          return typeof n == "function" ? function(G) {
            return !c(G) && n(G.data);
          } : function(G) {
            return !c(G) && G.data === n;
          };
        }
      };
      function u(n, G) {
        return typeof G == "function" ? function(y) {
          return y.attribs && G(y.attribs[n]);
        } : function(y) {
          return y.attribs && y.attribs[n] === G;
        };
      }
      function e(n, G) {
        return function(y) {
          return n(y) || G(y);
        };
      }
      d.getElements = function(n, G, y, a) {
        var I = Object.keys(n).map(function(h) {
          var S = n[h];
          return h in o ? o[h](S) : u(h, S);
        });
        return I.length === 0 ? [] : this.filter(
          I.reduce(e),
          G,
          y,
          a
        );
      }, d.getElementById = function(n, G, y) {
        return Array.isArray(G) || (G = [G]), this.findOne(u("id", n), G, y !== !1);
      }, d.getElementsByTagName = function(n, G, y, a) {
        return this.filter(o.tag_name(n), G, y, a);
      }, d.getElementsByTagType = function(n, G, y, a) {
        return this.filter(o.tag_type(n), G, y, a);
      };
    },
    /* 272 */
    /***/
    function(Z, d) {
      d.removeSubsets = function(c) {
        for (var o = c.length, u, e, n; --o > -1; ) {
          for (u = e = c[o], c[o] = null, n = !0; e; ) {
            if (c.indexOf(e) > -1) {
              n = !1, c.splice(o, 1);
              break;
            }
            e = e.parent;
          }
          n && (c[o] = u);
        }
        return c;
      };
      var l = {
        DISCONNECTED: 1,
        PRECEDING: 2,
        FOLLOWING: 4,
        CONTAINS: 8,
        CONTAINED_BY: 16
      }, s = d.compareDocumentPosition = function(c, o) {
        var u = [], e = [], n, G, y, a, I, h;
        if (c === o)
          return 0;
        for (n = c; n; )
          u.unshift(n), n = n.parent;
        for (n = o; n; )
          e.unshift(n), n = n.parent;
        for (h = 0; u[h] === e[h]; )
          h++;
        return h === 0 ? l.DISCONNECTED : (G = u[h - 1], y = G.children, a = u[h], I = e[h], y.indexOf(a) > y.indexOf(I) ? G === o ? l.FOLLOWING | l.CONTAINED_BY : l.FOLLOWING : G === c ? l.PRECEDING | l.CONTAINS : l.PRECEDING);
      };
      d.uniqueSort = function(c) {
        var o = c.length, u, e;
        for (c = c.slice(); --o > -1; )
          u = c[o], e = c.indexOf(u), e > -1 && e < o && c.splice(o, 1);
        return c.sort(function(n, G) {
          var y = s(n, G);
          return y & l.PRECEDING ? -1 : y & l.FOLLOWING ? 1 : 0;
        }), c;
      };
    },
    /* 273 */
    /***/
    function(Z, d) {
      Z.exports = {
        trueFunc: function() {
          return !0;
        },
        falseFunc: function() {
          return !1;
        }
      };
    },
    /* 274 */
    /***/
    function(Z, d, l) {
      Z.exports = I;
      var s = l(275).parse, c = l(273), o = l(278), u = l(279), e = l(280), n = l(282), G = c.trueFunc, y = c.falseFunc, a = n.filters;
      function I(R, J, F) {
        var r = S(R, J, F);
        return h(r, J);
      }
      function h(R, J) {
        var F = J.adapter;
        return function(Y) {
          return F.isTag(Y) && R(Y);
        };
      }
      function S(R, J, F) {
        var r = s(R, J);
        return m(r, J, F);
      }
      function p(R) {
        return R.type === "pseudo" && (R.name === "scope" || Array.isArray(R.data) && R.data.some(function(J) {
          return J.some(p);
        }));
      }
      var X = { type: "descendant" }, V = { type: "_flexibleDescendant" }, i = { type: "pseudo", name: "scope" }, b = {};
      function t(R, J, F) {
        var r = J.adapter, Y = !!F && !!F.length && F.every(function(H) {
          return H === b || !!r.getParent(H);
        });
        R.forEach(function(H) {
          if (!(H.length > 0 && K(H[0]) && H[0].type !== "descendant"))
            if (Y && !(Array.isArray(H) ? H.some(p) : p(H)))
              H.unshift(X);
            else
              return;
          H.unshift(i);
        });
      }
      function m(R, J, F) {
        R = R.filter(function(Q) {
          return Q.length > 0;
        }), R.forEach(o);
        var r = Array.isArray(F);
        F = J && J.context || F, F && !r && (F = [F]), t(R, J, F);
        var Y = !1, H = R.map(function(Q) {
          if (Q[0] && Q[1] && Q[0].name === "scope") {
            var w = Q[1].type;
            r && w === "descendant" ? Q[1] = V : (w === "adjacent" || w === "sibling") && (Y = !0);
          }
          return x(Q, J, F);
        }).reduce(C, y);
        return H.shouldTestNextSiblings = Y, H;
      }
      function K(R) {
        return u[R.type] < 0;
      }
      function x(R, J, F) {
        return R.reduce(function(r, Y) {
          if (r === y)
            return r;
          if (!(Y.type in e))
            throw new Error("Rule type " + Y.type + " is not supported by css-select");
          return e[Y.type](r, Y, J, F);
        }, J && J.rootFunc || G);
      }
      function C(R, J) {
        return J === y || R === G ? R : R === y || J === G ? J : function(r) {
          return R(r) || J(r);
        };
      }
      function T(R) {
        return R.some(K);
      }
      a.not = function(R, J, F, r) {
        var Y = {
          xmlMode: !!(F && F.xmlMode),
          strict: !!(F && F.strict),
          adapter: F.adapter
        };
        if (Y.strict && (J.length > 1 || J.some(T)))
          throw new Error("complex selectors in :not aren't allowed in strict mode");
        var H = m(J, Y, r);
        return H === y ? R : H === G ? y : function(w) {
          return !H(w) && R(w);
        };
      }, a.has = function(R, J, F) {
        var r = F.adapter, Y = {
          xmlMode: !!(F && F.xmlMode),
          strict: !!(F && F.strict),
          adapter: r
        }, H = J.some(T) ? [b] : null, Q = m(J, Y, H);
        return Q === y ? y : Q === G ? function(O) {
          return r.getChildren(O).some(r.isTag) && R(O);
        } : (Q = h(Q, F), H ? function(O) {
          return R(O) && (H[0] = O, r.existsOne(Q, r.getChildren(O)));
        } : function(O) {
          return R(O) && r.existsOne(Q, r.getChildren(O));
        });
      }, a.matches = function(R, J, F, r) {
        var Y = {
          xmlMode: !!(F && F.xmlMode),
          strict: !!(F && F.strict),
          rootFunc: R,
          adapter: F.adapter
        };
        return m(J, Y, r);
      }, I.compileToken = m, I.compileUnsafe = S, I.Pseudos = n;
    },
    /* 275 */
    /***/
    function(Z, d, l) {
      var s = this && this.__createBinding || (Object.create ? function(e, n, G, y) {
        y === void 0 && (y = G), Object.defineProperty(e, y, { enumerable: !0, get: function() {
          return n[G];
        } });
      } : function(e, n, G, y) {
        y === void 0 && (y = G), e[y] = n[G];
      }), c = this && this.__exportStar || function(e, n) {
        for (var G in e)
          G !== "default" && !n.hasOwnProperty(G) && s(n, e, G);
      };
      Object.defineProperty(d, "__esModule", { value: !0 }), c(l(276), d);
      var o = l(276);
      Object.defineProperty(d, "parse", { enumerable: !0, get: function() {
        return o.default;
      } });
      var u = l(277);
      Object.defineProperty(d, "stringify", { enumerable: !0, get: function() {
        return u.default;
      } });
    },
    /* 276 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", { value: !0 }), d.default = p;
      var s = /^[^\\]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, c = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, o = /^\s*((?:\\.|[\w\u00b0-\uFFFF-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF-])*)|)|)\s*(i)?\]/, u = {
        undefined: "exists",
        "": "equals",
        "~": "element",
        "^": "start",
        $: "end",
        "*": "any",
        "!": "not",
        "|": "hyphen"
      }, e = {
        ">": "child",
        "<": "parent",
        "~": "sibling",
        "+": "adjacent"
      }, n = {
        "#": ["id", "equals"],
        ".": ["class", "element"]
      }, G = /* @__PURE__ */ new Set(["has", "not", "matches"]), y = /* @__PURE__ */ new Set(["contains", "icontains"]), a = /* @__PURE__ */ new Set(['"', "'"]);
      function I(i, b, t) {
        var m = parseInt(b, 16) - 65536;
        return m !== m || t ? b : m < 0 ? (
          // BMP codepoint
          String.fromCharCode(m + 65536)
        ) : (
          // Supplemental Plane codepoint (surrogate pair)
          String.fromCharCode(m >> 10 | 55296, m & 1023 | 56320)
        );
      }
      function h(i) {
        return i.replace(c, I);
      }
      function S(i) {
        return i === " " || i === `
` || i === "	" || i === "\f" || i === "\r";
      }
      function p(i, b) {
        var t = [];
        if (i = X(t, "" + i, b), i !== "")
          throw new Error("Unmatched selector: " + i);
        return t;
      }
      function X(i, b, t) {
        var m = [], K = !1;
        function x() {
          var D = b.match(s);
          if (!D)
            throw new Error("Expected name, found " + b);
          var ll = D[0];
          return b = b.substr(ll.length), h(ll);
        }
        function C(D) {
          for (; S(b.charAt(D)); )
            D++;
          b = b.substr(D);
        }
        function T(D) {
          for (var ll = 0; b.charAt(--D) === "\\"; )
            ll++;
          return (ll & 1) === 1;
        }
        for (C(0); b !== ""; ) {
          var R = b.charAt(0);
          if (S(R))
            K = !0, C(1);
          else if (R in e)
            m.push({ type: e[R] }), K = !1, C(1);
          else if (R === ",") {
            if (m.length === 0)
              throw new Error("Empty sub-selector");
            i.push(m), m = [], K = !1, C(1);
          } else if (K && (m.length > 0 && m.push({ type: "descendant" }), K = !1), R === "*")
            b = b.substr(1), m.push({ type: "universal" });
          else if (R in n) {
            var J = n[R], F = J[0], r = J[1];
            b = b.substr(1), m.push({
              type: "attribute",
              name: F,
              action: r,
              value: x(),
              ignoreCase: !1
            });
          } else if (R === "[") {
            b = b.substr(1);
            var Y = b.match(o);
            if (!Y)
              throw new Error("Malformed attribute selector: " + b);
            b = b.substr(Y[0].length);
            var H = h(Y[1]);
            (!t || ("lowerCaseAttributeNames" in t ? t.lowerCaseAttributeNames : !t.xmlMode)) && (H = H.toLowerCase()), m.push({
              type: "attribute",
              name: H,
              action: u[Y[2]],
              value: h(Y[4] || Y[5] || ""),
              ignoreCase: !!Y[6]
            });
          } else if (R === ":") {
            if (b.charAt(1) === ":") {
              b = b.substr(2), m.push({
                type: "pseudo-element",
                name: x().toLowerCase()
              });
              continue;
            }
            b = b.substr(1);
            var Q = x().toLowerCase(), Y = null;
            if (b.charAt(0) === "(")
              if (G.has(Q)) {
                var w = b.charAt(1), O = a.has(w);
                if (b = b.substr(O ? 2 : 1), Y = [], b = X(Y, b, t), O) {
                  if (b.charAt(0) !== w)
                    throw new Error("Unmatched quotes in :" + Q);
                  b = b.substr(1);
                }
                if (b.charAt(0) !== ")")
                  throw new Error("Missing closing parenthesis in :" + Q + " (" + b + ")");
                b = b.substr(1);
              } else {
                for (var q = 1, k = 1; k > 0 && q < b.length; q++)
                  b.charAt(q) === "(" && !T(q) ? k++ : b.charAt(q) === ")" && !T(q) && k--;
                if (k)
                  throw new Error("Parenthesis not matched");
                if (Y = b.substr(1, q - 2), b = b.substr(q), y.has(Q)) {
                  var w = Y.charAt(0);
                  w === Y.slice(-1) && a.has(w) && (Y = Y.slice(1, -1)), Y = h(Y);
                }
              }
            m.push({ type: "pseudo", name: Q, data: Y });
          } else if (s.test(b)) {
            var P = x();
            (!t || ("lowerCaseTags" in t ? t.lowerCaseTags : !t.xmlMode)) && (P = P.toLowerCase()), m.push({ type: "tag", name: P });
          } else
            return m.length && m[m.length - 1].type === "descendant" && m.pop(), V(i, m), b;
        }
        return V(i, m), b;
      }
      function V(i, b) {
        if (i.length > 0 && b.length === 0)
          throw new Error("Empty sub-selector");
        i.push(b);
      }
    },
    /* 277 */
    /***/
    function(Z, d, l) {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var s = {
        equals: "",
        element: "~",
        start: "^",
        end: "$",
        any: "*",
        not: "!",
        hyphen: "|"
      };
      function c(n) {
        return n.map(o).join(", ");
      }
      d.default = c;
      function o(n) {
        return n.map(u).join("");
      }
      function u(n) {
        switch (n.type) {
          case "child":
            return " > ";
          case "parent":
            return " < ";
          case "sibling":
            return " ~ ";
          case "adjacent":
            return " + ";
          case "descendant":
            return " ";
          case "universal":
            return "*";
          case "tag":
            return n.name;
          case "pseudo-element":
            return "::" + n.name;
          case "pseudo":
            return n.data === null ? ":" + n.name : typeof n.data == "string" ? ":" + n.name + "(" + n.data + ")" : ":" + n.name + "(" + c(n.data) + ")";
          case "attribute":
            return n.action === "exists" ? "[" + n.name + "]" : n.name === "id" && n.action === "equals" && !n.ignoreCase ? "#" + n.value : n.name === "class" && n.action === "element" && !n.ignoreCase ? "." + n.value : "[" + n.name + s[n.action] + "='" + n.value + "'" + (n.ignoreCase ? "i" : "") + "]";
          default:
            throw new Error("Unknown type");
        }
      }
      function e(n) {
        return n;
      }
    },
    /* 278 */
    /***/
    function(Z, d, l) {
      Z.exports = o;
      var s = l(279), c = {
        __proto__: null,
        exists: 10,
        equals: 8,
        not: 7,
        start: 6,
        end: 6,
        any: 5,
        hyphen: 4,
        element: 4
      };
      function o(e) {
        for (var n = e.map(u), G = 1; G < e.length; G++) {
          var y = n[G];
          if (!(y < 0))
            for (var a = G - 1; a >= 0 && y < n[a]; a--) {
              var I = e[a + 1];
              e[a + 1] = e[a], e[a] = I, n[a + 1] = n[a], n[a] = y;
            }
        }
      }
      function u(e) {
        var n = s[e.type];
        if (n === s.attribute)
          n = c[e.action], n === c.equals && e.name === "id" && (n = 9), e.ignoreCase && (n >>= 1);
        else if (n === s.pseudo)
          if (!e.data)
            n = 3;
          else if (e.name === "has" || e.name === "contains")
            n = 0;
          else if (e.name === "matches" || e.name === "not") {
            n = 0;
            for (var G = 0; G < e.data.length; G++)
              if (e.data[G].length === 1) {
                var y = u(e.data[G][0]);
                if (y === 0) {
                  n = 0;
                  break;
                }
                y > n && (n = y);
              }
            e.data.length > 1 && n > 0 && (n -= 1);
          } else
            n = 1;
        return n;
      }
    },
    /* 279 */
    /***/
    function(Z) {
      Z.exports = JSON.parse('{"universal":50,"tag":30,"attribute":1,"pseudo":0,"descendant":-1,"child":-1,"parent":-1,"sibling":-1,"adjacent":-1}');
    },
    /* 280 */
    /***/
    function(Z, d, l) {
      var s = l(281), c = l(282);
      Z.exports = {
        __proto__: null,
        attribute: s.compile,
        pseudo: c.compile,
        //tags
        tag: function(o, u, e) {
          var n = u.name, G = e.adapter;
          return function(a) {
            return G.getName(a) === n && o(a);
          };
        },
        //traversal
        descendant: function(o, u, e) {
          var n = typeof WeakSet < "u" ? /* @__PURE__ */ new WeakSet() : null, G = e.adapter;
          return function(a) {
            for (var I = !1; !I && (a = G.getParent(a)); )
              (!n || !n.has(a)) && (I = o(a), !I && n && n.add(a));
            return I;
          };
        },
        _flexibleDescendant: function(o, u, e) {
          var n = e.adapter;
          return function(y) {
            for (var a = o(y); !a && (y = n.getParent(y)); )
              a = o(y);
            return a;
          };
        },
        parent: function(o, u, e) {
          if (e && e.strict)
            throw new Error("Parent selector isn't part of CSS3");
          var n = e.adapter;
          return function(a) {
            return n.getChildren(a).some(G);
          };
          function G(y) {
            return n.isTag(y) && o(y);
          }
        },
        child: function(o, u, e) {
          var n = e.adapter;
          return function(y) {
            var a = n.getParent(y);
            return !!a && o(a);
          };
        },
        sibling: function(o, u, e) {
          var n = e.adapter;
          return function(y) {
            for (var a = n.getSiblings(y), I = 0; I < a.length; I++)
              if (n.isTag(a[I])) {
                if (a[I] === y)
                  break;
                if (o(a[I]))
                  return !0;
              }
            return !1;
          };
        },
        adjacent: function(o, u, e) {
          var n = e.adapter;
          return function(y) {
            for (var a = n.getSiblings(y), I, h = 0; h < a.length; h++)
              if (n.isTag(a[h])) {
                if (a[h] === y)
                  break;
                I = a[h];
              }
            return !!I && o(I);
          };
        },
        universal: function(o) {
          return o;
        }
      };
    },
    /* 281 */
    /***/
    function(Z, d, l) {
      var s = l(273).falseFunc, c = /[-[\]{}()*+?.,\\^$|#\s]/g, o = {
        __proto__: null,
        equals: function(u, e, n) {
          var G = e.name, y = e.value, a = n.adapter;
          return e.ignoreCase ? (y = y.toLowerCase(), function(h) {
            var S = a.getAttributeValue(h, G);
            return S != null && S.toLowerCase() === y && u(h);
          }) : function(h) {
            return a.getAttributeValue(h, G) === y && u(h);
          };
        },
        hyphen: function(u, e, n) {
          var G = e.name, y = e.value, a = y.length, I = n.adapter;
          return e.ignoreCase ? (y = y.toLowerCase(), function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && (p.length === a || p.charAt(a) === "-") && p.substr(0, a).toLowerCase() === y && u(S);
          }) : function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && p.substr(0, a) === y && (p.length === a || p.charAt(a) === "-") && u(S);
          };
        },
        element: function(u, e, n) {
          var G = e.name, y = e.value, a = n.adapter;
          if (/\s/.test(y))
            return s;
          y = y.replace(c, "\\$&");
          var I = "(?:^|\\s)" + y + "(?:$|\\s)", h = e.ignoreCase ? "i" : "", S = new RegExp(I, h);
          return function(X) {
            var V = a.getAttributeValue(X, G);
            return V != null && S.test(V) && u(X);
          };
        },
        exists: function(u, e, n) {
          var G = e.name, y = n.adapter;
          return function(I) {
            return y.hasAttrib(I, G) && u(I);
          };
        },
        start: function(u, e, n) {
          var G = e.name, y = e.value, a = y.length, I = n.adapter;
          return a === 0 ? s : e.ignoreCase ? (y = y.toLowerCase(), function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && p.substr(0, a).toLowerCase() === y && u(S);
          }) : function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && p.substr(0, a) === y && u(S);
          };
        },
        end: function(u, e, n) {
          var G = e.name, y = e.value, a = -y.length, I = n.adapter;
          return a === 0 ? s : e.ignoreCase ? (y = y.toLowerCase(), function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && p.substr(a).toLowerCase() === y && u(S);
          }) : function(S) {
            var p = I.getAttributeValue(S, G);
            return p != null && p.substr(a) === y && u(S);
          };
        },
        any: function(u, e, n) {
          var G = e.name, y = e.value, a = n.adapter;
          if (y === "")
            return s;
          if (e.ignoreCase) {
            var I = new RegExp(y.replace(c, "\\$&"), "i");
            return function(S) {
              var p = a.getAttributeValue(S, G);
              return p != null && I.test(p) && u(S);
            };
          }
          return function(S) {
            var p = a.getAttributeValue(S, G);
            return p != null && p.indexOf(y) >= 0 && u(S);
          };
        },
        not: function(u, e, n) {
          var G = e.name, y = e.value, a = n.adapter;
          return y === "" ? function(h) {
            return !!a.getAttributeValue(h, G) && u(h);
          } : e.ignoreCase ? (y = y.toLowerCase(), function(h) {
            var S = a.getAttributeValue(h, G);
            return S != null && S.toLowerCase() !== y && u(h);
          }) : function(h) {
            return a.getAttributeValue(h, G) !== y && u(h);
          };
        }
      };
      Z.exports = {
        compile: function(u, e, n) {
          if (n && n.strict && (e.ignoreCase || e.action === "not"))
            throw new Error("Unsupported attribute selector");
          return o[e.action](u, e, n);
        },
        rules: o
      };
    },
    /* 282 */
    /***/
    function(Z, d, l) {
      var s = l(283), c = l(273), o = l(281), u = c.trueFunc, e = c.falseFunc, n = o.rules.equals;
      function G(V, i) {
        var b = { name: V, value: i };
        return function(m, K, x) {
          return n(m, b, x);
        };
      }
      function y(V, i) {
        return function(b) {
          return !!i.getParent(b) && V(b);
        };
      }
      var a = {
        contains: function(V, i, b) {
          var t = b.adapter;
          return function(K) {
            return V(K) && t.getText(K).indexOf(i) >= 0;
          };
        },
        icontains: function(V, i, b) {
          var t = i.toLowerCase(), m = b.adapter;
          return function(x) {
            return V(x) && m.getText(x).toLowerCase().indexOf(t) >= 0;
          };
        },
        //location specific methods
        "nth-child": function(V, i, b) {
          var t = s(i), m = b.adapter;
          return t === e ? t : t === u ? y(V, m) : function(x) {
            for (var C = m.getSiblings(x), T = 0, R = 0; T < C.length; T++)
              if (m.isTag(C[T])) {
                if (C[T] === x)
                  break;
                R++;
              }
            return t(R) && V(x);
          };
        },
        "nth-last-child": function(V, i, b) {
          var t = s(i), m = b.adapter;
          return t === e ? t : t === u ? y(V, m) : function(x) {
            for (var C = m.getSiblings(x), T = 0, R = C.length - 1; R >= 0; R--)
              if (m.isTag(C[R])) {
                if (C[R] === x)
                  break;
                T++;
              }
            return t(T) && V(x);
          };
        },
        "nth-of-type": function(V, i, b) {
          var t = s(i), m = b.adapter;
          return t === e ? t : t === u ? y(V, m) : function(x) {
            for (var C = m.getSiblings(x), T = 0, R = 0; R < C.length; R++)
              if (m.isTag(C[R])) {
                if (C[R] === x)
                  break;
                m.getName(C[R]) === m.getName(x) && T++;
              }
            return t(T) && V(x);
          };
        },
        "nth-last-of-type": function(V, i, b) {
          var t = s(i), m = b.adapter;
          return t === e ? t : t === u ? y(V, m) : function(x) {
            for (var C = m.getSiblings(x), T = 0, R = C.length - 1; R >= 0; R--)
              if (m.isTag(C[R])) {
                if (C[R] === x)
                  break;
                m.getName(C[R]) === m.getName(x) && T++;
              }
            return t(T) && V(x);
          };
        },
        //TODO determine the actual root element
        root: function(V, i, b) {
          var t = b.adapter;
          return function(m) {
            return !t.getParent(m) && V(m);
          };
        },
        scope: function(V, i, b, t) {
          var m = b.adapter;
          if (!t || t.length === 0)
            return a.root(V, i, b);
          function K(x, C) {
            return typeof m.equals == "function" ? m.equals(x, C) : x === C;
          }
          return t.length === 1 ? function(x) {
            return K(t[0], x) && V(x);
          } : function(x) {
            return t.indexOf(x) >= 0 && V(x);
          };
        },
        //jQuery extensions (others follow as pseudos)
        checkbox: G("type", "checkbox"),
        file: G("type", "file"),
        password: G("type", "password"),
        radio: G("type", "radio"),
        reset: G("type", "reset"),
        image: G("type", "image"),
        submit: G("type", "submit"),
        //dynamic state pseudos. These depend on optional Adapter methods.
        hover: function(V, i, b) {
          var t = b.adapter;
          return typeof t.isHovered == "function" ? function(K) {
            return V(K) && t.isHovered(K);
          } : e;
        },
        visited: function(V, i, b) {
          var t = b.adapter;
          return typeof t.isVisited == "function" ? function(K) {
            return V(K) && t.isVisited(K);
          } : e;
        },
        active: function(V, i, b) {
          var t = b.adapter;
          return typeof t.isActive == "function" ? function(K) {
            return V(K) && t.isActive(K);
          } : e;
        }
      };
      function I(V, i) {
        for (var b = 0; V && b < V.length; b++)
          if (i.isTag(V[b]))
            return V[b];
      }
      var h = {
        empty: function(V, i) {
          return !i.getChildren(V).some(function(b) {
            return i.isTag(b) || b.type === "text";
          });
        },
        "first-child": function(V, i) {
          return I(i.getSiblings(V), i) === V;
        },
        "last-child": function(V, i) {
          for (var b = i.getSiblings(V), t = b.length - 1; t >= 0; t--) {
            if (b[t] === V)
              return !0;
            if (i.isTag(b[t]))
              break;
          }
          return !1;
        },
        "first-of-type": function(V, i) {
          for (var b = i.getSiblings(V), t = 0; t < b.length; t++)
            if (i.isTag(b[t])) {
              if (b[t] === V)
                return !0;
              if (i.getName(b[t]) === i.getName(V))
                break;
            }
          return !1;
        },
        "last-of-type": function(V, i) {
          for (var b = i.getSiblings(V), t = b.length - 1; t >= 0; t--)
            if (i.isTag(b[t])) {
              if (b[t] === V)
                return !0;
              if (i.getName(b[t]) === i.getName(V))
                break;
            }
          return !1;
        },
        "only-of-type": function(V, i) {
          for (var b = i.getSiblings(V), t = 0, m = b.length; t < m; t++)
            if (i.isTag(b[t])) {
              if (b[t] === V)
                continue;
              if (i.getName(b[t]) === i.getName(V))
                return !1;
            }
          return !0;
        },
        "only-child": function(V, i) {
          for (var b = i.getSiblings(V), t = 0; t < b.length; t++)
            if (i.isTag(b[t]) && b[t] !== V)
              return !1;
          return !0;
        },
        //:matches(a, area, link)[href]
        link: function(V, i) {
          return i.hasAttrib(V, "href");
        },
        //TODO: :any-link once the name is finalized (as an alias of :link)
        //forms
        //to consider: :target
        //:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
        selected: function(V, i) {
          if (i.hasAttrib(V, "selected"))
            return !0;
          if (i.getName(V) !== "option")
            return !1;
          var b = i.getParent(V);
          if (!b || i.getName(b) !== "select" || i.hasAttrib(b, "multiple"))
            return !1;
          for (var t = i.getChildren(b), m = !1, K = 0; K < t.length; K++)
            if (i.isTag(t[K]))
              if (t[K] === V)
                m = !0;
              else if (m) {
                if (i.hasAttrib(t[K], "selected"))
                  return !1;
              } else
                return !1;
          return m;
        },
        //https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
        //:matches(
        //  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
        //  optgroup[disabled] > option),
        // fieldset[disabled] * //TODO not child of first <legend>
        //)
        disabled: function(V, i) {
          return i.hasAttrib(V, "disabled");
        },
        enabled: function(V, i) {
          return !i.hasAttrib(V, "disabled");
        },
        //:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
        checked: function(V, i) {
          return i.hasAttrib(V, "checked") || h.selected(V, i);
        },
        //:matches(input, select, textarea)[required]
        required: function(V, i) {
          return i.hasAttrib(V, "required");
        },
        //:matches(input, select, textarea):not([required])
        optional: function(V, i) {
          return !i.hasAttrib(V, "required");
        },
        //jQuery extensions
        //:not(:empty)
        parent: function(V, i) {
          return !h.empty(V, i);
        },
        //:matches(h1, h2, h3, h4, h5, h6)
        header: S(["h1", "h2", "h3", "h4", "h5", "h6"]),
        //:matches(button, input[type=button])
        button: function(V, i) {
          var b = i.getName(V);
          return b === "button" || b === "input" && i.getAttributeValue(V, "type") === "button";
        },
        //:matches(input, textarea, select, button)
        input: S(["input", "textarea", "select", "button"]),
        //input:matches(:not([type!='']), [type='text' i])
        text: function(V, i) {
          var b;
          return i.getName(V) === "input" && (!(b = i.getAttributeValue(V, "type")) || b.toLowerCase() === "text");
        }
      };
      function S(V) {
        if (typeof Set < "u") {
          var i = new Set(V);
          return function(b, t) {
            return i.has(t.getName(b));
          };
        }
        return function(b, t) {
          return V.indexOf(t.getName(b)) >= 0;
        };
      }
      function p(V, i, b) {
        if (b === null) {
          if (V.length > 2 && i !== "scope")
            throw new Error("pseudo-selector :" + i + " requires an argument");
        } else if (V.length === 2)
          throw new Error("pseudo-selector :" + i + " doesn't have any arguments");
      }
      var X = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
      Z.exports = {
        compile: function(V, i, b, t) {
          var m = i.name, K = i.data, x = b.adapter;
          if (b && b.strict && !X.test(m))
            throw new Error(":" + m + " isn't part of CSS3");
          if (typeof a[m] == "function")
            return a[m](V, K, b, t);
          if (typeof h[m] == "function") {
            var C = h[m];
            return p(C, m, K), C === e ? C : V === u ? function(R) {
              return C(R, x, K);
            } : function(R) {
              return C(R, x, K) && V(R);
            };
          } else
            throw new Error("unmatched pseudo-class :" + m);
        },
        filters: a,
        pseudos: h
      };
    },
    /* 283 */
    /***/
    function(Z, d, l) {
      var s = l(284), c = l(285);
      Z.exports = function(u) {
        return c(s(u));
      }, Z.exports.parse = s, Z.exports.compile = c;
    },
    /* 284 */
    /***/
    function(Z, d) {
      Z.exports = s;
      var l = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
      function s(c) {
        if (c = c.trim().toLowerCase(), c === "even")
          return [2, 0];
        if (c === "odd")
          return [2, 1];
        var o = c.match(l);
        if (!o)
          throw new SyntaxError("n-th rule couldn't be parsed ('" + c + "')");
        var u;
        return o[1] ? (u = parseInt(o[1], 10), isNaN(u) && (o[1].charAt(0) === "-" ? u = -1 : u = 1)) : u = 0, [
          u,
          o[3] ? parseInt((o[2] || "") + o[3], 10) : 0
        ];
      }
    },
    /* 285 */
    /***/
    function(Z, d, l) {
      Z.exports = u;
      var s = l(273), c = s.trueFunc, o = s.falseFunc;
      function u(e) {
        var n = e[0], G = e[1] - 1;
        if (G < 0 && n <= 0)
          return o;
        if (n === -1)
          return function(a) {
            return a <= G;
          };
        if (n === 0)
          return function(a) {
            return a === G;
          };
        if (n === 1)
          return G < 0 ? c : function(a) {
            return a >= G;
          };
        var y = G % n;
        return y < 0 && (y += n), n > 1 ? function(a) {
          return a >= G && a % n === y;
        } : (n *= -1, function(a) {
          return a <= G && a % n === y;
        });
      }
    },
    /* 286 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return K;
      });
      var s = l(12), c = l(74), o = l(1), u = l(68), e = l(250), n = l(213), G = l(218);
      l(1).glMatrix.setMatrixArrayType(Array);
      function y(x, C) {
        if (x == null)
          return {};
        var T = a(x, C), R, J;
        if (Object.getOwnPropertySymbols) {
          var F = Object.getOwnPropertySymbols(x);
          for (J = 0; J < F.length; J++)
            R = F[J], !(C.indexOf(R) >= 0) && Object.prototype.propertyIsEnumerable.call(x, R) && (T[R] = x[R]);
        }
        return T;
      }
      function a(x, C) {
        if (x == null)
          return {};
        var T = {}, R = Object.keys(x), J, F;
        for (F = 0; F < R.length; F++)
          J = R[F], !(C.indexOf(J) >= 0) && (T[J] = x[J]);
        return T;
      }
      const I = {
        antialias: !0,
        autoRender: !0,
        alpha: !0
        // for wx-miniprogram
      }, h = Symbol("autoRender"), S = Symbol("renderer"), p = Symbol("timeline"), X = Symbol("prepareRender"), V = Symbol("tickRender"), i = Symbol("pass"), b = Symbol("fbo"), t = Symbol("tickers"), m = Symbol("layerTransformInvert");
      class K extends e.default {
        constructor(C = {}) {
          if (super(), !C.canvas) {
            const {
              width: F,
              height: r
            } = this.getResolution(), Y = s.ENV.createCanvas(F, r, {
              offscreen: !!C.offscreen,
              id: C.id,
              extra: C.extra
            });
            Y.style && (Y.style.position = "absolute"), Y.dataset && (Y.dataset.layerId = C.id), Y.contextType && (C.contextType = Y.contextType), C.canvas = Y;
          }
          const T = C.canvas, R = Object.assign({}, I, C);
          this[h] = R.autoRender, delete C.autoRender;
          const J = R.Renderer || s.Renderer;
          this[S] = new J(T, R), this.options = C, this.id = C.id, this[i] = [], this.setResolution(T), this.canvas = T, this[p] = new c.Timeline(), this.__mouseCapturedTarget = null, this[m] = null;
        }
        get autoRender() {
          return this[h];
        }
        get displayRatio() {
          return this.parent && this.parent.options ? this.parent.options.displayRatio : 1;
        }
        get height() {
          const {
            height: C
          } = this.getResolution();
          return C / this.displayRatio;
        }
        get gl() {
          return this.renderer.glRenderer ? this.renderer.glRenderer.gl : null;
        }
        /* override */
        get layer() {
          return this;
        }
        get offscreen() {
          return !!this.options.offscreen || this.canvas._offscreen;
        }
        get pass() {
          return this[i];
        }
        get prepareRender() {
          return this[X] ? this[X] : Promise.resolve();
        }
        /* override */
        get renderer() {
          return this[S];
        }
        get renderOffset() {
          if (this.parent && this.parent.options) {
            const {
              left: C,
              top: T
            } = this.parent.options;
            return [C, T];
          }
          return [this.options.left | 0, this.options.top | 0];
        }
        get timeline() {
          return this[p];
        }
        get width() {
          const {
            width: C
          } = this.getResolution();
          return C / this.displayRatio;
        }
        get localMatrix() {
          const {
            x: C,
            y: T
          } = this.attributes;
          return [1, 0, 0, 1, C, T];
        }
        get layerTransformInvert() {
          if (this[m])
            return this[m];
          const C = this.transformMatrix;
          return C[0] === 1 && C[1] === 0 && C[2] === 0 && C[3] === 1 && C[4] === 0 && C[5] === 0 ? null : (this[m] = o.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), C), this[m]);
        }
        forceContextLoss() {
          const C = this.renderer.glRenderer;
          if (C) {
            const T = C.getExtension("WEBGL_lose_context");
            if (T)
              return T.loseContext(), !0;
          }
          return !1;
        }
        // isPointCollision(x, y) {
        //   return true;
        // }
        addPass({
          vertex: C,
          fragment: T,
          options: R,
          uniforms: J
        } = {}) {
          if (this.renderer.glRenderer) {
            const {
              width: F,
              height: r
            } = this.getResolution(), Y = this.renderer.createPassProgram({
              vertex: C,
              fragment: T,
              options: R
            }), H = new s.Figure2D();
            H.rect(0, 0, F / this.displayRatio, r / this.displayRatio);
            const Q = new s.Mesh2D(H);
            return Q.setUniforms(J), Q.setProgram(Y), this[i].push(Q), this.forceUpdate(), Q;
          }
          return null;
        }
        // delete unused texture to release memory.
        deleteTexture(C) {
          return Object(G.deleteTexture)(C, this.renderer);
        }
        /* override */
        dispatchPointerEvent(C) {
          const T = C.type;
          if (T === "mousedown" || T === "mouseup" || T === "mousemove") {
            const Y = this.__mouseCapturedTarget;
            if (Y) {
              if (Y.layer === this)
                return Y.dispatchEvent(C), !0;
              this.__mouseCapturedTarget = null;
            }
          }
          let R, J;
          const F = this.layerTransformInvert;
          if (F) {
            R = C.x, J = C.y;
            const Y = F, H = Y[0] * R + Y[2] * J + Y[4], Q = Y[1] * R + Y[3] * J + Y[5];
            delete C.x, delete C.y, delete C.layerX, delete C.layerY, Object.defineProperties(C, {
              layerX: {
                value: H,
                configurable: !0
              },
              layerY: {
                value: Q,
                configurable: !0
              },
              x: {
                value: H,
                configurable: !0
              },
              y: {
                value: Q,
                configurable: !0
              }
            });
          }
          const r = super.dispatchPointerEvent(C);
          return F && Object.defineProperties(C, {
            layerX: {
              value: R,
              configurable: !0
            },
            layerY: {
              value: J,
              configurable: !0
            },
            x: {
              value: R,
              configurable: !0
            },
            y: {
              value: J,
              configurable: !0
            }
          }), r;
        }
        /* override */
        forceUpdate() {
          if (!this[X])
            if (this.parent && this.parent.hasOffscreenCanvas) {
              this.parent.forceUpdate();
              let C = null;
              const T = new Promise((R) => {
                C = R;
              });
              T._resolve = C, this[X] = T;
            } else {
              let C = null, T = null;
              const R = new Promise((J) => {
                C = J, this[h] && (T = Object(u.requestAnimationFrame)(() => {
                  delete R._requestID, this.render();
                }));
              });
              R._resolve = C, R._requestID = T, this[X] = R;
            }
        }
        getFBO() {
          const C = this.renderer.glRenderer, {
            width: T,
            height: R
          } = this.getResolution();
          return C && (!this[b] || this[b].width !== T || this[b].height !== R) ? (this[b] = {
            width: T,
            height: R,
            target: C.createFBO(),
            buffer: C.createFBO(),
            swap() {
              [this.target, this.buffer] = [this.buffer, this.target];
            }
          }, this[b]) : this[b] ? this[b] : null;
        }
        updateGlobalTransform() {
          if (this.layerTransformInvert) {
            const C = this.renderer, T = C.__globalTransformMatrix || C.globalTransformMatrix;
            C.__globalTransformMatrix = T;
            const R = o.mat2d.fromValues(1, 0, 0, 1, 0, 0);
            C.setGlobalTransform(...o.mat2d.multiply(R, T, this.transformMatrix));
          }
        }
        /* override */
        onPropertyChange(C, T, R) {
          if (super.onPropertyChange(C, T, R), C === "zIndex" && (this.canvas.style.zIndex = T), C === "transform" || C === "translate" || C === "rotate" || C === "scale" || C === "skew") {
            const J = this[m];
            if (this[m] = null, this.updateGlobalTransform(), J && !this.layerTransformInvert) {
              const F = this.renderer, r = F.__globalTransformMatrix || F.globalTransformMatrix;
              F.setGlobalTransform(...r);
            }
          }
        }
        _prepareRenderFinished() {
          this[X] && (this[X]._requestID && Object(u.cancelAnimationFrame)(this[X]._requestID), this[X]._resolve(), delete this[X]);
        }
        render({
          clear: C = !0
        } = {}) {
          const T = this[i].length ? this.getFBO() : null;
          T && this.renderer.glRenderer.bindFBO(T.target), C && this[S].clear();
          const R = this.draw();
          if (R && R.length && (this.renderer.drawMeshes(R), this.canvas.draw && this.canvas.draw()), T) {
            const J = this.renderer.glRenderer, F = this[i].length, {
              width: r,
              height: Y
            } = this.getResolution(), H = [0, 0, r / this.displayRatio, Y / this.displayRatio];
            this[i].forEach((Q, w) => {
              Q.blend = !0, Q.setTexture(T.target.texture, {
                rect: H
              }), w === F - 1 ? J.bindFBO(null) : (T.swap(), J.bindFBO(T.target)), this[S].clear(), this.renderer.drawMeshes([Q]);
            });
          }
          this._prepareRenderFinished();
        }
        /* override */
        setResolution({
          width: C,
          height: T
        }) {
          const R = this.renderer, J = R.__globalTransformMatrix || R.globalTransformMatrix, F = J[4], r = J[5], Y = J[0], {
            width: H,
            height: Q
          } = this.getResolution();
          (H !== C || Q !== T) && (super.setResolution({
            width: C,
            height: T
          }), this.canvas && (this.canvas.width = C, this.canvas.height = T, R.updateResolution && R.updateResolution()), this.attributes.size = [C, T], this[i].length && this[i].forEach((k) => {
            const P = new s.Figure2D();
            P.rect(0, 0, C / this.displayRatio, T / this.displayRatio), k.contours = P.contours;
          }));
          const [w, O] = this.renderOffset, q = this.displayRatio;
          (F !== w || r !== O || Y !== q) && (R.setGlobalTransform(q, 0, 0, q, w, O), R.__globalTransformMatrix = null, this[m] = null, this.updateGlobalTransform(), this.forceUpdate());
        }
        /**
         * tick(handler, {originTime = 0, playbackRate = 1.0, duration = Infinity})
         * @param {*} handler
         * @param {*} options
         */
        tick(C = null, T = {}) {
          let {
            duration: R = 1 / 0
          } = T, J = y(T, ["duration"]);
          const F = this.timeline.fork(J), r = this;
          this[t] = this[t] || [], this[t].push({
            handler: C,
            duration: R
          });
          const Y = () => {
            let H = null, Q = null;
            const w = () => {
              const O = this[t].map(({
                handler: q,
                duration: k
              }) => {
                const P = Math.min(1, F.currentTime / k);
                return {
                  value: q ? q(F.currentTime, P) : null,
                  p: P
                };
              });
              r[V] || (r[V] = Promise.resolve().then(() => {
                r[h] && r.render(), delete r[V];
                for (let q = O.length - 1; q >= 0; q--) {
                  const {
                    value: k,
                    p: P
                  } = O[q];
                  (k === !1 || P >= 1) && this[t].splice(q, 1);
                }
                this[t].length > 0 && Y();
              }));
            };
            if (this[X] && this[X]._type !== "ticker" && (Object(u.cancelAnimationFrame)(this[X]._requestID), delete this[X]), !this[X]) {
              const O = new Promise((q) => {
                H = q, Q = Object(u.requestAnimationFrame)(w);
              });
              O._resolve = H, O._requestID = Q, O._type = "ticker", this[X] = O;
            }
          };
          Y();
        }
        toGlobalPos(C, T) {
          if (this.layerTransformInvert) {
            const H = this.transformMatrix;
            C = H[0] * C + H[2] * T + H[4], T = H[1] * C + H[3] * T + H[5];
          }
          const {
            width: R,
            height: J
          } = this.getResolution(), F = this.renderOffset, r = [this.canvas.clientWidth, this.canvas.clientHeight];
          C = C * r[0] / R + F[0], T = T * r[1] / J + F[1];
          const Y = this.displayRatio;
          return C *= Y, T *= Y, [C, T];
        }
        toLocalPos(C, T) {
          const {
            width: R,
            height: J
          } = this.getResolution(), F = this.renderOffset, r = [this.canvas.clientWidth, this.canvas.clientHeight];
          C = C * R / r[0] - F[0], T = T * J / r[1] - F[1];
          const Y = this.displayRatio;
          C /= Y, T /= Y;
          const H = this.layerTransformInvert;
          return H && (C = H[0] * C + H[2] * T + H[4], T = H[1] * C + H[3] * T + H[5]), [C, T];
        }
      }
      n.default.registerNode(K, "layer");
    },
    /* 287 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return X;
      });
      var s = l(224), c = l(288), o = l(213), u = l(252), e = l(72);
      l(1).glMatrix.setMatrixArrayType(Array);
      function n(V, i) {
        if (V == null)
          return {};
        var b = G(V, i), t, m;
        if (Object.getOwnPropertySymbols) {
          var K = Object.getOwnPropertySymbols(V);
          for (m = 0; m < K.length; m++)
            t = K[m], !(i.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(V, t) && (b[t] = V[t]);
        }
        return b;
      }
      function G(V, i) {
        if (V == null)
          return {};
        var b = {}, t = Object.keys(V), m, K;
        for (K = 0; K < t.length; K++)
          m = t[K], !(i.indexOf(m) >= 0) && (b[m] = V[m]);
        return b;
      }
      function y(V, i, b) {
        return i in V ? Object.defineProperty(V, i, { value: b, enumerable: !0, configurable: !0, writable: !0 }) : V[i] = b, V;
      }
      const a = "http://www.w3.org/2000/svg", I = Symbol.for("spritejs_setAttribute"), h = Symbol("root"), S = Symbol("task");
      function p(V, i = !0) {
        const b = V[h];
        if (b && b.children[0]) {
          const t = V.svg, m = V.layer ? V.layer.displayRatio : 1;
          if (!t.hasAttribute("data-original-width")) {
            let C = t.getAttribute("width");
            C = C ? Object(e.sizeToPixel)(C) : 300;
            let T = t.getAttribute("height");
            T = T ? Object(e.sizeToPixel)(T) : 150, t.hasAttribute("viewBox") || t.setAttribute("viewBox", `0 0 ${Math.round(C)} ${Math.round(T)}`), t.setAttribute("data-original-width", C), t.setAttribute("data-original-height", T);
          }
          let K = V.attributes.width || Number(t.getAttribute("data-original-width")), x = V.attributes.height || Number(t.getAttribute("data-original-height"));
          if (K *= m, x *= m, i && V.attributes.flexible) {
            const C = V.attributes.scale[0];
            if (K *= C, x *= C, t.setAttribute("width", K), t.setAttribute("height", x), K && x && V.textureImage) {
              const T = V.textureImage.width, R = V.textureImage.height, J = V.clientSize;
              V.attributes.textureRect = [0, 0, Math.round(J[0] * T / K), Math.round(J[1] * R / x)];
            }
          } else
            V[S] || (t.setAttribute("width", K), t.setAttribute("height", x), V[S] = Promise.resolve().then(() => {
              delete V[S];
              const C = b.innerHTML, T = new Blob([C], {
                type: "image/svg+xml"
              }), R = URL.createObjectURL(T), J = new Image();
              J.onload = function() {
                J.width && J.height ? (V.attributes[I]("texture", J), V.attributes.flexible && (V.attributes.textureRect = null)) : V.attributes[I]("texture", null);
              }, J.src = R;
            }));
        }
      }
      class X extends s.default {
        constructor(i = {}) {
          typeof i == "string" && (i = {
            svgText: i
          });
          let {
            svgText: b
          } = i, t = n(i, ["svgText"]);
          if (super(t), this[h] = document.createElement("div"), b) {
            this[h].innerHTML = b;
            const m = this[h].children[0];
            m ? m.setAttribute("xmlns", a) : (fetch(b).then((K) => K.text()).then((K) => {
              this[h].innerHTML = K, (!this.observer || this.attributes.flexible) && p(this);
            }), b = null);
          }
          if (!b) {
            const m = document.createElementNS(a, "svg");
            m.setAttribute("xmlns", a), this[h].appendChild(m);
          }
          if (typeof MutationObserver == "function") {
            const m = new MutationObserver((K) => {
              p(this, !1);
            });
            m.observe(this[h], {
              attributes: !0,
              subtree: !0,
              characterData: !0,
              childList: !0
            }), this.observer = m;
          }
        }
        get children() {
          return [this.svg];
        }
        get childNodes() {
          return [this.svg];
        }
        get svg() {
          return this[h] ? this[h].children[0] : null;
        }
        /* override */
        setResolution({
          width: i,
          height: b
        }) {
          super.setResolution({
            width: i,
            height: b
          }), p(this);
        }
        /* override */
        dispatchPointerEvent(i) {
          const b = super.dispatchPointerEvent(i);
          if (b && this.attributes.passEvents && typeof MouseEvent == "function") {
            const {
              x: t,
              y: m
            } = i;
            let [K, x] = this.getOffsetPosition(t, m);
            const C = i.originalEvent, T = this.attributes.anchor, R = this.clientSize;
            K = (K + T[0] * R[0]) / 2, x = (x + T[1] * R[1]) / 2;
            const J = i.type;
            if (J === C.type) {
              let F = null;
              if (C instanceof MouseEvent)
                F = new MouseEvent(J, {
                  screenX: K,
                  screenY: x,
                  clientX: K,
                  clientY: x,
                  bubbles: C.bubbles,
                  button: C.button,
                  buttons: C.buttons,
                  cancelBubble: C.cancelBubble,
                  cancelable: C.cancelable,
                  currentTarget: C.currentTarget,
                  fromElement: C.fromElement,
                  relatedTarget: C.relatedTarget,
                  returnValue: C.returnValue,
                  srcElement: C.srcElement,
                  target: C.target,
                  toElement: C.toElement,
                  // view: originalEvent.view,
                  which: C.witch
                });
              else if (C instanceof TouchEvent) {
                let r = null;
                const Y = C.changedTouches || [C];
                for (let H = 0; H < Y.length; H++) {
                  const Q = Y[H];
                  if (i.identifier === Q.identifier) {
                    r = Q;
                    break;
                  }
                }
                if (r) {
                  const H = new Touch({
                    identifier: r.identifier,
                    target: r.target,
                    clientX: K,
                    clientY: x,
                    screenX: K,
                    screenY: x,
                    pageX: K,
                    pageY: x,
                    radiusX: r.radiusX,
                    radiusY: r.radiusY,
                    rotationAngle: r.rotationAngle,
                    force: r.force
                  });
                  F = new TouchEvent(J, {
                    cancelable: C.cancelable,
                    bubbles: C.bubbles,
                    composed: C.composed,
                    touches: [H],
                    targetTouches: [H],
                    changedTouches: [H]
                  });
                }
              } else
                F = C;
              F && this.svg.dispatchEvent(F);
            }
          }
          return b;
        }
        getElementById(i) {
          return Object(u.querySelector)(`#${i}`, this);
        }
        getElementsByClassName(i) {
          return Object(u.querySelectorAll)(`.${i}`, this);
        }
        getElementsByName(i) {
          return Object(u.querySelectorAll)(`[name="${i}"]`, this);
        }
        getElementsByTagName(i) {
          return Object(u.querySelectorAll)(i, this);
        }
        querySelector(i) {
          return Object(u.querySelector)(i, this);
        }
        querySelectorAll(i) {
          return Object(u.querySelectorAll)(i, this);
        }
        /* override */
        onPropertyChange(i, b, t) {
          super.onPropertyChange(i, b, t), i === "flexible" && p(this), this.attributes.flexible && (i === "width" || i === "height" || i === "scale" || i === "transform") && p(this);
        }
      }
      y(X, "Attr", c.default), o.default.registerNode(X, "spritesvg");
    },
    /* 288 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return e;
      });
      var s = l(225);
      l(1).glMatrix.setMatrixArrayType(Array);
      const c = Symbol.for("spritejs_getAttribute"), o = Symbol.for("spritejs_setAttribute"), u = Symbol.for("spritejs_setAttributeDefault");
      class e extends s.default {
        constructor(G) {
          super(G), this[u]({
            passEvents: !1,
            flexible: !1
          });
        }
        // readonly
        get texture() {
          return this[c]("texture");
        }
        set texture(G) {
        }
        // eslint-disable-line no-empty-function
        get passEvents() {
          return this[c]("passEvents");
        }
        set passEvents(G) {
          return this[o]("passEvents", G);
        }
        get flexible() {
          return this[c]("flexible");
        }
        set flexible(G) {
          return this[o]("flexible", G);
        }
      }
    },
    /* 289 */
    /***/
    function(Z, d, l) {
      l.r(d);
      var s = l(12);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(G, y) {
        var a = Object.keys(G);
        if (Object.getOwnPropertySymbols) {
          var I = Object.getOwnPropertySymbols(G);
          y && (I = I.filter(function(h) {
            return Object.getOwnPropertyDescriptor(G, h).enumerable;
          })), a.push.apply(a, I);
        }
        return a;
      }
      function o(G) {
        for (var y = 1; y < arguments.length; y++) {
          var a = arguments[y] != null ? arguments[y] : {};
          y % 2 ? c(Object(a), !0).forEach(function(I) {
            u(G, I, a[I]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(G, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(I) {
            Object.defineProperty(G, I, Object.getOwnPropertyDescriptor(a, I));
          });
        }
        return G;
      }
      function u(G, y, a) {
        return y in G ? Object.defineProperty(G, y, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : G[y] = a, G;
      }
      const e = Symbol("inited");
      let n = null;
      typeof Worker == "function" && (n = class extends Worker {
        constructor(G) {
          if (G.worker === !0 && (G.worker = `./${G.id}.worker.js`), super(G.worker), this.options = G, !G.canvas) {
            const {
              width: y,
              height: a
            } = this.getResolution(), I = s.ENV.createCanvas(y, a, {
              offscreen: !1
            });
            I.style && (I.style.position = "absolute"), I.dataset && (I.dataset.layerId = G.id), G.canvas = I;
          }
          this.canvas = G.canvas;
        }
        get id() {
          return this.options.id;
        }
        setResolution({
          width: G,
          height: y
        }) {
          if (this[e])
            this.postMessage({
              type: "resolution_change",
              width: G,
              height: y
            });
          else {
            this.canvas.width = G, this.canvas.height = y;
            const a = this.options, I = a.canvas.transferControlToOffscreen(), h = o({}, a);
            delete h.container, h.canvas = I, this.postMessage({
              type: "create",
              options: h
            }, [I]), this[e] = !0;
          }
        }
        getResolution() {
          if (this.canvas) {
            const {
              width: G,
              height: y
            } = this.canvas;
            return {
              width: G,
              height: y
            };
          }
          return {
            width: 300,
            height: 150
          };
        }
        remove() {
          return this.parent && this.parent.removeChild ? (this.parent.removeChild(this), !0) : !1;
        }
        connect(G, y) {
          Object.defineProperty(this, "parent", {
            value: G,
            writable: !1,
            configurable: !0
          }), Object.defineProperty(this, "zOrder", {
            value: y,
            writable: !1,
            configurable: !0
          });
        }
        disconnect() {
          delete this.parent, delete this.zOrder;
        }
        dispatchPointerEvent(G) {
          this.postMessage({
            type: "event",
            event: {
              cancelBubble: G.cancelBubble,
              bubbles: G.bubbles,
              detail: G.detail,
              identifier: G.identifier,
              layerX: G.layerX,
              layerY: G.layerY,
              originalX: G.originalX,
              originalY: G.originalY,
              type: G.type,
              x: G.x,
              y: G.y
            }
          });
        }
      }), d.default = n;
    },
    /* 290 */
    /***/
    function(Z, d, l) {
      l.r(d), (function(s) {
        l.d(d, "default", function() {
          return K;
        });
        var c = l(12), o = l(68), u = l(70), e = l(286), n = l(289), G = l(250), y = l(291), a = l(214), I = l(218), h = l(213);
        l(1).glMatrix.setMatrixArrayType(Array);
        const S = Symbol("enteredTargets");
        function p(x) {
          return x.id = x.id || `_layer${Math.random().toString(36).slice(2, 12)}`, x.dataset || (x.dataset = {}), x.dataset.layerId = x.id, x.connect = (C, T) => {
            x.parent = C, Object.defineProperty(x, "zOrder", {
              value: T,
              writable: !1,
              configurable: !0
            });
          }, x.disconnect = (C) => {
            delete x.zOrder;
          }, x.canvas = x, x.getResolution = () => ({
            width: 0,
            height: 0
          }), x.setResolution = () => !1, x.options = {
            handleEvent: !1
          }, x;
        }
        function X(x, C) {
          const T = x.children;
          let R = null;
          for (let J = 0; J < T.length; J++) {
            const F = T[J];
            if ((C === F || R != null) && (R = F), R && R !== C && !R.offscreen)
              return R.canvas;
          }
          return null;
        }
        function V(x, C) {
          const [T, R] = x.renderOffset, {
            width: J,
            height: F
          } = x.getResolution(), r = x.displayRatio;
          x.renderer.drawImage(C.canvas, -T / r, -R / r, J / r, F / r);
        }
        const i = {};
        function b(x) {
          const C = ["mousedown", "mouseup", "mousemove", "mousewheel", "wheel", "touchstart", "touchend", "touchmove", "touchcancel", "click", "dblclick", "longpress", "tap", "contextmenu"], T = x.container;
          T.addEventListener("mouseleave", (R) => {
            const J = x[S];
            if (J.size) {
              const F = new a.default("mouseleave");
              F.setOriginalEvent(R), [...J].forEach((r) => {
                r.dispatchEvent(F);
              }), x[S].clear();
            }
          }, {
            passive: !0
          }), C.forEach((R) => {
            T.addEventListener(R, (J) => {
              const {
                left: F,
                top: r,
                displayRatio: Y
              } = x.options, H = x.orderedChildren;
              Object(y.default)(J, {
                offsetLeft: F,
                offsetTop: r,
                displayRatio: Y
              }).forEach((w) => {
                const O = w.identifier;
                if (w.type === "touchmove" || w.type === "touchend") {
                  const k = i[O];
                  k && k.dispatchEvent(w), w.type === "touchend" && delete i[O];
                } else {
                  for (let k = H.length - 1; k >= 0; k--) {
                    const P = H[k];
                    if (P.options.handleEvent !== !1) {
                      if (P.dispatchPointerEvent(w) && w.target !== P)
                        break;
                      w.cancelBubble = !1;
                    }
                  }
                  if (w.target === H[0])
                    for (let k = H.length - 1; k >= 0; k--) {
                      const P = H[k];
                      if (P.options.handleEvent !== !1) {
                        w.target = P;
                        break;
                      }
                    }
                }
                const q = w.target;
                if (w.type === "touchstart" && (i[O] = w.target), w.type === "mousemove") {
                  const k = x[S];
                  let P;
                  if (q) {
                    const _ = q.ancestors || [];
                    P = /* @__PURE__ */ new Set([q, ..._]);
                  } else
                    P = /* @__PURE__ */ new Set();
                  const D = Object.entries(J);
                  if (!k.has(q) && q) {
                    const _ = new a.default("mouseenter");
                    _.setOriginalEvent(J), D.forEach(([$, el]) => {
                      _[$] = el;
                    }), k.add(q), q.dispatchEvent(_);
                    const bl = q.ancestors;
                    bl && bl.forEach(($) => {
                      $ instanceof u.default && !k.has($) && (k.add($), $.dispatchEvent(_));
                    });
                  }
                  const ll = new a.default("mouseleave");
                  ll.setOriginalEvent(J), D.forEach(([_, bl]) => {
                    ll[_] = bl;
                  }), [...k].forEach((_) => {
                    P.has(_) || (k.delete(_), _.dispatchEvent(ll));
                  });
                }
              });
            }, {
              passive: R !== "contextmenu"
            });
          });
        }
        function t(x, C) {
          if (C && C.style) {
            let {
              width: T,
              height: R,
              mode: J,
              container: F
            } = x;
            const {
              clientWidth: r,
              clientHeight: Y
            } = F;
            T = T || r, R = R || Y, J === "static" ? (C.style.width = `${T}px`, C.style.height = `${R}px`) : (C.style.top = "0", C.style.left = "0", C.style.width = `${r}px`, C.style.height = `${Y}px`, C.style.transform = "", C.style.webkitTransform = "");
          }
        }
        const m = Symbol("offscreenLayerCount");
        class K extends G.default {
          /**
            width
            height
            mode: 'static', 'scale', 'stickyWidth', 'stickyHeight', 'stickyTop', 'stickyBottom', 'stickyLeft', 'stickyRight'
           */
          constructor(C = {}) {
            if (super(), !C.container)
              if (typeof c.ENV.Container == "function")
                C.container = new c.ENV.Container(C.width || 300, C.height || 150);
              else
                throw new Error("No container specified.");
            if (this.container = C.container, this.container.style && (this.container.style.overflow || (this.container.style.overflow = "hidden"), this.container.style.position || (this.container.style.position = "relative")), this.options = C, C.displayRatio = C.displayRatio || 1, C.mode = C.mode || "scale", C.left = 0, C.top = 0, C.autoResize = C.autoResize !== !1, C.autoResize) {
              let T;
              if (typeof globalThis < "u" ? T = globalThis : T = typeof window < "u" ? window : s, T.addEventListener) {
                const R = this;
                T.addEventListener("resize", function J() {
                  typeof document < "u" && document.contains(R.container) ? R.resize() : T.removeEventListener("resize", J);
                });
              }
            }
            this[S] = /* @__PURE__ */ new Set(), this.setResolution(C), b(this), this[m] = 0;
          }
          get hasOffscreenCanvas() {
            return this[m] > 0;
          }
          set displayRatio(C) {
            this.options.displayRatio !== C && (this.options.displayRatio = C, this.resize());
          }
          get displayRatio() {
            return this.options.displayRatio;
          }
          set height(C) {
            this.options.height !== C && (this.options.height = C, this.resize());
          }
          get height() {
            return this.options.height;
          }
          set mode(C) {
            this.options.mode !== C && (this.options.mode = C, this.resize());
          }
          get mode() {
            return this.options.mode;
          }
          set width(C) {
            this.options.width !== C && (this.options.width = C, this.resize());
          }
          get width() {
            return this.options.width;
          }
          /* override */
          appendChild(C) {
            !(C instanceof e.default) && !(C instanceof n.default) && p(C);
            const T = super.appendChild(C), R = C.canvas;
            return C.offscreen ? this[m]++ : this.container.appendChild(R), t(this.options, R), C.setResolution(this.getResolution()), T;
          }
          /* override */
          forceUpdate() {
            this.hasOffscreenCanvas && !this._requestID && (this._requestID = Object(o.requestAnimationFrame)(() => {
              delete this._requestID, this.render();
            }));
          }
          /* override */
          insertBefore(C, T) {
            !(C instanceof e.default) && !(C instanceof n.default) && p(C);
            const R = super.insertBefore(C, T), J = C.canvas;
            if (!C.offscreen) {
              const F = X(this, C);
              this.container.insertBefore(J, F);
            }
            return t(this.options, J), C.setResolution(this.getResolution()), R;
          }
          layer(C = "default", T = {}) {
            T = Object.assign({}, this.options, T), T.id = C;
            const R = this.orderedChildren;
            for (let r = 0; r < R.length; r++)
              if (R[r].id === C)
                return R[r];
            const J = T.worker;
            let F;
            return J ? F = new n.default(T) : F = new e.default(T), this.appendChild(F), F;
          }
          async preload(...C) {
            const T = [], R = [], J = [];
            for (let F = 0; F < C.length; F++) {
              const r = C[F];
              let Y;
              if (typeof r == "string")
                Y = Object(I.loadTexture)(r);
              else if (Array.isArray(r))
                Y = Object(I.loadFrames)(...r);
              else {
                const {
                  id: H,
                  src: Q
                } = r;
                Y = Object(I.loadTexture)(Q, H);
              }
              Y instanceof Promise || (Y = Promise.resolve(Y)), R.push(Y.then((H) => {
                T.push(H), J[F] = H;
                const Q = new a.default({
                  type: "preload",
                  detail: {
                    current: H,
                    loaded: T,
                    resources: C
                  }
                });
                this.dispatchEvent(Q);
              }));
            }
            return await Promise.all(R), J;
          }
          /* override */
          removeChild(C) {
            const T = super.removeChild(C);
            if (T) {
              C._prepareRenderFinished && C._prepareRenderFinished();
              const R = C.canvas;
              R && R.remove && R.remove(), C.offscreen && this[m]--;
            }
            return T;
          }
          // for offscreen mode rendering
          render() {
            const C = this.orderedChildren;
            let T = null;
            const R = [];
            for (let J = 0; J < C.length; J++) {
              const F = C[J], r = R.length > 0;
              if (F instanceof e.default && !F.offscreen)
                if (!F.autoRender)
                  r && (console.warn("Some offscreen canvas will not be rendered."), R.length = 0);
                else if (T = F, r) {
                  F.renderer.clear();
                  for (let Y = 0; Y < R.length; Y++) {
                    const H = R[Y];
                    H.render(), V(F, H);
                  }
                  R.length = 0, F.render({
                    clear: !1
                  });
                } else
                  F.prepareRender && F.render();
              else
                F.offscreen ? T ? (F.prepareRender && F.render(), V(T, F)) : R.push(F) : F instanceof n.default && r && (console.warn("Some offscreen canvas will not be rendered."), R.length = 0);
            }
          }
          /* override */
          replaceChild(C, T) {
            const R = super.replaceChild(C, T);
            T.canvas.remove && T.canvas.remove(), T.offscreen && this[m]--;
            const J = C.canvas;
            if (!C.offscreen) {
              const F = X(this, C);
              this.container.insertBefore(J, F);
            }
            return t(this.options, J), C.setResolution(this.getResolution()), R;
          }
          resize() {
            const C = this.options;
            this.children.forEach((T) => {
              t(C, T.canvas);
            }), this.setResolution(C), this.dispatchEvent({
              type: "resize"
            });
          }
          /* override */
          setResolution({
            width: C,
            height: T
          } = {}) {
            const R = this.container, {
              clientWidth: J,
              clientHeight: F
            } = R;
            (C == null || T == null) && (C = C ?? J, T = T ?? F);
            const {
              mode: r,
              displayRatio: Y
            } = this.options;
            if (C *= Y, T *= Y, this.options.left = 0, this.options.top = 0, r === "stickyHeight" || r === "stickyLeft" || r === "stickyRight") {
              const H = C;
              C = J * T / F, r === "stickyHeight" && (this.options.left = 0.5 * (C - H)), r === "stickyRight" && (this.options.left = C - H);
            } else if (r === "stickyWidth" || r === "stickyTop" || r === "stickyBottom") {
              const H = T;
              T = F * C / J, r === "stickyWidth" && (this.options.top = 0.5 * (T - H)), r === "stickyBottom" && (this.options.top = T - H);
            }
            super.setResolution({
              width: C,
              height: T
            });
          }
          snapshot({
            offscreen: C = !1,
            layers: T
          } = {}) {
            const R = C ? "snapshotOffScreenCanvas" : "snapshotCanvas", {
              width: J,
              height: F
            } = this.getResolution();
            this[R] = this[R] || c.ENV.createCanvas(J, F, {
              offscreen: C
            });
            const r = this[R].getContext("2d");
            T = T || this.orderedChildren, this[R].width = J, this[R].height = F;
            for (let Y = 0; Y < T.length; Y++) {
              const H = T[Y];
              if (!H.options.ignoreSnapshot) {
                H.render && H.render();
                const Q = H.canvas;
                Q && Q !== H && r.drawImage(Q, 0, 0, J, F);
              }
            }
            return this[R];
          }
        }
        typeof document < "u" && (K.prototype.layer3d = function(x, C = {}) {
          const T = C.url || "https://unpkg.com/sprite-extend-3d/dist/sprite-extend-3d.min.js";
          return new Promise((R, J) => {
            const F = document.createElement("script");
            F.async = !1, F.src = T, F.onload = () => {
              try {
                R(this.layer3d(x, C));
              } catch (r) {
                J(r);
              }
            }, document.documentElement.appendChild(F);
          });
        }), h.default.registerNode(K, "scene");
      }).call(this, l(22));
    },
    /* 291 */
    /***/
    function(Z, d, l) {
      l.r(d), l.d(d, "default", function() {
        return c;
      });
      var s = l(214);
      l(1).glMatrix.setMatrixArrayType(Array);
      function c(o, {
        offsetTop: u = 0,
        offsetLeft: e = 0,
        displayRatio: n = 1
      } = {}) {
        let G, y;
        const a = [], {
          left: I,
          top: h,
          width: S,
          height: p
        } = o.target.getBoundingClientRect(), X = o.target.width, V = o.target.height, i = o.changedTouches || [o];
        for (let t = 0; t < i.length; t++) {
          const m = i[t], K = m.identifier, {
            clientX: x,
            clientY: C
          } = m;
          x != null && C != null && a.push({
            x: Math.round((x | 0) - I),
            y: Math.round((C | 0) - h),
            identifier: K
          });
        }
        a.length <= 0 && a.push({
          x: G,
          y
        });
        const b = [];
        return a.forEach((t) => {
          t.x != null && t.y != null && (G = (t.x * X / S - e) / n, y = (t.y * V / p - u) / n);
          const m = new s.default(o);
          Object.defineProperties(m, {
            layerX: {
              value: G,
              configurable: !0
            },
            layerY: {
              value: y,
              configurable: !0
            },
            originalX: {
              value: t.x
            },
            originalY: {
              value: t.y
            },
            x: {
              value: G,
              configurable: !0
            },
            y: {
              value: y,
              configurable: !0
            },
            identifier: {
              value: t.identifier
            }
          }), b.push(m);
        }), b;
      }
    }
    /******/
  ])
);
Nl.version;
Nl.Arc;
Nl.Block;
Nl.Cloud;
Nl.Color;
Nl.Ellipse;
Nl.Gradient;
const st = Nl.Group;
Nl.Label;
Nl.Layer;
Nl.LayerWorker;
Nl.Node;
Nl.Parallel;
Nl.Path;
Nl.Polyline;
const Ii = Nl.Rect;
Nl.Regular;
Nl.Ring;
Nl.Scene;
Nl.Sprite;
Nl.SpriteSvg;
Nl.Star;
Nl.Triangle;
Nl.helpers;
Nl.createElement;
Nl.isSpriteNode;
Nl.registerNode;
Nl.requestAnimationFrame;
Nl.cancelAnimationFrame;
Nl.ENV;
const tt = {
  linear: (Z) => Z,
  easeInQuad: (Z) => Z * Z,
  easeOutQuad: (Z) => Z * (2 - Z),
  easeInOutQuad: (Z) => Z < 0.5 ? 2 * Z * Z : -1 + (4 - 2 * Z) * Z,
  easeInCubic: (Z) => Z * Z * Z,
  easeOutCubic: (Z) => --Z * Z * Z + 1,
  easeInOutCubic: (Z) => Z < 0.5 ? 4 * Z * Z * Z : (Z - 1) * (2 * Z - 2) * (2 * Z - 2) + 1,
  easeInQuart: (Z) => Z * Z * Z * Z,
  easeOutQuart: (Z) => 1 - --Z * Z * Z * Z,
  easeInOutQuart: (Z) => Z < 0.5 ? 8 * Z * Z * Z * Z : 1 - 8 * --Z * Z * Z * Z,
  easeInQuint: (Z) => Z * Z * Z * Z * Z,
  easeOutQuint: (Z) => 1 + --Z * Z * Z * Z * Z,
  easeInOutQuint: (Z) => Z < 0.5 ? 16 * Z * Z * Z * Z * Z : 1 + 16 * --Z * Z * Z * Z * Z,
  easeInSine: (Z) => 1 - Math.cos(Z * Math.PI / 2),
  easeOutSine: (Z) => Math.sin(Z * Math.PI / 2),
  easeInOutSine: (Z) => -(Math.cos(Math.PI * Z) - 1) / 2,
  easeInExpo: (Z) => Z <= 0 ? 0 : Math.pow(2, 10 * Z - 10),
  easeOutExpo: (Z) => Z >= 1 ? 1 : 1 - Math.pow(2, -10 * Z),
  easeInOutExpo: (Z) => Z <= 0 ? 0 : Z >= 1 ? 1 : Z < 0.5 ? Math.pow(2, 20 * Z - 10) / 2 : (2 - Math.pow(2, -20 * Z + 10)) / 2
};
class Wl {
  constructor(d = 0, l = 0, s = 1) {
    Object.defineProperty(this, "x", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: d
    }), Object.defineProperty(this, "y", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: l
    }), Object.defineProperty(this, "z", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: s
    });
  }
  get XY() {
    return [this.x, this.y];
  }
  setz(d) {
    return this.z = d, this;
  }
  setXY(d = this.x, l = this.y) {
    return this.x = d, this.y = l, this;
  }
  set(d = this.x, l = this.y, s = this.z) {
    return this.x = d, this.y = l, this.z = s, this;
  }
  setTo({ x: d = 0, y: l = 0, z: s = 1 }) {
    return this.x = d, this.y = l, this.z = s, this;
  }
  rot(d) {
    if (d === 0)
      return this;
    const { x: l, y: s } = this, c = Math.sin(d), o = Math.cos(d);
    return this.x = l * o - s * c, this.y = l * c + s * o, this;
  }
  rotWith(d, l) {
    if (l === 0)
      return this;
    const s = this.x - d.x, c = this.y - d.y, o = Math.sin(l), u = Math.cos(l);
    return this.x = d.x + (s * u - c * o), this.y = d.y + (s * o + c * u), this;
  }
  clone() {
    const { x: d, y: l, z: s } = this;
    return new Wl(d, l, s);
  }
  sub(d) {
    return this.x -= d.x, this.y -= d.y, this;
  }
  subXY(d, l) {
    return this.x -= d, this.y -= l, this;
  }
  subScalar(d) {
    return this.x -= d, this.y -= d, this;
  }
  add(d) {
    return this.x += d.x, this.y += d.y, this;
  }
  addXY(d, l) {
    return this.x += d, this.y += l, this;
  }
  addScalar(d) {
    return this.x += d, this.y += d, this;
  }
  clamp(d, l) {
    return this.x = Math.max(this.x, d), this.y = Math.max(this.y, d), l !== void 0 && (this.x = Math.min(this.x, l), this.y = Math.min(this.y, l)), this;
  }
  div(d) {
    return this.x /= d, this.y /= d, this;
  }
  divV(d) {
    return this.x /= d.x, this.y /= d.y, this;
  }
  mul(d) {
    return this.x *= d, this.y *= d, this;
  }
  mulV(d) {
    return this.x *= d.x, this.y *= d.y, this;
  }
  abs() {
    return this.x = Math.abs(this.x), this.y = Math.abs(this.y), this;
  }
  nudge(d, l) {
    const s = Wl.Tan(d, this);
    return this.add(s.mul(l));
  }
  neg() {
    return this.x *= -1, this.y *= -1, this;
  }
  cross(d) {
    return this.x = this.y * d.z - this.z * d.y, this.y = this.z * d.x - this.x * d.z, this;
  }
  dpr(d) {
    return Wl.Dpr(this, d);
  }
  cpr(d) {
    return Wl.Cpr(this, d);
  }
  len2() {
    return Wl.Len2(this);
  }
  len() {
    return Wl.Len(this);
  }
  pry(d) {
    return Wl.Pry(this, d);
  }
  per() {
    const { x: d, y: l } = this;
    return this.x = l, this.y = -d, this;
  }
  uni() {
    return Wl.Uni(this);
  }
  tan(d) {
    return Wl.Tan(this, d);
  }
  dist(d) {
    return Wl.Dist(this, d);
  }
  distanceToLineSegment(d, l) {
    return Wl.DistanceToLineSegment(d, l, this);
  }
  slope(d) {
    return Wl.Slope(this, d);
  }
  snapToGrid(d) {
    return this.x = Math.round(this.x / d) * d, this.y = Math.round(this.y / d) * d, this;
  }
  angle(d) {
    return Wl.Angle(this, d);
  }
  toAngle() {
    return Wl.ToAngle(this);
  }
  lrp(d, l) {
    return this.x = this.x + (d.x - this.x) * l, this.y = this.y + (d.y - this.y) * l, this;
  }
  equals(d, l) {
    return Wl.Equals(this, d, l);
  }
  equalsXY(d, l) {
    return Wl.EqualsXY(this, d, l);
  }
  norm() {
    const d = this.len();
    return this.x = d === 0 ? 0 : this.x / d, this.y = d === 0 ? 0 : this.y / d, this;
  }
  toFixed() {
    return Wl.ToFixed(this);
  }
  toString() {
    return Wl.ToString(Wl.ToFixed(this));
  }
  toJson() {
    return Wl.ToJson(this);
  }
  toArray() {
    return Wl.ToArray(this);
  }
  static Add(d, l) {
    return new Wl(d.x + l.x, d.y + l.y);
  }
  static AddXY(d, l, s) {
    return new Wl(d.x + l, d.y + s);
  }
  static Sub(d, l) {
    return new Wl(d.x - l.x, d.y - l.y);
  }
  static SubXY(d, l, s) {
    return new Wl(d.x - l, d.y - s);
  }
  static AddScalar(d, l) {
    return new Wl(d.x + l, d.y + l);
  }
  static SubScalar(d, l) {
    return new Wl(d.x - l, d.y - l);
  }
  static Div(d, l) {
    return new Wl(d.x / l, d.y / l);
  }
  static Mul(d, l) {
    return new Wl(d.x * l, d.y * l);
  }
  static DivV(d, l) {
    return new Wl(d.x / l.x, d.y / l.y);
  }
  static MulV(d, l) {
    return new Wl(d.x * l.x, d.y * l.y);
  }
  static Neg(d) {
    return new Wl(-d.x, -d.y);
  }
  static Per(d) {
    return new Wl(d.y, -d.x);
  }
  static Dist2(d, l) {
    return Wl.Sub(d, l).len2();
  }
  static Abs(d) {
    return new Wl(Math.abs(d.x), Math.abs(d.y));
  }
  static Dist(d, l) {
    return Math.hypot(d.y - l.y, d.x - l.x);
  }
  static Dpr(d, l) {
    return d.x * l.x + d.y * l.y;
  }
  static Cross(d, l) {
    return new Wl(
      d.y * l.z - d.z * l.y,
      d.z * l.x - d.x * l.z
      // A.z = A.x * V.y - A.y * V.x
    );
  }
  static Cpr(d, l) {
    return d.x * l.y - l.x * d.y;
  }
  static Len2(d) {
    return d.x * d.x + d.y * d.y;
  }
  static Len(d) {
    return Math.hypot(d.x, d.y);
  }
  static Pry(d, l) {
    return Wl.Dpr(d, l) / Wl.Len(l);
  }
  static Uni(d) {
    return Wl.Div(d, Wl.Len(d));
  }
  static Tan(d, l) {
    return Wl.Uni(Wl.Sub(d, l));
  }
  static Min(d, l) {
    return new Wl(Math.min(d.x, l.x), Math.min(d.y, l.y));
  }
  static Max(d, l) {
    return new Wl(Math.max(d.x, l.x), Math.max(d.y, l.y));
  }
  static From(d) {
    return new Wl().add(d);
  }
  static FromArray(d) {
    return new Wl(d[0], d[1]);
  }
  static Rot(d, l = 0) {
    const s = Math.sin(l), c = Math.cos(l);
    return new Wl(d.x * c - d.y * s, d.x * s + d.y * c);
  }
  static RotWith(d, l, s) {
    const c = d.x - l.x, o = d.y - l.y, u = Math.sin(s), e = Math.cos(s);
    return new Wl(l.x + (c * e - o * u), l.y + (c * u + o * e));
  }
  /**
   * Get the nearest point on a line with a known unit vector that passes through point A
   *
   * ```ts
   * Vec.nearestPointOnLineThroughPoint(A, u, Point)
   * ```
   *
   * @param A - Any point on the line
   * @param u - The unit vector for the line.
   * @param P - A point not on the line to test.
   */
  static NearestPointOnLineThroughPoint(d, l, s) {
    return Wl.Mul(l, Wl.Sub(s, d).pry(l)).add(d);
  }
  static NearestPointOnLineSegment(d, l, s, c = !0) {
    const o = Wl.Tan(l, d), u = Wl.Add(d, Wl.Mul(o, Wl.Sub(s, d).pry(o)));
    if (c) {
      if (u.x < Math.min(d.x, l.x))
        return Wl.Cast(d.x < l.x ? d : l);
      if (u.x > Math.max(d.x, l.x))
        return Wl.Cast(d.x > l.x ? d : l);
      if (u.y < Math.min(d.y, l.y))
        return Wl.Cast(d.y < l.y ? d : l);
      if (u.y > Math.max(d.y, l.y))
        return Wl.Cast(d.y > l.y ? d : l);
    }
    return u;
  }
  static DistanceToLineThroughPoint(d, l, s) {
    return Wl.Dist(s, Wl.NearestPointOnLineThroughPoint(d, l, s));
  }
  static DistanceToLineSegment(d, l, s, c = !0) {
    return Wl.Dist(s, Wl.NearestPointOnLineSegment(d, l, s, c));
  }
  static Snap(d, l = 1) {
    return new Wl(Math.round(d.x / l) * l, Math.round(d.y / l) * l);
  }
  static Cast(d) {
    return d instanceof Wl ? d : Wl.From(d);
  }
  static Slope(d, l) {
    return d.x === l.y ? NaN : (d.y - l.y) / (d.x - l.x);
  }
  static Angle(d, l) {
    return Math.atan2(l.y - d.y, l.x - d.x);
  }
  static Lrp(d, l, s) {
    return Wl.Sub(l, d).mul(s).add(d);
  }
  static Med(d, l) {
    return new Wl((d.x + l.x) / 2, (d.y + l.y) / 2);
  }
  static Equals(d, l, s = 1e-4) {
    return Math.abs(d.x - l.x) < s && Math.abs(d.y - l.y) < s;
  }
  static EqualsXY(d, l, s) {
    return d.x === l && d.y === s;
  }
  static EqualsXYZ(d, l, s = 1e-4) {
    return Wl.Equals(d, l, s) && Math.abs((d.z || 0) - (l.z || 0)) < s;
  }
  static Clockwise(d, l, s) {
    return (s.x - d.x) * (l.y - d.y) - (l.x - d.x) * (s.y - d.y) < 0;
  }
  static Rescale(d, l) {
    const s = Wl.Len(d);
    return new Wl(l * d.x / s, l * d.y / s);
  }
  static ScaleWithOrigin(d, l, s) {
    return Wl.Sub(d, s).mul(l).add(s);
  }
  static ScaleWOrigin(d, l, s) {
    return Wl.Sub(d, s).mulV(l).add(s);
  }
  static ToFixed(d, l = 2) {
    return new Wl(+d.x.toFixed(l), +d.y.toFixed(l), +d.z.toFixed(l));
  }
  static Nudge(d, l, s) {
    return Wl.Add(d, Wl.Tan(l, d).mul(s));
  }
  static ToString(d) {
    return `${d.x}, ${d.y}`;
  }
  static ToAngle(d) {
    let l = Math.atan2(d.y, d.x);
    return l < 0 && (l += Math.PI * 2), l;
  }
  static FromAngle(d, l = 1) {
    return new Wl(Math.cos(d) * l, Math.sin(d) * l);
  }
  static ToArray(d) {
    return [d.x, d.y, d.z];
  }
  static ToJson(d) {
    const { x: l, y: s, z: c } = d;
    return { x: l, y: s, z: c };
  }
  static Average(d) {
    const l = d.length, s = new Wl(0, 0);
    for (let c = 0; c < l; c++)
      s.add(d[c]);
    return s.div(l);
  }
  static Clamp(d, l, s) {
    return s === void 0 ? new Wl(Math.min(Math.max(d.x, l)), Math.min(Math.max(d.y, l))) : new Wl(Math.min(Math.max(d.x, l), s), Math.min(Math.max(d.y, l), s));
  }
  /**
   * Get an array of points (with simulated pressure) between two points.
   *
   * @param A - The first point.
   * @param B - The second point.
   * @param steps - The number of points to return.
   */
  static PointsBetween(d, l, s = 6) {
    const c = [];
    for (let o = 0; o < s; o++) {
      const u = tt.easeInQuad(o / (s - 1)), e = Wl.Lrp(d, l, u);
      e.z = Math.min(1, 0.5 + Math.abs(0.5 - bt(u)) * 0.65), c.push(e);
    }
    return c;
  }
  static SnapToGrid(d, l = 8) {
    return new Wl(Math.round(d.x / l) * l, Math.round(d.y / l) * l);
  }
}
const bt = (Z) => Z < 0.5 ? 2 * Z * Z : -1 + (4 - 2 * Z) * Z;
class zl extends Wl {
  constructor(d = 0, l = 0, s = 0, c = { x: 0, y: 0 }, o = 0, u = 0) {
    super(d, l, s), Object.defineProperty(this, "x", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: d
    }), Object.defineProperty(this, "y", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: l
    }), Object.defineProperty(this, "z", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: s
    }), Object.defineProperty(this, "v", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: c
    }), Object.defineProperty(this, "t", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: o
    }), Object.defineProperty(this, "a", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: u
    });
  }
  get timestamp() {
    return this.t;
  }
  get pressure() {
    return this.z;
  }
  get angleNum() {
    return this.a;
  }
  get XY() {
    return [this.x, this.y];
  }
  setA(d) {
    this.a = d;
  }
  setT(d) {
    this.t = d;
  }
  setv(d) {
    return this.v = { x: d.x, y: d.y }, this;
  }
  set(d = this.x, l = this.y, s = this.z, c = this.v, o = this.t, u = this.a) {
    return this.x = d, this.y = l, this.z = s, this.v = c, this.t = o, this.a = u, this;
  }
  clone() {
    const { x: d, y: l, z: s, v: c, t: o, a: u } = this, e = { x: c.x, y: c.y };
    return new zl(d, l, s, e, o, u);
  }
  distance(d) {
    return zl.GetDistance(this, d);
  }
  isNear(d, l) {
    return zl.IsNear(this, d, l);
  }
  getAngleByPoints(d, l) {
    return zl.GetAngleByPoints(d, this, l);
  }
  static Sub(d, l) {
    return new zl(d.x - l.x, d.y - l.y);
  }
  static Add(d, l) {
    return new zl(d.x + l.x, d.y + l.y);
  }
  static GetDistance(d, l) {
    return zl.Len(d.clone().sub(l));
  }
  static GetAngleByPoints(d, l, s) {
    const c = l.x - d.x, o = s.x - l.x, u = l.y - d.y, e = s.y - l.y;
    let n = 0;
    const G = Math.sqrt(c * c + u * u), y = Math.sqrt(o * o + e * e);
    if (G && y) {
      const a = c * o + u * e;
      n = Math.acos(a / (G * y)), n = n / Math.PI * 180;
      let I = c * e - u * o;
      I = I > 0 ? 1 : -1, n = 180 + I * n;
    }
    return n;
  }
  static IsNear(d, l, s) {
    return zl.Len(d.clone().sub(l)) < s;
  }
  static RotWith(d, l, s, c = 2) {
    const o = d.x - l.x, u = d.y - l.y, e = Math.sin(s), n = Math.cos(s), G = Math.pow(10, c), y = Math.floor((l.x + (o * n - u * e)) * G) / G, a = Math.floor((l.y + (o * e + u * n)) * G) / G;
    return new zl(y, a);
  }
  /**
   * 根据圆心和半径，获取圆上的等份点
   * @param o 圆心
   * @param radius 半径
   * @param average 均分数
   * @returns
   */
  static GetDotStroke(d, l, s = 16) {
    const c = new Wl(1, 1), o = Math.PI + 1e-3, u = zl.Add(d, zl.Sub(d, c).uni().per().mul(-l)), e = [];
    for (let n = 1 / s, G = n; G <= 1; G += n)
      e.push(zl.RotWith(u, d, o * 2 * G));
    return e;
  }
  /**
   * 根据圆心和园上的起始点，获取半圆上的等份点
   * @param o 圆心
   * @param p 圆弧起始点
   * @param radian 1，逆时针180度 -1，顺时针
   * @param average 均分数
   * @returns
   */
  static GetSemicircleStroke(d, l, s = -1, c = 8) {
    const o = s * (Math.PI + 1e-3), u = [];
    for (let e = 1 / c, n = e; n <= 1; n += e)
      u.push(zl.RotWith(l, d, o * n));
    return u;
  }
}
function El(Z, d) {
  if (Z && d) {
    const l = Math.min(Z == null ? void 0 : Z.x, d.x), s = Math.min(Z == null ? void 0 : Z.y, d.y), c = Math.max(Z.x + Z.w, d.x + d.w), o = Math.max(Z.y + Z.h, d.y + d.h), u = c - l, e = o - s;
    return { x: l, y: s, w: u, h: e };
  }
  return d || Z;
}
function ct(Z, d = 0) {
  const l = { x: 0, y: 0, w: 0, h: 0 };
  let s = 1 / 0, c = 1 / 0, o = -1 / 0, u = -1 / 0;
  return Z.forEach((e) => {
    const [n, G] = e.XY;
    s = Math.min(s, n - d), c = Math.min(c, G - d), o = Math.max(o, n + d), u = Math.max(u, G + d);
  }), l.x = s, l.y = c, l.w = o - s, l.h = u - c, l;
}
function Zt(Z, d) {
  return !(Z.x + Z.w < d.x || Z.x > d.x + d.w || Z.y + Z.h < d.y || Z.y > d.y + d.h);
}
function mt(Z, d) {
  return Z.length === d.length && Z.sort().toString() === d.sort().toString();
}
function pi(Z, d) {
  let l;
  return d == null || d.getElementsByName(Z).forEach((s) => {
    if (s.tagName === "PATH") {
      const c = s == null ? void 0 : s.getBoundingClientRect();
      c && (l = El(l, {
        x: Math.floor(c.x),
        y: Math.floor(c.y),
        w: Math.round(c.width),
        h: Math.round(c.height)
      }));
    } else if (s.tagName === "GROUP") {
      const c = s.className.split(",");
      if (c.length === 3 && Number(c[2]) === _l.Stroke) {
        const o = s == null ? void 0 : s.getBoundingClientRect();
        o && (l = El(l, {
          x: Math.floor(o.x),
          y: Math.floor(o.y),
          w: Math.round(o.width),
          h: Math.round(o.height)
        }));
      } else
        s.children.forEach((o) => {
          if (o.tagName === "PATH") {
            const u = o == null ? void 0 : o.getBoundingClientRect();
            u && (l = El(l, {
              x: Math.floor(u.x),
              y: Math.floor(u.y),
              w: Math.round(u.width),
              h: Math.round(u.height)
            }));
          }
        });
    }
  }), l;
}
const di = (Z, d) => new Promise(function(l) {
  window.requestIdleCallback ? requestIdleCallback(() => {
    l(1);
  }, { timeout: d }) : setTimeout(() => {
    l(2);
  }, d);
}).then(function() {
  Z();
}, () => {
  Z();
});
function as(Z) {
  return JSON.parse(fs(Z));
}
function os(Z) {
  return ws(JSON.stringify(Z));
}
const Ld = Object.keys;
function ii(Z, d, l) {
  return "#" + ((Z << 16) + (d << 8) + l).toString(16).padStart(6, "0");
}
function Yd(Z, d = 1) {
  return "rgba(" + parseInt("0x" + Z.slice(1, 3)) + "," + parseInt("0x" + Z.slice(3, 5)) + "," + parseInt("0x" + Z.slice(5, 7)) + "," + d + ")";
}
function nt(Z) {
  const d = Z.split(","), l = parseInt(d[0].split("(")[1]), s = parseInt(d[1]), c = parseInt(d[2]), o = parseInt(d[3].split(")")[0]);
  return [ii(l, s, c), o];
}
class Il extends it {
  updataOptService() {
  }
  constructor(d, l, s) {
    super(l, s), Object.defineProperty(this, "tmpPoints", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "toolsType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Jl.Selector
    }), Object.defineProperty(this, "workOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "syncTimestamp", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "curNodeMap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), Object.defineProperty(this, "selectIds", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "oldRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "nodeColor", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "nodeOpactiy", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "oldSelectRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.workOptions = d, this.syncTimestamp = 0;
  }
  computNodeMap(d) {
    this.curNodeMap.clear(), d.forEach((l) => {
      var c;
      const s = this.fullLayer.getElementsByName(l.name)[0] || ((c = this.drawLayer) == null ? void 0 : c.getElementsByName(l.name)[0]);
      if (s) {
        const o = s.worldPosition;
        let u = s.getAttribute("strokeColor");
        const e = s.className.split(",");
        s.tagName === "GROUP" && (Number(e[2]) === _l.Stroke ? u = s.getAttribute("bgcolor") : u = s.children[0].getAttribute("strokeColor")), this.curNodeMap.set(l.name, {
          name: l.name,
          rect: l.rect,
          color: nt(u)[0],
          pos: o,
          rotate: s.getAttribute("rotate") || 0,
          scale: s.getAttribute("scale") || [1, 1],
          opactiy: s.getAttribute("opacity") || 1
        });
      }
    });
  }
  computSelector() {
    let d;
    const l = [], s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map();
    if (this.tmpPoints.length && this.curNodeMap.size) {
      const e = ct(this.tmpPoints);
      this.curNodeMap.forEach((n, G) => {
        const y = {
          x: n.rect.x,
          y: n.rect.y,
          w: n.rect.w,
          h: n.rect.h
        }, a = {
          x: e.x,
          y: e.y,
          w: e.w,
          h: e.h
        };
        Zt(a, y) && (l.push(G), d = El(d, y), s.set(G, y), c.add(n.color), u.set(G, [...n.pos, n.rotate]), o.add(n.opactiy));
      });
    }
    return {
      selectIds: l,
      intersectRect: d,
      subRects: s,
      nodeColors: c,
      subPos: u,
      opactiys: o
    };
  }
  updateTempPoints(d) {
    const l = this.tmpPoints.length, s = d.length;
    if (s > 1) {
      const c = new zl(d[s - 2] * this.fullLayer.worldScaling[0] + this.fullLayer.worldPosition[0], d[s - 1] * this.fullLayer.worldScaling[0] + this.fullLayer.worldPosition[1]);
      l === 2 ? this.tmpPoints.splice(1, 1, c) : this.tmpPoints.push(c);
    }
  }
  draw(d) {
    var o, u, e;
    const { intersectRect: l, subRects: s, subPos: c } = d;
    (e = (u = (o = this.drawLayer) == null ? void 0 : o.parent) == null ? void 0 : u.getElementById(Il.selectorId)) == null || e.remove(), l && this.drawLayer && this.drawSelector({
      drawRect: l,
      subRects: s,
      subPos: c,
      selectorId: Il.selectorId,
      layer: this.drawLayer
    });
  }
  consume(d) {
    const { op: l, workState: s } = d.data;
    if (s === Ll.Start && d.nodeMaps && (this.computNodeMap(d.nodeMaps), this.oldRect = this.backToFullLayer(d.nodeMaps)), !(l != null && l.length) || !this.curNodeMap.size)
      return { type: hl.None };
    this.updateTempPoints(l);
    const c = this.computSelector();
    if (this.selectIds && mt(this.selectIds, c.selectIds))
      return { type: hl.None };
    this.selectIds = c.selectIds;
    const o = this.drawLayer && this.getSelectorRect(this.drawLayer, Il.selectorId, !0), u = c.intersectRect && {
      x: c.intersectRect.x - Il.SelectBorderPadding,
      y: c.intersectRect.y - Il.SelectBorderPadding,
      w: c.intersectRect.w + Il.SelectBorderPadding * 2,
      h: c.intersectRect.h + Il.SelectBorderPadding * 2
    } || void 0;
    return this.oldRect = El(o, u), this.draw(c), this.nodeColor = c.nodeColors.size === 1 ? c.nodeColors.values().next().value : void 0, this.nodeOpactiy = c.opactiys.size === 1 ? c.opactiys.values().next().value : 1, this.oldSelectRect = u, {
      type: hl.Select,
      dataType: Fl.Local,
      rect: this.oldRect,
      selectIds: c.selectIds,
      opt: this.workOptions,
      padding: Il.SelectBorderPadding,
      selectRect: u,
      nodeColor: this.nodeColor,
      nodeOpactiy: this.nodeOpactiy,
      willSyncService: !0
    };
  }
  consumeAll() {
    var d;
    return (d = this.selectIds) != null && d.length && this.sealToDrawLayer(this.selectIds), this.oldSelectRect ? {
      type: hl.Select,
      dataType: Fl.Local,
      rect: this.oldRect,
      selectIds: this.selectIds,
      opt: this.workOptions,
      padding: Il.SelectBorderPadding,
      selectRect: this.oldSelectRect,
      nodeColor: this.nodeColor,
      nodeOpactiy: this.nodeOpactiy,
      willSyncService: !1
    } : {
      type: hl.None
    };
  }
  consumeService() {
  }
  combineConsume() {
  }
  clearTmpPoints() {
    this.tmpPoints.length = 0;
  }
  clearSelectData() {
    this.selectIds = void 0, this.oldRect = void 0, this.oldSelectRect = void 0;
  }
  backToFullLayer(d = /* @__PURE__ */ new Map(), l) {
    var u, e;
    let s;
    const c = [], o = [];
    for (const n of ((u = this.drawLayer) == null ? void 0 : u.children) || [])
      if (!(l != null && l.length && !l.includes(n.id)) && n.id !== Il.selectorId) {
        const G = n.cloneNode(!0);
        if (G.tagName === "GROUP") {
          const a = n.className.split(",");
          a.length === 3 && Number(a[2]) === _l.Stroke && G.seal();
        }
        c.push(G), o.push(n);
        const y = ((e = d.get(n.name)) == null ? void 0 : e.rect) || pi(n.name, this.drawLayer);
        y && (s = El(s, y));
      }
    return o.forEach((n) => n.remove()), c.length && this.fullLayer.append(...c), s && (s.x -= Il.SelectBorderPadding, s.y -= Il.SelectBorderPadding, s.w += Il.SelectBorderPadding * 2, s.h += Il.SelectBorderPadding * 2), s;
  }
  sealToDrawLayer(d) {
    var c;
    const l = [], s = [];
    d.forEach((o) => {
      this.fullLayer.getElementsByName(o.toString()).forEach((u) => {
        const e = u.cloneNode(!0);
        if (e.tagName === "GROUP") {
          const n = u.className.split(",");
          n.length === 3 && Number(n[2]) === _l.Stroke && e.seal();
        }
        l.push(e), s.push(u);
      });
    }), s.forEach((o) => o.remove()), l && ((c = this.drawLayer) == null || c.append(...l));
  }
  updateSelectorSize(d, l, s) {
    const c = /* @__PURE__ */ new Map(), o = d.getAttribute("pos"), u = d.className.split(","), e = l - Il.SelectBorderPadding * 2, n = s - Il.SelectBorderPadding * 2, G = u.length === 2 && [e / Number(u[0]), n / Number(u[1])] || [1, 1];
    return d.setAttribute("size", [e, n]), d.children.forEach((y) => {
      if (y.id === Il.selectorBorderId)
        y.setAttribute("pos", [e / 2, n / 2]), y.setAttribute("width", e), y.setAttribute("height", n);
      else if (G) {
        const a = y.className.split(","), I = [Number(a[0]) * G[0], Number(a[1]) * G[1]], h = y.getAttribute("width"), S = y.getAttribute("height"), p = Number(a[2]) * G[0], X = Number(a[3]) * G[1];
        y.setAttribute("pos", I), y.setAttribute("width", p), y.setAttribute("height", X);
        const V = y.id.split("selector-")[1];
        if (V) {
          const i = [I[0] + o[0], I[1] + o[1]], b = [
            p / h,
            X / S
          ];
          c.set(V, [
            i[0],
            i[1],
            b[0],
            b[1]
          ]);
        }
      }
    }), c;
  }
  updateSelectorRect(d, l) {
    const { w: s, h: c, x: o, y: u } = l, e = s - Il.SelectBorderPadding * 2, n = c - Il.SelectBorderPadding * 2, G = o + Il.SelectBorderPadding, y = u + Il.SelectBorderPadding;
    d.setAttribute("size", [s, c]), d.setAttribute("pos", [G, y]), d.setAttribute("className", `${l.w},${l.h}`), d.children.forEach((a) => {
      if (a.setAttribute("pos", [e / 2, n / 2]), a.setAttribute("width", e), a.setAttribute("height", n), a.id === Il.selectorBorderId)
        a.setAttribute("className", `${l.w / 2},${l.h / 2},${l.w},${l.h}`);
      else {
        const I = a.className.split(","), h = I && Number(I[4]) || 0;
        a.setAttribute("className", `${e / 2},${n / 2},${l.w},${l.h},${h}`);
      }
    });
  }
  getSelectorRect(d, l, s) {
    var n;
    let c;
    const o = (n = d.parent) == null ? void 0 : n.getElementById(l), u = o == null ? void 0 : o.getElementById(Il.selectorBorderId), e = u == null ? void 0 : u.getBoundingClientRect();
    return e && (c = El(c, {
      x: Math.floor(e.x),
      y: Math.floor(e.y),
      w: Math.round(e.width),
      h: Math.round(e.height)
    })), c && s ? {
      x: c.x - Il.SelectBorderPadding,
      y: c.y - Il.SelectBorderPadding,
      w: c.w + Il.SelectBorderPadding * 2,
      h: c.h + Il.SelectBorderPadding * 2
    } : c;
  }
  updateSelector(d) {
    var n, G, y;
    const { updateSelectorOpt: l, selectIds: s } = d;
    let c;
    const o = /* @__PURE__ */ new Map();
    let u;
    const e = (G = (n = this.drawLayer) == null ? void 0 : n.parent) == null ? void 0 : G.getElementById(Il.selectorId);
    if (e) {
      let a;
      if (l.pos) {
        const I = [
          l.pos[0] * this.fullLayer.worldScaling[0] + this.fullLayer.worldPosition[0],
          l.pos[1] * this.fullLayer.worldScaling[1] + this.fullLayer.worldPosition[1]
        ], h = e.getAttribute("pos");
        a = [I[0] - h[0], I[1] - h[1]], e.setAttribute("pos", I);
      }
      if (l.selectorColor && ((y = e.getElementById(Il.selectorBorderId)) == null || y.setAttribute("strokeColor", l.selectorColor)), l.size && (u = this.updateSelectorSize(e, l.size.width, l.size.height)), l.angle)
        s == null || s.forEach((I) => {
          var h;
          (h = this.drawLayer) == null || h.getElementsByName(I).forEach((S) => {
            if (S) {
              const p = {
                useAnimation: !1
              };
              l.angle && (p.angle = l.angle, p.originPos = S.className.split(",").map((V) => Number(V)), S.setAttribute("rotate", p.angle)), o.set(S.name, p);
              const X = pi(S.name, this.drawLayer);
              c = El(c, X);
            }
          });
        }, this);
      else {
        s == null || s.forEach((S) => {
          var p;
          (p = this.drawLayer) == null || p.getElementsByName(S).forEach((X) => {
            if (X) {
              const V = {
                useAnimation: !1
              };
              if (l.pos && a) {
                const b = X.getAttribute("pos");
                V.pos = [a[0] / this.fullLayer.worldScaling[0] + b[0], a[1] / this.fullLayer.worldScaling[0] + b[1]], V.originPos = X.className.split(",").map((t) => Number(t)), X.setAttribute("pos", V.pos);
              }
              if (l.zIndexDistance || l.zIndex) {
                if (l.zIndexDistance) {
                  const b = X.getAttribute("zIndex");
                  V.zIndex = b + l.zIndexDistance;
                } else
                  V.zIndex = l.zIndex;
                X.setAttribute("zIndex", V.zIndex);
              }
              if (l.color) {
                V.color = l.color;
                const b = X.className.split(",");
                X.tagName === "GROUP" ? Number(b[2]) === _l.Stroke ? X.setAttribute("bgcolor", V.color) : X.children.forEach((t) => {
                  t.setAttribute("strokeColor", V.color);
                }) : X.tagName === "PATH" && (X.setAttribute("strokeColor", V.color), X.getAttribute("fillColor") && X.setAttribute("fillColor", V.color));
              }
              l.opacity && (V.opacity = l.opacity, X.setAttribute("opacity", V.opacity));
              const i = u == null ? void 0 : u.get(X.name);
              if (i) {
                const b = X.getAttribute("scale"), t = [
                  i[2] * b[0],
                  i[3] * b[1]
                ];
                V.originPos = X.className.split(",").map((m) => Number(m)), V.pos = [(i[0] - this.fullLayer.worldPosition[0]) / this.fullLayer.worldScaling[0], (i[1] - this.fullLayer.worldPosition[1]) / this.fullLayer.worldScaling[1]], V.scale = t, X.setAttribute("pos", V.pos), X.setAttribute("scale", V.scale);
              }
              o.set(X.name, V);
            }
          });
        }, this);
        const I = e.getElementById(Il.selectorBorderId), h = I == null ? void 0 : I.getBoundingClientRect();
        h && (c = El(c, {
          x: Math.floor(h.x),
          y: Math.floor(h.y),
          w: Math.round(h.width),
          h: Math.round(h.height)
        }));
      }
    }
    if (c)
      return c.x -= Il.SelectBorderPadding, c.y -= Il.SelectBorderPadding, c.w += Il.SelectBorderPadding * 2, c.h += Il.SelectBorderPadding * 2, l.angle && this.updateSelectorRect(e, c), this.oldRect = El(this.oldRect, c), this.oldSelectRect = c, {
        type: hl.UpdateNode,
        dataType: Fl.Local,
        rect: c,
        updateNodeOpts: o
      };
  }
  blurSelector(d) {
    const l = this.backToFullLayer(d);
    return {
      type: hl.Select,
      dataType: Fl.Local,
      rect: l,
      selectIds: [],
      willSyncService: !0
    };
  }
  getRightServiceId(d) {
    return d.replace("++", "-");
  }
  drawSelector(d) {
    const { drawRect: l, subRects: s, subPos: c, selectorId: o, layer: u } = d, e = new st({
      pos: [l.x, l.y],
      anchor: [0, 0],
      size: [l.w, l.h],
      className: `${l.w},${l.h}`,
      id: o,
      name: Il.selectorId,
      zIndex: 1e3
    }), n = [], G = new Ii({
      normalize: !0,
      pos: [l.w / 2, l.h / 2],
      lineWidth: 1,
      strokeColor: this.workOptions.color,
      width: l.w,
      height: l.h,
      className: `${l.w / 2},${l.h / 2},${l.w},${l.h}`,
      id: Il.selectorBorderId
    });
    n.push(G), s.forEach((y, a) => {
      const I = c == null ? void 0 : c.get(a);
      if (I) {
        const h = [I[0] - l.x, I[1] - l.y], S = `${h[0]},${h[1]},${y.w},${y.h},${I[2]}`, p = new Ii({
          normalize: !0,
          pos: h,
          lineWidth: 1,
          strokeColor: s.size > 1 ? this.workOptions.color : void 0,
          width: y.w,
          height: y.h,
          className: S,
          id: `selector-${a}`,
          name: `selector-${a}`
        });
        n.push(p);
      }
    }), n && e.append(...n), (u == null ? void 0 : u.parent).appendChild(e);
  }
  selectServiceNode(d, l, s) {
    var y;
    const { selectIds: c } = l, o = this.getRightServiceId(d), u = this.getSelectorRect(this.fullLayer, o, !0);
    (y = this.fullLayer.parent.getElementById(o)) == null || y.remove();
    let e;
    const n = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map();
    return c == null || c.forEach((a) => {
      var S;
      const I = s.get(a), h = this.fullLayer.getElementsByName(a)[0];
      if (I && h) {
        e = El(e, I.rect), n.set(a, I.rect);
        const p = h.worldPosition, X = ((S = I.opt) == null ? void 0 : S.rotate) || h.getAttribute("rotate") || 0;
        G.set(a, [...p, X]);
      }
    }), e && this.fullLayer && this.drawSelector({
      drawRect: e,
      subRects: n,
      subPos: G,
      selectorId: o,
      layer: this.fullLayer
    }), e = El(e, u), e && (e.x -= Il.SelectBorderPadding, e.y -= Il.SelectBorderPadding, e.w += Il.SelectBorderPadding * 2, e.h += Il.SelectBorderPadding * 2), e;
  }
  removeService() {
    throw new Error("Method not implemented.");
  }
  getSelector(d) {
    var o;
    let l;
    const s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
    return (o = this.selectIds) == null || o.forEach((u) => {
      var G;
      const e = d.get(u), n = (G = this.drawLayer) == null ? void 0 : G.getElementsByName(u)[0];
      if (e && n) {
        const y = n.worldPosition, a = n.getAttribute("rotate") || 0;
        l = El(l, e.rect), s.set(u, e.rect), c.set(u, [...y, a]);
      }
    }, this), this.oldRect = El(l, this.oldRect), this.draw({
      intersectRect: l,
      subRects: s,
      subPos: c
    }), l && (l.x -= Il.SelectBorderPadding, l.y -= Il.SelectBorderPadding, l.w += Il.SelectBorderPadding * 2, l.h += Il.SelectBorderPadding * 2), this.oldSelectRect = l, l;
  }
  updateSelectIds(d, l) {
    var e, n;
    let s;
    const c = (e = this.selectIds) == null ? void 0 : e.filter((G) => !d.includes(G)), o = d.filter((G) => {
      var y;
      return !((y = this.selectIds) != null && y.includes(G));
    });
    if (c != null && c.length && (s = this.backToFullLayer(l, c)), o.length) {
      this.sealToDrawLayer(o);
      for (const G of o) {
        const y = (n = l.get(G)) == null ? void 0 : n.rect;
        y && (s = El(s, y));
      }
      s && (s.x -= Il.SelectBorderPadding, s.y -= Il.SelectBorderPadding, s.w += Il.SelectBorderPadding * 2, s.h += Il.SelectBorderPadding * 2);
    }
    this.selectIds = d;
    const u = this.getSelector(l);
    return {
      bgRect: s,
      selectRect: u
    };
  }
}
Object.defineProperty(Il, "selectorId", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "selector"
});
Object.defineProperty(Il, "selectorBorderId", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "selector-border"
});
Object.defineProperty(Il, "SelectBorderPadding", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 2
});
class Xt {
  constructor(d, l) {
    Object.defineProperty(this, "collector", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "displayer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "dustbin", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), this.displayer = d, this.collector = l;
  }
  /** 设置当前选中的工具配置数据 */
  setCurrentToolsData(d) {
    this.currentToolsData = d;
  }
  /** 设置当前绘制任务数据 */
  setCurrentLocalWorkData(d) {
    this.currentLocalWorkData = d;
  }
  /** 设置相机参数 */
  setCameraOpt(d) {
    this.cameraOpt = d;
  }
  /** 获取当前绘制任务id */
  getWorkId() {
    return this.currentLocalWorkData.workId;
  }
}
function et(Z) {
  let d;
  try {
    if (d = Li && (window.URL || window.webkitURL).createObjectURL(Li), !d)
      throw "";
    const l = new Worker(d, {
      name: Z == null ? void 0 : Z.name
    });
    return l.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(d);
    }), l;
  } catch {
    return new Worker(
      "data:application/javascript;base64," + Ws,
      {
        name: Z == null ? void 0 : Z.name
      }
    );
  } finally {
    d && (window.URL || window.webkitURL).revokeObjectURL(d);
  }
}
function at(Z) {
  let d;
  try {
    if (d = yi && (window.URL || window.webkitURL).createObjectURL(yi), !d)
      throw "";
    const l = new Worker(d, {
      name: Z == null ? void 0 : Z.name
    });
    return l.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(d);
    }), l;
  } catch {
    return new Worker(
      "data:application/javascript;base64," + Gs,
      {
        name: Z == null ? void 0 : Z.name
      }
    );
  } finally {
    d && (window.URL || window.webkitURL).revokeObjectURL(d);
  }
}
const ot = "index-module__Container__nLsM3", Wt = "index-module__CanvasBox__j2Xe-", Gt = "index-module__FloatCanvas__d1YR7", ut = "index-module__FloatBar__cm-EL", Vt = "index-module__RotateBtn__HSSkf", yd = {
  Container: ot,
  CanvasBox: Wt,
  FloatCanvas: Gt,
  FloatBar: ut,
  RotateBtn: Vt
};
var rd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function si(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
function ht(Z) {
  var d = typeof Z;
  return Z != null && (d == "object" || d == "function");
}
var bd = ht, It = typeof rd == "object" && rd && rd.Object === Object && rd, us = It, pt = us, Lt = typeof self == "object" && self && self.Object === Object && self, yt = pt || Lt || Function("return this")(), Al = yt, Rt = Al, Kt = function() {
  return Rt.Date.now();
}, Yt = Kt, St = /\s/;
function xt(Z) {
  for (var d = Z.length; d-- && St.test(Z.charAt(d)); )
    ;
  return d;
}
var rt = xt, Ct = rt, Jt = /^\s+/;
function Tt(Z) {
  return Z && Z.slice(0, Ct(Z) + 1).replace(Jt, "");
}
var Ft = Tt, Nt = Al, gt = Nt.Symbol, zd = gt, Ri = zd, Vs = Object.prototype, Ht = Vs.hasOwnProperty, zt = Vs.toString, Rd = Ri ? Ri.toStringTag : void 0;
function Mt(Z) {
  var d = Ht.call(Z, Rd), l = Z[Rd];
  try {
    Z[Rd] = void 0;
    var s = !0;
  } catch {
  }
  var c = zt.call(Z);
  return s && (d ? Z[Rd] = l : delete Z[Rd]), c;
}
var kt = Mt, vt = Object.prototype, Ut = vt.toString;
function Qt(Z) {
  return Ut.call(Z);
}
var Pt = Qt, Ki = zd, ft = kt, wt = Pt, Et = "[object Null]", jt = "[object Undefined]", Yi = Ki ? Ki.toStringTag : void 0;
function Bt(Z) {
  return Z == null ? Z === void 0 ? jt : Et : Yi && Yi in Object(Z) ? ft(Z) : wt(Z);
}
var xd = Bt;
function Ot(Z) {
  return Z != null && typeof Z == "object";
}
var nd = Ot, Dt = xd, At = nd, qt = "[object Symbol]";
function $t(Z) {
  return typeof Z == "symbol" || At(Z) && Dt(Z) == qt;
}
var _t = $t, lb = Ft, Si = bd, db = _t, xi = NaN, ib = /^[-+]0x[0-9a-f]+$/i, sb = /^0b[01]+$/i, tb = /^0o[0-7]+$/i, bb = parseInt;
function cb(Z) {
  if (typeof Z == "number")
    return Z;
  if (db(Z))
    return xi;
  if (Si(Z)) {
    var d = typeof Z.valueOf == "function" ? Z.valueOf() : Z;
    Z = Si(d) ? d + "" : d;
  }
  if (typeof Z != "string")
    return Z === 0 ? Z : +Z;
  Z = lb(Z);
  var l = sb.test(Z);
  return l || tb.test(Z) ? bb(Z.slice(2), l ? 2 : 8) : ib.test(Z) ? xi : +Z;
}
var Zb = cb, mb = bd, wd = Yt, ri = Zb, nb = "Expected a function", Xb = Math.max, eb = Math.min;
function ab(Z, d, l) {
  var s, c, o, u, e, n, G = 0, y = !1, a = !1, I = !0;
  if (typeof Z != "function")
    throw new TypeError(nb);
  d = ri(d) || 0, mb(l) && (y = !!l.leading, a = "maxWait" in l, o = a ? Xb(ri(l.maxWait) || 0, d) : o, I = "trailing" in l ? !!l.trailing : I);
  function h(K) {
    var x = s, C = c;
    return s = c = void 0, G = K, u = Z.apply(C, x), u;
  }
  function S(K) {
    return G = K, e = setTimeout(V, d), y ? h(K) : u;
  }
  function p(K) {
    var x = K - n, C = K - G, T = d - x;
    return a ? eb(T, o - C) : T;
  }
  function X(K) {
    var x = K - n, C = K - G;
    return n === void 0 || x >= d || x < 0 || a && C >= o;
  }
  function V() {
    var K = wd();
    if (X(K))
      return i(K);
    e = setTimeout(V, p(K));
  }
  function i(K) {
    return e = void 0, I && s ? h(K) : (s = c = void 0, u);
  }
  function b() {
    e !== void 0 && clearTimeout(e), G = 0, s = n = c = e = void 0;
  }
  function t() {
    return e === void 0 ? u : i(wd());
  }
  function m() {
    var K = wd(), x = X(K);
    if (s = arguments, c = this, n = K, x) {
      if (e === void 0)
        return S(n);
      if (a)
        return clearTimeout(e), e = setTimeout(V, d), h(n);
    }
    return e === void 0 && (e = setTimeout(V, d)), u;
  }
  return m.cancel = b, m.flush = t, m;
}
var ob = ab, Wb = ob, Gb = bd, ub = "Expected a function";
function Vb(Z, d, l) {
  var s = !0, c = !0;
  if (typeof Z != "function")
    throw new TypeError(ub);
  return Gb(l) && (s = "leading" in l ? !!l.leading : s, c = "trailing" in l ? !!l.trailing : c), Wb(Z, d, {
    leading: s,
    maxWait: d,
    trailing: c
  });
}
var hb = Vb;
const ql = /* @__PURE__ */ si(hb), Ib = {
  delete: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDZ2NmEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMlY2aDBtMS0yYTIgMiAwIDAgMSAyLTJoMmEyIDIgMCAwIDEgMiAyaDBNMyA0aDEwIiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
  duplicate: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMSAySDZhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoNmExIDEgMCAwIDAgMS0xVjRoMGwtMi0yeiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTExIDJ2MWExIDEgMCAwIDAgMSAxaDFsLTItMnoiLz48cGF0aCBkPSJNOSAxNEg0YTEgMSAwIDAgMS0xLTFWNWgwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9zdmc+",
  "layer-pressed": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2IDEwLTYgNCA2IDQgNi00em0tNiA4IDYgNCA2LTQiIHN0cm9rZT0iIzMzODFGRiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
  layer: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2IDEwLTYgNCA2IDQgNi00em0tNiA4IDYgNCA2LTQiIHN0cm9rZT0iIzQ0NEU2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
  rotate: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTEzIDZhNiA2IDAgMSAxLTMuNzA5IDEuMjgzIi8+PHBhdGggZD0ibTEzIDYgMS40MTQgMi40NUwxMyA2bDIuNDUtMS40MTQiLz48L2c+PC9zdmc+",
  "rotation-button": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBvcGFjaXR5PSIuMDEiIGQ9Ik0wIDI0VjBoMjR2MjR6Ii8+PHBhdGggZD0iTTUuNzI0IDUuNzI0QTguODQ3IDguODQ3IDAgMCAxIDEyIDMuMTI1YzIuMjcxIDAgNC41NDMuODY2IDYuMjc2IDIuNmE4Ljg0NiA4Ljg0NiAwIDAgMSAyLjU5OCA2LjE0IDguODQ5IDguODQ5IDAgMCAxLTIuNTU5IDYuMzdsLTEuNS0uOTgzQTcuMTA1IDcuMTA1IDAgMCAwIDE5LjEyNSAxMmE3LjEwMyA3LjEwMyAwIDAgMC0yLjA4Ny01LjAzOEE3LjEwMyA3LjEwMyAwIDAgMCAxMiA0Ljg3NWE3LjEwMyA3LjEwMyAwIDAgMC01LjAzOCAyLjA4NyA3LjEwMSA3LjEwMSAwIDAgMC0yLjA4NiA0LjkyIDcuMTAzIDcuMTAzIDAgMCAwIDEuNzY2IDQuODE1bDEuOTQ1LTEuNTg0IDIuMzk0IDcuMTgyLTcuMjIyLTIuNDA4IDEuNzkxLTEuNzlBOC44NDYgOC44NDYgMCAwIDEgMy4xMjUgMTJjMC0yLjI3MS44NjYtNC41NDMgMi42LTYuMjc2eiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+",
  rotation: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBvcGFjaXR5PSIuMDEiIGQ9Ik0wIDI0VjBoMjR2MjR6Ii8+PHBhdGggZD0iTTUuNzI0IDUuNzI0QTguODQ3IDguODQ3IDAgMCAxIDEyIDMuMTI1YzIuMjcxIDAgNC41NDMuODY2IDYuMjc2IDIuNmE4Ljg0NiA4Ljg0NiAwIDAgMSAyLjU5OCA2LjE0IDguODQ5IDguODQ5IDAgMCAxLTIuNTU5IDYuMzdsLTEuNS0uOTgzQTcuMTA1IDcuMTA1IDAgMCAwIDE5LjEyNSAxMmE3LjEwMyA3LjEwMyAwIDAgMC0yLjA4Ny01LjAzOEE3LjEwMyA3LjEwMyAwIDAgMCAxMiA0Ljg3NWE3LjEwMyA3LjEwMyAwIDAgMC01LjAzOCAyLjA4NyA3LjEwMSA3LjEwMSAwIDAgMC0yLjA4NiA0LjkyIDcuMTAzIDcuMTAzIDAgMCAwIDEuNzY2IDQuODE1bDEuOTQ1LTEuNTg0IDIuMzk0IDcuMTgyLTcuMjIyLTIuNDA4IDEuNzkxLTEuNzlBOC44NDYgOC44NDYgMCAwIDEgMy4xMjUgMTJjMC0yLjI3MS44NjYtNC41NDMgMi42LTYuMjc2eiIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9Ii41IiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PC9zdmc+",
  "font-colors-active": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQgMTEgNC05IDQgOU02IDdoNCIgc3Ryb2tlPSIjMzM4MUZGIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
  "font-colors": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTQgMTEgNC05IDQgOU02IDdoNCIgc3Ryb2tlPSIjNDQ0RTYwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
  "to-bottom": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEwdjhtMCAwLTItMm0yIDIgMi0ybS00IDZoMTJtLTYtNGg2bS02LTRoNm0tNi00aDYiIHN0cm9rZT0iIzQ0NEU2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
  "to-top": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIydi04bTAgMC0yIDJtMi0yIDIgMm0tNC02aDEybS02IDRoNm0tNiA0aDZtLTYgNGg2IiBzdHJva2U9IiM0NDRFNjAiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
};
function md(Z) {
  return Ib[Z];
}
var jl;
(function(Z) {
  Z[Z.sdk = 1] = "sdk", Z[Z.plugin = 2] = "plugin", Z[Z.both = 3] = "both";
})(jl || (jl = {}));
var id;
(function(Z) {
  Z[Z.Draw = 1] = "Draw", Z[Z.Delete = 2] = "Delete", Z[Z.Update = 3] = "Update";
})(id || (id = {}));
class rl {
  constructor(d, l, s) {
    Object.defineProperty(this, "undoStack", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "redoStack", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "worker", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "colloctor", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "room", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "isTicking", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "undoTickerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "tickStartStorerCache", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "excludeIds", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Set()
    }), Object.defineProperty(this, "undoTickerEnd", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: $s((c) => {
        if (c === this.undoTickerId && this.tickStartStorerCache) {
          this.isTicking = !1;
          const o = this.diffFun(this.tickStartStorerCache, new Map(Object.entries(this.colloctor.storage))), u = this.undoStack.find((e) => e.id === this.undoTickerId);
          u ? u.data = o : o.size && (this.undoStack.push({
            id: c,
            type: jl.plugin,
            data: o
          }), this.undoStack.length > rl.MaxStackLength && this.undoStack.shift(), rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length)), this.redoStack.length && (this.redoStack.length = 0, rl.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length)), this.tickStartStorerCache = void 0, this.undoTickerId = void 0, this.excludeIds.clear();
        }
      }, rl.waitTime)
    }), this.undoStack = [], this.redoStack = [], this.room = d, this.worker = l, this.colloctor = s, this.isTicking = !1, rl.emitter.on("undoTickerStart", this.undoTickerStart.bind(this)), rl.emitter.on("undoTickerEnd", this.undoTickerEnd.bind(this)), rl.emitter.on("excludeIds", this.addExcludeIds.bind(this));
  }
  addExcludeIds(d) {
    if (this.isTicking)
      for (const l of d)
        this.excludeIds.add(l);
  }
  addSdkUndoData(d) {
    const l = this.undoStack.findIndex((s) => (s == null ? void 0 : s.sdkStep) && s.sdkStep > d);
    if (l > -1)
      this.undoStack.splice(l);
    else if (d > 0 && this.undoStack.findIndex((c) => (c == null ? void 0 : c.sdkStep) && c.sdkStep === d) === -1)
      if (this.isTicking && this.undoTickerId) {
        const c = this.undoStack.find((o) => o.id === this.undoTickerId);
        c ? (c.type = jl.both, c.sdkStep = d) : (this.undoStack.push({
          id: this.undoTickerId,
          type: jl.both,
          sdkStep: d
        }), this.undoStack.length > rl.MaxStackLength && this.undoStack.shift(), rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length));
      } else
        this.undoStack.push({
          type: jl.sdk,
          sdkStep: d
        }), this.undoStack.length > rl.MaxStackLength && this.undoStack.shift(), rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
  }
  diffFun(d, l) {
    const s = /* @__PURE__ */ new Set(), c = d.keys(), o = l.keys();
    for (const u of c) {
      if (this.excludeIds.has(u))
        continue;
      const e = d.get(u), n = l.get(u);
      if (e && n) {
        if (_s(n, e))
          continue;
        s.add({
          dataType: id.Update,
          key: u,
          data: [e, n]
        });
        continue;
      }
      e && s.add({
        dataType: id.Delete,
        key: u,
        data: e
      });
    }
    for (const u of o) {
      const e = l.get(u);
      e && !d.has(u) && s.add({
        dataType: id.Draw,
        key: u,
        data: e
      });
    }
    return s;
  }
  undoTickerStart(d) {
    this.excludeIds.clear(), this.isTicking = !0, this.undoTickerId = d, this.tickStartStorerCache = new Map(Object.entries(lt(this.colloctor.storage)));
  }
  isDrawEffectiveScene(d, l) {
    const { key: s } = d;
    return !l.includes(s);
  }
  isDeleteEffectiveScene(d, l) {
    var o;
    const { key: s } = d;
    if (!l.includes(s))
      return !1;
    const c = l.filter((u) => this.colloctor.getLocalId(u) === "selector" && !this.colloctor.isOwn(u)).map((u) => this.colloctor.storage[u]);
    for (const u of c)
      if ((o = u == null ? void 0 : u.selectIds) != null && o.includes(s))
        return !1;
    return !0;
  }
  isOldEffectiveScene(d, l) {
    var o;
    const { key: s } = d;
    if (!l.includes(s))
      return !1;
    const c = l.filter((u) => this.colloctor.getLocalId(u) === "selector" && !this.colloctor.isOwn(u)).map((u) => this.colloctor.storage[u]);
    for (const u of c)
      if ((o = u == null ? void 0 : u.selectIds) != null && o.includes(s))
        return !1;
    return !0;
  }
  isNewEffectiveScene(d, l) {
    const { key: s } = d;
    return !!l.includes(s);
  }
  refreshPlugin(d, l = !1) {
    var o, u, e, n, G, y, a, I;
    let s;
    const c = Object.keys(this.colloctor.storage);
    for (const h of d.values())
      switch (h.dataType) {
        case id.Draw:
          if (s = l ? this.isDrawEffectiveScene(h, c) : this.isDeleteEffectiveScene(h, c), s)
            if (l && !Array.isArray(h.data)) {
              if ((o = h.data.updateNodeOpt) != null && o.useAnimation && (h.data.updateNodeOpt.useAnimation = !1), this.colloctor.getLocalId(h.key) === "selector" && this.colloctor.isOwn(h.key)) {
                const S = h.data.selectIds;
                if (S) {
                  const p = c.filter((V) => this.colloctor.getLocalId(V) === "selector" && !this.colloctor.isOwn(V)).map((V) => this.colloctor.storage[V]);
                  let X = !1;
                  for (const V of p)
                    for (let i = 0; i < S.length; i++)
                      (u = V == null ? void 0 : V.selectIds) != null && u.includes(S[i]) && (delete S[i], X = !0);
                  X && (h.data.selectIds = S.filter((V) => !!V));
                }
              }
              this.colloctor.updateValue(h.key, h.data, { isAfterUpdate: !0 });
            } else
              !l && !Array.isArray(h.data) && this.colloctor.updateValue(h.key, void 0, { isAfterUpdate: !0 });
          break;
        case id.Delete:
          if (s = l ? this.isDeleteEffectiveScene(h, c) : this.isDrawEffectiveScene(h, c), s) {
            if (l && !Array.isArray(h.data))
              this.colloctor.updateValue(h.key, void 0, { isAfterUpdate: !0 });
            else if (!l && !Array.isArray(h.data)) {
              if ((e = h.data.updateNodeOpt) != null && e.useAnimation && (h.data.updateNodeOpt.useAnimation = !1), this.colloctor.getLocalId(h.key) === "selector" && this.colloctor.isOwn(h.key)) {
                const S = h.data.selectIds;
                if (S) {
                  const p = c.filter((V) => this.colloctor.getLocalId(V) === "selector" && !this.colloctor.isOwn(V)).map((V) => this.colloctor.storage[V]);
                  let X = !1;
                  for (const V of p)
                    for (let i = 0; i < S.length; i++)
                      (n = V == null ? void 0 : V.selectIds) != null && n.includes(S[i]) && (delete S[i], X = !0);
                  X && (h.data.selectIds = S.filter((V) => !!V));
                }
              }
              this.colloctor.updateValue(h.key, h.data, { isAfterUpdate: !0 });
            }
          }
          break;
        case id.Update:
          if (s = l ? this.isNewEffectiveScene(h, c) : this.isOldEffectiveScene(h, c), s) {
            if (l && Array.isArray(h.data) && h.data.length === 2) {
              const S = h.data[1];
              if ((G = S.updateNodeOpt) != null && G.useAnimation && (S.updateNodeOpt.useAnimation = !1), this.colloctor.getLocalId(h.key) === "selector" && this.colloctor.isOwn(h.key)) {
                const p = S.selectIds;
                if (p) {
                  const X = c.filter((i) => this.colloctor.getLocalId(i) === "selector" && !this.colloctor.isOwn(i)).map((i) => this.colloctor.storage[i]);
                  let V = !1;
                  for (const i of X)
                    for (let b = 0; b < p.length; b++)
                      (y = i == null ? void 0 : i.selectIds) != null && y.includes(p[b]) && (delete p[b], V = !0);
                  V && (S.selectIds = p.filter((i) => !!i));
                }
              }
              this.colloctor.updateValue(h.key, S, { isAfterUpdate: !0 });
            } else if (!l && Array.isArray(h.data) && h.data.length === 2) {
              const S = h.data[0];
              if ((a = S.updateNodeOpt) != null && a.useAnimation && (S.updateNodeOpt.useAnimation = !1), this.colloctor.getLocalId(h.key) === "selector" && this.colloctor.isOwn(h.key)) {
                const p = S.selectIds;
                if (p) {
                  const X = c.filter((i) => this.colloctor.getLocalId(i) === "selector" && !this.colloctor.isOwn(i)).map((i) => this.colloctor.storage[i]);
                  let V = !1;
                  for (const i of X)
                    for (let b = 0; b < p.length; b++)
                      (I = i == null ? void 0 : i.selectIds) != null && I.includes(p[b]) && (delete p[b], V = !0);
                  V && (S.selectIds = p.filter((i) => !!i));
                }
              }
              this.colloctor.updateValue(h.key, S, { isAfterUpdate: !0 });
            }
          }
          break;
      }
  }
  undo(d) {
    const l = this.undoStack.pop();
    return l && (this.redoStack.push(l), (l.type === jl.sdk || l.type === jl.both) && l.sdkStep && d.call(this.room), (l.type === jl.plugin || l.type === jl.both) && l.data && this.refreshPlugin(l.data)), rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length), rl.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length), this.undoStack.length;
  }
  redo(d) {
    const l = this.redoStack.pop();
    return l && (this.undoStack.push(l), (l.type === jl.plugin || l.type === jl.both) && l.data && this.refreshPlugin(l.data, !0), (l.type === jl.sdk || l.type === jl.both) && l.sdkStep && d.call(this.room)), rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length), rl.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length), this.redoStack.length;
  }
  clear() {
    this.clearUndo(), this.clearRedo();
  }
  clearUndo() {
    this.undoStack.length = 0, rl.emitter.emit("onCanUndoStepsUpdate", this.undoStack.length);
  }
  clearRedo() {
    this.redoStack.length = 0, rl.emitter.emit("onCanRedoStepsUpdate", this.redoStack.length);
  }
  canUndo() {
    return !!this.undoStack.length;
  }
  canRedo() {
    return !!this.redoStack.length;
  }
  destroy() {
    rl.emitter.removeAllListeners();
  }
}
Object.defineProperty(rl, "MaxStackLength", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 20
});
Object.defineProperty(rl, "emitter", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new As()
});
Object.defineProperty(rl, "waitTime", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 100
});
class ld {
  constructor() {
    Object.defineProperty(this, "emtType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "mainEngine", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "serviceColloctor", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  static dispatch(d, l, s) {
    var c;
    (c = yl.InternalMsgEmitter) == null || c.emit([d, l], s);
  }
  registerForMainEngine(d, l, s) {
    var c;
    return this.emtType = d, this.mainEngine = l, this.serviceColloctor = s, (c = yl.InternalMsgEmitter) == null || c.on([this.emtType, this.emitEventType], this.collect.bind(this)), this;
  }
  destroy() {
    var d;
    this.emtType && ((d = yl.InternalMsgEmitter) == null || d.off([this.emtType, this.emitEventType], this.collect.bind(this)));
  }
  collectForLocalWorker(d) {
    var l;
    d.forEach((s) => {
      var c;
      (c = this.mainEngine) == null || c.taskBatchData.set(`${s.msgType},${s.workId}`, s);
    }), (l = this.mainEngine) == null || l.runAnimation();
  }
  collectForServiceWorker(d) {
    di(() => {
      d.forEach((l) => {
        var s;
        (s = this.serviceColloctor) == null || s.dispatch(l), l.undoTickerId && rl.emitter.emit("undoTickerEnd", l.undoTickerId);
      });
    }, Bl.maxLastSyncTime);
  }
}
class pb extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.ZIndexActive
    });
  }
  collect(d) {
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workId: l, isActive: s } = d, c = [], o = [];
    l === Il.selectorId && c.push({
      workId: l,
      msgType: hl.UpdateNode,
      dataType: Fl.Local,
      isActiveZIndex: s,
      emitEventType: this.emitEventType,
      willRefreshSelector: !0,
      willSyncService: !1
    }), c.length && this.collectForLocalWorker(c), o.length && this.collectForServiceWorker(o);
  }
}
function Lb() {
  this.__data__ = [], this.size = 0;
}
var yb = Lb;
function Rb(Z, d) {
  return Z === d || Z !== Z && d !== d;
}
var ti = Rb, Kb = ti;
function Yb(Z, d) {
  for (var l = Z.length; l--; )
    if (Kb(Z[l][0], d))
      return l;
  return -1;
}
var Md = Yb, Sb = Md, xb = Array.prototype, rb = xb.splice;
function Cb(Z) {
  var d = this.__data__, l = Sb(d, Z);
  if (l < 0)
    return !1;
  var s = d.length - 1;
  return l == s ? d.pop() : rb.call(d, l, 1), --this.size, !0;
}
var Jb = Cb, Tb = Md;
function Fb(Z) {
  var d = this.__data__, l = Tb(d, Z);
  return l < 0 ? void 0 : d[l][1];
}
var Nb = Fb, gb = Md;
function Hb(Z) {
  return gb(this.__data__, Z) > -1;
}
var zb = Hb, Mb = Md;
function kb(Z, d) {
  var l = this.__data__, s = Mb(l, Z);
  return s < 0 ? (++this.size, l.push([Z, d])) : l[s][1] = d, this;
}
var vb = kb, Ub = yb, Qb = Jb, Pb = Nb, fb = zb, wb = vb;
function Wd(Z) {
  var d = -1, l = Z == null ? 0 : Z.length;
  for (this.clear(); ++d < l; ) {
    var s = Z[d];
    this.set(s[0], s[1]);
  }
}
Wd.prototype.clear = Ub;
Wd.prototype.delete = Qb;
Wd.prototype.get = Pb;
Wd.prototype.has = fb;
Wd.prototype.set = wb;
var kd = Wd, Eb = kd;
function jb() {
  this.__data__ = new Eb(), this.size = 0;
}
var Bb = jb;
function Ob(Z) {
  var d = this.__data__, l = d.delete(Z);
  return this.size = d.size, l;
}
var Db = Ob;
function Ab(Z) {
  return this.__data__.get(Z);
}
var qb = Ab;
function $b(Z) {
  return this.__data__.has(Z);
}
var _b = $b, lc = xd, dc = bd, ic = "[object AsyncFunction]", sc = "[object Function]", tc = "[object GeneratorFunction]", bc = "[object Proxy]";
function cc(Z) {
  if (!dc(Z))
    return !1;
  var d = lc(Z);
  return d == sc || d == tc || d == ic || d == bc;
}
var hs = cc, Zc = Al, mc = Zc["__core-js_shared__"], nc = mc, Ed = nc, Ci = function() {
  var Z = /[^.]+$/.exec(Ed && Ed.keys && Ed.keys.IE_PROTO || "");
  return Z ? "Symbol(src)_1." + Z : "";
}();
function Xc(Z) {
  return !!Ci && Ci in Z;
}
var ec = Xc, ac = Function.prototype, oc = ac.toString;
function Wc(Z) {
  if (Z != null) {
    try {
      return oc.call(Z);
    } catch {
    }
    try {
      return Z + "";
    } catch {
    }
  }
  return "";
}
var Is = Wc, Gc = hs, uc = ec, Vc = bd, hc = Is, Ic = /[\\^$.*+?()[\]{}|]/g, pc = /^\[object .+?Constructor\]$/, Lc = Function.prototype, yc = Object.prototype, Rc = Lc.toString, Kc = yc.hasOwnProperty, Yc = RegExp(
  "^" + Rc.call(Kc).replace(Ic, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Sc(Z) {
  if (!Vc(Z) || uc(Z))
    return !1;
  var d = Gc(Z) ? Yc : pc;
  return d.test(hc(Z));
}
var xc = Sc;
function rc(Z, d) {
  return Z == null ? void 0 : Z[d];
}
var Cc = rc, Jc = xc, Tc = Cc;
function Fc(Z, d) {
  var l = Tc(Z, d);
  return Jc(l) ? l : void 0;
}
var Xd = Fc, Nc = Xd, gc = Al, Hc = Nc(gc, "Map"), bi = Hc, zc = Xd, Mc = zc(Object, "create"), vd = Mc, Ji = vd;
function kc() {
  this.__data__ = Ji ? Ji(null) : {}, this.size = 0;
}
var vc = kc;
function Uc(Z) {
  var d = this.has(Z) && delete this.__data__[Z];
  return this.size -= d ? 1 : 0, d;
}
var Qc = Uc, Pc = vd, fc = "__lodash_hash_undefined__", wc = Object.prototype, Ec = wc.hasOwnProperty;
function jc(Z) {
  var d = this.__data__;
  if (Pc) {
    var l = d[Z];
    return l === fc ? void 0 : l;
  }
  return Ec.call(d, Z) ? d[Z] : void 0;
}
var Bc = jc, Oc = vd, Dc = Object.prototype, Ac = Dc.hasOwnProperty;
function qc(Z) {
  var d = this.__data__;
  return Oc ? d[Z] !== void 0 : Ac.call(d, Z);
}
var $c = qc, _c = vd, lZ = "__lodash_hash_undefined__";
function dZ(Z, d) {
  var l = this.__data__;
  return this.size += this.has(Z) ? 0 : 1, l[Z] = _c && d === void 0 ? lZ : d, this;
}
var iZ = dZ, sZ = vc, tZ = Qc, bZ = Bc, cZ = $c, ZZ = iZ;
function Gd(Z) {
  var d = -1, l = Z == null ? 0 : Z.length;
  for (this.clear(); ++d < l; ) {
    var s = Z[d];
    this.set(s[0], s[1]);
  }
}
Gd.prototype.clear = sZ;
Gd.prototype.delete = tZ;
Gd.prototype.get = bZ;
Gd.prototype.has = cZ;
Gd.prototype.set = ZZ;
var mZ = Gd, Ti = mZ, nZ = kd, XZ = bi;
function eZ() {
  this.size = 0, this.__data__ = {
    hash: new Ti(),
    map: new (XZ || nZ)(),
    string: new Ti()
  };
}
var aZ = eZ;
function oZ(Z) {
  var d = typeof Z;
  return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? Z !== "__proto__" : Z === null;
}
var WZ = oZ, GZ = WZ;
function uZ(Z, d) {
  var l = Z.__data__;
  return GZ(d) ? l[typeof d == "string" ? "string" : "hash"] : l.map;
}
var Ud = uZ, VZ = Ud;
function hZ(Z) {
  var d = VZ(this, Z).delete(Z);
  return this.size -= d ? 1 : 0, d;
}
var IZ = hZ, pZ = Ud;
function LZ(Z) {
  return pZ(this, Z).get(Z);
}
var yZ = LZ, RZ = Ud;
function KZ(Z) {
  return RZ(this, Z).has(Z);
}
var YZ = KZ, SZ = Ud;
function xZ(Z, d) {
  var l = SZ(this, Z), s = l.size;
  return l.set(Z, d), this.size += l.size == s ? 0 : 1, this;
}
var rZ = xZ, CZ = aZ, JZ = IZ, TZ = yZ, FZ = YZ, NZ = rZ;
function ud(Z) {
  var d = -1, l = Z == null ? 0 : Z.length;
  for (this.clear(); ++d < l; ) {
    var s = Z[d];
    this.set(s[0], s[1]);
  }
}
ud.prototype.clear = CZ;
ud.prototype.delete = JZ;
ud.prototype.get = TZ;
ud.prototype.has = FZ;
ud.prototype.set = NZ;
var ps = ud, gZ = kd, HZ = bi, zZ = ps, MZ = 200;
function kZ(Z, d) {
  var l = this.__data__;
  if (l instanceof gZ) {
    var s = l.__data__;
    if (!HZ || s.length < MZ - 1)
      return s.push([Z, d]), this.size = ++l.size, this;
    l = this.__data__ = new zZ(s);
  }
  return l.set(Z, d), this.size = l.size, this;
}
var vZ = kZ, UZ = kd, QZ = Bb, PZ = Db, fZ = qb, wZ = _b, EZ = vZ;
function Vd(Z) {
  var d = this.__data__ = new UZ(Z);
  this.size = d.size;
}
Vd.prototype.clear = QZ;
Vd.prototype.delete = PZ;
Vd.prototype.get = fZ;
Vd.prototype.has = wZ;
Vd.prototype.set = EZ;
var Ls = Vd;
function jZ(Z, d) {
  for (var l = -1, s = Z == null ? 0 : Z.length; ++l < s && d(Z[l], l, Z) !== !1; )
    ;
  return Z;
}
var BZ = jZ, OZ = Xd, DZ = function() {
  try {
    var Z = OZ(Object, "defineProperty");
    return Z({}, "", {}), Z;
  } catch {
  }
}(), AZ = DZ, Fi = AZ;
function qZ(Z, d, l) {
  d == "__proto__" && Fi ? Fi(Z, d, {
    configurable: !0,
    enumerable: !0,
    value: l,
    writable: !0
  }) : Z[d] = l;
}
var ys = qZ, $Z = ys, _Z = ti, lm = Object.prototype, dm = lm.hasOwnProperty;
function im(Z, d, l) {
  var s = Z[d];
  (!(dm.call(Z, d) && _Z(s, l)) || l === void 0 && !(d in Z)) && $Z(Z, d, l);
}
var Rs = im, sm = Rs, tm = ys;
function bm(Z, d, l, s) {
  var c = !l;
  l || (l = {});
  for (var o = -1, u = d.length; ++o < u; ) {
    var e = d[o], n = s ? s(l[e], Z[e], e, l, Z) : void 0;
    n === void 0 && (n = Z[e]), c ? tm(l, e, n) : sm(l, e, n);
  }
  return l;
}
var Qd = bm;
function cm(Z, d) {
  for (var l = -1, s = Array(Z); ++l < Z; )
    s[l] = d(l);
  return s;
}
var Zm = cm, mm = xd, nm = nd, Xm = "[object Arguments]";
function em(Z) {
  return nm(Z) && mm(Z) == Xm;
}
var am = em, Ni = am, om = nd, Ks = Object.prototype, Wm = Ks.hasOwnProperty, Gm = Ks.propertyIsEnumerable, um = Ni(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ni : function(Z) {
  return om(Z) && Wm.call(Z, "callee") && !Gm.call(Z, "callee");
}, Vm = um, hm = Array.isArray, Pd = hm, Td = { exports: {} };
function Im() {
  return !1;
}
var pm = Im;
Td.exports;
(function(Z, d) {
  var l = Al, s = pm, c = d && !d.nodeType && d, o = c && !0 && Z && !Z.nodeType && Z, u = o && o.exports === c, e = u ? l.Buffer : void 0, n = e ? e.isBuffer : void 0, G = n || s;
  Z.exports = G;
})(Td, Td.exports);
var ci = Td.exports, Lm = 9007199254740991, ym = /^(?:0|[1-9]\d*)$/;
function Rm(Z, d) {
  var l = typeof Z;
  return d = d ?? Lm, !!d && (l == "number" || l != "symbol" && ym.test(Z)) && Z > -1 && Z % 1 == 0 && Z < d;
}
var Km = Rm, Ym = 9007199254740991;
function Sm(Z) {
  return typeof Z == "number" && Z > -1 && Z % 1 == 0 && Z <= Ym;
}
var Ys = Sm, xm = xd, rm = Ys, Cm = nd, Jm = "[object Arguments]", Tm = "[object Array]", Fm = "[object Boolean]", Nm = "[object Date]", gm = "[object Error]", Hm = "[object Function]", zm = "[object Map]", Mm = "[object Number]", km = "[object Object]", vm = "[object RegExp]", Um = "[object Set]", Qm = "[object String]", Pm = "[object WeakMap]", fm = "[object ArrayBuffer]", wm = "[object DataView]", Em = "[object Float32Array]", jm = "[object Float64Array]", Bm = "[object Int8Array]", Om = "[object Int16Array]", Dm = "[object Int32Array]", Am = "[object Uint8Array]", qm = "[object Uint8ClampedArray]", $m = "[object Uint16Array]", _m = "[object Uint32Array]", Hl = {};
Hl[Em] = Hl[jm] = Hl[Bm] = Hl[Om] = Hl[Dm] = Hl[Am] = Hl[qm] = Hl[$m] = Hl[_m] = !0;
Hl[Jm] = Hl[Tm] = Hl[fm] = Hl[Fm] = Hl[wm] = Hl[Nm] = Hl[gm] = Hl[Hm] = Hl[zm] = Hl[Mm] = Hl[km] = Hl[vm] = Hl[Um] = Hl[Qm] = Hl[Pm] = !1;
function l0(Z) {
  return Cm(Z) && rm(Z.length) && !!Hl[xm(Z)];
}
var d0 = l0;
function i0(Z) {
  return function(d) {
    return Z(d);
  };
}
var Zi = i0, Fd = { exports: {} };
Fd.exports;
(function(Z, d) {
  var l = us, s = d && !d.nodeType && d, c = s && !0 && Z && !Z.nodeType && Z, o = c && c.exports === s, u = o && l.process, e = function() {
    try {
      var n = c && c.require && c.require("util").types;
      return n || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  Z.exports = e;
})(Fd, Fd.exports);
var mi = Fd.exports, s0 = d0, t0 = Zi, gi = mi, Hi = gi && gi.isTypedArray, b0 = Hi ? t0(Hi) : s0, Ss = b0, c0 = Zm, Z0 = Vm, m0 = Pd, n0 = ci, X0 = Km, e0 = Ss, a0 = Object.prototype, o0 = a0.hasOwnProperty;
function W0(Z, d) {
  var l = m0(Z), s = !l && Z0(Z), c = !l && !s && n0(Z), o = !l && !s && !c && e0(Z), u = l || s || c || o, e = u ? c0(Z.length, String) : [], n = e.length;
  for (var G in Z)
    (d || o0.call(Z, G)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (G == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    c && (G == "offset" || G == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (G == "buffer" || G == "byteLength" || G == "byteOffset") || // Skip index properties.
    X0(G, n))) && e.push(G);
  return e;
}
var xs = W0, G0 = Object.prototype;
function u0(Z) {
  var d = Z && Z.constructor, l = typeof d == "function" && d.prototype || G0;
  return Z === l;
}
var ni = u0;
function V0(Z, d) {
  return function(l) {
    return Z(d(l));
  };
}
var rs = V0, h0 = rs, I0 = h0(Object.keys, Object), p0 = I0, L0 = ni, y0 = p0, R0 = Object.prototype, K0 = R0.hasOwnProperty;
function Y0(Z) {
  if (!L0(Z))
    return y0(Z);
  var d = [];
  for (var l in Object(Z))
    K0.call(Z, l) && l != "constructor" && d.push(l);
  return d;
}
var S0 = Y0, x0 = hs, r0 = Ys;
function C0(Z) {
  return Z != null && r0(Z.length) && !x0(Z);
}
var Cs = C0, J0 = xs, T0 = S0, F0 = Cs;
function N0(Z) {
  return F0(Z) ? J0(Z) : T0(Z);
}
var Xi = N0, g0 = Qd, H0 = Xi;
function z0(Z, d) {
  return Z && g0(d, H0(d), Z);
}
var M0 = z0;
function k0(Z) {
  var d = [];
  if (Z != null)
    for (var l in Object(Z))
      d.push(l);
  return d;
}
var v0 = k0, U0 = bd, Q0 = ni, P0 = v0, f0 = Object.prototype, w0 = f0.hasOwnProperty;
function E0(Z) {
  if (!U0(Z))
    return P0(Z);
  var d = Q0(Z), l = [];
  for (var s in Z)
    s == "constructor" && (d || !w0.call(Z, s)) || l.push(s);
  return l;
}
var j0 = E0, B0 = xs, O0 = j0, D0 = Cs;
function A0(Z) {
  return D0(Z) ? B0(Z, !0) : O0(Z);
}
var ei = A0, q0 = Qd, $0 = ei;
function _0(Z, d) {
  return Z && q0(d, $0(d), Z);
}
var ln = _0, Nd = { exports: {} };
Nd.exports;
(function(Z, d) {
  var l = Al, s = d && !d.nodeType && d, c = s && !0 && Z && !Z.nodeType && Z, o = c && c.exports === s, u = o ? l.Buffer : void 0, e = u ? u.allocUnsafe : void 0;
  function n(G, y) {
    if (y)
      return G.slice();
    var a = G.length, I = e ? e(a) : new G.constructor(a);
    return G.copy(I), I;
  }
  Z.exports = n;
})(Nd, Nd.exports);
var dn = Nd.exports;
function sn(Z, d) {
  var l = -1, s = Z.length;
  for (d || (d = Array(s)); ++l < s; )
    d[l] = Z[l];
  return d;
}
var tn = sn;
function bn(Z, d) {
  for (var l = -1, s = Z == null ? 0 : Z.length, c = 0, o = []; ++l < s; ) {
    var u = Z[l];
    d(u, l, Z) && (o[c++] = u);
  }
  return o;
}
var cn = bn;
function Zn() {
  return [];
}
var Js = Zn, mn = cn, nn = Js, Xn = Object.prototype, en = Xn.propertyIsEnumerable, zi = Object.getOwnPropertySymbols, an = zi ? function(Z) {
  return Z == null ? [] : (Z = Object(Z), mn(zi(Z), function(d) {
    return en.call(Z, d);
  }));
} : nn, ai = an, on = Qd, Wn = ai;
function Gn(Z, d) {
  return on(Z, Wn(Z), d);
}
var un = Gn;
function Vn(Z, d) {
  for (var l = -1, s = d.length, c = Z.length; ++l < s; )
    Z[c + l] = d[l];
  return Z;
}
var Ts = Vn, hn = rs, In = hn(Object.getPrototypeOf, Object), Fs = In, pn = Ts, Ln = Fs, yn = ai, Rn = Js, Kn = Object.getOwnPropertySymbols, Yn = Kn ? function(Z) {
  for (var d = []; Z; )
    pn(d, yn(Z)), Z = Ln(Z);
  return d;
} : Rn, Ns = Yn, Sn = Qd, xn = Ns;
function rn(Z, d) {
  return Sn(Z, xn(Z), d);
}
var Cn = rn, Jn = Ts, Tn = Pd;
function Fn(Z, d, l) {
  var s = d(Z);
  return Tn(Z) ? s : Jn(s, l(Z));
}
var gs = Fn, Nn = gs, gn = ai, Hn = Xi;
function zn(Z) {
  return Nn(Z, Hn, gn);
}
var Hs = zn, Mn = gs, kn = Ns, vn = ei;
function Un(Z) {
  return Mn(Z, vn, kn);
}
var Qn = Un, Pn = Xd, fn = Al, wn = Pn(fn, "DataView"), En = wn, jn = Xd, Bn = Al, On = jn(Bn, "Promise"), Dn = On, An = Xd, qn = Al, $n = An(qn, "Set"), _n = $n, lX = Xd, dX = Al, iX = lX(dX, "WeakMap"), sX = iX, Dd = En, Ad = bi, qd = Dn, $d = _n, _d = sX, zs = xd, hd = Is, Mi = "[object Map]", tX = "[object Object]", ki = "[object Promise]", vi = "[object Set]", Ui = "[object WeakMap]", Qi = "[object DataView]", bX = hd(Dd), cX = hd(Ad), ZX = hd(qd), mX = hd($d), nX = hd(_d), cd = zs;
(Dd && cd(new Dd(new ArrayBuffer(1))) != Qi || Ad && cd(new Ad()) != Mi || qd && cd(qd.resolve()) != ki || $d && cd(new $d()) != vi || _d && cd(new _d()) != Ui) && (cd = function(Z) {
  var d = zs(Z), l = d == tX ? Z.constructor : void 0, s = l ? hd(l) : "";
  if (s)
    switch (s) {
      case bX:
        return Qi;
      case cX:
        return Mi;
      case ZX:
        return ki;
      case mX:
        return vi;
      case nX:
        return Ui;
    }
  return d;
});
var fd = cd, XX = Object.prototype, eX = XX.hasOwnProperty;
function aX(Z) {
  var d = Z.length, l = new Z.constructor(d);
  return d && typeof Z[0] == "string" && eX.call(Z, "index") && (l.index = Z.index, l.input = Z.input), l;
}
var oX = aX, WX = Al, GX = WX.Uint8Array, Ms = GX, Pi = Ms;
function uX(Z) {
  var d = new Z.constructor(Z.byteLength);
  return new Pi(d).set(new Pi(Z)), d;
}
var oi = uX, VX = oi;
function hX(Z, d) {
  var l = d ? VX(Z.buffer) : Z.buffer;
  return new Z.constructor(l, Z.byteOffset, Z.byteLength);
}
var IX = hX, pX = /\w*$/;
function LX(Z) {
  var d = new Z.constructor(Z.source, pX.exec(Z));
  return d.lastIndex = Z.lastIndex, d;
}
var yX = LX, fi = zd, wi = fi ? fi.prototype : void 0, Ei = wi ? wi.valueOf : void 0;
function RX(Z) {
  return Ei ? Object(Ei.call(Z)) : {};
}
var KX = RX, YX = oi;
function SX(Z, d) {
  var l = d ? YX(Z.buffer) : Z.buffer;
  return new Z.constructor(l, Z.byteOffset, Z.length);
}
var xX = SX, rX = oi, CX = IX, JX = yX, TX = KX, FX = xX, NX = "[object Boolean]", gX = "[object Date]", HX = "[object Map]", zX = "[object Number]", MX = "[object RegExp]", kX = "[object Set]", vX = "[object String]", UX = "[object Symbol]", QX = "[object ArrayBuffer]", PX = "[object DataView]", fX = "[object Float32Array]", wX = "[object Float64Array]", EX = "[object Int8Array]", jX = "[object Int16Array]", BX = "[object Int32Array]", OX = "[object Uint8Array]", DX = "[object Uint8ClampedArray]", AX = "[object Uint16Array]", qX = "[object Uint32Array]";
function $X(Z, d, l) {
  var s = Z.constructor;
  switch (d) {
    case QX:
      return rX(Z);
    case NX:
    case gX:
      return new s(+Z);
    case PX:
      return CX(Z, l);
    case fX:
    case wX:
    case EX:
    case jX:
    case BX:
    case OX:
    case DX:
    case AX:
    case qX:
      return FX(Z, l);
    case HX:
      return new s();
    case zX:
    case vX:
      return new s(Z);
    case MX:
      return JX(Z);
    case kX:
      return new s();
    case UX:
      return TX(Z);
  }
}
var _X = $X, le = bd, ji = Object.create, de = /* @__PURE__ */ function() {
  function Z() {
  }
  return function(d) {
    if (!le(d))
      return {};
    if (ji)
      return ji(d);
    Z.prototype = d;
    var l = new Z();
    return Z.prototype = void 0, l;
  };
}(), ie = de, se = ie, te = Fs, be = ni;
function ce(Z) {
  return typeof Z.constructor == "function" && !be(Z) ? se(te(Z)) : {};
}
var Ze = ce, me = fd, ne = nd, Xe = "[object Map]";
function ee(Z) {
  return ne(Z) && me(Z) == Xe;
}
var ae = ee, oe = ae, We = Zi, Bi = mi, Oi = Bi && Bi.isMap, Ge = Oi ? We(Oi) : oe, ue = Ge, Ve = fd, he = nd, Ie = "[object Set]";
function pe(Z) {
  return he(Z) && Ve(Z) == Ie;
}
var Le = pe, ye = Le, Re = Zi, Di = mi, Ai = Di && Di.isSet, Ke = Ai ? Re(Ai) : ye, Ye = Ke, Se = Ls, xe = BZ, re = Rs, Ce = M0, Je = ln, Te = dn, Fe = tn, Ne = un, ge = Cn, He = Hs, ze = Qn, Me = fd, ke = oX, ve = _X, Ue = Ze, Qe = Pd, Pe = ci, fe = ue, we = bd, Ee = Ye, je = Xi, Be = ei, Oe = 1, De = 2, Ae = 4, ks = "[object Arguments]", qe = "[object Array]", $e = "[object Boolean]", _e = "[object Date]", la = "[object Error]", vs = "[object Function]", da = "[object GeneratorFunction]", ia = "[object Map]", sa = "[object Number]", Us = "[object Object]", ta = "[object RegExp]", ba = "[object Set]", ca = "[object String]", Za = "[object Symbol]", ma = "[object WeakMap]", na = "[object ArrayBuffer]", Xa = "[object DataView]", ea = "[object Float32Array]", aa = "[object Float64Array]", oa = "[object Int8Array]", Wa = "[object Int16Array]", Ga = "[object Int32Array]", ua = "[object Uint8Array]", Va = "[object Uint8ClampedArray]", ha = "[object Uint16Array]", Ia = "[object Uint32Array]", gl = {};
gl[ks] = gl[qe] = gl[na] = gl[Xa] = gl[$e] = gl[_e] = gl[ea] = gl[aa] = gl[oa] = gl[Wa] = gl[Ga] = gl[ia] = gl[sa] = gl[Us] = gl[ta] = gl[ba] = gl[ca] = gl[Za] = gl[ua] = gl[Va] = gl[ha] = gl[Ia] = !0;
gl[la] = gl[vs] = gl[ma] = !1;
function Jd(Z, d, l, s, c, o) {
  var u, e = d & Oe, n = d & De, G = d & Ae;
  if (l && (u = c ? l(Z, s, c, o) : l(Z)), u !== void 0)
    return u;
  if (!we(Z))
    return Z;
  var y = Qe(Z);
  if (y) {
    if (u = ke(Z), !e)
      return Fe(Z, u);
  } else {
    var a = Me(Z), I = a == vs || a == da;
    if (Pe(Z))
      return Te(Z, e);
    if (a == Us || a == ks || I && !c) {
      if (u = n || I ? {} : Ue(Z), !e)
        return n ? ge(Z, Je(u, Z)) : Ne(Z, Ce(u, Z));
    } else {
      if (!gl[a])
        return c ? Z : {};
      u = ve(Z, a, e);
    }
  }
  o || (o = new Se());
  var h = o.get(Z);
  if (h)
    return h;
  o.set(Z, u), Ee(Z) ? Z.forEach(function(X) {
    u.add(Jd(X, d, l, X, Z, o));
  }) : fe(Z) && Z.forEach(function(X, V) {
    u.set(V, Jd(X, d, l, V, Z, o));
  });
  var S = G ? n ? ze : He : n ? Be : je, p = y ? void 0 : S(Z);
  return xe(p || Z, function(X, V) {
    p && (V = X, X = Z[V]), re(u, V, Jd(X, d, l, V, Z, o));
  }), u;
}
var pa = Jd, La = pa, ya = 1, Ra = 4;
function Ka(Z) {
  return La(Z, ya | Ra);
}
var Ya = Ka;
const Ol = /* @__PURE__ */ si(Ya);
class Sa extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.CopyNode
    });
  }
  collect(d) {
    var y;
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l } = d, s = [...l], c = (y = this.serviceColloctor) == null ? void 0 : y.storage, o = [], u = [], e = Math.floor(Math.random() * 20 + 10);
    let n;
    const G = Date.now();
    for (; s.length; ) {
      const a = s.pop();
      if (!a)
        continue;
      const I = a.toString(), h = this.serviceColloctor.isLocalId(I), S = h ? this.serviceColloctor.transformKey(a) : I, p = Ol(c[S]);
      let X = I;
      if (!h && this.serviceColloctor.isOwn(X) && (X = this.serviceColloctor.getLocalId(X)), p && X === Il.selectorId) {
        p.selectIds && s.push(...p.selectIds);
        continue;
      }
      if (p) {
        const V = Date.now(), i = (h ? a : this.serviceColloctor.getLocalId(a.toString())) + "-" + V, b = p.updateNodeOpt || {}, t = b.pos || [0, 0];
        n || (n = [-t[0], -t[1]]), b.pos = [t[0] + n[0] + e, t[1] + n[1] + e], b.useAnimation = !1;
        const m = [b.pos[0] - t[0], b.pos[1] - t[1]];
        if (p.ops) {
          const K = as(p.ops).map((C, T) => {
            const R = T % 3;
            return R === 0 ? C + m[0] : R === 1 ? C + m[1] : C;
          }), x = os(K);
          p.ops = x, u.push({
            ...p,
            updateNodeOpt: b,
            type: hl.FullWork,
            workId: i,
            undoTickerId: G
          }), o.push({
            ...p,
            workId: i,
            msgType: hl.FullWork,
            dataType: Fl.Local,
            updateNodeOpt: b,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    rl.emitter.emit("undoTickerStart", G), o.length && this.collectForLocalWorker(o), u.length && this.collectForServiceWorker(u);
  }
}
class xa extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.SetColorNode
    });
  }
  collect(d) {
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l, color: s, opacity: c } = d, o = [...l], u = this.serviceColloctor.storage, e = [], n = [], G = [], y = Date.now();
    for (; o.length; ) {
      const a = o.pop();
      if (!a)
        continue;
      const I = a.toString(), h = this.serviceColloctor.isLocalId(I), S = h ? this.serviceColloctor.transformKey(a) : I, p = Ol(u[S]);
      let X = I;
      if (!h && this.serviceColloctor.isOwn(X) && (X = this.serviceColloctor.getLocalId(X)), p && X === Il.selectorId) {
        if (p.selectIds) {
          G.push(...p.selectIds);
          const V = p.updateNodeOpt || {};
          V.color = s, c && (V.opacity = c);
          const i = {
            workId: a,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: V,
            emitEventType: this.emitEventType,
            willRefreshSelector: !0,
            willSyncService: !0
          }, b = /* @__PURE__ */ new Map();
          G.forEach((t) => {
            var C, T, R;
            const m = (C = this.serviceColloctor) == null ? void 0 : C.isLocalId(t);
            let K = m && ((T = this.serviceColloctor) == null ? void 0 : T.transformKey(t)) || t;
            const x = u[K];
            !m && ((R = this.serviceColloctor) != null && R.isOwn(K)) && (K = this.serviceColloctor.getLocalId(K)), x != null && x.opt && b.set(K, {
              updateNodeOpt: x.updateNodeOpt,
              opt: x.opt
            });
          }), i.selectStore = b, i.willSerializeData = !0, i.undoTickerId = y, e.push(i);
        }
        continue;
      }
      if (p) {
        const V = p.opt, i = p.updateNodeOpt || {};
        if (V && (i.color = s, i.opacity = c, n.push({
          ...p,
          type: hl.UpdateNode,
          updateNodeOpt: i
        }), !G.includes(I))) {
          let b = I;
          !h && this.serviceColloctor.isOwn(b) && (b = this.serviceColloctor.getLocalId(b)), e.push({
            workId: b,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: i,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    rl.emitter.emit("undoTickerStart", y), e.length && this.collectForLocalWorker(e), n.length && this.collectForServiceWorker(n);
  }
}
class ra extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.ZIndexNode
    });
  }
  collect(d) {
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l, num: s } = d, c = [...l], o = this.serviceColloctor.storage, u = [], e = [], n = [];
    for (; c.length; ) {
      const G = c.pop();
      if (!G)
        continue;
      const y = G.toString(), a = this.serviceColloctor.isLocalId(y), I = a ? this.serviceColloctor.transformKey(G) : y, h = Ol(o[I]);
      let S = y;
      if (!a && this.serviceColloctor.isOwn(S) && (S = this.serviceColloctor.getLocalId(S)), h && S === Il.selectorId) {
        if (h.selectIds) {
          n.push(...h.selectIds);
          const p = h.updateNodeOpt || {};
          p.zIndexDistance = s;
          const X = {
            workId: G,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: p,
            emitEventType: this.emitEventType,
            willRefreshSelector: !0,
            willSyncService: !0
          }, V = /* @__PURE__ */ new Map();
          n.forEach((i) => {
            var K, x, C;
            const b = (K = this.serviceColloctor) == null ? void 0 : K.isLocalId(i);
            let t = b && ((x = this.serviceColloctor) == null ? void 0 : x.transformKey(i)) || i;
            const m = o[t];
            !b && ((C = this.serviceColloctor) != null && C.isOwn(t)) && (t = this.serviceColloctor.getLocalId(t)), m != null && m.opt && V.set(t, {
              updateNodeOpt: m.updateNodeOpt,
              opt: m.opt
            });
          }), X.selectStore = V, X.willSerializeData = !0, u.push(X);
        }
        continue;
      }
      if (h) {
        const p = h.opt, X = h.updateNodeOpt || {};
        let V = X.zIndex || (p == null ? void 0 : p.zIndex) || 0;
        if (p && (V = V + s, X.zIndex = V, e.push({
          ...h,
          type: hl.UpdateNode,
          updateNodeOpt: X
        }), !n.includes(y))) {
          let i = y;
          !a && this.serviceColloctor.isOwn(i) && (i = this.serviceColloctor.getLocalId(i)), u.push({
            workId: i,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: X,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    u.length && this.collectForLocalWorker(u), e.length && this.collectForServiceWorker(e);
  }
}
class Ca extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.TranslateNode
    }), Object.defineProperty(this, "undoTickerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "oldRect", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  collect(d) {
    var S, p, X, V, i;
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l, position: s, workState: c } = d, o = [...l], u = (S = this.serviceColloctor) == null ? void 0 : S.storage, e = [], n = [], G = [], y = (X = (p = this.mainEngine.displayer) == null ? void 0 : p.canvasBgRef) == null ? void 0 : X.getBoundingClientRect(), a = (i = (V = this.mainEngine.displayer) == null ? void 0 : V.floatBarCanvasRef.current) == null ? void 0 : i.getBoundingClientRect();
    let I = !1;
    const h = c === Ll.Start && Date.now() || void 0;
    for (h && (this.undoTickerId = h, rl.emitter.emit("undoTickerStart", h)), y && a && this.oldRect && (this.oldRect.x < y.x && a.x > this.oldRect.x || this.oldRect.y < y.y && a.y > this.oldRect.y || this.oldRect.x + this.oldRect.width > y.x + y.width && a.x < this.oldRect.x || this.oldRect.y + this.oldRect.height > y.y + y.height && a.y < this.oldRect.y) && (I = !0), a && (this.oldRect = a); o.length; ) {
      const b = o.pop();
      if (!b)
        continue;
      const t = b.toString(), m = this.serviceColloctor.isLocalId(t), K = m && this.serviceColloctor.transformKey(b) || t, x = Ol(u[K]);
      let C = t;
      if (!m && this.serviceColloctor.isOwn(C) && (C = this.serviceColloctor.getLocalId(C)), x && C === Il.selectorId) {
        if (x.selectIds && (G.push(...x.selectIds), c !== Ll.Start)) {
          const T = x.updateNodeOpt || {};
          T.pos = this.mainEngine.transformToScenePoint([s.x, s.y]), T.workState = c;
          const R = {
            workId: b,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: T,
            emitEventType: this.emitEventType,
            willRefreshSelector: I,
            willSyncService: !0
          };
          if (c === Ll.Done) {
            const J = /* @__PURE__ */ new Map();
            G.forEach((F) => {
              var Q, w, O;
              const r = (Q = this.serviceColloctor) == null ? void 0 : Q.isLocalId(F);
              let Y = r && ((w = this.serviceColloctor) == null ? void 0 : w.transformKey(F)) || F;
              const H = u[Y];
              !r && ((O = this.serviceColloctor) != null && O.isOwn(Y)) && (Y = this.serviceColloctor.getLocalId(Y)), H != null && H.ops && J.set(Y, {
                ops: H.ops,
                updateNodeOpt: H.updateNodeOpt
              });
            }), R.selectStore = J, R.willSerializeData = !0, R.undoTickerId = this.undoTickerId;
          }
          e.push(R);
        }
        continue;
      }
      if (x) {
        const T = x.opt, R = x.updateNodeOpt || {};
        if (T && (R.pos = this.mainEngine.transformToScenePoint([s.x, s.y]), n.push({
          ...x,
          type: hl.UpdateNode,
          updateNodeOpt: R
        }), !G.includes(t))) {
          let J = t;
          !m && this.serviceColloctor.isOwn(J) && (J = this.serviceColloctor.getLocalId(J)), e.push({
            workId: J,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: R,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    e.length && this.collectForLocalWorker(e), n.length && this.collectForServiceWorker(n);
  }
}
class Ja extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.DeleteNode
    });
  }
  collect(d) {
    var G;
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l } = d, s = this.serviceColloctor.storage, c = [...l], o = [], u = [], e = [], n = Date.now();
    for (; c.length; ) {
      const y = c.pop();
      if (!y)
        continue;
      const a = y.toString(), I = this.serviceColloctor.isLocalId(a), h = I ? this.serviceColloctor.transformKey(y) : a, S = s[h];
      let p = a;
      if (!I && this.serviceColloctor.isOwn(p) && (p = this.serviceColloctor.getLocalId(p)), S && p === Il.selectorId) {
        e.push(h), (G = yl.InternalMsgEmitter) == null || G.emit([pl.FloatBar, ul.ShowFloatBar], !1), S.selectIds && (e.push(...S.selectIds), o.push({
          msgType: hl.RemoveNode,
          workId: p,
          dataType: Fl.Local,
          emitEventType: ul.DeleteNode
        }));
        continue;
      }
      S && e.push(h), o.push({
        msgType: hl.RemoveNode,
        emitEventType: ul.DeleteNode,
        workId: y,
        dataType: Fl.Local,
        willSyncService: !1,
        willRefresh: !0
      });
    }
    rl.emitter.emit("undoTickerStart", n), o.length && this.collectForLocalWorker(o), e.length && (u.push({
      type: hl.RemoveNode,
      removeIds: e,
      undoTickerId: n
    }), this.collectForServiceWorker(u));
  }
}
class Ta extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.ScaleNode
    }), Object.defineProperty(this, "undoTickerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  collect(d) {
    var a;
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l, size: s, workState: c } = d, o = [...l], u = (a = this.serviceColloctor) == null ? void 0 : a.storage, e = [], n = [], G = [], y = c === Ll.Start && Date.now() || void 0;
    for (y && (this.undoTickerId = y, rl.emitter.emit("undoTickerStart", y)); o.length; ) {
      const I = o.pop();
      if (!I)
        continue;
      const h = I.toString(), S = this.serviceColloctor.isLocalId(h), p = S ? this.serviceColloctor.transformKey(I) : h, X = Ol(u[p]);
      let V = h;
      if (!S && this.serviceColloctor.isOwn(V) && (V = this.serviceColloctor.getLocalId(V)), X && V === Il.selectorId && X.selectIds) {
        G.push(...X.selectIds);
        const i = X.updateNodeOpt || {};
        i.size = s, i.workState = c;
        const b = {
          workId: I,
          msgType: hl.UpdateNode,
          dataType: Fl.Local,
          updateNodeOpt: i,
          emitEventType: this.emitEventType,
          willRefreshSelector: !0,
          willSyncService: !0
        };
        if (c === Ll.Done) {
          const t = /* @__PURE__ */ new Map();
          G.forEach((m) => {
            var T, R, J;
            const K = (T = this.serviceColloctor) == null ? void 0 : T.isLocalId(m);
            let x = K && ((R = this.serviceColloctor) == null ? void 0 : R.transformKey(m)) || m;
            const C = u[x];
            !K && ((J = this.serviceColloctor) != null && J.isOwn(x)) && (x = this.serviceColloctor.getLocalId(x)), C != null && C.ops && t.set(x, {
              ops: C.ops,
              updateNodeOpt: C.updateNodeOpt,
              opt: C.opt,
              toolsType: C.toolsType
            });
          }), b.selectStore = t, b.willSerializeData = !0, b.undoTickerId = this.undoTickerId;
        }
        e.push(b);
        continue;
      }
      if (X) {
        const i = X.opt, b = X.updateNodeOpt || {};
        if (i && (b.size = s, n.push({
          ...X,
          type: hl.UpdateNode,
          updateNodeOpt: b
        }), !G.includes(h))) {
          let t = h;
          !S && this.serviceColloctor.isOwn(t) && (t = this.serviceColloctor.getLocalId(t)), e.push({
            workId: t,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: b,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    e.length && this.collectForLocalWorker(e), n.length && this.collectForServiceWorker(n);
  }
}
class Fa extends ld {
  constructor() {
    super(...arguments), Object.defineProperty(this, "emitEventType", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ul.RotateNode
    }), Object.defineProperty(this, "undoTickerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    });
  }
  collect(d) {
    var a;
    if (!this.serviceColloctor || !this.mainEngine)
      return;
    const { workIds: l, angle: s, workState: c } = d, o = [...l], u = (a = this.serviceColloctor) == null ? void 0 : a.storage, e = [], n = [], G = [], y = c === Ll.Start && Date.now() || void 0;
    for (y && (this.undoTickerId = y, rl.emitter.emit("undoTickerStart", y)); o.length; ) {
      const I = o.pop();
      if (!I)
        continue;
      const h = I.toString(), S = this.serviceColloctor.isLocalId(h), p = S && this.serviceColloctor.transformKey(I) || h, X = Ol(u[p]);
      let V = h;
      if (!S && this.serviceColloctor.isOwn(V) && (V = this.serviceColloctor.getLocalId(V)), X && V === Il.selectorId) {
        if (X.selectIds && (G.push(...X.selectIds), c !== Ll.Start)) {
          const i = X.updateNodeOpt || {};
          i.angle = s, i.workState = c;
          const b = {
            workId: I,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: i,
            emitEventType: this.emitEventType,
            willRefreshSelector: !1,
            willSyncService: !0
          };
          if (c === Ll.Done) {
            const t = /* @__PURE__ */ new Map();
            G.forEach((m) => {
              var T, R, J;
              const K = (T = this.serviceColloctor) == null ? void 0 : T.isLocalId(m);
              let x = K && ((R = this.serviceColloctor) == null ? void 0 : R.transformKey(m)) || m;
              const C = u[x];
              !K && ((J = this.serviceColloctor) != null && J.isOwn(x)) && (x = this.serviceColloctor.getLocalId(x)), C != null && C.ops && t.set(x, {
                ops: C.ops,
                updateNodeOpt: C.updateNodeOpt,
                opt: C.opt,
                toolsType: C.toolsType
              });
            }), b.willRefreshSelector = !0, b.selectStore = t, b.willSerializeData = !0, b.undoTickerId = this.undoTickerId;
          }
          e.push(b);
        }
        continue;
      }
      if (X) {
        const i = X.opt, b = X.updateNodeOpt || {};
        if (i && (b.angle = s, n.push({
          ...X,
          type: hl.UpdateNode,
          updateNodeOpt: b
        }), !G.includes(h))) {
          let t = h;
          !S && this.serviceColloctor.isOwn(t) && (t = this.serviceColloctor.getLocalId(t)), e.push({
            workId: t,
            msgType: hl.UpdateNode,
            dataType: Fl.Local,
            updateNodeOpt: b,
            emitEventType: this.emitEventType,
            willSyncService: !1,
            willRefresh: !0
          });
        }
      }
    }
    e.length && this.collectForLocalWorker(e), n.length && this.collectForServiceWorker(n);
  }
}
class Ml {
  constructor(d) {
    Object.defineProperty(this, "builders", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), this.builders = new Map(d.map((l) => [l, this.build(l)]));
  }
  build(d) {
    switch (d) {
      case ul.TranslateNode:
        return new Ca();
      case ul.ZIndexNode:
        return new ra();
      case ul.ZIndexActive:
        return new pb();
      case ul.CopyNode:
        return new Sa();
      case ul.SetColorNode:
        return new xa();
      case ul.DeleteNode:
        return new Ja();
      case ul.ScaleNode:
        return new Ta();
      case ul.RotateNode:
        return new Fa();
    }
  }
  registerForMainEngine(d, l, s) {
    return this.builders.forEach((c) => {
      c && c.registerForMainEngine(d, l, s);
    }), this;
  }
  destroy() {
    this.builders.forEach((d) => {
      d && d.destroy();
    });
  }
  static emitMethod(d, l, s) {
    ld.dispatch(d, l, s);
  }
}
const Na = () => {
  const { InternalMsgEmitter: Z } = td(dd);
  return Vl.createElement(
    "div",
    { className: "button normal-button", onClick: (d) => {
      d.preventDefault(), d.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.DeleteNode, { workIds: ["selector"] });
    }, onTouchEnd: (d) => {
      d.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.DeleteNode, { workIds: ["selector"] });
    } },
    Vl.createElement("img", { alt: "icon", src: md("delete") })
  );
}, ga = () => {
  const { InternalMsgEmitter: Z } = td(dd);
  return Vl.createElement(
    "div",
    { className: "button normal-button", onClick: (d) => {
      d.preventDefault(), d.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.CopyNode, { workIds: ["selector"] });
    }, onTouchEnd: (d) => {
      d.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.CopyNode, { workIds: ["selector"] });
    } },
    Vl.createElement("img", { alt: "icon", src: md("duplicate") })
  );
}, qi = (Z) => {
  const { icon: d, onClickHandler: l, onTouchEndHandler: s } = Z;
  return Vl.createElement(
    "div",
    { className: "button normal-button", onClick: l, onTouchEnd: s },
    Vl.createElement("img", { src: md(d) })
  );
}, Ha = () => {
  const { InternalMsgEmitter: Z, floatBarData: d } = td(dd), [l, s] = sd(!1), c = Kd(() => l ? Vl.createElement(
    "div",
    { className: "image-layer-menu" },
    Vl.createElement(qi, { icon: "to-top", onClickHandler: (e) => {
      e.preventDefault(), e.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexNode, { workIds: ["selector"], num: 11 });
    }, onTouchEndHandler: (e) => {
      e.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexNode, { workIds: ["selector"], num: 11 });
    } }),
    Vl.createElement(qi, { icon: "to-bottom", onClickHandler: (e) => {
      e.preventDefault(), e.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexNode, { workIds: ["selector"], num: -11 });
    }, onTouchEndHandler: (e) => {
      e.stopPropagation(), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexNode, { workIds: ["selector"], num: -11 });
    } })
  ) : null, [Z, l]), o = (e) => {
    e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
    const n = !l;
    s(!l), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexActive, { workId: "selector", isActive: n });
  }, u = (e) => {
    e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
    const n = !l;
    s(!l), Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexActive, { workId: "selector", isActive: n });
  };
  return Hd(() => () => {
    l && Z && Ml.emitMethod(pl.MainEngine, ul.ZIndexActive, { workId: "selector", isActive: !1 });
  }, [Z, l, d == null ? void 0 : d.x, d == null ? void 0 : d.y]), Vl.createElement(
    "div",
    { className: `button normal-button ${l && "active"}`, onClick: o, onTouchEnd: u },
    c,
    Vl.createElement("img", { alt: "icon", src: md(l ? "layer-pressed" : "layer") })
  );
}, za = (Z) => {
  const { color: d, opacity: l, activeColor: s, onClickHandler: c, onTouchEndHandler: o } = Z;
  return Vl.createElement(
    "div",
    { className: `font-color-button ${d === s ? "active" : ""}`, onClick: c, onTouchEnd: o },
    Vl.createElement("div", { className: "circle", style: { backgroundColor: s && Yd(d, l) } })
  );
}, Ma = (Z) => {
  const { opacity: d, activeColor: l, setCurOpacity: s } = Z;
  if (!l)
    return null;
  const c = ql((e, n) => {
    e.preventDefault(), e.stopPropagation();
    const G = Math.min(Math.max(d * 100 + n.x, 0.01), 100) / 100;
    d !== G && s(G, Ll.Doing);
  }, 100, { leading: !1 }), o = (e) => {
    e.preventDefault(), e.stopPropagation(), s(d, Ll.Start);
  }, u = ql((e, n) => {
    e.preventDefault(), e.stopPropagation();
    const G = Math.min(Math.max(d * 100 + n.x, 0.01), 100) / 100;
    s(G, Ll.Done);
  }, 100, { leading: !1 });
  return Vl.createElement(
    "div",
    { className: "font-color-opacity" },
    Vl.createElement("div", { className: "range-color", style: {
      background: `linear-gradient(to right, ${Yd(l, 0)}, ${Yd(l, 1)})`
    } }),
    Vl.createElement(
      "div",
      { className: "range-opacity" },
      Vl.createElement(
        li,
        { bounds: "parent", axis: "x", onDrag: c, onStart: o, onStop: u },
        Vl.createElement("div", { className: "circle", style: {
          left: `calc(${d * 100}% - 13px)`,
          backgroundColor: Yd(l, d)
        } })
      )
    )
  );
}, ka = () => {
  const { InternalMsgEmitter: Z, floatBarData: d, floatBarColors: l } = td(dd), [s, c] = sd(!1), [o, u] = sd(d == null ? void 0 : d.nodeColor), [e, n] = sd((d == null ? void 0 : d.opacity) || 1);
  Hd(() => {
    d && (u(d.nodeColor), n(d.opacity || 1));
  }, [d]);
  const G = Kd(() => Vl.createElement(Ma, { opacity: (d == null ? void 0 : d.opacity) || 1, activeColor: o, setCurOpacity: (I, h) => {
    n(I), Z && Ml.emitMethod(pl.MainEngine, ul.SetColorNode, { workIds: ["selector"], color: o, opacity: I, workState: h });
  } }), [Z, o, d == null ? void 0 : d.opacity]), y = Kd(() => s ? Vl.createElement(
    "div",
    { className: "font-colors-menu", onTouchEnd: (I) => {
      I.stopPropagation(), I.nativeEvent.stopImmediatePropagation();
    }, onClick: (I) => {
      I.preventDefault(), I.stopPropagation(), I.nativeEvent.stopImmediatePropagation();
    } },
    l.map((I, h) => {
      const S = ii(...I);
      return Vl.createElement(za, { key: h, color: S, opacity: e, activeColor: o, onTouchEndHandler: (p) => {
        p.stopPropagation(), u(S), Z && Ml.emitMethod(pl.MainEngine, ul.SetColorNode, { workIds: ["selector"], color: S });
      }, onClickHandler: (p) => {
        p.preventDefault(), p.stopPropagation(), u(S), Z && Ml.emitMethod(pl.MainEngine, ul.SetColorNode, { workIds: ["selector"], color: S });
      } });
    }),
    G
  ) : null, [s, l, G, e, o, Z]), a = Kd(() => o && e ? Vl.createElement("div", { className: "color-bar", style: { backgroundColor: Yd(o, e) } }) : null, [o, e]);
  return Vl.createElement(
    "div",
    { className: `button normal-button font-colors-icon ${s && "active"}`, onTouchEnd: (I) => {
      I.stopPropagation(), I.nativeEvent.stopImmediatePropagation(), c(!s);
    }, onClick: (I) => {
      I.preventDefault(), I.stopPropagation(), I.nativeEvent.stopImmediatePropagation(), c(!s);
    } },
    Vl.createElement("img", { alt: "icon", src: md("font-colors") }),
    a,
    y
  );
}, va = Vl.memo(() => {
  const { position: Z } = td(dd);
  return Vl.createElement(
    "div",
    { className: "bezier-pencil-plugin-floatbtns", style: Z && Z.y < 80 ? {
      bottom: "-120px"
    } : void 0 },
    Vl.createElement(Na, null),
    Vl.createElement(Ha, null),
    Vl.createElement(ga, null),
    Vl.createElement(ka, null)
  );
}, () => !0), Ua = () => {
  const [Z, d] = sd({ width: 0, height: 0 }), { floatBarData: l, InternalMsgEmitter: s, setSize: c } = td(dd);
  Hd(() => {
    l && d({ width: l.w, height: l.h });
  }, [l]);
  const o = (n, G, y) => {
    n.preventDefault(), n.stopPropagation();
    const a = y.offsetWidth, I = y.offsetHeight, h = { width: a, height: I, workState: Ll.Start };
    c(h), d(h), s && Ml.emitMethod(pl.MainEngine, ul.ScaleNode, { workIds: ["selector"], size: h, workState: Ll.Start });
  }, u = ql((n, G, y) => {
    n.preventDefault(), n.stopPropagation();
    const a = y.offsetWidth, I = y.offsetHeight, h = { width: a, height: I, workState: Ll.Doing };
    (h.width !== Z.width || h.height !== Z.height) && (c(h), d(h), s && Ml.emitMethod(pl.MainEngine, ul.ScaleNode, { workIds: ["selector"], size: h, workState: Ll.Doing }));
  }, 100, { leading: !1 }), e = (n, G, y) => {
    n.preventDefault(), n.stopPropagation();
    const a = y.offsetWidth, I = y.offsetHeight, h = { width: a, height: I, workState: Ll.Done };
    c(h), d(h), s && Ml.emitMethod(pl.MainEngine, ul.ScaleNode, { workIds: ["selector"], size: h, workState: Ll.Done });
  };
  return Vl.createElement(
    dt,
    { className: "bezier-pencil-plugin-hightlight-box", boundsByDirection: !0, size: {
      width: Z.width,
      height: Z.height
    }, onResizeStart: o, onResize: u, onResizeStop: e },
    Vl.createElement("div", { className: "point LT nwse-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point LC ew-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point LB nesw-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point TC ns-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point RT nesw-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point RC ew-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point RB nwse-resize", style: { backgroundColor: l == null ? void 0 : l.color } }),
    Vl.createElement("div", { className: "point BC ns-resize", style: { backgroundColor: l == null ? void 0 : l.color } })
  );
}, Qa = Vl.forwardRef((Z, d) => {
  const { floatBarData: l, zIndex: s, InternalMsgEmitter: c, position: o, showFloatBarBtn: u, angle: e, isRotating: n, setShowFloatBarBtn: G, setPosition: y } = td(dd), { className: a } = Z, I = (X) => {
    X.preventDefault(), X.stopPropagation(), c && Ml.emitMethod(pl.MainEngine, ul.TranslateNode, { workIds: ["selector"], position: o, workState: Ll.Start });
  }, h = ql((X, V) => {
    X.preventDefault(), X.stopPropagation(), G(!0);
    const i = { x: V.x, y: V.y };
    y(i), c && Ml.emitMethod(pl.MainEngine, ul.TranslateNode, { workIds: ["selector"], position: i, workState: Ll.Done });
  }, 100, { leading: !1 }), S = ql((X, V) => {
    X.preventDefault(), X.stopPropagation(), G(!1);
    const i = { x: V.x, y: V.y };
    (V.x !== (o == null ? void 0 : o.x) || V.y !== (o == null ? void 0 : o.y)) && (y(i), c && Ml.emitMethod(pl.MainEngine, ul.TranslateNode, { workIds: ["selector"], position: i, workState: Ll.Doing }));
  }, 100, { leading: !1 }), p = Kd(() => u && !n ? Vl.createElement(va, null) : null, [u, n]);
  return Vl.createElement(
    li,
    { position: o, onStart: I, onDrag: S, onStop: h, handle: "canvas" },
    Vl.createElement(
      "div",
      { className: `${a}`, style: l ? {
        width: l.w,
        height: l.h,
        zIndex: s,
        pointerEvents: s < 2 ? "none" : "auto"
      } : void 0 },
      p,
      Vl.createElement(
        "div",
        { className: "bezier-pencil-plugin-floatCanvas-box", style: {
          width: "100%",
          height: "100%",
          transform: `rotate(${e}deg)`
        } },
        Vl.createElement("canvas", { ref: d, className: "bezier-pencil-plugin-floatCanvas" })
      ),
      !n && Vl.createElement(Ua, null)
    )
  );
}), Pa = (Z) => {
  const { className: d } = Z, { floatBarData: l, InternalMsgEmitter: s, angle: c, setAngle: o, setRotateState: u, position: e, setShowRotateBtn: n } = td(dd), [G, y] = sd(!1), [a, I] = sd(new zl()), [h, S] = sd(new zl());
  Hd(() => {
    if (l) {
      const i = Math.floor(l.w / 2), b = Math.floor(-l.h / 2);
      S(new zl(i, b)), I(new zl());
    }
  }, [l, e]);
  const p = (i, b) => {
    i.preventDefault(), i.stopPropagation(), y(!0);
    const t = Math.round(zl.GetAngleByPoints(a, h, new zl(b.x, b.y))) || 0;
    o(t), u(!0), s && Ml.emitMethod(pl.MainEngine, ul.RotateNode, { workIds: ["selector"], angle: t, workState: Ll.Start });
  }, X = ql((i, b) => {
    i.preventDefault(), i.stopPropagation(), y(!1);
    const t = Math.round(zl.GetAngleByPoints(a, h, new zl(b.x, b.y))) || 0;
    o(t), u(!1), n(!1), s && Ml.emitMethod(pl.MainEngine, ul.RotateNode, { workIds: ["selector"], angle: t, workState: Ll.Done });
  }, 100, { leading: !1 }), V = ql((i, b) => {
    i.preventDefault(), i.stopPropagation(), y(!0);
    const t = Math.round(zl.GetAngleByPoints(a, h, new zl(b.x, b.y))) || 0;
    o(t), u(!0), s && Ml.emitMethod(pl.MainEngine, ul.RotateNode, { workIds: ["selector"], angle: t, workState: Ll.Doing });
  }, 100, { leading: !1 });
  return Vl.createElement(
    li,
    { handle: ".bezier-pencil-plugin-rotate-mouse-pointer", onStart: p, onDrag: V, onStop: X },
    Vl.createElement(
      "div",
      { className: `${d}`, style: e && l ? {
        left: e.x - 30,
        top: e.y + l.h + 20
      } : void 0 },
      !G && Vl.createElement(
        "div",
        { className: "bezier-pencil-plugin-rotate-btn", style: { backgroundColor: l == null ? void 0 : l.color } },
        Vl.createElement("img", { alt: "icon", src: md("rotation-button") })
      ),
      Vl.createElement(
        "div",
        { className: `bezier-pencil-plugin-rotate-mouse-pointer ${G ? "active" : ""}` },
        Vl.createElement("img", { alt: "icon", src: md("rotation") }),
        Vl.createElement(
          "div",
          { className: "angle-icon" },
          c,
          "°"
        )
      )
    )
  );
}, dd = Vl.createContext({
  floatBarColors: [],
  InternalMsgEmitter: void 0,
  floatBarData: void 0,
  zIndex: -1,
  dpr: 1,
  position: void 0,
  angle: 0,
  isRotating: !1,
  showFloatBarBtn: !1,
  setPosition: () => {
  },
  setSize: () => {
  },
  setAngle: () => {
  },
  setRotateState: () => {
  },
  setShowRotateBtn: () => {
  },
  setShowFloatBarBtn: () => {
  }
});
class yl extends Vl.Component {
  constructor(d) {
    super(d), Object.defineProperty(this, "containerRef", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "canvasFloatRef", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "canvasBgRef", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "floatBarRef", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: null
    }), Object.defineProperty(this, "floatBarCanvasRef", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Vl.createRef()
    }), Object.defineProperty(this, "containerOffset", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: { x: 0, y: 0 }
    }), Object.defineProperty(this, "mousedown", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        l.button === 0 && yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Start, [l.pageX - this.containerOffset.x, l.pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "mousemove", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Doing, [l.pageX - this.containerOffset.x, l.pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "mouseup", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        l.button === 0 && yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Done, [l.pageX - this.containerOffset.x, l.pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "touchstart", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Start, [l.targetTouches[0].pageX - this.containerOffset.x, l.targetTouches[0].pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "touchmove", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Doing, [l.targetTouches[0].pageX - this.containerOffset.x, l.targetTouches[0].pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "touchend", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        yl.InternalMsgEmitter.emit([pl.MainEngine, ul.OriginalEvent], Ll.Done, [l.changedTouches[0].pageX - this.containerOffset.x, l.changedTouches[0].pageY - this.containerOffset.y]);
      }
    }), Object.defineProperty(this, "setPosition", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        this.setState({ position: l });
      }
    }), Object.defineProperty(this, "setAngle", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        this.setState({ angle: l });
      }
    }), Object.defineProperty(this, "setRotateState", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        this.setState({ isRotating: l });
      }
    }), Object.defineProperty(this, "setShowRotateBtn", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        this.setState({ showRotateBtn: l });
      }
    }), Object.defineProperty(this, "setShowFloatBarBtn", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (l) => {
        this.setState({ showFloatBarBtn: l });
      }
    }), this.state = {
      showRotateBtn: !1,
      floatBarData: void 0,
      showFloatBar: !1,
      zIndex: -1,
      dpr: 1,
      position: void 0,
      angle: 0,
      isRotating: !1,
      showFloatBarBtn: !1
    };
  }
  showFloatBar(d, l) {
    const s = d && l && { ...this.state.floatBarData, ...l } || void 0;
    this.setState({
      showFloatBar: d,
      floatBarData: s,
      position: l && { x: l.x, y: l.y },
      angle: 0,
      showRotateBtn: d,
      showFloatBarBtn: !0
    }), l && this.floatBarCanvasRef.current && (l.canvasHeight && l.canvasWidth ? (this.floatBarCanvasRef.current.width = l.canvasWidth * this.state.dpr, this.floatBarCanvasRef.current.height = l.canvasHeight * this.state.dpr, this.floatBarCanvasRef.current.style.width = l.canvasWidth + "px", this.floatBarCanvasRef.current.style.height = l.canvasHeight + "px") : (this.floatBarCanvasRef.current.width = l.w * this.state.dpr, this.floatBarCanvasRef.current.height = l.h * this.state.dpr, this.floatBarCanvasRef.current.style.width = "100%", this.floatBarCanvasRef.current.style.height = "100%"));
  }
  setSize(d) {
    this.state.floatBarData && this.setState({ floatBarData: { ...this.state.floatBarData, w: d.width, h: d.height } });
  }
  setFloatZIndex(d) {
    this.setState({ zIndex: d });
  }
  componentDidMount() {
    yl.instance = this, yl.InternalMsgEmitter.on(pl.DisplayContainer, this.init.bind(this)), yl.InternalMsgEmitter.on([pl.FloatBar, ul.ShowFloatBar], this.showFloatBar.bind(this)), yl.InternalMsgEmitter.on([pl.FloatBar, ul.ZIndexFloatBar], this.setFloatZIndex.bind(this)), yl.InternalMsgEmitter.emit(pl.DisplayState, od.mounted);
  }
  componentWillUnmount() {
    var l, s;
    yl.InternalMsgEmitter.emit(pl.DisplayState, od.unmounted);
    const d = (l = yl.instance) == null ? void 0 : l.containerRef;
    if (d) {
      const c = (s = d.parentNode) == null ? void 0 : s.children[0];
      this.removeDisplayerEvent(c);
    }
    yl.InternalMsgEmitter.removeAllListeners();
  }
  getRatioWithContext(d) {
    const l = d.webkitBackingStorePixelRatio || d.mozBackingStorePixelRatio || d.msBackingStorePixelRatio || d.oBackingStorePixelRatio || d.backingStorePixelRatio || 1;
    return Math.max(1, (window.devicePixelRatio || 1) / l);
  }
  init() {
    var c;
    const d = this.containerRef, l = this.canvasFloatRef, s = this.canvasBgRef;
    if (d && l && s) {
      const o = d.offsetWidth, u = d.offsetHeight;
      if (o && u) {
        l.style.width = `${o}px`, l.style.height = `${u}px`, s.style.width = `${o}px`, s.style.height = `${u}px`;
        const e = this.getRatioWithContext(s.getContext("2d"));
        l.width = o * e, l.height = u * e, s.width = o * e, s.height = u * e, yl.InternalMsgEmitter.emit([pl.MainEngine, ul.CreateScene], d.offsetWidth, d.offsetHeight, e);
        const n = (c = d.parentNode) == null ? void 0 : c.children[0];
        n && (this.containerOffset = this.getContainerOffset(d, this.containerOffset), this.bindDisplayerEvent(n)), this.setState({ dpr: e });
      }
    }
  }
  getContainerOffset(d, l) {
    var c;
    let s = {
      x: l.x + d.offsetLeft,
      y: l.y + d.offsetTop
    };
    return (c = d.offsetParent) != null && c.nodeName && d.offsetParent.nodeName !== "BODY" && (s = this.getContainerOffset(d.offsetParent, s)), s;
  }
  bindDisplayerEvent(d) {
    d.addEventListener("mousedown", this.mousedown, !1), window.addEventListener("mousemove", this.mousemove, !1), window.addEventListener("mouseup", this.mouseup, !1), window.addEventListener("mouseleave", this.mouseup, !1), d.addEventListener("touchstart", this.touchstart, !1), window.addEventListener("touchmove", this.touchmove, !1), window.addEventListener("touchend", this.touchend, !1);
  }
  removeDisplayerEvent(d) {
    d.removeEventListener("mousedown", this.mousedown), window.removeEventListener("mousemove", this.mousemove), window.removeEventListener("mouseup", this.mouseup), window.removeEventListener("mouseleave", this.mouseup), d.removeEventListener("touchstart", this.touchstart), window.removeEventListener("touchmove", this.touchmove), window.removeEventListener("touchend", this.touchend);
  }
  render() {
    var d, l;
    return Vl.createElement(
      Vl.Fragment,
      null,
      this.props.children,
      Vl.createElement(
        "div",
        { id: "bezier-pencil-plugin", className: yd.Container, ref: (s) => this.containerRef = s, onMouseDown: (s) => {
          s.preventDefault(), s.stopPropagation();
        }, onTouchStart: (s) => {
          s.stopPropagation();
        } },
        Vl.createElement(
          "div",
          { className: yd.CanvasBox },
          Vl.createElement("canvas", { id: "bezier-pencil-float-canvas", className: yd.FloatCanvas, ref: (s) => this.canvasFloatRef = s }),
          Vl.createElement("canvas", { id: "bezier-pencil-bg-canvas", ref: (s) => this.canvasBgRef = s })
        ),
        Vl.createElement(
          dd.Provider,
          { value: {
            InternalMsgEmitter: yl.InternalMsgEmitter,
            floatBarColors: yl.floatBarColors,
            floatBarData: this.state.floatBarData,
            zIndex: this.state.zIndex,
            dpr: this.state.dpr,
            position: this.state.position,
            angle: this.state.angle,
            isRotating: this.state.isRotating,
            showFloatBarBtn: this.state.showFloatBarBtn,
            setPosition: this.setPosition.bind(this),
            setSize: this.setSize.bind(this),
            setAngle: this.setAngle.bind(this),
            setRotateState: this.setRotateState.bind(this),
            setShowRotateBtn: this.setShowRotateBtn.bind(this),
            setShowFloatBarBtn: this.setShowFloatBarBtn.bind(this)
          } },
          this.state.showFloatBar && Vl.createElement(Qa, { className: yd.FloatBar, ref: this.floatBarCanvasRef }),
          this.state.showFloatBarBtn && this.state.showRotateBtn && ((l = (d = this.state.floatBarData) == null ? void 0 : d.selectIds) == null ? void 0 : l.length) === 1 && Vl.createElement(Pa, { className: yd.RotateBtn })
        )
      )
    );
  }
}
Object.defineProperty(yl, "InternalMsgEmitter", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: new qs()
});
Object.defineProperty(yl, "floatBarColors", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: []
});
const Sd = "++";
class fa {
  setNamespace(d) {
    this.namespace = d, this.serviceStorage = this.getNamespaceData(d), this.storage = Ol(this.serviceStorage);
  }
  getNamespaceData(d) {
    var l;
    return Xs((l = this.plugin) == null ? void 0 : l.attributes[d]) || {};
  }
  isLocalId(d) {
    return d.split(Sd).length === 1;
  }
  getLocalId(d) {
    return d.split(Sd)[1];
  }
}
var wa = "__lodash_hash_undefined__";
function Ea(Z) {
  return this.__data__.set(Z, wa), this;
}
var ja = Ea;
function Ba(Z) {
  return this.__data__.has(Z);
}
var Oa = Ba, Da = ps, Aa = ja, qa = Oa;
function gd(Z) {
  var d = -1, l = Z == null ? 0 : Z.length;
  for (this.__data__ = new Da(); ++d < l; )
    this.add(Z[d]);
}
gd.prototype.add = gd.prototype.push = Aa;
gd.prototype.has = qa;
var $a = gd;
function _a(Z, d) {
  for (var l = -1, s = Z == null ? 0 : Z.length; ++l < s; )
    if (d(Z[l], l, Z))
      return !0;
  return !1;
}
var lo = _a;
function io(Z, d) {
  return Z.has(d);
}
var so = io, to = $a, bo = lo, co = so, Zo = 1, mo = 2;
function no(Z, d, l, s, c, o) {
  var u = l & Zo, e = Z.length, n = d.length;
  if (e != n && !(u && n > e))
    return !1;
  var G = o.get(Z), y = o.get(d);
  if (G && y)
    return G == d && y == Z;
  var a = -1, I = !0, h = l & mo ? new to() : void 0;
  for (o.set(Z, d), o.set(d, Z); ++a < e; ) {
    var S = Z[a], p = d[a];
    if (s)
      var X = u ? s(p, S, a, d, Z, o) : s(S, p, a, Z, d, o);
    if (X !== void 0) {
      if (X)
        continue;
      I = !1;
      break;
    }
    if (h) {
      if (!bo(d, function(V, i) {
        if (!co(h, i) && (S === V || c(S, V, l, s, o)))
          return h.push(i);
      })) {
        I = !1;
        break;
      }
    } else if (!(S === p || c(S, p, l, s, o))) {
      I = !1;
      break;
    }
  }
  return o.delete(Z), o.delete(d), I;
}
var Qs = no;
function Xo(Z) {
  var d = -1, l = Array(Z.size);
  return Z.forEach(function(s, c) {
    l[++d] = [c, s];
  }), l;
}
var eo = Xo;
function ao(Z) {
  var d = -1, l = Array(Z.size);
  return Z.forEach(function(s) {
    l[++d] = s;
  }), l;
}
var oo = ao, $i = zd, _i = Ms, Wo = ti, Go = Qs, uo = eo, Vo = oo, ho = 1, Io = 2, po = "[object Boolean]", Lo = "[object Date]", yo = "[object Error]", Ro = "[object Map]", Ko = "[object Number]", Yo = "[object RegExp]", So = "[object Set]", xo = "[object String]", ro = "[object Symbol]", Co = "[object ArrayBuffer]", Jo = "[object DataView]", ls = $i ? $i.prototype : void 0, jd = ls ? ls.valueOf : void 0;
function To(Z, d, l, s, c, o, u) {
  switch (l) {
    case Jo:
      if (Z.byteLength != d.byteLength || Z.byteOffset != d.byteOffset)
        return !1;
      Z = Z.buffer, d = d.buffer;
    case Co:
      return !(Z.byteLength != d.byteLength || !o(new _i(Z), new _i(d)));
    case po:
    case Lo:
    case Ko:
      return Wo(+Z, +d);
    case yo:
      return Z.name == d.name && Z.message == d.message;
    case Yo:
    case xo:
      return Z == d + "";
    case Ro:
      var e = uo;
    case So:
      var n = s & ho;
      if (e || (e = Vo), Z.size != d.size && !n)
        return !1;
      var G = u.get(Z);
      if (G)
        return G == d;
      s |= Io, u.set(Z, d);
      var y = Go(e(Z), e(d), s, c, o, u);
      return u.delete(Z), y;
    case ro:
      if (jd)
        return jd.call(Z) == jd.call(d);
  }
  return !1;
}
var Fo = To, ds = Hs, No = 1, go = Object.prototype, Ho = go.hasOwnProperty;
function zo(Z, d, l, s, c, o) {
  var u = l & No, e = ds(Z), n = e.length, G = ds(d), y = G.length;
  if (n != y && !u)
    return !1;
  for (var a = n; a--; ) {
    var I = e[a];
    if (!(u ? I in d : Ho.call(d, I)))
      return !1;
  }
  var h = o.get(Z), S = o.get(d);
  if (h && S)
    return h == d && S == Z;
  var p = !0;
  o.set(Z, d), o.set(d, Z);
  for (var X = u; ++a < n; ) {
    I = e[a];
    var V = Z[I], i = d[I];
    if (s)
      var b = u ? s(i, V, I, d, Z, o) : s(V, i, I, Z, d, o);
    if (!(b === void 0 ? V === i || c(V, i, l, s, o) : b)) {
      p = !1;
      break;
    }
    X || (X = I == "constructor");
  }
  if (p && !X) {
    var t = Z.constructor, m = d.constructor;
    t != m && "constructor" in Z && "constructor" in d && !(typeof t == "function" && t instanceof t && typeof m == "function" && m instanceof m) && (p = !1);
  }
  return o.delete(Z), o.delete(d), p;
}
var Mo = zo, Bd = Ls, ko = Qs, vo = Fo, Uo = Mo, is = fd, ss = Pd, ts = ci, Qo = Ss, Po = 1, bs = "[object Arguments]", cs = "[object Array]", Cd = "[object Object]", fo = Object.prototype, Zs = fo.hasOwnProperty;
function wo(Z, d, l, s, c, o) {
  var u = ss(Z), e = ss(d), n = u ? cs : is(Z), G = e ? cs : is(d);
  n = n == bs ? Cd : n, G = G == bs ? Cd : G;
  var y = n == Cd, a = G == Cd, I = n == G;
  if (I && ts(Z)) {
    if (!ts(d))
      return !1;
    u = !0, y = !1;
  }
  if (I && !y)
    return o || (o = new Bd()), u || Qo(Z) ? ko(Z, d, l, s, c, o) : vo(Z, d, n, l, s, c, o);
  if (!(l & Po)) {
    var h = y && Zs.call(Z, "__wrapped__"), S = a && Zs.call(d, "__wrapped__");
    if (h || S) {
      var p = h ? Z.value() : Z, X = S ? d.value() : d;
      return o || (o = new Bd()), c(p, X, l, s, o);
    }
  }
  return I ? (o || (o = new Bd()), Uo(Z, d, l, s, c, o)) : !1;
}
var Eo = wo, jo = Eo, ms = nd;
function Ps(Z, d, l, s, c) {
  return Z === d ? !0 : Z == null || d == null || !ms(Z) && !ms(d) ? Z !== Z && d !== d : jo(Z, d, l, s, Ps, c);
}
var Bo = Ps, Oo = Bo;
function Do(Z, d) {
  return Oo(Z, d);
}
var Ao = Do;
const ns = /* @__PURE__ */ si(Ao);
class Zd extends fa {
  constructor(d, l) {
    super(), Object.defineProperty(this, "serviceStorage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "storage", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {}
    }), Object.defineProperty(this, "uid", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "plugin", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "namespace", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ""
    }), Object.defineProperty(this, "stateDisposer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "asyncClockState", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: !1
    }), Zd.syncInterval = (l || Zd.syncInterval) * 0.5, this.plugin = d, this.uid = d.displayer.uid;
    const s = d.displayer.state.sceneState.scenePath;
    this.setNamespace(s);
  }
  addStorageStateListener(d) {
    this.stateDisposer = Es(async () => {
      const l = this.getNamespaceData(this.namespace), s = this.diffFun(this.serviceStorage, l);
      this.serviceStorage = l;
      for (const [c, o] of Object.entries(s))
        (o == null ? void 0 : o.newValue) === void 0 ? delete this.storage[c] : this.storage[c] = Ol(o == null ? void 0 : o.newValue);
      d(s);
    });
  }
  removeStorageStateListener() {
    this.stateDisposer && this.stateDisposer();
  }
  diffFun(d, l) {
    const s = Ld(d), c = Ld(l), o = {};
    for (const u of s) {
      if (c.includes(u)) {
        if (ns(d[u], l[u]))
          continue;
        o[u] = {
          oldValue: d[u],
          newValue: l[u]
        };
        continue;
      }
      o[u] = {
        oldValue: d[u],
        newValue: void 0
      };
    }
    for (const u of c)
      s.includes(u) || (o[u] = {
        oldValue: void 0,
        newValue: l[u]
      });
    return o;
  }
  transformKey(d) {
    return this.uid + Sd + d;
  }
  isOwn(d) {
    return d.split(Sd)[0] === this.uid;
  }
  dispatch(d) {
    const { type: l, workId: s, ops: c, index: o, opt: u, toolsType: e, removeIds: n, updateNodeOpt: G, op: y, selectIds: a, isSync: I } = d;
    switch (l) {
      case hl.Clear:
        const h = {};
        Object.keys(this.storage).map((i) => {
          h[i] = void 0;
        }), this.setState(h, { isSync: I });
        break;
      case hl.CreateWork:
        if (s && e && u) {
          const i = this.isLocalId(s.toString()) ? this.transformKey(s) : s;
          this.updateValue(i.toString(), {
            type: hl.CreateWork,
            workId: s,
            toolsType: e,
            opt: u
          }, { isSync: I });
        }
        break;
      case hl.DrawWork:
        if (s && typeof o == "number" && (y != null && y.length)) {
          const i = this.isLocalId(s.toString()) ? this.transformKey(s) : s, b = this.storage[i], t = ((b == null ? void 0 : b.op) || []).slice(0, o).concat(y);
          b && t && this.updateValue(i.toString(), {
            ...b,
            type: hl.DrawWork,
            op: t,
            index: o
          }, { isSync: I });
        }
        break;
      case hl.FullWork:
        if (s) {
          const i = this.isLocalId(s.toString()) ? this.transformKey(s) : s, b = this.storage[i], t = G || (b == null ? void 0 : b.updateNodeOpt), m = e || (b == null ? void 0 : b.toolsType), K = u || (b == null ? void 0 : b.opt), x = c || (b == null ? void 0 : b.ops);
          m && K && x && this.updateValue(i.toString(), {
            type: hl.FullWork,
            updateNodeOpt: t,
            workId: i,
            toolsType: m,
            opt: K,
            ops: x
          }, { isSync: I });
        }
        break;
      case hl.RemoveNode:
        if (n != null && n.length) {
          const i = n.map((b) => this.isLocalId(b + "") ? this.transformKey(b) : b);
          Object.keys(this.storage).map((b) => {
            i != null && i.includes(b) && this.updateValue(b, void 0, { isSync: I });
          });
        }
        break;
      case hl.UpdateNode:
        if (s && (G || c || u)) {
          const i = this.isLocalId(s.toString()) ? this.transformKey(s) : s, b = this.storage[i];
          b && (b.updateNodeOpt = G, c && (b.ops = c), G && (b.updateNodeOpt = G), u && (b.opt = u), this.updateValue(i.toString(), b, { isSync: I }));
        }
        break;
      case hl.Select:
        let S;
        a != null && a.length && (S = a.map((i) => this.isLocalId(i + "") ? this.transformKey(i) : i));
        const p = this.transformKey(Il.selectorId), X = this.storage[p], V = u || (X == null ? void 0 : X.opt);
        S && this.checkOtherSelector(p, S, { isSync: I }), this.updateValue(p, S && {
          type: hl.Select,
          toolsType: Jl.Selector,
          opt: V,
          selectIds: S
        }, { isSync: I });
        break;
    }
  }
  checkOtherSelector(d, l, s) {
    for (const c of Object.keys(this.storage))
      if (c !== d && this.getLocalId(c) === "selector") {
        const o = this.storage[c];
        if (o && o.selectIds) {
          const u = o.selectIds.filter((e) => !l.includes(e));
          u.length > 0 && (o.selectIds = u), this.updateValue(c, u.length && o || void 0, s);
        }
      }
  }
  setState(d, l) {
    const s = Ld(d);
    for (let c = 0; c < s.length; c++) {
      const o = s[c], u = d[o];
      typeof u < "u" ? this.storage[o] = u : delete this.storage[o];
    }
    this.runSyncService(l);
  }
  updateValue(d, l, s) {
    l === void 0 ? delete this.storage[d] : this.storage[d] = l, this.runSyncService(s);
  }
  runSyncService(d) {
    this.asyncClockState || (this.asyncClockState = !0, setTimeout(() => {
      d != null && d.isSync ? (this.asyncClockState = !1, this.syncSerivice(d == null ? void 0 : d.isAfterUpdate)) : di(() => {
        this.asyncClockState = !1, this.syncSerivice(d == null ? void 0 : d.isAfterUpdate);
      }, Zd.syncInterval);
    }, d != null && d.isSync ? 0 : Zd.syncInterval));
  }
  syncSerivice(d = !1) {
    const l = Ld(this.serviceStorage), s = Ld(this.storage), c = /* @__PURE__ */ new Map();
    let o = 0;
    for (const u of l) {
      const e = this.serviceStorage[u], n = this.storage[u];
      if (s.includes(u)) {
        if (ns(e, n))
          continue;
        c.set(u, n), o++;
        continue;
      }
      c.set(u, void 0);
    }
    for (const u of s) {
      const e = this.storage[u];
      l.includes(u) || (c.set(u, e), o++);
    }
    if (o > 5)
      this.syncStorage(this.storage, d);
    else if (c.size > 0)
      for (const [u, e] of c.entries())
        this.syncUpdata(u, e, d);
  }
  syncUpdata(d, l, s = !1) {
    var o;
    Object.keys(this.serviceStorage).length ? (s || (l === void 0 ? delete this.serviceStorage[d] : this.serviceStorage[d] = l), (o = this.plugin) == null || o.updateAttributes([this.namespace, d], l)) : this.syncStorage(this.storage, s);
  }
  syncStorage(d, l = !1) {
    var c;
    l || (this.serviceStorage = Ol(d));
    const s = {};
    s[this.namespace] = d, (c = this.plugin) == null || c.setAttributes(s);
  }
  transformToSerializableData(d) {
    return os(d);
  }
  transformToNormalData(d) {
    return as(d);
  }
  keyTransformWorkId(d) {
    const l = d.split(Sd);
    return l.length === 2 ? l[1] : d;
  }
  destroy() {
    this.removeStorageStateListener(), this.plugin = void 0, this.serviceStorage = {}, this.storage = {}, this.namespace = "";
  }
}
Object.defineProperty(Zd, "syncInterval", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 500
});
class qo {
  constructor(d, l) {
    Object.defineProperty(this, "plugin", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pluginOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "collector", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "worker", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "room", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "player", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "commiter", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "onCameraChange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ql((s) => {
        var c;
        (c = this.worker) == null || c.setCameraOpt(Xs(s));
      }, 20, { leading: !1 })
    }), Object.defineProperty(this, "onSceneChange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ql((s) => {
        var c, o;
        (c = this.collector) == null || c.setNamespace(s.scenePath), (o = this.worker) == null || o.clearAll(!0).then(() => {
          var u;
          (u = this.worker) == null || u.initSyncData();
        });
      }, 100, { leading: !1 })
    }), Object.defineProperty(this, "onMemberChange", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: ql((s) => {
        var e, n, G, y, a, I, h, S, p, X, V;
        if (!this.room || !this.worker)
          return;
        const c = s.currentApplianceName, o = c === ed.pencil && s.useLaserPen ? Jl.LaserPen : c === ed.eraser || c === ed.pencilEraser ? Jl.Eraser : c === ed.pencil && s.useNewPencil ? Jl.Pencil : c === ed.selector ? Jl.Selector : Jl.Clicker, u = {
          color: ii(s.strokeColor[0], s.strokeColor[1], s.strokeColor[2]),
          opacity: (s == null ? void 0 : s.strokeOpacity) || 1
        };
        if (o === Jl.Pencil ? (u.thickness = s.strokeWidth, u.strokeType = (s == null ? void 0 : s.strokeType) || _l.Normal) : o === Jl.Eraser ? (u.thickness = Math.min(3, Math.max(1, Math.floor(s.pencilEraserSize || 1))) - 1, u.isLine = c === ed.eraser && !0) : o === Jl.LaserPen && (u.thickness = s.strokeWidth, u.duration = (s == null ? void 0 : s.duration) || 1, u.strokeType = (s == null ? void 0 : s.strokeType) || _l.Normal), (e = this.worker) == null || e.setCurrentToolsData({
          toolsType: o,
          toolsOpt: u
        }), o === Jl.Selector ? ((n = yl.InternalMsgEmitter) == null || n.on([pl.MainEngine, ul.TranslateNode], this.linstenerSelector.bind(this)), (G = yl.InternalMsgEmitter) == null || G.on([pl.MainEngine, ul.SetColorNode], this.linstenerSelector.bind(this)), (y = yl.InternalMsgEmitter) == null || y.on([pl.MainEngine, ul.ScaleNode], this.linstenerSelector.bind(this)), (a = yl.InternalMsgEmitter) == null || a.on([pl.MainEngine, ul.RotateNode], this.linstenerSelector.bind(this))) : ((I = yl.InternalMsgEmitter) == null || I.off([pl.MainEngine, ul.TranslateNode], this.linstenerSelector.bind(this)), (h = yl.InternalMsgEmitter) == null || h.off([pl.MainEngine, ul.SetColorNode], this.linstenerSelector.bind(this)), (S = yl.InternalMsgEmitter) == null || S.off([pl.MainEngine, ul.ScaleNode], this.linstenerSelector.bind(this)), (p = yl.InternalMsgEmitter) == null || p.off([pl.MainEngine, ul.RotateNode], this.linstenerSelector.bind(this))), o === Jl.Eraser || o === Jl.Pencil || o === Jl.LaserPen || o === Jl.Selector) {
          o === Jl.Pencil || o === Jl.LaserPen ? (this.room.disableDeviceInputs = !0, setTimeout(() => {
            var b, t;
            const i = (t = (b = yl.instance.containerRef) == null ? void 0 : b.parentNode) == null ? void 0 : t.children[0];
            i && (i.className = i.className + " cursor-pencil");
          }, 0)) : this.room.disableDeviceInputs = !1, (X = this.worker) == null || X.abled();
          return;
        }
        this.room.disableDeviceInputs = !1, (V = this.worker) == null || V.unabled();
      }, 100, { leading: !1 })
    }), this.plugin = d, this.room = $l(d.displayer) ? d.displayer : void 0, this.player = es(d.displayer) ? d.displayer : void 0, this.pluginOptions = l, window.onbeforeunload = () => {
      this.onUnMountDisplayer();
    };
  }
  init() {
    var d, l;
    yl.floatBarColors = ((l = (d = this.room) == null ? void 0 : d.floatBarOptions) == null ? void 0 : l.colors) || [], yl.InternalMsgEmitter.on(pl.DisplayState, this.displayStateListener.bind(this)), this.player && (this.onMountDisplayer(), yl.InternalMsgEmitter.emit(pl.DisplayContainer, !0));
  }
  async screenshotToCanvas(d, l, s, c, o) {
    var e;
    const u = await ((e = this.worker) == null ? void 0 : e.getSnapshot(l, s, c, o));
    u && (d.drawImage(u, 0, 0), u.close());
  }
  async scenePreview(d, l) {
    var c;
    const s = await ((c = this.worker) == null ? void 0 : c.getSnapshot(d));
    if (s && this.worker) {
      const o = document.createElement("canvas"), u = o.getContext("2d"), { width: e, height: n } = this.worker.getCameraOpt();
      o.width = e, o.height = n, u && (u.drawImage(s, 0, 0), l.src = o.toDataURL(), l.onload = () => {
        o.remove();
      }, l.onerror = () => {
        o.remove(), l.remove();
      }), s.close();
    }
  }
  cleanCurrentScene() {
    var d;
    (d = this.worker) == null || d.clearAll();
  }
  destroy() {
    this.onUnMountDisplayer();
  }
  displayStateListener(d) {
    d === od.mounted && (this.onMountDisplayer(), yl.InternalMsgEmitter.emit(pl.DisplayContainer, !0)), d === od.unmounted && this.onUnMountDisplayer();
  }
  linstenerSelector(d) {
    this.room && d.workState === Ll.Start ? this.room.disableDeviceInputs = !0 : this.room && d.workState === Ll.Done && (this.room.disableDeviceInputs = !1);
  }
  onWritableChange(d) {
    var l, s;
    d ? (s = this.worker) == null || s.abled() : (l = this.worker) == null || l.unabled();
  }
  onMountDisplayer() {
    var c, o, u, e, n;
    const d = (c = yl.instance) == null ? void 0 : c.containerRef, l = (o = yl.instance) == null ? void 0 : o.canvasFloatRef, s = (u = yl.instance) == null ? void 0 : u.canvasBgRef;
    l && s && d && (this.collector = new Zd(this.plugin, (n = (e = this.pluginOptions) == null ? void 0 : e.syncOpt) == null ? void 0 : n.interval), this.worker = new Bl(yl.instance, this.collector, this.pluginOptions), this.commiter = this.room && new rl(this.room, this.worker, this.collector), this.collector.addStorageStateListener((G) => {
      var y, a, I;
      if (G) {
        if ((y = this.collector) != null && y.storage) {
          const h = Object.keys(this.collector.storage);
          if (h.length === 0) {
            (a = this.worker) == null || a.clearAll(!0);
            return;
          }
          if (this.worker) {
            let S = 0;
            for (const p of h) {
              const X = this.collector.storage[p];
              X && (S = Math.max(S, ((I = X.opt) == null ? void 0 : I.zIndex) || 0));
            }
            this.worker.maxLayerIndex = S;
          }
        }
        if (this.worker) {
          const h = this.worker.getRelevantWork(G);
          Object.keys(G).forEach((S) => {
            var X;
            const p = G[S];
            p && ((X = this.worker) == null || X.onServiceDerive(S, p, h));
          }), rl.emitter.emit("excludeIds", Object.keys(G));
        }
      }
    }), setTimeout(() => {
      var G;
      (G = this.worker) == null || G.initSyncData();
    }, 200));
  }
  onUnMountDisplayer() {
    var d, l, s;
    (d = this.collector) == null || d.destroy(), (l = this.worker) == null || l.destroy(), (s = this.commiter) == null || s.destroy(), this.collector = void 0, this.worker = void 0, this.commiter = void 0;
  }
}
class Cl extends js {
  static async getInstance(d, l) {
    l != null && l.logger && (Cl.logger = l.logger), l != null && l.options && (Cl.options = l.options), !d.getInvisiblePlugin(Cl.kind) && $l(d) && await d.createInvisiblePlugin(Cl, {});
    const c = {
      displayer: d,
      screenshotToCanvasAsync: async function(o, u, e, n, G, y) {
        Cl.logger.info("[BezierPencilPlugin plugin] screenshotToCanvasAsync");
        const a = document.createElement("canvas"), I = a.getContext("2d");
        a.width = e * (y || 1), a.height = n * (y || 1), I && (this.displayer.screenshotToCanvas(I, u, e, n, G, y), o.drawImage(a, 0, 0, e * (y || 1), n * (y || 1), 0, 0, e, n), a.remove()), await Cl.currentManager.screenshotToCanvas(o, u, e, n, G);
      },
      scenePreviewAsync: async function(o, u, e, n, G) {
        Cl.logger.info("[BezierPencilPlugin plugin] scenePreview"), this.displayer.scenePreview(o, u, e, n, G);
        const y = document.createElement("img");
        y.style.position = "absolute", y.style.top = "0px", y.style.left = "0px", y.style.width = "100%", y.style.height = "100%", y.style.pointerEvents = "none", u.append(y), getComputedStyle(u).position || (u.style.position = "relative"), await Cl.currentManager.scenePreview(o, y);
      },
      callbacksOn: function(o, u) {
        Cl.logger.info(`[BezierPencilPlugin plugin] callbacks ${o}`), (o === "onCanUndoStepsUpdate" || o === "onCanRedoStepsUpdate") && $l(this.displayer) && this.displayer.isWritable ? rl.emitter.on(o, u) : this.displayer.callbacks.on(o, u);
      },
      callbacksOnce: function(o, u) {
        Cl.logger.info(`[BezierPencilPlugin plugin] callbacks ${o}`), (o === "onCanUndoStepsUpdate" || o === "onCanRedoStepsUpdate") && $l(this.displayer) && this.displayer.isWritable ? rl.emitter.on(o, u) : this.displayer.callbacks.on(o, u);
      },
      callbacksOff: function(o, u) {
        Cl.logger.info(`[BezierPencilPlugin plugin] callbacks ${o}`), (o === "onCanUndoStepsUpdate" || o === "onCanRedoStepsUpdate") && $l(this.displayer) && this.displayer.isWritable ? rl.emitter.off(o, u) : this.displayer.callbacks.off(o, u);
      },
      undo: function() {
        var o;
        return Cl.logger.info("[BezierPencilPlugin plugin] undo"), $l(this.displayer) && !this.displayer.disableSerialization && ((o = Cl.currentManager.commiter) == null ? void 0 : o.undo(this.displayer.undo)) || 0;
      },
      redo: function() {
        var o;
        return Cl.logger.info("[BezierPencilPlugin plugin] redo"), $l(this.displayer) && !this.displayer.disableSerialization && ((o = Cl.currentManager.commiter) == null ? void 0 : o.redo(this.displayer.redo)) || 0;
      },
      cleanCurrentScene: function(o) {
        Cl.logger.info("[BezierPencilPlugin plugin] cleanCurrentScene"), $l(d) && d.isWritable && (Cl.currentManager.cleanCurrentScene(), this.displayer.cleanCurrentScene(o));
      }
    };
    return {
      ...c,
      callbacks: {
        on: c.callbacksOn.bind(c),
        once: c.callbacksOnce.bind(c),
        off: c.callbacksOff.bind(c),
        forwardTo: c.displayer.callbacks.forwardTo
      }
    };
  }
  static onCreate(d) {
    const l = d.displayer;
    d == null || d.init(l);
  }
  // static onDestroy(plugin: BezierPencilPlugin) {}
  /**
   * 房间实例化时，将当前实例对displayer外部API的添加内部处理逻辑;
   * @param displayer
   */
  // static effectInstance(displayer:Room) {
  //     const _cleanCurrentScene = displayer.cleanCurrentScene;
  //     displayer.cleanCurrentScene = function(retainPpt){
  //         BezierPencilPlugin.logger.info(`[BezierPencilPlugin plugin] cleanCurrentScene`);
  //         BezierPencilPlugin.currentManager.cleanCurrentScene();
  //         _cleanCurrentScene.call(displayer,retainPpt);
  //     }
  // }
  constructor(d) {
    super(d), Object.defineProperty(this, "onPhaseChanged", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: (s) => {
        s === Bs.Disconnected && (this.displayer.callbacks.off(this.callbackName, this.roomStateChangeListener), this.displayer.callbacks.off("onEnableWriteNowChanged", this.updateRoomWritable), this.displayer.callbacks.off("onPhaseChanged", this.onPhaseChanged), Cl.invisiblePlugins.delete(this.displayer), Cl.currentManager.destroy());
      }
    }), Object.defineProperty(this, "updateRoomWritable", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: () => {
        Cl.currentManager.onWritableChange(this.displayer.isWritable);
      }
    }), Object.defineProperty(this, "roomStateChangeListener", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: async (s) => {
        s.cameraState && Cl.currentManager.onCameraChange(s.cameraState), s.memberState && Cl.currentManager.onMemberChange(s.memberState), s.sceneState && Cl.currentManager.onSceneChange(s.sceneState);
      }
    }), Object.defineProperty(this, "createCurrentManager", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: () => {
        Cl.currentManager && Cl.currentManager.destroy();
        const s = new qo(this, Cl.options);
        s.init(), Cl.currentManager = s, Cl.logger.info("[BezierPencilPlugin plugin] refresh currentSlideManager object");
      }
    });
    const l = Cl.invisiblePlugins.get(this.displayer);
    l && Os(l, this);
  }
  get isReplay() {
    return es(this.displayer);
  }
  get callbackName() {
    return this.isReplay ? "onPlayerStateChanged" : "onRoomStateChanged";
  }
  init(d) {
    const l = Ds(d.getInvisiblePlugin(Cl.kind));
    if (Cl.invisiblePlugins.set(d, l), this.createCurrentManager(), $l(d)) {
      const s = d.state;
      s != null && s.memberState && Cl.currentManager.onMemberChange(s.memberState);
    }
    this.displayer.callbacks.on(this.callbackName, this.roomStateChangeListener), this.displayer.callbacks.on("onEnableWriteNowChanged", this.updateRoomWritable), this.displayer.callbacks.on("onPhaseChanged", this.onPhaseChanged), this.displayer.callbacks.on("onCanUndoStepsUpdate", (s) => {
      var c;
      (c = Cl.currentManager.commiter) == null || c.addSdkUndoData(s);
    });
  }
}
Object.defineProperty(Cl, "kind", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: "bezier-pencil-plugin"
});
Object.defineProperty(Cl, "invisiblePlugins", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: /* @__PURE__ */ new WeakMap()
});
Object.defineProperty(Cl, "logger", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    info: console.log,
    warn: console.warn,
    error: console.error
  }
});
class Bl extends Xt {
  constructor(d, l, s) {
    var c, o;
    if (super(d, l), Object.defineProperty(this, "dpr", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 1
    }), Object.defineProperty(this, "threadEngine", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pluginOptions", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "layerOpt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "msgEmitter", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "offscreenCanvasOpt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "originalPoint", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: [0, 0]
    }), Object.defineProperty(this, "cameraOpt", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "localPointsBatchData", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "taskBatchData", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), Object.defineProperty(this, "currentToolsData", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "currentLocalWorkData", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "animationId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "subWorker", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "subWorkerDrawCount", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "wokerDrawCount", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "maxDrawCount", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "cacheDrawCount", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "reRenders", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: []
    }), Object.defineProperty(this, "bgCanvas", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "floatCanvas", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "maxLayerIndex", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "methodBuilder", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "localEventTimerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "undoTickerId", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "snapshotMap", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: /* @__PURE__ */ new Map()
    }), this.bgCanvas = d.canvasBgRef, this.floatCanvas = d.canvasFloatRef, this.bgCanvas && this.floatCanvas) {
      this.pluginOptions = s, Bl.maxLastSyncTime = (((c = s == null ? void 0 : s.syncOpt) == null ? void 0 : c.interval) || Bl.maxLastSyncTime) * 0.5, this.msgEmitter = new et();
      const u = {
        ...Bl.defaultScreenCanvasOpt,
        ...(o = this.pluginOptions) == null ? void 0 : o.canvasOpt,
        width: this.bgCanvas.offsetWidth,
        height: this.bgCanvas.offsetHeight
      };
      this.offscreenCanvasOpt = u, this.layerOpt = Bl.defauleLayerOpt, this.setLayerOpt(this.layerOpt), this.setCurrentLocalWorkData({
        workId: void 0,
        workState: Ll.Pending
      }), this.internalMsgEmitterListener(), this.on();
    }
  }
  internalMsgEmitterListener() {
    var d, l, s;
    this.collector && (this.methodBuilder = new Ml([
      ul.CopyNode,
      ul.SetColorNode,
      ul.DeleteNode,
      ul.RotateNode,
      ul.ScaleNode,
      ul.TranslateNode,
      ul.ZIndexActive,
      ul.ZIndexNode,
      ul.RotateNode
    ]).registerForMainEngine(pl.MainEngine, this, this.collector)), (d = yl.InternalMsgEmitter) == null || d.on([pl.MainEngine, ul.CreateScene], this.createSceneLintener.bind(this)), (l = yl.InternalMsgEmitter) == null || l.on([pl.MainEngine, ul.OriginalEvent], this.originalEventLintener.bind(this)), (s = yl.InternalMsgEmitter) == null || s.on([pl.FloatBar, ul.ShowFloatBar], this.showFloatBar.bind(this));
  }
  showFloatBar(d) {
    d ? window.addEventListener("beforeunload", this.removeSelectorFromStore.bind(this)) : window.removeEventListener("beforeunload", this.removeSelectorFromStore.bind(this));
  }
  removeSelectorFromStore() {
    this.collector.dispatch({
      type: hl.Select,
      selectIds: void 0
    });
  }
  internalMsgEmitterRemoveListener() {
    var d, l, s;
    (d = this.methodBuilder) == null || d.destroy(), (l = yl.InternalMsgEmitter) == null || l.off([pl.MainEngine, ul.CreateScene], this.createSceneLintener.bind(this)), (s = yl.InternalMsgEmitter) == null || s.off([pl.MainEngine, ul.OriginalEvent], this.originalEventLintener.bind(this));
  }
  createSceneLintener(d, l, s) {
    this.offscreenCanvasOpt = {
      ...this.offscreenCanvasOpt,
      width: d,
      height: l
    }, this.dpr = s, this.originalPoint = [d / 2, l / 2], this.cameraOpt = {
      centerX: 0,
      centerY: 0,
      scale: 1,
      width: d,
      height: l
    }, this.createThreadEngine(), this.createOptimizationWorker();
  }
  originalEventLintener(d, l) {
    switch (d) {
      case Ll.Start:
        this.onLocalEventStart(l);
        break;
      case Ll.Doing:
        this.onLocalEventDoing(l);
        break;
      case Ll.Done:
        this.onLocalEventEnd(l);
        break;
    }
  }
  destroySubWorker() {
    this.subWorker && (this.subWorker.terminate(), this.subWorker = void 0);
  }
  createThreadEngine() {
    this.taskBatchData.set("Init", {
      msgType: hl.Init,
      dataType: Fl.Local,
      offscreenCanvasOpt: this.offscreenCanvasOpt,
      layerOpt: this.layerOpt,
      dpr: this.dpr,
      isRunSubWork: !0
    }), this.runAnimation();
  }
  render(d) {
    var l, s, c, o, u, e, n, G;
    for (const y of d) {
      const { rect: a, imageBitmap: I, isClear: h, isUnClose: S, drawCanvas: p, clearCanvas: X, offset: V } = y;
      if (a) {
        const i = a.w * this.dpr, b = a.h * this.dpr, t = a.x * this.dpr, m = a.y * this.dpr;
        if (h)
          if (X === ad.Selector)
            (s = (l = this.displayer.floatBarCanvasRef.current) == null ? void 0 : l.getContext("2d")) == null || s.clearRect(0, 0, i, b);
          else {
            const K = X === ad.Float ? (c = this.floatCanvas) == null ? void 0 : c.getContext("2d") : (o = this.bgCanvas) == null ? void 0 : o.getContext("2d");
            K == null || K.clearRect(t, m, i, b);
          }
        if (p && I)
          if (p === ad.Selector) {
            const K = ((V == null ? void 0 : V.x) || 0) * this.dpr, x = ((V == null ? void 0 : V.y) || 0) * this.dpr;
            (e = (u = this.displayer.floatBarCanvasRef.current) == null ? void 0 : u.getContext("2d")) == null || e.drawImage(I, 0, 0, i, b, K, x, i, b);
          } else {
            const K = p === ad.Float ? (n = this.floatCanvas) == null ? void 0 : n.getContext("2d") : (G = this.bgCanvas) == null ? void 0 : G.getContext("2d");
            K == null || K.drawImage(I, 0, 0, i, b, t, m, i, b);
          }
        if (S)
          return;
        I == null || I.close();
      }
    }
  }
  runAnimation() {
    this.animationId || (this.animationId = requestAnimationFrame(this.consume.bind(this)));
  }
  setLayerOpt(d) {
    this.layerOpt = d;
  }
  updateCanvas(d) {
    const { width: l, height: s } = d;
    this.bgCanvas && this.floatCanvas && (this.bgCanvas.width = l * this.dpr, this.bgCanvas.height = s * this.dpr, this.floatCanvas.width = l * this.dpr, this.floatCanvas.height = s * this.dpr), this.originalPoint = [l * 0.5, s * 0.5], this.offscreenCanvasOpt.width = l, this.offscreenCanvasOpt.height = s;
  }
  pushPoint(d) {
    this.localPointsBatchData.push(d[0], d[1]);
  }
  transformToScenePoint(d) {
    const l = d, { scale: s, centerX: c, centerY: o } = this.cameraOpt;
    return this.originalPoint && (l[0] = (d[0] - this.originalPoint[0]) / s + c, l[1] = (d[1] - this.originalPoint[1]) / s + o), l;
  }
  getCameraOpt() {
    return this.cameraOpt;
  }
  getDpr() {
    return this.dpr;
  }
  initSyncData(d) {
    var s, c, o;
    const l = (s = this.collector) == null ? void 0 : s.storage;
    if (l) {
      for (const u of Object.keys(l).filter((e) => this.collector.getLocalId(e) !== "selector")) {
        d && d(u, l[u]);
        const e = (c = l[u]) == null ? void 0 : c.type;
        if (e && u) {
          const n = Ol(l[u]);
          n.workId = u, n.msgType = e, n.dataType = Fl.Service, n.useAnimation = !1, this.taskBatchData.set(`${n.dataType},${n.msgType},${n.workId}`, n), (o = n.opt) != null && o.zIndex && (this.maxLayerIndex = Math.max(this.maxLayerIndex, n.opt.zIndex));
        }
      }
      this.runAnimation();
    }
  }
  getRelevantWork(d) {
    let l;
    for (const [s, c] of Object.entries(d))
      if (c) {
        const { newValue: o, oldValue: u } = c;
        if (!o && u && Object.keys(d).some((n) => n !== s && n.indexOf(`${s}_s_`) > -1 ? (l = s, !0) : !1))
          break;
      }
    return l;
  }
  onServiceDerive(d, l, s) {
    const { newValue: c, oldValue: o } = l, u = Ol(c) || {}, e = d;
    let n = u.type;
    if (!(!c && o && (n = hl.RemoveNode, o.toolsType === Jl.LaserPen))) {
      if (n && e) {
        const G = u;
        G.workId = this.collector.isOwn(e) ? this.collector.getLocalId(e) : e, G.msgType = n, G.dataType = Fl.Service, G.selectIds && (G.selectIds = G.selectIds.map((y) => this.collector.isOwn(y) ? this.collector.getLocalId(y) : y)), s === d ? setTimeout(() => {
          this.taskBatchData.set(`${G.dataType},${G.msgType},${G.workId}`, G), this.runAnimation();
        }, 16) : this.taskBatchData.set(`${G.dataType},${G.msgType},${G.workId}`, G);
      }
      this.runAnimation();
    }
  }
  onLocalEventEnd(d) {
    var s;
    const l = this.currentLocalWorkData.workState;
    if (!(l === Ll.Freeze || l === Ll.Unwritable) && (l === Ll.Start || l === Ll.Doing)) {
      const c = this.transformToScenePoint(d);
      this.pushPoint(c), this.localEventTimerId = setTimeout(() => {
        this.localEventTimerId = void 0, this.setCurrentLocalWorkData({ workId: this.currentLocalWorkData.workId, workState: Ll.Done }), this.runAnimation();
      }, 0), this.currentToolsData.toolsType === Jl.Selector && ((s = yl.InternalMsgEmitter) == null || s.emit([pl.FloatBar, ul.ZIndexFloatBar], 2));
    }
  }
  onLocalEventDoing(d) {
    let l = this.currentLocalWorkData.workState;
    if (!(l === Ll.Freeze || l === Ll.Unwritable) && (l === Ll.Start && (l = Ll.Doing, this.setCurrentLocalWorkData({ workId: this.currentLocalWorkData.workId, workState: l })), l === Ll.Doing || this.localEventTimerId)) {
      const s = this.transformToScenePoint(d);
      this.pushPoint(s), this.localEventTimerId || this.runAnimation();
    }
  }
  onLocalEventStart(d) {
    var u, e;
    const { workState: l } = this.currentLocalWorkData;
    if (l === Ll.Freeze || l === Ll.Unwritable)
      return;
    const s = this.currentToolsData.toolsType === Jl.Selector ? "selector" : Date.now(), c = Ol(this.currentToolsData.toolsOpt);
    this.currentToolsData.toolsType === Jl.Pencil && (this.maxLayerIndex = this.maxLayerIndex + 10, c.zIndex = this.maxLayerIndex), this.setCurrentLocalWorkData({
      workId: s,
      workState: Ll.Start
    }, hl.CreateWork);
    const o = this.transformToScenePoint(d);
    this.pushPoint(o), this.maxDrawCount = 0, this.wokerDrawCount = 0, this.reRenders.length = 0, this.consume(), (this.currentToolsData.toolsType === Jl.Pencil || this.currentToolsData.toolsType === Jl.Eraser || this.currentToolsData.toolsType === Jl.Selector) && (this.currentToolsData.toolsType === Jl.Selector ? this.undoTickerId = Date.now() : this.undoTickerId = s, rl.emitter.emit("undoTickerStart", this.undoTickerId)), this.currentToolsData.toolsType === Jl.Pencil || this.currentToolsData.toolsType === Jl.LaserPen ? (u = this.collector) == null || u.dispatch({
      type: hl.CreateWork,
      workId: s,
      toolsType: this.currentToolsData.toolsType,
      opt: this.currentToolsData.toolsOpt
    }) : this.currentToolsData.toolsType === Jl.Selector && ((e = yl.InternalMsgEmitter) == null || e.emit([pl.FloatBar, ul.ZIndexFloatBar], -1));
  }
  consume() {
    this.animationId = void 0;
    const d = this.currentLocalWorkData.workState;
    let l = !1;
    if (!this.localEventTimerId) {
      if (this.localPointsBatchData.length) {
        const s = this.currentToolsData.toolsType === Jl.Pencil || this.currentToolsData.toolsType === Jl.LaserPen;
        this.wokerDrawCount !== 1 / 0 && this.wokerDrawCount <= this.subWorkerDrawCount && this.cacheDrawCount < this.maxDrawCount && (l = !0), this.maxDrawCount || (l = !0), l && (this.cacheDrawCount = this.maxDrawCount, this.taskBatchData.set(this.currentLocalWorkData.workId, {
          op: this.localPointsBatchData.map((c) => c),
          workState: d,
          workId: this.currentLocalWorkData.workId,
          dataType: Fl.Local,
          msgType: hl.DrawWork,
          isRunSubWork: s,
          undoTickerId: d === Ll.Done && this.undoTickerId || void 0
        }), this.localPointsBatchData.length = 0);
      }
      this.taskBatchData.size && (this.post(this.taskBatchData), this.taskBatchData.clear(), this.undoTickerId && d === Ll.Done && (this.undoTickerId = void 0));
    }
    (this.taskBatchData.size || this.localPointsBatchData.length) && (this.animationId = requestAnimationFrame(this.consume.bind(this)));
  }
  post(d) {
    var s;
    this.msgEmitter.postMessage(d);
    const l = /* @__PURE__ */ new Map();
    for (const [c, o] of d.entries())
      (c === "Init" || c === "ClearAll" || c === "UpdateCamera" || o.isRunSubWork) && l.set(c, o);
    l.size && ((s = this.subWorker) == null || s.postMessage(l));
  }
  on() {
    this.msgEmitter.onmessage = (d) => {
      if (d.data) {
        const { render: l, sp: s, drawCount: c } = d.data;
        if (s != null && s.length && this.collectorSyncData(s), !c && l) {
          this.render(l);
          return;
        }
        c && (this.wokerDrawCount = c, this.wokerDrawCount < 1 / 0 ? this.maxDrawCount = Math.max(this.maxDrawCount, this.wokerDrawCount) : this.maxDrawCount = 0, l != null && l.length && (this.render(l), this.wokerDrawCount < this.subWorkerDrawCount && (this.reRenders.forEach((o) => {
          o.isUnClose = !1;
        }), this.render(this.reRenders), this.reRenders.length = 0)));
      }
    };
  }
  createOptimizationWorker() {
    this.subWorker = new at(), this.subWorker.onmessage = (d) => {
      if (d.data) {
        const { render: l, drawCount: s, sp: c } = d.data;
        if (c != null && c.length && this.collectorSyncData(c), !s && (l != null && l.length)) {
          this.render(l);
          return;
        }
        s && (this.subWorkerDrawCount = s, this.wokerDrawCount < 1 / 0 && (this.maxDrawCount = Math.max(this.maxDrawCount, this.subWorkerDrawCount)), l != null && l.length && (this.subWorkerDrawCount > this.wokerDrawCount && (l.forEach((o) => o.isUnClose = !0), this.reRenders.push(...l)), this.wokerDrawCount < 1 / 0 && this.render(l)));
      }
    };
  }
  collectorSyncData(d) {
    var s, c;
    let l = !1;
    for (const o of d) {
      const { type: u, selectIds: e, opt: n, padding: G, selectRect: y, nodeColor: a, nodeOpactiy: I, willSyncService: h, isSync: S, undoTickerId: p, imageBitmap: X, scenePath: V, canvasHeight: i, canvasWidth: b } = o;
      switch (u) {
        case hl.Select:
          const t = e != null && e.length ? { ...y, selectIds: e, canvasHeight: i, canvasWidth: b } : void 0;
          t && (n != null && n.color) && (t.color = n.color), t && G && (t.padding = G), t && a && (t.nodeColor = a), t && (n != null && n.opacity) && (t.opacity = n.opacity), t && I && (t.opacity = I), (s = yl.InternalMsgEmitter) == null || s.emit([pl.FloatBar, ul.ShowFloatBar], !!t, t), h && ((c = this.collector) == null || c.dispatch({ type: u, selectIds: e, opt: n, isSync: S }), p && rl.emitter.emit("undoTickerEnd", p));
          break;
        case hl.Snapshot:
          if (X && V) {
            const m = this.snapshotMap.get(V);
            m && m(X);
          }
          break;
        default:
          l = !0;
          break;
      }
    }
    l && di(() => {
      this.collectorAsyncData(d);
    }, Bl.maxLastSyncTime);
  }
  collectorAsyncData(d) {
    var l, s, c, o;
    for (const u of d) {
      const { type: e, op: n, workId: G, index: y, removeIds: a, ops: I, opt: h, updateNodeOpt: S, toolsType: p, isSync: X, undoTickerId: V } = u;
      switch (e) {
        case hl.DrawWork:
          n != null && n.length && G && typeof y == "number" && ((l = this.collector) == null || l.dispatch({
            type: e,
            op: n,
            workId: G,
            index: y,
            isSync: X
          }));
          break;
        case hl.FullWork:
          I && ((s = this.collector) == null || s.dispatch({ type: e, ops: I, workId: G, updateNodeOpt: S, opt: h, toolsType: p, isSync: X }));
          break;
        case hl.UpdateNode:
          (S || h || I) && ((c = this.collector) == null || c.dispatch({ type: e, updateNodeOpt: S, workId: G, opt: h, ops: I, isSync: X }));
          break;
        case hl.RemoveNode:
          (n || a != null && a.length) && ((o = this.collector) == null || o.dispatch({ type: e, removeIds: a, isSync: X }));
          break;
      }
      V && rl.emitter.emit("undoTickerEnd", V);
    }
  }
  async clearAll(d = !1) {
    var l;
    this.taskBatchData.set("ClearAll", {
      dataType: Fl.Local,
      msgType: hl.Clear
    }), this.runAnimation(), d || (this.undoTickerId = Date.now(), rl.emitter.emit("undoTickerStart", this.undoTickerId), (l = this.collector) == null || l.dispatch({
      type: hl.Clear
    }), rl.emitter.emit("undoTickerEnd", this.undoTickerId)), this.maxLayerIndex = 0, await new Promise((s) => {
      setTimeout(() => {
        var c;
        if (this.bgCanvas && this.floatCanvas) {
          const o = this.bgCanvas.getContext("2d");
          o == null || o.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
          const u = this.floatCanvas.getContext("2d");
          u == null || u.clearRect(0, 0, this.floatCanvas.width, this.floatCanvas.height), (c = yl.InternalMsgEmitter) == null || c.emit([pl.FloatBar, ul.ShowFloatBar], !1);
        }
        s(!0);
      }, 100);
    });
  }
  unabled() {
    this.setCurrentLocalWorkData({ workState: Ll.Freeze, workId: void 0 });
  }
  abled() {
    this.setCurrentLocalWorkData({ workState: Ll.Pending, workId: void 0 });
  }
  destroy() {
    var d;
    (d = this.msgEmitter) == null || d.terminate(), this.destroySubWorker(), this.internalMsgEmitterRemoveListener();
  }
  updateNode(d, l) {
    this.taskBatchData.set(`${hl.UpdateNode},${d}`, {
      msgType: hl.UpdateNode,
      workId: d,
      updateNodeOpt: l,
      dataType: Fl.Local
    }), this.runAnimation();
  }
  setCurrentLocalWorkData(d, l = hl.None) {
    super.setCurrentLocalWorkData(d);
    const { workState: s, workId: c } = d;
    if (s !== Ll.Unwritable && l !== hl.None) {
      const o = this.currentToolsData.toolsType;
      this.taskBatchData.set(`${l},${c}`, {
        msgType: l,
        workId: c,
        toolsType: o,
        opt: { ...this.currentToolsData.toolsOpt, syncUnitTime: Bl.maxLastSyncTime },
        dataType: Fl.Local,
        isRunSubWork: o === Jl.Pencil || o === Jl.LaserPen
      }), this.runAnimation();
    }
  }
  setCurrentToolsData(d) {
    super.setCurrentToolsData(d);
    const l = d.toolsType;
    this.taskBatchData.set("UpdateTools", {
      msgType: hl.UpdateTools,
      dataType: Fl.Local,
      toolsType: l,
      opt: { ...d.toolsOpt, syncUnitTime: Bl.maxLastSyncTime },
      isRunSubWork: l === Jl.Pencil || l === Jl.LaserPen
    }), this.runAnimation();
  }
  setCameraOpt(d) {
    super.setCameraOpt(d);
    const { width: l, height: s } = d;
    (l !== this.offscreenCanvasOpt.width || s !== this.offscreenCanvasOpt.height) && (this.bgCanvas && (this.bgCanvas.style.width = `${l}px`, this.bgCanvas.style.height = `${s}px`), this.floatCanvas && (this.floatCanvas.style.width = `${l}px`, this.floatCanvas.style.height = `${s}px`), this.updateCanvas({ width: l, height: s })), this.taskBatchData.set("UpdateCamera", {
      msgType: hl.UpdateCamera,
      dataType: Fl.Local,
      cameraOpt: d,
      isRunSubWork: !0
    }), this.runAnimation();
  }
  getSnapshot(d, l, s, c) {
    var u;
    if (!((u = this.snapshotMap) == null ? void 0 : u.get(d))) {
      const e = this.collector.getNamespaceData(d);
      if (Object.keys(e).length) {
        const n = {
          msgType: hl.Snapshot,
          dataType: Fl.Local,
          scenePath: d,
          scenes: e,
          w: l || this.cameraOpt.width,
          h: s || this.cameraOpt.height,
          cameraOpt: c && {
            ...c,
            width: this.cameraOpt.width,
            height: this.cameraOpt.height
          } || this.cameraOpt,
          isRunSubWork: !0
        };
        return this.taskBatchData.set(`${n.scenePath}`, n), this.runAnimation(), new Promise((G) => {
          this.snapshotMap.set(d, G);
        }).then((G) => (this.snapshotMap.delete(d), G));
      }
    }
  }
}
Object.defineProperty(Bl, "defaultScreenCanvasOpt", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    autoRender: !1,
    contextType: Od.Canvas2d
    // bufferSize: 5000
  }
});
Object.defineProperty(Bl, "defauleLayerOpt", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: {
    offscreen: !0,
    handleEvent: !1,
    depth: !1
  }
});
Object.defineProperty(Bl, "maxLastSyncTime", {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: 500
});
export {
  yl as BezierPencilDisplayer,
  Cl as BezierPencilPlugin,
  od as DisplayStateEnum,
  Od as ECanvasContextType,
  ad as ECanvasShowType,
  Fl as EDataType,
  hl as EPostMessageType,
  hi as EScaleDirection,
  Vi as EShapeDataTypeKey,
  ui as ESpriteNodeKey,
  _l as EStrokeType,
  Jl as EToolsKey,
  ul as EmitEventType,
  Ll as EvevtWorkState,
  pl as InternalMsgEmitterType,
  Bl as MainEngineForWorker
};