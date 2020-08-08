import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";

import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import InstagramIcon from "@material-ui/icons/Instagram";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    color: "primary"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  card: {
    background: theme.palette.primary.dark
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={(classes.root, classes.card)}>
      <Typography variant="h6" style={{ paddingTop: "20px" }} gutterBottom>
        Welcome to my Portfolio!
      </Typography>
      <CardMedia
        className={classes.media}
        image="../../../public/assets/images/mainprofile.jpg"
        title="Andrew Hansbrough"
      />
      <CardContent>
        <Typography paragraph component="p">
          MERN stack developer seeking role as front or back-end developer. With
          a bachelor’s in mass media, I received my full stack web development
          certificate from KU Coding Bootcamp. I have applied my front-end
          design knowledge on collaborative projects such as Project You, a
          mobile-responsive health accountability app built with Twitter
          Bootstrap. Back-end technologies I’ve applied to applications include
          NodeJS, Object Oriented Principles, and MVC.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
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

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{ fontSize: "50px" }} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            MERN Stack Certified
            <br />@ KU Coding Bootcamp
          </Typography>
          <Typography paragraph>
            Location: Kansas Ciy, MO
            <br />
            Current Employer: UMKC Marr Sound Archives
            <br />
          </Typography>
          <Typography paragraph>
            Specializing in MongoDB, Express, React, NodeJS, and Bootstrap 4.
            <br />
            Trained in HTML, CSS, Javascript, jQuery, MySQL and NoSQL.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            _______________________
          </Typography>
          <Typography variant="h4" gutterBottom>
            Professional Experience
          </Typography>

          <Typography>
            Experienced Audio Archives Assistant with a demonstrated history of
            working in the field of Media Preservation. I am skilled in Adobe
            Production Suite, Wavelab 9, Audacity and have more than 7 years of
            experience supervising students.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            _______________________
          </Typography>
          <Typography paragraph>
            My experiences in the field of audiovisual preservation have given
            me opportunities to collaborate and innovate within the field and
            encouraged me to excel in my roles. With over 7 years in a
            supervisory role, I know what it means to carry my weight as a team
            member.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            _______________________
          </Typography>
          <Typography paragraph>
            I am motivated as a consumer of mobile and web technology,
            developing useful GUIs for the everyday user, and by new
            opportunities to collaborate with peers and experts in the field.
          </Typography>
          <Typography variant="h6" gutterBottom>
            <a href="portfolio">Check out my portfolio page!</a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
