import { ArrowRight } from "lucide-react";
import nowa from "../../../assets/nowa-coin.png";
import logo from "../../../assets/today-win.svg";
import Button from "../../../components/button";
import { StakeSuccessCard } from "./stake";

function exchangeTaralToNowa(taralAmount: any, rate = 1.8) {
  if (taralAmount <= 0) {
    return 0;
  }

  const nowaAmount = taralAmount * rate;
  return nowaAmount;
}

export const Converter = ({
  migrationType,
  userInfo,
  walletData,
  handleSubmit,
  btnLoader,
  userInfoData,
}: {
  migrationType?: string;
  userInfo?: any;
  walletData?: any;
  handleSubmit?: any;
  btnLoader?: boolean;
  userInfoData?: any;
}) => {
  return (
    <div className="bg-[#0F100F] w-[90%] 2xl:w-[50%] p-4 rounded-3xl space-y-5">
      <div className="flex justify-start gap-4 items-center">
        <div className="bg-[#4AFFB11A] rounded-2xl w-[60px] h-[60px] flex justify-center items-center">
          <img src={nowa} width={30} height={30} />
        </div>
        <div className="space-y-1">
          <p className="font-bold text-xl md:text-2xl">{migrationType}</p>
          <div className="bg-[#4AFFB11A] rounded-full p-1 gap-1 w-[60px] flex justify-center items-center">
            <div className="bg-emerald-400 w-1 h-1 rounded-full"></div>
            <p className="font-bold text-[12px] text-emerald-400">Active</p>
          </div>
        </div>
      </div>
      <div className="bg-[#030705] p-4 rounded-2xl">
        <div className="flex flex-col justify-start gap-3">
          <p className="text-[#9CA3AF] text-sm">Your Balance</p>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-3xl">{walletData?.remaining || 0}</p>
            <p className="text-[#9CA3AF] text-lg">{migrationType}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="bg-[#030705] p-4 rounded-2xl w-full md:w-[48%]">
          <div className="flex flex-col justify-start gap-4">
            <p className="text-[#9CA3AF] text-sm">Conversion</p>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-lg">1 : 1.8</p>
            </div>
          </div>
        </div>
        <ArrowRight color="#6B7280" />
        <div className="bg-[#00FFA91A] p-4 rounded-2xl w-full md:w-[48%]">
          <div className="flex flex-col justify-start gap-2">
            <p className="text-[#9CA3AF] text-sm">You Get</p>
            <div className="flex gap-2 items-center">
              <p className="font-bold text-3xl text-[#00FFA9] ">
                {Number(exchangeTaralToNowa(walletData?.remaining || 0))}
              </p>
              <img src={logo} width={30} alt={"icon"} />
            </div>
          </div>
        </div>
      </div>

      {walletData?.claimed == 0 && (
        <div className="w-full flex justify-center items-center">
          <Button
            disable={btnLoader || !walletData?.remaining}
            btnLoader={btnLoader}
            onClick={handleSubmit}
          >
            STAKE
          </Button>
        </div>
      )}

      {walletData?.claimed > 0 && (
        <StakeSuccessCard
          userInfoData={userInfoData}
          stakeAmount={walletData?.claimed}
        />
      )}
    </div>
  );
};
