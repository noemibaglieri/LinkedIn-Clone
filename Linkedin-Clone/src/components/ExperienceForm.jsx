import { Form } from "react-bootstrap";

const ExperienceForm = ({ form, setForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Form.Group className="mb-2" controlId="role">
        <Form.Label>Ruolo</Form.Label>
        <Form.Control type="text" name="role" value={form.role} onChange={handleChange} placeholder="Ruolo" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="company">
        <Form.Label>Azienda</Form.Label>
        <Form.Control type="text" name="company" value={form.company} onChange={handleChange} placeholder="Azienda" />
      </Form.Group>

      <Form.Group className="mb-2" controlId="startDate">
        <Form.Label>Data inizio</Form.Label>
        <Form.Control type="date" name="startDate" value={form.startDate} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-2" controlId="endDate">
        <Form.Label>Data fine</Form.Label>
        <Form.Control type="date" name="endDate" value={form.endDate} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-2" controlId="description">
        <Form.Label>Descrizione</Form.Label>
        <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} placeholder="Descrizione" />
      </Form.Group>
    </>
  );
};

export default ExperienceForm;
