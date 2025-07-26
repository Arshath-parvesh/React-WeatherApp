import React from "react";

const Card = ({ weather }) => {
  return (
    <div className="text-white">
      <h6>
        <b>{weather.head}</b>
      </h6>
      <div className="card mb-3 glass-effect">
        <div className="row g-0">
          <div className="col-8">
              {typeof weather.main !== "function" ? (
                <div className="card-body">
                <h5 className="card-title">{weather.main}</h5>
                <p className="card-text">{weather.description}</p>
                <p className="card-text">
                  <small>{weather.para}</small>
                </p>
                </div>
              ) : (
                <div className="card-body">
                <span className="card-title"><weather.main /></span>
                <span className="card-title"><weather.description /></span>
                <span className="card-title"><weather.para /></span>
                </div>
              )}
          </div>
          {weather.img && (
                      <div className="col-4 d-flex align-items-center">
                      <img
                        src={weather.img}
                        className="img-fluid rounded-start p-3"
                        alt={"..."}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
