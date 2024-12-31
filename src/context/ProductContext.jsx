import React, { createContext, useContext, useState } from 'react';
import { addProduct as addProductAPI, updateProduct as updateProductAPI,  getProducts } from '../api/productAPI'; // import your API methods
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    try {
      const productsFromAPI = await getProducts();
      setProducts(productsFromAPI);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Add a new product via API and update state
  const addProduct = async (newProduct) => {
    try {
      const addedProduct = await addProductAPI(newProduct); // Call API to add product
      console.log('Product added:', addedProduct);
      
      // After successfully adding the product, update the state
      setProducts((prevProducts) => [...prevProducts, addedProduct]);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  // Update a product via API and update state
  const updateProduct = async (id, updatedProduct) => {
    try {
      const updatedProductFromAPI = await updateProductAPI(id, updatedProduct);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, ...updatedProductFromAPI } : product
        )
      );
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };



  React.useEffect(() => {
    fetchProducts();
  }, []);

  const updateProducts = (newProducts) => setProducts(newProducts);



  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, updateProducts }}>

      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
