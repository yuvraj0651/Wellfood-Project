import { useEffect, useState } from "react";

const useLocalStorage = (key, initialState = null) => {

    const [storageValue, setStorageValue] = useState(() => {
        let storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    useEffect(() => {
        if(storageValue === null){
            localStorage.removeItem(key)
        }else{
            localStorage.setItem(key, JSON.stringify(storageValue))
        }
    },[key , storageValue])

    return [ storageValue, setStorageValue ]
}

export default useLocalStorage;