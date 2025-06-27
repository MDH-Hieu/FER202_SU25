import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

const FormValidation = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameRegex = /^.{3,50}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Tên là bắt buộc.";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Tên phải có từ 3 đến 50 ký tự.";
    }

    const age = parseInt(formData.age, 10);
    if (!formData.age) {
      newErrors.age = "Tuổi là bắt buộc.";
    } else if (isNaN(age) || age < 18 || age > 100) {
      newErrors.age = "Tuổi phải từ 18 đến 100.";
    }

    if (!formData.email) {
      newErrors.email = "Email là bắt buộc.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    if (!formData.phone) {
      newErrors.phone = "Số điện thoại là bắt buộc.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Số điện thoại phải có từ 10 đến 15 chữ số.";
    }

    if (!formData.agree) {
      newErrors.agree = "Bạn phải đồng ý với điều khoản.";
    }

    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container className="mt-4">
      <h3>Form Đăng Ký</h3>

      {showAlert && (
        <Alert variant="danger">Vui lòng kiểm tra lại các trường nhập!</Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAge" className="mb-3">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {errors.age}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formAgree" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Tôi đồng ý với điều khoản"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            isInvalid={!!errors.agree}
            feedback={errors.agree}
            feedbackType="invalid"
          />
        </Form.Group>

        <Button type="submit" variant="primary">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

FormValidation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormValidation;
