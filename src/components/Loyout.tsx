import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar/Siderbar";
import Navbar from "./Navbar/Navbar";


const Layout = () => {
  return (
    <div className="flex h-screen px-10 bg-bgcolor">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
