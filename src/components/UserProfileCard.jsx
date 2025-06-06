import { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfileAction } from "../redux/actions";

const UserProfileCard = ({ isCompact = false }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileAction());
  }, [dispatch]);

  const profile = useSelector((state) => state.myProfileReducer.content);
  console.log(profile);

  if (!profile) return <p>Caricamento profilo...</p>;

  return (
    <>
      <Col className="mt-3">
        <Card className="border">
          <div className="position-relative">
            <Card.Img
              className="banner-image"
              variant="top"
              src="https://images.pexels.com/photos/8319808/pexels-photo-8319808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          {profile && (
            <div className={`profile-image-div ${isCompact ? "profile-image-div-small" : ""}`}>
              <img className={`profile-image ${isCompact ? "small-profile-img" : ""}`} src={profile.image} alt="personal image" />
            </div>
          )}

          <Card.Body className={`pt-5 ${isCompact ? "pb-1 ps-4 pe-4" : "p-4"}`}>
            <Row className={`${isCompact ? "flex-column" : ""}`}>
              <Col md={9} className={`d-flex flex-column ${isCompact ? "" : "mb-2"}`}>
                {!isCompact ? (
                  <h3>
                    {profile.name} {profile.surname}
                  </h3>
                ) : (
                  <h6>
                    {profile.name} {profile.surname}
                  </h6>
                )}

                <Card.Text className={`${isCompact ? "font-very-small" : "mb-1"}`}>{profile.title}</Card.Text>
                <div className="d-flex gap-2">
                  <span className="country fw-normal mb-1">{profile.area}</span>
                  {!isCompact && (
                    <>
                      <span>&bull;</span>
                      <Card.Link className="fw-semibold text-decoration-none">Contact info</Card.Link>
                    </>
                  )}
                </div>
                {!isCompact && <Card.Link className="fw-semibold text-decoration-none">100 connections</Card.Link>}
              </Col>
              <Col md={3}>
                <img src="https://www.emagister.it/assets/it/logos/centro/id/106747/size/l.jpg" alt="current company" width={100} />
              </Col>
            </Row>
            {!isCompact && (
              <Col className="d-flex gap-2">
                <Button variant="primary" className="rounded-5">
                  Open to
                </Button>
                <Button variant="outline-primary" className="rounded-5">
                  Add profile section
                </Button>
                <Button variant="outline-primary" className="rounded-5">
                  Enhance profile
                </Button>
                <Button variant="outline-secondary" className="rounded-5">
                  Resources
                </Button>
              </Col>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default UserProfileCard;
