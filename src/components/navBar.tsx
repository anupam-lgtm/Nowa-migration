import { useNavigate } from "react-router-dom";
import Logo from "../assets/newLogo.svg";
import { WalletIcon } from "lucide-react";
import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";


const navBar = [
  // { lable: "Home", icon: "", routeName: "" },
  // { lable: "Market", icon: "", routeName: "/market" },
  // { lable: "Staking", icon: "", routeName: "" },
  // { lable: "Get Airdrop", icon: "", routeName: "" },
  // { lable: "Dashboard", icon: "", routeName: "/dashboard" },
  {
    lable: "Connect Wallet",
    icon: <WalletIcon color="white" />,
    routeName: "",
  },
];

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-[#0e1318] z-200">
      <div className="flex justify-between  lg:px-5 xl:px-17 2xl:px-32 items-center mx-auto p-4">
        <div>
          <img src={Logo} className="w-25 md:w-35" />
        </div>
        <div className="lg:block hidden ">
          <ul className="gap-1 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
            {navBar?.map((item, i) => {
              return (
                // <li
                //   key={i}
                //   className={`${
                //     item?.lable === "Connect Wallet"
                //       ? "bg-[#161d26] px-7 py-3 rounded-[20px] flex items-center gap-2"
                //       : "flex items-center"
                //   }`}
                //   onClick={() => navigate(`${item.routeName}`)}
                // >
                //   <p>{item?.icon}</p>
                //   <a
                //     href="#"
                //     className="text-[16px] block py-2 px-3 text-white font-normal  rounded-sm md:bg-transparent md:text-white md:p-0 md:dark:text-white"
                //     aria-current="page"
                //   >
                //     {item?.lable}
                //   </a>
                // </li>
                <>
                  {item?.lable === "Connect Wallet" && (
                    <ConnectButton.Custom>
                      {({
                        account,
                        chain,
                        openAccountModal,
                        openChainModal,
                        openConnectModal,
                        mounted,
                      }) => {
                        return (
                          <div key={i + 1}>
                            {(() => {
                              if (!mounted || !account || !chain) {
                                return (
                                  <div
                                    onClick={openConnectModal}
                                    className="bg-[#161d26] cursor-pointer px-7 py-3 text-white rounded-[20px] gap-2 flex justify-center items-center"
                                  >
                                    <WalletIcon color="white" />

                                    <button className="cursor-pointer">
                                      Connect Wallet
                                    </button>
                                  </div>
                                );
                              }

                              return (
                                <div className="flex gap-2">
                                  <button
                                    onClick={openChainModal}
                                    className="cursor-pointer bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg"
                                  >
                                    {chain.name}
                                  </button>

                                  <div
                                    className={`cursor-pointer flex bg-gray-800 hover:bg-gray-700 justify-center px-3 rounded-lg`}
                                  >
                                    <img
                                      src={chain.iconUrl}
                                      className="object-contain"
                                    />
                                    <button
                                      onClick={openAccountModal}
                                      className="  cursor-pointer text-white font-medium py-2 px-4 "
                                    >
                                      {account.displayName}
                                      {account.displayBalance &&
                                        ` (${account.displayBalance})`}
                                    </button>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        );
                      }}
                    </ConnectButton.Custom>
                  )}
                  {/* <ConnectButton showBalance={true} /> */}
                </>
              );
            })}
          </ul>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsModalOpen(true)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                   lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 
                   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-language"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl w-[90%] max-w-sm text-white"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Connect Wallet</h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    mounted,
                  }) => {
                    const ready = mounted;
                    const connected = ready && account && chain;

                    if (!connected) {
                      return (
                        <div
                          onClick={openConnectModal}
                          className="bg-[#161d26] cursor-pointer px-7 py-3 text-white rounded-[20px] gap-2 flex justify-center items-center"
                        >
                          <WalletIcon size={18} />
                          <span>Connect Wallet</span>
                        </div>
                      );
                    }

                    return (
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={openChainModal}
                          className="bg-[#161d26]  hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
                        >
                          {chain.name}
                        </button>

                        <div
                          className={`flex bg-[#161d26]  justify-center px-3 rounded-lg`}
                        >
                          <img src={chain.iconUrl} className="object-contain" />
                          <button
                            onClick={openAccountModal}
                            className=" text-white font-medium py-2 px-4 "
                          >
                            {account.displayName}
                            {account.displayBalance &&
                              ` (${account.displayBalance})`}
                          </button>
                        </div>
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
