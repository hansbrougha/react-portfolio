import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NavButtons from "../NavButton/NavButtons";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "#ffffff",
    backgroundColor: "#000000"
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <Box height="500%">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Paper className={classes.paper}>
              <Typography component="h2" variant="h3">
                Andrew Hansbrough
              </Typography>
              <Typography component="h4" variant="h5">
                MERN Stack Developer
              </Typography>
              <NavButtons />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
