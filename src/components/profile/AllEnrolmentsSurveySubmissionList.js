import EnrolmentSurveySubmissionList from "./EnrolmentSurveySubmissionList";
import EnrolmentWellbeingScoreLineChart from "../wellbeing/EnrolmentWellbeingScoreLineChart";
import { Accordion } from "react-bootstrap";

const AllEnrolmentsSurveySubmissionList = (props) => {
  const programmeEnrolmentToSubmissionsMultiMap =
    props.programmeEnrolmentToSubmissionsMultiMap;

  console.log(props.programmeEnrolmentToSubmissionsMultiMap);
  const enrolmentsSurveySubmissionList = Object.keys(
    programmeEnrolmentToSubmissionsMultiMap
  ).map((enrolmentId) => {
    const surveySubmissionsData =
      programmeEnrolmentToSubmissionsMultiMap[enrolmentId];
    const surveySubmissionsDataLabels = surveySubmissionsData.map(
      (data) => data.submissionDateTime
    );
    const surveySubmissionsDataScores = surveySubmissionsData.map(
      (data) => data.surveyScore
    );

    return (
      <Accordion.Item eventKey={enrolmentId}>
        <Accordion.Header>{enrolmentId}</Accordion.Header>
        <Accordion.Body>
          <EnrolmentSurveySubmissionList
            enrolmentId={enrolmentId}
            surveySubmissionsData={surveySubmissionsData}
          />
          <EnrolmentWellbeingScoreLineChart
            labels={surveySubmissionsDataLabels}
            dataset={surveySubmissionsDataScores}
            datasetLabel={"Submission score for enrolment " + enrolmentId}
          />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return (
    <div>
      <Accordion>{enrolmentsSurveySubmissionList}</Accordion>
    </div>
  );
};

export default AllEnrolmentsSurveySubmissionList;
