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
      className="form-inline m-3"
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
        className={`form-control mr-2 search ${themeContext === "dark" ? "bg-dark text-white" : "bg-light text-black"}`}
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button className={`btn my-2 my-0" type="submit ${themeContext === "dark" ? "darkbg" : "lightbg"}`}>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchComponent;
