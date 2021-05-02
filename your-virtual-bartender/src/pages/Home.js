import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
import Header from '../components/Header'
import { TextContext } from '../components/TextContext'

function Home() {
    

    return (
        <div>
           <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>What are you having tonight?</h2>
                </div>
            </div>
            
            <div className="home-buttons">
            <Link to="/recommendation"><button>Surprise Me!</button></Link>
            <Link to="/drink-search"><button>Something more specific...</button></Link>
            </div>
            
        </div>
    );
}

export default Home;