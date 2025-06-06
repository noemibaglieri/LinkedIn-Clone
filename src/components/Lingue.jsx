import { Col, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Lingue() {
  const { userId } = useParams();

  const myUserProfile = useSelector((state) => state.myProfileReducer.content);
  const isMyProfile = userId === myUserProfile?._id;

  return (
    <Card className="p-2 mt-3 border">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Col>
          <h5>Lingue</h5>
        </Col>
        {!isMyProfile && (
          <Col className="d-flex align-items-center justify-content-end gap-4">
            <Plus className="fs-1" />
            <Pencil className="fs-5" />
          </Col>
        )}
      </Card.Body>
      <div className="p-3">
        <h4 style={{ fontSize: "18px" }}>Inglese</h4>
        <h6 style={{ fontSize: "12px" }} className="text-secondary">
          Conoscenza avanzata
        </h6>
      </div>
      <div className="p-3">
        <h4 style={{ fontSize: "18px" }}>Spagnolo</h4>
        <h6 style={{ fontSize: "12px" }} className="text-secondary">
          Conoscenza avanzata
        </h6>
      </div>
    </Card>
  );
}

export default Lingue;
