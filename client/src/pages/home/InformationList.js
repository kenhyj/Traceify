import React from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchLocations } from '../../redux/actions/map-actions';
import CardMapInfo from './Card-MapInfo';

const InformationList = (props) => {
  return (
    <Container style={{ maxHeight: '600px', overflow: 'auto' }}>
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
      <CardMapInfo />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    mapReducer: state.map,
    data: state.map.data,
    outbreaks: state.map.outbreaks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InformationList);
