import React from "react";

function Stock({stock,onClickStock,sturl}) {

  function handleClick(){
    fetch(`${sturl}/${stock.id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inPortfolio:!stock.inPortfolio
      })
    })
    .then(r=>r.json())
    .then((updatedStock=>onClickStock(updatedStock)));
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body" >
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
