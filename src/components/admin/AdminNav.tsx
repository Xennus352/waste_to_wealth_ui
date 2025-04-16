import { useNavigate } from "react-router-dom";
import {
  BookCopy,
  House,
  LetterText,
  ListOrdered,
  LogOut,
  Settings,
  Store,
  User,
  Webhook,
} from "lucide-react";
import { logoutHandle } from "../auth/Logout";

const AdminNav = () => {
  const navigate = useNavigate();

  const path = location.pathname;
  const lastSegment = path.split("/").pop();

  // routes
  const routes = [
    {
      path: "user",
      title: "User",
      icon: <User />,
    },
    {
      path: "feed",
      title: "New Feed",
      icon: <House />,
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
      title: "Handmade ",
      icon: <BookCopy />,
    },
    {
      path: "feedback",
      title: "Feedback",
      icon: <LetterText />,
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
                className={`btn btn-outline w-full mt-3 flex justify-around p-2 rounded-md hover:cursor-pointer   ${
                  lastSegment == r.path ? "bg-slate-500  text-white" : ""
                } `}
                onClick={() =>
                  navigate(`/dashboard/${r.path}`, { replace: true })
                }
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
        className="btn btn-outline w-full mt-3 flex justify-around p-2 rounded-md hover:cursor-pointer "
        onClick={() => navigate("/")}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block">
          Home
        </span>
        <Webhook />
      </div>
      {/* handle to logout  */}
      <div
        className="btn btn-outline w-full mt-3 flex justify-around p-2 rounded-md hover:cursor-pointer bg-destructive text-white"
        onClick={() => {
          logoutHandle();
        }}
      >
        <span className="hidden sm:hidden md:block lg:block xl:block ">
          Logout
        </span>{" "}
        <LogOut />
      </div>
    </div>
  );
};

export default AdminNav;
