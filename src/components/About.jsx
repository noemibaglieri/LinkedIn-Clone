import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { EyeFill, PersonFill, BarChartLineFill, Search, ArrowRight, Plus, Pencil } from "react-bootstrap-icons";

const About = () => {
  return (
    <Container className="p-0">
      {/*Analisi*/}
      <div className=" p-4 border border-bottom bg-white rounded-2 mt-3">
        <Row className="justify-content-between">
          <Col md={8}>
            <h5 className="m">About</h5>
          </Col>
          <Col md={2} className="d-flex align-items-center justify-content-end gap-4">
            <Pencil className="fs-5" />
          </Col>
        </Row>
        <p className="mb-0 mt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ducimus pariatur iure obcaecati quam dignissimos tenetur natus eum voluptatum
          delectus, facilis necessitatibus nesciunt veritatis. Molestiae in vero vel ipsam quibusdam. Dolore necessitatibus debitis aliquam dignissimos corporis
          doloribus quidem est eligendi vel, reiciendis et facilis illo illum excepturi veritatis quis ducimus quod? In facilis eaque quaerat iusto deserunt?
          Placeat, debitis natus.
        </p>
      </div>
    </Container>
  );
};
export default About;
