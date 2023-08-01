import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = `d3cfc8e21373609a59380c0e9070f5be`;
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecastDay mb-3 pe-3">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecastDay mb-3 pe-3">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>
        <div className="col">
          <div className="WeatherForecastDay mb-3 pe-3">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>{" "}
        <div className="col">
          <div className="WeatherForecastDay mb-3 pe-3">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>{" "}
        <div className="col">
          <div className="WeatherForecastDay mb-3 pe-3">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecastTemperature">
            <span className="WeatherForecastTemperatureMax">19</span>
            <span className="WeatherForecastTemperatureMin">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
