import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/FmBrands"
            target="_blank"
            rel="noreferrer"
          >
            Modupe Folarin
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/FmBrands/search-engine-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
