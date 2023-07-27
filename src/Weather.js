import React, { useState } from "react";
import "./Weather.css";
import Update from "./Update";

import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }
  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className=" col-9 ">
              {" "}
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className=" col-3 ">
              <input
                type="submit"
                value="Search"
                className="  btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <Update date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3 bottom">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />

              <span className="float-left ">
                <span className="temperature float-left ">
                  {weatherData.temperature}
                </span>
                <span className="unit ">℃</span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity : {weatherData.humidity}%</li>
              <li>Wind : {weatherData.wind} km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "d3cfc8e21373609a59380c0e9070f5be";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
