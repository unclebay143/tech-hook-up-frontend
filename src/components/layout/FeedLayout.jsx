import React from "react";
import { Outlet } from "react-router-dom";
import { LeftSideBar } from "../sidebar/left-sidebar/LeftSideBar";
import { RightSideBar } from "../sidebar/right-sidebar/RightSideBar";
import Header from "./header";

export const FeedLayout = () => {
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
