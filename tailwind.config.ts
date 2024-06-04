import type { Config } from 'tailwindcss';

const config: Config = {
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
      md: '1460px',
      sm: '995px',
      xs: '762px',
      xxs: '450px',
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
      gridTemplateColumns: {
        footer: 'repeat(3,minmax(200px, 1fr))',
        header: 'repeat(5,minmax(200px, 1fr))',
        headerinfo: 'minmax(100px, 1fr) 50px 50px 50px',
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
