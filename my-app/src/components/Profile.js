import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Styling from "./Reusable-Components/Styling"

export default function InputWithIcon() {
  const classes = Styling();

  const [value, setValue] = useState({ title: '', description: '', ingredients: '' });

  const handleChange = event => {
    // console.log(`event`, event.target.value);
    
    setValue({ ...value, title: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
        />
        <TextField
          id="ingredients"
          name="ingredients"
          label="Ingredients"
          multiline
          fullWidth
          rows="8"
        />
        <Button type="submit"
          fullWidth
          variant="outlined"
          color="primary"
          className={classes.submit}>
          Add recipe
        </Button>
      </div>
    </Container>
  );
}