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

import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Copyright from "./Reusable-Components/Copyright";
import Styling from "./Reusable-Components/Styling";

import Data from "./Reusable-Components/Data";

const Register = ({ values, handleChange }) => {
  console.log(values)
  const classes = Styling();
  const data = Data;

  // const [location, setLocation] = React.useState("");
  // const handleLocation = event => {
  //   setLocation(event.target.value);
  // };

  const inputLabel = React.useRef("");

  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

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
        <form className={classes.form}>
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
            value={values.username}
            onChange={handleChange}
          />
          {/* <ErrorMessage name="username" /> */}

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
            value={values.password}
            onChange={handleChange}
          />
          {/* <ErrorMessage name="password" /> */}

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="tel"
            label="Phone"
            type="number"
            id="tel"
            autoComplete="current-tel"
            value={values.tel}
            onChange={handleChange}
          />
          {/* <ErrorMessage name="tel" /> */}

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Location
            </InputLabel>
            <Select
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="location"
              id="location"
              value={values.location}
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="Location" disabled>
                Location
              </MenuItem>
              {data.map((location, index) => {
                return <MenuItem key={index} value={location.name}>{location.name}</MenuItem>
              })}
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

const FormikRegister = withFormik({
  mapPropsToValues({ username, password, tel, location }) {
    return {
      username: username || '',
      password: password || '',
      tel: tel || '',
      location: location || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().min(6).required(),
    password: Yup.string().min(4).required(),
    // tel: Yup.number().tel().required().min(10),
    // location: Yup.string().oneOf(['UI-Dev', 'UX-Dev', 'ReactI-Dev', 'ReactII-Dev', 'Backend-Dev']).required(),
  }),

})(Register)
export default FormikRegister;


