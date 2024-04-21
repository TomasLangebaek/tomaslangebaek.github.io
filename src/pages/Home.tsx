import {DrawerMenu} from "../components/DrawerMenu";
import Grid from "@mui/material/Unstable_Grid2";
import {Video} from "../components/Video";
import {Box} from "@mui/material";
import logo from "../assets/logos/LB_03.png";
import {SectionText} from "../components/SectionText";
import {DescriptionCasa} from "../components/DescriptionCasa";
import {Service} from "../components/Service";
import {useNavigate} from "react-router-dom";
import Divider from "@mui/material/Divider";
import {DescriptionCabanas} from "../components/DescriptionCabanas";
import {Map} from "../components/Map";
import {ImageAndText} from "../components/ImageAndText";
import a1 from "../assets/fotosActividades/caminata_768.webp";
import a6 from "../assets/fotosActividades/bicicleta_520.webp";
import a5 from "../assets/fotosActividades/estrellas_520.webp";
import {PricingSection} from "../components/PricingSection";
import {Reviews} from "../components/Reviews";
import Footer from "../components/Footer";
import React from "react";
import i1 from "../assets/fotosInterior/i1.jpg";
import i1_520 from "../assets/fotosInterior/i1_520.webp";
import i1_768 from "../assets/fotosInterior/i1_768.webp";
import i2 from "../assets/fotosInterior/i2.jpg";
import i2_520 from "../assets/fotosInterior/i2_520.webp";
import i2_768 from "../assets/fotosInterior/i2_768.webp";
import i3 from "../assets/fotosInterior/i3.jpg";
import i3_520 from "../assets/fotosInterior/i3_520.webp";
import i3_768 from "../assets/fotosInterior/i3_768.webp";
import i4 from "../assets/fotosInterior/i4.jpg";
import i4_520 from "../assets/fotosInterior/i4_520.webp";
import i4_768 from "../assets/fotosInterior/i4_768.webp";
import i5 from "../assets/fotosInterior/i5.jpg";
import i5_520 from "../assets/fotosInterior/i5_520.webp";
import i5_768 from "../assets/fotosInterior/i5_768.webp";
import i6 from "../assets/fotosInterior/i6.jpg";
import i6_520 from "../assets/fotosInterior/i6_520.webp";
import i6_768 from "../assets/fotosInterior/i6_768.webp";
import i7 from "../assets/fotosInterior/i7.jpg";
import i7_520 from "../assets/fotosInterior/i7_520.webp";
import i7_768 from "../assets/fotosInterior/i7_768.webp";
import i8 from "../assets/fotosInterior/i8.jpg";
import i8_520 from "../assets/fotosInterior/i8_520.webp";
import i8_768 from "../assets/fotosInterior/i8_768.webp";
import i9 from "../assets/fotosInterior/i9.jpg";
import i9_520 from "../assets/fotosInterior/i9_520.webp";
import i9_768 from "../assets/fotosInterior/i9_768.webp";
import i10 from "../assets/fotosInterior/i10.jpg";
import i10_520 from "../assets/fotosInterior/i10_520.webp";
import i10_768 from "../assets/fotosInterior/i10_768.webp";
import i11 from "../assets/fotosInterior/i11.jpg";
import i11_520 from "../assets/fotosInterior/i11_520.webp";
import i11_768 from "../assets/fotosInterior/i11_768.webp";
import i12 from "../assets/fotosInterior/i12.jpg";
import i12_520 from "../assets/fotosInterior/i12_520.webp";
import i12_768 from "../assets/fotosInterior/i12_768.webp";
import i13_520 from "../assets/fotosInterior/i13_520.webp";
import i13_768 from "../assets/fotosInterior/i13_768.webp";
import i13 from "../assets/fotosInterior/i13.jpg";
import i14 from "../assets/fotosInterior/i14.jpg";
import i14_520 from "../assets/fotosInterior/i14_520.webp";
import i14_768 from "../assets/fotosInterior/i14_768.webp";
import i15 from "../assets/fotosInterior/i15.jpg";
import i15_520 from "../assets/fotosInterior/i15_520.webp";
import i15_768 from "../assets/fotosInterior/i15_768.webp";
import i16 from "../assets/fotosInterior/i16.jpg";
import i16_520 from "../assets/fotosInterior/i16_520.webp";
import i16_768 from "../assets/fotosInterior/i16_768.webp";
import i17 from "../assets/fotosInterior/i17.jpg";
import i17_520 from "../assets/fotosInterior/i17_520.webp";
import i17_768 from "../assets/fotosInterior/i17_768.webp";
import c1 from "../assets/fotosCasa/c1.jpg";
import c1_520 from "../assets/fotosCasa/c1_520.webp";
import c1_768 from "../assets/fotosCasa/c1_768.webp";
import c1_1024 from "../assets/fotosCasa/c1_1024.webp";
import c2 from "../assets/fotosCasa/c2.jpg";
import c2_520 from "../assets/fotosCasa/c2_520.webp";
import c2_768 from "../assets/fotosCasa/c2_768.webp";
import c2_1024 from "../assets/fotosCasa/c2_1024.webp";
import c3 from "../assets/fotosCasa/c3.jpg";
import c3_520 from "../assets/fotosCasa/c3_520.webp";
import c3_768 from "../assets/fotosCasa/c3_768.webp";
import c3_1024 from "../assets/fotosCasa/c3_1024.webp";
import c4 from "../assets/fotosCasa/c4.jpeg"
import c4_520 from "../assets/fotosCasa/c4_520.webp";
import c4_768 from "../assets/fotosCasa/c4_768.webp";
import c5 from "../assets/fotosCasa/c5.jpeg";
import c5_520 from "../assets/fotosCasa/c5_520.webp";
import c5_768 from "../assets/fotosCasa/c5_768.webp";
import c5_1024 from "../assets/fotosCasa/c5_1024.webp";

