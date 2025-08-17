import { navBarIcons } from "../constants/data";
import { navLinkIcons } from "../constants/data";
import NavLinks from "./NavLinks";
import Search from "./Search";
function Navbar() {
  return (
    <>
      <div
        id="main"
        className="bg-[#191919]  border-b-[1px] border-b-[#F4F4F5] py-7 px-[4.875rem] flex justify-between items-center "
      >
        <img src="src/assets/Myxellia-logo.svg" alt="myxellia-logo" />
        <ul className="flex items-center gap-8 ">
          {navBarIcons.map((icon, ind) => (
            <img key={ind} src={icon.iconSrc} alt={icon.iconLabel} />
          ))}
        </ul>
      </div>
      <div className=" py-3.5 px-[4.875rem] border-b-[1px] border-b-[#F4F4F5] flex items-center  gap-8">
        <ul className="flex grow items-center justify-between ">
          {navLinkIcons.map((links, ind) => (
            <NavLinks
              key={ind}
              classname={`${
                ind === 0
                  ? "text-[#191919]  font-semibold bg-[#F5F5F5] rounded-[8px] "
                  : "text-[#3D3D3D] hover:text-[#191919] hover:bg-[#F5F5F5] hover:font-semibold hover:rounded-[8px] transition-all duration-[200ms]"
              }`}
              icon={links.iconSrc}
              label={links.iconLabel}
            />
          ))}
        </ul>
        <Search />
      </div>
    </>
  );
}

export default Navbar;
