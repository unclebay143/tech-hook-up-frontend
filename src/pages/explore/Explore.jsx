import React from "react";
import { Outlet } from "react-router-dom";
import { ExploreHeader } from "./ExploreHeader";

export const Explore = () => {
  return (
    <React.Fragment>
      <section className='w-full min-h-screen h-screen overflow-scroll scrollbar-hide pb-10 border-x dark:border-gray-800 col-span-full lg:col-span-3'>
        <ExploreHeader />
        <section className='px-5'>
          <Outlet />
        </section>
      </section>
    </React.Fragment>
  );
};
