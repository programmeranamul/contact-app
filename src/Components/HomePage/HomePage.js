import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deletContact } from "../Redax/Actions/Actions";

const HomePage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handelDelet = (id) => {
    dispatch(deletContact(id));
    console.log("delet");
  };

  return (
    <div className="container mt-5 pt-4">
      {state.length < 1 ? (
        <div className="text-center">
          <h3>You Have No Contact</h3>
          <Link className="btn btn-primary mt-4" to="/add">
            Add Contact
          </Link>
        </div>
      ) : (
        <div className="col-md-9 mx-auto">
          <Table striped bordered hover>
            <thead className="bg-dark text-white">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {state.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>

                  <td className="text-center">
                    <Link className="mr-2" to={`edite/${user.id}`}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <span
                      onClick={() => handelDelet(user.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default HomePage;
