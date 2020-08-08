import React from "react";
// import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import DevIcons from "../DevIcons/DevIcons";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    background: theme.palette.primary.dark
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 300
  }
}));

export default function ContactCard(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <CardActionArea>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                Andrew Hansbrough
              </Typography>
              <Typography variant="subtitle1" color="textPrimary">
                MERN Stack Developer
              </Typography>
              <Typography variant="subtitle1" paragraph>
                Certified Web Developer with an extensive background in Mass
                Media, Audiovisual Preservation, and Archives.I specialize in
                the following tools and languages:
              </Typography>

              <DevIcons />

              <br />
              <Typography component="h3" variant="h5">
                Let's Connect!
              </Typography>

              <IconButton
                aria-label="Email"
                href="mailto:email@example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailOutlineIcon style={{ fontSize: "40px" }} />
              </IconButton>

              <IconButton
                aria-label="Resume"
                href="https://drive.google.com/file/d/1FnF-P1qLZIP1aEyPf6f0Meht-fbFfoiu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InsertDriveFileIcon style={{ fontSize: "40px" }} />
              </IconButton>

              <IconButton
                aria-label="Github"
                href="https://github.com/hansbrougha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ fontSize: "40px" }} />
              </IconButton>

              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/hansbroughandrew/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon style={{ fontSize: "40px" }} />
              </IconButton>

              <IconButton
                aria-label="Instagram"
                href="https://instagram.com/marrsoundarchives"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: "40px" }} />
              </IconButton>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image="./assets/images/ah-profile.jpg"
              title={"placeholder"}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
