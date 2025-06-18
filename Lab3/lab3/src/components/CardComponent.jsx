import { Card, Button, Row, Col } from "react-bootstrap";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";
import "../App.css";

const menuItems = [
  {
    title: "Margenrita Pizza",
    image: menu1,
    price: 24.0,
    original: 40.0,
    badge: "SALE",
  },
  {
    title: "Mushroom Pizza",
    image: menu2,
    price: 25.0,
  },
  {
    title: "Hawaiian Pizza",
    image: menu3,
    price: 30.0,
    badge: "NEW",
  },
  {
    title: "Pesto Pizza",
    image: menu4,
    price: 36.0,
    original: 50.0,
    badge: "SALE",
  },
];

function CardComponent() {
  return (
    <div className="container p-5">
      <h1 className="text-left p-3 text-white">Our Menu</h1>
      <Row>
        {menuItems.map((item, index) => (

          <Col md={3} key={index} className="mb-4">
            <Card className="position-relative">
              {item.badge && (
                <span className="badge-new">{item.badge}</span>
              )}
              
              <Card.Img variant="top" src={item.image} />

              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  {item.original && (
                    <del className="text-muted me-2">
                      ${item.original.toFixed(2)}
                    </del>
                  )}
                  
                  <span style={{ color: "#ffc107", fontWeight: "bold" }}>
                    ${item.price.toFixed(2)}
                  </span>
                </Card.Text>
                <Button variant="dark" className="w-100">
                  Buy
                </Button>
              </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardComponent;
