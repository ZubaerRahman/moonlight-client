import { Accordion } from "react-bootstrap";
import WellbeingTypeSurveyScoreLineChart from "../wellbeing/WellbeingTypeSurveyScoreLineChart";
import WellbeingTypeSurveySubmissionList from "./WellbeingTypeSurveySubmissionList";

const AllSurveySubmissionsForWellbeingTypeList = (props) => {
  const wellbeingTypeToSubmissionSummaryMultiMap =
    props.wellbeingTypeToSubmissionSummaryMultiMap;

  const surveySubmissionsForWellbeingType = Object.keys(
    wellbeingTypeToSubmissionSummaryMultiMap
  ).map((wellbeingType) => {
    const surveySubmissionsData =
      wellbeingTypeToSubmissionSummaryMultiMap[wellbeingType];

    const chartLabels = surveySubmissionsData.map(
      (submission) => submission.submissionDateTime
    );
    const chartDataset = surveySubmissionsData.map(
      (submission) => submission.surveyScore
    );

    return (
      <Accordion.Item eventKey={wellbeingType}>
        <Accordion.Header>{wellbeingType}</Accordion.Header>
        <Accordion.Body>
          <WellbeingTypeSurveySubmissionList
            wellbeingType={wellbeingType}
            surveySubmissionsData={surveySubmissionsData}
          />
          <WellbeingTypeSurveyScoreLineChart
            labels={chartLabels}
            dataset={chartDataset}
            datasetLabel={
              "Submission score for " + wellbeingType + " wellbeing surveys"
            }
          />
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion>{surveySubmissionsForWellbeingType}</Accordion>;
};

export default AllSurveySubmissionsForWellbeingTypeList;
