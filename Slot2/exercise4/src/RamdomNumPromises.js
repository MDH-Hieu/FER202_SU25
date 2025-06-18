// Shapes.js
import React, { useEffect, useState } from 'react';

function getRandomNumberPromise() {
  return new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => {
      if (randomNum > 5) {
        resolve(`✅ Success! Number is ${randomNum}`);
      } else {
        reject("❌ Error: Number is 5 or less");
      }
    }, 1000); // mô phỏng delay
  });
}

function RamdomNumPromises() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getRandomNumberPromise()
      .then(res => setMessage(res))
      .catch(err => setMessage(err));
  }, []);

  return (
    <div className="custom-margin">
      <h2>Promise Result</h2>
      <p>{message}</p>
    </div>
  );
}

export default RamdomNumPromises;
