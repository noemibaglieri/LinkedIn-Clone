import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Form, Nav, NavDropdown, Button, ListGroup, Container } from "react-bootstrap";
import { Grid3x3GapFill } from "react-bootstrap-icons";

import house from "../assets/house-door-fill.svg";
import people from "../assets/people-fill.svg";
import bag from "../assets/briefcase-fill.svg";
import mess from "../assets/chat-dots-fill.svg";
import bell from "../assets/bell-fill.svg";
import { getAllUsers } from "../redux/actions";

const MyNavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.allProfilesReducer.content);
  const myprofile = useSelector((state) => state.myProfileReducer.content);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim().toLowerCase();

    if (trimmedQuery && users && users.length > 0) {
      const foundUser = users.find((user) => `${user.name} ${user.surname}`.toLowerCase().includes(trimmedQuery));

      if (foundUser) {
        navigate(`/profile/${foundUser._id}`);
      } else {
        alert("Utente non trovato");
      }
    }
  };

  return (
    <Navbar className="bg-body-tertiary">
      <Container className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex gap-3">
          <Link to="/">
            <img width={40} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo LinkedIn" />
          </Link>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Cerca per nome o cognome"
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
            <Link to="/" className="text-decoration-none ">
              <h6 className="text-svg text-black">Home</h6>
            </Link>
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
              <img style={{ maxWidth: "50px", maxHeight: "50px" }} className="rounded-circle" src={myprofile?.image} alt="profilo" />
              <div>
                <NavDropdown.Item className="fw-semibold" href="#action3">
                  {myprofile?.name} {myprofile?.surname}
                </NavDropdown.Item>
              </div>
            </div>
            <div className="px-2 mt-2 d-flex justify-content-center">
              <Link to="/profile/me">
                <Button size="sm" variant="outline-primary" className="rounded-5">
                  Visualizza Profilo
                </Button>
              </Link>
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
