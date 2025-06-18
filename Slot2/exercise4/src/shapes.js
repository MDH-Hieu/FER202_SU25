import React from 'react';

// Define the Shape class
class Shape {
  constructor(color) {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
    this.color = color;
  }

  getArea() {
    throw new Error("Method 'getArea()' must be implemented");
  }

  toString() {
    throw new Error("Method 'toString()' must be implemented");
  }
}

// Define the Rectangle class
class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle[color=${this.color}, length=${this.length}, width=${this.width}]`;
  }
}

// Define the Triangle class
class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return `Triangle[color=${this.color}, base=${this.base}, height=${this.height}]`;
  }
}

// Create a React component to display the shapes in a table
const Shapes = () => {
  const shapes = [
    new Rectangle("red", 5, 3),
    new Triangle("blue", 4, 6)
  ];

  return (
    <div className="custom-margin">
      <h2>Shapes Information</h2>
      <table border="1" style={{ borderCollapse: 'collapse', width: '50%' }}>
        <thead>
          <tr>
            <th>Shape</th>
            <th>Color</th>
            <th>Area</th>
          </tr>
        </thead>
        <tbody>
          {shapes.map((shape, index) => (
            <tr key={index}>
              <td>{shape.toString()}</td>
              <td>{shape.color}</td>
              <td>{shape.getArea()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Shapes;