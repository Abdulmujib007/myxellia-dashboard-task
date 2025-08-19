interface Props {
  header: string;
  text: string;
  imgSrc: string;
}

const BudgetContentTemplate = ({ header, text, imgSrc }: Props) => {
  return (
    <div className="flex items-center gap-3 ">
      <img src={imgSrc} alt="" />
      <main className="flex flex-col gap-y-1">
        <header className="font-semibold text-[1rem] ">{header}</header>
        <span className="text-[#606060] text-[0.75rem]">{text}</span>
      </main>
    </div>
  );
};
export default BudgetContentTemplate;
