import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LaptopList() {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState('');

  const fetchLaptops = async () => {
    const { data } = await axios.get(`http://localhost:3001/Laptops`);
    setLaptops(data);
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  const filtered = laptops.filter((lap) =>
    lap.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="mb-3 text-center">Product List</h2>
      <Form.Control
        placeholder="Search by brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <Row>
        {filtered.map((laptop) => (
          <Col md={3} key={laptop.id} className="d-flex align-items-stretch">
            <Card className="mb-4 w-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={laptop.image}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body className="d-flex flex-column flex-grow-1">
                <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                <Card.Text>Year: {laptop.year}</Card.Text>
                <Card.Text>Price: {laptop.price}</Card.Text>
                <div className="mt-auto">
                  <Link to={`/laptops/${laptop.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default LaptopList;
