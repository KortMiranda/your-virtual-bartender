import React from 'react';
import { Link } from 'react-router-dom'

function RandomDrink(props) {
  
    return (
        <div>
            <h2>This is where a random drink will generate</h2>
            <Link to="/"><button>Back to main screen</button></Link>
        </div>

    );
}

export default RandomDrink;