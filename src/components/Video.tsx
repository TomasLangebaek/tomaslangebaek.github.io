import React from 'react';
// @ts-ignore
import video from '../assets/video1.MP4';

export const Video = () => {
    return (
    <div>
        <video src={video} autoPlay loop muted>
        </video>
    </div>
    )
}