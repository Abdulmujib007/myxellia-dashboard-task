function BarChartCard({
  imgSrc,
  value,
  label,
  percentage,
  color,
  classname,
}: {
  imgSrc: string;
  value: string;
  classname?: string;
  label: string;
  percentage: string;
  color: string;
}) {
  return (
    <div className="rounded-xl border-[1px] border-[#E4E4E4] w-[11.8rem] h-[5rem] flex flex-col gap-2 justify-center pl-4">
      <span
        style={{ color: color }}
        className={`font-semibold text-[1.1875rem] ${classname}`}
      >
        {value}
      </span>
      <div className="flex gap-2 items-center text-[0.625rem]">
        <span className="font-medium  text-[#3D3D3D]">{label}</span>
        <div className="flex gap-1">
          <img src={imgSrc} />
          <span className={`${classname}`}>{percentage}</span>
        </div>
      </div>
    </div>
  );
}

export default BarChartCard;
