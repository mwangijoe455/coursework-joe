import { Link } from 'react-router-dom';
import { directors } from '../data/directors';

function DirectorList() {
  return (
    <div>
      <h1>Directors</h1>
      <ul>
        {directors.map((d) => (
          <li key={d.id}>
            <Link to={`/directors/${d.id}`}>{d.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DirectorList;