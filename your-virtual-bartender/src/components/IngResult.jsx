import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import IngRecipe from './IngRecipe'


function IngResult({match} ) {
    const [loading, setLoading] = useState(false);
  const [drinkIng, setDrinkIng] = useState(null)
  const [drinkId, setDrinkId] = useState(null)

  useEffect(() => {
      setLoading(true)
    async function getDrinkIng() {
      
        try {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${match.params.searchIng}`
            )
            const data = await response.json()
            if (data.drinks) {
                const num=Math.floor(Math.random()* 20)
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    idDrink: id,
                
                } = data.drinks[num]
                const newDrinkIng = {
                    name,
                    image,
                }
                setDrinkIng(newDrinkIng)
                const newDrinkId = {
                    id,
                }
                setDrinkId(newDrinkId.id)
                
            } else {
                setDrinkIng(null)
                setDrinkId(null)
            }
        } catch (error) {
            console.log(error)
        }
        
        setLoading(false)
    }
    getDrinkIng()    
  }, [match.params.searchIng])
  if (loading) {
    return <h2 className="section-title">Making that drink for you...</h2>
  }
  if(!drinkIng) {
    return (
    <div>
    <h2 className="section-title">no cocktail to display</h2>
    <Link to="/drink-search"><button>Back to Search</button></Link>
    </div>)
  } else {
    const {
        name,
        image,
    } = drinkIng
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
             <IngRecipe drinkId={drinkId}/> 
             <Link to="/drink-search"><Button variant="outline-dark">New Search</Button></Link>
             <Link to="/"><Button variant="outline-dark ml-2">Back Home</Button></Link>    
            </div>
             </div>
        </section>  
        </div> 
    );
    
        }
    }

export default IngResult;