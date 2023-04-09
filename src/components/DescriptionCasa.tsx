import React from 'react';
import {List, Typography} from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";

export const DescriptionCasa = () => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={10} md={8} mdOffset={2}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                    }}>
                        <Typography variant="h3">Características:</Typography>
                        <br/>
                        
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <li><Typography variant="h6">250 m2</Typography></li>
                            <li><Typography variant="h6">3 habitaciones con baño privado</Typography></li>
                            <li><Typography variant="h6">Capacidad para 7 personas</Typography></li>
                            <li><Typography variant="h6">Cocina totalmente equipada</Typography></li>
                            <li><Typography variant="h6">Sala comedor</Typography></li>
                            <li><Typography variant="h6">Estudio</Typography></li>
                            <li><Typography variant="h6">Patio Interior</Typography></li>
                            <li><Typography variant="h6">Altillo con TV</Typography></li>
                            <li><Typography variant="h6">Jardines, Huerta</Typography></li>
                            <li><Typography variant="h6">Wifi</Typography></li>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
