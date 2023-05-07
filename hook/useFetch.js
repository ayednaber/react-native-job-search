import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env";

const rapidApiKey = "a528f7efb4msh4fd97a2ba9da700p1b3e1fjsn79e5c170de0a";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("There is an error" + error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch