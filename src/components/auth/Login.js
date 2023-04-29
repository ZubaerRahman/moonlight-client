import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/userSession";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

function Login() {
  const [error, setError] = useState(null);
  const [loginDetails, setLoginDetails] = useState({
    email: null,
    password: null,
  });

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/auth/authenticate`, {
        ...loginDetails,
      })
      .then((res) => {
        setError(null);
        dispatch(login({ jwtToken: res.data.jwtToken, isLoggedIn: true }));
        navigate("/");
      })
      .catch((err) => {
        setError(err.response ? err.response.data.message : "Token expired");
        dispatch(logout());
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
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
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({
                ...loginDetails,
                password: e.target.value,
              })
            }
            placeholder="Enter password"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Login
        </Button>
      </Form>
      {error ? (
        <Alert className="mt-3" variant="danger" variant="danger">
          {error}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}

export default Login;
