import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <HomeIcon fontSize="large" />
          </IconButton>

          <Button color="inherit" href="/profile">
            <Typography variant="h6" className={classes.title}>
              Profile
            </Typography>
          </Button>

          <Typography variant="h5" className={classes.title}>
            Chef Portfolio
          </Typography>
          <Button color="inherit" href="/">
            <Typography variant="h6" className={classes.title}>
              Login
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
