import React from "react";
import StockWatch from "./StockWatch";
import WatchList from "./WatchList";

function Dashboard() {
  return (
    <div className="max-w[1366px] mx-auto">
      <div className="flex gap-10">
        <div className="h-[calc(100vh-72px)] overflow-auto bg-gray-200">
          <WatchList />
        </div>
        <div className="h-[calc(100vh-72px)] flex-1 overflow-scroll">
          <StockWatch />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
