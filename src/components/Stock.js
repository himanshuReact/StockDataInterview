import React, { useState } from "react";
import StockData, { stockData } from "../StockData";
import "../styles.css";

const Stock = () => {
  const StockDataFirst = stockData[0];
  const renderHeaders = () => {
    return (
      <tr>
        {Object.keys(StockDataFirst).map((headerData) => (
          <td>{headerData}</td>
        ))}
      </tr>
    );
  };

  const renderDetails = () => {
    return stockData.map((stock) => (
      <tr className="render__details">
        {Object.keys(stock).map((stockKey) => (
          <td>{stock[stockKey]}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <table>
        {renderHeaders()}
        {renderDetails()}
      </table>
    </div>
  );
};

export default Stock;
