import { useState } from "react";
import { Container } from "@mui/material";
import SignupForm from "../signup/SignupForm";

const SignupPage = ({router}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  return (
    // <ThemeProvider theme={getTheme(darkMode)}>
    <>
      {/* <CssBaseline /> */}
      {/* <Header  /> */}
      <Container>{signedIn ? <h2>Signed in successfully!</h2> : <SignupForm router={router} onSignIn={() => setSignedIn(true)} />}</Container>
    
    </>
  );
};

export default SignupPage;
