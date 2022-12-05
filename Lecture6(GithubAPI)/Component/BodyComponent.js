import { useState, useEffect } from "react";
import SearchComponent from './SearchComponent';
import CardContainerComponent from "./CardContainerComponent";


const BodyComponent = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [DataFromAPI, setDataFromAPI] = useState([]);
    const [noRecord, setNoRecord] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem('teamData')) {
            getGithubApiData().then((githubdata) => setDataFromAPI(githubdata));
        }
        else {
            setDataFromAPI(JSON.parse(sessionStorage.getItem('teamData')));
        }
    }, []);

    githubUserNames = ["gavandivya", "akshaymarch7", "ap221882", "Bhallora", "aditifarkya", "it-abhishek2000", "deepak-kumar-dev", "soumyagangamwar", "shreerajjadeja", "nikitaj-57"]
    const getGithubApiData = async () => {
        let dataArray = [];
        let githubdata = await Promise.all(githubUserNames.map(async (userName) => {
            const UserInfo = await fetch(`https://api.github.com/users/${userName}`);
            return await UserInfo.json();
        }));
        // console.log(dataArray)
        sessionStorage.setItem('teamData', JSON.stringify(githubdata));
        return githubdata;
    }

    return (
        <>
            <SearchComponent DataFromAPI={DataFromAPI} setFilteredData={setFilteredData} setNoRecord={setNoRecord} />
            {!noRecord ? <CardContainerComponent DataFromAPI={filteredData.length ? filteredData : DataFromAPI} /> : <NoRecord />}
        </>
    )

}

const NoRecord = () => (<div className="noRecord">
    <h3>No Record Found</h3>
</div>)


export default BodyComponent;