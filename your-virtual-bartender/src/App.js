import React, {useEffect, useState, useContext} from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import DrinkResult from './components/DrinkResult'
import SearchForm from './components/SearchForm'
import { Route } from 'react-router-dom'
import { DrinkContext } from './components/DrinkContext'

function App() { 
  const [searchTerm, setSearchTerm] = useState()
  return (
    <div className="App">  
      <Route exact path = "/" component={Header} />
      <Route exact path = "/recommendation/" component={RandomDrink}/>
      <Route exact path = "/drink-search/" 
             render={() => <SearchForm 
              searchTerm={searchTerm}
              
             />} />
      <Route exact path = "/drink-result/:searchterm" 
             render={(routerProps) => <DrinkResult
                match={routerProps.match}  />} />
      
     
    </div>
  );
  }


export default App;
