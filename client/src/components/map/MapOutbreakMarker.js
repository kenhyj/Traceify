import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import MapInfoWindow from './MapInfoWindow';
import * as actions from '../../redux/constants/action-types';
import { showInfoWindow } from '../../redux/actions/map-actions';
import virusImg from '../../assets/virus.svg';

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

  render() {
    const { location, id, isInfoWindowVisible, title, date } = this.props;

    const handleMarkerClick = () => {
      this.props.dispatch(showInfoWindow(id));
      console.log('clicked marker ', id);
    };

    // const icon = {
    //     path: virusImg,
    // };
    // const s = new XMLSerializer();
    // const iconPath = s.serializeToString(virusImg);
    // const icon = {
    //   path: iconPath,
    // };

    const formattedDate = new Date(date).toLocaleDateString();

    return (
      <Marker
        position={location}
        onClick={() => this.handleToggleOpen()}
        icon={virusImg}
      >
        {this.state.isOpen && (
          <InfoWindow
            position={location}
            onCloseClick={() => this.handleToggleClose()}
          >
            <div>
              <h1>
                <b>Outbreak!</b>
              </h1>
              <h1>{title}</h1>
              <p>
                Date Declared (M/D/Y): {formattedDate}
              </p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showInfoWindow: (id) => dispatch(showInfoWindow(id)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapOutbreakMarker);
