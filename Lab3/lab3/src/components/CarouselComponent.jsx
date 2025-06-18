import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/pizza1.jpg";
import image2 from "../images/pizza2.jpg";
import image3 from "../images/pizza3.jpg";
import image4 from "../images/pizza4.jpg";
import image5 from "../images/pizza5.jpg";

const carouselItems = [
  {
    image: image1,
    title: "Neapolitan Pizza",
    desc: "If you are looking for a traditional Italian pizza, the Neapolitan is the best option",
  },
  {
    image: image2,
    title: "Chicago Pizza",
    desc: "Deep-dish, cheesy, and loaded with toppings!",
  },
  {
    image: image3,
    title: "New York-Style Pizza",
    desc: "Thin, crispy crust that’s perfect for folding!",
  },
  {
    image: image4,
    title: "Sicilian Pizza",
    desc: "Thick crust with a soft center and crispy bottom.",
  },
  {
    image: image5,
    title: "Greek Pizza",
    desc: "Oven-baked and rich in olive oil and flavor.",
  },
];

const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.title} />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
