import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function DrinkResult({ drink, }) {
    return (
        <section className="cocktail-section">
        <Link to="/"><button>Back to home</button></Link>
        <div className="drink">
            <div className="drink-img">
            <img src={drink.image} alt={drink.name} />
            </div>
            <div className="drink-recipe">
        <h2 className="drink-title">{drink.name}</h2>
               <p>{drink.category}</p>
               <p>{drink.info}</p>
               <p>{drink.glass}</p>
               {/* <p>
                   ingredients : {" "}
                   {ingredients.map((item, index) => {
                       return item ? <span key={index}>{item}</span> : null;
                   })}
               </p> */}
               <p>instructions : {drink.instructions}</p>
            </div>
        </div>
        <button onClick={() => window.location.reload()}>Another Suggestion</button>
   </section>    
    );
    }


export default DrinkResult;