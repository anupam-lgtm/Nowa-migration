import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

export const useUserWalletBalance = (address: any) => {
  return useQuery({
    queryKey: ["getUserWalletBalance", address],
    queryFn: () => getUserWalletBalance(address),
    select: (data: { data: { success: number; result: any } }) => {
      if (data) {
        return data?.data;
      }
      return null;
    },
  });
};
export const getUserWalletBalance = async (address: any) => {
  try {
    const response = await api({
      url: `wallet/allocations`,
      method: "GET",
      params: {
        address,
      },
    });

    return response;
  } catch (error: any) {
    console.log(error, "error ");

    return error?.response;
  }
};

export const claimWallet = async (data?: any) => {
  try {
    const response = await api({
      url: "wallet/claim",
      method: "POST",
      data,
    });
    return response;
  } catch (error: any) {
    console.log(error, "error in account creation");
    return error?.response;
  }
};

export const useTokenSummary = (address: any) => {
  return useQuery({
    queryKey: ["getUserToken", address],
    queryFn: () => getUserTokenSummary(address),
    select: (data: { data: { success: number; result: any } }) => {
      if (data) {
        return data;
      }
      return null;
    },
  });
};
export const getUserTokenSummary = async (address: any) => {
  try {
    const response = await api({
      url: `wallet/tokensumary`,
      method: "GET",
      params: {
        address,
      },
    });

    return response;
  } catch (error: any) {
    console.log(error, "error ");

    return error?.response;
  }
};
