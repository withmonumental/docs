import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({
    base: "/",

    head: [
        ['link', {rel: 'icon', href: '/logo.png'}]
    ],

    locales: {
        "/": {
            lang: "en-US",
            description: "Brings your valuable artworks to light",
        }
    },

    plugins: [
        seoPlugin({
        }),
    ],

    theme,

    shouldPrefetch: false,
});
