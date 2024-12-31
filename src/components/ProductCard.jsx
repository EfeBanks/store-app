import React from 'react';

const ProductCard = ({ product, onViewDetails, onEditProduct, onDeleteProduct  }) => {
  return (
    <div className="border rounded-md shadow-md p-4">
      <img
        src={`images/${product.image}`}
        alt={product.name}
        className="h-80 w-full object-contain mb-2 "
      />
      <div className='text-center'>
        <h3 className="text-lg font-bold text-teal-600">{product.name}</h3>
        <p className="text-gray-700 my-2">Price: ${product.price}</p>
        <p
          className={`text-sm ${
            product.status === 'In stock' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {product.status}
        </p>

        
        <button
          className="m-2 px-4 py-2 border border-teal-500 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          onClick={() => onViewDetails(product)}
        >
          View Details
        </button>

        <button
            onClick={() => onEditProduct(product)} // Ensure this is correctly calling the handler
            className="px-4 py-2 border border-teal-500 bg-white text-teal-500 rounded-lg hover:border-teal-600 hover:text-teal-600"
          >
            Edit
          </button>

          <button
            onClick={() => onDeleteProduct(product.id)} // Calling delete function
            className="m-2 px-4 py-2 border border-red-500 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Delete
          </button>

          
        </div>

    </div>
  );
};

export default ProductCard;
