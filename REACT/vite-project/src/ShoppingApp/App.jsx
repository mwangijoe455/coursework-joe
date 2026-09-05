import { useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [cart, setCart] = useState([]);
  const products = data.products;

  const categories = ["All"];
  for (let i = 0; i < products.length; i++) {
    const productCategory = products[i].category;
    if (!categories.includes(productCategory)) {
      categories.push(productCategory);
    }
  }

  // Filter products based on selected category
  let filteredProducts = [];
  if (categoryFilter === "All") {
    filteredProducts = products; // Show all products
  } else {
    // Show only products that match the selected category
    filteredProducts = products.filter(function(product) {
      return product.category === categoryFilter;
    });
  }

  // Add product to cart
  function addToCart(product) {
    const newCart = [...cart, product]; // Copy cart and add new product
    setCart(newCart); // Update cart state
  }

  // Check if product is already in cart
  function isInCart(productId) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        return true; 
      }
    }
    return false; 
  }

  return (
    // Apply dark mode class if isDark is true
    <div className={isDark ? "app dark" : "app"}>

      
      <header className="header">
        <h1>Shopping App</h1>
        
        
        <button 
          className="theme-button" 
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </header>

      <main>
        
        <div className="filter-section">
          <h2>Filter by Category</h2>
          
          
          <div 
            className="category-dropdown"
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
          >
            {categories.map(function(category) {
              return (
                <option key={category} value={category}>
                  {category}
                </option>
              );
            })}
          </div>
        </div>

        
        <div>
          <h2>Products</h2>
          
          <div className="product-grid">
            {filteredProducts.map(function(product) {
              return (
                <div className="product-card" key={product.id}>
                  
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  
            
                  <h3>{product.name}</h3>
                  <p className="category">{product.category}</p>
                  <p className="price">${product.price.toFixed(2)}</p>
                  
                  
                  <button
                    className="cart-button"
                    onClick={() => addToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? "In Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

    
        <div className="cart-section">
          <h2>Shopping Cart</h2>
          
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            /* If cart has items, show them */
            <ul className="cart-list">
              {cart.map(function(item, index) {
                return (
                  <li key={index} className="cart-item">
                    {item.name} is in your cart.
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;