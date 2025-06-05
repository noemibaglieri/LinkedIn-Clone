import { Card, Col } from "react-bootstrap";
import { ArrowRepeat, Chat, HandThumbsUp, PersonCircle, Share } from "react-bootstrap-icons";

const Post = () => {
  return (
    <>
      {/* CARD 1 */}
      <Col md={6} className="mb-4 d-flex">
        <Card className="shadow-sm w-100 d-flex flex-column h-100">
          <Card.Body>
            <div className="d-flex align-items-start gap-2 mb-2">
              <PersonCircle className="fs-5 mt-1 text-secondary" />
              <div>
                <Card.Title className="fw-bold m-0">Noemi Baglieri</Card.Title>
                <small className="text-secondary">Junior Full Stack Developer</small>
              </div>
            </div>
            <Card.Text>Ho condiviso un articolo interessante sul futuro del lavoro.</Card.Text>
          </Card.Body>
          <Card.Img
            variant="bottom"
            src="https://images.unsplash.com/photo-1505327191481-d31e1fb4ff79?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Attività 1"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="px-3 py-2 bg-white border-top d-flex justify-content-between text-secondary">
            <HandThumbsUp />
            <Chat />
            <ArrowRepeat />
            <Share />
          </div>
        </Card>
      </Col>
    </>
  );
};

export default Post;
