import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  textField: {
    width: "25ch"
  },
  card: {
    paddingTop: "50px"
  }
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={classes.root}>
        <CardContent>
          <Typography component="h2" variant="h3">
            Contact Me
          </Typography>

          <form
            className="contact-form"
            action="https://formspree.io/xrgyayaz"
            method="POST"
          >
            <br />
            <br />
            <TextField
              type="name"
              className="form-control"
              placeholder="Name"
              name="name"
              required
            />
            <br />
            <br />
            <TextField
              type="email"
              className="form-control"
              placeholder="Email"
              name="name"
              required
            />
            <br />
            <br />
            <TextField
              className="form-control"
              type="text"
              placeholder="Message"
              rows="7"
              name="name"
              required
            />
            <br />
            <br />
            <Button type="submit">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </Paper>
  );
}
