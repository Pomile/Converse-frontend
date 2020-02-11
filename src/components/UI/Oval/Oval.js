import React from 'react';
import Classes from './Oval.module.css';

export const Oval = (props) => {
    return <div className={Classes.Oval}>{props.initial}</div>
}