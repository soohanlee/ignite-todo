export const theme = Object.freeze({
  colors: {
    white: "#fff",
    cornflowerblue: "#6495ed",
    offWhite: "#f2f2f2",
    lightGray: "#879292",
    darkGray: "#333",
    gray: "#ccc",
    red: "#ff0000",
    lightRed: "#dd4d4d",
    black: "#000",
  },
  fontSizes: {
    xs: "1.1rem",
    sm: "1.2rem",
    md: "1.4rem",
    lg: "1.6rem",
    xl: "2rem",
    xxl: "2.4rem",
  },
  maxWidth: "80rem",
  breakpoints: {
    xs: "360px",
    sm: "480px",
    md: "600px",
    lg: "768px",
    xl: "1024px",
  },
});

export type TfontSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
