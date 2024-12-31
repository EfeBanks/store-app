import React, { useState } from 'react';

const ProductForm = ({ onSubmit, initialValues }) => {
  const [form, setForm] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={form.name || ''}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={form.description || ''}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={form.price || ''}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <select
        name="status"
        value={form.status || ''}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="In stock">In stock</option>
        <option value="Out of stock">Out of stock</option>
      </select>
      <input
        type="file"
        name="image"
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
