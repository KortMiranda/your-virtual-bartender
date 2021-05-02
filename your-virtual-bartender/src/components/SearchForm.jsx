import React, { useState, useEffect, useContext } from 'react';
import DrinkResult from './DrinkResult'
// import {DrinkContext} from './DrinkContext'
import { Link } from 'react-router-dom'

    

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState()

        function handleChange(event) {
        setSearchTerm(event.target.value)
        console.log(event.target.value)
      }
      function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(searchTerm)
        console.log(searchTerm)
      }

    return (
        <div>
            <Link to='/'><button>Back to main screen</button></Link>
            <h2>Search Cocktail Recipe</h2>
            <form className="form search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                <label htmlFor="by-name">By Name: </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    required
                    placeholder="Drink Name"
                    onChange={handleChange}
                    input={searchTerm}
                     />
                     
                     <Link to={`drink-result/${searchTerm}`}><button type='submit'>Submit
                     </button></Link>
                     
                     
                </div>
            </form>
                    
            
        </div>
    );
}



export default SearchForm;