import React from 'react';
import Instruction from '../../components/instruction/instruction';
import CardLocationInfo from '../../components/card/Card-LocationInfo';
import { connect } from 'react-redux';
import './home.css';

const MapCardList = (props) => {
  const { visibleMarkers, showMarkers, showOutbreakMarkers } = props.map;

  return (
    <div>
      <Instruction text='Currently viewing:' width='95%' />
      <div className='sidebar-card-list-cards'>
        {showMarkers &&
          visibleMarkers.map((marker) => {
            if (marker.type === 'location') {
              return <CardLocationInfo key={marker._id} {...marker} />;
            }
          })}
        {showOutbreakMarkers &&
          visibleMarkers.map((marker) => {
            if (marker.type === 'outbreak') {
              return <CardLocationInfo key={marker._id} {...marker} />;
            }
          })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    map: state.map,
  };
};

export default connect(mapStateToProps)(MapCardList);
