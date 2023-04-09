import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa';
import logo from "../assets/logos/LB_01.png"

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://wa.me/573157659580">
                La Buganvilia
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
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="black"
                    component="p"
                >
                    <Link href="https://www.instagram.com/labuganviliasachica/" target="_blank" rel="noopener" variant="subtitle1" color="#000000"  sx={{
                        marginRight: '2rem',
                    }}>
                        <FaInstagram size={50}/>
                    </Link>
                    <Link href="https://www.facebook.com/profile.php?id=100091454829327" target="_blank" rel="noopener" variant="subtitle1" color="#000000" sx={{
                        marginRight: '2rem',
                    }}>
                        <FaFacebook size={50}/>
                    </Link>
                    <Link href="https://wa.me/573157659580" target="_blank" variant="subtitle1" color="#000000" sx={{
                        marginRight: '1rem',
                    }}>
                        <FaWhatsapp size={50}/>
                    </Link>
                </Typography>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
                    <img src={logo} alt='imageGallery' style={{ width: "350px"}}/>
                </div>
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    fontSize={20}
                >
                    E-Mail: contacto@labuganviliasachica.com
                </Typography>
             <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    fontSize={20}
                >
                    RNT: 00000
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    fontSize={20}
                >
                    WhatsApp: +57 315 7659580
                </Typography>
                <br/>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}