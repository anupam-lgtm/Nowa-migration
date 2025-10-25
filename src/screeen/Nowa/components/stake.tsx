import { CircleCheck, Clock8, TrendingUp } from "lucide-react";

import logo from "../../../assets/today-win.svg";

export const Stake = ({
  data,
  apy,
  walletData,
}: {
  data?: any;
  apy?: any;
  walletData?: any;
}) => {
  return (
    <div className="bg-[#0F100F]  flex flex-col md:flex-row justify-between items-center w-[90%] 2xl:w-[50%]  px-8 py-8  rounded-3xl md:gap-0 gap-8">
      <div className="bg-[#4AFFB11A] py-3 px-4 rounded-3xl flex justify-center items-center flex-col gap-2">
        <div className="flex gap-2">
          <TrendingUp color="#00FFA9" />
          <p className="text-[#9CA3AF]">APY</p>
        </div>
        <p className="text-[#00FFA9] text-3xl font-bold">{apy}%</p>
      </div>
      {data?.map((item) => {
        return (
          <div className=" flex w-full items-center justify-between md:flex-col md:justify-center md:gap-7">
            <p className="text-[#9CA3AF] text-sm font-semibold  md:text-left">
              {item?.name}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-white font-bold text-4xl">{item?.amount}</p>
              <img src={item?.icon} width={40} alt={item?.name || "icon"} />
            </div>
          </div>
        );
      })}

      <button
        type="button"
        className="lg:ml-30 text-white bg-[#00FFA980] font-medium rounded-[16px] text-lg px-15 py-1.5 me-2 mb-2 "
      >
        Claim
      </button>
    </div>
  );
};

export const StakeSuccessCard = ({
  stakeAmount,
  userInfoData,
}: {
  stakeAmount?: any;
  userInfoData?: any;
}) => {
  return (
    <div className="bg-[#00FFA91A]  p-4 rounded-2xl space-y-2">
      <div className="flex justify-center items-center gap-2">
        <CircleCheck size={25} color="#00FFA9" />
        <p className="text-[#00FFA9] text-lg font-bold">Staked Successfully!</p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <Clock8 size={20} color="#00FFA9" />
        <p className="text-sm text-[#00FFA9]">
          {userInfoData > 0
            ? "You Nowa has been Tranferred"
            : " Check back in 24 hours for your NOWA balance"}
        </p>
      </div>

      <div className="flex justify-center items-center gap-2">
        <p className="font-semibold">Staked:</p>
        <p className="font-bold text-[#00FFA9]"> {stakeAmount}</p>

        <img src={logo} width={25} alt={"icon"} />
      </div>
    </div>
  );
};
