import { Button, Col, Form } from "react-bootstrap";

const CreatePost = () => {
  // const sendPost = async (postId, postContent) => {
  //       try {
  //         const res = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //           body: JSON.stringify(postContent),
  //         });

  //         if (!res.ok) {
  //           throw new Error("Errore nella creazione del post");
  //         }
  //         const createdPost = await res.json();
  // console.log(createdPost)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     };
  //   };

  return (
    <Col className="bg-white mt-3 p-3 rounded-2 border">
      <Form className="d-flex justify-content-between">
        <Form.Group controlId="createPost">
          <Form.Control className="form-input rounded-5 " type="text" placeholder="Start a post" />
        </Form.Group>
        <Button className="rounded-5" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default CreatePost;
