import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

    title : "Monumental Docs",
    description : "Monumental guide for monumental users",
    base: "/docs/",
    dest: "public",
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
