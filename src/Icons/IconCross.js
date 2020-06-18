import React from "react";

import "./Icon-cross.css";

function IconCross(props) {
    return (<div className="Icon-cross" onClick={props.onClick}>
        &nbsp;
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>);
}

export default IconCross;