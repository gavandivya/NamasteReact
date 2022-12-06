import { useState, useEffect } from "react";
import SearchComponent from './SearchComponent';
import CardContainerComponent from "./CardContainerComponent";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { SkeletonTheme } from "react-loading-skeleton";

const BodyComponent = () => {
    const [filteredData, setFilteredData] = useState([]);
    const [DataFromAPI, setDataFromAPI] = useState([]);
    const [noRecord, setNoRecord] = useState(false);
    const [loading, setLoading] = useState(true)
    const githubUserNames = ["gavandivya", "akshaymarch7", "ap221882", "Bhallora", "aditifarkya", "it-abhishek2000", "deepak-kumar-dev", "soumyagangamwar", "shreerajjadeja", "nikitaj-57"]

    const getGithubApiData = async () => {
        // let dataArray = [];
        let githubdata = await Promise.all(githubUserNames.map(async (userName) => {
            const UserInfo = await fetch(`https://api.github.com/users/${userName}`);
            return await UserInfo.json();
        }));
        // console.log(dataArray)
        sessionStorage.setItem('teamData', JSON.stringify(githubdata));
        return githubdata;
    }

    useEffect(() => {
        if (!sessionStorage.getItem('teamData')) {
            getGithubApiData().then((githubdata) => {
                setLoading(false)
                setDataFromAPI(githubdata);
            });
        }
        else {
            setDataFromAPI(JSON.parse(sessionStorage.getItem('teamData')));
            setLoading(false)

        }
    }, []);

    if (loading) {
        let rows = []
        for (let index = 0; index < githubUserNames.length; index++) {
            rows.push(
                <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3 mt-4" key={index}>
                    <div className='item card' style={{ width: "11rem" }}>
                        <div className='item-img'>
                            <Skeleton width={170} height={180} />
                        </div>
                        <h6 className='item-title'><Skeleton count={5} width={170} /></h6>
                    </div>
                </div>
            )
        }
        return (
            <SkeletonTheme color='#F5F5F5' highlightColor='#ffffff'>
                <div className="container">
                    <div className="row" style={{ textAlign: "center" }}>
                        {rows}
                    </div>
                </div>
            </SkeletonTheme>
        )
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