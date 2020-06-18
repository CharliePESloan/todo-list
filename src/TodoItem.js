import React from "react";

import IconCross from "./Icons/IconCross";

function TodoItem(props) {
    return <li className="Todo-item">
        <span>{props.data}</span>
        <IconCross onClick={props.deleteMe} />
    </li>;
}

export default TodoItem;