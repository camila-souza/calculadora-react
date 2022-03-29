import React from "react";
import './Button.css';

export default props => 
    <button className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
        ${props.ac ? 'ac' : ''}
        ${props.equals ? 'equals' : ''}
    `} onClick={e => props.click(props.label)}>
        {props.label}
    </button>