import React from 'react';
import { withRouter } from 'react-router-dom';
import MapContainer from '../../components/map/MapContainer';

const Home = () => {
    return (
        <div>
            This should be the home page.
            <div>
                <MapContainer />
            </div>
        </div>
    );
};

export default withRouter(Home);
