import React, { useState } from 'react';
import './SearchBar.scss';
import { Redirect, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar: React.FC = () => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchQuery = (event: any) =>
        setSearchQuery(event.target.value);

    const handleClick = () => history.push(`/search/${searchQuery}`);

    return (
        <div className='search-bar'>
            <img className='logo' src='/public/logo.png' alt='logo' />
            <input
                className='search-input'
                type='search'
                value={searchQuery}
                onChange={(event) => handleSearchQuery(event)}
                placeholder='Search'
            />
            <button
                type='button'
                className='search-button'
                onClick={handleClick}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default SearchBar;
