import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


function NameResult({match} ) {
    const [loading, setLoading] = useState(false);
  const [drinkName, setDrinkName] = useState(null)

  useEffect(() => {
      setLoading(true)
    async function getDrinkName() {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${match.params.searchname}`
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
                const newDrinkName = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                }
                setDrinkName(newDrinkName)
            } else {
                setDrinkName(null)
            }
        } catch (error) {
            console.log(error)
        }
        
        setLoading(false)
    }
    getDrinkName()     
  }, [match.params.searchname])
  if (loading) {
    return <h2 className="section-title">Making that drink for you...</h2>
  }
  if(!drinkName) {
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
    } = drinkName

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
                    <p>You'll need a {glass}</p>
                    <p>
                        <b>Ingredients : {" "}</b>
                        {drinkName.ingredients.map((item, index) => {
                            return item ? <span key={index}><li>{item}</li></span> : null;
                        })}
                    </p>
                    <p><b>Instructions : </b> </p>
                    <p>{instructions}</p>
             <Link to="/drink-search"><Button variant="outline-dark">New Search</Button></Link>
             <Link to="/"><Button variant="outline-dark ml-2">Back Home</Button></Link>
                 </div>
             </div>
             
            
        </section>  
        </div> 
    );
    
    }
}

export default NameResult;