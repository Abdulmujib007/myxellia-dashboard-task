import OverviewData from "./OverviewData";

interface OverviewProp {
  iconSrc: string;
  header: string;
  entryName1: string;
  entryName2: string;
  value1: string;
  value2: string;
  value3: string;
}

const OverviewTemplate = ({
  iconSrc,
  header,
  entryName1,
  entryName2,
  value1,
  value2,
  value3,
}: OverviewProp) => {
  return (
    <div className="border-[1px] border-[#E4E4E4] rounded-2xl ">
      <section className="flex gap-[10rem] items-center px-[1.125rem] py-3.5 bg-[#F9FAFB] border-b-[0.5px] border-b-[#E4E4E4] rounded-tl-2xl rounded-tr-2xl">
        <div className="flex gap-3 items-center ">
          <img src={iconSrc} alt="" />
          <span className="text-[#292929] font-medium text-[0.875rem] ">
            {header} Overview
          </span>
        </div>
        <div className=" flex gap-x-2 font-medium text-[0.75rem] text-[#4545FE] items-center ">
          <span>View all</span>
          <img src="/arrow-right.svg" alt="" />
        </div>
      </section>
      <section className="flex justify-between py-[1.125rem] px-[1rem]">
        <div className="flex gap-x-[2.5rem] ">
          <OverviewData entry="Total" value={value1} />
          <OverviewData entry={entryName1} value={value2} />
          <OverviewData entry={entryName2} value={value3} />
        </div>
      </section>
    </div>
  );
};
export default OverviewTemplate;
