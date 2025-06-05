import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import SingleExperience from "./SingleExperience";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getExperiences } from "../redux/actions";
import { useParams } from "react-router-dom";

const Experiences = (props) => {
  const [display, setDisplay] = useState(false);
  const [form, setForm] = useState({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
  const dispatch = useDispatch();
  const { userId } = useParams();

  const experiencesFromAPI = useSelector((state) => state.experiencesReducer.content);
  const experiencesAdded = useSelector((state) => state.addExperiencesReducer.content);

  const experiences = [...experiencesFromAPI, ...experiencesAdded];

  useEffect(() => {
    if (userId) {
      dispatch(getExperiences(userId));
    }
  }, [dispatch, userId]);

  const handleSave = () => {
    dispatch({ type: "ADD_EXPERIENCES_BY_ID", payload: form });
    setDisplay(false);
    setForm({ role: "", company: "", startDate: "", endDate: "", description: "", area: "" });
  };

  return (
    <>
      <Container className="bg-white p-4 rounded-2 border mt-3">
        <Row className="justify-content-between mb-3">
          <Col md={8}>
            <h5>{props.title}</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <div>
              <Plus className="fs-1" onClick={() => setDisplay(true)} />
              <Pencil className="fs-5" />
            </div>
          </Col>
        </Row>

        <Modal show={display} onHide={() => setDisplay(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="role">
                <Form.Label>Role:</Form.Label>
                <Form.Control type="text" placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="company">
                <Form.Label>Company:</Form.Label>
                <Form.Control type="text" placeholder="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="area">
                <Form.Label>Area:</Form.Label>
                <Form.Control type="text" placeholder="Area" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="start-date">
                <Form.Label>Start date:</Form.Label>
                <Form.Control type="date" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="end-date">
                <Form.Label>End date:</Form.Label>
                <Form.Control type="date" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="job-description">
                <Form.Label>Your tasks</Form.Label>
                <Form.Control as="textarea" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setDisplay(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Row md={1} className="gy-2">
          {experiences.length > 0 ? (
            experiences.map((exp, index) => (
              <Col key={exp._id || index}>
                <SingleExperience experience={exp} />
              </Col>
            ))
          ) : (
            <p className="text-muted">Nessuna esperienza trovata.</p>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Experiences;
