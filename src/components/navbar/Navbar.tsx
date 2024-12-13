import Image from "next/image";
import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="w-full px-4 py-1">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        {/* Left side content */}
        <div className="flex flex-wrap gap-4 md:gap-6 items-center">
          {/* Date Info */}
          <NavItem
            icon="/assets/images/calendar-nav-orange.svg"
            label="Fecha Actual"
            value="Miércoles, 23 de octubre 2024"
            borderRight={true}
          />
          <NavItem
            icon="/assets/images/calendar-nav-gray.svg"
            label="Fecha Contable"
            value="Miércoles, 23 de octubre 2024"
            borderRight={true}

          />
          {/* Branch Info */}
          <NavItem
            icon="/assets/images/branch.svg"
            label="Sucursal"
            value="Matriz Otavalo"
            valueClassName="text-xl"
            borderRight={false}

          />
        </div>

        {/* Right side content */}
        <div className="flex items-center gap-4">
          <Image
            width={40}
            height={40}
            alt="Notifications"
            className="w-8 h-8 md:w-10 md:h-10"
            src="/assets/images/bell-badge.svg"
          />
          <NavItem
            icon="/assets/images/computer-icon.svg"
            label="Terminal"
            value="172.29.243.129"
            borderRight={false}

          />
        </div>
      </div>
    </nav>
  );
};

// NavItem component for reusable nav elements
interface NavItemProps {
  icon: string;
  label: string;
  value: string;
  valueClassName?: string;
  borderRight: boolean
}

const NavItem = ({ icon, label, value, valueClassName = "text-[11px]", borderRight }: NavItemProps) => (
  <div className={`flex items-center ${borderRight== true ? 'b-right-nav': ''}`}>
    <Image
      width={40}
      height={40}
      alt="icon-nav"
      className="w-8 h-8 md:w-10 md:h-10 me-3"
      src={icon}
    />
    <div className="me-6">
      <label className="font-normal text-gray-light-custom text-[11px] block">
        {label}
      </label>
      <p className={`${valueClassName} text-gray-custom font-medium`}>
        {value}
      </p>
    </div>
  </div>
);
