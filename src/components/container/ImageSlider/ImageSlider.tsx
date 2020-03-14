import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import './ImageSlider.scss';

export interface ImageSliderProps {
    imageLinks: string[];
    hrefs: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageLinks, hrefs }) => {
    const settings = {
        autoplay: true,
        autoplayInterval: 4000,
        wrapAround: true,
    };

    const renderedImages = imageLinks.map((image, index) => (
        <Link key={hrefs[index]} to={hrefs[index]}>
            <img src={image} alt={`Image for product: ${hrefs[index]}`} />
        </Link>
    ));

    return (
        <Carousel className='image-slider' {...settings}>
            {renderedImages}
        </Carousel>
    );
};

export default ImageSlider;
