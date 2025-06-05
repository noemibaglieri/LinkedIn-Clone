import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Experiences = (props) => {
  const [display, setDisplay] = useState();
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiencesReducer?.content);

  return (
    <>
      <Container className="bg-white p-4 rounded-2 border mt-3">
        <Row className="justify-content-between mb-3">
          <Col md={8}>
            <h5>{props.title}</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <div>
              <Plus className="fs-1" onClick={() => setDisplay("block")} />
              <Pencil className="fs-5" />
            </div>
          </Col>
          <div className="modal show" style={{ display: display, position: "initial" }}>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Add experience</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <ExperienceForm />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setDisplay("none")}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => dispatch({ type: "ADD_EXPERIENCES_BY_ID", payload: experiences.role })}>
                  Save changes
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
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
