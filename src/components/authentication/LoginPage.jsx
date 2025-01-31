import { useState } from "react";
import Header from "../signup/Header";
import LoginForm from "../signup/LoginForm";
import { getTheme } from "../dependency/theme";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";

const LoginPage = ({ router }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  return (
    <>
      <Container sx={{ mt: 4 }}>
        {signedIn ? (
          <h2>Logged in successfully!</h2>
        ) : (
          <LoginForm router={router} onSignIn={() => setSignedIn(true)} />
        )}
      </Container>
    </>
  );
};

export default LoginPage;
