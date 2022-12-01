import React from "react";
import { useState } from "react"
import { createRoot } from "react-dom/client";
import HeaderComponent from "./Component/HeaderComponent";
import SearchComponent from "./Component/SearchComponent";
import CardComponent from "./Component/CardComponent";
import data from './data.json'

const BodyComponent = () => {
  const [filteredData, setFilteredData] = useState(data);
  return (
    <>
      <SearchComponent setFilteredData={setFilteredData} />
      {filteredData.length != 0 ? <CardContainerComponent filteredData={filteredData} /> : <NoRecord />}
    </>
  )
}


const NoRecord = () => (<div style={{ textAlign: "center", color: "white" }}>
  <h3>No Record Found</h3>
</div>)

const CardContainerComponent = ({ filteredData }) => (
  <div className="container">
    <div className="row" style={{ textAlign: "center" }}>
      {filteredData.map((details) => <CardComponent key={details.id} details={details} />
      )}
    </div>
  </div>
)

//Header
const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);



