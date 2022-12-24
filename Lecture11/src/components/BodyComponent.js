import { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import CardContainerComponent from "./CardContainerComponent";
import NoRecord from "./NoRecordComponent";
import SkeletonUIComponent from "./SkeletonUIComponent";

const BodyComponent = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [DataFromAPI, setDataFromAPI] = useState([]);
  const [noRecord, setNoRecord] = useState(false);
  const [loading, setLoading] = useState(true);
  const githubUserNames = [
    "gavandivya",
    "akshaymarch7",
    "ap221882",
    "Bhallora",
    "aditifarkya",
    "it-abhishek2000",
    "deepak-kumar-dev",
    "soumyagangamwar",
    "shreerajjadeja",
    "nikitaj-57",
  ];

  const getGithubApiData = async () => {
    let githubdata = await Promise.all(
      githubUserNames.map(async (userName) => {
        const UserInfo = await fetch(
          `https://api.github.com/users/${userName}`
        );
        return await UserInfo.json();
      })
    );
    sessionStorage.setItem("teamData", JSON.stringify(githubdata));
    return githubdata;
  };

  useEffect(() => {
    if (!sessionStorage.getItem("teamData")) {
      getGithubApiData()
        .then((githubdata) => {
          setDataFromAPI(githubdata);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    } else {
      setDataFromAPI(JSON.parse(sessionStorage.getItem("teamData")));
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <SkeletonUIComponent />
  }

  return (
    <>
      <SearchComponent
        DataFromAPI={DataFromAPI}
        setFilteredData={setFilteredData}
        setNoRecord={setNoRecord}
      />
      {!noRecord ? (
        <CardContainerComponent
          DataFromAPI={filteredData.length ? filteredData : DataFromAPI}
        />
      ) : (
        <NoRecord />
      )}
    </>
  );
};


export default BodyComponent;
