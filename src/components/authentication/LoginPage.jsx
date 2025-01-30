import { useState } from "react";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import { getTheme } from "../dependency/theme";
import Header from "../signup/Header";
import LoginForm from "../signup/LoginForm";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  return (
    <ThemeProvider theme={getTheme(darkMode)}>
      <CssBaseline />
      <Header toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Container sx={{ mt: 4 }}>
        {signedIn ? (
          <h2>Logged in successfully!</h2>
        ) : (
          <LoginForm onSignIn={() => setSignedIn(true)} />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
