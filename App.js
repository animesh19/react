import React from "react";
import ReactDOM from "react-dom";
// Create a nested html
//const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I'm an H1 tag")))

// Create nested HTML with siblings
const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm an H1 tag"), React.createElement("h2", {}, "I'm an H2 tag")]))


const heading = React.createElement("h1", { id: "heading" }, "Hello world from React");
console.log(parent) // object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)