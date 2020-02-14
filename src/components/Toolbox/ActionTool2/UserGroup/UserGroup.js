import React from 'react';
import Classes from './UserGroup.module.css';
import alex from '../../../../assets/images/alex.jpg';
import somto from '../../../../assets/images/somto.jpg';
import maria from '../../../../assets/images/maria.jpg';


export const UserGroup = (props) => {
    return (
        <div className={Classes.UserGroup}>
            <img src={alex} alt="u1" />
            <img src={maria} alt="u1" />
            <img src={somto} alt="u1" />
        </div>
    )
}