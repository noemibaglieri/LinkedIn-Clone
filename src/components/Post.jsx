import { useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import { ArrowRepeat, Chat, HandThumbsUp, PersonCircle, Share } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer?.content);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts) return <p>Sto caricando</p>;

  return (
    <>
      {posts.slice(50, 70).map((post) => {
        return (
          <>
            <Col className="mb-4 d-flex mt-3" key={post._id}>
              <Card className="shadow-sm w-100 d-flex flex-column h-100">
                <Card.Body>
                  <div className="d-flex align-items-start gap-2 mb-2">
                    <img className="post-image" src={post.user.image} />
                    <div>
                      <Card.Title className="fw-bold m-0">
                        {post.user.name} {post.user.surname}
                      </Card.Title>
                      <small className="text-secondary">{post.user.title}</small>
                    </div>
                  </div>
                  <Card.Text> {post.text}</Card.Text>
                </Card.Body>
                {post.user.image && (
                  <Card.Img
                    variant="bottom"
                    src="https://images.pexels.com/photos/26741436/pexels-photo-26741436/free-photo-of-mare-spiaggia-sabbia-donna.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Attività 1"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
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
      })}
    </>
  );
};

export default Post;
