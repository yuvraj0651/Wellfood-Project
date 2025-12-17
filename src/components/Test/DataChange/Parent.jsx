import React, { useCallback, useState } from 'react'
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState("light");

    const incrementHandler = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    console.log("Parent Rendered");

    return (
        <>
            <Child count={count} incrementHandler={incrementHandler} />
            <br />
            <button onClick={() => {
                setTheme(t => t === "light" ? "dark" : "light");
                console.log("Theme function called");
            }}>
                Toggle Theme
            </button>
        </>
    )
}

export default Parent