import React, { useState } from "react";
import Dropdown from "./Dropdown";
import CricketStats from "./CricketStats";
import BestBatter from "./BestBatter";
import BestBowler from "./BestBowler";

function App() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMatch, setSelectedMatch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectionChange = (year, category, match, country) => {
    setSelectedYear(year);
    setSelectedCategory(category);
    setSelectedMatch(match);
    setSelectedCountry(country);
  };

  return (
    <div>
      <h1 style={{fontFamily:"cursive",color:"#3498db",textAlign:"center",}}>CricketStats</h1>
      <Dropdown onSelectionChange={handleSelectionChange} />
      {selectedCountry && (
  <>
    <CricketStats 
      year={selectedYear} 
      category={selectedCategory} 
      match={selectedMatch} 
      country={selectedCountry} 
    />
    <BestBatter 
            year={selectedYear} 
            category={selectedCategory} 
            match={selectedMatch} 
            country={selectedCountry} 
          />
    <BestBowler 
            year={selectedYear} 
            category={selectedCategory} 
            match={selectedMatch} 
            country={selectedCountry} 
          />
  </>
)}
    </div>
  );
}

export default App;
