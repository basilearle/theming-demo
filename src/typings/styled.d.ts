// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {

  export interface DefaultThemeTypography {
    fontSize: string;
    fontWeight: string;
  }

  export interface DefaultThemeSpacing {
    margin?: string;
    padding?: string;
  }

  export interface DefaultTheme {
    typography: {
      title: DefaultThemeTypography;
      subtitle: DefaultThemeTypography;
      heading: DefaultThemeTypography;
      text: DefaultThemeTypography;
      paragraph: DefaultThemeTypography;
    };

    palette: {
      primary: string;
      secondary: string;
      accent: string;

      white: string;
      black: string;
    };

    spacing: {
      platform: DefaultThemeSpacing;
    };
  }
}
