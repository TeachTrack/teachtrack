import React from "react";
import { Navigate } from "react-router-dom";
import { useGetUser } from "../../react-query/hooks/hooks";

interface PrivateRouteProps {
  children: React.ReactNode;
  roles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, roles }) => {
  const { data: user } = useGetUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (!roles.includes(user.role)) {
    return <Navigate to="/not-access" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
