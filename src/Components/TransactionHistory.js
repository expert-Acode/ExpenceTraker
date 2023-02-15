import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeAllData, showAllDetails } from "../store/userSlice";
import DeleteModal from "./modals/deleteModal";

export default function TransactionHistory() {
  const dispatch = useDispatch();
  const [deleteType, setDeleteType] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [show, setShow] = useState(false);

  const { userData } = useSelector((state) => state.users.userData);
  console.log(userData, "userData");

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
              className="d-flex"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Row>
                <Col>{data.name}</Col> <Col> {data.amount}</Col>{" "}
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
    setDeleteType(type);
    setShow(true);
  };
  return (
    <div>
      <Card border="secondary" style={{ minHeight: 303 }}>
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
              {userData.length >= 3 && !showMore ? (
                <button
                  onClick={
                    // ()=>setShowMore(true)
                    () => showDetails(0, "all")
                  }
                >
                  Show More
                </button>
              ) : null}
            </div>
          </ListGroup>
        </Card.Body>
        <Col>
          <Button className="expense-btn" onClick={() => deleteData("all")}>Remove History</Button>
        </Col>
      </Card>
      <DeleteModal show={show} setShow={setShow} />
    </div>
  );
}
