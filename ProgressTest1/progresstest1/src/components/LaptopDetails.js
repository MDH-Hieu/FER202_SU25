import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card, Container, Button } from 'react-bootstrap';

function LaptopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => {
        if (res.data && Object.keys(res.data).length > 0) {
          setLaptop(res.data);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) return <h2 className="text-center mt-5">404 - Laptop Not Found</h2>;

  return laptop ? (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={laptop.image} />
        <Card.Body>
          <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
          <Card.Text>Year: {laptop.year}</Card.Text>
          <Card.Text>Price: {laptop.price}</Card.Text>
          <Card.Text>Description: High-quality laptop</Card.Text>
          <Button variant="secondary" onClick={() => navigate('/laptops')}>
            Back to Product List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  ) : (
    <p className="text-center mt-4">Loading...</p>
  );
}

export default LaptopDetails;
