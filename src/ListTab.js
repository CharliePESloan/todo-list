import React from "react";

import IconCross from "./Icons/IconCross";

function ListTab(props) {
    return (
        <button onClick={props.setList} className="Todo-list-tab">
            <span>{props.listName}</span>
            <IconCross onClick={props.unPin} />
        </button>
    );
}

export default ListTab;
