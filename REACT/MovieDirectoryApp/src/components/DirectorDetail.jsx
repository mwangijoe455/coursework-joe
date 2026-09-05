import { useParams, Link, Outlet } from 'react-router-dom';
import { directors } from '../data/directors';

function DirectorDetail() {
  const { directorId } = useParams();
  const director = directors.find((d) => d.id === Number(directorId));

  if (!director) {
    return <p>Director not found.</p>;
  }

  return (
    <div>
      <h2>{director.name}</h2>
      <Link to={`/directors/${director.id}/add-movie`}>Add Movie</Link>
      <h3>Movies</h3>
      <ul>
        {director.movies.map((m) => (
          <li key={m.id}>
            <Link to={`movies/${m.id}`}>{m.title} ({m.year})</Link>
          </li>
        ))}
      </ul>
      {/* Nested movie detail will render here */}
      <Outlet context={{ director }} />
    </div>
  );
}

export default DirectorDetail;