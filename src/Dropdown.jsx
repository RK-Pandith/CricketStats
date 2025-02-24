import React, { useState, useEffect } from "react";

function Dropdown({ onSelectionChange }) {
  const years = [2022, 2023];
  const categories = ["ODI", "T20"];
  const matches = {
    "2022": {
      ODI: ["IND vs SL", "IND vs AUS"],
      T20: ["IND vs ENG", "IND vs NZ"],
    },
    "2023": {
      ODI: ["IND vs PAK", "IND vs AFG"],
      T20: ["IND vs SA", "IND vs WI"],
    },
  };

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMatch, setSelectedMatch] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleYearChange = (e) => {
    const year = e.target.value;
    setSelectedYear(year);
    setSelectedCategory("");
    setSelectedMatch("");
    setCountries([]);
    setSelectedCountry("");
    onSelectionChange(year, "", "", "");
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSelectedMatch("");
    setCountries([]);
    setSelectedCountry("");
    onSelectionChange(selectedYear, category, "", "");
  };

  const handleMatchChange = (e) => {
    const match = e.target.value;
    setSelectedMatch(match);
    const teams = match ? match.split(" vs ") : [];
    setCountries(teams);
    setSelectedCountry("");
    onSelectionChange(selectedYear, selectedCategory, match, "");
  };

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    onSelectionChange(selectedYear, selectedCategory, selectedMatch, country);
  };

  // Debugging log
  useEffect(() => {
    if (selectedYear && selectedCategory && selectedMatch && selectedCountry) {
      console.log("Selections:", {
        Year: selectedYear,
        Category: selectedCategory,
        Match: selectedMatch,
        Country: selectedCountry,
      });
    }
  }, [selectedYear, selectedCategory, selectedMatch, selectedCountry]);

  // Stylish container for the dropdowns
  const containerStyle = {
    padding: "10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
    margin: "20px auto",
    maxWidth: "100%"
  };

  // Stylish label
  const labelStyle = {
    fontWeight: "bold",
    color: "#333",
    marginRight: "8px"
  };

  // Stylish select element
  const selectStyle = {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    fontSize: "16px",
    minWidth: "140px",
    outline: "none",
    transition: "border-color 0.3s"
  };

  return (
    <div style={containerStyle}>
      <div>
        <label htmlFor="year-select" style={labelStyle}>Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          style={selectStyle}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="category-select" style={labelStyle}>Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={handleCategoryChange}
          disabled={!selectedYear}
          style={selectStyle}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="match-select" style={labelStyle}>Match:</label>
        <select
          id="match-select"
          value={selectedMatch}
          onChange={handleMatchChange}
          disabled={!selectedCategory}
          style={selectStyle}
        >
          <option value="">Select Match</option>
          {selectedCategory &&
            matches[selectedYear]?.[selectedCategory]?.map((match) => (
              <option key={match} value={match}>
                {match}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label htmlFor="country-select" style={labelStyle}>Country:</label>
        <select
          id="country-select"
          value={selectedCountry}
          onChange={handleCountryChange}
          disabled={countries.length === 0}
          style={selectStyle}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
