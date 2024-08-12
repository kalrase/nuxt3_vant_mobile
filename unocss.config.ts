import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts(),
    presetRemToPx({
      baseFontSize: 4,
    }),
  ],
  shortcuts: [
    // ...
  ],

  rules: [
    [/^ww-(\d+)$/, ([, d]) => ({ width: `${d}px` })],
    [/^hh-(\d+)$/, ([, d]) => ({ height: `${d}px` })],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