import cb1_520 from "../assets/fotosCabañas/cb1_520.webp";
import cb1_768 from "../assets/fotosCabañas/cb1_768.webp";
import cb1_1024 from "../assets/fotosCabañas/cb1_1024.webp";
import cb1_1440 from "../assets/fotosCabañas/cb1_1440.webp";
import cb2_520 from "../assets/fotosCabañas/cb2_520.webp";
import cb2_768 from "../assets/fotosCabañas/cb2_768.webp";
import cb2_1024 from "../assets/fotosCabañas/cb2_1024.webp";
import cb2_1440 from "../assets/fotosCabañas/cb2_1440.webp";
import cb3_520 from "../assets/fotosCabañas/cb3_520.webp";
import cb3_768 from "../assets/fotosCabañas/cb3_768.webp";
import cb3_1024 from "../assets/fotosCabañas/cb3_1024.webp";
import cb3_1440 from "../assets/fotosCabañas/cb3_1440.webp";
import cb4_520 from "../assets/fotosCabañas/cb4_520.webp";
import cb4_768 from "../assets/fotosCabañas/cb4_768.webp";
import cb4_1024 from "../assets/fotosCabañas/cb4_1024.webp";
import cb4_1440 from "../assets/fotosCabañas/cb4_1440.webp";
import cb5_520 from "../assets/fotosCabañas/cb5_520.webp";
import cb5_768 from "../assets/fotosCabañas/cb5_768.webp";
import cb5_1024 from "../assets/fotosCabañas/cb5_1024.webp";
import cb5_1440 from "../assets/fotosCabañas/cb5_1440.webp";
import cb6_520 from "../assets/fotosCabañas/cb6_520.webp";
import cb6_768 from "../assets/fotosCabañas/cb6_768.webp";
import cb6_1024 from "../assets/fotosCabañas/cb6_1024.webp";
import cb6_1440 from "../assets/fotosCabañas/cb6_1440.webp";
import cb7_520 from "../assets/fotosCabañas/cb7_520.webp";
import cb7_768 from "../assets/fotosCabañas/cb7_768.webp";
import cb7_1024 from "../assets/fotosCabañas/cb7_1024.webp";
import cb7_1440 from "../assets/fotosCabañas/cb7_1440.webp";
import cb8_520 from "../assets/fotosCabañas/cb8_520.webp";
import cb8_768 from "../assets/fotosCabañas/cb8_768.webp";
import cb8_1024 from "../assets/fotosCabañas/cb8_1024.webp";
import cb8_1440 from "../assets/fotosCabañas/cb8_1440.webp";
import cb9_520 from "../assets/fotosCabañas/cb9_520.webp";
import cb9_768 from "../assets/fotosCabañas/cb9_768.webp";
import cb9_1024 from "../assets/fotosCabañas/cb9_1024.webp";
import cb9_1440 from "../assets/fotosCabañas/cb9_1440.webp";
import cb10_520 from "../assets/fotosCabañas/cb10_520.webp";
import cb10_768 from "../assets/fotosCabañas/cb10_768.webp";
import cb10_1024 from "../assets/fotosCabañas/cb10_1024.webp";
import cb10_1440 from "../assets/fotosCabañas/cb10_1440.webp";
import cb11_520 from "../assets/fotosCabañas/cb11_520.webp";
import cb11_768 from "../assets/fotosCabañas/cb11_768.webp";
import cb11_1024 from "../assets/fotosCabañas/cb11_1024.webp";
import cb11_1440 from "../assets/fotosCabañas/cb11_1440.webp";
import cb12_520 from "../assets/fotosCabañas/cb12_520.webp";
import cb12_768 from "../assets/fotosCabañas/cb12_768.webp";
import cb12_1024 from "../assets/fotosCabañas/cb12_1024.webp";
import cb12_1440 from "../assets/fotosCabañas/cb12_1440.webp";
import cb13_520 from "../assets/fotosCabañas/cb13_520.webp";
import cb13_768 from "../assets/fotosCabañas/cb13_768.webp";
import cb13_1024 from "../assets/fotosCabañas/cb13_1024.webp";
import cb13_1440 from "../assets/fotosCabañas/cb13_1440.webp";
import cb14_520 from "../assets/fotosCabañas/cb14_520.webp";
import cb14_768 from "../assets/fotosCabañas/cb14_768.webp";
import cb14_1024 from "../assets/fotosCabañas/cb14_1024.webp";
import cb14_1440 from "../assets/fotosCabañas/cb14_1440.webp";
import cb15_520 from "../assets/fotosCabañas/cb15_520.webp";
import cb15_768 from "../assets/fotosCabañas/cb15_768.webp";
import cb15_1024 from "../assets/fotosCabañas/cb15_1024.webp";
import cb15 from "../assets/fotosCabañas/cb15.jpeg";
import cb16_520 from "../assets/fotosCabañas/cb16_520.webp";
import cb16_768 from "../assets/fotosCabañas/cb16_768.webp";
import cb16_1024 from "../assets/fotosCabañas/cb16_1024.webp";
import cb16 from "../assets/fotosCabañas/cb16.jpeg";

