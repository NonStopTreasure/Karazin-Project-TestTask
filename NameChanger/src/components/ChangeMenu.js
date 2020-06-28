import React from "react";
import ChangeInput from "./ChangeMenu/ChangeInput";
import ChangeSave from "./ChangeMenu/ChangeSave";
import Note from "./ChangeMenu/Note";

function ChangeMenu() {
    return(
            <div>
                <div><ChangeInput/></div>
                <div><ChangeSave/></div>
                <div><Note/></div>
            </div>
    );
}

export default ChangeMenu;