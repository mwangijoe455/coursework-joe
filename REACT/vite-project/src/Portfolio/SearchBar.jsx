function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;