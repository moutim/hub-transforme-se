'use client';

import { useModeAnimation, ThemeAnimationType } from 'react-theme-switch-animation';
import { useEffect } from 'react';
import styles from './theme-toggle.module.css';

export default function ThemeToggle({ textVisible = true }: { textVisible: boolean }) {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.BLUR_CIRCLE
  });

  useEffect(() => {
    const html = document.documentElement;

    if (isDarkMode) {
      html.setAttribute('data-theme', 'dark');
      html.classList.add('theme-dark');
    } else {
      html.setAttribute('data-theme', 'light');
      html.classList.remove('theme-dark');
    }
  }, [isDarkMode]);

  return (
    <div className="is-flex is-align-items-center" suppressHydrationWarning>
      <button
        ref={ref}
        onClick={toggleSwitchTheme}
        className="button is-ghost is-medium"
        aria-label="Toggle dark mode"
        suppressHydrationWarning
      >
        <span className={`icon ${isDarkMode ? 'has-text-info' : 'has-text-warning'}`} suppressHydrationWarning>
          <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'} fa-lg`} suppressHydrationWarning></i>
        </span>
      </button>

      <p suppressHydrationWarning>{textVisible ? isDarkMode ? 'Modo escuro' : 'Modo claro' : false}</p>
    </div>

  );
}
