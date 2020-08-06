import React from 'react';
import Instruction from '../instruction/instruction';
import CardLocationInfo from '../card/Card-LocationInfo';
import { connect } from 'react-redux';
import '../../pages/home/home.css';

const MapCardList = (props) => {
  const { visibleMarkers, showMarkers, showOutbreakMarkers } = props.map;
  const { windowSize } = props;

  return (
    <div>
      <Instruction text='Visible Markers:' width='95%' />
      <div
        className='sidebar-card-list-cards'
        style={{ height: `${windowSize.height * 0.9 - 162}px` }}
      >
        {showMarkers &&
          visibleMarkers.map(
            (marker) =>
              marker.type === 'location' && (
                <CardLocationInfo key={marker._id} {...marker} />
              )
          )}
        {showOutbreakMarkers &&
          visibleMarkers.map(
            (marker) =>
              marker.type === 'outbreak' && (
                <CardLocationInfo key={marker._id} {...marker} />
              )
          )}
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
