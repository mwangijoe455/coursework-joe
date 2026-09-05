function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p className="price">${plant.price}</p>
      <button
        className={plant.soldOut ? 'sold-out' : ''}
        onClick={() => onToggleSoldOut(plant.id)}
      >
        {plant.soldOut ? 'Sold Out' : 'In Stock'}
      </button>
    </div>
  );
}

export default PlantCard;