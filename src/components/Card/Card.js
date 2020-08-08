import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450
  },
  media: {
    height: 150
  },
  marginAutoItem: {
    margin: "0 auto",
    background: theme.palette.primary.dark
  },
  paper: {
    background: theme.palette.primary.transparent
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Paper className={classes.paper}>
        <Card className={(classes.root, classes.marginAutoItem)}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.image}
              alt={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.name}
              </Typography>
              <Typography variant="body2" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              component={"a"}
              size="large"
              color="secondary"
              className={classes.button}
              raised="true"
              href={props.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </Button>
            <Button
              component={"a"}
              size="large"
              color="secondary"
              className={classes.button}
              raised="true"
              href={props.deployed}
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}
