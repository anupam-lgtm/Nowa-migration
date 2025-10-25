import { CircleCheck, CrossIcon, X } from "lucide-react";
import React from "react";
import { DynamicTooltip } from "./tooltip";

interface StylesInputProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  isValid?: any;
  leftIcon?: React.ReactNode;
  isCross?: React.ReactNode;
  setSearch?: any;
  bg?: string;
  isShowLine?: Boolean;
}

const StylesInput: React.FC<StylesInputProps> = ({
  placeholder = "",
  value,
  onChange,
  onBlur,
  isValid = true,
  leftIcon,
  isCross,
  setSearch,
  bg = "bg-background",
  isShowLine = true,
}) => {
  return (
    <div
      className={`flex justify-evenly items-center bg-background ${bg} rounded-[25px] px-5 py-5 w-full  text-secondText`}
    >
      <span className="text-xl mr-3">{leftIcon}</span>
      {isShowLine && (
        <div className="h-4 w-0.5 bg-secondText mr-1.5 md:mr-3"></div>
      )}
      <input
        type="email"
        className="flex-1 bg-transparent outline-none border-none text-white placeholder-secondText"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {/* {!isValid ? (
        <DynamicTooltip content={isValid}>
          <span
            className={`${
              value && !isValid ? "text-up" : "text-secondText"
            } text-base md:ml-3`}
          >
            <CircleCheck size={12} />
          </span>
        </DynamicTooltip>
      ) : (
        <DynamicTooltip content={isValid}>
          <span className="text-Down text-base md:ml-3">
            <CircleCheck size={12} color="red" />
          </span>
        </DynamicTooltip>
      )} */}

      {isValid && (
        <span
          className={`${
            value && !isValid ? "text-up" : "text-secondText"
          } text-base md:ml-3`}
        >
          <CircleCheck size={12} />
        </span>
      )}
      {isCross && value && (
        <span
          className={`
            text-secondText text-base md:ml-3 cursor-pointer`}
        >
          <X onClick={() => setSearch("")} size={15} />
        </span>
      )}
    </div>
  );
};

export default StylesInput;
