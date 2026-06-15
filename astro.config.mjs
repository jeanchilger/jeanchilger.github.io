// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    expressiveCode({
      themes: ['nord'],
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
      styleOverrides: {
        codeFontSize: '0.75rem',
        borderColor: 'var(--border)',
        borderRadius: '0.25rem',
        borderWidth: '0',
        codeFontFamily: 'var(--font-mono)',
        frames: {
          editorActiveTabForeground: 'var(--muted-foreground)',
          editorActiveTabBackground: 'color-mix(in oklab, var(--muted) 25%, transparent)',
          editorActiveTabIndicatorBottomColor: 'transparent',
          editorActiveTabIndicatorTopColor: 'transparent',
          editorTabBorderRadius: '0',
          editorTabBarBackground: 'transparent',
          editorTabBarBorderBottomColor: 'transparent',
          frameBoxShadowCssValue: 'none',
          terminalBackground: 'color-mix(in oklab, var(--muted) 25%, transparent)',
          terminalTitlebarForeground: 'var(--muted-foreground)',
          inlineButtonBackgroundHoverOrFocusOpacity: '0.09',
          inlineButtonBackgroundActiveOpacity: '0.1',
          tooltipSuccessBackground: 'var(--color-dark)',
        },
        lineNumbers: {
          foreground: 'var(--muted-foreground)',
        },
        uiFontFamily: 'var(--font-sans)',
      },
    }),
    mdx(),
  ],

  markdown: {
    syntaxHighlight: false,
  }
});
