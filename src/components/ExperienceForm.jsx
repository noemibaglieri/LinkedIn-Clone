import { Form } from "react-bootstrap";

const ExperienceForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="role">
        <Form.Label>Role:</Form.Label>
        <Form.Control type="text" placeholder="Role" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="company">
        <Form.Label>Company:</Form.Label>
        <Form.Control type="text" placeholder="Company" />
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
  );
};

export default ExperienceForm;
