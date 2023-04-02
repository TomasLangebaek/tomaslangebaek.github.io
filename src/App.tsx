import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from "./main/main";

const theme = createTheme({
    palette: {
        primary: {
            main: '#671707'
        },
        secondary: {
            main: '#F5ED74'
        },
    },
    typography: {
        "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        h2: {
            "fontFamily": `"Oswald", "Montserrat", "Helvetica", "Arial", sans-serif`,
            "color": "#671707"
        },
        h3: {
            "fontFamily": `"Oswald", "Montserrat","Helvetica", "Arial", sans-serif`,
            "color": "#671707"
        },
        h4: {
            "fontFamily": `"Oswald", "Montserrat","Helvetica", "Arial", sans-serif`,
            "color": "#671707"
        },
    }
});

function App() {
    return (
            <ThemeProvider theme={theme}>
                <Main/>
            </ThemeProvider>
    );
}

export default App;
