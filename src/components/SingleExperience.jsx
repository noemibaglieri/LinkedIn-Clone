import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../redux/actions";
import { useParams } from "react-router-dom";

const SingleExperience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiencesReducer?.content);
  const param = useParams();

  useEffect(() => {
    if (param.userId) {
      dispatch(getExperiences(param.userId));
    }
  }, [dispatch, param.userId]);

  useEffect(() => {
    console.log("param:", param);
    console.log("userId:", param.userId);
    console.log("experiences:", experiences);
  }, [param, experiences]);

  return (
    <>
      <Row>
        {experiences?.length === 0 ? (
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
                    <span style={{ "user-select": "none" }}>-</span>
                    <span>
                      {end.toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span style={{ "user-select": "none" }}>&bull;</span>
                    <span>{workingPeriod}</span>
                  </div>
                  <div className="d-flex gap-1 font-very-small">
                    <span>{experience.area}</span>
                  </div>
                  <div className="mt-2">
                    <p>{experience.description}</p>
                  </div>
                </Col>
              </div>
            );
          })
        )}
      </Row>
    </>
  );
};

export default SingleExperience;
