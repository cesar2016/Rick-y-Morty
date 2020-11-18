import React, { useState, useEffect  } from 'react';
import { connect } from "react-redux";
import {allPerson} from "../actions/index" 
import Detayls from "./Detayls"
import { NavLink } from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// ES6 Modules or TypeScript
//import Swal from 'sweetalert2'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { shadows } from '@material-ui/system';




 function Card({allPerson, all_person}) {

  useEffect(() => {    
    allPerson()     
    },[])
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 2,
        margin: 10
        
      },
      paper: {
        height: 240,
        width: 300,
        marginTop: '100px',
        marginLeft: 10
      },
      control: {
        padding: theme.spacing(1),
      },
    }));
    
    
      const [spacing, setSpacing] = React.useState(2);
      const classes = useStyles();
    
      const handleChange = (event) => {
        setSpacing(Number(event.target.value));
      };


      var roots = all_person.map(function(num) {
        return num.results;
        
    });

    
 
 
  return (

<Grid container className={classes.root} spacing={3} boxShadow={3}>  
  {roots.length > 0 ? roots[0].map((image, index) => (
    <NavLink to ={`/Detayls/${image.id}`} >
       
    <Grid item xs={3}>        
    <Paper className={classes.paper}>    
    <div key={image}>
        <img className={classes.img} src={image.image} title={image.name}  />             
    </div>     
    </Paper>
    </Grid> 
    </NavLink>
  )): 'Ups! no se encontraron resultados con esos parametros de busqueda'}
</Grid>

 

      
  
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

export default connect(mapStateToProps, mapDispatchToProps)(Card);
