// State: when a state changes everywhere that state is being used changes automatically
// convention: 
// const [name, Set<name>]= useState ([initial value])

// param1- current state: array, integer, 
//param2- function to update the state.. new state

import { useState } from "react";

function ClickMe(){
    const [n, setN]= useState(0);
    let k=10;
    const increment=()=>{
        k=k+1;
        const newN=n+1;
        setN(newN);
    };
    const decrement=()=>{
        setN(n-1);
    };
    const spoil =()=>{
        setN('Cats and Dogs');
    };
    const reset =()=>{
        setN(0);
    };
    return(
     <div>
        <h4>Clicked {n}</h4>
        <div>
            <button onClick={increment}>Increment </button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={spoil}>Spoil</button>
            <button onClick={reset}>Reset</button>

        </div>
     </div>

    );
}
export default ClickMe;