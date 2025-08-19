import { useClickAway } from "@uidotdev/usehooks";
import CustomCalendar from "./components/CustomCalendar";
import FooterImgTemplate from "./components/FooterImgTemplate";
import Navbar from "./components/Navbar";
import OverviewTemplate from "./components/OverviewTemplate";
import SalesOverview from "./components/SalesOverview";
import { overviewData, footerData } from "./constants/data";
import { useRef, useState } from "react";

function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const handleCalendarClick = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  const buttonRef = useRef<HTMLImageElement>(null);

  const CalendarRef = useClickAway<HTMLDivElement>((event) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node))
      return;
    setIsCalendarOpen(false);
  });

  return (
    <div className="relative overflow-hidden">
      <Navbar handleCalendarClick={handleCalendarClick} btnRef={buttonRef} />
      <div className="px-[4.875rem]">
        <header className="mt-3 mb-4 font-semibold text-xl">
          Welcome,Ahmed
        </header>
        <main className="flex gap-5">
          <SalesOverview />
          <section className="flex flex-col gap-y-6">
            {overviewData.map((data, ind) => (
              <OverviewTemplate key={ind} {...data} />
            ))}
          </section>
        </main>
        <div className="relative flex gap-x-4 mt-5 pb-[1.7rem]">
          {footerData.map((data, ind) => (
            <FooterImgTemplate key={ind} {...data} />
          ))}

          <div className="absolute bg-[#242526] rounded-full p-[1.05rem] top-[2.7rem] right-[-5px] ">
            <img src="/messages-3.svg" alt="message-icon" />
          </div>
        </div>
      </div>
      <CustomCalendar
        calendarRef={CalendarRef}
        isOpen={isCalendarOpen}
        handleClick={handleCalendarClick}
      />
    </div>
  );
}

export default App;
