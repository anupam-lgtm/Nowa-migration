export const Header = ({ text }) => {
  return (
    <div className=" text-center mb-8 sm:mb-12 px-4">
      <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-800 transform rotate-45"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {text}
        </h1>
      </div>
    </div>
  );
};
