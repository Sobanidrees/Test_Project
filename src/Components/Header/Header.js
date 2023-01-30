import React, { useState, useEffect } from "react";
import "./header.css";
import { signOut } from "firebase/auth";
import { auth } from "../Login/Firebase";
import { useNavigate } from "react-router";
import AddExpense from "../Main/AddExpense";
import PersonsList from "../Main/PersonsList";
import Person from "../Main/Person";
import AddPersons from "../Main/AddPersons";
import Logo from "../Login/Logo";
import Aleart from "../Aleart";
import Report from "../Main/Report";
export default function Header(props) {
  const [pList, setPlist] = useState([]);
  const [Visible, setVisible] = useState(false);
  const [True, setTrue] = useState(false);
  const [List, setList] = useState(false);
  const [persons, setPerson] = useState(0);
  const [formValid, setFromValid] = useState({});
  const [AllformData, setAllFormData] = useState({
    Description: {},
    arrayOfPersons: [],
  });
  const [dbEmail, setDbEmails] = useState([]);
  const [alert, setAleart] = useState({
    form:false,
    msg:""
  });
 const [report,setReport]=useState(false);

  useEffect(() => {
    const res = fetch(
      "https://final-react-64247-default-rtdb.firebaseio.com/emails.json"
    ).then((r) =>
      r.json().then((r) => {
        setDbEmails(r);
      })
    );
  }, []);

  const personHandler = (pobj) => {
    setFromValid(pobj);
  };
  console.log();
  const plistGenerator = () => {
    const temp = [];
    for (let i = 1; i <= persons; i++) {
      temp.push(<Person id={i} personHandler={personHandler} key={i} />);
    }

    setPlist(temp);
  };

  const navigate = useNavigate();
  const onLogoutHandler = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onExpenseHandler = () => {
    setVisible((prev) => !prev);
    setTrue(false);
    setList(false);
  };
  return (
    <>
{report ? <Report setReport={setReport} AllformData={AllformData} />:""}
      {Visible ? (
        <AddExpense
          setture={setVisible}
          setPerson={setTrue}
          arrayofobjs={setAllFormData}
          setAleart={setAleart}
        />
      ) : (
        ""
      )}
      {True ? (
        <AddPersons
          setPerson={setTrue}
          onAdd={setPerson}
          listgenrator={plistGenerator}
          personlist={setList}
          setAleart={setAleart}
        />
      ) : (
        ""
      )}
      {alert.form ?<Aleart errors={alert.msg}       setAleart={setAleart}/> :""}
      {List ? (
        <PersonsList
          setList={setList}
          PersonsList={pList}
          checkValidity={formValid}
          arrayOfObjects={setAllFormData}
          setform={setFromValid}
          AllData={AllformData}
          totalamount={parseFloat(AllformData.Description.totalAmount)}
          AllMails={dbEmail}
          setAleart={setAleart}
          setReport={setReport}
          setloading={props.setloading}
        />
      ) : (
        ""
      )}
    
      <div className="Hcointainer">
        <Logo />

        <span className="title">Dashboard</span>
        <div className="buttonC">
          <button className="btn1" onClick={onExpenseHandler}>
            Add an expense
          </button>
          <button className="btn2" onClick={onLogoutHandler}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
