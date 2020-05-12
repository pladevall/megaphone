import React, { FC } from "react";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import PasswordReset from "./PasswordReset";
import { Router } from "@reach/router";

const Application: FC = () => {
  const user = null;
  return user ? (
    <ProfilePage />
  ) : (
    <Router>
      <Home path="/" />
      <SignUp path="signUp" />
      <SignIn path="/signIn" />
      <PasswordReset path="passwordReset" />
    </Router>
  );
};
export default Application;
