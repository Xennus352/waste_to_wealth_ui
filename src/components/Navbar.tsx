import { Link, useLocation, useMatch } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Building2, Contact, House, Info, LayoutGrid } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();

  const isAppRoute = useMatch("/app/*");
  const isAdminRoute = useMatch("/dashboard/*");

  const routes = [
    {
      title: "Home",
      path: "/",
      icon: <House />,
    },
    {
      title: "About",
      path: "/about",
      icon: <Info />,
    },
    {
      title: "App",
      path: "/app/feed",
      icon: <LayoutGrid />,
    },
    {
      title: "Contact Us",
      path: "/contact",
      icon: <Contact />,
    },
    {
      title: "Information",
      path: "/information",
      icon: <Building2 />,
    },
  ];

  return (
    <div
      className={`${
        pathname == "/hero" || isAppRoute || isAdminRoute
          ? "hidden"
          : "block bg-slate-400 bg-opacity-50 sticky top-0 z-40 backdrop-blur-md rounded-b-lg"
      }`}
    >
      <div>
        <div className=" font-bold text-2xl flex items-center gap-3 justify-center p-3">
          {/* <div className="flex justify-center items-center">
            <img
              src="/src/assets/titleLogo.png"
              className="object-contain text-black h-10"
              alt="Company Logo"
            />
          </div> */}

          <Typewriter
            options={{
              strings: ["Waste to Wealth"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="bg-[url('assets/menu-bg.png')] bg-cover p-3">
          <ul className=" flex items-center justify-evenly flex-wrap">
            {routes.map((route, index) => {
              return (
                <li key={index}>
                  <Link
                    className="hover:underline  tracking-wider uppercase duration-100 ease-in-out font-bold m-2 flex gap-2 items-center"
                    to={route.path}
                  >
                    {route.title} {route.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
