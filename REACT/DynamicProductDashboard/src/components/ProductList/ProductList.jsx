import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

function ProductList({ products, loading = false }) {
  if (loading) {
    return <p className={styles.loading}>Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className={styles.emptyMessage}>No products found.</p>;
  }

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;