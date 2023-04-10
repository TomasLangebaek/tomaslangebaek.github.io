import {DrawerMenu} from "../components/DrawerMenu";
import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import logo from "../assets/logos/LB_03.png";
import {SectionText} from "../components/SectionText";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer";
import React from "react";

import aa1_520 from "../assets/avesHabituales/FotoJet(1)_520.webp";
import aa1_768 from "../assets/avesHabituales/FotoJet(1)_768.webp";
import aa1_1024 from "../assets/avesHabituales/FotoJet(1)_1024.webp";
import aa1_1440 from "../assets/avesHabituales/FotoJet(1)_1440.webp";
import aa2_520 from "../assets/avesHabituales/FotoJet(3)_520.webp";
import aa2_768 from "../assets/avesHabituales/FotoJet(3)_768.webp";
import aa2_1024 from "../assets/avesHabituales/FotoJet(3)_1024.webp";
import aa2_1440 from "../assets/avesHabituales/FotoJet(3)_1440.webp";
import aa3_520 from "../assets/avesHabituales/FotoJet(4)_520.webp";
import aa3_768 from "../assets/avesHabituales/FotoJet(4)_768.webp";
import aa3_1024 from "../assets/avesHabituales/FotoJet(4)_1024.webp";
import aa3_1440 from "../assets/avesHabituales/FotoJet(4)_1440.webp";
import aa4_520 from "../assets/avesHabituales/FotoJet(5)_520.webp";
import aa4_768 from "../assets/avesHabituales/FotoJet(5)_768.webp";
import aa4_1024 from "../assets/avesHabituales/FotoJet(5)_1024.webp";
import aa4_1440 from "../assets/avesHabituales/FotoJet(5)_1440.webp";
import aa5_520 from "../assets/avesHabituales/FotoJet(14)_520.webp";
import aa5_768 from "../assets/avesHabituales/FotoJet(14)_768.webp";
import aa5_1024 from "../assets/avesHabituales/FotoJet(14)_1024.webp";
import aa5_1440 from "../assets/avesHabituales/FotoJet(14)_1440.webp";
import aa6_520 from "../assets/avesHabituales/FotoJet(15)_520.webp";
import aa6_768 from "../assets/avesHabituales/FotoJet(15)_768.webp";
import aa6_1024 from "../assets/avesHabituales/FotoJet(15)_1024.webp";
import aa6_1440 from "../assets/avesHabituales/FotoJet(15)_1440.webp";

import am1_520 from "../assets/avesMigratorias/FotoJet(2)_520.webp";
import am1_768 from "../assets/avesMigratorias/FotoJet(2)_768.webp";
import am1_1024 from "../assets/avesMigratorias/FotoJet(2)_1024.webp";
import am1_1440 from "../assets/avesMigratorias/FotoJet(2)_1440.webp";

import ae1_520 from "../assets/avesEsquivas/FotoJet(11)_520.webp";
import ae1_768 from "../assets/avesEsquivas/FotoJet(11)_768.webp";
import ae1_1024 from "../assets/avesEsquivas/FotoJet(11)_1024.webp";
import ae1_1440 from "../assets/avesEsquivas/FotoJet(11)_1440.webp";
import ae2_520 from "../assets/avesEsquivas/FotoJet(17)_520.webp";
import ae2_768 from "../assets/avesEsquivas/FotoJet(17)_768.webp";
import ae2_1024 from "../assets/avesEsquivas/FotoJet(17)_1024.webp";
import ae2_1440 from "../assets/avesEsquivas/FotoJet(17)_1440.webp";

import o1_520 from "../assets/avesOtras/FotoJet(6)_520.webp";
import o1_768 from "../assets/avesOtras/FotoJet(6)_768.webp";
import o1_1024 from "../assets/avesOtras/FotoJet(6)_1024.webp";
import o1_1440 from "../assets/avesOtras/FotoJet(6)_1440.webp";
import o2_520 from "../assets/avesOtras/FotoJet(7)_520.webp";
import o2_768 from "../assets/avesOtras/FotoJet(7)_768.webp";
import o2_1024 from "../assets/avesOtras/FotoJet(7)_1024.webp";
import o2_1440 from "../assets/avesOtras/FotoJet(7)_1440.webp";
import o3_520 from "../assets/avesOtras/FotoJet(8)_520.webp";
import o3_768 from "../assets/avesOtras/FotoJet(8)_768.webp";
import o3_1024 from "../assets/avesOtras/FotoJet(8)_1024.webp";
import o3_1440 from "../assets/avesOtras/FotoJet(8)_1440.webp";
import o4_520 from "../assets/avesOtras/FotoJet(9)_520.webp";
import o4_768 from "../assets/avesOtras/FotoJet(9)_768.webp";
import o4_1024 from "../assets/avesOtras/FotoJet(9)_1024.webp";
import o4_1440 from "../assets/avesOtras/FotoJet(9)_1440.webp";
import o5_520 from "../assets/avesOtras/FotoJet(10)_520.webp";
import o5_768 from "../assets/avesOtras/FotoJet(10)_768.webp";
import o5_1024 from "../assets/avesOtras/FotoJet(10)_1024.webp";
import o5_1440 from "../assets/avesOtras/FotoJet(10)_1440.webp";
import o6_520 from "../assets/avesOtras/FotoJet(12)_520.webp";
import o6_768 from "../assets/avesOtras/FotoJet(12)_768.webp";
import o6_1024 from "../assets/avesOtras/FotoJet(12)_1024.webp";
import o6_1440 from "../assets/avesOtras/FotoJet(12)_1440.webp";
import o7_520 from "../assets/avesOtras/FotoJet(13)_520.webp";
import o7_768 from "../assets/avesOtras/FotoJet(13)_768.webp";
import o7_1024 from "../assets/avesOtras/FotoJet(13)_1024.webp";
import o7_1440 from "../assets/avesOtras/FotoJet(13)_1440.webp";
import {PhotoCarouselV2} from "../components/PhotoCarouselV2";


