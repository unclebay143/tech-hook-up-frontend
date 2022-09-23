import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserContext from "../../helper/context/user-context/userContext";
import UserService, { getToken } from "../../helper/service/user.service";
import { LeftSideBar } from "../sidebar/left-sidebar/LeftSideBar";
import { RightSideBar } from "../sidebar/right-sidebar/RightSideBar";
import Header from "./header";

export const FeedLayout = () => {
  const { user, loadUserProfile } = useContext(UserContext);
  const { accessToken } = getToken();

  useEffect(() => {
    if (accessToken) {
      // Load user profile
      UserService.loadProfileByJWT()
        .then((response) => {
          loadUserProfile(response);
        })
        .catch((error) => console.log(error));
    } else {
      window.location.href = "login";
    }
  });

  return (
    <React.Fragment>
      <Header />
      <div className='grid mx-auto lg:grid-cols-8 '>
        <section className='grid col-span-6 lg:grid-cols-4 2xl:grid-cols-4'>
          <LeftSideBar />
          <Outlet />
        </section>

        <RightSideBar />
      </div>
    </React.Fragment>
  );
};
