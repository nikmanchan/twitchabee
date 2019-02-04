import React, { Component } from 'react';
import './Navbar.css'
// import { connect } from "react-redux";
import {HashRouter as Router, withRouter, Link} from 'react-router-dom';
import logo from './logo.png';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

class Navbar extends Component {

    handleStreamClick = () => {
        this.props.history.push('/streams');
    }

    render() {
        const { classes } = this.props;
        
      return (
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" color="inherit" className={classes.grow}> */}
            {/* <div className="logo"> */}
              <img src={logo} alt="logo" className="logo"></img>
            {/* </div> */}
            {/* </Typography> */}
            <Router>
            <div>
                <Button>
                    <Link to="/" color="inherit" >Home</Link>
                </Button>
                &emsp;
                <Button>
                    <Link to="/streams" color="inherit">Streams</Link>
                </Button>

            </div>
            </Router>
          </Toolbar>
        </AppBar>
      </div>
      );
    }
  }
  
//   const mapStateToProps = state => ({
//     state: state
//   });

  Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);
  