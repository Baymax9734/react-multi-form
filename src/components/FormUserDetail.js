import React, { Component } from 'react'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class FormUserDetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
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
                Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <br/>
          <TextField
            id="standard-dense"
            label="First Name"
            margin="dense"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <TextField
            id="standard-dense"
            label="Last Name"
            margin="dense"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <TextField
            id="standard-dense"
            label="Email"
            margin="dense"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br/>
          <Button 
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}>
              Continue
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