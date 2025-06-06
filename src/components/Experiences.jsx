import { Button, Col, Container, Modal, Row, Form } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addExperiences, getExperiences } from "../redux/actions";

const Experiences = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "Italia",
  });

  const dispatch = useDispatch();
  const { userId } = useParams();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSave = async () => {
    await dispatch(addExperiences(userId, formData));
    dispatch(getExperiences(userId));
    setShowModal(false);
  };
  return (
    <Container className="bg-white p-4 rounded-2 border mt-3">
      <Row className="justify-content-between mb-3">
        <Col md={8}>
          <h5>{props.title}</h5>
        </Col>
        <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
          <Plus className="fs-1" onClick={() => setShowModal(true)} />
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add experience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="role">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" value={formData.role} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" value={formData.company} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="startDate">
              <Form.Label>Start date</Form.Label>
              <Form.Control type="date" value={formData.startDate} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="endDate">
              <Form.Label>End date</Form.Label>
              <Form.Control type="date" value={formData.endDate} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Tasks</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.description} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Row md={1} className="gy-2">
        <Col>
          <SingleExperience />
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
