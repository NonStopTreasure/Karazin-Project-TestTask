import React from "react";
import './ChangeMenu.css';
import Save_Script from "../../scrpts/SaveScript";
import {NavLink} from 'react-router-dom';

function ChangeMenu() {
    return(
            <div className="ChangeMenu">
                <div className="ChangeInput"><input type="text"/></div>
                <div className="ChangeSave"  onClick={Save_Script}><NavLink  to="/"><button>Save</button></NavLink></div>
                <div className="Note"><p>Dev note: can be in-place editing, not a new view</p></div>
            </div>
    );
}

export default ChangeMenu;