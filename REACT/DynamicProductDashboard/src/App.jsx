import { useState } from 'react';
import ProductList from './components/ProductList/ProductList';
import Filter from './components/Filter/Filter';
import styles from './App.module.css';

const initialProducts = [
  { 
    id: 1, 
    name: 'Wireless Headphones', 
    price: 99.99, 
    available: true, 
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHqgSuo4HHOFUJKNXItmpN9HYjb3CcCeW9ZnZGUHapUHkd93QwGFVFgiwvfO3k2DFXts6DMNAeMErtC91bWPnkml9hnCKrebJZNUTcmi9J3lazgZlSXfbuxgBzmmOnLZjYAL1IEg&usqp=CAc' 
  },
  { 
    id: 2, 
    name: 'Smartphone', 
    price: 699.99, 
    available: false, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAf9fYrTROxungWgIoQ3GQDmq7HdbqpabN_VW8GDI1ag&s=10' 
  },
  { 
    id: 3, 
    name: 'Laptop', 
    price: 1299.99, 
    available: true, 
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRw9SCZapnG829w60ZwvltntyeT9oOEFPVEMJ-AJXLjPw6v6YW5o4Dc6sk7L9irrq1Ks-5DX_ckJxHHOMF7GgTKUMKjopzdcWaS-tMYy9BIhfFSNsbfn6_xmfjqSw&usqp=CAc' 
  },
  { 
    id: 4, 
    name: 'Tablet', 
    price: 399.99, 
    available: true, 
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSy2Fe9I7LszGl06pR7g7AjLBt0aoRyP77wXVw-KgdlBNfY3LI2S3jv3wkLJ20qgUyIwRmd6vUV7AOt5HgiP_EP1CMS_gOv_pvsKemQk3ti4MXgDrjeqn91nScMZp1-4QfaRYKVbKl_ag&usqp=CAc' 
  },
  { 
    id: 5, 
    name: 'Smartwatch', 
    price: 249.99, 
    available: false, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jZBgzymhja3Bj9mzDeGphtHtXAffs49409CwIlNLPQ&s=10' 
  },
];

function App() {
  const [products] = useState(initialProducts);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredProducts = showAvailableOnly
    ? products.filter(p => p.available)
    : products;

  return (
    <div className={styles.app}>
      <h1>Dynamic Product Dashboard</h1>   {/* Lab requirement: name it "Dynamic Product Dashboard" */}
      <Filter
        showAvailableOnly={showAvailableOnly}
        onToggle={setShowAvailableOnly}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;