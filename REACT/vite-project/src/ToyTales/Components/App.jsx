import React, { useState, useEffect } from 'react';
import ToyForm from './ToyForm';
import ToyList from './ToyList';
import '../App.css';

function App() {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:6001/toys')
      .then((r) => r.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  
  function handleAddToy(newToy) {
    fetch('http://localhost:6001/toys', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newToy),
    })
      .then((r) => r.json())
      .then((added) => setToys([...toys, added]))
      .catch((err) => console.error(err));
  }


  function handleLike(id) {
    const toy = toys.find((t) => t.id === id);
    const updated = { ...toy, likes: toy.likes + 1 };

    fetch(`http://localhost:6001/toys/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: updated.likes }),
    })
      .then((r) => r.json())
      .then((data) => {
        setToys(toys.map((t) => (t.id === id ? data : t)));
      })
      .catch((err) => console.error(err));
  }

  
  function handleDelete(id) {
    fetch(`http://localhost:6001/toys/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setToys(toys.filter((t) => t.id !== id));
      })
      .catch((err) => console.error(err));
  }

  if (loading) return <div className="loading"> Loading toys...</div>;

  return (
    <div className="app">
      <header>
        <h1> Toy Tales</h1>
      </header>
      <ToyForm onAddToy={handleAddToy} />
      <ToyList toys={toys} onLike={handleLike} onDelete={handleDelete} />
    </div>
  );
}

export default App;