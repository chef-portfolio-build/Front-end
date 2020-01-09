import { makeStyles } from "@material-ui/core/styles";

const Styling = makeStyles(theme => ({
  // SignIn useStyles
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },

  // Register useStyles
  formControl: {
    width: "100%", //Fixed issue
    margin: theme.spacing(1),
    marginLeft: 0, //Fix issue
    marginTop: 16, //Fix issue
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  // Profile useStyles
  margin: {
    margin: theme.spacing(1),
  },
}));

export default Styling