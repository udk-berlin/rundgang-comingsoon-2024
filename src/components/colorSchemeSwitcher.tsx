'use client';

import { useEffect, useState } from 'react';

export const ColorSchemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const currentIsDark =
      (localStorage.theme !== undefined && localStorage.theme === 'dark') ||
      (localStorage.theme === undefined &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    const theme = currentIsDark ? 'dark' : 'light';

    document.documentElement.classList.add(theme);

    localStorage.theme = theme;

    // @ts-ignore
    document.querySelector(':root').dataset.theme = theme;

    setIsDark(currentIsDark);
  }, []);

  const toggleDarkMode = () => {
    const previousTheme = isDark ? 'dark' : 'light';
    const theme = isDark ? 'light' : 'dark';

    document.documentElement.classList.remove(previousTheme);
    document.documentElement.classList.add(theme);

    localStorage.theme = theme;

    // @ts-ignore
    document.querySelector(':root').dataset.theme = theme;

    setIsDark(!isDark);
  };

  return (
    <div className="h-[42px] max-h-[42px] min-h-[42px] w-[42px] min-w-[42px] max-w-[42px] bg-secondary">
      <button
        onClick={toggleDarkMode}
        aria-label="dark mode"
        className="bg-primary p-[0.25rem] sm:hover:bg-highlight"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-secondary"
        >
          <path d="M32.9199 19.688H23.5119L30.2319 26.408L26.3279 30.184L19.6719 23.528V33L14.2319 32.936V23.528L7.51192 30.248L3.73592 26.344L10.3919 19.688H0.919922V14.248H10.3919L3.67192 7.52798L7.51192 3.68797L14.2319 10.408V0.935974H19.6719V10.408L26.3919 3.68797L30.2319 7.52798L23.5119 14.248H32.9199V19.688Z" />
        </svg>
      </button>
    </div>
  );
};
