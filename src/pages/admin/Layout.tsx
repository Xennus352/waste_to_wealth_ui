import AdminLeftSide from "@/components/admin/AdminLeftSide";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-full">
        <div className=" col-span-2 border-r-2 p-2 sticky top-0">
          <AdminLeftSide />
        </div>

        {/* data from nested routes  */}
        <div className="col-span-10 p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
