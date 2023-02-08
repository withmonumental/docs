import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      description: "Brings your valuable artworks to light",
    }
  },

  //plugins: [
  //  searchPlugin({
  //    // options
//  }),
  // ],

  theme,

  shouldPrefetch: false,
});
