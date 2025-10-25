// import React, { useState, useEffect } from "react";
// import ReactApexChart from "react-apexcharts";
// import dayjs from "dayjs";
// import useOHLCGraphData from "../../../hooks/chartData";

// const ApexChart: React.FC = () => {
//   const chartData = useOHLCGraphData({
//     symbol: "BTC",
//     filterinterval: "year",
//     type: "buy",
//   });

//   console.log(
//     chartData,
//     "ChartData coming from backend>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
//   );
//   const [chartWidth, setChartWidth] = useState("100%");
//   const [chartHeight, setChartHeight] = useState(600);
//   const [timeRange, setTimeRange] = useState<string>("All");

//   const handleTimeRangeChange = (range: string) => {
//     setTimeRange(range);
//     console.log(`Time range ${range}>>>>>>>`);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setChartWidth("100%");
//         setChartHeight(400);
//       } else if (window.innerWidth < 1200) {
//         setChartWidth("100%");
//         setChartHeight(500);
//       } else {
//         setChartWidth("100%");
//         setChartHeight(600);
//       }
//     };
//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const [state, setState] = useState({
//     series: [
//       {
//         name: "candle",
//         // data: chartData,
//         data: [
//           {
//             x: new Date(1538778600000),
//             y: [6629.81, 6650.5, 6623.04, 6633.33],
//           },
//           {
//             x: new Date(1538780400000),
//             y: [6632.01, 6643.59, 6620, 6630.11],
//           },
//           {
//             x: new Date(1538782200000),
//             y: [6630.71, 6648.95, 6623.34, 6635.65],
//           },
//           {
//             x: new Date(1538784000000),
//             y: [6635.65, 6651, 6629.67, 6638.24],
//           },
//           {
//             x: new Date(1538785800000),
//             y: [6638.24, 6640, 6620, 6624.47],
//           },
//           {
//             x: new Date(1538787600000),
//             y: [6624.53, 6636.03, 6621.68, 6624.31],
//           },
//           {
//             x: new Date(1538789400000),
//             y: [6624.61, 6632.2, 6617, 6626.02],
//           },
//           {
//             x: new Date(1538791200000),
//             y: [6627, 6627.62, 6584.22, 6603.02],
//           },
//           {
//             x: new Date(1538793000000),
//             y: [6605, 6608.03, 6598.95, 6604.01],
//           },
//           {
//             x: new Date(1538794800000),
//             y: [6604.5, 6614.4, 6602.26, 6608.02],
//           },
//           {
//             x: new Date(1538796600000),
//             y: [6608.02, 6610.68, 6601.99, 6608.91],
//           },
//           {
//             x: new Date(1538798400000),
//             y: [6608.91, 6618.99, 6608.01, 6612],
//           },
//           {
//             x: new Date(1538800200000),
//             y: [6612, 6615.13, 6605.09, 6612],
//           },
//           {
//             x: new Date(1538802000000),
//             y: [6612, 6624.12, 6608.43, 6622.95],
//           },
//           {
//             x: new Date(1538803800000),
//             y: [6623.91, 6623.91, 6615, 6615.67],
//           },
//           {
//             x: new Date(1538805600000),
//             y: [6618.69, 6618.74, 6610, 6610.4],
//           },
//           {
//             x: new Date(1538807400000),
//             y: [6611, 6622.78, 6610.4, 6614.9],
//           },
//           {
//             x: new Date(1538809200000),
//             y: [6614.9, 6626.2, 6613.33, 6623.45],
//           },
//           {
//             x: new Date(1538811000000),
//             y: [6623.48, 6627, 6618.38, 6620.35],
//           },
//           {
//             x: new Date(1538812800000),
//             y: [6619.43, 6620.35, 6610.05, 6615.53],
//           },
//           {
//             x: new Date(1538814600000),
//             y: [6615.53, 6617.93, 6610, 6615.19],
//           },
//           {
//             x: new Date(1538816400000),
//             y: [6615.19, 6621.6, 6608.2, 6620],
//           },
//           {
//             x: new Date(1538818200000),
//             y: [6619.54, 6625.17, 6614.15, 6620],
//           },
//           {
//             x: new Date(1538820000000),
//             y: [6620.33, 6634.15, 6617.24, 6624.61],
//           },
//           {
//             x: new Date(1538821800000),
//             y: [6625.95, 6626, 6611.66, 6617.58],
//           },
//           {
//             x: new Date(1538823600000),
//             y: [6619, 6625.97, 6595.27, 6598.86],
//           },
//           {
//             x: new Date(1538825400000),
//             y: [6598.86, 6598.88, 6570, 6587.16],
//           },
//           {
//             x: new Date(1538827200000),
//             y: [6588.86, 6600, 6580, 6593.4],
//           },
//           {
//             x: new Date(1538829000000),
//             y: [6593.99, 6598.89, 6585, 6587.81],
//           },
//           {
//             x: new Date(1538830800000),
//             y: [6587.81, 6592.73, 6567.14, 6578],
//           },
//           {
//             x: new Date(1538832600000),
//             y: [6578.35, 6581.72, 6567.39, 6579],
//           },
//           {
//             x: new Date(1538834400000),
//             y: [6579.38, 6580.92, 6566.77, 6575.96],
//           },
//           {
//             x: new Date(1538836200000),
//             y: [6575.96, 6589, 6571.77, 6588.92],
//           },
//           {
//             x: new Date(1538838000000),
//             y: [6588.92, 6594, 6577.55, 6589.22],
//           },
//           {
//             x: new Date(1538839800000),
//             y: [6589.3, 6598.89, 6589.1, 6596.08],
//           },
//           {
//             x: new Date(1538841600000),
//             y: [6597.5, 6600, 6588.39, 6596.25],
//           },
//           {
//             x: new Date(1538843400000),
//             y: [6598.03, 6600, 6588.73, 6595.97],
//           },
//           {
//             x: new Date(1538845200000),
//             y: [6595.97, 6602.01, 6588.17, 6602],
//           },
//           {
//             x: new Date(1538847000000),
//             y: [6602, 6607, 6596.51, 6599.95],
//           },
//           {
//             x: new Date(1538848800000),
//             y: [6600.63, 6601.21, 6590.39, 6591.02],
//           },
//           {
//             x: new Date(1538850600000),
//             y: [6591.02, 6603.08, 6591, 6591],
//           },
//           {
//             x: new Date(1538852400000),
//             y: [6591, 6601.32, 6585, 6592],
//           },
//           {
//             x: new Date(1538854200000),
//             y: [6593.13, 6596.01, 6590, 6593.34],
//           },
//           {
//             x: new Date(1538856000000),
//             y: [6593.34, 6604.76, 6582.63, 6593.86],
//           },
//           {
//             x: new Date(1538857800000),
//             y: [6593.86, 6604.28, 6586.57, 6600.01],
//           },
//           {
//             x: new Date(1538859600000),
//             y: [6601.81, 6603.21, 6592.78, 6596.25],
//           },
//           {
//             x: new Date(1538861400000),
//             y: [6596.25, 6604.2, 6590, 6602.99],
//           },
//           {
//             x: new Date(1538863200000),
//             y: [6602.99, 6606, 6584.99, 6587.81],
//           },
//           {
//             x: new Date(1538865000000),
//             y: [6587.81, 6595, 6583.27, 6591.96],
//           },
//           {
//             x: new Date(1538866800000),
//             y: [6591.97, 6596.07, 6585, 6588.39],
//           },
//           {
//             x: new Date(1538868600000),
//             y: [6587.6, 6598.21, 6587.6, 6594.27],
//           },
//           {
//             x: new Date(1538870400000),
//             y: [6596.44, 6601, 6590, 6596.55],
//           },
//           {
//             x: new Date(1538872200000),
//             y: [6598.91, 6605, 6596.61, 6600.02],
//           },
//           {
//             x: new Date(1538874000000),
//             y: [6600.55, 6605, 6589.14, 6593.01],
//           },
//           {
//             x: new Date(1538875800000),
//             y: [6593.15, 6605, 6592, 6603.06],
//           },
//           {
//             x: new Date(1538877600000),
//             y: [6603.07, 6604.5, 6599.09, 6603.89],
//           },
//           {
//             x: new Date(1538879400000),
//             y: [6604.44, 6604.44, 6600, 6603.5],
//           },
//           {
//             x: new Date(1538881200000),
//             y: [6603.5, 6603.99, 6597.5, 6603.86],
//           },
//           {
//             x: new Date(1538883000000),
//             y: [6603.85, 6605, 6600, 6604.07],
//           },
//           {
//             x: new Date(1538884800000),
//             y: [6604.98, 6606, 6604.07, 6606],
//           },
//         ],
//       },
//     ],
//     options: {
//       chart: {
//         type: "candlestick",
//         animations: {
//           enabled: false,
//         },
//         toolbar: {
//           show: false,
//           tools: {
//             download: true,
//             selection: true,
//             zoom: true,
//             zoomin: true,
//             zoomout: true,
//             pan: true,
//             reset: true,
//           },
//           autoSelected: "zoom",
//         },
//       },
//       grid: {
//         show: false,
//       },
//       // xaxis: {
//       //   axisBorder: {
//       //     show: false,
//       //   },
//       //   axisTicks: {
//       //     show: false,
//       //   },
//       // },
//       // yaxis: {
//       //   axisBorder: {
//       //     show: false,
//       //   },
//       //   axisTicks: {
//       //     show: false,
//       //   },
//       // },
//       title: {
//         text: "",
//         align: "left",
//         style: {
//           fontSize: "16px",
//           fontWeight: "500",
//           color: "white",
//         },
//       },
//       annotations: {
//         xaxis: [
//           {
//             x: "Oct 06 14:00",
//             borderColor: "#00E396",
//             label: {
//               borderColor: "#00E396",
//               style: {
//                 fontSize: "12px",
//                 color: "#fff",
//                 background: "#00E396",
//               },
//               orientation: "horizontal",
//               offsetY: 7,
//               text: "Annotation Test",
//             },
//           },
//         ],
//       },
//       tooltip: {
//         enabled: true,
//         shared: false,
//         intersect: false,
//         style: {
//           fontSize: "12px",
//         },
//       },
//       xaxis: {
//         type: "category",
//         labels: {
//           formatter: function (val: string) {
//             // return dayjs(val).format("MMM DD HH:mm");
//             // return ""
//           },
//           style: {
//             fontSize: "12px",
//           },
//           rotate: 0,
//           hideOverlappingLabels: false,
//           trim: true,
//         },
//         tooltip: {
//           enabled: false,
//         },
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true,
//         },
//         labels: {
//           formatter: function (val: number) {
//             return val.toFixed(2);
//           },
//           style: {
//             fontSize: "12px",
//           },
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 1200,
//           options: {
//             chart: {
//               height: 500,
//             },
//             title: {
//               style: {
//                 fontSize: "14px",
//               },
//             },
//             xaxis: {
//               labels: {
//                 rotate: -45,
//               },
//             },
//           },
//         },
//         {
//           breakpoint: 768,
//           options: {
//             chart: {
//               height: 400,
//             },
//             title: {
//               style: {
//                 fontSize: "12px",
//               },
//             },
//             xaxis: {
//               labels: {
//                 rotate: -45,
//                 style: {
//                   fontSize: "10px",
//                 },
//               },
//             },
//             yaxis: {
//               labels: {
//                 style: {
//                   fontSize: "10px",
//                 },
//               },
//             },
//           },
//         },
//       ],
//     },
//   });

