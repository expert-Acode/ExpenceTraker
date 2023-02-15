import React, { useState, useEffect } from "react";
import Expense from "./Expence";
import TransactionForm from "./TransactionForm";
import TransactionHistory from "./TransactionHistory";
import { useDispatch, useSelector } from "react-redux";
import { userAdded, userDelete } from "../store/userSlice";
import { Col, Row, Container, Card } from "react-bootstrap";
import TransactionAllDetails from "./TransactionAllDetails";
import TransactionAllHistory from "./TransactionAllHistory";

export default function ExpenceTracker() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.users.userData);
  const showDetails = useSelector((state) => state.users.userData.showDetails);

  console.log(showDetails, "showDetails");

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  // const [history, setHistory] = useState(userData);

  useEffect(() => {
    calculateData();
  }, [userData]);

  const calculateData = () => {
    let income = 0,
      expense = 0;

      userData.forEach((data) => {
      if (data.type == "income") {
        income += data.amount;
      } else if (data.type == "expense") {
        expense += data.amount;
      }
    });
    setIncome(income);
    setExpense(expense);
  };

  // const deleteValue = (id) => {
  //   const newhistoryGenrate = history.filter((item) => item.id != id);

  //   console.log(id, "idForDelete");
  //   setHistory(newhistoryGenrate);
  //   dispatch(userDelete(id));
  // };

  return (
    <div>
      <Container>
        <Row>
          <Card bg="dark" border="dark">
            {" "}
            <h1>Expense Tracker</h1>{" "}
          </Card>
        </Row>
        <Row>
          <Card body border="dark">
            <Expense income={income} expense={expense} />
            {showDetails?.type == "none" ? (
              <Row>
                <Col>
                  <TransactionForm />
                </Col>
                <Col>
                  <TransactionHistory />
                </Col>
              </Row>
            ) : showDetails?.type == "one" ? (
              <Row>
                <Col>
                <TransactionAllDetails idForDetails={showDetails?.id} /></Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <TransactionAllHistory />
                </Col>
              </Row>
            )}
          </Card>
        </Row>
      </Container>
    </div>
  );
}
