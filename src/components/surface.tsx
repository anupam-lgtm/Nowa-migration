interface SurfaceProps {
  children: any;
  className?: string;
  maxWidth?: string;
}

export const Surface = ({
  children,
  className = "",
  maxWidth = "",
}: SurfaceProps) => {
  return (
    <div
      className={`bg-card  flex justify-center min-h-screen w-full items-center pt-20 ${className}`}
    >
      <div className={`w-full ${maxWidth}`}>{children}</div>
    </div>
  );
};
