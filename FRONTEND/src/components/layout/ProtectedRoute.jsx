import React from "react";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

import { ReactNode } from "react";


const ProtectedRoute = ({ children }) => {
  const token = useAppSelector(useCurrentToken);
  const user = useAppSelector(selectCurrentUser);

  if (!token) {
    return <Navigate to={`/login`} replace={true} />;
  }

  if (user?.role === "gamer") {
    return children;
  } else return <Navigate to={`/`} replace={true} />;
};

export default ProtectedRoute;
