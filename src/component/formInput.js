import React, { useState } from "react";
import {  Row, Col, Form } from "react-bootstrap";
// import QuesAndAnsw from "../data/data";

const FormInput = ({ onAdd , notify }) => {
  const [ques, setques] = useState("");
  const [ans, setAns] = useState("");




  const addNewItem = () => {
    if (ques === "" || ans === "") {
      notify("Please complete inputs", "Error");
      return;
    }

    const newItem = { id: Math.random(), q: ques, a: ans };
    onAdd(newItem); // Pass the new item to the onAdd function

    setques("");
    setAns("");
  };





  return (
    <Row>
      <Col sm="5" className="my-3">
        <Form.Control
          onChange={(e) => setques(e.target.value)}
          value={ques}
          type="text"
          placeholder="Enter Question"
        />
      </Col>

      <Col sm="5" className="my-3">
        <Form.Control
          onChange={(e) => setAns(e.target.value)}
          value={ans}
          type="text"
          placeholder="Enter Answer"
        />
      </Col>

      <Col sm="2" className="my-1">
        <button onClick={addNewItem} className="btn main w-100" type="submit">
          Submit
        </button>
        
      </Col>
    </Row>
  );
};

export default FormInput;
