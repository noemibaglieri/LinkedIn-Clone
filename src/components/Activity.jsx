// import { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ArrowRepeat, Chat, HandThumbsUp, Pencil, PersonCircle, Share } from "react-bootstrap-icons";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUsers } from "../redux/actions";
import Post from "./Post";

const Activity = () => {
  // const dispatch = useDispatch();
  // const profiles = useSelector((state) => state.allProfilesReducer?.content);
  // console.log(profiles);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);

  return (
    <Container className="my-3 bg-white rounded p-4 border">
      <Row className="justify-content-between">
        <Col md={6}>
          <h5 className="mb-0">Activity</h5>
          <Card.Link className="text-decoration-none fw-semibold">100 followers</Card.Link>
        </Col>
        <Col md={4} className="d-flex align-items-center justify-content-end gap-4">
          <Button variant="outline-primary" className="rounded-5 fw-semibold ps-4 pe-4">
            Create a post
          </Button>
          <Pencil className="fs-5" />
        </Col>
      </Row>

      <Row className="mt-1 mb-4">
        <Col className="d-flex gap-2 mb-2">
          <Button variant="success" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Posts
          </Button>
          <Button variant="outline-secondary" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Comments
          </Button>
          <Button variant="outline-secondary" size="sm" className="rounded-5 ps-4 pe-4 fw-semibold">
            Images
          </Button>
        </Col>
      </Row>
      <Row>
        {/* CARD 1 */}
        <Post />
        <Post />
      </Row>
    </Container>
  );
};

export default Activity;
