import React, {useState} from 'react'
import './App.css';
import Home from './pages/Home'
import Header from './components/Header'
import RandomDrink from './components/RandomDrink'
import NameResult from './components/NameResult'
import IngResult from './components/IngResult'
import IngRecipe from './components/IngResult'
import SearchForm from './components/SearchForm'
import { Route } from 'react-router-dom'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

function App() { 
  const [searchName] = useState()
  return (
    <div className="App">  
    <Header />
      <Route exact path = "/" component={Home} />
      <Route exact path = "/recommendation/" component={RandomDrink}/>
      <Route exact path = "/drink-search/" 
             render={() => <SearchForm 
              searchName={searchName}
               />} />
      <Route exact path = "/drink-result-name/:searchname" 
             render={(routerProps) => <NameResult
                match={routerProps.match}  />} />
      <Route exact path = "/drink-result-ing/:searchIng" 
             render={(routerProps) => <IngResult
                match={routerProps.match}  />} />
      <Route exact path = "/drink-result-ing/recipe/:id" 
             render={(routerProps) => <IngRecipe
                match={routerProps.match}  />} />
    </div>
  );
  }


export default App;
