import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import StickyFooter from "../components/Footer/Footer";
import Bio from "../components/Bio/Bio";
import backdrop from "../components/Backdrop/7150.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: theme.palette.primary.transparent
  },

  backdrop: {
    backgroundImage: `url(${backdrop})`
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper className={(classes.paper, classes.backdrop)}>
            <Grid container spacing={3}>
              <Grid item xs={3}></Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Paper className={classes.paper}>
                  <Bio />
                </Paper>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <StickyFooter />
    </div>
  );
}
