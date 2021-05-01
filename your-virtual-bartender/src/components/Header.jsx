import React from 'react';
import { Link } from 'react-router-dom'
import img from '../resources/header-image.jpg'
// import Image from 'react-bootstrap/Image'




function Header(props) {
    return (
        <div>
            <div className="header-banner">
            <img src={img} alt="drink at bar"/>
            {/* <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>What are you having tonight?</h2>
                </div>
            </div> */}
            </div>

            <div className="buttons">
            <Link to="/recommendation"><button>Surprise Me!</button></Link>
            <Link to="/drink-search"><button>Something more specific...</button></Link>
            </div>
        </div>
    );
}

export default Header;