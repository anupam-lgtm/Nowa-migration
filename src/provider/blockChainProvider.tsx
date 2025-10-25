"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc,
  bscTestnet,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Fragment } from "react";

export const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "224382cc5c46b1c10cdecbd4059dff6e",
  chains: [bsc,bscTestnet],
  ssr: true,
});

export const BlockchainWrapper = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Fragment>{children}</Fragment>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
