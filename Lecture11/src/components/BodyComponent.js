import { useState, useEffect, useContext } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import SearchComponent from "./SearchComponent";
import CardContainerComponent from "./CardContainerComponent";
import NoRecord from "./NoRecordComponent";
import ThemeContext from "../context/ThemeContext";

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
  const { themeContext } = useContext(ThemeContext);

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
    let rows = [];
    for (let index = 0; index < githubUserNames.length; index++) {
      rows.push(
        <div className="m-5" key={index}>
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
        <div className="flex flex-wrap justify-evenly" style={{ textAlign: "center" }}>
          {rows}
        </div>
      </SkeletonTheme>
    );
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
