import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import { axiosWithAuth } from "../utils/axiosWithAuth"
import Copyright from "./Reusable-Components/Copyright";
import Styling from "./Reusable-Components/Styling";
// import { Form, Field, withFormik, yupToFormErrors } from "formik";
// import * as Yup from "yup";


export default function SignIn() {
  const classes = Styling();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <AccountBoxIcon fontSize="Large" />

        <Typography component="h2" variant="h5">
          Sign in
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
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

// const FormikSignIn = withFormik({
//   mapPropsToValues({ username, password }) {
//     return {
//       username: username || '',
//       password: password || '',
//     }
//   },
//   validationSchema: Yup.object().shape({
//     username: Yup.string().required('Username required'),
//     password: Yup.string().required('Password required'),
//   }),

//   handleSubmit(values, { resetForm, setStatus, props }) {
//     const submitValue = {
//       username: values.username,
//       password: values.password,
//     }
//     console.log(values.username, values.password)
//     axiosWithAuth.post("/login", submitValue)
//       .then(res => {
//         console.log(res.data.message)
//         setStatus(res.data.token)
//         resetForm()
//         localStorage.setItem('token', res.data.token)
//         props.history.push('/profile')
//       })
//       .catch(err => {
//         console.log(err.response)
//       })
//   }
// })(SignIn)
