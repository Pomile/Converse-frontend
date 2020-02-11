import React from 'react';
import Classses from './Sidebar.module.css';
import analyticsImg from '../../assets/images/analytics.png';
import happyImg from '../../assets/images/happy.png';
import scheduleImg from '../../assets/images/schedule.png';
import commentImg from '../../assets/images/comment.png';

export const Sidebar = (props) => {
    return (
        <div className={Classses.Sidebar}>
            <ul className={"nav flex-column"}>
                <li className={"nav-item"}>
                    <div className={"nav-link"} href={"#"}>
                        <img src={analyticsImg} alt={"analytics.png"}/>
                    </div>
                </li>
                <li className={"nav-item"}>
                    <div className={"nav-link"} href={"#"}>
                        <img src={scheduleImg} alt={"schedule.png"} />
                    </div>
                </li>
                <li className={"nav-item"}>
                    <div className={"nav-link"} href={"#"}>
                        <img src={commentImg} alt={"analytics.png"} />
                    </div>
                </li>
                <li className={"nav-item"}>
                    <div className={"nav-link"} href={"#"}>
                        <img src={happyImg} alt={"analytics.png"} />
                    </div>
                </li>
            </ul>
        </div>
    )
}
