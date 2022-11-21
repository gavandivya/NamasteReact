import React from "react";
import { createRoot } from 'react-dom/client';
// import ReactDOM from "react/client";

const h1Tag = React.createElement("h1", {}, "Hello Divya!");
const root = createRoot(document.getElementById('root'));
root.render(h1Tag);