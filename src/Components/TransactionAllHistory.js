import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeAllData, showAllDetails } from "../store/userSlice";
import DeleteModal from "./modals/deleteModal";

export default function TransactionAllHistory({ historyData, deleteValue }) {
  const dispatch = useDispatch();
  //   const [deleteType, setDeleteType] = useState("");
  //   const [showMore, setShowMore] = useState(false);
    const [show, setShow] = useState(false);

  const { userData } = useSelector((state) => state.users.userData);
  console.log(userData, "userData");

  useEffect(() => {
    dataHistory();
  }, [userData]);

  const deleteData=(id)=>{
    setShow(true);
    const data = { id: id, type: "all" };
    dispatch(showAllDetails(data));
  }

  const dataHistory = () => {
    const alldata = userData.map((data) => {
      let bgset = data?.type == "income" ? "success" : "danger";
      return (
        <>
        <ListGroup>
          <ListGroup.Item variant={bgset} key={data.id}>
            <div
              className="d-flex"
              style={{
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Row >
                <Col>{data.name}</Col> <Col> {data.amount}</Col>
                <Col>{data.date}</Col>
                <Col>{data.type}</Col> <Col>{data.discription}</Col>
                <Row>   <Col>
                <svg
                 onClick={() =>deleteData(data.id)}
                style={{ width: 45 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                </Col></Row>
             
             
              </Row>
            </div>
          </ListGroup.Item>
          </ListGroup>
        </>
      );
    });
    return alldata;
  };

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
              <h3>All Transactions</h3>
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Name</Col>
                <Col>Price</Col>
                <Col>Date</Col>
                <Col>Type</Col>
                <Col>Discription</Col>
              </Row>
            </ListGroup.Item>
            {dataHistory()}
            <div></div>
          </ListGroup>
        </Card.Body>
      </Card>
      <DeleteModal show={show} setShow={setShow}/>
    </div>
  );
}
