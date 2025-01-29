import { LinearProgress, Typography } from "@mui/material";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const score = zxcvbn(password).score;
  const strength = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  const colors = ["error", "warning", "info", "success", "primary"];

  return (
    <>
      <LinearProgress variant="determinate" value={(score + 1) * 20} color={colors[score]} />
      <Typography variant="body2">{strength[score]}</Typography>
    </>
  );
};

export default PasswordStrengthMeter;