import n1_520 from "../assets/fotosNaturaleza/n1_520.webp";
import n1_768 from "../assets/fotosNaturaleza/n1_768.webp";
import n1_1024 from "../assets/fotosNaturaleza/n1_1024.webp";
import n2_520 from "../assets/fotosNaturaleza/n2_520.webp";
import n2_768 from "../assets/fotosNaturaleza/n2_768.webp";
import n2_1024 from "../assets/fotosNaturaleza/n2_1024.webp";
import n3_520 from "../assets/fotosNaturaleza/n3_520.webp";
import n3_768 from "../assets/fotosNaturaleza/n3_768.webp";
import n3_1024 from "../assets/fotosNaturaleza/n3_1024.webp";
import n4_520 from "../assets/fotosNaturaleza/n4_520.webp";
import n4_768 from "../assets/fotosNaturaleza/n4_768.webp";
import n4_1024 from "../assets/fotosNaturaleza/n4_1024.webp";
import n5_520 from "../assets/fotosNaturaleza/n5_520.webp";
import n5_768 from "../assets/fotosNaturaleza/n5_768.webp";
import n5_1024 from "../assets/fotosNaturaleza/n5_1024.webp";
import n6_520 from "../assets/fotosNaturaleza/n6_520.webp";
import n6_768 from "../assets/fotosNaturaleza/n6_768.webp";
import n6_1024 from "../assets/fotosNaturaleza/n6_1024.webp";
import n7_520 from "../assets/fotosNaturaleza/n7_520.webp";
import n7_768 from "../assets/fotosNaturaleza/n7_768.webp";
import n7_1024 from "../assets/fotosNaturaleza/n7_1024.webp";
import cerro from "../assets/fotosActividades/cerro.jpg";
import cerro2 from "../assets/fotosActividades/cerro2.jpg";
import Button from "@mui/material/Button";

