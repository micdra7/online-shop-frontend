import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => (
    <footer className='footer'>
        <div className='description'>
            <h5>Online shop</h5>
            <p>
                A personal project written by Michał Drabik.
                Please remember that it is <strong>not</strong> a functioning
                online store and that orders will <strong>not</strong> be completed.
            </p>
        </div>
        <div className='links'>
            <a href='https://github.com/micdra7/' rel='nofollow'>
                <FontAwesomeIcon icon={faGithubSquare} />
                &nbsp;
                Github
            </a>
            <a href='https://www.linkedin.com/in/micha%C5%82-drabik-5497b4191/' rel='nofollow'>
                <FontAwesomeIcon icon={faLinkedinIn} />
                &nbsp;
                LinkedIn
            </a>
        </div>
    </footer>
);

export default Footer;
