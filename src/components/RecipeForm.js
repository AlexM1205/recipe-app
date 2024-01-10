// src/components/RecipeForm.js
import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
    const [newRecipe, setNewRecipe] = useState({
        name: '',
        ingredients: [],
        instructions: [],
    });
    const [ingredientInput, setIngredientInput] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value,
        });
    };

    const handleIngredientChange = (e) => {
        setIngredientInput(e.target.value);
    };

    const addIngredient = () => {
        if (ingredientInput.trim() !== '') {
            setNewRecipe({
                ...newRecipe,
                ingredients: [...newRecipe.ingredients, ingredientInput],
            });
            setIngredientInput('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newRecipe.name.trim() !== '' && newRecipe.ingredients.length > 0) {
            addRecipe(newRecipe);
            setNewRecipe({
                name: '',
                ingredients: [],
                instructions: [],
            });
            setIngredientInput('');
            setError('');
        } else {
            setError('Please enter a recipe name and at least one ingredient.');
        }
    };

    return (
        <div className=''>
            <h2>My Recipe</h2>
            <form className='formFlex' onSubmit={handleSubmit}>
                <label>
                    Recipe Name:
                    <input
                        type="text"
                        name="name"
                        value={newRecipe.name}
                        onChange={handleChange}
                        placeholder="Enter recipe name"
                    />
                </label>
                <label className='mod'>
                    Ingredients:
                    <input
                        type="text"
                        value={ingredientInput}
                        onChange={handleIngredientChange}
                        placeholder="Enter ingredient"
                    />
                    <button type="button" onClick={addIngredient}>
                        Add Ingredient
                    </button>
                </label>
                <button type="submit">Add Recipe</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RecipeForm;
