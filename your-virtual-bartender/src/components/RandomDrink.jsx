import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function RandomDrink(props) {
    const [ranDrink, setRanDrink] = useState([])
    const getRanDrink = () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      fetch(url)
      .then((res) => res.json())
      .then(data => {
        console.log(data)
        setRanDrink(data)
      })
     
    }
    useEffect(
        () => {getRanDrink()},
    [])
    return (
   
    <section className="container">
        <div className="recipe">
                <img
                    src={ranDrink.strDrinkThumb}
                    alt={ranDrink.strDrink}
                />
                <h2>{ranDrink.strDrink}</h2>
            
        </div>
    <Link to="/"><button>Back to main screen</button></Link>
    </section>
   

    );
}

export default RandomDrink;