function Filter({ filterGreased, onToggleGreased }) {
  return (
    <div className="ui toggle checkbox">
      <input
        type="checkbox"
        id="greasedFilter"
        checked={filterGreased}
        onChange={onToggleGreased}
      />
      <label htmlFor="greasedFilter">Show only greased pigs</label>
    </div>
  );
}

export default Filter;