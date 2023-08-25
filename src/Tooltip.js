import React, { useState } from "react";
import "./App.css";

// Tooltip Component
const Tooltip = ({
  target,
  textSize,
  color,
  padding,
  backgroundColor,
  cornerRadius,
  tooltipWidth,
  text,
  arrowWidth,
  arrowHeight,
}) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const tooltipStyle = {
    position: "relative",
    display: "inline-block",
  };

  const arrowStyle = {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeft: `${arrowWidth / 2}px solid transparent`,
    borderRight: `${arrowWidth / 2}px solid transparent`,
    borderTop: `${arrowHeight}px solid ${backgroundColor || "#333"}`,
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const tooltipContentStyle = {
    position: "absolute",
    fontSize: textSize,
    top: "calc(100% + 10px)", // Adjust this value for proper spacing
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: backgroundColor || "#333",
    color: color || "white",
    padding: `${padding || 8}px`,
    borderRadius: `${cornerRadius || 4}px`,
    width: `${tooltipWidth || "auto"}`,
    zIndex: 100,
    opacity: visible ? 1 : 0,
    transition: "opacity 0.3s ease",
  };
  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tooltipStyle}
    >
      {target}
      {visible && (
        <div className="tooltip-content" style={tooltipContentStyle}>
          <div className="arrow" style={arrowStyle}></div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
