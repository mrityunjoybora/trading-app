import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import { useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function StockWatch() {
  const stockData = useSelector((state) => state.selectedStock.stockData);

  return (
    <>
      {stockData ? (
        <div className="flex-1 p-5">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold">${stockData.c}</p>
            <p> {stockData.name} </p>
          </div>
          {stockData.d > 0 ? (
            <p className="my-2 text-green-500">
              
              +{stockData.d}
              <ArrowUpwardIcon /> ({stockData.dp}%) Today
            </p>
          ) : (
            <p className="my-2 text-red-500">
              
              -{stockData.d}
              <ArrowDownwardIcon /> ({stockData.dp}%) Today
            </p>
          )}

          <p className="text-sm">{new Date().toDateString()}</p>

          <div className="my-2">
            <TradingViewWidget symbol={`NASDAQ:${stockData.name}`} />
          </div>
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
              <p>{stockData.h}</p>
            </div>

            <div className="flex gap-5">
              <p>Low</p>
              <p>{stockData.l}</p>
            </div>
            <div className="flex gap-5">
              <p>Open</p>
              <p>{stockData.o}</p>
            </div>

            <div className="flex gap-5">
              <p>Previous Close</p>
              <p>{stockData.pc}</p>
            </div>
            <p></p>
            <p></p>
          </div>
          <div></div>
        </div>
      ) : (
        <Skeleton
          className=""
          variant="rectangular"
          width={"100%"}
          height={"100%"}
        />
      )}
    </>
  );
}

export default StockWatch;
