import React from 'react';

const Recipe = ({title, ingredients, image}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Ingredients: {ingredients}</p>
            <img src={image} alt=""></img>
        </div>
    );
}
export default Recipe;
