import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/useAuth";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
