import {
  ArrowRight,
  ArrowUpIcon,
  Loader,
  Loader2,
  MoveRight,
} from "lucide-react";
import React from "react";
import { applyOpacity } from "../utils/opacity";

interface ErrorProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
  isRightArr?: any;
  btnLoader?: boolean;
  disable?: boolean;
}

const Button: React.FC<ErrorProps> = ({
  children,
  onClick,
  isRightArr = false,
  btnLoader = false,
  disable = false,
}) => {
  if (!children) return null;

  return (
    <button
      onClick={onClick}
      disabled={disable}
      className="cursor-pointer rounded-[16px] w-full bg-main  text-black font-medium py-2 sm:py-4 px-4  transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
    >
      <div className="flex justify-evenly items-center">
        <div className="flex items-center justify-between w-full gap-4">
          <p className="flex-shrink-0"></p>

          <div className="flex justify-center items-center w-full">
            {!btnLoader && <p className="flex-1 text-center">{children}</p>}
            {btnLoader && <Loader />}
          </div>
          {isRightArr && (
            <div
              style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
              className="p-2 rounded-[12px] flex items-center"
            >
              <ArrowRight color="black" />
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default Button;
