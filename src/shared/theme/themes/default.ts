import {DefaultTheme} from "styled-components";

// https://coolors.co/5386e4-4c4b63-949396-aba8b2-c3c3c3
export const DEFAULT_THEME: DefaultTheme = {
  typography: {
    title: { fontSize: '12rem', fontWeight: '300' },
    subtitle: { fontSize: '7.5rem', fontWeight: '600' },
    heading: { fontSize: '3rem', fontWeight: '400' },
    text: { fontSize: '1.75rem', fontWeight: '400' },
    paragraph: { fontSize: '1.75rem', fontWeight: '400' },
  },
  palette: {
    primary: '#5386e4',
    secondary: '#4c4b63',
    accent: '#aba8b2',

    white: '#fff',
    black: '#000',
  },
  spacing: {
    platform: { margin: '2rem', padding: '2rem' },
  },
};
