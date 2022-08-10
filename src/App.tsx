import { CssBaseline, Skeleton, Stack, Typography } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider
} from "@mui/material/styles";
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AccountsPage from "./components/AccountsPage";

export default function App() {
  // https://mui.com/material-ui/customization/theming/
  const theme = createTheme(__CLIENT_CONFIG__.theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box sx={{ bgcolor: "background.paper", height: "100vh" }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/accounts/" element={<AccountsPage />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
