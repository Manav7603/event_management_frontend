import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Header = ({ toggleTheme, darkMode }) => {
    return (
      <AppBar position="static" sx={{ width: "100vw", left: 0, right: 0 }}>
        <Toolbar sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Event Management
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  };
  
export default Header;
