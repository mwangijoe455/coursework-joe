import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ShoppingList from "./components/ShoppingList";
import AddItemForm from "./components/AddItemForm";
import "./App.css";

const INITIAL_ITEMS = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Bananas", category: "Produce" },
  { id: 3, name: "Milk", category: "Dairy" },
  { id: 4, name: "Bread", category: "Bakery" },
  { id: 5, name: "Cheese", category: "Dairy" },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Add new item
  const addItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Filter items based on search and category
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <h1>Shopping List</h1>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      </div>
      <ShoppingList items={filteredItems} />
      <AddItemForm onAddItem={addItem} />
    </div>
  );
}

export default App;