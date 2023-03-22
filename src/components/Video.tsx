import React from 'react';
// @ts-ignore
import video from '../assets/video2.MP4';
import {Box} from "@mui/material";

export const Video = () => {
    return (
    <Box sx={{
        marginLeft: { xs: 0.7, sm: 0 },
    }}>
        <video src={video} autoPlay loop muted>
        </video>
    </Box>
    )
}