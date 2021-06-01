import moment from "moment";
import React, { useEffect, useState } from "react";
import "../App.css"
import DateTimePicker from "./DateTimePicker";


const TIMESPAN = {

  year:"Yearly ",
  week: " Weekly ",
  select: "Select",
};




const DateRangeSelector = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startOnMode = "",
  hideTime,
}) => {
  const [mode, setMode] = useState(startOnMode);
  useEffect(() => {
    if (mode !== "Select") {
      setStartDate(moment().startOf(mode));
      setEndDate(moment().startOf("day").add(0, "day"));
    
  }}, [mode, setEndDate, setStartDate]);

  return (
    <div width="100%">

      <div className="duration">

<span className="duraHead">DURATION :</span>
        {Object.keys(TIMESPAN).map((k) => (
          <span
            key={k}
            onClick={() => setMode(k)}
            className="dur"
            
            >
            {TIMESPAN[k]}
          </span>
        ))}
      </div>
      {mode === "select" ? (
        <span className="dd" >
          <span>
            <span className="date" >
              Start Date
            </span>
            <DateTimePicker
              value={startDate}
              setValue={setStartDate}
              name="start-date"
              hideTime
            />
          </span>
          <span >
            <span className="date">
              End Date
            </span>
            <DateTimePicker
              value={endDate}
              setValue={setEndDate}
              name="-end-date"
              hideTime
            />
          </span>
        </span>
      ):<span><img  className="logo" src="/pekkacodes.png" alt="" width="50%"/></span>}
      
    </div>
  );
};

export default DateRangeSelector;
