import React from "react";
import {message} from "antd";
import './ChangeSave.css';
let click  = 1;
const Return = () => {
    setTimeout(window.history.back(),4000,click = 1,);
}

const success = () => {
    if(  click === 1) {
        message.success('User is saved', 1, Return);
        click = 0;
    }
};
function ChangeSave() {
    return(
        <div className="ChangeSave" onClick={success}><a>Save</a></div>
    );
}

export default ChangeSave;