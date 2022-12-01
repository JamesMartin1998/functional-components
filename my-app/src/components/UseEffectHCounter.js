import React, {useState, useEffect} from 'react'

function UseEffectHCounter() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        document.title = count;
        console.log("Count 1 updated")
    }, [count]);

    useEffect(() => {
        document.title = count2
        console.log("Count 2 updated")
    }, [count2]);

    useEffect(() => {
        console.log("Creating timer");
        const interval = setInterval(() => {
            console.log("Interval executed");
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('Cleaning up');
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count => count + 1)}>
                Increment Count ({count})
            </button>
            <button onClick={() => setCount2(count2 => count2 + 1)}>
                Increment Count 2 ({count2})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectHCounter