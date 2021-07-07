import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { addContact, updateContact } from "./Redax/Actions/Actions";
import { useParams } from "react-router";

const ShearForm = (props) => {
  const history = useHistory();

  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const state = useSelector((state) => state);
  const currentState = state.find((contact) => contact.id === parseInt(id));

  const setValue = () => {
    setName(currentState.name);
    setEmail(currentState.email);
    setNumber(currentState.number);
  };

  console.log(currentState);

  useEffect(() => {
    if (currentState) {
      setValue();
    }
  }, []);

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();

    const checkEmail = state.find((contact) => contact.email === email);
    const checkNumber = state.find((contact) => contact.number === number);

    if (!name || !email || !number) {
      return toast.warning("Pleade Fill All Filed");
    }
    if (checkEmail) {
      return toast.error("Email Alredy Exists!");
    }
    if (checkNumber) {
      return toast.error("Number Alredy Exists!");
    }
    const data = {
      id: state.length,
      name,
      email,
      number,
    };
    console.log(data);

    dispatch(addContact(data));
    toast.success("New User Added Successfully ! ");
    history.push("/");
  };

  const handelUpdate = (e) => {
    e.preventDefault();

    const checkEmail = state.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = state.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number
    );

    if (!name || !email || !number) {
      return toast.warning("Pleade Fill All Filed");
    }
    if (checkEmail) {
      return toast.error("Email Alredy Exists!");
    }
    if (checkNumber) {
      return toast.error("Number Alredy Exists!");
    }
    const data = {
      id: currentState.id,
      name,
      email,
      number,
    };
    dispatch(updateContact(data));
    toast.success("Contact Update Successfully");
    history.push("/");
  };

  return (
    <div className="row">
      <div className="col-md-5 mx-auto">
        <h2 className="text-center">{props.heading}</h2>
        <div className="px-4 py-4 mt-5  shadow rounded">
          <Form
            onSubmit={
              props.submit === "handelSubmit" ? handelSubmit : handelUpdate
            }
          >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name Here"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Here"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone Number"
              />
            </Form.Group>
            <button className="btn btn-primary" type="submit">
              {props.btn}
            </button>
            <Link to="/" className="btn btn-danger ml-3">
              Cancel
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ShearForm;
