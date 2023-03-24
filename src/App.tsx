import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './App.css';
import Footer from "./components/Footer";
import {Video} from "./components/Video";
import {PhotoCarousel} from "./components/PhotoCarousel";
import {SectionText} from "./components/SectionText";
import {DrawerMenu} from "./components/DrawerMenu";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import i1 from './assets/fotosInterior/i1.jpg'
import i2 from './assets/fotosInterior/i2.jpg'
import i3 from './assets/fotosInterior/i3.jpg'
import i4 from './assets/fotosInterior/i4.jpg'
import i5 from './assets/fotosInterior/i5.jpg'
import i6 from './assets/fotosInterior/i6.jpg'
import i7 from './assets/fotosInterior/i7.jpg'
import i8 from './assets/fotosInterior/i8.jpg'
import i9 from './assets/fotosInterior/i9.jpg'
import i10 from './assets/fotosInterior/i10.jpg'
import i11 from './assets/fotosInterior/i11.jpg'
import i12 from './assets/fotosInterior/i12.jpg'
import i13 from './assets/fotosInterior/i13.jpg'
import i14 from './assets/fotosInterior/i14.jpg'
import i15 from './assets/fotosInterior/i15.jpg'

import c1 from './assets/fotosCasa/c1.jpg'
import c2 from './assets/fotosCasa/c2.jpg'
import c3 from './assets/fotosCasa/c3.jpg'

import n1 from './assets/fotosNaturaleza/n1.jpg'
import n2 from './assets/fotosNaturaleza/n2.jpg'
import n3 from './assets/fotosNaturaleza/n3.jpg'
import n4 from './assets/fotosNaturaleza/n4.jpg'
import n5 from './assets/fotosNaturaleza/n5.jpg'
import n6 from './assets/fotosNaturaleza/n6.jpg'
import n7 from './assets/fotosNaturaleza/n7.jpg'

import a1 from '../src/assets/fotosActividades/caminata.jpg'
import a2 from '../src/assets/fotosActividades/villa de leyva.png'
import a3 from '../src/assets/fotosActividades/raquira.png'
import a4 from '../src/assets/fotosActividades/vinedo.jpg'
import a5 from '../src/assets/fotosActividades/estrellas.jpg'
import a6 from '../src/assets/fotosActividades/bicicleta.jpg'

import cb1 from './assets/fotosCabañas/cb1.jpg'
import cb2 from './assets/fotosCabañas/cb2.jpg'
import cb3 from './assets/fotosCabañas/cb3.jpg'
import cb4 from './assets/fotosCabañas/cb4.jpg'
import cb5 from './assets/fotosCabañas/cb5.jpg'
import cb6 from './assets/fotosCabañas/cb6.jpg'


import {Reviews} from "./components/Reviews";
import {Service} from "./components/Service";
import {ImageAndText} from "./components/ImageAndText";
import {DescriptionCasa} from "./components/DescriptionCasa";
import {DescriptionCabanas} from "./components/DescriptionCabanas";
import {PricingSection} from "./components/PricingSection";
import {Map} from "./components/Map";
import Divider from "@mui/material/Divider";

import logo from "./assets/logos/LB_03.png";
import {Box} from "@mui/material";

