interface Candle {
  time: number | string;
  open: number | string;
  high: number | string;
  low: number | string;
  close: number | string;
}

interface ProcessedChartData {
  initialData: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }[];
  realtimeUpdates: any[];
}

export const processChartData = (
  chartData: Candle[] | number[],
  updatesPerCandle: number = 5
): ProcessedChartData => {
  const formatCandle = (candle: Candle) => ({
    time:
      typeof candle.time === "string"
        ? parseFloat(candle.time) / 1000
        : candle.time / 1000,
    open:
      typeof candle.open === "string" ? parseFloat(candle.open) : candle.open,
    high:
      typeof candle.high === "string" ? parseFloat(candle.high) : candle.high,
    low: typeof candle.low === "string" ? parseFloat(candle.low) : candle.low,
    close:
      typeof candle.close === "string"
        ? parseFloat(candle.close)
        : candle.close,
  });

  if (chartData.length > 0 && (chartData[0] as Candle).hasOwnProperty("open")) {
    return {
      initialData: (chartData as Candle[]).map(formatCandle),
      realtimeUpdates: [],
    };
  }

  const date = new Date();
  const initialData: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  }[] = [];
  const realtimeUpdates: any[] = [];
  let lastCandle: {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  } | null = null;

  (chartData as number[]).forEach((value, i) => {
    const time = Math.floor(date.getTime() / 1000);
    date.setUTCDate(date.getUTCDate() + 1);
    if (i % updatesPerCandle === 0) {
      lastCandle = {
        time,
        open: value,
        high: value,
        low: value,
        close: value,
      };
      initialData.push(lastCandle);
    } else {
      if (lastCandle) {
        lastCandle = {
          time: lastCandle.time,
          open: lastCandle.open,
          high: Math.max(lastCandle.high, value),
          low: Math.min(lastCandle.low, value),
          close: value,
        };

        if ((i + 1) % updatesPerCandle === 0) {
          initialData[initialData.length - 1] = lastCandle;
        }
      }
    }
  });

  return {
    initialData,
    realtimeUpdates,
  };
};
