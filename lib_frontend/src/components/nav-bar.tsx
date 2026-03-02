import { Link } from "react-router-dom";
import DropdownMenu from "./ui/drop-down-menu";
import { BookMarked, Type, UserPlus } from "lucide-react";

const navBar = () => {
  return (
    <div className="bg-primary w-full flex flex-row px-5 h-12 items-center text-center gap-5">
      <div className="text-white">
        <Link to="/" className="font-bold text-lg ">
          <img
            src="/data/book-white.png"
            alt="Logo"
            className="h-7 inline-block"
          />
        </Link>
      </div>
      <div className="text-white">|</div>
      <div className="text-white">
        <DropdownMenu
          label="Menu"
          items={[
            { label: "Autores", route: "/autores", icon: <UserPlus /> },
            { label: "Gêneros", route: "/generos", icon: <Type /> },
            { label: "Livros", route: "/livros", icon: <BookMarked /> },
          ]}
        />
      </div>
    </div>
  );
};

export default navBar;
