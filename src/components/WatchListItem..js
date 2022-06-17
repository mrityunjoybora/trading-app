import React from "react";
import {  useDispatch } from "react-redux";
import { setStockData } from "../store/slices/stock";


function WatchListItem({ data, isSelected }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setStockData(data))}
      className={`flex justify-between items-center px-4 py-2 hover:bg-gray-300 cursor-pointer ${isSelected?"bg-gray-300":""} `}
    >
      <div>
        <p>{data.name}</p>
      </div>
      <div className="flex flex-col items-end">
        <p>{data.c}</p>
        {data.d > 0 ? (
          <p className="text-xs" style={{ color: "green" }}>
            {data.dp} %
          </p>
        ) : (
          <p className="text-xs" style={{ color: "red" }}>
            {data.dp} %
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchListItem;
