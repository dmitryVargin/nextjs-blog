const theme = require('./config/theme.json');

let font_base = 16;
let font_scale = 1.25;

let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
        secondary: theme.colors.default.theme_color.secondary,
        body: theme.colors.default.theme_color.body,
        border: theme.colors.default.theme_color.border,
        'theme-light': theme.colors.default.theme_color.theme_light,
        'theme-dark': theme.colors.default.theme_color.theme_dark,
      },
      fontSize: {
        base: font_base + 'px',
        h1: h1 + 'rem',
        'h1-sm': h1 * 0.8 + 'rem',
        h2: h2 + 'rem',
        'h2-sm': h2 * 0.8 + 'rem',
        h3: h3 + 'rem',
        'h3-sm': h3 * 0.8 + 'rem',
        h4: h4 + 'rem',
        h5: h5 + 'rem',
        h6: h6 + 'rem',
      },
      fontFamily: {
        primary: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
