import React from "react";
import { Row, Accordion } from "react-bootstrap";
// import Question from "../data/data";
import NoData from "./noData";
const AnswerList = ({ data, deleteOneItem }) => {
  const dataLocal = JSON.parse(localStorage.getItem("items"));

  //delete one item
  const ondDeleteItem = (ID) => {
    if (localStorage.getItem("items") != null) {
      //find the element I want
      const index = data.findIndex((item) => item.id === ID);
      // delete just one element
      data.splice(index, 1);
      deleteOneItem(data);
    }
  };

  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>{item.q}</Accordion.Header>

                <Accordion.Body>
                  <div className="d-flex justify-content-between">
                    <div>{item.a}</div>
                    {/* if i write onclick as deleteOneItem() 
                    it will renered while i refresh the page
                    not when i press so i must use arrow function */}
                    <button
                      onClick={() => ondDeleteItem(item.id)}
                      className="btn delete small"
                    >
                      Delete
                    </button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <NoData />
        )}
      </Accordion>
    </Row>
  );
};

export default AnswerList;
