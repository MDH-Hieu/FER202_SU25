import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Form, Button, Alert, Container } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !pass) {
      setError("Vui lòng nhập đầy đủ username và password");
      return;
    }

    if (username === "admin" && pass === "123") {
      alert(`Login successfully with username: ${username}`);
      navigate("/posts");
    } else {
      setError("Sai thông tin đăng nhập");
    }
  };

  return (
    <Container className="mt-4">
      <h2>Đăng nhập</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tên người dùng"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Nhập mật khẩu"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Đăng nhập</Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {

};

export default Login;
