import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {



  return <>{children}</>;
};

export default ProtectedRoute;
