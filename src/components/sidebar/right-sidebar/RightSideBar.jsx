import React from "react";
import { Activities } from "./Activities";
import { PublicHookStat } from "./PublicHookStat";
import { TrendingHookStat } from "./TrendingHookStat";

export const RightSideBar = () => {
  const hookStat = [
    {
      hashTag: "Back-End Development",
      icon: "🗳️ ",
      iconStyle: "custom-yellow-bg",
      hooksIn5Days: "13",
      isTrending: true,
    },
    {
      hashTag: "Front-End Development",
      icon: "🖥️",
      iconStyle: "custom-red-bg",
      hooksIn5Days: "5",
      isTrending: true,
    },
    {
      hashTag: "Full-Stack Development",
      icon: "👨‍💻",
      iconStyle: "custom-blue-bg",
      hooksIn5Days: "24",
      isTrending: true,
    },
    {
      hashTag: "Machine Learning",
      icon: "🤖 ",
      iconStyle: "custom-green-bg",
      hooksIn5Days: "1",
      isTrending: false,
    },
    {
      hashTag: "Data Science",
      icon: "📊 ",
      iconStyle: "custom-red-bg",
      hooksIn5Days: "2",
      isTrending: false,
    },
    {
      hashTag: "Block-End",
      icon: "📈 ",
      iconStyle: "custom-purple-bg",
      hooksIn5Days: "3",
      isTrending: false,
    },
    {
      hashTag: "DevOps",
      icon: "📦 ",
      iconStyle: "custom-orange-bg",
      hooksIn5Days: "4",
      isTrending: false,
    },
  ];
  return (
    <div className='hidden lg:block custom-white-bg lg:col-span-2 py-4 px-8 z-10 dark:bg-gray-900'>
      {/* <section className='flex items-center justify-end mr-5 mb-16'>
        <div className='mr-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
          </svg>
        </div>

        <div className='ring-2 ring-purple-700 rounded-full h-10 w-10'>
          <img
            src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880'
            alt='profile'
            className='rounded-full h-auto w-full object-cover'
          />
        </div>
      </section> */}

      <PublicHookStat data={hookStat} />
      <Activities data={hookStat} />
      <TrendingHookStat data={hookStat} />
    </div>
  );
};
