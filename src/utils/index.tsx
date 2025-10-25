import Decimal from "decimal.js";
import { Coin } from "coin-format";

export function parseScientific(num: string): string {
  if (!/\d+\.?\d*e[+-]*\d+/i.test(num)) {
    return num;
  }

  try {
    const decimalNum = new Decimal(num);

    const MAX_FIXED_PRECISION = 100;

    let fixedResult: string;

    if (decimalNum.isZero()) {
      return "0";
    }

    const currentExponent = decimalNum.e;

    if (currentExponent < 0) {
      const absExponent = Math.abs(currentExponent);
      const coefficientString = decimalNum.toString().split("e")[0];
      const coefficientDecimalLength = coefficientString.includes(".")
        ? coefficientString.split(".")[1].length
        : 0;

      fixedResult = decimalNum.toFixed(
        Math.max(
          absExponent + coefficientDecimalLength + 5,
          MAX_FIXED_PRECISION
        )
      );
    } else if (currentExponent >= 0 && currentExponent < MAX_FIXED_PRECISION) {
      fixedResult = decimalNum.toFixed();
    } else {
      fixedResult = decimalNum.toString();
      if (fixedResult.includes("e")) {
        fixedResult = decimalNum.toFixed(0);
      }
    }

    if (fixedResult.includes(".")) {
      fixedResult = fixedResult.replace(/\.?0+$/, "");
      if (fixedResult.endsWith(".")) {
        fixedResult = fixedResult.slice(0, -1);
      }
    }

    return fixedResult;
  } catch (error) {
    return num;
  }
}

export const formatCurrency = ({
  amount,
  currencyType = "USDT",
  decimalPlaces,
  visible = true,
  variant = "normal",
}: {
  amount: number | string;
  currencyType?: string;
  decimalPlaces?: number;
  visible?: boolean;
  variant?: "scientific" | "normal" | "fancy";
}) => {
  if (!visible) {
    return "****";
  }

  const decimalAmount = parseScientific(String(amount || 0));

  const decimalPlaceToUse =
    decimalPlaces == 0 || !decimalPlaces ? 2 : decimalPlaces;

  const formatter = Coin(
    currencyType,
    Number(decimalPlaceToUse),
    decimalPlaceToUse
  );

  const lengthAfterDecimal = String(
    formatter.formatFixedClean(decimalAmount)
  ).split(".")?.[1]?.length;

  if (variant == "scientific" && lengthAfterDecimal >= 10) {
    return `${new Decimal(
      formatter.formatFixedClean(decimalAmount) ?? 0
    ).toExponential()} ${currencyType}`;
  }

  if (variant == "fancy") {
    return formatter.formatNice(decimalAmount);
  }

  return `${formatter.formatFixedClean(decimalAmount)} ${currencyType}`;
};
