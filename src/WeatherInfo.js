import React from "react";
import Update from "./Update";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <Update date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3 bottom">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} className="float-left" />

            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : {props.data.humidity}%</li>
            <li>Wind : {props.data.wind} km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
