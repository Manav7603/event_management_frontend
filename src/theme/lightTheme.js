import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            default: '#ffffff',
            paper: '#f4f4f4',
        },
        text: {
            primary: '#000000',
            secondary: '#333333',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },

});

export default lightTheme;
