import b from "react";
var T = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ae() {
  if (U) return g;
  U = 1;
  var o = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(n, c, i) {
    var p = null;
    if (i !== void 0 && (p = "" + i), c.key !== void 0 && (p = "" + c.key), "key" in c) {
      i = {};
      for (var y in c)
        y !== "key" && (i[y] = c[y]);
    } else i = c;
    return c = i.ref, {
      $$typeof: o,
      type: n,
      key: p,
      ref: c !== void 0 ? c : null,
      props: i
    };
  }
  return g.Fragment = r, g.jsx = a, g.jsxs = a, g;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case H:
          return "Profiler";
        case G:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case V:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : o(e.type) || "Memo";
          case $:
            t = e._payload, e = e._init;
            try {
              return o(e(t));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function a(e) {
      try {
        r(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), r(e);
      }
    }
    function n(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var t = o(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (C.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function y(e, t) {
      function s() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function q() {
      var e = o(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function J(e, t, s, u, d, f, j, A) {
      return s = f.ref, e = {
        $$typeof: N,
        type: e,
        key: t,
        props: f,
        _owner: d
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: q
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
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, t, s, u, d, f, j, A) {
      var l = t.children;
      if (l !== void 0)
        if (u)
          if (oe(l)) {
            for (u = 0; u < l.length; u++)
              w(l[u]);
            Object.freeze && Object.freeze(l);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(l);
      if (C.call(t, "key")) {
        l = o(e);
        var m = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        u = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", z[l + u] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          l,
          m,
          l
        ), z[l + u] = !0);
      }
      if (l = null, s !== void 0 && (a(s), l = "" + s), p(t) && (a(t.key), l = "" + t.key), "key" in t) {
        s = {};
        for (var O in t)
          O !== "key" && (s[O] = t[O]);
      } else s = t;
      return l && y(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), J(
        e,
        l,
        f,
        d,
        c(),
        s,
        j,
        A
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var R = b, N = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), x = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, oe = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, Y = {}, I = R["react-stack-bottom-frame"].bind(
      R,
      i
    )(), L = S(n(i)), z = {};
    h.Fragment = k, h.jsx = function(e, t, s, u, d) {
      var f = 1e4 > x.recentlyCreatedOwnerStacks++;
      return P(
        e,
        t,
        s,
        !1,
        u,
        d,
        f ? Error("react-stack-top-frame") : I,
        f ? S(n(e)) : L
      );
    }, h.jsxs = function(e, t, s, u, d) {
      var f = 1e4 > x.recentlyCreatedOwnerStacks++;
      return P(
        e,
        t,
        s,
        !0,
        u,
        d,
        f ? Error("react-stack-top-frame") : I,
        f ? S(n(e)) : L
      );
    };
  }()), h;
}
var M;
function ce() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = ae() : T.exports = se()), T.exports;
}
var E = ce();
const ue = {}, v = async (o) => {
  const r = ue, a = {
    // Theme Colors
    "color-primary": r.themeColors.primary,
    "color-secondary": r.themeColors.secondary,
    // Typography - Heading
    "font-heading-type": r.typography.headingFont.type,
    "font-heading-bold": r.typography.headingFont.variants.bold,
    "font-heading-size-adjustment": r.typography.headingFont.sizeAdjustment,
    // Typography - Body
    "font-body-type": r.typography.bodyFont.type,
    "font-body-family": r.typography.bodyFont.family,
    "font-body-regular": r.typography.bodyFont.variants.regular,
    // Type Scales
    "heading-font": r.typography.typeScales.heading.font,
    "heading-color": r.typography.typeScales.heading.color,
    "subheading-font": r.typography.typeScales.subHeading.font,
    "subheading-color": r.typography.typeScales.subHeading.color,
    "body-text-color": r.typography.typeScales.body.color,
    "caption-text-color": r.typography.typeScales.caption.color,
    // Header Logos
    "header-company-logo-url": `url("${r.header.companyLogo.imageUrl}")`,
    "header-company-logo-size": `var(--size-${r.header.companyLogo.size})`,
    "header-company-logo-align": r.header.companyLogo.alignment,
    "header-event-logo-url": `url("${r.header.eventLogo.imageUrl}")`,
    "header-event-logo-size": `var(--size-${r.header.eventLogo.size})`,
    "header-event-logo-align": r.header.eventLogo.alignment,
    // Buttons
    "btn-primary-text-color": r.buttons.primary.textColor,
    "btn-primary-rounded": `var(--radius-${r.buttons.primary.rounded})`,
    "btn-primary-border-thickness": `var(--border-${r.buttons.primary.borderThickness})`,
    "btn-secondary-text-color": r.buttons.secondary.textColor,
    "btn-secondary-rounded": `var(--radius-${r.buttons.secondary.rounded})`,
    "btn-secondary-border-thickness": `var(--border-${r.buttons.secondary.borderThickness})`,
    // Surfaces
    "surface-bg-color": r.surfaces.color,
    "surface-rounded": `var(--radius-${r.surfaces.rounded})`,
    "surface-border-thickness": `var(--border-${r.surfaces.borderThickness})`,
    "surface-border-color": r.surfaces.borderColor,
    // Background
    "background-color": r.background.color,
    "background-image-portrait": `url("${r.background.portraitImageUrl}")`,
    "background-image-landscape": `url("${r.background.landscapeImageUrl}")`
  }, n = document.documentElement;
  Object.entries(a).forEach(([c, i]) => {
    i && n.style.setProperty(`--${c}`, i);
  });
}, le = "_button_1mj76_1", ie = {
  button: le
};
function W(o) {
  var r, a, n = "";
  if (typeof o == "string" || typeof o == "number") n += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var c = o.length;
    for (r = 0; r < c; r++) o[r] && (a = W(o[r])) && (n && (n += " "), n += a);
  } else for (a in o) o[a] && (n && (n += " "), n += a);
  return n;
}
function _() {
  for (var o, r, a = 0, n = "", c = arguments.length; a < c; a++) (o = arguments[a]) && (r = W(o)) && (n && (n += " "), n += r);
  return n;
}
const Ee = ({ children: o, type: r, style: a, className: n = "", ...c }) => (b.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "button",
  {
    className: _(ie.button, n),
    type: r,
    style: { ...a },
    ...c,
    children: o
  }
)), fe = "_heading_1maqq_1", de = {
  heading: fe
}, ve = ({ children: o, style: r, className: a, ...n }) => (b.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(de.heading, a),
    style: { ...r },
    ...n,
    children: o
  }
)), me = {}, _e = ({ children: o, style: r, className: a, ...n }) => (b.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(me.surface, a),
    style: { ...r },
    ...n,
    children: o
  }
)), be = "_caption_fu0gv_1", pe = {
  caption: be
}, Re = ({ children: o, style: r, className: a, ...n }) => (b.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(pe.caption, a),
    style: { ...r },
    ...n,
    children: o
  }
)), ye = "_surface_1sfre_1", ge = {
  surface: ye
}, Te = ({ children: o, style: r, className: a, ...n }) => (b.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "div",
  {
    className: _(ge.surface, a),
    style: { ...r },
    ...n,
    children: o
  }
));
export {
  _e as Body,
  Ee as Button,
  Re as Caption,
  ve as Heading,
  Te as Surface
};
