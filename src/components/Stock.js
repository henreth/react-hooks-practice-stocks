import React, {useState} from "react";

const stocksURL = 'http://localhost:3001/stocks';


function Stock({stock,onUpdateStock}) {

  function handleClick(){
    fetch(`${stocksURL}/${stock.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inPortfolio:!stock.inPortfolio
      }),
    })
      .then((r) => r.json())
      .then((updatedStock) => onUpdateStock(updatedStock));  
  }
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" onClick={handleClick} >{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
