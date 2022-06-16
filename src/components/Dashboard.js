import React from 'react'
import StockWatch from './StockWatch';
import WatchList from './WatchList'

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto flex my-10 gap-10">
      <WatchList />
    </div>
  );
}

export default Dashboard