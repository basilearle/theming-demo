import {DefaultTheme} from "styled-components";

export const DARK_THEME: Partial<DefaultTheme> = {
  typography: {
    title: { fontSize: '6rem', fontWeight: '300' },
    subtitle: { fontSize: '3.75rem', fontWeight: '600' },
    heading: { fontSize: '3rem', fontWeight: '400' },
    text: { fontSize: '1rem', fontWeight: '400' },
    paragraph: { fontSize: '1rem', fontWeight: '400' },
  },
  palette: {
    primary: '#ea2b1f',
    secondary: '#b0e298',
    accent: '#3d3b8e',

    white: '#ccc',
    black: '#666',
  },
  spacing: {
    platform: { margin: '2rem', padding: '2rem' },
  },
};
