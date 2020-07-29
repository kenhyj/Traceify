import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';

function MapInfoWindow() {
  render() {
    const { title } = this.props;
    return (
      <InfoWindow>
        <div>{title}</div>
      </InfoWindow>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MapInfoWindow);
