import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShearForm from "../ShearForm";

const AddContact = () => {
  return (
    <div className="container mt-5">
      <ShearForm btn="Add Contact" heading={"Add A New Contact"} submit="handelSubmit"  />
    </div>
  );
};

export default AddContact;
