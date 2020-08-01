import React from 'react';
import './instruction.css';

const Instruction = (props) => {
  if (props.width) {
    return (
      <p className='instruction' style={{ width: props.width }}>
        {props.text}
      </p>
    );
  }
  return <p className='instruction'>{props.text}</p>;
};

export default Instruction;
