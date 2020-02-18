import React from 'react';
import { Link } from 'react-router-dom';
import './SliderContent.scss';

export interface SliderContentProps {
    imageSrc: string;
    href: string;
}

const SliderContent: React.FC<SliderContentProps> = ({ imageSrc, href }) => (
    <Link to={href} className='slider-content'>
        <img src={imageSrc} alt={`Image for: ${href}`} />
    </Link>
);

export default SliderContent;
