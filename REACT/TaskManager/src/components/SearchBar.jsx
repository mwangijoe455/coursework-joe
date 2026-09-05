import { useRef } from "react";
import { useTaskContext } from "../TaskContexts";   

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useTaskContext();
  const searchRef = useRef(searchTerm);

  const handleChange = (e) => {
    const value = e.target.value;
    searchRef.current = value;
    setSearchTerm(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search tasks"
      />
    </div>
  );
};

export default SearchBar;