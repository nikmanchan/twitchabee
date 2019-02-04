import React, { Component } from 'react';
// import { connect } from "react-redux";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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

class Streams extends Component {

    render() {
        const { classes } = this.props;
        
      return (
        <div className={classes.root}>
            <h2>Streams</h2>
        </div>
      );
    }
  }
  
//   const mapStateToProps = state => ({
//     state: state
//   });

  Streams.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Streams);
  