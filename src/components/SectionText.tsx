import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Typography} from '@mui/material'
import img1 from '../assets/fotosInterior/img1.jpg'
import img2 from '../assets/fotosInterior/img2.jpg'
import img3 from '../assets/fotosInterior/img3.jpg'
import img4 from '../assets/fotosInterior/img4.jpg'

export const SectionText = (props: any) => {

    return (
        <>
            {
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    marginLeft: "5%",
                    marginRight: "2%"
                }}>
                    <h2>
                        <Typography variant="h2">{props.title}</Typography>
                    </h2>
                    <br/>
                    <br/>
                    <h5>
                        <Typography variant="h5">{props.text}</Typography>
                    </h5>
                </div>
            }
        </>
    )
}
