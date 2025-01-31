import { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { auth, googleProvider, githubProvider } from "../dependency/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, setAuthType } from "../../store/slices/authSlice";
import { useDemoRouter } from "@toolpad/core/internal";

const LoginForm = ({router}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUpClick = () => {
    dispatch(
      setAuthType({ authType: "signup" })
    )
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Logged in successfully!");
      dispatch(login({isAuthenticated: true}))
      router.navigate("/dashboard"); // Only navigate after successful login
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("Logged in successfully!");
      dispatch(login({isAuthenticated: true}))
      router.navigate("/dashboard");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%"
      }}
    >
      <Card sx={{ maxWidth: 550, p: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Log In
          </Typography>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            sx={{ mt: 2 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            sx={{ mt: 2 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
            }}
            onClick={handleLogin}
          >
            Log In
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              py: 1,
              borderRadius: 2,
            }}
            onClick={handleSignUpClick}
          >
            Not a Member? Sign Up...
          </Button>

          <Divider sx={{ my: 3 }}>OR</Divider>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              py: 1,
              borderRadius: 2,
            }}
            onClick={() => handleSocialLogin(googleProvider)}
          >
            <GoogleIcon /> Log in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mt: 2,
              py: 1,
              borderRadius: 2,
            }}
            onClick={() => handleSocialLogin(githubProvider)}
          >
            <GitHubIcon /> Log in with GitHub
          </Button>
          {message && (
            <Typography color="error.main" align="center" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
