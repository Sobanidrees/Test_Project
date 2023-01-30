import React from "react";
import "./Report.css";
export default function Report(props) {
  const onXhandler = () => {
    props.setReport(false);
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
          ${parseFloat(element.pay)-parseFloat(element.order) }
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
