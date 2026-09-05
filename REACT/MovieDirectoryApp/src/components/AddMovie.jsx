import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { directors } from '../data/directors';

function AddMovie() {
  const { directorId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const director = directors.find((d) => d.id === Number(directorId));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(), // quick unique id
      title: title.trim(),
      year: Number(year),
    };
    director.movies.push(newMovie);
    navigate(`/directors/${directorId}/movies/${newMovie.id}`);
  };

  if (!director) {
    return <p>Director not found.</p>;
  }

  return (
    <div>
      <h2>Add a Movie to {director.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;