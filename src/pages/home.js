import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

import Scream from "../components/Scream";
import Profile from '../components/Profile';

import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';

class Home extends Component {
  state = {
    screams: null
  };

  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const { screams, loading } = this.props.data;
    let recentScreamsMarkup = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item sm={8} xs={12}>
            {recentScreamsMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getScreams }
)(Home);
