import React from 'react';
import classes from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { ItemGroup } from '../ItemGroup/ItemGroup';
import { Icon } from '../UI/Icon/Icon';
import IconClasses from '../UI/Icon/Icon.module.css';
import { Oval } from '../UI/Oval/Oval';
import { OrganizationName } from '../UI/OrganizationName/OrganizationName';

export const Header = (props) => {
    return (
        <header className={classes.Navbar} >
            <Logo />
            <ItemGroup>
                <Oval initial={"S"}></Oval>
                <OrganizationName name={"OrgnaizationName"} />
                <Icon color={IconClasses.IconColor} />
            </ItemGroup>
        </header>
    )
};
