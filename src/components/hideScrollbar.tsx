import React from "react";
const HideScrollBar = ({ children, direction = "y", className = "" }) => {
  let overflowClasses = "";

  switch (direction) {
    case "x":
      overflowClasses = "overflow-x-auto overflow-y-hidden";
      break;
    case "y":
      overflowClasses = "overflow-y-auto overflow-x-hidden";
      break;
    case "both":
      overflowClasses = "overflow-auto";
      break;
    default:
      overflowClasses = "overflow-y-auto overflow-x-hidden";
  }

  return (
    <div
      className={`${overflowClasses} ${className}`}
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <div
        style={{
          display: "inline-block",
          minWidth: "100%",
        }}
      >
        {children}
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HideScrollBar;
