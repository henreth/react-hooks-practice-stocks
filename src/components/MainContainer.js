import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const sturl = 'http://localhost:3001/stocks'

function MainContainer() {
  let [stocks,setStocks] = useState([]);

  useEffect(()=>{
    fetch(sturl)
    .then(r=>r.json())
    .then(stockItems=>setStocks(stockItems));
  }, [])

  function handleUpdateStock(updatedStock) {
    const updatedStocks = stocks.map((stock) => {
      if (stock.id === updatedStock.id) {
        return updatedStock;
      } else {
        return stock;
      }
    });
    setStocks(updatedStocks);
  }

  let [category,setCategory]= useState('all');

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  let [sort,setSort]= useState('all');

  function handleSortChange(event){
    setSort(event.target.value)
  }
  
  let filteredStocks = stocks.filter((stock)=>{
    return stock.type===category || category ==='all'
  }).sort((stock1,stock2)=>{
    if (sort ==='all') {
      return true
    } else if (sort ==='Alphabetically') {
      return stock1.name.localeCompare(stock2.name);
    } else if (sort==='Price'){
      return stock2.price - stock1.price;
    }
  })

  let portfolioStocks = filteredStocks.filter((stock)=>stock.inPortfolio ===true);

  return (
    <div className="list-container">
      <SearchBar 
        onSortChange={handleSortChange}
        onCategoryChange={handleCategoryChange}
        />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks}
            sturl={sturl}
            onClickStock={handleUpdateStock}
            />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            stocks={portfolioStocks}
            sturl={sturl}
            onClickStock={handleUpdateStock}
            />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
