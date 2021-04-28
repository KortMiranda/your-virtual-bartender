import React from 'react'
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import Result from './components/Result'
import SearchForm from './components/SearchForm'
import Error from './components/Error'
import { Route } from 'react-router-dom'



function App() {
  
  
  return (
    <div className="App">
      <Route exact path = "/" component={Header} />
      <Route exact path = "/recommendation/" component={RandomDrink}/>
      <Route exact path = "/drink-search" component={SearchForm} />
      <Route exact path = "/drink-result" component={Result} />
      <Route exact path = "/drink-result-error" component={Error} />
    </div>
  );
}

export default App;
