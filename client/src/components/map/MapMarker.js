import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';
import { showInfoWindow } from '../../redux/actions/map-actions';
import bluePinImg from '../../assets/blue-pin.svg';

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

  render() {
    const { location, id, isInfoWindowVisible, title, time, date } = this.props;

    const handleMarkerClick = () => {
      this.props.dispatch(showInfoWindow(id));
      // console.log("clicked marker ", id);
    };

    // const icon = {
    //     path: 'M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z',
    //     color: '21CBF3',
    //     fillOpacity: 1,
    // };

    const formattedDate = new Date(date).toLocaleDateString();

    return (
      <Marker
        position={location}
        onClick={() => this.handleToggleOpen()}
        icon={bluePinImg}
      >
        {this.state.isOpen && (
          <InfoWindow
            position={location}
            onCloseClick={() => this.handleToggleClose()}
          >
            <div>
              <h1>{title}</h1>
              <p>Time visited: {time}</p>
              <p>Date visited (M/D/Y): {formattedDate}</p>
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

const ConnectedMapMarker = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapMarker);

export default ConnectedMapMarker;
