import React from "react";
import { useAppContext } from "../Context/DataRackContext.js";
import LoginPage from "../Pages/LoginPage.js";

const Authentication = ({ children }) => {
  const { user } = useAppContext();
  if (user) {
    return children;
  } else {
    return <LoginPage />;
  }
};

export default Authentication;
