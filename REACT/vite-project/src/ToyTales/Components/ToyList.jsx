import ToyCard from './ToyCard';

function ToyList({ toys, onLike, onDelete }) {
  return (
    <div className="toy-list">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onLike={onLike}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ToyList;