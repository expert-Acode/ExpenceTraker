import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeAllData, showAllDetails } from "../store/userSlice";
import DeleteModal from "./modals/deleteModal";

export default function TransactionAllDetails({ idForDetails }) {
  const dispatch = useDispatch();
  //   const [deleteType, setDeleteType] = useState("");
  //   const [showMore, setShowMore] = useState(false);
    const [show, setShow] = useState(false);

  const { userData } = useSelector((state) => state.users.userData);

  console.log(idForDetails, "iddddddddddd");

  useEffect(() => {
    dataHistory();
  }, [userData]);

  const dataHistory = () => {
    const alldata = userData.map((data) => {
        console.log(data,"data")
      let bgset = data?.type == "income" ? "success" : "danger";
      if (data.id == idForDetails) {
        return (
          <>
            <ListGroup.Item> All Details of {data.name} </ListGroup.Item>
            <ListGroup.Item variant={bgset} key={data.id}>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Name</label>
                {data.name}
              </div>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Amount</label>
                {data.amount}
              </div>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Date</label>
                {data.date}
              </div>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Type</label>
                {data.type}
              </div>
              <div
                className="d-flex"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <label>Discription</label>
                {data.discription}
              </div>

            </ListGroup.Item>
          </>
        );
      }
    });
    return alldata;
  };

  const deleteData=(type)=>{
    setShow(true)
  }

  const backButton = (id, type) => {
    const data = { id: id, type: type };
    dispatch(showAllDetails(data));
  };
  return (
    <div>
      <Card border="secondary" style={{ minHeight: 303 }}>
        <Card.Header style={{ height: 80 }}>
          <Row>
            <Col xs={3} md={2}>
              <svg
                onClick={() => backButton(0, "none")}
                style={{ width: 45 }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-1 h-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </Col>
            <Col xs={12} md={8}>
              <h3>Transaction Details</h3>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <ListGroup>
            {dataHistory()}
          </ListGroup>
        </Card.Body>
        <Col><Button onClick={()=>deleteData(idForDetails)}>Delete</Button></Col>
      </Card>
      <DeleteModal show={show} setShow={setShow} />
    </div>
  );
}
