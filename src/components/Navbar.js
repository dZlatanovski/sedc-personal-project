import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import { FormControl, TextField, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerList: {
    width: "250px"
  },
  modal: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    left: "50%",
    bottom: "50%",
    transform: "translate(-50%, 50%)",
    maxWidth: "80%"
  }
});

class Navbar extends React.Component {
  state = {
    anchorEl: null,
    left: false,
    modalOpen: false,
    username: "placeholder",
    password: "placeholder",
    weight: "74",
    height: "174",
    age: "20",
    usernameError: false,
    passwordError: false,
    weightError: false,
    heightError: false,
    ageError: false,
    usernameErrorText: "",
    passwordErrorText: "",
    weightErrorText: "",
    heightErrorText: "",
    ageErrorText: "",
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logoutClickHandler = () => {
    localStorage.setItem('username', undefined);
    localStorage.setItem('password', undefined);
    window.location = "/login";
  }

  profileClickHandler = () => {
    this.setState({ modalOpen: true });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

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

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const drawerList = (
      <List className={classes.drawerList}>
        <ListItem button>
          <ListItemText primary="My Recipes" />
        </ListItem>
      </List>
    );

    return (
      <div className={classes.root}>
        <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
          >
            <div className={classes.modal}>
              <Typography variant="headline" align="center" id="modal-title">
                Profile Settings
              </Typography>
              <form style={{textAlign:"center"}}>
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
                
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="weight-input"
                    label="Weight"
                    type="number"
                    margin="normal"
                    value={this.state.weight}
                    onChange={this.inputChangeHandler('weight')}
                    error={this.state.weightError}
                    helperText={this.state.weightErrorText}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="height-input"
                    label="Height"
                    type="number"
                    margin="normal"
                    value={this.state.height}
                    onChange={this.inputChangeHandler('height')}
                    error={this.state.heightError}
                    helperText={this.state.heightErrorText}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    id="age-input"
                    label="Age"
                    type="number"
                    margin="normal"
                    value={this.state.age}
                    onChange={this.inputChangeHandler('age')}
                    error={this.state.ageError}
                    helperText={this.state.ageErrorText}
                  />
                </FormControl>

                <Button type="submit" variant="contained" color="primary">Save Changes</Button>
              </form>
              <SimpleModalWrapped />
            </div>
          </Modal>
        </div>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {drawerList}
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              onClick={this.toggleDrawer('left', true)}
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.profileClickHandler}>Profile</MenuItem>
                <MenuItem onClick={this.logoutClickHandler}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

class SimpleModal extends React.Component{
  state = {
    modalOpen: false,
  };

  handleModalClose = () => {
    this.setState({ modalOpen: false });
  };

  // handleOpen = () => {
  //   this.setState({ modalOpen: true });
  // };


  render(){
    const { classes } = this.props;

    return(
      <div>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.modalOpen}
            onClose={this.handleModalClose}
          >
            <div className={classes.modal}>
              <Typography variant="title" id="modal-title">
                Text in a modal
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <SimpleModalWrapped />
            </div>
          </Modal>
        </div>
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default withStyles(styles)(Navbar);