import React from "react";

const BitcoinPrediction = ({ item }) => {
  return (
    <div className="border border-gray-00 text-gray-600 p-6 rounded-lg max-w-6xl mx-auto font-mono">
      <div className="flex justify-between items-center mb-0">
        <div className="flex items-center">
          {/* <span className="text-yellow-400 text-xl mr-2">@</span> */}
          <h1 className="text-xl font-bold text-gray-200">{item}</h1>
          {/* <span className="text-gray-500 ml-2">©</span> */}
        </div>
        <div className="text-gray-200">Thaesnom</div>
      </div>

      <h2 className="text-gray-200 text-lg font-semibold mb-4">PREDICTION ACCURACY</h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 place-items-center">
        {[1, 1, 1, 1,1]?.map((_) => {
          return <PriceCard />;
        })}
      </div>
    </div>
  );
};

export default BitcoinPrediction;

const PriceCard = () => {
  return (
    <div className="bg-gray-900 text-gray-200 p-4 rounded-lg w-45 border border-gray-700 font-mono ">
      {/* Time Slot */}
      <div className="text-center text-sm text-gray-200 mb-3">
        5:30 AM - 6:30 AM
      </div>

      <div className="flex flex-col items-center mb-3">
        <div className="text-2xl font-bold text-green-400">7</div>
        <div className="text-green-400 text-sm">Up</div>
      </div>

      <div className="text-center text-green-400 text-sm mb-4">Correct!</div>

      <div className="border-t border-gray-700 mb-3"></div>

      <div className="text-center">
        <div className="text-xs text-gray-400 mb-1">REFERENCE PRICE</div>
        <div className="text-lg font-semibold">$113,256.10</div>
      </div>
    </div>
  );
};
