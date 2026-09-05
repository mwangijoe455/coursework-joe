import { useParams, useOutletContext } from 'react-router-dom';

function MovieDetail() {
  const { movieId } = useParams();
  const { director } = useOutletContext();
  const movie = director.movies.find((m) => m.id === Number(movieId));

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div style={{ marginTop: '1rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
      <h3>Movie Details</h3>
      <p><strong>Title:</strong> {movie.title}</p>
      <p><strong>Year:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {director.name}</p>
    </div>
  );
}

export default MovieDetail;