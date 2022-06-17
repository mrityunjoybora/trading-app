import React from 'react'
import StockWatch from './StockWatch';
import WatchList from './WatchList'

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto flex my-10 gap-10 sm:px-auto px-20">
      <WatchList />
      <StockWatch />
    </div>
  );
}

export default Dashboard