import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import GoogleLogin from "./auth/GoogleLogin";
import Logout from "./auth/Logout";
import { useGetCurrentUser } from "@/react-query/user/user";

const Footer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAppRoute = useMatch("/app/*");
  const isAdminRoute = useMatch("/dashboard/*");

  // current user
  const { data: user } = useGetCurrentUser();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${
        pathname == "/hero" || isAppRoute || isAdminRoute ? "hidden" : "block"
      }`}
    >
      <footer
        className="
          p-4
          bg-[#BE8D67] bg-[url('./assets/overlay-top.png')] bg-center bg-cover"
      >
        <div className="container mx-auto text-center py-4">
          <div className=" flex justify-evenly items-center gap-3">
            <Button
              className="hover:cursor-pointer"
              variant={"outline"}
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
            >
              Home
            </Button>{" "}
            <Button
              className="hover:cursor-pointer hidden md:block lg:block xl:block"
              variant={"outline"}
              onClick={() => {
                navigate("/about");
                scrollToTop();
              }}
            >
              About
            </Button>{" "}
            <Button
              className="hover:cursor-pointer"
              variant={"outline"}
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
            >
              Contact
            </Button>
            <Button
              className="hover:cursor-pointer  hidden md:block lg:block xl:block"
              variant={"outline"}
              onClick={() => {
                navigate("/information");
                scrollToTop();
              }}
            >
              Information
            </Button>
            {user ? <Logout /> : <GoogleLogin />}
          </div>
          <div>
            <h2 className="m-3 ">
              Currently Logined as : {user ? user?.name : "Guest"}
            </h2>

            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              <span className="underline"> Waste To Wealth</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
