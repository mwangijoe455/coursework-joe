import { useState } from 'react';
import { pigs as initialPigs } from './data/pigs';
import PigList from './components/PigList';
import Filter from './components/Filter';
import Sort from './components/Sort';

function App() {
  const [pigs, setPigs] = useState(initialPigs);
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortBy, setSortBy] = useState('none');

  const filteredPigs = filterGreased
    ? pigs.filter(pig => pig.greased)
    : pigs;

  const sortedPigs = [...filteredPigs];
  if (sortBy === 'name') {
    sortedPigs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'weight') {
    sortedPigs.sort((a, b) => a.weight - b.weight);
  }

  const toggleGreased = (id) => {
    setPigs(prev =>
      prev.map(pig =>
        pig.id === id ? { ...pig, greased: !pig.greased } : pig
      )
    );
  };

  return (
    <div className="ui container" style={{ padding: '2rem 0 4rem' }}>
      <h1 className="ui header" style={{ textAlign: 'center' }}>
         Hogwild County Fair
        <div className="sub header">
          {sortedPigs.length} pigs competing • Show your favourite!
        </div>
      </h1>

      <div className="controls-row">
        <div className="ui stackable two column grid">
          <div className="column">
            <Filter
              filterGreased={filterGreased}
              onToggleGreased={() => setFilterGreased(prev => !prev)}
            />
          </div>
          <div className="column" style={{ textAlign: 'right' }}>
            <Sort sortBy={sortBy} onSortChange={setSortBy} />
          </div>
        </div>
      </div>

      {sortedPigs.length === 0 ? (
        <div className="ui info message">
          <div className="header">No pigs match the filter</div>
          <p>Try turning off "Show only greased pigs" to see all entries.</p>
        </div>
      ) : (
        <PigList pigs={sortedPigs} onToggleGreased={toggleGreased} />
      )}
    </div>
  );
}

export default App;