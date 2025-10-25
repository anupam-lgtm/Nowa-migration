import { ArrowRight, ArrowUpIcon, MoveRight } from "lucide-react";
import React from "react";

interface ErrorProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
  bgColor?: string;
  icon?: any;
}

const ModalButton: React.FC<ErrorProps> = ({
  children,
  onClick,
  bgColor,
  icon,
}) => {
  if (!children) return null;

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer whitespace-nowrap rounded-[20px] w-full ${bgColor} text-black font-normal py-2 sm:py-3 px-6  transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-sm`}
    >
      <div className="flex justify-evenly items-center">
        <div className="flex items-center justify-between w-full ">
          <p className="text-center">{children}</p>
          <div className={`${bgColor} p-2 rounded-[12px] flex items-center`}>
            <p>{icon}</p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ModalButton;
