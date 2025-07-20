import { ref, onMounted, watch } from 'vue';

// Key used to persist the theme in localStorage
const THEME_KEY = 'theme';

type Theme = 'light' | 'dark';

/**
 * Reactive dark / light theme management composable.
 * Adds / removes the `dark` class on <html> to let Tailwind switch themes.
 * Persists user choice in localStorage.
 */
export const useTheme = () => {
  const theme = ref<Theme>('light');

  const applyTheme = (value: Theme) => {
    if (typeof document === 'undefined') return; // SSR safeguard
    document.documentElement.classList.toggle('dark', value === 'dark');
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  };

  onMounted(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme | null) ?? undefined;
    if (stored === 'dark' || stored === 'light') {
      theme.value = stored;
    }
    applyTheme(theme.value);
  });

  watch(theme, (newVal) => {
    localStorage.setItem(THEME_KEY, newVal);
    applyTheme(newVal);
  });

  return {
    theme,
    toggleTheme,
  };
};
