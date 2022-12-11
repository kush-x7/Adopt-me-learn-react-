import React from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

const container = document.getElementById("root");
const virtualRoot = createRoot(container);
virtualRoot.render(<App />);
