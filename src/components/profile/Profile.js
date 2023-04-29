import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import { Alert } from "react-bootstrap";
import { Spinner } from "react-bootstrap";

function Profile() {
  const [isLoading, setIsLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    profile: {
      userId: null,
      firstName: null,
      lastName: null,
      sex: null,
      height: null,
      weight: null,
      bodyFatPercentage: null,
      lastUpdatedDatetime: null,
    },
  });

  const [wellbeingStatsData, setWellbeingStatsData] = useState({
    wellbeingStats: {
      lastUpdatedDatetime: null,
      wellbeingTypeScoreMap: null,
    },
  });

  const fetchUserProfileAndStats = (data) => {
    setIsLoading(true);
    axios
      .get(`/users/profile`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        console.log(res.data);
        setProfileData({ ...res.data });
        axios
          .get(`/users/profile/stats`)
          .then((statsRes) => {
            console.log(statsRes.data);
            setWellbeingStatsData({ ...statsRes.data });
            setIsLoading(false);
          })
          .catch((statsErr) => {
            console.log(statsErr);
            setIsLoading(false);
          });
        console.log("USER ID 1", res.data.userId);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchUserProfileAndStats();
  }, []);

  const wellbeingStatsScores = wellbeingStatsData.wellbeingTypeScoreMap ? (
    Object.keys(wellbeingStatsData.wellbeingTypeScoreMap).map((key) => {
      return (
        <ListGroupItem>
          {key}: {wellbeingStatsData.wellbeingTypeScoreMap[key]}
        </ListGroupItem>
      );
    })
  ) : (
    <span></span>
  );

  return (
    <div>
      {isLoading ? (
        <>
          <h1>Profile page</h1>
          <Spinner animation="border" size="lg" />
        </>
      ) : (
        <>
          {!!!profileData.firstName ? (
            <>
              <h1>Profile page</h1>
              <Alert key="warning" variant="warning">
                Please
                <LinkContainer to="/profile/update">
                  <a href="/profile/update">
                    {" "}
                    set up your profile information{" "}
                  </a>
                </LinkContainer>
                before seing accessing your wellbeing data.
              </Alert>
            </>
          ) : (
            <>
              <h1>
                {profileData.firstName} {profileData.lastName}'s profile
              </h1>
              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>User biodata</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Last updated: {profileData.lastUpdatedDatetime}
                  </Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Sex: {profileData.sex ? profileData.sex : "N/A"}
                  </ListGroupItem>
                  <ListGroupItem>
                    Height: {profileData.height ? profileData.height : "N/A"}
                  </ListGroupItem>
                  <ListGroupItem>
                    Weight: {profileData.weight ? profileData.weight : "N/A"}
                  </ListGroupItem>
                  <ListGroupItem>
                    Bodyfat percentage:
                    {profileData.bodyFatPercentage
                      ? profileData.bodyFatPercentage
                      : "N/A"}
                  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <LinkContainer to="/profile/update">
                    <Card.Link>Update</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>

              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Wellbeing summary</Card.Title>
                </Card.Body>
                {wellbeingStatsData.lastUpdatedDatetime ? (
                  <>
                    <Card.Body>
                      <Card.Subtitle className="mb-2 text-muted">
                        Last updated: {wellbeingStatsData.lastUpdatedDatetime}
                      </Card.Subtitle>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      {wellbeingStatsScores}
                    </ListGroup>
                    <Card.Body>
                      <LinkContainer to="/profile/wellbeing-summary">
                        <Card.Link>More details</Card.Link>
                      </LinkContainer>
                    </Card.Body>
                  </>
                ) : (
                  <Alert key="warning" variant="warning">
                    No wellbeing data available, please{" "}
                    <LinkContainer to="/wellbeing/survey/choose">
                      <a href="/profile/update"> submit a wellbeing survey </a>
                    </LinkContainer>
                    first.
                  </Alert>
                )}
              </Card>

              <Card className="m-3" style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Programme enrolments</Card.Title>
                </Card.Body>
                <Card.Body>
                  <LinkContainer to="/profile/current-enrolment">
                    <Card.Link>Go to current enrolment</Card.Link>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
