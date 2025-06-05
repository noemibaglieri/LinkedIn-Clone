import { Col, Row } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

function Lingue() {
  return (
    <Card className="p-2 mt-3 border">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Row className="justify-content-between mb-3">
          <Col md={8}>
            <h5>Lingue</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <Plus className="fs-1" />
            <Pencil className="fs-5" />
          </Col>
        </Row>
      </Card.Body>
      <div className="p-3">
        <h4 style={{ fontSize: "18px" }}>Inglese</h4>
        <h6 style={{ fontSize: "12px" }} className="text-secondary">
          Conoscenza avanzata
        </h6>
      </div>
    </Card>
  );
}

export default Lingue;
