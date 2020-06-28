import React from "react";
import './Change.css'
import {NavLink} from 'react-router-dom';
function Change() {
    return(
            <div>
                <ul className='ChangeButtom'>
                    <li><NavLink  to="/Changemenu"><p>Change</p></NavLink></li>
                    <li><NavLink  to="/Changemenu"><p>Change</p></NavLink></li>
                    <li><NavLink  to="/Changemenu"><p>Change</p></NavLink></li>
                </ul>
            </div>
    );

}


export default Change;