const avesHabituales1 = [
    {
        srcSet: `${aa1_520} 520w, ${aa1_768} 768w, ${aa1_1024} 1024w, ${aa1_1440} 1440w`,
        alt: "aves habituales"
    },
    {
        srcSet: `${aa2_520} 520w, ${aa2_768} 768w, ${aa2_1024} 1024w, ${aa2_1440} 1440w`,
        alt: "aves habituales"
    },
    {
        srcSet: `${aa3_520} 520w, ${aa3_768} 768w, ${aa3_1024} 1024w, ${aa3_1440} 1440w`,
        alt: "aves habituales"
    },
];

const avesHabituales2 = [
    {
        srcSet: `${aa4_520} 520w, ${aa4_768} 768w, ${aa4_1024} 1024w, ${aa4_1440} 1440w`,
        alt: "aves habituales"
    },
    {
        srcSet: `${aa5_520} 520w, ${aa5_768} 768w, ${aa5_1024} 1024w, ${aa5_1440} 1440w`,
        alt: "aves habituales"
    },
    {
        srcSet: `${aa6_520} 520w, ${aa6_768} 768w, ${aa6_1024} 1024w, ${aa6_1440} 1440w`,
        alt: "aves habituales"
    },
];

const avesEsquivas1 = [
    {
        srcSet: `${ae1_520} 520w, ${ae1_768} 768w, ${ae1_1024} 1024w, ${ae1_1440} 1440w`,
        alt: "aves esquivas"
    },
    {
        srcSet: `${ae2_520} 520w, ${ae2_768} 768w, ${ae2_1024} 1024w, ${ae2_1440} 1440w`,
        alt: "aves esquivas"
    },
    {
        srcSet: `${o3_520} 520w, ${o3_768} 768w, ${o3_1024} 1024w, ${o3_1440} 1440w`,
        alt: "aves"
    },
    {
        srcSet: `${o4_520} 520w, ${o4_768} 768w, ${o4_1024} 1024w, ${o4_1440} 1440w`,
        alt: "aves"
    },
];


const avesEsquivas2 = [
    {
        srcSet: `${o1_520} 520w, ${o1_768} 768w, ${o1_1024} 1024w, ${o1_1440} 1440w`,
        alt: "aves"
    },
    {
        srcSet: `${o2_520} 520w, ${o2_768} 768w, ${o2_1024} 1024w, ${o2_1440} 1440w`,
        alt: "aves"
    },
    {
        srcSet: `${o7_520} 520w, ${o7_768} 768w, ${o7_1024} 1024w, ${o7_1440} 1440w`,
        alt: "aves"
    },
];

const avesMigratorias = [
    {
        srcSet: `${am1_520} 520w, ${am1_768} 768w, ${am1_1024} 1024w, ${am1_1440} 1440w`,
        alt: "aves migratorias"
    },
    {
        srcSet: `${o5_520} 520w, ${o5_768} 768w, ${o5_1024} 1024w, ${o5_1440} 1440w`,
        alt: "aves"
    },
    {
        srcSet: `${o6_520} 520w, ${o6_768} 768w, ${o6_1024} 1024w, ${o6_1440} 1440w`,
        alt: "aves"
    },
];

