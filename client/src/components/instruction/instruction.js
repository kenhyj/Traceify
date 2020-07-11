import React from 'react';
import './instruction.css';

const Instruction = (props) => {
    return (
        <p className="instruction">{props.text}</p>
    )
};

export default Instruction;
