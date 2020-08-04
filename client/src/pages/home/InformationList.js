import React from 'react';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import CardMapInfo from './Card-MapInfo';
import Instruction from '../../components/instruction/instruction';

const InformationList = (props) => {
  const { visibleMarkers, showMarkers, showOutbreakMarkers } = props.mapReducer;

  return (
    <>
      <Instruction text='Currently viewing:' width='auto' />
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
        {showMarkers &&
          visibleMarkers.map((data) => {
            if (data.type === 'location') {
              return <CardMapInfo key={`${data._id}_sidebar_card`} {...data} />;
            }
          })}
        {showOutbreakMarkers &&
          visibleMarkers.map((data) => {
            if (data.type === 'outbreak') {
              return <CardMapInfo key={`${data._id}_sidebar_card`} {...data} />;
            }
          })}
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
