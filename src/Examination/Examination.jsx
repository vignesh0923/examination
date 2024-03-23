
import React, { useRef, useState } from "react";
import "./Examination.css";
import "./Students.css";
import { BiSearchAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

function Examination() {
  const [inputone, setinputone] = useState("");
  const [inputtwo, setinputtwo] = useState("");
  const [inputthree, setinputthree] = useState("");
  const [inputfour, setinputfour] = useState("");
  const [inputfive, setinputfive] = useState("");
  const [inputsix, setinputsix] = useState("");
  const [allValues, setAllValues] = useState([]);

  async function handleButton() {
    if (inputone !== "") {
      setAllValues((prev) => [
        ...prev,
        { inputone, inputtwo, inputthree, inputfour, inputfive, inputsix },
      ]);
    }
  }

  const printRef = useRef();

  const handlePrint = () => {
    const content = printRef.current.innerHTML;
    const pri = window.open("", "_blank");
    pri.document.write(`
      <html>
        <head>
          <title>SFS - TIMETABLE</title>
          <style>
            .timetable {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .timetable-ul-1 {
              width: 80%;
              padding: 0px;
              color: black;
              margin: 0px;
              text-align: center;
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              font-size: 16px;
              font-family: "poppins", sans-serif;
              border: 2px solid #1d2939;
              border-radius: 10px 10px 0px 0px;
              align-items: center;
            }
            .timetable-ul-1 > li {
              padding: 8px 12px;
              list-style: none;
              font-size: 16px;
              font-family: "poppins", sans-serif;
            }
            .timetable-ul-2 {
              background-color: white;
              width: 80%;
              font-family: "poppins", sans-serif;
              padding: 0px;
              margin: 0px;
              font-size: 16px;
              text-align: center;
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              border-bottom: 2px solid #01fe7e;
              border-left: 2px solid #01fe7e;
              border-right: 2px solid #01fe7e;
              align-items: center;
            }
            .timetable-ul-2 > li {
              padding: 6px 12px;
              color: #000000;
              list-style: none;
              font-size: 16px;
              font-family: "poppins", sans-serif;
            }
            .table-header{
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 20px
            }
            
            .table-header span{
            display:none
            }
          </style>
        </head>
        <body>
          <div class="timetable-container">${content}</div>
        </body>
      </html>
    `);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  const deleteTable = (classOption) => {
    setAllValues((prev) => prev.filter((value) => value.inputone !== classOption));
  };

  const classOptions = [
    "Class 1-10",
    "UKG",
    "LKG",
    "1-STD",
    "2-STD",
    "3-STD",
    "4-STD",
    "5-STD",
    "6-STD",
    "7-STD",
    "8-STD",
    "9-STD",
    "10-STD",
    "11-STD",
    "12-STD",
  ];

  return (
    <>
      <div className="NAVBAR">
        <nav className="nav-stu">
          <h1>sFs</h1>
          <ul>
            <li>Examinations Board</li>
          </ul>
        </nav>
      </div>
      <div className="Examination">
        <div className="TIMETABLE">
          <select
            onChange={(e) => setinputone(e.target.value)}
            style={{ width: "220px" }}
          >
            {classOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <input
            style={{ width: "200px" }}
            type="date"
            onChange={(e) => setinputtwo(e.target.value)}
          />
          <select
            onChange={(e) => setinputthree(e.target.value)}
            style={{ width: "220px" }}
          >
            <option>Select Subject</option>
            <option>Tamil</option>
            <option>English</option>
            <option>Maths</option>
            <option>Science</option>
            <option>Social Science</option>
            <option>Physice</option>
            <option>Chemistry</option>
            <option>Biology</option>
            <option>Computer Science</option>
            <option>Accounts</option>
            <option>Commerce</option>
          </select>
          <input
            style={{ width: "200px" }}
            type="text"
            placeholder="Enter Portions"
            onChange={(e) => setinputsix(e.target.value)}
          />
          <select
            onChange={(e) => setinputfour(e.target.value)}
            style={{ width: "220px" }}
          >
            <option>Select Session</option>
            <option>Forenoon</option>
            <option>Afternoon</option>
          </select>
          <input
            style={{ width: "200px" }}
            type="text"
            placeholder="Enter Examination"
            onChange={(e) => setinputfive(e.target.value)}
          />
          <button className="btn-btn" onClick={() => handleButton()}>
            Add
          </button>
        </div>

        <div ref={printRef} className="timetable-container">
          {classOptions.map((classOption) => (
            allValues.filter((value) => value.inputone === classOption).length > 0 && (
              <div key={classOption} className="timetable">
                <div className="table-header">
                  <h2>{classOption}</h2>
                  <span className="delete-icon" onClick={() => deleteTable(classOption)}>
                    X
                  </span>
                </div>
                <ul className="timetable-ul-1">
                  <li>Exam</li>
                  <li>Class</li>
                  <li>Date</li>
                  <li>Subject</li>
                  <li>Portions</li>
                  <li>Session</li>
                </ul>
                {allValues
                  .filter((value) => value.inputone === classOption)
                  .map((filteredValue, index) => (
                    <ul key={index} className="timetable-ul-2">
                      <li>{filteredValue.inputfive}</li>
                      <li>{filteredValue.inputone}</li>
                      <li>{filteredValue.inputtwo}</li>
                      <li>{filteredValue.inputthree}</li>
                      <li>{filteredValue.inputsix}</li>
                      <li>{filteredValue.inputfour}</li>
                    </ul>
                  ))}
              </div>
            )
          ))}
        </div>


        <div className="button-container">
          <button className="print-btn" onClick={handlePrint}>
            Print
          </button>
        </div>
        <iframe
          id="ifmcontentstoprint"
          style={{
            height: "0px",
            width: "0px",
            position: "absolute",
            visibility: "hidden",
          }}
          title="Printing content"
        ></iframe>
        <iframe
          id="ifmcontentstoprint"
          style={{ height: "0px", width: "0px", position: "absolute" }}
        ></iframe>

      </div>
    </>
  );
}
export default Examination;
