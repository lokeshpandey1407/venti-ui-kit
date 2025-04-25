import { defaultTheme } from "../assets/defaultThemeConfig";

const loadFontFace = (fontName, fontUrl) => {
  const style = document.createElement("style");
  style.innerHTML = `
    @font-face {
      font-family: '${fontName}';
      src: url('${fontUrl}') format('woff2');
      font-weight: 400;
      font-style: normal;
    }
  `;
  document.head.appendChild(style);
};
export const fetchStyles = async (currentTheme) => {
  const theme = currentTheme || defaultTheme.theme;
  const headingFont =
    theme?.typography?.headingFont?.variants?.regular ||
    defaultTheme.theme?.typography?.headingFont?.variants?.regular;

  const bodyFont =
    theme?.typography?.bodyFont?.variants?.regular ||
    defaultTheme.theme?.typography?.bodyFont?.variants?.regular;

  loadFontFace(
    theme.typography.headingFont.family ||
      defaultTheme.theme.typography.headingFont.family,
    headingFont
  );
  loadFontFace(
    theme.typography.bodyFont.family ||
      defaultTheme.theme.typography.bodyFont.family,
    bodyFont
  );
  console.log(theme);

  const cssVars = {
    // Theme Colors
    "venti-color-primary":
      theme.themeColors.primary || defaultTheme.theme.themeColors.primary,
    "venti-color-secondary":
      theme.themeColors.secondary || defaultTheme.theme.themeColors.secondary,

    // Typography - Heading
    "font-heading-type":
      theme.typography.headingFont.type ||
      defaultTheme.theme.typography.headingFont.type,
    "font-heading-family":
      theme.typography.headingFont.family ||
      defaultTheme.theme.typography.headingFont.family,
    "font-heading-bold":
      theme.typography.headingFont.variants.bold ||
      defaultTheme.theme.typography.headingFont.variants.bold,

    // Typography - Body
    "font-body-type":
      theme.typography.bodyFont.type ||
      defaultTheme.theme.typography.bodyFont.type,
    "font-body-family":
      theme.typography.bodyFont.family ||
      defaultTheme.theme.typography.bodyFont.family,
    "font-body-regular":
      theme.typography.bodyFont.variants.regular ||
      defaultTheme.theme.typography.bodyFont.variants.regular,

    // Type Scales
    "heading-font":
      theme.typography.typeScales.heading.font ||
      defaultTheme.theme.typography.typeScales.heading.font,
    "heading-color":
      theme.typography.typeScales.heading.color ||
      defaultTheme.theme.typography.typeScales.heading.color,
    "subheading-font":
      theme.typography.typeScales.subHeading.font ||
      defaultTheme.theme.typography.typeScales.subHeading.font,
    "subheading-color":
      theme.typography.typeScales.subHeading.color ||
      defaultTheme.theme.typography.typeScales.subHeading.color,
    "body-text-color":
      theme.typography.typeScales.body.color ||
      defaultTheme.theme.typography.typeScales.body.color,
    "caption-text-color":
      theme.typography.typeScales.caption.color ||
      defaultTheme.theme.typography.typeScales.caption.color,

    // Header Logos
    "header-company-logo-url": `url("${theme.header.companyLogo.imageUrl}")`,
    "header-company-logo-size": `var(--size-${
      theme.header.companyLogo.size ||
      defaultTheme.theme.header.companyLogo.size
    })`,
    "header-company-logo-align":
      theme.header.companyLogo.alignment ||
      defaultTheme.theme.header.companyLogo.alignment,

    "header-event-logo-url": `url("${
      theme.header.eventLogo.imageUrl ||
      defaultTheme.theme.header.eventLogo.imageUrl
    }")`,
    "header-event-logo-size": `var(--size-${
      theme.header.eventLogo.size || defaultTheme.theme.header.eventLogo.size
    })`,
    "header-event-logo-align":
      theme.header.eventLogo.alignment ||
      defaultTheme.theme.header.eventLogo.alignment,

    // Buttons
    "btn-primary-text-color":
      theme.buttons.primary.textColor ||
      defaultTheme.theme.buttons.primary.textColor,
    "btn-primary-rounded": `var(--radius-${
      theme.buttons.primary.rounded ||
      defaultTheme.theme.buttons.primary.rounded
    })`,
    "btn-primary-border-thickness": `var(--border-${
      theme.buttons.primary.borderThickness ||
      defaultTheme.theme.buttons.primary.borderThickness
    })`,

    "btn-secondary-text-color":
      theme.buttons.secondary.textColor ||
      defaultTheme.theme.buttons.secondary.textColor,
    "btn-secondary-rounded": `var(--radius-${
      theme.buttons.secondary.rounded ||
      defaultTheme.theme.buttons.secondary.rounded
    })`,
    "btn-secondary-border-thickness": `var(--border-${
      theme.buttons.secondary.borderThickness ||
      defaultTheme.theme.buttons.secondary.borderThickness
    })`,

    // Surfaces
    "surface-bg-color":
      theme.surfaces.color || defaultTheme.theme.surfaces.color,
    "surface-rounded": `var(--radius-${
      theme.surfaces.rounded || defaultTheme.theme.surfaces.rounded
    })`,
    "surface-border-thickness": `var(--border-${
      theme.surfaces.borderThickness ||
      defaultTheme.theme.surfaces.borderThickness
    })`,
    "surface-border-color":
      theme.surfaces.borderColor || defaultTheme.theme.surfaces.borderColor,

    // Background
    "background-color":
      theme.background.color || defaultTheme.theme.background.color,
    "background-image-portrait": `url("${
      theme.background.portraitImageUrl ||
      defaultTheme.theme.background.portraitImageUrl
    }")`,
    "background-image-landscape": `url("${
      theme.background.landscapeImageUrl ||
      defaultTheme.theme.background.landscapeImageUrl
    }")`,
  };

  // Apply to :root
  const root = document.documentElement;
  Object.entries(cssVars).forEach(([key, value]) => {
    if (value) {
      root.style.setProperty(`--${key}`, value);
    }
  });
};
