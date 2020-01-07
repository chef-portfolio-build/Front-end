import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Copyright from "./Reusable-Components/Copyright";
import Styling from "./Reusable-Components/Styling";


export default function Register() {
  const classes = Styling();


  const [location, setLocation] = React.useState("");

  const inputLabel = React.useRef("");

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setLocation(event.target.value);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar>
          <AccountCircleIcon fontSize="Large" />
        </Avatar>



        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} Validate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            label="Phone"
            type="phone"
            id="phone"
            autoComplete="current-phone"
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              variant="outlined"
              margin="normal"
              required
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={location}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="Location" disabled>
                Location
              </MenuItem>
              <MenuItem value={`San Diego`}>San Diego</MenuItem>
              <MenuItem value={`South Carolina`}>South Carolina</MenuItem>
              <MenuItem value={`New Jersey`}>New Jersey</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container>
            <Grid item>
              <Link href="/" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>


        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );

}

