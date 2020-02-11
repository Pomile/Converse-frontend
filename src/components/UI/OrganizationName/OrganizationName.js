import React from 'react';
import Classes from './OrganizationName.module.css';


export const OrganizationName = (props) => {
    return (<div className={Classes.OrganizationName}>{props.name}</div>)
}