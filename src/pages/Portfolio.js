import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../components/Card/Card";
import StickyFooter from "../components/Footer/Footer";
import ghapps from "../ghapps.json";
import backdrop from "../components/Backdrop/7150.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    background: theme.palette.primary.dark
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
              {ghapps.map((ghapps) => (
                <MediaCard
                  id={ghapps.id}
                  key={ghapps.id}
                  name={ghapps.name}
                  image={ghapps.image}
                  description={ghapps.description}
                  repo={ghapps.repo}
                  deployed={ghapps.deployed}
                />
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <StickyFooter />
    </div>
  );
}
