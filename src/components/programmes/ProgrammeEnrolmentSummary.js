import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const ProgrammeEnrolmentSummary = (props) => {
  const enrolmentDetails = props.programmeEnrolmentDetails;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{enrolmentDetails.programmeName}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          Wellbeing goal focus: {enrolmentDetails.focusedWellbeingType}
        </ListGroupItem>
        <ListGroupItem>
          Enrolment status: {enrolmentDetails.enrolmentStatus}
        </ListGroupItem>
        <ListGroupItem>
          Programme enrolment date: {enrolmentDetails.enrolmentDateTime}
        </ListGroupItem>
        {enrolmentDetails.terminationDateTime && (
          <ListGroupItem>
            Programme termination date: {enrolmentDetails.terminationDateTime}
          </ListGroupItem>
        )}
      </ListGroup>
    </Card>
  );
};

export default ProgrammeEnrolmentSummary;
