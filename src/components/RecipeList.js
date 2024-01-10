// src/components/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes, viewRecipe, deleteRecipe }) => {
    return (
        <div>
            <h2>Recipes:</h2>
            <ol>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <span onClick={() => viewRecipe(recipe)}>{recipe.name}</span>
                        <button onClick={() => deleteRecipe(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default RecipeList;
