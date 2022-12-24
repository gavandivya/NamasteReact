import { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext.js";

const searchTeamdetails = (searchedText, DataFromAPI) => {
  return DataFromAPI.filter(
    (res) =>
      res.login
        ?.toLocaleLowerCase()
        .includes(searchedText.toLocaleLowerCase()) ||
      res.company
        ?.toLocaleLowerCase()
        .includes(searchedText.toLocaleLowerCase()) ||
      res.location
        ?.toLocaleLowerCase()
        .includes(searchedText.toLocaleLowerCase())
  );
};

const SearchComponent = ({ DataFromAPI, setFilteredData, setNoRecord }) => {
  const [searchText, setSearchText] = useState("");
  const { themeContext } = useContext(ThemeContext)

  return (
    <form
      className="m-3"
      onSubmit={(e) => {
        e.preventDefault();
        const filteredData = searchTeamdetails(searchText, DataFromAPI);
        if (filteredData.length > 0) {
          setFilteredData(filteredData);
          setNoRecord(false);
        } else {
          setNoRecord(true);
        }
      }}
    >
      <input
        className={`px-4 py-1 outline outline-offset-2 outline-1 rounded-full mr-2 ${themeContext === "dark" ? "bg-slate-800 text-white" : "bg-white text-black"}`}
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={`btn my-2 py-1 px-2 rounded-full type="submit ${themeContext === "dark" ? "bg-slate-800 text-white " : "bg-white text-black"}`}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchComponent;
