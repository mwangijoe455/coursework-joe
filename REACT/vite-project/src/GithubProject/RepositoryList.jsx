import { useEffect, useState } from "react";
import axios from "axios";

function RepositoryList(props) {
  const { isVisible, setIsVisible, repos_url } = props; // destructuring

  const [repos, setRepos] = useState([]);

  const getRepos = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: repos_url,
        headers: {
          Authorization: `Bearer ghp_xqmSRacvX0Q8CU6c7zUk2uG1B3f4FP0u9g5CE`,
          Accept: "application/vnd.github+json",
        },
      });
      console.log(response);
      setRepos(response.data);
    } catch (e) {
      console.log("Error fetching repos", e);
    }
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }
    getRepos();
  }, [isVisible]);

  // Conditional rendering
  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h3>Repositories</h3>
        {repos.length === 0 ? (
          <p>Loading repositories...</p>
        ) : (
          <ul>
            {repos.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setIsVisible(false)}>Close</button>
      </div>
    </div>
  );
}

export default RepositoryList;