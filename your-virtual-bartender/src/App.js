import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home'
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import DrinkResult from './components/DrinkResult'
import SearchForm from './components/SearchForm'
import { Route } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

function App() { 
  const [searchTerm] = useState()
  return (
    <div className="App">  
    <Header />
      <Route exact path = "/" component={Home} />
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
