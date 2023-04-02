import React from 'react';
import {Paper} from "@mui/material";

export const Map = () => {

    return (
        <Paper>
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7706309501336!2d-73.5502583!3d5.6008656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41d7c2a1b07515%3A0x5d0a8143473aaec3!2sFinca%20La%20Buganvilia!5e0!3m2!1ses-419!2sco!4v1679238836156!5m2!1ses-419!2sco"
    width="100%" height="450" allowFullScreen={true} loading="lazy"
    referrerPolicy="no-referrer-when-downgrade" title={"Mapa de la ubicación de la buganvilia en sáchica, boyacá"}/>
        </Paper>
    )
}