import React from 'react';
import RandomDrink from './RandomDrink'
import SearchForm from './SearchForm'

function Header(props) {
    return (
        <div>
            <RandomDrink />
            <SearchForm />
        </div>
    );
}

export default Header;