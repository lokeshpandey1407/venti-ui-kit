(function(){"use strict";try{if(typeof document<"u"){var r=document.createElement("style");r.appendChild(document.createTextNode(':root{--size-sm: 32px;--size-md: 64px;--size-lg: 96px;--border-sm: 1px;--border-md: 2px;--border-lg: 4px;--radius-none: 0;--radius-sm: 4px;--radius-md: 8px;--radius-lg: 12px;--radius-full: 9999px;--venti-color-primary: yellow;--venti-color-secondary: red;--font-heading-type: custom;--font-heading-family: "Roboto", sans-serif;--font-heading-bold: url(https://example.com/fonts/bold.ttf);--font-body-type: google;--font-body-family: "Roboto", sans-serif;--font-body-regular: url(https://example.com/fonts/regular.ttf);--heading-font: var(--font-heading-type);--heading-color: #222222;--subheading-font: var(--font-body-type);--subheading-color: #444444;--body-text-color: #333333;--caption-text-color: #666666;--header-company-logo-url: url(https://example.com/logo.png);--header-company-logo-size: var(--size-md);--header-company-logo-align: left;--header-event-logo-url: url(https://example.com/event.png);--header-event-logo-size: var(--size-md);--header-event-logo-align: right;--footer-sponsor-icon-1: url(https://example.com/sponsor1.png);--footer-sponsor-icon-2: url(https://example.com/sponsor2.png);--btn-primary-text-color: #ffffff;--btn-primary-rounded: var(--radius-md);--btn-primary-border-thickness: var(--border-md);--btn-secondary-text-color: #333333;--btn-secondary-rounded: var(--radius-lg);--btn-secondary-border-thickness: var(--border-sm);--surface-bg-color: #ffffff;--surface-rounded: var(--radius-sm);--surface-border-thickness: var(--border-sm);--surface-border-color: #dddddd;--background-color: #f5f5f5;--background-image-portrait: url(https://example.com/bg-portrait.jpg);--background-image-landscape: url(https://example.com/bg-landscape.jpg)}._button_ru2iu_1[display=primary]{padding:10px 20px;background-color:var(--venti-color-primary);border:var(--btn-primary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-primary-rounded);color:var(--btn-primary-text-color);cursor:pointer;font-weight:700;transition:background-color .2s ease-in-out}._button_ru2iu_1[display=secondary]{padding:10px 20px;background-color:var(--venti-color-secondary);border:var(--btn-secondary-border-thickness) solid var(--venti-color-primary);border-radius:var(--btn-secondary-rounded);color:var(--btn-secondary-text-color);cursor:pointer;font-weight:700;transition:background-color .3s ease-in-out}._button_ru2iu_1[display=primary]:hover,._button_ru2iu_1[display=secondary]:hover{filter:brightness(.8)}._heading_1maqq_1{font-family:var(--font-heading-family),sans-serif;color:var(--heading-color);font-weight:700;font-size:2.5rem;line-height:1.2;margin-bottom:1rem}._body_p904c_1{font-family:var(--font-body-family),sans-serif;color:var(--body-text-color);font-weight:400;font-size:1rem}._caption_fu0gv_1{font-family:var(--font-body-family),sans-serif;color:var(--caption-text-color);font-weight:400;font-size:.975rem;line-height:1.4;opacity:.8}._surface_b2ww1_1{background-color:var(--surface-bg-color);border-radius:var(--surface-rounded);border-width:var(--surface-border-thickness);border-color:var(--surface-border-color);border-style:solid;min-height:200px;min-width:200px;box-shadow:0 2px 10px #00000014;padding:1rem;transition:box-shadow .3s ease}')),document.head.appendChild(r)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import y from "react";
var T = { exports: {} }, b = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  if (D) return b;
  D = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(s, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var g in c)
        g !== "key" && (d[g] = c[g]);
    } else d = c;
    return c = d.ref, {
      $$typeof: n,
      type: s,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return b.Fragment = r, b.jsx = a, b.jsxs = a, b;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ce() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case G:
          return "Profiler";
        case V:
          return "StrictMode";
        case K:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case X:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case N:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
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
        var l = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), r(e);
      }
    }
    function s(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var t = n(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if ($.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function g(e, t) {
      function l() {
        L || (L = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function B() {
      var e = n(this.type);
      return I[e] || (I[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function H(e, t, l, i, f, m, A, O) {
      return l = m.ref, e = {
        $$typeof: C,
        type: e,
        key: t,
        props: m,
        _owner: f
      }, (l !== void 0 ? l : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: B
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
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function F(e, t, l, i, f, m, A, O) {
      var u = t.children;
      if (u !== void 0)
        if (i)
          if (ne(u)) {
            for (i = 0; i < u.length; i++)
              P(u[i]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(u);
      if ($.call(t, "key")) {
        u = n(e);
        var p = Object.keys(t).filter(function(ae) {
          return ae !== "key";
        });
        i = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", z[u + i] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          u,
          p,
          u
        ), z[u + i] = !0);
      }
      if (u = null, l !== void 0 && (a(l), u = "" + l), h(t) && (a(t.key), u = "" + t.key), "key" in t) {
        l = {};
        for (var w in t)
          w !== "key" && (l[w] = t[w]);
      } else l = t;
      return u && g(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), H(
        e,
        u,
        m,
        f,
        c(),
        l,
        A,
        O
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var R = y, C = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), X = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), S = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ne = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var L, I = {}, U = R["react-stack-bottom-frame"].bind(
      R,
      d
    )(), Y = j(s(d)), z = {};
    v.Fragment = x, v.jsx = function(e, t, l, i, f) {
      var m = 1e4 > S.recentlyCreatedOwnerStacks++;
      return F(
        e,
        t,
        l,
        !1,
        i,
        f,
        m ? Error("react-stack-top-frame") : U,
        m ? j(s(e)) : Y
      );
    }, v.jsxs = function(e, t, l, i, f) {
      var m = 1e4 > S.recentlyCreatedOwnerStacks++;
      return F(
        e,
        t,
        l,
        !0,
        i,
        f,
        m ? Error("react-stack-top-frame") : U,
        m ? j(s(e)) : Y
      );
    };
  }()), v;
}
var W;
function le() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? T.exports = se() : T.exports = ce()), T.exports;
}
var E = le();
const o = {
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
        family: "Poppins",
        // Clean and modern font
        variants: {
          bold: "https://example.com/fonts/poppins-bold.ttf"
        }
      },
      bodyFont: {
        type: "google",
        family: "Inter, sans-serif",
        // Very readable and modern
        variants: {
          regular: "https://example.com/fonts/inter-regular.ttf"
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
}, _ = async (n) => {
  const r = n || o.theme;
  console.log(r);
  const a = {
    // Theme Colors
    "venti-color-primary": r.themeColors.primary || o.theme.themeColors.primary,
    "venti-color-secondary": r.themeColors.secondary || o.theme.themeColors.secondary,
    // Typography - Heading
    "font-heading-type": r.typography.headingFont.type || o.theme.typography.headingFont.type,
    "font-heading-family": r.typography.headingFont.family || o.theme.typography.headingFont.family,
    "font-heading-bold": r.typography.headingFont.variants.bold || o.theme.typography.headingFont.variants.bold,
    // Typography - Body
    "font-body-type": r.typography.bodyFont.type || o.theme.typography.bodyFont.type,
    "font-body-family": r.typography.bodyFont.family || o.theme.typography.bodyFont.family,
    "font-body-regular": r.typography.bodyFont.variants.regular || o.theme.typography.bodyFont.variants.regular,
    // Type Scales
    "heading-font": r.typography.typeScales.heading.font || o.theme.typography.typeScales.heading.font,
    "heading-color": r.typography.typeScales.heading.color || o.theme.typography.typeScales.heading.color,
    "subheading-font": r.typography.typeScales.subHeading.font || o.theme.typography.typeScales.subHeading.font,
    "subheading-color": r.typography.typeScales.subHeading.color || o.theme.typography.typeScales.subHeading.color,
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
  }, s = document.documentElement;
  Object.entries(a).forEach(([c, d]) => {
    d && s.style.setProperty(`--${c}`, d);
  });
}, ie = "_button_ru2iu_1", ue = {
  button: ie
};
function q(n) {
  var r, a, s = "";
  if (typeof n == "string" || typeof n == "number") s += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var c = n.length;
    for (r = 0; r < c; r++) n[r] && (a = q(n[r])) && (s && (s += " "), s += a);
  } else for (a in n) n[a] && (s && (s += " "), s += a);
  return s;
}
function k() {
  for (var n, r, a = 0, s = "", c = arguments.length; a < c; a++) (n = arguments[a]) && (r = q(n)) && (s && (s += " "), s += r);
  return s;
}
const Ee = ({
  children: n,
  dataType: r = "primary",
  style: a,
  className: s = "",
  theme: c = o.theme,
  ...d
}) => (y.useEffect(() => {
  _(c);
}, [c]), /* @__PURE__ */ E.jsx(
  "button",
  {
    className: k(ue.button, s),
    display: r,
    style: { ...a },
    ...d,
    children: n
  }
)), de = "_heading_1maqq_1", me = {
  heading: de
}, _e = ({
  children: n,
  style: r,
  theme: a = o.theme,
  className: s,
  ...c
}) => (y.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: k(me.heading, s),
    style: { ...r },
    ...c,
    children: n
  }
)), fe = "_body_p904c_1", pe = {
  body: fe
}, ke = ({
  children: n,
  style: r,
  theme: a = o.theme,
  className: s,
  ...c
}) => (y.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: k(pe.body, s),
    style: { ...r },
    ...c,
    children: n
  }
)), ye = "_caption_fu0gv_1", he = {
  caption: ye
}, Re = ({
  children: n,
  style: r,
  theme: a = o.theme,
  className: s,
  ...c
}) => (y.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "h1",
  {
    className: k(he.caption, s),
    style: { ...r },
    ...c,
    children: n
  }
)), ge = "_surface_b2ww1_1", be = {
  surface: ge
}, Te = ({
  children: n,
  style: r,
  theme: a = o.theme,
  className: s,
  ...c
}) => (y.useEffect(() => {
  _(a);
}, [a]), /* @__PURE__ */ E.jsx(
  "div",
  {
    className: k(be.surface, s),
    style: { ...r },
    ...c,
    children: n
  }
));
export {
  ke as Body,
  Ee as Button,
  Re as Caption,
  _e as Heading,
  Te as Surface,
  _ as fetchStyles
};
