import React, { useState, useEffect } from "react";

const MainCard = ({ weather, location }) => {
  const [temp, setTemp] = useState(weather[0].main);
  const [isCelcius, setIsCelcius] = useState(true);
  const cardDetails = {};
  cardDetails.temp = weather[0].main;
  cardDetails.img = weather[0].img;
  cardDetails.description = weather[0].description;
  cardDetails.visibility = weather[4].main;
  const tempConverter = (e) => {
    if (e.target.id == "faren") {
      setTemp(`${(parseFloat(temp) * 9) / 5 + 32}°F`);
      setIsCelcius(false);
    } else {
      setTemp(`${((parseFloat(temp) - 32) * 5) / 9}°C`);
      setIsCelcius(true);
    }
  };
  useEffect(() => {
    if (weather?.[0].main) {
      setTemp(weather[0].main);
      setIsCelcius(true); // reset to Celsius when weather changes
    }
  }, [weather]);
  return (
    <div
      className="card mb-4 glass-effect"
      // style={{ width: "69.78417266187vh", maxHeight: "50vh" }}
    >
      <div className="row g-0">
        <div className="col-7">
          <div className="card-body text-white">
            <div className="card-title d-flex">
              <strong className="fs-2 main-temp">{`${parseInt(temp)}${
                isCelcius ? "°C" : "°F"
              }`}</strong>
              <div
                className="btn-group-vertical px-5 py-2"
                role="group"
                aria-label="Vertical radio toggle button group"
              >
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="celci"
                  checked={isCelcius}
                  onChange={tempConverter}
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor="celci">
                  °C
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="vbtn-radio"
                  id="faren"
                  checked={!isCelcius}
                  onChange={tempConverter}
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor="faren">
                  °F
                </label>
              </div>
            </div>
            <h4 className="card-text">{cardDetails.description}</h4>
            <p className="card-text">
              <small>
                <i className="bi bi-eye"></i> <span> </span>
                Visible upto {cardDetails.visibility}
              </small>
            </p>
            <p className="card-text">
              <small>
                <i className="bi bi-geo-alt"></i> <span> </span>
                {location}
              </small>
            </p>
          </div>
        </div>
        <div className="col-4 d-flex align-items-center">
          <img
            src={cardDetails.img}
            className="img-fluid rounded-start p-3"
            alt={"..."}
            // width={"200vh"}
            // height={"200vh"}
            style={{objectFit: "contain"}}
          />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
