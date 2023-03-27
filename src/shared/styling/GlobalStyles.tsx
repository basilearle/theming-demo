import {createGlobalStyle} from "styled-components";

export const AppStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    // Safari still doesn't play nicely
    -webkit-appearance: none;
  }

  html {
    font-family: 'Open Sans', sans-serif;
    font-size: 8px;
  }
`;
