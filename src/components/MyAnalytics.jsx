import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { EyeFill, PersonFill, BarChartLineFill, Search, ArrowRight } from "react-bootstrap-icons";

const MyAnalytics = () => {
  return (
    <Container className="p-0">
      {/*Analisi*/}
      <div className="analytics-card p-4 pb-3 border border-bottom bg-white rounded-2 mt-3">
        <Row>
          <h6 className="m-0">Analytics</h6>
          <Col className="d-flex align-items-center">
            <EyeFill size={15} />
            <p className="m-0 ms-1 font-very-small">Private to you</p>
          </Col>
        </Row>

        <div className="d-flex mt-3 justify-content-between">
          <Row>
            <Col xs={1}>
              <PersonFill size={20} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1 ">4 profile views</h6>
              <p className="font-very-small">Discover who's viewed your profile.</p>
            </Col>
          </Row>

          <Row>
            <Col xs={1}>
              <BarChartLineFill size={20} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1">327 post impressions</h6>
              <p className="font-very-small">Check who's engaging with your posts.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={1}>
              <Search size={17} />
            </Col>
            <Col>
              <h6 className="m-0 ms-1">2 search appearances</h6>
              <p className="font-very-small">See how often you appear in search results.</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-white long-button">
        <div className=" text-center bg-transparent border border-top-0 text-secondary p-2">
          <strong>
            Show all analytics
            <ArrowRight className="ms-2" />
          </strong>
        </div>
      </div>
    </Container>
  );
};
export default MyAnalytics;
