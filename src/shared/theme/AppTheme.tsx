import { PropsWithChildren } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import deepmerge from "deepmerge";

import {DEFAULT_THEME} from "./themes/default";
import {DARK_THEME} from "./themes/dark";

// The different supported themes in the application
export type Themes = 'default' | 'dark';

// The physical mapping of the theme names to the values
const themeMap: Record<Themes, DefaultTheme> = {
  default: DEFAULT_THEME,
  // Allow other themes to simply override what they need to from the default, instead of re-inventing the wheel each time.
  dark: deepmerge(DEFAULT_THEME, DARK_THEME),
};

export interface ThemeProviderProps {
  theme?: Themes;
}

export const AppTheme: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
   theme = 'default',
   children,
}) => {
  return (
    // Allow inner components to read custom override styles
    <ThemeProvider theme={themeMap[theme]}>
      {/* Allow inner components to read custom override styles */}
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
