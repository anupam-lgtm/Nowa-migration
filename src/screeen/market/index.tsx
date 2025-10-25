import { ChevronDown, ChevronUp, SearchIcon } from "lucide-react";
import HideScrollBar from "../../components/hideScrollbar";
import useCoinListSocket from "../../hooks/cmcCoins";
import { formatCurrency } from "../../utils";
import { useState } from "react";

const MarketPage = () => {
  const [searchText, setSearchText] = useState("");
  const { coinList } = useCoinListSocket(searchText);
  return (
    <div className="p-5 lg:px-5 xl:px-17 2xl:px-32 w-full min-h-screen mx-auto bg-newCard pt-25">
      <div className="mb-5 flex flex-col lg:flex-row justify-between items-center w-full gap-3 lg:gap-0">
        <div>
          <h1 className="text-2xl md:text-lg font-bold text-white">
            Cryptocurrency Prices
          </h1>
          <p className="text-[#919699] text-[12px]">Updated 1 minute ago</p>
        </div>

        <div className="relative">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search"
            className="bg-subcard text-white pl-11 pr-3 py-2 md:py-3.5 rounded-[20px] placeholder:text-gray-400"
          />
          <SearchIcon
            className="absolute left-3 top-3  md:top-3.5 text-white"
            size={20}
          />
        </div>
      </div>
      <HideScrollBar
        direction="both"
        className="border rounded-[12px] md:max-h-160"
      >
        <table className="min-w-full  divide-y  ">
          <thead className="sticky top-0 bg-transparent">
            <tr className="font-medium text-white bg-newCard">
              <th
                scope="col"
                className="w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                Coin
              </th>
              <th
                scope="col"
                className="w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                24h %
              </th>

              <th
                scope="col"
                className="w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                7d %
              </th>
              <th
                scope="col"
                className="w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                Market Cap
              </th>

              <th
                scope="col"
                className=" w-80 px-4 py-3 text-left text-xs font-semibold  tracking-wider"
              >
                Volume(24h)
              </th>
            </tr>
          </thead>
          <tbody className="text-white  bg-transparent">
            {coinList?.map((asset, index) => (
              <tr key={index}>
                <td className="px-4 py-3 whitespace-nowrap ">
                  <div className="flex items-center md:gap-2">
                    <p className="text-secondText text-[12px]">{index + 1}</p>
                    <img
                      width={35}
                      className="rounded-full"
                      src={asset?.icon}
                    />
                    <div className="ml-0">
                      <div className="flex justify-center flex-row gap-4">
                        <p className="px-8 text-sm font-medium ">
                          {asset.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm  font-medium">
                  {formatCurrency({
                    amount: asset.usdt_markup_price ?? 0,
                    currencyType: "USDT",
                    decimalPlaces: asset?.decimal_places ?? 0,
                  })}
                  {/* {asset.usdt_markup_price ?? 0} */}
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm ${
                    asset.direction == "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {/* {formatCurrency({
                    amount: asset.price_change_percentage_1h ?? 0,
                  })} */}
                  {/* {asset.price_change_percentage_1h ?? 0}% */}
                  <ButtonPer
                    text={formatCurrency({
                      amount: asset.price_change_percentage_1h ?? 0,
                      currencyType: "%",
                    })}
                    direction={asset.direction}
                  />
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm ${
                    asset.direction == "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  <ButtonPer
                    direction={asset.direction}
                    text={formatCurrency({
                      amount: asset.price_change_percentage_1h ?? 0,
                      currencyType: "%",
                    })}
                  />
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm ${
                    asset.direction == "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatCurrency({
                    amount: asset.price_change_percentage_1h ?? 0,
                    currencyType: "",
                  })}
                </td>
                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm ${
                    asset.direction == "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatCurrency({
                    amount: asset.price_change_percentage_1h ?? 0,
                  })}
                </td>

                <td
                  className={`px-4 py-3 whitespace-nowrap text-sm ${
                    asset.direction == "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {formatCurrency({
                    amount: asset.price_change_percentage_1h ?? 0,
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HideScrollBar>
    </div>
  );
};

export default MarketPage;

const ButtonPer = ({ text, direction }) => {
  return (
    <div className="flex justify-start items-center ">
      <div
        className={` min-w-20 border ${
          direction === "up" ? "border-up" : "border-down"
        }  flex justify-center items-center rounded-[12px]  p-1.5 gap-1`}
      >
        {direction === "up" ? (
          <ChevronUp size={12} />
        ) : (
          <ChevronDown size={12} />
        )}
        <p
          className={`${
            direction === "up" ? "text-up" : "text-down"
          }  text-[14px]`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};
