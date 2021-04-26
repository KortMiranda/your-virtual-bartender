import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import Result from './components/Result'
import SearchForm from './components/SearchForm'
import Error from './components/Error'
import { Route } from 'react-router-dom'



function App() {
  const [ranDrink, setRanDrink] = useState()

  const getRanDrink = () => {
    const url = "www.thecocktaildb.com/api/json/v1/1/random.php"
    fetch(url)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setRanDrink(json)
    })
    .catch(console.error)
  }
  useEffect(
      () => {getRanDrink()}
      ,[])
      
 
  return (
    <div className="App">
      <Route exact path = "/" component={Header} />
      <Route exact path = "/recommendation" component={RandomDrink} />
      <Route exact path = "/drink-search" component={SearchForm} />
      <Route exact path = "/drink-result" component={Result} />
      <Route exact path = "/drink-result-error" component={Error} />
    </div>
  );
}

export default App;
