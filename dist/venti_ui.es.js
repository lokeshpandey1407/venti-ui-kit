(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(':root{--size-sm: 32px;--size-md: 64px;--size-lg: 96px;--border-sm: 1px;--border-md: 2px;--border-lg: 4px;--radius-none: 0;--radius-sm: 4px;--radius-md: 8px;--radius-lg: 12px;--radius-full: 9999px;--venti-color-primary: yellow;--venti-color-secondary: red;--font-heading-type: custom;--font-heading-family: "Roboto", sans-serif;--font-heading-bold: url(https://example.com/fonts/bold.ttf);--font-body-type: google;--font-body-family: "Roboto", sans-serif;--font-body-regular: url(https://example.com/fonts/regular.ttf);--heading-font: var(--font-heading-type);--heading-color: #222222;--subheading-font: var(--font-body-type);--subheading-color: #444444;--body-text-color: #333333;--caption-text-color: #666666;--header-company-logo-url: url(https://example.com/logo.png);--header-company-logo-size: var(--size-md);--header-company-logo-align: left;--header-event-logo-url: url(https://example.com/event.png);--header-event-logo-size: var(--size-md);--header-event-logo-align: right;--footer-sponsor-icon-1: url(https://example.com/sponsor1.png);--footer-sponsor-icon-2: url(https://example.com/sponsor2.png);--btn-primary-text-color: #ffffff;--btn-primary-rounded: var(--radius-md);--btn-primary-border-thickness: var(--border-md);--btn-secondary-text-color: #333333;--btn-secondary-rounded: var(--radius-lg);--btn-secondary-border-thickness: var(--border-sm);--surface-bg-color: #ffffff;--surface-rounded: var(--radius-sm);--surface-border-thickness: var(--border-sm);--surface-border-color: #dddddd;--background-color: #f5f5f5;--background-image-portrait: url(https://example.com/bg-portrait.jpg);--background-image-landscape: url(https://example.com/bg-landscape.jpg)}._button_ru2iu_1[display=primary]{padding:10px 20px;background-color:var(--venti-color-primary);border:var(--btn-primary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-primary-rounded);color:var(--btn-primary-text-color);cursor:pointer;font-weight:700;transition:background-color .2s ease-in-out}._button_ru2iu_1[display=secondary]{padding:10px 20px;background-color:var(--venti-color-secondary);border:var(--btn-secondary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-secondary-rounded);color:var(--btn-secondary-text-color);cursor:pointer;font-weight:700;transition:background-color .3s ease-in-out}._button_ru2iu_1[display=primary]:hover,._button_ru2iu_1[display=secondary]:hover{filter:brightness(.8)}._heading_auo3s_1{font-family:var(--font-heading-family),sans-serif;color:var(--heading-color);font-weight:700;font-size:2.5rem;line-height:1.2;margin-bottom:1rem}._heading_12l54_1{font-family:var(--font-body-family),sans-serif;color:var(--subheading-color);font-weight:700;font-size:1.5rem;line-height:1.2;margin-bottom:1rem}._body_p904c_1{font-family:var(--font-body-family),sans-serif;color:var(--body-text-color);font-weight:400;font-size:1rem}._caption_fu0gv_1{font-family:var(--font-body-family),sans-serif;color:var(--caption-text-color);font-weight:400;font-size:.975rem;line-height:1.4;opacity:.8}._surface_b2ww1_1{background-color:var(--surface-bg-color);border-radius:var(--surface-rounded);border-width:var(--surface-border-thickness);border-color:var(--surface-border-color);border-style:solid;min-height:200px;min-width:200px;box-shadow:0 2px 10px #00000014;padding:1rem;transition:box-shadow .3s ease}')),document.head.appendChild(o)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import ae from "react";
var N = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function se() {
  if (J) return R;
  J = 1;
  var o = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(a, l, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), l.key !== void 0 && (m = "" + l.key), "key" in l) {
      d = {};
      for (var p in l)
        p !== "key" && (d[p] = l[p]);
    } else d = l;
    return l = d.ref, {
      $$typeof: o,
      type: a,
      key: m,
      ref: l !== void 0 ? l : null,
      props: d
    };
  }
  return R.Fragment = r, R.jsx = s, R.jsxs = s, R;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function ce() {
  return V || (V = 1, process.env.NODE_ENV !== "production" && function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case C:
          return "Profiler";
        case A:
          return "StrictMode";
        case P:
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
          case j:
            return "Portal";
          case w:
            return (e.displayName || "Context") + ".Provider";
          case O:
            return (e._context.displayName || "Context") + ".Consumer";
          case $:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : o(e.type) || "Memo";
          case z:
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
    function s(e) {
      try {
        r(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var c = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), r(e);
      }
    }
    function a(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === z)
        return "<...>";
      try {
        var t = o(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function m(e) {
      if (W.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, t) {
      function c() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function x() {
      var e = o(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function F(e, t, c, i, f, y, Y, I) {
      return c = y.ref, e = {
        $$typeof: k,
        type: e,
        key: t,
        props: y,
        _owner: f
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: Y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, t, c, i, f, y, Y, I) {
      var u = t.children;
      if (u !== void 0)
        if (i)
          if (oe(u)) {
            for (i = 0; i < u.length; i++)
              T(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(u);
      if (W.call(t, "key")) {
        u = o(e);
        var b = Object.keys(t).filter(function(ne) {
          return ne !== "key";
        });
        i = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", G[u + i] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          b,
          u
        ), G[u + i] = !0);
      }
      if (u = null, c !== void 0 && (s(c), u = "" + c), m(t) && (s(t.key), u = "" + t.key), "key" in t) {
        c = {};
        for (var M in t)
          M !== "key" && (c[M] = t[M]);
      } else c = t;
      return u && p(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), F(
        e,
        u,
        y,
        f,
        l(),
        c,
        Y,
        I
      );
    }
    function T(e) {
      typeof e == "object" && e !== null && e.$$typeof === k && e._store && (e._store.validated = 1);
    }
    var g = ae, k = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.consumer"), w = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), L = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = Object.prototype.hasOwnProperty, oe = Array.isArray, U = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var D, q = {}, H = g["react-stack-bottom-frame"].bind(
      g,
      d
    )(), B = U(a(d)), G = {};
    S.Fragment = h, S.jsx = function(e, t, c, i, f) {
      var y = 1e4 > L.recentlyCreatedOwnerStacks++;
      return _(
        e,
        t,
        c,
        !1,
        i,
        f,
        y ? Error("react-stack-top-frame") : H,
        y ? U(a(e)) : B
      );
    }, S.jsxs = function(e, t, c, i, f) {
      var y = 1e4 > L.recentlyCreatedOwnerStacks++;
      return _(
        e,
        t,
        c,
        !0,
        i,
        f,
        y ? Error("react-stack-top-frame") : H,
        y ? U(a(e)) : B
      );
    };
  }()), S;
}
var X;
function le() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? N.exports = se() : N.exports = ce()), N.exports;
}
var v = le();
const ie = "_button_ru2iu_1", ue = {
  button: ie
};
function Z(o) {
  var r, s, a = "";
  if (typeof o == "string" || typeof o == "number") a += o;
  else if (typeof o == "object") if (Array.isArray(o)) {
    var l = o.length;
    for (r = 0; r < l; r++) o[r] && (s = Z(o[r])) && (a && (a += " "), a += s);
  } else for (s in o) o[s] && (a && (a += " "), a += s);
  return a;
}
function E() {
  for (var o, r, s = 0, a = "", l = arguments.length; s < l; s++) (o = arguments[s]) && (r = Z(o)) && (a && (a += " "), a += r);
  return a;
}
const Te = ({
  children: o,
  dataType: r = "primary",
  style: s,
  className: a = "",
  ...l
}) => /* @__PURE__ */ v.jsx(
  "button",
  {
    className: E(ue.button, a),
    display: r,
    style: { ...s },
    ...l,
    children: o
  }
), de = "_heading_auo3s_1", ye = {
  heading: de
}, ke = ({ children: o, style: r, className: s, ...a }) => /* @__PURE__ */ v.jsx(
  "h1",
  {
    className: E(ye.heading, s),
    style: { ...r },
    ...a,
    children: o
  }
), me = "_heading_12l54_1", pe = {
  heading: me
}, Re = ({ children: o, style: r, className: s, ...a }) => /* @__PURE__ */ v.jsx(
  "h3",
  {
    className: E(pe.heading, s),
    style: { ...r },
    ...a,
    children: o
  }
), fe = "_body_p904c_1", ge = {
  body: fe
}, Se = ({ children: o, style: r, className: s, ...a }) => /* @__PURE__ */ v.jsx(
  "h1",
  {
    className: E(ge.body, s),
    style: { ...r },
    ...a,
    children: o
  }
), he = "_caption_fu0gv_1", be = {
  caption: he
}, xe = ({ children: o, style: r, className: s, ...a }) => /* @__PURE__ */ v.jsx(
  "h1",
  {
    className: E(be.caption, s),
    style: { ...r },
    ...a,
    children: o
  }
), ve = "_surface_b2ww1_1", Ee = {
  surface: ve
}, Fe = ({ children: o, style: r, className: s, ...a }) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: E(Ee.surface, s),
    style: { ...r },
    ...a,
    children: o
  }
), n = {
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
}, Q = (o, r) => {
  const s = document.createElement("style");
  s.innerHTML = `
    @font-face {
      font-family: '${o}';
      src: url('${r}') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
  `, document.head.appendChild(s);
}, je = async (o) => {
  var m, p, x, F, _, T, g, k, j, h, A, C, O, w;
  const r = o || n.theme, s = ((x = (p = (m = r == null ? void 0 : r.typography) == null ? void 0 : m.headingFont) == null ? void 0 : p.variants) == null ? void 0 : x.regular) || ((g = (T = (_ = (F = n.theme) == null ? void 0 : F.typography) == null ? void 0 : _.headingFont) == null ? void 0 : T.variants) == null ? void 0 : g.regular), a = ((h = (j = (k = r == null ? void 0 : r.typography) == null ? void 0 : k.bodyFont) == null ? void 0 : j.variants) == null ? void 0 : h.regular) || ((w = (O = (C = (A = n.theme) == null ? void 0 : A.typography) == null ? void 0 : C.bodyFont) == null ? void 0 : O.variants) == null ? void 0 : w.regular);
  Q(
    r.typography.headingFont.family || n.theme.typography.headingFont.family,
    s
  ), Q(
    r.typography.bodyFont.family || n.theme.typography.bodyFont.family,
    a
  );
  const l = {
    // Theme Colors
    "venti-color-primary": r.themeColors.primary || n.theme.themeColors.primary,
    "venti-color-secondary": r.themeColors.secondary || n.theme.themeColors.secondary,
    // Typography - Heading
    "font-heading-type": r.typography.headingFont.type || n.theme.typography.headingFont.type,
    "font-heading-family": r.typography.headingFont.family || n.theme.typography.headingFont.family,
    "font-heading-bold": r.typography.headingFont.variants.bold || n.theme.typography.headingFont.variants.bold,
    // Typography - Body
    "font-body-type": r.typography.bodyFont.type || n.theme.typography.bodyFont.type,
    "font-body-family": r.typography.bodyFont.family || n.theme.typography.bodyFont.family,
    "font-body-regular": r.typography.bodyFont.variants.regular || n.theme.typography.bodyFont.variants.regular,
    // Type Scales
    "heading-font": r.typography.typeScales.heading.font || n.theme.typography.typeScales.heading.font,
    "heading-color": r.typography.typeScales.heading.color || n.theme.typography.typeScales.heading.color,
    "subheading-font": r.typography.typeScales.subHeading.font || n.theme.typography.typeScales.subHeading.font,
    "subheading-color": r.typography.typeScales.subHeading.color || n.theme.typography.typeScales.subHeading.color,
    "body-text-color": r.typography.typeScales.body.color || n.theme.typography.typeScales.body.color,
    "caption-text-color": r.typography.typeScales.caption.color || n.theme.typography.typeScales.caption.color,
    // Header Logos
    "header-company-logo-url": `url("${r.header.companyLogo.imageUrl}")`,
    "header-company-logo-size": `var(--size-${r.header.companyLogo.size || n.theme.header.companyLogo.size})`,
    "header-company-logo-align": r.header.companyLogo.alignment || n.theme.header.companyLogo.alignment,
    "header-event-logo-url": `url("${r.header.eventLogo.imageUrl || n.theme.header.eventLogo.imageUrl}")`,
    "header-event-logo-size": `var(--size-${r.header.eventLogo.size || n.theme.header.eventLogo.size})`,
    "header-event-logo-align": r.header.eventLogo.alignment || n.theme.header.eventLogo.alignment,
    // Buttons
    "btn-primary-text-color": r.buttons.primary.textColor || n.theme.buttons.primary.textColor,
    "btn-primary-rounded": `var(--radius-${r.buttons.primary.rounded || n.theme.buttons.primary.rounded})`,
    "btn-primary-border-thickness": `var(--border-${r.buttons.primary.borderThickness || n.theme.buttons.primary.borderThickness})`,
    "btn-secondary-text-color": r.buttons.secondary.textColor || n.theme.buttons.secondary.textColor,
    "btn-secondary-rounded": `var(--radius-${r.buttons.secondary.rounded || n.theme.buttons.secondary.rounded})`,
    "btn-secondary-border-thickness": `var(--border-${r.buttons.secondary.borderThickness || n.theme.buttons.secondary.borderThickness})`,
    // Surfaces
    "surface-bg-color": r.surfaces.color || n.theme.surfaces.color,
    "surface-rounded": `var(--radius-${r.surfaces.rounded || n.theme.surfaces.rounded})`,
    "surface-border-thickness": `var(--border-${r.surfaces.borderThickness || n.theme.surfaces.borderThickness})`,
    "surface-border-color": r.surfaces.borderColor || n.theme.surfaces.borderColor,
    // Background
    "background-color": r.background.color || n.theme.background.color,
    "background-image-portrait": `url("${r.background.portraitImageUrl || n.theme.background.portraitImageUrl}")`,
    "background-image-landscape": `url("${r.background.landscapeImageUrl || n.theme.background.landscapeImageUrl}")`
  }, d = document.documentElement;
  Object.entries(l).forEach(([$, P]) => {
    P && d.style.setProperty(`--${$}`, P);
  });
};
export {
  Se as Body,
  Te as Button,
  xe as Caption,
  ke as Heading,
  Re as SubHeading,
  Fe as Surface,
  je as fetchStyles
};
