import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
