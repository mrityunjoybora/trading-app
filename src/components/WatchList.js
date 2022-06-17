import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import WatchListItem from "./WatchListItem.";
import axios from "axios";
import { setStockData } from "../store/slices/stock";
import { useDispatch, useSelector } from "react-redux";


const BASE_URL = "https://finnhub.io/api/v1";
const KEY = process.env.REACT_APP_KEY;

const getStockData = (stock) => {
  return axios
    .get(`${BASE_URL}/quote?symbol=${stock}&token=${KEY}`)
    .catch((error) => {
      console.error("Error", error.message);
    });
};

const stocksList = ["AAPL", "MSFT", "TSLA", "FB", "SBUX"];

let testData = [];

function WatchList() {

  const selectedStockData = useSelector((state) => state.selectedStock.stockData);


  const dispatch = useDispatch();

  const [stocksData, setStocksData] = useState([]);

   

  useEffect(() => {
    
   

    let promises = [];
    testData = [];

    stocksList.forEach((stock,i) => {
      console.log("i",i)
      promises.push(
        getStockData(stock).then((res) => {
          testData[i]={
            name: stock,
            ...res.data,
          };
        })
      );
    });

    Promise.all(promises).then(() => {
      console.log(testData);
      setStocksData(testData);

      dispatch(setStockData(testData[0]));
    });
  }, []);

  return (
    <div className="bg-gray-200 flex flex-col max-w-sm min-w-[300px]">
      <div className="flex justify-between items-center px-4 pt-4 pb-2 border-b-2 border-gray-400">
        <p>Stocks</p>
        <MoreHorizIcon />
      </div>

      {stocksData.map((data, i) => (
        <WatchListItem
          key={i}
          data={data}
          isSelected={selectedStockData?.name === data.name}
        />
      ))}
    </div>
  );
}

export default WatchList;
