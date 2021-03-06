import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
  images: {
    width: '100%',
  },
});

const Recipes = props => {

  const classes = useStyles();

  return (
    <div>
      {props.recipes.map(recipe => (
        <Card className={classes.card}>
          <CardActions>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>

          <CardContent>
            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
              Name of the dish
            </Typography> */}
            <Typography variant="h5" component="h2">
              {recipe.title}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              Description
            </Typography>
            <Typography variant="body2" component="p">
              {recipe.description}
            </Typography>
            {/* <Typography variant="body2" component="p">
              {recipe.image}
            </Typography> */}
            {recipe.image && <img src={recipe.image} alt="img" className={classes.images} />}

            <Typography className={classes.pos} color="textSecondary">
              Ingredients
            </Typography>
            <Typography variant="body2" component="p">
              {recipe.ingredients}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;