import React from 'react';
import { withRouter } from 'react-router-dom';
import MapContainer from '../../components/map/MapContainer';
import Sidebar from './sidebar';
import PageHeading from '../../components/page-heading/PageHeading';

const Home = () => {
  const heading = 'Interactive Contact Tracing Map';
  const subheading = <p>Data when you need it the most.</p>;
  const body =
    'You can view the current cases of COVID-19 by interacting with the map below.';
  const pageHeadingData = { heading, subheading, body };

  return (
    <div>
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div>
        <Sidebar />
        <MapContainer />
      </div>
    </div>
  );
};

export default withRouter(Home);
