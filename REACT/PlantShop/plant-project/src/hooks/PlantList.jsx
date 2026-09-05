import PlantCard from './PlantCard';

function PlantList({ plants, onToggleSoldOut }) {
  if (plants.length === 0) {
    return (
      <p style={{ textAlign: 'center', marginTop: '2rem', color: '#666' }}>
         No plants found.
      </p>
    );
  }

  return (
    <div className="plant-list">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </div>
  );
}

export default PlantList;