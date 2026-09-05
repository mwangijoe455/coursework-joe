import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
} from '@mui/material';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  const { name, price, available, image } = product;

  return (
    <Card className={styles.card} variant="outlined">
  <CardMedia
    component="img"
    height={150}
    image={product.image}
    alt={product.name}
    sx={{
    objectFit: 'contain',     
    width: '100%',
  }}
/>
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${price.toFixed(2)}
        </Typography>
        <div className={styles.status}>
          <Chip
            label={available ? 'Available' : 'Out of Stock'}
            color={available ? 'success' : 'error'}
            size="small"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;