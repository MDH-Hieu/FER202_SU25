import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setStatus("Vui lòng điền đầy đủ tiêu đề và nội dung.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/posts", { title, content });
      navigate("/");
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus("Lỗi khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Tạo bài viết mới</h2>
      {status && <Alert variant="warning">{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Nhập nội dung"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Tạo</Button>
      </Form>
    </Container>
  );
};

// Bạn có thể định nghĩa prop types nếu truyền dữ liệu từ parent
CreatePost.propTypes = {
  // Ví dụ: title: PropTypes.string,
};

export default CreatePost;
