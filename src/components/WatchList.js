import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WatchListItem from "./WatchListItem.";
import axios from "axios";

const BASE_URL = "https://finnhub.io/api/v1";
const KEY = process.env.REACT_APP_KEY;

const getStockData = (stock) => {
  return axios
    .get(`${BASE_URL}/quote?symbol=${stock}&token=${KEY}`)
    .catch((error) => {
      console.error("Error", error.message);
    });
};

let testData = [];

function WatchList() {
  const [stocksData, setStocksData] = useState([]);

  useEffect(() => {
    const stocksList = [
      "AAPL",
      "MSFT",
      "TSLA",
      "FB",
      "BABA",
      "UBER",
      "DIS",
      "SBUX",
    ];

    let promises = [];

    stocksList.forEach((stock) => {
      promises.push(
        getStockData(stock).then((res) => {
          testData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      console.log(testData);
      setStocksData(testData);
    });
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col max-w-sm min-w-[300px]">
      <div className="flex justify-between items-center px-4 pt-4 pb-2 border-b-2 border-gray-400">
        <p>Stocks</p>
        <MoreHorizIcon />
      </div>

      {stocksData.map((props, i) => (
        <WatchListItem key={i} props={props} />
      ))}
    </div>
  );
}

export default WatchList;
