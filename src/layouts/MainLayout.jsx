import { Outlet, useLocation } from "react-router-dom";

import DynamicPageTitle from "../components/DynamicPageTitle";
import Sidebar from "../components/Sidebar";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/login",
    name: "Admin Login",
  },
];

const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="">
      {location.pathname !== "/login" && location.pathname !== "/" && <Sidebar routes={routes} />}
      {/* <Sidebar routes={routes} /> */}
      <DynamicPageTitle />
      {/* Jika children (konten yang diteruskan ke MainLayout) ada, maka konten tersebut akan dirender. Jika tidak ada, maka <Outlet /> akan digunakan untuk merender child route yang sesuai dengan URL saat ini. */}
      {children ? children : <Outlet />}
    </div>
  );
};

export default MainLayout;
