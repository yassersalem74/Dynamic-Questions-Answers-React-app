//import css files
import "./main.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormInput from "./component/formInput";
import AnswerList from "./component/answerList";
import QuesAndAnsw from "./data/data";
import askingvector from "../src/images/askingvector.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const [data, setdata] = useState(QuesAndAnsw);
  const [data, setdata] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("items")) || QuesAndAnsw;
    return storedData;
  });

  const addItem = (newItem) => {
    const newData = [...data, newItem];
    localStorage.setItem("items", JSON.stringify(newData));
    setdata(newData);
    //   //change to new data, ... to make rerender with the changes
    //   //run useState
    //   //to re render all this code
    //   //when i preess add , all values added to the array of data,then render
    notify("Added successfully", "success");
  };

  //to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items");
    QuesAndAnsw.splice(0, QuesAndAnsw.length);
    setdata([]);
    notify("Deleted all questions successfully", "success");
  };

  //delete one item
  const deleteOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    //re render with new array
    setdata([...items]);
    notify("Deleted successfully", "success");
    if (items.length <= 0) {
      deleteAllItems();
    }
  };

  //push notifications
  const notify = (message, type) => {
    if (type === "Error") toast.error(message);
    else if (type === "success") toast.success(message);
  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="3">
            <div className="fs-3 text-center py-3 main-title">
              Questions & Answers
            </div>
            <img src={askingvector} alt="" className="w-100" />
          </Col>

          <Col sm="9">
            <div className="rectangle p-2">
              <FormInput onAdd={addItem} notify={notify} />
              <AnswerList data={data} deleteOneItem={deleteOneItem} />
            </div>
            <div>
              {localStorage.getItem("items") != null ? (
                <button
                  onClick={deleteAllItems}
                  className="btn delete  inside  w-lg-75 w-100"
                >
                  {" "}
                  Delete All
                </button>
              ) : null}
            </div>
          </Col>
        </Row>

        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
