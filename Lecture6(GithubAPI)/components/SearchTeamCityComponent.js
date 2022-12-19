
import "react-loading-skeleton/dist/skeleton.css";
import { useContext, useEffect, useState } from 'react';
import { SkeletonTheme } from "react-loading-skeleton";
import TeamCardComponent from './TeamCardComponent';
import NoRecord from "./NoRecordComponent";
import useCities from "../hooks/useCities";
import teamData from '../utils/data.json'
import Skeleton from "react-loading-skeleton";
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
        let rows = [];
        for (let index = 0; index < 10; index++) {
            rows.push(
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={index} >
                    <div className="item card" style={{ backgroundColor: themeContext === "dark" ? "#232324" : "#ffffff", width: "11rem" }} >
                        <div className="item-img">
                            <Skeleton width={170} height={180} />
                        </div>
                        <h6 className="item-title">
                            <Skeleton count={5} width={170} />
                        </h6>
                    </div>
                </div>
            );
        }
        return (
            <SkeletonTheme highlightColor={`${themeContext === "dark" ? "#252525" : "#ffffff"}`} baseColor={`${themeContext === "dark" ? "#343a40" : "#e2dfdf"}`}>
                <div className="container" >
                    <div className="row" style={{ textAlign: "center" }}>
                        {rows}
                    </div>
                </div>
            </SkeletonTheme>
        );
    }

    return (
        <div className="container">
            <form className={`form-inline m-3`}>
                <select className={`form-control search m-2 ${themeContext === "dark" ? "bg-dark text-white" : "bg-light text-black"}`} value={stateName} onChange={(e) => setStateName(e.target.value)}>
                    <option value={""}>Select State</option>
                    {stateList?.map((state) => (<option key={state} value={state}>{state}</option>))}
                </select>
                <select className={`form-control search m-2 ${themeContext === "dark" ? "bg-dark text-white" : "bg-light text-black"}`} value={cityName} onChange={e => setCityName(e.target.value)}>
                    <option value={""}>Select City</option>
                    {cityList?.map((city) => (<option key={city} value={city}>{city}</option>))}
                </select>
            </form>
            <div className="row" style={{ textAlign: "center" }}>
                {!noRecord ? (filteredData ? (filteredData.map((member) => <TeamCardComponent key={member.id} details={member} />)) : (data.map((member) => <TeamCardComponent key={member.id} details={member} />))) : (<NoRecord />)}
            </div>
        </div>
    )
}


export default SearchTeamCityComponent;