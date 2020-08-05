import React from 'react';
import './page-heading.css';

const PageHeading = (props) => {
  return (
    <div className='page-heading'>
      <div className='page-heading-contents'>
        <div className='page-heading-heading'>{props.data.heading}</div>
        <div className='page-heading-subheading'>{props.data.subheading}</div>
        <div className='page-heading-body'>{props.data.body}</div>
      </div>
    </div>
  );
};

export default PageHeading;
