import { Card, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";

export function CurrentEnrolmentSummary(props) {
  const currentProgrammeEnrolment = props.currentProgrammeEnrolment;

  return (
    <>
      <Row>
        <Col>
          <Card className="mb-3" style={{ width: "50%", minWidth: "18rem" }}>
            <Card.Header>Current enrolment</Card.Header>
            <Card.Body>
              <Card.Title>{currentProgrammeEnrolment.programmeName}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                Enrolled in: {currentProgrammeEnrolment.enrolmentDateTime}
              </ListGroupItem>{" "}
              <ListGroupItem>
                Current stage: Day {currentProgrammeEnrolment.currentStage}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
