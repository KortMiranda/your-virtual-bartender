import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState()

        function handleChange(event) {
        setSearchTerm(event.target.value)
        
      }
      function handleSubmit(event) {
        event.preventDefault()
        setSearchTerm(searchTerm)
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
           
            
            <Container className="mt-2">
            <Link to='/'><button>Back to main screen</button></Link>
            <h2>Search Cocktail Recipe</h2>
            <Form inline  onSubmit={handleSubmit}>  
                <FormLabel>By Name: </FormLabel>
                <FormControl 
                    type="text" 
                    name="name"
                    id="name"
                    required
                    placeholder="Drink Name"
                    onChange={handleChange}
                    input={searchTerm}
                     />
                     <Link to={`drink-result/${searchTerm}`}><button type='submit'>Submit
                     </button></Link>
            </Form>
            </Container>
            
                    
            
        </div>
    );
}



export default SearchForm;