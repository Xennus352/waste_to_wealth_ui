import { Button } from "../ui/button";

const GoogleLogin = () => {
  const oAuthHandle = () => {
    window.location.href =
      "https://waste-to-wealth-server.vercel.app/auth/google";
  };
  return (
    <>
      <Button
        className="hover:cursor-pointer"
        variant={"outline"}
        onClick={() => {
          oAuthHandle();
        }}
      >
        Google Login
      </Button>
    </>
  );
};

export default GoogleLogin;
