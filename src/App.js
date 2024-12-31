import React from 'react';
import { ProductProvider } from './context/ProductContext';
import ProductListing from './pages/ProductListing';

const App = () => {
  return (
    <ProductProvider>
      <div className="container mx-auto">
        <div className='font-bold text-4xl text-center my-4 text-teal-500 '> M&M Furniture </div>
        <h1 className="text-xl font-bold text-center my-2">Product Management</h1>
        <ProductListing  />
      </div>
    </ProductProvider>
  );
};

export default App;