export const Aves = () => {

    return (
        <>
        <DrawerMenu/>
    <div style={{ paddingRight: 8 }}>
        <Grid container spacing={2}>
            <Grid xs={12} md={12}>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
                    <Box sx={{
                        display: { xs: 'block', sm: 'none' }
                    }}>
                        <img src={logo} alt='imageGallery' style={{ width: "400px"}}/>
                    </Box>
                </div>
            </Grid>
            <Grid xs={12} md={12} sx={{marginBottom: 6, marginTop: 6}}>
                <SectionText title={"Avistamiento de Aves"} text={"Con el fin de motivar a nuestros visitantes a realizar avistamiento y valorar la diversidad de\n" +
                    "nuestra fauna, les contamos un poco sobre quienes nos visitan"}/>
            </Grid>
            <Grid xs={12} md={5} mdOffset={1}>
                <SectionText title={"Residentes habituales"} text={"Entre nuestros residentes tenemos; mimus guilvus (sinsonte),\n" +
                    "zonotrichia capensis,( copetón) Icterus chrysater (turpial montañero o toche), Tyrannus\n" +
                    "melancholicus (sirirí), Zenaida auriculata ( Torcaza naguiblanca), Stilpnia vitriolina ( Tangara\n" +
                    "rastrojera), Crotophaga ani ( garrapatero piquiliso) y Aeronautes montivagus ( Vencejo\n" +
                    "pierniblanco) que nos anuncia la lluvia. Además tenemos rapaces anidando cerca como el Rupornis\n" +
                    "magnirostris (gavilán pollero) y la Elanus Leucurus (Aguililla blanca), sin olvidar el Gypsus atratus o\n" +
                    "chulo común que presta un gran servicio en la naturaleza."}/>
            </Grid>
            <Grid xs={12} md={5} sx={{marginTop: 17}}>
                <PhotoCarouselV2 items={avesHabituales1} duration={1500}/>
            </Grid>
                <Grid xs={12} md={5} mdOffset={1} sx={{marginTop: 12}}>
                    <PhotoCarouselV2 items={avesHabituales2} duration={3000}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={""} text={"Hay pequeños residentes habituales pero difíciles de identificar por su rapidez, sin embargo, el\n" +
                        "Sporophla nigricollis (Espiquero capuchino) y el Spinus Psaltria (Jilguero aliblanco) se reconocieron\n" +
                        "por sus llamadas.\n" +
                        "Como sabemos, nuestro país es de lo más diversos en especies de colibríes, y la finca La Buganvilia\n" +
                        "no se queda atrás. Los colibrís que nos visitan son el Chlostilbon poormani,(Esmeralda rabicorta) el\n" +
                        "Coruscans (Chillón) y el Amazilia Cyanifrons (Amazilia Cianeo) el cual es especial porque es\n" +
                        "endémico, es decir, que solo se ve en esta región. Ellos suelen visitar nuestro jardín y disfrutar de\n" +
                        "la mermelada, tunas y buganvilias."}/>
                </Grid>
            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <Grid xs={12} md={5} mdOffset={1}>
                    <SectionText title={"Migratorios"} text={"Nos visitan entre octubre y abril, época en que se desplazan desde el hemisferio\n" +
                        "norte para pasar el invierno en tierras cálidas. Hemos observado la Piranga olivácea (Piranga\n" +
                        "alinegra), el Vireo olivaceus (Verderón ojirojo) y el Myiodynastes luteiventris, (atrapamoscas\n" +
                        "sulfurado)."}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <PhotoCarouselV2 items={avesMigratorias} duration={1500}/>
                </Grid>
            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
                <Grid xs={12} md={5} mdOffset={1}>
                    <SectionText title={"Residentes esquivos"} text={"Estas aves aunque presentes en la zona, no son tan fáciles de ver pero si\n" +
                        "de escuchar entre los arbustos o después de un rato en las zonas con menos presencia humana,\n" +
                        "son: Pyrocephalus rubinus (Atrapamoscas pechirrojo), Pheocticus aureoventris (Picogordo\n" +
                        "pechinegro), saltator striapectus (Saltator pio-judío), Colinus Cristatus (Perdiz común) y Synalaxis\n" +
                        "subpudica (Rastrojero rabilargo), que es endémica de la región. Entre las rapaces a veces nos visita\n" +
                        "el Falco Sparverius (Cernícalo)."}/>
                </Grid>
                <Grid xs={12} md={5} sx={{marginTop: 15}}>
                    <PhotoCarouselV2 items={avesEsquivas1} duration={3000}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarouselV2 items={avesEsquivas2} duration={1500}/>
                </Grid>
                <Grid xs={12} md={5}>
                    <SectionText title={""} text={"Para facilitar su identificación pueden observar las fotos en nuestra galería. Si observan especies\n" +
                        "que no hemos mencionado por favor avisarnos para incluirlas, esperamos que disfruten mucho las\n" +
                        "pajareadas.\n" +
                        "Para los neófitos les recomendamos usar las aplicaciones Merlin (identifica cantos o llamadas y\n" +
                        "fotos) o ebird."}/>
                </Grid>
            <Divider sx={{ bgcolor: "#671707", width:'80%', margin: "auto", marginBottom: 6, marginTop: 4, borderBottomWidth: 2}} />
        </Grid>
    </div>

    <div id='Contacto'></div>
    <Footer/>
        </>
    )
}
