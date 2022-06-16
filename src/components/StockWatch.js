import React from "react";

function StockWatch() {
  return (
    <div className="flex-1 p-5">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">$114,656,84</p>
        <p>TSLA</p>
      </div>
          <p className="my-2">$142.90 (-0,12) Today</p>
      <p className="text-sm">16 Jun, 3:30 pm IST</p>
      <div className="my-2">Chart.js</div>
      <div className="flex gap-5 font-semibold">
        <p>1D</p>
        <p>5D</p>
        <p>1M</p>
        <p>6M</p>
        <p>YTD</p>
        <p>1Y</p>
        <p>5Y</p>
        <p>MAX</p>
      </div>
      <div className="grid grid-cols-2 my-2 gap-4">
        <div className="flex gap-5">
          <p>High</p>
          <p>142.90</p>
        </div>

        <div className="flex gap-5">
          <p>Low</p>
          <p>142.90</p>
        </div>
        <div className="flex gap-5">
          <p>Open</p>
          <p>142.90</p>
        </div>

        <div className="flex gap-5">
          <p>Previous Close</p>
          <p>142.90</p>
        </div>
        <p></p>
        <p></p>
      </div>
      <div></div>
    </div>
  );
}

export default StockWatch;
