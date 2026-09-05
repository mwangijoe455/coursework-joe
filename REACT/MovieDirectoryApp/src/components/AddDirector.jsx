import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { directors } from '../data/directors';

function AddDirector() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = {
      id: directors.length + 1,
      name: name.trim(),
      movies: [],
    };
    directors.push(newDirector);
    navigate(`/directors/${newDirector.id}`);
  };

  return (
    <div>
      <h2>Add a New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default AddDirector;