// components/SingleExperience.jsx
import { Col, Row } from "react-bootstrap";

const SingleExperience = ({ experience }) => {
  let start = new Date(experience.startDate);
  let end = new Date(experience.endDate);

  const years =
    end.getFullYear() -
    start.getFullYear() -
    (end.getMonth() < start.getMonth() || (end.getMonth() === start.getMonth() && end.getDate() < start.getDate()) ? 1 : 0);
  const months = (end.getMonth() - start.getMonth() + 12 * (end.getFullYear() - start.getFullYear()) + (end.getDate() < start.getDate() ? -1 : 0)) % 12;

  const workingPeriod =
    years > 0
      ? months > 0
        ? `${years} ann${years > 1 ? "i" : ""} e ${months} mes${months > 1 ? "i" : ""}`
        : `${years} ann${years > 1 ? "i" : ""}`
      : months > 0
      ? `${months} mes${months > 1 ? "i" : ""}`
      : "0 mesi";

  return (
    <Row>
      <Col md={1}>
        <img className="object-fit-cover" src={experience.image} alt="work logo" width={60} height={60} />
      </Col>
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
    </Row>
  );
};

export default SingleExperience;
