import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/images/logo.png'

export const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt={"simpu.png"} />
        </div>
    );
};