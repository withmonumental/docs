import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

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
    ],

    theme,

    shouldPrefetch: false,
});
