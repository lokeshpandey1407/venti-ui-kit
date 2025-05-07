export const defaultTheme = {
  theme: {
    header: {
      companyLogo: {
        imageUrl: "https://example.com/logo.png",
        size: "md", // keep "md" for visual balance
        alignment: "left",
      },
      eventLogo: {
        imageUrl: "https://example.com/event.png",
        size: "md",
        alignment: "right",
      },
    },
    footer: {
      iconUrls: [], // Optional: add sponsor icons if needed
    },
    themeColors: {
      primary: "#3B82F6", // Modern blue (Tailwind blue-500)
      secondary: "#6366F1", // Indigo (Tailwind indigo-500)
    },
    typography: {
      headingFont: {
        type: "custom",
        family: "Roboto", // Clean and modern font
        variants: {
          bold: "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf",
        },
      },
      bodyFont: {
        type: "google",
        family: "Roboto", // Very readable and modern
        variants: {
          regular:
            "https://fonts.gstatic.com/s/roboto/v47/KFOMCnqEu92Fr1ME7kSn66aGLdTylUAMQXC89YmC2DPNWubEbWmTggvWl0Qn.ttf",
        },
      },
      typeScales: {
        heading: {
          font: "heading",
          color: "#393939", // Dark gray for strong contrast
        },
        subHeading: {
          font: "body",
          color: "#374151", // Muted gray
        },
        body: {
          color: "#4B5563", // Balanced readability
        },
        caption: {
          color: "#6B7280", // Lighter gray for less emphasis
        },
      },
    },
    buttons: {
      primary: {
        textColor: "#FFFFFF",
        rounded: "lg",
        borderThickness: "lg",
      },
      secondary: {
        textColor: "#1F2937", // Almost black for contrast on lighter buttons
        rounded: "sm",
        borderThickness: "sm",
      },
    },
    surfaces: {
      color: "red",
      rounded: "md",
      borderThickness: "sm",
      borderColor: "#E5E7EB", // Light neutral border
    },
    background: {
      color: "#F9FAFB", // Very light gray for soft backgrounds
      portraitImageUrl: "https://example.com/bg-portrait-new.jpg",
      landscapeImageUrl: "https://example.com/bg-landscape-new.jpg",
    },
  },
};