import {GiHummingbird} from 'react-icons/gi'
import {MdOutlineDirectionsBike} from 'react-icons/md'
import {Photo} from "../components/Photo";
import {PhotoCarouselV2} from "../components/PhotoCarouselV2";


const photosInterior = [
    {
        srcSet: `${i1_520} 520w, ${i1_768} 768w, ${i1} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i2_520} 520w, ${i2_768} 768w, ${i2} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i3_520} 520w, ${i3_768} 768w, ${i3} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i4_520} 520w, ${i4_768} 768w, ${i4} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i5_520} 520w, ${i5_768} 768w, ${i5} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i6_520} 520w, ${i6_768} 768w, ${i6} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i7_520} 520w, ${i7_768} 768w, ${i7} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i8_520} 520w, ${i8_768} 768w, ${i8} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i9_520} 520w, ${i9_768} 768w, ${i9} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i10_520} 520w, ${i10_768} 768w, ${i10} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i11_520} 520w, ${i11_768} 768w, ${i11} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i12_520} 520w, ${i12_768} 768w, ${i12} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i13_520} 520w, ${i13_768} 768w, ${i13} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i14_520} 520w, ${i14_768} 768w, ${i14} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i15_520} 520w, ${i15_768} 768w, ${i15} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i16_520} 520w, ${i16_768} 768w, ${i16} 1024w`,
        alt: "casa interior"
    },
    {
        srcSet: `${i17_520} 520w, ${i17_768} 768w, ${i17} 1024w`,
        alt: "casa interior"
    },
];

const photosCasa = [
    {
        srcSet: `${c1_520} 520w, ${c1_768} 768w, ${c1_1024} 1024w, ${c1} 1440w`,
        alt: "casa vista aerea"
    },
    {
        srcSet: `${c2_520} 520w, ${c2_768} 768w, ${c2_1024} 1024w, ${c2} 1440w`,
        alt: "casa vista frente"
    },
    {
        srcSet: `${c3_520} 520w, ${c3_768} 768w, ${c3_1024} 1024w, ${c3} 1440w`,
        alt: "casa vista diagonal"
    },
    {
        srcSet: `${c4_520} 520w, ${c4_768} 768w, ${c4} 1024w, ${c4} 1440w`,
        alt: "casa vista aerea"
    },
    {
        srcSet: `${c5_520} 520w, ${c5_768} 768w, ${c5_1024} 1024w, ${c5} 1440w`,
        alt: "casa vista lejos"
    },
];


const photosCabañas1 = [
    {
        srcSet: `${cb1_520} 520w, ${cb1_768} 768w, ${cb1_1024} 1024w, ${cb1_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb2_520} 520w, ${cb2_768} 768w, ${cb2_1024} 1024w, ${cb2_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb3_520} 520w, ${cb3_768} 768w, ${cb3_1024} 1024w, ${cb3_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb4_520} 520w, ${cb4_768} 768w, ${cb4_1024} 1024w, ${cb4_1440} 1440w`,
        alt: "vista cabaña"
    },    {
        srcSet: `${cb5_520} 520w, ${cb5_768} 768w, ${cb5_1024} 1024w, ${cb5_1440} 1440w`,
        alt: "vista cabaña"
    },    {
        srcSet: `${cb6_520} 520w, ${cb6_768} 768w, ${cb6_1024} 1024w, ${cb6_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb15_520} 520w, ${cb15_768} 768w, ${cb15_1024} 1024w, ${cb15} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb7_520} 520w, ${cb7_768} 768w, ${cb7_1024} 1024w, ${cb7_1440} 1440w`,
        alt: "vista cabaña"
    },

];

