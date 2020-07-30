import React from 'react';
import './page-header.css';

const PageHeader = (props) => {
  return <p className='heading'>{props.text}</p>;
};

export default PageHeader;
