import NavBar from "@/components/nav-bar.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Home;
