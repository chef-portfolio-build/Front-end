import React, { useState } from 'react';
import Recipes from "./Recipes"
import RecipeForm from "./RecipeForm"

export default function Profile() {

  const [recipes, setRecipes] = useState([]);

  const addNewRecipe = recipe => {
    const newRecipe = {
      title: recipe.title,
      description: recipe.description,
      ingredients: recipe.ingredients
    };
    setRecipes([...recipes, newRecipe])
  }

  return (
    <div>
      <Recipes recipes={recipes} />
      <RecipeForm addNewRecipe={addNewRecipe} />
    </div>
  );
}