import { useContext, useEffect, useState } from 'react';
import TeamCardComponent from './TeamCardComponent';
import NoRecord from "./NoRecordComponent";
import SkeletonUIComponent from "./SkeletonUIComponent";
import useCities from "../hooks/useCities";
import teamData from '../utils/data.json'
import ThemeContext from '../context/ThemeContext';

const SearchTeamCityComponent = () => {
    const [data, setData] = useState(teamData);
    const [filteredData, setFilteredData] = useState([]);
    const [stateName, setStateName] = useState("");
    const [apiData, setApiData] = useState({});
    const [cityName, setCityName] = useState("");
    const [stateList, setStateList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noRecord, setNoRecord] = useState(false);
    const cityList = useCities(stateName, apiData, stateList);
    const { themeContext } = useContext(ThemeContext);

    useEffect(() => {
        getState().then(
            res => {
                setApiData(res);
                setStateList(Object.keys(res));
            }
        ).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
        })

        async function getState() {
            let fetchUrl = await fetch(`https://raw.githubusercontent.com/bhanuc/indian-list/master/state-city.json`);
            let result = await fetchUrl.json();
            return result;
        }
    }, []);


    const getMemberByCity = (cityName) => {
        return data.filter((res) => res?.location.toLowerCase().includes(cityName.toLowerCase()));
    }

    useEffect(() => {
        setFilteredData(getMemberByCity(cityName));
        if (getMemberByCity(cityName).length == 0) {
            setNoRecord(true);
        }
        else {
            setNoRecord(false);
        }
    }, [cityName])

    if (loading) {
        return <SkeletonUIComponent />
    }

    return (
        <div>
            <form className={`m-3 text-center md:text-left`}>
                <select className={`px-4 py-1 m-2 outline outline-offset-2 outline-1 rounded-full ${themeContext === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`} value={stateName} onChange={(e) => setStateName(e.target.value)}>
                    <option value={""}>Select State</option>
                    {stateList?.map((state) => (<option key={state} value={state}>{state}</option>))}
                </select>
                <select className={`px-4 py-1 m-2 outline outline-offset-2 outline-1 rounded-full ${themeContext === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`} value={cityName} onChange={e => setCityName(e.target.value)}>
                    <option value={""}>Select City</option>
                    {cityList?.map((city) => (<option key={city} value={city}>{city}</option>))}
                </select>
            </form>
            <div className="flex flex-wrap justify-evenly" style={{ textAlign: "center" }}>
                {!noRecord ? (filteredData ? (filteredData.map((member) => <TeamCardComponent key={member.id} details={member} />)) : (data.map((member) => <TeamCardComponent key={member.id} details={member} />))) : (<NoRecord />)}
            </div>
        </div>
    )
}


export default SearchTeamCityComponent;