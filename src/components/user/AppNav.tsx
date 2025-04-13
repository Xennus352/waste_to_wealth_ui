import { useLocation, useNavigate } from "react-router-dom";
import {
  BookCopy,
  BookMarked,
  House,
  ListOrdered,
  LogOut,
  ScanSearch,
  Settings,
  Store,
  Webhook,
} from "lucide-react";
import { logoutHandle } from "../auth/Logout";

const AppNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname;
  const lastSegment = path.split("/").pop();

  // routes
  const routes = [
    {
      path: "feed",
      title: "New Feed",
      icon: <House />,
    },
    {
      path: "search",
      title: "Search",
      icon: <ScanSearch />,
    },
    {
      path: "market",
      title: "Market",
      icon: <Store />,
    },
    {
      path: "order",
      title: "Order",
      icon: <ListOrdered />,
    },
    {
      path: "hand-made-guide",
      title: "Handmade",
      icon: <BookCopy />,
    },
    {
      path: "save",
      title: "Saved",
      icon: <BookMarked />,
    },
    {
      path: "setting",
      title: "Profile",
      icon: <Settings />,
    },
  ];
  return (
    <div>
      {/* buttons  */}
      <div>
        {/* create route button  */}
        {routes.map((r, index) => {
          return (
            <div key={index}>
              <div
                className={`hover:cursor-pointer w-full mt-3 relative flex justify-around p-2 rounded-md  ${
                  lastSegment == r.path ? "bg-slate-500 text-white" : ""
                } `}
                onClick={() => navigate(`/app/${r.path}`, { replace: true })}
              >
                <span className="hidden sm:hidden md:block lg:block xl:block">
                  {r.title}
                </span>
                {r.icon}
              </div>
            </div>
          );
        })}
      </div>
      {/* handle to go to web  */}
      <div
        className="hover:cursor-pointer w-full mt-3 flex justify-around p-2 rounded-md"
        onClick={() => navigate("/")}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block">
          Home
        </span>{" "}
        <Webhook />
      </div>
      {/* handle to logout  */}
      <div
        className="hover:cursor-pointer w-full mt-3 flex justify-around p-2 rounded-md  bg-destructive text-white"
        onClick={() => {logoutHandle()}}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block">
          Logout
        </span>{" "}
        <LogOut />
      </div>
    </div>
  );
};

export default AppNav;
