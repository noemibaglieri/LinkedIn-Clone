import { Col, Row } from "react-bootstrap";
import Post from "./Post";
import UserProfileCard from "./UserProfileCard";
import CreatePost from "./CreatePost";
import ColumnProfileRight from "./ColumnProfileRight";

const Home = () => {
  return (
    <>
      <Row>
        <Col md={2}>
          <UserProfileCard isCompact="true" />
        </Col>
        <Col md={6}>
          <CreatePost />
          <Post />
        </Col>
        <Col md={4}>
          <ColumnProfileRight />
        </Col>
      </Row>
    </>
  );
};

export default Home;
