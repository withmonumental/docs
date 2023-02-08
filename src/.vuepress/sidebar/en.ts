import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Get Started",
      prefix: "started/",
      children: "structure",
    },
    {
      text: "Guides",
      prefix: "guides/",
      children: "structure",
    },
    {
      text: "Legal",
      prefix: "legal/",
      children: "structure",
    },
    {
      text: "Original",
      prefix: "original/",
      children: "structure",
    },
    "slides",
  ],
});
