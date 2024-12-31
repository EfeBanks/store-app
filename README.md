# Techstack

This project was built with ReactJS and TailwindCSS for styling.

# Instructions to run the project locally

Run 'npm install' on your terminal to install all the dependencies and resources.

To start the backend server, run:
npx json-server --watch db.json --port 5000

Copy http://localhost:5000/products on a browser to view the product data

To start the frontend (react app), run:
npm start

This runs on your browser on port 3000 
Or type: http://localhost:3000 to view it on your browser.


# To build
Run: npm run build

To build the app for production to the 'build' folder.
It correctly bundles React in production mode and optimizes the build for the best performance ready to be deployed.


## My Thought Process
Firstly, I carefully read and studied the task given to understand the project requirement.

I decided to build a product catalog management interface for a
fictitious furniture store called M&M Furniture.

I created a Product Listing page to display all products and several components to handle the Product Card, Add Product, View Details and Edit product functionalities.

I used context api, react hooks for state management.

I used a mock JSON object for product data.

I made use of comment to explain important and major parts of my code.

### Limitations in the current implementation
I couldn't figure out a way to filter product by name search and stock status together. It could only be either one of these to filter and display the products.

This was a challenging but interesting task. Thank you.


