import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors: Object = {
  black: "#1c1c1c",
  beige: { main: "#dfd7af", faded: "#444444" },
};
const theme = extendTheme({ config, colors });

export default theme;
