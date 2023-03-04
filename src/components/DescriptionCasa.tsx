import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {List, ListItem, Paper, Typography} from '@mui/material'
import img1 from '../assets/fotosInterior/img1.jpg'
import img2 from '../assets/fotosInterior/img2.jpg'
import img3 from '../assets/fotosInterior/img3.jpg'
import img4 from '../assets/fotosInterior/img4.jpg'
import Grid from "@mui/material/Unstable_Grid2";
import {Video} from "./Video";

export const DescriptionCasa = (props: any) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid xs={10} md={6} mdOffset={3}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "flex-start",
                    }}>
                        <Typography variant="h4">Características:</Typography>
                        <br/>
                        <br/>
                        <List sx={{ listStyleType: 'disc', pl: 4 }}>
                            <li><Typography variant="h6">4 habitaciones, 3 con baño propio</Typography></li>
                            <li><Typography variant="h6">8 Camas</Typography></li>
                            <li><Typography variant="h6">Capacidad para 9 personas</Typography></li>
                            <li><Typography variant="h6">3 baños</Typography></li>
                            <li><Typography variant="h6">160 m2 ???</Typography></li>
                            <li><Typography variant="h6">Cocina totalmente equipada</Typography></li>
                            <li><Typography variant="h6">Sala</Typography></li>
                            <li><Typography variant="h6">Estudio</Typography></li>
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
