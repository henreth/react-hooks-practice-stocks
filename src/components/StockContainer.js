import React from "react";
import Stock from "./Stock";

function StockContainer({stocks,onUpdateStock}) {
  let stocksToDisplay = stocks.map((stock)=>{
    return <Stock 
      key={stock.id}
      stock={stock}
      onUpdateStock={onUpdateStock}
      />
  })
  return (
    <div>
      <h2 className="list-group">Stocks</h2>
      {stocksToDisplay}
    </div>
  );
}

export default StockContainer;
