import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Typography} from '@mui/material'
import img1 from '../assets/fotosInterior/img1.jpg'
import img2 from '../assets/fotosInterior/img2.jpg'
import img3 from '../assets/fotosInterior/img3.jpg'
import img4 from '../assets/fotosInterior/img4.jpg'

export const ImageAndText = (props: any) => {

    return (
        <>
            {
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    marginLeft: "5%",
                    marginRight: "2%",
                    marginTop: "5%",
                }}>
                    <img src={props.image} alt='imageGallery' style={{ float: "left", width:  "96%", height: "200px",  objectFit: "cover" }}/>
                    <h2>
                        <Typography variant="h4">{props.title}</Typography>
                    </h2>
                        <Typography variant="h6" align="justify">{props.text}</Typography>
                </div>
            }
        </>
    )
}
