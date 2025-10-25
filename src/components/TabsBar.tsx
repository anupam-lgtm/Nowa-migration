function TabsSection({
  data,
  activeTab,
  setActiveTab,
}: {
  data: any;
  activeTab?: string;
  setActiveTab?: any;
}) {
  return (
    <div className="cursor-pointer flex items-center justify-center bg-black">
      <div className="cursor-pointer flex w-[90%] 2xl:w-[50%] bg-neutral-900 rounded-2xl p-2 shadow-lg">
        {data.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 text-sm md:text-xl  py-3 md:py-3 rounded-xl font-semibold transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-emerald-400 cursor-pointer text-black"
                  : "bg-transparent text-gray-300 cursor-pointer hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TabsSection;
