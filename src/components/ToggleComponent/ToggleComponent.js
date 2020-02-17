import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Classes from './ToggleComponent.module.css';


export const ToggleComponent = (props) => {
    return (
        <div className={Classes.ToggleComponent} onClick={() => props.toggleComponentHandler()}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
        </div>
    )
}
