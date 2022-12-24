import { useEffect, useState } from "react"

const useCities = (state, apiData, stateList) => {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchCities();
        async function fetchCities() {
            const json = await apiData[state];
            setCities(json);
        }
    }, [state, stateList])
    return cities;
}

export default useCities;