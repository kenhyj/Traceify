import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import virusImg from '../../assets/virus.svg';
import { addMarker } from '../../redux/actions/map-actions';

class MapOutbreakMarker extends Component {
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

  addToGlobalMarkersArray = (markerObject) => {
    this.props.dispatch(addMarker(markerObject));
  };

  render() {
    const { location, id, title, date } = this.props;
    const formattedDate = new Date(date).toLocaleDateString();

    return (
      <Marker
        ref={this.addToGlobalMarkersArray(this)}
        position={location}
        onClick={() => this.handleToggleOpen()}
        icon={virusImg}
        id={id}
      >
        {this.state.isOpen && (
          <InfoWindow
            position={location}
            onCloseClick={() => this.handleToggleClose()}
          >
            <div>
              <h1>Outbreak!</h1>
              <h1>{title}</h1>
              <p>Date Declared (M/D/Y): {formattedDate}</p>
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

export default connect(mapDispatchToProps)(MapOutbreakMarker);
