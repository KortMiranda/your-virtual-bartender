import React from 'react';
import img from '../resources/header-image.jpg'
import Container from 'react-bootstrap/Container'


function Header() {
    return (
        <div>
            <Container fluid>
            <div className="header-banner">
            <img src={img} alt="drink at bar"/>
            </div> 
            </Container> 
        </div>
    );
}

export default Header;