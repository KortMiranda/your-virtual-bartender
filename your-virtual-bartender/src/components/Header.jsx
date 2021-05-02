import React from 'react';
import img from '../resources/header-image.jpg'



function Header() {
    return (
        <div>
            <div className="header-banner">
            <img src={img} alt="drink at bar"/>
            </div>  
        </div>
    );
}

export default Header;