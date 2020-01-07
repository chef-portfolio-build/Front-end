import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import LocalDiningIcon from "@material-ui/icons/LocalDining";

import Styling from "./Reusable-Components/Styling"

export default function InputWithIcon() { 
  const classes = Styling();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h2" variant="h5">
          New Recipe
        </Typography>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          fullWidth
          label="Name of the dish"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalDiningIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          fullWidth
          label="Description"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalDiningIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          fullWidth
          label="Ingredients"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalDiningIcon />
              </InputAdornment>
            ),
          }}
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