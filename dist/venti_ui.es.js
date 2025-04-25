(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(':root{--size-sm: 32px;--size-md: 64px;--size-lg: 96px;--border-sm: 1px;--border-md: 2px;--border-lg: 4px;--radius-none: 0;--radius-sm: 4px;--radius-md: 8px;--radius-lg: 12px;--radius-full: 9999px;--venti-color-primary: yellow;--venti-color-secondary: red;--font-heading-type: custom;--font-heading-family: "Roboto", sans-serif;--font-heading-bold: url(https://example.com/fonts/bold.ttf);--font-body-type: google;--font-body-family: "Roboto", sans-serif;--font-body-regular: url(https://example.com/fonts/regular.ttf);--heading-font: var(--font-heading-type);--heading-color: #222222;--subheading-font: var(--font-body-type);--subheading-color: #444444;--body-text-color: #333333;--caption-text-color: #666666;--header-company-logo-url: url(https://example.com/logo.png);--header-company-logo-size: var(--size-md);--header-company-logo-align: left;--header-event-logo-url: url(https://example.com/event.png);--header-event-logo-size: var(--size-md);--header-event-logo-align: right;--footer-sponsor-icon-1: url(https://example.com/sponsor1.png);--footer-sponsor-icon-2: url(https://example.com/sponsor2.png);--btn-primary-text-color: #ffffff;--btn-primary-rounded: var(--radius-md);--btn-primary-border-thickness: var(--border-md);--btn-secondary-text-color: #333333;--btn-secondary-rounded: var(--radius-lg);--btn-secondary-border-thickness: var(--border-sm);--surface-bg-color: #ffffff;--surface-rounded: var(--radius-sm);--surface-border-thickness: var(--border-sm);--surface-border-color: #dddddd;--background-color: #f5f5f5;--background-image-portrait: url(https://example.com/bg-portrait.jpg);--background-image-landscape: url(https://example.com/bg-landscape.jpg)}._button_ru2iu_1[display=primary]{padding:10px 20px;background-color:var(--venti-color-primary);border:var(--btn-primary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-primary-rounded);color:var(--btn-primary-text-color);cursor:pointer;font-weight:700;transition:background-color .2s ease-in-out}._button_ru2iu_1[display=secondary]{padding:10px 20px;background-color:var(--venti-color-secondary);border:var(--btn-secondary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-secondary-rounded);color:var(--btn-secondary-text-color);cursor:pointer;font-weight:700;transition:background-color .3s ease-in-out}._button_ru2iu_1[display=primary]:hover,._button_ru2iu_1[display=secondary]:hover{filter:brightness(.8)}._heading_auo3s_1{font-family:var(--font-heading-family),sans-serif;color:var(--heading-color);font-weight:700;font-size:2.5rem;line-height:1.2;margin-bottom:1rem}._heading_vgcnp_1{font-family:var(--font-body-family),sans-serif;color:var(--subHeading-color);font-weight:700;font-size:1.5rem;line-height:1.2;margin-bottom:1rem}._body_p904c_1{font-family:var(--font-body-family),sans-serif;color:var(--body-text-color);font-weight:400;font-size:1rem}._caption_fu0gv_1{font-family:var(--font-body-family),sans-serif;color:var(--caption-text-color);font-weight:400;font-size:.975rem;line-height:1.4;opacity:.8}._surface_b2ww1_1{background-color:var(--surface-bg-color);border-radius:var(--surface-rounded);border-width:var(--surface-border-thickness);border-color:var(--surface-border-color);border-style:solid;min-height:200px;min-width:200px;box-shadow:0 2px 10px #00000014;padding:1rem;transition:box-shadow .3s ease}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import h from "react";
var L = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function ce() {
  if (X) return x;
  X = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(s, c, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      d = {};
      for (var f in c)
        f !== "key" && (d[f] = c[f]);
    } else d = c;
    return c = d.ref, {
      $$typeof: n,
      type: s,
      key: m,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return x.Fragment = r, x.jsx = a, x.jsxs = a, x;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function le() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case b:
          return "Fragment";
        case w:
          return "Profiler";
        case O:
          return "StrictMode";
        case $:
          return "Suspense";
        case re:
          return "SuspenseList";
        case oe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case C:
            return "Portal";
          case N:
            return (e.displayName || "Context") + ".Provider";
          case P:
            return (e._context.displayName || "Context") + ".Consumer";
          case U:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return o = e.displayName || null, o !== null ? o : n(e.type) || "Memo";
          case D:
            o = e._payload, e = e._init;
            try {
              return n(e(o));
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
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var l = o.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), r(e);
      }
    }
    function s(e) {
      if (e === b) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var o = n(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (H.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, o) {
      function l() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function j() {
      var e = n(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function A(e, o, l, i, p, y, M, z) {
      return l = y.ref, e = {
        $$typeof: S,
        type: e,
        key: o,
        props: y,
        _owner: p
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: j
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
        value: M
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function k(e, o, l, i, p, y, M, z) {
      var u = o.children;
      if (u !== void 0)
        if (i)
          if (ae(u)) {
            for (i = 0; i < u.length; i++)
              R(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(u);
      if (H.call(o, "key")) {
        u = n(e);
        var v = Object.keys(o).filter(function(se) {
          return se !== "key";
        });
        i = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", V[u + i] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          v,
          u
        ), V[u + i] = !0);
      }
      if (u = null, l !== void 0 && (a(l), u = "" + l), m(o) && (a(o.key), u = "" + o.key), "key" in o) {
        l = {};
        for (var W in o)
          W !== "key" && (l[W] = o[W]);
      } else l = o;
      return u && f(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), A(
        e,
        u,
        y,
        p,
        c(),
        l,
        M,
        z
      );
    }
    function R(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var g = h, S = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), w = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), N = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), oe = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), Y = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, ae = Array.isArray, I = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var q, B = {}, G = g["react-stack-bottom-frame"].bind(
      g,
      d
    )(), J = I(s(d)), V = {};
    F.Fragment = b, F.jsx = function(e, o, l, i, p) {
      var y = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return k(
        e,
        o,
        l,
        !1,
        i,
        p,
        y ? Error("react-stack-top-frame") : G,
        y ? I(s(e)) : J
      );
    }, F.jsxs = function(e, o, l, i, p) {
      var y = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return k(
        e,
        o,
        l,
        !0,
        i,
        p,
        y ? Error("react-stack-top-frame") : G,
        y ? I(s(e)) : J
      );
    };
  }()), F;
}
var Z;
function ie() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? L.exports = ce() : L.exports = le()), L.exports;
}
var E = ie();
const t = {
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
    footer: {
      iconUrls: []
      // Optional: add sponsor icons if needed
    },
    themeColors: {
      primary: "#3B82F6",
      // Modern blue (Tailwind blue-500)
      secondary: "#6300F1"
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
}, K = (n, r) => {
  const a = document.createElement("style");
  a.innerHTML = `
    @font-face {
      font-family: '${n}';
      src: url('${r}') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
  `, document.head.appendChild(a);
}, _ = async (n) => {
  var m, f, j, A, k, R, g, S, C, b, O, w, P, N;
  const r = n || t.theme, a = ((j = (f = (m = r == null ? void 0 : r.typography) == null ? void 0 : m.headingFont) == null ? void 0 : f.variants) == null ? void 0 : j.regular) || ((g = (R = (k = (A = t.theme) == null ? void 0 : A.typography) == null ? void 0 : k.headingFont) == null ? void 0 : R.variants) == null ? void 0 : g.regular), s = ((b = (C = (S = r == null ? void 0 : r.typography) == null ? void 0 : S.bodyFont) == null ? void 0 : C.variants) == null ? void 0 : b.regular) || ((N = (P = (w = (O = t.theme) == null ? void 0 : O.typography) == null ? void 0 : w.bodyFont) == null ? void 0 : P.variants) == null ? void 0 : N.regular);
  K(
    r.typography.headingFont.family || t.theme.typography.headingFont.family,
    a
  ), K(
    r.typography.bodyFont.family || t.theme.typography.bodyFont.family,
    s
  ), console.log(r);
  const c = {
    // Theme Colors
    "venti-color-primary": r.themeColors.primary || t.theme.themeColors.primary,
    "venti-color-secondary": r.themeColors.secondary || t.theme.themeColors.secondary,
    // Typography - Heading
    "font-heading-type": r.typography.headingFont.type || t.theme.typography.headingFont.type,
    "font-heading-family": r.typography.headingFont.family || t.theme.typography.headingFont.family,
    "font-heading-bold": r.typography.headingFont.variants.bold || t.theme.typography.headingFont.variants.bold,
    // Typography - Body
    "font-body-type": r.typography.bodyFont.type || t.theme.typography.bodyFont.type,
    "font-body-family": r.typography.bodyFont.family || t.theme.typography.bodyFont.family,
    "font-body-regular": r.typography.bodyFont.variants.regular || t.theme.typography.bodyFont.variants.regular,
    // Type Scales
    "heading-font": r.typography.typeScales.heading.font || t.theme.typography.typeScales.heading.font,
    "heading-color": r.typography.typeScales.heading.color || t.theme.typography.typeScales.heading.color,
    "subheading-font": r.typography.typeScales.subHeading.font || t.theme.typography.typeScales.subHeading.font,
    "subheading-color": r.typography.typeScales.subHeading.color || t.theme.typography.typeScales.subHeading.color,
    "body-text-color": r.typography.typeScales.body.color || t.theme.typography.typeScales.body.color,
    "caption-text-color": r.typography.typeScales.caption.color || t.theme.typography.typeScales.caption.color,
    // Header Logos
    "header-company-logo-url": `url("${r.header.companyLogo.imageUrl}")`,
    "header-company-logo-size": `var(--size-${r.header.companyLogo.size || t.theme.header.companyLogo.size})`,
    "header-company-logo-align": r.header.companyLogo.alignment || t.theme.header.companyLogo.alignment,
    "header-event-logo-url": `url("${r.header.eventLogo.imageUrl || t.theme.header.eventLogo.imageUrl}")`,
    "header-event-logo-size": `var(--size-${r.header.eventLogo.size || t.theme.header.eventLogo.size})`,
    "header-event-logo-align": r.header.eventLogo.alignment || t.theme.header.eventLogo.alignment,
    // Buttons
    "btn-primary-text-color": r.buttons.primary.textColor || t.theme.buttons.primary.textColor,
    "btn-primary-rounded": `var(--radius-${r.buttons.primary.rounded || t.theme.buttons.primary.rounded})`,
    "btn-primary-border-thickness": `var(--border-${r.buttons.primary.borderThickness || t.theme.buttons.primary.borderThickness})`,
    "btn-secondary-text-color": r.buttons.secondary.textColor || t.theme.buttons.secondary.textColor,
    "btn-secondary-rounded": `var(--radius-${r.buttons.secondary.rounded || t.theme.buttons.secondary.rounded})`,
    "btn-secondary-border-thickness": `var(--border-${r.buttons.secondary.borderThickness || t.theme.buttons.secondary.borderThickness})`,
    // Surfaces
    "surface-bg-color": r.surfaces.color || t.theme.surfaces.color,
    "surface-rounded": `var(--radius-${r.surfaces.rounded || t.theme.surfaces.rounded})`,
    "surface-border-thickness": `var(--border-${r.surfaces.borderThickness || t.theme.surfaces.borderThickness})`,
    "surface-border-color": r.surfaces.borderColor || t.theme.surfaces.borderColor,
    // Background
    "background-color": r.background.color || t.theme.background.color,
    "background-image-portrait": `url("${r.background.portraitImageUrl || t.theme.background.portraitImageUrl}")`,
    "background-image-landscape": `url("${r.background.landscapeImageUrl || t.theme.background.landscapeImageUrl}")`
  }, d = document.documentElement;
  Object.entries(c).forEach(([U, $]) => {
    $ && d.style.setProperty(`--${U}`, $);
  });
}, ue = "_button_ru2iu_1", de = {
  button: ue
};
function ee(n) {
  var r, a, s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var c = n.length;
    for (r = 0; r < c; r++) n[r] && (a = ee(n[r])) && (s && (s += " "), s += a);
  } else for (a in n) n[a] && (s && (s += " "), s += a);
  return s;
}
function T() {
  for (var n, r, a = 0, s = "", c = arguments.length; a < c; a++) (n = arguments[a]) && (r = ee(n)) && (s && (s += " "), s += r);
  return s;
}
const ke = ({
  children: n,
  dataType: r = "primary",
  style: a,
  className: s = "",
  theme: c = t.theme,
  ...d
}) => (h.useEffect(() => {
  _(c);
}, [c]), /* @__PURE__ */ E.jsx(
  "button",
  {
    className: T(de.button, s),
    display: r,
    style: { ...a },
    ...d,
    children: n
  }
)), ye = "_heading_auo3s_1", me = {
  heading: ye
}, Re = ({
  children: n,
  style: r,
  theme: a = t.theme,
  className: s,
  ...c
}) => (h.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: T(me.heading, s),
    style: { ...r },
    ...c,
    children: n
  }
)), fe = "_heading_vgcnp_1", pe = {
  heading: fe
}, Se = ({
  children: n,
  style: r,
  theme: a = t.theme,
  className: s,
  ...c
}) => (h.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h3",
  {
    className: T(pe.heading, s),
    style: { ...r },
    ...c,
    children: n
  }
)), ge = "_body_p904c_1", he = {
  body: ge
}, xe = ({
  children: n,
  style: r,
  theme: a = t.theme,
  className: s,
  ...c
}) => (h.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: T(he.body, s),
    style: { ...r },
    ...c,
    children: n
  }
)), be = "_caption_fu0gv_1", ve = {
  caption: be
}, Fe = ({
  children: n,
  style: r,
  theme: a = t.theme,
  className: s,
  ...c
}) => (h.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: T(ve.caption, s),
    style: { ...r },
    ...c,
    children: n
  }
)), Ee = "_surface_b2ww1_1", _e = {
  surface: Ee
}, je = ({
  children: n,
  style: r,
  theme: a = t.theme,
  className: s,
  ...c
}) => (h.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "div",
  {
    className: T(_e.surface, s),
    style: { ...r },
    ...c,
    children: n
  }
));
export {
  xe as Body,
  ke as Button,
  Fe as Caption,
  Re as Heading,
  Se as SubHeading,
  je as Surface,
  _ as fetchStyles
};
