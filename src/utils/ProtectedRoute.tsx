import { useGetCurrentUser } from "@/react-query/user/user";
import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import Loading from "./Loading";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { data: user, isLoading, isError, error } = useGetCurrentUser();
  const [hasNotified, setHasNotified] = useState(false);

  useEffect(() => {
    if (isLoading && !hasNotified) {
      toast.warning("Loading... Please wait!");
      setHasNotified(true);
    }

    if (!isLoading && !user && !hasNotified) {
      toast.error("Please login first");
      setHasNotified(true);
    }
  }, [isLoading, user, hasNotified]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError || error) {
    toast.error("Please login first!!");
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
