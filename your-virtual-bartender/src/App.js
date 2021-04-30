import React, {useEffect, useState} from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import DrinkResult from './components/DrinkResult'
import CocktailList from './components/CocktailList'
import SearchForm from './components/SearchForm'
import Error from './pages/Error'
import { Route } from 'react-router-dom'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [drink, setDrink] = useState()
  
  
  useEffect(() => {
    getDrink(searchTerm)
  }, [])
  
  function getDrink(searchTerm) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
    // const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini`
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setDrink(response.drinks)
      const {drinks} = response
      if (drinks) {
        const newDrink = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
            strInstructions,
            // strIngredient1,
            // strIngredient2,
            // strIngredient3,
            // strIngredient4,
            // strIngredient5,
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            instructions: strInstructions,
          };
        });
        setDrink(newDrink[0])
        console.log(drink.id)
      } else {
        setDrink([]);
      }
      // console.log(response.drinks)
    })
    .catch(console.error)
  }

  return (

    <div className="App">
      <SearchForm 
                getDrink={getDrink}
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}/>
      <DrinkResult drink={drink}/>
      
      <Route exact path = "/" component={Header} />
      <Route exact path = "/recommendation/" component={RandomDrink}/>
      <Route exact path = "/drink-search" component={SearchForm} />
      <Route exact path = "/drink-result/"></Route>
      <Route exact path = "/drink-result-error" component={Error} />
    </div>
  );
}

export default App;
