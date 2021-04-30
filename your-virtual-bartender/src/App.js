import React, {useEffect, useState} from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import SearchResult from './components/SearchResult'
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
          } = item;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setDrink(newDrink);
      } else {
        setDrink([]);
      }
      console.log(response.drinks)
    })
    .catch(console.error)
  }

  function handleChange(event) {
    setSearchTerm(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault()
    getDrink(searchTerm)
  }
  

  return (

    <div className="App">
      <SearchForm handleChange={handleChange}
                handleSubmit={handleSubmit}
                searchTerm={searchTerm}/>
      <Route exact path = "/" component={Header} />
      <Route exact path = "/recommendation/" component={RandomDrink}/>
      <Route exact path = "/drink-search" component={SearchForm} />
      <Route exact path = "/drink-result/:name">
        <SearchResult drink={drink}/>
      </Route>
      <Route exact path = "/drink-result-error" component={Error} />
    </div>
  );
}

export default App;
