import React, { Component } from 'react';
import { InfoWindow } from '@react-google-maps/api';
import { connect } from 'react-redux';

class MapInfoWindow extends Component {
    render() {
        const { title } = this.props;
        return (
            <InfoWindow>
                <div>
                    {title}
                </div>
            </InfoWindow>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

const ConnectedMapInfoWindow = connect(mapStateToProps, mapDispatchToProps)(MapInfoWindow);

export default ConnectedMapInfoWindow;