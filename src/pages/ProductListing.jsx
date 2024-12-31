import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';
import { deleteProduct as deleteProductAPI, } from '../api/productAPI';
import ProductCard from '../components/ProductCard';
import AddEditProductForm from '../components/AddEditProductForm';
import ProductDetailsModal from '../components/ProductDetailsModal';

const ProductListing = () => {
  const { products, addProduct, updateProduct, updateProducts} = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("") //state variable to handle search filter by name


// Add, Edit, Save and Cancel functions
const handleAddProduct = () => {
    setSelectedProduct(null); // Clear selection
    setIsFormOpen(true); // Open form for adding
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product); // Set selected product
    setIsFormOpen(true); // Open form for editing
  };

  const handleFormSave = (data) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, data); // Update product
    } else {
      addProduct(data); // Add new product
    }
    setIsFormOpen(false); // Close form
  };

  const handleFormCancel = () => {
    setIsFormOpen(false); // Close form
  };

  // Handle product deletion
const handleDeleteProduct = async (productId) => {
  try {
    await deleteProductAPI(productId); // Call API to delete the product
    updateProducts(products.filter((product) => product.id !== productId)); // Remove from state
  } catch (error) {
    console.error('Error deleting product:', error);
  }
};




  return (
    <div className="p-4">
         <button
        onClick={handleAddProduct}
        className="bg-teal-500 text-white px-4 py-2 mb-4 rounded-lg"
      >
        Add Product
      </button>

       {/* Search box */}
       <div className="text-center mb-8">
                <input 
                type="text" 
                placeholder='Search by product name...'
                className='border p-2 rounded w-full sm:w-1/3'
                onChange={(e) => {setSearchTerm(e.target.value)}}/>
            </div>

         {/* Card wrapper    */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

         {/* To display all product items using Card and filter base on product name */}
        {products
        // eslint-disable-next-line
        .filter((productItem) => {
          if(searchTerm === ""){
              return productItem;
          }
          else if(productItem.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return productItem
          }

      })
      .map((product) => (
          <ProductCard key={product.id} product={product} 
          onViewDetails={() => {
            setSelectedProduct(product); // Set the selected product
            setIsModalOpen(true); // Open the modal
          }}
          onEditProduct={handleEditProduct}
          onDeleteProduct={handleDeleteProduct}
          
          />
        ))}
      </div>

      
      {isModalOpen && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {isFormOpen && (
        <AddEditProductForm
          initialProduct={selectedProduct}
          onSave={handleFormSave}
          onCancel={handleFormCancel}
        />
      )}
    
    </div>
  );
};

export default ProductListing;
