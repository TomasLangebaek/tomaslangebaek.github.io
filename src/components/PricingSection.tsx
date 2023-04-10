import {Paper, Typography} from '@mui/material';
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import cb1_520 from "../assets/fotosCabañas/cb1_520.webp";
import cb1_768 from "../assets/fotosCabañas/cb1_768.webp";
import cb1_1024 from "../assets/fotosCabañas/cb1_1024.webp";

import c2_520 from "../assets/fotosCasa/c2_520.webp";
import c2_768 from "../assets/fotosCasa/c2_768.webp";
import c2_1024 from "../assets/fotosCasa/c2_1024.webp";
import cb1_1440 from "../assets/fotosCabañas/cb1_1440.webp";
import c2 from "../assets/fotosCasa/c2.jpg";

export const PricingSection = (props: any) => {

    return (
        <Grid container spacing={1}>
            <Grid xs={12} md={5} mdOffset={1}>
                <Paper sx={{width: "100%", padding: 5, overflow: "auto"}}>
                    <Typography variant="h5">{"Casa"}</Typography>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Typography variant="h4" sx={{marginRight: 1}}>{"$650.000"}</Typography>
                        <Typography variant="h6" sx={{color: "grey"}}>{"COP/noche entre semana"}</Typography>
                    </div>
                    <br/>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                        <Typography variant="h4" sx={{marginRight: 1}}>{"$800.000"}</Typography>
                        <Typography variant="h6" sx={{color: "grey"}}>{"COP/noche fines de semana y festivos"}</Typography>
                    </div>
                    <img srcSet={`${c2_520} 520w, ${c2_768} 768w, ${c2_1024} 1024w, ${c2} 1440w`} alt='imageGallery'
                         style={{float: "left", width: "100%", height: "200px", objectFit: "cover", marginTop: 30}}/>
                </Paper>
            </Grid>
            <Grid xs={12} md={5} mdOffset={0.5}>
                <Paper sx={{width: "100%", padding: 5, overflow: "auto"}}>
                    <Typography variant="h5">{"Cabañas"}</Typography>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-end",
                    }}>
                        <Typography variant="h4" sx={{marginRight: 1}}>{"$350.000"}</Typography>
                        <Typography variant="h6" sx={{color: "grey"}}>{"COP/noche cada una"}</Typography>
                    </div>
                    <img srcSet={`${cb1_520} 520w, ${cb1_768} 768w, ${cb1_1024} 1024w, ${cb1_1440} 1440w`} alt='imageGallery'
                         style={{float: "left", width: "100%", height: "266px", objectFit: "cover", marginTop: 30}}/>
                </Paper>
            </Grid>
        </Grid>
    );
};