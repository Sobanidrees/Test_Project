import React from "react";

import "./Aleart.css";
export default function Aleart(props) {
  const onXhandler = () => {
    props.setAleart({ form: false, msg: "" });
  };
  return (
    <>
      {" "}
      <div className="background"> </div>
      <div className="CointainerPerson">
        <div className="upper">
          <h3 className="Addanexpense">Error Alert</h3>
          <button className="X" onClick={onXhandler}>
            x
          </button>
        </div>
        <div className="wrap">
          <div className="eer">X</div>
          <div className="errors">{props.errors}</div>
        </div>
      </div>
    </>
  );
}
