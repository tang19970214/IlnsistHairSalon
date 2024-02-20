import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  shortcuts: {},
  rules: [],
  theme: {
    colors: {},
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
  },
  presets: [
    presetUno(),
  ],
})