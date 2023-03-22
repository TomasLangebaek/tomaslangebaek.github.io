import React from 'react';
import {List, Typography} from '@mui/material'
import Grid from "@mui/material/Unstable_Grid2";

export const DescriptionCabanas = () => {

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
                            <li><Typography variant="h6">20 m2</Typography></li>
                            <li><Typography variant="h6">Baño privado</Typography></li>
                            <li><Typography variant="h6">Capacidad para 2 personas</Typography></li>
                            <li><Typography variant="h6">1 Cama queen</Typography></li>
                            <li><Typography variant="h6">Cocina totalmente equipada</Typography></li>
                            <li><Typography variant="h6">Deck Amplio</Typography></li>
                            <li><Typography variant="h6">Una habitación</Typography></li>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
