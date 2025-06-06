import { Row, Col } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const SingleExperience = ({ experience, onEdit }) => {
  const start = new Date(experience.startDate);
  const end = new Date(experience.endDate);

  const diffMs = end - start;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;

  const workingPeriod =
    years > 0
      ? months > 0
        ? `${years} ann${years > 1 ? "i" : "o"} e ${months} mes${months > 1 ? "i" : "e"}`
        : `${years} ann${years > 1 ? "i" : "o"}`
      : `${months} mes${months > 1 ? "i" : "e"}`;

  return (
    <Row className="align-items-start mb-3">
      <Col md={1}>
        <img className="object-fit-cover" src={experience.image || "https://via.placeholder.com/60"} alt="work logo" width={60} height={60} />
      </Col>
      <Col>
        <div className="d-flex justify-content-between align-items-start">
          <h6 className="mb-0">{experience.role}</h6>
          <Pencil role="button" style={{ cursor: "pointer" }} onClick={() => onEdit(experience)} />
        </div>
        <div className="d-flex gap-1 font-very-small">
          <span>{experience.company}</span>
        </div>
        <div className="d-flex gap-1 font-very-small">
          <span>{start.toLocaleString("default", { month: "short", year: "numeric" })}</span>
          <span style={{ userSelect: "none" }}> - </span>
          <span>{end.toLocaleString("default", { month: "short", year: "numeric" })}</span>
          <span style={{ userSelect: "none" }}>&bull;</span>
          <span>{workingPeriod}</span>
        </div>
        <div className="d-flex gap-1 font-very-small">
          <span>{experience.area}</span>
        </div>
        <div className="mt-1 font-very-small">{experience.description}</div>
      </Col>
    </Row>
  );
};

export default SingleExperience;
