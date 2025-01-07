import { defineConfig, defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
  h1: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "800",
      fontSize: "6xl",
      fontStyle: "normal",
    },
  },
  h2: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "800",
      fontSize: ["32", null, "44"],
      fontStyle: "normal",
      lineHeight: "1",
    },
  },
  h3: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "900",
      fontSize: ["40", null, "32", "40"],
      fontStyle: "normal",
      lineHeight: "1",
      textTransform: "capitalize",
    },
  },
  h4: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "800",
      fontSize: "24",
      fontStyle: "normal",
      lineHeight: "1",
      textTransform: "capitalize",
    },
  },
  h5: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "600",
      fontSize: "20",
      fontStyle: "normal",
      lineHeight: "1",
    },
  },
  h6: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "600",
      fontSize: "18px",
      fontStyle: "normal",
      lineHeight: "1",
    },
  },
  p: {
    description: "The heading style",
    value: {
      fontFamily: "var(--font-mukta), sans-serif",
      fontWeight: "400",
      fontSize: "16",
      fontStyle: "normal",
      lineHeight: "1",
    },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      tokens: {
        colors: {
          bingo: {
            blue: { value: "#0017AC" },
            red: { value: "#C50303" },
            green: { value: "#018A16" },
            yellow: { value: "#FFCC00" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  // The JSX framework to use
  jsxFramework: "react",
});
