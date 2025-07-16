import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Kiểm tra bắt buộc nhập
    if (!username.trim() || !password.trim()) {
      alert('Username and Password are required!');
      return;
    }

    try {
      const { data } = await axios.get(
        `http://localhost:3001/UserAccounts?username=${username}&password=${password}`
      );
      if (data.length > 0) {
        setUser(data[0]);
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/laptops');
        }, 1500);
      } else {
        alert('Invalid username or password!');
      }
    } catch {
      alert('Login error!');
    }
  };

  return (
    <>
      <Form onSubmit={handleLogin} className="p-4 w-50 mx-auto mt-5 border rounded">
        <h3 className="mb-4">Login</h3>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-3 w-100">
          Login
        </Button>
      </Form>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Body>
          Welcome, <strong>{username}</strong> login Successful!
        </Modal.Body>
      </Modal>
    </>
  );
}

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
