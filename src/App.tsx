import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Routes from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./context/useAuth";
import { ColumnsProvider } from "./context/useColumns";
import { TaskProvider } from "./context/useTasks";

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <ColumnsProvider>
        <TaskProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </TaskProvider>
      </ColumnsProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
