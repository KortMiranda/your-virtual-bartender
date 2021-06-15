# Your Virtual Bartender

## Description 

My app is called Your Virtual Bartender. It's a recipe searching app using the TheCocktailDB API that helps people discover new cocktail recipes or if they are looking for a specific recipe. One button on the landing page says "something more specific" if the user is looking for a specific drink recipe. Once clicked, the user will be directed to a form to search for a drink either by name or a specific ingredient. Another button on the landing page says "surprise me" which will generate a random cocktail recipe.

<img width="990" alt="Screen Shot 2021-05-02 at 9 24 13 PM" src="https://user-images.githubusercontent.com/74841038/116836672-0a829300-ab8d-11eb-8e1f-607293a1a23b.png">

## Technologies Used

* React.js
* CSS
* Bootstrap
* TheCocktailDB.com (API)

## Installation Instructions

1. Fork and clone this repository into your terminal
2. Change into the new directory 
3. Install dependencies (`<npm i>` or `<npm install>`)
4. Run app into browser (`<npm start>`)

## Contribution Guidelines

The search form works great as long as the user types excatly what they want within the input bar, however if an input is typed incorrectly or doesn't match a name or ingredient within the API, the search result screen will return blank without the "back to home" or "search again" buttons. Which could be a potential problem for the user regardless I did put a conditional statement for the search result components to return header that says "no cocktail to display". An error page would a great conntribution to this app when the time allows for it.

I would also like to eventually add more fields to the search form where you can search for a coctail by category or if the drink is alcoholic or non-alcoholic for the user to get a more customized response 

## Refrences 

* https://www.thecocktaildb.com/api.php
* https://unsplash.com/photos/EX8UtPjOFhY
* https://codepen.io/Founts/pen/gmhcl?editors=0100
* https://github.com/satishf889/react-cocktaildb-project
* https://www.nicepng.com/ourpic/u2q8w7o0u2w7y3r5_cocktail-vector-svg-martini-glass-silhouette-png/

## Deployed Site

* https://yourvirtualbartender.surge.sh/
