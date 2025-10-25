const ScreenLoader = ({ isLoading = false, message = "Loading..." }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm">
      <div className=" rounded-lg shadow-xl p-6 min-w-[200px] text-center">
        <div className="w-12 h-12 border-4 border-main border-t-white rounded-full animate-spin mx-auto mb-4"></div>

        <p className="text-white font-medium">{message}</p>
      </div>
    </div>
  );
};

export default ScreenLoader;
