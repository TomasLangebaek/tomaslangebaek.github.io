import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FaInstagram, FaFacebook, FaWhatsapp, FaTripadvisor, FaAirbnb} from 'react-icons/fa';
import {TbBrandBooking} from 'react-icons/tb';
import logo from "../assets/logos/LB_01.png"
import {SectionText} from "./SectionText";



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
                    variant="h4"
                    align="center"
                >
                    Reservas Casa:
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="black"
                    component="p"
                    sx={{ marginTop: 3 }}
                >
                    <Link href="https://www.booking.com/hotel/co/finca-la-buganvilia-sachica.es.html" target="_blank" rel="noopener" variant="subtitle1" color="#000000"  sx={{
                        marginRight: '2rem',
                    }}>
                        <TbBrandBooking size={50}/>
                    </Link>
                    <Link href="https://www.airbnb.com.co/rooms/898531771156729789?location=Sachica&check_in=2023-07-19&check_out=2023-07-20&source_impression_id=p3_1688430867_XtBGjn6sLHLfc5Bk&previous_page_section_name=1001" target="_blank" variant="subtitle1" color="#000000" sx={{
                        marginRight: '1rem',
                    }}>
                        <FaAirbnb size={50}/>
                    </Link>
                </Typography>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ marginTop: 5 }}
                >
                    Reservas Cabañas:
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="black"
                    component="p"
                    sx={{ marginTop: 3 }}
                >
                    <Link href="https://www.booking.com/hotel/co/cabanas-finca-la-buganvilia.es.html" target="_blank" rel="noopener" variant="subtitle1" color="#000000"  sx={{
                        marginRight: '2rem',
                    }}>
                        <TbBrandBooking size={50}/>
                    </Link>
                    <Link href="https://www.airbnb.com.co/rooms/922429415169069638?adults=2&children=0&enable_m3_private_room=true&infants=0&location=S%C3%A1chica%2C%20Colombia&pets=0&check_in=2023-07-07&check_out=2023-07-12&source_impression_id=p3_1688430565_6TnR%2FwroMDfXqfNi&previous_page_section_name=1001&federated_search_id=907ca8fa-30ab-4e39-9390-661e870645a1" target="_blank" variant="subtitle1" color="#000000" sx={{
                        marginRight: '1rem',
                    }}>
                        <FaAirbnb size={50}/>
                    </Link>
                </Typography>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", marginTop: 40 }}>
                    <img src={logo} alt='imageGallery' style={{ width: "350px"}}/>
                </div>
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
                    <Link href="https://www.tripadvisor.co/Hotel_Review-g3347740-d26164133-Reviews-La_Buganvilia-Sachica_Boyaca_Department.html#REVIEWS" target="_blank" rel="noopener" variant="subtitle1" color="#000000"  sx={{
                        marginRight: '2rem',
                    }}>
                        <FaTripadvisor size={50}/>
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
                  <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    fontSize={20}
                >
                      <a href = "mailto: contacto@labuganviliasachica.com">Email: contacto@labuganviliasachica.com</a>
                </Typography>
             <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                    fontSize={20}
                >
                    RNT: 901500477-3
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