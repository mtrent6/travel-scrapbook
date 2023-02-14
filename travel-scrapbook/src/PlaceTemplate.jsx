
import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { importAll } from './helpers';

export default function PlaceTemplate(props) {
    const { imagePlace, name, country } = props
    const [images, setImages] = useState([''])


    useEffect(() => {
        const place = "../images/" + imagePlace
        console.log(place)
        setImages(Object.values(importAll(imagePlace)))
    }, [])

    return (
        <>
            <a href={`/${country}`} style={{ position: 'absolute', top: 2, left: 2, borderRadius: "10px"}}>&#8249;</a>

            <p style={{ textAlign: 'center', fontFamily: 'optima', fontSize: 20, fontWeight: 550 }}>{name}</p>
            {images.map((image, i) => {
                return (
                    <LazyLoadImage key={i} delayTime={300} alt="island" effect="blur" height={"100%"} width={"100%"} src={image} />
                )
            })}
        </>
    );
}