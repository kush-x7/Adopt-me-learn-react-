import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h1", {}, props.animal),
    React.createElement("h1", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", //Element name || Tag name
    { id: "my-id" }, //Element attribute
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        animal: "kush",
        name: "dhr",
        breed: "dog",
      }),
      React.createElement(Pet, {
        animal: "kush",
        name: "dhr",
        breed: "dog",
      }),
      React.createElement(Pet, {
        animal: "kush",
        name: "dhr",
        breed: "dog",
      }),
    ] //Element  CHildren
  );
};

const getRoot = document.getElementById("root");
const virtualRoot = createRoot(getRoot);
virtualRoot.render(React.createElement(App));
