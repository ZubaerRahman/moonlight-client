import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CurrentEnrolmentSummary } from "../../components/programmes/CurrentEnrolmentSummary";
import { Form, Accordion, Button, Spinner, Alert } from "react-bootstrap";

const WellbeingSurveyForm = (props) => {
  const [apiErr, setApiErr] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [currentProgrammeEnrolment, setCurrentProgrammeEnrolment] =
    useState(null);
  const [isRelatedToCurrentEnrolment, setIsRelatedToCurrentEnrolment] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCurrentEnrolmentLoading, setIsCurrentEnrolmentLoading] =
    useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const fetchSurvey = () => {
    setIsLoading(true);
    axios
      .get("/wellbeing/" + params.wellbeingSurveyType)
      .then((res) => {
        setSelectedSurvey(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Failed to fetch survey types");
        setIsLoading(false);
        setApiErr(err.response.data.message);
      });
  };

  const fetchCurrentEntolment = () => {
    setIsCurrentEnrolmentLoading(true);
    axios
      .get("/enrolments/current")
      .then((res) => {
        console.log(res.data);
        setCurrentProgrammeEnrolment(res.data);
        setIsCurrentEnrolmentLoading(false);
      })
      .catch((err) => {
        // setApiErr(err.response.data.message);
        setIsCurrentEnrolmentLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let formAnswers = {};
    for (var [key, value] of data.entries()) {
      formAnswers[key] = value;
    }
    console.log(formAnswers);
    axios
      .post("/wellbeing/" + params.wellbeingSurveyType, {
        ...formAnswers,
      })
      .then((res) => {
        isRelatedToCurrentEnrolment
          ? navigate("/profile/current-enrolment")
          : navigate("/profile");
      })
      .catch((err) => {
        console.log(err.response.data);
        setApiErr(err.response.data.subErrors[0]);
      });
  };

  const handleEnrolmentRadioChange = (e) => {
    setIsRelatedToCurrentEnrolment(e.target.value);
  };

  useEffect(() => {
    fetchSurvey();
    fetchCurrentEntolment();
  }, []);

  const surveyQuestions = selectedSurvey
    ? selectedSurvey.questions.map((question, index) => {
        let questionValues = [1, 2, 3, 4, 5];
        var questionRadioGroup = questionValues.map((questionValue) => {
          return (
            <label>
              <input
                className="mx-1"
                type="radio"
                value={questionValue}
                name={index}
              />
              {questionValue}
            </label>
          );
        });
        return (
          <div className="radio-questions">
            {question} {questionRadioGroup}{" "}
          </div>
        );
      })
    : "";

  return isLoading ? (
    <Spinner animation="border" />
  ) : selectedSurvey ? (
    <div>
      <h1>Submit {selectedSurvey.name}</h1>{" "}
      <form id="wellbeing-survey-form" onSubmit={handleSubmit}>
        {surveyQuestions}
        <Form.Group className="my-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments:</Form.Label>
          <Form.Control as="textarea" name="user-comment" rows={3} />
        </Form.Group>
        {isCurrentEnrolmentLoading ? (
          <Spinner animation="border" />
        ) : (
          currentProgrammeEnrolment && (
            <div className="my-3">
              <Accordion className="mb-1">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Is this submission related to your current programme
                    enrolment?
                  </Accordion.Header>
                  <Accordion.Body>
                    <CurrentEnrolmentSummary
                      currentProgrammeEnrolment={currentProgrammeEnrolment}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <label>
                <input
                  type="radio"
                  value="true"
                  name="related-to-enrolment"
                  onChange={handleEnrolmentRadioChange}
                  className="mx-1"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="false"
                  name="related-to-enrolment"
                  onChange={handleEnrolmentRadioChange}
                  className="mx-1"
                />
                No
              </label>
            </div>
          )
        )}
        {!isCurrentEnrolmentLoading && (
          <Button className="mb-3" variant="dark" type="submit">
            Submit
          </Button>
        )}
        {apiErr && (
          <Alert
            className="mt-3"
            variant="danger"
            dismissible
            onClose={() => setApiErr(null)}
          >
            {apiErr}
          </Alert>
        )}
      </form>
    </div>
  ) : (
    ""
  );
};

export default WellbeingSurveyForm;
