import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// MUI stuff
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// Icons
import AddIcon from '@material-ui/core/Add';
import HomeIcon from '@material-ui/core/Home';
import Notifications from '@material-ui/core/Notifications';

class Navbar extends Component {
    render() {
        const { authenticated } = this.props
        return (
            <AppBar>
                <Toolbar className="nav-container">
                    { authenticated ? (
                        <Fragment>
                            <MyButton tip="Post a scream!">
                                <AddIcon />
                            </MyButton>
                            <Link to="/">
                            <MyButton tip="Home">
                                <HomeIcon />
                            </MyButton>
                            </Link>
                            <MyButton tip="Notifications">
                                <Notifications />
                            </MyButton>
                        </Fragment>
                    ) : (
                        <Fragment>
                        <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                        </Fragment>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}

Navbar.propTypes = {
    authenticated: PropTypes.bool.isRequired
  };
  
  const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
  });

export default connect(mapStateToProps)(Navbar); 