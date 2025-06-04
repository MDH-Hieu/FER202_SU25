import React, { useState } from 'react';
import PizzaImage from './pizza.png';
import Pizza1 from './pizza1.png';
import Pizza2 from './pizza2.png';
import Pizza3 from './pizza3.png';
import Pizza4 from './pizza4.png';

export default function PizzaMenu() {
  const images = [PizzaImage, Pizza1, Pizza2, Pizza3, Pizza4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">Pizza House</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" />
            <button className="btn btn-danger" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {/* Hero Section (slideshow) */}
      <div
        className="hero text-center text-white py-5 position-relative"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '400px',
        }}
      >
        <h2 className="fw-bold pt-5">Neapolitan Pizza</h2>
        <p className="lead">
          If you are looking for traditional Italian pizza, the Neapolitan is the best option!
        </p>

        {/* Nút điều hướng trái */}
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: 'white',
            fontSize: '2rem',
            padding: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          aria-label="Previous Image"
        >
          &lt;
        </button>

        {/* Nút điều hướng phải */}
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            color: 'white',
            fontSize: '2rem',
            padding: '0 10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
          aria-label="Next Image"
        >
          &gt;
        </button>
      </div>

      {/* Menu Section */}
      <div className="container py-5">
        <h3 className="mb-4 ps-3">Our Menu</h3>
        <div className="row g-4">
          {[
            {
              title: 'Margherita Pizza',
              oldPrice: '$40.00',
              price: '$24.00',
              image: Pizza1,
              badge: 'SALE',
            },
            { title: 'Mushroom Pizza', price: '$25.00', image: Pizza2 },
            {
              title: 'Hawaiian Pizza',
              price: '$30.00',
              image: Pizza3,
              badge: 'NEW',
            },
            {
              title: 'Pesto Pizza',
              oldPrice: '$50.00',
              price: '$36.00',
              image: Pizza4,
              badge: 'SALE',
            },
          ].map((pizza, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="card position-relative overflow-hidden">
                {pizza.badge && (
                  <span
                    className="badge position-absolute"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '33.33%',
                      backgroundColor: 'yellow',
                      color: 'black',
                      padding: '5px 0',
                      textAlign: 'center',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      borderRadius: '0',
                      zIndex: 2,
                    }}
                  >
                    {pizza.badge}
                  </span>
                )}
                <img
                  src={pizza.image}
                  className="card-img-top"
                  alt={pizza.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-start">
                  <h5 className="card-title">{pizza.title}</h5>
                  <p className="card-text">
                    {pizza.oldPrice && (
                      <del className="text-black me-2">{pizza.oldPrice}</del>
                    )}
                    <span className="text-warning fw-bold">{pizza.price}</span>
                  </p>
                  <button className="btn btn-dark w-100">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <div className="container pb-4">
        <h3 className="text-center mb-3">Book Your Table</h3>
        <form className="bg-dark p-4 rounded">
          <div className="row mb-3">
            <div className="col-md-4 mb-2 mb-md-0">
              <input type="text" className="form-control" placeholder="Your Name *" required />
            </div>
            <div className="col-md-4 mb-2 mb-md-0">
              <input type="email" className="form-control" placeholder="Your Email *" required />
            </div>
            <div className="col-md-4">
              <select className="form-select" required>
                <option disabled selected>Select a Service</option>
                <option>Dine-in</option>
                <option>Takeaway</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
          </div>
          <button type="submit" className="btn btn-warning text-white fw-bold border-0">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
