import React from "react";
import { Card } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";

export function Home() {
  return (
    <div>
      <h1>Welcome to Moonlight</h1>
      <h2>Here's a few things to help you get started:</h2>
      <Card className="mt-4">
        <Card.Body>
          <LinkContainer to="/profile">
            <Card.Title>Go to profile page</Card.Title>
          </LinkContainer>
        </Card.Body>
      </Card>{" "}
      <Card>
        <Card.Body>
          <LinkContainer to="/wellbeing/programmes">
            <Card.Title>View all available wellbeing programmes</Card.Title>
          </LinkContainer>
        </Card.Body>
      </Card>{" "}
      <Card>
        <Card.Body>
          <LinkContainer to="/wellbeing/survey/choose">
            <Card.Title>Submit a wellbeing survey</Card.Title>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
}
