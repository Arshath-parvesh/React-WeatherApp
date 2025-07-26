import React, { useState, useEffect } from "react";
import Card from "./Card";
import MainCard from "./MainCard";
import MultiCards from "./MultiCards";
import Loader from "./Loader";
import {
  fetchCurrentWeather,
  fetchData1,
  fetchData2,
  fetchLocationLatLong,
} from "../utils/preferences";
import MultiCards from "./MultiCards";
import Loader from "./Loader";

const Dashboard = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("CHENNAI");
  const [allWeather, setAllWeather] = useState(null);
  useEffect(() => {
    const getWeather = async () => {
      const data = await fetchCurrentWeather(location);
      setWeather(data);
      if (data?.[0]) {
        const data5 = await fetchData1(data?.[0][5]);
        setAllWeather(data5);
      } else {
        setAllWeather(null);
      }
    };
    getWeather();
  }, [location]);
  const onValueChange = (evnt) => {
    evnt.key === "Enter" &&
      setLocation(evnt.currentTarget.value.toUpperCase() || "CHENNAI");
  };
  return (
    <section className="d-flex justify-content-center align-middle border border-0 rounded-3 flex-wrap flex-column">
      {weather || location != "CHENNAI" ? (
        <>
          <header className="d-flex justify-content-between align-middle flex-wrap px-3 m-2 text-white flex-row gap-1 align-items-center gap-lg-2">
            <div
              id="logo"
              className=" d-flex flex-wrap flex-shrink-1 col-3 col-md-2" 
            >
              <strong>
                WEATHER <br></br> ARSHATH
              </strong>
              <i className="bi bi-brightness-high-fill pt-3 pe-sm-0 ps-sm-2"></i>
            </div>
            <div className="bi bi-geo-alt-fill flex-shrink-1 col-0 col-lg-2 d-none d-lg-block">
              {" "}
              {location}{" "}
            </div>
            <input
              type="search"
              className="opacity-50 d-flex justify-content-center bi bi-search border border-0 rounded-5 px-4 fw-bold text-uppercase col-lg-6 col-5"
              placeholder="CHENNAI"
              style={{ color: "#3b7087" }}
              // onChange={onValueChange}
              onKeyDown={onValueChange}
            />
            <div className="col-2 d-flex flex-row col-sm-1">
              <div className="bi bi-bell flex-shrink-1 col-6 col-lg-4"></div>
              <div className="bi bi-person flex-shrink-1 col-6 col-lg-4"></div>
            </div>
          </header>
          <div className="row d-flex flex-row p-3 m-0">
            <section className="col-md-4 col-sm-12">
              {weather?.[0] && (
                <MainCard weather={weather[0]} location={location} />
              )}
              {allWeather && <MultiCards weather={allWeather} />}
            </section>
            <section className="col-md-8 col-sm-12 d-flex flex-wrap column-gap-3 h-50 infoCards">
              {weather?.[0] &&
                weather[0].map(
                  (card, index) =>
                    card.head &&
                    index != 0 && <Card weather={card} key={index} />
                )}
              {weather?.[1] && <Card weather={weather[1]} />}
            </section>
            {!weather?.[0] && (
              <div className="text-center text-white">
                {" "}
                The Location Entered Is not correct / Not available
              </div>
            )}
          </div>
          <footer className="text-white text-center py-3 mt-4">
            <div>
              <p className="mb-1">🌦️ Weather App by Arshath</p>
              <small>
                &copy; {new Date().getFullYear()} All Rights Reserved
              </small>
            </div>
          </footer>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
