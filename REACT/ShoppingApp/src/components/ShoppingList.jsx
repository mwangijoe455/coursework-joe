import { StrictMode } from "react";

function ShoppingList({ items }) {
  return (
    <ul className="shopping-list">
      {items.length === 0 ? (
        <p className="empty">No items match your filters.</p>
      ) : (
        items.map((item) => (
          <li key={item.id} className="list-item">
            <span className="item-name">{item.name}</span>
            <span className="item-category">{item.category}</span>
          </li>
        ))
      )}
    </ul>
  );
}

export default ShoppingList;