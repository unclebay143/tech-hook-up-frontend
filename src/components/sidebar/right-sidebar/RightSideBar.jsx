import React, { useEffect, useState } from "react";
import { Activities } from "./Activities";
import { TopHookCategory } from "./TopHookCategory";
import { TrendingHookStat } from "./TrendingHookStat";

export const RightSideBar = () => {
  const [hookStat, setHookStat] = useState(null);
  const [isFetchingHookStat, setIsFetchingHookStat] = useState(true);

  const hookStatSample = [
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

  useEffect(() => {
    setTimeout(() => {
      setHookStat(hookStatSample);
      setIsFetchingHookStat(false);
    }, 3000);
  }, []);

  return (
    <div className='z-10 hidden px-8 py-4 lg:block custom-white-bg lg:col-span-2 dark:bg-gray-900'>
      <TopHookCategory
        data={hookStat}
        isFetchingHookStat={isFetchingHookStat}
      />
      <Activities data={hookStat} isFetchingHookStat={isFetchingHookStat} />
      <TrendingHookStat
        data={hookStat}
        isFetchingHookStat={isFetchingHookStat}
      />
    </div>
  );
};
