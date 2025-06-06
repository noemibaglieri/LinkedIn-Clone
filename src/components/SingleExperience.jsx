import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../redux/actions";
import { useParams } from "react-router-dom";
const token = import.meta.env.VITE_API_TOKEN;

const SingleExperience = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiencesReducer.content);
  const profile = useSelector((state) => state.myProfileReducer.content);
  const param = useParams();

  const myProfile = useSelector((state) => state.myProfileReducer.content);

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
                  <Button
                    className="bg-danger border-0 rounded-pill"
                    onClick={() => {
                      deleteExperience(experience._id);
                    }}
                  >
                    🗑️
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </Row>
    </>
  );
};

export default SingleExperience;