//   useEffect(() => {
//     if (chartData) {
//       setState((prevState) => ({
//         ...prevState,
//         series: {
//           ...prevState.series,
//           data: chartData,
//         },
//       }));
//     }
//   }, [chartData]);

//   console.log(state.series?.data,"shdfkfsd")

//   return (
//     <div style={{ width: "100%", overflow: "hidden" }}>
//       <div className="flex justify-between space-x-2 mb-4">
//         <p className="text-white text-2xl">Bitcoin Price Chart</p>
//         <div className="space-x-2">
//           {["1D", "5D", "1M", "5Y", "All"].map((range) => (
//             <button
//               key={range}
//               onClick={() => handleTimeRangeChange(range)}
//               className={`cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors ${
//                 timeRange === range
//                   ? "bg-[#343c42] text-white"
//                   : "bg-[#1d2429] text-[#343c42] hover:bg-gray-300"
//               }`}
//             >
//               {range}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Chart container */}
//       <div id="chart" style={{ width: chartWidth }}>
//         <ReactApexChart
//           options={state.options}
//           series={state.series}
//           type="candlestick"
//           height={chartHeight}
//           width={chartWidth}
//         />
//       </div>
//     </div>
//   );
// };

// export default ApexChart;

// import React, { useState } from "react";
// import { AgCharts } from "ag-charts-react";
// import "ag-charts-enterprise";

