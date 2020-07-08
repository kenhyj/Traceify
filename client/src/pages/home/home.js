import React from 'react';
import { withRouter } from 'react-router-dom';
import MapContainer from '../../components/map/MapContainer';
import Sidebar from './sidebar';

const Home = () => {
    return (
        <div>
            {/* <h2>Map</h2> */}
            <div>
                <Sidebar />
                <MapContainer />
            </div>
        </div>
    );
};

export default withRouter(Home);
