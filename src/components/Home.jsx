import { Col, Row } from "react-bootstrap";
import Post from "./Post";
import UserProfileCard from "./UserProfileCard";

const Home = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <UserProfileCard isCompact="true" />
        </Col>
        <Col md={8}>
          <Post />
        </Col>
      </Row>
    </>
  );
};

export default Home;
