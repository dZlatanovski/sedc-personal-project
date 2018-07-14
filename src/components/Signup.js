import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Card, CardContent, Grid, Typography, TextField, Button, FormControl } from '@material-ui/core';
import SignupCss from '../css/signup.css';


const styles = {
  containerStyles: {
    padding: "0 15px",
    marginTop: "150px"
  },
  form: {
    textAlign: "center"
  },
  btnFormControl: {
    margin: "25px 0"
  },
  cardStyles: {
    padding: "50px 25px"
  }
}

class Signup extends Component {
  state = {
    username: "",
    password: "",
    usernameError: false,
    passwordError: false,
    passwordErrorText: "",
    usernameErrorText: ""
  }

  componentDidMount(){
    document.body.classList.add('signupBody');
  }

  componentWillMount(){
    let loggedUsername = localStorage.getItem('username');
    let loggedPassword = localStorage.getItem('password');
    if(loggedUsername[0] !== undefined && loggedPassword !== undefined)
      window.location = "/";
  }

  inputChangeHandler = name => event => {
    let nameError = name + "Error";
    let nameErrorText = name + "ErrorText";
    if(event.target.value[0] !== " "){
      this.setState({
        [name]: event.target.value,
        [nameError]: false,
        [nameErrorText]: ""
      })
    } else{
      this.setState({
        [name]: event.target.value
      });
      this.signupSubmitHandler();
    }
  }

  signupSubmitHandler = () => (e) => {
    e.preventDefault();
    let formInputs = {
      username: this.state.username,
      password: this.state.password
    };

    for (const key in formInputs) {
      if(formInputs[key] === "" || formInputs[key][0] === " "){
        this.setState({
          [key + "Error"]: true,
          [key + "ErrorText"]: `Please enter a ${key} (Can't start with whitespace)`
        });
        return;
      }
    }

    localStorage.setItem('username', formInputs.username);
    localStorage.setItem('password', formInputs.password);
    localStorage.setItem('existingUsername', formInputs.username);
    localStorage.setItem('existingPassword', formInputs.password);
    window.location = "/";
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container justify="center" className={classes.containerStyles}>
        <Grid item lg={4} md={5} sm={6} xs={12}>
          <Card className={classes.cardStyles}>
            <CardContent>
              <Typography variant="display1" align="center" color="textSecondary">
                Sign Up
              </Typography>
              <form className={classes.form} onSubmit={this.signupSubmitHandler()}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="username-input"
                    label="Username"
                    type="text"
                    margin="normal"
                    value={this.state.username}
                    onChange={this.inputChangeHandler('username')}
                    error={this.state.usernameError}
                    helperText={this.state.usernameErrorText}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="password-input"
                    label="Password"
                    type="password"
                    margin="normal"
                    value={this.state.password}
                    onChange={this.inputChangeHandler('password')}
                    error={this.state.passwordError}
                    helperText={this.state.passwordErrorText}
                  />
                </FormControl>
                <FormControl className={classes.btnFormControl} fullWidth>
                  <Button variant="contained" color="primary" type='submit'>
                    Sign Up
                  </Button>
                </FormControl>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }

}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Signup);