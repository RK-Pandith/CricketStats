import React from "react";
import squads from "./squads.jsx";

const BestBatter = ({ year, category, match, country }) => {
  // Get the list of players for the selected criteria
  const players = squads[year]?.[category]?.[match]?.[country] || [];
  
  // Determine the best batter by highest runs
  const bestBatter =
    players.length > 0
      ? players.reduce((prev, curr) => (curr.runs > prev.runs ? curr : prev), players[0])
      : null;
  
  if (!bestBatter) {
    return <div style={{ textAlign: "center", marginTop: "20px" }}>No player data available for the selected criteria.</div>;
  }
  
  // Styling for the best batter card
  const cardStyle = {
    margin: "20px auto",
    maxWidth: "600px",
    padding: "20px",
    backgroundColor: "#ecf0f1",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };
  
  const headingStyle = {
    color: "#2c3e50",
    marginBottom: "10px"
  };
  
  const infoStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#34495e"
  };
  
  return (
    <div style={cardStyle}>
      <h2 style={headingStyle}>
        Best Batter for {country} in {match}
      </h2>
      <div style={infoStyle}>
        {bestBatter.name} - {bestBatter.runs} runs in {bestBatter.balls} balls.
      </div>
    </div>
  );
};

export default BestBatter;
