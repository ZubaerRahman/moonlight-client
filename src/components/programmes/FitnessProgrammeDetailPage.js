import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ActivityDetails from "./ActivityDetails";
import ProgrammeStage from "./ProgrammeStage";
import { Button } from "react-bootstrap";

export function FitnessProgrammeDetailPage() {
  const navigate = useNavigate();
  const { programmeId } = useParams();

  const [programmeDetails, setProgrammeDetails] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProgrammes = () => {
    setIsLoading(true);
    axios.get("/programmes/" + programmeId).then((res) => {
      setProgrammeDetails(res.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchProgrammes();
  }, []);

  const goToEnrolmentConfirmationPage = () => {
    navigate("/wellbeing/programmes/" + programmeId + "/confirm");
  };

  const programmeStages = programmeDetails.programmeStageMap
    ? Object.keys(programmeDetails.programmeStageMap).map((key) => {
        const programmeStage = programmeDetails.programmeStageMap[key];
        return (
          <Accordion.Item eventKey={key}>
            <Accordion.Header>
              Day {key}: {programmeStage.name}
            </Accordion.Header>
            <Accordion.Body>
              <ProgrammeStage programmeStage={programmeStage} />
            </Accordion.Body>
          </Accordion.Item>
        );
      })
    : "";
  return (
    <div>
      {!isLoading && programmeDetails && (
        <div className="programme-details">
          <h1>{programmeDetails.name}</h1>
          <p>Programme duration: {programmeDetails.durationInWeeks} weeks</p>
          <p>Programme description: {programmeDetails.description}</p>
          <Accordion className="mb-3">{programmeStages}</Accordion>
          <Button
            variant="dark"
            onClick={() => goToEnrolmentConfirmationPage()}
          >
            Enrol
          </Button>

          <br />
          <p>{successMessage && successMessage}</p>
          <p>{errorMessage && errorMessage}</p>
        </div>
      )}
    </div>
  );
}
