import "./App.css";
import { useState } from "react";
import themeConfig from "./theme/themeConfig";
import { ThemeProvider, CssBaseline } from "@mui/material";
import LoginPage from './components/authentication/LoginPage';
import SignupPage from "./components/authentication/SignupPage";
import { BrowserRouter, Routes, Route, Router } from "react-router";
import OrganizerDashboard from "./components/organizer-dashboard/OrganizerDashboard";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
      <ThemeProvider theme={themeConfig(mode)}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OrganizerDashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
