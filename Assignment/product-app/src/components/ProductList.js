import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductList = () => {
  const { items: products, loading, error, addProduct, deleteProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newErrors = {};

    // Validate fields
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';

    if (!form.price.trim()) {
      newErrors.price = 'Original price is required';
    } else if (isNaN(form.price)) {
      newErrors.price = 'Original price must be a number';
    }

    if (!form.currentPrice.trim()) {
      newErrors.currentPrice = 'Current price is required';
    } else if (isNaN(form.currentPrice)) {
      newErrors.currentPrice = 'Current price must be a number';
    }

    if (!form.image.trim()) {
      newErrors.image = 'Image filename is required';
    } else if (!form.image.toLowerCase().endsWith('.png')) {
      newErrors.image = 'Image must be a PNG file (e.g., example.png)';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      ...form,
    };

    addProduct(newProduct);
    setForm({ name: '', description: '', price: '', currentPrice: '', image: '' });
    setErrors({});
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="bg-dark min-vh-100 py-4">
      <div className="container text-white">
        <h1 className="mb-4 text-center">Product List</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
          {products.map(product => (
            <div key={product.id} className="col">
              <div className="card h-100">
                <img
                  src={`/images/${product.image}`}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: 'contain', height: '180px' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-danger text-center">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="text-center">
                      <div style={{ fontSize: '14px' }}>
                        <s>{product.price}đ</s>
                      </div>
                      <div className="text-danger" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {product.currentPrice}đ
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to={`/product/${product.id}`} className="btn btn-sm btn-info me-2">
                      Details
                    </Link>
                    <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-4 bg-dark">
          <h3 className="mb-4 text-center text-white">Add Product</h3>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="name" className="col-form-label">Name:</label>
              </div>
              <div className="col-md-9">
                <input id="name" name="name" value={form.name} onChange={handleChange} className="form-control" />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>
            </div>

            {/* Description */}
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="description" className="col-form-label">Description:</label>
              </div>
              <div className="col-md-9">
                <input id="description" name="description" value={form.description} onChange={handleChange} className="form-control" />
                {errors.description && <small className="text-danger">{errors.description}</small>}
              </div>
            </div>

            {/* Original Price */}
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="price" className="col-form-label">Original Price:</label>
              </div>
              <div className="col-md-9">
                <input id="price" name="price" value={form.price} onChange={handleChange} className="form-control" />
                {errors.price && <small className="text-danger">{errors.price}</small>}
              </div>
            </div>

            {/* Current Price */}
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="currentPrice" className="col-form-label">Current Price:</label>
              </div>
              <div className="col-md-9">
                <input id="currentPrice" name="currentPrice" value={form.currentPrice} onChange={handleChange} className="form-control" />
                {errors.currentPrice && <small className="text-danger">{errors.currentPrice}</small>}
              </div>
            </div>

            {/* Image */}
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="image" className="col-form-label">Image PNG filename:</label>
              </div>
              <div className="col-md-9">
                <input id="image" name="image" value={form.image} onChange={handleChange} placeholder="example.png" className="form-control" />
                {errors.image && <small className="text-danger">{errors.image}</small>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
