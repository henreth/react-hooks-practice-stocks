import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,onClickStock,sturl}) {
  let stocksToDisplay=stocks.map((stock)=>{
    return <Stock
      key={stock.id}
      stock={stock}
      sturl={sturl}
      onClickStock={onClickStock}
      />
  })
  return (
    <div className="list-group-left">
      <h2>Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
