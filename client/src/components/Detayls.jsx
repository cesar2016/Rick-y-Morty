import React, { useState, useEffect  } from 'react';
import { connect } from "react-redux";
import {allPerson} from "../actions/index" 

 
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import CssBaseline from '@material-ui/core/CssBaseline'; 
import Container from '@material-ui/core/Container';

import Button from '@material-ui/core/Button'; 
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 60,
  },
  media: {
   
    height: 0,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    margin: theme.spacing(1),
  },
}));

 function RecipeReviewCard({id, allPerson, all_person}) {
   

  
 ///console.log('TRAE LAGOOOO ', all_person)
 useEffect(() => {    
  allPerson()     
  },[])

  var roots = all_person.map(function(num) {
    return num.results;
    
});
 

var person = roots[0] ? roots[0].map(function(personaje) {
  return personaje;
  
}):'Ups! no hya personajes';
 
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const idP = id-1
  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">

    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
           {person[idP].id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={person[idP].name}
        subheader={person[idP].status}
      />
      <CardMedia
        className={classes.media}
        image={person[idP].image}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         <p>Especie: {person[idP].species}</p>
         <p>Gender: {person[idP].gender}</p>
         <p>Created: {person[idP].created}</p>
         <p>Type: {person[idP].type}</p> 
        </Typography>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<ArrowBackIosIcon />}
        href="/"
      >
        Back to Home
      </Button>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
           
        </CardContent>
      </Collapse>
    </Card>
       
    </Container>
  </React.Fragment>
    
  );
}
const mapDispatchToProps = dispatch => {
  return {
    allPerson: () => dispatch(allPerson()),
     
    
  }
}

const mapStateToProps = state => {
  return {
    all_person: state.all_person
     
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeReviewCard);
