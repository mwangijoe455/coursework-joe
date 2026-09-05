import React, { useState } from 'react';

function ToyForm({ onAddToy }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newToy = {
      name,
      image,
      likes: 0,
    };
    onAddToy(newToy);
    setName('');
    setImage('');
  }

  return (
    <form className="toy-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Toy name"
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
      <button type="submit">Add Toy</button>
    </form>
  );
}

export default ToyForm;