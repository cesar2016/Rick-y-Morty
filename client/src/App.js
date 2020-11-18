import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import Detayls from './components/Detayls';
import Nav from './components/Nav'
import Card from './components/Card' 
import { BrowserRouter, Switch } from 'react-router-dom';

import { ThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#880e4f',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}  >
      
       
          <Route 
          //path='/Detayls'
          //component={Detayls}
          path="/Detayls/:id" render={({match}) => <Detayls id={match.params.id}/> }
          />
          
          <Route 
          exact path='/'
          component={Nav}          
          />
          
       
          
       
    </ThemeProvider>
  );
}

export default connect(null, null)(App);
