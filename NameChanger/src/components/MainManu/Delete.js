import React from "react";
import DeleteOutlined from "@ant-design/icons/es/icons/DeleteOutlined";
import DelScript from './../../scrpts/DelScript';
function Delete() {
    return (
        <div>
            <ul className='DelButtom'>
                <li><a  href='#delete' onClick={DelScript}><DeleteOutlined></DeleteOutlined></a></li>
                <li><a  href='#delete' onClick={DelScript}><DeleteOutlined></DeleteOutlined></a></li>
                <li><a  href='#delete' onClick={DelScript}><DeleteOutlined></DeleteOutlined></a></li>
            </ul>
        </div>
    );
}


export default Delete;