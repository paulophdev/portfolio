import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import dark from "./assets/styles/themes/dark";
import GlobalStyle from "./assets/styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={dark}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
