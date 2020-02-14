import React from 'react';
import clock from '../../../assets/images/32.png';
import del from '../../../assets/images/32_2.png';
import more from '../../../assets/images/more.png';
import archive from '../../../assets/images/32_3.png';



export const ActionTools = () => {
    return (
        <div className={"btn-group float-left pt-1 pb-1"} >
            <button className={"btn"}><img src={clock} alt={"Clock"}/></button>
            <button className={"btn"}><img src={del} alt={"Remove"}/></button>
            <button className={"btn"}><img src={archive} alt={"archive"} /></button>
            <button className={"btn"}><img src={more} alt={"More"}/></button>
        </div>
    )
}
