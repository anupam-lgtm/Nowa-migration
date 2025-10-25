import { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const SOCKET_URL = "https://stgsocketv2.tarality.io";

const useOHLCGraphData = ({
  symbol = "BTC",
  filterinterval = "year",
  type = "buy",
}) => {
  const [ohlcData, setOhlcData] = useState([]);
  const socketRef = useRef<null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    socketRef.current = io(SOCKET_URL, {
      transports: ["websocket"],
    });
    const socket = socketRef.current;
    socket.on("connect_error", (err) => {
      setError("Connection error: " + err.message);
      setLoading(false);
    });
    const payload = {
      symbol,
      interval: filterinterval,
      currency_type: "usdt",
      buySell: type,
    };
    socket.emit("OHLCGrapgData", payload);
    socket.on("OHLCGrapgData", (data) => {
      setOhlcData(data);
      setLoading(false);
    });
    socket.on("error", (err) => {
      setError("Error: " + err.message);
      setLoading(false);
    });
    return () => {
      socket.emit("leave", payload);
      socket.disconnect();
    };
  }, [symbol, filterinterval, type]);

  return { ohlcData, loading, error };
};

export default useOHLCGraphData;
