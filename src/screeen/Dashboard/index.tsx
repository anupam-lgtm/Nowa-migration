import {
  ChevronUp,
  Clock,
  Clock9,
  SearchIcon,
  Tag,
  TimerIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCoinListSocket from "../../hooks/cmcCoins";
import { useState } from "react";
import useOHLCGraphData from "../../hooks/chartData";
import { processChartData } from "../../hooks/processChart";
import LightweightChartsRealtime from "./component/chart";
import { Surface } from "../../components/surface";
import StylesInput from "../../components/inputField";
import Button from "../../components/button";
import HideScrollBar from "../../components/hideScrollbar";
import TodayWinIcon from "../../assets/today-win.svg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [activePeriod, setActivePeriod] = useState("hour");
  const [search, setSearch] = useState("");
  const [symbol, setSymbol] = useState("UNI");
  const {
    ohlcData: chartData,
    loading,
    error,
  } = useOHLCGraphData({
    symbol: symbol.symbol || "BTC",
    filterinterval: activePeriod || "year",
    type: "buy",
  });
  const { initialData } = processChartData(chartData);
  const { coinList } = useCoinListSocket(search);

  return (
    <Surface>
      <div className="p-5 lg:px-5 xl:px-17 2xl:px-32  space-y-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr_1fr] gap-6 xl:gap-5">
          <div className="lg:col-span-1 space-y-4">
            <div className="text-left gap-5 flex flex-col items-start bg-background p-6 lg:p-8 xl:p-10 text-white rounded-[25px]">
              <span className="text-sm md:text-base">Current Balance</span>
              <span className="font-semibold text-lg md:text-xl xl:text-2xl">
                5,750,20 NOWA
              </span>
            </div>
            <StylesInput
              setSearch={setSearch}
              isCross={true}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              isValid={false}
              placeholder="Search asset.."
              leftIcon={<SearchIcon color="white" />}
            />
            {/* <div className="cus-scroll bg-background rounded-[25px] shadow-md overflow-y-auto">
              <div className="p-4 md:p-6">
                <HideScrollBar
                  direction="y"
                  className="max-h-[500px] p-4 min-h-[500px]"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="text-white sticky top-0 bg-background">
                        <tr className="text-left border-b border-[#242D3999]">
                          <th className="pb-3 font-medium text-white text-xs md:text-[12px]">
                            Asset
                          </th>
                          <th className="pb-3 font-medium text-white text-xs md:text-[12px]">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {coinList?.map((item, index) => (
                          <tr
                            onClick={() => setSymbol(item)}
                            key={index}
                            className="text-white cursor-pointer last:border-0"
                          >
                            <td className="py-3.5 whitespace-nowrap">
                              <div className="flex items-center gap-2 md:gap-3">
                                <img
                                  width={30}
                                  height={30}
                                  className="rounded-full w-6 h-6 md:w-8 md:h-8"
                                  src={item?.icon}
                                  alt={item.name}
                                />
                                <div>
                                  <p className="text-xs md:text-sm font-semibold">
                                    {item.name}
                                  </p>
                                  <p className="text-secondText font-normal text-[10px] md:text-[12px]">
                                    {item.symbol}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 font-medium text-white text-xs md:text-sm">
                              <p>{Number(item.usdt_markup_price).toFixed(5)}</p>
                              <p
                                className={`${
                                  item.direction == "up"
                                    ? "text-up"
                                    : "text-Down"
                                }`}
                              >
                                3.36%
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </HideScrollBar>
              </div>
            </div> */}

            <div className="cus-scroll bg-background rounded-[25px] shadow-md overflow-hidden">
              <div className="p-4 md:p-6">
                <HideScrollBar
                  direction="y"
                  className="max-h-[589px] min-h-[495px] overflow-y-auto"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="text-white sticky top-0 bg-background z-10">
                        <tr className="text-left border-b border-[#242D3999]">
                          <th className="pb-3 font-medium text-xs md:text-sm">
                            Asset
                          </th>
                          <th className="pb-3 font-medium text-xs md:text-sm">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {coinList?.map((item, index) => (
                          <tr
                            onClick={() => setSymbol(item)}
                            key={index}
                            className="text-white cursor-pointer border-b border-[#242D3999] last:border-0"
                          >
                            <td className="py-3.5 whitespace-nowrap">
                              <div className="flex items-center gap-2 md:gap-3">
                                <img
                                  className="rounded-full w-6 h-6 md:w-8 md:h-8"
                                  src={item?.icon}
                                  alt={item.name}
                                />
                                <div>
                                  <p className="text-xs md:text-sm font-semibold">
                                    {item.name}
                                  </p>
                                  <p className="text-secondText font-normal text-[10px] md:text-xs">
                                    {item.symbol}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 font-medium text-xs md:text-sm">
                              <p>{Number(item.usdt_markup_price).toFixed(5)}</p>
                              <p
                                className={`${
                                  item.direction === "up"
                                    ? "text-up"
                                    : "text-Down"
                                }`}
                              >
                                3.36%
                              </p>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </HideScrollBar>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 xl:col-span-1 flex flex-col gap-4 lg:gap-15">
            <div className="flex justify-between items-center pt-15">
              <div className="flex gap-2 items-center">
                <img
                  src={symbol?.icon}
                  alt="BTC"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                />
                <div>
                  <p className="text-white font-semibold text-xl md:text-2xl">
                    {symbol.symbol}/USDT
                  </p>
                  <p className="text-secondText text-sm md:text-[16px]">
                    {symbol.name}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-white font-semibold text-xl md:text-2xl">
                  ${Number(symbol?.usdt_markup_price)?.toFixed(4)}
                </p>
                <div className="border border-up rounded-[10px] px-2 py-0.5">
                  <p className="text-up text-xs">3.36%</p>
                </div>
              </div>
            </div>

            <div className="flex-grow min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
              <LightweightChartsRealtime
                activePeriod={activePeriod}
                symbol={symbol}
                setActivePeriod={setActivePeriod}
                chartData={initialData}
                loading={loading}
              />
            </div>
          </div>

          <div className="lg:col-span-1 space-y-3 md:space-y-4">
            <div>
              {[1].map((item) => (
                <div
                  key={item}
                  className="bg-background p-5 md:p-7.5 rounded-[25px] space-y-6 flex justify-center items-center flex-col"
                >
                  <div className="text-white text-lg md:text-[18px] font-semibold flex justify-center items-center">
                    <p>Today’s Win</p>
                  </div>
                  {/* <div className="text-secondText text-xs md:text-[14px] font-medium flex justify-between">
                    <div className="flex items-center gap-1">
                      <Clock9 color="white" size={12} />
                      <p>Prediction Time</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock9 color="white" size={12} />
                      <p>Prediction Price</p>
                    </div>
                  </div>
                  <Button className="w-full">Beat the AI</Button> */}
                  <div className="bg-card p-1  w-48 rounded-[48px]">
                    <div className="flex items-center gap-2">
                      {" "}
                      <img src={TodayWinIcon} className="w-10 h-10" />
                      <p className="text-white text-lg">100.00 NOWA</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-background rounded-[25px] w-full text-white">
              {/* AI Prediction Section */}
              <div className="p-4 md:px-6 flex flex-col items-center gap-3 text-center">
                <p className="text-base md:text-lg font-semibold">
                  AI Prediction
                </p>
                {/* <div className="border border-Down w-1/3 md:w-1/4 text-center py-1 px-4 rounded-[12px]">
                  <p className="text-Down text-sm md:text-base">Bearish</p>
                </div> */}
              </div>

              {/* Time + Price Info */}
              <div className="p-4 md:px-6">
                <div className="flex justify-between text-base md:text-lg font-semibold">
                  <p>02:00 - 03:00</p>
                  <p>23,662.3</p>
                </div>
                <div className="text-secondText flex flex-col sm:flex-row justify-between mt-2 text-sm md:text-base gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Price</p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:px-6">
                <div className="flex justify-between text-base md:text-lg font-semibold">
                  <div>
                    <p>23,662.3 - 22,662.3</p>
                    <div className="text-secondText flex flex-row items-center gap-1.5">
                      <Tag size={12} />
                      <p className="text-sm">Prediction Price</p>
                    </div>
                  </div>
                  <div>
                    <div className="border border-Down flex  items-center gap-0.5  text-center py-1 px-2 rounded-[12px]">
                      <ChevronUp className="text-Down" size={12} />
                      <p className="text-Down text-sm md:text-base">Bearish</p>
                    </div>
                  </div>
                </div>
                {/* <div className="text-secondText flex flex-col sm:flex-row justify-between mt-2 text-sm md:text-base gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Price</p>
                  </div>
                </div> */}
              </div>

              <div className="h-px bg-secondText"></div>

              {/* Predict Section */}
              <div className="p-4 md:py-4 md:px-6 flex flex-col items-center gap-3">
                <p className="font-semibold text-base md:text-lg">Predict</p>
                <div className="flex justify-between w-full gap-30 px-10">
                  <div className="border border-Down w-1/2 text-center flex items-center gap-0.5 py-1 px-3 rounded-[12px]">
                    <ChevronUp className="text-Down" size={12} />
                    <p className="text-Down text-sm md:text-base">Bearish</p>
                  </div>
                  <div className="bg-up w-1/2 text-center flex items-center gap-0.5 py-1 px-3 rounded-[12px]">
                    <ChevronUp className="text-white" size={12} />
                    <p className="text-white text-sm md:text-base">Bullish</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 md:px-6 flex flex-col gap-2">
                <label className="text-secondText font-medium text-sm md:text-base">
                  Prediction Price
                </label>
                <StylesInput
                  isValid={false}
                  isShowLine={false}
                  bg="bg-subcard"
                  placeholder="Prediction Price"
                />
              </div>

              {/* Button */}
              <div className="p-4 md:px-6">
                <Button className="w-full">Beat the AI</Button>
              </div>
            </div>

            <div className="bg-background rounded-[25px] w-full text-white">
              <div className="p-4 md:px-6 flex flex-col items-center gap-3 text-center">
                <p className="text-base md:text-lg font-semibold">
                  AI Prediction
                </p>
                {/* <div className="border border-Down w-1/3 md:w-1/4 text-center py-1 px-4 rounded-[12px]">
                  <p className="text-Down text-sm md:text-base">Bearish</p>
                </div> */}
              </div>

              {/* Time + Price Info */}
              <div className="p-4 md:px-6">
                <div className="flex justify-between text-base md:text-lg font-semibold">
                  <p>02:00 - 03:00</p>
                  <p>23,662.3</p>
                </div>
                <div className="text-secondText flex flex-col sm:flex-row justify-between mt-2 text-sm md:text-base gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Price</p>
                  </div>
                </div>
              </div>

              <div className="h-px bg-secondText"></div>

              {/* Predict Section */}
              <div className="p-4 md:py-4 md:px-6 flex flex-col items-center gap-3">
                <p className="font-semibold text-base md:text-lg">Predict</p>
                <div className="flex justify-between w-full gap-30 px-10">
                  <div className="border border-Down w-1/2 text-center py-1 px-2 rounded-[12px]">
                    <p className="text-Down text-sm md:text-base">Bearish</p>
                  </div>
                  <div className="bg-up w-1/2 text-center py-1 px-2 rounded-[12px]">
                    <p className="text-white text-sm md:text-base">Bullish</p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="p-4 md:px-6 flex flex-col gap-2">
                <label className="text-secondText font-medium text-sm md:text-base">
                  Prediction Price
                </label>
                <StylesInput
                  isValid={false}
                  isShowLine={false}
                  bg="bg-subcard"
                  placeholder="Prediction Price"
                />
              </div>

              {/* Button */}
              <div className="p-4 md:px-6">
                <Button className="w-full">Beat the AI</Button>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-background rounded-[25px] w-full text-white">
              <div className="p-4 md:py-4 md:px-6 flex flex-col items-center gap-3">
                <p className="font-semibold text-base md:text-lg">Predict</p>
                <div className="flex px-10 justify-between w-full gap-30">
                  <div className="border border-Down w-1/2 text-center py-1 px-2 rounded-[12px]">
                    <p className="text-Down text-sm md:text-base">Bearish</p>
                  </div>
                  <div className="bg-UpContainer w-1/2 text-center py-1 px-2 rounded-[12px]">
                    <p className="text-up text-sm md:text-base">Winner</p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:px-6">
                <div className="flex justify-between text-base md:text-lg font-semibold">
                  <p>02:00 - 03:00</p>
                  <p>23,662.3</p>
                </div>
                <div className="text-secondText flex flex-col sm:flex-row justify-between mt-2 text-sm md:text-base gap-2 sm:gap-0">
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Time</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    <p>Prediction Price</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PredictionTableNew
          coinList={coinList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </Surface>
  );
};

export default Dashboard;

const users = [
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abh***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
  "abc***ail.com",
];

function PredictionTable() {
  return (
    <div className="bg-background p-4 md:p-6 rounded-2xl w-full  mx-auto text-white font-sans">
      <div className="flex justify-between items-center border-b border-[#1C2233]  space-y-4 px-2 text-sm text-white font-medium">
        <span>User</span>
        <span>Time</span>
        <span>Price</span>
      </div>
      <HideScrollBar direction="y" className="max-h-[470px] p-4 min-h-[470px]">
        <div className="py-3">
          {users.map((user, index) => {
            const isHighlighted = user.includes("abh");
            return (
              <div
                key={index}
                className={`flex justify-between items-center px-2 py-2 text-sm ${
                  isHighlighted ? "text-[#00FFBF] font-semibold" : "text-white"
                }`}
              >
                <span className={`${isHighlighted ? "text-[#00FFBF]" : ""}`}>
                  {user}
                </span>
                <span
                  className={`${
                    isHighlighted ? "text-[#00FFBF]" : "text-white"
                  }`}
                >
                  01:30
                </span>
                <span
                  className={`${
                    isHighlighted ? "text-[#00FFBF]" : "text-white"
                  }`}
                >
                  $38,755
                </span>
              </div>
            );
          })}
        </div>
      </HideScrollBar>
      <Button>Predict</Button>
    </div>
  );
}

const getResultClass = (status) => {
  switch (status?.toLowerCase()) {
    case "winner":
      return "bg-green-900 text-green-300";
    case "loser":
      return "bg-red-900 text-red-300";
    case "in progress":
      return "bg-[#F7931A26] text-[#FB774A]";
    default:
      return "";
  }
};

const PredictionTableNew = ({ coinList, selected, setSelected }) => {
  return (
    <div className="bg-background text-white rounded-[25px] p-4 w-full mx-auto ">
      <div className="flex md:flex-row flex-col items-center gap-4 justify-between mb-4">
        <div className="cursor-pointer flex flex-wrap gap-2 bg-subcard w-fit p-1 sm:p-2 rounded-2xl sm:rounded-[20px]">
          {["My Predictions", "Beat the AI"].map((item) => (
            <div
              key={item}
              onClick={() => setSelected(item)}
              className={`text-xs sm:text-sm md:text-base ${
                selected === item ? "bg-main text-black" : "text-white"
              } px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl md:rounded-[14px] transition-colors duration-200`}
            >
              <p className="whitespace-nowrap">{item}</p>
            </div>
          ))}
        </div>

        <div className="flex md:flex-row flex-col items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-subcard text-white pl-11 pr-3 py-2 md:py-3.5 rounded-[20px] placeholder:text-gray-400"
            />
            <SearchIcon
              className="absolute left-3 top-3  md:top-3.5 text-white"
              size={20}
            />
          </div>

          <div className="cursor-pointer flex flex-wrap gap-2 bg-subcard w-fit p-1 sm:p-2 rounded-2xl sm:rounded-[20px]">
            {["All", "Active", "Closed"].map((item) => (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`text-xs sm:text-sm md:text-base ${
                  selected === item ? "bg-main text-black" : "text-white"
                } px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 rounded-lg sm:rounded-xl md:rounded-[14px] transition-colors duration-200`}
              >
                <p className="whitespace-nowrap">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[600px]">
          {" "}
          <div className="grid grid-cols-5 text-sm px-5 text-white border-b border-[#242D3999] pb-2">
            <span>Asset</span>
            <span>Current Price</span>
            <span>Prediction Price</span>
            <span>Prediction Time</span>
            <span>Result</span>
          </div>
          {coinList?.slice(0, 5)?.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-5 text-white items-center text-sm py-3 px-5 transition border-b border-[#242D3999] last:border-0"
            >
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src={item?.icon}
                  alt={item?.name}
                />
                <div>
                  <div className="font-semibold text-white">{item?.name}</div>
                  <div className="text-xs text-gray-400">{item?.symbol}</div>
                </div>
              </div>
              <span>$38,755</span>
              <span>$38,755</span>
              <span>02:00</span>
              <span>
                <span
                  className={`text-sm px-4 py-2 rounded-[12px] font-medium ${getResultClass(
                    "in progress"
                  )}`}
                >
                  in progress
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
