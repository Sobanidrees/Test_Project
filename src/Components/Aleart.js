import React from "react";
import x from './xxx.png';
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
          <img className="Xx" src={x} alt="x" onClick={onXhandler}/>
          
         
        </div>
        <div className="wrap">
          <div className="eer">X</div>
          <div className="errors">{props.errors}</div>
        </div>
      </div>
    </>
  );
}
