import React from 'react';
import { Link } from 'react-router-dom'


function SearchForm(props) {
    return (
        <div>
            <h2>This is where the form will be.</h2>
            <Link to="/"><button>Back to main screen</button></Link>
        </div>
    );
}

export default SearchForm;