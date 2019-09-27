import React, { Component } from 'react'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Success extends Component {
    
  render() {
    return (
      // <MuiThemeProvider>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Confirm user Data
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
          <br/>
        </React.Fragment>
      // </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}