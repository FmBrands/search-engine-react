import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Weather() {
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
            />
          </div>
          <div className=" col-3 ">
            <input type="submit" value="Search" className="  btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07 : 00</li>
        <li>Most Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Cloudy"
          />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : 15%</li>
            <li>Precipitation : 72%</li>
            <li>Wind : 15 km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
