import React from "react";
import { Line } from "react-chartjs-2";
import "../App.css";

const Dashboard = ({ price, data }) => {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    devicePixelRatio: 1,
    alignToPixels: true,
    plugins:{legend:{labels:{font:{
      size:16,
      color:"#ffffff"
    }}}},
    scales: {
      xAxes: [{ 
          gridLines: {
              display: false,
          },
          ticks: {
            fontColor: "white", // this here
          },
      }],
      yAxes: [{
          display: false,
          gridLines: {
              display: false,
          },
      }],
  }
  
  };
  return (
    <div className="dashboard">
      <div className="price">Current Price :{`$${price} `}</div>

      <div className="chart-container">
      {data?<Line data={data} options={opts} />:<span style={{color:"white"}}>Please select a valid date</span>}
      <img  className="logo2" src="/pekkacodes.png" alt="" width="50%"/>
    </div>
    </div>
  );
};

export default Dashboard;
