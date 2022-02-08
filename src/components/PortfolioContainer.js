import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,onClickStock,sturl}) {
  let stocksToDisplay=stocks.map((stock)=>{
    return <Stock
      key={stock.id}
      stock={stock}
      sturl={sturl}
      onClickStock={onClickStock}
      />
  })

  return (
    <div className="list-group-right">
      <h2>My Portfolio</h2>
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
