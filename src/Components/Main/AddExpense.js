import React, { useState } from "react";
import "./addExpence.css";
import log from "/home/m/Desktop/Final-react/src/Components/Main/log.png";
export default function AddExpense(props) {

  const [description, setDescription] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [picture, setPicture] = useState(log);
  const [date, setDate] = useState();

  const onXhandler = () => {
    props.setture(false);
  };

  const onNextHandler = () => {
   
    if(description&&totalAmount&&picture&&date)
    {
      if(description.length>10 && totalAmount>1 )
      {
        props.setture(false);
        props.setPerson(true);
        props.arrayofobjs(
          {
          Description: {
            description: description,
            totalAmount: totalAmount,
            picture: picture,
            date: date,
          },
          arrayOfPersons: [],
        });
      }
      else if(description.length<10  ){

        props.setAleart({form:true,
          msg:"Description is grater then 10 alphabets and all must be alphabets"
        })

      }
      else if(totalAmount<=1)
      {
        props.setAleart({form:true,
          msg:"Total amount should be > 1"
        })
      }
     
    }
    else{
      props.setAleart({form:true,
        msg:"Please fill the all form values"
      })
    }

   
   
  };



  const onDiscrptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const onAmountHandler = (event) => {
    setTotalAmount(event.target.value);
  };

  const onPictureHandler = (event) => {
    setPicture(URL.createObjectURL(event.target.files[0]));
  };

  const onDateHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <>
      <div className="background-color">  </div>
    <div className="CointainerExpense">
      <div className="upper">
        <h3 className="Addanexpense">Add an Expense</h3>
        <button className="X" onClick={onXhandler}>
          x
        </button>
      </div>
      <div className="Contimg">
        <img src={picture} alt="loading.." className="loga" />

        <div className="cont">
          <input
            type="text"
            className="Description"
            placeholder="Description"
            onChange={onDiscrptionHandler}
          />
          <input
            type="number"
            className="Amount"
            placeholder="$ 0.00"
            onChange={onAmountHandler}
          />
          <input type="file" className="imgForm" accept=".jpg,.png,.jpeg" onChange={onPictureHandler} />
          <input type="date" className="date" onChange={onDateHandler} />
        </div>
      </div>

      <div className="bottom">
        <div className="btttons">
          <button className="Save" onClick={onNextHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
    </>
  
  );
}
