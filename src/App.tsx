import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
