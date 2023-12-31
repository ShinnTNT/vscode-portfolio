import { createThemeSlice, ThemeSlice } from "../store/client/themeSlice";
import { create } from "zustand";

export const useStore = create<ThemeSlice>((...a) => ({
  ...createThemeSlice(...a),
}));

export function useThemeStore() {
  const { theme, setTheme, openedThemeBar, toggleThemeBar } = useStore(
    (state) => ({
      theme: state.theme,
      setTheme: state.setTheme,
      openedThemeBar: state.openedThemeBar,
      toggleThemeBar: state.toggleThemeBar,
    })
  );

  return {
    theme,
    setTheme,
    openedThemeBar,
    toggleThemeBar,
  };
}
