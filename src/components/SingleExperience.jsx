import { useEffect, useState } from "react";
import { Button, Col, Row, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../redux/actions";
import { useParams } from "react-router-dom";
import { PencilFill, Trash } from "react-bootstrap-icons";

const token = import.meta.env.VITE_API_TOKEN;

const SingleExperience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiencesReducer.content);
  const profile = useSelector((state) => state.myProfileReducer.content);
  const param = useParams();
  const myProfile = useSelector((state) => state.myProfileReducer.content);

  const { userId } = useParams();
  const myUserProfile = useSelector((state) => state.myProfileReducer.content);
  const isMyProfile = userId === myUserProfile?._id;

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingExperience, setEditingExperience] = useState(null);

  useEffect(() => {
    const id = param.userId || myProfile?._id;
    if (id) {
      dispatch(getExperiences(id));
    }
  }, [dispatch, param.userId, myProfile]);

  const deleteExperience = async (experienceId) => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${experienceId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!resp.ok) {
        throw new Error("Errore nella cancellazione dell'esperienza");
      } else {
        alert("Esperienza cancellata con successo!");
        dispatch(getExperiences(profile._id));
      }
    } catch (error) {
      console.log("Errore", error);
    }
  };

  const handleEditClick = (experience) => {
    setEditingExperience(experience);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${profile._id}/experiences/${editingExperience._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(editingExperience),
      });

      if (!resp.ok) throw new Error("Errore nella modifica");

      alert("Esperienza modificata con successo!");
      dispatch(getExperiences(profile._id));
      setShowEditModal(false);
    } catch (error) {
      console.log("Errore:", error);
    }
  };

  return (
    <>
      <Row>
        {experiences.length === 0 ? (
          <p>Nessuna esperienza trovata.</p>
        ) : (
          experiences?.map((experience, index) => {
            let start = new Date(experience.startDate);
            let end = new Date(experience.endDate);
            const years =
              end.getFullYear() -
              start.getFullYear() -
              (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate()) ? 1 : 0);
            const months =
              (end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear()) + (end.getDate() < start.getDate() ? -1 : 0)) % 12;
            const workingPeriod =
              years > 0
                ? months > 0
                  ? `${years} ann${years > 1 ? "i" : ""} e ${months} mes${months > 1 ? "i" : ""}`
                  : `${years} ann${years > 1 ? "i" : ""}`
                : months > 0
                ? `${months} mes${months > 1 ? "i" : ""}`
                : "0 mesi";

            return (
              <div key={experience._id || index}>
                <Col md={1}>
                  <img className="object-fit-cover" src={experience.image} alt="work logo" width={60} height={60} />
                </Col>
                <div className="d-flex align-items-start">
                  <Col>
                    <h6 className="mb-0">{experience.role}</h6>
                    <div className="d-flex gap-1 font-very-small">
                      <span>{experience.company}</span>
                    </div>
                    <div className="d-flex gap-1 font-very-small">
                      <span>
                        {start.toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span style={{ userSelect: "none" }}>-</span>
                      <span>
                        {end.toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span style={{ userSelect: "none" }}>&bull;</span>
                      <span>{workingPeriod}</span>
                    </div>
                    <div className="d-flex gap-1 font-very-small">
                      <span>{experience.area}</span>
                    </div>
                    <div className="mt-2">
                      <p>{experience.description}</p>
                    </div>
                  </Col>
                  {!isMyProfile && (
                    <div className="d-flex gap-2">
                      <Button variant="secondary" className=" border-0 rounded-5" onClick={() => handleEditClick(experience)}>
                        <PencilFill />
                      </Button>
                      <Button className="bg-danger border-0 rounded-5" onClick={() => deleteExperience(experience._id)}>
                        <Trash />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </Row>

      {/* Modal modifica esperienza */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingExperience && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Ruolo</Form.Label>
                <Form.Control
                  type="text"
                  value={editingExperience.role}
                  onChange={(e) => setEditingExperience({ ...editingExperience, role: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Azienda</Form.Label>
                <Form.Control
                  type="text"
                  value={editingExperience.company}
                  onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={editingExperience.description}
                  onChange={(e) => setEditingExperience({ ...editingExperience, description: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Area</Form.Label>
                <Form.Control
                  type="text"
                  value={editingExperience.area}
                  onChange={(e) => setEditingExperience({ ...editingExperience, area: e.target.value })}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleExperience;
