import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import DrinkResult from './DrinkResult'

function SearchForm({searchTerm, setSearchTerm, getDrink, }) {
    function handleChange(event) {
        setSearchTerm(event.target.value)
        // console.log(event.target.value)
      }
      function handleSubmit(event) {
        event.preventDefault()
        getDrink(searchTerm)
        console.log(searchTerm)
        console.log()
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
                    // required
                    placeholder="Drink Name"
                    onChange={handleChange}
                    value={searchTerm}
                     />
                     <Link to="./drink-result/"><button type="submit"onClick={handleSubmit}>Submit
                     </button></Link>
                     
                </div>
            </form>
            
        </div>
    );
}


export default SearchForm;