import React from "react";

interface ErrorProps {
  className?: string;
  children?: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({
  className = "text-Down text-[12px]",
  children,
}) => {
  if (!children) return null;

  return <span className={className}>{children}</span>;
};

export default Error;
