import React, { useState } from "react";
import "./PersonsList.css";
export default function PersonsList(props) {
  const [counter, setCounter] = useState(0);

  const [Allorders, setAllorders] = useState(0);


  const onXhandler = () => {
    props.setList(false);
  };

  const emailValidation = (email) => {
    return props.AllMails.find((element) => {
      if (email === element) {
        return element;
      }
    });
  };

  const emailVarification = (email) => {
    return props.AllData.arrayOfPersons.find((element) => {
      if (email === element.eamil) {
        return element;
      }
    });
  };

  const sendData = async (data) => {
    const { Description, arrayOfPersons } = data;
    props.setList(false);
    props.setloading(true);
    const res = await fetch(
      "https://final-react-64247-default-rtdb.firebaseio.com/ExpenseData.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application.json",
        },
        body: JSON.stringify({ Description, arrayOfPersons }),
      }
    );
    if (res) {
      props.setReport(true);
      props.setloading(false);
    
    } else {
      alert("Please Check Your Internet Conection");
    }
  };
  const onSaveHandler = () => {
    let order = Allorders;
    var letters = /^[a-zA-Z_ ]*$/.test(props.checkValidity.name);
    if (counter === props.PersonsList.length - 1) {
      if (Object.keys(props.checkValidity).length === 6) {
        if (
          counter < props.PersonsList.length &&
          props.checkValidity.name.length > 2 &&
          letters &&
          parseFloat(props.checkValidity.order) > 0 &&
          parseFloat(props.checkValidity.pay) > 0 &&
          emailValidation(props.checkValidity.eamil) &&
          !emailVarification(props.checkValidity.eamil) &&
          order + parseFloat(props.checkValidity.order) === props.totalamount 
        ) {
          //putting data in list.
          props.arrayOfObjects((prev) => ({
            Description: prev.Description,
            arrayOfPersons: [...prev.arrayOfPersons, props.checkValidity],
          }));

          sendData({
            Description: props.AllData.Description,
            arrayOfPersons: [
              ...props.AllData.arrayOfPersons,
              props.checkValidity,
            ],
          });

         
          setAllorders((prev) => prev + parseFloat(props.checkValidity.order));
        } else if (props.checkValidity.name.length < 3 || !letters) {
          props.setAleart({
            form: true,
            msg: "Please enter valid name, (Name should graterthen 2 letters)",
          });
        } else if (
          parseFloat(props.checkValidity.order) <= 0
        ) {
          props.setAleart({
            form: true,
            msg: "Please enter valid order amount. (Order amount is > 0)",
          });
        } else if (
          parseFloat(props.checkValidity.pay) <= 0
        ) {
          props.setAleart({
            form: true,
            msg: "Please enter valid Pay amount. (Pay amount is > 0 )",
          });
        } else if (emailVarification(props.checkValidity.eamil)) {
          props.setAleart({
            form: true,
            msg: "This emial is already exist (Enter diffrent email)",
          });
        } else if (!emailValidation(props.checkValidity.eamil)) {
          props.setAleart({
            form: true,
            msg: "This emial does not exist, (Enter valid email)",
          });
        } else if (
          order + parseFloat(props.checkValidity.order) !==
          props.totalamount
        ) {
          props.setAleart({
            form: true,
            msg: `Sum of all ordering amount (${order + parseFloat(props.checkValidity.order)}) should be = to (${props.totalamount})`,
          });
        } 
      } else {
        props.setAleart({ form: true, msg: "Please Fill All Input Fields!!" });
      }
    } else {
      props.setAleart({
        form: true,
        msg: "PLease fill all the person's data before save!!",
      });
    }
  };

  const onNexthandler = () => {
    let order = Allorders;
    var letters = /^[a-zA-Z_ ]*$/.test(props.checkValidity.name);
    if (Object.keys(props.checkValidity).length === 6) {
      if (
        counter < props.PersonsList.length - 1 &&
        props.checkValidity.name.length > 2 &&
        letters &&
        parseFloat(props.checkValidity.order) > 0 &&
        parseFloat(props.checkValidity.pay) > 0 &&
        emailValidation(props.checkValidity.eamil) &&
        !emailVarification(props.checkValidity.eamil) &&
        order + parseFloat(props.checkValidity.order) <= props.totalamount 
      ) {
        setCounter((prev) => prev + 1);
        props.setform({});
        //putting data in list.
        props.arrayOfObjects((prev) => ({
          Description: prev.Description,
          arrayOfPersons: [...prev.arrayOfPersons, props.checkValidity],
        }));

  
        setAllorders((prev) => prev + parseFloat(props.checkValidity.order));
      } else if (props.checkValidity.name.length < 3 || !letters) {
        props.setAleart({
          form: true,
          msg: "Please enter valid name, (Name should graterthen 2 letters)",
        });
      } else if (
        parseFloat(props.checkValidity.order) <= 0
      ) {
        props.setAleart({
          form: true,
          msg: "Please enter valid order amount. (Order amount is > 0)",
        });
      } else if (
        parseFloat(props.checkValidity.pay) <= 0 
      ) {
        props.setAleart({
          form: true,
          msg: "Please enter valid Pay amount. (Pay amount is > 0)",
        });
      } else if (emailVarification(props.checkValidity.eamil)) {
        props.setAleart({
          form: true,
          msg: `${props.checkValidity.eamil}  is already exist (Enter diffrent email)`,
        });
      } else if (!emailValidation(props.checkValidity.eamil)) {
        props.setAleart({
          form: true,
          msg: `${props.checkValidity.eamil} does not exist, (Enter valid email)`,
        });
      } else if (counter === props.PersonsList.length - 1) {
        props.setAleart({ form: true, msg: "Please press save button" });
      } else if (
        order + parseFloat(props.checkValidity.order) >
        props.totalamount
      ) {
        props.setAleart({
          form: true,
          msg: `Sum of all ordering amount (${order + parseFloat(props.checkValidity.order)})should be = to (${props.totalamount}))`,
        });
      } 
    } else {
      props.setAleart({ form: true, msg: "Please Fill All Input Fields!!" });
    }
  };

  return (
    <>
      <div className="background-color"> </div>

      <div className="CointainerExpense">
        <div className="upper">
          <h3 className="Addanexpense">Person {counter + 1}</h3>
          <button className="X" onClick={onXhandler}>
            x
          </button>
        </div>

        {props.PersonsList[counter]}
        <div className="bottom">
          <div className="btttonsS">
            <div className="NP">
              <button className="Cancel" onClick={onNexthandler}>
                Next
              </button>
            </div>

            <div className="CS">
              <button className="Save" onClick={onSaveHandler}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
