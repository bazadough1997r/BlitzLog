import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: Helvetica;
  font-size: 1.6rem;
  line-height: 1.6;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  display: "none";
}

::-webkit-scrollbar-track {
  background: #dcdcdc;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #161d29;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fd8f4c;
}
`;

export default GlobalStyles;
