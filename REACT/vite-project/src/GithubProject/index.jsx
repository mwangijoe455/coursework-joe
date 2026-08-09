import { useEffect, useState } from "react";
import axios from 'axios';

function GithubProject(){
    const [people, setPeople]=useState([]);
    // we can use fetch api or axios
    const getUserData=async ()=>{
        try{ 
            let response=await axios({
                method: 'GET', 
                url: 'https://api.github.com/users',
            });
            console.log('response is', response);
            setPeople(response.data);
        } catch (e){
            console.log('Error is',e);
        }
    };
console.log(people); // array of objects containing single single user
    useEffect(()=>{
        getUserData();
    },[]);

// lifecycle.githubproject

return(
     <div>
        <h1>Github Project</h1>
    </div>
);
   
}
export default GithubProject;