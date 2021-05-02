import React, {useState, useEffect} from 'react';
import SearchForm from './SearchForm'
import { Link } from 'react-router-dom'
import { DrinkContext } from './DrinkContext'

function DrinkResult({match} ) {
    // const { searchTerm } = useParams()
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState()
  const [drink, setDrink] = useState(null)

  useEffect(() => {
      setLoading(true)
    async function getDrink(searchTerm) {
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${match.params.searchterm}`
                //  `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini`
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
        ingredients
    } = drink

    return (
        
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
                        ingredients : {" "}
                        {drink.ingredients.map((item, index) => {
                            return item ? <span key={index}>{item}</span> : null;
                        })}
                    </p>
                    <p>instructions : {instructions}</p>
                 </div>
             </div>
             
             <Link to="/drink-search"><button>Back to Search</button></Link>
            
        </section>   
    );
    
                    }
    }

export default DrinkResult;