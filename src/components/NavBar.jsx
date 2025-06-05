import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navbar, Form, Nav, NavDropdown, Button, ListGroup, Container } from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons";

import house from "../assets/house-door-fill.svg";
import people from "../assets/people-fill.svg";
import bag from "../assets/briefcase-fill.svg";
import mess from "../assets/chat-dots-fill.svg";
import bell from "../assets/bell-fill.svg";
import { getProfileByIdAction } from "../redux/actions";

const MyNavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      dispatch(getProfileByIdAction(trimmedQuery));
      navigate(`/profile/${trimmedQuery}`);
    }
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <img width={40} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo LinkedIn" />

          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Cerca per userId"
              className="me-5"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form>
        </div>

        <Nav className="d-flex align-items-center w-50 gap-4">
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={house} alt="home" />
            <h6 className="text-svg">Home</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={people} alt="rete" />
            <h6 className="text-svg">Rete</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={bag} alt="lavoro" />
            <h6 className="text-svg">Lavoro</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={mess} alt="messaggi" />
            <h6 className="text-svg">Messaggi</h6>
          </Nav>
          <Nav href="#" className="d-flex flex-column align-items-center">
            <img className="class-icon" src={bell} alt="notifiche" />
            <h6 className="text-svg">Notifiche</h6>
          </Nav>

          <NavDropdown title="Tu" id="navbarScrollingDropdown">
            <div className="d-flex align-items-center px-2">
              <img
                style={{ maxWidth: "70px", maxHeight: "70px" }}
                className="rounded-circle"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDm0aJovNXb9D5EebdSj3QND1MLcEWCiZA9w&s"
                alt="profilo"
              />
              <div>
                <NavDropdown.Item className="fw-semibold" href="#action3">
                  Nome Cognome
                </NavDropdown.Item>
                <NavDropdown.Item className="text-wrap" href="#action4">
                  Descrizione
                </NavDropdown.Item>
              </div>
            </div>
            <div className="px-2">
              <Button variant="outline-primary" className="rounded-pill w-100 btn-custom">
                Visualizza Profilo
              </Button>
            </div>
            <NavDropdown.Divider />
            <div className="px-3">
              <ListGroup className="fw-semibold">Account</ListGroup>
              <ListGroup className="text-secondary">Impostazioni e privacy</ListGroup>
              <ListGroup className="text-secondary">Guida</ListGroup>
              <ListGroup className="text-secondary">Lingua</ListGroup>
              <NavDropdown.Divider />
              <ListGroup className="fw-semibold">Gestisci</ListGroup>
              <ListGroup className="text-secondary">Post e attività</ListGroup>
              <NavDropdown.Divider />
              <ListGroup className="text-secondary">Esci</ListGroup>
            </div>
          </NavDropdown>

          <NavDropdown title={<Grid3x3GapFill />} className="border-start ps-2" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Altro</NavDropdown.Item>
          </NavDropdown>

          <div>
            <a className="text-custom w-25" href="#">
              Prova Premium per 0 EUR
            </a>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
