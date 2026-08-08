/*
useEffect -> side effects
lifecycle hook
get born: rendered initially
lives: state changes: when state changes
die: component is removed/gets removed

1.  conditional rendering:
component gets rendered because it meets a certain conditions ie if statements

2. useEffect (@param1, @param2)
@ param1: required . call-back function
@param2: dependency array: [] empty
 */

import { useState, useEffect } from "react"; 

function LifeCycle() { 
    const [n, setN] = useState(0);

    useEffect(()=>{
        console.log('N has changed');
},[n]);

    return (
        <div>
            <div>
                <button onClick={() => setN(n - 1)}>-</button> 
                <b>{n}</b>
                <button onClick={() => setN(n + 1)}>+</button> 
            </div>
            <EvenOrOdd n={n} />
        </div>
    );
}

function EvenOrOdd(props) {
    const { n } = props;
    if (n % 2 === 0) {
        return <EvenComponent />;
    }
    return <OddComponent />;
}

function OddComponent(props) { 
    const { n } = props;
    return ( 
        <div>
            <h1>N is odd</h1>
        </div>
    );
}

function EvenComponent() {
        useEffect(()=> {
        console.log('Even component rendered');
         },[]);

    return (
        <div>
            <h1>N is even</h1>
        </div>
    );
}

export default LifeCycle; 