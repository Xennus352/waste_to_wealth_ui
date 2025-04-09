import { Button } from "../ui/button";

const GoogleLogin = () => {
  const oAuthHandle = () => {
    window.location.href = "http://localhost:8000/auth/google";
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
        Login
      </Button>
    </>
  );
};

export default GoogleLogin;
