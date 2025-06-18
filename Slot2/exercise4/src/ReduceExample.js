
import React from 'react';

const ReduceExample = () => {
  const array = [1, 2, 3, 4];

  // Tổng các phần tử
  const sum = array.reduce((acc, cur) => acc + cur, 0);

  // Tích các phần tử
  const product = array.reduce((acc, cur) => acc * cur, 1);

  return (
    <div className="custom-margin">
      <h2>Reduce Example</h2>
      <p>Array: [1, 2, 3, 4]</p>
      <p>Sum: {sum}</p>
      <p>Product: {product}</p>
    </div>
  );
};

export default ReduceExample;
