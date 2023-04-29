import { ListGroup, Badge } from "react-bootstrap";

const ActivityDetails = (props) => {
  const activity = props.activity;

  let activityDetails;

  if (
    activity.activityType === "CARDIO" ||
    activity.activityType === "MINDFULNESS"
  ) {
    activityDetails = (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{activity["activityName"]}</div>
          {activity["activityDescription"]}
        </div>
        <Badge bg="primary" pill>
          {activity["duration"]} mins
        </Badge>
      </ListGroup.Item>
    );
  } else if (activity.activityType === "RESISTANCE") {
    activityDetails = (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{activity["activityName"]}</div>
          {activity["activityDescription"]}
        </div>
        <div className="ms-2 me-auto">
          Sets: {activity["sets"]}, Repetitions: {activity["reps"]}
        </div>
        <Badge bg="primary" pill>
          {activity["duration"]} mins
        </Badge>
      </ListGroup.Item>
      //   <div className="activity-details">
      //     <p>Activity name: {activity["activityName"]}</p>
      //     <p>Description: {activity["activityDescription"]}</p>
      //     <p>Number of sets: {activity["sets"]}</p>
      //     <p>Number or repetitions: {activity["reps"]}</p>
      //     <p>Approximate duration: {activity["duration"]}</p>
      //   </div>
    );
  } else {
    activityDetails = <p>Activity details not available.</p>;
  }

  return <>{activityDetails}</>;
};

export default ActivityDetails;
