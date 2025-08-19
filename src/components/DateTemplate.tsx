const DateTemplate = ({
  text,
  classname,
}: {
  text: string;
  classname?: string;
}) => {
  return (
    <h5
      className={`w-[5rem] h-[2.1rem] text-[0.875rem]  flex items-center justify-center rounded-[8px] ${classname} `}
    >
      {text}
    </h5>
  );
};
export default DateTemplate;
