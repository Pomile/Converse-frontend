import React from 'react';

import Classses from './Main.module.css';
import { Conversation } from '../Conversation/Conversation';

export const Main = (props) => {
    return (
        <div className={Classses.Main}>
           {props.children}
        </div>
    )
};
