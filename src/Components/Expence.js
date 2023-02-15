import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Expense({ income, expense }) {
  // console.log(income,expence);
  return (
    <div>
      <Card>
        <Card.Header>
          <h2>Your Balance</h2>
        </Card.Header>
        <Card.Body>
          <div className="balance-val">Rs {income - expense}</div>
          <Container>
            <Row>
              <Col>
                <Card border="success">
                  <div className="col col-income">
                    <span>
                      <h3>Income</h3>
                      <div className="income-text">Rs {income}</div>
                    </span>
                  </div>
                </Card>
              </Col>
              <Col>
                <Card border="danger">
                  <div className="col col-expense">
                    <h3>Expense</h3>
                    <div className="expense-text">Rs {expense}</div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
