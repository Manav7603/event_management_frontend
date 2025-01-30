import { useState } from "react";
import { TextField, Button, Typography, Box, Card, CardContent, Divider } from "@mui/material";
import { auth, googleProvider, githubProvider } from "../dependency/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth"; // Import sendEmailVerification

const SignupForm = ({ onSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For navigation after signup
  
  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {
      // Create a user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user); // Send the verification email

      setMessage("Signed up successfully! Please check your inbox for a verification email.");
      onSignIn();
      navigate("/login"); // Redirect to login page after signup
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      setMessage("Signed in successfully!");
      onSignIn();
      navigate("/login"); // Redirect to login page after social login
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
        height: "100vh",
        width: "100vw",
      }}
    >
      <Card sx={{ maxWidth: 400, p: 3, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
            Sign Up
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
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            sx={{ mt: 2 }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <PasswordStrengthMeter password={password} />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
            }}
            onClick={handleSignup}
          >
            Sign Up
          </Button>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              py: 1,
              borderRadius: 2,
            }}
            onClick={() => navigate("/login")} // Redirect to login page
          >
            Already a Member? Login...
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
            <GoogleIcon /> Sign in with Google
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
            <GitHubIcon /> Sign in with GitHub
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

export default SignupForm;
