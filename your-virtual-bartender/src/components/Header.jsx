import React from 'react';
import { Link } from 'react-router-dom'


function Header(props) {
    return (
        <div>
            <Link to="/recommendation"><button>Surprise Me!</button></Link>
            <Link to="/drink-search"><button>Something more specific...</button></Link>
        </div>
    );
}

export default Header;