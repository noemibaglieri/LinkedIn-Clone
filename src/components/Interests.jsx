import { Button, NavDropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Interests() {
  return (
    <Card className="mt-3 border">
      <Card.Body>
        <Card.Title>Interessi</Card.Title>
        <div className="d-flex gap-3">
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Top Voices
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Aziennde
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Gruppi
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Newsletter
          </div>
          <div style={{ fontSize: "14px" }} className="fw-semibold btn-interessi p-2">
            Scuole o università
          </div>
        </div>
        <div className="d-flex px-2">
          <img
            style={{ maxWidth: "50px", maxHeight: "50px" }}
            className="rounded-circle me-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm0aJovNXb9D5EebdSj3QND1MLcEWCiZA9w&s"
            alt="imagine di profilo"
          />
          <div>
            <NavDropdown.Item className="fw-semibold" href="#action3">
              Nome Cognome
            </NavDropdown.Item>
            <NavDropdown.Item className="text-wrap" href="#action4">
              Lorem ipsum dolor sit.
            </NavDropdown.Item>
            <Button variant="outline-dark" className="rounded-pill w-100 btn-interessi-profilo">
              Visualizza Profilo
            </Button>
          </div>
        </div>
        <div className="px-2"></div>
      </Card.Body>
    </Card>
  );
}

export default Interests;
