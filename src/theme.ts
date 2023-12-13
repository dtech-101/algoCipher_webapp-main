const DefaultThemeColors = {
  GreyscaleSurfaceSubtle: "#F7F8F7",
  GreyscaleSurfaceDefault: "#B5BBB4",
  GreyscaleSurfaceDisabled: "#6A7368",
  GreyscaleSurfaceBtBackground: "#111311",
  GreyscaleBorderDefault: "#B5BBB4",
  GreyscaleBorderDisabled: "#D2D6D2",
  GreyscaleBorderDarker: "#6A7368",
  GreyscaleTextIconTitle: "#111311",
  GreyscaleTextIconBody: "#222522",
  GreyscaleTextIconSubtitle: "#6A7368",
  GreyscaleTextIconCaption: "#90998F",
  GreyscaleTextIconNegative: "#F7F8F7",
  GreyscaleTextIconDisabled: "#B5BBB4",
  Grey50: "#F7F8F7",
  Grey100: "#EFF0EF",
  Grey200: "#E2E4E2",
  Grey500: "#B5BBB4",
  Green800: "#020A00",
  Green900: "#031400",
  ButtonsSurfacePrimary: "#117000",
  ButtonsSurfacePrimaryHover: "#0E5C00",
  ButtonsSurfaceSecondary: "#111311",
  ButtonsSurfaceSecondaryHover: "#474E46",
  ButtonsSurfaceDisabled: "#6A7368",
  ButtonsSurfaceSubtitle: "#F7F8F7",
  ButtonsBorderDisabled: "#D2D6D2",
  ButtonsBorderLink: "#297DFD",
  ButtonsTextPrimary: "#F7F8F7",
  ButtonsTextSecondary: "#F7F8F7",
  ButtonsTextDisabled: "#B5BBB4",
  ButtonsTextLink: "#297DFD",
  PrimarySurfaceSubtitle: "#DCFFD6",
  PrimarySurfaceLighter: "#1DC200",
  PrimarySurfaceDefault: "#117000",
  PrimarySurfaceDarker: "#072E00",
  PrimaryBorderSubtitle: "#DCFFD6",
  PrimaryBorderLighter: "#1DC200",
  PrimaryBorderDefault: "#117000",
  PrimaryBorderDarker: "#072E00",
  PrimaryTextIconLabel: "#072E00",
};
export type ThemeState = "Light" | "Dark";

export const LightTheme = {
  ...DefaultThemeColors,
};

export const DarkTheme = {
  ...DefaultThemeColors,
  ButtonsTextPrimary: "blue",
  ButtonsSurfacePrimary: "Black",
  PrimarySurfaceLighter: "gold"
};
