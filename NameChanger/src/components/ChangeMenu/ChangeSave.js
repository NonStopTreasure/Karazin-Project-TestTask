import React from "react";
import {message} from "antd";
import {NavLink} from 'react-router-dom';
import './ChangeSave.css';

const success = () => {
    message.success('User is saved', 2);
};
function ChangeSave() {
    return(

            <div className="ChangeSave"  onClick={success}><NavLink  to="/"><p>Save</p></NavLink></div>

    );
}

export default ChangeSave;