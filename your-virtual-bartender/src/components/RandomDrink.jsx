import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function RandomDrink() {
    const [loading, setLoading] = useState(false);
    const [randomDrink, setRandomDrink] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function getRandomDrink() {
            try {
                const response = await fetch(
                    'https://www.thecocktaildb.com/api/json/v1/1/random.php'
                )
                const data = await response.json()
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strAlcoholic: info,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newRandomDrink = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setRandomDrink(newRandomDrink)
                } else {
                    setRandomDrink(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getRandomDrink()
    }, [])
    if (loading) {
        return <h2 className="section-title">Making that drink for you...</h2>
    }
    if (!randomDrink) {
        return <h2 className="section-title">no cocktail to display</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients
        } = randomDrink
    
    return (
        <section className="cocktail-section">
             <Link to="/"><button>Back to home</button></Link>
             <h2 className="drink-title">{name}</h2>
             <div className="drink">
                 <img src={image} alt={name} />
                 <div className="drink-recipe">
                    <p>{category}</p>
                    <p>{info}</p>
                    <p>{glass}</p>
                    <p>
                        ingredients : {" "}
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null;
                        })}
                    </p>
                    <p>instructions : {instructions}</p>
                 </div>
             </div>
        </section>   
    );
    }
}

export default RandomDrink;