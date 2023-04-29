import axios from "axios";
import { useState, useEffect } from "react";
import ProgrammeEnrolmentSummary from "../programmes/ProgrammeEnrolmentSummary";
import {
  Row,
  Col,
  Accordion,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";

const EnrolmentSurveySubmissionList = (props) => {
  const enrolmentId = props.enrolmentId;
  const surveySubmissionsData = props.surveySubmissionsData;

  const [programmeEnrolmentDetails, setProgrammeEnrolmentDetails] =
    useState(null);

  const fetchProgrammeEnrolmentDetails = async () => {
    const enrolmentDetailsRes = await axios.get("enrolments/" + enrolmentId);
    setProgrammeEnrolmentDetails(enrolmentDetailsRes.data);
  };

  useEffect(() => {
    fetchProgrammeEnrolmentDetails();
  }, []);

  const SurveySubmissionList = surveySubmissionsData.map(
    (surveySubmission, index) => {
      return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              {" "}
              {surveySubmission.submissionDateTime}
            </div>
            Survey score:
            <Badge className="mx-1" bg="dark" pill>
              {surveySubmission.surveyScore}
            </Badge>
          </div>
        </ListGroup.Item>
      );
    }
  );

  return (
    programmeEnrolmentDetails && (
      <Row>
        <Col>
          <h3>Programme enrolment summary:</h3>
          <ProgrammeEnrolmentSummary
            programmeEnrolmentDetails={programmeEnrolmentDetails}
          />
        </Col>
        <Col>
          <h3>Survey submissions for enrolment:</h3>
          <ListGroup>{SurveySubmissionList}</ListGroup>
        </Col>
      </Row>
    )
  );
};

export default EnrolmentSurveySubmissionList;
