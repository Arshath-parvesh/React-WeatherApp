import React from "react";
import Dashboard from "./Dashboard";
import { onlineStatus } from "../utils/preferences";

const App = () => {
  return (
    <>
    {onlineStatus() ? (
      <main className="w-100 h-100 p-0 b-0" style={{
        background: "linear-gradient(180deg, rgba(0, 113, 158, 1) 0%, rgba(1, 54, 77, 1) 100%)"
      }}>
      <h1 className="d-flex align-self-start justify-content-center text-white pt-4">
        WEATHER DASHBOARD
      </h1>
      <Dashboard />
    </main>
    )  : (<section className="d-flex align-self-center justify-content-center vh-100 flex-column text-center">
      <h2 >It seems you are <b>Offline</b>.</h2>
      <h3 >Kindly check your online status</h3>
      <h4>Incase of any inconvient, Kindly contact us</h4>
      </section>)
    }
    </>
  );
};

export default App;
