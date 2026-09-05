function Sort({ sortBy, onSortChange }) {
  return (
    <div className="ui form" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
      <div className="field" style={{ margin: 0 }}>
        <label htmlFor="sortSelect" style={{ marginRight: '0.5rem' }}>Sort by</label>
        <select
          id="sortSelect"
          className="ui dropdown"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          style={{ padding: '0.4rem 1.2rem' }}
        >
          <option value="none">None</option>
          <option value="name">Name (A-Z)</option>
          <option value="weight">Weight (low-high)</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;