function ToyCard({ toy, onLike, onDelete }) {
  return (
    <div className="toy-card">
      <img src={toy.image} alt={toy.name} />
      <h3>{toy.name}</h3>
      <p> {toy.likes} likes</p>
      <button onClick={() => onLike(toy.id)}>👍 Like</button>
      <button onClick={() => onDelete(toy.id)} className="delete-btn">
         Donate
      </button>
    </div>
  );
}

export default ToyCard;