import React, { useState, useEffect } from "react";
import "./Person.css";
export default function Person(props) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [order, setorder] = useState(0);
  const [pay, setpay] = useState(0);

  const onEmailHandler = (event) => {
    setemail(event.target.value);
  };
  const onNameHandler = (event) => {
    setName(event.target.value);
  };
  const onOrderHandler = (event) => {
    setorder(event.target.value);
  };
  const onPayHandler = (event) => {
    setpay(event.target.value);
  };

  useEffect(() => {
    if (name !== "" && email !== "" && order !== 0 && pay !== 0) {
      props.personHandler({ id:props.id,name: name, eamil: email, order: order, pay: pay,status:pay-order });
    }
  }, [name, email, order, pay]);

 

  return (
    <div className="CointainerPreson">
      <div className="CointAll">
        <label className="labell">Name</label>
        <input
          type="text"
          
          className="ALL"
          placeholder="Name"
          onChange={onNameHandler}
        />
      </div>
      <div className="CointAll">
        <label className="labell">Email</label>
        <input
          type="text"
          className="ALL"
          placeholder="Email"
          onChange={onEmailHandler}
        />
      </div>
      <div className="CointAll">
        <label className="labell">Order</label>
        <input
          type="number"
          className="ALL"
          placeholder="$ 0.0"
          onChange={onOrderHandler}
          
        />
      </div>
      <div className="CointAll">
        <label className="labell">Pay</label>
        <input
          type="number"
          className="ALL"
          placeholder="$ 0.0"
          onChange={onPayHandler}
        />
      </div>
    </div>
  );
}
