import React, { useState, useEffect } from 'react';
import './ImageSlider.scss';
import SliderContent from '../../presentational/SliderContent/SliderContent';
import SliderNavigation from '../../presentational/SliderNavigation/SliderNavigation';

export interface ImageSliderProps {
    imageLinks: string[];
    hrefs: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageLinks, hrefs }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [renderedImage, setRenderedImage] = useState();

    const handleNavClick = (direction: string) => {
        if (direction === 'left') {
            decrementImageIndex();
        } else if (direction === 'right') {
            incrementImageIndex();
        }
    };

    const decrementImageIndex = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(imageLinks.length - 1);
        } else {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const incrementImageIndex = () => {
        if (currentImageIndex === (imageLinks.length - 1)) {
            setCurrentImageIndex(0);
        } else {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    useEffect(() => {
        setRenderedImage(<SliderContent key={currentImageIndex} imageSrc={imageLinks[0]} href={hrefs[0]} />);
    }, []);

    useEffect(() => {
        setRenderedImage(<SliderContent key={currentImageIndex}
            imageSrc={imageLinks[currentImageIndex]} href={hrefs[currentImageIndex]} />);
    }, [currentImageIndex]);

    return (
        <div className='image-slider'>
            <section className='content-wrapper'>
                {renderedImage}
            </section>
            <SliderNavigation handleClick={handleNavClick} />
        </div>
    );
};

export default ImageSlider;
