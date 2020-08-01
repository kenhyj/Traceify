import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hidden, Chip } from '@material-ui/core';
import MapContainer from './map/MapContainer';
import Sidebar from './sidebar';
import PageHeading from '../../components/page-heading/PageHeading';
import { variants, transitions, pageStyle } from '../motion-settings';
import './home.css';

const Home = () => {
  const heading = 'Interactive Contact Tracing Map';
  const subheading = <p>Helping Canadians stay safe.</p>;
  const body =
    'See where individuals who have tested positive for COVID-19 have been recently by interacting with the map below.';
  const pageHeadingData = { heading, subheading, body };
  const [mapVisible, setMapVisible] = useState(false);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  });

  return (
    <motion.div
      exit='out'
      animate='in'
      initial='initial'
      variants={variants}
      transition={transitions}
      style={pageStyle}
    >
      <div>
        <PageHeading data={pageHeadingData} />
      </div>
      <div className='Home-main-body'>
        <div className='Home-mobile-toggle-view'>
          <Chip label='View Maps' onClick={() => setVisible(!mapVisible)} />
          <Chip label='View Info' />
        </div>
      </Hidden>
      <div className='Home-main-body'>
        <Sidebar className='Home-main-body-sidebar' />
        <Hidden smDown>
          <div style={{ width: `${width - width * 0.3}px` }}>
            <MapContainer className='Home-main-body-map' />
          </div>
        </Hidden>
      </div>
      <Hidden mdUp>
        <div
          style={{
            width: '80%',
            margin: '10px 10%',
            display: mapVisible ? 'block' : 'none',
          }}
        >
          <MapContainer className='Home-main-body-map' />
        </div>
      </Hidden>
    </motion.div>
  );
};

export default withRouter(Home);
