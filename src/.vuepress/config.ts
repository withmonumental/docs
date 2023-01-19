import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Monumental",
      description: "A docs demo for vuepress-theme-hope",
    }
  },

  theme,

  shouldPrefetch: false,
});
