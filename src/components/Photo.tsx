import React from 'react';

export const Photo = (props: {image: string}) => {

    return (
        <img src={props.image} alt='imageGallery' style={{ width:  "100%", height: "350px",  objectFit: "cover", }}/>

    )
}