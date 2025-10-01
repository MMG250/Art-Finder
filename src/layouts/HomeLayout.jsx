import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