const photosCabañas2 = [
    {
        srcSet: `${cb8_520} 520w, ${cb8_768} 768w, ${cb8_1024} 1024w, ${cb8_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb9_520} 520w, ${cb9_768} 768w, ${cb9_1024} 1024w, ${cb9_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb10_520} 520w, ${cb10_768} 768w, ${cb10_1024} 1024w, ${cb10_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb11_520} 520w, ${cb11_768} 768w, ${cb11_1024} 1024w, ${cb11_1440} 1440w`,
        alt: "vista cabaña"
    },    {
        srcSet: `${cb12_520} 520w, ${cb12_768} 768w, ${cb12_1024} 1024w, ${cb12_1440} 1440w`,
        alt: "vista cabaña"
    },    {
        srcSet: `${cb13_520} 520w, ${cb13_768} 768w, ${cb13_1024} 1024w, ${cb13_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb14_520} 520w, ${cb14_768} 768w, ${cb14_1024} 1024w, ${cb14_1440} 1440w`,
        alt: "vista cabaña"
    },
    {
        srcSet: `${cb16_520} 520w, ${cb16_768} 768w, ${cb16_1024} 1024w, ${cb16} 1440w`,
        alt: "vista cabaña"
    },

];

const photosNaturaleza = [
    {
        srcSet: `${n1_520} 520w, ${n1_768} 768w, ${n1_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n2_520} 520w, ${n2_768} 768w, ${n2_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n3_520} 520w, ${n3_768} 768w, ${n3_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n4_520} 520w, ${n4_768} 768w, ${n4_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n5_520} 520w, ${n5_768} 768w, ${n5_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n6_520} 520w, ${n6_768} 768w, ${n6_1024} 1024w`,
        alt: "natualeza"
    },
    {
        srcSet: `${n7_520} 520w, ${n7_768} 768w, ${n7_1024} 1024w`,
        alt: "natualeza"
    },
];

