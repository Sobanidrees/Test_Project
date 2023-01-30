import React from "react";
import "./Report.css";

import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";





export default function Report(props) {
 
  const onXhandler = () => {
    props.setReport(false);
  }
const onDownloadHadler=()=>{
  const fileType = "xlsx";
  const worksheet = XLSX.utils.json_to_sheet(props.AllformData.arrayOfPersons);
  const wb = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, "myfile"+".xlsx");
}
  return (
    <div className="ReportCointainer">
      <div className="upperMain">
        <h3 className="Addanexpense">Report</h3>
        <button className="X" onClick={onXhandler}>
          x
        </button>
      </div>
      <div className="middle">
        <div className="des">
          <h1>Description</h1>
          <p className="pD">{props.AllformData.Description.description}</p>
        </div>
        <div className="TED">
          <div className="TA">
            <h1>Total Expense</h1>
            <span className="A">${props.AllformData.Description.totalAmount}</span>
          </div>
          <div className="ED">
          <h1>Date</h1>
          <p className="D">{props.AllformData.Description.date}</p>
          </div>
        </div>
      </div>
      <table className="tablePersons">
        <tr className="head">
          <th className="col">Sn</th>
          <th className="col2">Names</th>
          <th className="col3">Email</th>
          <th className="col1">Order</th>
          <th className="col1">Share</th>
          <th className="col1">Status</th>
        </tr>
        {props.AllformData.arrayOfPersons.map((element) => (
          <tr key={element.id} className="head">
            <td className="col">{element.id}</td>
            <td className="col2">{element.name}</td>
            <td className="col3">{element.eamil}</td>
            <td className="col1">${element.order}</td>
            <td className="col1">${element.pay}</td>
            <td className="col4">
          $ {element.status}
            </td>
          </tr>
        ))}
   
      </table>
      <button className="download" onClick={onDownloadHadler}>Download</button>
     
    </div>
  );
}
