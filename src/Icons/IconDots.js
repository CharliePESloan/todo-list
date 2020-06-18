import React from "react";

import "./Icon-dots.css";

function IconDots(props) {
    return (
        <div className={"Icon-dots" + (props.className ? (" " + props.className) : "")} onClick={props.onClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default IconDots;
