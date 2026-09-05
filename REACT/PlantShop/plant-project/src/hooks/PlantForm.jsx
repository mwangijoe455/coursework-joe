import { useState } from 'react';

function PlantForm({ onAddPlant }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      name,
      image,
      price: parseFloat(price),
      soldOut: false,
    };

    onAddPlant(newPlant);

    // Clear form
    setName('');
    setImage('');
    setPrice('');
  }

  return (
    <form className="plant-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Plant name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">➕ Add Plant</button>
    </form>
  );
}

export default PlantForm;