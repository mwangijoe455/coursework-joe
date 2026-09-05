import{ useState } from "react";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newItem = {
      id: Date.now(), // simple unique id
      name: name.trim(),
      category,
    };
    onAddItem(newItem);
    setName("");
    setCategory("Produce");
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <h2>Add New Item</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
        </select>
        <button type="submit">➕ Add Item</button>
      </div>
    </form>
  );
}

export default AddItemForm;