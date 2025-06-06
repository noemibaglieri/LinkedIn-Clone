import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form, Spinner, Alert } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setExperiences, addExperience, updateExperienceAction, setLoading, setError } from "../redux/actions";
import { useParams } from "react-router-dom";
import SingleExperience from "./SingleExperience";
import ExperienceForm from "./ExperienceForm";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile";
const token = import.meta.env.VITE_API_TOKEN;

const emptyForm = {
  role: "",
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  area: "",
};

const Experiences = ({ title = "Esperienze" }) => {
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const dispatch = useDispatch();
  const { userId } = useParams();

  const { content: experiences, isLoading, error } = useSelector((state) => state.experiencesReducer);

  useEffect(() => {
    const fetchExperiences = async () => {
      dispatch(setLoading(true));
      try {
        const res = await fetch(`${API_URL}/${userId}/experiences`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Errore caricamento esperienze");
        const data = await res.json();
        dispatch(setExperiences(data));
      } catch (err) {
        dispatch(setError(err.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (userId) fetchExperiences();
  }, [dispatch, userId]);

  const handleAddClick = () => {
    setForm(emptyForm);
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEditClick = (experience) => {
    setForm(experience);
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleSave = async () => {
    dispatch(setLoading(true));
    try {
      if (isEditMode) {
        const res = await fetch(`${API_URL}/${userId}/experiences/${form._id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Errore aggiornamento esperienza");
        const updatedExperience = await res.json();
        dispatch(updateExperienceAction(updatedExperience));
      } else {
        const res = await fetch(`${API_URL}/${userId}/experiences`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error("Errore creazione esperienza");
        const newExperience = await res.json();
        dispatch(addExperience(newExperience));
      }

      setShowModal(false);
      setForm(emptyForm);
      setIsEditMode(false);
    } catch (err) {
      dispatch(setError(err.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Container className="bg-white p-4 rounded-2 border mt-3">
      <Row className="justify-content-between align-items-center mb-3">
        <Col>
          <h5>{title}</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <Plus role="button" size={28} onClick={handleAddClick} />
        </Col>
      </Row>

      {isLoading && (
        <div className="d-flex justify-content-center my-3">
          <Spinner animation="border" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && experiences.length === 0 && <p>Nessuna esperienza presente.</p>}

      <div className="d-flex flex-column gap-3">
        {experiences.map((experience) => (
          <SingleExperience key={experience._id} experience={experience} onEdit={handleEditClick} />
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isEditMode ? "Modifica esperienza" : "Aggiungi esperienza"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <ExperienceForm form={form} setForm={setForm} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {isEditMode ? "Salva modifiche" : "Aggiungi"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Experiences;
