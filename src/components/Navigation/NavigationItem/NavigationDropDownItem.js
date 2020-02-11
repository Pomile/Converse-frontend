import React from 'react';
import { NavDropdown } from 'react-bootstrap/NavDropdown';
import { Icon } from '../../UI/Icon/Icon';
import { } from '../NavigationItem/NavigationItem';
import Classes from './Navigation.module.css';

export const NavigationDropDownItem = (props) => {
    return (
        <li className="nav-item dropdown">
        
            <a className={"nav-link dropdown-toggle"} id={"navbardrop"} data-toggle={"dropdown"} >
                   <Icon style = {} />
             </a>
            <div className={"dropdown-menu"}>
                    <a className={"dropdown-item"} href="#">Link 1</a>
                    <a className={"dropdown-item"} href="#">Link 2</a>
                    <a className={"dropdown-item"} href="#">Link 3</a>
            </div>
           
        </li>
    )
};