import React, { useState, useEffect } from 'react';

const AddEditProductForm = ({ initialProduct, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    status: 'In Stock',
    image: null,
  });

  // Pre-fill form data for editing
  useEffect(() => {
    if (initialProduct) {
      setFormData({
        name: initialProduct.name,
        description: initialProduct.description,
        price: initialProduct.price,
        status: initialProduct.status,
        image: initialProduct.image,
      });
    }
  }, [initialProduct]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      const fileNameWithExtension = file.name; // Extract name and extension
      setFormData({ ...formData, image: fileNameWithExtension });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.price) {
      alert('All fields are required!');
      return;
    }

    // Pass data to the parent component
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{initialProduct ? 'Edit Product' : 'Add Product'}</h2>
          <button
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 text-lg font-bold"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Stock Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="In Stock">In Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Upload Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditProductForm;
