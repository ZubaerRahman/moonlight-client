import { ListGroup, Badge } from "react-bootstrap";

const WellbeingTypeSurveySubmissionList = (props) => {
  const wellbeingType = props.wellbeingType;
  const surveySubmissionsData = props.surveySubmissionsData;

  const SurveySubmissionList = surveySubmissionsData.map((surveySubmission) => {
    return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold"> {surveySubmission.submissionDateTime}</div>
          Survey score:
          <Badge className="mx-1" bg="dark" pill>
            {surveySubmission.surveyScore}
          </Badge>
        </div>
      </ListGroup.Item>
    );
  });

  return (
    <div>
      <p>{wellbeingType} wellbeing survey submissions:</p>
      <ListGroup>{SurveySubmissionList}</ListGroup>
    </div>
  );
};

export default WellbeingTypeSurveySubmissionList;
