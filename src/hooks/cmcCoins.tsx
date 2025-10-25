"use client";
import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";

const useCoinListSocket = (searchText = "") => {
  const [coinList, setCoinList] = useState([]);
  const [loading, setLoading] = useState(true);

  const socket_url = "https://stgsocketv2.tarality.io";
  useEffect(() => {
    const socket = io(socket_url);

    socket.on("cmc_updated", (data) => {
      setCoinList(data);
      setLoading(false);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const filteredCoins = useMemo(() => {
    if (!searchText) return coinList;

    const searchLower = searchText.toLowerCase();
    return coinList.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchLower) ||
        coin.symbol.toLowerCase().includes(searchLower)
    );
  }, [coinList, searchText]);

  return {
    coinList: filteredCoins,
    loading,
    allCoins: coinList,
  };
};

export default useCoinListSocket;