// const ChartExample = () => {
//   const [timeRange, setTimeRange] = useState("All");
//   const allData = getData();

//   const filterData = (range: any) => {
//     const now = new Date();
//     let cutoffDate = new Date();

//     switch (range) {
//       case "1D":
//         cutoffDate.setDate(now.getDate() - 1);
//         break;
//       case "5D":
//         cutoffDate.setDate(now.getDate() - 5);
//         break;
//       case "1M":
//         cutoffDate.setMonth(now.getMonth() - 1);
//         break;
//       case "All":
//       default:
//         return allData;
//     }

//     return allData.filter((item) => new Date(item.date) >= cutoffDate);
//   };
//   const [options, setOptions] = useState({
//     background: {
//       fill: "#101829",
//     },
//     // axes: [
//     //   {
//     //     type: "category",
//     //     position: "bottom",
//     //     gridLine: {
//     //       enabled: false,
//     //     },
//     //   },
//     //   {
//     //     type: "number",
//     //     position: "right",
//     //     gridLine: {
//     //       enabled: false,
//     //     },
//     //   },
//     // ],
//     data: getData(),
//     title: {
//       text: "Bitcoin",
//       color: "#fff",
//       fontSize: 25,
//     },
//     subtitle: {
//       text: "Daily High and Low Prices",
//       color: "#fff",
//     },
//     footnote: {
//       text: "1 Aug 2023 - 1 Nov 2023",
//       color: "#fff",
//     },
//     series: [
//       {
//         type: "candlestick",
//         xKey: "date",
//         xName: "Date",
//         lowKey: "low",
//         highKey: "high",
//         openKey: "open",
//         closeKey: "close",
//       },
//     ],
//   });

