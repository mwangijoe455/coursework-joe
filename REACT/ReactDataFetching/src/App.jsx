import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Reusable fetch function
  const fetchDog = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) throw new Error("Failed to fetch dog image");
      const data = await response.json();
      setImageUrl(data.message);
    } catch (err) {
      setError(err.message);
      setImageUrl("");
    } finally {
      setLoading(false);
    }
  };

  // Side effect: load a dog image when the component mounts
  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="container">
      <h1> Random Dog Image</h1>

      {loading && <p className="loading"> Fetching a cute dog...</p>}
      {error && <p className="error"> Error: {error}</p>}

      {!loading && !error && imageUrl && (
        <div className="image-box">
          <img src={imageUrl} alt="Random dog" className="dog-image" />
        </div>
      )}

      <button onClick={fetchDog} disabled={loading}>
        {loading ? "Loading..." : " New Dog"}
      </button>
    </div>
  );
}

export default App;