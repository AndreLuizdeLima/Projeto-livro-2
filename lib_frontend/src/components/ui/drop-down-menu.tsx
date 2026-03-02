import { Link } from "react-router-dom";

interface DropdownItem {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

export default function DropdownMenu({ label, items }: DropdownMenuProps) {
  return (
    <div className="relative group inline-block">
      <div className="bg-primary text-white px-4 py-2 cursor-pointer select-none">
        {label}
      </div>
      <div
        className="absolute left-0 top-full bg-white shadow-lg rounded-md min-w-[180px] 
                      opacity-0 invisible translate-y-1
                      group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                      transition-all duration-200 z-50 border border-primary "
      >
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className="px-4 py-2 text-primary hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2 text-sm"
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
