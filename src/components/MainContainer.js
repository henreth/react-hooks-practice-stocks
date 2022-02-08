import React, {useState,useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

const stocksURL = 'http://localhost:3001/stocks';

function MainContainer() {
  let [stocks,setStocks] = useState([]);
  
  useEffect(()=>{
    fetch(stocksURL)
    .then(r=>r.json())
    .then(stock=>setStocks(stock))
  },[])

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

  let [selectedCategory,setSelectedCategory] = useState('all');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let [sortBy,setSortBy] = useState('all');

	function handleSortClick(event) {
		setSortBy(event.target.value)
    console.log(sortBy)
	}


  let filteredStocks = stocks.filter((stock)=> {
    return stock.type===selectedCategory || selectedCategory==='all';
  }).sort((stock1, stock2) => {
		if (sortBy==='Price' ) {
		  return stock2.price - stock1.price;
		} else if (sortBy ==='Alphabetically') {
		  return stock1.name.localeCompare(stock2.name);
		} else if (sortBy=='all') {
      return true

    }
	})

  let portfolioStocks = filteredStocks.filter((stock)=>{
    return stock.inPortfolio===true;
  })


  return (
    <div>
      <SearchBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortClick}/>
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={filteredStocks} 
            onUpdateStock={handleUpdateStock} 
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={portfolioStocks}
            onUpdateStock={handleUpdateStock} 
            />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
