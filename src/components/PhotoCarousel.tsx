import React from 'react';
import Carousel from 'react-material-ui-carousel'

export const PhotoCarousel = (props: {duration: number, items: string[]}) => {

    return (
        <Carousel navButtonsAlwaysVisible={true} duration={props.duration} sx={{ margin: 7, marginRight: 5 }}>
            {
                props.items.map( (item, i) => <Item key={i} image={item} /> )
            }
        </Carousel>
    )
}

function Item(props: any)
{
    return (
            <img src={props.image} alt='imageGallery' style={{ maxWidth: "100%", height: "auto" }}/>
    )
}