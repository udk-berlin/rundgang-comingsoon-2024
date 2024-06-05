import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/constants.ts',
  ],
  theme: {
    screens: {
      xl: '1921px',
      lg: '1920px',
      md: '1463px',
      sm: '998px',
      xs: '764px',
      xxs: '648px',
    },
    colors: {
      initial: '#000',
      primary: 'rgb(var(--primary))',
      secondary: 'rgb(var(--secondary))',
      highlight: '#00ffa1',
      grey: '#888888',
      black: '#000',
      white: '#fff',
    },
    fontSize: {
      '2xl': [
        '6rem',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      xl: [
        '4rem',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      lg: [
        '3rem',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      md: [
        '2.5rem',
        {
          letterSpacing: '1',
          lineHeight: '1',
        },
      ],
      sm: [
        '16px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '500',
        },
      ],
      xs: [
        '14px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
      xxs: [
        '12px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
      xxxs: [
        '10px',
        {
          letterSpacing: '1',
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
    },
    extend: {
      height: {
        sm: '35px',
        md: '50px',
        footer: '4rem',
        header: '4rem',
        content: 'calc(100vh - 8rem)',
      },
      borderRadius: {
        md: '4px',
      },
      borderWidth: {
        sm: '1px',
        md: '2px',
      },
      spacing: {
        'gutter-xxs': '5px',
        'gutter-xs': '8px',
        'gutter-sm': '12px',
        'gutter-md': '20px',
        'gutter-lg': '50px',
        border: '2px',
      },
      gridTemplateRows: {
        'coming-soon-sm':
          'calc(0.3 * calc(100vh - 8rem)) calc(0.4 * calc(100vh - 8rem)) calc(0.3 * calc(100vh - 8rem))',
        'coming-soon-md':
          'calc(0.25 * calc(100vh - 8rem)) calc(0.5 * calc(100vh - 8rem)) calc(0.25 * calc(100vh - 8rem))',
      },
      fontFamily: {
        jungka: ['var(--font-jungka)', 'var(--font-noto)', 'sans-serif'],
        noto: ['var(--font-noto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
