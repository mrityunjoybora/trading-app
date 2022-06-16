import React from 'react'

function WatchListItem({ props}) {
  return (
    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-300">
      <div>
        <p>{props.name}</p>
      </div>
      <div className="flex flex-col items-end">
        <p>{props.c}</p>
        {props.d > 0 ? (
          <p className="text-xs" style={{ color: "green" }}>
            {props.d} %
          </p>
        ) : (
          <p className="text-xs" style={{ color: "red" }}>
            {props.d} %
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchListItem