import ActivityDetails from "./ActivityDetails";
import { ListGroup } from "react-bootstrap";

const ProgrammeStage = (props) => {
  const programmeStage = props.programmeStage;

  const activityMap = programmeStage.activityMap;
  const activityDetails = Object.keys(activityMap).map((activityKey) => {
    const activity = activityMap[activityKey];
    return <ActivityDetails activity={activity} />;
  });

  return (
    <>
      <ListGroup as="ol" numbered>
        {activityDetails}
      </ListGroup>
    </>
  );
};

export default ProgrammeStage;
