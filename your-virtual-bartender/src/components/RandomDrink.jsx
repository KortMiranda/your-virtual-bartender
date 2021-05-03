import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

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
        <div>
        
        <div className="header-banner">
        <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>I would recommend the...</h2>
                </div>
            </div>
        </div>
        
        <section className="cocktail-section">

 
             <div className="drink">
                 <div className="drink-img">
                 <img src={image} alt={name} />
                 </div>
                 <div className="drink-recipe">
             <h2 className="drink-title">{name}</h2>
                    <p>{category}</p>
                    <p>{info}</p>
                    <p>You'll need a {glass}</p>
                    <p>
                        <b>Ingredients : {" "}</b>
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}><li>{item}</li></span> : null;
                        })}
                    </p>
                    <p><b>Instructions : </b></p>
                    <p>{instructions}</p>
            <div className="flex-buttons">
             <Button variant="outline-dark"onClick={() => window.location.reload()}>Another Suggestion</Button>
            <Link to="/"><Button variant="outline-dark ml-2" className="home-button">Back to home</Button></Link>
            </div>
                 </div>
             </div>
        </section>  
        </div> 
    );
    }

}

export default RandomDrink;