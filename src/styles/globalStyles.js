import { createGlobalStyle, css } from 'styled-components';

const baseStyles = css`
  * {
    box-sizing: border-box;
    border-color: ${(props) => props.theme.border};
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.foreground};
    margin: 0;
    padding: 0;
    line-height: 1.6;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${baseStyles}
`;

export default GlobalStyles;