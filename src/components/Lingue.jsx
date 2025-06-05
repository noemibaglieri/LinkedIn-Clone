import Card from "react-bootstrap/Card";

function Lingue() {
  return (
    <Card className="p-2 mt-3 border">
      <Card.Body className="d-flex justify-content-between align-items-center">
        <Card.Title>Lingue</Card.Title>
        <div className="d-flex align-items-center">
          <div className="btn-pen-plus me-2">
            <img style={{ width: "20px" }} src="{plus}" alt="più" />
          </div>
          <div className="btn-pen-plus">
            <img style={{ width: "20px" }} src="" alt="penna" />
          </div>
        </div>
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
