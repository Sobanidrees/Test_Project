import React, { useRef } from "react";
import "./AddPersons.css";
export default function AddPersons(props) {
  const PersonRef = useRef();
  const onXHAndler = () => {
    props.setPerson(false);
  };
  const onAddHandler = () => {
    if(PersonRef.current.value<=0)
    {
      props.setAleart({
        form: true,
        msg: "Please Enter minimum one person!!",
      });
   
    }
    else{
      props.setPerson(false);
      props.listgenrator();
      props.personlist(true);
    }
    
   
  };
  const onPersonHandler = () => {
    props.onAdd(PersonRef.current.value);
  };
  return (
    <>
    <div className="background-color">  </div>
    <div className="CointainerPersons">
      <div className="upper">
        <h3 className="Addanexpense">Add Persons</h3>
        <button className="X" onClick={onXHAndler}>
          x
        </button>
      </div>
      <input
        type="number"
        className="persons"
        placeholder="0"
        onChange={onPersonHandler}
        ref={PersonRef}
      />
      <div className="bottom">
        <div className="btttons">
          <button className="Save" onClick={onAddHandler}>
            Add
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
