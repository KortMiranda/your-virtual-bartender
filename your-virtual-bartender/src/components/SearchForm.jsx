import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function SearchForm() {
    const [searchName, setSearchName] = useState()
    const [searchIng, setSearchIng] = useState()

        function handleChange(event) {
        setSearchName(event.target.value)
        setSearchIng(event.target.value)
        
    }
    function handleSubmit(event) {
        event.preventDefault()
        setSearchName(searchName)
        setSearchIng(searchIng)
    }
    
    return (
        <div>
            <div className="header-banner">
            <div className="talk-bubble tri-right round right-in">
                <div className="talk-text">
                    <h2>What are you feeling?</h2>
                </div>
            </div>
            </div>
            <Container className="search-form">
            <h2>Search Cocktail Recipe</h2>
            
            <Form inline className="inner-form" onSubmit={handleSubmit}>  
                <FormLabel>By Name: </FormLabel>
                <FormControl
                    type="text" 
                    name="name"
                    id="name"
                    required
                    placeholder="Drink Name"
                    onChange={handleChange}
                    input={searchName}
                     />
                     <Link to={`drink-result-name/${searchName}`}><Button variant="outline-dark ml-2 "type='submit'>Search
                     </Button></Link>
            </Form>
            <Form inline className="inner-form" onSubmit={handleSubmit}>  
                <FormLabel>By Ingredient: </FormLabel>
                <FormControl
                    type="text" 
                    ing="ing"
                    id="ing"
                    placeholder="Ingredient Name"
                    onChange={handleChange}
                    input={searchIng}
                     />
                     <Link to={`drink-result-ing/${searchIng}`}><Button variant="outline-dark ml-2 "type='submit'>Search
                     </Button></Link>
            </Form>
            
                     <Link to="/"><Button variant="outline-dark ml-2" className="home-button">Back to home</Button></Link>
            </Container>    
        </div>
    );
}



export default SearchForm;