// src/MuiTheme.js
import { createTheme } from '@mui/material/styles';

const JirehTechTheme = createTheme({
    palette: {
        // Dark Blue for primary elements (like the Footer and E&M section background)
        primary: {
            main: '#042161',
        },
        // Red Accent for CTAs and highlights
        secondary: {
            main: '#E53E3E',
        },
        background: {
            default: '#FFFFFF',
            paper: '#FFFFFF',
        },
    },
    typography: {
        h1: {
            fontSize: '3.5rem',
            fontWeight: 800,
            '@media (max-width:600px)': {
                fontSize: '2rem',
            },
            '@media (min-width:600px) and (max-width:960px)': {
                fontSize: '2.5rem',
            },
        },
        h2: {
            fontSize: '3rem',
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '1.75rem',
            },
            '@media (min-width:600px) and (max-width:960px)': {
                fontSize: '2.25rem',
            },
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 700,
            '@media (max-width:600px)': {
                fontSize: '1.5rem',
            },
            '@media (min-width:600px) and (max-width:960px)': {
                fontSize: '1.75rem',
            },
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            '@media (max-width:600px)': {
                fontSize: '1.25rem',
            },
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: '1.1rem',
            },
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 500,
            '@media (max-width:600px)': {
                fontSize: '0.95rem',
            },
        },
        body1: {
            fontSize: '1rem',
            '@media (max-width:600px)': {
                fontSize: '0.9rem',
            },
        },
        body2: {
            fontSize: '0.875rem',
            '@media (max-width:600px)': {
                fontSize: '0.8rem',
            },
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                },
            },
        },
    },
});

export default JirehTechTheme;