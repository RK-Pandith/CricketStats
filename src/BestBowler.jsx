import React from "react";
import squads from "./squads.jsx";

const BestBowler = ({ year, category, match, country }) => {
    const players = squads[year]?.[category]?.[match]?.[country] || [];

    console.log("Players List:", players); // Debugging line

    const bestBowler =
        players.length > 0
            ? players.reduce((prev, curr) =>
                  curr.wickets > prev.wickets ? curr : prev
              , players[0])
            : null;

    if (!bestBowler) {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                No player data available for the selected criteria.
            </div>
        );
    }

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
                Best Bowler for {country} in {match}
            </h2>
            <div style={infoStyle}>
                {bestBowler.name} - {bestBowler.wickets} wickets in {bestBowler.balls} balls.
            </div>
        </div>
    );
};

export default BestBowler;
