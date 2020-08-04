import React, { Component } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
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
    const { location, id, title, date } = this.props;
    const formattedDate = date.substring(0, 10);

    return (
      <Marker
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

export default MapOutbreakMarker;
