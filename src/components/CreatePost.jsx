import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const token = import.meta.env.VITE_API_TOKEN;

const CreatePost = () => {
  const [postContent, setPostContent] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      text: postContent,
    };
    try {
      const res = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) {
        throw new Error("Errore nella creazione del post");
      }
      const createdPost = await res.json();
      console.log("Post creato:", createdPost);
      setPostContent("");
    } catch (error) {
      console.error("Errore:", error);
    }
  };
  return (
    <Col className="bg-white mt-3 p-3 rounded-2 border">
      <Form className="d-flex justify-content-between gap-2" onSubmit={handleSubmit}>
        <Form.Group controlId="createPost" className="flex-grow-1">
          <Form.Control
            className="form-input rounded-5"
            type="text"
            placeholder="Start a post"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Form.Group>
        <Button className="rounded-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default CreatePost;
