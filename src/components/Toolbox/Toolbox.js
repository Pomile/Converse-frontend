import React from 'react';
import { ActionTools } from './ActionTools/ActionTools';
import { ActionTool2 } from './ActionTool2/ActionTool2';
import Classes from './Toolbox.module.css';


export const Toolbox = (props) => {
    return (
        <div className={Classes.Toolbox}>
            <ActionTools />
            <ActionTool2 />
        </div>
    )
}
