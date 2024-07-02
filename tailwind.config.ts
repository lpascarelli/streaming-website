import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    //@ts-ignore
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollable-panel': {
            'overflow-x': 'scroll',
          },
          '.scrollable-panel::-webkit-scrollbar': {
            height: '8px',
          },
          '.scrollable-panel::-webkit-scrollbar-thumb': {
            background: '#888',
            'border-radius': '2px',
          },
          '.scrollable-panel::-webkit-scrollbar-track': {
            background: '#f1f1f1',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
export default config;
