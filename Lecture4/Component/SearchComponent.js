import { useState } from "react";
import data from '../data.json'

const searchTeamdetails = (searchedText) => {
    return data.filter((res) =>
        res.name.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()) || res.designation.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase())
        || res.location.toLocaleLowerCase().includes(searchedText.toLocaleLowerCase()));
}

const SearchComponent = ({ setFilteredData }) => {
    const [searchText, setSearchText] = useState("");
    return (
        <form className="form-inline m-3" onSubmit={(e) => {
            e.preventDefault();
            const filteredData = searchTeamdetails(searchText);
            console.info(filteredData);
            setFilteredData(filteredData);
        }}>
            <input
                className="form-control mr-2 search"
                type="search"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn my-2 my-0" type="submit">
                <i className="fa fa-search"></i>
            </button>
        </form>

    )
}

export default SearchComponent;


const jsObj = {
    name: 'Divya',
    location: "Mumbai"
}
console.log(jsObj);
// const stringify = JSON.stringify(jsObj);
console.log(JSON.stringify(jsObj));
// console.log(JSON.parse(stringify));

const jsonObj = '{"name": "Divya","location": "Mumbai"}'
console.log(jsonObj);
console.log(JSON.parse(jsonObj));

// console.log(jsonObj);
// console.log(JSON.stringify(jsonObj));
// console.log(JSON.parse(jsonObj));
