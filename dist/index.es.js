import p from "react";
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
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function n(o, s, i) {
    var y = null;
    if (i !== void 0 && (y = "" + i), s.key !== void 0 && (y = "" + s.key), "key" in s) {
      i = {};
      for (var b in s)
        b !== "key" && (i[b] = s[b]);
    } else i = s;
    return s = i.ref, {
      $$typeof: r,
      type: o,
      key: y,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return g.Fragment = a, g.jsx = n, g.jsxs = n, g;
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
    function r(e) {
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
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case $:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function n(e) {
      try {
        a(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var c = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), a(e);
      }
    }
    function o(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function y(e) {
      if (C.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, t) {
      function c() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function q() {
      var e = r(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function J(e, t, c, l, d, f, S, A) {
      return c = f.ref, e = {
        $$typeof: N,
        type: e,
        key: t,
        props: f,
        _owner: d
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, t, c, l, d, f, S, A) {
      var u = t.children;
      if (u !== void 0)
        if (l)
          if (oe(u)) {
            for (l = 0; l < u.length; l++)
              w(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(u);
      if (C.call(t, "key")) {
        u = r(e);
        var m = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        l = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", z[u + l] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          m,
          u
        ), z[u + l] = !0);
      }
      if (u = null, c !== void 0 && (n(c), u = "" + c), y(t) && (n(t.key), u = "" + t.key), "key" in t) {
        c = {};
        for (var O in t)
          O !== "key" && (c[O] = t[O]);
      } else c = t;
      return u && b(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), J(
        e,
        u,
        f,
        d,
        s(),
        c,
        S,
        A
      );
    }
    function w(e) {
      typeof e == "object" && e !== null && e.$$typeof === N && e._store && (e._store.validated = 1);
    }
    var R = p, N = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), B = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), j = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, oe = Array.isArray, x = console.createTask ? console.createTask : function() {
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
    )(), L = x(o(i)), z = {};
    h.Fragment = k, h.jsx = function(e, t, c, l, d) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return P(
        e,
        t,
        c,
        !1,
        l,
        d,
        f ? Error("react-stack-top-frame") : I,
        f ? x(o(e)) : L
      );
    }, h.jsxs = function(e, t, c, l, d) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return P(
        e,
        t,
        c,
        !0,
        l,
        d,
        f ? Error("react-stack-top-frame") : I,
        f ? x(o(e)) : L
      );
    };
  }()), h;
}
var M;
function ce() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = ae() : T.exports = se()), T.exports;
}
var E = ce();
const v = async () => {
  try {
    let r = {};
    await fetch(
      "http://localhost:3000/api/v1/project/get-project-theme/ac6023bf-5916-4dad-a4e1-7a544d304b5a"
    ).then(
      (o) => o.json((s) => {
        console.log(s), r = s.data.theme;
      })
    );
    const a = {
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
    Object.entries(a).forEach(([o, s]) => {
      s && n.style.setProperty(`--${o}`, s);
    });
  } catch (r) {
    console.error("Failed to apply styles:", r);
  }
}, le = "_button_1mj76_1", ue = {
  button: le
};
function W(r) {
  var a, n, o = "";
  if (typeof r == "string" || typeof r == "number") o += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var s = r.length;
    for (a = 0; a < s; a++) r[a] && (n = W(r[a])) && (o && (o += " "), o += n);
  } else for (n in r) r[n] && (o && (o += " "), o += n);
  return o;
}
function _() {
  for (var r, a, n = 0, o = "", s = arguments.length; n < s; n++) (r = arguments[n]) && (a = W(r)) && (o && (o += " "), o += a);
  return o;
}
const he = ({ children: r, type: a, style: n, className: o = "", ...s }) => (p.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "button",
  {
    className: _(ue.button, o),
    type: a,
    style: { ...n },
    ...s,
    children: r
  }
)), ie = "_heading_1maqq_1", fe = {
  heading: ie
}, Ee = ({ children: r, style: a, className: n, ...o }) => (p.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(fe.heading, n),
    style: { ...a },
    ...o,
    children: r
  }
)), de = {}, ve = ({ children: r, style: a, className: n, ...o }) => (p.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(de.surface, n),
    style: { ...a },
    ...o,
    children: r
  }
)), me = "_caption_fu0gv_1", pe = {
  caption: me
}, _e = ({ children: r, style: a, className: n, ...o }) => (p.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: _(pe.caption, n),
    style: { ...a },
    ...o,
    children: r
  }
)), ye = "_surface_1sfre_1", be = {
  surface: ye
}, Re = ({ children: r, style: a, className: n, ...o }) => (p.useEffect(() => {
  v();
}, []), /* @__PURE__ */ E.jsx(
  "div",
  {
    className: _(be.surface, n),
    style: { ...a },
    ...o,
    children: r
  }
));
export {
  ve as Body,
  he as Button,
  _e as Caption,
  Ee as Heading,
  Re as Surface
};
