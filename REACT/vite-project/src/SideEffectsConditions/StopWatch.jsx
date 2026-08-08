/*
start, stop, reset
*/
import { useEffect, useState } from "react";

function StopWatch() {
    const [time, setTime] = useState(0);
    const [isStopped, setIsStopped] = useState(false);
    
    return (
        <div>
            <div>
                <button onClick={() => setIsStopped(false)}>Start</button>
                <button onClick={() => setIsStopped(true)}>Stop</button>
                <button onClick={() => setTime(0)}>Reset</button>
            </div>
            <Timer time={time} setTime={setTime} isStopped={isStopped} />
        </div>
    );
}

function Timer({ time, isStopped, setTime }) { // destructuring..
    useEffect(() => {
        if (isStopped) {
            return; 
        }
        
        const interval = setInterval(() => {
            setTime(prevTime => prevTime + 1); 
        }, 1000);
    
        return () => {
            clearInterval(interval);
        };
    }, [isStopped, setTime]); 
    
    return  <><h2>{time} seconds</h2></>; 
}

export default StopWatch;