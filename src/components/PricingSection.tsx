import {Paper, Typography} from '@mui/material';
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import casa from '../assets/fotosCasa/c2.jpg'
import cabanas from '../assets/fotosCabañas/cb1.jpg'

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
                    <img src={casa} alt='imageGallery'
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
                    <img src={cabanas} alt='imageGallery'
                         style={{float: "left", width: "100%", height: "266px", objectFit: "cover", marginTop: 30}}/>
                </Paper>
            </Grid>
        </Grid>
    );
};