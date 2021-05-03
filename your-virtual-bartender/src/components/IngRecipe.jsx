import React, {useState, useEffect} from 'react';


function IngRecipe({drinkId}) {
    const [loading, setLoading] = useState(false);
    const [recipe, setRecipe] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function getIngRecipe() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
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
                    const newRecipe = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setRecipe(newRecipe)
                } else {
                    setRecipe(null)
                }
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getIngRecipe()
    }, [drinkId])
    if (loading) {
        return <h2 className="section-title">Making that drink for you...</h2>
    }
    if (!recipe) {
        return <h2 className="section-title">no cocktail to display</h2>
    } else {
        const {
            category,
            info,
            glass,
            instructions,
            ingredients
        } = recipe
    
    return (
        <div>
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
        </div> 
    );

    }
}


export default IngRecipe;