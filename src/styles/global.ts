import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root, #root>div {
  min-height: 100vh;
  }
  body, input, button {
    font-family: "Rubik", sans-serif;
  }
  a {
    text-decoration: none;
  }
`;