//   const handleTimeRangeChange = (range) => {
//     setTimeRange(range);
//     const filteredData = filterData(range);
//     setOptions((prev) => ({
//       ...prev,
//       data: filteredData,
//       footnote: {
//         text: `${filteredData[0]?.date} - ${
//           filteredData[filteredData.length - 1]?.date
//         }`,
//       },
//     }));
//   };
//   return (
//     <div style={{ width: "100%" }}>
//       <div
//         style={{
//           marginBottom: "10px",
//           display: "flex",
//           gap: "8px",
//           justifyContent: "flex-end",
//         }}
//       >
//         {["1D", "5D", "1M", "All"].map((range) => (
//           <div
//             key={range}
//             onClick={() => handleTimeRangeChange(range)}
//             style={{
//               padding: "5px 10px",
//               color: timeRange === range ? "white" : "gray",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             {range}
//           </div>
//         ))}
//       </div>
//       <AgCharts options={options} style={{ height: "700px", width: "100%" }} />
//     </div>
//   );
// };
// export default ChartExample;

// function getData() {
//   return [
//     {
//       date: new Date("Monday, July 31, 2023"),
//       open: 4584.82,
//       high: 4594.22,
//       low: 4573.14,
//       close: 4588.96,
//       volume: 2411537985000,
//     },
//     {
//       date: new Date("Tuesday, August 01, 2023"),
//       open: 4578.83,
//       high: 4584.62,
//       low: 4567.53,
//       close: 4576.73,
//       volume: 2172699881000,
//     },
//     {
//       date: new Date("Wednesday, August 02, 2023"),
//       open: 4550.93,
//       high: 4550.93,
//       low: 4505.75,
//       close: 4513.39,
//       volume: 2466207896000,
//     },
//     {
//       date: new Date("Thursday, August 03, 2023"),
//       open: 4494.27,
//       high: 4519.49,
//       low: 4485.54,
//       close: 4501.89,
//       volume: 2351421483000,
//     },
//     {
//       date: new Date("Friday, August 04, 2023"),
//       open: 4513.96,
//       high: 4540.34,
//       low: 4474.55,
//       close: 4478.03,
//       volume: 2386696495000,
//     },
//     {
//       date: new Date("Monday, August 07, 2023"),
//       open: 4491.58,
//       high: 4519.84,
//       low: 4491.15,
//       close: 4518.44,
//       volume: 2055431221000,
//     },
//     {
//       date: new Date("Tuesday, August 08, 2023"),
//       open: 4498.03,
//       high: 4503.31,
//       low: 4464.39,
//       close: 4499.38,
//       volume: 2172253124000,
//     },
//     {
//       date: new Date("Wednesday, August 09, 2023"),
//       open: 4501.57,
//       high: 4502.44,
//       low: 4461.33,
//       close: 4467.71,
//       volume: 2046722089000,
//     },
//     {
//       date: new Date("Thursday, August 10, 2023"),
//       open: 4487.16,
//       high: 4527.37,
//       low: 4457.92,
//       close: 4468.83,
//       volume: 2111185396000,
//     },
//     {
//       date: new Date("Friday, August 11, 2023"),
//       open: 4450.69,
//       high: 4476.23,
//       low: 4443.98,
//       close: 4464.05,
//       volume: 1850766477000,
//     },
//     {
//       date: new Date("Monday, August 14, 2023"),
//       open: 4458.13,
//       high: 4490.33,
//       low: 4453.44,
//       close: 4489.72,
//       volume: 1955913253000,
//     },
//     {
//       date: new Date("Tuesday, August 15, 2023"),
//       open: 4478.87,
//       high: 4478.87,
//       low: 4432.19,
//       close: 4437.86,
//       volume: 1977157506000,
//     },
//     {
//       date: new Date("Wednesday, August 16, 2023"),
//       open: 4433.79,
//       high: 4449.95,
//       low: 4403.55,
//       close: 4404.33,
//       volume: 2001143711000,
//     },
//     {
//       date: new Date("Thursday, August 17, 2023"),
//       open: 4416.32,
//       high: 4421.17,
//       low: 4364.83,
//       close: 4370.36,
//       volume: 2216839469000,
//     },
//     {
//       date: new Date("Friday, August 18, 2023"),
//       open: 4344.88,
//       high: 4381.82,
//       low: 4335.31,
//       close: 4369.71,
//       volume: 2157858548000,
//     },
//     {
//       date: new Date("Monday, August 21, 2023"),
//       open: 4380.28,
//       high: 4407.55,
//       low: 4360.3,
//       close: 4399.77,
//       volume: 2057592847000,
//     },
//     {
//       date: new Date("Tuesday, August 22, 2023"),
//       open: 4415.33,
//       high: 4418.59,
//       low: 4382.77,
//       close: 4387.55,
//       volume: 1905849406000,
//     },
//     {
//       date: new Date("Wednesday, August 23, 2023"),
//       open: 4396.44,
//       high: 4443.18,
//       low: 4396.44,
//       close: 4436.01,
//       volume: 2013748142000,
//     },
//     {
//       date: new Date("Thursday, August 24, 2023"),
//       open: 4455.16,
//       high: 4458.3,
//       low: 4375.55,
//       close: 4376.31,
//       volume: 2077193771000,
//     },
//     {
//       date: new Date("Friday, August 25, 2023"),
//       open: 4389.38,
//       high: 4418.46,
//       low: 4356.29,
//       close: 4405.71,
//       volume: 1959845124000,
//     },

