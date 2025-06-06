import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Pencil, PersonPlusFill } from "react-bootstrap-icons";
import { useEffect } from "react";
import { getAllUsers } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ColumnProfileRight = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.allProfilesReducer?.content);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (!profiles) return <p>Sto caricando</p>;
  return (
    <Container>
      {/* Persone che potresti conoscere */}
      <div className="bg-white rounded-3 p-4 border mt-3">
        <h5 className="m-0">Persone che potresti conoscere</h5>

        <Row>
          {profiles.slice(3, 14).map((profile) => {
            return (
              <div className="d-flex gap-3 gy-4 border-bottom pb-4" key={profile._id}>
                <Col xs={2}>
                  <img className="rounded-circle object-fit-cover" src={profile.image} height={60} width={60} alt="" />
                </Col>
                <Col>
                  <Link to={`/profile/${profile._id}`} className="text-decoration-none text-dark">
                    <h6 className="m-0">
                      {profile.name} {profile.surname}
                    </h6>
                  </Link>
                  <p className="m-0">{profile.bio}</p>
                  <Button size="sm" className="rounded-5 mt-1 px-2" variant="outline-dark">
                    <strong>
                      <PersonPlusFill className="me-2" />
                      Collegati
                    </strong>
                  </Button>
                </Col>
              </div>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
export default ColumnProfileRight;
