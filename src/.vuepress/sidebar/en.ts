import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "star",
      text: "Getting Started",
      prefix: "monumental/",
      link: "monumental/",
      children: "structure",
    },
    {
      icon: "star",
      text: "FAQ",
      prefix: "faq/",
      link: "faq/",
      children: "structure",
    },
    {
      text: "Legal",
      icon: "note",
      prefix: "legal/",
      children: "structure",
    },
    "slides",
  ],
});