//     {
//       date: new Date("Monday, August 28, 2023"),
//       open: 4426.03,
//       high: 4439.56,
//       low: 4414.98,
//       close: 4433.31,
//       volume: 1669881577000,
//     },
//     {
//       date: new Date("Tuesday, August 29, 2023"),
//       open: 4432.75,
//       high: 4500.14,
//       low: 4431.68,
//       close: 4497.63,
//       volume: 1936663046000,
//     },
//     {
//       date: new Date("Wednesday, August 30, 2023"),
//       open: 4500.34,
//       high: 4521.65,
//       low: 4493.59,
//       close: 4514.87,
//       volume: 1827645178000,
//     },

//     {
//       date: new Date("Thursday, August 31, 2023"),
//       open: 4517.01,
//       high: 4532.26,
//       low: 4507.39,
//       close: 4507.66,
//       volume: 2352361081000,
//     },

//     {
//       date: new Date("Friday, September 01, 2023"),
//       open: 4530.6,
//       high: 4541.25,
//       low: 4501.35,
//       close: 4515.77,
//       volume: 1958155311000,
//     },
//     {
//       date: new Date("Tuesday, September 05, 2023"),
//       open: 4510.06,
//       high: 4514.29,
//       low: 4496.01,
//       close: 4496.83,
//       volume: 2128341430000,
//     },
//     {
//       date: new Date("Wednesday, September 06, 2023"),
//       open: 4490.35,
//       high: 4490.35,
//       low: 4442.38,
//       close: 4465.48,
//       volume: 2138052710000,
//     },
//     {
//       date: new Date("Thursday, September 07, 2023"),
//       open: 4434.55,
//       high: 4457.81,
//       low: 4430.46,
//       close: 4451.14,
//       volume: 2441134922000,
//     },
//     {
//       date: new Date("Friday, September 08, 2023"),
//       open: 4451.3,
//       high: 4473.53,
//       low: 4448.38,
//       close: 4457.49,
//       volume: 2076441612000,
//     },
//     {
//       date: new Date("Monday, September 11, 2023"),
//       open: 4480.98,
//       high: 4490.77,
//       low: 4467.89,
//       close: 4487.46,
//       volume: 2165432434000,
//     },
//     {
//       date: new Date("Tuesday, September 12, 2023"),
//       open: 4473.27,
//       high: 4487.11,
//       low: 4456.83,
//       close: 4461.9,
//       volume: 2184137855000,
//     },
//     {
//       date: new Date("Wednesday, September 13, 2023"),
//       open: 4462.65,
//       high: 4479.39,
//       low: 4453.52,
//       close: 4467.44,
//       volume: 2268926200000,
//     },
//     {
//       date: new Date("Thursday, September 14, 2023"),
//       open: 4487.78,
//       high: 4511.99,
//       low: 4478.69,
//       close: 4505.1,
//       volume: 2275484003000,
//     },
//     {
//       date: new Date("Friday, September 15, 2023"),
//       open: 4497.98,
//       high: 4497.98,
//       low: 4447.21,
//       close: 4450.32,
//       volume: 4244973105000,
//     },
//     {
//       date: new Date("Monday, September 18, 2023"),
//       open: 4445.13,
//       high: 4466.36,
//       low: 4442.11,
//       close: 4453.53,
//       volume: 1932361461000,
//     },
//     {
//       date: new Date("Tuesday, September 19, 2023"),
//       open: 4445.41,
//       high: 4449.85,
//       low: 4416.61,
//       close: 4443.95,
//       volume: 2018270144000,
//     },
//     {
//       date: new Date("Wednesday, September 20, 2023"),
//       open: 4452.81,
//       high: 4461.03,
//       low: 4401.38,
//       close: 4402.2,
//       volume: 1976745837000,
//     },

