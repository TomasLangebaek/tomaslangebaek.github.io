import { FaTv, FaWifi, FaUser, FaDog, FaTableTennis } from 'react-icons/fa';
import { Typography } from '@mui/material';
import React from "react";

export const Service = (props: any) => {

    return (
        <article className='review'>
            <div className='service-container'>
                <span className='service-icon'>
          {props.icon == "wifi" && (<FaWifi size={60} />)}
          {props.icon == "empleada" && (<FaUser size={60} />)}
          {props.icon == "tv" && (<FaTv size={60} />)}
          {props.icon == "dog" && (<FaDog size={60} />)}
          {props.icon == "ping pong" && (<FaTableTennis size={60} />)}
        </span>
            </div>
            <Typography variant="h5">{props.nombre}</Typography>
            <Typography variant="subtitle1">{props.descripcion}</Typography>
        </article>
    );
};