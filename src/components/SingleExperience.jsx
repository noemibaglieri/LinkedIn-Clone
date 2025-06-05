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
  {
    console.log("UserId", param.userId);
    console.log(experiences);
  }

  useEffect(() => {
    console.log("param:", param);
    console.log("userId:", param.userId);
    console.log("experiences:", experiences);
  }, [param, experiences]);

  // const oneProfile = profiles.find((user) => {
  //   return user._id === param.userId;
  // });
  // {
  //   console.log(oneProfile);
  // }

  return (
    <>
      <Row>
        {experiences?.length === 0 ? (
          <p>Nessuna esperienza trovata.</p>
        ) : (
          experiences?.map((experience, index) => {
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
                    <span>Oct 2024</span>
                    <span style={{ "user-select": "none" }}>-</span>
                    <span>Oct 2024</span>
                    <span style={{ "user-select": "none" }}>&bull;</span>
                    <span>5 mos</span>
                  </div>
                  <div className="d-flex gap-1 font-very-small">
                    <span>{experience.area}</span>
                    <span style={{ "user-select": "none" }}>&bull;</span>
                    <span>On-site</span>
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
