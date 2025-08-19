import { barChartCardData } from "../constants/data";
import BarChartCard from "./BarChartCard";
import DateTemplate from "./DateTemplate";
import SalesBarChart from "./SalesBarChart";

function SalesOverview() {
  return (
    <div className=" pt-3  border-[1px] border-[#E4E4E4] rounded-2xl flex flex-col grow">
      <div className="pb-3 px-[1.4rem] border-b-[1px] border-b-[#E4E4E4] flex flex-col  gap-y-4 ">
        <div className="flex justify-between">
          <p className="flex flex-col gap-3">
            <span className="font-semibold text-xl">Sales Overview</span>
            <span className="text-[0.75rem] text-[#606060]">
              Showing overview Jan 2022 - Sep 2022
            </span>
          </p>
          <button className="text-[0.75rem] font-medium border-[1px] border-[#D6D6D6] rounded-full py-4 px-9 mt-1 ">
            View Transactions
          </button>
        </div>
        <div className="flex justify-end gap-3 text-[#3D3D3D]">
          <DateTemplate
            text="1 Week"
            classname="hover:bg-[#F5F5F5] hover:font-semibold"
          />
          <DateTemplate
            text="1 Month"
            classname="hover:bg-[#F5F5F5] hover:font-semibold"
          />
          <DateTemplate text="1 Year" classname="font-semibold bg-[#F5F5F5] " />
        </div>
      </div>
      <div className="h-full  flex justify-between pl-2.5 pr-[1.375rem] pt-4 gap-4">
        <div className="flex grow items-center w-[50%] ">
          <img src="src/assets/left-arrow.svg" alt="" />
          <SalesBarChart />
          <img src="src/assets/right-arrow.svg" alt="" />
        </div>
        <div className="w-[37.5%] max-w-[50%]  justify-end flex flex-wrap gap-x-4">
          {barChartCardData.map((data, ind) => (
            <BarChartCard
              key={ind}
              {...data}
              classname={`${
                ind === 0 || ind === 1
                  ? "text-[#12B76A]"
                  : ind === 2
                  ? "#14B8A6"
                  : "0.5%"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesOverview;
