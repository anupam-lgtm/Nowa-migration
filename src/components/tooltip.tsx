import { useState } from "react";

export function DynamicTooltip({ content, children }) {
  const [isVisible, setIsVisible] = useState(false);
  if (!content) {
    return children;
  }
  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
      >
        {children}
      </button>

      {isVisible && (
        <div
          role="tooltip"
          className="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-100 tooltip dark:bg-gray-700"
          style={{
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "0.5rem",
          }}
        >
          {content}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900 dark:border-b-gray-700"></div>
        </div>
      )}
    </div>
  );
}
