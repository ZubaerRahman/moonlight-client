import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProgrammeStage from "./ProgrammeStage";
import ActivityDetails from "./ActivityDetails";
import { Button, Card, Alert, Spinner, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function CurrentEnrolmentPage() {
  const navigate = useNavigate();

  const [currentEnrolmentDetails, setCurrentEnrolmentDetails] = useState(null);
  const [programmeDetails, setProgrammeDetails] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [stateUpdateCounter, setStateUpdateCounter] = React.useState(0);

  const progressStage = () => {
    axios
      .post("/enrolments/current/progress")
      .then((res) => {
        setSuccessMessage(res.data);
        setErrorMessage(null);
        setStateUpdateCounter(Math.random());
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setSuccessMessage(null);
      });
  };

  const unenrollFromProgramme = () => {
    axios
      .post("/enrolments/current/leave")
      .then((res) => {
        setSuccessMessage(res.data);
        setErrorMessage(null);
        navigate("/profile");
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setSuccessMessage(null);
      });
  };

  useEffect(() => {
    //fetch current enrolment and related programme details
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const currentEnrolment = await axios.get("/enrolments/current");
        const programmeDetailsRes = await axios.get(
          "/programmes/" + currentEnrolment.data.programmeId
        );
        setCurrentEnrolmentDetails(currentEnrolment.data);
        setProgrammeDetails(programmeDetailsRes.data);
        console.log(programmeDetailsRes.data);
        console.log(currentEnrolment.data);
      } catch (err) {
        console.log(err.response.data.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [stateUpdateCounter]);

  const CurrentProgrammeStage =
    currentEnrolmentDetails && programmeDetails ? (
      <ProgrammeStage
        stageKey={currentEnrolmentDetails.currentStage}
        programmeStage={
          programmeDetails.programmeStageMap[
            currentEnrolmentDetails.currentStage
          ]
        }
      />
    ) : null;

  const progressStageButton =
    programmeDetails &&
    currentEnrolmentDetails?.currentStage ===
      Math.max(
        ...Object.keys(programmeDetails.programmeStageMap).map((key) =>
          parseInt(key)
        )
      ) ? (
      <Button className="mb-3 mx-1" variant="dark" onClick={progressStage}>
        Complete programme
      </Button>
    ) : (
      <Button className="mb-3 mx-1" variant="dark" onClick={progressStage}>
        Progress to next stage
      </Button>
    );

  return isLoading ? (
    <Spinner animation="border" size="lg" />
  ) : currentEnrolmentDetails ? (
    <>
      <h1>Current enrolment</h1>
      <h2>{currentEnrolmentDetails.programmeName}</h2>
      <Row>
        <Col>
          <Card className="mb-3" style={{ width: "50%", minWidth: "18rem" }}>
            <Card.Header>
              Day {currentEnrolmentDetails.currentStage}
            </Card.Header>
            <Card.Body>
              <Card.Title>Activities</Card.Title>
              {CurrentProgrammeStage}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {progressStageButton}
          <LinkContainer
            to={
              "/wellbeing/survey/" +
              (currentEnrolmentDetails.focusedWellbeingType === "OVERALL"
                ? "WEMWBS_SURVEY"
                : currentEnrolmentDetails.focusedWellbeingType)
            }
          >
            <Button className="mb-3 mx-1" variant="dark">
              Submit wellbeing survey
            </Button>
          </LinkContainer>
          <Button
            className="mb-3 mx-4"
            variant="danger"
            onClick={unenrollFromProgramme}
          >
            Unenroll
          </Button>
        </Col>
      </Row>

      {successMessage && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setSuccessMessage(null)}
        >
          {successMessage}
        </Alert>
      )}
      {errorMessage && (
        <Alert
          variant="danger"
          dismissible
          onClose={() => setErrorMessage(null)}
        >
          {errorMessage}
        </Alert>
      )}
    </>
  ) : (
    <div>
      <Alert variant="warning">
        You are not currently enrolled in any programme.{" "}
        <LinkContainer to="/profile">
          <a href="/profile">Back to profile</a>
        </LinkContainer>
      </Alert>
    </div>
  );
}
