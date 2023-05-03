import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";
import { themeSettings } from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '@/scenes/navbar'
import Dashboard from "./scenes/dashboard";
import Predictions from "./scenes/predictions";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem"> 
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
