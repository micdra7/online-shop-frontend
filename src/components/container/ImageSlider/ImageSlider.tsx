import React from 'react';
import Carousel from 'nuka-carousel';
import { Link } from 'react-router-dom';
import './ImageSlider.scss';

const ImageSlider: React.FC = () => {

    const settings = {
        autoplay: true,
        autoplayInterval: 4000,
        wrapAround: true
    };

    return (
        <Carousel className='image-slider' {...settings}>
            <Link to='/product/1'>
                <img src='https://localhost:5001/images/1.png' alt='product image' />
            </Link>
            <Link to='/product/1'>
                <img src='https://localhost:5001/images/1.png' alt='product image' />
            </Link>
            <Link to='/product/1'>
                <img src='https://localhost:5001/images/1.png' alt='product image' />
            </Link>
        </Carousel>
    );
};

export default ImageSlider;
