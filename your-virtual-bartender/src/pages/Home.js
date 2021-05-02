import React from 'react';
import {Link} from 'react-router-dom'

import Button from 'react-bootstrap/Button'



function Home() {
    return (
        <div>
           <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>What are you having tonight?</h2>
                </div>
            </div>
            
            <div className="home-buttons">
            <Link to="/recommendation"><Button variant="outline-dark mx-4" size="lg">Surprise Me!</Button></Link>
            <Link to="/drink-search"><Button variant="outline-dark mx-4" size="lg">Something more specific...</Button></Link>
            </div>
            
        </div>
    );
}

export default Home;