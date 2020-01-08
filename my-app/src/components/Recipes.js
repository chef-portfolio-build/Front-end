import React from 'react';

const Recipes = props => {
  return (
    <div className='recipe-list'>
      {props.recipes.map(recipe => (
        <div className='recipe'>
          <h4>Name: {recipe.title}</h4>
          <p>Description: {recipe.description}</p>
          <p>Ingredients: {recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;