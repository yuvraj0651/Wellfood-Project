import React, { memo } from 'react'

const Child = memo(({ count , incrementHandler }) => {

    console.log("Rendering the child component");

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={incrementHandler}>increment</button>
        </>
    )
});

export default Child