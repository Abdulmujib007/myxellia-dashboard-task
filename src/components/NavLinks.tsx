interface NavProps {
  label: string;
  icon: string;
  classname?: string;
}

const NavLinks = ({ label, icon, classname }: NavProps) => {
  return (
    <div
      className={`flex gap-2 w-[10.625rem] h-[2.375rem] text-[0.875rem] items-center  justify-center ${classname} `}
    >
      <img src={icon} alt={`${label}-icon`} />
      <span>{label}</span>
    </div>
  );
};
export default NavLinks;
