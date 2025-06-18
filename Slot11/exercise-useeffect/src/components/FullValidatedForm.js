import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";

const FullValidatedForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setFormValid(name && gender && country && agree);
  }, [name, gender, country, agree]);

  return (
    <Form className="mt-4">
      <h4>Bài 6: Form tổng hợp</h4>

      <Form.Group controlId="formName">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={name === ""}
        />
        <Form.Control.Feedback type="invalid">
          Vui lòng nhập tên
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            label="Nam"
            name="gender"
            type="radio"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Nữ"
            name="gender"
            type="radio"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {!gender && <div className="text-danger">Chọn giới tính</div>}
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Chọn quốc gia</option>
          <option value="vn">Việt Nam</option>
          <option value="us">Mỹ</option>
        </Form.Select>
        {!country && <div className="text-danger">Chọn quốc gia</div>}
      </Form.Group>

      <Form.Group controlId="formAgree" className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        {!agree && <div className="text-danger">Bạn phải đồng ý</div>}
      </Form.Group>

      <Button className="mt-3" disabled={!formValid}>
        Gửi
      </Button>
    </Form>
  );
};

export default FullValidatedForm;
