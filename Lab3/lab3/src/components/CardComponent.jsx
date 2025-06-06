import { Card, Button } from "react-bootstrap";
import menu1 from "../images/menu1.jpg";
import menu2 from "../images/menu2.jpg";
import menu3 from "../images/menu3.jpg";
import menu4 from "../images/menu4.jpg";
import '../App.css';  // gọi brage new , sales ở App.csscss
function CardComponent() {
  return (
    <div className="container p-5 ">
      <h1 className="text-left p-3 text-white">Our Menu</h1>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="mx-3">
          <span className="badge-new">SALE</span>
          <Card.Img variant="top" src={menu1} />
          <Card.Body>
            <Card.Title>Margenrita Pizza</Card.Title>
            <Card.Text>
            <del className="text-muted me-2">$40.00</del>
              <span style={{ color: "#ffc107", fontWeight: "bold" }}>
                $24.00
              </span>
              </Card.Text>
            <Button variant="dark" className="w-100 text-center">Buy</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
          <Card.Img variant="top" src={menu2} />
          <Card.Body>
            <Card.Title>Mushroom Pizza</Card.Title>
            <Card.Text>
                $25.00
            </Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
           <span className="badge-new">NEW</span>
          <Card.Img variant="top" src={menu3} />
          <Card.Body>
            <Card.Title>Hawaiian Pizza</Card.Title>
           <Card.Text>
                $30.00
            </Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3">
           <span className="badge-new">SALE</span>
          <Card.Img variant="top" src={menu4} />
          <Card.Body>
            <Card.Title>Pesto Pizza</Card.Title>
            <Card.Text>
              <del className="text-muted me-2">$50.00</del>
              <span style={{ color: "#ffc107", fontWeight: "bold" }}>
                $36.00
              </span>
            </Card.Text>
            <Button variant="dark" className="w-100 text-center">
              Buy
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default CardComponent;