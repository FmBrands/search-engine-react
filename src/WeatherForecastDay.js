import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function WeatherForecastTemperatureMax() {
    let WeatherForecastTemperatureMax = Math.round(props.data.temp.max);
    return WeatherForecastTemperatureMax;
  }
  function WeatherForecastTemperatureMin() {
    let WeatherForecastTemperatureMin = Math.round(props.data.temp.min);
    return WeatherForecastTemperatureMin;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecastDay mb-3 pe-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="WeatherForecastTemperature pe-2">
        <span className="WeatherForecastTemperatureMax">
          {WeatherForecastTemperatureMax()}
        </span>
        <span className="WeatherForecastTemperatureMin">
          {" "}
          {WeatherForecastTemperatureMin()}
        </span>
      </div>
    </div>
  );
}