const theme = createTheme({
    palette: {
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

const photosInterior = [
    i1,
    i2,
    i3,
    i4,
    i5,
    i6,
    i7,
    i8,
    i9,
    i10,
    i11,
    i12,
    i13,
    i14,
    i15,
]

const photosCasa = [
    c1,
    c2,
    c3
]

const photosCabañas1 = [
    cb4,
    cb5,
    cb6
]

const photosCabañas2 = [
    cb1,
    cb2,
    cb3,
]

const photosNaturaleza = [
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7
]

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
            <DrawerMenu/>
                <div style={{ paddingRight: 8 }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={12}>
                    <Video/>
                </Grid>
                <Grid xs={12} md={12}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                        <Box sx={{
                            display: { xs: 'block', sm: 'none' }
                        }}>
                            <img src={logo} alt='imageGallery' style={{ width: "400px"}}/>
                        </Box>
                    </div>
                </Grid>
                <Grid xs={12} md={12} sx={{marginBottom: 6}}>
                    <SectionText title={"Hospedaje en la mejor ubicación de Boyacá, Colombia"} text={"Rodeado de naturaleza, tranquilidad y lugares turísticos"}/>
                </Grid>
                <div id='La Casa'></div>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={photosInterior} duration={1500}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={"La casa"} text={"La estadía en la casa de la finca es una experiencia relajante y alejada del bullicio de la ciudad. Disfrutarás de la tranquilidad de la naturaleza, del aire fresco y conectarte con la belleza natural que la rodea. Está totalmente equipada y a su alrededor se pueden realizar actividades al aire libre, como caminatas y paseos en bicicleta. "}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <DescriptionCasa/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={0}>
                    <PhotoCarousel items={photosCasa} duration={1000}/>
                </Grid>
                <Grid xs={12} md={12} sx={{marginBottom: 1}}>
                    <SectionText title={"Servicios de la casa"}/>
                </Grid>
                <Grid xs={5} xsOffset={1} md={2} mdOffset={1}>
                    <Service nombre={"Wifi"} descripcion={"Servicio de WIFI"} icon={"wifi"}/>
                </Grid>
                <Grid xs={5} md={2}>
                    <Service nombre={"Servicio doméstico"} descripcion={"De 8 am a 4pm"} icon={"empleada"}/>
                </Grid>
                <Grid xs={5} xsOffset={1} md={2} mdOffset={0}>
                    <Service nombre={"Televisión"} descripcion={"Servicio de DirectTV"} icon={"tv"}/>
                </Grid>
                <Grid xs={5} md={2} sx={{marginBottom: 6}}>
                    <Service nombre={"Dog Friendly"} descripcion={"Sus perros son bienvenidos"} icon={"dog"}/>
                </Grid>
                <Grid xs={5} xsOffset={4} md={2} mdOffset={0}>
                    <Service nombre={"Ping Pong"} descripcion={"Tennis de Mesa"} icon={"ping pong"}/>
                </Grid>
                <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <div id='Cabañas'></div>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={photosCabañas1} duration={1500}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={"Cabañas -En Construcción"} text={"Si estás buscando una experiencia en un entorno natural, nuestras cabañas son el lugar perfecto para ti. Están diseñadas para proporcionar una experiencia de campo auténtica, sin sacrificar las comodidades modernas. Tienen todo lo que necesitas para disfrutar de una estadía cómoda con baño y una cocina totalmente equipada. Mientras estés aquí, podrás disfrutar de la belleza del paisaje y participar en actividades emocionantes como caminatas y senderismo en las montañas cercanas. "}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <DescriptionCabanas/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={0}>
                    <PhotoCarousel items={photosCabañas2} duration={1000}/>
                </Grid>
                <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <div id='Ubicación'/>
                <Grid xs={12} md={5} mdOffset={1}>
                    <SectionText title={"Ubicación"} text={"Sáchica es un municipio ubicado en el departamento de Boyacá, en la zona central de Colombia. Se encuentra a una altitud de 2.260 metros sobre el nivel del mar, y su clima es templado y seco. El municipio de Sáchica está rodeado de hermosas montañas y valles, lo que lo convierte en un lugar ideal para disfrutar de la naturaleza y realizar actividades al aire libre. Se encuentra a 10 kilómetros al sur de Villa de Leyva y a 143 kilómetros al norte de Bogotá.."}/>
                </Grid>
                <Grid xs={12} md={5} sx={{marginBottom: 6}}>
                    <Map/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={photosNaturaleza} duration={1000}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={"Naturaleza"} text={"La finca tiene un campo amplio donde se pueden avistar múltiples especies de pájaros que habitan la flora de los alrededores. Existen senderos en los cuáles se pueden realizar caminatas y disfrutar del aire libre y la tranquilidad del lugar.."}/>
                </Grid>
                <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <div id='Actividades'></div>
                <Grid xs={12} md={12} sx={{marginBottom: 3}}>
                    <SectionText title={"Actividades"} text={"Para realizar en la finca y sus alrededores"}/>
                </Grid>
                <Grid xs={12} md={4}  mdOffset={2}>
                    <ImageAndText title={"Caminatas"} text={"Hay senderos en la finca donde se puede realizar caminatas. Además, es posible aventurarse y explorar senderos cercanos y realizar senderismo los cerros de alrededor con toda tranquilidad."} image={a1}/>
                </Grid>
                <Grid xs={12} md={4}>
                    <ImageAndText title={"Montar Bicicleta"} text={"El terreno y clima son ideales para montar en bicicleta. Puedes llevar la tuya bicicleta y realizar paseos dentro de la finca.."} image={a6}/>
                </Grid>
                <Grid xs={12} md={4} mdOffset={2}>
                    <ImageAndText title={"Ver estrellas"} text={"Sáchica es una zona desértica, lo que permite tener un cielo estrellado  totalmente despejado la mayor parte del tiempo.\n."} image={a5}/>
                </Grid>
                <Grid xs={12} md={4}>
                    <ImageAndText title={"Villa de Leyva"} text={"La Buganvilia está ubicada a 15 minutos en carro de Villa de Leyva, un pintoresco pueblo colonial. Es uno de los destinos turísticos más populares del país."} image={a2}/>
                </Grid>
                <Grid xs={12} md={4} mdOffset={2}>
                    <ImageAndText title={"Viñedo Umaña Dajud"} text={"Justo al lado del lugar se encuentra el viñedo Umaña-Dajud. Aquí se ofrece una amplia variedad de planes para realizar en torno al vino.."} image={a4}/>
                </Grid>
                <Grid xs={12} md={4} sx={{marginBottom: 4}}>
                    <ImageAndText title={"Ráquira"} text={"\n" +
                        "Ráquira es un encantador pueblo ubicado a media hora en carro de La Buganvilia. Conocido por sus hermosas artesanías y coloridos edificios, es un lugar popular entre los turistas que buscan llevarse a casa recuerdos únicos y auténticos."} image={a3}/>
                </Grid>
                <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <div id='Precios'></div>
                <Grid xs={12} md={12}>
                    <SectionText title={"Precios"}/>
                </Grid>
                <Grid xs={12} md={12} sx={{marginBottom: 4}}>
                    <PricingSection/>
                </Grid>
                <Grid xs={12} md={12}>
                    <SectionText title={"Reseñas"}/>
                </Grid>
                <Grid xs={12} mdOffset={2} md={8}>
                    <Reviews/>
                </Grid>
            </Grid>
                </div>

            <div id='Contacto'></div>
               <Footer/>
            </ThemeProvider>
        </>
    );
}

export default App;
