import React from "react";
import './ChangeMenu.css';
import Save_Script from "../../scrpts/SaveScript";

function ChangeMenu() {
    return(
            <div>
                <div className="ChangeForm"><input type="text"/></div>
                <div className="ChangeSave"  onClick={Save_Script}><button>Save</button></div>
                <div className="Note"><p>Dev note: can be in-place editing, not a new view</p></div>
            </div>
    );
}

export default ChangeMenu;