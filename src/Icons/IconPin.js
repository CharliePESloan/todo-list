import React from "react";

import "./Icon-pin.css";

function IconPin(props) {
    return <div className="Icon-pin" onClick={props.onClick}>
        <div></div>
        <div></div>
        <div></div>
    </div>;
}

export default IconPin;
