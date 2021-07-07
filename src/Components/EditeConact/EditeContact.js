import React from "react";
import { useParams } from "react-router";
import ShearForm from "../ShearForm";

const EditeContact = () => {
    
  return (
    <div className="container mt-5">
      <ShearForm btn="Update" heading="Update Contact" />
    </div>
  );
};

export default EditeContact;
