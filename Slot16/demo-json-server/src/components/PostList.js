import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    setData(data.filter(post => post.id !== id));
  };

  return (
    <Container className="mt-4">
      <h2>Danh sách bài viết</h2>
      <Link to="/create">
        <Button variant="primary" className="mb-3">Tạo bài viết mới</Button>
      </Link>
      <Row>
        {data.map((post) => (
          <Col md={4} key={post.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Link to={`/edit/${post.id}`}>
                  <Button variant="warning" className="me-2">Sửa</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(post.id)}>Xóa</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
