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
    <>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src={img}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="logo"
          />
          Namaste React - Brainy Fools
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 search"
            type="search"
            placeholder="Search"
          />
          <button className="btn my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
      {/* Done Composition */}
      <WithJSXComponent />
      {<TestingComponent />}
      {TestingComponent}
      {TestingComponent()}
      {<TestingComponent></TestingComponent>}
    </>
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

const rootWithJSX = createRoot(document.getElementById("rootWithJSX"));
rootWithJSX.render(withJSX);

//with using JSX with funtion component
const WithJSXComponent = () => {
  return (
    <div id="title">
      <h1>First</h1>
      <h2>Second</h2>
      <h3>Third </h3>
    </div>
  );
};
const rootWithJSXComp = createRoot(document.getElementById("rootWithJSXComp"));
rootWithJSXComp.render(<WithJSXComponent />);

// const TestingComponent = () => <h1>I am a Testing h1</h1>;
// console.info(TestingComponent);
// console.info(TestingComponent());
// console.info(<TestingComponent />);
// console.info(<TestingComponent></TestingComponent>);
