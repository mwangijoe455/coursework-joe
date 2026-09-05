import { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
  // State
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch joke function (can be reused)
  const fetchJoke = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      if (!response.ok) throw new Error("Failed to fetch joke");
      const data = await response.json();
      setJoke(data.joke || "No joke found!");
    } catch (err) {
      setError(err.message);
      setJoke("");
    } finally {
      setLoading(false);
    }
  };

  // Fetch joke on component mount (first load)
  useEffect(() => {
    fetchJoke();
  }, []); // empty dependency array → runs once after initial render

  return (
    <div className="container">
      <h1>Programming Joke</h1>

      {loading && <p className="loading">Loading a joke...</p>}
      {error && <p className="error"> Error: {error}</p>}
      {!loading && !error && joke && (
        <div className="joke-box">
          <p className="joke-text">{joke}</p>
        </div>
      )}

      <button
        onClick={fetchJoke}
        disabled={loading}
        className="fetch-btn"
      >
        {loading ? "Fetching..." : "New Joke"}
      </button>
    </div>
  );
};

export default App;