import React from 'react';
import Classes from './ItemGroup.module.css';

export const ItemGroup = (props) => {
    return <div className={Classes.ItemGroup}>{props.children}</div>
};
