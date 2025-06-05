import { Col, Row } from "react-bootstrap";
import ColumnProfileRight from "./ColumnProfileRight";
import UserProfileCard from "./UserProfileCard";
import Experiences from "./Experiences";
import Activity from "./Activity";
import MyAnalytics from "./MyAnalytics";
import Interests from "./Interests";
import Lingue from "./Lingue";
import About from "./About";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfileAction } from "../redux/actions";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfileAction());
  }, [dispatch]);

  return (
    <Row>
      <Col md={8}>
        <UserProfileCard />
        <MyAnalytics />
        <About />
        <Activity />
        <Experiences title="Experience" />
        <Experiences title="Education" />
        <Experiences title="Licenses & certifications" />
        <Lingue />
        <Interests />
      </Col>
      <Col md={4}>
        <ColumnProfileRight />
      </Col>
    </Row>
  );
};

export default UserProfile;
