import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);

  useEffect(() => {
    setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  return (
    <Form className="mt-4">
      <h4>Bài 5: Form Email & Password</h4>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={emailValid === false}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword" className="mt-2">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={passwordValid === false}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-3" disabled={!(emailValid && passwordValid)}>
        Gửi
      </Button>
    </Form>
  );
};

export default EmailPasswordForm;
