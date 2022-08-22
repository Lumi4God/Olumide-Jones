import "./logoClock.css";
import { useState } from "react";


const Clock = () => {
  let time = new Date().toLocaleDateString();

  const [Dtime, setDtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setDtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="logoClock">
      <div className="logo">
        <h2 className="header__title">
          Lumi<span>Code</span>
        </h2>
      </div>

      <div className="clock">{Dtime}</div>

    </div>
  )
}

export default Clock;




/* import { useEffect, useState } from "react";

function Clock() {

  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="logoClock">

      <div className="logo">
        <h2 className="header__title">
          Lumi<span>Code</span>
        </h2>
      </div>

      <div className="clock">{clockState}</div>
    </div>
  );
}

export default Clock; */


/*
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      
      const dateItems = (date.toLocaleTimeString()).split(" ")
      setClockState(dateItems);
      
    }, 1000);
  }, []);

  
      <div className="clock">{clockState[0]} <span style={{color:"crimson"}}>{clockState[1]}</span></div>
 */
