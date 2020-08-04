import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { addMarker } from '../../redux/actions/map-actions';

class MapMarker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleToggleOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  handleToggleClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  addToGlobalMarkersArray = () => {
    this.props.dispatch(addMarker(this));
  };

  render() {
    const { location, _id, title, time, date, clusterer } = this.props;
    const formattedDate = date.substring(0, 10);

    const customIcon = {
      path:
        'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
      fillColor: '#2196F3',
      fillOpacity: 1,
      scale: 1.5,
      strokeColor: '#FFFFFF',
      strokeWeight: 2,
      strokeOpacity: 0.8,
      // eslint-disable-next-line no-undef
      anchor: new google.maps.Point(13, 17),
    };

    return (
      <Marker
        ref={this.addToGlobalMarkersArray}
        position={location}
        onClick={() => this.handleToggleOpen()}
        icon={customIcon}
        id={_id}
        clusterer={clusterer}
        title={_id}
        // eslint-disable-next-line no-undef
        animation={google.maps.Animation.DROP}
      >
        {this.state.isOpen && (
          <InfoWindow
            key={`${_id}_infoWindow`}
            position={location}
            onCloseClick={() => this.handleToggleClose()}
          >
            <div style={{ whiteSpace: 'pre' }}>
              <h1>{title}</h1>
              <p>
                Date visited (Y/M/D): {formattedDate}
                {'\n'}
                Time visited: {time}
              </p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMarker: (markerObject) => dispatch(addMarker(markerObject)),
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(MapMarker);
