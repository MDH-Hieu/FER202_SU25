import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetails from './components/LaptopDetails';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm setUser={setUser} />} />
        <Route
          path="/laptops"
          element={user ? <LaptopList /> : <Navigate to="/" />}
        />
        <Route
          path="/laptops/:id"
          element={user ? <LaptopDetails /> : <Navigate to="/" />}
        />
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
