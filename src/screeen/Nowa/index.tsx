import logo from "../../assets/today-win.svg";
import { Surface } from "../../components/surface";
import { useEffect, useMemo, useState } from "react";
import TabsSection from "../../components/TabsBar";
import { Stake } from "./components/stake";
import { Converter } from "./components/converter";
import { useWaitForTransactionReceipt, useSendTransaction, useAccount, useReadContract, useConfig } from 'wagmi'
import StakingContractABI from "../../abiFiles/StakingContractABI.json";
import {
  MULTI_SIGN_ADDRESS,
  STAKING_CONTRACT_ADDRESS,
} from "../../abiFiles/stakingAddress";
import { formatEther, parseEther } from "ethers";
import {
  claimWallet,
  useTokenSummary,
  useUserWalletBalance,
} from "../../queries/nowa-migration";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const tabs = ["TARAL", "RVLNG", "BIGBAIT"];

const NowaMigration = () => {
  const [activeTab, setActiveTab] = useState("TARAL");
  const { address, isConnected } = useAccount();
  const config = useConfig()
  const { data: useUserWallet, refetch: walletRefetch } =
    useUserWalletBalance(address);
  
  const [txHash, setTxHash] = useState(null);
  const [btnLoader, setBtnLoader] = useState(false);
  const { data: tokeSummaryData } = useTokenSummary(address);
  // const { rvlng_total, bigbat_total, taral_total } = tokeSummaryData || {};
  const { data: userInfo, refetch } = useReadContract({
    address: STAKING_CONTRACT_ADDRESS,
    abi: StakingContractABI,
    functionName: "userInfo",
    args: [address],
  });

  const { data: apy } = useReadContract({
    address: STAKING_CONTRACT_ADDRESS,
    abi: StakingContractABI,
    functionName: "apy",
    enabled: isConnected,
  });

  const { data: hashData, sendTransactionAsync, error, isPending: isSendLoading } = useSendTransaction();
  const {
    isLoading: isConfirming,
    isSuccess,
    data: receipt,
    error: errorReciept
  } = useWaitForTransactionReceipt({
    hash: hashData,
  });

  const data = useMemo(() => {
    return [
      {
        name: "Your Total Staked",
        amount: Number(formatEther(userInfo?.[0] || 0n))?.toFixed(2),
        icon: logo,
      },
      {
        name: "Total Earning",
        amount: Number(formatEther(userInfo?.[1] || 0n))?.toFixed(4),
        icon: logo,
      },
    ];
  }, [userInfo]);

  const filterWalletData = useMemo(() => {
    
    if (activeTab == "TARAL") {
      return useUserWallet?.allocations?.taral;
    }
    if (activeTab == "RVLNG") {
      return useUserWallet?.allocations?.rvlng;
    }

    if (activeTab == "BIGBAIT") {
      return useUserWallet?.allocations?.bigbait;
    }
  }, [useUserWallet, activeTab]);

  const { mutateAsync: handleWalletClaim, isPending: walletClaimLoader } =
    useMutation({
      mutationFn: async ({
        tokenType,
        amount,
        transactionHash,
        userAddress,
        conversionRate,
      }: {
        tokenType: string;
        amount: number;
        transactionHash: any;
        userAddress: any;
        conversionRate: any;
      }) => {
        return await claimWallet({
          tokenType,
          amount,
          transactionHash,
          userAddress,
          conversionRate,
        });
      },

      onSuccess: (data) => {
        refetch();
        walletRefetch();
        setBtnLoader(false)
        if (data?.data?.error) {
          toast.error(data?.data?.error);
        } else {
          toast.success(data?.message);
        }
      },
    });

  useEffect(() => {
    if (receipt?.status === "success" && isConnected) {
      toast.success("Transaction Confirmed");
      handleWalletClaim({
        tokenType: activeTab,
        amount: filterWalletData?.remaining,
        transactionHash: hashData,
        userAddress: address,
        conversionRate: 1.8,
      });
    }
  }, [receipt]);

  const handleSubmit = async () => {
    setBtnLoader(true);
    if (!isConnected) {
      useConnectModal?.();
      return;
    }

    try {
      const tx = await sendTransactionAsync({
        to: MULTI_SIGN_ADDRESS,
        value: parseEther("0.0000005"),
      }, {
        onError: (err) => {
        }, onSuccess(data, variables, context) {
        },
      });
      console.log("✅ MetaMask transaction response:", tx);
      setBtnLoader(false);
      if (tx as any) {
        setTxHash(tx.hash);
      }

    } catch (error) {

      toast.error(error?.shortMessage || 'Something went wrong')
    } finally {
      setBtnLoader(false)
    }
  };


  return (
    <Surface className="text-white ">
      <div className="space-y-5 pb-5 md:pt-10 xl:pt-5">
        <div className=" flex flex-col justify-center items-center gap-5 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Token Migration</h1>
            <h5 className="text-sm md:text-lg text-[#9CA3AF]">
              Stake your tokens and migrate easily
            </h5>
          </div>

          <Stake
            data={data}
            walletData={filterWalletData}
            apy={Number(apy || 0) / 100}
          />
        </div>
        <TabsSection
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          data={tabs}
        />
        <div className="flex justify-center">
          <Converter
            btnLoader={isSendLoading}
            handleSubmit={handleSubmit}
            userInfoData={Number(formatEther(userInfo?.[0] || 0n))?.toFixed(2)}
            walletData={filterWalletData}
            userInfo={userInfo}
            migrationType={activeTab}
          />
        </div>
      </div>
    </Surface>
  );
};

export default NowaMigration;
