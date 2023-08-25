import Tooltip from "./Tooltip";
import TooltipForm from "./TooltipForm";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tooltipData, setTooltipData] = useState({
    "Button 1": {
      tooltipText: "Tooltip for button 1 goes here.",
      textSize: "3",
      color: "white",
      backgroundColor: "black",
      padding: 10,
      cornerRadius: 8,
      tooltipWidth: "200px",
      arrowWidth: 20,
      arrowHeight: 10,
    },
    "Button 2": {
      tooltipText: "Tooltip for button 2 goes here.",
      textSize: "3",
      color: "white",
      backgroundColor: "black",
      padding: 10,
      cornerRadius: 8,
      tooltipWidth: "200px",
      arrowWidth: 20,
      arrowHeight: 10,
    },
    "Button 3": {
      tooltipText: "Tooltip for button 3 goes here.",
      textSize: "3",
      color: "white",
      backgroundColor: "black",
      padding: 10,
      cornerRadius: 8,
      tooltipWidth: "200px",
      arrowWidth: 20,
      arrowHeight: 10,
    },
    "Button 4": {
      tooltipText: "Tooltip for button 4 goes here.",
      textSize: "3",
      color: "white",
      backgroundColor: "black",
      padding: 10,
      cornerRadius: 8,
      tooltipWidth: "200px",
      arrowWidth: 20,
      arrowHeight: 10,
    },
    "Button 5": {
      tooltipText: "Tooltip for button 5 goes here.",
      textSize: "3",
      color: "white",
      backgroundColor: "black",
      padding: 10,
      cornerRadius: 8,
      tooltipWidth: "200px",
      arrowWidth: 20,
      arrowHeight: 10,
    },
  });

  const buttons = Object.keys(tooltipData);

  const handleTooltipSubmit = (selectedButton, newTooltipData) => {
    setTooltipData((prevTooltipData) => ({
      ...prevTooltipData,
      [selectedButton]: newTooltipData,
    }));
  };

  return (
    <div className="App">
      <h1>Tooltip App</h1>
      <div className="flex-container">
        <TooltipForm buttons={buttons} onSubmit={handleTooltipSubmit} />
        <div className="container">
          <div className="outer-box">
            <div className="mobile-container">
              <div className="top-left">
                <Tooltip
                  target={
                    <button className="mobile-button">{buttons[0]}</button>
                  }
                  {...tooltipData[buttons[0]]}
                  text={tooltipData[buttons[0]].tooltipText}
                />
              </div>
              <div className="top-right">
                <Tooltip
                  target={
                    <button className="mobile-button">{buttons[1]}</button>
                  }
                  {...tooltipData[buttons[1]]}
                  text={tooltipData[buttons[1]].tooltipText}
                />
              </div>
              <div className="center">
                <Tooltip
                  target={
                    <button className="mobile-button">{buttons[2]}</button>
                  }
                  {...tooltipData[buttons[2]]}
                  text={tooltipData[buttons[2]].tooltipText}
                />
              </div>
              <div className="bottom-left">
                <Tooltip
                  target={
                    <button className="mobile-button">{buttons[3]}</button>
                  }
                  {...tooltipData[buttons[3]]}
                  text={tooltipData[buttons[3]].tooltipText}
                />
              </div>
              <div className="bottom-right">
                <Tooltip
                  target={
                    <button className="mobile-button">{buttons[4]}</button>
                  }
                  {...tooltipData[buttons[4]]}
                  text={tooltipData[buttons[4]].tooltipText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
