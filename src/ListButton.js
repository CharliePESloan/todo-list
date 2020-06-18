import React from "react";

import IconPin from "./Icons/IconPin";

function ListButton(props) {
    let classes = "Todo-list-select-button";
    if (props.selected) {classes = classes + " selected"}
    return (
        <div className={classes}>
            <button onClick={props.onSelect}>{props.children}</button>
            <IconPin onClick={props.onPin} />
        </div>
    );
}

export default ListButton;