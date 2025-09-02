import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    white: "white",
    grey: "#24292e",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 20,
  },
  fonts: Platform.select({
    android: "Roboto",
    ios: "Arial", // Untested: no ios device available for testing
    default: "system",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
