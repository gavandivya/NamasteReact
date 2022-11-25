import React from "react";
import { createRoot } from "react-dom/client";
import img from "./assets/logo512.png";

//session 2
// const h1Tag = React.createElement("h1", {}, "Hello Divya!");
// const root = createRoot(document.getElementById('root'));
// root.render(h1Tag);

//Header
const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src={img}
          width="35"
          height="35"
          className="d-inline-block align-top"
          alt=""
        />
        Namaste React - Brainy Fools
      </a>
      <form className="form-inline">
        <input
          class="form-control mr-sm-2 search"
          type="search"
          placeholder="Search"
        />
        <button className="btn my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

//without using JSX.
const withoutJSX = React.createElement(
  "div",
  { id: "title" },
  React.createElement("h1", {}, "First Heading"),
  React.createElement("h2", {}, "Second Heading"),
  React.createElement("h3", {}, "Third Heading")
);

const rootWithoutJSX = createRoot(document.getElementById("rootWithoutJSX"));
rootWithoutJSX.render(withoutJSX);

//with using JSX.
const withJSX = (
  <div id="title">
    <h1>First Heading</h1>
    <h2>Second Heading</h2>
    <h3>Third Heading</h3>
  </div>
);

const rootJSX = createRoot(document.getElementById("rootJSX"));
rootJSX.render(withJSX);
