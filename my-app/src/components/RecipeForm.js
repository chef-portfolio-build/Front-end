import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Styling from './Reusable-Components/Styling';

export default function RecipeForm(props) {

  const classes = Styling();

  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    image: '',
  });

  const handleChange = event => {
    setRecipe({ ...recipe, [event.target.id]: event.target.value });
  };

  // const handleImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     const url = URL.createObjectURL(event.target.files[0]);
  //     setRecipe({ ...recipe, image: url });
  //   }
  // }

  const submitForm = event => {
    event.preventDefault();
    props.addNewRecipe(recipe)
  };

  return (
    <form onSubmit={submitForm}>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h2" variant="h5">
            New Recipe
          </Typography>

          <TextField
            id="title"
            name="title"
            label="Name of the dish"
            type="text"
            multiline
            fullWidth
            rowsMax="4"
            onChange={handleChange}
            value={recipe.title}
          />

          <TextField
            id="description"
            name="description"
            label="Description"
            type="text"
            multiline
            fullWidth
            rowsMax="4"
            onChange={handleChange}
            value={recipe.description}
          />

          <TextField
            id="image"
            name="image"
            label="Image URL"
            type="image"
            multiline
            fullWidth
            rowsMax="4"
            onChange={handleChange}
            value={recipe.image}
          />
          <TextField
            id="ingredients"
            name="ingredients"
            label="Ingredients"
            multiline
            fullWidth
            rows="4"
            value={recipe.ingredients}
            onChange={handleChange}
          />

          {/* <Button
            fullWidth
            variant="outlined"
            component="label"
            color="primary"
            className={classes.submit}
          >
            Upload Image
              <input
              type="file"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </Button> */}

          <Button type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add recipe
        </Button>

        </div>
      </Container>
    </form>
  )
}