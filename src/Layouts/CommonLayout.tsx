import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HomeNavbar from "../components/navbars/HomeNavbar";

const CommonLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HomeNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default CommonLayout;
