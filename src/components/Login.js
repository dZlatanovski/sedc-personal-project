import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = {
    red: {
        color: "red"
    },
    big: {
        fontSize: "4em"
    }
}

class Login extends Component {
    state = {

    }

    render(){
        const { classes } = this.props;

        return(
            <div className={classNames(classes.red, classes.big)}>LOGIN</div>
        )
    }

}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login);