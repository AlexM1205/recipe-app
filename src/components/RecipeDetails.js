// src/components/RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe, closeDetails }) => {
    return (
        <div className='recipeDetails'>
            <h2>{recipe.name}</h2>
            <h3>Ingredients</h3>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            {/* <h3>Instructions</h3>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol> */}
            <button onClick={closeDetails}>Close</button>
        </div>
    );
};

export default RecipeDetails;
