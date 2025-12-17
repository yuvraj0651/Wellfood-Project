import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        let timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;

// Js Implementation
// function debouncedValue(fn , delay) {
//     let timerId;
//     return function(...args) {
//         clearTimeout(timerId);
//         timerId = setTimeout(() => {
//             fn(...args);
//         },delay)
//     }
// }