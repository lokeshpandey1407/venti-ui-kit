(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(':root{--size-sm: 32px;--size-md: 64px;--size-lg: 96px;--border-sm: 1px;--border-md: 2px;--border-lg: 4px;--radius-none: 0;--radius-sm: 4px;--radius-md: 8px;--radius-lg: 12px;--radius-full: 9999px;--venti-color-primary: yellow;--venti-color-secondary: red;--font-heading-type: custom;--font-heading-family: "Roboto", sans-serif;--font-heading-bold: url(https://example.com/fonts/bold.ttf);--font-body-type: google;--font-body-family: "Roboto", sans-serif;--font-body-regular: url(https://example.com/fonts/regular.ttf);--heading-font: var(--font-heading-type);--heading-color: #222222;--subheading-font: var(--font-body-type);--subheading-color: #444444;--body-text-color: #333333;--caption-text-color: #666666;--header-company-logo-url: url(https://example.com/logo.png);--header-company-logo-size: var(--size-md);--header-company-logo-align: left;--header-event-logo-url: url(https://example.com/event.png);--header-event-logo-size: var(--size-md);--header-event-logo-align: right;--footer-sponsor-icon-1: url(https://example.com/sponsor1.png);--footer-sponsor-icon-2: url(https://example.com/sponsor2.png);--btn-primary-text-color: #ffffff;--btn-primary-rounded: var(--radius-md);--btn-primary-border-thickness: var(--border-md);--btn-secondary-text-color: #333333;--btn-secondary-rounded: var(--radius-lg);--btn-secondary-border-thickness: var(--border-sm);--surface-bg-color: #ffffff;--surface-rounded: var(--radius-sm);--surface-border-thickness: var(--border-sm);--surface-border-color: #dddddd;--background-color: #f5f5f5;--background-image-portrait: url(https://example.com/bg-portrait.jpg);--background-image-landscape: url(https://example.com/bg-landscape.jpg)}._button_ru2iu_1[display=primary]{padding:10px 20px;background-color:var(--venti-color-primary);border:var(--btn-primary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-primary-rounded);color:var(--btn-primary-text-color);cursor:pointer;font-weight:700;transition:background-color .2s ease-in-out}._button_ru2iu_1[display=secondary]{padding:10px 20px;background-color:var(--venti-color-secondary);border:var(--btn-secondary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-secondary-rounded);color:var(--btn-secondary-text-color);cursor:pointer;font-weight:700;transition:background-color .3s ease-in-out}._button_ru2iu_1[display=primary]:hover,._button_ru2iu_1[display=secondary]:hover{filter:brightness(.8)}._heading_auo3s_1{font-family:var(--font-heading-family),sans-serif;color:var(--heading-color);font-weight:700;font-size:2.5rem;line-height:1.2;margin-bottom:1rem}._heading_12l54_1{font-family:var(--font-body-family),sans-serif;color:var(--subheading-color);font-weight:700;font-size:1.5rem;line-height:1.2;margin-bottom:1rem}._body_p904c_1{font-family:var(--font-body-family),sans-serif;color:var(--body-text-color);font-weight:400;font-size:1rem}._caption_fu0gv_1{font-family:var(--font-body-family),sans-serif;color:var(--caption-text-color);font-weight:400;font-size:.975rem;line-height:1.4;opacity:.8}._surface_b2ww1_1{background-color:var(--surface-bg-color);border-radius:var(--surface-rounded);border-width:var(--surface-border-thickness);border-color:var(--surface-border-color);border-style:solid;min-height:200px;min-width:200px;box-shadow:0 2px 10px #00000014;padding:1rem;transition:box-shadow .3s ease}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import Ee from "react";
import T from "clsx";
var K = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function _e() {
  if (ge) return L;
  ge = 1;
  var a = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(c, u, y) {
    var g = null;
    if (y !== void 0 && (g = "" + y), u.key !== void 0 && (g = "" + u.key), "key" in u) {
      y = {};
      for (var f in u)
        f !== "key" && (y[f] = u[f]);
    } else y = u;
    return u = y.ref, {
      $$typeof: a,
      type: c,
      key: g,
      ref: u !== void 0 ? u : null,
      props: y
    };
  }
  return L.Fragment = r, L.jsx = s, L.jsxs = s, L;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fe;
function ke() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === X ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case W:
          return "Profiler";
        case z:
          return "StrictMode";
        case B:
          return "Suspense";
        case G:
          return "SuspenseList";
        case V:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case q:
            return (e.displayName || "Context") + ".Provider";
          case D:
            return (e._context.displayName || "Context") + ".Consumer";
          case H:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case J:
            return t = e.displayName || null, t !== null ? t : a(e.type) || "Memo";
          case O:
            t = e._payload, e = e._init;
            try {
              return a(e(t));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function s(e) {
      try {
        r(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var n = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), r(e);
      }
    }
    function c(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var t = a(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = v.A;
      return e === null ? null : e.getOwner();
    }
    function y() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (j.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
      function n() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function Y() {
      var e = a(this.type);
      return w[e] || (w[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function I(e, t, n, l, p, d, _, k) {
      return n = d.ref, e = {
        $$typeof: C,
        type: e,
        key: t,
        props: d,
        _owner: p
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: Y
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
        value: _
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, t, n, l, p, d, _, k) {
      var i = t.children;
      if (i !== void 0)
        if (l)
          if (Q(i)) {
            for (l = 0; l < i.length; l++)
              F(i[l]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else F(i);
      if (j.call(t, "key")) {
        i = a(e);
        var m = Object.keys(t).filter(function(Z) {
          return Z !== "key";
        });
        l = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", $[i + l] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          i,
          m,
          i
        ), $[i + l] = !0);
      }
      if (i = null, n !== void 0 && (s(n), i = "" + n), g(t) && (s(t.key), i = "" + t.key), "key" in t) {
        n = {};
        for (var R in t)
          R !== "key" && (n[R] = t[R]);
      } else n = t;
      return i && f(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), I(
        e,
        i,
        d,
        p,
        u(),
        n,
        _,
        k
      );
    }
    function F(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var h = Ee, C = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), q = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), V = Symbol.for("react.activity"), X = Symbol.for("react.client.reference"), v = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Q = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var A, w = {}, P = h["react-stack-bottom-frame"].bind(
      h,
      y
    )(), N = E(c(y)), $ = {};
    U.Fragment = b, U.jsx = function(e, t, n, l, p) {
      var d = 1e4 > v.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        n,
        !1,
        l,
        p,
        d ? Error("react-stack-top-frame") : P,
        d ? E(c(e)) : N
      );
    }, U.jsxs = function(e, t, n, l, p) {
      var d = 1e4 > v.recentlyCreatedOwnerStacks++;
      return x(
        e,
        t,
        n,
        !0,
        l,
        p,
        d ? Error("react-stack-top-frame") : P,
        d ? E(c(e)) : N
      );
    };
  }()), U;
}
var he;
function Re() {
  return he || (he = 1, process.env.NODE_ENV === "production" ? K.exports = _e() : K.exports = ke()), K.exports;
}
var S = Re();
const Te = "_button_ru2iu_1", Se = {
  button: Te
}, Ye = ({
  children: a,
  dataType: r = "primary",
  style: s,
  className: c = "",
  ...u
}) => /* @__PURE__ */ S.jsx(
  "button",
  {
    className: T(Se.button, c),
    display: r,
    style: { ...s },
    ...u,
    children: a
  }
), xe = "_heading_auo3s_1", Fe = {
  heading: xe
}, Ie = ({ children: a, style: r, className: s, ...c }) => /* @__PURE__ */ S.jsx(
  "h1",
  {
    className: T(Fe.heading, s),
    style: { ...r },
    ...c,
    children: a
  }
), Ce = "_heading_12l54_1", Oe = {
  heading: Ce
}, Me = ({ children: a, style: r, className: s, ...c }) => /* @__PURE__ */ S.jsx(
  "h3",
  {
    className: T(Oe.heading, s),
    style: { ...r },
    ...c,
    children: a
  }
), je = "_body_p904c_1", Ae = {
  body: je
}, ze = ({ children: a, style: r, className: s, ...c }) => /* @__PURE__ */ S.jsx(
  "h1",
  {
    className: T(Ae.body, s),
    style: { ...r },
    ...c,
    children: a
  }
), we = "_caption_fu0gv_1", Pe = {
  caption: we
}, We = ({ children: a, style: r, className: s, ...c }) => /* @__PURE__ */ S.jsx(
  "h1",
  {
    className: T(Pe.caption, s),
    style: { ...r },
    ...c,
    children: a
  }
), Ne = "_surface_b2ww1_1", $e = {
  surface: Ne
}, De = ({ children: a, style: r, className: s, ...c }) => /* @__PURE__ */ S.jsx(
  "div",
  {
    className: T($e.surface, s),
    style: { ...r },
    ...c,
    children: a
  }
), o = {
  theme: {
    header: {
      companyLogo: {
        imageUrl: "https://example.com/logo.png",
        size: "md",
        // keep "md" for visual balance
        alignment: "left"
      },
      eventLogo: {
        imageUrl: "https://example.com/event.png",
        size: "md",
        alignment: "right"
      }
    },
    themeColors: {
      primary: "#3B82F6",
      // Modern blue (Tailwind blue-500)
      secondary: "#6366F1"
      // Indigo (Tailwind indigo-500)
    },
    typography: {
      headingFont: {
        type: "custom",
        family: "Roboto",
        // Clean and modern font
        variants: {
          bold: "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf"
        }
      },
      bodyFont: {
        type: "google",
        family: "Roboto",
        // Very readable and modern
        variants: {
          regular: "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf"
        }
      },
      typeScales: {
        heading: {
          font: "heading",
          color: "#393939"
          // Dark gray for strong contrast
        },
        subHeading: {
          font: "body",
          color: "#374151"
          // Muted gray
        },
        body: {
          color: "#4B5563"
          // Balanced readability
        },
        caption: {
          color: "#6B7280"
          // Lighter gray for less emphasis
        }
      }
    },
    buttons: {
      primary: {
        textColor: "#FFFFFF",
        rounded: "lg",
        borderThickness: "lg"
      },
      secondary: {
        textColor: "#1F2937",
        // Almost black for contrast on lighter buttons
        rounded: "sm",
        borderThickness: "sm"
      }
    },
    surfaces: {
      color: "red",
      rounded: "md",
      borderThickness: "sm",
      borderColor: "#E5E7EB"
      // Light neutral border
    },
    background: {
      color: "#F9FAFB",
      // Very light gray for soft backgrounds
      portraitImageUrl: "https://example.com/bg-portrait-new.jpg",
      landscapeImageUrl: "https://example.com/bg-landscape-new.jpg"
    }
  }
}, be = (a, r) => {
  const s = document.createElement("style");
  s.innerHTML = `
    @font-face {
      font-family: '${a}';
      src: url('${r}') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
  `, document.head.appendChild(s);
}, qe = async (a) => {
  var g, f, Y, I, x, F, h, C, M, b, z, W, D, q, H, B, G, J, O, V, X, v, j, Q, E, A, w, P, N, $, e, t, n, l, p, d, _, k, i, m, R, Z, ee, re, te, oe, ne, ae, se, ce, le, ie, ue, de, ye, pe;
  const r = a || o.theme, s = ((Y = (f = (g = r == null ? void 0 : r.typography) == null ? void 0 : g.headingFont) == null ? void 0 : f.variants) == null ? void 0 : Y.regular) || ((h = (F = (x = (I = o.theme) == null ? void 0 : I.typography) == null ? void 0 : x.headingFont) == null ? void 0 : F.variants) == null ? void 0 : h.bold), c = ((b = (M = (C = r == null ? void 0 : r.typography) == null ? void 0 : C.bodyFont) == null ? void 0 : M.variants) == null ? void 0 : b.regular) || ((q = (D = (W = (z = o.theme) == null ? void 0 : z.typography) == null ? void 0 : W.bodyFont) == null ? void 0 : D.variants) == null ? void 0 : q.regular);
  be(
    ((B = (H = r.typography) == null ? void 0 : H.headingFont) == null ? void 0 : B.family) || ((J = (G = o.theme.typography) == null ? void 0 : G.headingFont) == null ? void 0 : J.family),
    s
  ), be(
    ((O = r.typography.bodyFont) == null ? void 0 : O.family) || ((X = (V = o.theme.typography) == null ? void 0 : V.bodyFont) == null ? void 0 : X.family),
    c
  );
  const u = {
    // Theme Colors
    "venti-color-primary": r.themeColors.primary || o.theme.themeColors.primary,
    "venti-color-secondary": r.themeColors.secondary || o.theme.themeColors.secondary,
    // Typography - Heading
    "font-heading-type": r.typography.headingFont.type || o.theme.typography.headingFont.type,
    "font-heading-family": ((j = (v = r.typography) == null ? void 0 : v.headingFont) == null ? void 0 : j.family) || ((E = (Q = o.theme.typography) == null ? void 0 : Q.headingFont) == null ? void 0 : E.family),
    "font-heading-bold": r.typography.headingFont.variants.bold || o.theme.typography.headingFont.variants.bold,
    // Typography - Body
    "font-body-type": r.typography.bodyFont.type || o.theme.typography.bodyFont.type,
    "font-body-family": ((w = (A = r.typography) == null ? void 0 : A.bodyFont) == null ? void 0 : w.family) || ((N = (P = o.theme.typography) == null ? void 0 : P.bodyFont) == null ? void 0 : N.family),
    "font-body-regular": r.typography.bodyFont.variants.regular || o.theme.typography.bodyFont.variants.regular,
    // Type Scales
    "heading-font": ((t = (e = ($ = r.typography) == null ? void 0 : $.typeScales) == null ? void 0 : e.heading) == null ? void 0 : t.font) || ((p = (l = (n = o.theme.typography) == null ? void 0 : n.typeScales) == null ? void 0 : l.heading) == null ? void 0 : p.font),
    "heading-color": ((k = (_ = (d = r == null ? void 0 : r.typography) == null ? void 0 : d.typeScales) == null ? void 0 : _.heading) == null ? void 0 : k.color) || ((Z = (R = (m = (i = o == null ? void 0 : o.theme) == null ? void 0 : i.typography) == null ? void 0 : m.typeScales) == null ? void 0 : R.heading) == null ? void 0 : Z.color),
    "subheading-font": ((te = (re = (ee = r == null ? void 0 : r.typography) == null ? void 0 : ee.typeScales) == null ? void 0 : re.subHeading) == null ? void 0 : te.font) || ((se = (ae = (ne = (oe = o == null ? void 0 : o.theme) == null ? void 0 : oe.typography) == null ? void 0 : ne.typeScales) == null ? void 0 : ae.subHeading) == null ? void 0 : se.font),
    "subheading-color": ((ie = (le = (ce = r.typography) == null ? void 0 : ce.typeScales) == null ? void 0 : le.subHeading) == null ? void 0 : ie.color) || ((pe = (ye = (de = (ue = o.theme) == null ? void 0 : ue.typography) == null ? void 0 : de.typeScales) == null ? void 0 : ye.subHeading) == null ? void 0 : pe.color),
    "body-text-color": r.typography.typeScales.body.color || o.theme.typography.typeScales.body.color,
    "caption-text-color": r.typography.typeScales.caption.color || o.theme.typography.typeScales.caption.color,
    // Header Logos
    "header-company-logo-url": `url("${r.header.companyLogo.imageUrl}")`,
    "header-company-logo-size": `var(--size-${r.header.companyLogo.size || o.theme.header.companyLogo.size})`,
    "header-company-logo-align": r.header.companyLogo.alignment || o.theme.header.companyLogo.alignment,
    "header-event-logo-url": `url("${r.header.eventLogo.imageUrl || o.theme.header.eventLogo.imageUrl}")`,
    "header-event-logo-size": `var(--size-${r.header.eventLogo.size || o.theme.header.eventLogo.size})`,
    "header-event-logo-align": r.header.eventLogo.alignment || o.theme.header.eventLogo.alignment,
    // Buttons
    "btn-primary-text-color": r.buttons.primary.textColor || o.theme.buttons.primary.textColor,
    "btn-primary-rounded": `var(--radius-${r.buttons.primary.rounded || o.theme.buttons.primary.rounded})`,
    "btn-primary-border-thickness": `var(--border-${r.buttons.primary.borderThickness || o.theme.buttons.primary.borderThickness})`,
    "btn-secondary-text-color": r.buttons.secondary.textColor || o.theme.buttons.secondary.textColor,
    "btn-secondary-rounded": `var(--radius-${r.buttons.secondary.rounded || o.theme.buttons.secondary.rounded})`,
    "btn-secondary-border-thickness": `var(--border-${r.buttons.secondary.borderThickness || o.theme.buttons.secondary.borderThickness})`,
    // Surfaces
    "surface-bg-color": r.surfaces.color || o.theme.surfaces.color,
    "surface-rounded": `var(--radius-${r.surfaces.rounded || o.theme.surfaces.rounded})`,
    "surface-border-thickness": `var(--border-${r.surfaces.borderThickness || o.theme.surfaces.borderThickness})`,
    "surface-border-color": r.surfaces.borderColor || o.theme.surfaces.borderColor,
    // Background
    "background-color": r.background.color || o.theme.background.color,
    "background-image-portrait": `url("${r.background.portraitImageUrl || o.theme.background.portraitImageUrl}")`,
    "background-image-landscape": `url("${r.background.landscapeImageUrl || o.theme.background.landscapeImageUrl}")`
  }, y = document.documentElement;
  Object.entries(u).forEach(([ve, me]) => {
    me && y.style.setProperty(`--${ve}`, me);
  });
};
export {
  ze as Body,
  Ye as Button,
  We as Caption,
  Ie as Heading,
  Me as SubHeading,
  De as Surface,
  qe as applyStyles
};
