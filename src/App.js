// src/App.js
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const viewRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeDetails = () => {
    setSelectedRecipe(null);
  };

  const deleteRecipe = (index) => {
    if (window.confirm('Are you sure you want to delete this recipe? It looks really good')) {
      const updatedRecipes = [...recipes];
      updatedRecipes.splice(index, 1);
      setRecipes(updatedRecipes);
    }
  };

  return (
    <div className='container'>
      <div className='glassEffect'>
        <div className="App">
          <h1>Build Your Own Recipe!</h1>
          <RecipeForm addRecipe={addRecipe} />
          <RecipeList recipes={recipes} viewRecipe={viewRecipe} deleteRecipe={deleteRecipe} />
          {selectedRecipe && <RecipeDetails recipe={selectedRecipe} closeDetails={closeDetails} />}
        </div>
      </div>
    </div>
  );
}

export default App;
