import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";

import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

// https://astro.build/config
export default defineConfig({
  site: "https://dgilleland.github.io",
  integrations: [expressiveCode({
    plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
    defaultProps: {
      // Disable line numbers by default
      showLineNumbers: false,
      // But enable line numbers for certain languages
      overridesByLang: {
        'js,ts,html': {
          showLineNumbers: true,
        },
      },
    },
  }), mdx(), sitemap(), solidJs(), tailwind({
    applyBaseStyles: false
  }), icon()]
});