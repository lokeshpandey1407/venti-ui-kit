function Ve(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var ge = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ie;
function Ke() {
  if (Ie) return ae;
  Ie = 1;
  var o = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function b(h, w, k) {
    var Y = null;
    if (k !== void 0 && (Y = "" + k), w.key !== void 0 && (Y = "" + w.key), "key" in w) {
      k = {};
      for (var N in w)
        N !== "key" && (k[N] = w[N]);
    } else k = w;
    return w = k.ref, {
      $$typeof: o,
      type: h,
      key: Y,
      ref: w !== void 0 ? w : null,
      props: k
    };
  }
  return ae.Fragment = i, ae.jsx = b, ae.jsxs = b, ae;
}
var ie = {}, be = { exports: {} }, p = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Ze() {
  if (De) return p;
  De = 1;
  var o = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.iterator;
  function H(t) {
    return t === null || typeof t != "object" ? null : (t = W && t[W] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var F = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, K = Object.assign, G = {};
  function D(t, n, a) {
    this.props = t, this.context = n, this.refs = G, this.updater = a || F;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, D.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function B() {
  }
  B.prototype = D.prototype;
  function Z(t, n, a) {
    this.props = t, this.context = n, this.refs = G, this.updater = a || F;
  }
  var j = Z.prototype = new B();
  j.constructor = Z, K(j, D.prototype), j.isPureReactComponent = !0;
  var ne = Array.isArray, R = { H: null, A: null, T: null, S: null, V: null }, J = Object.prototype.hasOwnProperty;
  function ee(t, n, a, c, l, g) {
    return a = g.ref, {
      $$typeof: o,
      type: t,
      key: n,
      ref: a !== void 0 ? a : null,
      props: g
    };
  }
  function $(t, n) {
    return ee(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function U(t) {
    return typeof t == "object" && t !== null && t.$$typeof === o;
  }
  function ue(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(a) {
      return n[a];
    });
  }
  var O = /\/+/g;
  function Q(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? ue("" + t.key) : n.toString(36);
  }
  function x() {
  }
  function M(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(x, x) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function S(t, n, a, c, l) {
    var g = typeof t;
    (g === "undefined" || g === "boolean") && (t = null);
    var d = !1;
    if (t === null) d = !0;
    else
      switch (g) {
        case "bigint":
        case "string":
        case "number":
          d = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case o:
            case i:
              d = !0;
              break;
            case I:
              return d = t._init, S(
                d(t._payload),
                n,
                a,
                c,
                l
              );
          }
      }
    if (d)
      return l = l(t), d = c === "" ? "." + Q(t, 0) : c, ne(l) ? (a = "", d != null && (a = d.replace(O, "$&/") + "/"), S(l, n, a, "", function(C) {
        return C;
      })) : l != null && (U(l) && (l = $(
        l,
        a + (l.key == null || t && t.key === l.key ? "" : ("" + l.key).replace(
          O,
          "$&/"
        ) + "/") + d
      )), n.push(l)), 1;
    d = 0;
    var A = c === "" ? "." : c + ":";
    if (ne(t))
      for (var y = 0; y < t.length; y++)
        c = t[y], g = A + Q(c, y), d += S(
          c,
          n,
          a,
          g,
          l
        );
    else if (y = H(t), typeof y == "function")
      for (t = y.call(t), y = 0; !(c = t.next()).done; )
        c = c.value, g = A + Q(c, y++), d += S(
          c,
          n,
          a,
          g,
          l
        );
    else if (g === "object") {
      if (typeof t.then == "function")
        return S(
          M(t),
          n,
          a,
          c,
          l
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return d;
  }
  function L(t, n, a) {
    if (t == null) return t;
    var c = [], l = 0;
    return S(t, c, "", "", function(g) {
      return n.call(a, g, l++);
    }), c;
  }
  function X(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(a) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = a);
        },
        function(a) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = a);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var q = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function te() {
  }
  return p.Children = {
    map: L,
    forEach: function(t, n, a) {
      L(
        t,
        function() {
          n.apply(this, arguments);
        },
        a
      );
    },
    count: function(t) {
      var n = 0;
      return L(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return L(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!U(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, p.Component = D, p.Fragment = b, p.Profiler = w, p.PureComponent = Z, p.StrictMode = h, p.Suspense = re, p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, p.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return R.H.useMemoCache(t);
    }
  }, p.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, p.cloneElement = function(t, n, a) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var c = K({}, t.props), l = t.key, g = void 0;
    if (n != null)
      for (d in n.ref !== void 0 && (g = void 0), n.key !== void 0 && (l = "" + n.key), n)
        !J.call(n, d) || d === "key" || d === "__self" || d === "__source" || d === "ref" && n.ref === void 0 || (c[d] = n[d]);
    var d = arguments.length - 2;
    if (d === 1) c.children = a;
    else if (1 < d) {
      for (var A = Array(d), y = 0; y < d; y++)
        A[y] = arguments[y + 2];
      c.children = A;
    }
    return ee(t.type, l, void 0, void 0, g, c);
  }, p.createContext = function(t) {
    return t = {
      $$typeof: Y,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: k,
      _context: t
    }, t;
  }, p.createElement = function(t, n, a) {
    var c, l = {}, g = null;
    if (n != null)
      for (c in n.key !== void 0 && (g = "" + n.key), n)
        J.call(n, c) && c !== "key" && c !== "__self" && c !== "__source" && (l[c] = n[c]);
    var d = arguments.length - 2;
    if (d === 1) l.children = a;
    else if (1 < d) {
      for (var A = Array(d), y = 0; y < d; y++)
        A[y] = arguments[y + 2];
      l.children = A;
    }
    if (t && t.defaultProps)
      for (c in d = t.defaultProps, d)
        l[c] === void 0 && (l[c] = d[c]);
    return ee(t, g, void 0, void 0, null, l);
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(t) {
    return { $$typeof: N, render: t };
  }, p.isValidElement = U, p.lazy = function(t) {
    return {
      $$typeof: I,
      _payload: { _status: -1, _result: t },
      _init: X
    };
  }, p.memo = function(t, n) {
    return {
      $$typeof: z,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, p.startTransition = function(t) {
    var n = R.T, a = {};
    R.T = a;
    try {
      var c = t(), l = R.S;
      l !== null && l(a, c), typeof c == "object" && c !== null && typeof c.then == "function" && c.then(te, q);
    } catch (g) {
      q(g);
    } finally {
      R.T = n;
    }
  }, p.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, p.use = function(t) {
    return R.H.use(t);
  }, p.useActionState = function(t, n, a) {
    return R.H.useActionState(t, n, a);
  }, p.useCallback = function(t, n) {
    return R.H.useCallback(t, n);
  }, p.useContext = function(t) {
    return R.H.useContext(t);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(t, n) {
    return R.H.useDeferredValue(t, n);
  }, p.useEffect = function(t, n, a) {
    var c = R.H;
    if (typeof a == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return c.useEffect(t, n);
  }, p.useId = function() {
    return R.H.useId();
  }, p.useImperativeHandle = function(t, n, a) {
    return R.H.useImperativeHandle(t, n, a);
  }, p.useInsertionEffect = function(t, n) {
    return R.H.useInsertionEffect(t, n);
  }, p.useLayoutEffect = function(t, n) {
    return R.H.useLayoutEffect(t, n);
  }, p.useMemo = function(t, n) {
    return R.H.useMemo(t, n);
  }, p.useOptimistic = function(t, n) {
    return R.H.useOptimistic(t, n);
  }, p.useReducer = function(t, n, a) {
    return R.H.useReducer(t, n, a);
  }, p.useRef = function(t) {
    return R.H.useRef(t);
  }, p.useState = function(t) {
    return R.H.useState(t);
  }, p.useSyncExternalStore = function(t, n, a) {
    return R.H.useSyncExternalStore(
      t,
      n,
      a
    );
  }, p.useTransition = function() {
    return R.H.useTransition();
  }, p.version = "19.1.0", p;
}
var ce = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ce.exports;
var Ue;
function Je() {
  return Ue || (Ue = 1, function(o, i) {
    process.env.NODE_ENV !== "production" && function() {
      function b(e, r) {
        Object.defineProperty(k.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function h(e) {
        return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function w(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var u = e + "." + r;
        Te[u] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Te[u] = !0);
      }
      function k(e, r, u) {
        this.props = e, this.context = r, this.refs = Re, this.updater = u || Oe;
      }
      function Y() {
      }
      function N(e, r, u) {
        this.props = e, this.context = r, this.refs = Re, this.updater = u || Oe;
      }
      function re(e) {
        return "" + e;
      }
      function z(e) {
        try {
          re(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var u = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return u.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            s
          ), re(e);
        }
      }
      function I(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Fe ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case a:
            return "Profiler";
          case n:
            return "StrictMode";
          case d:
            return "Suspense";
          case A:
            return "SuspenseList";
          case se:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case te:
              return "Portal";
            case l:
              return (e.displayName || "Context") + ".Provider";
            case c:
              return (e._context.displayName || "Context") + ".Consumer";
            case g:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case y:
              return r = e.displayName || null, r !== null ? r : I(e.type) || "Memo";
            case C:
              r = e._payload, e = e._init;
              try {
                return I(e(r));
              } catch {
              }
          }
        return null;
      }
      function W(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === C)
          return "<...>";
        try {
          var r = I(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function H() {
        var e = v.A;
        return e === null ? null : e.getOwner();
      }
      function F() {
        return Error("react-stack-top-frame");
      }
      function K(e) {
        if (he.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function G(e, r) {
        function u() {
          Ce || (Ce = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
      function D() {
        var e = I(this.type);
        return Pe[e] || (Pe[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function B(e, r, u, s, f, E, m, T) {
        return u = E.ref, e = {
          $$typeof: q,
          type: e,
          key: r,
          props: E,
          _owner: f
        }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: D
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: m
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: T
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function Z(e, r) {
        return r = B(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function j(e) {
        return typeof e == "object" && e !== null && e.$$typeof === q;
      }
      function ne(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(u) {
          return r[u];
        });
      }
      function R(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (z(e.key), ne("" + e.key)) : r.toString(36);
      }
      function J() {
      }
      function ee(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(J, J) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function $(e, r, u, s, f) {
        var E = typeof e;
        (E === "undefined" || E === "boolean") && (e = null);
        var m = !1;
        if (e === null) m = !0;
        else
          switch (E) {
            case "bigint":
            case "string":
            case "number":
              m = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case q:
                case te:
                  m = !0;
                  break;
                case C:
                  return m = e._init, $(
                    m(e._payload),
                    r,
                    u,
                    s,
                    f
                  );
              }
          }
        if (m) {
          m = e, f = f(m);
          var T = s === "" ? "." + R(m, 0) : s;
          return Se(f) ? (u = "", T != null && (u = T.replace($e, "$&/") + "/"), $(f, r, u, "", function(V) {
            return V;
          })) : f != null && (j(f) && (f.key != null && (m && m.key === f.key || z(f.key)), u = Z(
            f,
            u + (f.key == null || m && m.key === f.key ? "" : ("" + f.key).replace(
              $e,
              "$&/"
            ) + "/") + T
          ), s !== "" && m != null && j(m) && m.key == null && m._store && !m._store.validated && (u._store.validated = 2), f = u), r.push(f)), 1;
        }
        if (m = 0, T = s === "" ? "." : s + ":", Se(e))
          for (var _ = 0; _ < e.length; _++)
            s = e[_], E = T + R(s, _), m += $(
              s,
              r,
              u,
              E,
              f
            );
        else if (_ = h(e), typeof _ == "function")
          for (_ === e.entries && (Ne || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ne = !0), e = _.call(e), _ = 0; !(s = e.next()).done; )
            s = s.value, E = T + R(s, _++), m += $(
              s,
              r,
              u,
              E,
              f
            );
        else if (E === "object") {
          if (typeof e.then == "function")
            return $(
              ee(e),
              r,
              u,
              s,
              f
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return m;
      }
      function U(e, r, u) {
        if (e == null) return e;
        var s = [], f = 0;
        return $(e, s, "", "", function(E) {
          return r.call(u, E, f++);
        }), s;
      }
      function ue(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(u) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = u);
            },
            function(u) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = u);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function O() {
        var e = v.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function Q() {
      }
      function x(e) {
        if (_e === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            _e = (o && o[r]).call(
              o,
              "timers"
            ).setImmediate;
          } catch {
            _e = function(s) {
              Le === !1 && (Le = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var f = new MessageChannel();
              f.port1.onmessage = s, f.port2.postMessage(void 0);
            };
          }
        return _e(e);
      }
      function M(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function S(e, r) {
        r !== ve - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ve = r;
      }
      function L(e, r, u) {
        var s = v.actQueue;
        if (s !== null)
          if (s.length !== 0)
            try {
              X(s), x(function() {
                return L(e, r, u);
              });
              return;
            } catch (f) {
              v.thrownErrors.push(f);
            }
          else v.actQueue = null;
        0 < v.thrownErrors.length ? (s = M(v.thrownErrors), v.thrownErrors.length = 0, u(s)) : r(e);
      }
      function X(e) {
        if (!we) {
          we = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var u = e[r];
              do {
                v.didUsePromise = !1;
                var s = u(!1);
                if (s !== null) {
                  if (v.didUsePromise) {
                    e[r] = u, e.splice(0, r);
                    return;
                  }
                  u = s;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (f) {
            e.splice(0, r + 1), v.thrownErrors.push(f);
          } finally {
            we = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var q = Symbol.for("react.transitional.element"), te = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), l = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), se = Symbol.for("react.activity"), ye = Symbol.iterator, Te = {}, Oe = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          w(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          w(e, "replaceState");
        },
        enqueueSetState: function(e) {
          w(e, "setState");
        }
      }, ke = Object.assign, Re = {};
      Object.freeze(Re), k.prototype.isReactComponent = {}, k.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, k.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var P = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, me;
      for (me in P)
        P.hasOwnProperty(me) && b(me, P[me]);
      Y.prototype = k.prototype, P = N.prototype = new Y(), P.constructor = N, ke(P, k.prototype), P.isPureReactComponent = !0;
      var Se = Array.isArray, Fe = Symbol.for("react.client.reference"), v = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, he = Object.prototype.hasOwnProperty, Ae = console.createTask ? console.createTask : function() {
        return null;
      };
      P = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var Ce, je, Pe = {}, Ge = P["react-stack-bottom-frame"].bind(P, F)(), Be = Ae(W(F)), Ne = !1, $e = /\/+/g, Me = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Le = !1, _e = null, ve = 0, Ee = !1, we = !1, Ye = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : x;
      P = Object.freeze({
        __proto__: null,
        c: function(e) {
          return O().useMemoCache(e);
        }
      }), i.Children = {
        map: U,
        forEach: function(e, r, u) {
          U(
            e,
            function() {
              r.apply(this, arguments);
            },
            u
          );
        },
        count: function(e) {
          var r = 0;
          return U(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return U(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!j(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, i.Component = k, i.Fragment = t, i.Profiler = a, i.PureComponent = N, i.StrictMode = n, i.Suspense = d, i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, i.__COMPILER_RUNTIME = P, i.act = function(e) {
        var r = v.actQueue, u = ve;
        ve++;
        var s = v.actQueue = r !== null ? r : [], f = !1;
        try {
          var E = e();
        } catch (_) {
          v.thrownErrors.push(_);
        }
        if (0 < v.thrownErrors.length)
          throw S(r, u), e = M(v.thrownErrors), v.thrownErrors.length = 0, e;
        if (E !== null && typeof E == "object" && typeof E.then == "function") {
          var m = E;
          return Ye(function() {
            f || Ee || (Ee = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(_, V) {
              f = !0, m.then(
                function(oe) {
                  if (S(r, u), u === 0) {
                    try {
                      X(s), x(function() {
                        return L(
                          oe,
                          _,
                          V
                        );
                      });
                    } catch (Xe) {
                      v.thrownErrors.push(Xe);
                    }
                    if (0 < v.thrownErrors.length) {
                      var Qe = M(
                        v.thrownErrors
                      );
                      v.thrownErrors.length = 0, V(Qe);
                    }
                  } else _(oe);
                },
                function(oe) {
                  S(r, u), 0 < v.thrownErrors.length && (oe = M(
                    v.thrownErrors
                  ), v.thrownErrors.length = 0), V(oe);
                }
              );
            }
          };
        }
        var T = E;
        if (S(r, u), u === 0 && (X(s), s.length !== 0 && Ye(function() {
          f || Ee || (Ee = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), v.actQueue = null), 0 < v.thrownErrors.length)
          throw e = M(v.thrownErrors), v.thrownErrors.length = 0, e;
        return {
          then: function(_, V) {
            f = !0, u === 0 ? (v.actQueue = s, x(function() {
              return L(
                T,
                _,
                V
              );
            })) : _(T);
          }
        };
      }, i.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, i.captureOwnerStack = function() {
        var e = v.getCurrentStack;
        return e === null ? null : e();
      }, i.cloneElement = function(e, r, u) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var s = ke({}, e.props), f = e.key, E = e._owner;
        if (r != null) {
          var m;
          e: {
            if (he.call(r, "ref") && (m = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && m.isReactWarning) {
              m = !1;
              break e;
            }
            m = r.ref !== void 0;
          }
          m && (E = H()), K(r) && (z(r.key), f = "" + r.key);
          for (T in r)
            !he.call(r, T) || T === "key" || T === "__self" || T === "__source" || T === "ref" && r.ref === void 0 || (s[T] = r[T]);
        }
        var T = arguments.length - 2;
        if (T === 1) s.children = u;
        else if (1 < T) {
          m = Array(T);
          for (var _ = 0; _ < T; _++)
            m[_] = arguments[_ + 2];
          s.children = m;
        }
        for (s = B(
          e.type,
          f,
          void 0,
          void 0,
          E,
          s,
          e._debugStack,
          e._debugTask
        ), f = 2; f < arguments.length; f++)
          E = arguments[f], j(E) && E._store && (E._store.validated = 1);
        return s;
      }, i.createContext = function(e) {
        return e = {
          $$typeof: l,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: c,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, i.createElement = function(e, r, u) {
        for (var s = 2; s < arguments.length; s++) {
          var f = arguments[s];
          j(f) && f._store && (f._store.validated = 1);
        }
        if (s = {}, f = null, r != null)
          for (_ in je || !("__self" in r) || "key" in r || (je = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), K(r) && (z(r.key), f = "" + r.key), r)
            he.call(r, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (s[_] = r[_]);
        var E = arguments.length - 2;
        if (E === 1) s.children = u;
        else if (1 < E) {
          for (var m = Array(E), T = 0; T < E; T++)
            m[T] = arguments[T + 2];
          Object.freeze && Object.freeze(m), s.children = m;
        }
        if (e && e.defaultProps)
          for (_ in E = e.defaultProps, E)
            s[_] === void 0 && (s[_] = E[_]);
        f && G(
          s,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var _ = 1e4 > v.recentlyCreatedOwnerStacks++;
        return B(
          e,
          f,
          void 0,
          void 0,
          H(),
          s,
          _ ? Error("react-stack-top-frame") : Ge,
          _ ? Ae(W(e)) : Be
        );
      }, i.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, i.forwardRef = function(e) {
        e != null && e.$$typeof === y ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: g, render: e }, u;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return u;
          },
          set: function(s) {
            u = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, i.isValidElement = j, i.lazy = function(e) {
        return {
          $$typeof: C,
          _payload: { _status: -1, _result: e },
          _init: ue
        };
      }, i.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: y,
          type: e,
          compare: r === void 0 ? null : r
        };
        var u;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return u;
          },
          set: function(s) {
            u = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), r;
      }, i.startTransition = function(e) {
        var r = v.T, u = {};
        v.T = u, u._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var s = e(), f = v.S;
          f !== null && f(u, s), typeof s == "object" && s !== null && typeof s.then == "function" && s.then(Q, Me);
        } catch (E) {
          Me(E);
        } finally {
          r === null && u._updatedFibers && (e = u._updatedFibers.size, u._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), v.T = r;
        }
      }, i.unstable_useCacheRefresh = function() {
        return O().useCacheRefresh();
      }, i.use = function(e) {
        return O().use(e);
      }, i.useActionState = function(e, r, u) {
        return O().useActionState(
          e,
          r,
          u
        );
      }, i.useCallback = function(e, r) {
        return O().useCallback(e, r);
      }, i.useContext = function(e) {
        var r = O();
        return e.$$typeof === c && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, i.useDebugValue = function(e, r) {
        return O().useDebugValue(e, r);
      }, i.useDeferredValue = function(e, r) {
        return O().useDeferredValue(e, r);
      }, i.useEffect = function(e, r, u) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var s = O();
        if (typeof u == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return s.useEffect(e, r);
      }, i.useId = function() {
        return O().useId();
      }, i.useImperativeHandle = function(e, r, u) {
        return O().useImperativeHandle(e, r, u);
      }, i.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), O().useInsertionEffect(e, r);
      }, i.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), O().useLayoutEffect(e, r);
      }, i.useMemo = function(e, r) {
        return O().useMemo(e, r);
      }, i.useOptimistic = function(e, r) {
        return O().useOptimistic(e, r);
      }, i.useReducer = function(e, r, u) {
        return O().useReducer(e, r, u);
      }, i.useRef = function(e) {
        return O().useRef(e);
      }, i.useState = function(e) {
        return O().useState(e);
      }, i.useSyncExternalStore = function(e, r, u) {
        return O().useSyncExternalStore(
          e,
          r,
          u
        );
      }, i.useTransition = function() {
        return O().useTransition();
      }, i.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(ce, ce.exports)), ce.exports;
}
var He;
function ze() {
  return He || (He = 1, process.env.NODE_ENV === "production" ? be.exports = Ze() : be.exports = Je()), be.exports;
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function et() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function o(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ue ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case G:
          return "Fragment";
        case B:
          return "Profiler";
        case D:
          return "StrictMode";
        case R:
          return "Suspense";
        case J:
          return "SuspenseList";
        case U:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case K:
            return "Portal";
          case j:
            return (t.displayName || "Context") + ".Provider";
          case Z:
            return (t._context.displayName || "Context") + ".Consumer";
          case ne:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case ee:
            return n = t.displayName || null, n !== null ? n : o(t.type) || "Memo";
          case $:
            n = t._payload, t = t._init;
            try {
              return o(t(n));
            } catch {
            }
        }
      return null;
    }
    function i(t) {
      return "" + t;
    }
    function b(t) {
      try {
        i(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var a = n.error, c = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return a.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), i(t);
      }
    }
    function h(t) {
      if (t === G) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === $)
        return "<...>";
      try {
        var n = o(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function w() {
      var t = O.A;
      return t === null ? null : t.getOwner();
    }
    function k() {
      return Error("react-stack-top-frame");
    }
    function Y(t) {
      if (Q.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function N(t, n) {
      function a() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: a,
        configurable: !0
      });
    }
    function re() {
      var t = o(this.type);
      return L[t] || (L[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function z(t, n, a, c, l, g, d, A) {
      return a = g.ref, t = {
        $$typeof: F,
        type: t,
        key: n,
        props: g,
        _owner: l
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: re
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: d
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function I(t, n, a, c, l, g, d, A) {
      var y = n.children;
      if (y !== void 0)
        if (c)
          if (x(y)) {
            for (c = 0; c < y.length; c++)
              W(y[c]);
            Object.freeze && Object.freeze(y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else W(y);
      if (Q.call(n, "key")) {
        y = o(t);
        var C = Object.keys(n).filter(function(ye) {
          return ye !== "key";
        });
        c = 0 < C.length ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}", te[y + c] || (C = 0 < C.length ? "{" + C.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          y,
          C,
          y
        ), te[y + c] = !0);
      }
      if (y = null, a !== void 0 && (b(a), y = "" + a), Y(n) && (b(n.key), y = "" + n.key), "key" in n) {
        a = {};
        for (var se in n)
          se !== "key" && (a[se] = n[se]);
      } else a = n;
      return y && N(
        a,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), z(
        t,
        y,
        g,
        l,
        w(),
        a,
        d,
        A
      );
    }
    function W(t) {
      typeof t == "object" && t !== null && t.$$typeof === F && t._store && (t._store.validated = 1);
    }
    var H = ze(), F = Symbol.for("react.transitional.element"), K = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), j = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), O = H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Object.prototype.hasOwnProperty, x = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    H = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var S, L = {}, X = H["react-stack-bottom-frame"].bind(
      H,
      k
    )(), q = M(h(k)), te = {};
    ie.Fragment = G, ie.jsx = function(t, n, a, c, l) {
      var g = 1e4 > O.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        a,
        !1,
        c,
        l,
        g ? Error("react-stack-top-frame") : X,
        g ? M(h(t)) : q
      );
    }, ie.jsxs = function(t, n, a, c, l) {
      var g = 1e4 > O.recentlyCreatedOwnerStacks++;
      return I(
        t,
        n,
        a,
        !0,
        c,
        l,
        g ? Error("react-stack-top-frame") : X,
        g ? M(h(t)) : q
      );
    };
  }()), ie;
}
var qe;
function tt() {
  return qe || (qe = 1, process.env.NODE_ENV === "production" ? ge.exports = Ke() : ge.exports = et()), ge.exports;
}
var fe = tt(), rt = ze();
const le = /* @__PURE__ */ Ve(rt), de = async () => {
  try {
    let o = {};
    await fetch(
      "http://localhost:3000/api/v1/project/get-project-theme/ac6023bf-5916-4dad-a4e1-7a544d304b5a"
    ).then(
      (h) => h.json((w) => {
        console.log(w), o = w.data.theme;
      })
    );
    const i = {
      // Theme Colors
      "color-primary": o.themeColors.primary,
      "color-secondary": o.themeColors.secondary,
      // Typography - Heading
      "font-heading-type": o.typography.headingFont.type,
      "font-heading-bold": o.typography.headingFont.variants.bold,
      "font-heading-size-adjustment": o.typography.headingFont.sizeAdjustment,
      // Typography - Body
      "font-body-type": o.typography.bodyFont.type,
      "font-body-family": o.typography.bodyFont.family,
      "font-body-regular": o.typography.bodyFont.variants.regular,
      // Type Scales
      "heading-font": o.typography.typeScales.heading.font,
      "heading-color": o.typography.typeScales.heading.color,
      "subheading-font": o.typography.typeScales.subHeading.font,
      "subheading-color": o.typography.typeScales.subHeading.color,
      "body-text-color": o.typography.typeScales.body.color,
      "caption-text-color": o.typography.typeScales.caption.color,
      // Header Logos
      "header-company-logo-url": `url("${o.header.companyLogo.imageUrl}")`,
      "header-company-logo-size": `var(--size-${o.header.companyLogo.size})`,
      "header-company-logo-align": o.header.companyLogo.alignment,
      "header-event-logo-url": `url("${o.header.eventLogo.imageUrl}")`,
      "header-event-logo-size": `var(--size-${o.header.eventLogo.size})`,
      "header-event-logo-align": o.header.eventLogo.alignment,
      // Buttons
      "btn-primary-text-color": o.buttons.primary.textColor,
      "btn-primary-rounded": `var(--radius-${o.buttons.primary.rounded})`,
      "btn-primary-border-thickness": `var(--border-${o.buttons.primary.borderThickness})`,
      "btn-secondary-text-color": o.buttons.secondary.textColor,
      "btn-secondary-rounded": `var(--radius-${o.buttons.secondary.rounded})`,
      "btn-secondary-border-thickness": `var(--border-${o.buttons.secondary.borderThickness})`,
      // Surfaces
      "surface-bg-color": o.surfaces.color,
      "surface-rounded": `var(--radius-${o.surfaces.rounded})`,
      "surface-border-thickness": `var(--border-${o.surfaces.borderThickness})`,
      "surface-border-color": o.surfaces.borderColor,
      // Background
      "background-color": o.background.color,
      "background-image-portrait": `url("${o.background.portraitImageUrl}")`,
      "background-image-landscape": `url("${o.background.landscapeImageUrl}")`
    }, b = document.documentElement;
    Object.entries(i).forEach(([h, w]) => {
      w && b.style.setProperty(`--${h}`, w);
    });
  } catch (o) {
    console.error("Failed to apply styles:", o);
  }
}, nt = "_button_1mj76_1", ot = {
  button: nt
};
function We(o) {
  var i, b, h = "";
  if (typeof o == "string" || typeof o == "number") h += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var w = o.length;
    for (i = 0; i < w; i++) o[i] && (b = We(o[i])) && (h && (h += " "), h += b);
  } else for (b in o) o[b] && (h && (h += " "), h += b);
  return h;
}
function pe() {
  for (var o, i, b = 0, h = "", w = arguments.length; b < w; b++) (o = arguments[b]) && (i = We(o)) && (h && (h += " "), h += i);
  return h;
}
const dt = ({ children: o, type: i, style: b, className: h = "", ...w }) => (le.useEffect(() => {
  de();
}, []), /* @__PURE__ */ fe.jsx(
  "button",
  {
    className: pe(ot.button, h),
    type: i,
    style: { ...b },
    ...w,
    children: o
  }
)), ut = "_heading_1maqq_1", st = {
  heading: ut
}, pt = ({ children: o, style: i, className: b, ...h }) => (le.useEffect(() => {
  de();
}, []), /* @__PURE__ */ fe.jsx(
  "h1",
  {
    className: pe(st.heading, b),
    style: { ...i },
    ...h,
    children: o
  }
)), at = {}, yt = ({ children: o, style: i, className: b, ...h }) => (le.useEffect(() => {
  de();
}, []), /* @__PURE__ */ fe.jsx(
  "h1",
  {
    className: pe(at.surface, b),
    style: { ...i },
    ...h,
    children: o
  }
)), it = "_caption_fu0gv_1", ct = {
  caption: it
}, mt = ({ children: o, style: i, className: b, ...h }) => (le.useEffect(() => {
  de();
}, []), /* @__PURE__ */ fe.jsx(
  "h1",
  {
    className: pe(ct.caption, b),
    style: { ...i },
    ...h,
    children: o
  }
)), ft = "_surface_1sfre_1", lt = {
  surface: ft
}, ht = ({ children: o, style: i, className: b, ...h }) => (le.useEffect(() => {
  de();
}, []), /* @__PURE__ */ fe.jsx(
  "div",
  {
    className: pe(lt.surface, b),
    style: { ...i },
    ...h,
    children: o
  }
));
export {
  yt as Body,
  dt as Button,
  mt as Caption,
  pt as Heading,
  ht as Surface
};
