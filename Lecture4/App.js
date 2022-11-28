import React from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./HeaderComponent/HeaderComponent";
import CardComponent from "./CardComponent/CardComponent";

//Header
const App = () => {
  return (
    <>
      <HeaderComponent />
      <CardComponent />
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);



