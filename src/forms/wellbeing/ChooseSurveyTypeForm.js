import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";

export default function ChooseSurveyTypeForm() {
  const [apiErr, setApiErr] = useState(false);
  const [surveyTypes, setSurveyTypes] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState("");

  const navigate = useNavigate();

  const fetchSurveyTypes = () => {
    axios
      .get("/wellbeing/get-survey-types")
      .then((res) => {
        console.log(res.data);
        setSurveyTypes(res.data);
        setSelectedSurvey(Object.keys(res.data)[0]);
      })
      .catch((err) => {
        console.log("Failed to fetch survey types");
        setApiErr(true);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected survey", selectedSurvey);
    navigate("/wellbeing/survey/" + selectedSurvey);
  };

  useEffect(() => {
    fetchSurveyTypes();
  }, []);

  const listSurveyOptions = Object.keys(surveyTypes).map((key) => (
    <option value={key}>{surveyTypes[key]}</option>
  ));

  return (
    <>
      <h1>Choose wellbeing survey type</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Wellbeing survey type</Form.Label>
          <Form.Select
            aria-label="Select survey type"
            value={selectedSurvey}
            onChange={(e) => setSelectedSurvey(e.target.value)}
          >
            {listSurveyOptions}
          </Form.Select>
        </Form.Group>
        <Button variant="dark" type="submit">
          Choose
        </Button>
      </Form>
      {apiErr ? (
        <Alert className="mt-3" variant="danger">
          {apiErr}
        </Alert>
      ) : (
        <></>
      )}
    </>
  );
}
