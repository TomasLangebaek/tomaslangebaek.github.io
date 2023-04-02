import {DrawerMenu} from "../components/DrawerMenu";
import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";
import logo from "../assets/logos/LB_03.png";
import {SectionText} from "../components/SectionText";
import {PhotoCarousel} from "../components/PhotoCarousel";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer";
import React from "react";

import aa1 from "../assets/avesHabituales/FotoJet (1).jpg";
import aa2 from "../assets/avesHabituales/FotoJet (3).jpg";
import aa3 from "../assets/avesHabituales/FotoJet (4).jpg";
import aa4 from "../assets/avesHabituales/FotoJet (5).jpg";
import aa5 from "../assets/avesHabituales/FotoJet (14).jpg";
import aa6 from "../assets/avesHabituales/FotoJet (15).jpg";

import am1 from "../assets/avesMigratorias/FotoJet (2).jpg";

import ae1 from "../assets/avesEsquivas/FotoJet (11).jpg";
import ae2 from "../assets/avesEsquivas/FotoJet (17).jpg";

import o1 from "../assets/avesOtras/FotoJet (6).jpg";
import o2 from "../assets/avesOtras/FotoJet (7).jpg";
import o3 from "../assets/avesOtras/FotoJet (8).jpg";
import o4 from "../assets/avesOtras/FotoJet (9).jpg";
import o5 from "../assets/avesOtras/FotoJet (10).jpg";
import o6 from "../assets/avesOtras/FotoJet (12).jpg";
import o7 from "../assets/avesOtras/FotoJet (13).jpg";

const avesHabituales1 = [
    aa1,
    aa2,
    aa3,
]

const avesHabituales2 = [
    aa4,
    aa5,
    aa6,
]

const avesEsquivas1 = [
    ae1,
    ae2,
    o3,
    o4
]

const avesEsquivas2 = [
    o1,
    o2,
    o7,
]

const avesMigratorias = [
    am1,
    o5,
    o6,
]

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
                <PhotoCarousel items={avesHabituales1} duration={1500}/>
            </Grid>
                <Grid xs={12} md={5} mdOffset={1} sx={{marginTop: 12}}>
                    <PhotoCarousel items={avesHabituales2} duration={3000}/>
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
                    <PhotoCarousel items={avesMigratorias} duration={1500}/>
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
                    <PhotoCarousel items={avesEsquivas1} duration={3000}/>
                </Grid>
                <Grid xs={12} md={5} mdOffset={1}>
                    <PhotoCarousel items={avesEsquivas2} duration={1500}/>
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