//     {
//       date: new Date("Thursday, September 21, 2023"),
//       open: 4374.36,
//       high: 4375.7,
//       low: 4329.17,
//       close: 4330.0,
//       volume: 2298552282000,
//     },
//     {
//       date: new Date("Friday, September 22, 2023"),
//       open: 4341.74,
//       high: 4357.4,
//       low: 4316.49,
//       close: 4320.06,
//       volume: 2135953365000,
//     },
//     {
//       date: new Date("Monday, September 25, 2023"),
//       open: 4310.62,
//       high: 4338.51,
//       low: 4302.7,
//       close: 4337.44,
//       volume: 1858119044000,
//     },
//     {
//       date: new Date("Tuesday, September 26, 2023"),
//       open: 4312.88,
//       high: 4313.01,
//       low: 4265.98,
//       close: 4273.53,
//       volume: 2129442202000,
//     },
//     {
//       date: new Date("Wednesday, September 27, 2023"),
//       open: 4282.63,
//       high: 4292.07,
//       low: 4238.63,
//       close: 4274.51,
//       volume: 2299297267000,
//     },
//     {
//       date: new Date("Thursday, September 28, 2023"),
//       open: 4269.65,
//       high: 4317.27,
//       low: 4264.38,
//       close: 4299.7,
//       volume: 2235764324000,
//     },
//     {
//       date: new Date("Friday, September 29, 2023"),
//       open: 4328.18,
//       high: 4333.15,
//       low: 4274.86,
//       close: 4288.05,
//       volume: 2411036284000,
//     },
//     {
//       date: new Date("Monday, October 02, 2023"),
//       open: 4284.52,
//       high: 4300.58,
//       low: 4260.21,
//       close: 4288.39,
//       volume: 2419266832000,
//     },
//     {
//       date: new Date("Tuesday, October 03, 2023"),
//       open: 4269.75,
//       high: 4281.15,
//       low: 4216.45,
//       close: 4229.45,
//       volume: 2430973527000,
//     },
//     {
//       date: new Date("Wednesday, October 04, 2023"),
//       open: 4233.83,
//       high: 4268.5,
//       low: 4220.48,
//       close: 4263.75,
//       volume: 2329779403000,
//     },
//     {
//       date: new Date("Thursday, October 05, 2023"),
//       open: 4259.31,
//       high: 4267.13,
//       low: 4225.91,
//       close: 4258.19,
//       volume: 2230253462000,
//     },
//     {
//       date: new Date("Friday, October 06, 2023"),
//       open: 4234.79,
//       high: 4324.1,
//       low: 4219.55,
//       close: 4308.5,
//       volume: 2493423103000,
//     },
//     {
//       date: new Date("Monday, October 09, 2023"),
//       open: 4289.02,
//       high: 4341.73,
//       low: 4283.79,
//       close: 4335.66,
//       volume: 1991524626000,
//     },
//     {
//       date: new Date("Tuesday, October 10, 2023"),
//       open: 4339.75,
//       high: 4385.46,
//       low: 4339.64,
//       close: 4358.24,
//       volume: 2160880932000,
//     },
//     {
//       date: new Date("Wednesday, October 11, 2023"),
//       open: 4366.59,
//       high: 4378.64,
//       low: 4345.34,
//       close: 4376.95,
//       volume: 2115648071000,
//     },
//     {
//       date: new Date("Thursday, October 12, 2023"),
//       open: 4380.94,
//       high: 4385.85,
//       low: 4325.43,
//       close: 4349.61,
//       volume: 2344769422000,
//     },
//     {
//       date: new Date("Friday, October 13, 2023"),
//       open: 4360.49,
//       high: 4377.1,
//       low: 4311.97,
//       close: 4327.78,
//       volume: 2302663368000,
//     },
//     {
//       date: new Date("Monday, October 16, 2023"),
//       open: 4342.37,
//       high: 4383.33,
//       low: 4342.37,
//       close: 4373.63,
//       volume: 2124400350000,
//     },
//     {
//       date: new Date("Tuesday, October 17, 2023"),
//       open: 4345.23,
//       high: 4393.57,
//       low: 4337.54,
//       close: 4373.2,
//       volume: 2355659575000,
//     },
//     {
//       date: new Date("Wednesday, October 18, 2023"),
//       open: 4357.35,
//       high: 4364.2,
//       low: 4303.84,
//       close: 4314.6,
//       volume: 2390659124000,
//     },
//     {
//       date: new Date("Thursday, October 19, 2023"),
//       open: 4321.36,
//       high: 4339.54,
//       low: 4269.69,
//       close: 4278.0,
//       volume: 2635705086000,
//     },
//     {
//       date: new Date("Friday, October 20, 2023"),
//       open: 4273.85,
//       high: 4276.56,
//       low: 4223.03,
//       close: 4224.16,
//       volume: 2734219191000,
//     },
//     {
//       date: new Date("Monday, October 23, 2023"),
//       open: 4210.4,
//       high: 4255.84,
//       low: 4189.22,
//       close: 4217.04,
//       volume: 2454581997000,
//     },
//     {
//       date: new Date("Tuesday, October 24, 2023"),
//       open: 4235.79,
//       high: 4259.38,
//       low: 4219.43,
//       close: 4247.68,
//       volume: 2472963274000,
//     },
//     {
//       date: new Date("Wednesday, October 25, 2023"),
//       open: 4232.42,
//       high: 4232.42,
//       low: 4181.42,
//       close: 4186.77,
//       volume: 2665565303000,
//     },
//     {
//       date: new Date("Thursday, October 26, 2023"),
//       open: 4175.99,
//       high: 4183.6,
//       low: 4127.9,
//       close: 4137.23,
//       volume: 2959734415000,
//     },
//     {
//       date: new Date("Friday, October 27, 2023"),
//       open: 4152.93,
//       high: 4156.7,
//       low: 4103.78,
//       close: 4117.37,
//       volume: 2784710672000,
//     },
//     {
//       date: new Date("Monday, October 30, 2023"),
//       open: 4139.39,
//       high: 4177.47,
//       low: 4132.94,
//       close: 4166.82,
//       volume: 2600517109000,
//     },
//     {
//       date: new Date("Tuesday, October 31, 2023"),
//       open: 4171.33,
//       high: 4195.55,
//       low: 4153.12,
//       close: 4193.8,
//       volume: 2701786725000,
//     },
//     {
//       date: new Date("Wednesday, November 01, 2023"),
//       open: 4201.27,
//       high: 4245.64,
//       low: 4197.74,
//       close: 4237.86,
//       volume: 2804876425000,
//     },
//   ];
// }

