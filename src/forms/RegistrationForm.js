import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  let navigate = useNavigate();

  const [registrationDetails, setRegistrationDetails] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registrationDetails);

    axios
      .post("/auth/register", {
        ...registrationDetails,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        // logic
      });
  };

  return (
    <>
      <h1>Register as a new user</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={registrationDetails.email}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                email: e.target.value,
              })
            }
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={registrationDetails.password}
            onChange={(e) =>
              setRegistrationDetails({
                ...registrationDetails,
                password: e.target.value,
              })
            }
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
