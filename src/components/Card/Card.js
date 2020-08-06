import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    background: "#000000",
    color: "#ffffff"
  },
  media: {
    height: 150
  },
  marginAutoItem: {
    margin: "auto"
  },
  typography: {
    color: "#ffffff"
  },
  button: {
    color: "#ffffff"
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
      <Card className={classes.root}>
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
            <Typography variant="body2" color="#ffffff" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* Change anchor tag back to material ui Button when you figure it out */}

          <Button
            size="small"
            color="primary"
            href="props.repo"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
