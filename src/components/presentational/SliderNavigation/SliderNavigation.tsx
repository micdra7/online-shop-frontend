import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import './SliderNavigation.scss';

export interface SliderNavigationProps {
    handleClick: (direction: string) => void;
}

const SliderNavigation: React.FC<SliderNavigationProps> = ({ handleClick }) => (
    <div className='slider-navigation'>
        <span id='left' onClick={() => handleClick('left')}>
            <FontAwesomeIcon icon={faArrowCircleLeft} style={{width: '1.5rem', height: '1.5rem'}} />
        </span>
        <span id='right' onClick={() => handleClick('right')}>
            <FontAwesomeIcon icon={faArrowCircleRight} style={{width: '1.5em', height: '1.5rem'}} />
        </span>
    </div>
);

export default SliderNavigation;
