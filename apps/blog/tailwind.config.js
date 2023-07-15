import { nextui } from '@nextui-org/theme';

const pnp = require('pnpapi');

let nextUiTheme;
try {
  nextUiTheme = pnp.resolveToUnqualified('@nextui-org/theme', process.cwd());
  console.log(nextUiTheme);
} catch (error) {
  console.error('Failed to resolve @nextui-org/theme', error);
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    nextUiTheme ? `${nextUiTheme}/dist/**/*.{js,ts,jsx,tsx}` : null,
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui()],
};
