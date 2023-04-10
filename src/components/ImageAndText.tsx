import React from 'react';
import {Typography} from '@mui/material'

export const ImageAndText = (props: any) => {

    return (
        <>
            {
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start",
                    marginTop: "5%",
                    marginLeft: "2.2%",
                }}>
                    <img srcSet={props.image} alt='imageGallery' style={{ float: "left", width:  "90%", height: "200px",  objectFit: "cover", marginBottom: 25 }}/>
                    <h2>
                        <Typography variant="h4" sx={{ marginBottom: 2 }}>{props.title}</Typography>
                    </h2>
                        <Typography variant="h6" align="justify">{props.text}</Typography>
                </div>
            }
        </>
    )
}
