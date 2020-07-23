import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif !important;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    height: 100%;
  }

  #root {
    flex: 1;
    margin: 0 auto;
    width: 100vw;
  }

  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    letter-spacing: 0;
    line-height: 48px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    letter-spacing: 0;
    line-height: 40px;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 32px;
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    letter-spacing: 0;
    line-height: 28px;
  }

  h5 {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 24px;
  }

  p, span, label {
    display: block;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 20px;
  }

  label {
    padding: 16px 0 8px 0;
  }

  b {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  input {
    min-width: 100px;
  }

  button {
    outline: none;
    border: none;
  }
`;

