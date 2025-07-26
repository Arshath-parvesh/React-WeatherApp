import React from "react";
import {
  HUMIDITY_IMG,
  MID_HOT_IMG,
  VISIBILITY_IMG,
} from "../utils/preferences";

const MultiCards = ({ weather }) => {
    const currentData =  new Date().toISOString().split("T")[0];
    const getTomorrowDate = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];  // "YYYY-MM-DD"
      };
      const getLabel = (dateStr) => {
        const date = dateStr.split(" ")[0];
        if (date === currentData) return "Today";
        if (date === getTomorrowDate()) return "Tomorrow";
        return new Date(dateStr).toLocaleDateString("en-US", { weekday: "long" });
      };
  return (
    <div className="card w-100 glass-effect">
      <div className="card-body">
        <div className="card-text d-grid row-gap-2 dayInfo">
          {weather.map((data) => (
            <div key={`${data.dt}-${data.dt_txt}`} className="card border-0 text-white glass-effect">
              <div className="card-body d-grid row-gap-0">
                <div className="d-flex justify-content-evenly flex-wrap flex-lg-row flex-column flex-column align-items-start">
                  <div className="col-lg-4 col-md-12">
                    <strong className="responsive-fs">
                      {getLabel(data.dt_txt)}
                    </strong>
                  </div>
                  <div className="d-flex col-lg-6 col-md-12 justify-content-lg-evenly justify-content-md-start pt-2 px-lg-3 gap-lg-0 gap-md-5 px-0 fs-6">
                  <div className="d-flex">
                    <img src={HUMIDITY_IMG} width={"20vh"} height={"20vh"} />
                    <p>{data.main.humidity}%</p>
                  </div>
                  <div className="d-flex">
                    <img src={VISIBILITY_IMG} width={"20vh"} height={"20vh"} />
                    <p>{data.visibility / 1000}km</p>
                  </div>
                  </div>
                  <div className="d-flex col-lg-2 col-md-12 pt-2">
                    <p className="fs-6">{Math.round(data.main.temp)}°C</p>
                    <img src={MID_HOT_IMG} width={"25vh"} height={"25vh"} />
                  </div>
                </div>
                <p className="fs-6 p-0 m-0 justify-content-md-start justify-content-evenly d-flex">{data.weather[0].description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MultiCards;
