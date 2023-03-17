import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import './App.css';
import Footer from "./components/Footer";
import {Video} from "./components/Video";
import {PhotoCarousel} from "./components/PhotoCarousel";
import {SectionText} from "./components/SectionText";
import {DrawerMenu} from "./components/DrawerMenu";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import img1 from './assets/fotosInterior/img1.jpg'
import img2 from './assets/fotosInterior/img2.jpg'
import img3 from './assets/fotosInterior/img3.jpg'
import img4 from './assets/fotosInterior/img4.jpg'

import c1 from './assets/fotosCasa/c1.jpg'
import c2 from './assets/fotosCasa/c2.jpg'
import c3 from './assets/fotosCasa/c3.jpg'
import c4 from './assets/fotosCasa/c4.jpg'

import n1 from './assets/fotosNaturaleza/n1.jpg'
import n2 from './assets/fotosNaturaleza/n2.jpg'
import n3 from './assets/fotosNaturaleza/n3.jpg'
import n4 from './assets/fotosNaturaleza/n4.jpg'

import a1 from '../src/assets/fotosActividades/caminata.jpg'
import a2 from '../src/assets/fotosActividades/villa de leyva.jpg'
import a3 from '../src/assets/fotosActividades/Pozos_Azules_en_Villa_de_Leyva_Boyacá_Colombia.jpg'
import a4 from '../src/assets/fotosActividades/vinedo.jpg'


import {Reviews} from "./components/Reviews";
import {Service} from "./components/Service";
import {ImageAndText} from "./components/ImageAndText";
import {DescriptionCasa} from "./components/DescriptionCasa";
import {PricingSection} from "./components/PricingSection";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#E33E7F'
        },
    },
    typography: {
        "fontFamily": `"Montserrat", "Helvetica", "Arial", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

const photosInterior = [
    img1,
    img2,
    img3,
    img4
]

const photosCasa = [
    c1,
    c2,
    c3,
    c4
]

const photosNaturaleza = [
    n1,
    n2,
    n3,
    n4
]

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
            <DrawerMenu/>
            <Grid container spacing={2}>
                <Grid xs={12}>
                    <Video/>
                </Grid>
                <Grid xs={12} md={12} sx={{marginBottom: 6}}>
                    <SectionText title={"Hospedaje en la mejor ubicación de Boyacá, Colombia"} text={"Rodeado de naturaleza, tranquilidad y lugares turísticos"}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={photosInterior} duration={1500}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={"La casa"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <DescriptionCasa/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={0}>
                    <PhotoCarousel items={photosCasa} duration={1000}/>
                </Grid>
                <Grid xs={12} md={12} sx={{marginBottom: 6}}>
                    <SectionText title={"Servicios"} text={"La casa incluye los siguientes servicios:"}/>
                </Grid>
                <Grid xs={5} xsOffset={1} md={2} mdOffset={1}>
                    <Service nombre={"Wifi"} descripcion={"Servicio de WIFI"} icon={"wifi"}/>
                </Grid>
                <Grid xs={5} md={2}>
                    <Service nombre={"Empleada"} descripcion={"De 8 am a 4pm"} icon={"empleada"}/>
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
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={photosNaturaleza} duration={1000}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={"Naturaleza"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}/>
                </Grid>

                <Grid xs={12} md={12} sx={{marginBottom: 3}}>
                    <SectionText title={"Actividades"} text={"Para realizar en la finca y sus alrededores"}/>
                </Grid>
                <Grid xs={12} md={4} mdOffset={2}>
                    <ImageAndText title={"Caminatas"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} image={a1}/>
                </Grid>
                <Grid xs={12} md={4}>
                    <ImageAndText title={"Villa de Leyva"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} image={a2}/>
                </Grid>
                <Grid xs={12} md={4} mdOffset={2}>
                    <ImageAndText title={"Viñedo Umaña Dajud"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} image={a4}/>
                </Grid>
                <Grid xs={12} md={4} sx={{marginBottom: 4}}>
                    <ImageAndText title={"Gondava"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} image={a1}/>
                </Grid>
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
            <div id='footer'>
            <Footer/>
            </div>
            </ThemeProvider>
        </>
    );
}

export default App;
