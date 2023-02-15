import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeAllData, showAllDetails } from "../store/userSlice";
import DeleteModal from "./modals/deleteModal";

export default function TransactionHistory() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const { userData } = useSelector((state) => state.users.userData);

  useEffect(() => {
    dataHistory();
  }, [userData]);

  const dataHistory = () => {
    let filterData = userData.slice(0, 2);
    const alldata = filterData.map((data) => {
      let bgset = data?.type == "income" ? "success" : "danger";
      return (
        <>
          <ListGroup.Item
            onClick={() => showDetails(data.id, "one")}
            variant={bgset}
            key={data.id}
          >
            <div
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Row>
                <Col>{data.name}</Col> 
                <Col> {data.amount}</Col>{" "}
                <Col>{data.date}</Col>
              </Row>
            </div>
          </ListGroup.Item>
        </>
      );
    });
    return alldata;
  };

  const showDetails = (id, type) => {
    const data = { id: id, type: type };
    dispatch(showAllDetails(data));
  };

  const deleteData = (type) => {
    setShow(true);
  };
  return (
    <div>
      <Card border="secondary" style={{ minHeight: 308 }}>
        <Card.Header style={{ height: 80 }}>
          <h3>Transaction History</h3>
        </Card.Header>

        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Name</Col>
                <Col>Price</Col>
                <Col>Date</Col>
              </Row>
            </ListGroup.Item>
            {dataHistory()}
            <div>
              {userData.length >= 3 ? (
                <Button
                className="showMore-btn"
                  onClick={
                    () => showDetails(0, "all")
                  }
                >
                  Show More ...
                </Button>
              ) : null}
            </div>
          </ListGroup>
        </Card.Body>
        <Col>
         {userData.length>0? <Button className="expense-btn" onClick={() => deleteData("all")}>Remove History</Button>:<h3>Not any Transaction</h3>}
        </Col>
      </Card>
      <DeleteModal show={show} setShow={setShow} />
    </div>
  );
}
