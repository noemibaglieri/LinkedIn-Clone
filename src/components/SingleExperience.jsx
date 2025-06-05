import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions";

const SingleExperience = () => {
  const dispatch = useDispatch();
  // const profiles = useSelector((state) => state.allProfilesReducer?.content);
  // const param = useParams();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Row>
        {/* {profiles.filter((user) => {
          return user._id === param;
        })} */}
        <>
          <Col md={1}>
            <img
              className="object-fit-cover"
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              alt="work logo"
              width={60}
              height={60}
            />
          </Col>
          <Col>
            <h6 className="mb-0">Miao</h6>
            <div className="d-flex gap-1 font-very-small">
              <span>Sicamb</span>
              <span style={{ "user-select": "none" }}>&bull;</span>
              <span>Full Time</span>
            </div>
            <div className="d-flex gap-1 font-very-small">
              <span>Oct 2024</span>
              <span style={{ "user-select": "none" }}>-</span>
              <span>Oct 2024</span>
              <span style={{ "user-select": "none" }}>&bull;</span>
              <span>5 mos</span>
            </div>
            <div className="d-flex gap-1 font-very-small">
              <span>Latina,</span>
              <span>Italy</span>
              <span style={{ "user-select": "none" }}>&bull;</span>
              <span>On-site</span>
            </div>
            <div className="mt-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde, doloremque odio ad pariatur, laboriosam culpa voluptate, quos nam atque
                optio impedit esse facilis suscipit consequuntur quo perspiciatis veritatis animi.
              </p>
            </div>
          </Col>
        </>
      </Row>
    </>
  );
};

export default SingleExperience;
