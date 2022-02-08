import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stocks,onUpdateStock}) {
  let stocksToDisplay = stocks.map((stock)=>{
    return <Stock 
      key={stock.id}
      stock={stock}
      onUpdateStock={onUpdateStock}
      />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksToDisplay}
    </div>
  );
}

export default PortfolioContainer;
