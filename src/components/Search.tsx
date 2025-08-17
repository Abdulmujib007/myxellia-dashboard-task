export default function Search() {
  return (
    <div className="w-[20rem] h-[2.7rem] px-3.5 border-[1px] border-[#E4E4E4] bg-[#F5F5F5] font-light rounded-xl flex items-center">
      <img src="src/assets/search.svg" alt="search-icon" />
      <input
        className="ml-2 text-[0.75rem] outline-none w-[9.5rem]  "
        type="text"
        placeholder="Search listings, user here...."
      />
    </div>
  );
}
