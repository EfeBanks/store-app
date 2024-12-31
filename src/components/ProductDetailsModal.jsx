import React from 'react';
const ProductDetailsModal = ({ product, onClose }) => {
    if (!product) return null; // Return nothing if no product is selected
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-2/3 lg:w-1/2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Product Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              x
            </button>
          </div>
          {product.image && (
            <img
              src={`images/${product.image}`}
              alt={product.name}
              className="h-80 w-full object-contain mb-2"
            />
          )}
          <p>
            <strong>Name:</strong> {product.name}
          </p>
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Status:</strong> {product.status}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>

          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-1 px-4 mt-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
export default ProductDetailsModal;
