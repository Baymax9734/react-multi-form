import React, { Component } from 'react'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class FormPersonalDetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const { values, handleChange } = this.props;
    console.log("values:", values);

    return (
      // <MuiThemeProvider>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
          <TextField
            id="standard-dense"
            label="Enter Your Occupation"
            margin="dense"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <TextField
            id="standard-dense"
            label="Enter Your City"
            margin="dense"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <TextField
            id="standard-dense"
            label="Enter Your Bioio"
            margin="dense"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <Button 
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}>
              Continue
          </Button>
          <Button 
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.back}>
              Back
          </Button>
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