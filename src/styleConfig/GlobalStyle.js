import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
};
body {
  margin: 0;
  font-family: 'Handlee, cursive', 
    sans-serif;
    color: #000;
    background-color: #E2F4B0;
};
ul {
  list-style: none;
  padding: 0;
};
p, h1, h2, h3, h4, button {
  margin: 0;
  padding: 0;
};
img {
  display: block;
  max-width: 100%;
  height: auto;
};
a {
  text-decoration: none;
};
`;

