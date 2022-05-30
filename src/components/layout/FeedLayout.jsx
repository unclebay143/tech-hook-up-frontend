import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSideBar } from "../sidebar/left-sidebar/LeftSideBar";
import { RightSideBar } from "../sidebar/right-sidebar/RightSideBar";
import Header from "./header";

export const FeedLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <div className='grid lg:grid-cols-8 h-screen mx-auto '>
        <section className='grid lg:grid-cols-4 2xl:grid-cols-4 col-span-6'>
          <LeftSideBar />
          <Outlet />
        </section>

        <RightSideBar />
      </div>
    </React.Fragment>
  );
};
