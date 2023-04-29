import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

export function ConfirmEnrolment() {
  const navigate = useNavigate();
  const { programmeId } = useParams();

  const [programmeDetails, setProgrammeDetails] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [wellbeingTypes, setWellbeingTypes] = useState([]);
  const [selectedWellbeingType, setSelectedWellbeingType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchProgrammeDetails = () => {
    setIsLoading(true);
    axios.get("/programmes/" + programmeId).then((res) => {
      setProgrammeDetails(res.data);
      setIsLoading(false);
    });
  };

  const fetchWellbeingTypes = () => {
    axios.get("/wellbeing/wellbeing-types").then((res) => {
      console.log(res.data);
      setWellbeingTypes(res.data);
      setSelectedWellbeingType(res.data[0]);
    });
  };

  useEffect(() => {
    fetchProgrammeDetails();
  }, []);

  const handleChange = (event) => {
    setSelectedWellbeingType(event.target.value);
  };

  const enrolInProgramme = (e) => {
    e.preventDefault();
    console.log(selectedWellbeingType);
    axios
      .post("/enrolments/" + programmeId + "/enrol", {
        selectedWellbeingType: selectedWellbeingType,
      })
      .then((res) => {
        setSuccessMessage(res.data);
        navigate("/profile/current-enrolment");
        setErrorMessage(null);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
        setSuccessMessage(null);
      });
  };

  useEffect(() => {
    fetchWellbeingTypes();
  }, []);

  const listWellbeingOptions = wellbeingTypes.map((wellbeingType) => (
    <option value={wellbeingType}>{wellbeingType}</option>
  ));

  return (
    <div>
      {!isLoading && programmeDetails && (
        <div className="programme-details">
          <h1>Do you want to enrol in {programmeDetails.name}?</h1>
          <p>Programme duration: {programmeDetails.durationInWeeks} weeks</p>
          <p>Programme description: {programmeDetails.description}</p>

          <br />

          <form>
            <p>
              Please select what type of wellbeing you wish to focus on during
              this programme:
            </p>
            <Form.Select
              aria-label="Select wellbeing type"
              value={selectedWellbeingType}
              onChange={handleChange}
              className="mb-3"
            >
              {listWellbeingOptions.length > 0 ? listWellbeingOptions : ""}
            </Form.Select>
            <Button className="mb-3" variant="dark" onClick={enrolInProgramme}>
              Confirm enrolment
            </Button>
          </form>

          {successMessage && (
            <Alert
              variant="success"
              dismissible
              onClose={() => setSuccessMessage(null)}
            >
              <Alert.Heading>{successMessage}</Alert.Heading>
            </Alert>
          )}
          {errorMessage && (
            <Alert
              variant="danger"
              dismissible
              onClose={() => setErrorMessage(null)}
            >
              <Alert.Heading>Could not enrol in programme</Alert.Heading>
              <p>{errorMessage}</p>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
