import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button edge="start" color="inherit" aria-label="menu" href="/">
            <HomeIcon fontSize="large" />
          </Button>
          <Button edge="start" color="inherit" aria-label="menu" href="/profile">
            <AccountBoxIcon fontSize="large" />
          </Button>
          <Typography variant="h5" className={classes.title}>
            Chef Portfolio
          </Typography>
          <Button color="inherit" href="/login">
            <Typography variant="h6">Login</Typography>
          </Button>
          <Button color="inherit">
            <ExitToAppIcon fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
