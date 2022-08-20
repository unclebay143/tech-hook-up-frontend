import React from "react";
import { TrendingTagsListWidget } from "../../widgets/tags-widgets/trending-tags-list-widget/TrendingTagsListWidget";
import LeftSidebarFooter from "./LeftSidebarFooter";
import LeftSideBarLinks from "./LeftSidebarLinks";
import leftSidebarLinks from "./left-sidebar-links";

export const LeftSideBar = () => {
  return (
    <aside className='hidden lg:block pl-7 custom-white-bg dark:bg-gray-900'>
      <nav className='mt-5 xl:px-7'>
        <section className='pt-5'>
          <ul>
            {leftSidebarLinks.map(({ label, to, icon }) => {
              return <LeftSideBarLinks icon={icon} label={label} to={to} />;
            })}
          </ul>
        </section>
      </nav>
      <section className='xl:px-7'>
        <TrendingTagsListWidget />
        <LeftSidebarFooter />
      </section>
    </aside>
  );
};
