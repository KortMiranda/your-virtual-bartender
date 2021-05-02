import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


function DrinkResult({match} ) {
    const [loading, setLoading] = useState(false);
  const [drink, setDrink] = useState(null)

  useEffect(() => {
      setLoading(true)
    async function getDrink() {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${match.params.searchterm}`
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
                const newDrink = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                }
                setDrink(newDrink)
            } else {
                setDrink(null)
            }
        } catch (error) {
            console.log(error)
        }
        
        setLoading(false)
    }
    getDrink()     
  }, [])
  if (loading) {
    return <h2 className="section-title">Making that drink for you...</h2>
  }
  if(!drink) {
    return (
    <div>
    <h2 className="section-title">no cocktail to display</h2>
    <Link to="/drink-search"><button>Back to Search</button></Link>
    </div>)
  } else {
    const {
        name,
        image,
        category,
        info,
        glass,
        instructions,
    } = drink

    return (
        <div>
        <div className="header-banner">
        <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>Here's what I think you would like...</h2>
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
                    <p>{glass}</p>
                    <p>
                        <b>Ingredients : {" "}</b>
                        {drink.ingredients.map((item, index) => {
                            return item ? <span key={index}><li>{item}</li></span> : null;
                        })}
                    </p>
                    <p><b>Instructions : </b> </p>
                    <p>{instructions}</p>
                 </div>
             </div>
             
             <Link to="/drink-search"><button>New Search</button></Link>
            
        </section>  
        </div> 
    );
    
                    }
    }

export default DrinkResult;