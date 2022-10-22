import React, { useState } from 'react';
import Logo from '../../img/logo.png'
import './Sidebar.css'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import { SidebarData } from '../../Data/Data';

function Sidebar (){

    const [selected, setSelected] = useState(0)

    return(
        <div className="Sidebar">
            {/* logo */}
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    U.<span>I</span>.L
                </span>
            </div>
            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) =>{
                    return(
                        <div className={selected===index?'menuItem active':'menuItem'}
                        key={index}
                        onClick={() => setSelected(index)}
                        >
                            <item.icon/>
                            <span>
                                {item.heading}
                            </span>
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;