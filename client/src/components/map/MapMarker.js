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
    const { location, id, title, time, date } = this.props;

    const formattedDate = date.substring(0, 10);

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
              <p>Date visited (Y/M/D): {formattedDate}</p>
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
