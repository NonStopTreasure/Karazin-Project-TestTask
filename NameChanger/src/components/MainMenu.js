import React from "react";
import Delete from "./MainManu/Delete";
import Change from "./MainManu/Change";
import Names from "./MainManu/Names";

function MainMenu() {
    return(
        <div className='MainMenu'>
            <div><Names/></div>
            <div><Change/></div>
            <div><Delete/></div>
        </div>

    );
}

export default MainMenu;