import React from 'react';

const Recipes = props => {
  return (
    <div>
      {props.recipes.map(recipe => (
        <div>
          <h4>Name: {recipe.title}</h4>
          <p>Description: {recipe.description}</p>
          <p>Ingredients: {recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;