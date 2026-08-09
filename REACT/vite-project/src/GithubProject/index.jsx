import { useState, useEffect } from "react";
import axios from "axios";
import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
  const [people, setPeople] = useState([]);

  //fetch api. axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
      });
      setPeople(response.data);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  //Lifecycle. githubProject

  return (
    <div>
      <TopNav />
      <InfoSection people={people} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default GithubProject;