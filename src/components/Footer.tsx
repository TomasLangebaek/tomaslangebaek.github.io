import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                LaBugamvilia
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Footer() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h4" align="center" gutterBottom>
                    Contáctanos
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="black"
                    component="p"
                >
                    <Link href="#" variant="subtitle1" color="#000000"  sx={{
                        marginRight: '1rem',
                    }}>
                        <FaInstagram size={50}/>
                    </Link>
                    <Link href="#" variant="subtitle1" color="#000000" sx={{
                        marginRight: '1rem',
                    }}>
                        <FaFacebook size={50}/>
                    </Link>
                    <Link href="#" variant="subtitle1" color="#000000" sx={{
                        marginRight: '1rem',
                    }}>
                        <FaWhatsapp size={50}/>
                    </Link>
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    E-Mail: info@correoelectronico.com
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    RNT: 00000
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    WhatsApp: +57 999 999 9999
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}