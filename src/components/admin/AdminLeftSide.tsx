import { useGetCurrentUser } from "@/react-query/user/user";
import ProfilePic from "../../assets/recycle-sign.png";
import AdminNav from "./AdminNav";

const AdminLeftSide = () => {
  const {data:user} = useGetCurrentUser()
  return (
    <div className="sticky top-0">
      {/* user profile */}
      <div className="border-b-4 rounded-sm  border-teal-200">
        <div className="avatar w-full select-none">
          <div className="w-12 md:w-24 lg:w-24 xl:w-24 rounded-full mx-auto my-2">
            <img
              className="rounded-full"
              src={user?.ProfilePic || ProfilePic}
              alt="Profile"
            />
          </div>
        </div>
        <p
          className={`hidden sm:hidden md:block lg:block xl:block text-center uppercase tracking-widest `}
        >
          {user?.name}
        </p>
      </div>
      {/* side nav for app  */}
      <div className="mt-2 ">
        <AdminNav />
      </div>
    </div>
  );
};

export default AdminLeftSide;
