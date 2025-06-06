import { Col, Row } from "react-bootstrap";
import Post from "./Post";
import UserProfileCard from "./UserProfileCard";
import CreatePost from "./CreatePost";

const Home = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <UserProfileCard isCompact="true" />
        </Col>
        <Col md={8}>
          <CreatePost />
          <Post />
        </Col>
      </Row>
    </>
  );
};

export default Home;
