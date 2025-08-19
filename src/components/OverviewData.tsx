function OverviewData({ entry, value }: { entry: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 w-[6.25rem] ">
      <span className="font-medium text-[#525252] text[0.875rem]">{entry}</span>
      <span className="font-semibold text-[#141414] text-2xl leading-[2.5rem]">
        {value}
      </span>
    </div>
  );
}

export default OverviewData;
