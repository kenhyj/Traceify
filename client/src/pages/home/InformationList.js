import React from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import CardMapInfo from './Card-MapInfo';
import Instruction from '../../components/instruction/instruction';

const InformationList = (props) => {
  const { visibleMarkers } = props.mapReducer;
  console.log(visibleMarkers);

  return (
    <>
      <Instruction text='Currently viewing on map:' width='auto' />
      <Container
        style={{
          height: '100%',
          maxHeight: `${props.windowSize.height * 0.75}px`,
          overflow: 'auto',
          paddingLeft: '0px',
          paddingRight: '0px',
          margin: 'auto',
          display: 'inline-block',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {visibleMarkers.map((data) => (
          <CardMapInfo key={`${data._id}_sidebar_card`} {...data} />
        ))}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mapReducer: state.map,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InformationList);
