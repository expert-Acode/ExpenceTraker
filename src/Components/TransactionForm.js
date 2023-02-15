import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { UniqueId } from "./ReuseComp";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { userAdded } from "../store/userSlice";

export default function TransactionForm() {
  const dispatch = useDispatch();
  const InitialValues = {
    name: "",
    amount: "",
    date: "",
    discription: "",
    type: "income",
  };
  const [value, setValue] = useState(InitialValues);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState("");

  const toDate = () => {
    const date = new Date();
    const calenderDate = moment(date).calendar();
    const localDate = moment(date).format("llll");
    const shortDate = moment(date).format("MMMM Do YYYY");
    return shortDate;
  };

  const pickData = (type, e) => {
    e.preventDefault();
    if (value.name && value.amount && value.discription) {
      const Data = {
        ...value,
        id: UniqueId(),
        amount: parseInt(value.amount),
        type: type,
        date: toDate(),
      };
      dispatch(userAdded(Data));
      setValue(InitialValues);
      setError("");
    } else {
      setError("please fill all inputs");
    }
  };

  return (
    <div>
      <Card border="secondary" style={{ minHeight: 303 }}>
        <Card.Header style={{ height: 80 }}>
          <h3>Add New Transactions</h3>
        </Card.Header>
        <Card.Body>
          <span style={{ color: "red" }}>{error && error}</span>
          <form className="transaction-form">
            <label>
              Name
              <div>
                <input
                  type="text"
                  name={"name"}
                  value={value.name}
                  onChange={handleChange}
                  onBlur={() => {
                    setError("");
                  }}
                />
              </div>
            </label>
            <label>
              Amount
              <div>
                <input
                  type="number"
                  name={"amount"}
                  value={value.amount}
                  onChange={handleChange}
                  onBlur={() => {
                    setError("");
                  }}
                />
              </div>
            </label>
            <label>
              Discription
              <div>
                <input
                  type="text"
                  name={"discription"}
                  value={value.discription}
                  onChange={handleChange}
                  onBlur={() => {
                    setError("");
                  }}
                />
              </div>
            </label>
            <div>
              <Button
                className="income-btn"
                onClick={(e) => pickData("income", e)}
              >
                Add Income
              </Button>
              <Button
                className="expense-btn"
                onClick={(e) => pickData("expense", e)}
              >
                Add Expense
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
