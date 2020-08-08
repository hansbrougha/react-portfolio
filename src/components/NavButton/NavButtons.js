import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button component={Link} to={process.env.PUBLIC_URL + "/contact"}>
          Contact
        </Button>
        <Button component={Link} to={process.env.PUBLIC_URL + "/"}>
          Home
        </Button>
        <Button component={Link} to={process.env.PUBLIC_URL + "/portfolio"}>
          Portfolio
        </Button>
      </ButtonGroup>
    </div>
  );
}
