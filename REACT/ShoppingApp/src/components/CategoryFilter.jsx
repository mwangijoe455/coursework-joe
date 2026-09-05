import { StrictMode } from "react";

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ["All", "Produce", "Dairy", "Bakery"];

  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;