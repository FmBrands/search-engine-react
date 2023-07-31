import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <span className="float-left ">
        {" "}
        <span className="temperature float-left ">
          {Math.round(props.celcius)}
        </span>
        <span className="unit ">
          ℃ |
          <a href="/" onClick={showFahrenheit}>
            ℉
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <span className="float-left ">
        {" "}
        <span className="temperature float-left ">
          {Math.round(fahrenheit)}
        </span>
        <span className="unit ">
          <a href="/" onClick={showCelcius}>
            ℃{" "}
          </a>{" "}
          | ℉
        </span>
      </span>
    );
  }
}
