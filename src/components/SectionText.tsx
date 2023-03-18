import React from 'react';
import {Typography} from '@mui/material'

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
