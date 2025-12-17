import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const [reload, setReload] = useState(0);

    const reFetchFunction = () => {
        setReload(prev => prev + 1);
    }

    useEffect(() => {
        const controller = new AbortController();
        console.log(controller);

        let signal = controller.signal;
        console.log(signal);

        const fetchData = async () => {
            if (!url) return;

            try {
                setIsLoading(true);
                setIsError(null);
                let response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error("Sorry something is wrong in api, try again!");
                }
                let data = await response.json();
                console.log(data);
                setFetchedData(data);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Fetch aborted");
                } else {
                    console.log("Error is:", error.message);
                    setIsError(error.message);
                }
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, [url, reload]);

    return { fetchedData, isLoading, isError, reFetchFunction }
}

export default useFetch;