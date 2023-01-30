import React from "react";
import Body from "./Body";
import Header from "../Header/Header";
export default function Main(props) {
  return (
    <>

    <Header setloading={props.setloading}/>
    <Body/>
    </>
  );
}
