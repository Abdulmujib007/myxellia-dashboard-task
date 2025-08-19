import Calendar from "react-calendar";
import NextLabelIcon from "./NextLabel";
import PrevLabelIcon from "./PrevLabelIcon";
import type { Ref } from "react";

function CustomCalendar({
  isOpen,
  handleClick,
  calendarRef,
}: {
  isOpen: boolean;
  handleClick: () => void;
  calendarRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={calendarRef}
      className={` w-[25rem] absolute  bg-[#0D0D0D] flex flex-col gap-5 top-[6rem] h-[calc(100vh-6rem)] ${
        isOpen ? "right-0" : " right-[-30rem] "
      }  transition-all duration-400 ease-in `}
    >
      <main className="flex justify-between items-center bg-[#171717] px-5 py-4">
        <div className="flex gap-2 items-center">
          <img src="/white-right-arrow.svg" alt="back-icon" />
          <span className="font-semibold text-[1rem] text-white">Calendar</span>
        </div>
        <img
          className="cursor-pointer"
          onClick={handleClick}
          src="/cancel.svg"
          alt="close-icon"
        />
      </main>
      <Calendar
        calendarType="gregory"
        className={
          "bg-[#0D0D0D] flex flex-col items-center gap-y-[1.7rem] font-semibold text-[#969696] text-[0.5rem]  outline-none uppercase  calendarDiv px-6  "
        }
        next2Label={null}
        prev2Label={null}
        nextLabel={<NextLabelIcon className="cursor-pointer" />}
        prevLabel={<PrevLabelIcon className="cursor-pointer" />}
        tileClassName={({ date, view }: { date: Date; view: string }) =>
          view === "month" && date.getDate() === new Date().getDate()
            ? " tiles"
            : date.getDate() > -1
            ? "flex grow  h-[6rem] w-[3.125rem] border-[0.47px] border-[#242424] pt-[0.3rem] pl-[0.3rem]  font-medium  text-[0.625rem]"
            : view === "month" && date.getDate() === 1
            ? "first-day"
            : null
        }
        tileContent={({ date, view }) =>
          view === "month" && date.getDate() === new Date().getDate() ? (
            <p className="text-white py-[2px] px-[8px] bg-[#2525E6] rounded-[10px] ">
              {new Date().getDate()}
            </p>
          ) : null
        }
        showFixedNumberOfWeeks={true}
      />
    </div>
  );
}

export default CustomCalendar;
