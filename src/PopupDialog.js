import React from "react";

function PopupDialog(props) {
  let classes = "Popup-dialog";
  console.log(props.hidden);
  if (!!props.hidden) {
    classes = classes + " hidden";
  }
  return <div id={props.id} className={classes}>{props.children}</div>;
}

export default PopupDialog;