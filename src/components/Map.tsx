import React from 'react';
import {Paper} from "@mui/material";

export const Map = () => {

    return (
        <Paper>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15883.26922447178!2d-73.55476301841304!3d5.593993643030535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e41d6c97ee55eb9%3A0x256600c1e8098286!2zVmnDsWVkbyBVbWHDsWEgRGFqdWQ!5e0!3m2!1ses-419!2sco!4v1679161802827!5m2!1ses-419!2sco"
                width="100%" height="450" allowFullScreen={false} loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Paper>
    )
}