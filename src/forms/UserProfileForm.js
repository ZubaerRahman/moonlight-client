import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UserStatsForm() {
  const navigate = useNavigate();

  const [userProfile, setUserProfile] = useState({
    firstName: null,
    lastName: null,
    sex: null,
    height: null,
    weight: null,
    bodyFatPercentage: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userProfile);

    axios
      .post("/users/profile", {
        ...userProfile,
      })
      .then((res) => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Profile information</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            value={userProfile.firstName}
            onChange={(e) =>
              setUserProfile({ ...userProfile, firstName: e.target.value })
            }
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            value={userProfile.lastName}
            onChange={(e) =>
              setUserProfile({ ...userProfile, lastName: e.target.value })
            }
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            aria-label="Select your gender"
            value={userProfile.sex}
            onChange={(e) =>
              setUserProfile({ ...userProfile, sex: e.target.value })
            }
          >
            <option>Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Height</Form.Label>
          <Form.Control
            type="number"
            value={userProfile.height}
            onChange={(e) =>
              setUserProfile({ ...userProfile, height: e.target.value })
            }
            placeholder="Enter height"
          />
          <Form.Text className="text-muted">In centimeters</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control
            type="number"
            value={userProfile.weight}
            onChange={(e) =>
              setUserProfile({ ...userProfile, weight: e.target.value })
            }
            placeholder="Enter height"
          />
          <Form.Text className="text-muted">In kilograms</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bodyfat percentage</Form.Label>
          <Form.Control
            type="number"
            value={userProfile.bodyFatPercentage}
            onChange={(e) =>
              setUserProfile({
                ...userProfile,
                bodyFatPercentage: e.target.value,
              })
            }
            placeholder="Enter height"
          />
          <Form.Text className="text-muted">Example: 15%</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
