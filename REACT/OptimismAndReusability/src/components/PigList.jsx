import PigCard from './PigCard';

function PigList({ pigs, onToggleGreased }) {
  return (
    <div className="ui grid container">
      {pigs.map(pig => (
        <div className="ui eight wide column" key={pig.id}>
          <PigCard pig={pig} onToggleGreased={onToggleGreased} />
        </div>
      ))}
    </div>
  );
}

export default PigList;