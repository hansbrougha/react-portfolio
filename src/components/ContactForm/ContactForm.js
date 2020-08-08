import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    display: "flex",
    flexWrap: "wrap",
    fullWidth: true
  },
  formControl: {
    minWidth: 275
  },
  card: {
    background: theme.palette.primary.dark
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Card className={(classes.root, classes.card)}>
        <CardContent>
          <Typography component="h2" variant="h3">
            Contact Me
          </Typography>
          <Box className={classes.TextField}>
            <form action="https://formspree.io/xrgyayaz" method="POST">
              <br />
              <br />
              <TextField
                type="name"
                placeholder="Name"
                name="name"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                type="email"
                placeholder="Email"
                name="name"
                required
                fullWidth
                id="outlined-basic"
                variant="outlined"
              />
              <br />
              <br />
              <TextField
                variant="outlined"
                id="outlined-basic"
                className="formControl"
                type="text"
                placeholder="Message"
                rows="7"
                name="name"
                required
                fullWidth
              />
              <br />
              <br />
              <Button type="submit" size="large">
                Submit
              </Button>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}
