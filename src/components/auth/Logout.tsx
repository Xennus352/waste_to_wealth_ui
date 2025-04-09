import axios from "@/axios.config";
import { Button } from "../ui/button";

export const logoutHandle = () => {
  axios
    .post("http://localhost:8000/auth/logout")
    .then(() => {
      console.log("Logged out successfully");
      window.location.href = "/";
    })
    .catch((error) => {
      console.error("Error during logout:", error);
    });
};
const Logout = () => {
  return (
    <>
      {" "}
      <Button
        className="hover:cursor-pointer"
        variant={"outline"}
        onClick={() => {
          logoutHandle();
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default Logout;
