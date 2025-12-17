import React, { useMemo } from "react";

const Total = () => {
    console.log("Rendering the Total component:");
    console.time("Total time taken");

    // Heavy calculation
    const sumOfNum = useMemo(() => {
        let sum = 0;
        for (let i = 0; i <= 1e7; i++) {
            sum += i;
        }
        return sum;
    }, []);

    console.log("Sum:", sumOfNum);
    console.timeEnd("Total time taken");

    // React component must return JSX
    return <div>Total: {sumOfNum}</div>;
};

export default Total;
