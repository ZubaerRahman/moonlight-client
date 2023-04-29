import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  Accordion,
} from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";

export function FitnessProgrammePage() {
  const navigate = useNavigate();

  const [searchFilters, setSearchFilters] = useState({
    nameFilter: "",
    durationLowerBoundFilter: 0,
    durationUpperBoundFilter: 52,
  });
  const [programmes, setProgrammes] = useState([]);

  const fetchProgrammes = () => {
    axios.get("/programmes").then((res) => {
      console.log(res.data);
      setProgrammes(res.data);
    });
  };

  const goToProgrammePage = (programmeId) => {
    navigate("/wellbeing/programmes/" + programmeId);
  };

  useEffect(() => {
    fetchProgrammes();
  }, []);

  const programmeList =
    programmes.length > 0
      ? programmes
          .filter(
            (programme) =>
              programme.name
                .toUpperCase()
                .includes(searchFilters.nameFilter.toUpperCase()) &&
              programme.durationInWeeks >=
                searchFilters.durationLowerBoundFilter &&
              programme.durationInWeeks <=
                searchFilters.durationUpperBoundFilter
          )
          .map((programme) => {
            return (
              <li>
                <Card className="mt-3" style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{programme.name}</Card.Title>
                    <Card.Text>{programme.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      Programme duration: {programme.durationInWeeks} weeks
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link onClick={() => goToProgrammePage(programme.id)}>
                      View details
                    </Card.Link>
                  </Card.Body>
                </Card>
              </li>
            );
          })
      : "";

  return (
    <div>
      <h1>Wellbeing programmes</h1>
      <div>
        <div>
          <Form className="mb-4">
            <Form.Group className="mt-3 mb-2" controlId="searchProgrammeForm">
              <Form.Label>Search programmes</Form.Label>
              <Form.Control
                type="email"
                placeholder="Start typing..."
                value={searchFilters.nameFilter}
                onChange={(e) =>
                  setSearchFilters({
                    ...searchFilters,
                    nameFilter: e.target.value,
                  })
                }
              />
            </Form.Group>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>More filters</Accordion.Header>
                <Accordion.Body>
                  <Form.Group as={Row}>
                    <Form.Label>Duration in weeks</Form.Label>
                    <Col xs="6">
                      <Form.Label className="me-3">
                        Minimum: {searchFilters.durationLowerBoundFilter}
                      </Form.Label>
                      <Form.Range
                        value={searchFilters.durationLowerBoundFilter}
                        onChange={(e) =>
                          setSearchFilters({
                            ...searchFilters,
                            durationLowerBoundFilter: e.target.value,
                          })
                        }
                        max={52}
                      />
                    </Col>
                    <Col xs="6">
                      <Form.Label className="me-3">
                        Maximum: {searchFilters.durationUpperBoundFilter}
                      </Form.Label>
                      <Form.Range
                        value={searchFilters.durationUpperBoundFilter}
                        onChange={(e) =>
                          setSearchFilters({
                            ...searchFilters,
                            durationUpperBoundFilter: e.target.value,
                          })
                        }
                        max={52}
                      />
                    </Col>
                  </Form.Group>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form>
        </div>
        <ul style={{ listStyleType: "none" }}>{programmeList}</ul>
      </div>
    </div>
  );
}
