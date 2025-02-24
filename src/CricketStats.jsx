import React from "react";
import squads from "./squads.jsx"; 

const CricketStats = ({ year, category, match, country }) => {
  // Retrieve players based on selected values
  const players = squads[year]?.[category]?.[match]?.[country] || [];
  console.log("Lookup:", { year, category, match, country, players });

  // Enhanced inline styles
  const containerStyle = {
    margin: "30px auto",
    maxWidth: "800px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50"
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse"
  };

  const thStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "12px 15px",
    border: "1px solid #ddd",
    textAlign: "center",
    fontSize: "16px"
  };

  const tdStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
    textAlign: "center",
    fontSize: "14px"
  };

  const rowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? "#ecf0f1" : "#bdc3c7"
  });

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        Player List for {match} ({country})
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Runs</th>
            <th style={thStyle}>Balls</th>
            <th style={thStyle}>Wickets</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index} style={rowStyle(index)}>
              <td style={tdStyle}>{player.name}</td>
              <td style={tdStyle}>{player.runs}</td>
              <td style={tdStyle}>{player.balls}</td>
              <td style={tdStyle}>{player.wickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CricketStats;
