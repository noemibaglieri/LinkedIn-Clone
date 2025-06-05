import { Col, Container, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";

const Experiences = (props) => {
  return (
    <>
      <Container className="bg-white p-4 rounded-2 border mt-3">
        <Row className="justify-content-between mb-3">
          <Col md={8}>
            <h5>{props.title}</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <Plus className="fs-1" />
            <Pencil className="fs-5" />
          </Col>
        </Row>
        <Row md={1} className="gy-2">
          <Col>
            <SingleExperience />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experiences;
