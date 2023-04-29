import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AllEnrolmentsSurveySubmissionList from "./AllEnrolmentsSurveySubmissionList";
import AllSurveySubmissionsForWellbeingTypeList from "./AllSurveySubmissionsForWellbeingTypeList";

function WellbeingSummary() {
  const [
    wellbeingTypeToSubmissionSummaryMultiMap,
    setWellbeingTypeToSubmissionSummaryMultiMap,
  ] = useState();

  const [
    programmeEnrolmentToSubmissionsMultiMap,
    setProgrammeEnrolmentToSubmissionsMultiMap,
  ] = useState();

  const fetchSurveySubmissionMaps = async () => {
    const wellbeingTypeToSubmissionSummaryMultiMapRes = await axios.get(
      "/users/profile/stats/wb-type-to-submissions"
    );
    const programmeEnrolmentToSubmissionsMultiMapRes = await axios.get(
      "/users/profile/stats/enrolment-to-submissions"
    );

    setWellbeingTypeToSubmissionSummaryMultiMap(
      wellbeingTypeToSubmissionSummaryMultiMapRes.data
    );
    setProgrammeEnrolmentToSubmissionsMultiMap(
      programmeEnrolmentToSubmissionsMultiMapRes.data
    );

    console.log(wellbeingTypeToSubmissionSummaryMultiMapRes.data);
    console.log(programmeEnrolmentToSubmissionsMultiMapRes.data);
  };

  useEffect(() => {
    fetchSurveySubmissionMaps();
  }, []);

  return (
    <div>
      <h1 className="display-4 mb-3">
        Wellbeing survey submissions summary page
      </h1>
      {programmeEnrolmentToSubmissionsMultiMap && (
        <div className="mb-3">
          <h2>Survey submissions for all programme enrolments</h2>
          <AllEnrolmentsSurveySubmissionList
            programmeEnrolmentToSubmissionsMultiMap={
              programmeEnrolmentToSubmissionsMultiMap
            }
          />
        </div>
      )}
      {wellbeingTypeToSubmissionSummaryMultiMap && (
        <div className="mb-3">
          <h2>Survey submissions for each wellbeing type</h2>
          <AllSurveySubmissionsForWellbeingTypeList
            wellbeingTypeToSubmissionSummaryMultiMap={
              wellbeingTypeToSubmissionSummaryMultiMap
            }
          />
        </div>
      )}
    </div>
  );
}

export default WellbeingSummary;
