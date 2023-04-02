import React from 'react';
import Carousel from 'react-material-ui-carousel';

export const PhotoCarouselV2 = (props: {duration: number, items: {srcSet: string, alt: string}[]}) => {

    return (
        <Carousel navButtonsAlwaysVisible={true} duration={props.duration} sx={{ margin: 1, marginRight: 0 }}>
            {
                props.items.map( (item, i) => <Item key={i} image={item.srcSet} alt={item.alt} /> )
            }
        </Carousel>
    )
}

function Item(props: {image: string, alt: string})
{
    return (
        <img srcSet={props.image} alt={props.alt} style={{ width:  "100%", height: "350px",  objectFit: "cover", }}/>
    )
}
