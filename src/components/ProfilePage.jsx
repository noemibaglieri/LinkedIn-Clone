import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserProfileCard from "./UserProfileCard";
import { getProfileByIdAction } from "../redux/actions";
import { Col, Row } from "react-bootstrap";
import MyAnalytics from "./MyAnalytics";
import About from "./About";
import Experiences from "./Experiences";
import Lingue from "./Lingue";
import Interests from "./Interests";
import ColumnProfileRight from "./ColumnProfileRight";
import Activity from "./Activity";

const ProfilePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.myProfileReducer.content);
  const error = useSelector((state) => state.myProfileReducer.error);

  useEffect(() => {
    dispatch(getProfileByIdAction(userId));
  }, [dispatch, userId]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!profile) return <p>Caricamento...</p>;

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

export default ProfilePage;
