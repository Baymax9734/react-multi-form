import React, { Component } from 'react'
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    //PROCESS FROM//
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  
  render() {
    const { values } = this.props;
    console.log("firstName:", values.firstName);

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
            <List>
              <List>
                <ListItemText
                  primary="First Name"
                  secondary={ values.firstName }
                />
              </List>
              <br/>
              <List>
                <ListItemText
                  primary="Last Name"
                  secondary={ values.lastName }
                />
              </List>
              <br/>
              <List>
                <ListItemText
                  primary="Email"
                  secondary={ values.email }
                />
              </List>
              <br/>
              <List>
                <ListItemText
                  primary="Occupation"
                  secondary={ values.occupation }
                />
              </List>
              <br/>
              <List>
                <ListItemText
                  primary="City"
                  secondary={ values.city }
                />
              </List>
              <br/>
              <List>
                <ListItemText
                  primary="Bioio"
                  secondary={ values.bio }
                />
              </List>
              <br/>
            </List>
          <br/>
          <Button 
            variant="contained"
            color="primary"
            style={ styles.button }
            onClick={ this.continue }>
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