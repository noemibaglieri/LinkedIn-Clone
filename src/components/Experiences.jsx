import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Experiences = (props) => {
  const [display, setDisplay] = useState();
  const [form, setForm] = useState({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
  const dispatch = useDispatch();

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
                <Form>
                  <Form.Group className="mb-3" controlId="role">
                    <Form.Label>Role:</Form.Label>
                    <Form.Control type="text" placeholder="Role" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company:</Form.Label>
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="area">
                    <Form.Label>Area:</Form.Label>
                    <Form.Control type="text" placeholder="Area" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="start-date">
                    <Form.Label>Start date:</Form.Label>
                    <Form.Control type="date" placeholder="StartDate" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="end-date">
                    <Form.Label>End date:</Form.Label>
                    <Form.Control type="date" placeholder="EndDate" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="job-description">
                    <Form.Label>Your tasks</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setDisplay("none")}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => dispatch({ type: "ADD_EXPERIENCES_BY_ID", payload: "" })}>
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
