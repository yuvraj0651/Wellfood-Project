import { useState } from "react";

const useToggle = (initialState = false) => {

    const [value, setValue] = useState(initialState);

    const toggleValue = () => {
        setValue(prev => !prev);
    }

    return [value, toggleValue]
}

export default useToggle;