export const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate('/aves')
    }

    return (
        <>
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
                <PhotoCarouselV2 items={photosInterior} duration={1500}/>
            </Grid>
            <Grid xs={12} md={5}>
                <SectionText title={"La casa"} text={"La estadía en la casa de la finca es una experiencia relajante y alejada del bullicio de la ciudad. Disfrutarás de la tranquilidad de la naturaleza, del aire fresco y conectarte con la belleza natural que la rodea. Está totalmente equipada y a su alrededor se pueden realizar actividades al aire libre, como caminatas y paseos en bicicleta. "}/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={1}>
                <DescriptionCasa/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={0}>
                <PhotoCarouselV2 items={photosCasa} duration={3000}/>
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
                <PhotoCarouselV2 items={photosCabañas1} duration={1500}/>
            </Grid>
            <Grid xs={12} md={5}>
                <SectionText title={"Cabañas"} text={"Si estás buscando una experiencia en un entorno natural, nuestras cabañas son el lugar perfecto para ti. Están diseñadas para proporcionar una experiencia de campo auténtica, sin sacrificar las comodidades modernas. Tienen todo lo que necesitas para disfrutar de una estadía cómoda con baño y una cocina totalmente equipada. Mientras estés aquí, podrás disfrutar de la belleza del paisaje y participar en actividades emocionantes como caminatas y senderismo en las montañas cercanas. "}/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={1}>
                <DescriptionCabanas/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={0}>
                <PhotoCarouselV2 items={photosCabañas2} duration={3000}/>
            </Grid>
            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
            <div id='Ubicación'/>
            <Grid xs={12} md={5} mdOffset={1}>
                <SectionText title={"Ubicación"} text={"Sáchica es un municipio ubicado en el departamento de Boyacá, a 15 minutos en carro de Villa de Leyva. Se encuentra a una altitud de 2.260 metros sobre el nivel del mar, y su clima es templado y seco. El municipio de Sáchica está rodeado de hermosas montañas y valles, lo que lo convierte en un lugar ideal para disfrutar de la naturaleza y realizar actividades al aire libre. Se encuentra a 10 kilómetros al sur de Villa de Leyva y a 143 kilómetros al norte de Bogotá."}/>
            </Grid>
            <Grid xs={12} md={5} sx={{marginBottom: 6}}>
                <Map/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={1}>
                <SectionText title={""} text={"Esta localizada en la Provincia del Alto Ricaurte, que incluye los municipios de Sachica (conocida como la Jerusalén de Colombia por la representación de la Semana Santa y con grandes atracciónes como el parque temático Gondava y el Parque de la Avestruces), Villa De Leyva (pueblo patrimonio con gran atractivo arquitectónico), Ráquira (famoso pueblo patrimonio de alfareros y ceramistas con el monasterio de la Calendaria)."}/>
            </Grid>
            <Grid xs={12} md={5}>
                    <Photo image={cerro}/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={1}>
                <Photo image={cerro2}/>
            </Grid>
            <Grid xs={12} md={5}>
                <SectionText title={""} text={"Otros municipios cercanos son Sutamarchán (famoso por su comida Boyacense, deliciosa longaniza y la celebración de la gran tomatina el primer puente de junio) Tinjáca (tiene un clima único. Pueblo de olleros y artesanías en Tagua), Chiquiza (entrada al Santuario Flora y Fauna de Iguaque),  Santa Sofia (con atractivos como el Monasteria del Santo Ecce Homo y el hermoso sitio natural del Paso del Angel) y Gachantivá (famoso por sus hermosas cascadas)."}/>
            </Grid>

            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />

            <Grid xs={12} md={5} mdOffset={1}>
                <PhotoCarouselV2 items={photosNaturaleza} duration={1000}/>
            </Grid>
            <Grid xs={12} md={5}>
                <SectionText title={"Naturaleza"} text={"La finca tiene un campo amplio donde se pueden avistar múltiples especies de aves que habitan la región. Existen senderos en los cuáles se pueden realizar caminatas y disfrutar del aire libre y la tranquilidad del lugar.."}/>
            </Grid>
            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
            <div id='Actividades'></div>
            <Grid xs={12} md={12} sx={{marginBottom: 3}}>
                <SectionText title={"Actividades"} text={"Para realizar en la finca y sus alrededores"}/>
            </Grid>
            <Grid xs={12} md={4}  mdOffset={2}>
                <ImageAndText title={"Caminatas"} text={"Hay senderos en la finca donde se pueden realizar caminatas. Además, es posible aventurarse y explorar senderos cercanos y realizar senderismo en los cerros de alrededor con toda tranquilidad."} image={a1}/>
            </Grid>
            <Grid xs={12} md={4}>
                <ImageAndText title={"Montar Bicicleta"} text={"El terreno y clima son ideales para paseos en bicicleta."} image={a6}/>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25,
                }}>
                    {false && <Button size="medium" variant="contained" onClick={() => handleClick()} endIcon={<MdOutlineDirectionsBike />}>Saber más</Button>}
                </div>
            </Grid>
            <Grid xs={12} md={4} mdOffset={2}>
                <ImageAndText title={"Ver estrellas"} text={"Sáchica es una zona desértica, lo que permite tener un cielo despejado la mayoría de las noches y observar las estrellas con facilidad."} image={a5}/>
            </Grid>
            <Grid xs={12} md={4}>
                <ImageAndText title={"Avistamiento de Aves"} text={"Durante los últimos años, la finca La Buganvilia ha tenido un proceso de restauración ecológica convirtiéndola en un área de acogida para diferentes especies de aves."} image={`${n3_520} 520w, ${n3_768} 768w, ${n3_1024} 1024w`}/>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 25,
                }}>
                    <Button size="medium" variant="contained" onClick={() => handleClick()} endIcon={<GiHummingbird />}>Saber más</Button>
                </div>
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
        </>
    )
}