import React, { useEffect, useRef, useState } from "react";
import {
  createChart,
  CandlestickSeries,
  createImageWatermark,
} from "lightweight-charts";

const label = [
  { value: "hour", label: "1H" },
  { value: "day", label: "1D" },
  { value: "week", label: "1W" },
  { value: "month", label: "1M" },
  { value: "year", label: "1Y" },
  { value: "all", label: "All" },
];
interface LightweightChartsRealtimeProps {
  activePeriod: string;
  loading: boolean;
  symbol: any;
  setActivePeriod: (period: string) => void;
  chartData:
    | Array<{
        time: number | string;
        open: number | string;
        high: number | string;
        low: number | string;
        close: number | string;
      }>
    | number[];
}

const LightweightChartsRealtime: React.FC<LightweightChartsRealtimeProps> = ({
  activePeriod,
  setActivePeriod,
  chartData,
  loading,
  symbol,
}) => {
  const chartContainerRef = useRef<null>(null);
  const chartRef = useRef<null>(null);
  const seriesRef = useRef<null>(null);
  const streamingDataProviderRef = useRef<null>(null);
  const intervalRef = useRef<null>(null);
  const formatCandleData = (data: any) => {
    return data.map(
      (candle: {
        time: string | number;
        open: string;
        high: string;
        low: string;
        close: string;
      }) => ({
        time:
          typeof candle.time === "string"
            ? parseFloat(candle.time) / 1000
            : candle.time / 1000,
        open:
          typeof candle.open === "string"
            ? parseFloat(candle.open)
            : candle.open,
        high:
          typeof candle.high === "string"
            ? parseFloat(candle.high)
            : candle.high,
        low:
          typeof candle.low === "string" ? parseFloat(candle.low) : candle.low,
        close:
          typeof candle.close === "string"
            ? parseFloat(candle.close)
            : candle.close,
      })
    );
  };

  function* getNextRealtimeUpdate(realtimeData: any) {
    for (const dataPoint of realtimeData) {
      yield dataPoint;
    }
    return null;
  }

  const handleScrollToRealtime = () => {
    if (chartRef.current) {
      chartRef.current.timeScale().scrollToRealTime();
    }
  };

  const handleTimePeriodChange = (period) => {
    setActivePeriod(period);
  };

  useEffect(() => {
    if (!chartData || chartData.length === 0 || !chartContainerRef.current)
      return;

    const chartOptions = {
      layout: {
        textColor: "rgba(255, 255, 255, 0.9)",
        background: {
          type: "solid",
          color: "#161D26",
        },
      },
      grid: {
        vertLines: {
          color: "rgba(197, 203, 206, 0.1)",
        },
        horzLines: {
          color: "rgba(197, 203, 206, 0.1)",
        },
      },
      height: 400,
    };

    chartRef.current = createChart(chartContainerRef.current, chartOptions);
    const watermark = chartContainerRef.current?.querySelector("a");
    if (watermark) {
      watermark.style.display = "none";
    }

    seriesRef.current = chartRef.current.addSeries(CandlestickSeries, {
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const formattedData = formatCandleData(chartData);
    seriesRef.current?.setData(formattedData);
    chartRef.current?.timeScale().fitContent();
    chartRef.current?.timeScale().scrollToPosition(5);

    streamingDataProviderRef.current = getNextRealtimeUpdate([]);

    const handleResize = () => {
      chartRef.current?.applyOptions({
        height: chartContainerRef.current?.clientHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [chartData]);

  return (
    <div className="flex flex-col h-full justify-between gap-20  bg-background rounded-[20px] ">
      <div className=" rounded-[20px] flex flex-col md:flex-row justify-between gap-2 py-4 px-3 bg-background">
        <button
          className="
           text-[12px] font-medium  tracking-tight 
            py-1.5 px-4 text-secondText bg-subcard rounded-[12px] cursor-pointer
            transition-all duration-200 ease-in-out
            
          "
          onClick={handleScrollToRealtime}
        >
          {symbol.name}
        </button>
        <div className="flex flex-wrap gap-2">
          {label.map((period) => (
            <button
              key={period}
              className={`
                font-sans text-base font-medium  tracking-tight 
                 px-4 py-1  bg-gray-900 rounded-[13px] cursor-pointer
                transition-all duration-200 ease-in-out
                ${
                  activePeriod === period.value
                    ? "bg-main  text-black"
                    : "hover:bg-gray-800 text-secondText border boder-secondText"
                }
              `}
              onClick={() => handleTimePeriodChange(period.value)}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>
      {!loading && <div ref={chartContainerRef} className="flex-1 relative" />}
      {loading && (
        <div className="flex justify-center items-center min-h-[463px] w-full ">
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg
              className="w-16 h-16 animate-spin text-white"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
export default LightweightChartsRealtime;
